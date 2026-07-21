import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getProfile, isAuthed, updateProfile, uid, type PortfolioItem } from "@/lib/store";

export const Route = createFileRoute("/portfolio")({ component: PortfolioPage });

const SECTIONS: { key: PortfolioItem["section"]; label: string; hint: string }[] = [
  { key: "about", label: "About me", hint: "Who you are in one paragraph." },
  { key: "story", label: "My story", hint: "The path that led you here." },
  { key: "projects", label: "Projects", hint: "Things you've built." },
  { key: "research", label: "Research", hint: "Papers, investigations, deep dives." },
  { key: "leadership", label: "Leadership", hint: "Where you led others." },
  { key: "achievements", label: "Achievements", hint: "Awards & recognition." },
  { key: "skills", label: "Skills", hint: "What you're great at." },
];

function PortfolioPage() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(getProfile());
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    if (!isAuthed()) navigate({ to: "/login" });
    setProfile(getProfile());
    const s = () => setProfile(getProfile());
    window.addEventListener("mypath:update", s);
    return () => window.removeEventListener("mypath:update", s);
  }, [navigate]);

  if (!profile) return <div className="min-h-screen" />;

  const items = profile.portfolio;

  const add = (section: PortfolioItem["section"]) => {
    const title = window.prompt(`New ${section} title:`);
    if (!title) return;
    const description = window.prompt("Description (optional):") ?? "";
    updateProfile((p) => ({ ...p, portfolio: [...p.portfolio, { id: uid(), section, title, description }] }));
  };

  const remove = (id: string) => updateProfile((p) => ({ ...p, portfolio: p.portfolio.filter((x) => x.id !== id) }));

  const edit = (it: PortfolioItem) => {
    const title = window.prompt("Update title:", it.title) ?? it.title;
    const description = window.prompt("Update description:", it.description ?? "") ?? it.description;
    updateProfile((p) => ({ ...p, portfolio: p.portfolio.map((x) => x.id === it.id ? { ...x, title, description } : x) }));
  };

  if (preview) {
    return (
      <div className="min-h-screen bg-ivory">
        <Navbar />
        <main className="mx-auto max-w-4xl px-6 py-12">
          <div className="flex items-center justify-between">
            <div className="text-xs font-semibold uppercase tracking-widest text-navy/50">Portfolio · Public preview</div>
            <button onClick={() => setPreview(false)} className="rounded-full border border-navy/15 px-4 py-2 text-sm">← Back to editor</button>
          </div>
          <div className="mt-6 rounded-3xl bg-white p-10 shadow-xl">
            <div className="flex items-center gap-5">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-navy to-lavender text-2xl font-display text-ivory">{profile.user.name[0]}</div>
              <div>
                <h1 className="font-display text-4xl">{profile.user.name}</h1>
                <div className="text-navy/60">{profile.user.country} · Age {profile.user.age}</div>
              </div>
            </div>
            {SECTIONS.map((s) => {
              const list = items.filter((i) => i.section === s.key);
              if (list.length === 0) return null;
              return (
                <section key={s.key} className="mt-10">
                  <h2 className="font-display text-2xl">{s.label}</h2>
                  <div className="mt-3 space-y-3">
                    {list.map((i) => (
                      <div key={i.id} className="rounded-2xl border border-navy/10 p-4">
                        <div className="font-semibold">{i.title}</div>
                        {i.description && <p className="mt-1 text-sm text-navy/70">{i.description}</p>}
                      </div>
                    ))}
                  </div>
                </section>
              );
            })}
            {profile.onboarding?.dream && (
              <section className="mt-10 rounded-3xl bg-gradient-to-br from-lavender/40 to-gold/30 p-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-navy/60">My dream</div>
                <p className="mt-2 font-display text-2xl italic">"{profile.onboarding.dream}"</p>
              </section>
            )}
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-navy/50">Portfolio builder</div>
            <h1 className="mt-2 font-display text-4xl md:text-5xl">Craft the story of you.</h1>
          </div>
          <button onClick={() => setPreview(true)} className="rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-ivory">Preview public profile →</button>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {SECTIONS.map((s) => {
            const list = items.filter((i) => i.section === s.key);
            return (
              <section key={s.key} className="rounded-3xl border border-navy/10 bg-white p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="font-display text-2xl">{s.label}</h2>
                    <div className="text-xs text-navy/60">{s.hint}</div>
                  </div>
                  <button onClick={() => add(s.key)} className="rounded-full bg-navy/5 px-3 py-1.5 text-xs font-semibold hover:bg-navy/10">+ Add</button>
                </div>
                <div className="mt-4 space-y-2">
                  {list.length === 0 && <div className="rounded-2xl border border-dashed border-navy/15 p-4 text-sm text-navy/50">Nothing here yet. Add your first entry.</div>}
                  {list.map((i) => (
                    <div key={i.id} className="group rounded-2xl bg-ivory p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="font-semibold">{i.title}</div>
                          {i.description && <p className="mt-1 text-sm text-navy/70">{i.description}</p>}
                        </div>
                        <div className="flex gap-1 opacity-0 transition group-hover:opacity-100">
                          <button onClick={() => edit(i)} className="rounded-full bg-white px-2.5 py-1 text-xs">Edit</button>
                          <button onClick={() => remove(i.id)} className="rounded-full bg-white px-2.5 py-1 text-xs text-destructive">Delete</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
