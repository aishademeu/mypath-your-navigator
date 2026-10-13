import { Link, useNavigate } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { useSession, useProfile } from "@/lib/supabase-hooks";
import { supabase } from "@/integrations/supabase/client";
import { useI18n } from "@/lib/i18n";
import { useState } from "react";

export function Navbar() {
  const navigate = useNavigate();
  const { user } = useSession();
  const { data: profile } = useProfile(user);
  const { dict } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);

  const firstName = (profile?.name ?? user?.email?.split("@")[0] ?? "").split(" ")[0];

  // Authenticated nav items
  const authNav = [
    { to: "/dashboard" as const, label: "Home" },
    { to: "/opportunities" as const, label: "Opportunities" },
    { to: "/my-plan" as const, label: "My Plan" },
    { to: "/portfolio" as const, label: "Portfolio" },
    { to: "/mentor" as const, label: "AI Mentor" },
    { to: "/profile" as const, label: "Profile" },
  ];

  const publicNav = [{ to: "/opportunities" as const, label: "Opportunities" }];

  const nav = user ? authNav : publicNav;

  return (
    <header className="sticky top-0 z-40">
      <div className="mx-auto mt-3 max-w-7xl px-3 md:mt-4 md:px-4">
        <div className="glass flex items-center justify-between gap-2 rounded-2xl px-3 py-2 shadow-[0_4px_24px_-8px_rgba(46,33,26,0.12)]">
          {/* Logo */}
          <Link to="/" className="flex flex-none items-center gap-2">
            <Logo className="h-8 w-auto md:h-9" />
            <span className="sr-only">MyPath</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-0.5 md:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to as any}
                className="rounded-xl px-3.5 py-2 text-sm font-medium text-foreground/75 transition hover:bg-navy/5 hover:text-foreground [&.active]:bg-navy/8 [&.active]:text-navy [&.active]:font-semibold"
                activeProps={{ className: "active" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex flex-none items-center gap-2">
            {user ? (
              <>
                <span className="hidden text-sm text-muted-foreground lg:inline">{firstName}</span>
                <button
                  onClick={async () => {
                    await supabase.auth.signOut();
                    navigate({ to: "/" });
                  }}
                  className="rounded-xl border border-input px-3 py-1.5 text-xs font-medium hover:bg-navy/5 md:px-4 md:text-sm"
                >
                  {dict.nav.logout}
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/auth"
                  search={{ mode: "login" }}
                  className="hidden rounded-xl px-3 py-1.5 text-sm font-medium hover:bg-navy/5 sm:inline md:px-4"
                >
                  {dict.nav.login}
                </Link>
                <Link
                  to="/auth"
                  search={{ mode: "signup" }}
                  className="rounded-xl bg-navy px-3 py-1.5 text-xs font-semibold text-ivory hover:opacity-90 md:px-4 md:text-sm"
                >
                  {dict.nav.start}
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
