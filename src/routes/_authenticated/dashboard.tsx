import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  useSession,
  useProfile,
  useOnboarding,
  usePortfolio,
  useApplications,
  useApplicationTasks,
} from "@/lib/supabase-hooks";
import { openOpportunities, type Category } from "@/lib/opportunities";
import { rankOpportunities } from "@/lib/matching";
import { formatDate } from "@/lib/format";
import { useOpportunities } from "@/lib/supabase-hooks";

export const Route = createFileRoute("/_authenticated/dashboard")({
  component: Dashboard,
  head: () => ({
    meta: [
      { title: "MyPath — Home" },
      {
        name: "description",
        content:
          "Your MyPath dashboard: upcoming deadlines, applications in progress, and recommended opportunities.",
      },
    ],
  }),
});

const STATUS_LABELS: Record<string, string> = {
  saved: "Saved",
  planning: "Planning",
  in_progress: "In Progress",
  submitted: "Submitted",
  accepted: "Accepted",
  rejected: "Not accepted",
  archived: "Archived",
};

const STATUS_COLORS: Record<string, string> = {
  saved: "bg-navy/8 text-navy",
  planning: "bg-gold/40 text-navy",
  in_progress: "bg-lavender/40 text-navy",
  submitted: "bg-sage text-navy",
  accepted: "bg-growth/25 text-navy",
  rejected: "bg-destructive/10 text-destructive",
  archived: "bg-navy/5 text-navy/50",
};

function greeting(name: string): string {
  const h = new Date().getHours();
  if (h < 12) return `Good morning, ${name}.`;
  if (h < 17) return `Good afternoon, ${name}.`;
  return `Good evening, ${name}.`;
}

function Dashboard() {
  const { user } = useSession();
  const { data: profile } = useProfile(user);
  const { data: onboarding } = useOnboarding(user);
  const { data: portfolio } = usePortfolio(user);
  const { data: applications } = useApplications(user);
  const { data: allTasks } = useApplicationTasks(user?.id);
  const { data: rawOpps } = useOpportunities();

  const firstName = (profile?.name ?? user?.email?.split("@")[0] ?? "there").split(" ")[0];
  const done = !!onboarding?.completed_at;

  const ctx = useMemo(
    () => ({
      age: profile?.age ?? null,
      grade: profile?.grade ? parseInt(profile.grade, 10) : null,
      country: profile?.country ?? null,
      interests: onboarding?.interests ?? [],
      problems: onboarding?.problems ?? [],
      goals: onboarding?.goals ?? [],
    }),
    [profile, onboarding],
  );

  const recs = useMemo(
    () => rankOpportunities(openOpportunities(rawOpps), ctx).slice(0, 6),
    [ctx, rawOpps],
  );

  // Compute next steps from real data
  const savedNotApplied = (applications ?? []).filter((a) => a.status === "saved").length;
  const inProgressApps = (applications ?? []).filter((a) =>
    ["planning", "in_progress"].includes(a.status),
  );
  const portfolioItemCount = (portfolio ?? []).length;
  const portfolioSections = new Set((portfolio ?? []).map((p) => p.section));
  const missingPortfolioSections = ["achievements", "projects", "leadership"].filter(
    (s) => !portfolioSections.has(s),
  );
  const overdueTasks = (allTasks ?? []).filter((t) => {
    if (t.completed || !t.due_date) return false;
    return new Date(t.due_date) < new Date();
  });

  const nextSteps: string[] = [];
  if (!done) nextSteps.push("Complete your profile setup");
  if (savedNotApplied > 0)
    nextSteps.push(
      `${savedNotApplied} saved opportunit${savedNotApplied === 1 ? "y" : "ies"} — start an application`,
    );
  if (overdueTasks.length > 0)
    nextSteps.push(
      `${overdueTasks.length} task${overdueTasks.length === 1 ? "" : "s"} past due date`,
    );
  if (missingPortfolioSections.length > 0 && portfolioItemCount < 5)
    nextSteps.push(`Add ${missingPortfolioSections[0]} to your portfolio`);
  if (nextSteps.length === 0)
    nextSteps.push("You're all caught up. Browse opportunities to find your next application.");

  // Upcoming deadlines from saved opportunities
  const savedOppIds = new Set((applications ?? []).map((a) => a.opportunity_id));
  const upcomingDeadlines = (openOpportunities(rawOpps) ?? [])
    .filter((o) => savedOppIds.has(o.id))
    .sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime())
    .slice(0, 5);

  const portfolioSectionCounts = {
    projects: (portfolio ?? []).filter((p) => p.section === "projects").length,
    achievements: (portfolio ?? []).filter((p) => p.section === "achievements").length,
    leadership: (portfolio ?? []).filter((p) => p.section === "leadership").length,
    skills: (portfolio ?? []).filter((p) => p.section === "skills").length,
  };
  const maxPortfolioItems = 12; // rough "complete" threshold
  const portfolioProgress = Math.min(
    100,
    Math.round((portfolioItemCount / maxPortfolioItems) * 100),
  );

  return (
    <div className="min-h-screen pb-24 md:pb-0">
      <Navbar />
      <main className="mx-auto max-w-7xl px-5 py-8 md:px-6 md:py-10">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h1 className="font-display text-3xl md:text-5xl">{greeting(firstName)}</h1>
            <p className="mt-1.5 text-sm text-navy/60 md:text-base">
              Here is what needs your attention.
            </p>
          </div>
          {!done && (
            <Link
              to="/onboarding"
              className="rounded-xl border border-navy/15 px-4 py-2 text-sm font-medium hover:bg-navy/5 transition"
            >
              Complete profile setup →
            </Link>
          )}
        </div>

        {/* TOP GRID: Next Steps + Upcoming Deadlines */}
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {/* Next Steps */}
          <div className="rounded-2xl border border-navy/10 bg-white p-5 shadow-sm">
            <h2 className="font-semibold text-sm uppercase tracking-wider text-navy/50">
              Your next steps
            </h2>
            <ul className="mt-4 space-y-2.5">
              {nextSteps.map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-navy">
                  <span className="mt-0.5 h-4 w-4 flex-none rounded border border-navy/20 bg-white" />
                  {step}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex gap-2 flex-wrap border-t border-navy/5 pt-4">
              <Link
                to="/opportunities"
                className="rounded-xl bg-navy px-4 py-2 text-xs font-semibold text-ivory hover:opacity-90"
              >
                Browse opportunities
              </Link>
              <Link
                to="/my-plan"
                className="rounded-xl border border-navy/15 px-4 py-2 text-xs font-medium hover:bg-navy/5"
              >
                My Plan →
              </Link>
            </div>
          </div>

          {/* Upcoming Deadlines */}
          <div className="rounded-2xl border border-navy/10 bg-white p-5 shadow-sm lg:col-span-2">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-sm uppercase tracking-wider text-navy/50">
                Upcoming deadlines
              </h2>
              <Link
                to="/my-plan"
                className="text-xs font-medium underline text-navy/60 hover:text-navy"
              >
                View all →
              </Link>
            </div>
            {upcomingDeadlines.length === 0 ? (
              <div className="mt-6 text-center py-6">
                <p className="text-sm text-navy/50">No upcoming deadlines.</p>
                <p className="mt-1 text-xs text-navy/40">
                  Save opportunities to track their deadlines here.
                </p>
                <Link
                  to="/opportunities"
                  className="mt-4 inline-block rounded-xl border border-navy/15 px-4 py-2 text-xs font-medium hover:bg-navy/5"
                >
                  Browse opportunities
                </Link>
              </div>
            ) : (
              <div className="mt-4 space-y-2">
                {upcomingDeadlines.map((o) => {
                  const daysLeft = Math.ceil(
                    (new Date(o.deadline).getTime() - Date.now()) / 86400000,
                  );
                  const urgent = daysLeft <= 7;
                  const app = (applications ?? []).find((a) => a.opportunity_id === o.id);
                  return (
                    <div
                      key={o.id}
                      className="flex items-center justify-between gap-3 rounded-xl border border-navy/8 bg-ivory/50 px-4 py-3"
                    >
                      <div className="min-w-0">
                        <div className="truncate text-sm font-semibold text-navy">{o.title}</div>
                        <div className="text-xs text-navy/50">{o.org}</div>
                      </div>
                      <div className="flex flex-none items-center gap-2">
                        {app && (
                          <span
                            className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${STATUS_COLORS[app.status] ?? "bg-navy/5 text-navy"}`}
                          >
                            {STATUS_LABELS[app.status] ?? app.status}
                          </span>
                        )}
                        <span
                          className={`text-xs font-semibold ${urgent ? "text-destructive" : "text-navy/60"}`}
                        >
                          {daysLeft <= 0 ? "Today" : daysLeft === 1 ? "1 day" : `${daysLeft} days`}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Applications In Progress */}
        {inProgressApps.length > 0 && (
          <section className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display text-xl md:text-2xl">In progress</h2>
              <Link
                to="/my-plan"
                className="text-sm font-medium underline text-navy/60 hover:text-navy"
              >
                View My Plan →
              </Link>
            </div>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {inProgressApps.slice(0, 3).map((app) => {
                const opp = (openOpportunities(rawOpps) ?? []).find(
                  (o) => o.id === app.opportunity_id,
                );
                const appTasks = (allTasks ?? []).filter(
                  (t) => t.opportunity_id === app.opportunity_id,
                );
                const doneTasks = appTasks.filter((t) => t.completed).length;
                if (!opp) return null;
                return (
                  <Link
                    key={app.id}
                    to="/my-plan"
                    className="block rounded-2xl border border-navy/10 bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <div className="truncate text-sm font-semibold text-navy">{opp.title}</div>
                        <div className="text-xs text-navy/50 mt-0.5">{opp.org}</div>
                      </div>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-semibold flex-none ${STATUS_COLORS[app.status] ?? ""}`}
                      >
                        {STATUS_LABELS[app.status] ?? app.status}
                      </span>
                    </div>
                    {appTasks.length > 0 && (
                      <div className="mt-3 text-xs text-navy/60">
                        {doneTasks}/{appTasks.length} tasks done
                        <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-navy/10">
                          <div
                            className="h-full rounded-full bg-growth transition-all"
                            style={{ width: `${Math.round((doneTasks / appTasks.length) * 100)}%` }}
                          />
                        </div>
                      </div>
                    )}
                    <div className="mt-2 text-xs text-navy/50">
                      Deadline: {formatDate(opp.deadline, "en")}
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* Recommended Opportunities */}
        <section className="mt-10 md:mt-12">
          <div className="flex items-end justify-between mb-5">
            <div>
              <h2 className="font-display text-xl md:text-2xl">Recommended opportunities</h2>
              <p className="mt-1 text-xs text-navy/60">
                Based on your grade, location, and interests.
              </p>
            </div>
            <Link
              to="/opportunities"
              className="text-sm font-medium underline text-navy/60 hover:text-navy"
            >
              Browse all →
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {recs.slice(0, 6).map(({ opp: o, eligible, reasons }) => (
              <div
                key={o.id}
                className="flex flex-col justify-between rounded-2xl border border-navy/10 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full bg-navy/5 px-3 py-1 text-[11px] font-medium text-navy/70">
                      {o.category as Category}
                    </span>
                    {!eligible && (
                      <span className="text-[10px] font-medium text-destructive/80">
                        Check eligibility
                      </span>
                    )}
                  </div>
                  <div className="mt-3 font-semibold text-navy leading-snug">{o.title}</div>
                  <div className="text-xs text-navy/50 mt-0.5">{o.org}</div>
                  <p className="mt-2.5 text-xs text-navy/70 leading-relaxed line-clamp-2">
                    {o.description}
                  </p>
                  {reasons[0] && (
                    <div className="mt-2.5 rounded-xl bg-sage/80 px-3 py-1.5 text-xs text-navy/80">
                      {reasons[0]}
                    </div>
                  )}
                </div>
                <div className="mt-4 flex gap-2 border-t border-navy/5 pt-4">
                  <div className="flex-1 text-xs text-navy/50 self-center">
                    Due {formatDate(o.deadline, "en")}
                  </div>
                  <Link
                    to="/apply-guide/$id"
                    params={{ id: o.id }}
                    className="rounded-xl bg-navy px-4 py-2 text-xs font-semibold text-ivory hover:opacity-90"
                  >
                    View →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom: Portfolio + AI Mentor */}
        <section className="mt-10 grid gap-5 md:mt-12 md:grid-cols-2">
          {/* Portfolio */}
          <div className="rounded-2xl border border-navy/10 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-xl">Portfolio</h2>
              <Link
                to="/portfolio"
                className="text-sm font-medium underline text-navy/60 hover:text-navy"
              >
                Edit →
              </Link>
            </div>
            <div className="mt-3">
              <div className="flex items-center justify-between text-xs text-navy/60 mb-1.5">
                <span>Completeness</span>
                <span className="font-semibold text-navy">{portfolioProgress}%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-navy/10">
                <div
                  className="h-full rounded-full bg-growth transition-all"
                  style={{ width: `${portfolioProgress}%` }}
                />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2.5">
              {Object.entries(portfolioSectionCounts).map(([k, n]) => (
                <div key={k} className="rounded-xl bg-ivory p-3">
                  <div className="text-xs font-semibold uppercase tracking-wider text-navy/50 capitalize">
                    {k}
                  </div>
                  <div className="mt-0.5 font-display text-2xl text-navy">{n}</div>
                </div>
              ))}
            </div>
            <Link
              to="/portfolio"
              className="mt-4 block rounded-xl border border-navy/15 px-4 py-2.5 text-center text-sm font-medium hover:bg-navy/5 transition"
            >
              Go to Portfolio →
            </Link>
          </div>

          {/* AI Mentor */}
          <div className="relative overflow-hidden rounded-2xl border border-navy/10 bg-navy p-5 shadow-sm text-ivory flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-ivory/60">
                AI Mentor
              </div>
              <div className="mt-2 font-display text-xl md:text-2xl">
                Get help with your next step.
              </div>
              <p className="mt-2 text-sm text-ivory/70 leading-relaxed">
                Ask about opportunities, applications, or what's missing from your portfolio.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["What opportunities should I apply to?", "What's missing from my portfolio?"].map(
                  (p) => (
                    <Link
                      key={p}
                      to="/mentor"
                      className="rounded-xl border border-ivory/20 px-3 py-1.5 text-xs text-ivory/80 hover:bg-white/10 transition"
                    >
                      {p}
                    </Link>
                  ),
                )}
              </div>
            </div>
            <div className="mt-6">
              <Link
                to="/mentor"
                className="inline-flex items-center gap-2 rounded-xl bg-ivory px-5 py-2.5 text-sm font-semibold text-navy hover:opacity-90"
              >
                Open AI Mentor →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
