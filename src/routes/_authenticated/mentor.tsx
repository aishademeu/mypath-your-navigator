import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useSession, useProfile, useChat } from "@/lib/supabase-hooks";
import { useI18n } from "@/lib/i18n";
import { usePro } from "@/lib/pro";
import { ProBadge } from "@/components/ProBadge";
import { mentorChatFn } from "@/lib/server-functions";

export const Route = createFileRoute("/_authenticated/mentor")({ component: MentorPage });

function MentorPage() {
  const qc = useQueryClient();
  const { user } = useSession();
  const { data: profile } = useProfile(user);
  const { data: chat } = useChat(user);
  const { dict, lang } = useI18n();
  const { isPro, openUpgrade } = usePro();
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat?.length, thinking]);

  const firstName = (profile?.name ?? "friend").split(" ")[0];

  const send = async (text: string) => {
    if (!text.trim() || thinking) return;

    // Gate premium prompts for free users
    if (!isPro && isProPrompt(text)) {
      openUpgrade(matchProFeature(text, dict));
      return;
    }

    const userMessage = text.trim();
    setInput("");
    setThinking(true);

    try {
      await mentorChatFn({
        message: userMessage,
        lang,
      });
      // Invalidate chat query to fetch the newly appended message & assistant response
      await qc.invalidateQueries({ queryKey: ["chat", user?.id] });
    } catch (err) {
      console.error("Mentor call failed:", err);
    } finally {
      setThinking(false);
    }
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
                <div className="mt-6">
                  <div className="mb-2 flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-navy/50">
                    <span>Pro prompts</span>
                    <ProBadge />
                  </div>
                  <div className="flex flex-wrap justify-center gap-2">
                    {dict.pro.mentorProPrompts.map((p) => (
                      <button
                        key={p}
                        onClick={() => {
                          if (!isPro) openUpgrade(p);
                          else send(p);
                        }}
                        className="group inline-flex min-h-[40px] items-center gap-1.5 rounded-full border border-lavender/60 bg-gradient-to-r from-lavender/25 to-gold/20 px-4 py-2 text-sm text-navy hover:border-navy/40"
                      >
                        {!isPro && <span className="text-navy/60">🔒</span>}
                        <span>{p}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {(chat ?? []).map((m) => (
              <div key={m.id} className={`mb-4 flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] rounded-3xl px-4 py-3 text-sm md:px-5 ${m.role === "user" ? "bg-navy text-ivory" : "bg-ivory text-navy"}`}>
                  {m.content.split("\n").map((line, i) => (
                    <p key={i} className={i > 0 ? "mt-2" : ""}>
                      {line}
                    </p>
                  ))}
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
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex gap-2 border-t border-navy/10 p-3 md:p-4"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={dict.mentor.placeholder}
              disabled={thinking}
              className="min-h-[48px] flex-1 rounded-full border border-navy/15 bg-white px-5 py-3 text-sm outline-none focus:border-navy disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={thinking || !input.trim()}
              className="min-h-[48px] rounded-full bg-navy px-5 py-3 text-sm font-semibold text-ivory md:px-6 disabled:opacity-50"
            >
              {dict.mentor.send}
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

// Keywords that signal a premium/Pro-only request across EN/RU/KK.
const PRO_KEYWORDS = [
  "essay", "эссе",
  "cv", "резюме", "резуме",
  "admission", "admit", "chances", "шанс", "поступлен", "түсу", "ықтимал",
  "roadmap", "дорожн", "карт", "жол карта",
  "deep analysis", "deep profile", "глубок", "терең",
  "portfolio analysis", "анализ портфолио", "портфолио талда",
];

function isProPrompt(text: string): boolean {
  const low = text.toLowerCase();
  return PRO_KEYWORDS.some((k) => low.includes(k));
}

function matchProFeature(
  text: string,
  dict: {
    pro: {
      lockedFeatureEssay: string;
      lockedFeatureCV: string;
      lockedFeatureAdmission: string;
      lockedFeatureRoadmap: string;
      lockedFeatureDeepAnalysis: string;
      lockedFeaturePortfolio: string;
      lockedFeatureAdvancedMentor: string;
    };
  }
): string {
  const low = text.toLowerCase();
  if (/(essay|эссе)/i.test(low)) return dict.pro.lockedFeatureEssay;
  if (/(cv|резюме|резуме)/i.test(low)) return dict.pro.lockedFeatureCV;
  if (/(admission|admit|chance|шанс|поступлен|түсу|ықтимал)/i.test(low)) return dict.pro.lockedFeatureAdmission;
  if (/(roadmap|дорожн|жол карта|карт)/i.test(low)) return dict.pro.lockedFeatureRoadmap;
  if (/(portfolio|портфолио)/i.test(low)) return dict.pro.lockedFeaturePortfolio;
  if (/(deep|глубок|терең)/i.test(low)) return dict.pro.lockedFeatureDeepAnalysis;
  return dict.pro.lockedFeatureAdvancedMentor;
}
