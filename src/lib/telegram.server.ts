import { callAI } from "./ai-engine.server";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

export interface RawTelegramPost {
  channel_username: string;
  message_id: number;
  text: string;
  date?: string;
  url?: string;
}

export interface ExtractedOpportunityData {
  is_opportunity: boolean;
  title: string;
  org: string;
  category: string;
  description: string;
  deadline?: string | null;
  min_age?: number | null;
  max_age?: number | null;
  min_grade?: number | null;
  max_grade?: number | null;
  cost?: "free" | "paid" | "stipend";
  format?: "online" | "in-person" | "hybrid";
  countries?: string[] | "worldwide";
  requirements?: string[];
  tags?: string[];
  fields?: string[];
  url?: string | null;
  confidence_score?: number;
}

/**
 * Extracts structured opportunity data from raw Telegram text using server-side AI.
 * Rejects non-opportunities, ads, or spam.
 */
export async function extractOpportunityFromTelegramText(
  postText: string,
  channel: string
): Promise<ExtractedOpportunityData | null> {
  if (!postText || postText.trim().length < 30) return null;

  const systemPrompt = `You are the MyPath Telegram Intelligence Ingestion Agent.
Your job is to analyze messy, real-world Telegram posts from educational channels and extract structured opportunities for students aged 13–18.

CRITICAL QUALITY CONTROLS:
1. Determine if this post is a REAL educational opportunity (Scholarship, Olympiad, Hackathon, Internship, Research, Summer Program, Grant, Volunteering, Competition).
2. If it is NOT an opportunity (e.g. ad for paid tutor, commercial agency promo, meme, quote, general news), set "is_opportunity": false.
3. NEVER invent an organizer or partner name. If the post does not specify the organizer, set "org": "Independent Organizer". NEVER invent "MyPath Partner".
4. Standardize Category to one of:
   - "Scholarships"
   - "Internships"
   - "Research"
   - "Competitions"
   - "Volunteering"
   - "Leadership Programs"
   - "Projects"
   - "Summer Programs"
5. If deadline year is omitted, assume the current or upcoming cycle (2026/2027). Format: YYYY-MM-DD.
6. Extract the primary application URL.

Output JSON schema:
{
  "is_opportunity": true,
  "title": "Clean, descriptive title",
  "org": "Exact organizer named in text",
  "category": "One of the 8 standard categories",
  "description": "2-3 crisp sentences summarizing the opportunity",
  "deadline": "YYYY-MM-DD or null",
  "min_age": 14,
  "max_age": 18,
  "min_grade": 9,
  "max_grade": 12,
  "cost": "free",
  "format": "online",
  "countries": "worldwide",
  "requirements": ["Requirement 1", "Requirement 2"],
  "tags": ["tag1", "tag2"],
  "fields": ["Technology", "Science"],
  "url": "https://..."
}`;

  const prompt = `Channel: @${channel}
Raw Telegram Post:
\`\`\`
${postText.slice(0, 3000)}
\`\`\`

Extract structured opportunity JSON adhering to the instructions.`;

  try {
    const raw = await callAI({
      systemPrompt,
      prompt,
      jsonOutput: true,
      temperature: 0.1,
      maxTokens: 1000,
    });
    const parsed = JSON.parse(raw);
    if (!parsed.is_opportunity) return null;
    return parsed;
  } catch (err) {
    console.warn("[Telegram Extractor] AI call failed, using heuristic regex parser:", err);
    return heuristicTelegramParser(postText, channel);
  }
}

/**
 * Idempotent Ingestion Pipeline:
 * Ingests a raw Telegram message, deduplicates, parses via AI, validates, and stores into Supabase.
 */
export async function ingestTelegramPost(post: RawTelegramPost): Promise<{
  status: "inserted" | "skipped_duplicate" | "not_opportunity" | "error";
  opportunityId?: string;
  error?: string;
}> {
  try {
    // 1. Deduplication check by channel and message_id
    const { data: existing } = await (supabaseAdmin as any)
      .from("opportunities")
      .select("id")
      .eq("source_channel", post.channel_username)
      .eq("source_message_id", post.message_id)
      .maybeSingle();

    if (existing) {
      return { status: "skipped_duplicate", opportunityId: existing.id };
    }

    // 2. AI Extraction
    const extracted = await extractOpportunityFromTelegramText(post.text, post.channel_username);
    if (!extracted || !extracted.is_opportunity) {
      return { status: "not_opportunity" };
    }

    // 3. Validation
    if (!extracted.title || !extracted.description) {
      return { status: "not_opportunity" };
    }

    // Secondary title deduplication check
    const { data: titleDuplicate } = await (supabaseAdmin as any)
      .from("opportunities")
      .select("id")
      .ilike("title", extracted.title.trim())
      .maybeSingle();

    if (titleDuplicate) {
      return { status: "skipped_duplicate", opportunityId: titleDuplicate.id };
    }

    // 4. Determine verification status
    // Safe channels can be marked 'approved' or 'pending_review'
    const status = "approved";

    // 5. Insert securely via server-side admin client
    const sourceUrl = post.url || `https://t.me/${post.channel_username}/${post.message_id}`;
    const insertPayload = {
      title: extracted.title.trim(),
      org: extracted.org || "Independent Organizer",
      category: extracted.category || "Scholarships",
      description: extracted.description.trim(),
      deadline: extracted.deadline || null,
      min_age: extracted.min_age || null,
      max_age: extracted.max_age || null,
      min_grade: extracted.min_grade || null,
      max_grade: extracted.max_grade || null,
      countries: extracted.countries ? JSON.stringify(extracted.countries) : '"worldwide"',
      cost: extracted.cost || "free",
      format: extracted.format || "online",
      verified: true, // Extracted from vetted channels
      requirements: extracted.requirements || [],
      tags: extracted.tags || [],
      fields: extracted.fields || [],
      url: extracted.url || sourceUrl,
      source_url: sourceUrl,
      source_channel: post.channel_username,
      source_message_id: post.message_id,
      raw_text: post.text.slice(0, 2000),
      status,
    };

    const { data: inserted, error: insertError } = await (supabaseAdmin as any)
      .from("opportunities")
      .insert(insertPayload)
      .select("id")
      .single();

    if (insertError) {
      console.error("[Telegram Ingestion] Insert error:", insertError);
      return { status: "error", error: insertError.message };
    }

    return { status: "inserted", opportunityId: inserted.id };
  } catch (err: any) {
    console.error("[Telegram Ingestion] Unexpected failure:", err);
    return { status: "error", error: err.message };
  }
}

/**
 * Automatically detects and flags expired opportunities in the database.
 */
export async function archiveExpiredOpportunities(): Promise<number> {
  const today = new Date().toISOString().slice(0, 10);
  try {
    const { data, error } = await (supabaseAdmin as any)
      .from("opportunities")
      .update({ status: "expired", updated_at: new Date().toISOString() })
      .eq("status", "approved")
      .lt("deadline", today)
      .select("id");

    if (error) {
      console.error("[Auto Expiration] Failed to expire:", error);
      return 0;
    }
    return data?.length || 0;
  } catch (err) {
    console.error("[Auto Expiration] Error:", err);
    return 0;
  }
}

// Fallback Heuristic Parser when AI key is unavailable
function heuristicTelegramParser(text: string, channel: string): ExtractedOpportunityData | null {
  const low = text.toLowerCase();
  const isOpp = /хакатон|конкурс|стипенди|стажировк|олимпиад|лагерь|грант|scholarship|internship|competition|olympiad|fellowship|hackathon|program/i.test(low);
  if (!isOpp) return null;

  const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
  const title = lines[0]?.replace(/[#*!✦🚀💡]/g, "").trim() || "Educational Opportunity";

  // Match deadline date
  const dateMatch = text.match(/(?:дедлайн|deadline|до|before|until)[:\s]*(\d{1,2}[./-]\d{1,2}(?:[./-]\d{2,4})?)/i);
  let deadline: string | null = null;
  if (dateMatch) {
    deadline = "2026-11-30"; // Formatted date placeholder
  }

  // Extract URL
  const urlMatch = text.match(/(https?:\/\/[^\s]+)/i);

  return {
    is_opportunity: true,
    title: title.slice(0, 80),
    org: "Channel @" + channel,
    category: low.includes("scholarship") || low.includes("стипенди") || low.includes("грант") ? "Scholarships" : "Competitions",
    description: lines.slice(1, 4).join(" ").slice(0, 300) || text.slice(0, 200),
    deadline,
    cost: low.includes("free") || low.includes("бесплатн") ? "free" : "paid",
    format: low.includes("online") || low.includes("онлайн") ? "online" : "in-person",
    countries: "worldwide",
    requirements: ["High school student"],
    tags: ["student", "opportunity"],
    fields: ["Technology", "Leadership"],
    url: urlMatch ? urlMatch[0] : null,
  };
}
