import { supabaseAdmin } from "@/integrations/supabase/client.server";

// -----------------------------------------------------------------------------
// RATE LIMITING (In-Memory Sliding Window for Server Functions)
// -----------------------------------------------------------------------------
interface RateLimitRecord {
  count: number;
  resetAt: number;
}

const rateLimitMap = new Map<string, RateLimitRecord>();

/**
 * Checks whether an identifier (e.g. client IP or action:userId) has exceeded rate limits.
 * @param key Unique key for the rate limit bucket
 * @param maxAttempts Max allowed attempts within the window
 * @param windowMs Time window in milliseconds (default: 15 minutes)
 */
export function checkRateLimit(
  key: string,
  maxAttempts: number = 10,
  windowMs: number = 15 * 60 * 1000,
): { allowed: boolean; remaining: number; retryAfterSeconds: number } {
  const now = Date.now();
  const record = rateLimitMap.get(key);

  if (!record || now > record.resetAt) {
    rateLimitMap.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: maxAttempts - 1, retryAfterSeconds: 0 };
  }

  if (record.count >= maxAttempts) {
    const retryAfterSeconds = Math.ceil((record.resetAt - now) / 1000);
    return { allowed: false, remaining: 0, retryAfterSeconds };
  }

  record.count += 1;
  return {
    allowed: true,
    remaining: maxAttempts - record.count,
    retryAfterSeconds: 0,
  };
}

// -----------------------------------------------------------------------------
// CLOUDFLARE TURNSTILE VERIFICATION
// -----------------------------------------------------------------------------
export async function verifyTurnstileToken(
  token?: string,
  remoteIp?: string,
): Promise<{ success: boolean; error?: string }> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  if (!secretKey) {
    // If turnstile secret is not set in environment, pass through in development
    return { success: true };
  }

  if (!token) {
    return { success: false, error: "Missing Turnstile verification token" };
  }

  try {
    const formData = new URLSearchParams();
    formData.append("secret", secretKey);
    formData.append("response", token);
    if (remoteIp) formData.append("remoteip", remoteIp);

    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: formData,
    });

    const outcome = await res.json();
    if (outcome.success) {
      return { success: true };
    }
    return { success: false, error: "Turnstile verification failed" };
  } catch (err: any) {
    return { success: false, error: err.message || "CAPTCHA verification error" };
  }
}

// -----------------------------------------------------------------------------
// ADMIN ROLE & AUDIT LOGGING (R-A1-08)
// -----------------------------------------------------------------------------
export async function verifyIsAdmin(actorUserId: string): Promise<boolean> {
  const { data: profile } = await (supabaseAdmin as any)
    .from("profiles")
    .select("role, email")
    .eq("id", actorUserId)
    .maybeSingle();

  const adminEmail = process.env.ADMIN_EMAIL;
  if (adminEmail && profile?.email && profile.email.toLowerCase() === adminEmail.toLowerCase()) {
    return true;
  }

  return profile?.role === "admin";
}

export async function writeAuditLog(params: {
  actorId?: string | null;
  action: string;
  target: string;
  details?: Record<string, any>;
}): Promise<void> {
  try {
    await (supabaseAdmin as any).from("audit_log").insert({
      actor_id: params.actorId || null,
      action: params.action,
      target: params.target,
      details: params.details || {},
      created_at: new Date().toISOString(),
    });
  } catch (err) {
    console.error("[AuditLog] Failed to write audit log:", err);
  }
}

// -----------------------------------------------------------------------------
// AGE & PARENTAL CONSENT LOGGING (R-A1-06)
// -----------------------------------------------------------------------------
export const DEFAULT_PARENTAL_CONSENT_AGE = 16;

export function evaluateParentalConsentRequired(
  birthYearOrAge: number,
  isAge: boolean = false,
  thresholdAge: number = DEFAULT_PARENTAL_CONSENT_AGE,
): boolean {
  const currentYear = new Date().getFullYear();
  const calculatedAge = isAge ? birthYearOrAge : currentYear - birthYearOrAge;
  return calculatedAge < thresholdAge;
}

export async function logConsent(
  userId: string,
  kind: string,
  textVersion: string,
): Promise<void> {
  await (supabaseAdmin as any).from("consent_log").insert({
    user_id: userId,
    kind,
    text_version: textVersion,
    given_at: new Date().toISOString(),
  });
}

// -----------------------------------------------------------------------------
// SELF-SERVICE DATA EXPORT (R-A1-07)
// -----------------------------------------------------------------------------
export async function exportUserData(userId: string): Promise<Record<string, any>> {
  const [
    profileRes,
    onboardingRes,
    portfolioRes,
    portfolioItemsRes,
    evidenceRes,
    applicationsRes,
    mentorMessagesRes,
    careerHypothesesRes,
    myPathActionsRes,
    paymentsRes,
  ] = await Promise.all([
    (supabaseAdmin as any).from("profiles").select("*").eq("id", userId).maybeSingle(),
    (supabaseAdmin as any).from("onboarding").select("*").eq("user_id", userId).maybeSingle(),
    (supabaseAdmin as any).from("portfolios").select("*").eq("user_id", userId).maybeSingle(),
    (supabaseAdmin as any).from("portfolio_items").select("*").eq("user_id", userId),
    (supabaseAdmin as any).from("evidence").select("*").eq("user_id", userId),
    (supabaseAdmin as any).from("applications").select("*").eq("user_id", userId),
    (supabaseAdmin as any).from("mentor_messages").select("*").eq("user_id", userId),
    (supabaseAdmin as any).from("career_hypotheses").select("*").eq("user_id", userId),
    (supabaseAdmin as any).from("my_path_actions").select("*").eq("user_id", userId),
    (supabaseAdmin as any).from("payments").select("*").eq("user_id", userId),
  ]);

  return {
    exportDate: new Date().toISOString(),
    profile: profileRes.data || null,
    onboarding: onboardingRes.data || null,
    portfolio: portfolioRes.data || null,
    portfolioItems: portfolioItemsRes.data || [],
    evidence: (evidenceRes.data || []).map((e: any) => ({
      ...e,
      // exclude raw internal storage path if not needed
    })),
    applications: applicationsRes.data || [],
    mentorMessages: mentorMessagesRes.data || [],
    careerHypotheses: careerHypothesesRes.data || [],
    myPathActions: myPathActionsRes.data || [],
    payments: paymentsRes.data || [],
  };
}

// -----------------------------------------------------------------------------
// ACCOUNT DELETION WITH 7-DAY GRACE PERIOD (R-A1-07)
// -----------------------------------------------------------------------------
export async function requestAccountDeletion(userId: string): Promise<{
  deletionRequestedAt: string;
  purgeDate: string;
}> {
  const now = new Date();
  const purgeDate = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);

  await (supabaseAdmin as any)
    .from("profiles")
    .update({ deletion_requested_at: now.toISOString() })
    .eq("id", userId);

  await writeAuditLog({
    actorId: userId,
    action: "account_deletion_requested",
    target: `user:${userId}`,
    details: { purgeDate: purgeDate.toISOString() },
  });

  return {
    deletionRequestedAt: now.toISOString(),
    purgeDate: purgeDate.toISOString(),
  };
}

export async function purgeAccount(userId: string): Promise<void> {
  // 1. Delete evidence files from storage
  const { data: evidenceFiles } = await (supabaseAdmin as any)
    .from("evidence")
    .select("storage_path_or_url")
    .eq("user_id", userId);

  if (evidenceFiles && evidenceFiles.length > 0) {
    const paths = evidenceFiles
      .map((f: any) => f.storage_path_or_url)
      .filter((p: string) => p && p.startsWith(`${userId}/`));
    if (paths.length > 0) {
      await supabaseAdmin.storage.from("evidence").remove(paths);
    }
  }

  // 2. Cascade delete database records
  await (supabaseAdmin as any).from("profiles").delete().eq("id", userId);

  await writeAuditLog({
    actorId: null,
    action: "account_purged",
    target: `user:${userId}`,
  });
}
