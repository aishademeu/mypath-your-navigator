/**
 * MyPath Hard AI Core - Multi-Provider Server-Side AI Engine
 * 
 * Supports:
 * 1. Google Gemini API (via GEMINI_API_KEY)
 * 2. OpenAI / Compatible (via OPENAI_API_KEY or LOVABLE_API_KEY)
 * 3. High-Quality Deterministic Qualitative Reasoning Fallback
 * 
 * Security: Keys are ONLY read server-side and never exposed to the client.
 * Cost control: Enforces max tokens, compact context, and JSON mode.
 */

export interface AICallOptions {
  systemPrompt: string;
  prompt: string;
  jsonOutput?: boolean;
  temperature?: number;
  maxTokens?: number;
}

export async function callAI(options: AICallOptions): Promise<string> {
  const geminiKey = process.env.GEMINI_API_KEY;
  const openaiKey = process.env.OPENAI_API_KEY || process.env.LOVABLE_API_KEY;

  // 1. Google Gemini Provider
  if (geminiKey) {
    try {
      const model = "gemini-2.5-flash";
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${geminiKey}`;

      const payload: any = {
        contents: [
          {
            role: "user",
            parts: [{ text: `${options.systemPrompt}\n\n${options.prompt}` }],
          },
        ],
        generationConfig: {
          temperature: options.temperature ?? 0.2,
          maxOutputTokens: options.maxTokens ?? 1500,
        },
      };

      if (options.jsonOutput) {
        payload.generationConfig.responseMimeType = "application/json";
      }

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        const data = await res.json();
        const candidate = data.candidates?.[0];
        const text = candidate?.content?.parts?.[0]?.text;
        if (text) return text.trim();
      } else {
        console.warn(`[AI Engine] Gemini returned status ${res.status}:`, await res.text());
      }
    } catch (err) {
      console.warn("[AI Engine] Gemini call failed:", err);
    }
  }

  // 2. OpenAI / Lovable Provider
  if (openaiKey) {
    try {
      const isLovable = !process.env.OPENAI_API_KEY && !!process.env.LOVABLE_API_KEY;
      const baseUrl = isLovable ? "https://ai.gateway.lovable.dev/v1" : "https://api.openai.com/v1";
      const headers: Record<string, string> = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${openaiKey}`,
      };
      if (isLovable) {
        headers["Lovable-API-Key"] = openaiKey;
      }

      const payload: any = {
        model: isLovable ? "google/gemini-2.5-flash" : "gpt-4o-mini",
        messages: [
          { role: "system", content: options.systemPrompt },
          { role: "user", content: options.prompt },
        ],
        temperature: options.temperature ?? 0.2,
        max_tokens: options.maxTokens ?? 1500,
      };

      if (options.jsonOutput) {
        payload.response_format = { type: "json_object" };
      }

      const res = await fetch(`${baseUrl}/chat/completions`, {
        method: "POST",
        headers,
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        const data = await res.json();
        const text = data.choices?.[0]?.message?.content;
        if (text) return text.trim();
      } else {
        console.warn(`[AI Engine] OpenAI provider returned status ${res.status}:`, await res.text());
      }
    } catch (err) {
      console.warn("[AI Engine] OpenAI provider call failed:", err);
    }
  }

  // 3. Fallback: Return null if external providers failed or unconfigured,
  // allowing callers to use the domain-specific qualitative reasoning logic
  throw new Error("EXTERNAL_AI_UNAVAILABLE");
}
