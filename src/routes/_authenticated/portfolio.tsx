import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  useSession,
  usePortfolio,
  useAddPortfolioItem,
  useUpdatePortfolioItem,
  useDeletePortfolioItem,
} from "@/lib/supabase-hooks";
import { exportPortfolioPDF } from "@/lib/pdf-export";
import { Plus, X, Check } from "lucide-react";

export const Route = createFileRoute("/_authenticated/portfolio")({
  component: PortfolioPage,
  head: () => ({
    meta: [
      { title: "MyPath — Portfolio" },
      {
        name: "description",
        content:
          "Build and export your student portfolio. Add achievements, projects, research, leadership, volunteering, certificates, skills, and awards.",
      },
    ],
  }),
});

// Map of section keys to user‑friendly titles (matches i18n dict)
const SECTION_LABELS: Record<string, string> = {
  achievements: "Achievements",
  projects: "Projects",
  research: "Research",
  leadership: "Leadership",
  volunteering: "Volunteering",
  certificates: "Certificates",
  skills: "Skills",
  awards: "Awards",
  about: "About",
  story: "Story",
};

function PortfolioPage() {
  const { user } = useSession();
  const { data: profile } = usePortfolio(user); // using same hook (returns portfolio rows)
  const add = useAddPortfolioItem(user?.id);
  const update = useUpdatePortfolioItem(user?.id);
  const del = useDeletePortfolioItem(user?.id);

  const [editing, setEditing] = useState<string | null>(null); // id of item being edited
  const [newSection, setNewSection] = useState<string>("projects");
  const [newItem, setNewItem] = useState({
    title: "",
    organization: "",
    date: "",
    description: "",
    link: "",
  });
  const [exporting, setExporting] = useState(false);

  const items = (profile ?? []).filter((i) => i.section !== "about" && i.section !== "story");
  const sections = Object.entries(
    items.reduce(
      (acc, cur) => {
        (acc[cur.section] = acc[cur.section] || []).push(cur);
        return acc;
      },
      {} as Record<string, typeof items>,
    ),
  ).sort((a, b) => a[0].localeCompare(b[0]));

  const handleExport = async () => {
    setExporting(true);
    // Mock profile data for PDF (you can fetch real profile if needed)
    const profileData = {
      name: user?.email?.split("@")[0] ?? "Student",
      grade: null,
      country: null,
      school: null,
      city: null,
      mini_bio: null,
    };
    exportPortfolioPDF(profileData, profile ?? []);
    setExporting(false);
  };

  const startAdd = (section: string) => {
    setNewSection(section);
    setNewItem({ title: "", organization: "", date: "", description: "", link: "" });
    setEditing("new");
  };

  const startEdit = (itemId: string, item: any) => {
    setEditing(itemId);
    setNewItem({
      title: item.title ?? "",
      organization: item.organization ?? "",
      date: item.date ?? "",
      description: item.description ?? "",
      link: item.link ?? "",
    });
    setNewSection(item.section);
  };

  const saveItem = async () => {
    if (editing === "new") {
      await add.mutateAsync({
        ...newItem,
        section: newSection,
      });
    } else if (editing) {
      await update.mutateAsync({ id: editing, ...newItem, section: newSection });
    }
    setEditing(null);
  };

  return (
    <div className="min-h-screen pb-24 md:pb-0">
      <Navbar />
      <main className="mx-auto max-w-5xl px-5 py-8 md:px-6 md:py-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-navy/50">
              Portfolio
            </div>
            <h1 className="mt-1 font-display text-3xl md:text-4xl">Your Portfolio</h1>
            <p className="mt-1.5 text-sm text-navy/60">
              Document achievements, projects, research, leadership, volunteering, certificates,
              skills, and awards. Export a clean PDF at any time.
            </p>
          </div>
          <button
            onClick={handleExport}
            disabled={exporting}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-clay-deep px-5 py-2.5 text-sm font-semibold text-ivory hover:opacity-90 disabled:opacity-60"
          >
            {exporting ? "Preparing PDF…" : "Export PDF"}
          </button>
        </div>

        {/* Sections grid */}
        <div className="mt-8 space-y-8">
          {sections.map(([sectionKey, itemsInSection]) => (
            <section key={sectionKey} className="rounded-2xl border border-navy/10 bg-white p-5">
              <div className="flex items-center justify-between">
                <h2 className="font-display text-xl">{SECTION_LABELS[sectionKey] ?? sectionKey}</h2>
                <button
                  onClick={() => startAdd(sectionKey)}
                  className="inline-flex items-center gap-1 rounded-full bg-navy/5 px-2.5 py-1 text-xs font-medium text-navy hover:bg-navy/10"
                >
                  <Plus className="h-3 w-3" /> Add
                </button>
              </div>
              {itemsInSection.length === 0 ? (
                <p className="mt-4 text-sm text-navy/50">No items yet. Click ‘Add’ to start.</p>
              ) : (
                <ul className="mt-4 space-y-3">
                  {itemsInSection.map((it) => (
                    <li
                      key={it.id}
                      className="flex items-start justify-between gap-4 rounded-xl border border-navy/8 bg-ivory/30 p-3"
                    >
                      <div className="flex-1">
                        <div className="font-semibold text-navy">{it.title}</div>
                        {it.organization && (
                          <div className="text-xs text-navy/60">{it.organization}</div>
                        )}
                        {it.date && <div className="mt-1 text-xs text-navy/50">{it.date}</div>}
                        {it.description && (
                          <p className="mt-1 text-xs text-navy/70 whitespace-pre-line">
                            {it.description}
                          </p>
                        )}
                        {it.link && (
                          <a
                            href={it.link}
                            target="_blank"
                            rel="noopener"
                            className="mt-1 inline-block text-xs underline text-navy/70 hover:text-navy"
                          >
                            View link ↗
                          </a>
                        )}
                      </div>
                      <div className="flex shrink-0 flex-col gap-1">
                        <button
                          onClick={() => startEdit(it.id, it)}
                          className="p-1 text-navy/60 hover:text-navy"
                        >
                          <Check className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => del.mutate(it.id)}
                          className="p-1 text-destructive/70 hover:text-destructive"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* Modal for add/edit */}
        {editing && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
            <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-lg">
              <h3 className="font-display text-xl">
                {editing === "new" ? "Add" : "Edit"} {SECTION_LABELS[newSection] ?? newSection}
              </h3>
              <div className="mt-4 space-y-3">
                <input
                  placeholder="Title"
                  value={newItem.title}
                  onChange={(e) => setNewItem((p) => ({ ...p, title: e.target.value }))}
                  className="w-full rounded-xl border border-navy/15 px-3 py-2 text-sm"
                />
                <input
                  placeholder="Organization (optional)"
                  value={newItem.organization}
                  onChange={(e) => setNewItem((p) => ({ ...p, organization: e.target.value }))}
                  className="w-full rounded-xl border border-navy/15 px-3 py-2 text-sm"
                />
                <input
                  placeholder="Date (e.g. 2024)"
                  value={newItem.date}
                  onChange={(e) => setNewItem((p) => ({ ...p, date: e.target.value }))}
                  className="w-full rounded-xl border border-navy/15 px-3 py-2 text-sm"
                />
                <textarea
                  placeholder="Description"
                  rows={3}
                  value={newItem.description}
                  onChange={(e) => setNewItem((p) => ({ ...p, description: e.target.value }))}
                  className="w-full rounded-xl border border-navy/15 px-3 py-2 text-sm"
                />
                <input
                  placeholder="Link (optional)"
                  value={newItem.link}
                  onChange={(e) => setNewItem((p) => ({ ...p, link: e.target.value }))}
                  className="w-full rounded-xl border border-navy/15 px-3 py-2 text-sm"
                />
              </div>
              <div className="mt-6 flex justify-end gap-3">
                <button
                  onClick={() => setEditing(null)}
                  className="rounded-xl border border-navy/15 px-4 py-2 text-sm font-medium hover:bg-navy/5"
                >
                  Cancel
                </button>
                <button
                  onClick={saveItem}
                  className="rounded-xl bg-clay-deep px-4 py-2 text-sm font-semibold text-ivory hover:opacity-90"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
