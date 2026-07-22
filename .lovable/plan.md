# MyPath — Multilingual + Mobile-First MVP

Scope covers requests 9–12. Design system stays exactly as-is; this adds language and mobile polish on top.

## 1. Internationalization (EN / RU / KK)

- Add a lightweight in-house i18n system (no extra deps): `src/lib/i18n/` with:
  - `en.ts`, `ru.ts`, `kk.ts` — full translation dictionaries with nested keys (nav, landing, auth, onboarding, dashboard, opportunities, profile, mentor, apply, common, errors).
  - `LanguageProvider` (React context) exposing `{ lang, setLang, t(key, vars?) }`.
  - Persists to `localStorage` under `mypath.lang`, and — when a user is signed in — mirrors to `profiles.preferred_lang` via Supabase so it follows the account.
- All EN/RU/KK strings written by hand for natural tone: inspiring, warm, professional. Kazakh reviewed for native phrasing (proper suffixes, no calques from Russian). Slogan set:
  - EN: "Find your path. Build your future."
  - RU: "Найди свой путь. Построй своё будущее."
  - KK: "Өз жолыңды тап. Болашағыңды құр."
- Replace hardcoded strings in every route/component: Navbar, Footer, Landing, Auth, Onboarding, Dashboard, Opportunities, Profile, Mentor, Analyze, ApplyGuide, error boundaries, toasts.
- Opportunity categories and tags translated via a category key map (data stays canonical in English, UI labels resolved through `t`).
- `<html lang="…">` updated on language change.

## 2. First-visit language picker

- New route `/welcome` (public) shown when no language is stored yet. Beautiful full-screen picker matching the premium palette:
  - Title "Choose your language / Выберите язык / Тілді таңдаңыз"
  - Three large cards: 🇬🇧 English · 🇷🇺 Русский · 🇰🇿 Қазақша
- Root route redirects to `/welcome` on first visit; after selection, routes to `/` (landing).

## 3. Language settings in Profile

- Profile page gets a "Language / Тіл / Язык" section with the same three options.
- Switching is instant; profile data, onboarding answers, portfolio, and progress are untouched (only the display language changes).
- Add `preferred_lang text` column to `profiles` (nullable, default null) via migration so preference syncs across devices.

## 4. AI Mentor multilingual replies

- `mentorReply()` becomes language-aware: dedicated reply templates per language (EN/RU/KK) with the same structure (direction, profile analysis, next steps, summer plan, default). Uses translated interest labels when composing answers.
- Prompt chips and empty-state greeting translated.
- Reply language always matches `lang` at send time.

## 5. Mobile-first experience

- Global responsive audit: touch targets ≥ 44px, readable base font, no horizontal scroll, safe-area padding.
- **Navbar**: desktop links hidden below `md`. Replaced on mobile by a fixed **bottom nav bar** with 6 items: Home, My Path (Dashboard), Opportunities, Portfolio (Profile → portfolio tab), AI Mentor, Profile. Icons from `lucide-react`, active state highlighted in navy/gold. Sits above content with `pb-24` on mobile page wrappers.
- **Landing**: hero + sections restacked; floating cards become a single column carousel-like stack on mobile.
- **Onboarding**: one question per screen on mobile with a top progress bar, large tappable option cards, big Next/Back buttons pinned to the bottom.
- **Dashboard**: single vertical scroll with cards for Welcome, Progress, Recommendations, Next Steps, AI Mentor shortcut, Portfolio progress.
- **Opportunities**: filter bar becomes a sticky top pill row + collapsible sheet; cards full-width.
- **Profile**: tabs collapse into a horizontally scrollable pill row; editable fields stack.
- **Mentor**: chat fills viewport minus bottom nav; composer sticky, textarea auto-grows.
- **Apply guide**: checklist stacks; steps become large tappable rows.

## 6. Technical notes

- Files added:
  - `src/lib/i18n/index.tsx` (provider + hook + types)
  - `src/lib/i18n/en.ts`, `ru.ts`, `kk.ts`
  - `src/components/MobileNav.tsx`
  - `src/routes/welcome.tsx`
- Files updated: `__root.tsx` (provider + `<html lang>`), `Navbar.tsx`, `Footer.tsx`, all route pages, `profile.tsx` (add language section), `mentor.tsx` (i18n replies).
- Migration: `alter table profiles add column preferred_lang text;` with proper grant (already covered by existing profile policies).
- No new npm dependencies; keeps bundle small.

## Out of scope
- Translating opportunity long-form descriptions (kept in English for MVP accuracy; UI chrome, categories, and CTAs are fully localized). Can be added later per-entry.
