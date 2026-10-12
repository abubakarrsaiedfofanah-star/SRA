# Student Research Africa (SRA)

[![Android App](https://img.shields.io/badge/Android-Capacitor%20%2F%20Native-0F766E?style=for-the-badge&logo=android)](https://github.com/abubakarrsaiedfofanah-star/SRA)
[![Supabase](https://img.shields.io/badge/Backend-Supabase%20%2F%20Postgres-3ECF8E?style=for-the-badge&logo=supabase)](https://supabase.com)
[![Groq AI](https://img.shields.io/badge/AI-Groq%20LLM-orange?style=for-the-badge)](https://groq.com)

A professional education, study research, and content management platform designed for students, teachers, lecturers, and workers across **54 African countries**. 

---

## 🚀 Key Features

- **4 Role-Based Portals**:
  - **Student Portal**: AI study help, past papers, notes, quizzes, diagrams, flashcards, and WhatsApp research integration.
  - **Teacher Portal**: Lesson plans, class activities, quizzes, practical guides, and worksheets.
  - **Lecturer Portal**: Tertiary course outlines, lecture notes, academic references, and assignments.
  - **Worker Portal**: Vocational training, safety guidelines, and professional skills development.
- **Staff / Admin Dashboard**: Content review workflow (`draft`, `pendingReview`, `approved`, `rejected`), curriculum record management, and moderation.
- **Offline & Native Support**: Built with Capacitor for Android (`com.studentresearchafrica.app`) with full offline caching, Pomodoro focus timer, study streaks, and PDF note generator.
- **WhatsApp Integration**: WhatsApp Cloud API webhook support for instant mobile study assistant queries.

---

## 🛠️ Project Structure

- `android/` - Native Android Capacitor project (Java 17, Gradle 8.13, compileSdk 36)
- `www/` / Root web assets - Frontend HTML, CSS, and JS (`index.html`, `index.js`, `index.css`)
- `admin.html` & `admin.js` - Staff and admin content management dashboard
- `supabase-schema.sql` - Complete Postgres database schema with Row Level Security (RLS)

---

## 📱 Building & Running

### Android (Capacitor)
1. Open Android Studio and select **File > Open** pointing to the `android` folder.
2. Build debug APK or run directly on emulator/device:
   ```bash
   cd android
   ./gradlew assembleDebug
   ```

---

## 📄 License
Project proprietary to Student Research Africa.
