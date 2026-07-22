import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { OPPORTUNITIES, CATEGORIES, type Category, type Opportunity } from "@/lib/opportunities";
import { rankOpportunities } from "@/lib/matching";
import { useSession, useProfile, useOnboarding, useSavedOpportunities, useToggleSaved } from "@/lib/supabase-hooks";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/opportunities")({
  component: OpportunitiesPage,
  head: () => ({ meta: [
    { title: "MyPath — Opportunities" },
    { name: "description", content: "50+ curated scholarships, research, competitions and programs, ranked by fit with your profile." },
    { property: "og:title", content: "MyPath Opportunities" },
    { property: "og:description", content: "Scholarships, research, and programs for ambitious students." },
  ]}),
});

function OpportunitiesPage() {
  const navigate = useNavigate();
  const { dict } = useI18n();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("All");
  const [active, setActive] = useState<Opportunity | null>(null);
  const [eligibleOnly, setEligibleOnly] = useState(false);

  const { user } = useSession();
  const { data: profile } = useProfile(user);
  const { data: onboarding } = useOnboarding(user);
  const { data: saved } = useSavedOpportunities(user);
  const toggleSaved = useToggleSaved(user?.id);

  const ctx = useMemo(() => ({
    age: profile?.age ?? null,
    grade: profile?.grade ? parseInt(profile.grade, 10) : null,
    country: profile?.country ?? null,
    interests: onboarding?.interests ?? [],
    problems: onboarding?.problems ?? [],
    goals: onboarding?.goals ?? [],
  }), [profile, onboarding]);

  const savedIds = useMemo(() => new Set((saved ?? []).map((s) => s.opportunity_id)), [saved]);

  const filtered = useMemo(() => {
    const ranked = rankOpportunities(OPPORTUNITIES, ctx);
    return ranked
      .filter((r) => cat === "All" || r.opp.category === cat)
      .filter((r) => !eligibleOnly || r.eligible)
      .filter((r) => !q || (r.opp.title + r.opp.description + r.opp.org + r.opp.tags.join(" ")).toLowerCase().includes(q.toLowerCase()));
  }, [q, cat, eligibleOnly, ctx]);

  const onSave = (opp: Opportunity) => {
    if (!user) { navigate({ to: "/auth", search: { mode: "signup" } }); return; }
    toggleSaved.mutate({ opportunityId: opp.id, currentlySaved: savedIds.has(opp.id) });
  };

  const catLabel = (c: string) => c === "All" ? dict.opportunities.all : (dict.categories[c as Category] ?? c);

  return (
    <div className="min-h-screen pb-24 md:pb-0">
      <Navbar />
      <main className="mx-auto max-w-7xl px-5 py-8 md:px-6 md:py-10">
        <div className="text-xs font-semibold uppercase tracking-widest text-navy/50">{dict.opportunities.kicker}</div>
        <h1 className="mt-2 font-display text-3xl md:text-5xl">{dict.opportunities.title}</h1>
        <p className="mt-2 max-w-2xl text-sm text-navy/60 md:text-base">{dict.opportunities.sub}</p>

        <div className="mt-6 flex flex-wrap items-center gap-3 md:mt-8">
          <div className="glass flex flex-1 items-center gap-2 rounded-full px-4 py-2 min-h-[48px]">
            <span className="text-navy/40">🔍</span>
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={dict.opportunities.search} className="w-full bg-transparent text-sm outline-none" />
          </div>
          {user && (
            <label className="flex min-h-[44px] items-center gap-2 rounded-full border border-navy/15 bg-white px-4 py-2 text-xs">
              <input type="checkbox" checked={eligibleOnly} onChange={(e) => setEligibleOnly(e.target.checked)} />
              {dict.opportunities.eligibleOnly}
            </label>
          )}
        </div>
        <div className="mt-3 -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 md:mx-0 md:flex-wrap md:overflow-visible md:px-0">
          {(["All", ...CATEGORIES] as const).map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`min-h-[36px] flex-none rounded-full px-4 py-1.5 text-xs font-medium transition ${cat === c ? "bg-navy text-ivory" : "border border-navy/15 bg-white hover:border-navy/40"}`}>{catLabel(c)}</button>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:mt-8 md:grid-cols-2 md:gap-5 xl:grid-cols-3">
          {filtered.map(({ opp: o, score, eligible, reasons }) => (
            <div key={o.id} className="group flex flex-col rounded-3xl border border-navy/10 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-xl md:p-6">
              <div className="flex items-center justify-between gap-2">
                <span className="rounded-full bg-navy/5 px-3 py-1 text-[11px] font-medium text-navy/70">{dict.categories[o.category as Category]}</span>
                <div className="flex items-center gap-1.5">
                  {!eligible && <span className="rounded-full bg-destructive/10 px-2 py-0.5 text-[10px] font-medium text-destructive">{dict.opportunities.checkFit}</span>}
                  <span className="rounded-full bg-gradient-to-r from-growth/20 to-lavender/30 px-3 py-1 text-[11px] font-semibold">{dict.dashboard.match.replace("{n}", String(score))}</span>
                </div>
              </div>
              <div className="mt-4 font-display text-lg leading-snug md:text-xl">{o.title}</div>
              <div className="text-xs text-navy/50">{o.org}</div>
              <p className="mt-3 text-sm text-navy/70 line-clamp-3">{o.description}</p>
              {reasons[0] && <div className="mt-3 rounded-xl bg-lavender/15 px-3 py-2 text-[11px] text-navy/70">{reasons[0]}</div>}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {o.tags.slice(0, 4).map((t) => <span key={t} className="rounded-full bg-ivory px-2 py-0.5 text-[10px] text-navy/60">#{t}</span>)}
              </div>
              <div className="mt-3 text-xs text-navy/60">{dict.dashboard.deadline} · {new Date(o.deadline).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}</div>
              <div className="mt-4 flex gap-2">
                <button onClick={() => setActive(o)} className="min-h-[44px] flex-1 rounded-full bg-navy px-4 py-2 text-sm font-semibold text-ivory">{dict.dashboard.view}</button>
                <button onClick={() => onSave(o)} className={`min-h-[44px] min-w-[44px] rounded-full border border-navy/15 px-3 py-2 text-sm ${savedIds.has(o.id) ? "bg-gold/40" : "bg-white"}`}>
                  {savedIds.has(o.id) ? "★" : "☆"}
                </button>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full rounded-3xl border border-dashed border-navy/20 p-10 text-center text-navy/60">{dict.opportunities.empty}</div>
          )}
        </div>
      </main>

      {active && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-navy/40 p-3 backdrop-blur-sm md:items-center md:p-4" onClick={() => setActive(null)}>
          <div onClick={(e) => e.stopPropagation()} className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl md:p-8">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-navy/5 px-3 py-1 text-xs">{dict.categories[active.category as Category]}</span>
              <button onClick={() => setActive(null)} className="text-navy/60 hover:text-navy min-h-[36px] min-w-[36px]">✕</button>
            </div>
            <h3 className="mt-3 font-display text-2xl md:text-3xl">{active.title}</h3>
            <div className="text-sm text-navy/60">{active.org}</div>
            <p className="mt-4 text-navy/80">{active.description}</p>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <div className="rounded-2xl bg-ivory p-4">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-navy/60">{dict.dashboard.deadline}</div>
                <div className="mt-1 font-display text-xl">{new Date(active.deadline).toLocaleDateString(undefined, { dateStyle: "long" })}</div>
              </div>
              <div className="rounded-2xl bg-ivory p-4">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-navy/60">{dict.opportunities.requirements}</div>
                <ul className="mt-1 text-sm">{active.requirements.map((r) => <li key={r}>• {r}</li>)}</ul>
              </div>
              <div className="rounded-2xl bg-ivory p-4">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-navy/60">{dict.opportunities.eligibility}</div>
                <ul className="mt-1 text-sm text-navy/80">
                  {active.minAge && <li>• {dict.opportunities.ages} {active.minAge}–{active.maxAge ?? "18+"}</li>}
                  {active.minGrade && <li>• {dict.opportunities.grades} {active.minGrade}–{active.maxGrade ?? 12}</li>}
                  <li>• {active.countries === "worldwide" || !active.countries ? dict.opportunities.worldwide : (active.countries as string[]).join(", ")}</li>
                  {active.cost && <li>• {dict.opportunities.cost}: {active.cost}</li>}
                </ul>
              </div>
              <div className="rounded-2xl bg-ivory p-4">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-navy/60">{dict.opportunities.bestFor}</div>
                <div className="mt-1 flex flex-wrap gap-1">
                  {active.fields.map((f) => <span key={f} className="rounded-full bg-lavender/20 px-2 py-0.5 text-[11px]">{f}</span>)}
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap justify-end gap-2">
              <button onClick={() => setActive(null)} className="rounded-full border border-navy/15 px-5 py-2.5 text-sm">{dict.common.close}</button>
              <button onClick={() => onSave(active)} className="rounded-full border border-navy/15 px-5 py-2.5 text-sm">{savedIds.has(active.id) ? dict.opportunities.saved : dict.opportunities.save}</button>
              <Link
                to="/apply-guide/$id"
                params={{ id: active.id }}
                className="rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-ivory"
                onClick={(e) => { if (!user) { e.preventDefault(); navigate({ to: "/auth", search: { mode: "signup" } }); } }}
              >
                {dict.opportunities.applyGuide}
              </Link>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
