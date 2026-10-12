# Supabase Setup

1. Create a Supabase project at supabase.com.
2. Run `supabase-schema.sql` in the Supabase SQL Editor.
3. Under Project Settings -> API, copy your **URL** and **Anon Key**.
4. Set `SUPABASE_URL` and `SUPABASE_ANON_KEY` in your deployment settings, then place the public values in `supabase-config.js` for this static build.
5. The client library is loaded by `index.html`; RLS policies in `supabase-schema.sql` protect user-owned data.
7. **Edge Functions Setup:**
   - Install the Supabase CLI: `npm install -g supabase`
   - Initialize Supabase in your project (if not already done): `supabase init`
   - Link your local project to your Supabase project: `supabase login` then `supabase link --project-ref YOUR_SUPABASE_PROJECT_REF`
   - Create the Edge Functions: `supabase functions new groq-chat`, `supabase functions new groq-search`, `supabase functions new whatsapp-webhook`. This will create the `supabase/functions` directory and boilerplate.
   - Replace the boilerplate code in the newly created files with the content provided in this migration (e.g., `supabase/functions/groq-chat/index.ts`).
   - Configure secrets in your Supabase project settings (Settings -> Edge Functions -> Secrets) or via CLI:
     `supabase secrets set WHATSAPP_VERIFY_TOKEN="your_token"`
     `supabase secrets set WHATSAPP_ACCESS_TOKEN="your_token"`
     `supabase secrets set WHATSAPP_PHONE_NUMBER_ID="your_id"`
     `supabase secrets set GROQ_API_KEY="your_key"`
   - Deploy your Edge Functions: `supabase functions deploy --all` or individually `supabase functions deploy groq-chat`. For `whatsapp-webhook`, you might need `supabase functions deploy whatsapp-webhook --no-verify-jwt` if you're not using JWT authentication for it.
   - Update the frontend (`index.js`) to call the new Supabase Edge Function URLs.

*Note: Emails are normalized to lowercase to prevent login issues.*
