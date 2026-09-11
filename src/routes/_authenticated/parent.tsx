import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useSession, useProfile, useParentStudentLinks } from "@/lib/supabase-hooks";
import { useI18n } from "@/lib/i18n";
import { linkStudentFn } from "@/lib/server-functions";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";

export const Route = createFileRoute("/_authenticated/parent")({ component: ParentPortalPage });

function ParentPortalPage() {
  const { user } = useSession();
  const { data: profile } = useProfile(user);
  const { data: links, refetch: refetchLinks } = useParentStudentLinks(user?.id);
  const { dict, lang } = useI18n();

  const [inviteCode, setInviteCode] = useState("");
  const [linking, setLinking] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [selectedStudentId, setSelectedStudentId] = useState<string | null>(null);

  // Link student with invite code
  const handleLinkStudent = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inviteCode.trim() || linking) return;
    setLinking(true);
    setErrorMsg(null);
    try {
      const res = await linkStudentFn({ inviteCode: inviteCode.trim() });
      if (res?.success) {
        setInviteCode("");
        await refetchLinks();
      } else {
        setErrorMsg(res?.error || "Invalid invite code");
      }
    } catch (err: any) {
      setErrorMsg(err.message || "Failed to link student");
    } finally {
      setLinking(false);
    }
  };

  const approvedLinks = (links || []).filter((l: any) => l.status === "approved" && l.student_id);
  const activeStudentId = selectedStudentId || approvedLinks[0]?.student_id;

  // Query linked student's high-level progress (RLS enforces privacy: no chat messages)
  const { data: studentProfile } = useQuery({
    queryKey: ["student-profile", activeStudentId],
    enabled: !!activeStudentId,
    queryFn: async () => {
      const { data } = await supabase.from("profiles").select("*").eq("id", activeStudentId).maybeSingle();
      return data;
    },
  });

  const { data: studentAction } = useQuery({
    queryKey: ["student-action", activeStudentId],
    enabled: !!activeStudentId,
    queryFn: async () => {
      const { data } = await (supabase as any)
        .from("my_path_actions")
        .select("*")
        .eq("user_id", activeStudentId)
        .eq("status", "active")
        .maybeSingle();
      return data;
    },
  });

  const { data: studentHypotheses } = useQuery({
    queryKey: ["student-hypotheses", activeStudentId],
    enabled: !!activeStudentId,
    queryFn: async () => {
      const { data } = await (supabase as any)
        .from("career_hypotheses")
        .select("*")
        .eq("user_id", activeStudentId)
        .eq("status", "active");
      return data ?? [];
    },
  });

  const { data: studentPortfolio } = useQuery({
    queryKey: ["student-portfolio", activeStudentId],
    enabled: !!activeStudentId,
    queryFn: async () => {
      const { data } = await supabase.from("portfolio_items").select("*").eq("user_id", activeStudentId);
      return data ?? [];
    },
  });

  return (
    <div className="min-h-screen pb-24 md:pb-0 bg-background">
      <Navbar />
      <main className="mx-auto max-w-6xl px-5 py-8 md:px-6 md:py-10">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-navy/50">
              {lang === "ru" ? "Родительский портал" : lang === "kk" ? "Ата-ана порталы" : "Parent Portal"}
            </div>
            <h1 className="mt-1 font-display text-3xl md:text-5xl text-navy">
              {lang === "ru" ? "Развитие и ориентиры ребенка" : lang === "kk" ? "Балаңыздың даму бағыты" : "Student Growth & Direction"}
            </h1>
            <p className="mt-2 text-sm text-navy/60 max-w-2xl">
              {lang === "ru"
                ? "Поддерживайте траекторию развития ребенка. Высокоуровневые цели, вехи портфолио и направления видны здесь. Личные диалоги с AI Ментором остаются строго конфиденциальными."
                : lang === "kk"
                ? "Балаңыздың даму траекториясын бақылаңыз. Мақсаттар мен портфолио жетістіктері осында көрінеді. AI Тәлімгермен жеке диалогтар құпия сақталады."
                : "Support your student's trajectory. High-level milestones, working hypotheses, and portfolio growth are visible here. Private AI mentor dialogues remain strictly confidential."}
            </p>
          </div>
        </div>

        {/* Link Student by Code Form */}
        <div className="mt-8 rounded-3xl border border-navy/10 bg-white p-6 shadow-sm">
          <h2 className="font-display text-xl text-navy">
            {lang === "ru" ? "Привязать аккаунт ребенка" : lang === "kk" ? "Баланың аккаунтын қосу" : "Link a Student Account"}
          </h2>
          <p className="mt-1 text-xs text-navy/60">
            {lang === "ru"
              ? "Попросите ребенка нажать «Создать код» в своем профиле MyPath и введите его сюда (например: MP-A1B2C3)."
              : "Ask your student to click 'Generate Invite Code' in their MyPath Profile and paste it below."}
          </p>
          <form onSubmit={handleLinkStudent} className="mt-4 flex flex-wrap gap-2 max-w-md">
            <input
              value={inviteCode}
              onChange={(e) => setInviteCode(e.target.value.toUpperCase())}
              placeholder="MP-XXXXXX"
              className="min-h-[44px] flex-1 rounded-xl border border-navy/20 bg-white px-4 py-2 text-sm font-mono uppercase tracking-wider outline-none focus:border-navy"
            />
            <button
              type="submit"
              disabled={linking || !inviteCode.trim()}
              className="rounded-xl bg-navy px-5 py-2 text-sm font-semibold text-ivory hover:bg-navy/90 disabled:opacity-50"
            >
              {linking ? "Linking..." : lang === "ru" ? "Привязать" : "Link Student"}
            </button>
          </form>
          {errorMsg && <p className="mt-2 text-xs text-destructive">{errorMsg}</p>}
        </div>

        {/* Linked Student High-Level Overview */}
        {approvedLinks.length > 0 && activeStudentId && (
          <div className="mt-8 space-y-6">
            {/* Multi-student selector if parent has >1 linked students */}
            {approvedLinks.length > 1 && (
              <div className="flex gap-2">
                {approvedLinks.map((l: any, idx: number) => (
                  <button
                    key={l.id}
                    onClick={() => setSelectedStudentId(l.student_id)}
                    className={`rounded-full px-4 py-1.5 text-xs font-semibold ${
                      activeStudentId === l.student_id ? "bg-navy text-ivory" : "bg-white border border-navy/10 text-navy"
                    }`}
                  >
                    Student #{idx + 1}
                  </button>
                ))}
              </div>
            )}

            <div className="grid gap-6 md:grid-cols-3">
              {/* Student Profile Card */}
              <div className="rounded-3xl border border-navy/10 bg-white p-6">
                <div className="text-xs uppercase tracking-wider text-navy/50 font-semibold">Student Profile</div>
                <h3 className="mt-2 font-display text-2xl text-navy">{studentProfile?.name || "Student"}</h3>
                <div className="mt-1 text-xs text-navy/60">
                  {studentProfile?.country} {studentProfile?.city ? `· ${studentProfile.city}` : ""} · Grade {studentProfile?.grade || "—"}
                </div>
                {studentProfile?.mini_bio && (
                  <div className="mt-4 rounded-xl bg-ivory p-3 text-xs italic text-navy/80">
                    "{studentProfile.mini_bio}"
                  </div>
                )}
                <div className="mt-4 border-t border-navy/5 pt-3">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-growth">
                    ✓ Minor Privacy Protected
                  </div>
                  <p className="mt-1 text-[11px] text-navy/60">
                    Private AI chats & personal reflections are protected by design.
                  </p>
                </div>
              </div>

              {/* Leading Direction Hypotheses */}
              <div className="rounded-3xl border border-navy/10 bg-gradient-to-br from-navy to-[#1d3a72] p-6 text-ivory md:col-span-2">
                <div className="text-xs uppercase tracking-wider text-ivory/60 font-semibold">
                  Working Direction Hypotheses
                </div>
                {studentHypotheses && studentHypotheses.length > 0 ? (
                  <div className="mt-3 space-y-3">
                    {studentHypotheses.slice(0, 2).map((h: any, i: number) => (
                      <div key={h.id || i} className="rounded-2xl bg-white/10 p-4">
                        <div className="font-display text-lg text-gold">{h.direction_name}</div>
                        <p className="mt-1 text-xs text-ivory/80 leading-relaxed">{h.why_it_appeared}</p>
                        {h.next_experiment && (
                          <div className="mt-2 text-xs text-ivory/90">
                            <b>Current Experiment:</b> {h.next_experiment}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="mt-4 text-sm text-ivory/70">
                    Student has not yet completed the Adaptive Discovery interview.
                  </p>
                )}
              </div>
            </div>

            {/* Current Primary Next Action */}
            <div className="rounded-3xl border border-navy/10 bg-white p-6 shadow-sm">
              <div className="text-xs uppercase tracking-wider text-navy/50 font-semibold">
                Current Primary Next Action (My Path Engine)
              </div>
              {studentAction ? (
                <div className="mt-3">
                  <div className="font-display text-xl text-navy">{studentAction.action}</div>
                  <p className="mt-1 text-xs text-navy/70 leading-relaxed">{studentAction.why_it_matters}</p>
                  <div className="mt-2 text-xs text-growth font-medium">
                    Expected outcome: {studentAction.expected_outcome}
                  </div>
                </div>
              ) : (
                <p className="mt-2 text-xs text-navy/60">No pending action.</p>
              )}
            </div>

            {/* Portfolio Highlights */}
            <div className="rounded-3xl border border-navy/10 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="text-xs uppercase tracking-wider text-navy/50 font-semibold">
                  Portfolio Achievements ({studentPortfolio?.length || 0} items)
                </div>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                {(studentPortfolio || []).map((item: any) => (
                  <div key={item.id} className="rounded-2xl bg-ivory p-4">
                    <span className="text-[10px] uppercase tracking-wider text-navy/50 font-semibold">{item.section}</span>
                    <div className="font-semibold text-navy mt-1 text-sm">{item.title}</div>
                    {item.description && <p className="mt-1 text-xs text-navy/70 line-clamp-2">{item.description}</p>}
                  </div>
                ))}
                {(studentPortfolio || []).length === 0 && (
                  <div className="text-xs text-navy/50 italic col-span-full">
                    Student has not added portfolio evidence yet.
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
