import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "MyPath — Find opportunities. Build your portfolio. Plan your next step." },
      {
        name: "description",
        content:
          "MyPath helps students aged 13–18 find scholarships, competitions, research programs and internships, organize applications, and build a strong portfolio — all in one place.",
      },
      { property: "og:title", content: "MyPath — For ambitious students" },
      {
        property: "og:description",
        content: "Find opportunities. Build your portfolio. Plan your next step.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
} as any);

const STEPS = [
  {
    number: "01",
    title: "Find opportunities",
    body: "Browse scholarships, competitions, research programs, internships, and more. Filter by grade, location, deadline, and cost.",
    accent: "bg-sage",
  },
  {
    number: "02",
    title: "Track applications",
    body: "Move opportunities from Saved → In Progress → Submitted → Accepted. Add tasks, deadlines, and notes per application.",
    accent: "bg-sand",
  },
  {
    number: "03",
    title: "Build your portfolio",
    body: "Document achievements, projects, leadership, research, and certificates. Export a clean, professional PDF anytime.",
    accent: "bg-lavender/40",
  },
  {
    number: "04",
    title: "Plan your next step",
    body: "Use AI Mentor to find relevant opportunities, prepare for applications, and identify what's missing from your profile.",
    accent: "bg-growth/30",
  },
];

const CATEGORIES = [
  "Scholarships",
  "Competitions",
  "Research",
  "Internships",
  "Summer Programs",
  "Volunteering",
  "Hackathons",
  "Leadership",
  "Courses",
];

function Landing() {
  return (
    <div className="min-h-screen pb-24 md:pb-0">
      <Navbar />

      {/* HERO */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-10 md:px-6 md:pb-24 md:pt-20">
          <div className="max-w-3xl animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-navy/12 bg-white/70 px-3 py-1 text-xs font-medium text-navy/70">
              <span className="h-1.5 w-1.5 rounded-full bg-growth" />
              For students aged 13–18
            </div>
            <h1 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight text-navy sm:text-5xl md:text-6xl text-balance">
              Find opportunities.
              <br />
              <span className="text-clay-deep">Build your portfolio.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-navy/70 md:text-lg">
              MyPath helps students find scholarships, competitions, research programs, and
              internships — organize applications, and build a strong portfolio, all in one place.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/opportunities"
                className="inline-flex min-h-[48px] items-center gap-2 rounded-xl bg-navy px-6 py-3.5 text-sm font-semibold text-ivory shadow-sm transition hover:opacity-90 hover:-translate-y-0.5"
              >
                Explore opportunities
              </Link>
              <Link
                to="/auth"
                search={{ mode: "signup" }}
                className="inline-flex min-h-[48px] items-center gap-2 rounded-xl border border-navy/15 bg-white/80 px-6 py-3.5 text-sm font-semibold text-navy transition hover:bg-white"
              >
                Create free account
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-navy/60">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-growth" />
                Scholarships, competitions, research programs
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                Application tracker with deadlines
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-lavender" />
                Portfolio builder with PDF export
              </span>
            </div>
          </div>

          {/* Category pills — visual indicator of what's inside */}
          <div className="mt-10 flex flex-wrap gap-2 md:mt-12">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat}
                to="/opportunities"
                className="rounded-xl border border-navy/10 bg-white/70 px-3.5 py-1.5 text-sm font-medium text-navy/80 transition hover:bg-white hover:border-navy/25"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-6 md:py-24">
        <div className="mb-10">
          <div className="text-xs font-semibold uppercase tracking-widest text-navy/50">
            How it works
          </div>
          <h2 className="mt-2 font-display text-3xl md:text-4xl text-balance">
            Find → Organize → Build → Plan
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <div
              key={s.number}
              className="relative overflow-hidden rounded-2xl border border-navy/10 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div
                className={`absolute -right-6 -top-6 h-24 w-24 rounded-full ${s.accent} opacity-60`}
              />
              <div className="relative">
                <div className="font-mono text-xs font-bold text-navy/30">{s.number}</div>
                <div className="mt-2 font-display text-xl text-navy">{s.title}</div>
                <p className="mt-3 text-sm leading-relaxed text-navy/70">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT YOU GET section — concrete, not vague */}
      <section className="border-t border-navy/8 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-6 md:py-24">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-navy/50">
                Opportunities
              </div>
              <h2 className="mt-2 font-display text-2xl md:text-3xl">
                Browse 50+ curated programs
              </h2>
              <p className="mt-4 text-navy/70 leading-relaxed">
                Every opportunity is real — scholarships, research programs, competitions,
                internships, summer programs, volunteering, hackathons, leadership programs, and
                courses. Filter by grade, location, deadline, and cost.
              </p>
              <Link
                to="/opportunities"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-navy px-5 py-2.5 text-sm font-semibold text-ivory hover:opacity-90"
              >
                Browse opportunities →
              </Link>
            </div>
            <div className="rounded-2xl border border-navy/10 bg-ivory p-5 md:p-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-navy/50 mb-3">
                Sample opportunities
              </div>
              {[
                { title: "Lumiere Research Program", cat: "Research", deadline: "Oct 15" },
                { title: "Google Science Fair", cat: "Competition", deadline: "Nov 1" },
                { title: "Davis UWC Scholarship", cat: "Scholarship", deadline: "Nov 15" },
                { title: "MIT PRIMES", cat: "Research", deadline: "Dec 1" },
              ].map((o) => (
                <div
                  key={o.title}
                  className="flex items-center justify-between py-2.5 border-b border-navy/8 last:border-0"
                >
                  <div>
                    <div className="text-sm font-semibold text-navy">{o.title}</div>
                    <div className="text-xs text-navy/50">{o.cat}</div>
                  </div>
                  <div className="text-xs text-navy/60">Due {o.deadline}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio feature */}
      <section className="border-t border-navy/8">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-6 md:py-24">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="rounded-2xl border border-navy/10 bg-white p-5 md:p-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-navy/50 mb-3">
                Portfolio preview
              </div>
              {[
                {
                  section: "Achievements",
                  title: "1st Place — Regional Math Olympiad",
                  date: "2024",
                },
                { section: "Projects", title: "AI Crop Disease Detector", date: "2024" },
                {
                  section: "Leadership",
                  title: "Model UN President — School Club",
                  date: "2023–2024",
                },
                { section: "Research", title: "Water Quality Analysis Paper", date: "2024" },
              ].map((item) => (
                <div key={item.title} className="py-2.5 border-b border-navy/8 last:border-0">
                  <div className="text-xs text-navy/50 uppercase tracking-wider">
                    {item.section}
                  </div>
                  <div className="text-sm font-semibold text-navy mt-0.5">{item.title}</div>
                  <div className="text-xs text-navy/50">{item.date}</div>
                </div>
              ))}
              <div className="mt-4 flex items-center gap-2 text-xs text-clay-deep font-semibold">
                <span className="inline-block h-2 w-2 rounded-full bg-clay-deep" />
                78% complete · Export PDF
              </div>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-navy/50">
                Portfolio
              </div>
              <h2 className="mt-2 font-display text-2xl md:text-3xl">
                A portfolio that's actually yours
              </h2>
              <p className="mt-4 text-navy/70 leading-relaxed">
                Add achievements, projects, research, leadership, volunteering, certificates, and
                skills. See your portfolio completeness and what's missing. Export a clean,
                professional PDF anytime.
              </p>
              <div className="mt-6 space-y-2 text-sm text-navy/70">
                {[
                  "Add, edit, delete, and reorder items",
                  "Completeness indicator with specific suggestions",
                  "Export professional PDF — ready for applications",
                ].map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-growth flex-none" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 py-12 md:px-6 md:py-20">
        <div className="gradient-navy relative overflow-hidden rounded-2xl px-6 py-14 text-center text-ivory md:px-8 md:py-20">
          <h2 className="relative mx-auto max-w-2xl font-display text-3xl leading-tight md:text-5xl text-balance">
            Start organizing your opportunities today.
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-ivory/70 text-sm md:text-base">
            Free to use. No credit card required. Set up your profile in 2 minutes.
          </p>
          <div className="relative mt-7 flex flex-wrap justify-center gap-3">
            <Link
              to="/auth"
              search={{ mode: "signup" }}
              className="rounded-xl bg-ivory px-6 py-3.5 text-sm font-semibold text-navy transition hover:opacity-90"
            >
              Create free account
            </Link>
            <Link
              to="/opportunities"
              className="rounded-xl border border-ivory/25 px-6 py-3.5 text-sm font-semibold text-ivory transition hover:bg-white/10"
            >
              Browse opportunities
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
