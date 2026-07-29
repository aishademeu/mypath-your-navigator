CREATE TABLE public.opportunity_unlocks (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL,
  opportunity_id text NOT NULL,
  price_kzt integer NOT NULL DEFAULT 200,
  plan jsonb,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now(),
  UNIQUE (user_id, opportunity_id)
);

GRANT SELECT, INSERT, UPDATE ON public.opportunity_unlocks TO authenticated;
GRANT ALL ON public.opportunity_unlocks TO service_role;

ALTER TABLE public.opportunity_unlocks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "own unlocks select" ON public.opportunity_unlocks FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "own unlocks insert" ON public.opportunity_unlocks FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "own unlocks update" ON public.opportunity_unlocks FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_opportunity_unlocks_updated_at
BEFORE UPDATE ON public.opportunity_unlocks
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();