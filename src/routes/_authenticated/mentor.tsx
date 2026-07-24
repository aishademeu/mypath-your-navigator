import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useSession, useProfile, useOnboarding, useChat, useAddChat } from "@/lib/supabase-hooks";
import { useI18n, type Lang } from "@/lib/i18n";
import { usePro } from "@/lib/pro";
import { ProBadge } from "@/components/ProBadge";

export const Route = createFileRoute("/_authenticated/mentor")({ component: MentorPage });

function MentorPage() {
  const { user } = useSession();
  const { data: profile } = useProfile(user);
  const { data: onboarding } = useOnboarding(user);
  const { data: chat } = useChat(user);
  const addChat = useAddChat(user?.id);
  const { dict, lang } = useI18n();
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [chat?.length, thinking]);

  const firstName = (profile?.name ?? "friend").split(" ")[0];

  const send = async (text: string) => {
    if (!text.trim()) return;
    setInput("");
    await addChat.mutateAsync({ role: "user", content: text });
    setThinking(true);
    setTimeout(async () => {
      const reply = mentorReply(text, lang, {
        name: firstName,
        interests: onboarding?.interests ?? [],
        strengths: onboarding?.strengths ?? [],
        goals: onboarding?.goals ?? [],
        dream: onboarding?.dream ?? "",
      });
      await addChat.mutateAsync({ role: "assistant", content: reply });
      setThinking(false);
    }, 900 + Math.random() * 700);
  };

  return (
    <div className="min-h-screen pb-24 md:pb-0">
      <Navbar />
      <main className="mx-auto max-w-5xl px-5 py-6 md:px-6 md:py-10">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-navy/10 bg-gradient-to-br from-navy via-[#1a2e5c] to-[#22417a] p-6 text-ivory md:rounded-[2rem] md:p-8">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-lavender/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
          <div className="relative flex items-center gap-4">
            <div className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-gradient-to-br from-lavender to-gold text-2xl">✦</div>
            <div className="min-w-0">
              <div className="text-xs uppercase tracking-widest text-ivory/60">{dict.mentor.kicker}</div>
              <h1 className="mt-1 font-display text-2xl leading-tight md:text-4xl">{dict.mentor.heroTitle}</h1>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-navy/10 bg-white">
          <div className="max-h-[55vh] min-h-[42vh] overflow-y-auto p-4 md:p-6">
            {(chat?.length ?? 0) === 0 && (
              <div className="mx-auto max-w-lg py-8 text-center md:py-10">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-ivory">✦</div>
                <p className="mt-4 font-display text-2xl text-balance">{dict.mentor.greeting.replace("{name}", firstName)}</p>
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {dict.mentor.prompts.map((p) => (
                    <button key={p} onClick={() => send(p)} className="min-h-[40px] rounded-full border border-navy/15 bg-ivory px-4 py-2 text-sm hover:border-navy/40">{p}</button>
                  ))}
                </div>
              </div>
            )}
            {(chat ?? []).map((m) => (
              <div key={m.id} className={`mb-4 flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] rounded-3xl px-4 py-3 text-sm md:px-5 ${m.role === "user" ? "bg-navy text-ivory" : "bg-ivory text-navy"}`}>
                  {m.content.split("\n").map((line, i) => <p key={i} className={i > 0 ? "mt-2" : ""}>{line}</p>)}
                </div>
              </div>
            ))}
            {thinking && (
              <div className="mb-4 flex justify-start">
                <div className="rounded-3xl bg-ivory px-5 py-3 text-sm">
                  <span className="inline-flex gap-1">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-navy/40" style={{ animationDelay: "0ms" }} />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-navy/40" style={{ animationDelay: "150ms" }} />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-navy/40" style={{ animationDelay: "300ms" }} />
                  </span>
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>
          <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="flex gap-2 border-t border-navy/10 p-3 md:p-4">
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder={dict.mentor.placeholder} className="min-h-[48px] flex-1 rounded-full border border-navy/15 bg-white px-5 py-3 text-sm outline-none focus:border-navy" />
            <button className="min-h-[48px] rounded-full bg-navy px-5 py-3 text-sm font-semibold text-ivory md:px-6">{dict.mentor.send}</button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

type MentorCtx = { name: string; interests: string[]; strengths: string[]; goals: string[]; dream: string };

function mentorReply(q: string, lang: Lang, p: MentorCtx): string {
  const low = q.toLowerCase();
  const ints = p.interests;
  const T = REPLIES[lang];
  // keyword matching per language
  const kw = KEYWORDS[lang];
  const matches = (arr: string[]) => arr.some((k) => low.includes(k));
  if (matches(kw.direction)) return T.direction(p.name, ints[0], ints[1]);
  if (matches(kw.analyze)) return T.analyze(ints, p.strengths, p.goals);
  if (matches(kw.next)) return T.next();
  if (matches(kw.summer)) return T.summer(ints[0]);
  return T.default(p.name, ints.slice(0, 2));
}

const KEYWORDS: Record<Lang, { direction: string[]; analyze: string[]; next: string[]; summer: string[] }> = {
  en: { direction: ["direction","path"], analyze: ["analyze","profile"], next: ["next","do"], summer: ["summer"] },
  ru: { direction: ["направлен","путь","куда"], analyze: ["профил","анализ"], next: ["дальше","что делать","следующ"], summer: ["лет","каникул"] },
  kk: { direction: ["бағыт","жол","қайда"], analyze: ["профиль","талда"], next: ["әрі қарай","келес","не істе"], summer: ["жаз"] },
};

const REPLIES: Record<Lang, {
  direction: (n: string, a?: string, b?: string) => string;
  analyze: (ints: string[], strs: string[], goals: string[]) => string;
  next: () => string;
  summer: (top?: string) => string;
  default: (n: string, ints: string[]) => string;
}> = {
  en: {
    direction: (n, a, b) => `Here's what I see, ${n}:\n\nYour center of gravity looks like ${a ?? "curiosity"} × ${b ?? "impact"}. That combination is unusually strong for your age.\n\nA good working direction: build one visible artifact this month (a project, essay, or event) that fuses those two. Direction is discovered through motion, not thought.`,
    analyze: (ints, strs, goals) => `Profile snapshot:\n• Interests: ${ints.join(", ") || "not set yet"}\n• Strengths: ${strs.join(", ") || "still forming"}\n• Goals: ${goals.join(", ") || "let's define these"}\n\nOne insight: your strongest asset right now is initiative. Most students your age wait; you don't have to. Ship something small this week.`,
    next: () => `Your next 3 steps:\n1. Pick one opportunity from your dashboard and draft the application this weekend.\n2. Add a project to your portfolio — even a small one counts.\n3. Message one adult you admire and ask a specific question. Small, brave, real.`,
    summer: (top) => `A meaningful summer for you:\n• Weeks 1–3: run a personal project tied to ${top ?? "your top interest"}.\n• Weeks 4–6: apply to a competition or research program.\n• Weeks 7–8: build a public portfolio page and reach out to a mentor.\n\nWant me to draft week 1 in detail?`,
    default: (n, ints) => `That's a good question, ${n}. Given your interests (${ints.join(", ") || "still forming"}), the honest answer is: get closer to it by doing. What's one small action you could take in the next 48 hours?`,
  },
  ru: {
    direction: (n, a, b) => `Вот что я вижу, ${n}:\n\nТвой центр тяжести — это ${a ?? "любознательность"} × ${b ?? "влияние"}. Это редкое сочетание для твоего возраста.\n\nРабочее направление: в этом месяце создай один заметный артефакт (проект, эссе или событие), объединяющий эти две вещи. Направление находится в движении, а не в размышлениях.`,
    analyze: (ints, strs, goals) => `Снимок профиля:\n• Интересы: ${ints.join(", ") || "пока не заданы"}\n• Сильные стороны: ${strs.join(", ") || "формируются"}\n• Цели: ${goals.join(", ") || "давай определим"}\n\nОдно наблюдение: сейчас твой главный актив — инициатива. Большинство сверстников ждут, а тебе не нужно. Выпусти что-то маленькое уже на этой неделе.`,
    next: () => `Следующие 3 шага:\n1. Выбери одну возможность с панели и напиши черновик заявки в выходные.\n2. Добавь проект в портфолио — даже маленький считается.\n3. Напиши одному взрослому, которым восхищаешься, конкретный вопрос. Маленько, смело, по-настоящему.`,
    summer: (top) => `Осмысленное лето для тебя:\n• Недели 1–3: личный проект, связанный с ${top ?? "твоей главной темой"}.\n• Недели 4–6: подача на конкурс или исследовательскую программу.\n• Недели 7–8: публичная страница портфолио и письмо ментору.\n\nХочешь, распишу первую неделю подробнее?`,
    default: (n, ints) => `Хороший вопрос, ${n}. Учитывая твои интересы (${ints.join(", ") || "пока формируются"}), честный ответ такой: подойди к этому через действие. Какой один маленький шаг ты можешь сделать в ближайшие 48 часов?`,
  },
  kk: {
    direction: (n, a, b) => `Мен көріп тұрғаным, ${n}:\n\nСенің ауырлық орталығың — ${a ?? "ізденімпаздық"} × ${b ?? "ықпал"}. Жасыңа қарай мұндай үйлесім сирек кездеседі.\n\nЖұмыс бағытың: осы айда осы екеуін біріктіретін бір нақты дүние жаса (жоба, эссе немесе іс-шара). Бағыт ойлаудан емес, әрекеттен ашылады.`,
    analyze: (ints, strs, goals) => `Профильдің суреті:\n• Қызығушылықтар: ${ints.join(", ") || "әлі анықталмаған"}\n• Күшті жақтар: ${strs.join(", ") || "қалыптасып келеді"}\n• Мақсаттар: ${goals.join(", ") || "бірге белгілейік"}\n\nБір байқау: қазіргі басты күшің — бастамашылық. Құрдастарыңның көбі күтеді, ал сен күтпейсің. Осы аптада кішкене нәрсе шығарып жібер.`,
    next: () => `Келесі 3 қадам:\n1. Панельден бір мүмкіндікті таңдап, демалыс күндері өтініштің жобасын жаз.\n2. Портфолиоға бір жоба қос — кішкене де болса маңызды.\n3. Таңдандыратын бір ересек адамға нақты сұрақпен жаз. Кішкене, батыл, шынайы.`,
    summer: (top) => `Мәнді жаз саған:\n• 1–3 апта: ${top ?? "басты қызығушылығыңа"} байланысты жеке жоба.\n• 4–6 апта: байқауға немесе зерттеу бағдарламасына өтініш.\n• 7–8 апта: ашық портфолио беті және тәлімгерге хат.\n\nБірінші аптаны толығырақ жазып берейін бе?`,
    default: (n, ints) => `Жақсы сұрақ, ${n}. Қызығушылықтарыңды ескергенде (${ints.join(", ") || "қалыптасып келеді"}), шынайы жауап — әрекет арқылы жақындау. Алдағы 48 сағатта қандай кішкене қадам жасай аласың?`,
  },
};
