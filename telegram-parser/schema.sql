-- =========================================================
-- SQL Схема для таблицы opportunities в Supabase
-- Выполните этот скрипт в Supabase SQL Editor
-- =========================================================

-- 1. Создаем таблицу, если она еще не создана
CREATE TABLE IF NOT EXISTS public.opportunities (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    org TEXT NOT NULL,
    category TEXT NOT NULL,
    description TEXT NOT NULL,
    deadline DATE,
    min_age INT,
    max_age INT,
    min_grade INT,
    max_grade INT,
    countries JSONB DEFAULT '"worldwide"'::jsonb,
    cost TEXT DEFAULT 'free', -- 'free', 'paid', 'stipend'
    format TEXT DEFAULT 'online', -- 'online', 'in-person', 'hybrid'
    verified BOOLEAN DEFAULT false,
    requirements TEXT[] DEFAULT '{}',
    tags TEXT[] DEFAULT '{}',
    fields TEXT[] DEFAULT '{}',
    url TEXT,
    status TEXT DEFAULT 'approved', -- 'approved', 'pending_review', 'rejected'
    source_channel TEXT,
    source_message_id BIGINT,
    raw_text TEXT,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Индекс для предотвращения дубликатов по каналу и ID сообщения
CREATE UNIQUE INDEX IF NOT EXISTS idx_opportunities_source_msg 
ON public.opportunities (source_channel, source_message_id);

-- 3. Индекс для быстрого поиска по дедлайну и статусу
CREATE INDEX IF NOT EXISTS idx_opportunities_status_deadline 
ON public.opportunities (status, deadline);

-- 4. Включаем Row Level Security (RLS)
ALTER TABLE public.opportunities ENABLE ROW LEVEL SECURITY;

-- 5. Выдаем права доступа для REST API ролей
GRANT ALL ON TABLE public.opportunities TO postgres, anon, authenticated, service_role;

-- 6. Безопасное пересоздание политик доступа
DROP POLICY IF EXISTS "Public read access for approved opportunities" ON public.opportunities;
CREATE POLICY "Public read access for approved opportunities"
ON public.opportunities FOR SELECT
USING (true);

DROP POLICY IF EXISTS "Allow insert for anon and service" ON public.opportunities;
CREATE POLICY "Allow insert for anon and service"
ON public.opportunities FOR INSERT
WITH CHECK (true);

DROP POLICY IF EXISTS "Allow update for anon and service" ON public.opportunities;
CREATE POLICY "Allow update for anon and service"
ON public.opportunities FOR UPDATE
USING (true);

-- 7. Перезагрузка кеша схемы PostgREST
NOTIFY pgrst, 'reload schema';
