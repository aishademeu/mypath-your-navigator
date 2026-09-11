import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  useSession,
  useProfile,
  useOnboarding,
  usePortfolio,
  useChat,
  useCareerHypotheses,
  useMyPathAction,
  useCompleteMyPathAction,
} from "@/lib/supabase-hooks";
import { openOpportunities, type Category } from "@/lib/opportunities";
import { rankOpportunities } from "@/lib/matching";
import { formatDate } from "@/lib/format";
import { useI18n } from "@/lib/i18n";
import { getMyPathActionFn } from "@/lib/server-functions";

export const Route = createFileRoute("/_authenticated/dashboard")({
  component: Dashboard,
  head: () => ({
    meta: [
      { title: "MyPath — Dashboard" },
      { name: "description", content: "Your personal MyPath dashboard: direction, growth, and matched opportunities." },
    ],
  }),
});

function Dashboard() {
  const { user } = useSession();
  const { data: profile } = useProfile(user);
  const { data: onboarding } = useOnboarding(user);
  const { data: portfolio } = usePortfolio(user);
  const { data: chat } = useChat(user);
  const { data: hypotheses } = useCareerHypotheses(user?.id);
  const { data: currentAction, refetch: refetchAction } = useMyPathAction(user?.id);
  const completeAction = useCompleteMyPathAction(user?.id);
  const { dict, lang } = useI18n();

  const [generatingAction, setGeneratingAction] = useState(false);

  // Trigger My Path Engine next action if none exists
  useEffect(() => {
    if (user && !currentAction && !generatingAction) {
      setGeneratingAction(true);
      getMyPathActionFn({ lang })
        .then(() => refetchAction())
        .catch((err) => console.error("Failed to compute next action:", err))
        .finally(() => setGeneratingAction(false));
    }
  }, [user, currentAction, generatingAction, lang, refetchAction]);

  const ctx = useMemo(
    () => ({
      age: profile?.age ?? null,
      grade: profile?.grade ? parseInt(profile.grade, 10) : null,
      country: profile?.country ?? null,
      interests: onboarding?.interests ?? [],
      problems: onboarding?.problems ?? [],
      goals: onboarding?.goals ?? [],
    }),
    [profile, onboarding]
  );

  const recs = useMemo(() => rankOpportunities(openOpportunities(), ctx).slice(0, 6), [ctx]);

  const done = !!onboarding?.completed_at;
  const firstName = (profile?.name ?? user?.email?.split("@")[0] ?? "friend").split(" ")[0];

  const leadingHypothesis = (hypotheses && hypotheses.length > 0) ? hypotheses[0] : null;

  const directionTitle = leadingHypothesis
    ? leadingHypothesis.direction_name
    : (onboarding?.interests ?? []).length
    ? `${onboarding!.interests[0]} & Innovation`
    : dict.dashboard.formingDirection;

  const handleCompleteAction = async () => {
    if (!currentAction) return;
    await completeAction.mutateAsync(currentAction.id);
    setGeneratingAction(true);
    try {
      await getMyPathActionFn({ lang });
      refetchAction();
    } finally {
      setGeneratingAction(false);
    }
  };

  return (
    <div className="min-h-screen pb-24 md:pb-0">
      <Navbar />
      <main className="mx-auto max-w-7xl px-5 py-8 md:px-6 md:py-10">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-3 md:flex md:flex-wrap md:justify-between md:gap-4">
          <div className="min-w-0">
            <div className="text-xs font-semibold uppercase tracking-widest text-navy/50">{dict.dashboard.kicker}</div>
            <h1 className="mt-2 truncate font-display text-3xl md:text-5xl">
              {dict.dashboard.welcome.replace("{name}", firstName)}
            </h1>
            <p className="mt-2 text-sm text-navy/60 md:text-base">{dict.dashboard.todaySub}</p>
          </div>
          <div className="flex flex-none flex-wrap gap-2">
            <Link
              to="/analyze"
              className="rounded-full bg-gradient-to-r from-navy to-lavender px-4 py-2.5 text-xs font-semibold text-ivory md:px-5 md:text-sm shadow"
            >
              ✦ {dict.dashboard.analyze}
            </Link>
            {!done && (
              <Link
                to="/onboarding"
                className="rounded-full border border-navy/15 px-4 py-2.5 text-xs font-medium md:px-5 md:text-sm"
              >
                {dict.dashboard.completeProfile}
              </Link>
            )}
          </div>
        </div>

        {/* TOP SECTION: My Path Single Priority Action & Working Direction */}
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {/* Working Direction Card */}
          <div className="rounded-3xl border border-navy/10 bg-gradient-to-br from-navy to-[#1d3a72] p-6 text-ivory flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-widest text-ivory/60">
                  {lang === "ru" ? "Текущая гипотеза пути" : lang === "kk" ? "Қазіргі жұмыс гипотезасы" : "Working Trajectory"}
                </span>
                <Link to="/analyze" className="text-xs text-gold underline hover:text-white">
                  {lang === "ru" ? "Все гипотезы →" : "All Hypotheses →"}
                </Link>
              </div>
              <div className="mt-3 font-display text-2xl leading-tight md:text-3xl text-balance">
                {directionTitle}
              </div>
              {leadingHypothesis ? (
                <p className="mt-3 text-xs text-ivory/80 leading-relaxed line-clamp-3">
                  {leadingHypothesis.why_it_appeared}
                </p>
              ) : (
                <p className="mt-3 text-xs text-ivory/70 leading-relaxed">
                  {lang === "ru"
                    ? "Пройди адаптивное интервью, чтобы сформировать 3–5 индивидуальных гипотез направления."
                    : "Run the adaptive interview to synthesize 3–5 personalized direction hypotheses."}
                </p>
              )}
            </div>

            <div className="mt-6 border-t border-white/10 pt-4">
              <div className="text-[11px] uppercase tracking-wider text-ivory/60 font-semibold">
                {lang === "ru" ? "Базовые сильные стороны:" : "Key Strengths:"}
              </div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {(onboarding?.strengths ?? ["Curiosity", "Initiative"]).slice(0, 3).map((s) => (
                  <span key={s} className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs text-ivory">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* MY PATH ENGINE: The Single Primary Next Action */}
          <div className="rounded-3xl border border-navy/10 bg-white p-6 lg:col-span-2 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-growth/20 text-xs font-bold text-growth">
                    1
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-navy/60">
                    {lang === "ru" ? "Главное следующее действие (My Path Engine)" : lang === "kk" ? "Басты келесі қадам" : "Primary Next Action"}
                  </span>
                </div>
                <span className="rounded-full bg-lavender/30 px-2.5 py-0.5 text-[10px] font-bold text-navy uppercase tracking-wider">
                  Highest Leverage
                </span>
              </div>

              {currentAction ? (
                <div className="mt-4 space-y-3">
                  <h2 className="font-display text-xl md:text-2xl text-navy leading-snug">
                    {currentAction.action}
                  </h2>
                  <div className="rounded-2xl bg-ivory p-4 space-y-2 text-sm text-navy/80 leading-relaxed">
                    <div>
                      <b className="text-navy">{lang === "ru" ? "Почему это важно:" : "Why it matters:"}</b>{" "}
                      {currentAction.why_it_matters}
                    </div>
                    <div>
                      <b className="text-navy">{lang === "ru" ? "Ожидаемый результат:" : "Expected outcome:"}</b>{" "}
                      {currentAction.expected_outcome}
                    </div>
                    {currentAction.supporting_recommendation && (
                      <div className="text-xs text-navy/60 pt-1 border-t border-navy/5">
                        💡 <b>Tip:</b> {currentAction.supporting_recommendation}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="mt-6 py-6 text-center text-sm text-navy/60">
                  <span className="animate-pulse">
                    {lang === "ru" ? "Вычисляю ключевое следующее действие..." : "Computing your highest-leverage next action..."}
                  </span>
                </div>
              )}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-navy/5 pt-4">
              <span className="text-xs text-navy/50">
                {lang === "ru" ? "Одна главная задача вместо списка из 10 дел" : "One focal action instead of an overwhelming checklist"}
              </span>
              {currentAction && (
                <button
                  disabled={completeAction.isPending || generatingAction}
                  onClick={handleCompleteAction}
                  className="rounded-full bg-navy px-5 py-2 text-xs font-semibold text-ivory hover:bg-navy/90 transition shadow disabled:opacity-50"
                >
                  {completeAction.isPending ? "Updating..." : (lang === "ru" ? "✓ Завершить и обновить шаг" : "✓ Mark Done & Recalculate")}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* FOR YOU RECOMMENDATION SECTION: Qualitative, No Fake Match Percentages */}
        <section className="mt-12 md:mt-14">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-display text-2xl md:text-3xl">{dict.dashboard.recommended}</h2>
              <p className="mt-1 text-xs text-navy/60">
                {lang === "ru"
                  ? "Персонально подобранные возможности на основе твоей траектории и интересов."
                  : "Curated opportunities grounded strictly in your verified profile and direction."}
              </p>
            </div>
            <Link to="/opportunities" className="text-sm font-medium underline">
              {dict.dashboard.browseAll}
            </Link>
          </div>

          <div className="mt-5 grid gap-4 md:mt-6 md:grid-cols-2 md:gap-5 xl:grid-cols-3">
            {recs.map(({ opp: o, eligible, reasons, qualitativeBadge }) => (
              <div
                key={o.id}
                className="group flex flex-col justify-between rounded-3xl border border-navy/10 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-xl md:p-6"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-navy/5 px-3 py-1 text-[11px] font-medium text-navy/70">
                      {dict.categories[o.category as Category] ?? o.category}
                    </span>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                        eligible
                          ? "bg-growth/15 text-growth"
                          : "bg-destructive/10 text-destructive"
                      }`}
                    >
                      {eligible ? qualitativeBadge : dict.dashboard.checkEligibility}
                    </span>
                  </div>

                  <div className="mt-4 font-display text-lg leading-snug md:text-xl text-navy group-hover:text-growth transition">
                    {o.title}
                  </div>
                  <div className="text-xs text-navy/50">{o.org}</div>

                  <p className="mt-3 text-sm text-navy/70 line-clamp-3 leading-relaxed">
                    {o.description}
                  </p>

                  <div className="mt-4 text-xs text-navy/60">
                    {dict.dashboard.deadline} · {formatDate(o.deadline, lang)}
                  </div>

                  {reasons[0] && (
                    <div className="mt-3 rounded-xl bg-lavender/20 px-3 py-2 text-xs text-navy/80">
                      <b>{dict.dashboard.why}:</b> {reasons[0]}
                    </div>
                  )}
                </div>

                <div className="mt-5 flex gap-2 border-t border-navy/5 pt-4">
                  <Link
                    to="/opportunities"
                    className="flex-1 rounded-full border border-navy/15 px-4 py-2 text-center text-sm font-medium hover:bg-navy/5"
                  >
                    {dict.dashboard.view}
                  </Link>
                  <Link
                    to="/apply-guide/$id"
                    params={{ id: o.id }}
                    className="flex-1 rounded-full bg-navy px-4 py-2 text-center text-sm font-semibold text-ivory hover:bg-navy/90"
                  >
                    {dict.dashboard.apply}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM SECTION: Portfolio Progress & AI Mentor Shortcut */}
        <section className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2">
          <div className="rounded-3xl border border-navy/10 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-2xl">{dict.dashboard.myPortfolio}</h2>
              <Link to="/profile" className="text-sm font-medium underline">
                {dict.dashboard.editArrow}
              </Link>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {(["projects", "achievements", "leadership", "skills"] as const).map((k) => {
                const n = (portfolio ?? []).filter((x) => x.section === k).length;
                return (
                  <div key={k} className="rounded-2xl bg-ivory p-4">
                    <div className="text-xs font-semibold uppercase tracking-wider text-navy/50">
                      {dict.dashboard.portfolioSections[k]}
                    </div>
                    <div className="mt-1 font-display text-3xl text-navy">{n}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-navy/10 bg-gradient-to-br from-lavender/60 via-white to-gold/40 p-6 flex flex-col justify-between shadow-sm">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-navy/60">{dict.mentor.kicker}</div>
              <div className="mt-2 font-display text-2xl text-navy">{dict.dashboard.mentorCardTitle}</div>
              <p className="mt-2 max-w-md text-sm text-navy/70 leading-relaxed">{dict.dashboard.mentorCardSub}</p>
            </div>
            <div>
              <Link
                to="/mentor"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-2.5 text-sm font-semibold text-ivory shadow hover:bg-navy/90"
              >
                {dict.dashboard.openMentor} →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
