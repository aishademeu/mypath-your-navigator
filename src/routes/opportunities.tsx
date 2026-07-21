import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { OPPORTUNITIES, matchScore, type Opportunity } from "@/lib/opportunities";
import { getProfile } from "@/lib/store";

export const Route = createFileRoute("/opportunities")({ component: OpportunitiesPage });

const CATEGORIES = ["All", "Scholarships", "Internships", "Research", "Competitions", "Volunteering", "Leadership Programs", "Projects"] as const;

function OpportunitiesPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("All");
  const [active, setActive] = useState<Opportunity | null>(null);
  const [saved, setSaved] = useState<string[]>([]);
  const [profile, setProfile] = useState(getProfile());

  useEffect(() => { setProfile(getProfile()); }, []);

  const filtered = useMemo(() => {
    return OPPORTUNITIES
      .filter((o) => cat === "All" || o.category === cat)
      .filter((o) => !q || (o.title + o.description + o.org + o.tags.join(" ")).toLowerCase().includes(q.toLowerCase()))
      .map((o) => ({ o, s: matchScore(o, profile?.onboarding?.interests, profile?.onboarding?.problems) }))
      .sort((a, b) => b.s - a.s);
  }, [q, cat, profile]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="text-xs font-semibold uppercase tracking-widest text-navy/50">Opportunities</div>
        <h1 className="mt-2 font-display text-4xl md:text-5xl">Curated for ambitious minds.</h1>
        <p className="mt-2 max-w-2xl text-navy/60">Scholarships, research, competitions and programs from institutions worldwide — ranked by fit with your profile.</p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <div className="glass flex flex-1 items-center gap-2 rounded-full px-4 py-2">
            <span className="text-navy/40">🔍</span>
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search opportunities, orgs, tags…" className="w-full bg-transparent text-sm outline-none" />
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${cat === c ? "bg-navy text-ivory" : "border border-navy/15 bg-white hover:border-navy/40"}`}>{c}</button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map(({ o, s }) => (
            <div key={o.id} className="group flex flex-col rounded-3xl border border-navy/10 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-xl">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-navy/5 px-3 py-1 text-[11px] font-medium text-navy/70">{o.category}</span>
                <span className="rounded-full bg-gradient-to-r from-growth/20 to-lavender/30 px-3 py-1 text-[11px] font-semibold">{s}% match</span>
              </div>
              <div className="mt-4 font-display text-xl leading-snug">{o.title}</div>
              <div className="text-xs text-navy/50">{o.org}</div>
              <p className="mt-3 text-sm text-navy/70 line-clamp-3">{o.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {o.tags.map((t) => <span key={t} className="rounded-full bg-ivory px-2 py-0.5 text-[10px] text-navy/60">#{t}</span>)}
              </div>
              <div className="mt-4 text-xs text-navy/60">Deadline · {new Date(o.deadline).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}</div>
              <div className="mt-5 flex gap-2">
                <button onClick={() => setActive(o)} className="flex-1 rounded-full bg-navy px-4 py-2 text-sm font-semibold text-ivory">View</button>
                <button onClick={() => setSaved((s) => s.includes(o.id) ? s.filter(x => x !== o.id) : [...s, o.id])} className={`rounded-full border border-navy/15 px-3 py-2 text-sm ${saved.includes(o.id) ? "bg-gold/40" : "bg-white"}`}>
                  {saved.includes(o.id) ? "★" : "☆"}
                </button>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full rounded-3xl border border-dashed border-navy/20 p-10 text-center text-navy/60">No opportunities match those filters yet.</div>
          )}
        </div>
      </main>

      {active && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-navy/40 p-4 backdrop-blur-sm md:items-center" onClick={() => setActive(null)}>
          <div onClick={(e) => e.stopPropagation()} className="w-full max-w-2xl rounded-3xl bg-white p-8 shadow-2xl">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-navy/5 px-3 py-1 text-xs">{active.category}</span>
              <button onClick={() => setActive(null)} className="text-navy/60 hover:text-navy">✕</button>
            </div>
            <h3 className="mt-4 font-display text-3xl">{active.title}</h3>
            <div className="text-sm text-navy/60">{active.org}</div>
            <p className="mt-4 text-navy/80">{active.description}</p>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <div className="rounded-2xl bg-ivory p-4">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-navy/60">Deadline</div>
                <div className="mt-1 font-display text-xl">{new Date(active.deadline).toLocaleDateString(undefined, { dateStyle: "long" })}</div>
              </div>
              <div className="rounded-2xl bg-ivory p-4">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-navy/60">Requirements</div>
                <ul className="mt-1 text-sm">{active.requirements.map((r) => <li key={r}>• {r}</li>)}</ul>
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-2">
              <button onClick={() => setActive(null)} className="rounded-full border border-navy/15 px-5 py-2.5 text-sm">Close</button>
              <button className="rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-ivory">Apply guide →</button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
