import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useSession, useProfile, useOnboarding } from "@/lib/supabase-hooks";
import { OPPORTUNITIES } from "@/lib/opportunities";
import { rankOpportunities } from "@/lib/matching";

export const Route = createFileRoute("/_authenticated/analyze")({ component: AnalyzePage });

function AnalyzePage() {
  const { user } = useSession();
  const { data: profile } = useProfile(user);
  const { data: onboarding } = useOnboarding(user);
  const [stage, setStage] = useState<"idle" | "running" | "done">("idle");
  const [step, setStep] = useState(0);

  const ctx = useMemo(() => ({
    age: profile?.age ?? null,
    grade: profile?.grade ? parseInt(profile.grade, 10) : null,
    country: profile?.country ?? null,
    interests: onboarding?.interests ?? [],
    problems: onboarding?.problems ?? [],
    goals: onboarding?.goals ?? [],
  }), [profile, onboarding]);

  const recs = useMemo(() => rankOpportunities(OPPORTUNITIES, ctx).slice(0, 4), [ctx]);

  const run = () => {
    setStage("running");
    setStep(0);
    const steps = ["Scanning profile…", "Mapping strengths to directions…", "Cross-referencing 50+ opportunities…", "Synthesizing your report…"];
    let i = 0;
    const tick = () => {
      setStep(i);
      i++;
      if (i < steps.length) setTimeout(tick, 700);
      else setTimeout(() => setStage("done"), 700);
    };
    tick();
  };

  const ints = onboarding?.interests ?? [];
  const strs = onboarding?.strengths ?? [];
  const problems = onboarding?.problems ?? [];
  const directions = deriveDirections(ints, problems);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-5xl px-6 py-10">
        <div className="text-xs font-semibold uppercase tracking-widest text-navy/50">AI Analysis</div>
        <h1 className="mt-2 font-display text-4xl md:text-5xl text-balance">Analyze My Path</h1>
        <p className="mt-2 max-w-2xl text-navy/60">A snapshot of who you are, where you could go, and how to move.</p>

        {stage === "idle" && (
          <div className="mt-10 rounded-3xl border border-navy/10 bg-gradient-to-br from-lavender/50 via-white to-gold/40 p-10 text-center">
            <div className="text-6xl">✦</div>
            <p className="mx-auto mt-4 max-w-md font-display text-2xl">Run a full AI analysis of your profile and see the paths opening in front of you.</p>
            <button onClick={run} className="mt-6 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-ivory">Start analysis →</button>
          </div>
        )}

        {stage === "running" && (
          <div className="mt-10 rounded-3xl border border-navy/10 bg-white p-10">
            {["Scanning profile…", "Mapping strengths to directions…", "Cross-referencing 50+ opportunities…", "Synthesizing your report…"].map((label, i) => (
              <div key={label} className={`flex items-center gap-3 py-2 transition ${i <= step ? "opacity-100" : "opacity-30"}`}>
                <span className={`h-2.5 w-2.5 rounded-full ${i < step ? "bg-growth" : i === step ? "animate-pulse bg-lavender" : "bg-navy/20"}`} />
                <span className="text-sm">{label}</span>
              </div>
            ))}
          </div>
        )}

        {stage === "done" && (
          <div className="animate-fade-up mt-8 space-y-5">
            <Section title="My strengths" accent="from-growth/30">
              <div className="flex flex-wrap gap-2">
                {(strs.length ? strs : ["Curiosity", "Initiative", "Communication"]).map((s) => <span key={s} className="rounded-full bg-navy px-4 py-1.5 text-xs font-semibold text-ivory">{s}</span>)}
              </div>
              <p className="mt-4 text-sm text-navy/70">Your combination is rare: high initiative + real reflectiveness. Most students your age have one; you have both.</p>
            </Section>

            <Section title="Possible directions" accent="from-lavender/40">
              <div className="grid gap-3 md:grid-cols-2">
                {directions.map((d) => (
                  <div key={d.title} className="rounded-2xl bg-ivory p-4">
                    <div className="font-display text-lg">{d.title}</div>
                    <p className="mt-1 text-sm text-navy/70">{d.desc}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Recommended actions" accent="from-gold/40">
              <ol className="space-y-2 text-sm">
                <li>1. Publish one project this month tied to <b>{ints[0] ?? "your top interest"}</b>.</li>
                <li>2. Apply to one competition or research program before the next deadline.</li>
                <li>3. Reach out to one mentor with a specific, thoughtful question.</li>
                <li>4. Complete your portfolio to at least 5 items.</li>
              </ol>
            </Section>

            <Section title="Opportunities to explore" accent="from-navy/10">
              <div className="grid gap-3 md:grid-cols-2">
                {recs.map(({ opp: o, score }) => (
                  <Link to="/apply-guide/$id" params={{ id: o.id }} key={o.id} className="group rounded-2xl border border-navy/10 bg-white p-4 hover:-translate-y-0.5 hover:shadow-lg">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-navy/5 px-2 py-0.5 text-[10px]">{o.category}</span>
                      <span className="text-[11px] font-semibold text-growth">{score}% match</span>
                    </div>
                    <div className="mt-2 font-display text-lg">{o.title}</div>
                    <div className="text-[11px] text-navy/50">{o.org}</div>
                  </Link>
                ))}
              </div>
            </Section>

            <div className="flex justify-end gap-2">
              <button onClick={() => setStage("idle")} className="rounded-full border border-navy/15 px-5 py-2.5 text-sm">Re-run</button>
              <Link to="/mentor" className="rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-ivory">Discuss with mentor →</Link>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

function Section({ title, children, accent }: { title: string; children: React.ReactNode; accent: string }) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-navy/10 bg-white p-6">
      <div className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${accent} to-transparent blur-2xl`} />
      <h2 className="relative font-display text-2xl">{title}</h2>
      <div className="relative mt-4">{children}</div>
    </section>
  );
}

function deriveDirections(ints: string[], problems: string[]) {
  const combos: { title: string; desc: string }[] = [];
  if (ints.includes("Technology") && problems.includes("Climate change"))
    combos.push({ title: "Climate Tech Builder", desc: "Use engineering to solve environmental problems — high-impact, high-growth field." });
  if (ints.includes("Business") || ints.includes("Leadership") || ints.includes("Entrepreneurship"))
    combos.push({ title: "Social Entrepreneurship", desc: "Blend commercial thinking with cause-driven work; ideal for ambitious changemakers." });
  if (ints.includes("Science") || ints.includes("Writing") || ints.includes("Mathematics"))
    combos.push({ title: "Research & Communication", desc: "Investigate deeply, then translate your findings for the world." });
  if (ints.includes("Arts") || ints.includes("Design") || ints.includes("Film & Media"))
    combos.push({ title: "Creative Technologist", desc: "Bridge design, code, and storytelling — one of the fastest-growing modern paths." });
  if (ints.includes("Psychology") || ints.includes("Healthcare"))
    combos.push({ title: "Human-Centered Health", desc: "Blend science and empathy in medicine, therapy or public health innovation." });
  if (combos.length === 0) combos.push({ title: "Renaissance Path", desc: "You're early — a wide base now will compound into something rare." });
  return combos.slice(0, 4);
}
