import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Logo } from "@/components/Logo";
import { signUp } from "@/lib/store";

export const Route = createFileRoute("/signup")({ component: SignUp });

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Invalid email").max(255),
  password: z.string().min(6, "At least 6 characters").max(100),
  age: z.coerce.number().int().min(13, "MyPath is for ages 13+").max(18, "MyPath is for ages 13–18"),
  country: z.string().trim().min(2, "Please add your country").max(80),
});

function SignUp() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [busy, setBusy] = useState(false);

  return (
    <div className="min-h-screen gradient-hero">
      <div className="mx-auto flex min-h-screen max-w-6xl items-center px-6 py-10">
        <div className="grid w-full gap-10 md:grid-cols-2">
          <div className="hidden md:block">
            <Link to="/"><Logo className="h-8 w-auto" /></Link>
            <h1 className="mt-10 font-display text-5xl leading-tight text-balance">Start the journey that becomes your story.</h1>
            <p className="mt-6 max-w-md text-navy/70">Create your MyPath account to unlock personalized opportunities, an AI mentor, and a portfolio built for the future you imagine.</p>
            <ul className="mt-8 space-y-3 text-sm text-navy/70">
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-gold" /> 500+ curated scholarships & programs</li>
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-lavender" /> AI-guided self-discovery</li>
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-growth" /> Portfolio universities remember</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-navy/10 bg-white/80 p-8 shadow-2xl shadow-navy/10 backdrop-blur md:p-10">
            <div className="md:hidden mb-6"><Link to="/"><Logo className="h-7 w-auto" /></Link></div>
            <h2 className="font-display text-3xl">Create your account</h2>
            <p className="mt-1 text-sm text-navy/60">Already on MyPath? <Link to="/login" className="font-medium text-navy underline">Log in</Link></p>
            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                setBusy(true);
                const fd = new FormData(e.currentTarget);
                const data = Object.fromEntries(fd);
                const r = schema.safeParse(data);
                if (!r.success) {
                  const errs: Record<string, string> = {};
                  r.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
                  setErrors(errs);
                  setBusy(false);
                  return;
                }
                setErrors({});
                signUp(r.data);
                navigate({ to: "/onboarding" });
              }}
            >
              <Field name="name" label="Full name" placeholder="Ada Lovelace" error={errors.name} />
              <Field name="email" label="Email" type="email" placeholder="you@school.com" error={errors.email} />
              <Field name="password" label="Password" type="password" placeholder="At least 6 characters" error={errors.password} />
              <div className="grid grid-cols-2 gap-3">
                <Field name="age" label="Age" type="number" placeholder="15" error={errors.age} />
                <Field name="country" label="Country" placeholder="United Kingdom" error={errors.country} />
              </div>
              <button disabled={busy} className="mt-2 w-full rounded-full bg-navy py-3.5 text-sm font-semibold text-ivory hover:opacity-90 disabled:opacity-60">
                {busy ? "Creating…" : "Create my account →"}
              </button>
              <p className="text-center text-xs text-navy/50">By continuing, you agree to MyPath's Terms and Privacy Policy.</p>
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
      <input name={name} type={type} placeholder={placeholder} className={`mt-1.5 w-full rounded-2xl border bg-white px-4 py-3 text-sm outline-none transition focus:border-navy focus:ring-2 focus:ring-lavender/40 ${error ? "border-destructive" : "border-navy/15"}`} />
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
