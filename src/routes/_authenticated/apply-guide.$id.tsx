import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useMemo } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { opportunityById } from "@/lib/opportunities";
import { applyGuideFor, matchOpportunity } from "@/lib/matching";
import {
  useSession, useProfile, useOnboarding, useApplicationProgress, useToggleStep,
  useSavedOpportunities, useToggleSaved,
} from "@/lib/supabase-hooks";

export const Route = createFileRoute("/_authenticated/apply-guide/$id")({
  component: ApplyGuide,
  loader: ({ params }) => {
    const opp = opportunityById(params.id);
    if (!opp) throw notFound();
    return { opp };
  },
  errorComponent: ({ error }) => (
    <div className="min-h-screen flex items-center justify-center p-6 text-center">
      <div>
        <h1 className="font-display text-2xl">Something went off-path</h1>
        <p className="mt-2 text-sm text-navy/60">{error.message}</p>
        <Link to="/opportunities" className="mt-4 inline-block rounded-full bg-navy px-4 py-2 text-sm text-ivory">Back to opportunities</Link>
      </div>
    </div>
  ),
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center p-6 text-center">
      <div>
        <h1 className="font-display text-2xl">Opportunity not found</h1>
        <Link to="/opportunities" className="mt-4 inline-block rounded-full bg-navy px-4 py-2 text-sm text-ivory">Browse opportunities</Link>
      </div>
    </div>
  ),
});

function ApplyGuide() {
  const { id } = Route.useParams();
  const opp = opportunityById(id)!;
  const { user } = useSession();
  const { data: profile } = useProfile(user);
  const { data: onboarding } = useOnboarding(user);
  const { data: progress } = useApplicationProgress(user, id);
  const toggleStep = useToggleStep(user?.id, id);
  const { data: saved } = useSavedOpportunities(user);
  const toggleSaved = useToggleSaved(user?.id);

  const steps = useMemo(() => applyGuideFor(opp), [opp]);
  const completedMap = useMemo(() => {
    const m = new Map<string, boolean>();
    (progress ?? []).forEach((p) => m.set(p.step_key, p.completed));
    return m;
  }, [progress]);
  const doneCount = steps.filter((s) => completedMap.get(s.key)).length;
  const pct = Math.round((doneCount / steps.length) * 100);

  const match = useMemo(() => matchOpportunity(opp, {
    age: profile?.age ?? null,
    grade: profile?.grade ? parseInt(profile.grade, 10) : null,
    country: profile?.country ?? null,
    interests: onboarding?.interests ?? [],
    problems: onboarding?.problems ?? [],
    goals: onboarding?.goals ?? [],
  }), [opp, profile, onboarding]);

  const isSaved = (saved ?? []).some((s) => s.opportunity_id === id);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-5xl px-6 py-10">
        <Link to="/opportunities" className="text-sm text-navy/60 hover:underline">← Back to opportunities</Link>

        <div className="mt-4 relative overflow-hidden rounded-[2rem] border border-navy/10 bg-gradient-to-br from-navy via-[#1a2e5c] to-[#22417a] p-8 text-ivory">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-lavender/30 blur-3xl" />
          <div className="relative">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-white/10 px-3 py-1 text-[11px]">{opp.category}</span>
              <span className="rounded-full bg-gradient-to-r from-growth to-lavender px-3 py-1 text-[11px] font-semibold text-navy">{match.score}% match</span>
              {!match.eligible && <span className="rounded-full bg-destructive/20 px-3 py-1 text-[11px]">Check eligibility</span>}
            </div>
            <h1 className="mt-4 font-display text-3xl md:text-4xl">{opp.title}</h1>
            <div className="text-ivory/70">{opp.org}</div>
            <p className="mt-4 max-w-3xl text-ivory/80">{opp.description}</p>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              <InfoTile label="Deadline">{new Date(opp.deadline).toLocaleDateString(undefined, { dateStyle: "long" })}</InfoTile>
              <InfoTile label="Eligibility">
                {opp.minAge && `Ages ${opp.minAge}–${opp.maxAge ?? "18+"}`}
                {opp.minGrade && ` · Grade ${opp.minGrade}–${opp.maxGrade ?? 12}`}
              </InfoTile>
              <InfoTile label="Region">{opp.countries === "worldwide" || !opp.countries ? "Worldwide" : (opp.countries as string[]).join(", ")}</InfoTile>
            </div>
            {match.reasons.length > 0 && (
              <div className="mt-5 rounded-2xl bg-white/10 p-4">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-ivory/60">Why this fits you</div>
                <ul className="mt-2 text-sm text-ivory/90">{match.reasons.map((r) => <li key={r}>• {r}</li>)}</ul>
              </div>
            )}
            {match.blockers.length > 0 && (
              <div className="mt-3 rounded-2xl bg-destructive/20 p-4">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-ivory">Heads up</div>
                <ul className="mt-2 text-sm">{match.blockers.map((r) => <li key={r}>• {r}</li>)}</ul>
              </div>
            )}
            <div className="mt-6 flex flex-wrap gap-2">
              <button onClick={() => toggleSaved.mutate({ opportunityId: id, currentlySaved: isSaved })} className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">{isSaved ? "★ Saved" : "☆ Save"}</button>
              {opp.url && <a href={opp.url} target="_blank" rel="noreferrer" className="rounded-full bg-ivory px-4 py-2 text-sm font-semibold text-navy">Open official page →</a>}
            </div>
          </div>
        </div>

        <section className="mt-8 rounded-3xl border border-navy/10 bg-white p-6">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-display text-2xl">Your application checklist</h2>
              <p className="mt-1 text-sm text-navy/60">Track your progress — we'll remember it for you.</p>
            </div>
            <div className="text-right">
              <div className="text-xs uppercase tracking-widest text-navy/50">Progress</div>
              <div className="mt-1 font-display text-2xl">{pct}%</div>
            </div>
          </div>
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-navy/10">
            <div className="h-full rounded-full bg-gradient-to-r from-growth to-lavender transition-all" style={{ width: `${pct}%` }} />
          </div>

          <ol className="mt-6 space-y-3">
            {steps.map((s, i) => {
              const done = !!completedMap.get(s.key);
              return (
                <li key={s.key} className={`flex gap-4 rounded-2xl border p-4 transition ${done ? "border-growth/40 bg-growth/5" : "border-navy/10 bg-ivory"}`}>
                  <button
                    onClick={() => toggleStep.mutate({ stepKey: s.key, completed: !done })}
                    className={`mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full border ${done ? "border-growth bg-growth text-ivory" : "border-navy/20 bg-white"}`}
                    aria-label={done ? "Mark incomplete" : "Mark complete"}
                  >
                    {done ? "✓" : i + 1}
                  </button>
                  <div>
                    <div className={`font-semibold ${done ? "line-through text-navy/50" : ""}`}>{s.title}</div>
                    <p className="mt-1 text-sm text-navy/70">{s.description}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </section>

        <div className="mt-6 flex justify-between">
          <Link to="/mentor" className="rounded-full border border-navy/15 px-5 py-2.5 text-sm">Ask AI mentor</Link>
          <Link to="/opportunities" className="rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-ivory">Explore more →</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function InfoTile({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-white/10 p-4">
      <div className="text-[11px] font-semibold uppercase tracking-wider text-ivory/60">{label}</div>
      <div className="mt-1 text-sm">{children}</div>
    </div>
  );
}
