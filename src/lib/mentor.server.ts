import { callAI } from "./ai-engine.server";
import type { StudentProfileContext, CareerHypothesis } from "./discovery.server";
import type { PrimaryNextAction } from "./mypath-engine.server";

export interface MentorMessage {
  role: "user" | "assistant";
  content: string;
}

export interface MentorContext {
  student: StudentProfileContext;
  hypotheses: CareerHypothesis[];
  nextAction?: PrimaryNextAction | null;
  portfolioSummary: string[];
  conversationHistory: MentorMessage[];
  lang?: string;
}

/**
 * Executes a contextual turn with the AI Mentor.
 * Employs a bounded context window (last 6 messages) and contextual grounding.
 */
export async function generateMentorResponse(ctx: MentorContext): Promise<string> {
  const lang = ctx.lang || "en";
  const languageName = lang === "ru" ? "Russian" : lang === "kk" ? "Kazakh" : "English";

  // Bounded context window: keep only the most recent 6 messages to control tokens
  const recentHistory = ctx.conversationHistory.slice(-6);

  const leadingHypothesis = ctx.hypotheses[0];

  const systemPrompt = `You are the MyPath AI Mentor, an intellectual, warm, and candid advisor for ambitious high school students (aged 13–18).

YOUR PERSONALITY & MENTORSHIP STYLE:
- You are not a customer-service bot, an encyclopedia, or an obsequious assistant.
- You speak as a thoughtful senior mentor who cares about the student's authentic growth.
- You think critically. If a student is taking yet another introductory course instead of building something real, tell them candidly:
  "I would not recommend doing another course right now. You already have enough theoretical exposure in this area. What you appear to be missing is evidence that you can apply it, so your next useful step is..."
- Keep your answers concise, structured, punchy, and actionable (usually 2 to 4 short paragraphs).
- Ground your advice directly in their actual profile, current hypotheses, and current My Path priority action.
- Respond fluently in ${languageName}.

CRITICAL PRIVACY:
- This is a safe, private space for the student. Do not disclose or leak internal database identifiers.`;

  const studentContextBrief = `Student Context:
- Name: ${ctx.student.name || "Student"}
- Grade: ${ctx.student.grade || "High school"}, Age: ${ctx.student.age || "15-18"}
- Location: ${ctx.student.city || ""} ${ctx.student.country || ""}
- Mini Bio (user's own words): "${ctx.student.mini_bio || "None"}"
- Core Interests: ${(ctx.student.interests || []).join(", ") || "Forming"}
- Core Strengths: ${(ctx.student.strengths || []).join(", ") || "Forming"}
- Leading Career Hypothesis: ${leadingHypothesis ? `${leadingHypothesis.direction_name} (Evidence: ${leadingHypothesis.evidence.slice(0, 2).join("; ")})` : "General Exploration"}
- Active Next Action: ${ctx.nextAction ? ctx.nextAction.action : "Explore directions"}
- Portfolio Highlights: ${ctx.portfolioSummary.length > 0 ? ctx.portfolioSummary.join("; ") : "No portfolio items yet (needs proof-of-work)"}`;

  const conversationFormatted = recentHistory
    .map((m) => `${m.role === "user" ? "Student" : "Mentor"}: ${m.content}`)
    .join("\n\n");

  const prompt = `${studentContextBrief}

Conversation History:
${conversationFormatted}

Reply to the student's latest message as their MyPath AI Mentor.`;

  try {
    const response = await callAI({
      systemPrompt,
      prompt,
      temperature: 0.35,
      maxTokens: 650,
    });
    if (response) return response;
  } catch {
    // Deterministic qualitative mentor fallback
  }

  return generateFallbackMentorResponse(ctx);
}

function generateFallbackMentorResponse(ctx: MentorContext): string {
  const lang = ctx.lang || "en";
  const lastUserMsg = [...ctx.conversationHistory].reverse().find((m) => m.role === "user")?.content || "";
  const low = lastUserMsg.toLowerCase();
  const name = (ctx.student.name || "friend").split(" ")[0];
  const topInterest = ctx.student.interests?.[0] || "your interest";
  const leadingHypothesis = ctx.hypotheses[0];

  // If asking about next steps / what to do
  if (low.includes("next") || low.includes("делать") || low.includes("дальше") || low.includes("не істе") || low.includes("қадам")) {
    if (ctx.nextAction) {
      if (lang === "ru") {
        return `Здравствуй, ${name}. Давай сфокусируемся на главном.\n\nТвой текущий ключевой шаг сейчас: **${ctx.nextAction.action}**.\n\nПочему именно это: ${ctx.nextAction.why_it_matters}\n\nНе распыляйся на десятки задач одновременно. Сделай этот один шаг за ближайшие 48 часов, и это даст тебе осязаемый результат: ${ctx.nextAction.expected_outcome}.`;
      }
      if (lang === "kk") {
        return `Сәлем, ${name}. Ең бастысына назар аударайық.\n\nҚазіргі ең маңызды қадамың: **${ctx.nextAction.action}**.\n\nНеге бұл маңызды: ${ctx.nextAction.why_it_matters}\n\nКөп іске бірден шашырама. Алдағы 48 сағатта осы бір қадамды аяқта, ол саған нақты нәтиже береді: ${ctx.nextAction.expected_outcome}.`;
      }
      return `Here is what matters most right now, ${name}:\n\nYour primary next action is: **${ctx.nextAction.action}**.\n\nWhy this matters: ${ctx.nextAction.why_it_matters}\n\nResist the temptation to multitask across five different things. Execute this single step within the next 48 hours to unlock: ${ctx.nextAction.expected_outcome}.`;
    }
  }

  // If asking about direction / hypotheses
  if (low.includes("direction") || low.includes("hypothes") || low.includes("направлен") || low.includes("бағыт") || low.includes("куда")) {
    if (leadingHypothesis) {
      if (lang === "ru") {
        return `Глядя на твои ответы и профиль, твое ведущее направление сейчас — **${leadingHypothesis.direction_name}**.\n\nЭто не окончательный приговор, а гипотеза для проверки. Она появилась потому, что ты указал интерес к сфере ${topInterest} и сильные стороны в решении задач.\n\nГлавное неизвестное сейчас: ${leadingHypothesis.unknowns[0] || "насколько тебе близок прикладной формат"}. Чтобы проверить это без спешки, попробуй эксперимент: ${leadingHypothesis.next_experiment}.`;
      }
      if (lang === "kk") {
        return `Сенің профилің мен жауаптарыңа қарап, қазіргі негізгі жұмыс гипотезаң — **${leadingHypothesis.direction_name}**.\n\nБұл соңғы нүкте емес, сынап көруге арналған бағыт. Ол сенің ${topInterest} саласына қызығушылығың мен қабілеттеріңе негізделген.\n\nБасты белгісіз жайт: ${leadingHypothesis.unknowns[0] || "практикалық форматтың қаншалықты ұнайтыны"}. Мұны тексеру үшін осы тәжірибені жасап көр: ${leadingHypothesis.next_experiment}.`;
      }
      return `Looking at your evidence and patterns, your leading working direction is **${leadingHypothesis.direction_name}**.\n\nRemember: this is a hypothesis, not a lifetime verdict. It appeared because of your genuine inclination toward ${topInterest}.\n\nWhat we still need to verify: ${leadingHypothesis.unknowns[0] || "your preference for hands-on execution"}. A great low-stakes way to test this is: ${leadingHypothesis.next_experiment}.`;
    }
  }

  // If asking about portfolio / courses / resume
  if (low.includes("course") || low.includes("курс") || low.includes("portfolio") || low.includes("портфолио")) {
    if (lang === "ru") {
      return `Честный совет, ${name}: я бы не рекомендовал сейчас записываться на очередной теоретический курс. У тебя уже достаточно общей информации.\n\nТо, чего сейчас действительно не хватает в профиле — это осязаемых доказательств того, что ты умеешь применять знания на практике. Один законченный проект или эссе принесут тебе в пять раз больше пользы, чем еще один сертификат о прослушивании лекций.`;
    }
    if (lang === "kk") {
      return `Саған шынайы ақыл, ${name}: мен дәл қазір тағы бір теориялық курс оқуды ұсынбаймын. Сенде жалпы түсінік қалыптасқан.\n\nҚазір саған ең керегі — біліміңді іс жүзінде қолдана алатыныңды көрсететін нақты нәтиже. Аяқталған бір шағын жоба немесе зерттеу саған ондаған теориялық сертификаттан гөрі әлдеқайда көп пайда береді.`;
    }
    return `An honest observation, ${name}: I would not recommend doing another course right now. You already have enough theoretical exposure in this area.\n\nWhat you appear to be missing is tangible evidence that you can apply it. One finished proof-of-work project or structured analysis will advance your profile far more than another passive completion certificate.`;
  }

  // General grounded response
  if (lang === "ru") {
    return `Хороший вопрос, ${name}. Твой профиль сейчас развивается вокруг интереса к «${topInterest}». Главный принцип MyPath — направление открывается в действии, а не в бесконечных размышлениях.\n\nКакой один небольшой шаг ты готов сделать в ближайшие 48 часов, чтобы проверить свои силы?`;
  }
  if (lang === "kk") {
    return `Жақсы сұрақ, ${name}. Сенің профилің қазір «${topInterest}» төңірегінде қалыптасуда. MyPath-тің басты қағидасы — бағыт ойланудан емес, нақты әрекеттен табылады.\n\nӨз күшіңді сынап көру үшін алдағы 48 сағатта қандай кішкене қадам жасауға дайынсың?`;
  }
  return `That's a meaningful question, ${name}. Your profile is currently centered around ${topInterest}. The core principle of MyPath is that direction is discovered through action, not abstract contemplation.\n\nWhat is one concrete, low-stakes action you can commit to completing in the next 48 hours?`;
}
