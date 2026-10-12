"""
Student Research Africa (SRA) - Python Backend Service Template (FastAPI + Groq + Supabase)
This reference template demonstrates how Python can power AI study search, chat, OCR, and WhatsApp webhooks.
"""

import os
from typing import Optional
from fastapi import FastAPI, HTTPException, Request
from pydantic import BaseModel
import httpx

app = FastAPI(title="SRA Python AI & WhatsApp Service", version="1.0.0")

GROQ_API_KEY = os.getenv("GROQ_API_KEY", "your-groq-api-key")
SUPABASE_URL = os.getenv("SUPABASE_URL", "your-supabase-url")
SUPABASE_SERVICE_KEY = os.getenv("SUPABASE_SERVICE_KEY", "your-service-role-key")

class StudyQueryRequest(BaseModel):
    query: str
    country: str
    level: str
    language: str
    examContext: Optional[str] = "General"

@app.post("/api/python/groq-search")
async def python_groq_search(req: StudyQueryRequest):
    """
    Python backend endpoint to query Groq LLM for structured study answers, notes, and quiz questions.
    """
    prompt = f"""
    You are an expert African curriculum tutor.
    Country: {req.country}
    Level: {req.level}
    Language: {req.language}
    Exam Context: {req.examContext}
    Question: {req.query}

    Provide a structured JSON response with title, short summary, notes array, quiz array, and sources.
    """

    async with httpx.AsyncClient() as client:
        try:
            response = await client.post(
                "https://api.groq.com/openai/v1/chat/completions",
                headers={
                    "Authorization": f"Bearer {GROQ_API_KEY}",
                    "Content-Type": "application/json"
                },
                json={
                    "model": "llama-3.3-70b-versatile",
                    "messages": [{"role": "user", "content": prompt}],
                    "temperature": 0.3
                },
                timeout=30.0
            )
            data = response.json()
            answer_text = data["choices"][0]["message"]["content"]
            return {"status": "success", "aiAnswer": answer_text, "language": req.language}
        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/python/whatsapp-webhook")
async def whatsapp_webhook(request: Request):
    """
    WhatsApp Cloud API webhook receiver for automated student Q&A over WhatsApp.
    """
    body = await request.json()
    # Process incoming WhatsApp message, query Groq AI, and reply via WhatsApp Cloud API
    return {"status": "received", "body": body}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
