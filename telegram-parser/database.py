import os
from typing import Optional
from dotenv import load_dotenv
from supabase import create_client, Client
from ai_extractor import ExtractedOpportunity

load_dotenv()

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

supabase: Optional[Client] = None
if SUPABASE_URL and SUPABASE_KEY:
    try:
        supabase = create_client(SUPABASE_URL, SUPABASE_KEY)
    except Exception as e:
        print(f"[DB] Supabase initialization error: {e}")

def is_duplicate(source_channel: str, source_message_id: int) -> bool:
    """Checks if a post has already been processed and stored in Supabase."""
    if not supabase:
        return False
    try:
        res = (
            supabase.table("opportunities")
            .select("id")
            .eq("source_channel", source_channel)
            .eq("source_message_id", source_message_id)
            .limit(1)
            .execute()
        )
        return len(res.data) > 0
    except Exception as e:
        print(f"[DB] Check duplicate error: {e}")
        return False

def save_opportunity(
    opp: ExtractedOpportunity,
    source_channel: str,
    source_message_id: int,
    raw_text: str
) -> bool:
    """Saves structured opportunity into Supabase database."""
    if not supabase:
        print("[DB] Error: Supabase client not initialized")
        return False

    if is_duplicate(source_channel, source_message_id):
        print(f"[DB] Duplicate post detected: {source_channel}/{source_message_id}, skipping.")
        return False

    record = {
        "title": opp.title,
        "org": opp.org or (f"@{source_channel}" if source_channel else "Unspecified Organizer"),
        "category": opp.category,
        "description": opp.description,
        "deadline": opp.deadline,
        "min_age": opp.minAge,
        "max_age": opp.maxAge,
        "min_grade": opp.minGrade,
        "max_grade": opp.maxGrade,
        "cost": opp.cost,
        "format": opp.format,
        "verified": False,
        "requirements": opp.requirements,
        "tags": opp.tags,
        "fields": opp.fields,
        "url": opp.url,
        "status": "approved",  # Change to 'pending_review' if moderation is enabled
        "source_channel": source_channel,
        "source_message_id": source_message_id,
        "raw_text": raw_text[:2000]
    }

    try:
        res = supabase.table("opportunities").insert(record).execute()
        print(f"[DB] Successfully saved opportunity: '{opp.title}' (ID: {source_message_id})")
        return True
    except Exception as e:
        print(f"[DB] Error inserting to Supabase: {e}")
        return False
