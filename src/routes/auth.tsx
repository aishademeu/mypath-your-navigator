import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Logo } from "@/components/Logo";
import { supabase } from "@/integrations/supabase/client";

type Search = { mode?: "signup" | "login" };

export const Route = createFileRoute("/auth")({
  component: AuthPage,
  validateSearch: (s: Record<string, unknown>): Search => ({
    mode: s.mode === "signup" ? "signup" : "login",
  }),
});

const signupSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Invalid email").max(255),
  password: z.string().min(6, "At least 6 characters").max(100),
  age: z.coerce.number().int().min(13, "MyPath is for ages 13+").max(18, "MyPath is for ages 13–18"),
  country: z.string().trim().min(2, "Please add your country").max(80),
  grade: z.string().trim().min(1).max(20),
});

const loginSchema = z.object({
  email: z.string().trim().email("Invalid email"),
  password: z.string().min(6, "At least 6 characters"),
});

function AuthPage() {
  const { mode } = Route.useSearch();
  const isSignup = mode === "signup";
  const navigate = useNavigate();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [busy, setBusy] = useState(false);
  const [banner, setBanner] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setErrors({});
    setBanner(null);
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd);

    try {
      if (isSignup) {
        const r = signupSchema.safeParse(data);
        if (!r.success) {
          const errs: Record<string, string> = {};
          r.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
          setErrors(errs);
          return;
        }
        const { error, data: authData } = await supabase.auth.signUp({
          email: r.data.email,
          password: r.data.password,
          options: {
            emailRedirectTo: `${window.location.origin}/dashboard`,
            data: { name: r.data.name },
          },
        });
        if (error) throw error;
        // Fill profile columns
        if (authData.user) {
          await supabase.from("profiles").update({
            name: r.data.name,
            age: r.data.age,
            country: r.data.country,
            grade: r.data.grade,
            email: r.data.email,
          }).eq("id", authData.user.id);
        }
        if (!authData.session) {
          setBanner("Check your email to confirm your account, then log in.");
          return;
        }
        navigate({ to: "/onboarding" });
      } else {
        const r = loginSchema.safeParse(data);
        if (!r.success) {
          const errs: Record<string, string> = {};
          r.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
          setErrors(errs);
          return;
        }
        const { error } = await supabase.auth.signInWithPassword({ email: r.data.email, password: r.data.password });
        if (error) throw error;
        navigate({ to: "/dashboard" });
      }
    } catch (err: unknown) {
      setBanner(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="min-h-screen gradient-hero">
      <div className="mx-auto flex min-h-screen max-w-6xl items-center px-6 py-10">
        <div className="grid w-full gap-10 md:grid-cols-2">
          <div className="hidden md:block">
            <Link to="/"><Logo className="h-10 w-auto" /></Link>
            <h1 className="mt-10 font-display text-5xl leading-tight text-balance">
              {isSignup ? "Start the journey that becomes your story." : "Welcome back to your path."}
            </h1>
            <p className="mt-6 max-w-md text-navy/70">
              MyPath is your compass through opportunities, growth, and self-discovery — built for ambitious students 13–18.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-navy/70">
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-gold" /> 50+ curated scholarships & programs</li>
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-lavender" /> AI-guided self-discovery</li>
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-growth" /> Portfolio universities remember</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-navy/10 bg-white/85 p-8 shadow-2xl shadow-navy/10 backdrop-blur md:p-10">
            <div className="md:hidden mb-6"><Link to="/"><Logo className="h-9 w-auto" /></Link></div>
            <h2 className="font-display text-3xl">{isSignup ? "Create your account" : "Log in"}</h2>
            <p className="mt-1 text-sm text-navy/60">
              {isSignup ? (
                <>Already on MyPath? <Link to="/auth" search={{ mode: "login" }} className="font-medium text-navy underline">Log in</Link></>
              ) : (
                <>New here? <Link to="/auth" search={{ mode: "signup" }} className="font-medium text-navy underline">Create an account</Link></>
              )}
            </p>

            {banner && <div className="mt-4 rounded-xl bg-lavender/20 px-4 py-2 text-sm text-navy">{banner}</div>}

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              {isSignup && <Field name="name" label="Full name" placeholder="Ada Lovelace" error={errors.name} />}
              <Field name="email" label="Email" type="email" placeholder="you@school.com" error={errors.email} />
              <Field name="password" label="Password" type="password" placeholder="At least 6 characters" error={errors.password} />
              {isSignup && (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <Field name="age" label="Age" type="number" placeholder="15" error={errors.age} />
                    <Field name="grade" label="Grade" placeholder="10" error={errors.grade} />
                  </div>
                  <Field name="country" label="Country" placeholder="United Kingdom" error={errors.country} />
                </>
              )}
              <button disabled={busy} className="mt-2 w-full rounded-full bg-navy py-3.5 text-sm font-semibold text-ivory hover:opacity-90 disabled:opacity-60">
                {busy ? "Working…" : isSignup ? "Create my account →" : "Log in →"}
              </button>
              {isSignup && <p className="text-center text-xs text-navy/50">By continuing you agree to MyPath's Terms and Privacy Policy.</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ name, label, error, type = "text", placeholder }: { name: string; label: string; error?: string; type?: string; placeholder?: string }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wider text-navy/60">{label}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className={`mt-1.5 w-full rounded-2xl border bg-white px-4 py-3 text-sm outline-none transition focus:border-navy focus:ring-2 focus:ring-lavender/40 ${error ? "border-destructive" : "border-navy/15"}`}
      />
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
