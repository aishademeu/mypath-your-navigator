# MyPath System Contract & Specification

> **Version:** 1.0 (Phase A1 Final)  
> **Target Audience:** Lovable, Antigravity Agents, Backend & Frontend Engineers  
> **Source of Truth:** PostgreSQL database schemas in `supabase/migrations/` and Server Functions in `src/lib/server-functions.ts`.

---

## 1. Database Schema (PostgreSQL / Supabase)

### 1.1 `profiles`
User identity and core profile attributes.

| Field | Type | Nullable | Constraints & Description |
| :--- | :--- | :---: | :--- |
| `id` | `uuid` | NO | Primary Key, references `auth.users(id) ON DELETE CASCADE` |
| `display_name` | `text` | YES | User's preferred public/display name |
| `name` | `text` | YES | Legacy full name (backwards-compatibility) |
| `birth_year` | `int` | YES | Year of birth (e.g. 2010). Used to calculate age and parental consent requirement |
| `age` | `int` | YES | Current age in years |
| `grade` | `text` / `int` | YES | School grade (7 to 12) |
| `country_code` | `varchar(2)` | YES | ISO-3166 alpha-2 country code (e.g. `KZ`, `UZ`, `KG`, `US`) |
| `citizenship_codes` | `text[]` | NO | Array of citizenship country codes (`DEFAULT '{}'`) |
| `country` | `text` | YES | Country display string |
| `city` | `text` | YES | City name |
| `school` | `text` | YES | School name |
| `interests` | `text[]` | NO | Array of interest areas (`DEFAULT '{}'`) |
| `goals` | `text` | YES | Academic/extracurricular goals |
| `languages` | `jsonb` | NO | `[{ lang: string, level: string, test?: string, score?: string, date?: string }]` |
| `locale` | `text` | NO | Default interface language: `'ru'`, `'kk'`, `'en'` (`DEFAULT 'ru'`) |
| `timezone` | `text` | NO | Timezone string (`DEFAULT 'Asia/Almaty'`) |
| `reminder_channel` | `text` | NO | `'telegram'`, `'email'`, or `'none'` (`DEFAULT 'none'`) |
| `telegram_chat_id`| `bigint` | YES | Linked Telegram chat ID for bot notifications |
| `parental_consent` | `text` | NO | `'none'`, `'pending'`, or `'given'` (`DEFAULT 'none'`). Auto `'pending'` if age < 16 |
| `plan` | `text` | NO | Subscription plan: `'free'` or `'pro'` (`DEFAULT 'free'`) |
| `plan_expires_at` | `timestamptz` | YES | Expiration timestamp for Pro subscription |
| `role` | `text` | NO | `'student'`, `'parent'`, or `'admin'` (`DEFAULT 'student'`) |
| `deletion_requested_at` | `timestamptz` | YES | If set, account is scheduled for purge after 7-day grace period |
| `created_at` | `timestamptz` | NO | `DEFAULT now()` |
| `updated_at` | `timestamptz` | NO | `DEFAULT now()` |

---

### 1.2 `opportunities`
Verified extracurricular and academic opportunities.

| Field | Type | Nullable | Constraints & Description |
| :--- | :--- | :---: | :--- |
| `id` | `uuid` | NO | Primary Key, `DEFAULT gen_random_uuid()` |
| `slug` | `text` | YES | URL-friendly unique slug |
| `title_i18n` | `jsonb` | NO | `{"ru": "...", "kk": "...", "en": "..."}` |
| `organization` | `text` | YES | Hosting organization / university |
| `category` | `text` | NO | `'Scholarships'`, `'Internships'`, `'Research'`, `'Competitions'`, `'Volunteering'`, `'Leadership Programs'`, `'Projects'`, `'Summer Programs'` |
| `directions` | `text[]` | NO | Academic directions / fields (e.g. `['Technology', 'Science']`) |
| `description_i18n`| `jsonb` | NO | Detailed program description in `{ru, kk, en}` |
| `summary_i18n` | `jsonb` | NO | Short summary (<=140 characters) in `{ru, kk, en}` |
| `requirements_checklist` | `jsonb` | NO | Array of preparation items: `[{"ru": "Эссе", "kk": "Эссе", "en": "Essay"}]` |
| `official_url` | `text` | YES | Primary verified link to official program page |
| `source_url` | `text` | YES | Source post / announcement URL |
| `cost_type` | `text` | NO | `'free'`, `'paid'`, `'fully_funded'`, or `'stipend'` (`DEFAULT 'free'`) |
| `cost_amount` | `numeric` | YES | Numeric cost if paid |
| `cost_currency` | `varchar(3)` | YES | Currency code (`KZT`, `USD`, `EUR`) |
| `format` | `text` | NO | `'online'`, `'offline'`, or `'hybrid'` (`DEFAULT 'online'`) |
| `location` | `text` | YES | City/country for in-person or hybrid |
| `min_grade`, `max_grade` | `int` | YES | Minimum and maximum eligible school grade |
| `min_age`, `max_age` | `int` | YES | Minimum and maximum eligible age |
| `eligibility_countries` | `text[]` | NO | Allowed country codes (`'{}'` = open worldwide) |
| `excluded_countries` | `text[]` | NO | Explicitly excluded country codes |
| `citizenship_rule`| `text` | NO | `'open'`, `'us_only'`, `'uk_only'`, `'eu_only'`, `'other'` (`DEFAULT 'open'`) |
| `citizenship_note`| `text` | YES | Official excerpt justifying citizenship rule |
| `language_requirements` | `jsonb` | NO | Required language proficiencies |
| `deadline_type` | `text` | NO | `'fixed'`, `'rolling'`, `'annual_estimate'`, `'unknown'` |
| `deadline_date` | `date` | YES | Target application deadline |
| `cycle_year` | `int` | NO | Cycle year (`DEFAULT 2026`) |
| `status` | `text` | NO | `'active'`, `'expired'`, `'needs_review'`, `'hidden'` (`DEFAULT 'active'`) |
| `translation_source`| `text` | NO | `'human'` or `'machine'` (`DEFAULT 'human'`) |
| `verified_at` | `timestamptz` | YES | Timestamp of last manual verification against official site |
| `verified_by` | `text` | YES | Identifier of verifying engineer or agent |
| `verification_note`| `text` | YES | Verification context or citations |
| `created_at`, `updated_at` | `timestamptz` | NO | Timestamps |

---

### 1.3 `applications`
Student application tracking pipeline.

| Field | Type | Nullable | Constraints & Description |
| :--- | :--- | :---: | :--- |
| `id` | `uuid` | NO | Primary Key, `DEFAULT gen_random_uuid()` |
| `user_id` | `uuid` | NO | References `auth.users(id) ON DELETE CASCADE` |
| `opportunity_id` | `text` | NO | Opportunity identifier |
| `status` | `text` | NO | `'saved'`, `'preparing'`, `'submitted'`, `'result_received'`, `'declined'` |
| `result` | `text` | YES | `'accepted'`, `'rejected'`, `'waitlist'`, or `null` |
| `personal_deadline` | `date` | YES | User's internal target deadline |
| `notes` | `text` | YES | Personal notes |
| `updated_at`, `created_at` | `timestamptz` | NO | Timestamps |

---

### 1.4 `portfolios` & `portfolio_items`
Student portfolio and evidence-backed achievements.

**`portfolios`**
- `id` (`uuid`, PK)
- `user_id` (`uuid`, unique, references `auth.users`)
- `export_locale` (`text`, default `'ru'`)
- `paper_size` (`'A4' | 'Letter'`)
- `template` (`'classic' | 'modern' | 'compact'`)
- `public_slug` (`text`, unique)
- `is_public` (`boolean`, default `false`)
- `show_contact` (`boolean`, default `false`)
- `show_photo` (`boolean`, default `false`)
- `summary_text` (`text`)

**`portfolio_items`**
- `id` (`uuid`, PK)
- `portfolio_id` (`uuid`, references `portfolios(id) ON DELETE CASCADE`)
- `user_id` (`uuid`, references `auth.users`)
- `type` (`'activity' | 'honor' | 'project' | 'research' | 'leadership' | 'volunteering' | 'test' | 'language' | 'course' | 'skill'`)
- `title` (`text`, NOT NULL)
- `organization` (`text`)
- `role` (`text`)
- `description` (`text`)
- `start_date`, `end_date` (`date`)
- `ongoing` (`boolean`, default `false`)
- `grades` (`int[]`)
- `timing` (`'school_year' | 'break' | 'all_year'`)
- `hours_per_week` (`numeric`)
- `weeks_per_year` (`int`)
- `recognition_level` (`'school' | 'local' | 'regional' | 'national' | 'international'`)
- `result_metric` (`text`)
- `links` (`text[]`)
- `include_in_pdf` (`boolean`, default `true`)
- `position` (`int`, default `0`)

---

### 1.5 `evidence`
Proof documents, certificates, and external verifications.

| Field | Type | Nullable | Constraints & Description |
| :--- | :--- | :---: | :--- |
| `id` | `uuid` | NO | Primary Key |
| `user_id` | `uuid` | NO | References `auth.users` |
| `item_id` | `uuid` | YES | References `portfolio_items(id)` |
| `kind` | `text` | NO | `'file'`, `'link'`, `'photo'` |
| `storage_path_or_url`| `text` | NO | Bucket path (e.g. `user_id/evidence.pdf`) or external URL |
| `title` | `text` | NO | Evidence title |
| `trust_level` | `text` | NO | `'self_reported'`, `'has_proof'`, `'confirmed_by_third_party'` |
| `confirmer_name` | `text` | YES | **REQUIRED** when `trust_level = 'confirmed_by_third_party'` |
| `is_public` | `boolean` | NO | Whether link can appear on public portfolio view (`DEFAULT false`) |
| `file_size_bytes` | `bigint` | NO | File size |
| `mime_type` | `text` | YES | Validated MIME type (`application/pdf`, `image/png`, etc.) |

---

### 1.6 `reminders`
Scheduled deadline alerts for Telegram and Email.

- `id` (`uuid`, PK)
- `user_id` (`uuid`, references `auth.users`)
- `application_id` (`uuid`, references `applications(id)`)
- `send_at` (`timestamptz`, NOT NULL)
- `channel` (`'telegram' | 'email'`)
- `status` (`'pending' | 'sent' | 'failed'`)
- `error` (`text`)

---

### 1.7 `mentor_messages`
Strictly private AI mentor dialogues (parents cannot read).

- `id` (`uuid`, PK)
- `user_id` (`uuid`, references `auth.users`)
- `role` (`'user' | 'assistant' | 'system'`)
- `content` (`text`, NOT NULL)
- `locale` (`text`, default `'ru'`)
- `created_at` (`timestamptz`)

---

### 1.8 `payments`
Kaspi manual and card payment audit trail.

- `id` (`uuid`, PK)
- `user_id` (`uuid`, references `auth.users`)
- `plan` (`'pro'`)
- `amount_kzt` (`int`, default `5000`)
- `method` (`'kaspi_manual' | 'card'`)
- `status` (`'pending' | 'approved' | 'rejected' | 'refunded'`)
- `proof_url` (`text`)
- `receipt_note` (`text`)
- `reviewed_by` (`uuid`, references `auth.users`)
- `reviewed_at` (`timestamptz`)

---

### 1.9 `events` (Strict No-PII Analytics)
Platform telemetry with automatic DB-trigger protection preventing PII.

- `id` (`uuid`, PK)
- `user_id_or_anon` (`text`, NOT NULL)
- `name` (`text`, NOT NULL)
- `props` (`jsonb`, default `'{}'`). Rejects any emails, phone numbers, or token keys.

---

### 1.10 `reports`, `consent_log`, `audit_log`
- `reports`: user report on faulty deadline/rule (`target_type`, `target_id`, `message`, `status`).
- `consent_log`: legal consent tracking (`kind`, `text_version`, `given_at`).
- `audit_log`: administrator security logging (`actor_id`, `action`, `target`, `details`, `created_at`).

---

## 2. Views & Security Policies

### 2.1 Sanitized View: `public_portfolios`
Exposes only public-facing fields when `is_public = true` AND `parental_consent != 'pending'`:
- `public_slug`
- `display_name`, `grade`, `school`, `city`, `country_code`
- `summary_text`, `template`, `export_locale`
- `photo_url` (only if `show_photo = true`)
- `contact_email` (only if `show_contact = true` AND `parental_consent = 'given'`)
- `items`: array of portfolio items having `include_in_pdf = true`
- `evidence`: array of evidence links having `is_public = true`
- **NEVER** exposes: `phone`, `birth_year`, `telegram_chat_id`, unverified evidence, or private drafts.

---

## 3. Storage Bucket: `evidence`

- **Access:** Private (`public = false`).
- **Authorization:** Only authenticated owner (`auth.uid() = folder`) or administrator.
- **Maximum File Size:** 10 MB (`10,485,760 bytes`).
- **Quota:** 100 MB per user.
- **Allowed MIME Types:** Verified by magic bytes on upload:
  - `application/pdf` (`%PDF-`)
  - `image/png` (`\x89PNG\r\n\x1a\n`)
  - `image/jpeg` (`\xFF\xD8\xFF`)
  - `image/webp` (`RIFF....WEBP`)
- **Access Method:** Signed URLs via `getEvidenceSignedUrlFn`.

---

## 4. API Endpoints & Server Functions

All server functions are exported in `src/lib/server-functions.ts` via TanStack Start `createServerFn`.

### 4.1 Match Engine
`GET /api/match` / `matchOpportunitiesFn`
- **Input:** `{ includeNotEligible?: boolean, category?: string, cost?: string }`
- **Output:**
  ```json
  {
    "opportunities": [
      {
        "id": "opp-uuid",
        "title": "Zhautykov Olympiad in Informatics",
        "organization": "Daryn",
        "match": {
          "state": "eligible",
          "reasons": [
            { "code": "GRADE_OK", "text": "Подходит для 9–11 классов" },
            { "code": "FIT_INTEREST", "text": "Совпадает с вашим интересом: Информатика" }
          ],
          "fit_tags": ["STEM", "Olympiad"],
          "days_left": 45
        }
      }
    ]
  }
  ```

### 4.2 Weekly Next Step
`GET /api/weekly-step` / `getMyPathActionFn`
- **Output:**
  ```json
  {
    "action": "Complete submission draft for Zhautykov Olympiad",
    "why_it_matters": "Nearest closing deadline in your saved applications",
    "expected_outcome": "Application ready 5 days ahead of official deadline",
    "priority": 1
  }
  ```

### 4.3 Grounded Mentor (Streaming)
`POST /api/mentor` (Server-Sent Events)
- **Input:** `{ message: string, locale: "ru" | "kk" | "en", context_ref?: string }`
- **Stream Output:** Text stream + `suggested_prompts: string[]`.
- **Latency Target:** First token < 3.0s, timeout 30s.

### 4.4 Portfolio Text Improvement
`POST /api/portfolio-improve-text` / `polishPortfolioFn`
- **Input:**
  ```json
  {
    "item_type": "project",
    "field": "description",
    "text": "Made a website with python for school",
    "limit_chars": 200,
    "locale": "ru",
    "known_facts": ["website", "python", "school"]
  }
  ```
- **Output:**
  ```json
  {
    "variants": [
      {
        "text": "Разработал школьный веб-сервис на Python...",
        "changes": ["Усилен активный глагол", "Сформулирован прикладной контекст"],
        "needs_from_user": ["Сколько пользователей посетили сервис?"]
      }
    ]
  }
  ```

### 4.5 Self-Service Data Export & Deletion (R-A1-07)
- `POST exportUserDataFn()`: Returns complete user data archive as JSON.
- `POST requestAccountDeletionFn()`: Schedules account purge with 7-day grace period.

---

## 5. Standard Error Format

All error responses strictly follow the canonical format:
```json
{
  "error": {
    "code": "UNAUTHORIZED | RATE_LIMITED | FORBIDDEN | VALIDATION_ERROR | INTERNAL_ERROR",
    "message": "Human-readable explanation in active locale",
    "details": {}
  }
}
```
