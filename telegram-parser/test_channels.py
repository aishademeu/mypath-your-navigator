import os
import sys
import asyncio
from dotenv import load_dotenv

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

from telethon import TelegramClient
from ai_extractor import extract_opportunity_from_text
from database import save_opportunity

load_dotenv()

API_ID = int(os.getenv("TELEGRAM_API_ID", "0"))
API_HASH = os.getenv("TELEGRAM_API_HASH", "")
CHANNELS_RAW = os.getenv("CHANNELS", "edu_strategies,deeppurplehub,asselibadulla")
CHANNELS = [ch.strip().lstrip("@") for ch in CHANNELS_RAW.split(",") if ch.strip()]

SESSION_NAME = "mypath_tg_session"

async def test_channels(limit_per_channel=3):
    print("=" * 60)
    print("🔍 Testing MyPath Telegram Parser (Recent Posts)")
    print("=" * 60)

    client = TelegramClient(SESSION_NAME, API_ID, API_HASH)
    await client.start()
    print("✅ Connected to Telegram!\n")

    for channel in CHANNELS:
        print(f"\n--- 📡 Fetching last {limit_per_channel} posts from @{channel} ---")
        try:
            entity = await client.get_entity(channel)
            async for message in client.iter_messages(entity, limit=limit_per_channel):
                text = (message.text if hasattr(message, "text") and message.text else getattr(message, "message", "")) or ""
                if not text or len(text.strip()) < 10:
                    continue
                
                print(f"\n[Post ID {message.id}] {text[:80]}...")
                print("🤖 Sending to AI for extraction...")
                extracted = extract_opportunity_from_text(text)
                
                if extracted and extracted.is_opportunity:
                    print("🎉 SUCCESS! Extracted opportunity:")
                    print(f"  • Title: {extracted.title}")
                    print(f"  • Org: {extracted.org}")
                    print(f"  • Category: {extracted.category}")
                    print(f"  • Deadline: {extracted.deadline}")
                    print(f"  • Cost: {extracted.cost} | Format: {extracted.format}")
                    print(f"  • URL: {extracted.url}")
                    print(f"  • Requirements: {extracted.requirements}")
                    
                    # Saving to Supabase
                    save_opportunity(extracted, channel, message.id, text)
                else:
                    print("  ℹ️ Not classified as an opportunity (skipped).")
                
                # Small pause to respect free rate limit
                await asyncio.sleep(2)
                    
        except Exception as e:
            print(f"❌ Error fetching from @{channel}: {e}")

    await client.disconnect()
    print("\n🏁 Test completed!")

if __name__ == "__main__":
    asyncio.run(test_channels(limit_per_channel=7))
