import type { Opportunity } from "./opportunities";
import type { StudentProfileContext, CareerHypothesis } from "./discovery.server";

export interface QualitativeMatch {
  opp: Opportunity;
  eligible: boolean;
  relevanceRationale: string; // The "Why this is relevant to you" qualitative explanation
  reasons: string[];
  blockers: string[];
  isDeadlineApproaching: boolean;
}

/**
 * Evaluates opportunities purely qualitatively.
 * Eliminates fake percentage match scores entirely.
 * Automatically filters out expired listings.
 */
export function matchOpportunitiesQualitatively(
  opportunities: Opportunity[],
  student: StudentProfileContext,
  hypotheses: CareerHypothesis[] = [],
  lang: string = "en"
): QualitativeMatch[] {
  const today = new Date().toISOString().slice(0, 10);
  const leadingHypothesis = hypotheses[0];

  // Exclude expired listings automatically
  const activeOpportunities = opportunities.filter((o) => {
    if (!o.deadline) return true;
    return o.deadline >= today;
  });

  const matched: QualitativeMatch[] = [];

  for (const opp of activeOpportunities) {
    const reasons: string[] = [];
    const blockers: string[] = [];

    // 1. Eligibility Check
    let eligible = true;

    // Age
    if (student.age != null) {
      if (opp.minAge != null && student.age < opp.minAge) {
        eligible = false;
        blockers.push(`Min age ${opp.minAge}`);
      }
      if (opp.maxAge != null && student.age > opp.maxAge) {
        eligible = false;
        blockers.push(`Max age ${opp.maxAge}`);
      }
    }

    // Grade
    const studentGrade = student.grade != null ? parseInt(String(student.grade), 10) : null;
    if (studentGrade != null && !isNaN(studentGrade)) {
      if (opp.minGrade != null && studentGrade < opp.minGrade) {
        eligible = false;
        blockers.push(`Min grade ${opp.minGrade}`);
      }
      if (opp.maxGrade != null && studentGrade > opp.maxGrade) {
        eligible = false;
        blockers.push(`Max grade ${opp.maxGrade}`);
      }
    }

    // Country / Region
    if (student.country && opp.countries && opp.countries !== "worldwide") {
      const countryList = Array.isArray(opp.countries) ? opp.countries : [opp.countries];
      const matchCountry = countryList.some(
        (c) => c.toLowerCase().trim() === student.country!.toLowerCase().trim()
      );
      if (!matchCountry) {
        eligible = false;
        blockers.push(`Eligible for ${countryList.join(", ")}`);
      }
    }

    // 2. Qualitative Relevance Alignment
    const interests = student.interests || [];
    const interestHits = opp.fields.filter((f) => interests.includes(f));
    if (interestHits.length > 0) {
      if (lang === "ru") {
        reasons.push(`Связано с твоим интересом к сфере «${interestHits.join(" и ")}»`);
      } else if (lang === "kk") {
        reasons.push(`«${interestHits.join(" және ")}» саласындағы қызығушылығыңа сай келеді`);
      } else {
        reasons.push(`Directly connects with your interest in ${interestHits.join(" & ")}`);
      }
    }

    // Career Hypothesis Alignment
    if (leadingHypothesis) {
      const hypothesisMatches = opp.fields.some((f) =>
        leadingHypothesis.direction_name.toLowerCase().includes(f.toLowerCase())
      ) || (leadingHypothesis.relevant_interests || []).some((i) => opp.fields.includes(i));

      if (hypothesisMatches) {
        if (lang === "ru") {
          reasons.push(`Подкрепляет твою ведущую траекторию «${leadingHypothesis.direction_name}»`);
        } else if (lang === "kk") {
          reasons.push(`«${leadingHypothesis.direction_name}» негізгі бағытыңды нығайтады`);
        } else {
          reasons.push(`Directly advances your working trajectory in ${leadingHypothesis.direction_name}`);
        }
      }
    }

    // Goals Alignment
    const goals = student.goals || [];
    if (goals.includes("Build projects") && (opp.category === "Projects" || opp.category === "Competitions")) {
      reasons.push(
        lang === "ru"
          ? "Помогает реализовать цель по созданию прикладных проектов"
          : lang === "kk"
          ? "Қолданбалы жобалар жасау мақсатыңа сай келеді"
          : "Serves your goal to build and ship practical projects"
      );
    }
    if (goals.includes("Prepare for universities") && (opp.category === "Scholarships" || opp.category === "Research")) {
      reasons.push(
        lang === "ru"
          ? "Дает сильный академический сигнал для университетских приемных комиссий"
          : lang === "kk"
          ? "Университетке түсу үшін күшті академиялық нәтиже береді"
          : "Provides a high-value signal for university admissions"
      );
    }

    // Grade Eligibility Positive Note
    if (eligible && studentGrade != null) {
      if (lang === "ru") {
        reasons.push(`Доступно для твоего ${studentGrade} класса`);
      } else if (lang === "kk") {
        reasons.push(`${studentGrade}-сынып оқушыларына қолжетімді`);
      } else {
        reasons.push(`Available for your grade (${studentGrade})`);
      }
    }

    // Synthesize the primary qualitative "Why this is relevant to you" rationale
    let relevanceRationale = reasons[0] || (
      lang === "ru"
        ? "Полезная возможность для расширения кругозора и укрепления профиля"
        : lang === "kk"
        ? "Профиліңді күшейтуге және жаңа мүмкіндіктер ашуға арналған бағдарлама"
        : "Valuable program to broaden your horizon and strengthen your profile"
    );

    // Deadline check (within 10 days)
    const deadlineDays = opp.deadline
      ? Math.round((new Date(opp.deadline).getTime() - Date.now()) / (1000 * 60 * 60 * 24))
      : 999;
    const isDeadlineApproaching = deadlineDays >= 0 && deadlineDays <= 10;

    matched.push({
      opp,
      eligible,
      relevanceRationale,
      reasons,
      blockers,
      isDeadlineApproaching,
    });
  }

  // Sort by relevance (eligible first, then by number of specific alignment reasons, then approaching deadline)
  matched.sort((a, b) => {
    if (a.eligible !== b.eligible) return a.eligible ? -1 : 1;
    if (b.reasons.length !== a.reasons.length) return b.reasons.length - a.reasons.length;
    return 0;
  });

  return matched;
}
