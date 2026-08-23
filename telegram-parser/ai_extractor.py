import os
import json
import re
from typing import Optional, List, Literal
from pydantic import BaseModel, Field
from dotenv import load_dotenv
import requests

load_dotenv()

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

class ExtractedOpportunity(BaseModel):
    is_opportunity: bool = Field(default=False, description="True if post contains an educational, scholarship, internship, competition, research or growth opportunity for youth/students. False for ads, quotes, general news, chats.")
    title: Optional[str] = Field(default="", description="Clean, attractive title of the program/opportunity (e.g. 'Yale Young Global Scholars 2026')")
    org: Optional[str] = Field(default="", description="Name of the organizing university, company or foundation (e.g. 'Yale University', 'Google')")
    category: Optional[Literal[
        "Scholarships",
        "Internships",
        "Research",
        "Competitions",
        "Volunteering",
        "Leadership Programs",
        "Projects",
        "Summer Programs"
    ]] = Field(default="Scholarships", description="Best matching category")
    description: Optional[str] = Field(default="", description="Concise summary (2-4 sentences in Russian or English depending on post language) explaining what the opportunity offers")
    deadline: Optional[str] = Field(default=None, description="Deadline in YYYY-MM-DD format, or null if not found/rolling")
    minAge: Optional[int] = Field(default=None, description="Minimum age requirement if specified")
    maxAge: Optional[int] = Field(default=None, description="Maximum age requirement if specified")
    minGrade: Optional[int] = Field(default=None, description="Minimum school grade (e.g. 9)")
    maxGrade: Optional[int] = Field(default=None, description="Maximum school grade (e.g. 12)")
    cost: Optional[str] = Field(default="free", description="Participation cost")
    format: Optional[str] = Field(default="online", description="Event/program format")
    requirements: List[str] = Field(default_factory=list, description="Key requirements (e.g. ['High school student', 'English B2', 'Essay'])")
    tags: List[str] = Field(default_factory=list, description="Search keywords and tags (e.g. ['scholarship', 'usa', 'leadership'])")
    fields: List[str] = Field(default_factory=list, description="Academic fields: Technology, Science, Business, Arts, Social Impact, Leadership, Writing, Design, Healthcare, Environment, Research")
    url: Optional[str] = Field(default=None, description="Direct URL link to apply or official announcement page")

    def model_post_init(self, __context):
        # Normalize cost
        if self.cost:
            c = str(self.cost).lower()
            if "free" in c or "бесплатн" in c:
                self.cost = "free"
            elif "stipend" in c or "стипенди" in c:
                self.cost = "stipend"
            else:
                self.cost = "paid"
        else:
            self.cost = "free"

        # Normalize format
        if self.format:
            f = str(self.format).lower()
            if "online" in f or "онлайн" in f:
                self.format = "online"
            elif "hybrid" in f or "гибрид" in f:
                self.format = "hybrid"
            else:
                self.format = "in-person"
        else:
            self.format = "online"

SYSTEM_PROMPT = """You are an expert AI parser for MyPath, an educational platform for ambitious high school and university students.
Your job is to analyze Telegram posts from educational channels and extract structured opportunities.

Guidelines:
1. Determine if the post describes a real student opportunity (Scholarship, Olympiad, Hackathon, Internship, Summer Camp, Research, Grant, Volunteering, Conference).
2. If it is NOT an opportunity (e.g., general discussion, meme, promotional ad for unrelated services, life advice), set `is_opportunity: false`.
3. If deadline year is omitted, assume current/upcoming year (2026/2027). Format date as YYYY-MM-DD.
4. Extract the primary application URL if present in the post text or links.
5. Return strictly valid JSON adhering to the schema.
"""

def extract_opportunity_from_text(post_text: str) -> Optional[ExtractedOpportunity]:
    """Extracts structured opportunity details from raw post text using Google Gemini."""
    if not post_text or len(post_text.strip()) < 20:
        return None

    if not GEMINI_API_KEY:
        print("[AI] Warning: GEMINI_API_KEY is not set!")
        return None

    # Call Gemini REST API directly for maximum reliability
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key={GEMINI_API_KEY}"
    
    prompt = f"{SYSTEM_PROMPT}\n\nTelegram Post Text:\n```\n{post_text}\n```\n\nOutput JSON matching the schema."
    
    payload = {
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {
            "response_mime_type": "application/json",
            "temperature": 0.1
        }
    }

    try:
        response = requests.post(url, json=payload, timeout=30)
        if response.status_code != 200:
            print(f"[AI] Error from Gemini API: {response.status_code} {response.text}")
            return None

        result_data = response.json()
        parts = result_data.get("candidates", [{}])[0].get("content", {}).get("parts", [])
        # Find text part
        raw_json_str = ""
        for p in parts:
            if "text" in p:
                raw_json_str = p["text"]
                break

        # Clean potential markdown formatting
        cleaned_json = re.sub(r"^```json\s*", "", raw_json_str.strip(), flags=re.MULTILINE)
        cleaned_json = re.sub(r"```$", "", cleaned_json.strip())
        
        parsed_dict = json.loads(cleaned_json)
        extracted = ExtractedOpportunity(**parsed_dict)
        return extracted
    except Exception as e:
        print(f"[AI] Extraction error: {e}")
        return None
