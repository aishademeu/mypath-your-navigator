import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useI18n, type Lang } from "@/lib/i18n";
import { useSession } from "@/lib/supabase-hooks";
import { useUnlockPlan } from "@/lib/unlocks";
import { UNLOCK_PRICE_KZT, type ApplicationPlan } from "@/lib/unlock-plan";
import type { Opportunity } from "@/lib/opportunities";

const COPY: Record<Lang, Record<string, string>> = {
  en: {
    unlock: "Unlock Application Plan",
    unlocked: "Unlocked",
    payTitle: "Kaspi Pay",
    paySub: "Personal AI application plan for",
    payNote: "Demo payment — no real charge is made yet.",
    pay: "Pay",
    cancel: "Cancel",
    generating: "Building your personal plan…",
    signIn: "Sign in to unlock your plan",
    assessment: "Your fit",
    checklist: "Your checklist",
    tips: "How to stand out",
    essay: "Essay & motivation letter",
    error: "Something went wrong. Please try again.",
  },
  ru: {
    unlock: "Открыть план поступления",
    unlocked: "Открыто",
    payTitle: "Kaspi Pay",
    paySub: "Персональный AI-план подачи для",
    payNote: "Демо-оплата — реальное списание пока не производится.",
    pay: "Оплатить",
    cancel: "Отмена",
    generating: "Составляем ваш персональный план…",
    signIn: "Войдите, чтобы открыть план",
    assessment: "Насколько вам подходит",
    checklist: "Ваш чек-лист",
    tips: "Как выделиться",
    essay: "Эссе и мотивационное письмо",
    error: "Что-то пошло не так. Попробуйте ещё раз.",
  },
  kk: {
    unlock: "Өтінім жоспарын ашу",
    unlocked: "Ашылды",
    payTitle: "Kaspi Pay",
    paySub: "Жеке AI өтінім жоспары:",
    payNote: "Демо-төлем — нақты ақша әзірге алынбайды.",
    pay: "Төлеу",
    cancel: "Болдырмау",
    generating: "Жеке жоспарыңыз дайындалуда…",
    signIn: "Жоспарды ашу үшін кіріңіз",
    assessment: "Сізге қаншалықты сай",
    checklist: "Бақылау парағыңыз",
    tips: "Қалай ерекшеленуге болады",
    essay: "Эссе және мотивациялық хат",
    error: "Бірдеңе дұрыс болмады. Қайта көріңіз.",
  },
};

export function UnlockPlanCard({
  opp,
  score,
  plan,
  unlocked,
}: {
  opp: Opportunity;
  score: number;
  plan: ApplicationPlan | null;
  unlocked: boolean;
}) {
  const { lang } = useI18n();
  const c = COPY[lang] ?? COPY.en;
  const navigate = useNavigate();
  const { user, loading: sessionLoading } = useSession();
  const [open, setOpen] = useState(false);
  const [localPlan, setLocalPlan] = useState<ApplicationPlan | null>(null);
  const [error, setError] = useState<string | null>(null);
  const unlock = useUnlockPlan(user?.id);

  const shown = plan ?? localPlan;
  const isUnlocked = unlocked || !!shown;

  const pay = () => {
    setError(null);
    unlock.mutate(
      { opportunityId: opp.id, lang, matchScore: score },
      {
        onSuccess: (p) => {
          setLocalPlan(p);
          setOpen(false);
        },
        onError: (e) => setError(e instanceof Error ? e.message : c.error),
      },
    );
  };

  return (
    <div className="mt-3">
      {isUnlocked ? (
        <span className="inline-flex items-center gap-1 rounded-full bg-growth/15 px-3 py-1 text-[11px] font-semibold text-growth">
          🔓 {c.unlocked}
        </span>
      ) : (
        <button
          onClick={() => {
            if (sessionLoading) return;
            if (!user) {
              navigate({ to: "/auth", search: { mode: "signup" } });
              return;
            }
            setOpen(true);
          }}
          disabled={sessionLoading}
          className="min-h-[44px] w-full disabled:opacity-60 rounded-full border border-gold/60 bg-gradient-to-r from-gold/25 to-lavender/25 px-4 py-2 text-sm font-semibold text-navy transition hover:from-gold/40 hover:to-lavender/40"
        >
          🔓 {c.unlock} — {UNLOCK_PRICE_KZT} KZT
        </button>
      )}

      {shown && (
        <div className="mt-3 space-y-3 rounded-2xl bg-ivory p-4 text-left">
          {shown.assessment && (
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-navy/60">{c.assessment}</div>
              <p className="mt-1 text-sm text-navy/80">{shown.assessment}</p>
            </div>
          )}
          {shown.checklist.length > 0 && (
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-navy/60">{c.checklist}</div>
              <ol className="mt-1 list-decimal space-y-1 pl-4 text-sm text-navy/80">
                {shown.checklist.map((s, i) => <li key={i}>{s}</li>)}
              </ol>
            </div>
          )}
          {shown.tips.length > 0 && (
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-navy/60">{c.tips}</div>
              <ul className="mt-1 space-y-1 text-sm text-navy/80">
                {shown.tips.map((s, i) => <li key={i}>✦ {s}</li>)}
              </ul>
            </div>
          )}
          {shown.essay_tips.length > 0 && (
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-navy/60">{c.essay}</div>
              <ul className="mt-1 space-y-1 text-sm text-navy/80">
                {shown.essay_tips.map((s, i) => <li key={i}>• {s}</li>)}
              </ul>
            </div>
          )}
        </div>
      )}

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-navy/50 p-3 backdrop-blur-sm md:items-center"
          onClick={() => !unlock.isPending && setOpen(false)}
        >
          <div onClick={(e) => e.stopPropagation()} className="w-full max-w-sm rounded-3xl bg-white p-6 text-center shadow-2xl">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F14635] text-lg font-bold text-white">K</div>
            <div className="mt-3 font-display text-2xl">{c.payTitle}</div>
            <p className="mt-1 text-xs text-navy/60">{c.paySub} “{opp.title}”</p>
            <div className="mt-4 font-display text-4xl">{UNLOCK_PRICE_KZT} <span className="text-xl">KZT</span></div>
            <p className="mt-2 text-[11px] text-navy/50">{c.payNote}</p>
            {error && <p className="mt-3 rounded-xl bg-destructive/10 px-3 py-2 text-xs text-destructive">{error}</p>}
            <div className="mt-5 flex gap-2">
              <button
                onClick={() => setOpen(false)}
                disabled={unlock.isPending}
                className="min-h-[44px] flex-1 rounded-full border border-navy/15 px-4 py-2 text-sm disabled:opacity-50"
              >
                {c.cancel}
              </button>
              <button
                onClick={pay}
                disabled={unlock.isPending}
                className="min-h-[44px] flex-1 rounded-full bg-[#F14635] px-4 py-2 text-sm font-semibold text-white disabled:opacity-60"
              >
                {unlock.isPending ? c.generating : `${c.pay} ${UNLOCK_PRICE_KZT} KZT`}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
