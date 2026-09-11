import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { memo, useCallback, useMemo, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  CATEGORIES,
  COUNTRIES,
  FORMATS,
  daysLeft,
  openOpportunities,
  type Category,
  type Opportunity,
} from "@/lib/opportunities";
import { rankOpportunities } from "@/lib/matching";
import { useSession, useProfile, useOnboarding, useSavedOpportunities, useToggleSaved, useOpportunities } from "@/lib/supabase-hooks";
import { formatDate } from "@/lib/format";
import { useHydrated } from "@/lib/use-hydrated";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/opportunities")({
  component: OpportunitiesPage,
  head: () => ({ meta: [
    { title: "MyPath — Opportunities Database" },
    { name: "description", content: "Verified scholarships, research, competitions, internships and leadership programs — ranked by fit with your profile." },
    { property: "og:title", content: "MyPath Opportunities" },
    { property: "og:description", content: "Verified scholarships, research, and programs for ambitious students." },
  ]}),
});

const GRADES = [6, 7, 8, 9, 10, 11, 12];
const COSTS = ["free", "paid", "stipend"] as const;

type CardProps = {
  opp: Opportunity;
  qualitativeBadge: string;
  eligible: boolean;
  reason: string | null;
  days: number;
  saved: boolean;
  hydrated: boolean;
  onView: (opp: Opportunity) => void;
  onSave: (opp: Opportunity) => void;
};

const OpportunityCard = memo(function OpportunityCard({
  opp: o, qualitativeBadge, eligible, reason, days, saved, hydrated, onView, onSave,
}: CardProps) {
  const { dict } = useI18n();
  const urgent = days <= 7;
  const countdown = days <= 0 ? dict.opportunities.lastDay : dict.opportunities.daysLeft.replace("{n}", String(days));

  return (
    <div className="group relative flex flex-col justify-between rounded-3xl border border-navy/10 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-navy/25 hover:shadow-xl md:p-6">
      <div>
        {/* Top Header: Category & Fit */}
        <div className="flex items-center justify-between gap-2">
          <span className="rounded-full bg-navy/5 px-3 py-1 text-[11px] font-semibold text-navy/70">
            {dict.categories[o.category as Category] ?? o.category}
          </span>
          <div className="flex items-center gap-1.5">
            {!eligible && (
              <span className="rounded-full bg-destructive/10 px-2 py-0.5 text-[10px] font-medium text-destructive">
                {dict.opportunities.checkFit}
              </span>
            )}
            <span className="rounded-full bg-gradient-to-r from-growth/20 to-lavender/30 px-3 py-1 text-[11px] font-bold text-navy">
              {qualitativeBadge}
            </span>
          </div>
        </div>

        {/* Title & Organization */}
        <div className="mt-4 font-display text-lg font-semibold leading-snug text-navy transition group-hover:text-growth md:text-xl">
          {o.title}
        </div>
        <div className="mt-1 flex items-center gap-2 text-xs text-navy/50">
          <span className="font-medium text-navy/70 truncate">{o.org}</span>
          {o.verified && (
            <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-growth/15 px-2 py-0.5 text-[10px] font-semibold text-growth">
              ✓ {dict.opportunities.verified}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="mt-3 text-sm leading-relaxed text-navy/70 line-clamp-3">
          {o.description}
        </p>

        {/* Why it matches */}
        {reason && (
          <div className="mt-3 rounded-2xl bg-lavender/15 px-3.5 py-2 text-xs text-navy/80 font-medium">
            💡 {reason}
          </div>
        )}

        {/* Tags */}
        <div className="mt-3.5 flex flex-wrap gap-1.5">
          {o.tags.slice(0, 4).map((t) => (
            <span key={t} className="rounded-full bg-ivory px-2.5 py-0.5 text-[11px] font-medium text-navy/60">
              #{t}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Details & Action Buttons */}
      <div className="mt-5 border-t border-navy/5 pt-4">
        <div className="flex items-center justify-between gap-2 text-xs">
          <span
            className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
              urgent ? "bg-[#F14635]/12 text-[#C23524]" : "bg-navy/5 text-navy/70"
            }`}
          >
            ⏳ {countdown}
          </span>
          {o.sourceChannel && (
            <span className="rounded-full bg-navy/5 px-2.5 py-1 text-[11px] font-medium text-navy/60 truncate">
              📢 {o.sourceChannel}
            </span>
          )}
        </div>

        <div className="mt-4 flex gap-2">
          <button
            onClick={() => onView(o)}
            className="min-h-[44px] flex-1 rounded-full bg-navy px-4 py-2 text-sm font-semibold text-ivory transition hover:bg-navy/90 active:scale-[0.98]"
          >
            {dict.dashboard.view}
          </button>
          {hydrated && (
            <button
              onClick={() => onSave(o)}
              title={saved ? "Saved" : "Save opportunity"}
              className={`min-h-[44px] min-w-[44px] rounded-full border border-navy/15 px-3 py-2 text-base transition hover:border-navy/40 active:scale-[0.98] ${
                saved ? "bg-gold/40 text-navy" : "bg-white text-navy/60"
              }`}
            >
              {saved ? "★" : "☆"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
});

function OpportunitiesPage() {
  const navigate = useNavigate();
  const { dict, lang } = useI18n();
  const hydrated = useHydrated();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("All");
  const [grade, setGrade] = useState("");
  const [country, setCountry] = useState("");
  const [format, setFormat] = useState("");
  const [cost, setCost] = useState("");
  const [active, setActive] = useState<Opportunity | null>(null);
  const [eligibleOnly, setEligibleOnly] = useState(false);

  const { user } = useSession();

  const { data: profile } = useProfile(user);
  const { data: onboarding } = useOnboarding(user);
  const { data: saved } = useSavedOpportunities(user);
  const toggleSaved = useToggleSaved(user?.id);

  const { data: rawOpportunities } = useOpportunities();
  // Expired listings drop out automatically: the deadline is compared to today.
  const openList = useMemo(() => openOpportunities(rawOpportunities), [rawOpportunities]);

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
    const ranked = rankOpportunities(openList, ctx);
    const g = grade ? parseInt(grade, 10) : null;
    return ranked
      .filter((r) => cat === "All" || r.opp.category === cat)
      .filter((r) => !eligibleOnly || r.eligible)
      .filter((r) => g == null || ((r.opp.minGrade ?? 6) <= g && (r.opp.maxGrade ?? 12) >= g))
      .filter((r) => !country || !r.opp.countries || r.opp.countries === "worldwide" || (r.opp.countries as string[]).includes(country))
      .filter((r) => !format || r.opp.format === format)
      .filter((r) => !cost || r.opp.cost === cost)
      .filter((r) => !q || (r.opp.title + r.opp.description + r.opp.org + r.opp.tags.join(" ")).toLowerCase().includes(q.toLowerCase()));
  }, [q, cat, eligibleOnly, ctx, grade, country, format, cost, openList]);

  const onSave = useCallback((opp: Opportunity) => {
    if (!user) { navigate({ to: "/auth", search: { mode: "signup" } }); return; }
    toggleSaved.mutate({ opportunityId: opp.id, currentlySaved: savedIds.has(opp.id) });
  }, [user, navigate, toggleSaved, savedIds]);

  const catLabel = (c: string) => c === "All" ? dict.opportunities.all : (dict.categories[c as Category] ?? c);
  const formatLabel = (f: string) =>
    f === "online" ? dict.opportunities.online : f === "in-person" ? dict.opportunities.inPerson : dict.opportunities.hybrid;
  const costLabel = (c: string) =>
    c === "free" ? dict.opportunities.costFree : c === "paid" ? dict.opportunities.costPaid : dict.opportunities.costStipend;

  const anyFilter = !!(grade || country || format || cost || q || cat !== "All" || eligibleOnly);
  const resetFilters = () => {
    setGrade(""); setCountry(""); setFormat(""); setCost(""); setQ(""); setCat("All"); setEligibleOnly(false);
  };

  const selectClass =
    "min-h-[44px] rounded-full border border-navy/15 bg-white px-4 py-2 text-xs font-medium text-navy/80 outline-none transition hover:border-navy/30 focus:border-navy/60";

  return (
    <div className="min-h-screen bg-ivory/50 pb-24 md:pb-16">
      <Navbar />
      
      {/* Full-width container */}
      <main className="mx-auto max-w-[1720px] px-4 py-8 sm:px-6 md:py-10 lg:px-10">
        
        {/* Header Title Section */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-growth">
              {dict.opportunities.kicker}
            </div>
            <h1 className="mt-1.5 font-display text-3xl font-bold tracking-tight text-navy md:text-5xl lg:text-6xl">
              {dict.opportunities.title}
            </h1>
            <p className="mt-2 max-w-3xl text-sm text-navy/70 md:text-base">
              {dict.opportunities.sub}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-navy/70 shadow-sm border border-navy/10">
              ⚡ {filtered.length} {filtered.length === 1 ? "Opportunity" : "Opportunities"} Available
            </span>
          </div>
        </div>

        {/* Search & Main Controls Bar */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <div className="flex flex-1 min-w-[280px] items-center gap-2.5 rounded-full border border-navy/15 bg-white px-4 py-2.5 min-h-[50px] shadow-sm transition focus-within:border-navy/50 focus-within:shadow-md">
            <span className="text-navy/40 text-base">🔍</span>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={dict.opportunities.search}
              className="w-full bg-transparent text-sm text-navy placeholder:text-navy/40 outline-none"
            />
            {q && (
              <button onClick={() => setQ("")} className="text-xs text-navy/40 hover:text-navy px-1">
                ✕
              </button>
            )}
          </div>
          {hydrated && user && (
            <label className="flex min-h-[50px] cursor-pointer items-center gap-2 rounded-full border border-navy/15 bg-white px-5 py-2.5 text-xs font-semibold text-navy shadow-sm transition hover:border-navy/30">
              <input
                type="checkbox"
                checked={eligibleOnly}
                onChange={(e) => setEligibleOnly(e.target.checked)}
                className="h-4 w-4 rounded text-navy focus:ring-navy"
              />
              {dict.opportunities.eligibleOnly}
            </label>
          )}
        </div>

        {/* Extended Filter Dropdowns */}
        <div className="mt-3.5 flex flex-wrap items-center gap-2">
          <select aria-label={dict.opportunities.anyGrade} value={grade} onChange={(e) => setGrade(e.target.value)} className={selectClass}>
            <option value="">{dict.opportunities.anyGrade}</option>
            {GRADES.map((g) => <option key={g} value={g}>{dict.opportunities.gradeLabel.replace("{n}", String(g))}</option>)}
          </select>
          <select aria-label={dict.opportunities.anyCountry} value={country} onChange={(e) => setCountry(e.target.value)} className={selectClass}>
            <option value="">{dict.opportunities.anyCountry}</option>
            {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          <select aria-label={dict.opportunities.anyFormat} value={format} onChange={(e) => setFormat(e.target.value)} className={selectClass}>
            <option value="">{dict.opportunities.anyFormat}</option>
            {FORMATS.map((f) => <option key={f} value={f}>{formatLabel(f)}</option>)}
          </select>
          <select aria-label={dict.opportunities.anyCost} value={cost} onChange={(e) => setCost(e.target.value)} className={selectClass}>
            <option value="">{dict.opportunities.anyCost}</option>
            {COSTS.map((c) => <option key={c} value={c}>{costLabel(c)}</option>)}
          </select>
          {anyFilter && (
            <button
              onClick={resetFilters}
              className="min-h-[44px] rounded-full bg-navy/5 px-4 py-2 text-xs font-semibold text-navy transition hover:bg-navy/10 active:scale-95"
            >
              ✕ {dict.opportunities.reset}
            </button>
          )}
        </div>

        {/* Category Chips with Horizontal Scroll */}
        <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {(["All", ...CATEGORIES] as const).map((c) => {
            const count = c === "All" ? openList.length : openList.filter((o) => o.category === c).length;
            const activeCat = cat === c;
            return (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`min-h-[38px] flex-none rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 active:scale-95 ${
                  activeCat
                    ? "bg-navy text-ivory shadow-md"
                    : "border border-navy/15 bg-white text-navy/70 hover:border-navy/40 hover:text-navy"
                }`}
              >
                {catLabel(c)} <span className={`ml-1 text-[10px] ${activeCat ? "text-ivory/80" : "text-navy/40"}`}>({count})</span>
              </button>
            );
          })}
        </div>

        {/* Grid List of Opportunities */}
        <div className="mt-8">
          {filtered.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-navy/20 bg-white/60 p-16 text-center">
              <div className="text-3xl">🔍</div>
              <div className="mt-3 text-lg font-semibold text-navy">{dict.opportunities.empty}</div>
              <p className="mt-1 text-sm text-navy/50">Попробуйте сбросить фильтры или изменить поисковый запрос.</p>
              <button onClick={resetFilters} className="mt-4 rounded-full bg-navy px-5 py-2 text-xs font-semibold text-ivory">
                {dict.opportunities.reset}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map(({ opp: o, qualitativeBadge, eligible, reasons }) => (
                <OpportunityCard
                  key={o.id}
                  opp={o}
                  qualitativeBadge={qualitativeBadge}
                  eligible={eligible}
                  reason={reasons[0] ?? null}
                  days={daysLeft(o.deadline)}
                  saved={savedIds.has(o.id)}
                  hydrated={hydrated}
                  onView={setActive}
                  onSave={onSave}
                />
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Opportunity Details Modal */}
      {active && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy/60 p-4 backdrop-blur-sm animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl md:p-8"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-navy/5 px-3 py-1 text-xs font-semibold text-navy/70">
                {dict.categories[active.category as Category] ?? active.category}
              </span>
              <button
                onClick={() => setActive(null)}
                aria-label={dict.common.close}
                className="flex h-9 w-9 items-center justify-center rounded-full text-navy/60 hover:bg-navy/5 hover:text-navy text-lg"
              >
                ✕
              </button>
            </div>

            <h3 className="mt-4 font-display text-2xl font-bold leading-tight text-navy md:text-3xl">
              {active.title}
            </h3>

            <div className="mt-1.5 flex items-center gap-2 text-sm text-navy/60">
              <span className="font-semibold text-navy/80">{active.org}</span>
              {active.verified && (
                <span className="inline-flex items-center gap-1 rounded-full bg-growth/15 px-2 py-0.5 text-[10px] font-semibold text-growth">
                  ✓ {dict.opportunities.verified}
                </span>
              )}
            </div>

            <p className="mt-4 text-base leading-relaxed text-navy/80">
              {active.description}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-ivory p-4">
                <div className="text-[11px] font-bold uppercase tracking-wider text-navy/50">{dict.dashboard.deadline}</div>
                <div className="mt-1 font-display text-xl font-bold text-navy">{formatDate(active.deadline, lang, { dateStyle: "long" })}</div>
                <div className="mt-1 text-xs font-semibold text-[#C23524]">
                  ⏳ {daysLeft(active.deadline) <= 0
                    ? dict.opportunities.lastDay
                    : dict.opportunities.daysLeft.replace("{n}", String(daysLeft(active.deadline)))}
                </div>
              </div>

              <div className="rounded-2xl bg-ivory p-4">
                <div className="text-[11px] font-bold uppercase tracking-wider text-navy/50">{dict.opportunities.requirements}</div>
                <ul className="mt-1 text-xs space-y-1 text-navy/80 font-medium">
                  {active.requirements.length > 0 ? (
                    active.requirements.map((r) => <li key={r}>• {r}</li>)
                  ) : (
                    <li>• Открытая регистрация</li>
                  )}
                </ul>
              </div>

              <div className="rounded-2xl bg-ivory p-4">
                <div className="text-[11px] font-bold uppercase tracking-wider text-navy/50">{dict.opportunities.eligibility}</div>
                <ul className="mt-1 text-xs space-y-1 text-navy/80 font-medium">
                  {active.minAge && <li>• {dict.opportunities.ages} {active.minAge}–{active.maxAge ?? "18+"}</li>}
                  {active.minGrade && <li>• {dict.opportunities.grades} {active.minGrade}–{active.maxGrade ?? 12}</li>}
                  <li>• {active.countries === "worldwide" || !active.countries ? dict.opportunities.worldwide : (active.countries as string[]).join(", ")}</li>
                  {active.format && <li>• Формат: {formatLabel(active.format)}</li>}
                  {active.cost && <li>• Стоимость: {costLabel(active.cost)}</li>}
                </ul>
              </div>

              <div className="rounded-2xl bg-ivory p-4">
                <div className="text-[11px] font-bold uppercase tracking-wider text-navy/50">{dict.opportunities.bestFor}</div>
                <div className="mt-1.5 flex flex-wrap gap-1">
                  {active.fields.map((f) => (
                    <span key={f} className="rounded-full bg-lavender/25 px-2.5 py-0.5 text-[11px] font-semibold text-navy">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Source channel block */}
            {active.sourceUrl && (
              <div className="mt-4 flex items-center justify-between rounded-2xl bg-navy/5 px-4 py-3 text-xs text-navy/80">
                <span>📢 Источник: <strong>{active.sourceChannel || "Telegram-канал"}</strong></span>
                <a
                  href={active.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-navy underline hover:opacity-80 inline-flex items-center gap-1"
                >
                  Открыть в Telegram ↗
                </a>
              </div>
            )}

            {/* Modal Actions */}
            <div className="mt-6 flex flex-wrap items-center justify-end gap-2.5 border-t border-navy/5 pt-4">
              <button
                onClick={() => setActive(null)}
                className="rounded-full border border-navy/15 px-5 py-2.5 text-sm font-semibold text-navy hover:bg-navy/5 transition"
              >
                {dict.common.close}
              </button>
              <button
                onClick={() => onSave(active)}
                className="rounded-full border border-navy/15 px-5 py-2.5 text-sm font-semibold text-navy hover:bg-navy/5 transition"
              >
                {savedIds.has(active.id) ? dict.opportunities.saved : dict.opportunities.save}
              </button>
              {active.url && (
                <a
                  href={active.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-navy/20 bg-white px-5 py-2.5 text-sm font-semibold text-navy hover:bg-navy/5 transition inline-flex items-center gap-1 shadow-sm"
                >
                  Официальный сайт ↗
                </a>
              )}
              <Link
                to="/apply-guide/$id"
                params={{ id: active.id }}
                className="rounded-full bg-navy px-6 py-2.5 text-sm font-semibold text-ivory hover:bg-navy/90 transition shadow-md"
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
