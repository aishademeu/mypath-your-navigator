import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { useSession, useOnboarding, useSaveOnboarding } from "@/lib/supabase-hooks";

export const Route = createFileRoute("/_authenticated/onboarding")({ component: Onboarding });

const STEPS = [
  {
    key: "interests",
    title: "What topics excite you?",
    sub: "Pick everything that lights you up.",
    options: [
      "Technology", "Science", "Mathematics", "Engineering", "Business", "Entrepreneurship",
      "Arts", "Design", "Music", "Writing", "Film & Media", "Sports",
      "Social Impact", "Leadership", "Politics", "Law", "Psychology", "Healthcare",
      "Environment", "Education", "History", "Philosophy", "Languages",
    ],
    multi: true,
  },
  {
    key: "problems",
    title: "What problems in the world do you care about?",
    sub: "Your values shape your direction.",
    options: [
      "Education inequality", "Climate change", "Human rights", "Mental health",
      "Healthcare", "Technology access", "Youth development", "Gender equity",
      "Poverty", "Political freedom", "Animal welfare", "Refugees & migration",
    ],
    multi: true,
  },
  {
    key: "strengths",
    title: "What are your strengths?",
    sub: "Be honest — this becomes your compass.",
    options: [
      "Communication", "Creativity", "Leadership", "Problem solving", "Research",
      "Coding", "Organization", "Empathy", "Public speaking", "Writing",
      "Analytical thinking", "Curiosity", "Resilience", "Teamwork",
    ],
    multi: true,
  },
  { key: "experience_level", title: "How much have you already built?", sub: "This helps us calibrate recommendations.", options: ["Just getting started", "I've done a few things", "I have a track record", "I've won awards / led programs"], multi: false },
  { key: "dream", title: "What is your dream?", sub: "Write it like you'd tell a close friend.", textarea: true },
  {
    key: "goals",
    title: "What are your goals right now?",
    sub: "Pick everything that fits.",
    options: ["Build projects", "Find competitions", "Prepare for universities", "Develop skills", "Meet mentors", "Get scholarships", "Do research", "Start something of my own"],
    multi: true,
  },
] as const;

function Onboarding() {
  const navigate = useNavigate();
  const { user } = useSession();
  const { data: existing, isLoading } = useOnboarding(user);
  const save = useSaveOnboarding(user?.id);

  const [i, setI] = useState(0);
  const [state, setState] = useState<Record<string, string[] | string>>({
    interests: [], problems: [], strengths: [], goals: [], dream: "", experience_level: "",
  });

  // hydrate once
  const [hydrated, setHydrated] = useState(false);
  if (!hydrated && existing) {
    setState({
      interests: existing.interests ?? [],
      problems: existing.problems ?? [],
      strengths: existing.strengths ?? [],
      goals: existing.goals ?? [],
      dream: existing.dream ?? "",
      experience_level: existing.experience_level ?? "",
    });
    setHydrated(true);
  }

  const step = STEPS[i];
  const pct = ((i + 1) / STEPS.length) * 100;

  const finish = async () => {
    await save.mutateAsync({
      interests: (state.interests as string[]) ?? [],
      problems: (state.problems as string[]) ?? [],
      strengths: (state.strengths as string[]) ?? [],
      goals: (state.goals as string[]) ?? [],
      dream: (state.dream as string) ?? "",
      experience_level: (state.experience_level as string) ?? "",
      completed_at: new Date().toISOString(),
    });
    navigate({ to: "/dashboard" });
  };

  const isSingle = "multi" in step && step.multi === false;
  const toggle = (opt: string) => {
    setState((s) => {
      if (isSingle) return { ...s, [step.key]: opt };
      const cur = (s[step.key] as string[]) ?? [];
      return { ...s, [step.key]: cur.includes(opt) ? cur.filter((x) => x !== opt) : [...cur, opt] };
    });
  };

  if (isLoading) return <div className="min-h-screen gradient-hero" />;

  return (
    <div className="min-h-screen gradient-hero">
      <div className="mx-auto max-w-4xl px-6 py-10">
        <div className="flex items-center justify-between">
          <Logo className="h-9 w-auto" />
          <div className="text-xs font-semibold uppercase tracking-widest text-navy/50">Step {i + 1} of {STEPS.length}</div>
        </div>
        <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-navy/10">
          <div className="h-full rounded-full bg-gradient-to-r from-growth via-lavender to-gold transition-all" style={{ width: `${pct}%` }} />
        </div>

        <div key={step.key} className="animate-fade-up mt-10 rounded-3xl border border-navy/10 bg-white/85 p-8 backdrop-blur md:p-12">
          <h1 className="font-display text-4xl md:text-5xl text-balance">{step.title}</h1>
          <p className="mt-3 text-navy/60">{step.sub}</p>

          {"textarea" in step && step.textarea ? (
            <textarea
              value={state.dream as string}
              onChange={(e) => setState((s) => ({ ...s, dream: e.target.value }))}
              placeholder="In five years, I want to…"
              rows={6}
              className="mt-8 w-full rounded-2xl border border-navy/15 bg-white p-4 text-base outline-none focus:border-navy focus:ring-2 focus:ring-lavender/40"
            />
          ) : (
            <div className="mt-8 flex flex-wrap gap-3">
              {("options" in step ? step.options : []).map((opt: string) => {
                const selected = isSingle
                  ? state[step.key] === opt
                  : ((state[step.key] as string[]) ?? []).includes(opt);
                return (
                  <button
                    key={opt}
                    onClick={() => toggle(opt)}
                    className={`rounded-2xl border px-5 py-3 text-sm font-medium transition ${selected ? "border-navy bg-navy text-ivory shadow-lg shadow-navy/20" : "border-navy/15 bg-white hover:border-navy/40"}`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          )}

          <div className="mt-10 flex items-center justify-between">
            <button
              onClick={() => setI((n) => Math.max(0, n - 1))}
              disabled={i === 0}
              className="rounded-full border border-navy/15 px-5 py-2.5 text-sm font-medium disabled:opacity-40"
            >
              ← Back
            </button>
            {i < STEPS.length - 1 ? (
              <button onClick={() => setI((n) => n + 1)} className="rounded-full bg-navy px-6 py-3 text-sm font-semibold text-ivory hover:opacity-90">
                Continue →
              </button>
            ) : (
              <button onClick={finish} disabled={save.isPending} className="rounded-full bg-gradient-to-r from-navy to-lavender px-6 py-3 text-sm font-semibold text-ivory hover:opacity-90 disabled:opacity-60">
                {save.isPending ? "Saving…" : "Complete & see my path ✨"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
