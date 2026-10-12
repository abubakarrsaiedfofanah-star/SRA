# Student Research Africa (SRA) - Tech Stack & Expansion Roadmap

This document outlines the strategy for expanding Student Research Africa across multiple programming languages and frameworks (Python, React/Next.js, Flutter, and Native Android/iOS).

---

## 1. Python (AI & Backend Edge Services)
* **Role**: Powering AI processing, OCR extraction for snapped question papers, Whisper speech-to-text for voice notes, WhatsApp Cloud API webhooks, and Supabase database triggers.
* **Implementation**: Python (FastAPI / Supabase Python Functions) running serverless in Supabase Edge or backend servers with the `groq` SDK.

## 2. React / Next.js (Web & Dashboard Scaling)
* **Role**: Scaling the current static web frontend into a high-performance Server-Side Rendered (SSR) web application.
* **Benefits**: Improved SEO for past papers and curriculum guides across Africa, component reusability, and advanced state management.

## 3. Flutter / Dart (Cross-Platform Mobile App)
* **Role**: High-performance cross-platform mobile application compiled natively for Android and iOS.
* **Benefits**: Direct hardware rendering (Impeller engine), fluid 60fps animations, rich Material 3 widgets tailored for African student study tools.

## 4. Current Foundation (Capacitor + HTML/JS/CSS + Java 17)
* **Role**: Proven production-ready hybrid native Android app (`com.studentresearchafrica.app`) currently deployed and running with 4 role-based portals and offline sync.
