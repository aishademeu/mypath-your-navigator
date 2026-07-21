import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getProfile, isAuthed, type Profile } from "@/lib/store";
import { OPPORTUNITIES, matchScore } from "@/lib/opportunities";

export const Route = createFileRoute("/dashboard")({ component: Dashboard });

function useProfile(): Profile | null {
  const [p, setP] = useState<Profile | null>(null);
  useEffect(() => {
    setP(getProfile());
    const sync = () => setP(getProfile());
    window.addEventListener("mypath:update", sync);
    return () => window.removeEventListener("mypath:update", sync);
  }, []);
  return p;
}

function Dashboard() {
  const navigate = useNavigate();
  const profile = useProfile();

  useEffect(() => {
    if (typeof window !== "undefined" && !isAuthed()) navigate({ to: "/login" });
  }, [navigate]);

  if (!profile) return <div className="min-h-screen" />;

  const { user, onboarding, portfolio } = profile;
  const done = onboarding?.completedAt;
  const direction = deriveDirection(profile);
  const growth = growthPct(profile);

  const recs = useMemo(() => {
    return OPPORTUNITIES
      .map((o) => ({ o, s: matchScore(o, onboarding?.interests, onboarding?.problems) }))
      .sort((a, b) => b.s - a.s)
      .slice(0, 6);
  }, [onboarding]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-navy/50">Dashboard</div>
            <h1 className="mt-2 font-display text-4xl md:text-5xl">Welcome back, {user.name.split(" ")[0]}.</h1>
            <p className="mt-2 text-navy/60">Here's what's opening for you today.</p>
          </div>
          <div className="flex gap-2">
            <Link to="/analyze" className="rounded-full bg-gradient-to-r from-navy to-lavender px-5 py-2.5 text-sm font-semibold text-ivory">✨ Analyze My Path</Link>
            {!done && <Link to="/onboarding" className="rounded-full border border-navy/15 px-5 py-2.5 text-sm font-medium">Complete profile</Link>}
          </div>
        </div>

        {/* TOP GRID */}
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {/* Growth */}
          <div className="rounded-3xl border border-navy/10 bg-white p-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-navy/50">Personal growth</div>
            <div className="mt-4 flex items-center gap-6">
              <ProgressRing value={growth} />
              <div>
                <div className="font-display text-3xl">{growth}%</div>
                <div className="text-sm text-navy/60">Profile completeness</div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {[["Onboarding", !!done], ["Portfolio 3+", portfolio.length >= 3], ["Chat with AI", profile.chat.length > 0]].map(([k, ok]) => (
                    <span key={k as string} className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${ok ? "bg-growth/20 text-navy" : "bg-navy/5 text-navy/50"}`}>
                      {ok ? "✓" : "○"} {k}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Direction */}
          <div className="rounded-3xl border border-navy/10 bg-gradient-to-br from-navy to-[#1d3a72] p-6 text-ivory lg:col-span-2">
            <div className="text-xs font-semibold uppercase tracking-widest text-ivory/60">My Direction</div>
            <div className="mt-3 font-display text-3xl leading-tight md:text-4xl">{direction}</div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div>
                <div className="text-xs uppercase tracking-wider text-ivory/60">Top strengths</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {(onboarding?.strengths ?? ["Curiosity", "Initiative"]).slice(0, 4).map((s) => (
                    <span key={s} className="rounded-full bg-white/10 px-3 py-1 text-xs">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-ivory/60">Next steps</div>
                <ul className="mt-2 space-y-1 text-sm text-ivory/90">
                  <li>• Add 1 project to your portfolio</li>
                  <li>• Apply to a matched opportunity this week</li>
                  <li>• Chat with your AI mentor for direction</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* RECS */}
        <section className="mt-14">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-3xl">Recommended opportunities</h2>
            <Link to="/opportunities" className="text-sm font-medium underline">Browse all →</Link>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {recs.map(({ o, s }) => (
              <div key={o.id} className="group flex flex-col rounded-3xl border border-navy/10 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-navy/5 px-3 py-1 text-[11px] font-medium text-navy/70">{o.category}</span>
                  <span className="rounded-full bg-gradient-to-r from-growth/20 to-lavender/30 px-3 py-1 text-[11px] font-semibold text-navy">{s}% match</span>
                </div>
                <div className="mt-4 font-display text-xl leading-snug">{o.title}</div>
                <div className="text-xs text-navy/50">{o.org}</div>
                <p className="mt-3 text-sm text-navy/70 line-clamp-3">{o.description}</p>
                <div className="mt-4 text-xs text-navy/60">Deadline · {new Date(o.deadline).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}</div>
                <div className="mt-4 rounded-xl bg-lavender/20 px-3 py-2 text-xs text-navy/70"><b>Why it matches:</b> aligns with your {(onboarding?.interests ?? []).slice(0,2).join(" & ") || "interests"}.</div>
                <Link to="/opportunities" className="mt-5 inline-flex items-center justify-center rounded-full bg-navy px-4 py-2 text-sm font-semibold text-ivory">View opportunity →</Link>
              </div>
            ))}
          </div>
        </section>

        {/* PORTFOLIO SUMMARY */}
        <section className="mt-16 grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-navy/10 bg-white p-6">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-2xl">My portfolio</h2>
              <Link to="/portfolio" className="text-sm font-medium underline">Edit →</Link>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {["projects", "achievements", "leadership", "skills"].map((k) => {
                const n = portfolio.filter((x) => x.section === k).length;
                return (
                  <div key={k} className="rounded-2xl bg-ivory p-4">
                    <div className="text-xs font-semibold uppercase tracking-wider text-navy/50">{k}</div>
                    <div className="mt-1 font-display text-3xl">{n}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-navy/10 bg-gradient-to-br from-lavender/60 via-white to-gold/40 p-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-navy/60">MyPath AI Mentor</div>
            <div className="mt-2 font-display text-2xl">Your personal guide for direction.</div>
            <p className="mt-2 max-w-md text-sm text-navy/70">Ask anything — from "what should I do next?" to "help me plan my summer."</p>
            <Link to="/mentor" className="mt-5 inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-ivory">Open AI Mentor →</Link>
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
    <svg width="100" height="100" viewBox="0 0 100 100">
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

function deriveDirection(p: Profile) {
  const i = p.onboarding?.interests ?? [];
  if (!i.length) return "Explorer — direction forming";
  const a = i[0], b = i[1] ?? "Growth";
  return `${a} + ${b}`;
}

function growthPct(p: Profile) {
  let s = 20;
  if (p.onboarding?.completedAt) s += 40;
  if (p.portfolio.length >= 1) s += 10;
  if (p.portfolio.length >= 3) s += 15;
  if (p.chat.length > 0) s += 10;
  return Math.min(99, s);
}
