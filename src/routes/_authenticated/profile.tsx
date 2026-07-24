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
import { useI18n, LANGS, type Lang } from "@/lib/i18n";
import { usePro } from "@/lib/pro";

export const Route = createFileRoute("/_authenticated/profile")({ component: ProfilePage });

type SectionKey = "about" | "story" | "projects" | "research" | "leadership" | "achievements" | "skills";
const SECTION_KEYS: SectionKey[] = ["about","story","projects","research","leadership","achievements","skills"];

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
  const { dict, lang, setLang } = useI18n();
  const { isPro, setPro } = usePro();

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
      <div className="min-h-screen bg-ivory pb-24 md:pb-0">
        <Navbar />
        <main className="mx-auto max-w-4xl px-5 py-8 md:px-6 md:py-12">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs font-semibold uppercase tracking-widest text-navy/50">{dict.profile.publicPreview}</div>
            <button onClick={() => setPreview(false)} className="rounded-full border border-navy/15 px-4 py-2 text-sm">{dict.profile.backToEditor}</button>
          </div>
          <div className="mt-6 rounded-3xl bg-white p-6 shadow-xl md:p-10">
            <div className="flex items-center gap-5">
              <div className="flex h-16 w-16 flex-none items-center justify-center rounded-full bg-gradient-to-br from-navy to-lavender font-display text-2xl text-ivory md:h-20 md:w-20">{(profile.name ?? "M")[0]}</div>
              <div className="min-w-0">
                <h1 className="truncate font-display text-3xl md:text-4xl">{profile.name ?? "MyPath student"}</h1>
                <div className="text-navy/60">{profile.country ?? ""} · {dict.profile.fields.age} {profile.age ?? "—"} · {dict.profile.fields.grade} {profile.grade ?? "—"}</div>
              </div>
            </div>
            {onboarding?.dream && (
              <section className="mt-8 rounded-3xl bg-gradient-to-br from-lavender/40 to-gold/30 p-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-navy/60">{dict.profile.myDream}</div>
                <p className="mt-2 font-display text-xl italic md:text-2xl">"{onboarding.dream}"</p>
              </section>
            )}
            {SECTION_KEYS.map((k) => {
              const list = (portfolio ?? []).filter((i) => i.section === k);
              if (list.length === 0) return null;
              return (
                <section key={k} className="mt-10">
                  <h2 className="font-display text-xl md:text-2xl">{dict.profile.sections[k].label}</h2>
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
    <div className="min-h-screen pb-24 md:pb-0">
      <Navbar />
      <main className="mx-auto max-w-6xl px-5 py-8 md:px-6 md:py-10">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-navy/50">{dict.profile.kicker}</div>
            <h1 className="mt-2 font-display text-3xl md:text-5xl">{dict.profile.title}</h1>
          </div>
          <button onClick={() => setPreview(true)} className="min-h-[44px] rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-ivory">{dict.profile.preview}</button>
        </div>

        {/* Current plan */}
        <section className={`mt-6 rounded-3xl border p-5 md:p-6 ${isPro ? "border-transparent bg-gradient-to-br from-navy via-[#1a2e5c] to-[#22417a] text-ivory shadow-[0_20px_50px_-25px_rgba(11,31,58,0.55)]" : "border-navy/10 bg-white"}`}>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className={`text-[11px] font-semibold uppercase tracking-widest ${isPro ? "text-ivory/60" : "text-navy/50"}`}>{dict.pro.currentPlan}</div>
              <div className="mt-1 flex items-center gap-2">
                <span className="font-display text-2xl md:text-3xl">{isPro ? dict.pro.proMember : dict.pro.freePlan}</span>
                {isPro && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-gold to-lavender px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-navy">✦ Pro</span>
                )}
              </div>
            </div>
            {isPro ? (
              <button
                onClick={() => setPro(false)}
                className="min-h-[40px] rounded-full border border-ivory/25 bg-white/10 px-4 py-2 text-xs font-medium text-ivory hover:bg-white/15"
              >
                {dict.pro.downgradeToFree}
              </button>
            ) : (
              <Link
                to="/pricing"
                className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full bg-gradient-to-r from-gold to-lavender px-5 py-2.5 text-sm font-bold text-navy shadow-sm hover:opacity-95"
              >
                ✦ {dict.pro.upgradeCta}
              </Link>
            )}
          </div>
        </section>

        {/* Language settings */}
        <section className="mt-6 rounded-3xl border border-navy/10 bg-white p-5 md:p-6">
          <h2 className="font-display text-xl md:text-2xl">{dict.profile.languageTitle}</h2>
          <p className="mt-1 text-sm text-navy/60">{dict.profile.languageSub}</p>
          <div className="mt-4 grid gap-2 sm:grid-cols-3">
            {LANGS.map((l) => {
              const active = l.code === lang;
              return (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code as Lang)}
                  className={`flex min-h-[56px] items-center gap-3 rounded-2xl border px-4 py-3 text-left transition ${active ? "border-navy bg-navy/5" : "border-navy/10 bg-white hover:border-navy/40"}`}
                >
                  <span className="text-2xl">{l.flag}</span>
                  <span>
                    <span className="block font-semibold">{l.native}</span>
                    <span className="block text-[11px] text-navy/50">{l.label}</span>
                  </span>
                  {active && <span className="ml-auto text-xs font-semibold text-growth">✓</span>}
                </button>
              );
            })}
          </div>
        </section>

        {/* Identity card */}
        <section className="mt-6 rounded-3xl border border-navy/10 bg-white p-5 md:p-6">
          <h2 className="font-display text-xl md:text-2xl">{dict.profile.whoIAm}</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <Editable label={dict.profile.fields.fullName} value={profile.name ?? ""} onSave={(v) => updateProfile.mutate({ name: v })} />
            <Editable label={dict.profile.fields.country} value={profile.country ?? ""} onSave={(v) => updateProfile.mutate({ country: v })} />
            <Editable label={dict.profile.fields.age} value={String(profile.age ?? "")} onSave={(v) => updateProfile.mutate({ age: parseInt(v, 10) || null })} />
            <Editable label={dict.profile.fields.grade} value={profile.grade ?? ""} onSave={(v) => updateProfile.mutate({ grade: v })} />
          </div>
          <div className="mt-4">
            <Editable label={dict.profile.aboutMe} value={profile.about ?? ""} onSave={(v) => updateProfile.mutate({ about: v })} multiline />
          </div>
        </section>

        {/* Direction summary */}
        {onboarding?.completed_at && (
          <section className="mt-6 rounded-3xl border border-navy/10 bg-gradient-to-br from-lavender/40 via-white to-gold/30 p-5 md:p-6">
            <h2 className="font-display text-xl md:text-2xl">{dict.profile.myDirection}</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <Tags label={dict.profile.interests} items={onboarding.interests} />
              <Tags label={dict.profile.strengthsLabel} items={onboarding.strengths} />
              <Tags label={dict.profile.causes} items={onboarding.problems} />
            </div>
            {onboarding.dream && (
              <div className="mt-4 rounded-2xl bg-white/70 p-4">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-navy/60">{dict.profile.myDream}</div>
                <p className="mt-1 font-display text-lg italic">"{onboarding.dream}"</p>
              </div>
            )}
            <div className="mt-4">
              <Link to="/onboarding" className="text-sm font-medium underline">{dict.profile.updateDirection}</Link>
            </div>
          </section>
        )}

        {/* Portfolio */}
        <section className="mt-10">
          <h2 className="font-display text-2xl md:text-3xl">{dict.profile.portfolio}</h2>
          <div className="mt-5 grid gap-4 md:mt-6 md:grid-cols-2 md:gap-5">
            {SECTION_KEYS.map((k) => {
              const s = dict.profile.sections[k];
              const list = (portfolio ?? []).filter((i) => i.section === k);
              return (
                <section key={k} className="rounded-3xl border border-navy/10 bg-white p-5 md:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="font-display text-lg md:text-xl">{s.label}</h3>
                      <div className="text-xs text-navy/60">{s.hint}</div>
                    </div>
                    <button onClick={() => setAdding(k)} className="min-h-[36px] flex-none rounded-full bg-navy/5 px-3 py-1.5 text-xs font-semibold hover:bg-navy/10">+ {dict.common.add}</button>
                  </div>
                  <div className="mt-4 space-y-2">
                    {list.length === 0 && <div className="rounded-2xl border border-dashed border-navy/15 p-4 text-sm text-navy/50">{dict.profile.emptySection}</div>}
                    {list.map((i) => (
                      <div key={i.id} className="rounded-2xl bg-ivory p-4">
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <div className="font-semibold">{i.title}</div>
                            {i.description && <p className="mt-1 text-sm text-navy/70">{i.description}</p>}
                          </div>
                          <div className="flex flex-none gap-1">
                            <button onClick={() => setEditing(i)} className="rounded-full bg-white px-2.5 py-1 text-xs">{dict.common.edit}</button>
                            <button onClick={() => remove.mutate(i.id)} className="rounded-full bg-white px-2.5 py-1 text-xs text-destructive">{dict.common.delete}</button>
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

        {savedList.length > 0 && (
          <section className="mt-10 rounded-3xl border border-navy/10 bg-white p-5 md:p-6">
            <h2 className="font-display text-xl md:text-2xl">{dict.profile.savedOpps}</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {savedList.map((o) => (
                <Link key={o.id} to="/apply-guide/$id" params={{ id: o.id }} className="rounded-2xl bg-ivory p-4 hover:bg-lavender/20">
                  <div className="text-[11px] text-navy/60">{dict.categories[o.category]}</div>
                  <div className="font-semibold">{o.title}</div>
                  <div className="text-xs text-navy/60">{dict.dashboard.deadline} · {new Date(o.deadline).toLocaleDateString()}</div>
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
          onSave={(v) => {
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
  const { dict } = useI18n();
  return (
    <div>
      <div className="text-[11px] font-semibold uppercase tracking-wider text-navy/60">{label}</div>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {items.length === 0 && <span className="text-xs text-navy/50">{dict.common.notSet}</span>}
        {items.map((t) => <span key={t} className="rounded-full bg-white px-2.5 py-1 text-[11px]">{t}</span>)}
      </div>
    </div>
  );
}

function Editable({ label, value, onSave, multiline }: { label: string; value: string; onSave: (v: string) => void; multiline?: boolean }) {
  const { dict } = useI18n();
  const [editing, setEditing] = useState(false);
  const [v, setV] = useState(value);
  if (!editing) {
    return (
      <div>
        <div className="text-[11px] font-semibold uppercase tracking-wider text-navy/60">{label}</div>
        <div className="mt-1 flex items-start justify-between gap-2">
          <div className="text-sm text-navy/80 whitespace-pre-line">{value || <span className="text-navy/40">{dict.common.notSet}</span>}</div>
          <button onClick={() => { setV(value); setEditing(true); }} className="text-xs font-medium underline">{dict.common.edit}</button>
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
        <input value={v} onChange={(e) => setV(e.target.value)} className="mt-1 min-h-[40px] w-full rounded-xl border border-navy/15 bg-white px-3 py-2 text-sm outline-none focus:border-navy" />
      )}
      <div className="mt-2 flex gap-2">
        <button onClick={() => { onSave(v); setEditing(false); }} className="rounded-full bg-navy px-3 py-1 text-xs font-semibold text-ivory">{dict.common.save}</button>
        <button onClick={() => setEditing(false)} className="rounded-full border border-navy/15 px-3 py-1 text-xs">{dict.common.cancel}</button>
      </div>
    </div>
  );
}

function ItemDialog({ initial, onClose, onSave }: {
  initial: { section: string; title: string; description?: string | null };
  onClose: () => void;
  onSave: (v: { section: string; title: string; description: string }) => void;
}) {
  const { dict } = useI18n();
  const [title, setTitle] = useState(initial.title ?? "");
  const [description, setDescription] = useState(initial.description ?? "");
  const sectionLabel = (dict.profile.sections as Record<string, { label: string }>)[initial.section]?.label ?? initial.section;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/40 p-4 backdrop-blur-sm" onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl">
        <h3 className="font-display text-2xl">{sectionLabel}</h3>
        <div className="mt-4 space-y-3">
          <label className="block">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-navy/60">{dict.profile.dialogTitle}</span>
            <input value={title} onChange={(e) => setTitle(e.target.value)} className="mt-1 min-h-[44px] w-full rounded-xl border border-navy/15 bg-white px-3 py-2 text-sm outline-none focus:border-navy" />
          </label>
          <label className="block">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-navy/60">{dict.profile.dialogDescription}</span>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={4} className="mt-1 w-full rounded-xl border border-navy/15 bg-white p-2 text-sm outline-none focus:border-navy" />
          </label>
        </div>
        <div className="mt-5 flex justify-end gap-2">
          <button onClick={onClose} className="rounded-full border border-navy/15 px-4 py-2 text-sm">{dict.common.cancel}</button>
          <button
            disabled={!title.trim()}
            onClick={() => onSave({ section: initial.section, title: title.trim(), description })}
            className="rounded-full bg-navy px-4 py-2 text-sm font-semibold text-ivory disabled:opacity-50"
          >
            {dict.common.save}
          </button>
        </div>
      </div>
    </div>
  );
}
