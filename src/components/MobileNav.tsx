import { Link } from "@tanstack/react-router";
import { Home, Compass, Globe, Briefcase, Sparkles, User } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useSession } from "@/lib/supabase-hooks";

export function MobileNav() {
  const { dict } = useI18n();
  const { user } = useSession();

  const items = [
    { to: "/" as const, label: dict.nav.home, Icon: Home, exact: true },
    { to: (user ? "/dashboard" : "/opportunities") as "/dashboard" | "/opportunities", label: dict.nav.myPath, Icon: Compass },
    { to: "/opportunities" as const, label: dict.nav.opportunities, Icon: Globe },
    { to: (user ? "/profile" : "/auth") as "/profile" | "/auth", label: dict.nav.portfolio, Icon: Briefcase },
    { to: (user ? "/mentor" : "/auth") as "/mentor" | "/auth", label: dict.nav.mentor, Icon: Sparkles },
    { to: (user ? "/profile" : "/auth") as "/profile" | "/auth", label: dict.nav.profile, Icon: User },
  ];

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-40 md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="mx-2 mb-2 rounded-3xl border border-navy/10 bg-white/95 px-1.5 py-1 shadow-[0_12px_40px_-12px_rgba(11,31,58,0.25)] backdrop-blur">
        <ul className="grid grid-cols-6">
          {items.map(({ to, label, Icon, exact }, i) => (
            <li key={`${to}-${i}`}>
              <Link
                to={to}
                activeOptions={exact ? { exact: true } : undefined}
                activeProps={{ className: "text-navy" }}
                inactiveProps={{ className: "text-navy/55" }}
                className="flex min-h-[52px] flex-col items-center justify-center gap-0.5 rounded-2xl px-1 py-1.5 text-[10px] font-medium transition [&.active]:bg-navy/5 [&.active]:text-navy"
              >
                <Icon className="h-5 w-5" strokeWidth={1.75} />
                <span className="truncate leading-tight">{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
