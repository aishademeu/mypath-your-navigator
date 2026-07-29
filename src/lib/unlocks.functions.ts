import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { OPPORTUNITIES } from "@/lib/opportunities";
import { UNLOCK_PRICE_KZT, type ApplicationPlan } from "@/lib/unlock-plan";

const SYSTEM_PROMPT =
  "You are the AI assistant for MyPath, a platform helping students in Kazakhstan find and apply to olympiads, internships, summer schools, and grants. You receive a student profile and a selected opportunity. Generate a personal application plan. Respond ONLY as JSON, no explanation, no markdown, with fields: assessment, checklist, tips, essay_tips. Be specific and concrete, not generic. Write in the language of the student's profile.";

function parsePlan(text: string): ApplicationPlan {
  const cleaned = text.trim().replace(/^```(?:json)?/i, "").replace(/```$/, "").trim();
  const start = cleaned.indexOf("{");
  const end = cleaned.lastIndexOf("}");
  const raw = start >= 0 && end > start ? cleaned.slice(start, end + 1) : cleaned;
  const parsed = JSON.parse(raw) as Partial<ApplicationPlan>;
  const arr = (v: unknown) => (Array.isArray(v) ? v.map((x) => String(x)) : []);
  return {
    assessment: typeof parsed.assessment === "string" ? parsed.assessment : "",
    checklist: arr(parsed.checklist),
    tips: arr(parsed.tips),
    essay_tips: arr(parsed.essay_tips),
  };
}

export const unlockApplicationPlan = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: { opportunityId: string; lang?: string; matchScore?: number }) => {
    if (!data || typeof data.opportunityId !== "string" || !data.opportunityId) {
      throw new Error("opportunityId is required");
    }
    return {
      opportunityId: data.opportunityId,
      lang: typeof data.lang === "string" ? data.lang : "en",
      matchScore: typeof data.matchScore === "number" ? data.matchScore : undefined,
    };
  })
  .handler(async ({ data, context }) => {
    const opp = OPPORTUNITIES.find((o) => o.id === data.opportunityId);
    if (!opp) throw new Error("Unknown opportunity");

    // Already unlocked (and generated)? Return the saved plan — never charge twice.
    const { data: existing } = await context.supabase
      .from("opportunity_unlocks")
      .select("plan")
      .eq("user_id", context.userId)
      .eq("opportunity_id", opp.id)
      .maybeSingle();
    if (existing?.plan) return existing.plan as ApplicationPlan;

    const apiKey = process.env.LOVABLE_API_KEY;
    if (!apiKey) throw new Error("AI is not configured");

    const [{ data: profile }, { data: onboarding }] = await Promise.all([
      context.supabase
        .from("profiles")
        .select("name, age, grade, country, about, curious_about, world_change, preferred_lang")
        .eq("id", context.userId)
        .maybeSingle(),
      context.supabase
        .from("onboarding")
        .select("interests, strengths, problems, goals, dream, experience_level")
        .eq("user_id", context.userId)
        .maybeSingle(),
    ]);

    const langName = { en: "English", ru: "Russian", kk: "Kazakh" }[
      (profile?.preferred_lang as string) || data.lang
    ] ?? "English";

    const userPrompt = [
      `STUDENT PROFILE (write the whole answer in ${langName}):`,
      JSON.stringify(
        {
          name: profile?.name ?? null,
          age: profile?.age ?? null,
          grade: profile?.grade ?? null,
          country: profile?.country ?? "Kazakhstan",
          about: profile?.about ?? null,
          curious_about: profile?.curious_about ?? null,
          world_change: profile?.world_change ?? null,
          interests: onboarding?.interests ?? [],
          strengths: onboarding?.strengths ?? [],
          problems_they_care_about: onboarding?.problems ?? [],
          goals: onboarding?.goals ?? [],
          dream: onboarding?.dream ?? null,
          experience_level: onboarding?.experience_level ?? null,
        },
        null,
        2,
      ),
      "",
      "SELECTED OPPORTUNITY:",
      JSON.stringify(
        {
          title: opp.title,
          organization: opp.org,
          category: opp.category,
          description: opp.description,
          deadline: opp.deadline,
          requirements: opp.requirements,
          eligibility: {
            minAge: opp.minAge ?? null,
            maxAge: opp.maxAge ?? null,
            minGrade: opp.minGrade ?? null,
            maxGrade: opp.maxGrade ?? null,
            countries: opp.countries ?? "worldwide",
            cost: opp.cost ?? null,
          },
          fields: opp.fields,
        },
        null,
        2,
      ),
      "",
      data.matchScore != null ? `MyPath match score for this student: ${data.matchScore}%.` : "",
      `Today is ${new Date().toISOString().slice(0, 10)}; time checklist steps relative to the deadline.`,
      "checklist: 4-6 concrete steps and documents with rough timing. tips: 2-3 specific ways to strengthen this application. essay_tips: points to emphasize in the motivation letter, or [] if no essay is required.",
    ]
      .filter(Boolean)
      .join("\n");

    const { generateText } = await import("ai");
    const { createLovableAiGatewayProvider } = await import("@/lib/ai-gateway.server");
    const gateway = createLovableAiGatewayProvider(apiKey);

    const result = await generateText({
      model: gateway("google/gemini-3.6-flash"),
      prompt: `${SYSTEM_PROMPT}\n\n${userPrompt}`,
    });

    let plan: ApplicationPlan;
    try {
      plan = parsePlan(result.text);
    } catch {
      throw new Error("The AI response could not be read. Please try again.");
    }

    const { error } = await context.supabase.from("opportunity_unlocks").upsert(
      {
        user_id: context.userId,
        opportunity_id: opp.id,
        price_kzt: UNLOCK_PRICE_KZT,
        plan,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "user_id,opportunity_id" },
    );
    if (error) throw new Error(error.message);

    return plan;
  });
