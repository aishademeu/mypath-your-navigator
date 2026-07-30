import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Logo } from "@/components/Logo";
import { supabase } from "@/integrations/supabase/client";
import { useI18n } from "@/lib/i18n";

type Search = { mode?: "signup" | "login" };

export const Route = createFileRoute("/auth")({
  component: AuthPage,
  validateSearch: (s: Record<string, unknown>): Search => ({
    mode: s.mode === "signup" ? "signup" : "login",
  }),
  head: () => ({
    meta: [
      { title: "MyPath — Sign in / Create account" },
      { name: "description", content: "Join MyPath and start building the future you believe in." },
      { property: "og:title", content: "MyPath — Sign in" },
      { property: "og:description", content: "Sign in or create a MyPath account." },
    ],
  }),
});

function AuthPage() {
  const { mode } = Route.useSearch();
  const isSignup = mode === "signup";
  const navigate = useNavigate();
  const { dict } = useI18n();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [busy, setBusy] = useState(false);
  const [banner, setBanner] = useState<string | null>(null);

  const signupSchema = z.object({
    name: z.string().trim().min(2, dict.auth.errName).max(80),
    email: z.string().trim().email(dict.auth.errEmail).max(255),
    password: z.string().min(6, dict.auth.errPassword).max(100),
    age: z.coerce.number().int().min(13, dict.auth.errAgeMin).max(18, dict.auth.errAgeMax),
    country: z.string().trim().min(2, dict.auth.errCountry).max(80),
    grade: z.string().trim().min(1).max(20),
  });
  const loginSchema = z.object({
    email: z.string().trim().email(dict.auth.errEmail),
    password: z.string().min(6, dict.auth.errPassword),
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true); setErrors({}); setBanner(null);
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
          options: { emailRedirectTo: `${window.location.origin}/dashboard`, data: { name: r.data.name } },
        });
        if (error) throw error;
        if (authData.user) {
          await supabase.from("profiles").update({
            name: r.data.name, age: r.data.age, country: r.data.country,
            grade: r.data.grade, email: r.data.email,
          }).eq("id", authData.user.id);
        }
        if (!authData.session) {
          // Fallback: auto-confirm is on, but sign in explicitly if no session came back.
          const { error: signInErr } = await supabase.auth.signInWithPassword({
            email: r.data.email,
            password: r.data.password,
          });
          if (signInErr) throw signInErr;
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
      setBanner(err instanceof Error ? err.message : dict.auth.somethingWrong);
    } finally { setBusy(false); }
  }

  return (
    <div className="gradient-hero min-h-screen pb-24 md:pb-0">
      <div className="mx-auto flex min-h-screen max-w-6xl items-center px-5 py-8 md:px-6 md:py-10">
        <div className="grid w-full gap-8 md:grid-cols-2 md:gap-10">
          <div className="hidden md:block">
            <Link to="/"><Logo className="h-10 w-auto" /></Link>
            <h1 className="mt-10 font-display text-5xl leading-tight text-balance">
              {isSignup ? dict.auth.heroSignup : dict.auth.heroLogin}
            </h1>
            <p className="mt-6 max-w-md text-navy/70">{dict.auth.heroSub}</p>
            <ul className="mt-8 space-y-3 text-sm text-navy/70">
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-gold" /> {dict.landing.bullet1}</li>
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-lavender" /> {dict.landing.bullet2}</li>
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-growth" /> {dict.landing.bullet3}</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-navy/10 bg-white/85 p-6 shadow-2xl shadow-navy/10 backdrop-blur sm:p-8 md:p-10">
            <div className="mb-6 md:hidden"><Link to="/"><Logo className="h-9 w-auto" /></Link></div>
            <h2 className="font-display text-3xl">{isSignup ? dict.auth.signupTitle : dict.auth.loginTitle}</h2>
            <p className="mt-1 text-sm text-navy/60">
              {isSignup ? (
                <>{dict.auth.haveAccount} <Link to="/auth" search={{ mode: "login" }} className="font-medium text-navy underline">{dict.nav.login}</Link></>
              ) : (
                <>{dict.auth.newHere} <Link to="/auth" search={{ mode: "signup" }} className="font-medium text-navy underline">{dict.auth.createAccount}</Link></>
              )}
            </p>
            {banner && <div className="mt-4 rounded-xl bg-lavender/20 px-4 py-2 text-sm text-navy">{banner}</div>}

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              {isSignup && <Field name="name" label={dict.auth.fullName} error={errors.name} />}
              <Field name="email" label={dict.auth.email} type="email" error={errors.email} />
              <Field name="password" label={dict.auth.password} type="password" error={errors.password} />
              {isSignup && (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <Field name="age" label={dict.auth.age} type="number" error={errors.age} />
                    <Field name="grade" label={dict.auth.grade} error={errors.grade} />
                  </div>
                  <Field name="country" label={dict.auth.country} error={errors.country} />
                </>
              )}
              <button disabled={busy} className="mt-2 w-full rounded-full bg-navy py-3.5 text-sm font-semibold text-ivory hover:opacity-90 disabled:opacity-60">
                {busy ? dict.common.working : isSignup ? dict.auth.submitSignup : dict.auth.submitLogin}
              </button>
              {isSignup && <p className="text-center text-xs text-navy/50">{dict.auth.terms}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ name, label, error, type = "text" }: { name: string; label: string; error?: string; type?: string }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wider text-navy/60">{label}</span>
      <input
        name={name}
        type={type}
        className={`mt-1.5 min-h-[48px] w-full rounded-2xl border bg-white px-4 py-3 text-base outline-none transition focus:border-navy focus:ring-2 focus:ring-lavender/40 ${error ? "border-destructive" : "border-navy/15"}`}
      />
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
