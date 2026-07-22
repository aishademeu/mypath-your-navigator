import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { useSession, useOnboarding, useSaveOnboarding } from "@/lib/supabase-hooks";
import { useI18n, type Lang } from "@/lib/i18n";

export const Route = createFileRoute("/_authenticated/onboarding")({ component: Onboarding });

// Canonical (English) option keys — stored in DB. Translations resolved via OPTION_I18N per lang.
type StepKey = "interests" | "problems" | "strengths" | "experience_level" | "dream" | "goals";

const STEPS: { key: StepKey; multi?: boolean; textarea?: boolean; options?: string[] }[] = [
  { key: "interests", multi: true, options: [
    "Technology","Science","Mathematics","Engineering","Business","Entrepreneurship",
    "Arts","Design","Music","Writing","Film & Media","Sports",
    "Social Impact","Leadership","Politics","Law","Psychology","Healthcare",
    "Environment","Education","History","Philosophy","Languages",
  ]},
  { key: "problems", multi: true, options: [
    "Education inequality","Climate change","Human rights","Mental health",
    "Healthcare","Technology access","Youth development","Gender equity",
    "Poverty","Political freedom","Animal welfare","Refugees & migration",
  ]},
  { key: "strengths", multi: true, options: [
    "Communication","Creativity","Leadership","Problem solving","Research",
    "Coding","Organization","Empathy","Public speaking","Writing",
    "Analytical thinking","Curiosity","Resilience","Teamwork",
  ]},
  { key: "experience_level", multi: false, options: [
    "Just getting started","I've done a few things","I have a track record","I've won awards / led programs",
  ]},
  { key: "dream", textarea: true },
  { key: "goals", multi: true, options: [
    "Build projects","Find competitions","Prepare for universities","Develop skills",
    "Meet mentors","Get scholarships","Do research","Start something of my own",
  ]},
];

// Translations keyed by English canonical labels.
const OPTION_I18N: Record<Lang, Record<string, string>> = {
  en: {},
  ru: {
    Technology:"Технологии", Science:"Наука", Mathematics:"Математика", Engineering:"Инженерия", Business:"Бизнес", Entrepreneurship:"Предпринимательство",
    Arts:"Искусство", Design:"Дизайн", Music:"Музыка", Writing:"Литература", "Film & Media":"Кино и медиа", Sports:"Спорт",
    "Social Impact":"Социальное влияние", Leadership:"Лидерство", Politics:"Политика", Law:"Право", Psychology:"Психология", Healthcare:"Медицина",
    Environment:"Экология", Education:"Образование", History:"История", Philosophy:"Философия", Languages:"Языки",
    "Education inequality":"Неравенство в образовании","Climate change":"Изменение климата","Human rights":"Права человека","Mental health":"Психическое здоровье",
    "Technology access":"Доступ к технологиям","Youth development":"Развитие молодёжи","Gender equity":"Гендерное равенство",
    Poverty:"Бедность","Political freedom":"Политические свободы","Animal welfare":"Защита животных","Refugees & migration":"Беженцы и миграция",
    Communication:"Коммуникация", Creativity:"Креативность","Problem solving":"Решение задач", Research:"Исследование",
    Coding:"Программирование", Organization:"Организованность", Empathy:"Эмпатия","Public speaking":"Публичные выступления",
    "Analytical thinking":"Аналитическое мышление", Curiosity:"Любознательность", Resilience:"Устойчивость", Teamwork:"Командная работа",
    "Just getting started":"Только начинаю","I've done a few things":"Кое-что уже делал(а)","I have a track record":"Есть послужной список","I've won awards / led programs":"Получал(а) награды / вёл(а) программы",
    "Build projects":"Строить проекты","Find competitions":"Искать конкурсы","Prepare for universities":"Готовиться к университету","Develop skills":"Развивать навыки",
    "Meet mentors":"Найти менторов","Get scholarships":"Получить стипендии","Do research":"Заниматься исследованиями","Start something of my own":"Начать своё дело",
  },
  kk: {
    Technology:"Технология", Science:"Ғылым", Mathematics:"Математика", Engineering:"Инженерия", Business:"Бизнес", Entrepreneurship:"Кәсіпкерлік",
    Arts:"Өнер", Design:"Дизайн", Music:"Музыка", Writing:"Әдебиет","Film & Media":"Кино және медиа", Sports:"Спорт",
    "Social Impact":"Әлеуметтік ықпал", Leadership:"Көшбасшылық", Politics:"Саясат", Law:"Құқық", Psychology:"Психология", Healthcare:"Денсаулық сақтау",
    Environment:"Экология", Education:"Білім", History:"Тарих", Philosophy:"Философия", Languages:"Тілдер",
    "Education inequality":"Білім берудегі теңсіздік","Climate change":"Климаттың өзгеруі","Human rights":"Адам құқығы","Mental health":"Психикалық денсаулық",
    "Technology access":"Технологияға қолжетімділік","Youth development":"Жастар дамуы","Gender equity":"Гендерлік теңдік",
    Poverty:"Кедейлік","Political freedom":"Саяси еркіндік","Animal welfare":"Жануарларды қорғау","Refugees & migration":"Босқындар мен көші-қон",
    Communication:"Қарым-қатынас", Creativity:"Шығармашылық","Problem solving":"Мәселе шешу", Research:"Зерттеу",
    Coding:"Программалау", Organization:"Ұйымшылдық", Empathy:"Эмпатия","Public speaking":"Көпшілік алдында сөйлеу",
    "Analytical thinking":"Аналитикалық ойлау", Curiosity:"Ізденімпаздық", Resilience:"Табандылық", Teamwork:"Топпен жұмыс",
    "Just getting started":"Енді ғана бастадым","I've done a few things":"Азырақ тәжірибем бар","I have a track record":"Жетістіктерім бар","I've won awards / led programs":"Марапат алдым / бағдарлама жүргіздім",
    "Build projects":"Жобалар құру","Find competitions":"Байқау іздеу","Prepare for universities":"Университетке дайындалу","Develop skills":"Дағды дамыту",
    "Meet mentors":"Тәлімгер табу","Get scholarships":"Стипендия алу","Do research":"Зерттеу жүргізу","Start something of my own":"Өз ісімді ашу",
  },
};

function tr(lang: Lang, s: string) { return OPTION_I18N[lang]?.[s] ?? s; }

function Onboarding() {
  const navigate = useNavigate();
  const { user } = useSession();
  const { data: existing, isLoading } = useOnboarding(user);
  const save = useSaveOnboarding(user?.id);
  const { dict, lang } = useI18n();

  const [i, setI] = useState(0);
  const [state, setState] = useState<Record<string, string[] | string>>({
    interests: [], problems: [], strengths: [], goals: [], dream: "", experience_level: "",
  });

  const [hydrated, setHydrated] = useState(false);
  if (!hydrated && existing) {
    setState({
      interests: existing.interests ?? [], problems: existing.problems ?? [],
      strengths: existing.strengths ?? [], goals: existing.goals ?? [],
      dream: existing.dream ?? "", experience_level: existing.experience_level ?? "",
    });
    setHydrated(true);
  }

  const step = STEPS[i];
  const pct = ((i + 1) / STEPS.length) * 100;
  const stepCopy = dict.onboarding.steps[step.key === "experience_level" ? "experience" : step.key];

  const finish = async () => {
    await save.mutateAsync({
      interests: (state.interests as string[]) ?? [],
      problems: (state.problems as string[]) ?? [],
      strengths: (state.strengths as string[]) ?? [],
      goals: (state.goals as string[]) ?? [],
      dream: (state.dream as string) ?? "",
      experience_level: (state.experience_level as string) ?? "",
      completed_at: new Date().toISOString(),
    });
    navigate({ to: "/dashboard" });
  };

  const isSingle = step.multi === false;
  const toggle = (opt: string) => {
    setState((s) => {
      if (isSingle) return { ...s, [step.key]: opt };
      const cur = (s[step.key] as string[]) ?? [];
      return { ...s, [step.key]: cur.includes(opt) ? cur.filter((x) => x !== opt) : [...cur, opt] };
    });
  };

  if (isLoading) return <div className="gradient-hero min-h-screen" />;

  return (
    <div className="gradient-hero min-h-screen pb-32 md:pb-10">
      <div className="mx-auto max-w-4xl px-5 py-6 md:px-6 md:py-10">
        <div className="flex items-center justify-between">
          <Logo className="h-8 w-auto md:h-9" />
          <div className="text-[11px] font-semibold uppercase tracking-widest text-navy/50">{dict.common.step} {i + 1} {dict.common.of} {STEPS.length}</div>
        </div>
        <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-navy/10">
          <div className="h-full rounded-full bg-gradient-to-r from-growth via-lavender to-gold transition-all" style={{ width: `${pct}%` }} />
        </div>

        <div key={step.key} className="animate-fade-up mt-8 rounded-3xl border border-navy/10 bg-white/85 p-6 backdrop-blur sm:p-8 md:mt-10 md:p-12">
          <h1 className="font-display text-3xl md:text-5xl text-balance">{stepCopy.title}</h1>
          <p className="mt-3 text-navy/60">{stepCopy.sub}</p>

          {step.textarea ? (
            <textarea
              value={state.dream as string}
              onChange={(e) => setState((s) => ({ ...s, dream: e.target.value }))}
              placeholder={dict.onboarding.dreamPlaceholder}
              rows={6}
              className="mt-8 w-full rounded-2xl border border-navy/15 bg-white p-4 text-base outline-none focus:border-navy focus:ring-2 focus:ring-lavender/40"
            />
          ) : (
            <div className="mt-8 flex flex-wrap gap-2.5 md:gap-3">
              {(step.options ?? []).map((opt) => {
                const selected = isSingle ? state[step.key] === opt : ((state[step.key] as string[]) ?? []).includes(opt);
                return (
                  <button
                    key={opt}
                    onClick={() => toggle(opt)}
                    className={`min-h-[44px] rounded-2xl border px-4 py-2.5 text-sm font-medium transition ${selected ? "border-navy bg-navy text-ivory shadow-lg shadow-navy/20" : "border-navy/15 bg-white hover:border-navy/40"}`}
                  >
                    {tr(lang, opt)}
                  </button>
                );
              })}
            </div>
          )}

          <div className="mt-8 flex items-center justify-between gap-3 md:mt-10">
            <button
              onClick={() => setI((n) => Math.max(0, n - 1))}
              disabled={i === 0}
              className="min-h-[44px] rounded-full border border-navy/15 px-5 py-2.5 text-sm font-medium disabled:opacity-40"
            >
              ← {dict.common.back}
            </button>
            {i < STEPS.length - 1 ? (
              <button onClick={() => setI((n) => n + 1)} className="min-h-[48px] rounded-full bg-navy px-6 py-3 text-sm font-semibold text-ivory hover:opacity-90">
                {dict.common.continue} →
              </button>
            ) : (
              <button onClick={finish} disabled={save.isPending} className="min-h-[48px] rounded-full bg-gradient-to-r from-navy to-lavender px-6 py-3 text-sm font-semibold text-ivory hover:opacity-90 disabled:opacity-60">
                {save.isPending ? dict.common.saving : dict.onboarding.finish}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export { OPTION_I18N, tr as translateOption };
