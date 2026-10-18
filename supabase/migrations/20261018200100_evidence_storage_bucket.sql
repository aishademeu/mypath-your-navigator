-- =============================================================================
-- Migration: 20261018200100_evidence_storage_bucket.sql
-- Description: Create private evidence bucket and storage RLS policies (R-A1-04)
-- =============================================================================

-- Create private evidence bucket if it does not already exist
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'evidence',
  'evidence',
  false,
  10485760, -- 10 MB max file size
  ARRAY['application/pdf', 'image/png', 'image/jpeg', 'image/webp']
)
ON CONFLICT (id) DO UPDATE SET
  public = false,
  file_size_limit = 10485760,
  allowed_mime_types = ARRAY['application/pdf', 'image/png', 'image/jpeg', 'image/webp'];

-- Enable RLS on storage.objects if not already enabled
ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

-- 1. User can upload to their own folder: user_id/*
DROP POLICY IF EXISTS "evidence_user_upload" ON storage.objects;
CREATE POLICY "evidence_user_upload" ON storage.objects
FOR INSERT TO authenticated
WITH CHECK (
  bucket_id = 'evidence' AND
  (storage.foldername(name))[1] = auth.uid()::text
);

-- 2. User can read their own evidence files
DROP POLICY IF EXISTS "evidence_user_select" ON storage.objects;
CREATE POLICY "evidence_user_select" ON storage.objects
FOR SELECT TO authenticated
USING (
  bucket_id = 'evidence' AND
  (
    (storage.foldername(name))[1] = auth.uid()::text
    OR public.is_admin(auth.uid())
  )
);

-- 3. User can delete their own evidence files
DROP POLICY IF EXISTS "evidence_user_delete" ON storage.objects;
CREATE POLICY "evidence_user_delete" ON storage.objects
FOR DELETE TO authenticated
USING (
  bucket_id = 'evidence' AND
  (
    (storage.foldername(name))[1] = auth.uid()::text
    OR public.is_admin(auth.uid())
  )
);
