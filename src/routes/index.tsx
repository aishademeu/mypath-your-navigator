import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({ component: Landing });

const JOURNEY = [
  { t: "Discover", d: "Understand who you are — strengths, interests, values.", c: "bg-lavender/40" },
  { t: "Explore", d: "Find scholarships, research, competitions matched to you.", c: "bg-gold/40" },
  { t: "Build", d: "Turn ideas into projects, leadership, real portfolio work.", c: "bg-growth/40" },
  { t: "Grow", d: "With AI mentorship & guidance, become the version you imagine.", c: "bg-navy/10" },
];

const FLOATERS = [
  { label: "Scholarships", accent: "bg-gold text-navy", top: "top-6", left: "left-6", delay: "0s" },
  { label: "Research Programs", accent: "bg-lavender text-navy", top: "top-24", left: "right-8", delay: "1.4s" },
  { label: "Competitions", accent: "bg-growth text-navy", top: "top-56", left: "left-14", delay: "2.2s" },
  { label: "Leadership", accent: "bg-navy text-ivory", top: "top-72", left: "right-16", delay: "0.8s" },
  { label: "Projects", accent: "bg-white text-navy border border-navy/10", top: "top-[22rem]", left: "left-1/3", delay: "3s" },
];

const TESTIMONIALS = [
  { name: "Amelia, 17", country: "United Kingdom", quote: "MyPath helped me realize I wanted to lead — not just study. I found a Diana Award nomination and my first fellowship." },
  { name: "Kaan, 16", country: "Türkiye", quote: "I always loved building things but had no direction. In one week I had a plan, a portfolio, and my first hackathon." },
  { name: "Sara, 15", country: "UAE", quote: "It felt like a mentor and a compass at the same time. My university list actually makes sense now." },
];

function Landing() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="gradient-hero relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-16 md:grid-cols-2 md:pt-24">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white/60 px-3 py-1 text-xs font-medium text-navy/70 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-growth" /> For ambitious students, 13–18
            </div>
            <h1 className="mt-6 font-display text-5xl leading-[1.02] tracking-tight text-navy md:text-7xl text-balance">
              Find your path.<br />
              <span className="italic text-navy/80">Build your future.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy/70">
              MyPath helps students discover who they are, find opportunities that match their goals, and build a future they truly believe in.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/auth" search={{ mode: "signup" }} className="group inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-ivory shadow-lg shadow-navy/20 transition hover:translate-y-[-1px]">
                Start Your Journey
                <span className="transition group-hover:translate-x-1">→</span>
              </Link>
              <Link to="/opportunities" className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white/70 px-6 py-3.5 text-sm font-semibold text-navy backdrop-blur hover:bg-white">
                Explore Opportunities
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-navy/60">
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-gold" /> 50+ curated opportunities</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-lavender" /> AI mentor guidance</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-growth" /> Portfolio that stands out</div>
            </div>
          </div>

          <div className="relative h-[28rem] md:h-[32rem]">
            <div className="absolute inset-0 rounded-3xl bg-white/40 backdrop-blur-sm" />
            {FLOATERS.map((f) => (
              <div key={f.label} className={`absolute ${f.top} ${f.left} animate-float`} style={{ animationDelay: f.delay }}>
                <div className={`rounded-2xl ${f.accent} px-4 py-3 text-sm font-semibold shadow-xl shadow-navy/10`}>{f.label}</div>
              </div>
            ))}
            <div className="absolute left-1/2 top-1/2 w-64 -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-navy/10 bg-white p-5 shadow-2xl shadow-navy/10">
              <div className="text-xs font-medium text-navy/60">Your direction</div>
              <div className="mt-1 font-display text-xl text-navy">Social Entrepreneurship <span className="text-lavender">+ Leadership</span></div>
              <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-navy/10">
                <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-growth to-lavender" />
              </div>
              <div className="mt-2 text-xs text-navy/60">72% profile completeness</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <div className="text-xs font-semibold uppercase tracking-widest text-navy/50">Why MyPath exists</div>
        <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl text-balance">
          Too many talented students never discover<br />what they are capable of.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-navy/70">
          We built MyPath as the compass we wish we had at 15 — a warm, intelligent guide that helps you see yourself, find your people, and take the next real step.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-navy/50">Your journey</div>
            <h2 className="mt-2 font-display text-4xl">Discover → Explore → Build → Grow</h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {JOURNEY.map((j, i) => (
            <div key={j.t} className="group relative overflow-hidden rounded-3xl border border-navy/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl">
              <div className={`absolute -right-8 -top-8 h-32 w-32 rounded-full ${j.c} blur-2xl`} />
              <div className="relative">
                <div className="text-xs font-semibold text-navy/50">Step 0{i + 1}</div>
                <div className="mt-2 font-display text-2xl">{j.t}</div>
                <p className="mt-3 text-sm text-navy/70">{j.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-navy/50">Students on MyPath</div>
          <h2 className="mt-3 font-display text-4xl text-balance">A generation, finally seen.</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="rounded-3xl border border-navy/10 bg-white p-7">
              <blockquote className="font-display text-lg leading-snug text-navy">"{t.quote}"</blockquote>
              <figcaption className="mt-5 text-sm text-navy/60">{t.name} · {t.country}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="gradient-navy relative overflow-hidden rounded-[2rem] px-8 py-20 text-center text-ivory">
          <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-lavender/30 blur-3xl" />
          <div className="absolute -right-10 bottom-0 h-64 w-64 rounded-full bg-gold/25 blur-3xl" />
          <h2 className="relative mx-auto max-w-3xl font-display text-5xl leading-tight md:text-6xl text-balance">Your journey starts here.</h2>
          <p className="relative mx-auto mt-6 max-w-xl text-ivory/70">Join thousands of ambitious students already building futures they believe in.</p>
          <div className="relative mt-8 flex justify-center gap-3">
            <Link to="/auth" search={{ mode: "signup" }} className="rounded-full bg-ivory px-7 py-3.5 text-sm font-semibold text-navy hover:opacity-90">Create free account</Link>
            <Link to="/opportunities" className="rounded-full border border-ivory/30 px-7 py-3.5 text-sm font-semibold text-ivory hover:bg-white/10">Browse opportunities</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
