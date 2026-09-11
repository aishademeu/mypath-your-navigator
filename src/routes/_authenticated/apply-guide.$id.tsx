import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useMemo } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { opportunityById, type Opportunity } from "@/lib/opportunities";
import { applyGuideFor, matchOpportunity } from "@/lib/matching";
import { supabase } from "@/integrations/supabase/client";
import {
  useSession,
  useProfile,
  useOnboarding,
  useApplicationProgress,
  useToggleStep,
  useSavedOpportunities,
  useToggleSaved,
} from "@/lib/supabase-hooks";
import { formatDate } from "@/lib/format";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/_authenticated/apply-guide/$id")({
  component: ApplyGuide,
  loader: async ({ params }) => {
    let opp = opportunityById(params.id);
    if (!opp) {
      const { data } = await (supabase as any)
        .from("opportunities")
        .select("*")
        .eq("id", params.id)
        .maybeSingle();

      if (data) {
        opp = {
          id: String(data.id),
          title: data.title,
          org: data.org,
          category: data.category || "Scholarships",
          description: data.description,
          deadline: data.deadline || "2026-12-31",
          minAge: data.min_age || undefined,
          maxAge: data.max_age || undefined,
          minGrade: data.min_grade || undefined,
          maxGrade: data.max_grade || undefined,
          countries: data.countries || "worldwide",
          cost: data.cost || "free",
          format: data.format || "online",
          verified: data.verified || false,
          requirements: data.requirements || [],
          tags: data.tags || [],
          fields: data.fields || [],
          url: data.url || undefined,
          sourceUrl: data.source_url || undefined,
          sourceChannel: data.source_channel || undefined,
        };
      }
    }
    if (!opp) throw notFound();
    return { opp };
  },
  errorComponent: ({ error }) => (
    <div className="flex min-h-screen items-center justify-center p-6 text-center">
      <div>
        <h1 className="font-display text-2xl">Something went off-path</h1>
        <p className="mt-2 text-sm text-navy/60">{error.message}</p>
        <Link to="/opportunities" className="mt-4 inline-block rounded-full bg-navy px-4 py-2 text-sm text-ivory">Back</Link>
      </div>
    </div>
  ),
  notFoundComponent: () => <NotFoundInner />,
});

function NotFoundInner() {
  const { dict } = useI18n();
  return (
    <div className="flex min-h-screen items-center justify-center p-6 text-center">
      <div>
        <h1 className="font-display text-2xl">{dict.apply.notFound}</h1>
        <Link to="/opportunities" className="mt-4 inline-block rounded-full bg-navy px-4 py-2 text-sm text-ivory">{dict.apply.browse}</Link>
      </div>
    </div>
  );
}

function ApplyGuide() {
  const { id } = Route.useParams();
  const { opp } = Route.useLoaderData() as { opp: Opportunity };
  const { user } = useSession();
  const { data: profile } = useProfile(user);
  const { data: onboarding } = useOnboarding(user);
  const { data: progress } = useApplicationProgress(user, id);
  const toggleStep = useToggleStep(user?.id, id);
  const { data: saved } = useSavedOpportunities(user);
  const toggleSaved = useToggleSaved(user?.id);
  const { dict, lang } = useI18n();

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
    <div className="min-h-screen pb-24 md:pb-0">
      <Navbar />
      <main className="mx-auto max-w-5xl px-5 py-8 md:px-6 md:py-10">
        <Link to="/opportunities" className="text-sm text-navy/60 hover:underline">{dict.apply.back}</Link>

        <div className="relative mt-4 overflow-hidden rounded-[1.75rem] border border-navy/10 bg-gradient-to-br from-navy via-[#1a2e5c] to-[#22417a] p-6 text-ivory md:rounded-[2rem] md:p-8">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-lavender/30 blur-3xl" />
          <div className="relative">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-white/10 px-3 py-1 text-[11px]">{dict.categories[opp.category]}</span>
              <span className="rounded-full bg-gradient-to-r from-growth to-lavender px-3 py-1 text-[11px] font-semibold text-navy">
                {match.qualitativeBadge}
              </span>
              {!match.eligible && <span className="rounded-full bg-destructive/20 px-3 py-1 text-[11px]">{dict.dashboard.checkEligibility}</span>}
            </div>
            <h1 className="mt-4 font-display text-2xl md:text-4xl">{opp.title}</h1>
            <div className="text-ivory/70">{opp.org}</div>
            <p className="mt-4 max-w-3xl text-sm text-ivory/80 md:text-base">{opp.description}</p>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              <InfoTile label={dict.dashboard.deadline}>{formatDate(opp.deadline, lang, { dateStyle: "long" })}</InfoTile>
              <InfoTile label={dict.opportunities.eligibility}>
                {opp.minAge && `${dict.opportunities.ages} ${opp.minAge}–${opp.maxAge ?? "18+"}`}
                {opp.minGrade && ` · ${dict.opportunities.grades} ${opp.minGrade}–${opp.maxGrade ?? 12}`}
              </InfoTile>
              <InfoTile label={dict.apply.region}>{opp.countries === "worldwide" || !opp.countries ? dict.opportunities.worldwide : (opp.countries as string[]).join(", ")}</InfoTile>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {opp.url && (
                <a href={opp.url} target="_blank" rel="noopener noreferrer" className="rounded-full bg-ivory px-5 py-2.5 text-sm font-semibold text-navy">
                  {dict.apply.officialSite} ↗
                </a>
              )}
              <button onClick={() => user && toggleSaved.mutate({ opportunityId: id, currentlySaved: isSaved })} className="rounded-full border border-ivory/30 px-5 py-2.5 text-sm font-medium">
                {isSaved ? dict.apply.savedInProfile : dict.apply.saveAction}
              </button>
            </div>
          </div>
        </div>

        <section className="mt-10">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl md:text-2xl">{dict.apply.stepByStep}</h2>
            <span className="text-xs text-navy/60">{doneCount} / {steps.length} {dict.apply.done}</span>
          </div>
          <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-navy/10">
            <div className="h-full bg-growth transition-all" style={{ width: `${pct}%` }} />
          </div>

          <div className="mt-6 space-y-3">
            {steps.map((s, i) => {
              const done = !!completedMap.get(s.key);
              return (
                <div key={s.key} className={`rounded-2xl border p-4 transition ${done ? "border-growth/40 bg-growth/5" : "border-navy/10 bg-white"}`}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <button
                        onClick={() => user && toggleStep.mutate({ stepKey: s.key, completed: !done })}
                        className={`mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-md border text-xs ${done ? "border-growth bg-growth text-ivory" : "border-navy/30"}`}
                      >
                        {done && "✓"}
                      </button>
                      <div>
                        <div className="text-xs uppercase tracking-wider text-navy/50">{dict.common.step} {i + 1}</div>
                        <div className={`font-semibold ${done ? "line-through text-navy/50" : ""}`}>{s.title}</div>
                        <p className="mt-1 text-sm text-navy/70">{s.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {match.reasons.length > 0 && (
          <section className="mt-10 rounded-3xl border border-navy/10 bg-white p-6">
            <h2 className="font-display text-lg">{dict.apply.whyFits}</h2>
            <ul className="mt-2 space-y-1 text-sm text-navy/75">
              {match.reasons.map((r, i) => <li key={i}>• {r}</li>)}
            </ul>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}

function InfoTile({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-white/10 p-3">
      <div className="text-[11px] uppercase tracking-wider text-ivory/60">{label}</div>
      <div className="mt-1 text-sm font-semibold">{children}</div>
    </div>
  );
}
