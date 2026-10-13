-- Migration: Add application_tasks table and update saved_opportunities status constraint
-- File: 20260930120000_application_tasks.sql

-- 1. Add application_tasks table
CREATE TABLE IF NOT EXISTS public.application_tasks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  opportunity_id text NOT NULL,
  title text NOT NULL,
  completed boolean NOT NULL DEFAULT false,
  due_date date,
  notes text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.application_tasks ENABLE ROW LEVEL SECURITY;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.application_tasks TO authenticated;
GRANT ALL ON public.application_tasks TO service_role;

DROP POLICY IF EXISTS "own tasks" ON public.application_tasks;
CREATE POLICY "own tasks" ON public.application_tasks
  FOR ALL TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_application_tasks_user_opp
  ON public.application_tasks (user_id, opportunity_id);

-- 2. Update saved_opportunities status constraint to support full application lifecycle
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM pg_constraint
    WHERE conname = 'saved_opportunities_status_check'
  ) THEN
    ALTER TABLE public.saved_opportunities DROP CONSTRAINT saved_opportunities_status_check;
  END IF;
END $$;

ALTER TABLE public.saved_opportunities
  ADD CONSTRAINT saved_opportunities_status_check
  CHECK (status IN ('saved','planning','in_progress','submitted','accepted','rejected','archived'));

-- 3. Add notes column to saved_opportunities if not exists
ALTER TABLE public.saved_opportunities ADD COLUMN IF NOT EXISTS notes text;

-- 4. Allow parents to view linked student's applications (high-level only, no task details)
DROP POLICY IF EXISTS "linked parent view applications" ON public.saved_opportunities;
CREATE POLICY "linked parent view applications" ON public.saved_opportunities
FOR SELECT TO authenticated
USING (auth.uid() = user_id OR public.is_linked_parent(auth.uid(), user_id) OR public.is_admin(auth.uid()));
