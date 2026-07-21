export type Opportunity = {
  id: string;
  title: string;
  org: string;
  category: "Scholarships" | "Internships" | "Research" | "Competitions" | "Volunteering" | "Leadership Programs" | "Projects";
  description: string;
  deadline: string;
  requirements: string[];
  tags: string[];
};

export const OPPORTUNITIES: Opportunity[] = [
  { id: "o1", title: "Global Youth Leadership Program", org: "World Leaders Institute", category: "Leadership Programs", description: "A 6-week intensive for high-schoolers to lead social impact projects with mentors from top universities.", deadline: "2026-09-15", requirements: ["Ages 15–18", "Essay", "Recommendation"], tags: ["leadership", "social impact"] },
  { id: "o2", title: "Regeneron Science Talent Search", org: "Society for Science", category: "Competitions", description: "Premier science research competition for high-school seniors with $3.1M in awards.", deadline: "2026-11-01", requirements: ["Original research", "Age 17+"], tags: ["science", "research"] },
  { id: "o3", title: "MIT PRIMES-USA", org: "MIT", category: "Research", description: "Year-long math research program pairing students with MIT mentors.", deadline: "2026-10-01", requirements: ["Grade 10–11", "Math olympiad experience"], tags: ["math", "research"] },
  { id: "o4", title: "Coca-Cola Scholars", org: "Coca-Cola Foundation", category: "Scholarships", description: "$20,000 scholarship for outstanding high-school seniors demonstrating leadership.", deadline: "2026-10-31", requirements: ["Grade 12", "US resident"], tags: ["scholarship", "leadership"] },
  { id: "o5", title: "Google Code-in Youth Track", org: "Google", category: "Internships", description: "Contribute to open-source with mentorship from Googlers.", deadline: "2026-12-05", requirements: ["Ages 13–17", "Some coding"], tags: ["coding", "tech"] },
  { id: "o6", title: "UNICEF Youth Advocate", org: "UNICEF", category: "Volunteering", description: "Advocate for children's rights and lead campaigns in your community.", deadline: "2026-08-30", requirements: ["Ages 14–18"], tags: ["human rights", "youth"] },
  { id: "o7", title: "Climate Solutions Hackathon", org: "MyPath x Climate Lab", category: "Projects", description: "Weekend hackathon to prototype climate-tech solutions with mentors.", deadline: "2026-09-01", requirements: ["Team of 2–4"], tags: ["climate", "tech"] },
  { id: "o8", title: "Harvard Pre-College Research", org: "Harvard University", category: "Research", description: "Two-week research intensive across humanities & sciences.", deadline: "2026-05-15", requirements: ["Ages 15–18", "GPA 3.5+"], tags: ["research", "university"] },
  { id: "o9", title: "Diana Award", org: "The Diana Award", category: "Leadership Programs", description: "Recognizing young people creating meaningful social change.", deadline: "2026-07-01", requirements: ["Ages 9–25", "Nomination"], tags: ["leadership", "impact"] },
  { id: "o10", title: "Congressional App Challenge", org: "US Congress", category: "Competitions", description: "Nationwide app-building competition for middle & high schoolers.", deadline: "2026-11-01", requirements: ["Ages 13–18"], tags: ["coding", "design"] },
  { id: "o11", title: "Youth Climate Fellowship", org: "Earth Uprising", category: "Volunteering", description: "Six-month fellowship organizing youth climate action.", deadline: "2026-09-20", requirements: ["Ages 14–20"], tags: ["climate", "activism"] },
  { id: "o12", title: "Founder's Track: Student Startup", org: "MyPath Ventures", category: "Projects", description: "Build and launch a real startup with weekly mentorship.", deadline: "2026-10-10", requirements: ["Idea + team", "Ages 15–18"], tags: ["business", "startup"] },
];

const KEYWORDS: Record<string, string[]> = {
  Technology: ["coding", "tech", "startup"],
  Science: ["science", "research", "math"],
  Business: ["business", "startup", "leadership"],
  Arts: ["design"],
  "Social Impact": ["social impact", "impact", "activism", "human rights", "youth"],
  Leadership: ["leadership"],
  Writing: ["research"],
  Design: ["design"],
  Environment: ["climate"],
  "Education inequality": ["youth", "social impact"],
  "Climate change": ["climate"],
  "Human rights": ["human rights", "activism"],
  Healthcare: ["science", "research"],
  "Technology access": ["tech", "coding"],
  "Youth development": ["youth", "leadership"],
};

export function matchScore(opp: Opportunity, interests: string[] = [], problems: string[] = []): number {
  const bag = [...interests, ...problems].flatMap((k) => KEYWORDS[k] ?? []);
  if (!bag.length) return 72;
  const hits = opp.tags.filter((t) => bag.includes(t)).length;
  const base = 65 + hits * 10;
  return Math.min(99, base + ((opp.id.charCodeAt(1) % 5)));
}
