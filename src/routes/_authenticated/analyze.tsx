import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useSession, useProfile, useOnboarding } from "@/lib/supabase-hooks";
import { openOpportunities, type Category } from "@/lib/opportunities";
import { rankOpportunities } from "@/lib/matching";
import { useI18n, type Lang } from "@/lib/i18n";

export const Route = createFileRoute("/_authenticated/analyze")({ component: AnalyzePage });

function AnalyzePage() {
  const { user } = useSession();
  const { data: profile } = useProfile(user);
  const { data: onboarding } = useOnboarding(user);
  const { dict, lang } = useI18n();
  const [stage, setStage] = useState<"idle" | "running" | "done">("idle");
  const [step, setStep] = useState(0);

  const ctx = useMemo(() => ({
    age: profile?.age ?? null,
    grade: profile?.grade ? parseInt(profile.grade, 10) : null,
    country: profile?.country ?? null,
    interests: onboarding?.interests ?? [],
    problems: onboarding?.problems ?? [],
    goals: onboarding?.goals ?? [],
  }), [profile, onboarding]);

  const recs = useMemo(() => rankOpportunities(openOpportunities(), ctx).slice(0, 4), [ctx]);

  const run = () => {
    setStage("running"); setStep(0);
    let i = 0;
    const tick = () => {
      setStep(i); i++;
      if (i < dict.analyze.stages.length) setTimeout(tick, 700);
      else setTimeout(() => setStage("done"), 700);
    };
    tick();
  };

  const ints = onboarding?.interests ?? [];
  const strs = onboarding?.strengths ?? [];
  const problems = onboarding?.problems ?? [];
  const directions = deriveDirections(ints, problems, lang);
  const topInterest = ints[0] ?? dict.analyze.yourTop;

  return (
    <div className="min-h-screen pb-24 md:pb-0">
      <Navbar />
      <main className="mx-auto max-w-5xl px-5 py-8 md:px-6 md:py-10">
        <div className="text-xs font-semibold uppercase tracking-widest text-navy/50">{dict.analyze.kicker}</div>
        <h1 className="mt-2 font-display text-3xl md:text-5xl text-balance">{dict.analyze.title}</h1>
        <p className="mt-2 max-w-2xl text-sm text-navy/60 md:text-base">{dict.analyze.sub}</p>

        {stage === "idle" && (
          <div className="mt-8 rounded-3xl border border-navy/10 bg-gradient-to-br from-lavender/50 via-white to-gold/40 p-8 text-center md:mt-10 md:p-10">
            <div className="text-6xl">✦</div>
            <p className="mx-auto mt-4 max-w-md font-display text-xl md:text-2xl">{dict.analyze.intro}</p>
            <button onClick={run} className="mt-6 min-h-[48px] rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-ivory">{dict.analyze.start}</button>
          </div>
        )}

        {stage === "running" && (
          <div className="mt-10 rounded-3xl border border-navy/10 bg-white p-6 md:p-10">
            {dict.analyze.stages.map((label, i) => (
              <div key={label} className={`flex items-center gap-3 py-2 transition ${i <= step ? "opacity-100" : "opacity-30"}`}>
                <span className={`h-2.5 w-2.5 rounded-full ${i < step ? "bg-growth" : i === step ? "animate-pulse bg-lavender" : "bg-navy/20"}`} />
                <span className="text-sm">{label}</span>
              </div>
            ))}
          </div>
        )}

        {stage === "done" && (
          <div className="animate-fade-up mt-8 space-y-5">
            <Section title={dict.analyze.strengthsTitle} accent="from-growth/30">
              <div className="flex flex-wrap gap-2">
                {(strs.length ? strs : ["Curiosity", "Initiative", "Communication"]).map((s) => <span key={s} className="rounded-full bg-navy px-4 py-1.5 text-xs font-semibold text-ivory">{s}</span>)}
              </div>
              <p className="mt-4 text-sm text-navy/70">{dict.analyze.strengthsBody}</p>
            </Section>

            <Section title={dict.analyze.directionsTitle} accent="from-lavender/40">
              <div className="grid gap-3 md:grid-cols-2">
                {directions.map((d) => (
                  <div key={d.title} className="rounded-2xl bg-ivory p-4">
                    <div className="font-display text-lg">{d.title}</div>
                    <p className="mt-1 text-sm text-navy/70">{d.desc}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section title={dict.analyze.actionsTitle} accent="from-gold/40">
              <ol className="space-y-2 text-sm">
                {dict.analyze.actions.map((a, i) => (
                  <li key={i}>{i + 1}. {a.replace("{top}", topInterest)}</li>
                ))}
              </ol>
            </Section>

            <Section title={dict.analyze.oppsTitle} accent="from-navy/10">
              <div className="grid gap-3 md:grid-cols-2">
                {recs.map(({ opp: o, score }) => (
                  <Link to="/apply-guide/$id" params={{ id: o.id }} key={o.id} className="group rounded-2xl border border-navy/10 bg-white p-4 hover:-translate-y-0.5 hover:shadow-lg">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-navy/5 px-2 py-0.5 text-[10px]">{dict.categories[o.category as Category]}</span>
                      <span className="text-[11px] font-semibold text-growth">{dict.dashboard.match.replace("{n}", String(score))}</span>
                    </div>
                    <div className="mt-2 font-display text-lg">{o.title}</div>
                    <div className="text-[11px] text-navy/50">{o.org}</div>
                  </Link>
                ))}
              </div>
            </Section>

            <div className="flex flex-wrap justify-end gap-2">
              <button onClick={() => setStage("idle")} className="rounded-full border border-navy/15 px-5 py-2.5 text-sm">{dict.analyze.rerun}</button>
              <Link to="/mentor" className="rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-ivory">{dict.analyze.discuss}</Link>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

function Section({ title, children, accent }: { title: string; children: React.ReactNode; accent: string }) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-navy/10 bg-white p-5 md:p-6">
      <div className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${accent} to-transparent blur-2xl`} />
      <h2 className="relative font-display text-xl md:text-2xl">{title}</h2>
      <div className="relative mt-4">{children}</div>
    </section>
  );
}

const DIRECTIONS: Record<Lang, { key: string; title: string; desc: string; when: (i: string[], p: string[]) => boolean }[]> = {
  en: [
    { key: "climate", title: "Climate Tech Builder", desc: "Use engineering to solve environmental problems — high-impact, high-growth field.", when: (i,p) => i.includes("Technology") && p.includes("Climate change") },
    { key: "social", title: "Social Entrepreneurship", desc: "Blend commercial thinking with cause-driven work; ideal for ambitious changemakers.", when: (i) => i.includes("Business") || i.includes("Leadership") || i.includes("Entrepreneurship") },
    { key: "research", title: "Research & Communication", desc: "Investigate deeply, then translate your findings for the world.", when: (i) => i.includes("Science") || i.includes("Writing") || i.includes("Mathematics") },
    { key: "creative", title: "Creative Technologist", desc: "Bridge design, code, and storytelling — one of the fastest-growing modern paths.", when: (i) => i.includes("Arts") || i.includes("Design") || i.includes("Film & Media") },
    { key: "health", title: "Human-Centered Health", desc: "Blend science and empathy in medicine, therapy or public health innovation.", when: (i) => i.includes("Psychology") || i.includes("Healthcare") },
  ],
  ru: [
    { key: "climate", title: "Разработчик климат-технологий", desc: "Инженерия для решения экологических проблем — сильная и растущая сфера.", when: (i,p) => i.includes("Technology") && p.includes("Climate change") },
    { key: "social", title: "Социальное предпринимательство", desc: "Бизнес-мышление и социальная миссия — путь для амбициозных изменителей.", when: (i) => i.includes("Business") || i.includes("Leadership") || i.includes("Entrepreneurship") },
    { key: "research", title: "Исследования и коммуникация", desc: "Глубоко исследуй и умей рассказывать миру о своих находках.", when: (i) => i.includes("Science") || i.includes("Writing") || i.includes("Mathematics") },
    { key: "creative", title: "Креативный технолог", desc: "Соединяй дизайн, код и истории — одно из самых быстрорастущих направлений.", when: (i) => i.includes("Arts") || i.includes("Design") || i.includes("Film & Media") },
    { key: "health", title: "Медицина человеко-ориентированного здоровья", desc: "Наука и эмпатия в медицине, терапии и общественном здоровье.", when: (i) => i.includes("Psychology") || i.includes("Healthcare") },
  ],
  kk: [
    { key: "climate", title: "Климат-технология құрушысы", desc: "Инженерия арқылы экологиялық мәселелерді шешу — өсіп келе жатқан мықты сала.", when: (i,p) => i.includes("Technology") && p.includes("Climate change") },
    { key: "social", title: "Әлеуметтік кәсіпкерлік", desc: "Бизнес-ойлау мен әлеуметтік миссия — талапты жаңашылдарға арналған жол.", when: (i) => i.includes("Business") || i.includes("Leadership") || i.includes("Entrepreneurship") },
    { key: "research", title: "Зерттеу және коммуникация", desc: "Терең зертте де, тапқандарыңды әлемге жеткізе біл.", when: (i) => i.includes("Science") || i.includes("Writing") || i.includes("Mathematics") },
    { key: "creative", title: "Креативті технолог", desc: "Дизайн, код және әңгіме айтуды біріктір — қазіргі ең тез өсіп келе жатқан жолдардың бірі.", when: (i) => i.includes("Arts") || i.includes("Design") || i.includes("Film & Media") },
    { key: "health", title: "Адамға бағдарланған медицина", desc: "Медицина, терапия және қоғамдық денсаулықтағы ғылым мен эмпатия.", when: (i) => i.includes("Psychology") || i.includes("Healthcare") },
  ],
};

const FALLBACK: Record<Lang, { title: string; desc: string }> = {
  en: { title: "Renaissance Path", desc: "You're early — a wide base now will compound into something rare." },
  ru: { title: "Ренессансный путь", desc: "Ты в самом начале — широкая база сейчас превратится в нечто редкое." },
  kk: { title: "Ренессанс жолы", desc: "Сен ең басындасың — қазір қаланған кең негіз болашақта сирек нәрсеге айналады." },
};

function deriveDirections(ints: string[], problems: string[], lang: Lang) {
  const combos = DIRECTIONS[lang].filter((d) => d.when(ints, problems)).map(({ title, desc }) => ({ title, desc }));
  if (combos.length === 0) combos.push(FALLBACK[lang]);
  return combos.slice(0, 4);
}
