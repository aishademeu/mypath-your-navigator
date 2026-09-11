import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { usePro } from "@/lib/pro";
import { useI18n } from "@/lib/i18n";
import { useSession } from "@/lib/supabase-hooks";
import { submitPaymentFn } from "@/lib/server-functions";

/** Monthly Pro price. Single source of truth — never hardcode in markup. */
export const PRO_PRICE_KZT = 5000;

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
  head: () => ({
    meta: [
      { title: "MyPath Pro — Personal guidance, every month" },
      {
        name: "description",
        content:
          "Browsing opportunities is always free. MyPath Pro adds deeper adaptive interview, career hypotheses, priority guidance, and direct AI mentor usage.",
      },
    ],
  }),
});

function PricingPage() {
  const { dict, lang } = useI18n();
  const { isPro } = usePro();
  const { user } = useSession();

  const [manualOpen, setManualOpen] = useState(false);
  const [receiptNote, setReceiptNote] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState<string | null>(null);

  const handleManualSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!receiptNote.trim() || submitting) return;
    setSubmitting(true);
    try {
      const res = await submitPaymentFn({ note: receiptNote.trim() });
      if (res?.success) {
        setSubmittedStatus(
          lang === "ru"
            ? "Ваш платёж отправлен на проверку администратором. Статус: В обработке."
            : lang === "kk"
            ? "Төлеміңіз әкімші тексеруіне жіберілді. Мәртебесі: Тексерілуде."
            : "Your payment has been submitted for administrator verification. Status: Pending."
        );
        setReceiptNote("");
      } else {
        setSubmittedStatus("Error: " + (res?.error || "Submission failed"));
      }
    } catch (err: any) {
      setSubmittedStatus("Error: " + err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pb-24 md:pb-0 gradient-hero">
      <Navbar />
      <main className="mx-auto max-w-6xl px-5 py-10 md:px-6 md:py-16">
        <section className="text-center animate-fade-up">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-gold to-lavender px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-navy">
            ✦ {dict.pro.badge}
          </div>
          <h1 className="mx-auto mt-5 max-w-3xl font-display text-4xl leading-[1.05] text-balance md:text-6xl">
            {dict.pro.heroTitle}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-navy/70 md:text-lg">{dict.pro.heroSub}</p>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-2 md:items-stretch">
          {/* Free */}
          <div className="animate-fade-up flex flex-col rounded-[2rem] border border-navy/10 bg-white p-7 md:p-8">
            <div className="text-xs font-semibold uppercase tracking-widest text-navy/50">{dict.pro.freeKicker}</div>
            <h2 className="mt-2 font-display text-3xl">{dict.pro.freeTitle}</h2>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="font-display text-5xl">0</span>
              <span className="text-navy/50">KZT / {dict.pro.perMonth}</span>
            </div>
            <p className="mt-2 text-sm text-navy/60">{dict.pro.freeSub}</p>
            <ul className="mt-6 space-y-2.5 text-sm">
              {dict.pro.freeFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="mt-0.5 text-growth">✓</span>
                  <span className="text-navy/80">{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-7">
              <Link
                to={user ? "/dashboard" : "/auth"}
                search={user ? undefined : { mode: "signup" as const }}
                className="inline-flex w-full items-center justify-center rounded-full border border-navy/20 bg-white px-6 py-3 text-sm font-semibold text-navy hover:bg-navy/5"
              >
                {dict.pro.startFree}
              </Link>
            </div>
          </div>

          {/* Pro */}
          <div className="group relative animate-fade-up rounded-[2rem] p-[1.5px] transition-shadow duration-300 hover:shadow-[0_28px_70px_-24px_color-mix(in_oklab,var(--color-lavender)_55%,transparent)]">
            <div className="relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy via-[#1a2e5c] to-[#22417a] p-7 text-ivory md:p-8">
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-lavender/30 blur-3xl" />
              <div className="absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
              <div className="relative flex h-full flex-col">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-xs font-semibold uppercase tracking-widest text-ivory/60">
                    {dict.pro.proKicker}
                  </div>
                  <span className="shrink-0 rounded-full bg-gradient-to-r from-gold to-lavender px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-navy">
                    ✦ {dict.pro.mostPopular}
                  </span>
                </div>
                <h2 className="mt-2 font-display text-3xl">MyPath Pro</h2>
                <div className="mt-4 flex items-baseline gap-1.5">
                  <span className="font-display text-5xl">{PRO_PRICE_KZT.toLocaleString("ru-RU")}</span>
                  <span className="text-ivory/60">KZT / {dict.pro.perMonth}</span>
                </div>
                <p className="mt-2 text-sm text-ivory/70">{dict.pro.priceNote}</p>
                <ul className="mt-6 space-y-2.5 text-sm">
                  {dict.pro.proFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-0.5 text-gold">✦</span>
                      <span className="text-ivory/90">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-7 space-y-3">
                  {isPro ? (
                    <button
                      disabled
                      className="inline-flex w-full items-center justify-center rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-ivory"
                    >
                      ✓ {dict.pro.alreadyPro}
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          if (!user) {
                            window.location.href = "/auth?mode=signup";
                            return;
                          }
                          setManualOpen(true);
                        }}
                        className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-gradient-to-r from-gold to-lavender px-6 py-3 text-sm font-bold text-navy shadow-lg transition hover:opacity-95"
                      >
                        {lang === "ru" ? "Оформить подписку (5,000 ₸)" : "Upgrade to Pro (5,000 KZT)"} →
                      </button>
                      <p className="text-center text-[11px] text-ivory/60">
                        {lang === "ru" ? "Мгновенное подтверждение через Kaspi / Карту" : "Supported via Kaspi & Card"}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Manual Payment Modal */}
        {manualOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/40 p-4 backdrop-blur-sm" onClick={() => setManualOpen(false)}>
            <div onClick={(e) => e.stopPropagation()} className="w-full max-w-lg rounded-3xl bg-white p-6 md:p-8 shadow-2xl">
              <h3 className="font-display text-2xl text-navy">
                {lang === "ru" ? "Оформление подписки MyPath Pro" : "MyPath Pro Activation"}
              </h3>
              <p className="mt-2 text-sm text-navy/70 leading-relaxed">
                {lang === "ru"
                  ? "Стоимость: 5,000 ₸ / месяц. Переведите 5,000 ₸ на Kaspi (+7 775 229 66 31, Айша Д.) и укажите имя отправителя или номер квитанции ниже. Администратор проверит перевод и активирует Pro."
                  : "Price: 5,000 KZT / month. Transfer 5,000 KZT to Kaspi (+7 775 229 66 31, Aisha D.) and provide your sender name or receipt note below. An admin will verify and activate your Pro status."}
              </p>

              {submittedStatus ? (
                <div className="mt-6 rounded-2xl bg-growth/15 p-4 text-xs font-semibold text-growth">
                  {submittedStatus}
                  <div className="mt-4">
                    <button
                      onClick={() => {
                        setSubmittedStatus(null);
                        setManualOpen(false);
                      }}
                      className="rounded-full bg-navy px-4 py-2 text-xs font-semibold text-ivory"
                    >
                      {dict.common.close}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleManualSubmit} className="mt-5 space-y-4">
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-wider text-navy/60">
                      {lang === "ru" ? "Имя отправителя / Номер перевода" : "Sender name / Transfer note"}
                    </span>
                    <input
                      value={receiptNote}
                      onChange={(e) => setReceiptNote(e.target.value)}
                      placeholder="Например: Алишер К., перевод с Kaspi 19:30"
                      className="mt-1.5 min-h-[44px] w-full rounded-xl border border-navy/20 bg-white p-3 text-sm outline-none focus:border-navy"
                    />
                  </label>
                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setManualOpen(false)}
                      className="rounded-full border border-navy/15 px-4 py-2 text-sm text-navy/70"
                    >
                      {dict.common.cancel}
                    </button>
                    <button
                      type="submit"
                      disabled={submitting || !receiptNote.trim()}
                      className="rounded-full bg-navy px-6 py-2 text-sm font-semibold text-ivory hover:bg-navy/90 disabled:opacity-50"
                    >
                      {submitting ? "Submitting..." : lang === "ru" ? "Отправить на проверку" : "Submit for Verification"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

        <section className="mt-14 grid gap-5 md:grid-cols-3">
          {dict.pro.faq.map((q) => (
            <div key={q.q} className="rounded-3xl border border-navy/10 bg-white/60 p-5">
              <div className="font-semibold text-navy">{q.q}</div>
              <p className="mt-1.5 text-sm text-navy/65 leading-relaxed">{q.a}</p>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
