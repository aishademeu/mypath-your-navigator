import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { isAuthed, logout, getProfile } from "@/lib/store";

export function Navbar() {
  const [authed, setAuthed] = useState(false);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const { location } = useRouterState();

  useEffect(() => {
    const sync = () => {
      setAuthed(isAuthed());
      setName(getProfile()?.user.name ?? "");
    };
    sync();
    window.addEventListener("mypath:update", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("mypath:update", sync);
      window.removeEventListener("storage", sync);
    };
  }, [location.pathname]);

  const nav = [
    { to: "/opportunities", label: "Opportunities" },
    { to: "/dashboard", label: "Dashboard" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/mentor", label: "AI Mentor" },
  ] as const;

  return (
    <header className="sticky top-0 z-40">
      <div className="mx-auto mt-4 max-w-7xl px-4">
        <div className="glass flex items-center justify-between rounded-full px-3 py-2 shadow-[0_10px_40px_-20px_rgba(11,31,58,0.25)]">
          <Link to="/" className="flex items-center gap-2">
            <Logo className="h-6 w-auto" />
            <span className="sr-only">MyPath</span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition hover:bg-navy/5 hover:text-foreground [&.active]:bg-navy [&.active]:text-ivory" activeProps={{ className: "active" }}>
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            {authed ? (
              <>
                <span className="hidden text-sm text-muted-foreground md:inline">Hi, {name.split(" ")[0]}</span>
                <button onClick={() => { logout(); navigate({ to: "/" }); }} className="rounded-full border border-input px-4 py-1.5 text-sm font-medium hover:bg-navy/5">Log out</button>
              </>
            ) : (
              <>
                <Link to="/login" className="hidden rounded-full px-4 py-1.5 text-sm font-medium hover:bg-navy/5 sm:inline">Log in</Link>
                <Link to="/signup" className="rounded-full bg-navy px-4 py-1.5 text-sm font-medium text-ivory hover:opacity-90">Start</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
