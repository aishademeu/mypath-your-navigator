import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useSession, useProfile, useOnboarding, useChat, useAddChat } from "@/lib/supabase-hooks";

export const Route = createFileRoute("/_authenticated/mentor")({ component: MentorPage });

const PROMPTS = [
  "Help me find my direction",
  "Analyze my profile",
  "What should I do next?",
  "Recommend a summer plan",
];

function MentorPage() {
  const { user } = useSession();
  const { data: profile } = useProfile(user);
  const { data: onboarding } = useOnboarding(user);
  const { data: chat } = useChat(user);
  const addChat = useAddChat(user?.id);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [chat?.length, thinking]);

  const firstName = (profile?.name ?? "friend").split(" ")[0];

  const send = async (text: string) => {
    if (!text.trim()) return;
    setInput("");
    await addChat.mutateAsync({ role: "user", content: text });
    setThinking(true);
    setTimeout(async () => {
      const reply = mentorReply(text, {
        name: firstName,
        interests: onboarding?.interests ?? [],
        strengths: onboarding?.strengths ?? [],
        goals: onboarding?.goals ?? [],
        dream: onboarding?.dream ?? "",
      });
      await addChat.mutateAsync({ role: "assistant", content: reply });
      setThinking(false);
    }, 900 + Math.random() * 700);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-5xl px-6 py-10">
        <div className="relative overflow-hidden rounded-[2rem] border border-navy/10 bg-gradient-to-br from-navy via-[#1a2e5c] to-[#22417a] p-8 text-ivory">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-lavender/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
          <div className="relative flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-lavender to-gold text-2xl">✦</div>
            <div>
              <div className="text-xs uppercase tracking-widest text-ivory/60">MyPath AI Mentor</div>
              <h1 className="mt-1 font-display text-3xl md:text-4xl">Your personal guide for building your future.</h1>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-navy/10 bg-white">
          <div className="max-h-[52vh] min-h-[42vh] overflow-y-auto p-6">
            {(chat?.length ?? 0) === 0 && (
              <div className="mx-auto max-w-lg py-10 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-ivory">✦</div>
                <p className="mt-4 font-display text-2xl text-balance">Hi {firstName} — where should we start today?</p>
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {PROMPTS.map((p) => (
                    <button key={p} onClick={() => send(p)} className="rounded-full border border-navy/15 bg-ivory px-4 py-2 text-sm hover:border-navy/40">{p}</button>
                  ))}
                </div>
              </div>
            )}
            {(chat ?? []).map((m) => (
              <div key={m.id} className={`mb-4 flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] rounded-3xl px-5 py-3 text-sm ${m.role === "user" ? "bg-navy text-ivory" : "bg-ivory text-navy"}`}>
                  {m.content.split("\n").map((line, i) => <p key={i} className={i > 0 ? "mt-2" : ""}>{line}</p>)}
                </div>
              </div>
            ))}
            {thinking && (
              <div className="mb-4 flex justify-start">
                <div className="rounded-3xl bg-ivory px-5 py-3 text-sm">
                  <span className="inline-flex gap-1">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-navy/40" style={{ animationDelay: "0ms" }} />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-navy/40" style={{ animationDelay: "150ms" }} />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-navy/40" style={{ animationDelay: "300ms" }} />
                  </span>
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>
          <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="flex gap-2 border-t border-navy/10 p-4">
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask your mentor anything…" className="flex-1 rounded-full border border-navy/15 bg-white px-5 py-3 text-sm outline-none focus:border-navy" />
            <button className="rounded-full bg-navy px-6 py-3 text-sm font-semibold text-ivory">Send</button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function mentorReply(q: string, p: { name: string; interests: string[]; strengths: string[]; goals: string[]; dream: string }): string {
  const low = q.toLowerCase();
  const ints = p.interests;
  if (low.includes("direction")) {
    return `Here's what I see, ${p.name}:\n\nYour center of gravity looks like ${ints[0] ?? "curiosity"} × ${ints[1] ?? "impact"}. That combination is unusually strong for your age.\n\nA good working direction: build one visible artifact this month (a project, essay, or event) that fuses those two. Direction is discovered through motion, not thought.`;
  }
  if (low.includes("analyze") || low.includes("profile")) {
    return `Profile snapshot:\n• Interests: ${ints.join(", ") || "not set yet"}\n• Strengths: ${p.strengths.join(", ") || "still forming"}\n• Goals: ${p.goals.join(", ") || "let's define these"}\n\nOne insight: your strongest asset right now is initiative. Most students your age wait; you don't have to. Ship something small this week.`;
  }
  if (low.includes("next") || low.includes("do")) {
    return `Your next 3 steps:\n1. Pick one opportunity from your dashboard and draft the application this weekend.\n2. Add a project to your portfolio — even a small one counts.\n3. Message one adult you admire and ask a specific question. Small, brave, real.`;
  }
  if (low.includes("summer")) {
    return `A meaningful summer for you:\n• Weeks 1–3: run a personal project tied to ${ints[0] ?? "your top interest"}.\n• Weeks 4–6: apply to a competition or research program.\n• Weeks 7–8: build a public portfolio page and reach out to a mentor.\n\nWant me to draft week 1 in detail?`;
  }
  return `That's a good question, ${p.name}. Given your interests (${ints.slice(0,2).join(", ") || "still forming"}), the honest answer is: get closer to it by doing. What's one small action you could take in the next 48 hours?`;
}
