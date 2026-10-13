import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Logo } from "@/components/Logo";
import { supabase } from "@/integrations/supabase/client";

type Search = { mode?: "signup" | "login"; role?: "student" | "parent" };

export const Route = createFileRoute("/auth")({
  component: AuthPage,
  validateSearch: (s: Record<string, unknown>): Search => ({
    mode: s.mode === "signup" ? "signup" : "login",
    role: s.role === "parent" ? "parent" : "student",
  }),
  head: () => ({
    meta: [
      { title: "MyPath — Sign in / Create account" },
      {
        name: "description",
        content:
          "Create a free MyPath account to find opportunities, track applications, and build your portfolio.",
      },
    ],
  }),
});

function AuthPage() {
  const { mode, role: initialRole } = Route.useSearch();
  const isSignup = mode === "signup";
  const navigate = useNavigate();
  const [role, setRole] = useState<"student" | "parent">(initialRole || "student");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [busy, setBusy] = useState(false);
  const [banner, setBanner] = useState<{ type: "error" | "info"; text: string } | null>(null);
  const [showReset, setShowReset] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetBusy, setResetBusy] = useState(false);

  const studentSignupSchema = z.object({
    name: z.string().trim().min(2, "Please enter your full name").max(80),
    email: z.string().trim().email("Please enter a valid email address").max(255),
    phone: z.string().trim().optional(),
    password: z.string().min(6, "Password must be at least 6 characters").max(100),
    age: z.coerce
      .number()
      .int()
      .min(13, "MyPath is for ages 13 and above")
      .max(25, "Please enter a valid age"),
    country: z.string().trim().min(2, "Please enter your country").max(80),
    grade: z.string().trim().min(1).max(20),
  });

  const parentSignupSchema = z.object({
    name: z.string().trim().min(2, "Please enter your full name").max(80),
    email: z.string().trim().email("Please enter a valid email address").max(255),
    password: z.string().min(6, "Password must be at least 6 characters").max(100),
    country: z.string().trim().min(2, "Please enter your country").max(80),
  });

  const loginSchema = z.object({
    email: z.string().trim().email("Please enter a valid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setErrors({});
    setBanner(null);
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd);

    try {
      if (isSignup) {
        if (role === "parent") {
          const r = parentSignupSchema.safeParse(data);
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
              emailRedirectTo: `${window.location.origin}/parent`,
              data: { name: r.data.name, role: "parent" },
            },
          });
          if (error) throw error;
          if (authData.user) {
            await (supabase as any)
              .from("profiles")
              .update({
                name: r.data.name,
                email: r.data.email,
                country: r.data.country,
                role: "parent",
              })
              .eq("id", authData.user.id);
          }
          setBanner({
            type: "info",
            text: "Account created! Check your email to confirm, then log in.",
          });
        } else {
          const r = studentSignupSchema.safeParse(data);
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
              data: { name: r.data.name, role: "student" },
            },
          });
          if (error) throw error;
          if (authData.user) {
            await (supabase as any)
              .from("profiles")
              .update({
                name: r.data.name,
                age: r.data.age,
                country: r.data.country,
                grade: r.data.grade,
                email: r.data.email,
                phone: r.data.phone || null,
                role: "student",
              })
              .eq("id", authData.user.id);
            navigate({ to: "/onboarding" });
          } else {
            setBanner({
              type: "info",
              text: "Check your email to confirm your account, then log in.",
            });
          }
        }
      } else {
        const r = loginSchema.safeParse(data);
        if (!r.success) {
          const errs: Record<string, string> = {};
          r.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
          setErrors(errs);
          return;
        }
        const { error, data: loginData } = await supabase.auth.signInWithPassword({
          email: r.data.email,
          password: r.data.password,
        });
        if (error) throw error;
        if (loginData.user) {
          const { data: prof } = await (supabase as any)
            .from("profiles")
            .select("role")
            .eq("id", loginData.user.id)
            .maybeSingle();
          if (prof?.role === "parent") {
            navigate({ to: "/parent" as any });
            return;
          }
          if (prof?.role === "admin") {
            navigate({ to: "/admin" as any });
            return;
          }
        }
        navigate({ to: "/dashboard" });
      }
    } catch (err: unknown) {
      setBanner({
        type: "error",
        text: err instanceof Error ? err.message : "Something went wrong. Please try again.",
      });
    } finally {
      setBusy(false);
    }
  }

  async function handlePasswordReset(e: React.FormEvent) {
    e.preventDefault();
    if (!resetEmail.trim()) return;
    setResetBusy(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(resetEmail.trim(), {
        redirectTo: `${window.location.origin}/auth?mode=login`,
      });
      if (error) throw error;
      setBanner({ type: "info", text: "Password reset email sent. Check your inbox." });
      setShowReset(false);
    } catch (err: unknown) {
      setBanner({
        type: "error",
        text: err instanceof Error ? err.message : "Failed to send reset email.",
      });
    } finally {
      setResetBusy(false);
    }
  }

  return (
    <div className="gradient-hero min-h-screen pb-24 md:pb-0">
      <div className="mx-auto flex min-h-screen max-w-6xl items-center px-5 py-8 md:px-6 md:py-10">
        <div className="grid w-full gap-8 md:grid-cols-2 md:gap-12">
          {/* Left panel */}
          <div className="hidden md:flex md:flex-col md:justify-center">
            <Link to="/">
              <Logo className="h-9 w-auto" />
            </Link>
            <h1 className="mt-10 font-display text-4xl leading-tight text-balance">
              {isSignup
                ? "Find opportunities. Build your portfolio. Plan your next step."
                : "Welcome back to MyPath."}
            </h1>
            <p className="mt-5 text-navy/70 leading-relaxed">
              {isSignup
                ? "MyPath helps students aged 13–18 find scholarships, competitions, research programs, and build a strong portfolio."
                : "Log in to access your opportunities, applications, portfolio, and AI Mentor."}
            </p>
            <ul className="mt-8 space-y-3 text-sm text-navy/70">
              {[
                "Scholarships, competitions, research programs",
                "Application tracker with deadlines and tasks",
                "Portfolio builder with PDF export",
              ].map((b) => (
                <li key={b} className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-growth flex-none" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Form panel */}
          <div className="rounded-2xl border border-navy/10 bg-white/90 p-6 shadow-xl shadow-navy/8 backdrop-blur sm:p-8">
            <div className="mb-5 md:hidden">
              <Link to="/">
                <Logo className="h-8 w-auto" />
              </Link>
            </div>

            <h2 className="font-display text-2xl md:text-3xl">
              {isSignup ? "Create your account" : "Log in"}
            </h2>
            <p className="mt-1 text-sm text-navy/60">
              {isSignup ? (
                <>
                  Already have an account?{" "}
                  <Link
                    to="/auth"
                    search={{ mode: "login" }}
                    className="font-semibold text-navy underline underline-offset-2"
                  >
                    Log in
                  </Link>
                </>
              ) : (
                <>
                  New to MyPath?{" "}
                  <Link
                    to="/auth"
                    search={{ mode: "signup" }}
                    className="font-semibold text-navy underline underline-offset-2"
                  >
                    Create an account
                  </Link>
                </>
              )}
            </p>

            {/* Role toggle on signup */}
            {isSignup && (
              <div className="mt-4 flex rounded-xl bg-navy/5 p-1 gap-1">
                <button
                  type="button"
                  onClick={() => setRole("student")}
                  className={`flex-1 rounded-lg py-2 text-xs font-semibold transition ${role === "student" ? "bg-white text-navy shadow-sm" : "text-navy/60 hover:text-navy"}`}
                >
                  Student (13–18)
                </button>
                <button
                  type="button"
                  onClick={() => setRole("parent")}
                  className={`flex-1 rounded-lg py-2 text-xs font-semibold transition ${role === "parent" ? "bg-white text-navy shadow-sm" : "text-navy/60 hover:text-navy"}`}
                >
                  Parent / Guardian
                </button>
              </div>
            )}

            {banner && (
              <div
                className={`mt-4 rounded-xl px-4 py-3 text-sm ${banner.type === "error" ? "bg-destructive/10 text-destructive" : "bg-sage text-navy"}`}
              >
                {banner.text}
              </div>
            )}

            {showReset ? (
              <form onSubmit={handlePasswordReset} className="mt-5 space-y-4">
                <div className="text-sm text-navy/70 font-medium">
                  Enter your email to receive a password reset link.
                </div>
                <Field
                  name="reset_email"
                  label="Email"
                  type="email"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                />
                <button
                  type="submit"
                  disabled={resetBusy}
                  className="w-full rounded-xl bg-navy py-3 text-sm font-semibold text-ivory disabled:opacity-60"
                >
                  {resetBusy ? "Sending…" : "Send reset link"}
                </button>
                <button
                  type="button"
                  onClick={() => setShowReset(false)}
                  className="w-full text-center text-xs text-navy/60 underline"
                >
                  Back to login
                </button>
              </form>
            ) : (
              <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
                {isSignup && (
                  <Field name="name" label="Full name" error={errors.name} autoComplete="name" />
                )}
                <Field
                  name="email"
                  label="Email"
                  type="email"
                  error={errors.email}
                  autoComplete="email"
                />
                {isSignup && (
                  <Field
                    name="phone"
                    label="Phone (optional)"
                    type="tel"
                    hint="Optional. We may use this for Telegram or WhatsApp notifications if you opt in."
                    autoComplete="tel"
                  />
                )}
                <Field
                  name="password"
                  label="Password"
                  type="password"
                  error={errors.password}
                  autoComplete={isSignup ? "new-password" : "current-password"}
                />
                {isSignup && role === "student" && (
                  <>
                    <div className="grid grid-cols-2 gap-3">
                      <Field name="age" label="Age" type="number" error={errors.age} />
                      <Field
                        name="grade"
                        label="Grade"
                        error={errors.grade}
                        placeholder="e.g. 10"
                      />
                    </div>
                    <Field
                      name="country"
                      label="Country"
                      error={errors.country}
                      placeholder="e.g. Kazakhstan"
                    />
                  </>
                )}
                {isSignup && role === "parent" && (
                  <Field name="country" label="Country" error={errors.country} />
                )}

                <button
                  type="submit"
                  disabled={busy}
                  className="mt-2 w-full rounded-xl bg-navy py-3.5 text-sm font-semibold text-ivory transition hover:opacity-90 disabled:opacity-60"
                >
                  {busy ? "Working…" : isSignup ? "Create account →" : "Log in →"}
                </button>

                {!isSignup && (
                  <button
                    type="button"
                    onClick={() => setShowReset(true)}
                    className="w-full text-center text-xs text-navy/60 underline underline-offset-2 hover:text-navy"
                  >
                    Forgot password?
                  </button>
                )}

                {isSignup && (
                  <p className="text-center text-xs text-navy/50">
                    By continuing you agree to MyPath's Terms of Service and Privacy Policy.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  name,
  label,
  error,
  type = "text",
  placeholder,
  hint,
  autoComplete,
  value,
  onChange,
}: {
  name: string;
  label: string;
  error?: string;
  type?: string;
  placeholder?: string;
  hint?: string;
  autoComplete?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wider text-navy/60">{label}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
        className={`mt-1.5 min-h-[48px] w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition focus:border-navy focus:ring-2 focus:ring-clay/30 ${error ? "border-destructive" : "border-navy/15"}`}
      />
      {hint && !error && <span className="mt-1 block text-xs text-navy/50">{hint}</span>}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
