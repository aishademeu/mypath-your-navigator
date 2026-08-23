// Curated opportunity database for MyPath (Verified 2026-2027 entries).
export type Category =
  | "Scholarships"
  | "Internships"
  | "Research"
  | "Competitions"
  | "Volunteering"
  | "Leadership Programs"
  | "Projects"
  | "Summer Programs";

export type Opportunity = {
  id: string;
  title: string;
  org: string;
  category: Category;
  description: string;
  deadline: string; // ISO YYYY-MM-DD
  minAge?: number;
  maxAge?: number;
  minGrade?: number; // 6-12
  maxGrade?: number;
  countries?: "worldwide" | string[]; // ISO country names or 'worldwide'
  cost?: "free" | "paid" | "stipend";
  format?: "online" | "in-person" | "hybrid";
  verified?: boolean;
  requirements: string[];
  tags: string[];
  fields: string[]; // interest fields it aligns with
  url?: string;
  sourceUrl?: string;
  sourceChannel?: string;
};

export const OPPORTUNITIES: Opportunity[] = [
  // ==========================================
  // 🎓 SCHOLARSHIPS & FINANCIAL AWARDS
  // ==========================================
  {
    id: "coca-cola-scholars-2027",
    title: "Coca-Cola Scholars Program 2026/2027",
    org: "The Coca-Cola Scholars Foundation",
    category: "Scholarships",
    description: "$20,000 achievement-based scholarship for graduating high school seniors demonstrating exemplary leadership, service, and academic commitment.",
    deadline: "2026-10-31",
    minGrade: 12,
    maxGrade: 12,
    countries: ["United States"],
    cost: "free",
    format: "online",
    verified: true,
    requirements: ["High school senior", "Min 3.0 GPA", "Demonstrated leadership record"],
    tags: ["scholarship", "leadership", "merit"],
    fields: ["Leadership", "Business", "Social Impact"],
    url: "https://www.coca-colascholarsfoundation.org/apply/"
  },
  {
    id: "gates-scholarship-2027",
    title: "The Gates Scholarship",
    org: "Bill & Melinda Gates Foundation",
    category: "Scholarships",
    description: "Full cost of attendance scholarship covering tuition, housing, and books for outstanding minority high school seniors from low-income households.",
    deadline: "2026-09-15",
    minGrade: 12,
    maxGrade: 12,
    countries: ["United States"],
    cost: "free",
    format: "online",
    verified: true,
    requirements: ["Grade 12", "Pell-eligible", "Min 3.3 weighted GPA"],
    tags: ["scholarship", "equity", "full-ride"],
    fields: ["Social Impact", "Leadership", "Science"],
    url: "https://www.thegatesscholarship.org/"
  },
  {
    id: "davidson-fellows-2027",
    title: "Davidson Fellows Scholarship ($50,000)",
    org: "Davidson Institute",
    category: "Scholarships",
    description: "$10,000 to $50,000 awards for extraordinary youth 18 and under who have completed a significant, impactful piece of work in STEM, literature, or music.",
    deadline: "2027-02-15",
    maxAge: 18,
    countries: "worldwide",
    cost: "free",
    format: "online",
    verified: true,
    requirements: ["Original significant project or research", "Under 18 at time of application"],
    tags: ["scholarship", "research", "creativity"],
    fields: ["Science", "Technology", "Arts", "Writing"],
    url: "https://www.davidsongifted.org/gifted-programs/fellows-scholarship"
  },
  {
    id: "questbridge-national-match",
    title: "QuestBridge National College Match",
    org: "QuestBridge",
    category: "Scholarships",
    description: "Full four-year scholarships with zero loans at 50+ top US partner colleges (MIT, Stanford, Yale, Princeton) for high-achieving low-income students.",
    deadline: "2026-09-26",
    minGrade: 12,
    maxGrade: 12,
    countries: ["United States"],
    cost: "free",
    format: "online",
    verified: true,
    requirements: ["High school senior", "High academic achievement", "Household income < $65,000"],
    tags: ["scholarship", "ivy-league", "full-ride"],
    fields: ["Leadership", "Science", "Business"],
    url: "https://www.questbridge.org/high-school-students/national-college-match"
  },
  {
    id: "open-doors-olympiad",
    title: "Open Doors Global University Scholarship",
    org: "Association of Global Universities",
    category: "Scholarships",
    description: "International online olympiad granting 100% full tuition waiver, monthly stipend, and priority dormitory accommodation for top universities.",
    deadline: "2026-12-10",
    minAge: 16,
    maxAge: 24,
    countries: "worldwide",
    cost: "free",
    format: "online",
    verified: true,
    requirements: ["Online portfolio", "Passing online subject tests"],
    tags: ["scholarship", "olympiad", "international"],
    fields: ["Science", "Technology", "Business", "Research"],
    url: "https://od.globaluni.ru/en/"
  },
  {
    id: "chevening-youth-leaders",
    title: "Chevening Youth Ambassador & Fellowship",
    org: "UK Foreign, Commonwealth & Development Office",
    category: "Scholarships",
    description: "Prestigious recognition, network, and development program for young changemakers and future global ambassadors.",
    deadline: "2026-11-05",
    minAge: 15,
    maxAge: 19,
    countries: "worldwide",
    cost: "free",
    format: "online",
    verified: true,
    requirements: ["Community leadership record", "Application essays"],
    tags: ["leadership", "global", "diplomacy"],
    fields: ["Leadership", "Social Impact", "Writing"],
    url: "https://www.chevening.org/"
  },

  // ==========================================
  // 🔬 RESEARCH & LAB FELLOWSHIPS
  // ==========================================
  {
    id: "mit-primes-usa-2027",
    title: "MIT PRIMES-USA Research Program",
    org: "Massachusetts Institute of Technology (MIT)",
    category: "Research",
    description: "Year-long math and computer science research program pairing high school students directly with MIT faculty and PhD mentors on publishable papers.",
    deadline: "2026-11-30",
    minGrade: 10,
    maxGrade: 11,
    countries: ["United States", "worldwide"],
    cost: "free",
    format: "online",
    verified: true,
    requirements: ["Strong background in advanced math", "PSET solutions & essay"],
    tags: ["math", "research", "MIT"],
    fields: ["Science", "Technology", "Research"],
    url: "https://math.mit.edu/research/highschool/primes/usa/"
  },
  {
    id: "mit-rsi-summer-2027",
    title: "Research Science Institute (RSI) at MIT",
    org: "Center for Excellence in Education & MIT",
    category: "Research",
    description: "The most prestigious 6-week summer science and engineering research program in the world. 100% free for all selected high school juniors.",
    deadline: "2026-12-15",
    minGrade: 11,
    maxGrade: 11,
    countries: "worldwide",
    cost: "free",
    format: "in-person",
    verified: true,
    requirements: ["Top academic record", "Standardized test scores or olympiad awards", "2 Teacher recommendations"],
    tags: ["research", "STEM", "MIT"],
    fields: ["Science", "Technology", "Research", "Healthcare"],
    url: "https://www.cee.org/programs/research-science-institute"
  },
  {
    id: "stanford-simr-2027",
    title: "Stanford SIMR Biomedical Research Program",
    org: "Stanford University School of Medicine",
    category: "Research",
    description: "Eight-week hands-on biomedical research internship working one-on-one with Stanford faculty mentors in cutting-edge university labs with a $500+ stipend.",
    deadline: "2027-02-24",
    minAge: 16,
    minGrade: 11,
    maxGrade: 12,
    countries: ["United States", "worldwide"],
    cost: "stipend",
    format: "in-person",
    verified: true,
    requirements: ["Age 16+", "Completed biology or chemistry course", "Application essay"],
    tags: ["biomedical", "stanford", "research"],
    fields: ["Science", "Healthcare", "Research"],
    url: "https://simr.stanford.edu/"
  },
  {
    id: "polygence-research-mentorship",
    title: "Polygence 1-on-1 Academic Research",
    org: "Polygence",
    category: "Research",
    description: "Conduct an original 10-week independent research project with a PhD mentor from Harvard, Stanford, or Cambridge, resulting in a peer-reviewed paper or patent.",
    deadline: "2026-12-01",
    minAge: 13,
    maxAge: 18,
    countries: "worldwide",
    cost: "paid",
    format: "online",
    verified: true,
    requirements: ["Ages 13–18", "Passionate research topic proposal"],
    tags: ["mentorship", "research", "publication"],
    fields: ["Science", "Writing", "Technology", "Research"],
    url: "https://www.polygence.org/"
  },
  {
    id: "al-farabi-junior-lab",
    title: "Junior Lab Biotech & AI Research Internship",
    org: "Al-Farabi Innovation Center",
    category: "Research",
    description: "Hands-on laboratory research fellowship for senior students working on bio-engineering, green energy, and applied machine learning.",
    deadline: "2026-11-20",
    minAge: 15,
    maxAge: 19,
    countries: ["Kazakhstan", "Uzbekistan", "Kyrgyzstan", "worldwide"],
    cost: "free",
    format: "hybrid",
    verified: true,
    requirements: ["Motivation letter", "Basic science portfolio"],
    tags: ["biotech", "ai", "research"],
    fields: ["Science", "Technology", "Healthcare"],
    url: "https://kaznu.kz/en"
  },

  // ==========================================
  // 🏆 COMPETITIONS & HACKATHONS
  // ==========================================
  {
    id: "regeneron-isef-2027",
    title: "Regeneron ISEF International Science Fair",
    org: "Society for Science",
    category: "Competitions",
    description: "The world's largest pre-college STEM competition. Over $9 million in awards and scholarships given to groundbreaking student inventions.",
    deadline: "2026-12-15",
    minGrade: 9,
    maxGrade: 12,
    countries: "worldwide",
    cost: "free",
    format: "in-person",
    verified: true,
    requirements: ["Original independent research project", "Affiliated science fair qualification"],
    tags: ["science", "engineering", "olympiad"],
    fields: ["Science", "Technology", "Research"],
    url: "https://www.societyforscience.org/isef/"
  },
  {
    id: "congressional-app-challenge-2026",
    title: "Congressional App Challenge",
    org: "U.S. House of Representatives",
    category: "Competitions",
    description: "Prestigious nationwide competition for middle and high school students to code and submit original software applications in any programming language.",
    deadline: "2026-11-01",
    minAge: 13,
    maxAge: 18,
    countries: ["United States", "worldwide"],
    cost: "free",
    format: "online",
    verified: true,
    requirements: ["Original mobile/web/desktop app", "3-minute video demo"],
    tags: ["coding", "app", "hackathon"],
    fields: ["Technology", "Design"],
    url: "https://www.congressionalappchallenge.us/"
  },
  {
    id: "diamond-challenge-entrepreneurship",
    title: "Diamond Challenge Global High School Pitch",
    org: "University of Delaware Horn Entrepreneurship",
    category: "Competitions",
    description: "World’s top entrepreneurship competition for teens offering $100,000+ in awards for innovative business concepts and social ventures.",
    deadline: "2026-11-15",
    minGrade: 9,
    maxGrade: 12,
    countries: "worldwide",
    cost: "free",
    format: "online",
    verified: true,
    requirements: ["Team of 2–4 students", "Pitch deck + 5-minute video"],
    tags: ["startup", "business", "pitch"],
    fields: ["Business", "Leadership", "Social Impact"],
    url: "https://diamondchallenge.org/"
  },
  {
    id: "microsoft-imagine-cup-jr",
    title: "Microsoft Imagine Cup Junior 2027",
    org: "Microsoft",
    category: "Competitions",
    description: "Global AI challenge empowering students 13–18 to use artificial intelligence for good, solving urgent humanitarian and environmental problems.",
    deadline: "2027-03-31",
    minAge: 13,
    maxAge: 18,
    countries: "worldwide",
    cost: "free",
    format: "online",
    verified: true,
    requirements: ["Student team of 1–6", "AI solution design paper"],
    tags: ["AI", "microsoft", "hackathon"],
    fields: ["Technology", "Social Impact", "Design"],
    url: "https://imaginecup.microsoft.com/en-us/junior"
  },
  {
    id: "youth-climate-challenge-2026",
    title: "Global Youth Climate Challenge ($10K Grant)",
    org: "Global Citizen × Climate Action",
    category: "Competitions",
    description: "Team pitch competition for tech or community projects tackling climate change. Winners receive $10,000 in equity-free grant capital.",
    deadline: "2026-10-30",
    minAge: 14,
    maxAge: 19,
    countries: "worldwide",
    cost: "free",
    format: "online",
    verified: true,
    requirements: ["Team of 2–5", "Solution concept document"],
    tags: ["climate", "sustainability", "grants"],
    fields: ["Environment", "Business", "Social Impact"],
    url: "https://www.globalcitizen.org/"
  },

  // ==========================================
  // 💼 INTERNSHIPS & FELLOWSHIPS
  // ==========================================
  {
    id: "nus-iris-internship-2027",
    title: "NUS IRIS Research Internship in Singapore",
    org: "National University of Singapore (NUS)",
    category: "Internships",
    description: "Fully funded research internship in Singapore with round-trip airfare, accommodation, and stipend provided for promising student researchers.",
    deadline: "2026-11-30",
    minAge: 16,
    maxAge: 21,
    countries: "worldwide",
    cost: "stipend",
    format: "in-person",
    verified: true,
    requirements: ["Academic transcript", "Motivation letter", "CV"],
    tags: ["singapore", "internship", "fully-funded"],
    fields: ["Science", "Technology", "Research"],
    url: "https://opportunitiescorners.com/nus-iris-internship-2027/",
    sourceUrl: "https://t.me/deeppurplehub/2012",
    sourceChannel: "@deeppurplehub"
  },
  {
    id: "google-cssi-fellowship",
    title: "Google Computer Science Summer Institute (CSSI)",
    org: "Google",
    category: "Internships",
    description: "Intensive 4-week computer science & tech bootcamp teaching fullstack development, software engineering best practices, and direct Google mentorship.",
    deadline: "2026-12-15",
    minGrade: 11,
    maxGrade: 12,
    countries: ["United States", "worldwide"],
    cost: "free",
    format: "online",
    verified: true,
    requirements: ["High school senior", "Interest in computer science"],
    tags: ["google", "coding", "software"],
    fields: ["Technology", "Design"],
    url: "https://buildyourfuture.withgoogle.com/programs/computer-science-summer-institute"
  },
  {
    id: "bank-of-america-student-leaders",
    title: "Bank of America Student Leaders (Paid $17/hr)",
    org: "Bank of America",
    category: "Internships",
    description: "Paid 8-week summer internship working with local community nonprofits, capped by an all-expenses-paid national leadership summit in Washington, D.C.",
    deadline: "2027-01-15",
    minGrade: 11,
    maxGrade: 12,
    countries: ["United States"],
    cost: "stipend",
    format: "in-person",
    verified: true,
    requirements: ["High school junior or senior", "Good academic standing", "Community service track record"],
    tags: ["internship", "leadership", "paid"],
    fields: ["Business", "Leadership", "Social Impact"],
    url: "https://about.bankofamerica.com/en/making-an-impact/student-leaders"
  },
  {
    id: "un-youth-delegate-program",
    title: "United Nations Youth Delegate Programme",
    org: "United Nations",
    category: "Internships",
    description: "Represent the youth of your nation at the UN General Assembly and international diplomatic forums in New York and Geneva.",
    deadline: "2026-10-15",
    minAge: 16,
    maxAge: 25,
    countries: "worldwide",
    cost: "free",
    format: "hybrid",
    verified: true,
    requirements: ["National youth leadership record", "Fluent English", "Interview"],
    tags: ["diplomacy", "UN", "policy"],
    fields: ["Leadership", "Social Impact", "Writing"],
    url: "https://www.un.org/development/desa/youth/what-we-do/un-youth-delegate-programme.html"
  },

  // ==========================================
  // 🌟 LEADERSHIP & INCUBATORS
  // ==========================================
  {
    id: "disciteen-discipline-program",
    title: "DisciTeen: 5-й поток программы дисциплины и тайм-менеджмента",
    org: "DisciTeen Academy",
    category: "Leadership Programs",
    description: "Бесплатная интенсивная онлайн-программа для школьников и подростков по прокачке самодисциплины, системного тайм-менеджмента и достижению целей.",
    deadline: "2026-09-10",
    minAge: 13,
    maxAge: 19,
    countries: "worldwide",
    cost: "free",
    format: "online",
    verified: true,
    requirements: ["Регистрация онлайн", "Готовность выполнять ежедневные трекинги"],
    tags: ["саморазвитие", "тайм-менеджмент", "дисциплина"],
    fields: ["Leadership", "Education inequality"],
    url: "https://t.me/edu_strategies",
    sourceUrl: "https://t.me/edu_strategies/1188",
    sourceChannel: "@edu_strategies"
  },
  {
    id: "mydebate-mun-workshop",
    title: "Воркшоп «Что такое MUN?» от MyDebate",
    org: "MyDebate Community",
    category: "Leadership Programs",
    description: "Практический онлайн-воркшоп по Модели ООН (MUN): как составлять резолюции, побеждать в дебатах, развивать дипломатические навыки и выступать на английском.",
    deadline: "2026-09-05",
    minAge: 13,
    maxAge: 20,
    countries: "worldwide",
    cost: "free",
    format: "online",
    verified: true,
    requirements: ["Свободный онлайн вход", "Базовый интерес к международным отношениям"],
    tags: ["MUN", "дебаты", "дипломатия"],
    fields: ["Leadership", "Social Impact", "Writing"],
    url: "https://t.me/edu_strategies",
    sourceUrl: "https://t.me/edu_strategies/1182",
    sourceChannel: "@edu_strategies"
  },
  {
    id: "qairu-alem-ai-talent",
    title: "Alem AI Talent Lab: Полный грант на обучение в QAIRU",
    org: "Qazaq AI Research University",
    category: "Leadership Programs",
    description: "Конкурс на 100% финансирование и стипендию обучения в исследовательском университете AI и робототехники в Казахстане.",
    deadline: "2026-09-30",
    minGrade: 10,
    maxGrade: 12,
    countries: ["Kazakhstan", "worldwide"],
    cost: "free",
    format: "in-person",
    verified: true,
    requirements: ["Портфолио проектов", "Тестирование по математике и логике"],
    tags: ["AI", "грант", "QAIRU"],
    fields: ["Technology", "Science", "Research"],
    url: "https://t.me/deeppurplehub",
    sourceUrl: "https://t.me/deeppurplehub/2010",
    sourceChannel: "@deeppurplehub"
  },
  {
    id: "diana-award-honour",
    title: "The Diana Award & Changemaker Network",
    org: "The Diana Award Foundation",
    category: "Leadership Programs",
    description: "The most prestigious accolade a young person can receive for their social action or humanitarian work, established in memory of Diana, Princess of Wales.",
    deadline: "2026-11-30",
    minAge: 9,
    maxAge: 25,
    countries: "worldwide",
    cost: "free",
    format: "online",
    verified: true,
    requirements: ["Nomination by mentor/teacher", "Documented community impact"],
    tags: ["humanitarian", "leadership", "royal"],
    fields: ["Social Impact", "Leadership"],
    url: "https://diana-award.org.uk/award"
  },

  // ==========================================
  // ☀️ SUMMER ACADEMIES & UNIVERSITY CAMPS
  // ==========================================
  {
    id: "yale-yygs-2027",
    title: "Yale Young Global Scholars (YYGS 2027)",
    org: "Yale University",
    category: "Summer Programs",
    description: "Two-week academic summer enrichment program at Yale University for outstanding high school sophomores and juniors from 150+ countries. Need-blind financial aid available.",
    deadline: "2027-01-10",
    minAge: 16,
    minGrade: 10,
    maxGrade: 11,
    countries: "worldwide",
    cost: "paid",
    format: "in-person",
    verified: true,
    requirements: ["Grade 10 or 11", "Essays & transcript", "Recommendation"],
    tags: ["yale", "summer", "global"],
    fields: ["Leadership", "Writing", "Science", "Social Impact"],
    url: "https://globalscholars.yale.edu/"
  },
  {
    id: "harvard-precollege-summer",
    title: "Harvard Summer Pre-College Academy",
    org: "Harvard University",
    category: "Summer Programs",
    description: "Two-week intensive residential program living on Harvard's historic campus, taking college-level non-credit courses without the pressure of letter grades.",
    deadline: "2027-01-31",
    minAge: 15,
    maxAge: 18,
    minGrade: 10,
    maxGrade: 12,
    countries: "worldwide",
    cost: "paid",
    format: "in-person",
    verified: true,
    requirements: ["Academic transcript", "Counselor recommendation", "Admissions essay"],
    tags: ["harvard", "precollege", "summer"],
    fields: ["Science", "Writing", "Business", "Research"],
    url: "https://summer.harvard.edu/high-school-programs/pre-college-program/"
  },
  {
    id: "stanford-sumac-math-camp",
    title: "Stanford University Mathematics Camp (SUMaC)",
    org: "Stanford University",
    category: "Summer Programs",
    description: "Rigorous 4-week online and residential advanced pure mathematics camp for high-ability high school students exploring abstract algebra and number theory.",
    deadline: "2027-02-01",
    minGrade: 10,
    maxGrade: 11,
    countries: "worldwide",
    cost: "paid",
    format: "hybrid",
    verified: true,
    requirements: ["Stanford Math Qualifying Exam solutions", "Teacher recommendation"],
    tags: ["stanford", "math", "camp"],
    fields: ["Science", "Research", "Technology"],
    url: "https://sumac.spcs.stanford.edu/"
  },
  {
    id: "nazarbayev-foundation-prep",
    title: "Nazarbayev University NUFYP Prep & Open Days",
    org: "Nazarbayev University",
    category: "Summer Programs",
    description: "Official preparatory courses, campus tours, and mock interview workshops for applicants aiming at the state-funded NU Foundation Year Program.",
    deadline: "2026-12-30",
    minGrade: 11,
    maxGrade: 12,
    countries: ["Kazakhstan", "worldwide"],
    cost: "free",
    format: "hybrid",
    verified: true,
    requirements: ["High school student (Grade 11-12)", "IELTS/SAT prep"],
    tags: ["NU", "kazakhstan", "university"],
    fields: ["Science", "Technology", "Business"],
    url: "https://nu.edu.kz/admissions"
  },

  // ==========================================
  // 🤝 VOLUNTEERING & SOCIAL IMPACT
  // ==========================================
  {
    id: "unicef-youth-advocate-2026",
    title: "UNICEF Youth Advocacy Network",
    org: "UNICEF",
    category: "Volunteering",
    description: "Official youth ambassador initiative empowering teens to lead local and global campaigns on education equality, mental health, and child rights.",
    deadline: "2026-11-15",
    minAge: 14,
    maxAge: 20,
    countries: "worldwide",
    cost: "free",
    format: "online",
    verified: true,
    requirements: ["Application form", "Short video motivation"],
    tags: ["unicef", "human-rights", "volunteering"],
    fields: ["Social Impact", "Leadership", "Writing"],
    url: "https://www.unicef.org/youth-action"
  },
  {
    id: "climate-cardinals-volunteering",
    title: "Climate Cardinals Multilingual Translator",
    org: "Climate Cardinals",
    category: "Volunteering",
    description: "Join the world's largest youth-led nonprofit translating critical climate science documents into 100+ languages to earn verified international service hours.",
    deadline: "2026-12-31",
    minAge: 13,
    maxAge: 25,
    countries: "worldwide",
    cost: "free",
    format: "online",
    verified: true,
    requirements: ["Fluency in at least two languages", "Online registration"],
    tags: ["volunteering", "languages", "climate"],
    fields: ["Environment", "Writing", "Social Impact"],
    url: "https://www.climatecardinals.org/"
  },
  {
    id: "code-org-global-mentor",
    title: "Code.org Global Peer Mentor",
    org: "Code.org",
    category: "Volunteering",
    description: "Volunteer online to teach beginner programming to younger students from underrepresented communities around the world.",
    deadline: "2026-12-31",
    minAge: 14,
    maxAge: 20,
    countries: "worldwide",
    cost: "free",
    format: "online",
    verified: true,
    requirements: ["Basic knowledge of Scratch, Python or JS", "Friendly attitude"],
    tags: ["coding", "tutoring", "service"],
    fields: ["Technology", "Education inequality"],
    url: "https://code.org/"
  },

  // ==========================================
  // 🚀 PROJECTS & PORTFOLIO SPRINTS
  // ==========================================
  {
    id: "mypath-climate-hackathon-2026",
    title: "MyPath Climate Innovation Hackathon",
    org: "MyPath × Global Climate Lab",
    category: "Projects",
    description: "48-hour online hackathon to prototype practical sustainability apps and climate tools with direct mentorship from Google and MIT alumni.",
    deadline: "2026-10-25",
    minAge: 13,
    maxAge: 19,
    countries: "worldwide",
    cost: "free",
    format: "online",
    verified: true,
    requirements: ["Team of 1–4 students", "Working software/hardware prototype"],
    tags: ["hackathon", "portfolio", "sprint"],
    fields: ["Environment", "Technology", "Design"],
    url: "https://mypath.kz"
  },
  {
    id: "founder-track-12-weeks",
    title: "Founder's Track: Student Startup Accelerator",
    org: "MyPath Ventures",
    category: "Projects",
    description: "12-week structured startup incubator guiding teenage founders from problem validation to real customer acquisition and demo day pitches.",
    deadline: "2026-11-10",
    minAge: 14,
    maxAge: 19,
    countries: "worldwide",
    cost: "free",
    format: "online",
    verified: true,
    requirements: ["Problem statement and draft idea", "Weekly 5hr commitment"],
    tags: ["startup", "incubator", "portfolio"],
    fields: ["Business", "Leadership", "Technology"],
    url: "https://mypath.kz"
  }
];

export const CATEGORIES: Category[] = [
  "Scholarships",
  "Internships",
  "Research",
  "Competitions",
  "Volunteering",
  "Leadership Programs",
  "Projects",
  "Summer Programs",
];

export const FORMATS = ["online", "in-person", "hybrid"] as const;
export type Format = (typeof FORMATS)[number];

export const COUNTRIES: string[] = Array.from(
  new Set(
    OPPORTUNITIES.flatMap((o) =>
      !o.countries || o.countries === "worldwide" ? [] : o.countries,
    ),
  ),
).sort();

export function openOpportunities(sourceList: Opportunity[] = OPPORTUNITIES, now: Date = new Date()): Opportunity[] {
  const today = now.toISOString().slice(0, 10);
  return sourceList.filter((o) => !o.deadline || o.deadline >= today);
}

export function daysLeft(deadline: string, now: Date = new Date()): number {
  const end = Date.parse(`${deadline}T00:00:00Z`);
  const start = Date.parse(`${now.toISOString().slice(0, 10)}T00:00:00Z`);
  return Math.round((end - start) / 86400000);
}

export function opportunityById(id: string) {
  return OPPORTUNITIES.find((o) => o.id === id);
}
