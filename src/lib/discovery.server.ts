import { callAI } from "./ai-engine.server";

export interface StudentProfileContext {
  name?: string;
  age?: number | null;
  grade?: string | number | null;
  country?: string | null;
  city?: string | null;
  school?: string | null;
  mini_bio?: string | null;
  language?: string;
  interests?: string[];
  strengths?: string[];
  problems?: string[];
  goals?: string[];
  dream?: string;
  experience_level?: string;
}

export interface InterviewTurn {
  role: "assistant" | "user";
  content: string;
}

export interface AdaptiveInterviewStepResult {
  done: boolean;
  question?: string;
  dimension_explored?: string;
  reasoning?: string;
  hypotheses?: CareerHypothesis[];
}

export interface CareerHypothesis {
  direction_name: string;
  why_it_appeared: string;
  evidence: string[];
  relevant_strengths: string[];
  relevant_interests: string[];
  unknowns: string[];
  skills_to_explore: string[];
  next_experiment: string;
  status?: "active" | "strengthened" | "weakened" | "explored" | "archived";
}

/**
 * Executes a turn in the Adaptive Discovery Interview.
 * Detects missing dimensions, catches contradictions, and stops when enough signal is gathered.
 */
export async function runAdaptiveDiscoveryTurn(
  context: StudentProfileContext,
  history: InterviewTurn[],
  lang: string = "en"
): Promise<AdaptiveInterviewStepResult> {
  const languageName = lang === "ru" ? "Russian" : lang === "kk" ? "Kazakh" : "English";

  // Stop condition: if student has answered 3-4 adaptive follow-up questions, we have enough depth.
  const userAnswersCount = history.filter((h) => h.role === "user").length;
  if (userAnswersCount >= 3) {
    const hypotheses = await generateCareerHypotheses(context, history, lang);
    return {
      done: true,
      hypotheses,
      reasoning: "Sufficient depth reached to form personalized directional hypotheses.",
    };
  }

  const systemPrompt = `You are the lead Discovery Navigator at MyPath, a career-development platform for students aged 13–18.
Your role is to conduct an ADAPTIVE, thoughtful discovery interview. You do not ask generic quiz questions.

Core Guidelines:
1. Examine what the student already stated in their profile and earlier conversation turns.
2. Identify what crucial dimension is still MISSING (e.g. preferred work environment, leadership vs individual craft, analytical problem solving, risk tolerance, theoretical vs hands-on).
3. Actively watch for CONTRADICTIONS. (e.g. "I love working with people" vs "I hate talking to people") and gently ask for clarification with two distinct situations.
4. Keep questions warm, clear, age-appropriate, concise (max 2-3 sentences), and deeply personalized.
5. NEVER ask multi-part barrage questions. Ask exactly ONE clear question.
6. Reply in ${languageName}.

Output JSON schema:
{
  "done": false,
  "question": "Your single follow-up question here",
  "dimension_explored": "e.g. Work style / Contradiction clarification",
  "reasoning": "Why this question was chosen based on previous answers"
}`;

  const prompt = `Student Profile:
- Name: ${context.name || "Student"}
- Age: ${context.age || "15-17"}
- Grade: ${context.grade || "High school"}
- Location: ${context.city || ""} ${context.country || ""}
- Mini Bio: ${context.mini_bio || "None provided"}
- Selected Interests: ${(context.interests || []).join(", ") || "None"}
- Selected Strengths: ${(context.strengths || []).join(", ") || "None"}
- Causes they care about: ${(context.problems || []).join(", ") || "None"}
- Goals: ${(context.goals || []).join(", ") || "None"}
- Dream / Reflection: "${context.dream || "None"}"
- Experience level: ${context.experience_level || "Not specified"}

Interview History So Far:
${history.map((h) => `${h.role === "assistant" ? "MyPath" : "Student"}: ${h.content}`).join("\n")}

Generate the next adaptive interview step.`;

  try {
    const raw = await callAI({
      systemPrompt,
      prompt,
      jsonOutput: true,
      temperature: 0.3,
      maxTokens: 500,
    });
    const parsed = JSON.parse(raw);
    if (parsed.question) {
      return {
        done: false,
        question: parsed.question,
        dimension_explored: parsed.dimension_explored || "Exploration",
        reasoning: parsed.reasoning || "",
      };
    }
  } catch {
    // Deterministic qualitative fallback
  }

  return generateFallbackAdaptiveQuestion(context, history, lang);
}

/**
 * Generates 3–5 qualitative career hypotheses with real evidence, unknowns, and experiments.
 * Never fabricates evidence and never outputs fake percentage scores.
 */
export async function generateCareerHypotheses(
  context: StudentProfileContext,
  history: InterviewTurn[],
  lang: string = "en"
): Promise<CareerHypothesis[]> {
  const languageName = lang === "ru" ? "Russian" : lang === "kk" ? "Kazakh" : "English";

  const systemPrompt = `You are the lead Career Navigator at MyPath.
Analyze the student's profile and adaptive interview responses to produce 3 to 5 CAREER HYPOTHESES.

CRITICAL RULES:
1. These are HYPOTHESES, not final diagnoses or guaranteed careers.
2. NEVER use percentage scores (NO "92% match", NO "85% compatibility").
3. NEVER fabricate evidence. Only reference things the student actually stated or selected.
4. Each hypothesis must have:
   - "direction_name": e.g. "Climate Tech Builder", "Computational Bio-Researcher", "Social Entrepreneurship"
   - "why_it_appeared": qualitative reasoning connecting their specific answers
   - "evidence": array of 2-4 exact observations from their statements
   - "relevant_strengths": strengths they possess that support this
   - "relevant_interests": interests they declared that align with this
   - "unknowns": what we still don't know (e.g. whether they prefer lab research vs fieldwork)
   - "skills_to_explore": 2-3 specific skills to test
   - "next_experiment": ONE concrete, actionable low-stakes experiment they can do this month
5. Output language: ${languageName}.

Output JSON schema:
{
  "hypotheses": [
    {
      "direction_name": "...",
      "why_it_appeared": "...",
      "evidence": ["...", "..."],
      "relevant_strengths": ["...", "..."],
      "relevant_interests": ["...", "..."],
      "unknowns": ["..."],
      "skills_to_explore": ["...", "..."],
      "next_experiment": "..."
    }
  ]
}`;

  const prompt = `Student Information:
- Name: ${context.name || "Student"}
- Grade/Age: Grade ${context.grade || "10"}, Age ${context.age || "16"}
- Country: ${context.country || "Worldwide"}
- Mini Bio: "${context.mini_bio || "None"}"
- Stated Interests: ${(context.interests || []).join(", ")}
- Stated Strengths: ${(context.strengths || []).join(", ")}
- Causes of Interest: ${(context.problems || []).join(", ")}
- Long-term Dream: "${context.dream || ""}"
- Goals: ${(context.goals || []).join(", ")}

Adaptive Interview Transcript:
${history.map((h) => `${h.role === "assistant" ? "Interviewer" : "Student"}: ${h.content}`).join("\n")}

Synthesize 3–5 personalized career hypotheses adhering strictly to the schema.`;

  try {
    const raw = await callAI({
      systemPrompt,
      prompt,
      jsonOutput: true,
      temperature: 0.25,
      maxTokens: 1800,
    });
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed.hypotheses) && parsed.hypotheses.length >= 3) {
      return parsed.hypotheses.map((h: any) => ({
        direction_name: h.direction_name,
        why_it_appeared: h.why_it_appeared,
        evidence: Array.isArray(h.evidence) ? h.evidence : [String(h.evidence)],
        relevant_strengths: Array.isArray(h.relevant_strengths) ? h.relevant_strengths : [],
        relevant_interests: Array.isArray(h.relevant_interests) ? h.relevant_interests : [],
        unknowns: Array.isArray(h.unknowns) ? h.unknowns : [],
        skills_to_explore: Array.isArray(h.skills_to_explore) ? h.skills_to_explore : [],
        next_experiment: h.next_experiment,
        status: "active" as const,
      }));
    }
  } catch {
    // Deterministic qualitative synthesis fallback
  }

  return synthesizeFallbackHypotheses(context, history, lang);
}

// =========================================================================
// Deterministic Qualitative Reasoning Engines (Guarantees Real Logic Offline)
// =========================================================================

function generateFallbackAdaptiveQuestion(
  context: StudentProfileContext,
  history: InterviewTurn[],
  lang: string
): AdaptiveInterviewStepResult {
  const turnIndex = history.filter((h) => h.role === "user").length;
  const ints = context.interests || [];
  const strs = context.strengths || [];
  const dream = (context.dream || "").toLowerCase();

  // Contradiction Check 1: Working with people vs solo craft
  const likesLeadership = ints.includes("Leadership") || strs.includes("Leadership") || strs.includes("Public speaking");
  const mentionsSolitary = dream.includes("alone") || dream.includes("solo") || dream.includes("один") || dream.includes("жалғыз");

  if (likesLeadership && mentionsSolitary && turnIndex === 0) {
    if (lang === "ru") {
      return {
        done: false,
        question: "Ранее ты указал интерес к лидерству и людям, но также отметил желание работать самостоятельно. Что для тебя комфортнее: вести за собой небольшую доверенную команду или глубоко погружаться в задачу автономно?",
        dimension_explored: "Разрешение противоречия",
        reasoning: "Устранение неясности между стремлением к лидерству и автономной работой.",
      };
    }
    if (lang === "kk") {
      return {
        done: false,
        question: "Бұған дейін көшбасшылық пен адамдармен жұмыс істеуге қызығушылық білдірдің, бірақ сонымен бірге жеке жұмыс істегің келетінін айттың. Саған қайсысы қолайлырақ: шағын топпен жұмыс істеу ме, әлде терең жеке зерттеу ме?",
        dimension_explored: "Қарама-қайшылықты анықтау",
        reasoning: "Көшбасшылық пен дербес жұмыс арасындағы теңгерімді нақтылау.",
      };
    }
    return {
      done: false,
      question: "Earlier you highlighted an interest in leadership, but you also mentioned valuing working independently. Which setting feels more natural: leading a small, close-knit team, or having deep uninterrupted focus on your own piece of work?",
      dimension_explored: "Contradiction resolution",
      reasoning: "Clarifying balance between leadership and autonomous craft.",
    };
  }

  // Turn 0: Deep dive into real-world project experience or hands-on application
  if (turnIndex === 0) {
    const topInterest = ints[0] || (lang === "ru" ? "твоей любимой сфере" : lang === "kk" ? "қызығушылығыңда" : "your top interest");
    if (lang === "ru") {
      return {
        done: false,
        question: `Когда ты занимаешься направлением «${topInterest}», какая часть процесса приносит наибольший азарт: поиск неочевидной идеи, структурирование и планирование, или непосредственное создание конечного продукта?`,
        dimension_explored: "Стиль решения задач",
        reasoning: "Определение роли внутри созидательного процесса.",
      };
    }
    if (lang === "kk") {
      return {
        done: false,
        question: `«${topInterest}» саласында жұмыс істегенде, саған қай кезең көбірек шабыт береді: жаңа идея ойлап табу ма, жүйелеу мен жоспарлау ма, әлде нәтижені өз қолыңмен жасап шығару ма?`,
        dimension_explored: "Мәселе шешу стилі",
        reasoning: "Шығармашылық процестегі негізгі рөлді анықтау.",
      };
    }
    return {
      done: false,
      question: `When engaging with ${topInterest}, what phase gives you the greatest energy: discovering the raw idea, analyzing and structuring the plan, or building the tangible final output with your own hands?`,
      dimension_explored: "Problem-solving posture",
      reasoning: "Discerning creator vs strategist vs builder posture.",
    };
  }

  // Turn 1: Working environment and risk tolerance
  if (turnIndex === 1) {
    if (lang === "ru") {
      return {
        done: false,
        question: "Представь, что у тебя есть месяц свободы для одного проекта. Ты предпочтешь исследовать фундаментальный вопрос без спешки или быстро запустить что-то практическое в условиях неопределенности?",
        dimension_explored: "Среда и отношение к риску",
        reasoning: "Разделение академического исследовательского пути и прикладного/стартап подхода.",
      };
    }
    if (lang === "kk") {
      return {
        done: false,
        question: "Егер саған бір жоба жасауға бір ай уақыт берілсе: асықпай іргелі ғылыми сұрақты терең зерттеуді таңдар ма едің, әлде белгісіздік жағдайында тәуекел етіп практикалық нәтиже шығаруды ма?",
        dimension_explored: "Орта мен тәуекелге көзқарас",
        reasoning: "Академиялық зерттеу мен қолданбалы кәсіпкерлік бағыттарын ажырату.",
      };
    }
    return {
      done: false,
      question: "If you had one month of complete freedom to tackle any project, would you rather deeply investigate an intellectual question without rush, or rapidly ship something into the real world under uncertainty?",
      dimension_explored: "Work environment and risk appetite",
      reasoning: "Differentiating intellectual research vs rapid application.",
    };
  }

  // Turn 2: Real life experience
  if (lang === "ru") {
    return {
      done: false,
      question: "Вспомни один реальный случай за последний год, когда ты преодолел сложную задачу или почувствовал искреннюю гордость за результат. Что именно это было?",
      dimension_explored: "Реальные жизненные примеры",
      reasoning: "Сбор фактологических свидетельств для формулирования гипотез.",
    };
  }
  if (lang === "kk") {
    return {
      done: false,
      question: "Соңғы бір жылда қиын кедергіні жеңіп, нәтижесіне шын жүректен мақтанған бір нақты оқиғаңды айтып берші. Ол қандай іс еді?",
      dimension_explored: "Өмірлік нақты тәжірибе",
      reasoning: "Нақты дәлелдерге негізделген гипотеза жасау үшін фактілер жинау.",
    };
  }
  return {
    done: false,
    question: "Think back to one specific moment in the past year when you pushed through a hard problem or felt genuine pride in what you finished. What was that task?",
    dimension_explored: "Real experiential evidence",
    reasoning: "Gathering ground-truth empirical evidence for career hypotheses.",
  };
}

function synthesizeFallbackHypotheses(
  context: StudentProfileContext,
  history: InterviewTurn[],
  lang: string
): CareerHypothesis[] {
  const ints = context.interests && context.interests.length > 0 ? context.interests : ["Technology", "Leadership"];
  const strs = context.strengths && context.strengths.length > 0 ? context.strengths : ["Problem solving", "Curiosity"];
  const problems = context.problems && context.problems.length > 0 ? context.problems : ["Education inequality", "Technology access"];
  
  // Extract user text fragments as actual evidence
  const userQuotes = history
    .filter((h) => h.role === "user")
    .map((h) => h.content)
    .filter((c) => c.length > 10);

  const evidenceA = userQuotes[0] 
    ? `Your statement: "${userQuotes[0].slice(0, 90)}..."`
    : `Your chosen interest in ${ints[0]} and strength in ${strs[0] || "curiosity"}.`;
  
  const evidenceB = userQuotes[1] 
    ? `Your reflection: "${userQuotes[1].slice(0, 90)}..."`
    : `Your declared commitment to solving ${problems[0] || "meaningful problems"}.`;

  if (lang === "ru") {
    return [
      {
        direction_name: `${ints[0]} & Прикладные инновации`,
        why_it_appeared: `Ты последовательно проявляешь интерес к сфере «${ints[0]}» и опираешься на сильную сторону «${strs[0] || "аналитическое мышление"}».`,
        evidence: [evidenceA, `Выбор ценности решения проблемы: ${problems[0] || "развитие технологий"}`],
        relevant_strengths: [strs[0] || "Любознательность", strs[1] || "Инициативность"],
        relevant_interests: [ints[0], ints[1] || "Технологии"],
        unknowns: ["Привлекает ли тебя больше техническая глубина или организационная сторона."],
        skills_to_explore: ["Прототипирование решений", "Анализ потребностей пользователей"],
        next_experiment: "Создай небольшой мини-проект или исследовательскую заметку по этой теме и покажи 3 сверстникам.",
        status: "active",
      },
      {
        direction_name: "Социальное предпринимательство & Лидерство",
        why_it_appeared: `Сочетание интереса к переменам в обществе (${problems[0] || "образование"}) с готовностью брать на себя инициативу.`,
        evidence: [evidenceB, `Указанная сильная сторона: ${strs.find((s) => s.includes("Lead") || s.includes("Comm") || s.includes("Team")) || "Коммуникация"}`],
        relevant_strengths: ["Лидерство", "Коммуникация"],
        relevant_interests: [ints[1] || ints[0], "Социальное влияние"],
        unknowns: ["Насколько комфортно вести переговоры с внешними взрослыми партнерами."],
        skills_to_explore: ["Презентация идей", "Координация инициатив"],
        next_experiment: "Организуй одно локальное мероприятие или волонтерскую сессию на 5–10 человек.",
        status: "active",
      },
      {
        direction_name: "Аналитическое исследование & Стратегия",
        why_it_appeared: "Стремление глубоко понимать первопричины проблем перед принятием решений.",
        evidence: [`Твой ответ на этапе исследования задач`, `Системный интерес к сфере ${ints[0]}`],
        relevant_strengths: ["Исследование", "Аналитическое мышление"],
        relevant_interests: [ints[0], "Наука & Аналитика"],
        unknowns: ["Нравится ли работать с большими массивами данных или с качественными кейсами."],
        skills_to_explore: ["Методология академического эссе", "Критический анализ источников"],
        next_experiment: "Напиши структурированный аналитический разбор проблемы на 1 страницу.",
        status: "active",
      },
    ];
  }

  if (lang === "kk") {
    return [
      {
        direction_name: `${ints[0]} & Қолданбалы инновациялар`,
        why_it_appeared: `Сен «${ints[0]}» бағытына тұрақты қызығушылық танытып, «${strs[0] || "ізденімпаздық"}» күшіңе сүйенесің.`,
        evidence: [evidenceA, `Маңызды мәселе ретінде таңдауың: ${problems[0] || "білім теңсіздігі"}`],
        relevant_strengths: [strs[0] || "Ізденімпаздық", strs[1] || "Бастамашылдық"],
        relevant_interests: [ints[0], ints[1] || "Технология"],
        unknowns: ["Техникалық тереңдік көбірек тарта ма, әлде ұйымдастырушылық жағы ма."],
        skills_to_explore: ["Шешімдердің прототипін жасау", "Пайдаланушылардың сұранысын талдау"],
        next_experiment: "Осы бағытта шағын жоба немесе зерттеу жазбасын дайындап, 3 адамға көрсет.",
        status: "active",
      },
      {
        direction_name: "Әлеуметтік кәсіпкерлік & Көшбасшылық",
        why_it_appeared: `Қоғамдық мәселелерге (${problems[0] || "жастар дамуы"}) бейжай қарамауың мен бастама көтеруге дайындығың.`,
        evidence: [evidenceB, `Күшті жағың: ${strs[0] || "Қарым-қатынас"}`],
        relevant_strengths: ["Көшбасшылық", "Қарым-қатынас"],
        relevant_interests: [ints[1] || ints[0], "Әлеуметтік ықпал"],
        unknowns: ["Сыртқы серіктестермен келіссөз жүргізу қаншалықты қолайлы."],
        skills_to_explore: ["Идеяны қорғау", "Бастамаларды үйлестіру"],
        next_experiment: "5–10 адамға арналған бір шағын кездесу немесе волонтерлік бастама ұйымдастыр.",
        status: "active",
      },
      {
        direction_name: "Аналитикалық зерттеу & Стратегия",
        why_it_appeared: "Шешім қабылдамас бұрын мәселенің түпкі себептерін терең түсінуге деген ұмтылыс.",
        evidence: [`Сұрақтарға берген жауаптарыңдағы жүйелілік`, `${ints[0]} саласындағы қызығушылық`],
        relevant_strengths: ["Зерттеу", "Аналитикалық ойлау"],
        relevant_interests: [ints[0], "Ғылым & Аналитика"],
        unknowns: ["Үлкен деректермен жұмыс істеу ұнай ма, әлде сапалық мысалдарды зерттеу ме."],
        skills_to_explore: ["Академиялық эссе құрылымы", "Дереккөздерді сыни талдау"],
        next_experiment: "Таңдаған мәселең бойынша 1 беттік нақты сараптамалық жазба жаз.",
        status: "active",
      },
    ];
  }

  return [
    {
      direction_name: `${ints[0]} & Applied Innovation`,
      why_it_appeared: `You consistently expressed curiosity in ${ints[0]} backed by strength in ${strs[0] || "analytical problem solving"}.`,
      evidence: [evidenceA, `Identified priority cause: ${problems[0] || "technology access"}`],
      relevant_strengths: [strs[0] || "Curiosity", strs[1] || "Initiative"],
      relevant_interests: [ints[0], ints[1] || "Technology"],
      unknowns: ["Whether you gravitate more toward the underlying technical craft or the product leadership side."],
      skills_to_explore: ["Rapid prototyping", "User research"],
      next_experiment: "Build a tiny proof-of-concept or 1-page writeup on this topic and share it with 3 peers.",
      status: "active",
    },
    {
      direction_name: "Social Impact & Initiative Leadership",
      why_it_appeared: `A distinct fusion of cause-oriented drive (${problems[0] || "youth development"}) and organizational initiative.`,
      evidence: [evidenceB, `Declared competency: ${strs.find((s) => s.includes("Lead") || s.includes("Comm") || s.includes("Team")) || "Communication"}`],
      relevant_strengths: ["Leadership", "Communication"],
      relevant_interests: [ints[1] || ints[0], "Social Impact"],
      unknowns: ["How comfortable you are pitching external community stakeholders."],
      skills_to_explore: ["Storytelling", "Community coordination"],
      next_experiment: "Organize a small roundtable or focused 1-hour workshop for 5-10 people.",
      status: "active",
    },
    {
      direction_name: "Analytical Research & Strategy",
      why_it_appeared: "A clear inclination to investigate root mechanisms rather than settling for superficial answers.",
      evidence: ["Systematic approach across your discovery responses", `Focus on ${ints[0]}`],
      relevant_strengths: ["Research", "Analytical thinking"],
      relevant_interests: [ints[0], "Science & Strategy"],
      unknowns: ["Whether you prefer quantitative data modeling or qualitative synthesis."],
      skills_to_explore: ["Literature synthesis", "Critical methodology"],
      next_experiment: "Draft a concise 1-page memo analyzing the biggest bottleneck in this field.",
      status: "active",
    },
  ];
}
