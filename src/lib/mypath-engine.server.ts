import { callAI } from "./ai-engine.server";
import type { StudentProfileContext, CareerHypothesis } from "./discovery.server";
import type { Opportunity } from "./opportunities";

export interface PrimaryNextAction {
  action: string;
  why_it_matters: string;
  expected_outcome: string;
  supporting_recommendation?: string;
  category?: string;
}

export interface MyPathContext {
  student: StudentProfileContext;
  hypotheses: CareerHypothesis[];
  completedActionCount: number;
  portfolioItemsCount: number;
  savedOpportunities: Opportunity[];
  lang?: string;
}

/**
 * Computes the single highest-leverage next action for the student.
 * Never outputs multiple disjoint tasks; synthesizes ONE clear priority.
 */
export async function computePrimaryNextAction(
  ctx: MyPathContext
): Promise<PrimaryNextAction> {
  const lang = ctx.lang || "en";
  const languageName = lang === "ru" ? "Russian" : lang === "kk" ? "Kazakh" : "English";

  const primaryHypothesis = ctx.hypotheses[0];

  const systemPrompt = `You are the MyPath Engine, the central strategic intelligence layer for students aged 13-18.
Your mission is to answer ONE question with singular clarity:
"What is the single most important action this student should take next?"

RULES:
1. Generate exactly ONE primary next action. Never present a fragmented list.
2. The action must be concrete, high-signal, and achievable within 1–2 weeks.
3. It must directly advance their leading career hypothesis or close an evident portfolio gap.
4. If they have zero portfolio items, the first priority is shipping one tangible proof-of-work artifact.
5. If they already have theoretical knowledge, emphasize practical application or external verification (competitions/research).
6. Response must be in ${languageName}.

Output JSON schema:
{
  "action": "Clear, concise imperative sentence",
  "why_it_matters": "Qualitative explanation grounded in their specific profile & hypotheses",
  "expected_outcome": "The tangible artifact or clarity gained upon completion",
  "supporting_recommendation": "Optional specific tip or suggested framework"
}`;

  const prompt = `Student State:
- Grade: ${ctx.student.grade || "High school"}
- Top Interests: ${(ctx.student.interests || []).join(", ") || "Forming"}
- Top Strengths: ${(ctx.student.strengths || []).join(", ") || "Forming"}
- Mini Bio: "${ctx.student.mini_bio || "None"}"
- Portfolio Items: ${ctx.portfolioItemsCount} items completed
- Completed My Path Actions: ${ctx.completedActionCount}
- Leading Direction Hypothesis: ${primaryHypothesis ? primaryHypothesis.direction_name : "General Foundation"}
- Hypothesis Rationale: ${primaryHypothesis ? primaryHypothesis.why_it_appeared : ""}
- Recommended Experiment: ${primaryHypothesis ? primaryHypothesis.next_experiment : "Build a starter project"}
- Saved Opportunities: ${ctx.savedOpportunities.map((o) => o.title).slice(0, 3).join(", ") || "None"}

Synthesize the single primary next action.`;

  try {
    const raw = await callAI({
      systemPrompt,
      prompt,
      jsonOutput: true,
      temperature: 0.2,
      maxTokens: 500,
    });
    const parsed = JSON.parse(raw);
    if (parsed.action && parsed.why_it_matters && parsed.expected_outcome) {
      return {
        action: parsed.action,
        why_it_matters: parsed.why_it_matters,
        expected_outcome: parsed.expected_outcome,
        supporting_recommendation: parsed.supporting_recommendation || undefined,
      };
    }
  } catch {
    // Fallback domain logic
  }

  return computeFallbackPrimaryAction(ctx);
}

function computeFallbackPrimaryAction(ctx: MyPathContext): PrimaryNextAction {
  const lang = ctx.lang || "en";
  const primaryHypothesis = ctx.hypotheses[0];
  const topInterest = ctx.student.interests?.[0] || "Innovation";

  // Case 1: Portfolio is empty -> First priority is building 1 tangible artifact
  if (ctx.portfolioItemsCount === 0) {
    if (lang === "ru") {
      return {
        action: `Создай и опиши свой первый прикладной артефакт в сфере «${topInterest}»`,
        why_it_matters: "Теоретические интересы не видны университетам и экспертам. Первый реальный проект переводит тебя из категории наблюдателей в категорию созидателей.",
        expected_outcome: "Один законченный проект (эссе, прототип, исследование или инициатива), добавленный в твое портфолио.",
        supporting_recommendation: primaryHypothesis?.next_experiment || "Начни с решения понятной задачи, которая занимает не более 7 дней.",
      };
    }
    if (lang === "kk") {
      return {
        action: `«${topInterest}» бағытында өзіңнің алғашқы нақты жобаңды жасап, портфолиоға қос`,
        why_it_matters: "Тек қызығушылық жеткіліксіз — университеттер мен сарапшылар нақты нәтижені бағалайды. Алғашқы жоба сені жасаушылар қатарына өткізеді.",
        expected_outcome: "Портфолиоңда бір толық аяқталған жұмыс (эссе, прототип немесе бастама) пайда болады.",
        supporting_recommendation: primaryHypothesis?.next_experiment || "7 күн ішінде аяқталатын қарапайым шешімнен баста.",
      };
    }
    return {
      action: `Build and document your first tangible proof-of-work project in ${topInterest}`,
      why_it_matters: "Curiosity alone doesn't prove capability to admissions committees or mentors. A single finished artifact separates builders from spectators.",
      expected_outcome: "One documented project or research artifact published in your portfolio.",
      supporting_recommendation: primaryHypothesis?.next_experiment || "Pick a problem you can finish and show within 7 days.",
    };
  }

  // Case 2: Saved opportunities exist -> Apply or prepare for external submission
  if (ctx.savedOpportunities.length > 0) {
    const opp = ctx.savedOpportunities[0];
    if (lang === "ru") {
      return {
        action: `Подготовь черновик заявки на участие в «${opp.title}»`,
        why_it_matters: `Ты уже сохранил эту возможность. Участие в отборе от ${opp.org} даст внешнюю валидацию твоих навыков.`,
        expected_outcome: "Готовый черновик мотивационного письма или эссе с релевантными пунктами твоего портфолио.",
        supporting_recommendation: "Выдели 45 минут в ближайшие 48 часов, чтобы закрыть первый шаг заявки.",
      };
    }
    if (lang === "kk") {
      return {
        action: `«${opp.title}» бағдарламасына өтінішіңнің алғашқы нұсқасын дайында`,
        why_it_matters: `Сен бұл мүмкіндікті сақтап қойдың. ${opp.org} ұйымынан өту сенің қабілетіңді сыртқы деңгейде дәлелдейді.`,
        expected_outcome: "Портфолиоңа негізделген дайын мотивациялық хат немесе өтініш нобайы.",
        supporting_recommendation: "Алдағы 48 сағатта алғашқы қадамды аяқтау үшін 45 минут бөл.",
      };
    }
    return {
      action: `Draft your core application submission for "${opp.title}"`,
      why_it_matters: `You saved this opportunity. Putting your work in front of ${opp.org} provides objective external validation.`,
      expected_outcome: "A completed first draft of your essay or submission linking your portfolio evidence.",
      supporting_recommendation: "Block 45 minutes in the next 48 hours to complete step 1 of the application.",
    };
  }

  // Case 3: Next experiment from leading hypothesis
  const exp = primaryHypothesis?.next_experiment || `Conduct an outreach interview with a professional in ${topInterest}`;
  if (lang === "ru") {
    return {
      action: exp,
      why_it_matters: `Это проверит гипотезу «${primaryHypothesis?.direction_name || topInterest}» на практике до того, как ты потратишь месяцы вслепую.`,
      expected_outcome: "Ясное понимание: вдохновляет ли тебя эта сфера в реальности или стоит скорректировать курс.",
      supporting_recommendation: "Зафиксируй выводы в блокноте или обсуди с AI Ментором сразу после выполнения.",
    };
  }
  if (lang === "kk") {
    return {
      action: exp,
      why_it_matters: `Бұл «${primaryHypothesis?.direction_name || topInterest}» гипотезасын іс жүзінде сынап, уақытыңды үнемдейді.`,
      expected_outcome: "Бұл бағыттың саған қаншалықты сәйкес келетіні туралы нақты түсінік.",
      supporting_recommendation: "Нәтижені жазып ал немесе AI Тәлімгермен талқыла.",
    };
  }
  return {
    action: exp,
    why_it_matters: `This tests your hypothesis "${primaryHypothesis?.direction_name || topInterest}" against reality before you commit months blind.`,
    expected_outcome: "Direct experiential clarity on whether this direction energizes you.",
    supporting_recommendation: "Note down key learnings and review them with your AI Mentor once done.",
  };
}
