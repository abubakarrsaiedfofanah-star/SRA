# Student Research Africa Professionalization Plan

This file defines the standard for moving the app from prototype to a real education platform.

## Content Status

Every answer, lesson plan, video, practical guide, past paper, and country profile should use one of these statuses:

- `draft`: generated or uploaded, not checked.
- `pendingReview`: waiting for admin or approved-reviewer review.
- `approved`: checked and visible as trusted content.
- `rejected`: blocked from student use.
- `needsCorrection`: returned to the author for edits.

## Required Fields

Professional curriculum records should include:

- `country`
- `examBody`
- `educationLevel`
- `subject`
- `topic`
- `language`
- `status`
- `createdBy`
- `reviewedBy`
- `reviewedAt`
- `sources`
- `safetyLevel`
- `lastUpdated`
- `ownerRole`: student, teacher, lecturer, or admin.

## Review Rules

- AI content is always a draft until reviewed.
- Teachers and lecturers are normal users by default; their saved materials are private unless admin later approves contributor privileges.
- Only admins can publish official platform content unless they explicitly approve a trusted contributor workflow later.
- Exam body and curriculum data must be admin-approved before being marked official.
- Practical, medical, electrical, chemical, construction, and laboratory content must include safety warnings.
- Video links must be approved before being shown as recommended resources.
- Students can report unclear or wrong answers.

## Production Priorities

1. Move countries, exam bodies, subjects, topics, videos, and past papers from local prototype storage into Supabase tables.
2. Connect the admin curriculum, video, and past-paper editors to Supabase Database writes.
3. Deploy `groq-search` and `groq-chat` Edge Functions with `GROQ_API_KEY` as a Supabase secret.
4. Add per-country curriculum editors for trusted teachers.
5. Add analytics for weak topics, popular searches, reports, and unanswered questions.

## Implemented Prototype Controls

- Admin curriculum editor for country, exam body, level, subject, topic, and review status.
- Admin video library editor for approved lesson videos.
- Admin past-paper database editor.
- Groq-backed structured search endpoint scaffold: `/api/groqSearch`.
- Groq-backed chat endpoint scaffold: `/api/groqChat`.
- Student language and output-mode controls.
- Offline study packs and local progress recommendations.
