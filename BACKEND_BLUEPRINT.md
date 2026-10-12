# Backend Blueprint

This app is configured to use Supabase for all backend services.

## Supabase Services

- Auth: student, teacher, lecturer, and admin login.
- Database (Postgres): profiles, courses, questions, answers, resources, reports, analytics.
- Storage Buckets: snapped questions, voice notes, PDFs, diagrams, videos.
- Edge Functions: AI, WhatsApp webhook, admin role management.

## Main Collections

### `profiles` (Postgres Table)

```json
{
  "name": "Student name",
  "email": "student@email.com",
  "whatsapp": "+232...",
  "country": "Sierra Leone",
  "school": "School name",
  "level": "SSS",
  "createdAt": 0,
  "updatedAt": 0
}
```

### `questions/{questionId}`

```json
{
  "studentUid": "uid",
  "country": "Ghana",
  "selected": "Biology: Genetics",
  "text": "Explain mitosis",
  "imageUrl": "",
  "voiceUrl": "",
  "status": "answered",
  "createdAt": 0
}
```

### `answers/{answerId}`

```json
{
  "questionId": "questionId",
  "studentUid": "uid",
  "title": "Mitosis",
  "short": "Simple answer",
  "notes": [],
  "quiz": [],
  "sources": [],
  "status": "draft",
  "reviewedBy": "",
  "createdAt": 0
}
```

### `resources/{resourceId}`

```json
{
  "title": "WAEC Biology 2026",
  "type": "past paper",
  "country": "Nigeria",
  "subject": "Biology",
  "exam": "WAEC",
  "year": 2026,
  "fileUrl": "",
  "status": "approved",
  "uploadedBy": "teacherUid",
  "createdAt": 0
}
```

## Cloud Functions To Build

- `groqSearch`: receives text question plus country, level, language, output mode, and exam context; returns structured answer, notes, examples, related topics, quiz, and sources.
- `groqChat`: receives chat history and learning context; returns tutor-style guidance.
- `processQuestionImage`: OCR for snapped questions.
- `processVoiceQuestion`: speech-to-text for voice notes.
- `whatsappWebhook`: receives WhatsApp messages, images, and voice notes.
- `sendWhatsappReply`: sends AI answer back through WhatsApp Cloud API.
- `setStaffRole`: admin-only function to set admin and future approved-contributor claims.
- `approveResource`: admin approval for uploaded notes, PDFs, and past papers.
- `trackAnalytics`: stores popular topics, country demand, downloads, WhatsApp usage.

## WhatsApp Flow

1. Student sends text/photo/voice to WhatsApp number.
2. Meta WhatsApp Cloud API calls `whatsappWebhook`.
3. Function identifies student by phone number.
4. Text gets an immediate AI reply in the same WhatsApp chat.
5. Photo messages are downloaded from WhatsApp media, then sent to Groq vision/OCR where size allows.
6. Voice messages are downloaded from WhatsApp media, then sent to Groq Whisper transcription.
7. If OCR/voice transcription is unclear, the bot asks the student to type a short caption or exact question in the same WhatsApp chat.
8. Answer is saved in the Supabase Database.
9. The function returns the answer to WhatsApp via the Cloud API.

## Secrets & Deployment

Configure these secrets in your Supabase project (Settings -> Edge Functions):

```bash
supabase secrets set WHATSAPP_VERIFY_TOKEN="your_token"
supabase secrets set WHATSAPP_ACCESS_TOKEN="your_token"
supabase secrets set WHATSAPP_PHONE_NUMBER_ID="your_id"
supabase secrets set GROQ_API_KEY="your_key"
```

Deploy the Supabase Edge Functions with:

```bash
supabase functions deploy --all
```

Your webhook endpoint will look like:

```text
https://YOUR_SUPABASE_PROJECT_REF.supabase.co/functions/v1/whatsappWebhook
```

In Meta WhatsApp Cloud API:

- Callback URL: your deployed `whatsappWebhook` URL.
- Verify token: same value as `WHATSAPP_VERIFY_TOKEN`.
- Subscribe to `messages`.

Current backend behavior:

- Text messages are answered.
- Image and voice messages are saved and acknowledged as ready for OCR/transcription.
- Full OCR and voice transcription should be added next using Supabase Edge Functions.

## Deployment

Keep database authorization in Supabase Row Level Security policies and deploy Edge Functions through the Supabase CLI.
