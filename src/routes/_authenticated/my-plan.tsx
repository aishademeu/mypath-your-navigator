import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  useSession,
  useApplications,
  useApplicationTasks,
  useUpdateApplicationStatus,
  useAddApplicationTask,
  useToggleApplicationTask,
  useDeleteApplicationTask,
  type ApplicationRow,
  type ApplicationTaskRow,
} from "@/lib/supabase-hooks";
import { useOpportunities } from "@/lib/supabase-hooks";
import { opportunityById } from "@/lib/opportunities";
import { formatDate } from "@/lib/format";
import { ChevronDown, Plus, Trash2, Check, X } from "lucide-react";

export const Route = createFileRoute("/_authenticated/my-plan")({
  component: MyPlan,
  head: () => ({
    meta: [
      { title: "MyPath — My Plan" },
      {
        name: "description",
        content: "Track all your applications in one place — from saved to submitted.",
      },
    ],
  }),
});

type Status =
  "saved" | "planning" | "in_progress" | "submitted" | "accepted" | "rejected" | "archived";

const ALL_STATUSES: Status[] = [
  "saved",
  "planning",
  "in_progress",
  "submitted",
  "accepted",
  "rejected",
  "archived",
];

const STATUS_LABELS: Record<Status, string> = {
  saved: "Saved",
  planning: "Planning",
  in_progress: "In Progress",
  submitted: "Submitted",
  accepted: "Accepted",
  rejected: "Not accepted",
  archived: "Archived",
};

const STATUS_COLORS: Record<Status, string> = {
  saved: "bg-navy/8 text-navy",
  planning: "bg-gold/40 text-navy",
  in_progress: "bg-lavender/40 text-navy",
  submitted: "bg-sage text-navy",
  accepted: "bg-growth/30 text-navy",
  rejected: "bg-destructive/10 text-destructive",
  archived: "bg-navy/5 text-navy/50",
};

function MyPlan() {
  const { user } = useSession();
  const { data: applications, isLoading } = useApplications(user);
  const { data: allTasks } = useApplicationTasks(user?.id);
  const { data: rawOpps } = useOpportunities();
  const updateStatus = useUpdateApplicationStatus(user?.id);
  const addTask = useAddApplicationTask(user?.id);
  const toggleTask = useToggleApplicationTask(user?.id);
  const deleteTask = useDeleteApplicationTask(user?.id);

  const [filterStatus, setFilterStatus] = useState<Status | "all">("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [newTaskText, setNewTaskText] = useState<Record<string, string>>({});
  const [addingTask, setAddingTask] = useState<Record<string, boolean>>({});

  const filtered = useMemo(() => {
    const apps = applications ?? [];
    if (filterStatus === "all") return apps;
    return apps.filter((a) => a.status === filterStatus);
  }, [applications, filterStatus]);

  const oppFor = (opportunityId: string) => {
    const fromLib = opportunityById(opportunityId);
    if (fromLib) return fromLib;
    const fromDb = (rawOpps ?? []).find(
      (o: any) => String(o.id) === opportunityId || o.id === opportunityId,
    );
    return fromDb ?? null;
  };

  const tasksFor = (opportunityId: string): ApplicationTaskRow[] =>
    (allTasks ?? []).filter((t) => t.opportunity_id === opportunityId);

  const handleAddTask = async (app: ApplicationRow) => {
    const text = newTaskText[app.opportunity_id]?.trim();
    if (!text) return;
    setAddingTask((p) => ({ ...p, [app.opportunity_id]: true }));
    await addTask.mutateAsync({ opportunity_id: app.opportunity_id, title: text });
    setNewTaskText((p) => ({ ...p, [app.opportunity_id]: "" }));
    setAddingTask((p) => ({ ...p, [app.opportunity_id]: false }));
  };

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: applications?.length ?? 0 };
    for (const s of ALL_STATUSES) {
      c[s] = (applications ?? []).filter((a) => a.status === s).length;
    }
    return c;
  }, [applications]);

  return (
    <div className="min-h-screen pb-24 md:pb-0">
      <Navbar />
      <main className="mx-auto max-w-5xl px-5 py-8 md:px-6 md:py-10">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-navy/50">
              My Plan
            </div>
            <h1 className="mt-1 font-display text-3xl md:text-4xl">Application Tracker</h1>
            <p className="mt-1.5 text-sm text-navy/60">
              Track all your applications in one place — from saved to submitted.
            </p>
          </div>
          <Link
            to="/opportunities"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-navy px-5 py-2.5 text-sm font-semibold text-ivory hover:opacity-90"
          >
            <Plus className="h-4 w-4" />
            Find opportunities
          </Link>
        </div>

        {/* Status filter tabs */}
        <div className="mt-6 flex gap-1.5 flex-wrap">
          <button
            onClick={() => setFilterStatus("all")}
            className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition ${filterStatus === "all" ? "bg-navy text-ivory" : "border border-navy/15 hover:bg-navy/5"}`}
          >
            All {counts.all > 0 && <span className="ml-1 opacity-60">{counts.all}</span>}
          </button>
          {ALL_STATUSES.map((s) => (
            <button
              key={s}
              onClick={() => setFilterStatus(s)}
              className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition ${filterStatus === s ? "bg-navy text-ivory" : "border border-navy/15 hover:bg-navy/5"}`}
            >
              {STATUS_LABELS[s]}
              {counts[s] > 0 && <span className="ml-1 opacity-60">{counts[s]}</span>}
            </button>
          ))}
        </div>

        {/* Applications list */}
        <div className="mt-6 space-y-3">
          {isLoading && (
            <div className="rounded-2xl border border-navy/10 bg-white p-8 text-center text-sm text-navy/50">
              Loading…
            </div>
          )}

          {!isLoading && filtered.length === 0 && (
            <div className="rounded-2xl border border-dashed border-navy/15 p-10 text-center">
              <div className="text-lg font-semibold text-navy">No applications here yet.</div>
              <p className="mt-2 text-sm text-navy/60">
                Save opportunities from the Opportunities page to track them here.
              </p>
              <Link
                to="/opportunities"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-navy px-5 py-2.5 text-sm font-semibold text-ivory hover:opacity-90"
              >
                Browse opportunities →
              </Link>
            </div>
          )}

          {filtered.map((app) => {
            const opp = oppFor(app.opportunity_id);
            const tasks = tasksFor(app.opportunity_id);
            const doneTasks = tasks.filter((t) => t.completed).length;
            const isExpanded = expandedId === app.opportunity_id;
            const daysLeft = opp
              ? Math.ceil((new Date(opp.deadline).getTime() - Date.now()) / 86400000)
              : null;

            return (
              <div
                key={app.id}
                className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm transition"
              >
                {/* Card header */}
                <button
                  className="flex w-full items-start gap-3 p-5 text-left hover:bg-navy/2 transition"
                  onClick={() => setExpandedId(isExpanded ? null : app.opportunity_id)}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${STATUS_COLORS[app.status as Status] ?? "bg-navy/5 text-navy"}`}
                      >
                        {STATUS_LABELS[app.status as Status] ?? app.status}
                      </span>
                      {opp?.category && (
                        <span className="rounded-full bg-navy/5 px-2.5 py-0.5 text-[11px] text-navy/60">
                          {opp.category as string}
                        </span>
                      )}
                    </div>
                    <div className="mt-1.5 font-semibold text-navy leading-snug">
                      {opp?.title ?? app.opportunity_id}
                    </div>
                    {opp?.org && <div className="text-xs text-navy/50 mt-0.5">{opp.org}</div>}
                    <div className="mt-2 flex flex-wrap gap-3 text-xs text-navy/60">
                      {opp?.deadline && (
                        <span
                          className={
                            daysLeft !== null && daysLeft <= 7
                              ? "font-semibold text-destructive"
                              : ""
                          }
                        >
                          Deadline: {formatDate(opp.deadline, "en")}
                          {daysLeft !== null && daysLeft >= 0 && ` (${daysLeft}d)`}
                          {daysLeft !== null && daysLeft < 0 && " (past)"}
                        </span>
                      )}
                      {tasks.length > 0 && (
                        <span>
                          {doneTasks}/{tasks.length} tasks done
                        </span>
                      )}
                    </div>
                  </div>
                  <ChevronDown
                    className={`mt-1 h-4 w-4 flex-none text-navy/50 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Expanded section */}
                {isExpanded && (
                  <div className="border-t border-navy/8 bg-ivory/50 px-5 pb-5 pt-4">
                    {/* Status changer */}
                    <div className="mb-4">
                      <label className="text-xs font-semibold uppercase tracking-wider text-navy/50 block mb-2">
                        Status
                      </label>
                      <div className="flex flex-wrap gap-1.5">
                        {ALL_STATUSES.map((s) => (
                          <button
                            key={s}
                            onClick={() =>
                              updateStatus.mutate({ opportunityId: app.opportunity_id, status: s })
                            }
                            className={`rounded-xl px-3 py-1.5 text-xs font-semibold transition ${
                              app.status === s
                                ? "bg-navy text-ivory"
                                : "border border-navy/15 bg-white hover:bg-navy/5"
                            }`}
                          >
                            {STATUS_LABELS[s]}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Tasks */}
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-navy/50 block mb-2">
                        Tasks
                      </label>
                      <div className="space-y-2">
                        {tasks.map((task) => (
                          <div
                            key={task.id}
                            className="flex items-center gap-3 rounded-xl border border-navy/8 bg-white px-3 py-2.5"
                          >
                            <button
                              onClick={() =>
                                toggleTask.mutate({ id: task.id, completed: !task.completed })
                              }
                              className={`flex h-5 w-5 flex-none items-center justify-center rounded-md border text-xs transition ${
                                task.completed
                                  ? "border-growth bg-growth text-ivory"
                                  : "border-navy/30 hover:border-navy"
                              }`}
                            >
                              {task.completed && <Check className="h-3 w-3" />}
                            </button>
                            <span
                              className={`flex-1 text-sm ${task.completed ? "line-through text-navy/40" : "text-navy"}`}
                            >
                              {task.title}
                            </span>
                            {task.due_date && (
                              <span className="text-xs text-navy/50">
                                {formatDate(task.due_date, "en")}
                              </span>
                            )}
                            <button
                              onClick={() => deleteTask.mutate(task.id)}
                              className="text-navy/30 hover:text-destructive transition"
                            >
                              <X className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        ))}
                      </div>

                      {/* Add task */}
                      <div className="mt-2 flex gap-2">
                        <input
                          type="text"
                          placeholder="Add a task… (e.g. Write research essay)"
                          value={newTaskText[app.opportunity_id] ?? ""}
                          onChange={(e) =>
                            setNewTaskText((p) => ({ ...p, [app.opportunity_id]: e.target.value }))
                          }
                          onKeyDown={(e) => e.key === "Enter" && handleAddTask(app)}
                          className="flex-1 min-h-[40px] rounded-xl border border-navy/15 bg-white px-3.5 py-2 text-sm outline-none focus:border-navy focus:ring-1 focus:ring-clay/30"
                        />
                        <button
                          onClick={() => handleAddTask(app)}
                          disabled={addingTask[app.opportunity_id]}
                          className="min-h-[40px] rounded-xl bg-navy px-3.5 py-2 text-sm font-semibold text-ivory disabled:opacity-50 hover:opacity-90"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>

                    {/* Official link */}
                    {opp?.url && (
                      <a
                        href={opp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 block text-xs font-medium text-navy/70 underline hover:text-navy"
                      >
                        Official website ↗
                      </a>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
