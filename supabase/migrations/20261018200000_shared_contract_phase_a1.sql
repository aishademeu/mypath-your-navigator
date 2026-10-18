-- =============================================================================
-- Migration: 20261018200000_shared_contract_phase_a1.sql
-- Description: Full implementation of SHARED CONTRACT Phase A1
-- Author: MyPath Engineering Team
-- =============================================================================

-- Ensure required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- -----------------------------------------------------------------------------
-- 1. PROFILES MIGRATION & EXTENSION
-- -----------------------------------------------------------------------------

-- Add contract fields to profiles
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS display_name text;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS birth_year int;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS country_code varchar(2);
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS citizenship_codes text[] DEFAULT '{}';
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS interests text[] DEFAULT '{}';
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS goals text;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS languages jsonb DEFAULT '[]'::jsonb;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS locale text DEFAULT 'ru';
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS timezone text DEFAULT 'Asia/Almaty';
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS reminder_channel text DEFAULT 'none';
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS telegram_chat_id bigint;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS parental_consent text DEFAULT 'none';
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS plan text DEFAULT 'free';
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS plan_expires_at timestamptz;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS deletion_requested_at timestamptz;

-- Constraints on profiles
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'profiles_reminder_channel_check') THEN
    ALTER TABLE public.profiles ADD CONSTRAINT profiles_reminder_channel_check
    CHECK (reminder_channel IN ('telegram', 'email', 'none'));
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'profiles_parental_consent_check') THEN
    ALTER TABLE public.profiles ADD CONSTRAINT profiles_parental_consent_check
    CHECK (parental_consent IN ('none', 'pending', 'given'));
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'profiles_plan_check') THEN
    ALTER TABLE public.profiles ADD CONSTRAINT profiles_plan_check
    CHECK (plan IN ('free', 'pro'));
  END IF;
END $$;

-- Backfill profile fields from existing data where available
UPDATE public.profiles
SET 
  display_name = COALESCE(display_name, name),
  birth_year = COALESCE(birth_year, CASE WHEN age IS NOT NULL AND age > 0 THEN 2026 - age ELSE NULL END),
  locale = COALESCE(locale, preferred_lang, language, 'ru'),
  parental_consent = COALESCE(parental_consent, 
    CASE 
      WHEN (age IS NOT NULL AND age < 16) OR (birth_year IS NOT NULL AND (2026 - birth_year) < 16) THEN 'pending'
      ELSE 'none'
    END
  )
WHERE display_name IS NULL OR birth_year IS NULL;

-- -----------------------------------------------------------------------------
-- 2. OPPORTUNITIES TABLE MIGRATION
-- -----------------------------------------------------------------------------

ALTER TABLE public.opportunities ADD COLUMN IF NOT EXISTS slug text;
ALTER TABLE public.opportunities ADD COLUMN IF NOT EXISTS title_i18n jsonb DEFAULT '{}'::jsonb;
ALTER TABLE public.opportunities ADD COLUMN IF NOT EXISTS organization text;
ALTER TABLE public.opportunities ADD COLUMN IF NOT EXISTS directions text[] DEFAULT '{}';
ALTER TABLE public.opportunities ADD COLUMN IF NOT EXISTS description_i18n jsonb DEFAULT '{}'::jsonb;
ALTER TABLE public.opportunities ADD COLUMN IF NOT EXISTS summary_i18n jsonb DEFAULT '{}'::jsonb;
ALTER TABLE public.opportunities ADD COLUMN IF NOT EXISTS requirements_checklist jsonb DEFAULT '[]'::jsonb;
ALTER TABLE public.opportunities ADD COLUMN IF NOT EXISTS official_url text;
ALTER TABLE public.opportunities ADD COLUMN IF NOT EXISTS cost_type text DEFAULT 'free';
ALTER TABLE public.opportunities ADD COLUMN IF NOT EXISTS cost_amount numeric;
ALTER TABLE public.opportunities ADD COLUMN IF NOT EXISTS cost_currency varchar(3);
ALTER TABLE public.opportunities ADD COLUMN IF NOT EXISTS location text;
ALTER TABLE public.opportunities ADD COLUMN IF NOT EXISTS eligibility_countries text[] DEFAULT '{}';
ALTER TABLE public.opportunities ADD COLUMN IF NOT EXISTS excluded_countries text[] DEFAULT '{}';
ALTER TABLE public.opportunities ADD COLUMN IF NOT EXISTS citizenship_rule text DEFAULT 'open';
ALTER TABLE public.opportunities ADD COLUMN IF NOT EXISTS citizenship_note text;
ALTER TABLE public.opportunities ADD COLUMN IF NOT EXISTS language_requirements jsonb DEFAULT '[]'::jsonb;
ALTER TABLE public.opportunities ADD COLUMN IF NOT EXISTS deadline_type text DEFAULT 'fixed';
ALTER TABLE public.opportunities ADD COLUMN IF NOT EXISTS deadline_date date;
ALTER TABLE public.opportunities ADD COLUMN IF NOT EXISTS cycle_year int DEFAULT 2026;
ALTER TABLE public.opportunities ADD COLUMN IF NOT EXISTS translation_source text DEFAULT 'human';
ALTER TABLE public.opportunities ADD COLUMN IF NOT EXISTS verified_at timestamptz;
ALTER TABLE public.opportunities ADD COLUMN IF NOT EXISTS verified_by text;
ALTER TABLE public.opportunities ADD COLUMN IF NOT EXISTS verification_note text;

-- Constraints for opportunities
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'opportunities_cost_type_check') THEN
    ALTER TABLE public.opportunities ADD CONSTRAINT opportunities_cost_type_check
    CHECK (cost_type IN ('free', 'paid', 'fully_funded', 'stipend'));
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'opportunities_format_check') THEN
    ALTER TABLE public.opportunities ADD CONSTRAINT opportunities_format_check
    CHECK (format IN ('online', 'offline', 'hybrid'));
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'opportunities_citizenship_rule_check') THEN
    ALTER TABLE public.opportunities ADD CONSTRAINT opportunities_citizenship_rule_check
    CHECK (citizenship_rule IN ('open', 'us_only', 'uk_only', 'eu_only', 'other'));
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'opportunities_deadline_type_check') THEN
    ALTER TABLE public.opportunities ADD CONSTRAINT opportunities_deadline_type_check
    CHECK (deadline_type IN ('fixed', 'rolling', 'annual_estimate', 'unknown'));
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'opportunities_status_contract_check') THEN
    -- Drop old check if present
    ALTER TABLE public.opportunities DROP CONSTRAINT IF EXISTS opportunities_status_check;
    ALTER TABLE public.opportunities ADD CONSTRAINT opportunities_status_contract_check
    CHECK (status IN ('active', 'expired', 'needs_review', 'hidden', 'approved', 'pending_review', 'rejected'));
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'opportunities_translation_source_check') THEN
    ALTER TABLE public.opportunities ADD CONSTRAINT opportunities_translation_source_check
    CHECK (translation_source IN ('human', 'machine'));
  END IF;
END $$;

-- Migrate existing rows to populate new contract fields
UPDATE public.opportunities
SET
  organization = COALESCE(organization, org),
  official_url = COALESCE(official_url, url),
  deadline_date = COALESCE(deadline_date, deadline),
  directions = CASE WHEN directions IS NULL OR directions = '{}' THEN COALESCE(fields, '{}') ELSE directions END,
  slug = COALESCE(slug, lower(regexp_replace(COALESCE(title, 'opp-' || id::text), '[^a-zA-Z0-9]+', '-', 'g'))),
  title_i18n = CASE 
    WHEN title_i18n IS NULL OR title_i18n = '{}'::jsonb THEN 
      jsonb_build_object('ru', COALESCE(title, ''), 'en', COALESCE(title, ''), 'kk', COALESCE(title, ''))
    ELSE title_i18n
  END,
  description_i18n = CASE 
    WHEN description_i18n IS NULL OR description_i18n = '{}'::jsonb THEN 
      jsonb_build_object('ru', COALESCE(description, ''), 'en', COALESCE(description, ''), 'kk', COALESCE(description, ''))
    ELSE description_i18n
  END,
  summary_i18n = CASE 
    WHEN summary_i18n IS NULL OR summary_i18n = '{}'::jsonb THEN 
      jsonb_build_object(
        'ru', substr(COALESCE(description, ''), 1, 140),
        'en', substr(COALESCE(description, ''), 1, 140),
        'kk', substr(COALESCE(description, ''), 1, 140)
      )
    ELSE summary_i18n
  END,
  status = CASE
    WHEN status = 'approved' THEN 'active'
    WHEN status = 'pending_review' THEN 'needs_review'
    ELSE status
  END;

-- -----------------------------------------------------------------------------
-- 3. PORTFOLIOS & PORTFOLIO_ITEMS (SHARED CONTRACT)
-- -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS public.portfolios (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  export_locale text NOT NULL DEFAULT 'ru',
  paper_size text NOT NULL DEFAULT 'A4' CHECK (paper_size IN ('A4', 'Letter')),
  template text NOT NULL DEFAULT 'modern' CHECK (template IN ('classic', 'modern', 'compact')),
  public_slug text UNIQUE,
  is_public boolean NOT NULL DEFAULT false,
  show_contact boolean NOT NULL DEFAULT false,
  show_photo boolean NOT NULL DEFAULT false,
  summary_text text,
  updated_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT portfolios_user_unique UNIQUE (user_id)
);

ALTER TABLE public.portfolios ENABLE ROW LEVEL SECURITY;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.portfolios TO authenticated;
GRANT ALL ON public.portfolios TO service_role;

-- Backfill default portfolio for each user in profiles
INSERT INTO public.portfolios (user_id, public_slug)
SELECT 
  id as user_id, 
  'u-' || substr(id::text, 1, 8) as public_slug
FROM public.profiles
ON CONFLICT (user_id) DO NOTHING;

-- Extend portfolio_items with contract fields
ALTER TABLE public.portfolio_items ADD COLUMN IF NOT EXISTS portfolio_id uuid REFERENCES public.portfolios(id) ON DELETE CASCADE;
ALTER TABLE public.portfolio_items ADD COLUMN IF NOT EXISTS type text DEFAULT 'project';
ALTER TABLE public.portfolio_items ADD COLUMN IF NOT EXISTS organization text;
ALTER TABLE public.portfolio_items ADD COLUMN IF NOT EXISTS role text;
ALTER TABLE public.portfolio_items ADD COLUMN IF NOT EXISTS start_date date;
ALTER TABLE public.portfolio_items ADD COLUMN IF NOT EXISTS end_date date;
ALTER TABLE public.portfolio_items ADD COLUMN IF NOT EXISTS ongoing boolean DEFAULT false;
ALTER TABLE public.portfolio_items ADD COLUMN IF NOT EXISTS grades int[] DEFAULT '{}';
ALTER TABLE public.portfolio_items ADD COLUMN IF NOT EXISTS timing text DEFAULT 'all_year';
ALTER TABLE public.portfolio_items ADD COLUMN IF NOT EXISTS hours_per_week numeric;
ALTER TABLE public.portfolio_items ADD COLUMN IF NOT EXISTS weeks_per_year int;
ALTER TABLE public.portfolio_items ADD COLUMN IF NOT EXISTS recognition_level text DEFAULT 'school';
ALTER TABLE public.portfolio_items ADD COLUMN IF NOT EXISTS result_metric text;
ALTER TABLE public.portfolio_items ADD COLUMN IF NOT EXISTS links text[] DEFAULT '{}';
ALTER TABLE public.portfolio_items ADD COLUMN IF NOT EXISTS include_in_pdf boolean NOT NULL DEFAULT true;
ALTER TABLE public.portfolio_items ADD COLUMN IF NOT EXISTS position int DEFAULT 0;
ALTER TABLE public.portfolio_items ADD COLUMN IF NOT EXISTS updated_at timestamptz DEFAULT now();

-- Constraints for portfolio_items
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'portfolio_items_type_check') THEN
    ALTER TABLE public.portfolio_items ADD CONSTRAINT portfolio_items_type_check
    CHECK (type IN ('activity', 'honor', 'project', 'research', 'leadership', 'volunteering', 'test', 'language', 'course', 'skill'));
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'portfolio_items_timing_check') THEN
    ALTER TABLE public.portfolio_items ADD CONSTRAINT portfolio_items_timing_check
    CHECK (timing IN ('school_year', 'break', 'all_year'));
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'portfolio_items_recognition_level_check') THEN
    ALTER TABLE public.portfolio_items ADD CONSTRAINT portfolio_items_recognition_level_check
    CHECK (recognition_level IN ('school', 'local', 'regional', 'national', 'international'));
  END IF;
END $$;

-- Link existing portfolio items to their user's portfolio
UPDATE public.portfolio_items pi
SET portfolio_id = p.id
FROM public.portfolios p
WHERE pi.user_id = p.user_id AND pi.portfolio_id IS NULL;

-- -----------------------------------------------------------------------------
-- 4. EVIDENCE TABLE WITH STRICT TRUST CONSTRAINTS (R-A1-11)
-- -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS public.evidence (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  item_id uuid REFERENCES public.portfolio_items(id) ON DELETE CASCADE,
  kind text NOT NULL CHECK (kind IN ('file', 'link', 'photo')),
  storage_path_or_url text NOT NULL,
  title text NOT NULL,
  trust_level text NOT NULL DEFAULT 'self_reported' CHECK (trust_level IN ('self_reported', 'has_proof', 'confirmed_by_third_party')),
  confirmer_name text,
  is_public boolean NOT NULL DEFAULT false,
  file_size_bytes bigint DEFAULT 0,
  mime_type text,
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT evidence_third_party_confirmer_check CHECK (
    trust_level != 'confirmed_by_third_party' OR (confirmer_name IS NOT NULL AND length(trim(confirmer_name)) > 0)
  )
);

ALTER TABLE public.evidence ENABLE ROW LEVEL SECURITY;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.evidence TO authenticated;
GRANT ALL ON public.evidence TO service_role;

-- -----------------------------------------------------------------------------
-- 5. APPLICATIONS TABLE (Migrate from saved_opportunities)
-- -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS public.applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  opportunity_id text NOT NULL,
  status text NOT NULL DEFAULT 'saved' CHECK (status IN ('saved', 'preparing', 'submitted', 'result_received', 'declined')),
  result text CHECK (result IN ('accepted', 'rejected', 'waitlist') OR result IS NULL),
  personal_deadline date,
  notes text,
  updated_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT applications_user_opp_unique UNIQUE (user_id, opportunity_id)
);

ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.applications TO authenticated;
GRANT ALL ON public.applications TO service_role;

-- Migrate records from saved_opportunities if present
INSERT INTO public.applications (user_id, opportunity_id, status, notes, created_at, updated_at)
SELECT 
  user_id, 
  opportunity_id, 
  CASE 
    WHEN status IN ('saved', 'planning') THEN 'saved'
    WHEN status = 'in_progress' THEN 'preparing'
    WHEN status = 'submitted' THEN 'submitted'
    WHEN status = 'accepted' THEN 'result_received'
    WHEN status = 'rejected' THEN 'declined'
    ELSE 'saved'
  END as status,
  notes,
  created_at,
  now()
FROM public.saved_opportunities
ON CONFLICT (user_id, opportunity_id) DO NOTHING;

-- -----------------------------------------------------------------------------
-- 6. REMINDERS TABLE
-- -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS public.reminders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  application_id uuid REFERENCES public.applications(id) ON DELETE CASCADE,
  send_at timestamptz NOT NULL,
  channel text NOT NULL CHECK (channel IN ('telegram', 'email')),
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'sent', 'failed')),
  error text,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.reminders ENABLE ROW LEVEL SECURITY;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.reminders TO authenticated;
GRANT ALL ON public.reminders TO service_role;

-- -----------------------------------------------------------------------------
-- 7. MENTOR_MESSAGES TABLE (Migrate from chat_messages)
-- -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS public.mentor_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role text NOT NULL CHECK (role IN ('user', 'assistant', 'system')),
  content text NOT NULL,
  locale text NOT NULL DEFAULT 'ru',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.mentor_messages ENABLE ROW LEVEL SECURITY;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.mentor_messages TO authenticated;
GRANT ALL ON public.mentor_messages TO service_role;

-- Migrate records from chat_messages
INSERT INTO public.mentor_messages (id, user_id, role, content, created_at)
SELECT id, user_id, role, content, created_at
FROM public.chat_messages
ON CONFLICT (id) DO NOTHING;

-- -----------------------------------------------------------------------------
-- 8. PAYMENTS TABLE (Migrate from manual_payments)
-- -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS public.payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  plan text NOT NULL DEFAULT 'pro' CHECK (plan IN ('pro')),
  amount_kzt int NOT NULL DEFAULT 5000,
  method text NOT NULL DEFAULT 'kaspi_manual' CHECK (method IN ('kaspi_manual', 'card')),
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected', 'refunded')),
  proof_url text,
  receipt_note text,
  reviewed_by uuid REFERENCES auth.users(id),
  reviewed_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;
GRANT SELECT, INSERT ON public.payments TO authenticated;
GRANT ALL ON public.payments TO service_role;

-- Migrate existing manual_payments
INSERT INTO public.payments (id, user_id, amount_kzt, method, status, proof_url, receipt_note, reviewed_by, reviewed_at, created_at)
SELECT 
  id, 
  user_id, 
  amount_kzt, 
  'kaspi_manual', 
  status, 
  receipt_file_url, 
  receipt_note, 
  verified_by, 
  verified_at, 
  created_at
FROM public.manual_payments
ON CONFLICT (id) DO NOTHING;

-- -----------------------------------------------------------------------------
-- 9. EVENTS TABLE (STRICT NO PII) & REPORTS
-- -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS public.events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id_or_anon text NOT NULL,
  name text NOT NULL,
  props jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Trigger to verify NO PII in events.props
CREATE OR REPLACE FUNCTION public.check_event_props_no_pii()
RETURNS trigger AS $$
DECLARE
  props_str text;
BEGIN
  props_str := lower(NEW.props::text);
  -- Check for email patterns or common sensitive keys
  IF props_str ~* '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}' OR
     props_str ~* '"(email|phone|password|secret|token|telegram_chat_id)"\s*:' THEN
    RAISE EXCEPTION 'PII detected in event properties: %', NEW.props;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_check_event_props_no_pii ON public.events;
CREATE TRIGGER trg_check_event_props_no_pii
  BEFORE INSERT OR UPDATE ON public.events
  FOR EACH ROW EXECUTE FUNCTION public.check_event_props_no_pii();

ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
GRANT INSERT, SELECT ON public.events TO authenticated, anon;
GRANT ALL ON public.events TO service_role;

CREATE POLICY "events insert policy" ON public.events
FOR INSERT TO authenticated, anon
WITH CHECK (true);

CREATE POLICY "events select admin only" ON public.events
FOR SELECT TO authenticated
USING (public.is_admin(auth.uid()));

-- REPORTS TABLE
CREATE TABLE IF NOT EXISTS public.reports (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  target_type text NOT NULL CHECK (target_type IN ('opportunity', 'user', 'other')),
  target_id text NOT NULL,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'reviewed', 'resolved', 'dismissed')),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.reports ENABLE ROW LEVEL SECURITY;
GRANT SELECT, INSERT ON public.reports TO authenticated, anon;
GRANT ALL ON public.reports TO service_role;

CREATE POLICY "reports insert" ON public.reports
FOR INSERT TO authenticated, anon
WITH CHECK (true);

CREATE POLICY "reports read admin or own" ON public.reports
FOR SELECT TO authenticated
USING (auth.uid() = user_id OR public.is_admin(auth.uid()));

CREATE POLICY "reports update admin only" ON public.reports
FOR UPDATE TO authenticated
USING (public.is_admin(auth.uid()))
WITH CHECK (public.is_admin(auth.uid()));

-- -----------------------------------------------------------------------------
-- 10. CONSENT_LOG & AUDIT_LOG TABLES
-- -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS public.consent_log (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  kind text NOT NULL,
  text_version text NOT NULL,
  given_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.consent_log ENABLE ROW LEVEL SECURITY;
GRANT SELECT, INSERT ON public.consent_log TO authenticated;
GRANT ALL ON public.consent_log TO service_role;

CREATE POLICY "own consent_log select" ON public.consent_log
FOR SELECT TO authenticated
USING (auth.uid() = user_id OR public.is_admin(auth.uid()));

CREATE POLICY "own consent_log insert" ON public.consent_log
FOR INSERT TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE TABLE IF NOT EXISTS public.audit_log (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  actor_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  action text NOT NULL,
  target text NOT NULL,
  details jsonb DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.audit_log ENABLE ROW LEVEL SECURITY;
GRANT SELECT, INSERT ON public.audit_log TO authenticated;
GRANT ALL ON public.audit_log TO service_role;

CREATE POLICY "audit_log admin only" ON public.audit_log
FOR ALL TO authenticated
USING (public.is_admin(auth.uid()))
WITH CHECK (public.is_admin(auth.uid()));

-- -----------------------------------------------------------------------------
-- 11. ROW-LEVEL SECURITY POLICIES FOR NEW CONTRACT TABLES
-- -----------------------------------------------------------------------------

-- PORTFOLIOS RLS
DROP POLICY IF EXISTS "own portfolio select" ON public.portfolios;
CREATE POLICY "own portfolio select" ON public.portfolios
FOR SELECT TO authenticated
USING (auth.uid() = user_id OR public.is_admin(auth.uid()));

DROP POLICY IF EXISTS "own portfolio modify" ON public.portfolios;
CREATE POLICY "own portfolio modify" ON public.portfolios
FOR ALL TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- EVIDENCE RLS
DROP POLICY IF EXISTS "own evidence select" ON public.evidence;
CREATE POLICY "own evidence select" ON public.evidence
FOR SELECT TO authenticated
USING (auth.uid() = user_id OR public.is_admin(auth.uid()));

DROP POLICY IF EXISTS "own evidence modify" ON public.evidence;
CREATE POLICY "own evidence modify" ON public.evidence
FOR ALL TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- APPLICATIONS RLS
DROP POLICY IF EXISTS "own applications select" ON public.applications;
CREATE POLICY "own applications select" ON public.applications
FOR SELECT TO authenticated
USING (auth.uid() = user_id OR public.is_admin(auth.uid()));

DROP POLICY IF EXISTS "own applications modify" ON public.applications;
CREATE POLICY "own applications modify" ON public.applications
FOR ALL TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- REMINDERS RLS
DROP POLICY IF EXISTS "own reminders select" ON public.reminders;
CREATE POLICY "own reminders select" ON public.reminders
FOR SELECT TO authenticated
USING (auth.uid() = user_id OR public.is_admin(auth.uid()));

DROP POLICY IF EXISTS "own reminders modify" ON public.reminders;
CREATE POLICY "own reminders modify" ON public.reminders
FOR ALL TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- MENTOR_MESSAGES RLS (Strict Minor Privacy)
DROP POLICY IF EXISTS "own mentor_messages select" ON public.mentor_messages;
CREATE POLICY "own mentor_messages select" ON public.mentor_messages
FOR SELECT TO authenticated
USING (auth.uid() = user_id OR public.is_admin(auth.uid()));

DROP POLICY IF EXISTS "own mentor_messages modify" ON public.mentor_messages;
CREATE POLICY "own mentor_messages modify" ON public.mentor_messages
FOR ALL TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- PAYMENTS RLS
DROP POLICY IF EXISTS "own payments select" ON public.payments;
CREATE POLICY "own payments select" ON public.payments
FOR SELECT TO authenticated
USING (auth.uid() = user_id OR public.is_admin(auth.uid()));

DROP POLICY IF EXISTS "own payments insert" ON public.payments;
CREATE POLICY "own payments insert" ON public.payments
FOR INSERT TO authenticated
WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "admin payments update" ON public.payments;
CREATE POLICY "admin payments update" ON public.payments
FOR UPDATE TO authenticated
USING (public.is_admin(auth.uid()))
WITH CHECK (public.is_admin(auth.uid()));

-- -----------------------------------------------------------------------------
-- 12. SANITIZED PUBLIC PORTFOLIO VIEW (R-A1-03)
-- -----------------------------------------------------------------------------
-- NEVER exposes email, phone, birth_year, or telegram_chat_id!
-- Contact information is displayed ONLY IF show_contact = true AND parental_consent != 'pending'.
-- Items are included ONLY IF include_in_pdf = true.
-- Evidence links are included ONLY IF evidence.is_public = true.

CREATE OR REPLACE VIEW public.public_portfolios AS
SELECT 
  p.public_slug,
  p.export_locale,
  p.template,
  p.summary_text,
  pr.display_name,
  pr.grade,
  pr.school,
  pr.city,
  pr.country_code,
  -- Contact fields: strictly gated by show_contact AND parental consent!
  CASE 
    WHEN p.show_contact = true AND pr.parental_consent != 'pending' THEN pr.email 
    ELSE NULL 
  END as contact_email,
  -- Avatar: gated by show_photo
  CASE 
    WHEN p.show_photo = true THEN pr.avatar_url 
    ELSE NULL 
  END as photo_url,
  -- Filtered portfolio items as JSON array
  COALESCE(
    (
      SELECT jsonb_agg(
        jsonb_build_object(
          'id', pi.id,
          'type', pi.type,
          'title', pi.title,
          'organization', pi.organization,
          'role', pi.role,
          'description', pi.description,
          'start_date', pi.start_date,
          'end_date', pi.end_date,
          'ongoing', pi.ongoing,
          'timing', pi.timing,
          'recognition_level', pi.recognition_level,
          'result_metric', pi.result_metric,
          'position', pi.position,
          -- Evidence links: only public ones
          'evidence', COALESCE(
            (
              SELECT jsonb_agg(
                jsonb_build_object(
                  'kind', e.kind,
                  'title', e.title,
                  'url', e.storage_path_or_url,
                  'trust_level', e.trust_level
                )
              )
              FROM public.evidence e
              WHERE e.item_id = pi.id AND e.is_public = true
            ),
            '[]'::jsonb
          )
        ) ORDER BY pi.position ASC, pi.created_at DESC
      )
      FROM public.portfolio_items pi
      WHERE pi.portfolio_id = p.id AND pi.include_in_pdf = true
    ),
    '[]'::jsonb
  ) as items
FROM public.portfolios p
JOIN public.profiles pr ON p.user_id = pr.id
WHERE p.is_public = true AND pr.parental_consent != 'pending';

-- Grant read access to public portfolio view
GRANT SELECT ON public.public_portfolios TO authenticated, anon;

-- -----------------------------------------------------------------------------
-- 13. INDEXES FOR PERFORMANCE & PAGINATION (R-A1-09)
-- -----------------------------------------------------------------------------

CREATE INDEX IF NOT EXISTS idx_opportunities_contract_status_deadline 
ON public.opportunities (status, deadline_date);

CREATE INDEX IF NOT EXISTS idx_opportunities_directions_gin 
ON public.opportunities USING GIN (directions);

CREATE INDEX IF NOT EXISTS idx_opportunities_slug 
ON public.opportunities (slug);

CREATE INDEX IF NOT EXISTS idx_applications_user_status 
ON public.applications (user_id, status);

CREATE INDEX IF NOT EXISTS idx_portfolios_public_slug 
ON public.portfolios (public_slug);

CREATE INDEX IF NOT EXISTS idx_evidence_user_item 
ON public.evidence (user_id, item_id);

CREATE INDEX IF NOT EXISTS idx_reminders_status_send_at 
ON public.reminders (status, send_at);

CREATE INDEX IF NOT EXISTS idx_events_name_created 
ON public.events (name, created_at);
