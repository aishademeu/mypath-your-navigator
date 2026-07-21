import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  useSession, useProfile, useOnboarding, usePortfolio, useUpdateProfile,
  useAddPortfolio, useRemovePortfolio, useUpdatePortfolio, useSavedOpportunities,
  type PortfolioRow,
} from "@/lib/supabase-hooks";
import { OPPORTUNITIES } from "@/lib/opportunities";

export const Route = createFileRoute("/_authenticated/profile")({ component: ProfilePage });

const SECTIONS: { key: string; label: string; hint: string }[] = [
  { key: "about", label: "About me", hint: "Who you are in one paragraph." },
  { key: "story", label: "My story", hint: "The path that led you here." },
  { key: "projects", label: "Projects", hint: "Things you've built." },
  { key: "research", label: "Research", hint: "Papers, investigations, deep dives." },
  { key: "leadership", label: "Leadership", hint: "Where you led others." },
  { key: "achievements", label: "Achievements", hint: "Awards & recognition." },
  { key: "skills", label: "Skills", hint: "What you're great at." },
];

function ProfilePage() {
  const { user } = useSession();
  const { data: profile } = useProfile(user);
  const { data: onboarding } = useOnboarding(user);
  const { data: portfolio } = usePortfolio(user);
  const { data: saved } = useSavedOpportunities(user);

  const updateProfile = useUpdateProfile(user?.id);
  const addItem = useAddPortfolio(user?.id);
  const remove = useRemovePortfolio(user?.id);
  const update = useUpdatePortfolio(user?.id);

  const [preview, setPreview] = useState(false);
  const [editing, setEditing] = useState<PortfolioRow | null>(null);
  const [adding, setAdding] = useState<string | null>(null);

  const savedList = useMemo(() => {
    const ids = new Set((saved ?? []).map((s) => s.opportunity_id));
    return OPPORTUNITIES.filter((o) => ids.has(o.id));
  }, [saved]);

  if (!profile) return <div className="min-h-screen"><Navbar /></div>;

  if (preview) {
    return (
      <div className="min-h-screen bg-ivory">
        <Navbar />
        <main className="mx-auto max-w-4xl px-6 py-12">
          <div className="flex items-center justify-between">
            <div className="text-xs font-semibold uppercase tracking-widest text-navy/50">Profile · Public preview</div>
            <button onClick={() => setPreview(false)} className="rounded-full border border-navy/15 px-4 py-2 text-sm">← Back to editor</button>
          </div>
          <div className="mt-6 rounded-3xl bg-white p-10 shadow-xl">
            <div className="flex items-center gap-5">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-navy to-lavender text-2xl font-display text-ivory">{(profile.name ?? "M")[0]}</div>
              <div>
                <h1 className="font-display text-4xl">{profile.name ?? "MyPath student"}</h1>
                <div className="text-navy/60">{profile.country ?? ""} · Age {profile.age ?? "—"} · Grade {profile.grade ?? "—"}</div>
              </div>
            </div>
            {onboarding?.dream && (
              <section className="mt-8 rounded-3xl bg-gradient-to-br from-lavender/40 to-gold/30 p-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-navy/60">My dream</div>
                <p className="mt-2 font-display text-2xl italic">"{onboarding.dream}"</p>
              </section>
            )}
            {SECTIONS.map((s) => {
              const list = (portfolio ?? []).filter((i) => i.section === s.key);
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
            <div className="text-xs font-semibold uppercase tracking-widest text-navy/50">Your profile</div>
            <h1 className="mt-2 font-display text-4xl md:text-5xl">Craft the story of you.</h1>
          </div>
          <button onClick={() => setPreview(true)} className="rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-ivory">Preview public profile →</button>
        </div>

        {/* Identity card */}
        <section className="mt-8 rounded-3xl border border-navy/10 bg-white p-6">
          <h2 className="font-display text-2xl">Who I am</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <Editable label="Full name" value={profile.name ?? ""} onSave={(v) => updateProfile.mutate({ name: v })} />
            <Editable label="Country" value={profile.country ?? ""} onSave={(v) => updateProfile.mutate({ country: v })} />
            <Editable label="Age" value={String(profile.age ?? "")} onSave={(v) => updateProfile.mutate({ age: parseInt(v, 10) || null })} />
            <Editable label="Grade" value={profile.grade ?? ""} onSave={(v) => updateProfile.mutate({ grade: v })} />
          </div>
          <div className="mt-4">
            <Editable label="About me" value={profile.about ?? ""} onSave={(v) => updateProfile.mutate({ about: v })} multiline />
          </div>
        </section>

        {/* Direction summary */}
        {onboarding?.completed_at && (
          <section className="mt-6 rounded-3xl border border-navy/10 bg-gradient-to-br from-lavender/40 via-white to-gold/30 p-6">
            <h2 className="font-display text-2xl">My direction</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <Tags label="Interests" items={onboarding.interests} />
              <Tags label="Strengths" items={onboarding.strengths} />
              <Tags label="Causes I care about" items={onboarding.problems} />
            </div>
            {onboarding.dream && (
              <div className="mt-4 rounded-2xl bg-white/70 p-4">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-navy/60">My dream</div>
                <p className="mt-1 font-display text-lg italic">"{onboarding.dream}"</p>
              </div>
            )}
            <div className="mt-4">
              <Link to="/onboarding" className="text-sm font-medium underline">Update my direction →</Link>
            </div>
          </section>
        )}

        {/* Portfolio */}
        <section className="mt-10">
          <h2 className="font-display text-3xl">Portfolio</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {SECTIONS.map((s) => {
              const list = (portfolio ?? []).filter((i) => i.section === s.key);
              return (
                <section key={s.key} className="rounded-3xl border border-navy/10 bg-white p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-display text-xl">{s.label}</h3>
                      <div className="text-xs text-navy/60">{s.hint}</div>
                    </div>
                    <button onClick={() => setAdding(s.key)} className="rounded-full bg-navy/5 px-3 py-1.5 text-xs font-semibold hover:bg-navy/10">+ Add</button>
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
                            <button onClick={() => setEditing(i)} className="rounded-full bg-white px-2.5 py-1 text-xs">Edit</button>
                            <button onClick={() => remove.mutate(i.id)} className="rounded-full bg-white px-2.5 py-1 text-xs text-destructive">Delete</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </section>

        {/* Saved opportunities */}
        {savedList.length > 0 && (
          <section className="mt-10 rounded-3xl border border-navy/10 bg-white p-6">
            <h2 className="font-display text-2xl">Saved opportunities</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {savedList.map((o) => (
                <Link key={o.id} to="/apply-guide/$id" params={{ id: o.id }} className="rounded-2xl bg-ivory p-4 hover:bg-lavender/20">
                  <div className="text-[11px] text-navy/60">{o.category}</div>
                  <div className="font-semibold">{o.title}</div>
                  <div className="text-xs text-navy/60">Deadline · {new Date(o.deadline).toLocaleDateString()}</div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      {(adding || editing) && (
        <ItemDialog
          initial={editing ?? { section: adding!, title: "", description: "" }}
          onClose={() => { setAdding(null); setEditing(null); }}
          onSave={async (v) => {
            if (editing) update.mutate({ id: editing.id, patch: { title: v.title, description: v.description } });
            else addItem.mutate({ section: v.section, title: v.title, description: v.description });
            setAdding(null); setEditing(null);
          }}
        />
      )}

      <Footer />
    </div>
  );
}

function Tags({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <div className="text-[11px] font-semibold uppercase tracking-wider text-navy/60">{label}</div>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {items.length === 0 && <span className="text-xs text-navy/50">Not set</span>}
        {items.map((t) => <span key={t} className="rounded-full bg-white px-2.5 py-1 text-[11px]">{t}</span>)}
      </div>
    </div>
  );
}

function Editable({ label, value, onSave, multiline }: { label: string; value: string; onSave: (v: string) => void; multiline?: boolean }) {
  const [editing, setEditing] = useState(false);
  const [v, setV] = useState(value);
  if (!editing) {
    return (
      <div>
        <div className="text-[11px] font-semibold uppercase tracking-wider text-navy/60">{label}</div>
        <div className="mt-1 flex items-start justify-between gap-2">
          <div className="text-sm text-navy/80 whitespace-pre-line">{value || <span className="text-navy/40">Not set</span>}</div>
          <button onClick={() => { setV(value); setEditing(true); }} className="text-xs font-medium underline">Edit</button>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="text-[11px] font-semibold uppercase tracking-wider text-navy/60">{label}</div>
      {multiline ? (
        <textarea value={v} onChange={(e) => setV(e.target.value)} rows={3} className="mt-1 w-full rounded-xl border border-navy/15 bg-white p-2 text-sm outline-none focus:border-navy" />
      ) : (
        <input value={v} onChange={(e) => setV(e.target.value)} className="mt-1 w-full rounded-xl border border-navy/15 bg-white px-3 py-2 text-sm outline-none focus:border-navy" />
      )}
      <div className="mt-2 flex gap-2">
        <button onClick={() => { onSave(v); setEditing(false); }} className="rounded-full bg-navy px-3 py-1 text-xs font-semibold text-ivory">Save</button>
        <button onClick={() => setEditing(false)} className="rounded-full border border-navy/15 px-3 py-1 text-xs">Cancel</button>
      </div>
    </div>
  );
}

function ItemDialog({ initial, onClose, onSave }: {
  initial: { section: string; title: string; description?: string | null };
  onClose: () => void;
  onSave: (v: { section: string; title: string; description: string }) => void;
}) {
  const [title, setTitle] = useState(initial.title ?? "");
  const [description, setDescription] = useState(initial.description ?? "");
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/40 p-4 backdrop-blur-sm" onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl">
        <h3 className="font-display text-2xl capitalize">{initial.section}</h3>
        <div className="mt-4 space-y-3">
          <label className="block">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-navy/60">Title</span>
            <input value={title} onChange={(e) => setTitle(e.target.value)} className="mt-1 w-full rounded-xl border border-navy/15 bg-white px-3 py-2 text-sm outline-none focus:border-navy" />
          </label>
          <label className="block">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-navy/60">Description</span>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={4} className="mt-1 w-full rounded-xl border border-navy/15 bg-white p-2 text-sm outline-none focus:border-navy" />
          </label>
        </div>
        <div className="mt-5 flex justify-end gap-2">
          <button onClick={onClose} className="rounded-full border border-navy/15 px-4 py-2 text-sm">Cancel</button>
          <button
            disabled={!title.trim()}
            onClick={() => onSave({ section: initial.section, title: title.trim(), description })}
            className="rounded-full bg-navy px-4 py-2 text-sm font-semibold text-ivory disabled:opacity-50"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
