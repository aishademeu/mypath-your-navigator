import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { usePro } from "@/lib/pro";
import { useI18n } from "@/lib/i18n";
import { useSession } from "@/lib/supabase-hooks";

/** Monthly Pro price. Single source of truth — never hardcode in markup. */
export const PRO_PRICE_KZT = 5000;

const CONTACT_MESSAGE = "Здравствуйте! Хочу оформить MyPath Pro 🙌";
const TELEGRAM_URL = `https://t.me/aishademeu2405?text=${encodeURIComponent(CONTACT_MESSAGE)}`;
const WHATSAPP_URL = `https://wa.me/77752296631?text=${encodeURIComponent(CONTACT_MESSAGE)}`;

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
  head: () => ({
    meta: [
      { title: "MyPath Pro — Personal guidance, every month" },
      {
        name: "description",
        content:
          "Browsing opportunities is always free. MyPath Pro adds 4–5 personally matched opportunities every month, deadline reminders, a portfolio roadmap and direct support.",
      },
      { property: "og:title", content: "MyPath Pro — Personal guidance, every month" },
      {
        property: "og:description",
        content: "Hand-picked opportunities, deadline reminders and a portfolio roadmap built around you.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function PricingPage() {
  const { dict } = useI18n();
  const { isPro } = usePro();
  const { user } = useSession();

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

          {/* Pro — glowing gradient border on hover */}
          <div className="group relative animate-fade-up rounded-[2rem] p-[1.5px] transition-shadow duration-300 hover:shadow-[0_28px_70px_-24px_color-mix(in_oklab,var(--color-lavender)_55%,transparent)]">
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[linear-gradient(120deg,var(--color-gold),var(--color-lavender),var(--color-growth),var(--color-gold))] opacity-0 blur-[6px] transition-opacity duration-300 group-hover:opacity-70 group-hover:animate-pulse-glow"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[linear-gradient(120deg,var(--color-gold),var(--color-lavender),var(--color-growth))] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy via-[#1a2e5c] to-[#22417a] p-7 text-ivory transition-transform duration-300 group-hover:-translate-y-1 md:p-8">
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
                <div className="mt-auto pt-7">
                  {isPro ? (
                    <button
                      disabled
                      className="inline-flex w-full items-center justify-center rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-ivory"
                    >
                      ✓ {dict.pro.alreadyPro}
                    </button>
                  ) : (
                    <>
                      <a
                        href={TELEGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-gradient-to-r from-gold to-lavender px-6 py-3 text-sm font-bold text-navy shadow-lg transition hover:opacity-95"
                      >
                        {dict.pro.ctaTelegram} →
                      </a>
                      <div className="mt-2.5 text-center">
                        <a
                          href={WHATSAPP_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-ivory/70 underline decoration-ivory/30 underline-offset-4 hover:text-ivory"
                        >
                          {dict.pro.ctaWhatsapp}
                        </a>
                      </div>
                      <p className="mt-3 text-center text-[11px] text-ivory/60">{dict.pro.contactHint}</p>
                      <p className="mt-1 text-center text-[11px] text-ivory/50">· {dict.pro.contactNote} ·</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] border border-navy/10 bg-white/60 p-6 text-center md:p-7">
          <h3 className="font-display text-2xl">Everything in the opportunity library stays free</h3>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-navy/70">
            Browse, save and prepare for every opportunity without paying anything. Pro exists only for students who
            want a person and a plan alongside them.
          </p>
          <Link
            to="/opportunities"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-ivory"
          >
            Browse opportunities →
          </Link>
        </section>

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
