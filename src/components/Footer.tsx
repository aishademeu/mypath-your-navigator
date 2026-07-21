import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-navy/10 bg-ivory">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <Logo className="h-7 w-auto" />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">The premium personal growth platform for ambitious students. Discover, explore, build, grow.</p>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-navy/60">Product</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/opportunities" className="hover:underline">Opportunities</Link></li>
            <li><Link to="/dashboard" className="hover:underline">Dashboard</Link></li>
            <li><Link to="/portfolio" className="hover:underline">Portfolio</Link></li>
            <li><Link to="/mentor" className="hover:underline">AI Mentor</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-navy/60">Get started</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/signup" className="hover:underline">Create account</Link></li>
            <li><Link to="/login" className="hover:underline">Log in</Link></li>
            <li><Link to="/onboarding" className="hover:underline">Onboarding</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-navy/60">MyPath</div>
          <p className="mt-3 text-sm text-muted-foreground">© {new Date().getFullYear()} MyPath Platform. Built for ambitious students, everywhere.</p>
        </div>
      </div>
    </footer>
  );
}
