-- =========================================================
-- Migration: MyPath Core Schema & Security Policies
-- =========================================================

-- 1. Extend profiles table with role, banner, mini_bio, school, city, language
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS role text NOT NULL DEFAULT 'student';
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS banner_url text;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS mini_bio text;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS school text;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS city text;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS language text NOT NULL DEFAULT 'en';

-- Constraint on role
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'profiles_role_check'
  ) THEN
    ALTER TABLE public.profiles ADD CONSTRAINT profiles_role_check 
    CHECK (role IN ('student', 'parent', 'admin'));
  END IF;
END $$;

-- 2. Role helper functions
CREATE OR REPLACE FUNCTION public.is_admin(_user_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = _user_id AND role = 'admin'
  );
$$;

CREATE OR REPLACE FUNCTION public.is_parent(_user_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = _user_id AND role = 'parent'
  );
$$;

-- 3. Discovery sessions table (Adaptive Discovery)
CREATE TABLE IF NOT EXISTS public.discovery_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  status text NOT NULL DEFAULT 'in_progress' CHECK (status IN ('in_progress', 'completed')),
  current_question text,
  history jsonb NOT NULL DEFAULT '[]'::jsonb,
  insights jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.discovery_sessions ENABLE ROW LEVEL SECURITY;
GRANT SELECT, INSERT, UPDATE ON public.discovery_sessions TO authenticated;
GRANT ALL ON public.discovery_sessions TO service_role;

DROP POLICY IF EXISTS "own discovery sessions" ON public.discovery_sessions;
CREATE POLICY "own discovery sessions" ON public.discovery_sessions
FOR ALL TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- 4. Career hypotheses table
CREATE TABLE IF NOT EXISTS public.career_hypotheses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  direction_name text NOT NULL,
  why_it_appeared text NOT NULL,
  evidence text[] NOT NULL DEFAULT '{}',
  relevant_strengths text[] NOT NULL DEFAULT '{}',
  relevant_interests text[] NOT NULL DEFAULT '{}',
  unknowns text[] NOT NULL DEFAULT '{}',
  skills_to_explore text[] NOT NULL DEFAULT '{}',
  next_experiment text NOT NULL,
  status text NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'strengthened', 'weakened', 'explored', 'archived')),
  version int NOT NULL DEFAULT 1,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.career_hypotheses ENABLE ROW LEVEL SECURITY;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.career_hypotheses TO authenticated;
GRANT ALL ON public.career_hypotheses TO service_role;

DROP POLICY IF EXISTS "own career hypotheses" ON public.career_hypotheses;
CREATE POLICY "own career hypotheses" ON public.career_hypotheses
FOR ALL TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- 5. My Path actions table (Single primary next step)
CREATE TABLE IF NOT EXISTS public.my_path_actions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  action text NOT NULL,
  why_it_matters text NOT NULL,
  expected_outcome text NOT NULL,
  supporting_recommendation text,
  status text NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'completed', 'skipped')),
  created_at timestamptz NOT NULL DEFAULT now(),
  completed_at timestamptz
);

ALTER TABLE public.my_path_actions ENABLE ROW LEVEL SECURITY;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.my_path_actions TO authenticated;
GRANT ALL ON public.my_path_actions TO service_role;

DROP POLICY IF EXISTS "own my path actions" ON public.my_path_actions;
CREATE POLICY "own my path actions" ON public.my_path_actions
FOR ALL TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- 6. Parent-Student relationships & Minor Privacy
CREATE TABLE IF NOT EXISTS public.parent_student_links (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  parent_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  student_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  invite_code text UNIQUE,
  student_email text,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.parent_student_links ENABLE ROW LEVEL SECURITY;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.parent_student_links TO authenticated;
GRANT ALL ON public.parent_student_links TO service_role;

DROP POLICY IF EXISTS "parent or student links access" ON public.parent_student_links;
CREATE POLICY "parent or student links access" ON public.parent_student_links
FOR ALL TO authenticated
USING (auth.uid() = parent_id OR auth.uid() = student_id)
WITH CHECK (auth.uid() = parent_id OR auth.uid() = student_id);

-- Privacy check function for parent viewing linked student high-level data
CREATE OR REPLACE FUNCTION public.is_linked_parent(_parent_id uuid, _student_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.parent_student_links
    WHERE parent_id = _parent_id
      AND student_id = _student_id
      AND status = 'approved'
  );
$$;

-- Allow parents to view high-level profile of linked student
DROP POLICY IF EXISTS "linked parent view profile" ON public.profiles;
CREATE POLICY "linked parent view profile" ON public.profiles
FOR SELECT TO authenticated
USING (auth.uid() = id OR public.is_linked_parent(auth.uid(), id) OR public.is_admin(auth.uid()));

-- Allow parents to view linked student's portfolio items
DROP POLICY IF EXISTS "linked parent view portfolio" ON public.portfolio_items;
CREATE POLICY "linked parent view portfolio" ON public.portfolio_items
FOR SELECT TO authenticated
USING (auth.uid() = user_id OR public.is_linked_parent(auth.uid(), user_id) OR public.is_admin(auth.uid()));

-- Allow parents to view linked student's career hypotheses
DROP POLICY IF EXISTS "linked parent view hypotheses" ON public.career_hypotheses;
CREATE POLICY "linked parent view hypotheses" ON public.career_hypotheses
FOR SELECT TO authenticated
USING (auth.uid() = user_id OR public.is_linked_parent(auth.uid(), user_id) OR public.is_admin(auth.uid()));

-- Allow parents to view linked student's active my path action
DROP POLICY IF EXISTS "linked parent view actions" ON public.my_path_actions;
CREATE POLICY "linked parent view actions" ON public.my_path_actions
FOR SELECT TO authenticated
USING (auth.uid() = user_id OR public.is_linked_parent(auth.uid(), user_id) OR public.is_admin(auth.uid()));

-- STRICT MINOR PRIVACY: Parents CANNOT access chat_messages
-- Verify that chat_messages strictly restricts to student owner or admin
DROP POLICY IF EXISTS "own chat" ON public.chat_messages;
CREATE POLICY "own chat" ON public.chat_messages
FOR ALL TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- 7. Secure Opportunities Table
CREATE TABLE IF NOT EXISTS public.opportunities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  org text NOT NULL,
  category text NOT NULL,
  description text NOT NULL,
  deadline date,
  min_age int,
  max_age int,
  min_grade int,
  max_grade int,
  countries jsonb DEFAULT '"worldwide"'::jsonb,
  cost text DEFAULT 'free',
  format text DEFAULT 'online',
  verified boolean DEFAULT false,
  requirements text[] DEFAULT '{}',
  tags text[] DEFAULT '{}',
  fields text[] DEFAULT '{}',
  url text,
  source_url text,
  source_channel text,
  source_message_id bigint,
  raw_text text,
  status text NOT NULL DEFAULT 'approved' CHECK (status IN ('approved', 'pending_review', 'rejected', 'expired')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Deduplication index
CREATE UNIQUE INDEX IF NOT EXISTS idx_opportunities_source_msg 
ON public.opportunities (source_channel, source_message_id)
WHERE source_channel IS NOT NULL AND source_message_id IS NOT NULL;

CREATE INDEX IF NOT EXISTS idx_opportunities_status_deadline 
ON public.opportunities (status, deadline);

ALTER TABLE public.opportunities ENABLE ROW LEVEL SECURITY;
GRANT SELECT ON public.opportunities TO authenticated, anon;
GRANT ALL ON public.opportunities TO service_role;

-- Replace insecure anon policies with safe ones
DROP POLICY IF EXISTS "Public read access for approved opportunities" ON public.opportunities;
CREATE POLICY "Public read access for approved opportunities" ON public.opportunities
FOR SELECT TO authenticated, anon
USING (status = 'approved' OR public.is_admin(auth.uid()));

DROP POLICY IF EXISTS "Admin write opportunities" ON public.opportunities;
CREATE POLICY "Admin write opportunities" ON public.opportunities
FOR ALL TO authenticated
USING (public.is_admin(auth.uid()))
WITH CHECK (public.is_admin(auth.uid()));

DROP POLICY IF EXISTS "Allow insert for anon and service" ON public.opportunities;
DROP POLICY IF EXISTS "Allow update for anon and service" ON public.opportunities;

-- 8. Telegram sources management
CREATE TABLE IF NOT EXISTS public.telegram_sources (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  channel_username text NOT NULL UNIQUE,
  title text,
  enabled boolean NOT NULL DEFAULT true,
  last_scraped_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.telegram_sources ENABLE ROW LEVEL SECURITY;
GRANT SELECT ON public.telegram_sources TO authenticated;
GRANT ALL ON public.telegram_sources TO service_role;

DROP POLICY IF EXISTS "Admin manage telegram sources" ON public.telegram_sources;
CREATE POLICY "Admin manage telegram sources" ON public.telegram_sources
FOR ALL TO authenticated
USING (public.is_admin(auth.uid()))
WITH CHECK (public.is_admin(auth.uid()));

-- Insert initial channels
INSERT INTO public.telegram_sources (channel_username, title)
VALUES 
  ('edu_strategies', 'Educational Strategies'),
  ('deeppurplehub', 'Deep Purple Hub'),
  ('asselibadulla', 'Assel Ibadulla Opportunities')
ON CONFLICT (channel_username) DO NOTHING;

-- 9. Manual Payments (for founder 5,000 KZT verification flow)
CREATE TABLE IF NOT EXISTS public.manual_payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  amount_kzt int NOT NULL DEFAULT 5000,
  receipt_note text,
  receipt_file_url text,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  verified_by uuid REFERENCES auth.users(id),
  verified_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.manual_payments ENABLE ROW LEVEL SECURITY;
GRANT SELECT, INSERT ON public.manual_payments TO authenticated;
GRANT ALL ON public.manual_payments TO service_role;

DROP POLICY IF EXISTS "own manual payments select" ON public.manual_payments;
CREATE POLICY "own manual payments select" ON public.manual_payments
FOR SELECT TO authenticated
USING (auth.uid() = user_id OR public.is_admin(auth.uid()));

DROP POLICY IF EXISTS "own manual payments insert" ON public.manual_payments;
CREATE POLICY "own manual payments insert" ON public.manual_payments
FOR INSERT TO authenticated
WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "admin manual payments update" ON public.manual_payments;
CREATE POLICY "admin manual payments update" ON public.manual_payments
FOR UPDATE TO authenticated
USING (public.is_admin(auth.uid()))
WITH CHECK (public.is_admin(auth.uid()));
