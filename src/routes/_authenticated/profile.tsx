import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  useSession,
  useProfile,
  useOnboarding,
  usePortfolio,
  useUpdateProfile,
  useAddPortfolio,
  useRemovePortfolio,
  useUpdatePortfolio,
  useSavedOpportunities,
  type PortfolioRow,
} from "@/lib/supabase-hooks";
import { OPPORTUNITIES } from "@/lib/opportunities";
import { formatDate } from "@/lib/format";
import { useI18n, LANGS, type Lang } from "@/lib/i18n";
import { usePro } from "@/lib/pro";
import { polishPortfolioFn, generateParentInviteFn } from "@/lib/server-functions";

export const Route = createFileRoute("/_authenticated/profile")({ component: ProfilePage });

type SectionKey = "about" | "story" | "projects" | "research" | "leadership" | "achievements" | "skills";
const SECTION_KEYS: SectionKey[] = ["about", "story", "projects", "research", "leadership", "achievements", "skills"];

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
  const { isPro } = usePro();

  const [preview, setPreview] = useState(false);
  const [editing, setEditing] = useState<PortfolioRow | null>(null);
  const [adding, setAdding] = useState<string | null>(null);
  const [inviteCode, setInviteCode] = useState<string | null>(null);
  const [generatingCode, setGeneratingCode] = useState(false);
  const [miniBioEdit, setMiniBioEdit] = useState(false);
  const [miniBioDraft, setMiniBioDraft] = useState("");

  const savedList = useMemo(() => {
    const ids = new Set((saved ?? []).map((s) => s.opportunity_id));
    return OPPORTUNITIES.filter((o) => ids.has(o.id));
  }, [saved]);

  if (!profile) {
    return (
      <div className="min-h-screen">
        <Navbar />
      </div>
    );
  }

  const handleGenerateParentInvite = async () => {
    setGeneratingCode(true);
    try {
      const res = await generateParentInviteFn();
      if (res?.inviteCode) setInviteCode(res.inviteCode);
    } catch (err) {
      console.error(err);
    } finally {
      setGeneratingCode(false);
    }
  };

  const handleSaveMiniBio = async () => {
    await updateProfile.mutateAsync({ mini_bio: miniBioDraft.trim() });
    setMiniBioEdit(false);
  };

  if (preview) {
    return (
      <div className="min-h-screen bg-ivory pb-24 md:pb-0">
        <Navbar />
        <main className="mx-auto max-w-4xl px-5 py-8 md:px-6 md:py-12">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs font-semibold uppercase tracking-widest text-navy/50">{dict.profile.publicPreview}</div>
            <button onClick={() => setPreview(false)} className="rounded-full border border-navy/15 px-4 py-2 text-sm">{dict.profile.backToEditor}</button>
          </div>

          <div className="mt-6 overflow-hidden rounded-[2rem] border border-navy/10 bg-white shadow-xl">
            {/* Banner preview */}
            <div className="relative h-48 w-full overflow-hidden bg-gradient-to-r from-navy via-[#1b3565] to-lavender md:h-56">
              {profile.banner_url && (
                <img src={profile.banner_url} alt="Banner" className="h-full w-full object-cover" />
              )}
            </div>

            {/* Avatar & Identity preview */}
            <div className="relative px-6 pb-8 sm:px-10">
              <div className="relative -mt-14 sm:-mt-16 z-10 flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-navy to-lavender font-display text-3xl text-ivory shadow-lg overflow-hidden">
                {profile.avatar_url ? (
                  <img src={profile.avatar_url} alt="Avatar" className="h-full w-full object-cover" />
                ) : (
                  (profile.name ?? "M")[0]?.toUpperCase()
                )}
              </div>

              <div className="mt-4">
                <h1 className="font-display text-3xl md:text-4xl">{profile.name ?? "MyPath Student"}</h1>
                <div className="mt-1 text-sm text-navy/60">
                  {profile.country ?? ""} {profile.city ? `· ${profile.city}` : ""} · {dict.profile.fields.age} {profile.age ?? "—"} · {dict.profile.fields.grade} {profile.grade ?? "—"}
                </div>
                {profile.mini_bio && (
                  <p className="mt-3 max-w-2xl text-sm italic text-navy/80">"{profile.mini_bio}"</p>
                )}
              </div>

              {SECTION_KEYS.map((k) => {
                const list = (portfolio ?? []).filter((i) => i.section === k);
                if (list.length === 0) return null;
                return (
                  <section key={k} className="mt-8 border-t border-navy/5 pt-6">
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
          <button onClick={() => setPreview(true)} className="min-h-[44px] rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-ivory">
            {dict.profile.preview}
          </button>
        </div>

        {/* PROFILE HEADER: Robust Banner & Avatar Container Layout */}
        <section className="relative mt-6 overflow-hidden rounded-[2rem] border border-navy/10 bg-white shadow-sm">
          {/* Cover / Banner Area */}
          <div className="relative h-44 w-full overflow-hidden bg-gradient-to-r from-navy via-[#1b3565] to-lavender sm:h-56 md:h-64">
            {profile.banner_url ? (
              <img
                src={profile.banner_url}
                alt="Profile Banner"
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/30 via-lavender/20 to-navy" />
            )}
            <div className="absolute inset-0 bg-navy/10" />
          </div>

          {/* Identity Bar: Avatar sits cleanly above banner, z-10 with white ring border */}
          <div className="relative px-6 pb-6 pt-0 sm:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div className="relative -mt-14 sm:-mt-18 z-10 flex-none">
                <div className="relative flex h-28 w-28 sm:h-36 sm:w-36 items-center justify-center rounded-full border-4 border-white bg-white shadow-md overflow-hidden">
                  {profile.avatar_url ? (
                    <img
                      src={profile.avatar_url}
                      alt={profile.name ?? "Avatar"}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-navy to-lavender font-display text-4xl text-ivory sm:text-5xl">
                      {(profile.name ?? "M")[0]?.toUpperCase()}
                    </div>
                  )}
                </div>
              </div>

              {/* Pro status badge & parent invite trigger */}
              <div className="flex flex-wrap items-center gap-2">
                <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${isPro ? "bg-gradient-to-r from-gold to-lavender text-navy" : "bg-navy/5 text-navy/70"}`}>
                  {isPro ? "✦ Pro Member" : "Free Plan"}
                </span>
                {!isPro && (
                  <Link to="/pricing" className="text-xs font-semibold text-growth underline underline-offset-4">
                    Upgrade to Pro
                  </Link>
                )}
              </div>
            </div>

            {/* Student Name & Essentials */}
            <div className="mt-4">
              <h2 className="font-display text-2xl md:text-3xl text-navy">
                {profile.name ?? "MyPath Student"}
              </h2>
              <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-navy/60">
                {profile.country && <span>📍 {profile.country}</span>}
                {profile.city && <span>· {profile.city}</span>}
                {profile.age && <span>· {profile.age} {dict.profile.fields.age}</span>}
                {profile.grade && <span>· {dict.profile.fields.grade} {profile.grade}</span>}
                {profile.school && <span>· {profile.school}</span>}
              </div>
            </div>

            {/* MINI BIO SECTION: Concise, user-owned, editable */}
            <div className="mt-5 rounded-2xl border border-navy/10 bg-ivory/70 p-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-navy/60">
                  {lang === "ru" ? "Мини-биография" : lang === "kk" ? "Қысқаша мәлімет" : "Mini Bio"}
                </span>
                {!miniBioEdit && (
                  <button
                    onClick={() => {
                      setMiniBioDraft(profile.mini_bio ?? "");
                      setMiniBioEdit(true);
                    }}
                    className="text-xs font-semibold text-navy underline hover:text-growth"
                  >
                    {dict.common.edit}
                  </button>
                )}
              </div>

              {miniBioEdit ? (
                <div className="mt-2 space-y-2">
                  <textarea
                    value={miniBioDraft}
                    onChange={(e) => setMiniBioDraft(e.target.value)}
                    maxLength={300}
                    rows={2}
                    placeholder={
                      lang === "ru"
                        ? "1–2 предложения о себе своими словами (например: 'Учусь в 10 классе, интересуюсь робототехникой и мечтаю запустить свой проект')"
                        : lang === "kk"
                        ? "Өзіңіз туралы 1-2 сөйлем (мысалы: '10-сынып оқушысымын, робототехникаға қызығамын')"
                        : "1-2 sentences about yourself in your own words (e.g. '10th grader passionate about robotics and social tech')"
                    }
                    className="w-full rounded-xl border border-navy/20 bg-white p-3 text-sm outline-none focus:border-navy"
                  />
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-navy/40">{miniBioDraft.length}/300</span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setMiniBioEdit(false)}
                        className="rounded-full border border-navy/15 px-3 py-1 text-xs"
                      >
                        {dict.common.cancel}
                      </button>
                      <button
                        onClick={handleSaveMiniBio}
                        className="rounded-full bg-navy px-3 py-1 text-xs font-semibold text-ivory"
                      >
                        {dict.common.save}
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="mt-1.5 text-sm leading-relaxed text-navy/80">
                  {profile.mini_bio ? (
                    profile.mini_bio
                  ) : (
                    <span className="italic text-navy/40">
                      {lang === "ru"
                        ? "Напиши коротко о себе. AI Ментор будет использовать это как ориентир."
                        : lang === "kk"
                        ? "Өзіңіз туралы қысқаша жазыңыз. AI Тәлімгер осы мәліметті басшылыққа алады."
                        : "Add a short note about who you are. AI Mentor uses this as real context."}
                    </span>
                  )}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Parent Link Account Section */}
        <section className="mt-6 rounded-3xl border border-navy/10 bg-white p-5 md:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="font-display text-lg md:text-xl text-navy">
                {lang === "ru" ? "Пригласить родителя" : lang === "kk" ? "Ата-ананы шақыру" : "Invite a Parent"}
              </h2>
              <p className="mt-1 text-xs text-navy/60">
                {lang === "ru"
                  ? "Родитель сможет видеть твои цели, общее направление и портфолио. Твои диалоги с AI Ментором остаются строго приватными."
                  : lang === "kk"
                  ? "Ата-анаңыз сіздің мақсаттарыңыз бен жетістіктеріңізді көре алады. AI Тәлімгермен жеке диалогтарыңыз құпия қалады."
                  : "Parents can view high-level milestones and portfolio progress. Your AI Mentor chats remain strictly private."}
              </p>
            </div>
            <div>
              {inviteCode ? (
                <div className="flex items-center gap-2 rounded-2xl bg-lavender/20 px-4 py-2">
                  <span className="text-xs text-navy/70">Code:</span>
                  <span className="font-mono text-sm font-bold tracking-wider text-navy">{inviteCode}</span>
                </div>
              ) : (
                <button
                  disabled={generatingCode}
                  onClick={handleGenerateParentInvite}
                  className="rounded-full bg-navy px-4 py-2 text-xs font-semibold text-ivory hover:bg-navy/90"
                >
                  {generatingCode ? "Generating..." : lang === "ru" ? "Создать код" : lang === "kk" ? "Код жасау" : "Generate Invite Code"}
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Identity Details */}
        <section className="mt-6 rounded-3xl border border-navy/10 bg-white p-5 md:p-6">
          <h2 className="font-display text-xl md:text-2xl">{dict.profile.whoIAm}</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <Editable label={dict.profile.fields.fullName} value={profile.name ?? ""} onSave={(v) => updateProfile.mutate({ name: v })} />
            <Editable label={dict.profile.fields.country} value={profile.country ?? ""} onSave={(v) => updateProfile.mutate({ country: v })} />
            <Editable label="City" value={profile.city ?? ""} onSave={(v) => updateProfile.mutate({ city: v })} />
            <Editable label="School" value={profile.school ?? ""} onSave={(v) => updateProfile.mutate({ school: v })} />
            <Editable label={dict.profile.fields.age} value={String(profile.age ?? "")} onSave={(v) => updateProfile.mutate({ age: parseInt(v, 10) || null })} />
            <Editable label={dict.profile.fields.grade} value={profile.grade ?? ""} onSave={(v) => updateProfile.mutate({ grade: v })} />
          </div>
        </section>

        {/* Language Preferences */}
        <section className="mt-6 rounded-3xl border border-navy/10 bg-white p-5 md:p-6">
          <h2 className="font-display text-xl md:text-2xl">{dict.profile.languageTitle}</h2>
          <div className="mt-4 grid gap-2 sm:grid-cols-3">
            {LANGS.map((l) => {
              const active = l.code === lang;
              return (
                <button
                  key={l.code}
                  onClick={() => {
                    setLang(l.code as Lang);
                    updateProfile.mutate({ language: l.code });
                  }}
                  className={`flex min-h-[52px] items-center gap-3 rounded-2xl border px-4 py-2.5 text-left transition ${active ? "border-navy bg-navy/5" : "border-navy/10 bg-white hover:border-navy/40"}`}
                >
                  <span className="text-xl">{l.flag}</span>
                  <span>
                    <span className="block text-sm font-semibold">{l.native}</span>
                    <span className="block text-[10px] text-navy/50">{l.label}</span>
                  </span>
                  {active && <span className="ml-auto text-xs font-semibold text-growth">✓</span>}
                </button>
              );
            })}
          </div>
        </section>

        {/* Portfolio with AI Polishing */}
        <section className="mt-10">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-display text-2xl md:text-3xl">{dict.profile.portfolio}</h2>
              <p className="text-xs text-navy/60">Real proof of your capabilities and accomplishments.</p>
            </div>
          </div>
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
                    <button onClick={() => setAdding(k)} className="min-h-[36px] flex-none rounded-full bg-navy/5 px-3 py-1.5 text-xs font-semibold hover:bg-navy/10">
                      + {dict.common.add}
                    </button>
                  </div>
                  <div className="mt-4 space-y-2">
                    {list.length === 0 && (
                      <div className="rounded-2xl border border-dashed border-navy/15 p-4 text-sm text-navy/50">
                        {dict.profile.emptySection}
                      </div>
                    )}
                    {list.map((i) => (
                      <div key={i.id} className="rounded-2xl bg-ivory p-4">
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <div className="font-semibold text-navy">{i.title}</div>
                            {i.description && <p className="mt-1 text-sm text-navy/70 leading-relaxed">{i.description}</p>}
                          </div>
                          <div className="flex flex-none gap-1">
                            <button onClick={() => setEditing(i)} className="rounded-full bg-white px-2.5 py-1 text-xs font-medium text-navy/80 hover:bg-navy/5">
                              {dict.common.edit}
                            </button>
                            <button onClick={() => remove.mutate(i.id)} className="rounded-full bg-white px-2.5 py-1 text-xs text-destructive hover:bg-destructive/10">
                              {dict.common.delete}
                            </button>
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
                <Link key={o.id} to="/apply-guide/$id" params={{ id: o.id }} className="rounded-2xl bg-ivory p-4 hover:bg-lavender/20 transition">
                  <div className="text-[11px] text-navy/60">{dict.categories[o.category]}</div>
                  <div className="font-semibold">{o.title}</div>
                  <div className="text-xs text-navy/60">{dict.dashboard.deadline} · {formatDate(o.deadline, lang)}</div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      {(adding || editing) && (
        <ItemDialog
          initial={editing ?? { section: adding!, title: "", description: "" }}
          lang={lang}
          onClose={() => {
            setAdding(null);
            setEditing(null);
          }}
          onSave={(v) => {
            if (editing) update.mutate({ id: editing.id, patch: { title: v.title, description: v.description } });
            else addItem.mutate({ section: v.section, title: v.title, description: v.description });
            setAdding(null);
            setEditing(null);
          }}
        />
      )}

      <Footer />
    </div>
  );
}

function Editable({ label, value, onSave }: { label: string; value: string; onSave: (v: string) => void }) {
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
      <input value={v} onChange={(e) => setV(e.target.value)} className="mt-1 min-h-[40px] w-full rounded-xl border border-navy/15 bg-white px-3 py-2 text-sm outline-none focus:border-navy" />
      <div className="mt-2 flex gap-2">
        <button onClick={() => { onSave(v); setEditing(false); }} className="rounded-full bg-navy px-3 py-1 text-xs font-semibold text-ivory">{dict.common.save}</button>
        <button onClick={() => setEditing(false)} className="rounded-full border border-navy/15 px-3 py-1 text-xs">{dict.common.cancel}</button>
      </div>
    </div>
  );
}

function ItemDialog({
  initial,
  lang,
  onClose,
  onSave,
}: {
  initial: { section: string; title: string; description?: string | null };
  lang: string;
  onClose: () => void;
  onSave: (v: { section: string; title: string; description: string }) => void;
}) {
  const { dict } = useI18n();
  const [title, setTitle] = useState(initial.title ?? "");
  const [description, setDescription] = useState(initial.description ?? "");
  const [polishing, setPolishing] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);
  const [missingInfoPrompt, setMissingInfoPrompt] = useState<string | null>(null);

  const sectionLabel = (dict.profile.sections as Record<string, { label: string }>)[initial.section]?.label ?? initial.section;

  const handleAIPolish = async () => {
    if (!description.trim()) return;
    setPolishing(true);
    setMissingInfoPrompt(null);
    try {
      const res = await polishPortfolioFn({
        title,
        section: initial.section,
        rawDescription: description,
        lang,
      });
      if (res.polishedTitle) setTitle(res.polishedTitle);
      if (res.polishedDescription) setDescription(res.polishedDescription);
      if (res.demonstratedSkills) setSkills(res.demonstratedSkills);
      if (res.missingInformationPrompt) setMissingInfoPrompt(res.missingInformationPrompt);
    } catch (err) {
      console.error(err);
    } finally {
      setPolishing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/40 p-4 backdrop-blur-sm" onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-2xl">{sectionLabel}</h3>
          <button
            type="button"
            disabled={polishing || !description.trim()}
            onClick={handleAIPolish}
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-gold/30 to-lavender/40 px-3 py-1 text-xs font-semibold text-navy hover:opacity-90 disabled:opacity-40"
          >
            ✦ {polishing ? "Polishing..." : "AI Polish"}
          </button>
        </div>

        <div className="mt-4 space-y-3">
          <label className="block">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-navy/60">{dict.profile.dialogTitle}</span>
            <input value={title} onChange={(e) => setTitle(e.target.value)} className="mt-1 min-h-[44px] w-full rounded-xl border border-navy/15 bg-white px-3 py-2 text-sm outline-none focus:border-navy" />
          </label>
          <label className="block">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-navy/60">{dict.profile.dialogDescription}</span>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={4} className="mt-1 w-full rounded-xl border border-navy/15 bg-white p-2 text-sm outline-none focus:border-navy" />
          </label>

          {skills.length > 0 && (
            <div className="rounded-xl bg-growth/10 p-3">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-growth">Demonstrated Competencies:</span>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {skills.map((s) => (
                  <span key={s} className="rounded-full bg-white px-2 py-0.5 text-[11px] font-medium text-navy">
                    ✓ {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          {missingInfoPrompt && (
            <div className="rounded-xl bg-lavender/20 p-3 text-xs text-navy/80">
              💡 <b>Tip:</b> {missingInfoPrompt}
            </div>
          )}
        </div>

        <div className="mt-5 flex justify-end gap-2">
          <button onClick={onClose} className="rounded-full border border-navy/15 px-4 py-2 text-sm">
            {dict.common.cancel}
          </button>
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
