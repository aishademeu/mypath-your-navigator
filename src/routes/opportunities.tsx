import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { memo, useCallback, useLayoutEffect, useMemo, useRef, useState } from "react";
import { measureElement, useVirtualizer } from "@tanstack/react-virtual";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { OPPORTUNITIES, CATEGORIES, type Category, type Opportunity } from "@/lib/opportunities";
import { rankOpportunities } from "@/lib/matching";
import { useSession, useProfile, useOnboarding, useSavedOpportunities, useToggleSaved } from "@/lib/supabase-hooks";
import { useUnlocks } from "@/lib/unlocks";
import { UnlockPlanCard } from "@/components/UnlockPlanCard";
import { formatDate } from "@/lib/format";
import { useHydrated } from "@/lib/use-hydrated";
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

/**
 * Card is memoized and animation-free: typing in the search box, session
 * changes or an unlock elsewhere no longer re-render (or visually "blink")
 * every other card.
 */
type CardProps = {
  opp: Opportunity;
  score: number;
  eligible: boolean;
  reason: string | null;
  deadline: string;
  saved: boolean;
  plan: Parameters<typeof UnlockPlanCard>[0]["plan"];
  unlocked: boolean;
  hydrated: boolean;
  onView: (opp: Opportunity) => void;
  onSave: (opp: Opportunity) => void;
};

const OpportunityCard = memo(function OpportunityCard({
  opp: o, score, eligible, reason, deadline, saved, plan, unlocked, hydrated, onView, onSave,
}: CardProps) {
  const { dict } = useI18n();
  return (
    <div className="flex flex-col rounded-3xl border border-navy/10 bg-white p-5 md:p-6">
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
      {reason && <div className="mt-3 rounded-xl bg-lavender/15 px-3 py-2 text-[11px] text-navy/70">{reason}</div>}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {o.tags.slice(0, 4).map((t) => <span key={t} className="rounded-full bg-ivory px-2 py-0.5 text-[10px] text-navy/60">#{t}</span>)}
      </div>
      <div className="mt-3 text-xs text-navy/60">{dict.dashboard.deadline} · {deadline}</div>
      <div className="mt-4 flex gap-2">
        <button onClick={() => onView(o)} className="min-h-[44px] flex-1 rounded-full bg-navy px-4 py-2 text-sm font-semibold text-ivory">{dict.dashboard.view}</button>
        <button onClick={() => onSave(o)} className={`min-h-[44px] min-w-[44px] rounded-full border border-navy/15 px-3 py-2 text-sm ${saved ? "bg-gold/40" : "bg-white"}`}>
          {saved ? "★" : "☆"}
        </button>
      </div>
      {/* Session-dependent: render only after hydration so SSR markup matches. */}
      {hydrated && <UnlockPlanCard opp={o} score={score} plan={plan} unlocked={unlocked} />}
    </div>
  );
});

function OpportunitiesPage() {
  const navigate = useNavigate();
  const { dict, lang } = useI18n();
  const hydrated = useHydrated();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("All");
  const [active, setActive] = useState<Opportunity | null>(null);
  const [eligibleOnly, setEligibleOnly] = useState(false);

  const { user } = useSession();

  const { data: profile } = useProfile(user);
  const { data: onboarding } = useOnboarding(user);
  const { data: saved } = useSavedOpportunities(user);
  const toggleSaved = useToggleSaved(user?.id);
  const { data: unlocks } = useUnlocks(user);
  const unlockMap = useMemo(
    () => new Map((unlocks ?? []).map((u) => [u.opportunity_id, u.plan])),
    [unlocks],
  );


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

  const onSave = useCallback((opp: Opportunity) => {
    if (!user) { navigate({ to: "/auth", search: { mode: "signup" } }); return; }
    toggleSaved.mutate({ opportunityId: opp.id, currentlySaved: savedIds.has(opp.id) });
  }, [user, navigate, toggleSaved, savedIds]);


  const catLabel = (c: string) => c === "All" ? dict.opportunities.all : (dict.categories[c as Category] ?? c);

  // Virtualized grid state. Column count follows Tailwind breakpoints so the
  // JS row grouping matches the CSS grid layout.
  const gridRef = useRef<HTMLDivElement>(null);
  const [cols, setCols] = useState(1);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    const updateCols = () => {
      setCols(window.innerWidth >= 1280 ? 3 : window.innerWidth >= 768 ? 2 : 1);
    };
    updateCols();
    window.addEventListener("resize", updateCols);
    return () => window.removeEventListener("resize", updateCols);
  }, []);

  const rows = useMemo(() => {
    const result: typeof filtered[] = [];
    for (let i = 0; i < filtered.length; i += cols) {
      result.push(filtered.slice(i, i + cols));
    }
    return result;
  }, [filtered, cols]);

  const virtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => gridRef.current,
    estimateSize: () => 360,
    measureElement,
    overscan: 3,
  });

  const gridColsClass = cols === 3 ? "grid-cols-3" : cols === 2 ? "grid-cols-2" : "grid-cols-1";

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
          {hydrated && user && (
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

        {/* Virtualized opportunity grid. Only visible rows are rendered, so scrolling
            stays smooth even with hundreds of cards. */}
        <div
          ref={gridRef}
          className="mt-6 h-[calc(100vh-260px)] overflow-y-auto scroll-smooth md:h-[65vh] md:max-h-[800px]"
        >
          {filtered.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-navy/20 p-10 text-center text-navy/60">{dict.opportunities.empty}</div>
          ) : (
            <div style={{ height: virtualizer.getTotalSize(), position: "relative" }}>
              {virtualizer.getVirtualItems().map((virtualRow) => (
                <div
                  key={virtualRow.key}
                  ref={virtualizer.measureElement}
                  data-index={virtualRow.index}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    transform: `translateY(${virtualRow.start}px)`,
                    width: "100%",
                  }}
                  className={`grid ${gridColsClass} gap-4 pb-4 md:gap-5 md:pb-5`}
                >
                  {rows[virtualRow.index]?.map(({ opp: o, score, eligible, reasons }) => (
                    <OpportunityCard
                      key={o.id}
                      opp={o}
                      score={score}
                      eligible={eligible}
                      reason={reasons[0] ?? null}
                      deadline={formatDate(o.deadline, lang)}
                      saved={savedIds.has(o.id)}
                      plan={unlockMap.get(o.id) ?? null}
                      unlocked={unlockMap.has(o.id)}
                      hydrated={hydrated}
                      onView={setActive}
                      onSave={onSave}
                    />
                  ))}
                </div>
              ))}
            </div>
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
                <div className="mt-1 font-display text-xl">{formatDate(active.deadline, lang, { dateStyle: "long" })}</div>
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
