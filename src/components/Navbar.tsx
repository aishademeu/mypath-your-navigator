import { Link, useNavigate } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { useSession, useProfile } from "@/lib/supabase-hooks";
import { supabase } from "@/integrations/supabase/client";

export function Navbar() {
  const navigate = useNavigate();
  const { user } = useSession();
  const { data: profile } = useProfile(user);

  const nav = [
    { to: "/opportunities", label: "Opportunities" },
    { to: "/dashboard", label: "Dashboard" },
    { to: "/profile", label: "Profile" },
    { to: "/mentor", label: "AI Mentor" },
  ] as const;

  const firstName = (profile?.name ?? user?.email?.split("@")[0] ?? "").split(" ")[0];

  return (
    <header className="sticky top-0 z-40">
      <div className="mx-auto mt-4 max-w-7xl px-4">
        <div className="glass flex items-center justify-between rounded-full px-3 py-2 shadow-[0_10px_40px_-20px_rgba(11,31,58,0.25)]">
          <Link to="/" className="flex items-center gap-2">
            <Logo className="h-8 w-auto md:h-9" />
            <span className="sr-only">MyPath</span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition hover:bg-navy/5 hover:text-foreground [&.active]:bg-navy [&.active]:text-ivory"
                activeProps={{ className: "active" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            {user ? (
              <>
                <span className="hidden text-sm text-muted-foreground md:inline">Hi, {firstName}</span>
                <button
                  onClick={async () => {
                    await supabase.auth.signOut();
                    navigate({ to: "/" });
                  }}
                  className="rounded-full border border-input px-4 py-1.5 text-sm font-medium hover:bg-navy/5"
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <Link to="/auth" className="hidden rounded-full px-4 py-1.5 text-sm font-medium hover:bg-navy/5 sm:inline">
                  Log in
                </Link>
                <Link
                  to="/auth"
                  search={{ mode: "signup" }}
                  className="rounded-full bg-navy px-4 py-1.5 text-sm font-medium text-ivory hover:opacity-90"
                >
                  Start
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
