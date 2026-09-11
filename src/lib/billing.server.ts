import { supabaseAdmin } from "@/integrations/supabase/client.server";

export type SubscriptionState =
  | "FREE"
  | "PRO_ACTIVE"
  | "PRO_EXPIRED"
  | "PAYMENT_FAILED"
  | "CANCELLED";

export const PRO_MONTHLY_PRICE_KZT = 5000;

/**
 * Server-authoritative subscription state evaluation.
 */
export async function getUserSubscriptionState(userId: string): Promise<{
  state: SubscriptionState;
  currentPeriodEnd: string | null;
  plan: string;
}> {
  try {
    const { data, error } = await (supabaseAdmin as any)
      .from("subscriptions")
      .select("plan, status, current_period_end")
      .eq("user_id", userId)
      .maybeSingle();

    if (error || !data) {
      return { state: "FREE", currentPeriodEnd: null, plan: "free" };
    }

    if (data.plan === "pro") {
      if (data.status === "active") {
        if (!data.current_period_end || new Date(data.current_period_end) > new Date()) {
          return { state: "PRO_ACTIVE", currentPeriodEnd: data.current_period_end, plan: "pro" };
        } else {
          return { state: "PRO_EXPIRED", currentPeriodEnd: data.current_period_end, plan: "pro" };
        }
      }
      if (data.status === "cancelled") {
        return { state: "CANCELLED", currentPeriodEnd: data.current_period_end, plan: "pro" };
      }
      if (data.status === "payment_failed") {
        return { state: "PAYMENT_FAILED", currentPeriodEnd: data.current_period_end, plan: "pro" };
      }
    }

    return { state: "FREE", currentPeriodEnd: null, plan: "free" };
  } catch {
    return { state: "FREE", currentPeriodEnd: null, plan: "free" };
  }
}

/**
 * Creates a Stripe Checkout Session for recurring 5,000 KZT / month.
 */
export async function createStripeCheckoutSession(userId: string, userEmail: string, origin: string): Promise<{ url: string | null; error?: string }> {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeSecretKey) {
    return {
      url: null,
      error: "Stripe API key is not configured. Please use the manual payment or contact administrator.",
    };
  }

  try {
    const res = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${stripeSecretKey}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        success_url: `${origin}/pricing?status=success`,
        cancel_url: `${origin}/pricing?status=cancelled`,
        mode: "subscription",
        customer_email: userEmail,
        "client_reference_id": userId,
        "line_items[0][price_data][currency]": "kzt",
        "line_items[0][price_data][product_data][name]": "MyPath Pro",
        "line_items[0][price_data][unit_amount]": String(PRO_MONTHLY_PRICE_KZT * 100),
        "line_items[0][price_data][recurring][interval]": "month",
        "line_items[0][quantity]": "1",
      }),
    });

    const session = await res.json();
    if (session.url) {
      return { url: session.url };
    }
    return { url: null, error: session.error?.message || "Failed to initiate Stripe Checkout" };
  } catch (err: any) {
    return { url: null, error: err.message };
  }
}

/**
 * Manual founder payment submission (PENDING state).
 */
export async function submitManualPayment(
  userId: string,
  receiptNote?: string,
  receiptFileUrl?: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await (supabaseAdmin as any).from("manual_payments").insert({
      user_id: userId,
      amount_kzt: PRO_MONTHLY_PRICE_KZT,
      receipt_note: receiptNote || null,
      receipt_file_url: receiptFileUrl || null,
      status: "pending",
    });

    if (error) return { success: false, error: error.message };
    return { success: true };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
}

/**
 * Admin action: Verifies manual payment and unlocks PRO_ACTIVE for 30 days.
 */
export async function verifyManualPayment(
  paymentId: string,
  adminUserId: string,
  decision: "approved" | "rejected"
): Promise<{ success: boolean; error?: string }> {
  try {
    const { data: payment, error: fetchErr } = await (supabaseAdmin as any)
      .from("manual_payments")
      .select("user_id, status")
      .eq("id", paymentId)
      .single();

    if (fetchErr || !payment) return { success: false, error: "Payment not found" };

    const updatePayload: any = {
      status: decision,
      verified_by: adminUserId,
      verified_at: new Date().toISOString(),
    };

    await (supabaseAdmin as any).from("manual_payments").update(updatePayload).eq("id", paymentId);

    if (decision === "approved") {
      const periodEnd = new Date();
      periodEnd.setDate(periodEnd.getDate() + 30);

      await (supabaseAdmin as any).from("subscriptions").upsert({
        user_id: payment.user_id,
        plan: "pro",
        status: "active",
        current_period_end: periodEnd.toISOString(),
        updated_at: new Date().toISOString(),
      });
    }

    return { success: true };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
}
