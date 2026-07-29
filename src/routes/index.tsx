import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "MyPath — Find your path. Build your future." },
      { name: "description", content: "MyPath is an AI-powered platform that helps high school students discover educational opportunities, build competitive portfolios, and plan their academic journ" },
      { property: "og:title", content: "MyPath — Find your path. Build your future." },
      { property: "og:description", content: "MyPath is an AI-powered platform that helps high school students discover educational opportunities, build competitive portfolios, and plan their academic journ" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Landing() {
  const { dict } = useI18n();
  const JOURNEY_COLORS = ["bg-lavender/40", "bg-gold/40", "bg-growth/40", "bg-navy/10"];
  const FLOATERS = [
    { label: dict.landing.floaters.scholarships, accent: "bg-gold text-navy", top: "top-6", left: "left-6", delay: "0s" },
    { label: dict.landing.floaters.research, accent: "bg-lavender text-navy", top: "top-24", left: "right-8", delay: "1.4s" },
    { label: dict.landing.floaters.competitions, accent: "bg-growth text-navy", top: "top-56", left: "left-14", delay: "2.2s" },
    { label: dict.landing.floaters.leadership, accent: "bg-navy text-ivory", top: "top-72", left: "right-16", delay: "0.8s" },
    { label: dict.landing.floaters.projects, accent: "bg-white text-navy border border-navy/10", top: "top-[22rem]", left: "left-1/3", delay: "3s" },
  ];

  return (
    <div className="min-h-screen pb-24 md:pb-0">
      <Navbar />

      <section className="gradient-hero relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-10 md:grid-cols-2 md:gap-12 md:px-6 md:pb-20 md:pt-24">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white/60 px-3 py-1 text-xs font-medium text-navy/70 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-growth" /> {dict.landing.badge}
            </div>
            <h1 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight text-navy sm:text-5xl md:text-7xl text-balance">
              {dict.landing.titleA}<br />
              <span className="italic text-navy/80">{dict.landing.titleB}</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-navy/70 md:mt-6 md:text-lg">
              {dict.landing.sub}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/auth" search={{ mode: "signup" }} className="group inline-flex min-h-[48px] items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-ivory shadow-lg shadow-navy/20 transition hover:translate-y-[-1px]">
                {dict.landing.ctaStart}
                <span className="transition group-hover:translate-x-1">→</span>
              </Link>
              <Link to="/opportunities" className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-navy/15 bg-white/70 px-6 py-3.5 text-sm font-semibold text-navy backdrop-blur hover:bg-white">
                {dict.landing.ctaExplore}
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-navy/60 md:mt-10">
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-gold" /> {dict.landing.bullet1}</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-lavender" /> {dict.landing.bullet2}</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-growth" /> {dict.landing.bullet3}</div>
            </div>
          </div>

          <div className="relative hidden h-[28rem] md:block md:h-[32rem]">
            <div className="absolute inset-0 rounded-3xl bg-white/40 backdrop-blur-sm" />
            {FLOATERS.map((f) => (
              <div key={f.label} className={`absolute ${f.top} ${f.left} animate-float`} style={{ animationDelay: f.delay }}>
                <div className={`rounded-2xl ${f.accent} px-4 py-3 text-sm font-semibold shadow-xl shadow-navy/10`}>{f.label}</div>
              </div>
            ))}
            <div className="absolute left-1/2 top-1/2 w-64 -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-navy/10 bg-white p-5 shadow-2xl shadow-navy/10">
              <div className="text-xs font-medium text-navy/60">{dict.landing.yourDirection}</div>
              <div className="mt-1 font-display text-xl text-navy">{dict.landing.directionExample}</div>
              <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-navy/10">
                <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-growth to-lavender" />
              </div>
              <div className="mt-2 text-xs text-navy/60">{dict.landing.completeness}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 text-center md:px-6 md:py-24">
        <div className="text-xs font-semibold uppercase tracking-widest text-navy/50">{dict.landing.whyKicker}</div>
        <h2 className="mt-4 font-display text-3xl leading-tight md:text-5xl text-balance">
          {dict.landing.whyTitle}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base text-navy/70 md:mt-6 md:text-lg">
          {dict.landing.whySub}
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8 md:px-6 md:py-12">
        <div className="mb-8 md:mb-10">
          <div className="text-xs font-semibold uppercase tracking-widest text-navy/50">{dict.landing.journeyKicker}</div>
          <h2 className="mt-2 font-display text-3xl md:text-4xl">{dict.landing.journeyTitle}</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {dict.landing.steps.map((j, i) => (
            <div key={j.t} className="group relative overflow-hidden rounded-3xl border border-navy/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl">
              <div className={`absolute -right-8 -top-8 h-32 w-32 rounded-full ${JOURNEY_COLORS[i]} blur-2xl`} />
              <div className="relative">
                <div className="text-xs font-semibold text-navy/50">{dict.common.step} 0{i + 1}</div>
                <div className="mt-2 font-display text-2xl">{j.t}</div>
                <p className="mt-3 text-sm text-navy/70">{j.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-6 md:py-24">
        <div className="gradient-navy relative overflow-hidden rounded-[2rem] px-6 py-14 text-center text-ivory md:px-8 md:py-20">
          <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-lavender/30 blur-3xl" />
          <div className="absolute -right-10 bottom-0 h-64 w-64 rounded-full bg-gold/25 blur-3xl" />
          <h2 className="relative mx-auto max-w-3xl font-display text-4xl leading-tight md:text-6xl text-balance">{dict.landing.finalTitle}</h2>
          <p className="relative mx-auto mt-5 max-w-xl text-ivory/70">{dict.landing.finalSub}</p>
          <div className="relative mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/auth" search={{ mode: "signup" }} className="rounded-full bg-ivory px-6 py-3.5 text-sm font-semibold text-navy hover:opacity-90">{dict.landing.finalCta1}</Link>
            <Link to="/opportunities" className="rounded-full border border-ivory/30 px-6 py-3.5 text-sm font-semibold text-ivory hover:bg-white/10">{dict.landing.finalCta2}</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
