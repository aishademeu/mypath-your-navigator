import { Link, useNavigate } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { useSession, useProfile } from "@/lib/supabase-hooks";
import { supabase } from "@/integrations/supabase/client";
import { useI18n, LANGS, type Lang } from "@/lib/i18n";
import { useState } from "react";

export function Navbar() {
  const navigate = useNavigate();
  const { user } = useSession();
  const { data: profile } = useProfile(user);
  const { lang, setLang, dict } = useI18n();
  const [langOpen, setLangOpen] = useState(false);

  const nav = [
    { to: "/opportunities" as const, label: dict.nav.opportunities },
    { to: "/dashboard" as const, label: dict.nav.dashboard },
    { to: "/profile" as const, label: dict.nav.profile },
    { to: "/mentor" as const, label: dict.nav.mentor },
  ];

  const firstName = (profile?.name ?? user?.email?.split("@")[0] ?? "").split(" ")[0];
  const currentLang = LANGS.find((l) => l.code === lang)!;

  return (
    <header className="sticky top-0 z-40">
      <div className="mx-auto mt-3 max-w-7xl px-3 md:mt-4 md:px-4">
        <div className="glass flex items-center justify-between gap-2 rounded-full px-2 py-1.5 shadow-[0_10px_40px_-20px_rgba(11,31,58,0.25)] md:px-3 md:py-2">
          <Link to="/" className="flex flex-none items-center gap-2">
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
          <div className="flex flex-none items-center gap-1.5 md:gap-2">
            <div className="relative">
              <button
                onClick={() => setLangOpen((v) => !v)}
                aria-label="Language"
                className="flex min-h-[36px] items-center gap-1 rounded-full border border-navy/10 bg-white/70 px-2.5 py-1.5 text-xs font-medium hover:bg-white"
              >
                <span>{currentLang.flag}</span>
                <span className="hidden sm:inline">{currentLang.code.toUpperCase()}</span>
              </button>
              {langOpen && (
                <>
                  <button aria-hidden className="fixed inset-0 z-40" onClick={() => setLangOpen(false)} />
                  <div className="absolute right-0 top-full z-50 mt-2 w-44 overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-xl">
                    {LANGS.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => { setLang(l.code as Lang); setLangOpen(false); }}
                        className={`flex w-full items-center gap-2 px-3 py-2 text-left text-sm hover:bg-navy/5 ${l.code === lang ? "bg-navy/5 font-semibold" : ""}`}
                      >
                        <span className="text-lg">{l.flag}</span>
                        <span>{l.native}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
            {user ? (
              <>
                <span className="hidden text-sm text-muted-foreground lg:inline">{dict.nav.hi}, {firstName}</span>
                <button
                  onClick={async () => {
                    await supabase.auth.signOut();
                    navigate({ to: "/" });
                  }}
                  className="rounded-full border border-input px-3 py-1.5 text-xs font-medium hover:bg-navy/5 md:px-4 md:text-sm"
                >
                  {dict.nav.logout}
                </button>
              </>
            ) : (
              <>
                <Link to="/auth" search={{ mode: "login" }} className="hidden rounded-full px-3 py-1.5 text-sm font-medium hover:bg-navy/5 sm:inline md:px-4">
                  {dict.nav.login}
                </Link>
                <Link
                  to="/auth"
                  search={{ mode: "signup" }}
                  className="rounded-full bg-navy px-3 py-1.5 text-xs font-medium text-ivory hover:opacity-90 md:px-4 md:text-sm"
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
