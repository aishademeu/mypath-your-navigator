
# MyPath: Prototype → MVP

Keep the current design language (navy/ivory/lavender/gold, gradient-hero, rounded-3xl cards, animations, Logo component). All work is additive — no visual regressions.

## 1. Real auth & persistence (Lovable Cloud / Supabase)

- Enable Lovable Cloud.
- Auth: email + password (default), plus Google sign-in via the Lovable broker.
- Tables (all with GRANTs + RLS scoped to `auth.uid()`):
  - `profiles` — id (FK auth.users), name, age, grade, country, avatar_url, about, curious_about, world_change, created_at.
  - `onboarding` — user_id, interests[], strengths[], problems[], goals[], dream, completed_at.
  - `portfolio_items` — id, user_id, section, title, description, date.
  - `saved_opportunities` — user_id, opportunity_id, status ('saved'|'applying'|'applied'|'accepted'), created_at.
  - `application_progress` — user_id, opportunity_id, step_key, completed, updated_at.
  - `chat_messages` — user_id, role, content, created_at.
- Auto-create profile row via trigger on `auth.users` insert.
- Move gated routes under `src/routes/_authenticated/` (dashboard, onboarding, portfolio, mentor, analyze, opportunities detail, apply-guide). Landing, `/auth` stay public.
- Replace `src/lib/store.ts` localStorage layer with Supabase-backed hooks (`useProfile`, `useOnboarding`, `usePortfolio`, `useSavedOpportunities`, `useApplicationProgress`) using TanStack Query + server functions where user-scoped.
- Root: register `onAuthStateChange` once → invalidate router/queries; add session-aware navbar (avatar + logout when signed in).
- New `/auth` route replacing `/login` + `/signup` (tabbed), keeping current premium visuals. Redirect old routes.

## 2. Expanded onboarding

Rework `src/routes/_authenticated/onboarding.tsx` with the full option sets requested:
- Academic interests (18 options).
- Personal strengths (11 options).
- World problems (10 options).
- Goals (8 options).
- Grade + experience-level step.
- Open-ended textareas: "Tell us about yourself", "What are you curious about?", "What change would you like to make?" (all optional).
Persist to `onboarding` + `profiles` on completion; allow returning users to edit from profile.

## 3. Smarter matching

New `src/lib/matching.ts`:
- Opportunity shape includes `ageMin`, `ageMax`, `gradeMin`, `gradeMax`, `countries` (or "Global"|"Online"), `requiredInterests`, `requiredSkills`, `goalAlignment`, `experienceLevel`.
- Score components (weighted): eligibility hard-check (age/grade) 40, interest overlap 25, skill overlap 15, goal alignment 15, problem/world overlap 5.
- If age/grade fails → score capped at 45 and marked "Not eligible yet".
- Return `{ score, reasons: [{ok, text}] }` — rendered on card and detail page with ✓/✗ chips.

## 4. Expanded opportunity database

`src/lib/opportunities.ts` grows to ~40–50 curated realistic entries across all 11 categories (Scholarships, Competitions, Research, Internships, Leadership, Volunteering, Summer Programs, Fellowships, Entrepreneurship, Courses, Conferences). Each has: name, description, category, country, mode (online/in-person/hybrid), age range, grade range, deadline, eligibility, skills gained, application link, tags. Filters in `/opportunities` gain category, mode, deadline-window, and "eligible only" toggle.

## 5. Functional Apply Guide

- `src/routes/_authenticated/opportunities.$id.tsx` — detail view with match breakdown + "Open Apply Guide" button.
- `src/routes/_authenticated/apply-guide.$id.tsx` — checklist page:
  - Requirements checklist
  - Timeline (relative to deadline)
  - Preparation steps
  - Required documents
  - Tips
  - Common mistakes
  - Personal checklist (checkboxes persisted to `application_progress`)
- Progress ring at top; "Mark as applied" button flips `saved_opportunities.status`.

## 6. Profile page

Rework `src/routes/_authenticated/portfolio.tsx` → `/profile`:
- Header card: avatar placeholder (initials), name, grade/age/country, "edit profile" drawer.
- Sections: About me, Interests, Direction (dream), Strengths, Goals, Achievements, Projects, Research, Leadership, Skills.
- Growth timeline (portfolio items sorted by date).
- Progress stats (opportunities saved, applied, accepted; portfolio item count).
- "Recommended next steps" panel using matching engine's top 3.

## 7. Logo & branding

- Enlarge Logo across navbar (`h-11`), auth pages (`h-12`), dashboard header (`h-10`).
- Add a subtle brand tag ("MyPath — Your journey, your path") under logo on auth and landing.
- Ensure logo appears in mobile nav drawer.

## 8. Preserve premium feel

All new pages reuse existing tokens (`gradient-hero`, `bg-white/80 backdrop-blur`, `rounded-3xl`, `font-display`, animated progress bars, chip buttons). No visual downgrades.

## Technical notes

- All Supabase reads/writes go through `createServerFn` with `requireSupabaseAuth`, or the browser client for realtime-safe things (auth flows).
- Migrations: enum types for `app_role` not needed here; RLS with `auth.uid() = user_id`.
- Delete `src/lib/store.ts` after migration; replace call sites.
- Update `__root.tsx` head metadata (title, description, og tags).

---

**One question before I build:** onboarding collects grade + optional avatar/about text — should I also let users **edit** all onboarding answers later from the profile page (recommended), or lock them after first completion?
