import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { dict } = useI18n();
  return (
    <footer className="mt-16 border-t border-navy/10 bg-ivory pb-28 md:mt-24 md:pb-0">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <Logo className="h-7 w-auto" />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">{dict.landing.sub}</p>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-navy/60">MyPath</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/opportunities" className="hover:underline">{dict.nav.opportunities}</Link></li>
            <li><Link to="/dashboard" className="hover:underline">{dict.nav.dashboard}</Link></li>
            <li><Link to="/profile" className="hover:underline">{dict.nav.portfolio}</Link></li>
            <li><Link to="/mentor" className="hover:underline">{dict.nav.mentor}</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-navy/60">{dict.auth.createAccount}</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/auth" search={{ mode: "signup" }} className="hover:underline">{dict.nav.start}</Link></li>
            <li><Link to="/auth" search={{ mode: "login" }} className="hover:underline">{dict.nav.login}</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-navy/60">MyPath</div>
          <p className="mt-3 text-sm text-muted-foreground">© {new Date().getFullYear()} MyPath Platform.</p>
        </div>
      </div>
    </footer>
  );
}
