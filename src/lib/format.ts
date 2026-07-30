import type { Lang } from "@/lib/i18n";

const LOCALES: Record<string, string> = { en: "en-US", ru: "ru-RU", kk: "kk-KZ" };

/**
 * Locale-stable date formatting.
 *
 * Never pass `undefined` as the locale: the SSR runtime and the browser resolve
 * different default locales, which produces a hydration mismatch (React then
 * throws away and re-renders the tree, which looks like a visual flicker).
 */
export function formatDate(
  value: string | number | Date,
  lang: Lang | string = "en",
  opts: Intl.DateTimeFormatOptions = { month: "short", day: "numeric", year: "numeric" },
) {
  const locale = LOCALES[lang] ?? "en-US";
  const d = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(d.getTime())) return "";
  return new Intl.DateTimeFormat(locale, { timeZone: "UTC", ...opts }).format(d);
}
