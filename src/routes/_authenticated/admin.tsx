import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useSession, useProfile } from "@/lib/supabase-hooks";
import { supabase } from "@/integrations/supabase/client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  moderateOpportunityFn,
  adminVerifyPaymentFn,
  ingestTelegramPostFn,
  triggerAutoExpirationFn,
} from "@/lib/server-functions";

export const Route = createFileRoute("/_authenticated/admin")({ component: AdminPortalPage });

function AdminPortalPage() {
  const qc = useQueryClient();
  const { user } = useSession();
  const { data: profile, isLoading } = useProfile(user);

  const [tab, setTab] = useState<"opportunities" | "payments" | "telegram" | "users">("opportunities");
  const [ingestText, setIngestText] = useState("");
  const [ingestChannel, setIngestChannel] = useState("edu_strategies");
  const [ingestStatus, setIngestStatus] = useState<string | null>(null);
  const [expiring, setExpiring] = useState(false);

  // 1. Fetch opportunities for moderation
  const { data: opps = [], refetch: refetchOpps } = useQuery({
    queryKey: ["admin-opps"],
    enabled: profile?.role === "admin",
    queryFn: async () => {
      const { data } = await (supabase as any)
        .from("opportunities")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(40);
      return data ?? [];
    },
  });

  // 2. Fetch manual payments pending verification
  const { data: payments = [], refetch: refetchPayments } = useQuery({
    queryKey: ["admin-payments"],
    enabled: profile?.role === "admin",
    queryFn: async () => {
      const { data } = await (supabase as any)
        .from("manual_payments")
        .select("*, profiles(name, email)")
        .order("created_at", { ascending: false });
      return data ?? [];
    },
  });

  // 3. Fetch telegram sources
  const { data: sources = [], refetch: refetchSources } = useQuery({
    queryKey: ["admin-sources"],
    enabled: profile?.role === "admin",
    queryFn: async () => {
      const { data } = await (supabase as any).from("telegram_sources").select("*");
      return data ?? [];
    },
  });

  // 4. Fetch users
  const { data: users = [], refetch: refetchUsers } = useQuery({
    queryKey: ["admin-users"],
    enabled: profile?.role === "admin",
    queryFn: async () => {
      const { data } = await (supabase as any).from("profiles").select("*").order("created_at", { ascending: false }).limit(30);
      return data ?? [];
    },
  });

  if (isLoading) {
    return <div className="min-h-screen bg-background"><Navbar /><div className="p-10 text-center">Checking credentials...</div></div>;
  }

  // Server-side enforced: Non-admins cannot access admin operations
  if (profile?.role !== "admin") {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="mx-auto max-w-lg p-10 text-center">
          <div className="text-4xl">🔒</div>
          <h1 className="mt-4 font-display text-2xl text-navy">Admin Access Required</h1>
          <p className="mt-2 text-sm text-navy/60">
            Your account is not authorized as a platform administrator.
          </p>
        </div>
      </div>
    );
  }

  const handleModerateOpp = async (id: string, status: "approved" | "rejected" | "expired") => {
    try {
      await moderateOpportunityFn({ id, status });
      await refetchOpps();
    } catch (err) {
      console.error(err);
    }
  };

  const handleVerifyPayment = async (paymentId: string, decision: "approved" | "rejected") => {
    try {
      await adminVerifyPaymentFn({ paymentId, decision });
      await refetchPayments();
    } catch (err) {
      console.error(err);
    }
  };

  const handleIngestTelegram = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ingestText.trim()) return;
    setIngestStatus("Processing AI extraction & deduplication...");
    try {
      const res = await ingestTelegramPostFn({
        channel_username: ingestChannel,
        message_id: Math.floor(Date.now() / 1000),
        text: ingestText,
      });
      setIngestStatus(`Status: ${res.status}`);
      setIngestText("");
      await refetchOpps();
    } catch (err: any) {
      setIngestStatus(`Error: ${err.message}`);
    }
  };

  const handleTriggerExpiration = async () => {
    setExpiring(true);
    try {
      const res = await triggerAutoExpirationFn();
      alert(`Expired ${res?.expiredCount || 0} opportunities past deadline.`);
      await refetchOpps();
    } catch (err: any) {
      alert("Expiration failed: " + err.message);
    } finally {
      setExpiring(false);
    }
  };

  return (
    <div className="min-h-screen pb-24 md:pb-10 bg-background">
      <Navbar />
      <main className="mx-auto max-w-7xl px-5 py-8 md:px-6 md:py-10">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-navy/10 pb-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-growth">Platform Administration</div>
            <h1 className="mt-1 font-display text-3xl text-navy">MyPath Command Center</h1>
          </div>
          <button
            disabled={expiring}
            onClick={handleTriggerExpiration}
            className="rounded-full border border-navy/15 bg-white px-4 py-2 text-xs font-semibold text-navy hover:bg-navy/5 shadow-sm"
          >
            {expiring ? "Processing..." : "⏰ Trigger Auto-Expiration"}
          </button>
        </div>

        {/* Admin Navigation Tabs */}
        <div className="mt-6 flex flex-wrap gap-2 border-b border-navy/5 pb-2">
          {(
            [
              ["opportunities", `Opportunities (${opps.length})`],
              ["payments", `Manual Subscriptions (${payments.filter((p: any) => p.status === "pending").length} pending)`],
              ["telegram", "Telegram Ingestion"],
              ["users", "User Roles"],
            ] as const
          ).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                tab === key ? "bg-navy text-ivory shadow" : "bg-white text-navy/70 hover:bg-navy/5"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Tab 1: Opportunities Moderation */}
        {tab === "opportunities" && (
          <div className="mt-6 space-y-4">
            <div className="overflow-x-auto rounded-3xl border border-navy/10 bg-white shadow-sm">
              <table className="w-full text-left text-xs">
                <thead className="bg-ivory text-navy/60 uppercase tracking-wider border-b border-navy/10">
                  <tr>
                    <th className="p-4">Title & Org</th>
                    <th className="p-4">Category</th>
                    <th className="p-4">Deadline</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Source</th>
                    <th className="p-4">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-navy/5">
                  {opps.map((o: any) => (
                    <tr key={o.id} className="hover:bg-navy/[0.02]">
                      <td className="p-4 font-medium text-navy max-w-xs">
                        <div className="font-semibold text-sm">{o.title}</div>
                        <div className="text-navy/50">{o.org}</div>
                      </td>
                      <td className="p-4">{o.category}</td>
                      <td className="p-4 font-mono">{o.deadline || "Rolling"}</td>
                      <td className="p-4">
                        <span
                          className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                            o.status === "approved"
                              ? "bg-growth/20 text-growth"
                              : o.status === "pending_review"
                              ? "bg-gold/40 text-navy"
                              : "bg-destructive/10 text-destructive"
                          }`}
                        >
                          {o.status}
                        </span>
                      </td>
                      <td className="p-4 text-navy/60">
                        {o.source_channel ? `@${o.source_channel}` : "Manual"}
                      </td>
                      <td className="p-4 flex gap-1.5">
                        {o.status !== "approved" && (
                          <button
                            onClick={() => handleModerateOpp(o.id, "approved")}
                            className="rounded bg-growth/20 px-2 py-1 text-[10px] font-semibold text-growth hover:bg-growth/30"
                          >
                            Approve
                          </button>
                        )}
                        {o.status !== "rejected" && (
                          <button
                            onClick={() => handleModerateOpp(o.id, "rejected")}
                            className="rounded bg-destructive/10 px-2 py-1 text-[10px] font-semibold text-destructive hover:bg-destructive/20"
                          >
                            Reject
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 2: Manual Subscriptions / Payments */}
        {tab === "payments" && (
          <div className="mt-6 space-y-4">
            <div className="overflow-x-auto rounded-3xl border border-navy/10 bg-white shadow-sm">
              <table className="w-full text-left text-xs">
                <thead className="bg-ivory text-navy/60 uppercase tracking-wider border-b border-navy/10">
                  <tr>
                    <th className="p-4">User</th>
                    <th className="p-4">Amount</th>
                    <th className="p-4">Note / Receipt</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-navy/5">
                  {payments.map((p: any) => (
                    <tr key={p.id}>
                      <td className="p-4">
                        <div className="font-semibold text-navy">{p.profiles?.name || "User"}</div>
                        <div className="text-navy/50">{p.profiles?.email}</div>
                      </td>
                      <td className="p-4 font-mono font-bold text-navy">{p.amount_kzt} ₸</td>
                      <td className="p-4 max-w-sm text-navy/80">{p.receipt_note || "No note"}</td>
                      <td className="p-4">
                        <span
                          className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                            p.status === "approved"
                              ? "bg-growth/20 text-growth"
                              : p.status === "pending"
                              ? "bg-gold/40 text-navy"
                              : "bg-destructive/10 text-destructive"
                          }`}
                        >
                          {p.status}
                        </span>
                      </td>
                      <td className="p-4 flex gap-1.5">
                        {p.status === "pending" && (
                          <>
                            <button
                              onClick={() => handleVerifyPayment(p.id, "approved")}
                              className="rounded bg-growth px-2.5 py-1 text-[10px] font-bold text-ivory hover:opacity-90"
                            >
                              Approve & Unlock Pro
                            </button>
                            <button
                              onClick={() => handleVerifyPayment(p.id, "rejected")}
                              className="rounded bg-destructive/10 px-2 py-1 text-[10px] font-semibold text-destructive hover:bg-destructive/20"
                            >
                              Reject
                            </button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                  {payments.length === 0 && (
                    <tr>
                      <td colSpan={5} className="p-6 text-center text-navy/50 italic">
                        No manual payment submissions.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: Telegram Ingestion Pipeline */}
        {tab === "telegram" && (
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-navy/10 bg-white p-6 shadow-sm">
              <h3 className="font-display text-lg text-navy">Direct Message Ingestion Test</h3>
              <p className="mt-1 text-xs text-navy/60">
                Paste any raw Telegram channel post. The AI pipeline will classify, extract structured schema, deduplicate, and store into the database.
              </p>
              <form onSubmit={handleIngestTelegram} className="mt-4 space-y-3">
                <select
                  value={ingestChannel}
                  onChange={(e) => setIngestChannel(e.target.value)}
                  className="w-full rounded-xl border border-navy/15 bg-white p-2.5 text-xs outline-none focus:border-navy"
                >
                  <option value="edu_strategies">@edu_strategies</option>
                  <option value="deeppurplehub">@deeppurplehub</option>
                  <option value="asselibadulla">@asselibadulla</option>
                </select>
                <textarea
                  value={ingestText}
                  onChange={(e) => setIngestText(e.target.value)}
                  rows={6}
                  placeholder="Paste Telegram post text here..."
                  className="w-full rounded-xl border border-navy/15 bg-white p-3 text-xs outline-none focus:border-navy font-mono"
                />
                <button
                  type="submit"
                  disabled={!ingestText.trim()}
                  className="rounded-full bg-navy px-5 py-2 text-xs font-semibold text-ivory hover:bg-navy/90 disabled:opacity-50"
                >
                  Ingest & Process
                </button>
                {ingestStatus && <p className="mt-2 text-xs font-semibold text-growth">{ingestStatus}</p>}
              </form>
            </div>

            <div className="rounded-3xl border border-navy/10 bg-white p-6 shadow-sm">
              <h3 className="font-display text-lg text-navy">Approved Channels</h3>
              <p className="mt-1 text-xs text-navy/60">
                Telegram channels monitored by background workers & webhook integrations.
              </p>
              <div className="mt-4 space-y-2">
                {sources.map((s: any) => (
                  <div key={s.id} className="flex items-center justify-between rounded-2xl bg-ivory p-3 text-xs">
                    <div>
                      <span className="font-semibold text-navy">@{s.channel_username}</span>
                      <div className="text-navy/50">{s.title || "Monitored channel"}</div>
                    </div>
                    <span className="rounded-full bg-growth/20 px-2 py-0.5 text-[10px] font-bold text-growth">
                      Active
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: User Roles */}
        {tab === "users" && (
          <div className="mt-6 overflow-x-auto rounded-3xl border border-navy/10 bg-white shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-ivory text-navy/60 uppercase tracking-wider border-b border-navy/10">
                <tr>
                  <th className="p-4">Name & Email</th>
                  <th className="p-4">Role</th>
                  <th className="p-4">Country / City</th>
                  <th className="p-4">Change Role</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy/5">
                {users.map((u: any) => (
                  <tr key={u.id}>
                    <td className="p-4 font-semibold text-navy">
                      <div>{u.name || "Unnamed"}</div>
                      <div className="text-navy/50 font-normal">{u.email}</div>
                    </td>
                    <td className="p-4">
                      <span className="rounded-full bg-navy/5 px-2.5 py-0.5 text-[11px] font-bold text-navy">
                        {u.role || "student"}
                      </span>
                    </td>
                    <td className="p-4 text-navy/60">{u.country || "—"} {u.city ? `· ${u.city}` : ""}</td>
                    <td className="p-4 flex gap-1">
                      {(["student", "parent", "admin"] as const).map((r) => (
                        <button
                          key={r}
                          disabled={u.role === r}
                          onClick={async () => {
                            await (supabase as any).from("profiles").update({ role: r }).eq("id", u.id);
                            refetchUsers();
                          }}
                          className={`rounded px-2 py-1 text-[10px] font-semibold ${
                            u.role === r ? "bg-navy text-ivory opacity-60" : "border border-navy/10 hover:bg-navy/5"
                          }`}
                        >
                          {r}
                        </button>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
