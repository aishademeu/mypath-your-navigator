import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { useSession, useSaveOnboarding } from "@/lib/supabase-hooks";

export const Route = createFileRoute("/_authenticated/onboarding")({ component: Onboarding });

const INTERESTS = [
  "Technology",
  "Science",
  "Mathematics",
  "Engineering",
  "Business",
  "Entrepreneurship",
  "Arts",
  "Design",
  "Music",
  "Writing",
  "Film & Media",
  "Sports",
  "Social Impact",
  "Leadership",
  "Law",
  "Psychology",
  "Healthcare",
  "Environment",
  "Education",
  "History",
  "Philosophy",
  "Languages",
];

const OPPORTUNITY_TYPES = [
  "Scholarships",
  "Competitions",
  "Research",
  "Internships",
  "Summer Programs",
  "Volunteering",
  "Hackathons",
  "Leadership Programs",
  "Courses",
];

const GOALS = [
  "Build projects",
  "Find competitions",
  "Prepare for universities",
  "Develop skills",
  "Get scholarships",
  "Do research",
  "Start something of my own",
  "Build my portfolio",
];

const STEPS = [
  {
    key: "interests" as const,
    title: "What topics interest you?",
    sub: "Select everything that applies. This helps us find relevant opportunities for you.",
    options: INTERESTS,
    multi: true,
  },
  {
    key: "opportunityTypes" as const,
    title: "What types of opportunities are you looking for?",
    sub: "Select all that apply. You can change this later in your profile.",
    options: OPPORTUNITY_TYPES,
    multi: true,
  },
  {
    key: "goals" as const,
    title: "What are your goals right now?",
    sub: "Select all that apply.",
    options: GOALS,
    multi: true,
  },
];

function Onboarding() {
  const navigate = useNavigate();
  const { user } = useSession();
  const save = useSaveOnboarding(user?.id);

  const [step, setStep] = useState(0);
  const [state, setState] = useState<Record<string, string[]>>({
    interests: [],
    opportunityTypes: [],
    goals: [],
  });

  const current = STEPS[step];
  const pct = ((step + 1) / STEPS.length) * 100;
  const selected = state[current.key] ?? [];

  const toggle = (opt: string) => {
    setState((s) => {
      const cur = s[current.key] ?? [];
      return {
        ...s,
        [current.key]: cur.includes(opt) ? cur.filter((x) => x !== opt) : [...cur, opt],
      };
    });
  };

  const finish = async () => {
    await save.mutateAsync({
      interests: state.interests,
      problems: [],
      strengths: [],
      goals: state.goals,
      dream: null,
      experience_level: null,
      completed_at: new Date().toISOString(),
    });
    navigate({ to: "/dashboard" });
  };

  const canContinue = true; // all steps optional — students can skip

  return (
    <div className="gradient-hero min-h-screen pb-32 md:pb-10">
      <div className="mx-auto max-w-3xl px-5 py-6 md:px-6 md:py-10">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Logo className="h-8 w-auto md:h-9" />
          <div className="text-xs font-semibold uppercase tracking-widest text-navy/50">
            Step {step + 1} of {STEPS.length}
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-navy/10">
          <div
            className="h-full rounded-full bg-clay-deep transition-all duration-300"
            style={{ width: `${pct}%` }}
          />
        </div>

        {/* Step card */}
        <div
          key={current.key}
          className="animate-fade-up mt-8 rounded-2xl border border-navy/10 bg-white/90 p-6 shadow-sm backdrop-blur sm:p-8 md:mt-10"
        >
          <h1 className="font-display text-2xl md:text-4xl text-balance">{current.title}</h1>
          <p className="mt-2 text-navy/60 text-sm md:text-base">{current.sub}</p>

          <div className="mt-6 flex flex-wrap gap-2 md:gap-2.5">
            {current.options.map((opt) => {
              const isSelected = selected.includes(opt);
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => toggle(opt)}
                  className={`min-h-[40px] rounded-xl border px-4 py-2 text-sm font-medium transition-all ${
                    isSelected
                      ? "border-navy bg-navy text-ivory shadow-sm"
                      : "border-navy/15 bg-white text-navy hover:border-navy/40 hover:bg-navy/5"
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setStep((n) => Math.max(0, n - 1))}
              disabled={step === 0}
              className="min-h-[44px] rounded-xl border border-navy/15 px-5 py-2.5 text-sm font-medium disabled:opacity-40 hover:bg-navy/5 transition"
            >
              ← Back
            </button>

            {step < STEPS.length - 1 ? (
              <button
                type="button"
                onClick={() => setStep((n) => n + 1)}
                className="min-h-[48px] rounded-xl bg-navy px-8 py-3 text-sm font-semibold text-ivory transition hover:opacity-90"
              >
                Continue →
              </button>
            ) : (
              <button
                type="button"
                onClick={finish}
                disabled={save.isPending}
                className="min-h-[48px] rounded-xl bg-clay-deep px-8 py-3 text-sm font-semibold text-ivory transition hover:opacity-90 disabled:opacity-60"
              >
                {save.isPending ? "Saving…" : "Go to my dashboard →"}
              </button>
            )}
          </div>

          {/* Skip option */}
          <p className="mt-4 text-center text-xs text-navy/40">
            You can skip any step — your selections can be updated in your profile later.
          </p>
        </div>
      </div>
    </div>
  );
}
