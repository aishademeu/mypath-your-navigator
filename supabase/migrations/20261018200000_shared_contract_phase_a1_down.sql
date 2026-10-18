-- =============================================================================
-- Migration Down: 20261018200000_shared_contract_phase_a1_down.sql
-- Description: Reversible rollback for SHARED CONTRACT Phase A1
-- =============================================================================

DROP VIEW IF EXISTS public.public_portfolios;

DROP TABLE IF EXISTS public.audit_log CASCADE;
DROP TABLE IF EXISTS public.consent_log CASCADE;
DROP TABLE IF EXISTS public.reports CASCADE;
DROP TABLE IF EXISTS public.events CASCADE;
DROP TABLE IF EXISTS public.payments CASCADE;
DROP TABLE IF EXISTS public.mentor_messages CASCADE;
DROP TABLE IF EXISTS public.reminders CASCADE;
DROP TABLE IF EXISTS public.applications CASCADE;
DROP TABLE IF EXISTS public.evidence CASCADE;

-- Revert columns added to portfolio_items
ALTER TABLE public.portfolio_items DROP COLUMN IF EXISTS updated_at;
ALTER TABLE public.portfolio_items DROP COLUMN IF EXISTS position;
ALTER TABLE public.portfolio_items DROP COLUMN IF EXISTS include_in_pdf;
ALTER TABLE public.portfolio_items DROP COLUMN IF EXISTS links;
ALTER TABLE public.portfolio_items DROP COLUMN IF EXISTS result_metric;
ALTER TABLE public.portfolio_items DROP COLUMN IF EXISTS recognition_level;
ALTER TABLE public.portfolio_items DROP COLUMN IF EXISTS weeks_per_year;
ALTER TABLE public.portfolio_items DROP COLUMN IF EXISTS hours_per_week;
ALTER TABLE public.portfolio_items DROP COLUMN IF EXISTS timing;
ALTER TABLE public.portfolio_items DROP COLUMN IF EXISTS grades;
ALTER TABLE public.portfolio_items DROP COLUMN IF EXISTS ongoing;
ALTER TABLE public.portfolio_items DROP COLUMN IF EXISTS end_date;
ALTER TABLE public.portfolio_items DROP COLUMN IF EXISTS start_date;
ALTER TABLE public.portfolio_items DROP COLUMN IF EXISTS role;
ALTER TABLE public.portfolio_items DROP COLUMN IF EXISTS organization;
ALTER TABLE public.portfolio_items DROP COLUMN IF EXISTS type;
ALTER TABLE public.portfolio_items DROP COLUMN IF EXISTS portfolio_id;

DROP TABLE IF EXISTS public.portfolios CASCADE;

-- Revert columns added to opportunities
ALTER TABLE public.opportunities DROP COLUMN IF EXISTS verification_note;
ALTER TABLE public.opportunities DROP COLUMN IF EXISTS verified_by;
ALTER TABLE public.opportunities DROP COLUMN IF EXISTS verified_at;
ALTER TABLE public.opportunities DROP COLUMN IF EXISTS translation_source;
ALTER TABLE public.opportunities DROP COLUMN IF EXISTS cycle_year;
ALTER TABLE public.opportunities DROP COLUMN IF EXISTS deadline_date;
ALTER TABLE public.opportunities DROP COLUMN IF EXISTS deadline_type;
ALTER TABLE public.opportunities DROP COLUMN IF EXISTS language_requirements;
ALTER TABLE public.opportunities DROP COLUMN IF EXISTS citizenship_note;
ALTER TABLE public.opportunities DROP COLUMN IF EXISTS citizenship_rule;
ALTER TABLE public.opportunities DROP COLUMN IF EXISTS excluded_countries;
ALTER TABLE public.opportunities DROP COLUMN IF EXISTS eligibility_countries;
ALTER TABLE public.opportunities DROP COLUMN IF EXISTS location;
ALTER TABLE public.opportunities DROP COLUMN IF EXISTS cost_currency;
ALTER TABLE public.opportunities DROP COLUMN IF EXISTS cost_amount;
ALTER TABLE public.opportunities DROP COLUMN IF EXISTS cost_type;
ALTER TABLE public.opportunities DROP COLUMN IF EXISTS official_url;
ALTER TABLE public.opportunities DROP COLUMN IF EXISTS requirements_checklist;
ALTER TABLE public.opportunities DROP COLUMN IF EXISTS summary_i18n;
ALTER TABLE public.opportunities DROP COLUMN IF EXISTS description_i18n;
ALTER TABLE public.opportunities DROP COLUMN IF EXISTS directions;
ALTER TABLE public.opportunities DROP COLUMN IF EXISTS organization;
ALTER TABLE public.opportunities DROP COLUMN IF EXISTS title_i18n;
ALTER TABLE public.opportunities DROP COLUMN IF EXISTS slug;

-- Revert columns added to profiles
ALTER TABLE public.profiles DROP COLUMN IF EXISTS deletion_requested_at;
ALTER TABLE public.profiles DROP COLUMN IF EXISTS plan_expires_at;
ALTER TABLE public.profiles DROP COLUMN IF EXISTS plan;
ALTER TABLE public.profiles DROP COLUMN IF EXISTS parental_consent;
ALTER TABLE public.profiles DROP COLUMN IF EXISTS telegram_chat_id;
ALTER TABLE public.profiles DROP COLUMN IF EXISTS reminder_channel;
ALTER TABLE public.profiles DROP COLUMN IF EXISTS timezone;
ALTER TABLE public.profiles DROP COLUMN IF EXISTS locale;
ALTER TABLE public.profiles DROP COLUMN IF EXISTS languages;
ALTER TABLE public.profiles DROP COLUMN IF EXISTS goals;
ALTER TABLE public.profiles DROP COLUMN IF EXISTS interests;
ALTER TABLE public.profiles DROP COLUMN IF EXISTS citizenship_codes;
ALTER TABLE public.profiles DROP COLUMN IF EXISTS country_code;
ALTER TABLE public.profiles DROP COLUMN IF EXISTS birth_year;
ALTER TABLE public.profiles DROP COLUMN IF EXISTS display_name;
