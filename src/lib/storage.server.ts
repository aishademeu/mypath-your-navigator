import { supabaseAdmin } from "@/integrations/supabase/client.server";

export const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024; // 10 MB
export const USER_STORAGE_QUOTA_BYTES = 100 * 1024 * 1024; // 100 MB

export type AllowedMimeType = "application/pdf" | "image/png" | "image/jpeg" | "image/webp";

const ALLOWED_MIME_TYPES: Set<AllowedMimeType> = new Set([
  "application/pdf",
  "image/png",
  "image/jpeg",
  "image/webp",
]);

/**
 * Validates a file's content by inspecting its magic bytes (file signature),
 * ensuring the upload is not masquerading through a forged extension or Content-Type header.
 */
export function verifyFileContentMagicBytes(buffer: Uint8Array): {
  valid: boolean;
  detectedMime?: AllowedMimeType;
  error?: string;
} {
  if (!buffer || buffer.length < 12) {
    return { valid: false, error: "File buffer is too small or empty" };
  }

  // 1. PDF: %PDF- (0x25 0x50 0x44 0x46)
  if (
    buffer[0] === 0x25 &&
    buffer[1] === 0x50 &&
    buffer[2] === 0x44 &&
    buffer[3] === 0x46
  ) {
    return { valid: true, detectedMime: "application/pdf" };
  }

  // 2. PNG: 89 50 4E 47 0D 0A 1A 0A
  if (
    buffer[0] === 0x89 &&
    buffer[1] === 0x50 &&
    buffer[2] === 0x4e &&
    buffer[3] === 0x47 &&
    buffer[4] === 0x0d &&
    buffer[5] === 0x0a &&
    buffer[6] === 0x1a &&
    buffer[7] === 0x0a
  ) {
    return { valid: true, detectedMime: "image/png" };
  }

  // 3. JPEG: FF D8 FF
  if (buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff) {
    return { valid: true, detectedMime: "image/jpeg" };
  }

  // 4. WebP: RIFF....WEBP (0x52 0x49 0x46 0x46 .... 0x57 0x45 0x42 0x50)
  if (
    buffer[0] === 0x52 &&
    buffer[1] === 0x49 &&
    buffer[2] === 0x46 &&
    buffer[3] === 0x46 &&
    buffer[8] === 0x57 &&
    buffer[9] === 0x45 &&
    buffer[10] === 0x42 &&
    buffer[11] === 0x50
  ) {
    return { valid: true, detectedMime: "image/webp" };
  }

  return {
    valid: false,
    error: "Disallowed or unrecognized file content. Only PDF, PNG, JPG, and WEBP files are permitted.",
  };
}

/**
 * Calculates user's currently consumed storage in the evidence bucket.
 */
export async function getUserEvidenceStorageUsage(userId: string): Promise<number> {
  const { data, error } = await (supabaseAdmin as any)
    .from("evidence")
    .select("file_size_bytes")
    .eq("user_id", userId);

  if (error || !data) return 0;

  return data.reduce((acc: number, item: any) => acc + (Number(item.file_size_bytes) || 0), 0);
}

/**
 * Validates file upload preconditions: max size, magic bytes verification, and user 100MB quota.
 */
export async function validateFileUpload(
  userId: string,
  buffer: Uint8Array,
  declaredMimeType?: string,
): Promise<{ valid: boolean; error?: string; mimeType?: AllowedMimeType }> {
  // 1. File size check (max 10 MB)
  if (buffer.length > MAX_FILE_SIZE_BYTES) {
    return {
      valid: false,
      error: `File exceeds maximum allowed size of 10 MB (received ${(buffer.length / (1024 * 1024)).toFixed(2)} MB)`,
    };
  }

  // 2. Content magic bytes check
  const magicCheck = verifyFileContentMagicBytes(buffer);
  if (!magicCheck.valid || !magicCheck.detectedMime) {
    return { valid: false, error: magicCheck.error };
  }

  if (declaredMimeType && declaredMimeType !== magicCheck.detectedMime) {
    return {
      valid: false,
      error: `Declared content-type "${declaredMimeType}" does not match detected content "${magicCheck.detectedMime}"`,
    };
  }

  // 3. User quota check (100 MB per user)
  const currentUsage = await getUserEvidenceStorageUsage(userId);
  if (currentUsage + buffer.length > USER_STORAGE_QUOTA_BYTES) {
    return {
      valid: false,
      error: `Storage quota exceeded: 100 MB limit reached (${((currentUsage + buffer.length) / (1024 * 1024)).toFixed(1)} MB needed)`,
    };
  }

  return { valid: true, mimeType: magicCheck.detectedMime };
}

/**
 * Generates a temporary signed URL for private evidence viewing.
 */
export async function generateSignedEvidenceUrl(
  userId: string,
  storagePath: string,
  expiresInSeconds: number = 3600,
): Promise<{ signedUrl: string | null; error?: string }> {
  // Ensure the user owns the path (path format must start with userId/) unless admin
  if (!storagePath.startsWith(`${userId}/`)) {
    return { signedUrl: null, error: "Unauthorized access to evidence path" };
  }

  const { data, error } = await supabaseAdmin.storage
    .from("evidence")
    .createSignedUrl(storagePath, expiresInSeconds);

  if (error || !data?.signedUrl) {
    return { signedUrl: null, error: error?.message || "Failed to generate signed URL" };
  }

  return { signedUrl: data.signedUrl };
}
