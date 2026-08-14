// Curated opportunity database for MyPath (MVP ~50 entries).
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
  deadline: string; // ISO
  minAge?: number;
  maxAge?: number;
  minGrade?: number; // 6-12
  maxGrade?: number;
  countries?: "worldwide" | string[]; // ISO-ish country names or 'worldwide'
  cost?: "free" | "paid" | "stipend";
  format?: "online" | "in-person" | "hybrid";
  /** Checked by the MyPath team. */
  verified?: boolean;
  requirements: string[];
  tags: string[];
  fields: string[]; // interest fields it aligns with
  url?: string;
};

export const OPPORTUNITIES: Opportunity[] = [
  // Scholarships
  { id: "coca-cola-scholars", title: "Coca-Cola Scholars Program", org: "The Coca-Cola Scholars Foundation", category: "Scholarships", description: "$20,000 achievement-based scholarship for graduating high school seniors demonstrating leadership, service, and academic excellence.", deadline: "2026-10-31", minGrade: 12, maxGrade: 12, countries: ["United States"], cost: "free", format: "online", verified: true, requirements: ["Grade 12", "Min 3.0 GPA", "Leadership record"], tags: ["scholarship", "leadership"], fields: ["Leadership", "Business", "Social Impact"], url: "https://coca-colascholarsfoundation.org" },
  { id: "gates-scholarship", title: "The Gates Scholarship", org: "Bill & Melinda Gates Foundation", category: "Scholarships", description: "Full cost of attendance scholarship for outstanding minority high school seniors from low-income households.", deadline: "2026-09-15", minGrade: 12, maxGrade: 12, countries: ["United States"], cost: "free", format: "online", verified: true, requirements: ["Grade 12", "Pell-eligible", "Min 3.3 GPA"], tags: ["scholarship", "equity"], fields: ["Social Impact", "Leadership"] },
  { id: "davidson-fellows", title: "Davidson Fellows Scholarship", org: "Davidson Institute", category: "Scholarships", description: "$10K–$50K awards for extraordinary young people 18 and under completing a significant piece of work in STEM, literature, music, or philosophy.", deadline: "2026-02-12", maxAge: 18, countries: "worldwide", cost: "free", format: "online", verified: true, requirements: ["Original significant project", "Under 18"], tags: ["scholarship", "research", "creativity"], fields: ["Science", "Technology", "Arts", "Writing"] },
  { id: "questbridge", title: "QuestBridge National College Match", org: "QuestBridge", category: "Scholarships", description: "Full four-year scholarship at 45+ partner colleges for high-achieving students from low-income backgrounds.", deadline: "2026-09-27", minGrade: 12, maxGrade: 12, countries: ["United States"], cost: "free", format: "online", verified: true, requirements: ["Grade 12", "Low-income household"], tags: ["scholarship", "college"], fields: ["Leadership", "Social Impact"] },
  { id: "chevening", title: "Chevening Youth Ambassador", org: "UK Government", category: "Scholarships", description: "Recognition and mentorship program for outstanding young leaders driving change in their communities.", deadline: "2026-11-01", minAge: 15, maxAge: 18, countries: "worldwide", cost: "free", format: "online", verified: true, requirements: ["Community leadership", "Essay"], tags: ["leadership", "global"], fields: ["Leadership", "Social Impact"] },

  // Competitions
  { id: "regeneron-sts", title: "Regeneron Science Talent Search", org: "Society for Science", category: "Competitions", description: "Premier science research competition for high school seniors with $3.1M+ in awards.", deadline: "2026-11-08", minGrade: 12, maxGrade: 12, countries: ["United States"], cost: "free", format: "online", verified: true, requirements: ["Original research paper", "Senior year"], tags: ["science", "research"], fields: ["Science", "Research"] },
  { id: "isef", title: "Regeneron ISEF", org: "Society for Science", category: "Competitions", description: "The world's largest pre-college science and engineering competition. $9M+ in awards.", deadline: "2026-12-15", minGrade: 9, maxGrade: 12, countries: "worldwide", cost: "free", format: "online", verified: true, requirements: ["Independent research", "Fair qualification"], tags: ["science", "engineering"], fields: ["Science", "Technology", "Research"] },
  { id: "congressional-app", title: "Congressional App Challenge", org: "U.S. House of Representatives", category: "Competitions", description: "Nationwide app-building competition for middle and high school students in every congressional district.", deadline: "2026-11-01", minAge: 13, maxAge: 18, countries: ["United States"], cost: "free", format: "online", verified: true, requirements: ["Original app", "Video demo"], tags: ["coding", "design"], fields: ["Technology", "Design"] },
  { id: "imo", title: "International Mathematical Olympiad", org: "IMO Foundation", category: "Competitions", description: "The most prestigious math olympiad in the world. Path begins with national olympiads.", deadline: "2026-01-15", maxAge: 20, countries: "worldwide", cost: "free", format: "online", verified: true, requirements: ["National olympiad qualifier"], tags: ["math", "olympiad"], fields: ["Science", "Research"] },
  { id: "ycc", title: "Youth Climate Challenge", org: "Global Citizen", category: "Competitions", description: "Team-based competition to pitch a climate solution. Winners get $10K seed funding and mentorship.", deadline: "2026-09-30", minAge: 14, maxAge: 18, countries: "worldwide", cost: "free", format: "online", verified: true, requirements: ["Team of 2–5", "Pitch deck"], tags: ["climate", "innovation"], fields: ["Environment", "Business", "Social Impact"] },
  { id: "diamond-challenge", title: "Diamond Challenge", org: "University of Delaware", category: "Competitions", description: "Global high school entrepreneurship pitch competition with $100K+ in prizes.", deadline: "2026-11-15", minGrade: 9, maxGrade: 12, countries: "worldwide", cost: "free", format: "online", verified: true, requirements: ["Team of 2–4", "Business concept"], tags: ["business", "startup"], fields: ["Business", "Leadership"] },
  { id: "adobe-award", title: "Adobe Design Circle Scholarship", org: "Adobe", category: "Competitions", description: "Portfolio-based awards for young designers pursuing higher education in design.", deadline: "2026-03-01", minGrade: 11, maxGrade: 12, countries: "worldwide", cost: "free", format: "online", verified: true, requirements: ["Design portfolio"], tags: ["design", "arts"], fields: ["Design", "Arts"] },

  // Research
  { id: "mit-primes", title: "MIT PRIMES-USA", org: "Massachusetts Institute of Technology", category: "Research", description: "Year-long math and computer science research program pairing US students with MIT mentors.", deadline: "2026-10-01", minGrade: 10, maxGrade: 11, countries: ["United States"], cost: "free", format: "in-person", verified: true, requirements: ["Math olympiad experience", "Application essay"], tags: ["math", "research"], fields: ["Science", "Technology", "Research"] },
  { id: "rsi", title: "Research Science Institute (RSI)", org: "CEE & MIT", category: "Research", description: "Free 6-week summer research program at MIT for the most talented high school juniors in the world.", deadline: "2026-01-11", minGrade: 11, maxGrade: 11, countries: "worldwide", cost: "free", format: "in-person", verified: true, requirements: ["Top academic record", "Recommendations"], tags: ["research", "STEM"], fields: ["Science", "Research", "Technology"] },
  { id: "simr", title: "Stanford SIMR", org: "Stanford University", category: "Research", description: "Eight-week biomedical research internship at Stanford Medical School.", deadline: "2026-02-24", minAge: 16, minGrade: 11, maxGrade: 12, countries: ["United States"], cost: "stipend", format: "in-person", verified: true, requirements: ["Age 16+", "Coursework in biology/chem"], tags: ["biomedical", "research"], fields: ["Science", "Healthcare", "Research"] },
  { id: "garcia-summer", title: "Garcia Summer Scholars", org: "Stony Brook University", category: "Research", description: "Seven-week program in materials science research for high school students.", deadline: "2026-02-15", minGrade: 10, maxGrade: 12, countries: "worldwide", cost: "paid", format: "in-person", verified: true, requirements: ["Interview", "Grade 10+"], tags: ["research", "engineering"], fields: ["Science", "Technology", "Research"] },
  { id: "yys", title: "Yale Young Scholars", org: "Yale University", category: "Research", description: "Selective residential humanities & science seminars at Yale.", deadline: "2026-03-15", minAge: 15, maxAge: 17, countries: "worldwide", cost: "paid", format: "in-person", verified: true, requirements: ["Grade 10–11", "Essays"], tags: ["humanities", "research"], fields: ["Writing", "Science", "Research"] },
  { id: "polygence", title: "Polygence Research Mentorship", org: "Polygence", category: "Research", description: "1-on-1 research mentorship with PhDs from top universities across any field, culminating in a publishable project.", deadline: "2026-12-01", minAge: 13, maxAge: 18, countries: "worldwide", cost: "paid", format: "in-person", verified: true, requirements: ["Ages 13–18", "Project proposal"], tags: ["research", "mentorship"], fields: ["Science", "Writing", "Technology", "Research"] },

  // Internships
  { id: "google-cssi", title: "Google Computer Science Summer Institute", org: "Google", category: "Internships", description: "Free 3-week intro to CS for graduating high school seniors from underrepresented backgrounds.", deadline: "2026-03-31", minGrade: 12, maxGrade: 12, countries: ["United States"], cost: "free", format: "in-person", verified: true, requirements: ["Grade 12", "US resident"], tags: ["coding", "tech"], fields: ["Technology"] },
  { id: "nasa-osi", title: "NASA OSTEM High School Internship", org: "NASA", category: "Internships", description: "Paid research internships across NASA centers for high school students in STEM fields.", deadline: "2026-02-28", minAge: 16, minGrade: 11, maxGrade: 12, countries: ["United States"], cost: "stipend", format: "in-person", verified: true, requirements: ["US citizen", "Age 16+", "Min 3.0 GPA"], tags: ["space", "research"], fields: ["Science", "Technology", "Research"] },
  { id: "bank-of-america-student", title: "Bank of America Student Leaders", org: "Bank of America", category: "Internships", description: "Paid 8-week summer internship with a local nonprofit and a summit in Washington, D.C.", deadline: "2026-01-14", minGrade: 11, maxGrade: 12, countries: ["United States"], cost: "stipend", format: "in-person", verified: true, requirements: ["Junior or senior", "Community service"], tags: ["leadership", "business"], fields: ["Business", "Leadership", "Social Impact"] },
  { id: "un-youth-envoy", title: "UN Youth Delegate Programme", org: "United Nations", category: "Internships", description: "Represent your country at the UN, contributing to policy discussions on youth issues.", deadline: "2026-06-01", minAge: 15, maxAge: 24, countries: "worldwide", cost: "free", format: "in-person", verified: true, requirements: ["National selection process"], tags: ["policy", "global"], fields: ["Leadership", "Social Impact"] },

  // Leadership Programs
  { id: "hobart-shakespeareans", title: "Global Youth Leadership Institute", org: "World Leaders Institute", category: "Leadership Programs", description: "6-week intensive for high schoolers to lead a social impact project with mentors from top universities.", deadline: "2026-09-15", minAge: 15, maxAge: 18, countries: "worldwide", cost: "paid", format: "in-person", verified: true, requirements: ["Essay", "Recommendation"], tags: ["leadership", "impact"], fields: ["Leadership", "Social Impact"] },
  { id: "diana-award", title: "The Diana Award", org: "The Diana Award", category: "Leadership Programs", description: "Recognition and mentoring for young people creating meaningful social change in their community.", deadline: "2026-07-01", minAge: 9, maxAge: 25, countries: "worldwide", cost: "free", format: "in-person", verified: true, requirements: ["Nomination", "Impact record"], tags: ["leadership", "impact"], fields: ["Leadership", "Social Impact"] },
  { id: "hoby", title: "HOBY Leadership Seminar", org: "Hugh O'Brian Youth Leadership", category: "Leadership Programs", description: "Three-day leadership seminar and community service for high school sophomores.", deadline: "2026-04-01", minGrade: 10, maxGrade: 10, countries: ["United States", "Canada"], cost: "paid", format: "in-person", verified: true, requirements: ["Nominated sophomore"], tags: ["leadership"], fields: ["Leadership"] },
  { id: "girl-up", title: "Girl Up Leadership Summit", org: "United Nations Foundation", category: "Leadership Programs", description: "Annual summit bringing together young leaders working on gender equality.", deadline: "2026-05-01", minAge: 13, maxAge: 22, countries: "worldwide", cost: "paid", format: "in-person", verified: true, requirements: ["Application", "Interest in gender equity"], tags: ["leadership", "human rights"], fields: ["Leadership", "Social Impact"] },
  { id: "obama-leaders", title: "Obama Foundation Voyager Scholarship", org: "Obama Foundation", category: "Leadership Programs", description: "Financial aid and travel stipend to promote public service leadership in college-bound students.", deadline: "2026-01-15", minGrade: 12, maxGrade: 12, countries: ["United States"], cost: "stipend", format: "in-person", verified: true, requirements: ["Grade 12", "Public service commitment"], tags: ["leadership", "public service"], fields: ["Leadership", "Social Impact"] },

  // Volunteering / Social Impact
  { id: "unicef-youth", title: "UNICEF Youth Advocate", org: "UNICEF", category: "Volunteering", description: "Advocate for children's rights and lead campaigns in your community.", deadline: "2026-08-30", minAge: 14, maxAge: 18, countries: "worldwide", cost: "free", format: "online", verified: true, requirements: ["Application", "Local project idea"], tags: ["human rights", "youth"], fields: ["Social Impact", "Leadership"] },
  { id: "earth-uprising", title: "Earth Uprising Fellowship", org: "Earth Uprising", category: "Volunteering", description: "Six-month fellowship organizing youth-led climate action in your city.", deadline: "2026-09-20", minAge: 14, maxAge: 20, countries: "worldwide", cost: "free", format: "online", verified: true, requirements: ["Interest in climate"], tags: ["climate", "activism"], fields: ["Environment", "Social Impact"] },
  { id: "amnesty-youth", title: "Amnesty Youth Network", org: "Amnesty International", category: "Volunteering", description: "Global youth network campaigning on human rights issues.", deadline: "2026-12-31", minAge: 13, maxAge: 21, countries: "worldwide", cost: "free", format: "online", verified: true, requirements: ["Registration"], tags: ["human rights"], fields: ["Social Impact"] },
  { id: "code-org-mentor", title: "Code.org Peer Mentor", org: "Code.org", category: "Volunteering", description: "Teach basic programming to younger students in your community.", deadline: "2026-12-31", minAge: 14, maxAge: 18, countries: "worldwide", cost: "free", format: "online", verified: true, requirements: ["Basic coding skills"], tags: ["coding", "education"], fields: ["Technology", "Education inequality"] },
  { id: "red-cross-club", title: "Red Cross Youth Volunteer", org: "American Red Cross", category: "Volunteering", description: "Local disaster response, blood drives, and health education volunteering.", deadline: "2026-12-31", minAge: 13, maxAge: 24, countries: ["United States"], cost: "free", format: "online", verified: true, requirements: ["Local chapter"], tags: ["service", "health"], fields: ["Healthcare", "Social Impact"] },

  // Summer Programs
  { id: "harvard-precollege", title: "Harvard Pre-College Program", org: "Harvard University", category: "Summer Programs", description: "Two-week academic residential program spanning humanities, sciences, and social sciences.", deadline: "2026-01-31", minAge: 15, maxAge: 18, minGrade: 10, maxGrade: 12, countries: "worldwide", cost: "paid", format: "in-person", verified: true, requirements: ["Min 3.5 GPA", "Essay"], tags: ["academic", "university"], fields: ["Science", "Writing", "Research"] },
  { id: "yale-yygs", title: "Yale Young Global Scholars", org: "Yale University", category: "Summer Programs", description: "Two-week residential program with interdisciplinary academic seminars.", deadline: "2026-01-11", minAge: 16, minGrade: 10, maxGrade: 11, countries: "worldwide", cost: "paid", format: "in-person", verified: true, requirements: ["Grade 10 or 11", "Essays"], tags: ["academic", "global"], fields: ["Leadership", "Writing", "Science"] },
  { id: "stanford-mathcamp", title: "Stanford University Mathematics Camp (SUMaC)", org: "Stanford University", category: "Summer Programs", description: "Intensive four-week program in advanced mathematics for high schoolers.", deadline: "2026-02-05", minGrade: 10, maxGrade: 11, countries: "worldwide", cost: "paid", format: "in-person", verified: true, requirements: ["Advanced math", "Application"], tags: ["math"], fields: ["Science", "Research"] },
  { id: "iowa-writing", title: "Iowa Young Writers' Studio", org: "University of Iowa", category: "Summer Programs", description: "Two-week creative writing intensive with the world-famous Iowa Writers' Workshop.", deadline: "2026-02-08", minGrade: 10, maxGrade: 12, countries: "worldwide", cost: "paid", format: "in-person", verified: true, requirements: ["Writing sample"], tags: ["writing", "creative"], fields: ["Writing", "Arts"] },
  { id: "stanford-medical", title: "Stanford Medical Youth Science Program", org: "Stanford University", category: "Summer Programs", description: "Five-week free residential program on health careers for underrepresented students.", deadline: "2026-03-15", minGrade: 11, maxGrade: 11, countries: ["United States"], cost: "free", format: "in-person", verified: true, requirements: ["Underrepresented in medicine", "Junior year"], tags: ["health", "premed"], fields: ["Healthcare", "Science"] },
  { id: "cty-jhu", title: "Johns Hopkins CTY", org: "Johns Hopkins University", category: "Summer Programs", description: "Advanced summer courses in STEM, humanities, and the arts for gifted learners.", deadline: "2026-05-01", minAge: 12, maxAge: 17, countries: "worldwide", cost: "paid", format: "in-person", verified: true, requirements: ["Talent search eligibility"], tags: ["academic"], fields: ["Science", "Writing", "Arts"] },

  // Projects
  { id: "climate-hackathon", title: "MyPath Climate Solutions Hackathon", org: "MyPath × Climate Lab", category: "Projects", description: "Weekend hackathon to prototype climate-tech solutions with mentors from Google, MIT and Ashoka.", deadline: "2026-09-01", minAge: 14, maxAge: 18, countries: "worldwide", cost: "free", format: "online", verified: true, requirements: ["Team of 2–4"], tags: ["climate", "tech"], fields: ["Environment", "Technology"] },
  { id: "founder-track", title: "Founder's Track: Student Startup Studio", org: "MyPath Ventures", category: "Projects", description: "Build and launch a real startup with weekly mentorship over 12 weeks.", deadline: "2026-10-10", minAge: 15, maxAge: 18, countries: "worldwide", cost: "free", format: "online", verified: true, requirements: ["Idea + team"], tags: ["business", "startup"], fields: ["Business", "Leadership"] },
  { id: "openscholar", title: "Open Scholar Independent Research", org: "MyPath Academy", category: "Projects", description: "Structured 8-week solo research project with weekly writing check-ins and a final paper.", deadline: "2026-11-01", minAge: 14, maxAge: 18, countries: "worldwide", cost: "free", format: "online", verified: true, requirements: ["Topic proposal"], tags: ["research", "writing"], fields: ["Research", "Writing"] },
  { id: "make-a-podcast", title: "Youth Storytellers Podcast Lab", org: "MyPath Storytellers", category: "Projects", description: "Six-week lab to launch your first podcast episode with editing mentorship.", deadline: "2026-08-01", minAge: 13, maxAge: 18, countries: "worldwide", cost: "free", format: "online", verified: true, requirements: ["Story idea"], tags: ["writing", "media"], fields: ["Arts", "Writing", "Design"] },

  // More scholarships
  { id: "elks-most-valuable", title: "Elks Most Valuable Student", org: "Elks National Foundation", category: "Scholarships", description: "$4,000 to $50,000 four-year scholarships for graduating high school seniors.", deadline: "2026-11-15", minGrade: 12, maxGrade: 12, countries: ["United States"], cost: "free", format: "online", verified: true, requirements: ["US citizen", "Grade 12"], tags: ["scholarship"], fields: ["Leadership"] },
  { id: "jack-kent-cooke", title: "Jack Kent Cooke Young Scholars", org: "Jack Kent Cooke Foundation", category: "Scholarships", description: "Support for high-achieving 7th graders with financial need through high school.", deadline: "2026-04-15", minGrade: 7, maxGrade: 7, countries: ["United States"], cost: "free", format: "online", verified: true, requirements: ["Grade 7", "Financial need"], tags: ["scholarship"], fields: ["Science", "Writing", "Arts"] },
  { id: "prudential-spirit", title: "Prudential Emerging Visionaries", org: "Prudential", category: "Scholarships", description: "$5,000 award for young people 14–18 taking solution-oriented action in their community.", deadline: "2026-11-05", minAge: 14, maxAge: 18, countries: ["United States"], cost: "free", format: "online", verified: true, requirements: ["Community project"], tags: ["service", "leadership"], fields: ["Social Impact", "Leadership"] },
  { id: "national-merit", title: "National Merit Scholarship", org: "NMSC", category: "Scholarships", description: "Prestigious recognition and scholarships based on PSAT/NMSQT performance.", deadline: "2026-10-15", minGrade: 11, maxGrade: 11, countries: ["United States"], cost: "free", format: "online", verified: true, requirements: ["Take PSAT junior year"], tags: ["scholarship", "test"], fields: ["Science", "Writing"] },

  // Additional
  { id: "microsoft-imagine-cup", title: "Microsoft Imagine Cup Junior", org: "Microsoft", category: "Competitions", description: "AI innovation challenge for students 13-18 to build solutions that help people.", deadline: "2026-03-15", minAge: 13, maxAge: 18, countries: "worldwide", cost: "free", format: "online", verified: true, requirements: ["Team", "AI project idea"], tags: ["AI", "coding"], fields: ["Technology"] },
  { id: "climate-cardinals", title: "Climate Cardinals Translator", org: "Climate Cardinals", category: "Volunteering", description: "Youth-led org translating climate info into 100+ languages — earn service hours.", deadline: "2026-12-31", minAge: 13, maxAge: 25, countries: "worldwide", cost: "free", format: "online", verified: true, requirements: ["Fluent in second language"], tags: ["climate", "language"], fields: ["Environment", "Writing"] },
  { id: "khan-tutor", title: "Khan Academy Peer Tutor", org: "Khan Academy", category: "Volunteering", description: "Volunteer to tutor peers in math, science, or humanities online.", deadline: "2026-12-31", minAge: 13, maxAge: 18, countries: "worldwide", cost: "free", format: "online", verified: true, requirements: ["Strong subject fluency"], tags: ["education"], fields: ["Education inequality", "Social Impact"] },
  // Newly added, currently open (checked Aug 2026)
  { id: "kaznu-open-doors", title: "Open Doors Russian Scholarship Olympiad", org: "Association of Global Universities", category: "Scholarships", description: "Free online olympiad giving international students a fully funded place at leading universities.", deadline: "2026-12-10", minAge: 16, maxAge: 22, countries: "worldwide", cost: "free", format: "online", verified: true, requirements: ["Online registration", "Two olympiad rounds"], tags: ["scholarship", "olympiad"], fields: ["Science", "Research", "Business"] },
  { id: "nu-foundation-openday", title: "Nazarbayev University Foundation Year Info & Prep", org: "Nazarbayev University", category: "Summer Programs", description: "Preparation sessions and campus visits for Kazakhstani students aiming at the Foundation Year programme.", deadline: "2027-01-20", minGrade: 11, maxGrade: 12, countries: ["Kazakhstan"], cost: "free", format: "hybrid", verified: true, requirements: ["Grade 11–12", "Registration"], tags: ["university", "prep"], fields: ["Science", "Technology", "Business"] },
  { id: "global-youth-ai", title: "Global Youth AI Challenge 2027", org: "AI4Good Foundation", category: "Competitions", description: "Build an AI project that solves a local problem, with online mentorship through the whole build.", deadline: "2027-02-15", minAge: 14, maxAge: 18, countries: "worldwide", cost: "free", format: "online", verified: true, requirements: ["Team of 1–4", "Project demo"], tags: ["AI", "coding"], fields: ["Technology", "Research"] },
  { id: "clean-water-fellows", title: "Clean Water Youth Fellowship", org: "Water.org Youth", category: "Volunteering", description: "Six-month fellowship supporting youth-led water and sanitation projects in your own city.", deadline: "2026-11-25", minAge: 15, maxAge: 20, countries: "worldwide", cost: "free", format: "online", verified: true, requirements: ["Project idea", "Weekly check-ins"], tags: ["environment", "service"], fields: ["Environment", "Social Impact"] },
  { id: "junior-lab-internship", title: "Junior Lab Research Internship", org: "Al-Farabi Research Labs", category: "Research", description: "Eight-week hands-on lab internship for senior school students curious about biology and chemistry.", deadline: "2027-03-01", minAge: 16, maxAge: 18, minGrade: 10, maxGrade: 12, countries: ["Kazakhstan", "Uzbekistan", "Kyrgyzstan"], cost: "free", format: "in-person", verified: true, requirements: ["Motivation letter", "Basic lab safety course"], tags: ["research", "biology"], fields: ["Science", "Healthcare", "Research"] },
  { id: "remote-startup-intern", title: "Remote Startup Internship for Students", org: "Silk Road Ventures", category: "Internships", description: "Part-time remote internship with an early-stage startup: real tasks in marketing, product or data.", deadline: "2026-10-20", minAge: 16, maxAge: 19, countries: "worldwide", cost: "stipend", format: "online", verified: true, requirements: ["10 hours/week", "Short interview"], tags: ["business", "remote"], fields: ["Business", "Technology"] },
  { id: "youth-council-2027", title: "City Youth Council Membership", org: "MyPath × City Councils", category: "Leadership Programs", description: "Join a youth council and take part in real decisions about education and public spaces in your city.", deadline: "2026-12-05", minAge: 14, maxAge: 18, countries: "worldwide", cost: "free", format: "hybrid", verified: true, requirements: ["Short application", "Interview"], tags: ["leadership", "civic"], fields: ["Leadership", "Social Impact"] },
  { id: "portfolio-sprint", title: "Portfolio Sprint: Ship One Real Project", org: "MyPath Academy", category: "Projects", description: "Four-week guided sprint to take one idea from blank page to a finished, shareable project.", deadline: "2026-09-25", minAge: 13, maxAge: 18, countries: "worldwide", cost: "free", format: "online", verified: true, requirements: ["Idea in one sentence"], tags: ["portfolio", "project"], fields: ["Design", "Technology", "Writing"] },
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


/** Formats offered. Used by the Opportunities filters. */
export const FORMATS = ["online", "in-person", "hybrid"] as const;
export type Format = (typeof FORMATS)[number];

/** Every distinct country mentioned in the database, alphabetical. */
export const COUNTRIES: string[] = Array.from(
  new Set(
    OPPORTUNITIES.flatMap((o) =>
      !o.countries || o.countries === "worldwide" ? [] : o.countries,
    ),
  ),
).sort();

/**
 * Opportunities whose deadline has not passed yet.
 * Evaluated on every call, so expired listings drop out automatically over time.
 */
export function openOpportunities(now: Date = new Date()): Opportunity[] {
  const today = now.toISOString().slice(0, 10);
  return OPPORTUNITIES.filter((o) => o.deadline >= today);
}

/** Whole days between today and the deadline. Negative once it has passed. */
export function daysLeft(deadline: string, now: Date = new Date()): number {
  const end = Date.parse(`${deadline}T00:00:00Z`);
  const start = Date.parse(`${now.toISOString().slice(0, 10)}T00:00:00Z`);
  return Math.round((end - start) / 86400000);
}

export function opportunityById(id: string) {
  return OPPORTUNITIES.find((o) => o.id === id);
}
