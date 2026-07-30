import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useSession, useProfile, useOnboarding, usePortfolio, useChat } from "@/lib/supabase-hooks";
import { OPPORTUNITIES, type Category } from "@/lib/opportunities";
import { rankOpportunities } from "@/lib/matching";
import { formatDate } from "@/lib/format";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/_authenticated/dashboard")({
  component: Dashboard,
  head: () => ({ meta: [{ title: "MyPath — Dashboard" }, { name: "description", content: "Your personal MyPath dashboard: direction, growth, and matched opportunities." }] }),
});

function Dashboard() {
  const { user } = useSession();
  const { data: profile } = useProfile(user);
  const { data: onboarding } = useOnboarding(user);
  const { data: portfolio } = usePortfolio(user);
  const { data: chat } = useChat(user);
  const { dict } = useI18n();

  const ctx = useMemo(() => ({
    age: profile?.age ?? null,
    grade: profile?.grade ? parseInt(profile.grade, 10) : null,
    country: profile?.country ?? null,
    interests: onboarding?.interests ?? [],
    problems: onboarding?.problems ?? [],
    goals: onboarding?.goals ?? [],
  }), [profile, onboarding]);

  const recs = useMemo(() => rankOpportunities(OPPORTUNITIES, ctx).slice(0, 6), [ctx]);

  const done = !!onboarding?.completed_at;
  const firstName = (profile?.name ?? user?.email?.split("@")[0] ?? "friend").split(" ")[0];
  const direction = (onboarding?.interests ?? []).length
    ? `${onboarding!.interests[0]} + ${onboarding!.interests[1] ?? ""}`.trim().replace(/\+\s*$/, "")
    : dict.dashboard.formingDirection;
  const growth = growthPct({ done, portfolio: portfolio?.length ?? 0, chat: chat?.length ?? 0 });

  return (
    <div className="min-h-screen pb-24 md:pb-0">
      <Navbar />
      <main className="mx-auto max-w-7xl px-5 py-8 md:px-6 md:py-10">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-3 md:flex md:flex-wrap md:justify-between md:gap-4">
          <div className="min-w-0">
            <div className="text-xs font-semibold uppercase tracking-widest text-navy/50">{dict.dashboard.kicker}</div>
            <h1 className="mt-2 truncate font-display text-3xl md:text-5xl">{dict.dashboard.welcome.replace("{name}", firstName)}</h1>
            <p className="mt-2 text-sm text-navy/60 md:text-base">{dict.dashboard.todaySub}</p>
          </div>
          <div className="flex flex-none flex-wrap gap-2">
            <Link to="/analyze" className="rounded-full bg-gradient-to-r from-navy to-lavender px-4 py-2.5 text-xs font-semibold text-ivory md:px-5 md:text-sm">{dict.dashboard.analyze}</Link>
            {!done && <Link to="/onboarding" className="rounded-full border border-navy/15 px-4 py-2.5 text-xs font-medium md:px-5 md:text-sm">{dict.dashboard.completeProfile}</Link>}
          </div>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          <div className="rounded-3xl border border-navy/10 bg-white p-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-navy/50">{dict.dashboard.growthKicker}</div>
            <div className="mt-4 flex items-center gap-6">
              <ProgressRing value={growth} />
              <div className="min-w-0">
                <div className="font-display text-3xl">{growth}%</div>
                <div className="text-sm text-navy/60">{dict.dashboard.completenessLabel}</div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {[
                    [dict.dashboard.checks.onboarding, done],
                    [dict.dashboard.checks.portfolio, (portfolio?.length ?? 0) >= 3],
                    [dict.dashboard.checks.chat, (chat?.length ?? 0) > 0],
                  ].map(([k, ok]) => (
                    <span key={k as string} className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${ok ? "bg-growth/20 text-navy" : "bg-navy/5 text-navy/50"}`}>
                      {ok ? "✓" : "○"} {k}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-navy/10 bg-gradient-to-br from-navy to-[#1d3a72] p-6 text-ivory lg:col-span-2">
            <div className="text-xs font-semibold uppercase tracking-widest text-ivory/60">{dict.dashboard.myDirection}</div>
            <div className="mt-3 font-display text-2xl leading-tight md:text-4xl">{direction}</div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div>
                <div className="text-xs uppercase tracking-wider text-ivory/60">{dict.dashboard.topStrengths}</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {(onboarding?.strengths ?? ["Curiosity", "Initiative"]).slice(0, 4).map((s) => (
                    <span key={s} className="rounded-full bg-white/10 px-3 py-1 text-xs">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-ivory/60">{dict.dashboard.nextSteps}</div>
                <ul className="mt-2 space-y-1 text-sm text-ivory/90">
                  {dict.dashboard.nextStepsList.map((s) => <li key={s}>• {s}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-12 md:mt-14">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-2xl md:text-3xl">{dict.dashboard.recommended}</h2>
            <Link to="/opportunities" className="text-sm font-medium underline">{dict.dashboard.browseAll}</Link>
          </div>
          <div className="mt-5 grid gap-4 md:mt-6 md:grid-cols-2 md:gap-5 xl:grid-cols-3">
            {recs.map(({ opp: o, score, eligible, reasons }) => (
              <div key={o.id} className="group flex flex-col rounded-3xl border border-navy/10 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-xl md:p-6">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-navy/5 px-3 py-1 text-[11px] font-medium text-navy/70">{dict.categories[o.category as Category]}</span>
                  <span className="rounded-full bg-gradient-to-r from-growth/20 to-lavender/30 px-3 py-1 text-[11px] font-semibold text-navy">{dict.dashboard.match.replace("{n}", String(score))}</span>
                </div>
                <div className="mt-4 font-display text-lg leading-snug md:text-xl">{o.title}</div>
                <div className="text-xs text-navy/50">{o.org}</div>
                <p className="mt-3 text-sm text-navy/70 line-clamp-3">{o.description}</p>
                {!eligible && <div className="mt-2 rounded-lg bg-destructive/10 px-2 py-1 text-[10px] text-destructive">{dict.dashboard.checkEligibility}</div>}
                <div className="mt-4 text-xs text-navy/60">{dict.dashboard.deadline} · {formatDate(o.deadline, lang)}</div>
                {reasons[0] && <div className="mt-3 rounded-xl bg-lavender/20 px-3 py-2 text-xs text-navy/70"><b>{dict.dashboard.why}:</b> {reasons[0]}</div>}
                <div className="mt-4 flex gap-2">
                  <Link to="/opportunities" className="flex-1 rounded-full border border-navy/15 px-4 py-2 text-center text-sm font-medium">{dict.dashboard.view}</Link>
                  <Link to="/apply-guide/$id" params={{ id: o.id }} className="flex-1 rounded-full bg-navy px-4 py-2 text-center text-sm font-semibold text-ivory">{dict.dashboard.apply}</Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2">
          <div className="rounded-3xl border border-navy/10 bg-white p-6">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-2xl">{dict.dashboard.myPortfolio}</h2>
              <Link to="/profile" className="text-sm font-medium underline">{dict.dashboard.editArrow}</Link>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {(["projects","achievements","leadership","skills"] as const).map((k) => {
                const n = (portfolio ?? []).filter((x) => x.section === k).length;
                return (
                  <div key={k} className="rounded-2xl bg-ivory p-4">
                    <div className="text-xs font-semibold uppercase tracking-wider text-navy/50">{dict.dashboard.portfolioSections[k]}</div>
                    <div className="mt-1 font-display text-3xl">{n}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-navy/10 bg-gradient-to-br from-lavender/60 via-white to-gold/40 p-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-navy/60">{dict.mentor.kicker}</div>
            <div className="mt-2 font-display text-2xl">{dict.dashboard.mentorCardTitle}</div>
            <p className="mt-2 max-w-md text-sm text-navy/70">{dict.dashboard.mentorCardSub}</p>
            <Link to="/mentor" className="mt-5 inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-ivory">{dict.dashboard.openMentor}</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function ProgressRing({ value }: { value: number }) {
  const r = 40, c = 2 * Math.PI * r;
  const off = c - (value / 100) * c;
  return (
    <svg width="88" height="88" viewBox="0 0 100 100" className="flex-none">
      <circle cx="50" cy="50" r={r} stroke="rgba(11,31,58,0.08)" strokeWidth="10" fill="none" />
      <circle cx="50" cy="50" r={r} stroke="url(#g)" strokeWidth="10" fill="none" strokeLinecap="round" strokeDasharray={c} strokeDashoffset={off} transform="rotate(-90 50 50)" style={{ transition: "stroke-dashoffset 1s" }} />
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4CAF8A" />
          <stop offset="100%" stopColor="#C8B6FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function growthPct({ done, portfolio, chat }: { done: boolean; portfolio: number; chat: number }) {
  let s = 20;
  if (done) s += 40;
  if (portfolio >= 1) s += 10;
  if (portfolio >= 3) s += 15;
  if (chat > 0) s += 10;
  return Math.min(99, s);
}
