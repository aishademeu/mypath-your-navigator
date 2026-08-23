import os
import sys
import asyncio
from dotenv import load_dotenv

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace", line_buffering=True)

from telethon import TelegramClient, events
from ai_extractor import extract_opportunity_from_text
from database import save_opportunity

load_dotenv()

API_ID = int(os.getenv("TELEGRAM_API_ID", "0"))
API_HASH = os.getenv("TELEGRAM_API_HASH", "")
CHANNELS_RAW = os.getenv("CHANNELS", "edu_strategies,deeppurplehub,asselibadulla")

CHANNELS = [ch.strip().lstrip("@") for ch in CHANNELS_RAW.split(",") if ch.strip()]

SESSION_NAME = "mypath_tg_session"

client = TelegramClient(SESSION_NAME, API_ID, API_HASH)

@client.on(events.NewMessage(chats=CHANNELS))
async def handle_new_post(event):
    """Handler triggered whenever a monitored channel posts a new message."""
    message = event.message
    channel_name = getattr(event.chat, "username", str(event.chat_id))
    message_id = message.id
    text = (message.text if hasattr(message, "text") and message.text else getattr(message, "message", "")) or ""
    if not text or len(text.strip()) < 10:
        return

    print(f"\n[Telegram] New message from @{channel_name} (ID: {message_id})")
    print(f"[Telegram] Preview: {text[:100]}...\n")

    # 1. AI analysis
    print("[AI] Analyzing post content with Gemini...")
    extracted = extract_opportunity_from_text(text)

    if not extracted or not extracted.is_opportunity:
        print("[AI] Post is not an opportunity or extraction failed. Skipping.")
        return

    print(f"[AI] Opportunity found: '{extracted.title}' ({extracted.category})")
    print(f"[AI] Deadline: {extracted.deadline} | Format: {extracted.format} | Cost: {extracted.cost}")

    # 2. Save to Supabase
    save_opportunity(
        opp=extracted,
        source_channel=channel_name,
        source_message_id=message_id,
        raw_text=text
    )

async def main():
    print("=" * 60)
    print("🚀 Starting MyPath Telegram Channel Listener Service")
    print(f"📡 Monitored channels: {', '.join(['@' + ch for ch in CHANNELS])}")
    print("=" * 60)

    await client.start()
    print("\n✅ Telegram client connected successfully!")
    print("👂 Listening for new opportunities in real time (Press Ctrl+C to stop)...")

    await client.run_until_disconnected()

if __name__ == "__main__":
    asyncio.run(main())
