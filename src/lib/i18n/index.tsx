import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { en, type Dict } from "./en";
import { ru } from "./ru";
import { kk } from "./kk";
import { supabase } from "@/integrations/supabase/client";

export type Lang = "en" | "ru" | "kk";
export const LANGS: { code: Lang; label: string; flag: string; native: string }[] = [
  { code: "en", label: "English", native: "English", flag: "🇬🇧" },
  { code: "ru", label: "Russian", native: "Русский", flag: "🇷🇺" },
  { code: "kk", label: "Kazakh", native: "Қазақша", flag: "🇰🇿" },
];

const DICTS: Record<Lang, Dict> = { en, ru, kk };

const STORAGE_KEY = "mypath.lang";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: <K1 extends keyof Dict, K2 extends keyof Dict[K1]>(
    section: K1, key: K2, vars?: Record<string, string | number>,
  ) => Dict[K1][K2] extends string ? string : Dict[K1][K2];
  dict: Dict;
};

const I18nContext = createContext<Ctx | null>(null);

function interpolate(s: string, vars?: Record<string, string | number>) {
  if (!vars) return s;
  return s.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`));
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // Hydrate from localStorage on mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored && DICTS[stored]) setLangState(stored);
    // Also mirror from profile once signed in
    supabase.auth.getSession().then(({ data }) => {
      const uid = data.session?.user?.id;
      if (!uid) return;
      supabase.from("profiles").select("preferred_lang").eq("id", uid).maybeSingle().then(({ data }) => {
        const pref = (data as { preferred_lang?: string } | null)?.preferred_lang as Lang | undefined;
        if (pref && DICTS[pref] && pref !== (window.localStorage.getItem(STORAGE_KEY) as Lang)) {
          setLangState(pref);
          window.localStorage.setItem(STORAGE_KEY, pref);
        }
      });
    });
  }, []);

  // Reflect on <html lang>
  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") window.localStorage.setItem(STORAGE_KEY, l);
    // Fire-and-forget mirror to profile
    supabase.auth.getSession().then(({ data }) => {
      const uid = data.session?.user?.id;
      if (uid) supabase.from("profiles").update({ preferred_lang: l }).eq("id", uid).then();
    });
  }, []);

  const dict = DICTS[lang];

  const t = useCallback(
    ((section: keyof Dict, key: string, vars?: Record<string, string | number>) => {
      const sec = dict[section] as Record<string, unknown>;
      const val = sec?.[key];
      if (typeof val === "string") return interpolate(val, vars) as never;
      return val as never;
    }) as Ctx["t"],
    [dict],
  );

  const value = useMemo<Ctx>(() => ({ lang, setLang, t, dict }), [lang, setLang, t, dict]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): Ctx {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
}

export function hasStoredLang(): boolean {
  if (typeof window === "undefined") return true;
  return !!window.localStorage.getItem(STORAGE_KEY);
}
