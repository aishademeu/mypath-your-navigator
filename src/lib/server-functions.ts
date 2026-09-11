import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { runAdaptiveDiscoveryTurn, generateCareerHypotheses, type InterviewTurn } from "./discovery.server";
import { computePrimaryNextAction } from "./mypath-engine.server";
import { generateMentorResponse, type MentorMessage } from "./mentor.server";
import { polishPortfolioItem } from "./portfolio-assistant.server";
import { ingestTelegramPost, archiveExpiredOpportunities, type RawTelegramPost } from "./telegram.server";
import { createStripeCheckoutSession, submitManualPayment, verifyManualPayment } from "./billing.server";

/**
 * 1. Adaptive Discovery Server Function
 */
export const discoveryTurnFn = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((d: { history: InterviewTurn[]; lang?: string }) => d)
  .handler(async ({ context, data }) => {
    const userId = context.userId;

    // Fetch user profile and onboarding data
    const [profileRes, onboardingRes] = await Promise.all([
      (supabaseAdmin as any).from("profiles").select("*").eq("id", userId).maybeSingle(),
      (supabaseAdmin as any).from("onboarding").select("*").eq("user_id", userId).maybeSingle(),
    ]);

    const studentCtx = {
      name: profileRes.data?.name,
      age: profileRes.data?.age,
      grade: profileRes.data?.grade,
      country: profileRes.data?.country,
      city: profileRes.data?.city,
      school: profileRes.data?.school,
      mini_bio: profileRes.data?.mini_bio,
      language: data.lang || profileRes.data?.language || "en",
      interests: onboardingRes.data?.interests || [],
      strengths: onboardingRes.data?.strengths || [],
      problems: onboardingRes.data?.problems || [],
      goals: onboardingRes.data?.goals || [],
      dream: onboardingRes.data?.dream,
      experience_level: onboardingRes.data?.experience_level,
    };

    const result = await runAdaptiveDiscoveryTurn(studentCtx, data.history, data.lang || "en");

    // If done, persist the hypotheses to the career_hypotheses table
    if (result.done && result.hypotheses && result.hypotheses.length > 0) {
      // Archive older active hypotheses
      await (supabaseAdmin as any)
        .from("career_hypotheses")
        .update({ status: "archived", updated_at: new Date().toISOString() })
        .eq("user_id", userId)
        .eq("status", "active");

      // Insert new hypotheses
      const rows = result.hypotheses.map((h) => ({
        user_id: userId,
        direction_name: h.direction_name,
        why_it_appeared: h.why_it_appeared,
        evidence: h.evidence,
        relevant_strengths: h.relevant_strengths,
        relevant_interests: h.relevant_interests,
        unknowns: h.unknowns,
        skills_to_explore: h.skills_to_explore,
        next_experiment: h.next_experiment,
        status: "active",
        version: 1,
      }));

      await (supabaseAdmin as any).from("career_hypotheses").insert(rows);
    }

    return result;
  });

/**
 * 2. My Path Engine Next Action Server Function
 */
export const getMyPathActionFn = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((d: { lang?: string }) => d)
  .handler(async ({ context, data }) => {
    const userId = context.userId;

    const [profileRes, onboardingRes, hypothesesRes, portfolioRes, savedRes, actionsRes] = await Promise.all([
      (supabaseAdmin as any).from("profiles").select("*").eq("id", userId).maybeSingle(),
      (supabaseAdmin as any).from("onboarding").select("*").eq("user_id", userId).maybeSingle(),
      (supabaseAdmin as any).from("career_hypotheses").select("*").eq("user_id", userId).eq("status", "active"),
      (supabaseAdmin as any).from("portfolio_items").select("title, section").eq("user_id", userId),
      (supabaseAdmin as any).from("saved_opportunities").select("opportunity_id").eq("user_id", userId),
      (supabaseAdmin as any).from("my_path_actions").select("*").eq("user_id", userId).order("created_at", { ascending: false }),
    ]);

    const activeHypotheses = hypothesesRes.data || [];
    const completedActionCount = (actionsRes.data || []).filter((a: any) => a.status === "completed").length;

    // Check if there is already an active incomplete action created in the last 7 days
    const currentAction = (actionsRes.data || []).find((a: any) => a.status === "active");
    if (currentAction) {
      return {
        action: currentAction.action,
        why_it_matters: currentAction.why_it_matters,
        expected_outcome: currentAction.expected_outcome,
        supporting_recommendation: currentAction.supporting_recommendation,
        id: currentAction.id,
      };
    }

    const studentCtx = {
      name: profileRes.data?.name,
      age: profileRes.data?.age,
      grade: profileRes.data?.grade,
      country: profileRes.data?.country,
      city: profileRes.data?.city,
      mini_bio: profileRes.data?.mini_bio,
      interests: onboardingRes.data?.interests || [],
      strengths: onboardingRes.data?.strengths || [],
      problems: onboardingRes.data?.problems || [],
      goals: onboardingRes.data?.goals || [],
      dream: onboardingRes.data?.dream,
    };

    const nextAction = await computePrimaryNextAction({
      student: studentCtx,
      hypotheses: activeHypotheses,
      completedActionCount,
      portfolioItemsCount: (portfolioRes.data || []).length,
      savedOpportunities: [],
      lang: data.lang || profileRes.data?.language || "en",
    });

    // Save into database as the current active action
    const { data: inserted } = await (supabaseAdmin as any)
      .from("my_path_actions")
      .insert({
        user_id: userId,
        action: nextAction.action,
        why_it_matters: nextAction.why_it_matters,
        expected_outcome: nextAction.expected_outcome,
        supporting_recommendation: nextAction.supporting_recommendation || null,
        status: "active",
      })
      .select("id")
      .single();

    return {
      ...nextAction,
      id: inserted?.id,
    };
  });

/**
 * 3. AI Mentor Message Server Function
 */
export const mentorChatFn = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((d: { message: string; lang?: string }) => d)
  .handler(async ({ context, data }) => {
    const userId = context.userId;

    // Save user's message to chat_messages first
    await (supabaseAdmin as any).from("chat_messages").insert({
      user_id: userId,
      role: "user",
      content: data.message,
    });

    // Retrieve context for mentor
    const [profileRes, onboardingRes, hypothesesRes, portfolioRes, recentChatRes] = await Promise.all([
      (supabaseAdmin as any).from("profiles").select("*").eq("id", userId).maybeSingle(),
      (supabaseAdmin as any).from("onboarding").select("*").eq("user_id", userId).maybeSingle(),
      (supabaseAdmin as any).from("career_hypotheses").select("*").eq("user_id", userId).eq("status", "active"),
      (supabaseAdmin as any).from("portfolio_items").select("title, section").eq("user_id", userId),
      (supabaseAdmin as any).from("chat_messages").select("role, content").eq("user_id", userId).order("created_at", { ascending: false }).limit(8),
    ]);

    const studentCtx = {
      name: profileRes.data?.name,
      age: profileRes.data?.age,
      grade: profileRes.data?.grade,
      country: profileRes.data?.country,
      city: profileRes.data?.city,
      school: profileRes.data?.school,
      mini_bio: profileRes.data?.mini_bio,
      interests: onboardingRes.data?.interests || [],
      strengths: onboardingRes.data?.strengths || [],
      problems: onboardingRes.data?.problems || [],
      goals: onboardingRes.data?.goals || [],
      dream: onboardingRes.data?.dream,
    };

    // Messages in chronological order
    const history: MentorMessage[] = (recentChatRes.data || [])
      .reverse()
      .map((c: any) => ({ role: c.role as any, content: c.content }));

    const portfolioSummary = (portfolioRes.data || []).map((p: any) => `${p.section}: ${p.title}`);

    const reply = await generateMentorResponse({
      student: studentCtx,
      hypotheses: hypothesesRes.data || [],
      portfolioSummary,
      conversationHistory: history,
      lang: data.lang || profileRes.data?.language || "en",
    });

    // Save mentor's reply to chat_messages
    await (supabaseAdmin as any).from("chat_messages").insert({
      user_id: userId,
      role: "assistant",
      content: reply,
    });

    return { reply };
  });

/**
 * 4. Portfolio AI Assistant Server Function
 */
export const polishPortfolioFn = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((d: { title: string; section: string; rawDescription: string; lang?: string }) => d)
  .handler(async ({ data }) => {
    return await polishPortfolioItem({
      title: data.title,
      section: data.section,
      rawDescription: data.rawDescription,
      lang: data.lang || "en",
    });
  });

/**
 * 5. Parent Account: Link Student via Invite Code
 */
export const linkStudentFn = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((d: { inviteCode?: string; studentEmail?: string }) => d)
  .handler(async ({ context, data }) => {
    const parentId = context.userId;

    if (data.inviteCode) {
      // Find matching pending invite code
      const { data: link, error } = await (supabaseAdmin as any)
        .from("parent_student_links")
        .select("*")
        .eq("invite_code", data.inviteCode.trim().toUpperCase())
        .maybeSingle();

      if (error || !link) {
        return { success: false, error: "Invalid invite code" };
      }

      await (supabaseAdmin as any)
        .from("parent_student_links")
        .update({ parent_id: parentId, status: "approved", updated_at: new Date().toISOString() })
        .eq("id", link.id);

      return { success: true, studentId: link.student_id };
    }

    return { success: false, error: "Please provide a valid code" };
  });

/**
 * 6. Student Account: Generate Parent Invite Code
 */
export const generateParentInviteFn = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const studentId = context.userId;
    const code = "MP-" + Math.random().toString(36).substring(2, 8).toUpperCase();

    await (supabaseAdmin as any).from("parent_student_links").insert({
      student_id: studentId,
      parent_id: studentId, // Temporary until claimed
      invite_code: code,
      status: "pending",
    });

    return { inviteCode: code };
  });

/**
 * 7. Admin Server Function: Moderate Opportunity
 */
export const moderateOpportunityFn = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((d: { id: string; status: "approved" | "rejected" | "expired"; verified?: boolean }) => d)
  .handler(async ({ context, data }) => {
    const adminId = context.userId;
    // Server-side check that user is admin
    const { data: profile } = await (supabaseAdmin as any)
      .from("profiles")
      .select("role")
      .eq("id", adminId)
      .maybeSingle();

    if (profile?.role !== "admin") {
      throw new Error("Unauthorized: Admin access required");
    }

    const { error } = await (supabaseAdmin as any)
      .from("opportunities")
      .update({
        status: data.status,
        verified: data.verified ?? (data.status === "approved"),
        updated_at: new Date().toISOString(),
      })
      .eq("id", data.id);

    if (error) throw error;
    return { success: true };
  });

/**
 * 8. Manual Payment Submission & Verification Server Functions
 */
export const submitPaymentFn = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((d: { note?: string; receiptUrl?: string }) => d)
  .handler(async ({ context, data }) => {
    return await submitManualPayment(context.userId, data.note, data.receiptUrl);
  });

export const adminVerifyPaymentFn = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((d: { paymentId: string; decision: "approved" | "rejected" }) => d)
  .handler(async ({ context, data }) => {
    const adminId = context.userId;
    const { data: profile } = await (supabaseAdmin as any)
      .from("profiles")
      .select("role")
      .eq("id", adminId)
      .maybeSingle();

    if (profile?.role !== "admin") {
      throw new Error("Unauthorized: Admin access required");
    }

    return await verifyManualPayment(data.paymentId, adminId, data.decision);
  });

/**
 * 9. Telegram Ingestion Server Function
 */
export const ingestTelegramPostFn = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((d: RawTelegramPost) => d)
  .handler(async ({ context, data }) => {
    const adminId = context.userId;
    const { data: profile } = await (supabaseAdmin as any)
      .from("profiles")
      .select("role")
      .eq("id", adminId)
      .maybeSingle();

    if (profile?.role !== "admin") {
      throw new Error("Unauthorized: Admin access required");
    }

    return await ingestTelegramPost(data);
  });

/**
 * 10. Auto-expiration trigger
 */
export const triggerAutoExpirationFn = createServerFn({ method: "POST" })
  .handler(async () => {
    const expiredCount = await archiveExpiredOpportunities();
    return { expiredCount };
  });
