import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { usePro } from "@/lib/pro";
import { useI18n } from "@/lib/i18n";
import { useSession } from "@/lib/supabase-hooks";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
  head: () => ({
    meta: [
      { title: "MyPath Pro — Unlock your full potential" },
      {
        name: "description",
        content:
          "Go beyond discovering opportunities. Get personalized AI guidance, essay & CV review, admission analysis, and a roadmap built for you.",
      },
      { property: "og:title", content: "MyPath Pro — Unlock your full potential" },
      { property: "og:description", content: "Premium AI guidance for ambitious students." },
    ],
  }),
});

function PricingPage() {
  const { dict } = useI18n();
  const { isPro } = usePro();
  const { user } = useSession();
  const [billing, setBilling] = useState<"monthly" | "yearly">("yearly");
  const [checkoutNote, setCheckoutNote] = useState(false);


  const monthly = 9;
  const yearly = 7; // per month, billed yearly = ~$84/yr (20% off)
  const price = billing === "monthly" ? monthly : yearly;

  return (
    <div className="min-h-screen pb-24 md:pb-0 gradient-hero">
      <Navbar />
      <main className="mx-auto max-w-6xl px-5 py-10 md:px-6 md:py-16">
        {/* Hero */}
        <section className="text-center animate-fade-up">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-gold to-lavender px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-navy">
            ✦ {dict.pro.badge}
          </div>
          <h1 className="mx-auto mt-5 max-w-3xl font-display text-4xl leading-[1.05] text-balance md:text-6xl">
            {dict.pro.heroTitle}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-navy/70 md:text-lg">
            {dict.pro.heroSub}
          </p>
        </section>

        {/* Billing toggle */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex rounded-full border border-navy/10 bg-white p-1 shadow-sm">
            <button
              onClick={() => setBilling("monthly")}
              className={`min-h-[40px] rounded-full px-5 py-2 text-sm font-medium transition ${billing === "monthly" ? "bg-navy text-ivory" : "text-navy/70"}`}
            >
              {dict.pro.monthly}
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`min-h-[40px] rounded-full px-5 py-2 text-sm font-medium transition ${billing === "yearly" ? "bg-navy text-ivory" : "text-navy/70"}`}
            >
              {dict.pro.yearly}
              <span className="ml-1.5 rounded-full bg-growth/15 px-1.5 py-0.5 text-[10px] font-bold text-growth">
                {dict.pro.save20}
              </span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <section className="mt-10 grid gap-6 md:grid-cols-2 md:items-stretch">
          {/* Free */}
          <div className="animate-fade-up rounded-[2rem] border border-navy/10 bg-white p-7 md:p-8 flex flex-col">
            <div className="text-xs font-semibold uppercase tracking-widest text-navy/50">{dict.pro.freeKicker}</div>
            <h2 className="mt-2 font-display text-3xl">{dict.pro.freeTitle}</h2>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="font-display text-5xl">$0</span>
              <span className="text-navy/50">/ {dict.pro.perMonth}</span>
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
          <div className="relative animate-fade-up overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy via-[#1a2e5c] to-[#22417a] p-7 text-ivory shadow-[0_20px_60px_-20px_rgba(11,31,58,0.55)] md:p-8 flex flex-col">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-lavender/30 blur-3xl" />
            <div className="absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
            <div className="relative flex flex-col h-full">
              <div className="flex items-center justify-between">
                <div className="text-xs font-semibold uppercase tracking-widest text-ivory/60">
                  {dict.pro.proKicker}
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-gold to-lavender px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-navy">
                  ✦ {dict.pro.mostPopular}
                </span>
              </div>
              <h2 className="mt-2 font-display text-3xl">MyPath Pro</h2>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-5xl">${price}</span>
                <span className="text-ivory/60">/ {dict.pro.perMonth}</span>
              </div>
              <p className="mt-2 text-sm text-ivory/70">
                {billing === "yearly" ? dict.pro.yearlyNote : dict.pro.monthlyNote}
              </p>
              <ul className="mt-6 space-y-2.5 text-sm">
                {dict.pro.proFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-0.5 text-gold">✦</span>
                    <span className="text-ivory/90">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-7">
                {isPro ? (
                  <button
                    disabled
                    className="inline-flex w-full items-center justify-center rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-ivory"
                  >
                    ✓ {dict.pro.alreadyPro}
                  </button>
                ) : (
                  <button
                    onClick={() => setCheckoutNote(true)}
                    className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-gold to-lavender px-6 py-3 text-sm font-bold text-navy shadow-lg hover:opacity-95"
                  >
                    {dict.pro.upgradeCta} →
                  </button>
                )}
                {checkoutNote && !isPro && (
                  <p className="mt-3 rounded-2xl bg-white/10 px-4 py-3 text-center text-xs text-ivory/80">
                    Secure checkout is coming soon — Pro access is activated only after a verified payment.
                  </p>
                )}
                <p className="mt-3 text-center text-[11px] text-ivory/50">{dict.pro.trustLine}</p>
              </div>

            </div>
          </div>
        </section>

        {/* FAQ / reassurance */}
        <section className="mt-14 grid gap-5 md:grid-cols-3">
          {dict.pro.faq.map((q) => (
            <div key={q.q} className="rounded-3xl border border-navy/10 bg-white/60 p-5">
              <div className="font-semibold text-navy">{q.q}</div>
              <p className="mt-1.5 text-sm text-navy/65">{q.a}</p>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
