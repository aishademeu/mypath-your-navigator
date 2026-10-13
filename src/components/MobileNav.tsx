import { Link } from "@tanstack/react-router";
import { Home, Search, ClipboardList, BookOpen, MessageSquare, User } from "lucide-react";
import { useSession } from "@/lib/supabase-hooks";

export function MobileNav() {
  const { user } = useSession();

  const authItems = [
    { to: "/dashboard" as const, label: "Home", Icon: Home },
    { to: "/opportunities" as const, label: "Opportunities", Icon: Search },
    { to: "/my-plan" as const, label: "My Plan", Icon: ClipboardList },
    { to: "/portfolio" as const, label: "Portfolio", Icon: BookOpen },
    { to: "/mentor" as const, label: "AI Mentor", Icon: MessageSquare },
    { to: "/profile" as const, label: "Profile", Icon: User },
  ];

  const publicItems = [
    { to: "/" as const, label: "Home", Icon: Home },
    { to: "/opportunities" as const, label: "Opportunities", Icon: Search },
    { to: "/auth" as const, label: "Sign in", Icon: User },
  ];

  const items = user ? authItems : publicItems;

  return (
    <nav
      aria-label="Primary navigation"
      className="fixed inset-x-0 bottom-0 z-40 md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="mx-2 mb-2 rounded-2xl border border-navy/10 bg-white/97 px-1 py-1 shadow-[0_-4px_24px_-4px_rgba(46,33,26,0.12)] backdrop-blur-sm">
        <ul className={`grid gap-0 ${items.length === 3 ? "grid-cols-3" : "grid-cols-6"}`}>
          {items.map(({ to, label, Icon }) => (
            <li key={to}>
              <Link
                to={to as any}
                activeProps={{ className: "text-clay-deep bg-clay/10" }}
                inactiveProps={{ className: "text-navy/50" }}
                className="flex min-h-[52px] flex-col items-center justify-center gap-0.5 rounded-xl px-1 py-1.5 text-[10px] font-medium transition-colors"
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
