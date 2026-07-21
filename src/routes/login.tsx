import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { login } from "@/lib/store";

export const Route = createFileRoute("/login")({ component: LoginPage });

function LoginPage() {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="min-h-screen gradient-hero">
      <div className="mx-auto flex min-h-screen max-w-md items-center px-6 py-10">
        <div className="w-full rounded-3xl border border-navy/10 bg-white/80 p-8 shadow-2xl shadow-navy/10 backdrop-blur md:p-10">
          <Link to="/"><Logo className="h-7 w-auto" /></Link>
          <h1 className="mt-8 font-display text-3xl">Welcome back.</h1>
          <p className="mt-1 text-sm text-navy/60">Continue building your future.</p>
          <form
            className="mt-6 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              const email = String(fd.get("email") ?? "").trim();
              const password = String(fd.get("password") ?? "");
              const u = login(email, password);
              if (!u) { setError("Invalid email or password."); return; }
              navigate({ to: "/dashboard" });
            }}
          >
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-wider text-navy/60">Email</span>
              <input name="email" type="email" required className="mt-1.5 w-full rounded-2xl border border-navy/15 bg-white px-4 py-3 text-sm outline-none focus:border-navy focus:ring-2 focus:ring-lavender/40" />
            </label>
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-wider text-navy/60">Password</span>
              <input name="password" type="password" required className="mt-1.5 w-full rounded-2xl border border-navy/15 bg-white px-4 py-3 text-sm outline-none focus:border-navy focus:ring-2 focus:ring-lavender/40" />
            </label>
            {error && <div className="rounded-xl bg-destructive/10 px-3 py-2 text-xs text-destructive">{error}</div>}
            <button className="w-full rounded-full bg-navy py-3.5 text-sm font-semibold text-ivory hover:opacity-90">Log in →</button>
            <p className="text-center text-xs text-navy/60">New here? <Link to="/signup" className="font-medium underline">Create an account</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
}
