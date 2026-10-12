import { serve } from 'https://deno.land/std@0.177.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// Helper functions (extractMessages, resolveMessageText, generateStudyAnswer, sendWhatsappText, formatWhatsappAnswer, titleCase)
// would need to be adapted for Deno and imported or defined here.
// For this example, we'll use placeholders for them.

// Placeholder for adapted helper functions
function extractMessages(payload: any): any[] {
  console.log("extractMessages placeholder called");
  const entries = payload.entry || [];
  return entries.flatMap((entry: any) =>
    (entry.changes || []).flatMap((change: any) => {
      const value = change.value || {};
      const metadata = value.metadata || {};
      return (value.messages || []).map((message: any) => ({
        ...message,
        phoneNumberId: metadata.phone_number_id,
        contact: (value.contacts || []).find((contact: any) => contact.wa_id === message.from),
      }));
    })
  );
}

async function resolveMessageText(message: any, media: any): Promise<string> {
  console.log("resolveMessageText placeholder called");
  // This is where media download, OCR, Whisper logic would go.
  // For now, a simple text extraction.
  return message.text?.body || "Explain this topic (placeholder)";
}

async function generateStudyAnswer(question: string): Promise<any> {
  console.log("generateStudyAnswer placeholder called");
  const GROQ_API_KEY = Deno.env.get('GROQ_API_KEY');
  if (!GROQ_API_KEY) {
    return {
      title: "AI Backend Not Configured",
      short: "Please set up your Groq API key.",
      notes: [], quiz: []
    };
  }

  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GROQ_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "llama-3.1-8b-instant",
      temperature: 0.3,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: "You are Student Research Africa, a helpful academic tutor for African students on WhatsApp. Return only JSON with title, short, notes array, quiz array. The question may come from typed text, Groq OCR from a snapped photo, or Groq Whisper transcription from a voice note. If OCR or transcription is unclear, ask the student to type a short caption or exact question in the same WhatsApp chat, and still give helpful next steps.",
        },
        {
          role: "user",
          content: `Question: ${question}`,
        },
      ],
    }),
  });

  if (!response.ok) {
    console.error("Groq error", await response.text());
    return { title: "Error", short: "Could not generate answer." };
  }

  const data = await response.json();
  const raw = data.choices?.[0]?.message?.content || "{}";

  try {
    const parsed = JSON.parse(raw);
    return {
      title: parsed.title || "Study Answer",
      short: parsed.short || "Here is a simple answer to your question.",
      notes: Array.isArray(parsed.notes) ? parsed.notes.slice(0, 5) : [],
      quiz: Array.isArray(parsed.quiz) ? parsed.quiz.slice(0, 3) : [],
    };
  } catch (error) {
    return { title: "Error", short: "Could not parse AI response." };
  }
}

async function sendWhatsappText(to: string, body: string): Promise<void> {
  const WHATSAPP_ACCESS_TOKEN = Deno.env.get('WHATSAPP_ACCESS_TOKEN');
  const WHATSAPP_PHONE_NUMBER_ID = Deno.env.get('WHATSAPP_PHONE_NUMBER_ID');

  if (!WHATSAPP_ACCESS_TOKEN || !WHATSAPP_PHONE_NUMBER_ID) {
    console.error("WhatsApp API secrets not configured.");
    return;
  }

  const response = await fetch(`https://graph.facebook.com/v20.0/${WHATSAPP_PHONE_NUMBER_ID}/messages`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${WHATSAPP_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      to,
      type: "text",
      text: {
        preview_url: false,
        body,
      },
    }),
  });

  if (!response.ok) {
    console.error("WhatsApp send error", await response.text());
  }
}

function formatWhatsappAnswer(answer: any): string {
  return [
    `*${answer.title}*`,
    "",
    answer.short,
    "",
    "*Notes*",
    ...answer.notes.map((note: string, index: number) => `${index + 1}. ${note}`),
    "",
    "*Quick Quiz*",
    ...answer.quiz.map((item: string, index: number) => `${index + 1}. ${item}`),
    "",
    "Reply with another question to continue researching.",
  ].join("\n");
}

serve(async (req) => {
  const WHATSAPP_VERIFY_TOKEN = Deno.env.get('WHATSAPP_VERIFY_TOKEN');

  if (req.method === "GET") {
    const url = new URL(req.url);
    const mode = url.searchParams.get("hub.mode");
    const token = url.searchParams.get("hub.verify_token");
    const challenge = url.searchParams.get("hub.challenge");

    if (mode === "subscribe" && token === WHATSAPP_VERIFY_TOKEN) {
      return new Response(challenge, { status: 200 });
    }
    return new Response("Forbidden", { status: 403 });
  }

  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  try {
    const payload = await req.json();
    const messages = extractMessages(payload);

    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        global: {
          headers: { Authorization: req.headers.get('Authorization')! },
        },
      }
    );

    await Promise.all(messages.map(async (message: any) => {
      const studentPhone = message.from;
      const profileName = message.contact?.profile?.name || "WhatsApp Student";
      const media = message.media;
      const text = await resolveMessageText(message, media);

      const { data: questionData, error: questionError } = await supabaseClient
        .from('questions')
        .insert({
          channel: "whatsapp",
          student_phone: studentPhone,
          student_name: profileName,
          text: text,
          message_type: message.type,
          media: media,
          whatsapp_message_id: message.id,
          status: "received",
          created_at: new Date().toISOString(),
        })
        .select()
        .single();

      if (questionError) {
        console.error("Error inserting question into Supabase:", questionError);
        return;
      }

      const answer = await generateStudyAnswer(text);

      const { error: answerError } = await supabaseClient
        .from('answers')
        .insert({
          question_id: questionData.id,
          channel: "whatsapp",
          student_phone: studentPhone,
          title: answer.title,
          short: answer.short,
          notes: answer.notes,
          quiz: answer.quiz,
          status: "draft",
          created_at: new Date().toISOString(),
        });

      if (answerError) {
        console.error("Error inserting answer into Supabase:", answerError);
        return;
      }

      await supabaseClient
        .from('questions')
        .update({ status: "answered", answered_at: new Date().toISOString() })
        .eq('id', questionData.id);

      await sendWhatsappText(studentPhone, formatWhatsappAnswer(answer));
    }));

    return new Response("OK", { status: 200 });
  } catch (error) {
    console.error("WhatsApp webhook error", error);
    return new Response("Internal Server Error", { status: 500 });
  }
});