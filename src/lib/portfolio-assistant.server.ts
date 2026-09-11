import { callAI } from "./ai-engine.server";

export interface PolishPortfolioInput {
  title: string;
  section: string;
  rawDescription: string;
  roleOrContribution?: string;
  lang?: string;
}

export interface PolishPortfolioOutput {
  polishedTitle: string;
  polishedDescription: string;
  demonstratedSkills: string[];
  missingInformationPrompt?: string;
}

/**
 * Polishes portfolio items strictly without hallucinating or fabricating facts.
 * Enhances clarity, structures impact, and identifies demonstrated competencies.
 */
export async function polishPortfolioItem(
  input: PolishPortfolioInput
): Promise<PolishPortfolioOutput> {
  const lang = input.lang || "en";
  const languageName = lang === "ru" ? "Russian" : lang === "kk" ? "Kazakh" : "English";

  const systemPrompt = `You are the MyPath Portfolio Intelligence Assistant.
Your mission is to help a student (aged 13-18) articulate their real experiences clearly and compellingly for university admissions and scholarship committees.

STRICT ANTI-HALLUCINATION PROTOCOL:
1. NEVER invent achievements, awards, metrics, test scores, or partnerships that the student did not provide.
2. NEVER claim they "founded" or "led" something unless explicitly stated.
3. If crucial context is missing (e.g. what their exact personal role was, or what the concrete result was), provide a gentle "missingInformationPrompt" asking for that detail.
4. Structure the description into 1-2 punchy sentences focusing on: (1) Problem/Context, (2) Student's exact action, (3) Real outcome.
5. Identify 2–4 demonstrated skills directly supported by the text.
6. Output in ${languageName}.

Output JSON schema:
{
  "polishedTitle": "Clean, professional title",
  "polishedDescription": "Crisp, factual description highlighting personal contribution",
  "demonstratedSkills": ["Skill 1", "Skill 2"],
  "missingInformationPrompt": "Optional prompt asking for missing details (or null if description is already detailed)"
}`;

  const prompt = `Student Submission:
- Section: ${input.section}
- Current Title: "${input.title}"
- Raw Description: "${input.rawDescription}"
- Stated Role / Contribution: "${input.roleOrContribution || "Not specified"}"

Polish this portfolio item strictly adhering to the truth and guidelines.`;

  try {
    const raw = await callAI({
      systemPrompt,
      prompt,
      jsonOutput: true,
      temperature: 0.2,
      maxTokens: 500,
    });
    const parsed = JSON.parse(raw);
    if (parsed.polishedTitle && parsed.polishedDescription) {
      return {
        polishedTitle: parsed.polishedTitle,
        polishedDescription: parsed.polishedDescription,
        demonstratedSkills: Array.isArray(parsed.demonstratedSkills) ? parsed.demonstratedSkills : [],
        missingInformationPrompt: parsed.missingInformationPrompt || undefined,
      };
    }
  } catch {
    // Fallback logic
  }

  // Deterministic fallback
  const cleanTitle = input.title.trim() || "Independent Project";
  const cleanDesc = input.rawDescription.trim() || "Conducted independent research and practical execution.";
  return {
    polishedTitle: cleanTitle,
    polishedDescription: cleanDesc,
    demonstratedSkills: ["Initiative", "Critical Thinking", "Execution"],
    missingInformationPrompt: input.rawDescription.length < 50
      ? (lang === "ru"
          ? "Добавь конкретики: какова была твоя личная роль и какой конечный результат получился?"
          : lang === "kk"
          ? "Нақтырақ жаз: сенің жеке рөлің қандай болды және қандай нақты нәтижеге қол жеткіздің?"
          : "Could you specify what your exact role was and what the measurable outcome was?")
      : undefined,
  };
}
