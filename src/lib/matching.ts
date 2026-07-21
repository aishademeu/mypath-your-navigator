import type { Opportunity } from "./opportunities";

export type ProfileContext = {
  age?: number | null;
  grade?: number | null; // 6-12
  country?: string | null;
  interests?: string[] | null;
  strengths?: string[] | null;
  problems?: string[] | null;
  goals?: string[] | null;
};

export type MatchResult = {
  score: number; // 0-99
  eligible: boolean;
  reasons: string[]; // why it matches
  blockers: string[]; // why it may not fit
};

const FIELD_KEYWORDS: Record<string, string[]> = {
  Technology: ["coding", "tech", "AI", "startup", "engineering"],
  Science: ["science", "research", "STEM", "math", "biomedical", "engineering"],
  Business: ["business", "startup", "entrepreneurship"],
  Arts: ["arts", "creative", "design", "media"],
  "Social Impact": ["impact", "service", "activism", "human rights", "youth", "public service", "equity"],
  Leadership: ["leadership"],
  Writing: ["writing", "media", "language"],
  Design: ["design", "creative"],
  Environment: ["climate", "environment"],
  Research: ["research"],
  Healthcare: ["health", "biomedical", "premed"],
  "Education inequality": ["education"],
  "Human rights": ["human rights", "equity"],
};

function ageOk(opp: Opportunity, age?: number | null): boolean {
  if (age == null) return true;
  if (opp.minAge != null && age < opp.minAge) return false;
  if (opp.maxAge != null && age > opp.maxAge) return false;
  return true;
}

function gradeOk(opp: Opportunity, grade?: number | null): boolean {
  if (grade == null) return true;
  if (opp.minGrade != null && grade < opp.minGrade) return false;
  if (opp.maxGrade != null && grade > opp.maxGrade) return false;
  return true;
}

function countryOk(opp: Opportunity, country?: string | null): boolean {
  if (!country) return true;
  if (!opp.countries || opp.countries === "worldwide") return true;
  return opp.countries.some((c) => c.toLowerCase() === country.toLowerCase());
}

export function matchOpportunity(opp: Opportunity, ctx: ProfileContext): MatchResult {
  const reasons: string[] = [];
  const blockers: string[] = [];

  const ageFit = ageOk(opp, ctx.age);
  const gradeFit = gradeOk(opp, ctx.grade);
  const countryFit = countryOk(opp, ctx.country);
  const eligible = ageFit && gradeFit && countryFit;

  if (!ageFit) blockers.push(`Age range ${opp.minAge ?? "?"}–${opp.maxAge ?? "?"}`);
  if (!gradeFit) blockers.push(`Grade ${opp.minGrade ?? "?"}–${opp.maxGrade ?? "?"}`);
  if (!countryFit) blockers.push(`Available in ${Array.isArray(opp.countries) ? opp.countries.join(", ") : "select regions"}`);

  // interest overlap
  const interests = ctx.interests ?? [];
  const interestHits = opp.fields.filter((f) => interests.includes(f));
  if (interestHits.length) reasons.push(`Aligns with your interest in ${interestHits.slice(0, 2).join(" & ")}`);

  // problems overlap via keywords
  const problems = ctx.problems ?? [];
  const problemBag = problems.flatMap((p) => FIELD_KEYWORDS[p] ?? []);
  const problemHits = opp.tags.filter((t) => problemBag.includes(t)).length;
  if (problemHits) reasons.push(`Addresses causes you care about`);

  // goals
  const goals = ctx.goals ?? [];
  if (goals.includes("Prepare for universities") && (opp.category === "Research" || opp.category === "Summer Programs")) reasons.push("Strong signal for university applications");
  if (goals.includes("Find competitions") && opp.category === "Competitions") reasons.push("Matches your goal to compete");
  if (goals.includes("Build projects") && opp.category === "Projects") reasons.push("Matches your goal to build");
  if (goals.includes("Meet mentors") && (opp.category === "Research" || opp.category === "Leadership Programs")) reasons.push("Includes mentorship");
  if (goals.includes("Develop skills") && opp.category === "Internships") reasons.push("Hands-on skill building");

  // base score
  let score = 55;
  score += interestHits.length * 9;
  score += Math.min(problemHits, 3) * 5;
  score += reasons.length > 3 ? 4 : 0;
  if (!eligible) score = Math.max(30, Math.floor(score * 0.55));
  // deadline urgency small bump
  const days = Math.max(0, (new Date(opp.deadline).getTime() - Date.now()) / (1000 * 60 * 60 * 24));
  if (days < 60 && days > 0) score += 2;

  // stable jitter per opp
  const jitter = (opp.id.charCodeAt(0) + opp.id.charCodeAt(opp.id.length - 1)) % 5;
  score = Math.min(99, Math.max(20, score + jitter));

  if (reasons.length === 0 && eligible) reasons.push("A broad, high-signal opportunity worth considering");

  return { score, eligible, reasons, blockers };
}

export function rankOpportunities(all: Opportunity[], ctx: ProfileContext) {
  return all
    .map((o) => ({ opp: o, ...matchOpportunity(o, ctx) }))
    .sort((a, b) => {
      // eligible first, then by score
      if (a.eligible !== b.eligible) return a.eligible ? -1 : 1;
      return b.score - a.score;
    });
}

export type ApplyStep = { key: string; title: string; description: string };

export function applyGuideFor(opp: Opportunity): ApplyStep[] {
  const base: ApplyStep[] = [
    { key: "read", title: "Read the full opportunity page", description: `Visit ${opp.org} and read every requirement carefully. Note the exact deadline and time zone.` },
    { key: "eligibility", title: "Confirm eligibility", description: `Requirements: ${opp.requirements.join("; ")}. Double-check age, grade, and country.` },
    { key: "materials", title: "Gather materials", description: "Transcripts, CV/résumé, portfolio links, and any specific documents the application asks for." },
  ];

  if (opp.category === "Scholarships") {
    base.push({ key: "essay", title: "Draft your essay", description: "Answer the prompt honestly. Show growth, not perfection. Have someone you trust read it before submitting." });
    base.push({ key: "recs", title: "Request recommendations", description: "Ask 2–3 weeks in advance. Give recommenders a résumé + prompt bullet points." });
  }
  if (opp.category === "Research" || opp.category === "Summer Programs") {
    base.push({ key: "proposal", title: "Prepare research statement", description: "Write 1 clear paragraph on the questions you want to explore and why." });
    base.push({ key: "recs", title: "Line up a teacher recommendation", description: "Ideally a STEM/humanities teacher who knows your independent work." });
  }
  if (opp.category === "Competitions") {
    base.push({ key: "team", title: "Form your team", description: "Choose complementary skills. Set a shared doc and weekly checkpoints." });
    base.push({ key: "prototype", title: "Build a prototype / draft submission", description: "Ship a rough version early; iterate weekly toward the deadline." });
  }
  if (opp.category === "Internships") {
    base.push({ key: "resume", title: "Polish your résumé", description: "One page. Lead with impact — projects, results, numbers." });
    base.push({ key: "interview", title: "Prep for interview", description: "Rehearse 3 stories: a project, a challenge, a moment of leadership." });
  }
  if (opp.category === "Leadership Programs" || opp.category === "Volunteering") {
    base.push({ key: "impact", title: "Document your impact", description: "Write a short summary of what you've built or led, with numbers if you can." });
  }
  if (opp.category === "Projects") {
    base.push({ key: "idea", title: "Sharpen your idea", description: "Write a 3-sentence pitch: problem, solution, who it helps." });
  }

  base.push({ key: "review", title: "Review + submit early", description: "Aim to submit 48 hours before the deadline. Save PDFs of everything you send." });
  base.push({ key: "followup", title: "Follow up + track it", description: "Note the decision date. Whatever happens, save your submission for your portfolio." });

  return base;
}
