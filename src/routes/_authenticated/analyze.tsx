import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useSession, useProfile, useOnboarding, useCareerHypotheses } from "@/lib/supabase-hooks";
import { useI18n } from "@/lib/i18n";
import { discoveryTurnFn } from "@/lib/server-functions";
import type { InterviewTurn, CareerHypothesis } from "@/lib/discovery.server";

export const Route = createFileRoute("/_authenticated/analyze")({ component: AnalyzePage });

function AnalyzePage() {
  const { user } = useSession();
  const { data: profile } = useProfile(user);
  const { data: onboarding } = useOnboarding(user);
  const { data: existingHypotheses, refetch: refetchHypotheses } = useCareerHypotheses(user?.id);
  const { dict, lang } = useI18n();

  const [history, setHistory] = useState<InterviewTurn[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<string>("");
  const [inputAnswer, setInputAnswer] = useState<string>("");
  const [dimension, setDimension] = useState<string>("");
  const [stage, setStage] = useState<"idle" | "interviewing" | "done">("idle");
  const [loading, setLoading] = useState(false);
  const [hypotheses, setHypotheses] = useState<CareerHypothesis[]>([]);

  // If user already has hypotheses in DB and hasn't started a new session, show them
  const activeHypotheses = hypotheses.length > 0 ? hypotheses : (existingHypotheses || []);

  const startAdaptiveInterview = async () => {
    setStage("interviewing");
    setLoading(true);
    setHistory([]);
    try {
      const res = await discoveryTurnFn({
        history: [],
        lang,
      });
      if (res.question) {
        setCurrentQuestion(res.question);
        setDimension(res.dimension_explored || "");
      } else if (res.done && res.hypotheses) {
        setHypotheses(res.hypotheses);
        setStage("done");
        refetchHypotheses();
      }
    } catch (err) {
      console.error("Discovery turn failed:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSendAnswer = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputAnswer.trim() || loading) return;

    const answer = inputAnswer.trim();
    setInputAnswer("");

    const updatedHistory: InterviewTurn[] = [
      ...history,
      { role: "assistant", content: currentQuestion },
      { role: "user", content: answer },
    ];
    setHistory(updatedHistory);
    setLoading(true);

    try {
      const res = await discoveryTurnFn({
        history: updatedHistory,
        lang,
      });

      if (res.done && res.hypotheses) {
        setHypotheses(res.hypotheses);
        setStage("done");
        refetchHypotheses();
      } else if (res.question) {
        setCurrentQuestion(res.question);
        setDimension(res.dimension_explored || "");
      }
    } catch (err) {
      console.error("Discovery answer failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pb-24 md:pb-0">
      <Navbar />
      <main className="mx-auto max-w-5xl px-5 py-8 md:px-6 md:py-10">
        <div className="text-xs font-semibold uppercase tracking-widest text-navy/50">{dict.analyze.kicker}</div>
        <h1 className="mt-2 font-display text-3xl md:text-5xl text-balance">{dict.analyze.title}</h1>
        <p className="mt-2 max-w-2xl text-sm text-navy/60 md:text-base">{dict.analyze.sub}</p>

        {/* 1. IDLE STATE: Not currently interviewing */}
        {stage === "idle" && (
          <div className="mt-8 space-y-6">
            <div className="rounded-3xl border border-navy/10 bg-gradient-to-br from-lavender/50 via-white to-gold/40 p-8 text-center md:p-10">
              <div className="text-5xl">✦</div>
              <h2 className="mx-auto mt-4 max-w-lg font-display text-2xl md:text-3xl text-navy">
                {activeHypotheses.length > 0
                  ? (lang === "ru" ? "Твои текущие карьерные гипотезы" : lang === "kk" ? "Қазіргі мансаптық гипотезаларың" : "Your Current Direction Hypotheses")
                  : dict.analyze.intro}
              </h2>
              <p className="mx-auto mt-2 max-w-md text-sm text-navy/70">
                {lang === "ru"
                  ? "AI анализирует твои реальные ответы, находит скрытые противоречия и формулирует гипотезы траектории без пустых процентов."
                  : lang === "kk"
                  ? "AI нақты жауаптарыңды талдап, бос пайызсыз негізделген бағыт гипотезаларын жасайды."
                  : "AI engages with your real statements, detects missing angles, and formulates working hypotheses without generic percentage scores."}
              </p>
              <button
                onClick={startAdaptiveInterview}
                className="mt-6 min-h-[48px] rounded-full bg-navy px-8 py-3.5 text-sm font-semibold text-ivory shadow-lg hover:bg-navy/90"
              >
                {activeHypotheses.length > 0
                  ? (lang === "ru" ? "Пройти адаптивное интервью заново" : lang === "kk" ? "Сұхбатты қайта өту" : "Run Adaptive Discovery Interview")
                  : dict.analyze.start}
              </button>
            </div>

            {/* If hypotheses already exist, render them */}
            {activeHypotheses.length > 0 && (
              <div className="space-y-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-navy/60">
                  {lang === "ru" ? "Сформированные гипотезы:" : lang === "kk" ? "Қалыптасқан гипотезалар:" : "Active Working Hypotheses:"}
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  {activeHypotheses.map((h, i) => (
                    <HypothesisCard key={h.id || i} hypothesis={h} lang={lang} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* 2. ADAPTIVE INTERVIEW IN PROGRESS */}
        {stage === "interviewing" && (
          <div className="mt-8 space-y-6">
            <div className="rounded-3xl border border-navy/10 bg-white p-6 md:p-8 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-lavender/30 px-3 py-1 text-xs font-semibold text-navy">
                  ✦ {dimension || (lang === "ru" ? "Адаптивный опрос" : "Adaptive Discovery")}
                </span>
                <span className="text-xs text-navy/50">
                  {history.filter((h) => h.role === "user").length + 1} / 3-4
                </span>
              </div>

              <div className="mt-6 rounded-2xl bg-ivory p-5 md:p-6">
                <div className="text-xs uppercase tracking-wider text-navy/50 font-semibold">MyPath Discovery:</div>
                <p className="mt-2 font-display text-xl md:text-2xl text-navy leading-snug">
                  {loading && !currentQuestion ? (
                    <span className="animate-pulse">{lang === "ru" ? "Формулирую персональный вопрос..." : "Formulating next question..."}</span>
                  ) : (
                    currentQuestion
                  )}
                </p>
              </div>

              {/* Chat turns transcript for transparency */}
              {history.length > 0 && (
                <div className="mt-6 space-y-3 max-h-48 overflow-y-auto pr-2 border-t border-navy/5 pt-4">
                  {history.map((turn, i) => (
                    <div
                      key={i}
                      className={`text-xs p-3 rounded-xl ${turn.role === "user" ? "bg-navy/5 text-navy ml-8" : "bg-ivory text-navy/70 mr-8"}`}
                    >
                      <b>{turn.role === "user" ? (profile?.name?.split(" ")[0] || "You") : "MyPath"}:</b> {turn.content}
                    </div>
                  ))}
                </div>
              )}

              <form onSubmit={handleSendAnswer} className="mt-6 space-y-3">
                <textarea
                  value={inputAnswer}
                  onChange={(e) => setInputAnswer(e.target.value)}
                  placeholder={
                    lang === "ru"
                      ? "Напиши своими словами, без шаблонных фраз. Чем искреннее ответ, тем точнее гипотезы..."
                      : lang === "kk"
                      ? "Өз сөзіңмен шынайы жауап бер. Жауап неғұрлым шынайы болса, гипотезалар соғұрлым дәл болады..."
                      : "Answer honestly in your own words. The more candid you are, the sharper your hypotheses will be..."
                  }
                  rows={3}
                  disabled={loading}
                  className="w-full rounded-2xl border border-navy/20 bg-white p-4 text-sm outline-none focus:border-navy focus:ring-2 focus:ring-lavender/30 disabled:opacity-50"
                />
                <div className="flex items-center justify-between">
                  <span className="text-xs text-navy/50">
                    {lang === "ru" ? "Качественный анализ без тестов с вариантами" : "Qualitative reasoning without multiple-choice"}
                  </span>
                  <button
                    type="submit"
                    disabled={loading || !inputAnswer.trim()}
                    className="min-h-[44px] rounded-full bg-navy px-6 py-2.5 text-sm font-semibold text-ivory shadow transition hover:bg-navy/90 disabled:opacity-50"
                  >
                    {loading ? "Analyzing..." : (lang === "ru" ? "Ответить →" : lang === "kk" ? "Жауап беру →" : "Send Answer →")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* 3. INTERVIEW DONE: Display Newly Synthesized Hypotheses */}
        {stage === "done" && (
          <div className="animate-fade-up mt-8 space-y-6">
            <div className="rounded-3xl border border-growth/20 bg-gradient-to-br from-growth/10 via-white to-gold/10 p-6 md:p-8">
              <span className="inline-flex items-center gap-1 rounded-full bg-growth/20 px-3 py-1 text-xs font-bold text-growth">
                ✓ {lang === "ru" ? "Анализ завершен" : lang === "kk" ? "Талдау аяқталды" : "Analysis Complete"}
              </span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl text-navy">
                {lang === "ru" ? "Твои 3–5 траекторных гипотез" : lang === "kk" ? "Сенің 3–5 траекториялық гипотезаң" : "Your Directional Hypotheses"}
              </h2>
              <p className="mt-1 text-sm text-navy/70">
                {lang === "ru"
                  ? "Это не окончательный приговор или гарантированная профессия. Это качественные гипотезы, подкрепленные твоими реальными ответами."
                  : lang === "kk"
                  ? "Бұл соңғы шешім емес, сенің нақты жауаптарыңа негізделген жұмыс гипотезалары."
                  : "These are hypotheses to test, not final diagnoses. Each is backed by evidence from your actual responses."}
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {activeHypotheses.map((h, i) => (
                <HypothesisCard key={h.id || i} hypothesis={h} lang={lang} />
              ))}
            </div>

            <div className="flex flex-wrap justify-end gap-3 pt-4">
              <button
                onClick={() => setStage("idle")}
                className="rounded-full border border-navy/15 bg-white px-5 py-2.5 text-sm font-medium text-navy hover:bg-navy/5"
              >
                {lang === "ru" ? "Назад к общему виду" : "Back to Overview"}
              </button>
              <Link
                to="/mentor"
                className="rounded-full bg-navy px-6 py-2.5 text-sm font-semibold text-ivory shadow hover:bg-navy/90"
              >
                {dict.analyze.discuss} →
              </Link>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

function HypothesisCard({ hypothesis: h, lang }: { hypothesis: CareerHypothesis | any; lang: string }) {
  const evidenceList: string[] = Array.isArray(h.evidence) ? h.evidence : [String(h.evidence || "")];
  const unknownsList: string[] = Array.isArray(h.unknowns) ? h.unknowns : [];
  const skillsList: string[] = Array.isArray(h.skills_to_explore) ? h.skills_to_explore : [];

  return (
    <div className="flex flex-col justify-between rounded-3xl border border-navy/10 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div>
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase tracking-wider text-growth">
            {lang === "ru" ? "Рабочая гипотеза" : lang === "kk" ? "Жұмыс гипотезасы" : "Working Hypothesis"}
          </span>
          <span className="rounded-full bg-navy/5 px-2.5 py-0.5 text-[10px] font-semibold text-navy/60">
            {h.status || "active"}
          </span>
        </div>

        <h3 className="mt-2 font-display text-xl md:text-2xl text-navy">{h.direction_name}</h3>

        <p className="mt-2 text-sm text-navy/80 leading-relaxed">
          {h.why_it_appeared}
        </p>

        {/* Evidence from actual answers */}
        {evidenceList.length > 0 && (
          <div className="mt-4 rounded-2xl bg-ivory p-3.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-navy/50">
              {lang === "ru" ? "Фактические свидетельства:" : lang === "kk" ? "Нақты дәлелдер:" : "Evidence from your answers:"}
            </span>
            <ul className="mt-1.5 space-y-1 text-xs text-navy/80">
              {evidenceList.map((e, idx) => (
                <li key={idx}>• {e}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Unknowns / What we still don't know */}
        {unknownsList.length > 0 && (
          <div className="mt-3 rounded-2xl bg-lavender/15 p-3.5 text-xs text-navy/80">
            <span className="text-[10px] font-bold uppercase tracking-wider text-navy/60">
              {lang === "ru" ? "Что предстоит выяснить:" : lang === "kk" ? "Әлі анықталмаған жайттар:" : "What we still don't know:"}
            </span>
            <p className="mt-1">{unknownsList[0]}</p>
          </div>
        )}

        {/* Skills worth exploring */}
        {skillsList.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {skillsList.map((s, idx) => (
              <span key={idx} className="rounded-full bg-navy/5 px-2.5 py-0.5 text-[11px] font-medium text-navy/70">
                {s}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Practical next experiment */}
      {h.next_experiment && (
        <div className="mt-5 border-t border-navy/5 pt-3.5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-navy/50">
            {lang === "ru" ? "Практический эксперимент:" : lang === "kk" ? "Практикалық эксперимент:" : "Next Experiment:"}
          </span>
          <p className="mt-1 text-xs font-medium text-navy">
            ⚡ {h.next_experiment}
          </p>
        </div>
      )}
    </div>
  );
}
