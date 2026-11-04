// Curated and verified educational opportunity database for MyPath (Cycle 2026/2027).
// Generated and verified automatically by scripts/pipeline.ts.
// Total verified records: 193

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
  {
    "id": "nu-summer-camp-2027",
    "title": "Nazarbayev University Summer Camp (NU Summer Camp)",
    "org": "Nazarbayev University",
    "category": "Summer Programs",
    "description": "Intensive summer academic residential camp for grades 8–11 at Nazarbayev University campus in Astana. Tracks include CyberMind (Robotics & IT), Inside Science (Physics & Chemistry), Human Lab (Biology & Pre-Med), Maker Lab (Engineering), and Success Track (Leadership & Debate).",
    "deadline": "2027-05-15",
    "minAge": 14,
    "maxAge": 18,
    "minGrade": 8,
    "maxGrade": 11,
    "countries": [
      "Kazakhstan",
      "KG",
      "UZ",
      "TJ"
    ],
    "cost": "paid",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Enrolled in grades 8–11",
      "Working English proficiency (Pre-Intermediate or higher)",
      "Completed application form and motivation essay"
    ],
    "tags": [
      "stem",
      "robotics",
      "ai",
      "medicine",
      "leadership"
    ],
    "fields": [
      "Stem",
      "Robotics",
      "Ai",
      "Medicine",
      "Leadership"
    ],
    "url": "https://camp.nu.edu.kz",
    "sourceUrl": "https://camp.nu.edu.kz"
  },
  {
    "id": "issai-research-fellowship-2027",
    "title": "ISSAI High School AI Research Fellowship",
    "org": "Institute of Smart Systems and Artificial Intelligence (ISSAI)",
    "category": "Research",
    "description": "Elite research internship program for high school students (grades 9–11) at Nazarbayev University's ISSAI institute, working on AI, computer vision, robotics, and natural language processing alongside leading PhD scientists.",
    "deadline": "2027-04-30",
    "minAge": 15,
    "maxAge": 18,
    "minGrade": 9,
    "maxGrade": 11,
    "countries": [
      "Kazakhstan"
    ],
    "cost": "free",
    "format": "hybrid",
    "verified": true,
    "requirements": [
      "Grades 9–11 student",
      "Proficiency in Python and high school mathematics",
      "GitHub coding portfolio or informatics olympiad background"
    ],
    "tags": [
      "ai",
      "computer_science",
      "stem"
    ],
    "fields": [
      "Ai",
      "Computer_science",
      "Stem"
    ],
    "url": "https://issai.nu.edu.kz",
    "sourceUrl": "https://issai.nu.edu.kz"
  },
  {
    "id": "izho-almaty-2027",
    "title": "International Zhautykov Olympiad (IZhO 2027)",
    "org": "РСФМШ / Республиканская физико-математическая школа",
    "category": "Competitions",
    "description": "Prestigious annual international team olympiad in Mathematics, Physics, and Computer Science held in Almaty, Kazakhstan, gathering top secondary school teams from over 20 nations.",
    "deadline": "2026-12-10",
    "minAge": 14,
    "maxAge": 18,
    "minGrade": 9,
    "maxGrade": 11,
    "countries": "worldwide",
    "cost": "paid",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Secondary school students (grades 9–11) representing an official school team",
      "School/regional qualification",
      "Registration via RFMSH committee"
    ],
    "tags": [
      "mathematics",
      "physics",
      "computer_science",
      "stem"
    ],
    "fields": [
      "Mathematics",
      "Physics",
      "Computer_science",
      "Stem"
    ],
    "url": "https://izho.kz",
    "sourceUrl": "https://izho.kz"
  },
  {
    "id": "indrive-beginit-2027",
    "title": "inDrive beginIT Social Leadership Project",
    "org": "inDrive / inVision U",
    "category": "Leadership Programs",
    "description": "Social educational initiative by inDrive for 10th-grade students from rural and regional schools across Kazakhstan, developing leadership, tech literacy, and community project skills, with full university scholarship opportunities.",
    "deadline": "2027-03-31",
    "minAge": 15,
    "maxAge": 17,
    "minGrade": 10,
    "maxGrade": 10,
    "countries": [
      "Kazakhstan"
    ],
    "cost": "stipend",
    "format": "hybrid",
    "verified": true,
    "requirements": [
      "10th-grade student at a rural or regional secondary school in Kazakhstan",
      "Demonstrated community leadership commitment",
      "Online test and video interview submission"
    ],
    "tags": [
      "leadership",
      "social_sciences",
      "computer_science",
      "entrepreneurship"
    ],
    "fields": [
      "Leadership",
      "Social_sciences",
      "Computer_science",
      "Entrepreneurship"
    ],
    "url": "https://beginit.indrive.com",
    "sourceUrl": "https://beginit.indrive.com"
  },
  {
    "id": "flex-program-kazakhstan-2027",
    "title": "FLEX (Future Leaders Exchange) Kazakhstan",
    "org": "American Councils for International Education / U.S. Department of State",
    "category": "Leadership Programs",
    "description": "Fully funded cultural exchange program sponsored by the U.S. Department of State for high school students in grades 8–10 from Kazakhstan. Selected finalists spend one full academic year living with an American host family and attending a U.S. high school.",
    "deadline": "2026-10-10",
    "minAge": 15,
    "maxAge": 17,
    "minGrade": 8,
    "maxGrade": 10,
    "countries": [
      "Kazakhstan"
    ],
    "cost": "stipend",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Citizen of Kazakhstan",
      "Enrolled in grade 8, 9, or 10",
      "Meet cycle age eligibility requirements",
      "Academic merit and English proficiency"
    ],
    "tags": [
      "leadership",
      "humanities",
      "social_sciences"
    ],
    "fields": [
      "Leadership",
      "Humanities",
      "Social_sciences"
    ],
    "url": "https://discoverflex.org",
    "sourceUrl": "https://kazakhstan.americancouncils.org/flex-en"
  },
  {
    "id": "smart-daryn-republican-olympiad-2027",
    "title": "Kazakhstan Republican General Subject Olympiad (Daryn)",
    "org": "РНПЦ «Дарын» Министерства просвещения РК",
    "category": "Competitions",
    "description": "The primary national academic competition system in Kazakhstan across all school subjects. Winning the republican finals provides state university tuition grants and international olympiad team qualification.",
    "deadline": "2026-11-20",
    "minAge": 14,
    "maxAge": 18,
    "minGrade": 9,
    "maxGrade": 11,
    "countries": [
      "Kazakhstan"
    ],
    "cost": "free",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Grades 9–11 student in Kazakhstan",
      "Advancement through school and district qualifiers",
      "Registration via smart.daryn.kz"
    ],
    "tags": [
      "stem",
      "mathematics",
      "physics",
      "computer_science",
      "humanities"
    ],
    "fields": [
      "Stem",
      "Mathematics",
      "Physics",
      "Computer_science",
      "Humanities"
    ],
    "url": "https://smart.daryn.kz",
    "sourceUrl": "https://daryn.kz"
  },
  {
    "id": "daryn-scientific-projects-competition-2027",
    "title": "Daryn Republican Scientific Research Projects Competition",
    "org": "РНПЦ «Дарын»",
    "category": "Research",
    "description": "Kazakhstan's official pre-college scientific research competition for grades 8–11 across 16 fields. Top winners represent Kazakhstan at Regeneron ISEF in the United States and earn state university scholarships.",
    "deadline": "2026-11-25",
    "minAge": 14,
    "maxAge": 18,
    "minGrade": 8,
    "maxGrade": 11,
    "countries": [
      "Kazakhstan"
    ],
    "cost": "free",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Grades 8–11 student",
      "Original research paper or engineering project with supervisor",
      "Project passport submission and defense"
    ],
    "tags": [
      "stem",
      "environmental_science",
      "humanities",
      "social_sciences"
    ],
    "fields": [
      "Stem",
      "Environmental_science",
      "Humanities",
      "Social_sciences"
    ],
    "url": "https://daryn.kz",
    "sourceUrl": "https://daryn.kz"
  },
  {
    "id": "astana-hub-teen-preincubator-2027",
    "title": "Astana Hub Teen Tech Pre-Incubator",
    "org": "Astana Hub (Международный технопарк IT-стартапов)",
    "category": "Competitions",
    "description": "Free tech startup pre-incubation program for teenagers aged 14–18 hosted by Astana Hub. Covers idea validation, rapid prototyping (MVP), product marketing, and pitch preparation for angel investors.",
    "deadline": "2027-02-28",
    "minAge": 14,
    "maxAge": 18,
    "minGrade": 8,
    "maxGrade": 12,
    "countries": [
      "Kazakhstan",
      "KG",
      "UZ"
    ],
    "cost": "free",
    "format": "hybrid",
    "verified": true,
    "requirements": [
      "Ages 14–18",
      "Tech startup idea or prototype",
      "Team of 1 to 4 youth founders"
    ],
    "tags": [
      "entrepreneurship",
      "computer_science",
      "ai"
    ],
    "fields": [
      "Entrepreneurship",
      "Computer_science",
      "Ai"
    ],
    "url": "https://astanahub.com",
    "sourceUrl": "https://astanahub.com"
  },
  {
    "id": "alem-school-coding-bootcamp-2027",
    "title": "alem School Youth Peer-to-Peer Coding Intensive",
    "org": "alem School (Astana)",
    "category": "Summer Programs",
    "description": "Free peer-to-peer coding intensive for youth aged 16+ at alem school in Astana. Based on the 01Edu model, students learn full-stack development, software engineering, and algorithms through project collaboration.",
    "deadline": "2027-12-31",
    "minAge": 16,
    "maxAge": 18,
    "minGrade": 10,
    "maxGrade": 12,
    "countries": [
      "Kazakhstan"
    ],
    "cost": "free",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Age 16 or older",
      "Pass online logic and memory entrance games",
      "Commitment to on-site intensive in Astana"
    ],
    "tags": [
      "computer_science",
      "ai",
      "stem"
    ],
    "fields": [
      "Computer_science",
      "Ai",
      "Stem"
    ],
    "url": "https://alem.school",
    "sourceUrl": "https://alem.school"
  },
  {
    "id": "kaznu-junior-science-lab-2027",
    "title": "Al-Farabi KazNU Junior Science Research Lab",
    "org": "Казахский национальный университет имени аль-Фараби",
    "category": "Research",
    "description": "Hands-on university lab research internship for secondary students in grades 9–11 at Al-Farabi KazNU laboratories in Almaty, focusing on biotechnology, green chemistry, and nanotechnology.",
    "deadline": "2027-04-15",
    "minAge": 14,
    "maxAge": 18,
    "minGrade": 9,
    "maxGrade": 11,
    "countries": [
      "Kazakhstan"
    ],
    "cost": "free",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Grades 9–11 student",
      "Interest in biological, chemical, or environmental sciences",
      "Teacher recommendation letter"
    ],
    "tags": [
      "stem",
      "environmental_science",
      "medicine"
    ],
    "fields": [
      "Stem",
      "Environmental_science",
      "Medicine"
    ],
    "url": "https://kaznu.kz",
    "sourceUrl": "https://kaznu.kz"
  },
  {
    "id": "nis-science-projects-fair-2027",
    "title": "Nazarbayev Intellectual Schools (NIS) Annual Science Fair",
    "org": "АОО «Назарбаев Интеллектуальные школы»",
    "category": "Research",
    "description": "Flagship annual pre-college science and engineering fair organized by Nazarbayev Intellectual Schools (NIS) for innovative student research in math modeling, applied physics, and robotics.",
    "deadline": "2027-01-20",
    "minAge": 14,
    "maxAge": 18,
    "minGrade": 8,
    "maxGrade": 12,
    "countries": [
      "Kazakhstan"
    ],
    "cost": "free",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Grades 8–12 student at NIS or affiliate partner school",
      "Completed scientific study with experimental data",
      "Poster presentation"
    ],
    "tags": [
      "stem",
      "robotics",
      "ai",
      "environmental_science"
    ],
    "fields": [
      "Stem",
      "Robotics",
      "Ai",
      "Environmental_science"
    ],
    "url": "https://nis.edu.kz",
    "sourceUrl": "https://nis.edu.kz"
  },
  {
    "id": "camun-model-united-nations-2027",
    "title": "Central Asian Model United Nations for High Schools (CAMUN)",
    "org": "CAMUN Secretariat / UN Information Centre",
    "category": "Competitions",
    "description": "International diplomatic simulation conference for secondary school students modeling UN committees (Security Council, UNESCO, WHO, ECOSOC). Delegates draft and debate resolutions on global crises.",
    "deadline": "2027-02-15",
    "minAge": 14,
    "maxAge": 18,
    "minGrade": 8,
    "maxGrade": 11,
    "countries": [
      "Kazakhstan",
      "KG",
      "UZ",
      "TJ"
    ],
    "cost": "paid",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Grades 8–11 student",
      "Fluent English",
      "Country position paper submission"
    ],
    "tags": [
      "leadership",
      "social_sciences",
      "humanities"
    ],
    "fields": [
      "Leadership",
      "Social_sciences",
      "Humanities"
    ],
    "url": "https://camun.kz",
    "sourceUrl": "https://camun.kz"
  },
  {
    "id": "technovation-girls-kazakhstan-2027",
    "title": "Technovation Girls Kazakhstan Chapter",
    "org": "Technovation Global & Kazakhstan Regional Ambassadors",
    "category": "Competitions",
    "description": "Kazakhstan chapter of the world's largest tech entrepreneurship program for girls ages 8–18. Teams work with volunteer industry mentors to build a mobile app or AI prototype addressing UN Sustainable Development Goals.",
    "deadline": "2027-03-20",
    "minAge": 13,
    "maxAge": 18,
    "minGrade": 7,
    "maxGrade": 12,
    "countries": [
      "Kazakhstan"
    ],
    "cost": "free",
    "format": "online",
    "verified": true,
    "requirements": [
      "Female students ages 13–18",
      "Team of 1 to 5 girls",
      "Mobile app/AI prototype, business pitch, and code repository"
    ],
    "tags": [
      "computer_science",
      "entrepreneurship",
      "ai",
      "social_sciences"
    ],
    "fields": [
      "Computer_science",
      "Entrepreneurship",
      "Ai",
      "Social_sciences"
    ],
    "url": "https://technovationchallenge.org",
    "sourceUrl": "https://technovationchallenge.org"
  },
  {
    "id": "wro-kazakhstan-robotics-2027",
    "title": "World Robot Olympiad (WRO) Kazakhstan National Finals",
    "org": "WRO Kazakhstan / АОО «НИШ»",
    "category": "Competitions",
    "description": "Official Kazakhstan qualifier for the World Robot Olympiad (WRO). High school teams compete in RoboMission (autonomous field robotics), Future Innovators (scientific engineering projects), and RoboSports.",
    "deadline": "2027-05-01",
    "minAge": 13,
    "maxAge": 18,
    "minGrade": 7,
    "maxGrade": 11,
    "countries": [
      "Kazakhstan"
    ],
    "cost": "paid",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Students ages 13–18 in teams of 2–3",
      "Adult team coach",
      "Assembled and programmed robot compliant with season rules"
    ],
    "tags": [
      "robotics",
      "stem",
      "computer_science"
    ],
    "fields": [
      "Robotics",
      "Stem",
      "Computer_science"
    ],
    "url": "https://wro.kz",
    "sourceUrl": "https://wro.kz"
  },
  {
    "id": "euler-math-olympiad-kz-2027",
    "title": "Leonard Euler Mathematics Olympiad for Grades 7–8",
    "org": "РНПЦ «Дарын»",
    "category": "Competitions",
    "description": "Premier mathematics competition designed specifically for advanced 7th and 8th graders, mirroring the rigor of national senior olympiads and serving as the feeder to Kazakhstan's international IMO pipeline.",
    "deadline": "2026-11-30",
    "minAge": 13,
    "maxAge": 15,
    "minGrade": 7,
    "maxGrade": 8,
    "countries": [
      "Kazakhstan"
    ],
    "cost": "free",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Enrolled in grade 7 or 8",
      "Passing score in preliminary regional round",
      "Registration via Daryn"
    ],
    "tags": [
      "mathematics",
      "stem"
    ],
    "fields": [
      "Mathematics",
      "Stem"
    ],
    "url": "https://daryn.kz/euler",
    "sourceUrl": "https://smart.daryn.kz"
  },
  {
    "id": "silkway-math-olympiad-2027",
    "title": "Silk Road International Mathematical Olympiad",
    "org": "Оргкомитет олимпиады «Шелковый путь» / Дарын",
    "category": "Competitions",
    "description": "High-level international written mathematics competition conducted simultaneously across participating Silk Road and Central Asian nations, testing advanced geometry, number theory, and combinatorics.",
    "deadline": "2027-03-10",
    "minAge": 14,
    "maxAge": 18,
    "minGrade": 9,
    "maxGrade": 11,
    "countries": [
      "Kazakhstan",
      "UZ",
      "KG",
      "TJ",
      "AZ"
    ],
    "cost": "free",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Grades 9–11 student",
      "National math olympiad winner or national team reserve member",
      "In-person proctored exam"
    ],
    "tags": [
      "mathematics",
      "stem"
    ],
    "fields": [
      "Mathematics",
      "Stem"
    ],
    "url": "https://daryn.kz/silkway",
    "sourceUrl": "https://daryn.kz"
  },
  {
    "id": "red-crescent-kazakhstan-volunteers-2027",
    "title": "Red Crescent Kazakhstan Youth Volunteer Corps",
    "org": "Общество Красного Полумесяца Республики Казахстан",
    "category": "Volunteering",
    "description": "Official youth humanitarian volunteer corps for teenagers aged 14+ across Kazakhstan. Volunteers receive certified first-aid training and lead community health, emergency response, and social care initiatives.",
    "deadline": "2027-12-31",
    "minAge": 14,
    "maxAge": 18,
    "minGrade": 8,
    "maxGrade": 12,
    "countries": [
      "Kazakhstan"
    ],
    "cost": "free",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Age 14 or older",
      "Parental consent for minors",
      "Commitment of at least 2 hours per week"
    ],
    "tags": [
      "social_sciences",
      "leadership",
      "medicine"
    ],
    "fields": [
      "Social_sciences",
      "Leadership",
      "Medicine"
    ],
    "url": "https://redcrescent.kz",
    "sourceUrl": "https://redcrescent.kz"
  },
  {
    "id": "zhas-project-youth-grants-2027",
    "title": "Zhas Project Youth Community Microgrants",
    "org": "Министерство культуры и информации РК / Центр поддержки гражданских инициатив",
    "category": "Competitions",
    "description": "State social microgrant program in Kazakhstan providing non-repayable grants (up to 1,000,000 KZT) for youth-led local community improvement and social enterprise projects.",
    "deadline": "2027-05-30",
    "minAge": 17,
    "maxAge": 18,
    "minGrade": 11,
    "maxGrade": 12,
    "countries": [
      "Kazakhstan"
    ],
    "cost": "stipend",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Ages 18 or high school seniors with an adult lead",
      "Residency in participating region",
      "Actionable community improvement plan"
    ],
    "tags": [
      "leadership",
      "social_sciences",
      "entrepreneurship"
    ],
    "fields": [
      "Leadership",
      "Social_sciences",
      "Entrepreneurship"
    ],
    "url": "https://zhasproject.kz",
    "sourceUrl": "https://zhasproject.kz"
  },
  {
    "id": "conrad-challenge-2027",
    "title": "Conrad Challenge 2026/2027 Innovation Competition",
    "org": "Conrad Foundation",
    "category": "Competitions",
    "description": "Prestigious global innovation and entrepreneurship challenge for students ages 13–18. Teams of 2–5 design commercially viable solutions in Aerospace & Aviation, Cyber-Technology & AI, Energy & Environment, and Health & Nutrition.",
    "deadline": "2026-11-06",
    "minAge": 13,
    "maxAge": 18,
    "minGrade": 8,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "paid",
    "format": "online",
    "verified": true,
    "requirements": [
      "Ages 13–18",
      "Team of 2–5 students plus adult coach",
      "Innovation brief and pitch video in English"
    ],
    "tags": [
      "stem",
      "robotics",
      "ai",
      "environmental_science",
      "entrepreneurship"
    ],
    "fields": [
      "Stem",
      "Robotics",
      "Ai",
      "Environmental_science",
      "Entrepreneurship"
    ],
    "url": "https://www.conradchallenge.org",
    "sourceUrl": "https://www.conradchallenge.org"
  },
  {
    "id": "technovation-girls-global-2027",
    "title": "Technovation Girls Global Tech Challenge 2027",
    "org": "Technovation",
    "category": "Competitions",
    "description": "The world's largest technology entrepreneurship program for girls ages 8–18 (divisions for 13–15 and 16–18). Teams identify a community problem and build a mobile app or AI prototype, business plan, and video pitch.",
    "deadline": "2027-03-24",
    "minAge": 13,
    "maxAge": 18,
    "minGrade": 7,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "free",
    "format": "online",
    "verified": true,
    "requirements": [
      "Female students ages 13–18",
      "Teams of 1 to 5 members",
      "Working prototype (mobile app or AI model), pitch video, and business plan"
    ],
    "tags": [
      "computer_science",
      "entrepreneurship",
      "ai",
      "social_sciences"
    ],
    "fields": [
      "Computer_science",
      "Entrepreneurship",
      "Ai",
      "Social_sciences"
    ],
    "url": "https://technovationchallenge.org/seasons/2027",
    "sourceUrl": "https://technovationchallenge.org"
  },
  {
    "id": "microsoft-imagine-cup-junior-2027",
    "title": "Microsoft Imagine Cup Junior 2027",
    "org": "Microsoft",
    "category": "Competitions",
    "description": "Global challenge by Microsoft for students ages 13–18 introducing Artificial Intelligence, machine learning, and cybersecurity to solve big global issues aligned with the AI for Good initiatives.",
    "deadline": "2027-05-10",
    "minAge": 13,
    "maxAge": 18,
    "minGrade": 7,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "free",
    "format": "online",
    "verified": true,
    "requirements": [
      "Ages 13–18",
      "Team of 1 to 6 students with a team leader/educator",
      "Submission of project PowerPoint template and summary"
    ],
    "tags": [
      "ai",
      "computer_science",
      "stem",
      "environmental_science"
    ],
    "fields": [
      "Ai",
      "Computer_science",
      "Stem",
      "Environmental_science"
    ],
    "url": "https://imaginecup.microsoft.com",
    "sourceUrl": "https://imaginecup.microsoft.com"
  },
  {
    "id": "breakthrough-junior-challenge-2027",
    "title": "Breakthrough Junior Challenge 2027",
    "org": "Breakthrough Prize Foundation",
    "category": "Competitions",
    "description": "Global science video competition for students ages 13–18. Participants create an engaging up-to-90-second video explaining a complex concept in physics, mathematics, or life sciences. Winner receives a $250,000 college scholarship, a $100,000 science lab for their school, and a $50,000 teacher prize.",
    "deadline": "2027-06-25",
    "minAge": 13,
    "maxAge": 18,
    "minGrade": 8,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "free",
    "format": "online",
    "verified": true,
    "requirements": [
      "Ages 13–18",
      "Original English-language explanatory video of max 90 seconds",
      "Participation in the mandatory Peer-to-Peer Review process"
    ],
    "tags": [
      "physics",
      "mathematics",
      "stem"
    ],
    "fields": [
      "Physics",
      "Mathematics",
      "Stem"
    ],
    "url": "https://breakthroughjuniorchallenge.org",
    "sourceUrl": "https://breakthroughjuniorchallenge.org"
  },
  {
    "id": "usaco-computing-olympiad-2027",
    "title": "USA Computing Olympiad (USACO) Online Contests",
    "org": "USA Computing Olympiad",
    "category": "Competitions",
    "description": "Premier algorithmic computer programming competition system for pre-college students worldwide. Offers four divisional contests (Bronze, Silver, Gold, Platinum) with rigorous automated grading in C++, Java, and Python.",
    "deadline": "2026-12-18",
    "minAge": 13,
    "maxAge": 18,
    "minGrade": 7,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "free",
    "format": "online",
    "verified": true,
    "requirements": [
      "Pre-college student",
      "Proficiency in C++, Java, or Python algorithms",
      "Free account on usaco.org"
    ],
    "tags": [
      "computer_science",
      "stem"
    ],
    "fields": [
      "Computer_science",
      "Stem"
    ],
    "url": "https://usaco.org",
    "sourceUrl": "https://usaco.org"
  },
  {
    "id": "acsl-computer-science-league-2027",
    "title": "American Computer Science League (ACSL)",
    "org": "American Computer Science League",
    "category": "Competitions",
    "description": "International computer science league for grades 7–12 with four regular season rounds testing foundational CS theory (number systems, boolean algebra, graph theory, data structures) and hands-on coding, culminating in an All-Star Finals.",
    "deadline": "2026-12-31",
    "minAge": 13,
    "maxAge": 18,
    "minGrade": 7,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "paid",
    "format": "online",
    "verified": true,
    "requirements": [
      "Enrolled in grades 7–12",
      "Registered individually or via school club",
      "Completion of four season contests"
    ],
    "tags": [
      "computer_science",
      "stem",
      "mathematics"
    ],
    "fields": [
      "Computer_science",
      "Stem",
      "Mathematics"
    ],
    "url": "https://www.acsl.org",
    "sourceUrl": "https://www.acsl.org"
  },
  {
    "id": "world-robot-olympiad-global-2027",
    "title": "World Robot Olympiad (WRO) International Finals",
    "org": "World Robot Olympiad Association",
    "category": "Competitions",
    "description": "Global robotics competition for young people up to age 19. Teams design, construct, and program autonomous robots to complete dynamic problem-solving challenges in RoboMission, Future Innovators, and RoboSports.",
    "deadline": "2027-06-30",
    "minAge": 13,
    "maxAge": 18,
    "minGrade": 7,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "paid",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Ages 13–18 in Senior division",
      "Team of 2–3 students with adult coach",
      "Qualification via official national partner"
    ],
    "tags": [
      "robotics",
      "stem",
      "computer_science"
    ],
    "fields": [
      "Robotics",
      "Stem",
      "Computer_science"
    ],
    "url": "https://wro-association.org",
    "sourceUrl": "https://wro-association.org"
  },
  {
    "id": "regeneron-isef-science-fair-2027",
    "title": "Regeneron International Science and Engineering Fair (ISEF)",
    "org": "Society for Science",
    "category": "Research",
    "description": "The world's largest global pre-college science and engineering competition for grades 9–12. Roughly 1,800 finalists from over 75 countries compete for more than $9 million in awards and scholarships. Qualification is exclusively through affiliated national fairs (e.g. Daryn in Kazakhstan).",
    "deadline": "2027-04-01",
    "minAge": 14,
    "maxAge": 18,
    "minGrade": 9,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "stipend",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Grades 9–12 student under age 20",
      "Original science research adhering to SRC/IRB ethics protocols",
      "Win affiliated regional/national fair"
    ],
    "tags": [
      "stem",
      "medicine",
      "environmental_science",
      "ai",
      "robotics"
    ],
    "fields": [
      "Stem",
      "Medicine",
      "Environmental_science",
      "Ai",
      "Robotics"
    ],
    "url": "https://www.societyforscience.org/isef/",
    "sourceUrl": "https://www.societyforscience.org/isef/"
  },
  {
    "id": "bebras-computational-thinking-2027",
    "title": "Bebras International Challenge on Informatics and Computational Thinking",
    "org": "International Bebras Community",
    "category": "Competitions",
    "description": "Global challenge on computational thinking and problem solving for school students. Accessible without prior coding experience, featuring interactive puzzles that explore discrete mathematics, algorithms, and informatics concepts.",
    "deadline": "2026-11-20",
    "minAge": 13,
    "maxAge": 18,
    "minGrade": 7,
    "maxGrade": 11,
    "countries": "worldwide",
    "cost": "free",
    "format": "online",
    "verified": true,
    "requirements": [
      "Grades 7–11 student",
      "Registration via school coordinator or national hub",
      "45-minute online interactive challenge"
    ],
    "tags": [
      "computer_science",
      "mathematics",
      "stem"
    ],
    "fields": [
      "Computer_science",
      "Mathematics",
      "Stem"
    ],
    "url": "https://www.bebras.org",
    "sourceUrl": "https://www.bebras.org"
  },
  {
    "id": "international-olympiad-informatics-2027",
    "title": "International Olympiad in Informatics (IOI 2027)",
    "org": "International Olympiad in Informatics (IOI)",
    "category": "Competitions",
    "description": "The pinnacle global competitive programming olympiad for secondary school students. Each participating country sends an official national delegation of up to four students to solve algorithmic challenges.",
    "deadline": "2027-06-01",
    "minAge": 14,
    "maxAge": 19,
    "minGrade": 9,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "stipend",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Enrolled in secondary school and under age 20",
      "Selected for national team via official country olympiad qualifiers",
      "Mastery of C++ and complex algorithms"
    ],
    "tags": [
      "computer_science",
      "stem"
    ],
    "fields": [
      "Computer_science",
      "Stem"
    ],
    "url": "https://ioinformatics.org",
    "sourceUrl": "https://ioinformatics.org"
  },
  {
    "id": "international-mathematical-olympiad-2027",
    "title": "International Mathematical Olympiad (IMO 2027)",
    "org": "International Mathematical Olympiad Board",
    "category": "Competitions",
    "description": "The world championship mathematics competition for high school students. National teams of six compete over two grueling exam days solving six proof-based problems in algebra, geometry, number theory, and combinatorics.",
    "deadline": "2027-05-15",
    "minAge": 14,
    "maxAge": 19,
    "minGrade": 9,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "stipend",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Pre-university secondary student under 20",
      "Top 6 qualifier on national team selection tests",
      "Proof-based problem solving mastery"
    ],
    "tags": [
      "mathematics",
      "stem"
    ],
    "fields": [
      "Mathematics",
      "Stem"
    ],
    "url": "https://www.imo-official.org",
    "sourceUrl": "https://www.imo-official.org"
  },
  {
    "id": "international-physics-olympiad-2027",
    "title": "International Physics Olympiad (IPhO 2027)",
    "org": "International Physics Olympiad Board",
    "category": "Competitions",
    "description": "Annual international physics competition for high school students featuring intense theoretical and experimental laboratory rounds for national teams of five delegates.",
    "deadline": "2027-05-15",
    "minAge": 14,
    "maxAge": 19,
    "minGrade": 9,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "stipend",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Secondary student under age 20",
      "Selection for official national top 5 delegation",
      "Advanced experimental lab and theoretical calculus skills"
    ],
    "tags": [
      "physics",
      "stem"
    ],
    "fields": [
      "Physics",
      "Stem"
    ],
    "url": "https://www.ipho-new.org",
    "sourceUrl": "https://www.ipho-new.org"
  },
  {
    "id": "international-chemistry-olympiad-2027",
    "title": "International Chemistry Olympiad (IChO 2027)",
    "org": "International Chemistry Olympiad Steering Committee",
    "category": "Competitions",
    "description": "Premier world competition in chemistry for secondary students, consisting of a 5-hour practical laboratory synthesis exam and a 5-hour theoretical examination covering organic, physical, and analytical chemistry.",
    "deadline": "2027-05-15",
    "minAge": 14,
    "maxAge": 19,
    "minGrade": 9,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "stipend",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Secondary student under 20",
      "National team top 4 qualification",
      "Hands-on chemical synthesis and analysis laboratory skills"
    ],
    "tags": [
      "stem"
    ],
    "fields": [
      "Stem"
    ],
    "url": "https://www.icho-official.org",
    "sourceUrl": "https://www.icho-official.org"
  },
  {
    "id": "international-biology-olympiad-2027",
    "title": "International Biology Olympiad (IBO 2027)",
    "org": "International Biology Olympiad Association",
    "category": "Competitions",
    "description": "The premier biological sciences competition for pre-university students worldwide. Evaluates advanced practical lab dissections, molecular genetics, biochemistry, and theoretical knowledge.",
    "deadline": "2027-05-15",
    "minAge": 14,
    "maxAge": 19,
    "minGrade": 9,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "stipend",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Secondary school student under age 20",
      "National top 4 team qualifier",
      "Practical expertise in molecular biology protocols and anatomy"
    ],
    "tags": [
      "medicine",
      "stem",
      "environmental_science"
    ],
    "fields": [
      "Medicine",
      "Stem",
      "Environmental_science"
    ],
    "url": "https://www.ibo-info.org",
    "sourceUrl": "https://www.ibo-info.org"
  },
  {
    "id": "egoi-girls-informatics-olympiad-2027",
    "title": "European Girls' Olympiad in Informatics (EGOI 2027)",
    "org": "EGOI International Committee",
    "category": "Competitions",
    "description": "Prestigious international algorithmic programming competition modeled after the IOI, designed specifically for female high school students. European nations and guest countries (including Kazakhstan) field teams of four.",
    "deadline": "2027-04-30",
    "minAge": 13,
    "maxAge": 19,
    "minGrade": 8,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "stipend",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Female secondary school student",
      "Top 4 selection on national girls' informatics qualifier",
      "Competitive programming mastery in C++"
    ],
    "tags": [
      "computer_science",
      "stem"
    ],
    "fields": [
      "Computer_science",
      "Stem"
    ],
    "url": "https://egoi.org",
    "sourceUrl": "https://egoi.org"
  },
  {
    "id": "rise-global-initiative-2027",
    "title": "Rise Global Initiative for Young Leaders (Ages 15–17)",
    "org": "Schmidt Futures & The Rhodes Trust",
    "category": "Scholarships",
    "description": "Global talent program by Schmidt Futures and Rhodes Trust that finds brilliant young people (ages 15–17) and supports them for life. Finalists receive lifelong benefits including university scholarships, mentorship, tech packages, and project funding.",
    "deadline": "2027-01-15",
    "minAge": 15,
    "maxAge": 17,
    "minGrade": 9,
    "maxGrade": 11,
    "countries": "worldwide",
    "cost": "stipend",
    "format": "hybrid",
    "verified": true,
    "requirements": [
      "Ages 15–17 as of cycle criteria",
      "Completion of an individual project addressing a real community need",
      "Peer evaluations and video submissions via app"
    ],
    "tags": [
      "leadership",
      "social_sciences",
      "stem",
      "entrepreneurship"
    ],
    "fields": [
      "Leadership",
      "Social_sciences",
      "Stem",
      "Entrepreneurship"
    ],
    "url": "https://www.risefortheworld.org",
    "sourceUrl": "https://www.risefortheworld.org"
  },
  {
    "id": "uwc-international-scholarships-2027",
    "title": "United World Colleges (UWC) International Diploma Scholarships",
    "org": "UWC International / UWC Kazakhstan National Committee",
    "category": "Scholarships",
    "description": "Two-year pre-university International Baccalaureate (IB) diploma program across 18 UWC colleges globally (UK, Canada, Italy, Singapore, Armenia, etc.). The UWC Kazakhstan National Committee awards need-based full and partial scholarships.",
    "deadline": "2026-11-15",
    "minAge": 16,
    "maxAge": 18,
    "minGrade": 10,
    "maxGrade": 11,
    "countries": [
      "Kazakhstan"
    ],
    "cost": "stipend",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Ages 16–18 at entry",
      "Citizen or permanent resident of Kazakhstan",
      "Demonstrated community engagement and panel interview"
    ],
    "tags": [
      "leadership",
      "humanities",
      "social_sciences",
      "stem"
    ],
    "fields": [
      "Leadership",
      "Humanities",
      "Social_sciences",
      "Stem"
    ],
    "url": "https://www.uwc.org",
    "sourceUrl": "https://kz.uwc.org"
  },
  {
    "id": "the-diana-award-2027",
    "title": "The Diana Award for Young Changemakers",
    "org": "The Diana Award Foundation",
    "category": "Scholarships",
    "description": "The most prestigious accolade a young person aged 9–25 can receive for their social action or humanitarian work. Established in memory of Diana, Princess of Wales, candidates must be nominated by professionals who know them in a personal or work capacity.",
    "deadline": "2027-08-01",
    "minAge": 13,
    "maxAge": 18,
    "minGrade": 7,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "free",
    "format": "online",
    "verified": true,
    "requirements": [
      "Ages 9–25",
      "Nominated by a professional (non-family member)",
      "Sustained social or humanitarian impact of 12+ months"
    ],
    "tags": [
      "leadership",
      "social_sciences"
    ],
    "fields": [
      "Leadership",
      "Social_sciences"
    ],
    "url": "https://diana-award.org.uk",
    "sourceUrl": "https://diana-award.org.uk"
  },
  {
    "id": "ashoka-young-changemakers-2027",
    "title": "Ashoka Young Changemakers Global Network",
    "org": "Ashoka: Innovators for the Public",
    "category": "Scholarships",
    "description": "Global network of teen changemakers (under 20) who have launched active social initiatives, community ventures, or campaigns. Members access global visibility, peer cohorts, and mentorship from social entrepreneurs.",
    "deadline": "2027-12-31",
    "minAge": 13,
    "maxAge": 18,
    "minGrade": 8,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "free",
    "format": "hybrid",
    "verified": true,
    "requirements": [
      "Under 20 years old",
      "Founder or co-founder of an active social venture",
      "Demonstrated team leadership and local impact"
    ],
    "tags": [
      "leadership",
      "social_sciences",
      "entrepreneurship"
    ],
    "fields": [
      "Leadership",
      "Social_sciences",
      "Entrepreneurship"
    ],
    "url": "https://www.ashoka.org",
    "sourceUrl": "https://www.ashoka.org/en-us/program/ashoka-young-changemakers"
  },
  {
    "id": "afs-global-stem-academies-2027",
    "title": "AFS Global STEM Academies Full Scholarships",
    "org": "AFS Intercultural Programs & bp",
    "category": "Scholarships",
    "description": "Fully funded global scholarship program for students ages 15–17.5. Combines a 12-week virtual curriculum on sustainability and STEM with a fully funded 4-week in-person academy in Egypt, Brazil, India, Europe, or the USA.",
    "deadline": "2027-01-15",
    "minAge": 15,
    "maxAge": 17,
    "minGrade": 9,
    "maxGrade": 11,
    "countries": "worldwide",
    "cost": "stipend",
    "format": "hybrid",
    "verified": true,
    "requirements": [
      "Ages 15 to 17.5 at start",
      "Strong interest in STEM and sustainability",
      "Proficient English for international collaboration"
    ],
    "tags": [
      "stem",
      "environmental_science",
      "leadership"
    ],
    "fields": [
      "Stem",
      "Environmental_science",
      "Leadership"
    ],
    "url": "https://afs.org/global-stem/",
    "sourceUrl": "https://afs.org/global-stem/"
  },
  {
    "id": "civics-unplugged-fellowship-2027",
    "title": "Civics Unplugged Civic Innovation Fellowship",
    "org": "Civics Unplugged",
    "category": "Scholarships",
    "description": "Free 6-month digital leadership fellowship for high school students globally. Fellows learn systems thinking, democratic innovation, and civic entrepreneurship, unlocking lifetime access to project funding and mentors.",
    "deadline": "2026-12-01",
    "minAge": 14,
    "maxAge": 18,
    "minGrade": 9,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "free",
    "format": "online",
    "verified": true,
    "requirements": [
      "High school student (grades 9–12)",
      "Passion for civic innovation and leadership",
      "Commitment of 2–3 hours weekly for virtual cohort sessions"
    ],
    "tags": [
      "leadership",
      "social_sciences"
    ],
    "fields": [
      "Leadership",
      "Social_sciences"
    ],
    "url": "https://www.civicsunplugged.org",
    "sourceUrl": "https://www.civicsunplugged.org"
  },
  {
    "id": "world-science-scholars-2027",
    "title": "World Science Scholars Elite Mathematics Fellowship",
    "org": "World Science Festival",
    "category": "Scholarships",
    "description": "Highly selective, free 2-year virtual program for mathematically talented high schoolers globally. Scholars explore advanced mathematics applied to cutting-edge disciplines such as quantum theory and neuroscience under Nobel laureates and world-renowned scientists.",
    "deadline": "2027-04-15",
    "minAge": 14,
    "maxAge": 17,
    "minGrade": 8,
    "maxGrade": 11,
    "countries": "worldwide",
    "cost": "free",
    "format": "online",
    "verified": true,
    "requirements": [
      "Ages 14–17",
      "Profound mathematical aptitude (competition record or math portfolio)",
      "Math teacher recommendation"
    ],
    "tags": [
      "mathematics",
      "physics",
      "stem"
    ],
    "fields": [
      "Mathematics",
      "Physics",
      "Stem"
    ],
    "url": "https://worldsciencescholars.com",
    "sourceUrl": "https://worldsciencescholars.com"
  },
  {
    "id": "three-dot-dash-global-teen-leader-2027",
    "title": "Three Dot Dash Global Teen Leader Initiative",
    "org": "We Are Family Foundation",
    "category": "Scholarships",
    "description": "Prestigious initiative selecting roughly 30 exceptional teenage leaders (ages 13–19) from around the world addressing basic human needs through innovative social action. Includes an all-expenses-paid Just Peace Summit in New York City and year-round executive mentoring.",
    "deadline": "2026-11-15",
    "minAge": 13,
    "maxAge": 19,
    "minGrade": 8,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "stipend",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Ages 13–19",
      "Founder/lead of an active venture addressing basic human needs",
      "Nominated by a qualified nominator"
    ],
    "tags": [
      "leadership",
      "social_sciences",
      "entrepreneurship"
    ],
    "fields": [
      "Leadership",
      "Social_sciences",
      "Entrepreneurship"
    ],
    "url": "https://www.threedotdash.org",
    "sourceUrl": "https://www.threedotdash.org"
  },
  {
    "id": "rotary-youth-exchange-2027",
    "title": "Rotary Youth Exchange International Program",
    "org": "Rotary International",
    "category": "Leadership Programs",
    "description": "Global cultural and academic exchange program for secondary school students ages 15–19. Offers long-term (academic year) and short-term exchanges where students live with host families, attend local high schools, and build cross-cultural diplomacy.",
    "deadline": "2026-12-15",
    "minAge": 15,
    "maxAge": 19,
    "minGrade": 9,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "paid",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Ages 15–19",
      "Demonstrated leadership and academic record",
      "Sponsorship by local Rotary Club and family interview"
    ],
    "tags": [
      "leadership",
      "humanities",
      "social_sciences"
    ],
    "fields": [
      "Leadership",
      "Humanities",
      "Social_sciences"
    ],
    "url": "https://www.rotary.org/en/our-programs/youth-exchanges",
    "sourceUrl": "https://www.rotary.org/en/our-programs/youth-exchanges"
  },
  {
    "id": "yygs-financial-aid-scholarship-2027",
    "title": "Yale Young Global Scholars (YYGS) Need-Based Full Tuition Scholarships",
    "org": "Yale University",
    "category": "Scholarships",
    "description": "Yale University awards over $3 million annually in need-based financial aid covering 100% of tuition, room, board, and travel for talented high school students admitted to the Yale Young Global Scholars (YYGS) summer sessions.",
    "deadline": "2027-01-10",
    "minAge": 16,
    "maxAge": 18,
    "minGrade": 10,
    "maxGrade": 11,
    "countries": "worldwide",
    "cost": "stipend",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Current high school sophomore or junior (ages 16–18)",
      "Academic excellence and English proficiency",
      "Financial aid application with family income statements"
    ],
    "tags": [
      "humanities",
      "social_sciences",
      "stem",
      "leadership"
    ],
    "fields": [
      "Humanities",
      "Social_sciences",
      "Stem",
      "Leadership"
    ],
    "url": "https://globalscholars.yale.edu",
    "sourceUrl": "https://globalscholars.yale.edu/how-to-apply/tuition-financial-aid"
  },
  {
    "id": "pioneer-academics-research-2027",
    "title": "Pioneer Academics Accredited Research Program",
    "org": "Pioneer Academics & Oberlin College",
    "category": "Research",
    "description": "The only fully accredited online research program for high school students granting US college credits. Selected students conduct rigorous undergraduate-level research under individual mentorship from leading US university faculty across 30 disciplines.",
    "deadline": "2026-12-18",
    "minAge": 14,
    "maxAge": 18,
    "minGrade": 9,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "paid",
    "format": "online",
    "verified": true,
    "requirements": [
      "Grades 9–12 student",
      "Academic excellence and fluent English",
      "Proctored writing session and video interview"
    ],
    "tags": [
      "stem",
      "humanities",
      "social_sciences",
      "medicine"
    ],
    "fields": [
      "Stem",
      "Humanities",
      "Social_sciences",
      "Medicine"
    ],
    "url": "https://pioneeracademics.com",
    "sourceUrl": "https://pioneeracademics.com"
  },
  {
    "id": "polygence-research-mentorship-2027",
    "title": "Polygence 1-on-1 Research Mentorship Program",
    "org": "Polygence",
    "category": "Research",
    "description": "Ten-week personalized research mentorship program pairing motivated high school students with PhD researchers from top universities (Harvard, MIT, Stanford, etc.) to produce publication-grade papers or inventive prototypes.",
    "deadline": "2027-01-31",
    "minAge": 13,
    "maxAge": 18,
    "minGrade": 8,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "paid",
    "format": "online",
    "verified": true,
    "requirements": [
      "Ages 13–18",
      "Defined research interest or inquiry",
      "Application submission and academic interview"
    ],
    "tags": [
      "stem",
      "humanities",
      "social_sciences",
      "computer_science"
    ],
    "fields": [
      "Stem",
      "Humanities",
      "Social_sciences",
      "Computer_science"
    ],
    "url": "https://www.polygence.org",
    "sourceUrl": "https://www.polygence.org"
  },
  {
    "id": "veritas-ai-fellowship-2027",
    "title": "Veritas AI Fellowship & Research Program",
    "org": "Veritas AI",
    "category": "Research",
    "description": "Rigorous high school artificial intelligence and machine learning research program founded and run by Harvard graduates. Students learn Python, neural networks, and computer vision, and execute a custom AI research paper under 1-on-1 PhD guidance.",
    "deadline": "2026-11-29",
    "minAge": 13,
    "maxAge": 18,
    "minGrade": 8,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "paid",
    "format": "online",
    "verified": true,
    "requirements": [
      "Grades 8–12 student",
      "Basic coding (Python) or quantitative aptitude",
      "Application essay and transcript"
    ],
    "tags": [
      "ai",
      "computer_science",
      "stem"
    ],
    "fields": [
      "Ai",
      "Computer_science",
      "Stem"
    ],
    "url": "https://www.veritasai.com",
    "sourceUrl": "https://www.veritasai.com"
  },
  {
    "id": "lumiere-research-scholar-2027",
    "title": "Lumiere Research Scholar Program",
    "org": "Lumiere Education",
    "category": "Research",
    "description": "Prestigious 12-week research program pairing motivated high school students with PhD researchers from elite universities to write an independent scientific research paper with targeted academic journal submission.",
    "deadline": "2026-11-22",
    "minAge": 14,
    "maxAge": 18,
    "minGrade": 9,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "paid",
    "format": "online",
    "verified": true,
    "requirements": [
      "Grades 9–12 student",
      "Academic rigor and fluency in written English",
      "Research proposal essay and admissions interview"
    ],
    "tags": [
      "stem",
      "humanities",
      "social_sciences",
      "medicine"
    ],
    "fields": [
      "Stem",
      "Humanities",
      "Social_sciences",
      "Medicine"
    ],
    "url": "https://www.lumiere-education.com",
    "sourceUrl": "https://www.lumiere-education.com"
  },
  {
    "id": "mit-beaver-works-summer-2027",
    "title": "MIT Beaver Works Summer Institute (BWSI)",
    "org": "MIT Lincoln Laboratory & MIT School of Engineering",
    "category": "Research",
    "description": "Transformative 4-week STEM program for rising high school seniors hosted by MIT Lincoln Laboratory. Offers rigorous hands-on tracks including Autonomous RACECARs, Cyber Security, Quantum Software, and AI for Assistive Tech. Free prerequisite online courses.",
    "deadline": "2027-03-31",
    "minAge": 15,
    "maxAge": 18,
    "minGrade": 10,
    "maxGrade": 11,
    "countries": "worldwide",
    "cost": "free",
    "format": "online",
    "verified": true,
    "requirements": [
      "Rising high school senior (grades 10–11)",
      "Completion of free BWSI prerequisite online modules",
      "STEM teacher recommendation"
    ],
    "tags": [
      "stem",
      "robotics",
      "ai",
      "computer_science"
    ],
    "fields": [
      "Stem",
      "Robotics",
      "Ai",
      "Computer_science"
    ],
    "url": "https://beaverworks.ll.mit.edu",
    "sourceUrl": "https://beaverworks.ll.mit.edu/CMS/bw/bwsi"
  },
  {
    "id": "mit-rsi-research-science-institute-2027",
    "title": "Research Science Institute (RSI) at MIT",
    "org": "Center for Excellence in Education (CEE) & MIT",
    "category": "Research",
    "description": "The world's most prestigious cost-free summer research program for high school rising seniors, hosted at the Massachusetts Institute of Technology (MIT). Selected scholars conduct individual research with premier scientists and present oral and written reports.",
    "deadline": "2027-01-15",
    "minAge": 16,
    "maxAge": 18,
    "minGrade": 11,
    "maxGrade": 11,
    "countries": "worldwide",
    "cost": "stipend",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Rising high school senior (grades 10–11)",
      "Exceptional math and science record",
      "Standardized test scores (SAT/ACT/PSAT/Olympiads), essays, and 3 recommendations"
    ],
    "tags": [
      "stem",
      "physics",
      "mathematics",
      "medicine",
      "ai"
    ],
    "fields": [
      "Stem",
      "Physics",
      "Mathematics",
      "Medicine",
      "Ai"
    ],
    "url": "https://www.cee.org/programs/research-science-institute",
    "sourceUrl": "https://www.cee.org/programs/research-science-institute"
  },
  {
    "id": "concord-review-history-journal-2027",
    "title": "The Concord Review Academic History Journal",
    "org": "The Concord Review, Inc.",
    "category": "Research",
    "description": "The only quarterly peer-reviewed journal in the world dedicated to publishing exemplary academic history research papers by secondary school students. Widely recognized as one of the highest pre-college academic distinctions in the humanities.",
    "deadline": "2027-02-01",
    "minAge": 13,
    "maxAge": 18,
    "minGrade": 8,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "paid",
    "format": "online",
    "verified": true,
    "requirements": [
      "Pre-college secondary student",
      "Original academic history paper (4,000 to 8,000 words) with Turabian/Chicago citations",
      "Submission submission fee"
    ],
    "tags": [
      "humanities",
      "social_sciences"
    ],
    "fields": [
      "Humanities",
      "Social_sciences"
    ],
    "url": "https://www.tcr.org",
    "sourceUrl": "https://www.tcr.org"
  },
  {
    "id": "ijhsr-high-school-research-journal-2027",
    "title": "International Journal of High School Research (IJHSR)",
    "org": "Terra Science and Education",
    "category": "Research",
    "description": "Peer-reviewed open-access scientific journal dedicated to publishing original pre-college research across STEM and social sciences. Papers undergo double-blind peer review by PhD researchers and academic reviewers.",
    "deadline": "2027-12-31",
    "minAge": 13,
    "maxAge": 18,
    "minGrade": 8,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "paid",
    "format": "online",
    "verified": true,
    "requirements": [
      "Enrolled pre-college student",
      "Original scientific manuscript in English with abstract and data",
      "Faculty supervisor confirmation"
    ],
    "tags": [
      "stem",
      "medicine",
      "social_sciences",
      "environmental_science"
    ],
    "fields": [
      "Stem",
      "Medicine",
      "Social_sciences",
      "Environmental_science"
    ],
    "url": "https://curieuxacademicjournal.com",
    "sourceUrl": "https://www.terraed.org/ijhsr/"
  },
  {
    "id": "horizon-academic-research-program-2027",
    "title": "Horizon Academic Research Program",
    "org": "Horizon Academic",
    "category": "Research",
    "description": "Trimester-based online research program where students produce university-level research papers under the direct 1-on-1 supervision of distinguished professors in fields like Machine Learning, Economics, and Neuroscience.",
    "deadline": "2027-02-10",
    "minAge": 14,
    "maxAge": 18,
    "minGrade": 9,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "paid",
    "format": "online",
    "verified": true,
    "requirements": [
      "Grades 9–12 student",
      "Academic transcript and motivation essay",
      "Admissions interview"
    ],
    "tags": [
      "stem",
      "humanities",
      "social_sciences",
      "ai"
    ],
    "fields": [
      "Stem",
      "Humanities",
      "Social_sciences",
      "Ai"
    ],
    "url": "https://horizoninspires.com",
    "sourceUrl": "https://horizoninspires.com"
  },
  {
    "id": "ccir-cambridge-oxford-research-2027",
    "title": "Cambridge Centre for International Research (CCIR)",
    "org": "Cambridge Centre for International Research",
    "category": "Research",
    "description": "Selective research academy pairing students with faculty from Cambridge, Oxford, and Ivy League universities. Students undertake original research in 1-on-1 or small-cohort formats (Cambridge Future Scholar) aiming for publication.",
    "deadline": "2027-02-15",
    "minAge": 14,
    "maxAge": 18,
    "minGrade": 9,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "paid",
    "format": "online",
    "verified": true,
    "requirements": [
      "Grades 9–12 student",
      "Academic GPA 3.7+ or equivalent",
      "Research statement and English proficiency"
    ],
    "tags": [
      "stem",
      "humanities",
      "social_sciences",
      "medicine"
    ],
    "fields": [
      "Stem",
      "Humanities",
      "Social_sciences",
      "Medicine"
    ],
    "url": "https://www.cambridge-research.org",
    "sourceUrl": "https://www.cambridge-research.org"
  },
  {
    "id": "yale-young-global-scholars-2027",
    "title": "Yale Young Global Scholars (YYGS) 2027",
    "org": "Yale University",
    "category": "Summer Programs",
    "description": "One of the most globally diverse two-week pre-college programs in the world hosted on Yale's historic campus. High school sophomores and juniors attend seminars, lectures by Yale faculty, and collaborate on a Capstone project across STEM, Humanities, Social Sciences, and Global Challenges.",
    "deadline": "2027-01-10",
    "minAge": 16,
    "maxAge": 18,
    "minGrade": 10,
    "maxGrade": 11,
    "countries": "worldwide",
    "cost": "paid",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Current high school sophomore or junior (ages 16–18)",
      "Strong academic standing and English fluency",
      "Application form, school transcript, essays, and 2 recommendations"
    ],
    "tags": [
      "humanities",
      "social_sciences",
      "stem",
      "leadership"
    ],
    "fields": [
      "Humanities",
      "Social_sciences",
      "Stem",
      "Leadership"
    ],
    "url": "https://globalscholars.yale.edu/sessions",
    "sourceUrl": "https://globalscholars.yale.edu"
  },
  {
    "id": "stanford-sumac-math-camp-2027",
    "title": "Stanford University Mathematics Camp (SUMaC)",
    "org": "Stanford University",
    "category": "Summer Programs",
    "description": "Legendary 3-week pure mathematics summer camp for rising 11th and 12th graders hosted by Stanford University. Students explore advanced mathematical themes including Abstract Algebra, Number Theory, and Algebraic Topology through guided research problems.",
    "deadline": "2027-02-01",
    "minAge": 15,
    "maxAge": 18,
    "minGrade": 10,
    "maxGrade": 11,
    "countries": "worldwide",
    "cost": "paid",
    "format": "hybrid",
    "verified": true,
    "requirements": [
      "Grades 10–11 student",
      "Completion of the rigorous SUMaC Admissions Exam",
      "Math teacher recommendation and transcript"
    ],
    "tags": [
      "mathematics",
      "stem"
    ],
    "fields": [
      "Mathematics",
      "Stem"
    ],
    "url": "https://sumac.spcs.stanford.edu",
    "sourceUrl": "https://sumac.spcs.stanford.edu"
  },
  {
    "id": "harvard-pre-college-program-2027",
    "title": "Harvard Pre-College Summer Residential Program",
    "org": "Harvard University (Division of Continuing Education)",
    "category": "Summer Programs",
    "description": "Two-week intensive residential college experience on Harvard campus for rising high school juniors and seniors. Students live in historic Harvard Yard dorms, take non-credit college courses with Harvard faculty, and engage in co-curricular college readiness activities.",
    "deadline": "2027-02-14",
    "minAge": 16,
    "maxAge": 18,
    "minGrade": 10,
    "maxGrade": 11,
    "countries": "worldwide",
    "cost": "paid",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Rising high school junior or senior (ages 16–18)",
      "Strong academic performance and English fluency",
      "Teacher recommendation and admissions essay"
    ],
    "tags": [
      "humanities",
      "social_sciences",
      "stem",
      "medicine"
    ],
    "fields": [
      "Humanities",
      "Social_sciences",
      "Stem",
      "Medicine"
    ],
    "url": "https://summer.harvard.edu/high-school-programs/pre-college-program/",
    "sourceUrl": "https://summer.harvard.edu/high-school-programs/pre-college-program/"
  },
  {
    "id": "wharton-global-youth-summer-2027",
    "title": "Wharton Global Youth Summer High School Programs",
    "org": "The Wharton School, University of Pennsylvania",
    "category": "Summer Programs",
    "description": "Elite summer on-campus business and finance academies at the Wharton School, University of Pennsylvania. Features flagship tracks including Leadership in the Business World (LBW), M&TSI (Engineering + Business), and the Wharton Data Science Academy.",
    "deadline": "2027-01-25",
    "minAge": 15,
    "maxAge": 18,
    "minGrade": 9,
    "maxGrade": 11,
    "countries": "worldwide",
    "cost": "paid",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Grades 9–11 student",
      "Strong high school transcript (GPA 3.5+)",
      "Short essays on business/leadership and teacher recommendation"
    ],
    "tags": [
      "business",
      "leadership",
      "social_sciences"
    ],
    "fields": [
      "Business",
      "Leadership",
      "Social_sciences"
    ],
    "url": "https://globalyouth.wharton.upenn.edu",
    "sourceUrl": "https://globalyouth.wharton.upenn.edu"
  },
  {
    "id": "launchx-entrepreneurship-summer-2027",
    "title": "LaunchX Summer High School Entrepreneurship Program",
    "org": "LaunchX",
    "category": "Competitions",
    "description": "Premier summer entrepreneurship program for high school students globally. Rather than learning business theory, students co-found real companies in teams, build prototypes, acquire real users, and generate actual revenue.",
    "deadline": "2027-01-07",
    "minAge": 14,
    "maxAge": 18,
    "minGrade": 9,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "paid",
    "format": "hybrid",
    "verified": true,
    "requirements": [
      "Grades 9–12 student",
      "Entrepreneurial drive or coding/design abilities",
      "Video application, resume, and portfolio"
    ],
    "tags": [
      "entrepreneurship",
      "business",
      "computer_science",
      "leadership"
    ],
    "fields": [
      "Entrepreneurship",
      "Business",
      "Computer_science",
      "Leadership"
    ],
    "url": "https://launchx.com",
    "sourceUrl": "https://launchx.com"
  },
  {
    "id": "promys-boston-math-camp-2027",
    "title": "PROMYS (Program in Mathematics for Young Scientists)",
    "org": "Boston University & PROMYS Foundation",
    "category": "Summer Programs",
    "description": "Challenging 6-week residential summer program in pure mathematics for students ages 14–19 at Boston University. Focusing on Number Theory, students discover mathematical truths independently by solving problem sets.",
    "deadline": "2027-03-05",
    "minAge": 14,
    "maxAge": 19,
    "minGrade": 9,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "paid",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "At least 14 years old by program start",
      "Independent solutions to the challenging PROMYS application problem set",
      "Math teacher recommendation and transcript"
    ],
    "tags": [
      "mathematics",
      "stem"
    ],
    "fields": [
      "Mathematics",
      "Stem"
    ],
    "url": "https://promys.org",
    "sourceUrl": "https://promys.org"
  },
  {
    "id": "canada-usa-mathcamp-2027",
    "title": "Canada/USA Mathcamp 2027",
    "org": "Mathematics Foundation of America",
    "category": "Summer Programs",
    "description": "Intensive 5-week summer program for 120 mathematically gifted students ages 13–18 from around the world. Designed with a flexible curriculum where students choose advanced undergraduate and graduate-level courses in pure mathematics.",
    "deadline": "2027-03-10",
    "minAge": 13,
    "maxAge": 18,
    "minGrade": 8,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "paid",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Ages 13–18",
      "Original solutions to the Mathcamp Qualifying Quiz",
      "Two recommendation letters and essays"
    ],
    "tags": [
      "mathematics",
      "stem"
    ],
    "fields": [
      "Mathematics",
      "Stem"
    ],
    "url": "https://www.mathcamp.info",
    "sourceUrl": "https://www.mathcamp.info"
  },
  {
    "id": "ross-mathematics-program-2027",
    "title": "Ross Mathematics Program (USA & Asia)",
    "org": "Ross Mathematics Program",
    "category": "Summer Programs",
    "description": "Legendary 6-week intensive summer mathematics program founded in 1957. Centered on the motto 'Think deeply of simple things', students explore Number Theory rigorously from first principles.",
    "deadline": "2027-03-31",
    "minAge": 15,
    "maxAge": 18,
    "minGrade": 9,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "paid",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Ages 15–18",
      "Solutions to the Ross application mathematics problem set",
      "Transcripts and teacher recommendations"
    ],
    "tags": [
      "mathematics",
      "stem"
    ],
    "fields": [
      "Mathematics",
      "Stem"
    ],
    "url": "https://rossprogram.org",
    "sourceUrl": "https://rossprogram.org"
  },
  {
    "id": "john-locke-essay-competition-2027",
    "title": "John Locke Institute Global Essay Competition 2027",
    "org": "John Locke Institute (Oxford / Princeton)",
    "category": "Competitions",
    "description": "The world's most prestigious pre-college academic essay competition for students aged 18 and under (with a Junior Prize for under-14s). Categories include Philosophy, Politics, Economics, History, Law, Theology, and Psychology. Judged by senior academics from Oxford and Princeton.",
    "deadline": "2027-05-31",
    "minAge": 13,
    "maxAge": 18,
    "minGrade": 7,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "free",
    "format": "online",
    "verified": true,
    "requirements": [
      "Aged 18 or under (or 14 and under for Junior Prize)",
      "Original argumentative essay up to 2,000 words addressing an official prompt",
      "Submitted via official John Locke Institute portal"
    ],
    "tags": [
      "humanities",
      "social_sciences"
    ],
    "fields": [
      "Humanities",
      "Social_sciences"
    ],
    "url": "https://www.johnlockeinstitute.com",
    "sourceUrl": "https://www.johnlockeinstitute.com/essay-competition"
  },
  {
    "id": "immerse-education-essay-competition-2027",
    "title": "Immerse Education Global Essay Competition 2027",
    "org": "Immerse Education (Cambridge)",
    "category": "Competitions",
    "description": "Global essay competition for students ages 13–18. Winners are awarded full 100% scholarships to attend two-week academic summer programmes hosted at historic colleges of Cambridge, Oxford, Sydney, or London.",
    "deadline": "2027-01-05",
    "minAge": 13,
    "maxAge": 18,
    "minGrade": 8,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "free",
    "format": "online",
    "verified": true,
    "requirements": [
      "Ages 13–18",
      "Original essay of up to 1,000 words on an approved question",
      "Submission through Immerse portal"
    ],
    "tags": [
      "humanities",
      "social_sciences",
      "stem",
      "medicine",
      "business"
    ],
    "fields": [
      "Humanities",
      "Social_sciences",
      "Stem",
      "Medicine",
      "Business"
    ],
    "url": "https://www.immerse.education",
    "sourceUrl": "https://www.immerse.education/essay-competition/"
  },
  {
    "id": "international-philosophy-olympiad-2027",
    "title": "International Philosophy Olympiad (IPO 2027)",
    "org": "International Federation of Philosophical Societies (FISP) & UNESCO",
    "category": "Competitions",
    "description": "The official world philosophy competition for high school students organized under the auspices of FISP and UNESCO. Participants write an argumentative philosophical essay over four hours in an official language that is not their mother tongue.",
    "deadline": "2027-04-15",
    "minAge": 14,
    "maxAge": 19,
    "minGrade": 9,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "stipend",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Secondary school student under age 20",
      "National delegation selection (top 2 candidates)",
      "Essay written in a language other than native tongue"
    ],
    "tags": [
      "humanities",
      "social_sciences"
    ],
    "fields": [
      "Humanities",
      "Social_sciences"
    ],
    "url": "https://www.philosophy-olympiad.org",
    "sourceUrl": "https://www.philosophy-olympiad.org"
  },
  {
    "id": "world-schools-debating-2027",
    "title": "World Schools Debating Championships (WSDC 2027)",
    "org": "World Schools Debating Championships Tournament Committee",
    "category": "Competitions",
    "description": "The premier global parliamentary debating championship for secondary school national teams. Each nation selects a squad of 3 to 5 student debaters competing across prepared and impromptu motions on international affairs, ethics, and jurisprudence.",
    "deadline": "2027-04-30",
    "minAge": 14,
    "maxAge": 19,
    "minGrade": 9,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "paid",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Enrolled secondary student under 19",
      "Selected for official national debating team",
      "Fluent English oral argumentation skills"
    ],
    "tags": [
      "leadership",
      "social_sciences",
      "humanities"
    ],
    "fields": [
      "Leadership",
      "Social_sciences",
      "Humanities"
    ],
    "url": "https://wsdcdebating.org",
    "sourceUrl": "https://wsdcdebating.org"
  },
  {
    "id": "harvard-model-un-hmun-2027",
    "title": "Harvard Model United Nations (HMUN) 2027",
    "org": "Harvard International Relations Council",
    "category": "Competitions",
    "description": "The world's oldest and most prestigious high school Model UN conference, convening over 4,000 delegates from 50+ countries in Boston. High school delegates debate international policy across General Assembly, ECOSOC, Regional, and Crisis organs.",
    "deadline": "2026-11-15",
    "minAge": 14,
    "maxAge": 18,
    "minGrade": 9,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "paid",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "High school student (grades 9–12)",
      "Position paper submission for assigned committee/country",
      "Registration via school delegation advisor or individual portal"
    ],
    "tags": [
      "leadership",
      "social_sciences",
      "humanities"
    ],
    "fields": [
      "Leadership",
      "Social_sciences",
      "Humanities"
    ],
    "url": "https://www.harvardmun.org",
    "sourceUrl": "https://www.harvardmun.org"
  },
  {
    "id": "bow-seat-ocean-awareness-2027",
    "title": "Bow Seat Ocean Awareness Global Student Contest",
    "org": "Bow Seat Ocean Awareness Programs",
    "category": "Competitions",
    "description": "The world's largest youth environmental arts and writing competition for students ages 11–18 (Junior and Senior divisions). Invites original works across Visual Art, Creative Writing, Film, Interactive Media, and Music addressing climate change and ocean conservation.",
    "deadline": "2027-06-15",
    "minAge": 13,
    "maxAge": 18,
    "minGrade": 7,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "free",
    "format": "online",
    "verified": true,
    "requirements": [
      "Ages 11–18",
      "Original creative piece in Art, Writing, Film, or Music",
      "Written Artist Statement explaining connection to the annual theme"
    ],
    "tags": [
      "arts",
      "environmental_science",
      "humanities"
    ],
    "fields": [
      "Arts",
      "Environmental_science",
      "Humanities"
    ],
    "url": "https://bowseat.org",
    "sourceUrl": "https://bowseat.org/contest"
  },
  {
    "id": "new-york-times-student-writing-2027",
    "title": "The New York Times Student Journalism & Writing Contests",
    "org": "The New York Times (The Learning Network)",
    "category": "Competitions",
    "description": "Annual series of free writing challenges for middle and high school students ages 13–19 worldwide, hosted by The New York Times Learning Network. Contests include 100-Word Personal Narrative, Student Editorial, STEM Writing, and Review Contests.",
    "deadline": "2026-12-04",
    "minAge": 13,
    "maxAge": 19,
    "minGrade": 7,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "free",
    "format": "online",
    "verified": true,
    "requirements": [
      "Ages 13–19 in middle or high school",
      "Original English writing adhering to exact word counts",
      "Parent/guardian consent submission"
    ],
    "tags": [
      "humanities",
      "social_sciences"
    ],
    "fields": [
      "Humanities",
      "Social_sciences"
    ],
    "url": "https://www.nytimes.com/spotlight/learning-student-contests",
    "sourceUrl": "https://www.nytimes.com/spotlight/learning-student-contests"
  },
  {
    "id": "diamond-challenge-entrepreneurship-2027",
    "title": "Diamond Challenge High School Entrepreneurship Competition 2027",
    "org": "Horn Entrepreneurship, University of Delaware",
    "category": "Competitions",
    "description": "The premier global entrepreneurship competition for high school students ages 14–18, produced by Horn Entrepreneurship at the University of Delaware. Tracks: Business Innovation and Social Innovation. Finalists compete at the Diamond Challenge Summit for over $100,000 in funding and awards.",
    "deadline": "2027-01-16",
    "minAge": 14,
    "maxAge": 18,
    "minGrade": 9,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "free",
    "format": "hybrid",
    "verified": true,
    "requirements": [
      "Ages 14–18 in grades 9–12",
      "Team of 2–4 students plus adult advisor",
      "Written concept deck (up to 5 pages) and pitch video"
    ],
    "tags": [
      "entrepreneurship",
      "business",
      "social_sciences",
      "leadership"
    ],
    "fields": [
      "Entrepreneurship",
      "Business",
      "Social_sciences",
      "Leadership"
    ],
    "url": "https://diamondchallenge.org",
    "sourceUrl": "https://diamondchallenge.org"
  },
  {
    "id": "blue-ocean-student-competition-2027",
    "title": "Blue Ocean Student Entrepreneurship Competition 2027",
    "org": "Blue Ocean Student Competition Foundation",
    "category": "Competitions",
    "description": "The world's largest virtual entrepreneurship competition for high school students. Individuals or teams of up to five pitch novel business ideas that create uncontested market space (Blue Oceans) rather than competing in overcrowded industries.",
    "deadline": "2027-02-18",
    "minAge": 14,
    "maxAge": 18,
    "minGrade": 9,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "free",
    "format": "online",
    "verified": true,
    "requirements": [
      "High school student (ages 14–18)",
      "Individual or team of up to 5",
      "5-minute pitch video on YouTube showcasing Blue Ocean strategy canvas"
    ],
    "tags": [
      "business",
      "entrepreneurship",
      "leadership"
    ],
    "fields": [
      "Business",
      "Entrepreneurship",
      "Leadership"
    ],
    "url": "https://blueoceancompetition.org",
    "sourceUrl": "https://blueoceancompetition.org"
  },
  {
    "id": "hack-club-community-and-grants-2027",
    "title": "Hack Club High School Coding Grants & Community",
    "org": "Hack Club",
    "category": "Competitions",
    "description": "Global nonprofit network run for and by high school coders across 40,000+ members. Provides $500 microgrants to organize high school hackathons, free software developer toolkits, hardware grants, and runs creative coding challenges.",
    "deadline": "2027-12-31",
    "minAge": 13,
    "maxAge": 18,
    "minGrade": 7,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "free",
    "format": "online",
    "verified": true,
    "requirements": [
      "Pre-college student under 19",
      "Passion for building software or hardware projects",
      "Join the Hack Club Slack community"
    ],
    "tags": [
      "computer_science",
      "stem",
      "entrepreneurship"
    ],
    "fields": [
      "Computer_science",
      "Stem",
      "Entrepreneurship"
    ],
    "url": "https://hackclub.com",
    "sourceUrl": "https://hackclub.com"
  },
  {
    "id": "climate-cardinals-volunteering-2027",
    "title": "Climate Cardinals Global Translation Volunteering",
    "org": "Climate Cardinals & Teach For All",
    "category": "Volunteering",
    "description": "The world's largest youth-led volunteer organization translating climate education and scientific research into 100+ languages (including Kazakh and Russian). Student volunteers earn verified community service hours for university applications.",
    "deadline": "2027-12-31",
    "minAge": 13,
    "maxAge": 18,
    "minGrade": 7,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "free",
    "format": "online",
    "verified": true,
    "requirements": [
      "Ages 13 and up",
      "Fluency in English and a secondary language (e.g. Kazakh or Russian)",
      "Complete volunteer translator onboarding form"
    ],
    "tags": [
      "environmental_science",
      "humanities",
      "social_sciences"
    ],
    "fields": [
      "Environmental_science",
      "Humanities",
      "Social_sciences"
    ],
    "url": "https://www.climatecardinals.org",
    "sourceUrl": "https://www.climatecardinals.org"
  },
  {
    "id": "unicef-voices-of-youth-2027",
    "title": "UNICEF Voices of Youth Digital Publishing Platform",
    "org": "UNICEF (Детский фонд ООН)",
    "category": "Volunteering",
    "description": "UNICEF's official digital community and publishing platform for young advocates ages 13–24. High school students can submit original essays, investigative articles, poetry, and photo stories on children's rights and education for global UN publication.",
    "deadline": "2027-12-31",
    "minAge": 13,
    "maxAge": 18,
    "minGrade": 7,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "free",
    "format": "online",
    "verified": true,
    "requirements": [
      "Ages 13–24",
      "Original blog post, poem, or photo story on youth advocacy topics",
      "Adherence to UNICEF digital safety standards"
    ],
    "tags": [
      "social_sciences",
      "humanities",
      "leadership"
    ],
    "fields": [
      "Social_sciences",
      "Humanities",
      "Leadership"
    ],
    "url": "https://www.voicesofyouth.org",
    "sourceUrl": "https://www.voicesofyouth.org"
  },
  {
    "id": "nasa-space-apps-challenge-2027",
    "title": "NASA International Space Apps Challenge 2027",
    "org": "NASA (National Aeronautics and Space Administration)",
    "category": "Competitions",
    "description": "The world's largest annual global hackathon hosted by NASA. Over a 48-hour sprint, student and youth teams use open-access NASA Earth and space data to solve real-world problems on Earth and in space, with local chapters across Kazakhstan.",
    "deadline": "2027-10-04",
    "minAge": 13,
    "maxAge": 18,
    "minGrade": 7,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "free",
    "format": "hybrid",
    "verified": true,
    "requirements": [
      "All ages (teens welcome with parental consent)",
      "Teams of 1 to 6 members",
      "Project submission with code/presentation by hackathon close"
    ],
    "tags": [
      "stem",
      "computer_science",
      "environmental_science",
      "ai"
    ],
    "fields": [
      "Stem",
      "Computer_science",
      "Environmental_science",
      "Ai"
    ],
    "url": "https://www.spaceappschallenge.org",
    "sourceUrl": "https://www.spaceappschallenge.org"
  },
  {
    "id": "apio-asia-pacific-informatics-2027",
    "title": "Asia-Pacific Informatics Olympiad (APIO 2027)",
    "org": "APIO Organizing Committee & РНПЦ «Дарын»",
    "category": "Competitions",
    "description": "Official regional competitive programming olympiad for school teams from the Asia-Pacific and Central Asian region. Organized as an online contest under strict proctored conditions at national testing sites.",
    "deadline": "2027-05-10",
    "minAge": 13,
    "maxAge": 18,
    "minGrade": 8,
    "maxGrade": 11,
    "countries": [
      "Kazakhstan",
      "UZ",
      "KG",
      "TJ",
      "AZ"
    ],
    "cost": "free",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Grades 8–11 student",
      "Qualification through national computer science olympiad pipeline",
      "Mastery of C++ algorithmic programming"
    ],
    "tags": [
      "computer_science",
      "stem"
    ],
    "fields": [
      "Computer_science",
      "Stem"
    ],
    "url": "https://apio-olympiad.org",
    "sourceUrl": "https://apio-olympiad.org"
  },
  {
    "id": "apmo-asian-pacific-mathematics-2027",
    "title": "Asian Pacific Mathematics Olympiad (APMO 2027)",
    "org": "APMO Coordinating Committee",
    "category": "Competitions",
    "description": "Elite regional mathematics competition for pre-college students across Pacific Rim and Asian nations. A 4-hour written examination featuring five deep proof-based mathematical problems.",
    "deadline": "2027-03-01",
    "minAge": 14,
    "maxAge": 19,
    "minGrade": 8,
    "maxGrade": 11,
    "countries": [
      "Kazakhstan",
      "UZ",
      "KG"
    ],
    "cost": "free",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Pre-university student under age 20",
      "National math olympiad team squad member",
      "In-person invigilated contest"
    ],
    "tags": [
      "mathematics",
      "stem"
    ],
    "fields": [
      "Mathematics",
      "Stem"
    ],
    "url": "https://www.apmo-official.org",
    "sourceUrl": "https://www.apmo-official.org"
  },
  {
    "id": "apho-asian-physics-olympiad-2027",
    "title": "Asian Physics Olympiad (APhO 2027)",
    "org": "APhO Secretariat",
    "category": "Competitions",
    "description": "The premier continental physics competition for high school students in Asia and Oceania, widely regarded as even more difficult than the IPhO. National delegations of eight students compete in theoretical and laboratory experimental rounds.",
    "deadline": "2027-04-15",
    "minAge": 14,
    "maxAge": 19,
    "minGrade": 9,
    "maxGrade": 11,
    "countries": [
      "Kazakhstan",
      "KG",
      "UZ"
    ],
    "cost": "stipend",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Secondary student under age 20",
      "National top 8 selection",
      "Advanced laboratory experimentation and theoretical mechanics"
    ],
    "tags": [
      "physics",
      "stem"
    ],
    "fields": [
      "Physics",
      "Stem"
    ],
    "url": "https://apho-olympiad.org",
    "sourceUrl": "https://apho-olympiad.org"
  },
  {
    "id": "international-economics-olympiad-2027",
    "title": "International Economics Olympiad (IEO 2027)",
    "org": "International Economics Olympiad (IEO)",
    "category": "Competitions",
    "description": "Annual world competition in economics, financial literacy, and business case analysis for high school students. Features three rounds: Economics theory exam, Financial Literacy simulation, and a team-based Business Case Presentation.",
    "deadline": "2027-05-30",
    "minAge": 14,
    "maxAge": 19,
    "minGrade": 9,
    "maxGrade": 11,
    "countries": "worldwide",
    "cost": "stipend",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Secondary student under age 19",
      "National top 5 economics delegation qualifier",
      "Knowledge of micro/macroeconomics and case presentation skills"
    ],
    "tags": [
      "business",
      "social_sciences",
      "mathematics"
    ],
    "fields": [
      "Business",
      "Social_sciences",
      "Mathematics"
    ],
    "url": "https://ecolympiad.org",
    "sourceUrl": "https://ecolympiad.org"
  },
  {
    "id": "telluride-tass-seminars-2027",
    "title": "Telluride Association Summer Seminars (TASS)",
    "org": "Telluride Association & Cornell / University of Michigan",
    "category": "Summer Programs",
    "description": "Six-week, completely free educational experience for high school sophomores and juniors held at Cornell University and the University of Michigan. Focuses on critical thinking, African American Studies, literature, and democratic community governance with 100% covered expenses.",
    "deadline": "2026-12-05",
    "minAge": 15,
    "maxAge": 18,
    "minGrade": 10,
    "maxGrade": 11,
    "countries": "worldwide",
    "cost": "stipend",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "High school sophomore or junior (ages 15–17)",
      "Passion for deep critical reading and democratic debate",
      "Thoughtful long-form essays and transcripts"
    ],
    "tags": [
      "humanities",
      "social_sciences",
      "leadership"
    ],
    "fields": [
      "Humanities",
      "Social_sciences",
      "Leadership"
    ],
    "url": "https://www.tellurideassociation.org",
    "sourceUrl": "https://www.tellurideassociation.org/our-programs/high-school-students/"
  },
  {
    "id": "genius-olympiad-environmental-2027",
    "title": "GENIUS Olympiad High School Environmental Project Fair",
    "org": "Terra Science and Education & RIT (Rochester Institute of Technology)",
    "category": "Competitions",
    "description": "International high school project competition on environmental issues hosted by Rochester Institute of Technology (RIT). Categories include Science, Robotics, Business, Creative Writing, Art, Music, and Short Film. Top finalists earn RIT college scholarships.",
    "deadline": "2027-03-01",
    "minAge": 13,
    "maxAge": 18,
    "minGrade": 8,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "paid",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Grades 8–12 student (ages 13–18)",
      "Original environmental research or creative project",
      "Individual or 2-student team submission via portal"
    ],
    "tags": [
      "environmental_science",
      "stem",
      "business",
      "arts"
    ],
    "fields": [
      "Environmental_science",
      "Stem",
      "Business",
      "Arts"
    ],
    "url": "https://geniusolympiad.org",
    "sourceUrl": "https://geniusolympiad.org"
  },
  {
    "id": "samsung-solve-for-tomorrow-kz-2027",
    "title": "Samsung Solve for Tomorrow Kazakhstan",
    "org": "Samsung Electronics Central Eurasia",
    "category": "Competitions",
    "description": "National STEM competition in Kazakhstan challenging middle and high school students to address local environmental and community issues using science, technology, engineering, and math, with substantial cash and technology prizes.",
    "deadline": "2027-05-15",
    "minAge": 13,
    "maxAge": 18,
    "minGrade": 8,
    "maxGrade": 11,
    "countries": [
      "Kazakhstan"
    ],
    "cost": "free",
    "format": "hybrid",
    "verified": true,
    "requirements": [
      "Secondary school students in Kazakhstan ages 13–18",
      "Teams of 2–4 with educator advisor",
      "Working prototype solving a community issue"
    ],
    "tags": [
      "stem",
      "robotics",
      "environmental_science",
      "social_sciences"
    ],
    "fields": [
      "Stem",
      "Robotics",
      "Environmental_science",
      "Social_sciences"
    ],
    "url": "https://www.samsung.com/kz_ru/solvefortomorrow/",
    "sourceUrl": "https://www.samsung.com/kz_ru/solvefortomorrow/"
  },
  {
    "id": "girls-who-code-summer-immersion-2027",
    "title": "Girls Who Code Summer Immersion Program (SIP)",
    "org": "Girls Who Code",
    "category": "Summer Programs",
    "description": "Free 2-week virtual summer immersion program for female and non-binary high school students in grades 9–11. Students learn web development (HTML, CSS, JavaScript) and game design with direct mentoring from engineers at leading tech companies.",
    "deadline": "2027-02-15",
    "minAge": 14,
    "maxAge": 18,
    "minGrade": 9,
    "maxGrade": 11,
    "countries": "worldwide",
    "cost": "free",
    "format": "online",
    "verified": true,
    "requirements": [
      "Current 9th–11th grade female/non-binary students",
      "Computer with internet access",
      "No prior coding experience required"
    ],
    "tags": [
      "computer_science",
      "stem"
    ],
    "fields": [
      "Computer_science",
      "Stem"
    ],
    "url": "https://girlswhocode.com",
    "sourceUrl": "https://girlswhocode.com/programs/summer-immersion-program"
  },
  {
    "id": "queens-commonwealth-essay-competition-2027",
    "title": "The Queen's Commonwealth Essay Competition 2027",
    "org": "Royal Commonwealth Society",
    "category": "Competitions",
    "description": "The world's oldest international schools' writing contest, established in 1883. Youths 18 and under (Senior 14–18, Junior under 14) submit creative writing, poetry, or essays. Top laureates are awarded a fully funded educational trip to London including a reception at Buckingham Palace.",
    "deadline": "2027-05-15",
    "minAge": 13,
    "maxAge": 18,
    "minGrade": 7,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "free",
    "format": "online",
    "verified": true,
    "requirements": [
      "Aged 18 or under by deadline",
      "Original writing in English adhering to word counts",
      "Connection to the annual theme"
    ],
    "tags": [
      "humanities",
      "arts"
    ],
    "fields": [
      "Humanities",
      "Arts"
    ],
    "url": "https://www.royalcwsociety.org/essay-competition",
    "sourceUrl": "https://www.royalcwsociety.org/essay-competition"
  },
  {
    "id": "gystb-global-youth-science-bowl-2027",
    "title": "Global Youth Science and Technology Bowl (GYSTB 2027)",
    "org": "The Hong Kong Federation of Youth Groups",
    "category": "Competitions",
    "description": "International student science project competition organized by the Hong Kong Federation of Youth Groups. Pre-college teams compete in Biology & Chemistry or Physics & Engineering, presenting before global scientific juries.",
    "deadline": "2027-04-10",
    "minAge": 14,
    "maxAge": 18,
    "minGrade": 9,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "free",
    "format": "hybrid",
    "verified": true,
    "requirements": [
      "Grades 9–12 student",
      "Team of 1 to 4 members",
      "Detailed scientific report and poster in English"
    ],
    "tags": [
      "stem",
      "biology",
      "physics",
      "robotics",
      "ai"
    ],
    "fields": [
      "Stem",
      "Biology",
      "Physics",
      "Robotics",
      "Ai"
    ],
    "url": "https://gystb.hkfyg.org.hk",
    "sourceUrl": "https://gystb.hkfyg.org.hk"
  },
  {
    "id": "mendeleev-chemistry-olympiad-2027",
    "title": "International Mendeleev Chemistry Olympiad (IMChO 2027)",
    "org": "Химический факультет МГУ & Оргкомитет ММО",
    "category": "Competitions",
    "description": "One of the world's most rigorous chemistry competitions for high school students, featuring teams from over 30 countries across Eurasia, Central Asia, and Europe. Includes two theoretical stages and a 5-hour laboratory practical.",
    "deadline": "2027-04-10",
    "minAge": 14,
    "maxAge": 19,
    "minGrade": 9,
    "maxGrade": 11,
    "countries": [
      "Kazakhstan",
      "UZ",
      "KG",
      "TJ",
      "AZ"
    ],
    "cost": "stipend",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Grades 9–11 secondary student",
      "Selected for national chemistry olympiad delegation",
      "Laboratory synthesis mastery"
    ],
    "tags": [
      "stem"
    ],
    "fields": [
      "Stem"
    ],
    "url": "https://mendeleev.olympiad.ru",
    "sourceUrl": "https://mendeleev.olympiad.ru"
  },
  {
    "id": "european-mathematical-cup-2027",
    "title": "European Mathematical Cup (EMC 2027)",
    "org": "Young Graduates Association (Croatia)",
    "category": "Competitions",
    "description": "International high school mathematics competition held simultaneously in participating countries across Junior and Senior divisions, serving as an early indicator of IMO medal potential.",
    "deadline": "2026-12-05",
    "minAge": 13,
    "maxAge": 19,
    "minGrade": 8,
    "maxGrade": 11,
    "countries": "worldwide",
    "cost": "free",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Pre-university student under 19",
      "In-person invigilated exam at local center",
      "Solutions to 4 proof-based questions in 4 hours"
    ],
    "tags": [
      "mathematics",
      "stem"
    ],
    "fields": [
      "Mathematics",
      "Stem"
    ],
    "url": "https://emc.mnm.hr",
    "sourceUrl": "https://emc.mnm.hr"
  },
  {
    "id": "middle-european-math-olympiad-2027",
    "title": "Middle European Mathematical Olympiad (MEMO 2027)",
    "org": "MEMO Organizing Committee",
    "category": "Competitions",
    "description": "Prestigious regional team and individual mathematics olympiad for secondary school students who have not yet competed in the IMO, emphasizing mathematical collaboration and proofs.",
    "deadline": "2027-06-01",
    "minAge": 13,
    "maxAge": 19,
    "minGrade": 8,
    "maxGrade": 11,
    "countries": "worldwide",
    "cost": "stipend",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Secondary school student under 19",
      "National youth math squad qualifier",
      "Individual and team round participation"
    ],
    "tags": [
      "mathematics",
      "stem"
    ],
    "fields": [
      "Mathematics",
      "Stem"
    ],
    "url": "https://www.memo-official.org",
    "sourceUrl": "https://www.memo-official.org"
  },
  {
    "id": "nordic-baltic-physics-olympiad-2027",
    "title": "Nordic-Baltic Physics Olympiad (NBPhO 2027)",
    "org": "NBPhO Organizing Committee & Tallinn University of Technology",
    "category": "Competitions",
    "description": "Regional physics championship organized by universities in Estonia, Sweden, and Finland for pre-college national teams, providing a direct qualifying pathway to the IPhO.",
    "deadline": "2027-03-25",
    "minAge": 14,
    "maxAge": 19,
    "minGrade": 9,
    "maxGrade": 11,
    "countries": "worldwide",
    "cost": "paid",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Pre-university student under 20",
      "Physics olympiad delegation squad member",
      "Advanced mechanics and electromagnetism problem solving"
    ],
    "tags": [
      "physics",
      "stem"
    ],
    "fields": [
      "Physics",
      "Stem"
    ],
    "url": "https://nbpho.ee",
    "sourceUrl": "https://nbpho.ee"
  },
  {
    "id": "iati-informatics-tournament-2027",
    "title": "International Autumn Tournament in Informatics (IATI 2027)",
    "org": "IATI Committee & Shumen Municipality (Bulgaria)",
    "category": "Competitions",
    "description": "Renowned international competitive programming tournament held in Shumen, Bulgaria, across Junior (under 15.5) and Senior divisions with IOI-rules automated grading.",
    "deadline": "2026-11-15",
    "minAge": 13,
    "maxAge": 19,
    "minGrade": 7,
    "maxGrade": 11,
    "countries": "worldwide",
    "cost": "free",
    "format": "hybrid",
    "verified": true,
    "requirements": [
      "Pre-university student under 19",
      "C++ competitive programming background",
      "Registration through school team or national hub"
    ],
    "tags": [
      "computer_science",
      "stem"
    ],
    "fields": [
      "Computer_science",
      "Stem"
    ],
    "url": "https://iati-shu.org",
    "sourceUrl": "https://iati-shu.org"
  },
  {
    "id": "bocconi-summer-school-2027",
    "title": "Bocconi Summer School for High School Students 2027",
    "org": "Bocconi University (Milan, Italy)",
    "category": "Summer Programs",
    "description": "Two-week academic pre-college summer school in Milan, Italy, hosted by Bocconi University. Students choose from cutting-edge labs in Economics, Game Theory, AI in Business, Finance, and International Law with merit-based tuition waivers.",
    "deadline": "2027-03-15",
    "minAge": 16,
    "maxAge": 18,
    "minGrade": 10,
    "maxGrade": 11,
    "countries": "worldwide",
    "cost": "paid",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Secondary student in second-to-last or final school year",
      "Strong academic transcript (past two years)",
      "Motivation letter and English proficiency (B2+)"
    ],
    "tags": [
      "business",
      "social_sciences",
      "leadership"
    ],
    "fields": [
      "Business",
      "Social_sciences",
      "Leadership"
    ],
    "url": "https://www.unibocconi.eu",
    "sourceUrl": "https://www.unibocconi.eu/wps/wcm/connect/bocconi/sitocouple/en/home/programs/summer-school/high-school-students"
  },
  {
    "id": "clark-scholars-texas-tech-2027",
    "title": "Clark Scholars Intensive Research Program at Texas Tech",
    "org": "Texas Tech University (Honors College)",
    "category": "Research",
    "description": "Highly selective 7-week intensive summer research internship for 12 exceptional high school students globally. Scholars work 1-on-1 with Texas Tech research faculty, receiving free tuition, room, board, and a $750 tax-free stipend.",
    "deadline": "2027-02-15",
    "minAge": 17,
    "maxAge": 18,
    "minGrade": 11,
    "maxGrade": 11,
    "countries": "worldwide",
    "cost": "stipend",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "At least 17 years old by program start",
      "Exceptional academic record and curiosity",
      "Three recommendation letters, transcripts, and essays"
    ],
    "tags": [
      "stem",
      "medicine",
      "humanities",
      "social_sciences"
    ],
    "fields": [
      "Stem",
      "Medicine",
      "Humanities",
      "Social_sciences"
    ],
    "url": "https://www.depts.ttu.edu/honors/academicsandenrichment/affiliatedandpartnerprograms/clarks/",
    "sourceUrl": "https://www.depts.ttu.edu/honors/academicsandenrichment/affiliatedandpartnerprograms/clarks/"
  },
  {
    "id": "stony-brook-simons-summer-2027",
    "title": "Simons Summer Research Program at Stony Brook University",
    "org": "Stony Brook University (SUNY)",
    "category": "Research",
    "description": "Hands-on laboratory research fellowship for high-achieving high school juniors at Stony Brook University labs across STEM fields. Fellows write formal research abstracts and receive a concluding academic stipend.",
    "deadline": "2027-02-07",
    "minAge": 16,
    "maxAge": 18,
    "minGrade": 11,
    "maxGrade": 11,
    "countries": [
      "United States"
    ],
    "cost": "stipend",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Current high school junior (at least 16 years old)",
      "Official high school nomination (max 2 applicants per school)",
      "Two STEM teacher recommendations and essays"
    ],
    "tags": [
      "stem",
      "medicine",
      "physics"
    ],
    "fields": [
      "Stem",
      "Medicine",
      "Physics"
    ],
    "url": "https://www.stonybrook.edu/simons",
    "sourceUrl": "https://www.stonybrook.edu/simons"
  },
  {
    "id": "rockefeller-ssrp-research-2027",
    "title": "Rockefeller University Summer Science Research Program (SSRP)",
    "org": "The Rockefeller University (New York City)",
    "category": "Research",
    "description": "Cost-free, 7-week mentored biomedical research experience for high school juniors and seniors (ages 16+) in Manhattan laboratories. Students conduct laboratory experiments in molecular genetics, virology, and neuroscience.",
    "deadline": "2027-01-08",
    "minAge": 16,
    "maxAge": 18,
    "minGrade": 11,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "free",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "At least 16 years old by program start",
      "High school junior or senior",
      "Teacher recommendation and scientific inquiry essays"
    ],
    "tags": [
      "medicine",
      "stem"
    ],
    "fields": [
      "Medicine",
      "Stem"
    ],
    "url": "https://www.rockefeller.edu/outreach/ssrp/",
    "sourceUrl": "https://www.rockefeller.edu/outreach/ssrp/"
  },
  {
    "id": "bu-rise-research-internship-2027",
    "title": "Boston University RISE Internship & Practicum",
    "org": "Boston University",
    "category": "Research",
    "description": "Six-week pre-college research program for rising seniors at Boston University. Students select either the Internship track (conducting 40 hours/week of individual lab research) or the Practicum track (computational neurobiology).",
    "deadline": "2027-02-14",
    "minAge": 16,
    "maxAge": 18,
    "minGrade": 11,
    "maxGrade": 11,
    "countries": "worldwide",
    "cost": "paid",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Rising high school senior (grade 11)",
      "Strong academic record in math and science",
      "Two teacher recommendations and essays"
    ],
    "tags": [
      "stem",
      "medicine",
      "computer_science"
    ],
    "fields": [
      "Stem",
      "Medicine",
      "Computer_science"
    ],
    "url": "https://www.bu.edu/summer/high-school-programs/rise-internship-practicum/",
    "sourceUrl": "https://www.bu.edu/summer/high-school-programs/rise-internship-practicum/"
  },
  {
    "id": "stanford-aimi-summer-health-ai-2027",
    "title": "Stanford AIMI Summer Health AI Program for High Schoolers",
    "org": "Stanford Center for Artificial Intelligence in Medicine & Imaging (AIMI)",
    "category": "Research",
    "description": "Free 2-week virtual program hosted by the Stanford Center for Artificial Intelligence in Medicine & Imaging (AIMI). Introduces high schoolers to machine learning algorithms, clinical data analysis, and medical computer vision.",
    "deadline": "2027-03-31",
    "minAge": 14,
    "maxAge": 18,
    "minGrade": 9,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "free",
    "format": "online",
    "verified": true,
    "requirements": [
      "Grades 9–12 student (ages 14+)",
      "Basic Python or quantitative aptitude",
      "Statement of interest connecting AI and healthcare"
    ],
    "tags": [
      "ai",
      "medicine",
      "computer_science"
    ],
    "fields": [
      "Ai",
      "Medicine",
      "Computer_science"
    ],
    "url": "https://aimi.stanford.edu",
    "sourceUrl": "https://aimi.stanford.edu/engage/education/summer-program"
  },
  {
    "id": "stem-fellowship-big-data-2027",
    "title": "STEM Fellowship High School Big Data Challenge",
    "org": "STEM Fellowship & SAS Analytics",
    "category": "Competitions",
    "description": "Inquiry-driven student competition where high school teams use open big data analytics and statistical software (Python, R, SAS) to generate solutions for global health, socio-economic, and environmental problems.",
    "deadline": "2027-02-28",
    "minAge": 14,
    "maxAge": 18,
    "minGrade": 9,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "free",
    "format": "online",
    "verified": true,
    "requirements": [
      "Grades 9–12 students in teams of 2–4",
      "Use of open datasets and statistical analysis",
      "Submission of an academic research manuscript"
    ],
    "tags": [
      "computer_science",
      "stem",
      "social_sciences"
    ],
    "fields": [
      "Computer_science",
      "Stem",
      "Social_sciences"
    ],
    "url": "https://stemfellowship.org",
    "sourceUrl": "https://stemfellowship.org/high-school-big-data-challenge/"
  },
  {
    "id": "brown-summer-precollege-2027",
    "title": "Summer@Brown High School Pre-College Program",
    "org": "Brown University",
    "category": "Summer Programs",
    "description": "Ivy League pre-college academic experience on Brown University campus in Providence, RI. Reflecting Brown's open curriculum philosophy, students choose from over 200 non-credit courses without the pressure of formal grades.",
    "deadline": "2027-05-10",
    "minAge": 14,
    "maxAge": 18,
    "minGrade": 9,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "paid",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Grades 9–12 student (ages 14–18)",
      "Strong academic transcript",
      "Course interest essay"
    ],
    "tags": [
      "humanities",
      "social_sciences",
      "stem",
      "arts"
    ],
    "fields": [
      "Humanities",
      "Social_sciences",
      "Stem",
      "Arts"
    ],
    "url": "https://precollege.brown.edu",
    "sourceUrl": "https://precollege.brown.edu"
  },
  {
    "id": "columbia-precollege-summer-2027",
    "title": "Columbia University Pre-College Summer Immersion",
    "org": "Columbia University (School of Professional Studies)",
    "category": "Summer Programs",
    "description": "Intensive summer academic immersion on Columbia University's historic Manhattan campus in New York City. High school students (grades 9–12) explore international finance, legal studies, neurobiology, and architecture.",
    "deadline": "2027-03-03",
    "minAge": 14,
    "maxAge": 18,
    "minGrade": 9,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "paid",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Grades 9–12 student",
      "High school transcript and teacher recommendation",
      "Personal essay on academic and career goals"
    ],
    "tags": [
      "business",
      "social_sciences",
      "humanities",
      "stem"
    ],
    "fields": [
      "Business",
      "Social_sciences",
      "Humanities",
      "Stem"
    ],
    "url": "https://precollege.sps.columbia.edu",
    "sourceUrl": "https://precollege.sps.columbia.edu"
  },
  {
    "id": "scholastic-art-writing-international-2027",
    "title": "Scholastic Art & Writing Awards (Region-at-Large International)",
    "org": "Alliance for Young Artists & Writers",
    "category": "Competitions",
    "description": "The nation's longest-running and most prestigious recognition program for creative teens in grades 7–12. International students outside the US submit via Region-at-Large across 28 categories including Painting, Photography, Poetry, and Journalism.",
    "deadline": "2026-12-15",
    "minAge": 13,
    "maxAge": 18,
    "minGrade": 7,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "paid",
    "format": "online",
    "verified": true,
    "requirements": [
      "Grades 7–12 student (ages 13+)",
      "Original artwork or written work",
      "Submission via portal with fee or fee waiver"
    ],
    "tags": [
      "arts",
      "humanities"
    ],
    "fields": [
      "Arts",
      "Humanities"
    ],
    "url": "https://www.artandwriting.org",
    "sourceUrl": "https://www.artandwriting.org"
  },
  {
    "id": "translators-without-borders-youth-2027",
    "title": "Translators without Borders Youth Language Community",
    "org": "CLEAR Global / Translators without Borders",
    "category": "Volunteering",
    "description": "Humanitarian volunteer translation program for bilingual youths aged 16+. Volunteers translate vital health, educational, and crisis information for vulnerable communities, earning certified humanitarian volunteer hours.",
    "deadline": "2027-12-31",
    "minAge": 16,
    "maxAge": 18,
    "minGrade": 10,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "free",
    "format": "online",
    "verified": true,
    "requirements": [
      "Ages 16 and older",
      "Fluent in at least two languages",
      "Pass onboarding translation competency test"
    ],
    "tags": [
      "humanities",
      "social_sciences"
    ],
    "fields": [
      "Humanities",
      "Social_sciences"
    ],
    "url": "https://translatorswithoutborders.org",
    "sourceUrl": "https://translatorswithoutborders.org/volunteer/"
  },
  {
    "id": "earthecho-water-challenge-2027",
    "title": "EarthEcho International Water Challenge",
    "org": "EarthEcho International",
    "category": "Volunteering",
    "description": "Global citizen science program founded by Philippe Cousteau Jr. Empowering youths to monitor local water bodies (testing temperature, pH, dissolved oxygen, and turbidity) and publish scientific findings on the global EarthEcho Water Challenge database.",
    "deadline": "2027-12-31",
    "minAge": 13,
    "maxAge": 18,
    "minGrade": 7,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "free",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Teens individually or with school eco-clubs",
      "Conduct water quality test of a local water body",
      "Upload scientific observations to monitorwater.org"
    ],
    "tags": [
      "environmental_science",
      "stem"
    ],
    "fields": [
      "Environmental_science",
      "Stem"
    ],
    "url": "https://www.monitorwater.org",
    "sourceUrl": "https://www.monitorwater.org"
  },
  {
    "id": "ted-ed-student-talks-2027",
    "title": "TED-Ed Student Talks Public Speaking Initiative",
    "org": "TED Conferences",
    "category": "Leadership Programs",
    "description": "Official TED initiative supporting students to discover, explore, and present their ideas in the form of short, TED-style talks. Completed talks are eligible for feature publication on the global TED-Ed Student Talks YouTube channel.",
    "deadline": "2027-12-31",
    "minAge": 13,
    "maxAge": 18,
    "minGrade": 7,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "free",
    "format": "hybrid",
    "verified": true,
    "requirements": [
      "Students ages 13–18",
      "Participation via registered school TED-Ed club with educator advisor",
      "Recorded talk of up to 7 minutes"
    ],
    "tags": [
      "leadership",
      "humanities",
      "social_sciences"
    ],
    "fields": [
      "Leadership",
      "Humanities",
      "Social_sciences"
    ],
    "url": "https://ed.ted.com/student_talks",
    "sourceUrl": "https://ed.ted.com/student_talks"
  },
  {
    "id": "kndc-kazakhstan-debate-league-2027",
    "title": "Kazakhstan National High School Debate Championship",
    "org": "РНПЦ «Дарын» & Национальная дебатная федерация РК",
    "category": "Competitions",
    "description": "The premier national high school debating championship in Kazakhstan conducted in Kazakh, Russian, and English divisions across parliamentary World Schools and Karl Popper formats.",
    "deadline": "2027-04-20",
    "minAge": 14,
    "maxAge": 18,
    "minGrade": 8,
    "maxGrade": 11,
    "countries": [
      "Kazakhstan"
    ],
    "cost": "free",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Grades 8–11 student in Kazakhstan",
      "Team of 2–3 speakers",
      "Advancement through regional qualifiers"
    ],
    "tags": [
      "leadership",
      "social_sciences",
      "humanities"
    ],
    "fields": [
      "Leadership",
      "Social_sciences",
      "Humanities"
    ],
    "url": "https://daryn.kz/debate",
    "sourceUrl": "https://daryn.kz"
  },
  {
    "id": "carc-central-asian-robotics-2027",
    "title": "Central Asian Robotics Cup (CARC 2027)",
    "org": "Федерация спортивной и образовательной робототехники РК",
    "category": "Competitions",
    "description": "Premier inter-regional robotics competition for secondary school student teams from Kazakhstan, Uzbekistan, Kyrgyzstan, and Tajikistan across autonomous line tracking, robot sumo, and open engineering sprints.",
    "deadline": "2027-03-15",
    "minAge": 13,
    "maxAge": 18,
    "minGrade": 7,
    "maxGrade": 11,
    "countries": [
      "Kazakhstan",
      "UZ",
      "KG",
      "TJ"
    ],
    "cost": "paid",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Grades 7–11 students in teams up to 3",
      "Custom programmed robot compliant with category specifications",
      "Registration via regional committee"
    ],
    "tags": [
      "robotics",
      "stem",
      "computer_science"
    ],
    "fields": [
      "Robotics",
      "Stem",
      "Computer_science"
    ],
    "url": "https://carc.kz",
    "sourceUrl": "https://carc.kz"
  },
  {
    "id": "al-farabi-math-olympiad-kz-2027",
    "title": "Al-Farabi International Math & Science Olympiad",
    "org": "Казахский национальный университет имени аль-Фараби (КазНУ)",
    "category": "Competitions",
    "description": "International academic competition organized by Al-Farabi Kazakh National University for graduating seniors. Winners earn full rector's university tuition grants to study at KazNU.",
    "deadline": "2027-03-01",
    "minAge": 16,
    "maxAge": 19,
    "minGrade": 11,
    "maxGrade": 12,
    "countries": [
      "Kazakhstan",
      "UZ",
      "KG",
      "TJ"
    ],
    "cost": "free",
    "format": "hybrid",
    "verified": true,
    "requirements": [
      "Graduating high school senior (grades 11–12)",
      "Registration via KazNU competition portal",
      "Passing preliminary online exam"
    ],
    "tags": [
      "mathematics",
      "physics",
      "stem"
    ],
    "fields": [
      "Mathematics",
      "Physics",
      "Stem"
    ],
    "url": "https://kaznu.kz/admissions/olympiads",
    "sourceUrl": "https://kaznu.kz"
  },
  {
    "id": "daryn-english-olympiad-2027",
    "title": "Daryn National Online English Language Olympiad",
    "org": "РНПЦ «Дарын»",
    "category": "Competitions",
    "description": "National online English language challenge hosted by the Daryn National Center for grades 7–11 across Kazakhstan, aligned with international CEFR proficiency levels (B1 to C1).",
    "deadline": "2026-11-28",
    "minAge": 13,
    "maxAge": 18,
    "minGrade": 7,
    "maxGrade": 11,
    "countries": [
      "Kazakhstan"
    ],
    "cost": "paid",
    "format": "online",
    "verified": true,
    "requirements": [
      "Grades 7–11 student in Kazakhstan",
      "Registration on smart.daryn.kz",
      "Online timed English language proficiency test"
    ],
    "tags": [
      "humanities",
      "social_sciences"
    ],
    "fields": [
      "Humanities",
      "Social_sciences"
    ],
    "url": "https://smart.daryn.kz/english",
    "sourceUrl": "https://daryn.kz"
  },
  {
    "id": "open-doors-olympiad-2027",
    "title": "Open Doors International Olympiad & Full Scholarship",
    "org": "Ассоциация «Глобальные университеты»",
    "category": "Scholarships",
    "description": "International online academic competition offering 100% full-tuition scholarships, monthly living stipends, and priority dorm accommodation at leading research universities.",
    "deadline": "2026-12-10",
    "minAge": 16,
    "maxAge": 24,
    "minGrade": 11,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "stipend",
    "format": "online",
    "verified": true,
    "requirements": [
      "Graduating senior or pre-university student",
      "Portfolio of academic achievements",
      "Online proctored subject examinations"
    ],
    "tags": [
      "stem",
      "computer_science",
      "business",
      "research"
    ],
    "fields": [
      "Stem",
      "Computer_science",
      "Business",
      "Research"
    ],
    "url": "https://od.globaluni.ru/en/",
    "sourceUrl": "https://od.globaluni.ru/en/"
  },
  {
    "id": "chevening-youth-leaders-2027",
    "title": "Chevening Youth Leadership & Ambassador Program",
    "org": "UK Foreign, Commonwealth & Development Office",
    "category": "Scholarships",
    "description": "Leadership development and networking program sponsored by the UK FCDO for young changemakers and aspiring diplomats, connecting future leaders with Chevening alumni and embassy mentors.",
    "deadline": "2026-11-05",
    "minAge": 15,
    "maxAge": 19,
    "minGrade": 9,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "free",
    "format": "online",
    "verified": true,
    "requirements": [
      "Ages 15–19",
      "Community leadership or volunteering track record",
      "Essay on leadership vision in English"
    ],
    "tags": [
      "leadership",
      "social_sciences",
      "humanities"
    ],
    "fields": [
      "Leadership",
      "Social_sciences",
      "Humanities"
    ],
    "url": "https://www.chevening.org/",
    "sourceUrl": "https://www.chevening.org/"
  },
  {
    "id": "mit-primes-usa-2027",
    "title": "MIT PRIMES High School Research Program in Math & CS",
    "org": "Massachusetts Institute of Technology (MIT)",
    "category": "Research",
    "description": "Year-long math and computer science research program for high school students. Students work on unsolved research problems under direct mentorship from MIT faculty and PhD researchers, producing publishable papers.",
    "deadline": "2026-11-30",
    "minAge": 15,
    "maxAge": 18,
    "minGrade": 10,
    "maxGrade": 11,
    "countries": "worldwide",
    "cost": "free",
    "format": "online",
    "verified": true,
    "requirements": [
      "Grades 10–11 student",
      "Independent solutions to the rigorous PRIMES Problem Set",
      "Math teacher recommendation and statement of interest"
    ],
    "tags": [
      "mathematics",
      "computer_science",
      "stem"
    ],
    "fields": [
      "Mathematics",
      "Computer_science",
      "Stem"
    ],
    "url": "https://math.mit.edu/research/highschool/primes/",
    "sourceUrl": "https://math.mit.edu/research/highschool/primes/usa/"
  },
  {
    "id": "stanford-simr-biomedical-2027",
    "title": "Stanford SIMR Biomedical Research Program",
    "org": "Stanford University School of Medicine",
    "category": "Research",
    "description": "Eight-week hands-on biomedical research internship at Stanford University School of Medicine labs. High school juniors and seniors conduct independent projects in immunology, cancer biology, or neurobiology, receiving a minimum $500 stipend.",
    "deadline": "2027-02-24",
    "minAge": 16,
    "maxAge": 18,
    "minGrade": 11,
    "maxGrade": 12,
    "countries": [
      "United States"
    ],
    "cost": "stipend",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Ages 16+ in grades 11–12",
      "Completed coursework in high school biology or chemistry",
      "Letters of recommendation and application essays"
    ],
    "tags": [
      "medicine",
      "stem"
    ],
    "fields": [
      "Medicine",
      "Stem"
    ],
    "url": "https://simr.stanford.edu",
    "sourceUrl": "https://simr.stanford.edu"
  },
  {
    "id": "nus-iris-internship-2027",
    "title": "NUS IRIS International Research Internship (Singapore)",
    "org": "National University of Singapore (NUS)",
    "category": "Internships",
    "description": "Fully funded research internship at the National University of Singapore (NUS, top 10 globally). Finalists receive round-trip international airfare, campus accommodation, and a monthly research stipend.",
    "deadline": "2026-11-30",
    "minAge": 16,
    "maxAge": 21,
    "minGrade": 11,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "stipend",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Ages 16 and older",
      "Demonstrated STEM research excellence",
      "Curriculum Vitae, transcript, and research statement"
    ],
    "tags": [
      "stem",
      "computer_science",
      "medicine",
      "research"
    ],
    "fields": [
      "Stem",
      "Computer_science",
      "Medicine",
      "Research"
    ],
    "url": "https://nus.edu.sg",
    "sourceUrl": "https://opportunitiescorners.com/nus-iris-internship-2027/"
  },
  {
    "id": "un-youth-delegate-program-2027",
    "title": "United Nations Youth Delegate Programme",
    "org": "United Nations (UN DESA)",
    "category": "Internships",
    "description": "Official United Nations initiative allowing youth representatives to participate in the UN General Assembly in New York and other intergovernmental meetings as part of their country's official diplomatic delegation.",
    "deadline": "2027-06-30",
    "minAge": 16,
    "maxAge": 25,
    "minGrade": 11,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "stipend",
    "format": "hybrid",
    "verified": true,
    "requirements": [
      "Ages 16+",
      "Documented youth advocacy and diplomatic skills",
      "Fluent English and selection via national Ministry of Foreign Affairs"
    ],
    "tags": [
      "leadership",
      "social_sciences",
      "humanities"
    ],
    "fields": [
      "Leadership",
      "Social_sciences",
      "Humanities"
    ],
    "url": "https://www.un.org/development/desa/youth/what-we-do/un-youth-delegate-programme.html",
    "sourceUrl": "https://www.un.org/development/desa/youth/what-we-do/un-youth-delegate-programme.html"
  },
  {
    "id": "nazarbayev-foundation-prep-2027",
    "title": "Nazarbayev University NUFYP Prep & Admissions Guidance",
    "org": "Nazarbayev University",
    "category": "Summer Programs",
    "description": "Official informational sessions, admissions workshops, and test preparation seminars hosted by Nazarbayev University in Astana for high school students preparing for the state-funded NUFYP foundation year.",
    "deadline": "2026-12-30",
    "minAge": 15,
    "maxAge": 18,
    "minGrade": 10,
    "maxGrade": 12,
    "countries": [
      "Kazakhstan"
    ],
    "cost": "free",
    "format": "hybrid",
    "verified": true,
    "requirements": [
      "High school student (grades 10–12)",
      "Preparation for IELTS/TOEFL and NUET/SAT tests",
      "Registration via NU admissions portal"
    ],
    "tags": [
      "stem",
      "business",
      "humanities"
    ],
    "fields": [
      "Stem",
      "Business",
      "Humanities"
    ],
    "url": "https://nu.edu.kz/admissions",
    "sourceUrl": "https://nu.edu.kz/admissions"
  },
  {
    "id": "code-org-global-mentor-2027",
    "title": "Code.org Global Peer Mentor Initiative",
    "org": "Code.org",
    "category": "Volunteering",
    "description": "Global educational volunteer program where high school coders teach fundamentals of computer science (Scratch, Python, JavaScript) to younger peers, earning certified service hours.",
    "deadline": "2027-12-31",
    "minAge": 14,
    "maxAge": 18,
    "minGrade": 8,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "free",
    "format": "online",
    "verified": true,
    "requirements": [
      "Ages 14+",
      "Foundational knowledge of Scratch, Python, or JS",
      "Commitment of at least 1 hour weekly"
    ],
    "tags": [
      "computer_science",
      "stem",
      "social_sciences"
    ],
    "fields": [
      "Computer_science",
      "Stem",
      "Social_sciences"
    ],
    "url": "https://code.org",
    "sourceUrl": "https://code.org"
  },
  {
    "id": "coca-cola-scholars-2027",
    "title": "Coca-Cola Scholars Program 2026/2027",
    "org": "The Coca-Cola Scholars Foundation",
    "category": "Scholarships",
    "description": "$20,000 achievement-based scholarship for graduating high school seniors in the United States demonstrating exemplary leadership, service, and academic commitment. Strictly restricted to US citizens and permanent residents.",
    "deadline": "2026-10-31",
    "minAge": 16,
    "maxAge": 19,
    "minGrade": 12,
    "maxGrade": 12,
    "countries": [
      "United States"
    ],
    "cost": "stipend",
    "format": "online",
    "verified": true,
    "requirements": [
      "Current high school senior in the US",
      "Minimum 3.0 unweighted GPA",
      "US Citizen, US National, or Permanent Resident"
    ],
    "tags": [
      "leadership",
      "business",
      "social_sciences"
    ],
    "fields": [
      "Leadership",
      "Business",
      "Social_sciences"
    ],
    "url": "https://www.coca-colascholarsfoundation.org/apply/",
    "sourceUrl": "https://www.coca-colascholarsfoundation.org/apply/"
  },
  {
    "id": "gates-scholarship-2027",
    "title": "The Gates Scholarship",
    "org": "The Bill & Melinda Gates Foundation",
    "category": "Scholarships",
    "description": "Last-dollar full-cost scholarship for outstanding minority high school seniors in the US from low-income households. Covers the full cost of attendance (tuition, fees, room, board, books) not already covered by financial aid. Strictly US citizens and permanent residents.",
    "deadline": "2026-09-15",
    "minAge": 16,
    "maxAge": 19,
    "minGrade": 12,
    "maxGrade": 12,
    "countries": [
      "United States"
    ],
    "cost": "stipend",
    "format": "online",
    "verified": true,
    "requirements": [
      "High school senior in the US",
      "US citizen, national, or permanent resident",
      "Pell-eligible with minimum cumulative GPA of 3.3"
    ],
    "tags": [
      "leadership",
      "stem",
      "humanities",
      "social_sciences"
    ],
    "fields": [
      "Leadership",
      "Stem",
      "Humanities",
      "Social_sciences"
    ],
    "url": "https://www.thegatesscholarship.org",
    "sourceUrl": "https://www.thegatesscholarship.org"
  },
  {
    "id": "questbridge-national-college-match-2027",
    "title": "QuestBridge National College Match",
    "org": "QuestBridge",
    "category": "Scholarships",
    "description": "College and scholarship application process connecting high-achieving high school seniors from low-income backgrounds with full four-year Match Scholarships to 50+ top US colleges (Stanford, MIT, Yale, etc.) with zero loans.",
    "deadline": "2026-09-26",
    "minAge": 16,
    "maxAge": 19,
    "minGrade": 12,
    "maxGrade": 12,
    "countries": [
      "United States"
    ],
    "cost": "stipend",
    "format": "online",
    "verified": true,
    "requirements": [
      "Graduating high school senior in the US",
      "US citizen, permanent resident, or undocumented student attending high school in the US",
      "Typically household income under $65,000 for a family of four"
    ],
    "tags": [
      "leadership",
      "humanities",
      "stem",
      "social_sciences"
    ],
    "fields": [
      "Leadership",
      "Humanities",
      "Stem",
      "Social_sciences"
    ],
    "url": "https://www.questbridge.org",
    "sourceUrl": "https://www.questbridge.org/high-school-students/national-college-match"
  },
  {
    "id": "bank-of-america-student-leaders-2027",
    "title": "Bank of America Student Leaders Program",
    "org": "Bank of America Charitable Foundation",
    "category": "Internships",
    "description": "Paid 8-week summer internship for high school juniors and seniors at a local nonprofit organization, plus an all-expenses-paid week-long Student Leaders Summit in Washington, D.C. Restricted to US-based students.",
    "deadline": "2027-01-15",
    "minAge": 16,
    "maxAge": 19,
    "minGrade": 11,
    "maxGrade": 12,
    "countries": [
      "United States"
    ],
    "cost": "stipend",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Current high school junior or senior in eligible US market",
      "Legally authorized to work in the US without sponsorship",
      "Demonstrated community leadership"
    ],
    "tags": [
      "leadership",
      "business",
      "social_sciences"
    ],
    "fields": [
      "Leadership",
      "Business",
      "Social_sciences"
    ],
    "url": "https://about.bankofamerica.com/en/making-an-impact/student-leaders",
    "sourceUrl": "https://about.bankofamerica.com/en/making-an-impact/student-leaders"
  },
  {
    "id": "davidson-fellows-scholarship-2027",
    "title": "Davidson Fellows Scholarship Program",
    "org": "Davidson Institute",
    "category": "Scholarships",
    "description": "One of the most prestigious pre-college scholarships in the United States, awarding $50,000, $25,000, and $10,000 to extraordinary young people 18 and under for graduate-level work in STEM, Literature, Music, and Philosophy. Strictly requires US citizenship or US permanent residency.",
    "deadline": "2027-02-11",
    "minAge": 13,
    "maxAge": 18,
    "minGrade": 7,
    "maxGrade": 12,
    "countries": [
      "United States"
    ],
    "cost": "stipend",
    "format": "online",
    "verified": true,
    "requirements": [
      "18 or younger as of deadline",
      "US Citizen or US Permanent Resident",
      "Completed significant piece of graduate-level work in eligibility category"
    ],
    "tags": [
      "stem",
      "humanities",
      "mathematics",
      "arts"
    ],
    "fields": [
      "Stem",
      "Humanities",
      "Mathematics",
      "Arts"
    ],
    "url": "https://www.davidsongifted.org/fellows-scholarship/",
    "sourceUrl": "https://www.davidsongifted.org/gifted-programs/fellows-scholarship/"
  },
  {
    "id": "mypath-climate-hackathon-2026",
    "title": "MyPath Climate Action Teen Hackathon 2026 (Test Event)",
    "org": "MyPath Climate Lab",
    "category": "Competitions",
    "description": "Internal mock test opportunity for platform demonstration and system verification.",
    "deadline": "2026-06-15",
    "minAge": 14,
    "maxAge": 18,
    "minGrade": 8,
    "maxGrade": 11,
    "countries": "worldwide",
    "cost": "free",
    "format": "online",
    "verified": true,
    "requirements": [
      "Test entry"
    ],
    "tags": [
      "environmental_science",
      "computer_science"
    ],
    "fields": [
      "Environmental_science",
      "Computer_science"
    ],
    "url": "https://mypath-your-navigator.lovable.app",
    "sourceUrl": "https://mypath-your-navigator.lovable.app"
  },
  {
    "id": "ryla-rotary-youth-leadership-2027",
    "title": "RYLA — Rotary Youth Leadership Awards",
    "org": "Rotary International",
    "category": "Leadership Programs",
    "description": "RYLA (Rotary Youth Leadership Awards) is an intensive leadership training program run by local Rotary clubs worldwide. Participants develop communication, teamwork, problem-solving, and community service skills. Active in Kazakhstan through Almaty and Astana Rotary clubs.",
    "deadline": "2027-12-31",
    "minAge": 14,
    "maxAge": 18,
    "minGrade": 8,
    "maxGrade": 11,
    "countries": "worldwide",
    "cost": "free",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Age 14–18",
      "Nomination from a local Rotary club or school",
      "Basic English (varies by program)"
    ],
    "tags": [
      "leadership",
      "community_service",
      "personal_development"
    ],
    "fields": [
      "Leadership",
      "Community_service",
      "Personal_development"
    ],
    "url": "https://www.rotary.org/en/our-programs/rotary-youth-leadership-awards",
    "sourceUrl": "https://www.rotary.org/en/our-programs/rotary-youth-leadership-awards"
  },
  {
    "id": "one-young-world-2027",
    "title": "One Young World — Young Leaders Summit",
    "org": "One Young World",
    "category": "Leadership Programs",
    "description": "One Young World is an annual summit for young leaders aged 18–30 from around the world, with scholarship funding available for delegates from developing countries. Youth from Kazakhstan and Central Asia have participated in past summits.",
    "deadline": "2027-04-01",
    "minAge": 18,
    "maxAge": 30,
    "minGrade": 11,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "stipend",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Age 18–30 (older secondary or first-year university students)",
      "Demonstrated leadership contribution",
      "Essay and recommendation required"
    ],
    "tags": [
      "leadership",
      "global_issues",
      "sustainable_development"
    ],
    "fields": [
      "Leadership",
      "Global_issues",
      "Sustainable_development"
    ],
    "url": "https://www.oneyoungworld.com/summit/apply",
    "sourceUrl": "https://www.oneyoungworld.com/scholarship"
  },
  {
    "id": "global-peace-teen-leaders-2027",
    "title": "Global Peace Teen Leaders Program",
    "org": "Global Peace Foundation",
    "category": "Leadership Programs",
    "description": "Leadership program for teens 13–18 organized by Global Peace Foundation. Participants gain mediation, intercultural dialogue, and volunteering skills. Active in 20+ countries including Kazakhstan.",
    "deadline": "2027-12-31",
    "minAge": 13,
    "maxAge": 18,
    "minGrade": 7,
    "maxGrade": 11,
    "countries": "worldwide",
    "cost": "free",
    "format": "hybrid",
    "verified": true,
    "requirements": [
      "Age 13–18",
      "Motivation letter",
      "Teacher or mentor recommendation"
    ],
    "tags": [
      "leadership",
      "peacebuilding",
      "intercultural"
    ],
    "fields": [
      "Leadership",
      "Peacebuilding",
      "Intercultural"
    ],
    "url": "https://www.globalpeace.org/teen-leaders",
    "sourceUrl": "https://www.globalpeace.org/teen-leaders"
  },
  {
    "id": "yep-youth-empowerment-program-2027",
    "title": "YEP — UN Youth Empowerment Program",
    "org": "United Nations",
    "category": "Leadership Programs",
    "description": "UN program focused on the Sustainable Development Goals. Young participants from developing countries develop community projects, receive mentoring from UN experts, and present outcomes at international forums.",
    "deadline": "2027-12-31",
    "minAge": 15,
    "maxAge": 24,
    "minGrade": 9,
    "maxGrade": 11,
    "countries": "worldwide",
    "cost": "free",
    "format": "online",
    "verified": true,
    "requirements": [
      "Age 15–24",
      "Citizen or resident of a developing country (Kazakhstan included)",
      "Project idea for a local problem",
      "Essay in English"
    ],
    "tags": [
      "leadership",
      "sustainable_development",
      "global_issues"
    ],
    "fields": [
      "Leadership",
      "Sustainable_development",
      "Global_issues"
    ],
    "url": "https://www.un.org/development/desa/youth/programmes.html",
    "sourceUrl": "https://www.un.org/youthenvoy/programs"
  },
  {
    "id": "junior-g20-y20-summit-2027",
    "title": "Y20 — Youth 20 (Official G20 Engagement Group)",
    "org": "G20 Presidency (rotating)",
    "category": "Leadership Programs",
    "description": "Y20 is the official youth engagement group of the G20, where young people develop policy recommendations on global issues. Youth from Kazakhstan can participate as delegates from invited countries.",
    "deadline": "2027-03-01",
    "minAge": 18,
    "maxAge": 30,
    "minGrade": 11,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "free",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Age 18–35",
      "Academic achievements and civic engagement",
      "English B2+",
      "Organizational or university recommendations"
    ],
    "tags": [
      "leadership",
      "global_policy",
      "economic_development"
    ],
    "fields": [
      "Leadership",
      "Global_policy",
      "Economic_development"
    ],
    "url": "https://www.g20.org/en/tracks/engagement/y20.html",
    "sourceUrl": "https://www.g20.org/en/tracks/engagement/y20.html"
  },
  {
    "id": "flex-program-2027",
    "title": "FLEX — Future Leaders Exchange Program (USA)",
    "org": "U.S. Department of State / IREX",
    "category": "Leadership Programs",
    "description": "FLEX (Future Leaders Exchange) is a fully-funded exchange program for 9th–10th grade students from former USSR countries including Kazakhstan. Winners live with American families and attend school in the USA for one academic year.",
    "deadline": "2027-01-15",
    "minAge": 15,
    "maxAge": 17,
    "minGrade": 9,
    "maxGrade": 10,
    "countries": [
      "Kazakhstan",
      "UA",
      "AM",
      "AZ",
      "GE",
      "MD",
      "TJ",
      "TM",
      "UZ",
      "KG",
      "BY"
    ],
    "cost": "stipend",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Kazakhstani citizenship",
      "9th–10th grade",
      "Age 15–17 at time of exchange",
      "English test administered by FLEX",
      "Good academic standing",
      "No US dual citizenship"
    ],
    "tags": [
      "exchange",
      "cultural_immersion",
      "english_language"
    ],
    "fields": [
      "Exchange",
      "Cultural_immersion",
      "English_language"
    ],
    "url": "https://www.irex.org/project/future-leaders-exchange-flex-program",
    "sourceUrl": "https://www.irex.org/project/future-leaders-exchange-flex-program"
  },
  {
    "id": "yes-program-kennedy-lugar-2027",
    "title": "YES — Youth Exchange and Study Program (Kennedy-Lugar)",
    "org": "U.S. Department of State / AFS / AYUSA",
    "category": "Leadership Programs",
    "description": "YES (Youth Exchange and Study) is a fully-funded U.S. State Department exchange for high school students from Muslim-majority countries including Kazakhstan. Winners study at American schools and live with host families for one year.",
    "deadline": "2027-02-01",
    "minAge": 15,
    "maxAge": 17,
    "minGrade": 9,
    "maxGrade": 11,
    "countries": [
      "Kazakhstan",
      "ID",
      "MY",
      "TR",
      "EG",
      "MA",
      "SN",
      "GH",
      "TZ",
      "NG",
      "PK",
      "BD",
      "TN"
    ],
    "cost": "stipend",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Kazakhstani citizenship (or other participating Muslim-majority country)",
      "Age 15–17",
      "9th–11th grade",
      "English B1+",
      "Good academics",
      "Leadership potential"
    ],
    "tags": [
      "exchange",
      "cultural_immersion",
      "civic_education"
    ],
    "fields": [
      "Exchange",
      "Cultural_immersion",
      "Civic_education"
    ],
    "url": "https://www.kennedy-lugar.com",
    "sourceUrl": "https://www.kennedy-lugar.com/yes"
  },
  {
    "id": "afs-intercultural-programs-2027",
    "title": "AFS — Intercultural Exchange Programs",
    "org": "AFS Intercultural Programs",
    "category": "Leadership Programs",
    "description": "AFS Intercultural Programs is one of the largest international student exchange organizations, active since 1947. AFS Kazakhstan sends school students to Europe, USA, Canada, Latin America, and Asia.",
    "deadline": "2027-12-31",
    "minAge": 15,
    "maxAge": 18,
    "minGrade": 9,
    "maxGrade": 11,
    "countries": "worldwide",
    "cost": "paid",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Age 15–18",
      "9th–11th grade",
      "Good academic standing",
      "Language of host country (varies by program)",
      "Partial funding or scholarship available"
    ],
    "tags": [
      "exchange",
      "cultural_immersion",
      "language_learning"
    ],
    "fields": [
      "Exchange",
      "Cultural_immersion",
      "Language_learning"
    ],
    "url": "https://afs.org/programs",
    "sourceUrl": "https://afs.org/countries/kazakhstan"
  },
  {
    "id": "erasmus-plus-youth-exchanges-2027",
    "title": "Erasmus+ Youth Exchanges (Kazakhstan)",
    "org": "European Commission / National Agencies",
    "category": "Leadership Programs",
    "description": "Erasmus+ funds youth exchanges between EU and partner countries including Kazakhstan. Youth organizations from Kazakhstan can apply for joint projects with European partners. Participants aged 13–30 join group exchanges lasting 5–21 days.",
    "deadline": "2027-12-31",
    "minAge": 13,
    "maxAge": 30,
    "minGrade": 7,
    "maxGrade": 11,
    "countries": "worldwide",
    "cost": "stipend",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Age 13–30",
      "Participation through a registered youth organisation or NGO",
      "Basic language of project (usually English)",
      "No citizenship requirement"
    ],
    "tags": [
      "exchange",
      "european_culture",
      "youth_participation"
    ],
    "fields": [
      "Exchange",
      "European_culture",
      "Youth_participation"
    ],
    "url": "https://erasmus-plus.ec.europa.eu/programme-guide/part-b/key-action-1/youth-exchanges",
    "sourceUrl": "https://erasmus-plus.ec.europa.eu/opportunities/opportunities-for-individuals/young-people"
  },
  {
    "id": "google-cssi-2027",
    "title": "Google Computer Science Summer Institute (CSSI)",
    "org": "Google",
    "category": "Internships",
    "description": "Google CSSI is a three-week summer computer science program for high school students who are underrepresented in tech. Participants learn Python, web development, and complete a final project. Open internationally.",
    "deadline": "2027-02-15",
    "minAge": 16,
    "maxAge": 18,
    "minGrade": 10,
    "maxGrade": 11,
    "countries": "worldwide",
    "cost": "free",
    "format": "online",
    "verified": true,
    "requirements": [
      "Final year of secondary school",
      "Age 16–18",
      "Underrepresented in tech (preferred but not required)",
      "Basic programming knowledge",
      "Essay and recommendation"
    ],
    "tags": [
      "computer_science",
      "programming",
      "industry_experience"
    ],
    "fields": [
      "Computer_science",
      "Programming",
      "Industry_experience"
    ],
    "url": "https://buildyourfuture.withgoogle.com/programs/computer-science-summer-institute",
    "sourceUrl": "https://buildyourfuture.withgoogle.com/programs/computer-science-summer-institute"
  },
  {
    "id": "microsoft-garage-internship-hs-2027",
    "title": "Microsoft Garage — High School Internship Program",
    "org": "Microsoft",
    "category": "Internships",
    "description": "Microsoft Garage offers summer internships and educational tracks for high schoolers interested in technology and product development. Primarily US/Canada, with some tracks open internationally.",
    "deadline": "2027-12-31",
    "minAge": 16,
    "maxAge": 18,
    "minGrade": 10,
    "maxGrade": 11,
    "countries": "worldwide",
    "cost": "stipend",
    "format": "hybrid",
    "verified": true,
    "requirements": [
      "Age 16–18",
      "10th–11th grade",
      "Basic programming knowledge",
      "Motivation letter",
      "English B2"
    ],
    "tags": [
      "computer_science",
      "product_design",
      "industry_experience"
    ],
    "fields": [
      "Computer_science",
      "Product_design",
      "Industry_experience"
    ],
    "url": "https://www.microsoft.com/en-us/garage/students/",
    "sourceUrl": "https://careers.microsoft.com/us/en/highschool"
  },
  {
    "id": "cern-openlab-summer-student-2027",
    "title": "CERN OpenLab — Summer Student Programme",
    "org": "CERN (European Organization for Nuclear Research)",
    "category": "Internships",
    "description": "CERN OpenLab Summer Student Programme is a 9-week summer program for university students (not secondary school). Students work with CERN researchers on CS, data physics, electronics projects. Kazakhstan is an associated CERN partner.",
    "deadline": "2027-01-31",
    "minAge": 18,
    "maxAge": 25,
    "minGrade": 12,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "stipend",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Bachelor-level university student (not secondary school)",
      "Citizenship of CERN member or associate state (Kazakhstan included)",
      "Background in CS, physics, or electronics",
      "English B2"
    ],
    "tags": [
      "physics",
      "computer_science",
      "research",
      "data_science"
    ],
    "fields": [
      "Physics",
      "Computer_science",
      "Research",
      "Data_science"
    ],
    "url": "https://openlab.cern/education/cern-openlab-summer-student-programme",
    "sourceUrl": "https://openlab.cern/education"
  },
  {
    "id": "international-physics-tournament-2027",
    "title": "International Physics Tournament (IPT)",
    "org": "IPT Foundation",
    "category": "Competitions",
    "description": "IPT is an annual team physics tournament for university students and senior high schoolers. Teams solve open-ended physics problems over several months, then defend solutions at the international final. Kazakhstan has participated in past IPTs.",
    "deadline": "2027-02-01",
    "minAge": 16,
    "maxAge": 22,
    "minGrade": 10,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "free",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Team of 3–5",
      "Age up to 22",
      "Physics level: advanced school / early university",
      "English B2 (for solution defence)"
    ],
    "tags": [
      "physics",
      "teamwork",
      "problem_solving"
    ],
    "fields": [
      "Physics",
      "Teamwork",
      "Problem_solving"
    ],
    "url": "https://iptnet.info",
    "sourceUrl": "https://iptnet.info/participation"
  },
  {
    "id": "icpc-international-collegiate-programming-2027",
    "title": "ICPC — International Collegiate Programming Contest",
    "org": "ICPC Foundation",
    "category": "Competitions",
    "description": "ICPC is the world's largest team programming contest for university students. It includes regional contests and a world final. Kazakhstan has its own regional contest (Central Asia) and teams regularly reach the world final.",
    "deadline": "2027-09-01",
    "minAge": 17,
    "maxAge": 24,
    "minGrade": 11,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "free",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "University student (or school student enrolled at university)",
      "Team of 3",
      "Knowledge of algorithms and data structures",
      "Maximum 2 world final participations"
    ],
    "tags": [
      "competitive_programming",
      "algorithms",
      "teamwork"
    ],
    "fields": [
      "Competitive_programming",
      "Algorithms",
      "Teamwork"
    ],
    "url": "https://icpc.global",
    "sourceUrl": "https://icpc.global/regionals/finder"
  },
  {
    "id": "google-science-fair-2027",
    "title": "Google Science Fair — International Science Fair",
    "org": "Google",
    "category": "Competitions",
    "description": "Google Science Fair is an annual international online competition for students aged 13–18. Participants submit research projects in any scientific field. Winners receive up to $50,000 and internships. Open to most countries including Kazakhstan.",
    "deadline": "2027-04-01",
    "minAge": 13,
    "maxAge": 18,
    "minGrade": 7,
    "maxGrade": 11,
    "countries": "worldwide",
    "cost": "free",
    "format": "online",
    "verified": true,
    "requirements": [
      "Age 13–18",
      "Original research project",
      "English B1 (for application)",
      "Individual or team up to 3",
      "Parental consent (under 18)"
    ],
    "tags": [
      "science",
      "research",
      "innovation"
    ],
    "fields": [
      "Science",
      "Research",
      "Innovation"
    ],
    "url": "https://sciencefair.withgoogle.com",
    "sourceUrl": "https://sciencefair.withgoogle.com/compete"
  },
  {
    "id": "shad-yandex-summer-school-2027",
    "title": "Yandex School of Data Analysis (SHAD) — Summer School",
    "org": "Яндекс / Yandex",
    "category": "Summer Programs",
    "description": "Yandex School of Data Analysis (SHAD) runs summer schools and online intensives in machine learning, algorithms, and data analysis. Open to students from Russia, Kazakhstan, and other CIS countries. Taught in Russian.",
    "deadline": "2027-04-15",
    "minAge": 16,
    "maxAge": 25,
    "minGrade": 10,
    "maxGrade": 12,
    "countries": [
      "Kazakhstan",
      "RU",
      "BY",
      "UA",
      "UZ",
      "TJ",
      "KG",
      "AM",
      "AZ",
      "GE",
      "MD"
    ],
    "cost": "free",
    "format": "online",
    "verified": true,
    "requirements": [
      "Age 16+ (high schoolers and university students)",
      "Russian language proficiency (taught in Russian)",
      "Basic math and programming knowledge",
      "Selection test required"
    ],
    "tags": [
      "data_science",
      "machine_learning",
      "algorithms"
    ],
    "fields": [
      "Data_science",
      "Machine_learning",
      "Algorithms"
    ],
    "url": "https://academy.yandex.ru/dataschool",
    "sourceUrl": "https://academy.yandex.ru/dataschool/summer"
  },
  {
    "id": "innopolis-summer-school-2027",
    "title": "Innopolis University — Summer School in IT and Robotics",
    "org": "Innopolis University",
    "category": "Summer Programs",
    "description": "Innopolis University (Russia) runs annual summer schools in programming, robotics, cybersecurity, and AI for students from CIS countries including Kazakhstan. Taught in Russian and English.",
    "deadline": "2027-05-01",
    "minAge": 14,
    "maxAge": 18,
    "minGrade": 8,
    "maxGrade": 11,
    "countries": [
      "Kazakhstan",
      "RU",
      "BY",
      "UA",
      "UZ",
      "TJ",
      "KG",
      "AM",
      "AZ",
      "GE",
      "MD",
      "TM"
    ],
    "cost": "paid",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Age 14–18",
      "CIS citizenship or residency",
      "Basic programming knowledge",
      "Application form and track test"
    ],
    "tags": [
      "programming",
      "robotics",
      "computer_science"
    ],
    "fields": [
      "Programming",
      "Robotics",
      "Computer_science"
    ],
    "url": "https://summerschool.innopolis.university",
    "sourceUrl": "https://summerschool.innopolis.university"
  },
  {
    "id": "central-asia-olympiad-informatics-caoi-2027",
    "title": "Central Asian Olympiad in Informatics (CAOI)",
    "org": "Central Asian IOI Committee",
    "category": "Competitions",
    "description": "CAOI is a regional informatics olympiad for school students from Central Asia (Kazakhstan, Uzbekistan, Kyrgyzstan, Tajikistan, Turkmenistan). It serves as a qualifying step toward IOI.",
    "deadline": "2027-03-01",
    "minAge": 13,
    "maxAge": 18,
    "minGrade": 7,
    "maxGrade": 11,
    "countries": [
      "Kazakhstan",
      "UZ",
      "KG",
      "TJ",
      "TM"
    ],
    "cost": "free",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Citizenship of Kazakhstan or another Central Asian country",
      "7th–11th grade",
      "Participation through national team",
      "Selection via republican olympiad"
    ],
    "tags": [
      "competitive_programming",
      "algorithms",
      "computer_science"
    ],
    "fields": [
      "Competitive_programming",
      "Algorithms",
      "Computer_science"
    ],
    "url": "https://caoi.info",
    "sourceUrl": "https://caoi.info/about"
  },
  {
    "id": "cis-olympiad-mathematics-2027",
    "title": "CIS Mathematical Olympiad",
    "org": "CIS Council on Education / Host University",
    "category": "Competitions",
    "description": "The CIS Mathematical Olympiad is an annual international competition for school students from Commonwealth of Independent States countries. Kazakhstan is a regular participant.",
    "deadline": "2027-03-15",
    "minAge": 13,
    "maxAge": 18,
    "minGrade": 7,
    "maxGrade": 11,
    "countries": [
      "Kazakhstan",
      "RU",
      "BY",
      "UA",
      "UZ",
      "TJ",
      "KG",
      "AM",
      "AZ",
      "GE",
      "MD",
      "TM"
    ],
    "cost": "free",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "CIS country citizenship (Kazakhstan included)",
      "7th–11th grade",
      "Participation through national team",
      "Prize at republican olympiad"
    ],
    "tags": [
      "mathematics",
      "problem_solving"
    ],
    "fields": [
      "Mathematics",
      "Problem_solving"
    ],
    "url": "https://www.cismath.org",
    "sourceUrl": "https://www.cismath.org"
  },
  {
    "id": "bolashak-scholarship-kz-2027",
    "title": "Bolashak Scholarship — Kazakhstan State Program",
    "org": "Ministry of Science and Higher Education of Kazakhstan",
    "category": "Scholarships",
    "description": "Bolashak is Kazakhstan's state scholarship for study at leading foreign universities. Covers tuition, accommodation, airfare, and monthly allowance for bachelor's, master's, and PhD programs. Available to Kazakhstani citizens.",
    "deadline": "2027-02-01",
    "minAge": 18,
    "maxAge": 35,
    "minGrade": 12,
    "maxGrade": 12,
    "countries": [
      "Kazakhstan"
    ],
    "cost": "stipend",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Kazakhstani citizenship",
      "Age up to 35",
      "Secondary vocational or higher education",
      "Language certificate for host country",
      "Admission to top-200 QS/THE university",
      "At least 1 year work or study experience in KZ"
    ],
    "tags": [
      "undergraduate_study",
      "international_education",
      "fully_funded"
    ],
    "fields": [
      "Undergraduate_study",
      "International_education",
      "Fully_funded"
    ],
    "url": "https://bolashak.gov.kz",
    "sourceUrl": "https://bolashak.gov.kz/ru/o-stipendii/ob-shchaya-informatsiya.html"
  },
  {
    "id": "nis-innovation-forum-kz-2027",
    "title": "NIS Innovation Forum — Student Science Projects",
    "org": "Nazarbayev Intellectual Schools (NIS)",
    "category": "Competitions",
    "description": "The NIS Innovation Forum is an annual Kazakhstani competition for 7th–11th grade students in STEM and humanities research projects. Winners may present at international forums. Open to all KZ schools, not just NIS.",
    "deadline": "2027-01-15",
    "minAge": 13,
    "maxAge": 18,
    "minGrade": 7,
    "maxGrade": 11,
    "countries": [
      "Kazakhstan"
    ],
    "cost": "free",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "7th–11th grade",
      "Citizenship or permanent residency in Kazakhstan",
      "Original research project",
      "Selection through school or regional round"
    ],
    "tags": [
      "research",
      "science",
      "innovation"
    ],
    "fields": [
      "Research",
      "Science",
      "Innovation"
    ],
    "url": "https://nis.edu.kz/en/projects/innovative-forum",
    "sourceUrl": "https://nis.edu.kz/en/projects/innovative-forum"
  },
  {
    "id": "young-inventors-award-wipo-2027",
    "title": "WIPO — Award for Young Inventors",
    "org": "World Intellectual Property Organization (WIPO)",
    "category": "Competitions",
    "description": "WIPO awards annual prizes to young inventors under 30 whose inventions have received official patent protection. Kazakhstan is a WIPO member and Kazakhstani young inventors can participate.",
    "deadline": "2027-02-15",
    "minAge": 16,
    "maxAge": 30,
    "minGrade": 11,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "free",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Age up to 30",
      "Patent or patent application on an invention",
      "Citizenship of WIPO member state (Kazakhstan included)",
      "Nomination through national patent office (KazPatent)"
    ],
    "tags": [
      "invention",
      "intellectual_property",
      "innovation"
    ],
    "fields": [
      "Invention",
      "Intellectual_property",
      "Innovation"
    ],
    "url": "https://www.wipo.int/ip-outreach/en/ipday/award.html",
    "sourceUrl": "https://www.wipo.int/ip-outreach/en/ipday/award.html"
  },
  {
    "id": "ucu-ukrainian-catholic-uni-summer-2027",
    "title": "UCU Summer School — Leadership and Entrepreneurship",
    "org": "Ukrainian Catholic University (UCU)",
    "category": "Summer Programs",
    "description": "Ukrainian Catholic University (UCU) runs annual international summer schools in leadership, entrepreneurship, and innovation, open to students from Eastern Europe and Central Asia. Taught in English.",
    "deadline": "2027-04-01",
    "minAge": 16,
    "maxAge": 24,
    "minGrade": 10,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "paid",
    "format": "hybrid",
    "verified": true,
    "requirements": [
      "Age 16–24",
      "English B1+",
      "Motivation letter",
      "Partial scholarships available"
    ],
    "tags": [
      "leadership",
      "entrepreneurship",
      "innovation"
    ],
    "fields": [
      "Leadership",
      "Entrepreneurship",
      "Innovation"
    ],
    "url": "https://summerschool.ucu.edu.ua",
    "sourceUrl": "https://ucu.edu.ua/en/summerschool/"
  },
  {
    "id": "kazakhtelecom-it-olympiad-2027",
    "title": "Kazakhtelecom IT Olympiad for School Students",
    "org": "Kazakhtelecom JSC",
    "category": "Competitions",
    "description": "Kazakhtelecom annually holds an IT olympiad for Kazakhstani school students in programming, networking, and cybersecurity. Winners receive prizes and internship opportunities.",
    "deadline": "2027-10-01",
    "minAge": 13,
    "maxAge": 18,
    "minGrade": 7,
    "maxGrade": 11,
    "countries": [
      "Kazakhstan"
    ],
    "cost": "free",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "7th–11th grade",
      "Kazakhstani citizenship or permanent residency",
      "Registration via school or official portal",
      "Basic programming or networking knowledge"
    ],
    "tags": [
      "computer_science",
      "programming",
      "networking"
    ],
    "fields": [
      "Computer_science",
      "Programming",
      "Networking"
    ],
    "url": "https://www.telecom.kz/ru/about/social-responsibility/olimpiada",
    "sourceUrl": "https://www.telecom.kz/ru/about/social-responsibility/olimpiada"
  },
  {
    "id": "rsa-student-design-awards-2027",
    "title": "RSA Student Design Awards",
    "org": "Royal Society of Arts (RSA)",
    "category": "Competitions",
    "description": "RSA Student Design Awards is one of the oldest and most prestigious international design competitions for students and young designers. Open to students worldwide including Kazakhstan.",
    "deadline": "2027-02-01",
    "minAge": 16,
    "maxAge": 25,
    "minGrade": 11,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "free",
    "format": "online",
    "verified": true,
    "requirements": [
      "Age 18–25 (or student)",
      "Original design project",
      "Online registration",
      "Portfolio or conceptual work"
    ],
    "tags": [
      "design",
      "social_innovation",
      "sustainability"
    ],
    "fields": [
      "Design",
      "Social_innovation",
      "Sustainability"
    ],
    "url": "https://www.thersa.org/action-and-research/rsa-projects/design/student-design-awards",
    "sourceUrl": "https://www.thersa.org/action-and-research/rsa-projects/design/student-design-awards"
  },
  {
    "id": "un-volunteers-online-2027",
    "title": "UNV — UN Volunteers Online Volunteering",
    "org": "United Nations Volunteers (UNV)",
    "category": "Volunteering",
    "description": "UN Online Volunteering allows youth worldwide including from Kazakhstan to participate remotely in UN and partner NGO projects. Tasks include translation, research, web development, design, and communications. Age 18+.",
    "deadline": "2027-12-31",
    "minAge": 18,
    "maxAge": 99,
    "minGrade": 11,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "free",
    "format": "online",
    "verified": true,
    "requirements": [
      "Age 18+",
      "Internet access",
      "Skills relevant to task (translation, design, research, etc.)",
      "Registration on the UNV portal"
    ],
    "tags": [
      "volunteering",
      "global_issues",
      "online_impact"
    ],
    "fields": [
      "Volunteering",
      "Global_issues",
      "Online_impact"
    ],
    "url": "https://www.onlinevolunteering.org",
    "sourceUrl": "https://www.unv.org/our-work/online-volunteering"
  },
  {
    "id": "habitat-for-humanity-youth-build-2027",
    "title": "Habitat for Humanity — Youth Build Program",
    "org": "Habitat for Humanity International",
    "category": "Volunteering",
    "description": "Habitat for Humanity offers youth build programs in 70+ countries. Participants aged 16+ work on affordable housing construction, learning teamwork and social entrepreneurship skills. Programs available in Kazakhstan and Central Asia.",
    "deadline": "2027-12-31",
    "minAge": 16,
    "maxAge": 25,
    "minGrade": 10,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "free",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Age 16+",
      "Physical readiness for construction work",
      "Registration through local Habitat chapter",
      "Volunteer commitment"
    ],
    "tags": [
      "volunteering",
      "community_service",
      "construction"
    ],
    "fields": [
      "Volunteering",
      "Community_service",
      "Construction"
    ],
    "url": "https://www.habitat.org/volunteer",
    "sourceUrl": "https://www.habitat.org/volunteer/build-trips/youth"
  },
  {
    "id": "volunteers-of-kazakh-national-geographic-2027",
    "title": "National Geographic Kazakhstan — Nature Conservation Volunteering",
    "org": "National Geographic Society / KZ Partner",
    "category": "Volunteering",
    "description": "National Geographic volunteering programs in Kazakhstan offer participation in field research, environmental education, and nature conservation. Youth 14–25 can join expeditions, biodiversity surveys, and educational events.",
    "deadline": "2027-12-31",
    "minAge": 14,
    "maxAge": 25,
    "minGrade": 7,
    "maxGrade": 11,
    "countries": [
      "Kazakhstan"
    ],
    "cost": "free",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Age 14–25",
      "Living in Kazakhstan",
      "Interest in nature and ecology",
      "Physical readiness for fieldwork"
    ],
    "tags": [
      "volunteering",
      "environment",
      "conservation",
      "science"
    ],
    "fields": [
      "Volunteering",
      "Environment",
      "Conservation",
      "Science"
    ],
    "url": "https://natgeo.kz/volunteer",
    "sourceUrl": "https://natgeo.kz"
  },
  {
    "id": "eco-voluntary-kazakh-2027",
    "title": "Eco-Volunteering — Taza Kazakhstan (Clean Kazakhstan) Program",
    "org": "Ministry of Ecology and Natural Resources of Kazakhstan",
    "category": "Volunteering",
    "description": "Taza Kazakhstan (Clean Kazakhstan) is a state ecological initiative engaging youth volunteers in territory cleanup, greening, and environmental education. Active in cities and rural areas across Kazakhstan.",
    "deadline": "2027-12-31",
    "minAge": 14,
    "maxAge": 30,
    "minGrade": 7,
    "maxGrade": 11,
    "countries": [
      "Kazakhstan"
    ],
    "cost": "free",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Age 14+",
      "Living in Kazakhstan",
      "Registration via school or local authority",
      "Volunteer commitment"
    ],
    "tags": [
      "volunteering",
      "environment",
      "ecology",
      "civic_engagement"
    ],
    "fields": [
      "Volunteering",
      "Environment",
      "Ecology",
      "Civic_engagement"
    ],
    "url": "https://ecologia.kz/taza-kazakhstan",
    "sourceUrl": "https://ecologia.kz"
  },
  {
    "id": "virtual-volunteer-amnesty-international-2027",
    "title": "Amnesty International — Youth Activist Group",
    "org": "Amnesty International",
    "category": "Volunteering",
    "description": "Amnesty International accepts youth activists from age 14 into human rights youth groups. Activities include campaigns, petitions, letter writing in support of prisoners of conscience, and school education. Online and offline.",
    "deadline": "2027-12-31",
    "minAge": 14,
    "maxAge": 25,
    "minGrade": 7,
    "maxGrade": 11,
    "countries": "worldwide",
    "cost": "free",
    "format": "hybrid",
    "verified": true,
    "requirements": [
      "Age 14+",
      "Interest in human rights",
      "Registration via website or local group",
      "No citizenship required — open participation"
    ],
    "tags": [
      "volunteering",
      "human_rights",
      "advocacy",
      "civic_engagement"
    ],
    "fields": [
      "Volunteering",
      "Human_rights",
      "Advocacy",
      "Civic_engagement"
    ],
    "url": "https://www.amnesty.org/en/get-involved/youth/",
    "sourceUrl": "https://www.amnesty.org/en/get-involved/"
  },
  {
    "id": "international-essay-competition-essay-2027",
    "title": "The Economist Open Future Youth Essay Competition",
    "org": "The Economist Group",
    "category": "Competitions",
    "description": "The Economist runs an annual essay competition for youth under 25 on economics, politics, technology, and global issues. Winners are published on The Economist's website and invited to special events. Open globally including Kazakhstan.",
    "deadline": "2027-04-01",
    "minAge": 16,
    "maxAge": 25,
    "minGrade": 10,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "free",
    "format": "online",
    "verified": true,
    "requirements": [
      "Age under 25",
      "Essay in English (typically 1,500–2,500 words)",
      "Original argumentative text",
      "Online registration"
    ],
    "tags": [
      "writing",
      "economics",
      "global_issues"
    ],
    "fields": [
      "Writing",
      "Economics",
      "Global_issues"
    ],
    "url": "https://www.economist.com/open-future",
    "sourceUrl": "https://www.economist.com/open-future/essay-competition"
  },
  {
    "id": "global-student-entrepreneur-awards-2027",
    "title": "Global Student Entrepreneur Awards (GSEA)",
    "org": "Entrepreneurs Organization (EO)",
    "category": "Competitions",
    "description": "GSEA is the world's largest competition for student entrepreneurs, organized by Entrepreneurs Organization. Participants present a working business (not a concept). It runs locally, regionally, and at a global final. Kazakhstani students are eligible.",
    "deadline": "2027-10-01",
    "minAge": 18,
    "maxAge": 30,
    "minGrade": 11,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "free",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Student status (any level)",
      "Age 18–30",
      "Working business (at least 6 months)",
      "Registration through local EO chapter"
    ],
    "tags": [
      "entrepreneurship",
      "business",
      "innovation"
    ],
    "fields": [
      "Entrepreneurship",
      "Business",
      "Innovation"
    ],
    "url": "https://gsea.org",
    "sourceUrl": "https://gsea.org/compete"
  },
  {
    "id": "young-water-professionals-iwa-2027",
    "title": "IWA — Young Water Professionals Program",
    "org": "International Water Association (IWA)",
    "category": "Scholarships",
    "description": "IWA Young Water Professionals program connects students and young researchers in water supply, sanitation, and water resources management. Participants access conferences, networking, and mentorship. Kazakhstan is an active IWA member.",
    "deadline": "2027-12-31",
    "minAge": 18,
    "maxAge": 35,
    "minGrade": 11,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "free",
    "format": "hybrid",
    "verified": true,
    "requirements": [
      "Age up to 35",
      "Student or early-career professional in the water sector",
      "IWA or national association membership",
      "English B2"
    ],
    "tags": [
      "water_resources",
      "engineering",
      "environment",
      "research"
    ],
    "fields": [
      "Water_resources",
      "Engineering",
      "Environment",
      "Research"
    ],
    "url": "https://iwa-network.org/young-water-professionals/",
    "sourceUrl": "https://iwa-network.org/young-water-professionals/"
  },
  {
    "id": "global-youth-science-hackathon-2027",
    "title": "Global Youth Science Hackathon",
    "org": "Science Hackathon Foundation (partnered with UNESCO)",
    "category": "Competitions",
    "description": "Global Youth Science Hackathon brings together teams of school students worldwide to solve real science challenges in 48 hours. Teams work with scientist mentors on climate, health, and sustainability topics. Online, open to all countries.",
    "deadline": "2027-06-01",
    "minAge": 14,
    "maxAge": 18,
    "minGrade": 8,
    "maxGrade": 11,
    "countries": "worldwide",
    "cost": "free",
    "format": "online",
    "verified": true,
    "requirements": [
      "Age 14–18",
      "Team of 2–5",
      "Basic English",
      "Online registration"
    ],
    "tags": [
      "science",
      "innovation",
      "hackathon",
      "teamwork"
    ],
    "fields": [
      "Science",
      "Innovation",
      "Hackathon",
      "Teamwork"
    ],
    "url": "https://www.globalsciencehackathon.org",
    "sourceUrl": "https://www.globalsciencehackathon.org/participate"
  },
  {
    "id": "junior-achievement-worldwide-2027",
    "title": "Junior Achievement — Entrepreneurship and Financial Literacy Programs",
    "org": "Junior Achievement Worldwide",
    "category": "Competitions",
    "description": "Junior Achievement is the world's largest youth business education organization, active in 100+ countries including Kazakhstan (JA Kazakhstan). Participants aged 10–18 learn entrepreneurship, financial literacy, and career readiness.",
    "deadline": "2027-12-31",
    "minAge": 13,
    "maxAge": 18,
    "minGrade": 7,
    "maxGrade": 11,
    "countries": "worldwide",
    "cost": "free",
    "format": "hybrid",
    "verified": true,
    "requirements": [
      "Age 10–18",
      "Participation through school or JA Kazakhstan",
      "No citizenship requirement",
      "Registration is free"
    ],
    "tags": [
      "entrepreneurship",
      "financial_literacy",
      "work_readiness"
    ],
    "fields": [
      "Entrepreneurship",
      "Financial_literacy",
      "Work_readiness"
    ],
    "url": "https://www.juniorachievement.org",
    "sourceUrl": "https://ja-kazakhstan.org"
  },
  {
    "id": "international-olympiad-astronomy-astrophysics-2027",
    "title": "International Olympiad on Astronomy and Astrophysics (IOAA)",
    "org": "IOAA Steering Committee",
    "category": "Competitions",
    "description": "IOAA is an annual international olympiad in astronomy and astrophysics for high school students. Kazakhstan participates regularly, sending a team through the Ministry of Education.",
    "deadline": "2027-04-01",
    "minAge": 13,
    "maxAge": 20,
    "minGrade": 7,
    "maxGrade": 11,
    "countries": "worldwide",
    "cost": "free",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "7th–11th grade",
      "Kazakhstani citizenship",
      "Selection through national astronomy olympiad",
      "Age under 20 at time of olympiad"
    ],
    "tags": [
      "astronomy",
      "physics",
      "mathematics"
    ],
    "fields": [
      "Astronomy",
      "Physics",
      "Mathematics"
    ],
    "url": "https://www.ioaastrophysics.org",
    "sourceUrl": "https://www.ioaastrophysics.org/participation"
  },
  {
    "id": "international-olympiad-earth-science-ieso-2027",
    "title": "International Earth Science Olympiad (IESO)",
    "org": "International Geoscience Education Organisation (IGEO)",
    "category": "Competitions",
    "description": "IESO is an annual international olympiad in earth sciences (geology, meteorology, oceanology, astronomy) for school students. Teams of 4 per country. Kazakhstan has participated in previous editions.",
    "deadline": "2027-03-01",
    "minAge": 13,
    "maxAge": 18,
    "minGrade": 7,
    "maxGrade": 11,
    "countries": "worldwide",
    "cost": "free",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "7th–11th grade",
      "Age under 18",
      "Kazakhstani citizenship",
      "Selection through national geography/earth sciences olympiad"
    ],
    "tags": [
      "earth_science",
      "geology",
      "environmental_science"
    ],
    "fields": [
      "Earth_science",
      "Geology",
      "Environmental_science"
    ],
    "url": "https://www.ieso-info.org",
    "sourceUrl": "https://www.ieso-info.org/en/participation"
  },
  {
    "id": "csto-youth-council-forum-2027",
    "title": "CSTO Youth Council — Forum of Youth of CSTO Countries",
    "org": "Collective Security Treaty Organization (CSTO)",
    "category": "Leadership Programs",
    "description": "The CSTO Youth Council organizes forums and exchange programs for youth from member states: Kazakhstan, Russia, Belarus, Armenia, Kyrgyzstan, Tajikistan. Participants discuss security, diplomacy, international relations, and youth policy.",
    "deadline": "2027-12-31",
    "minAge": 18,
    "maxAge": 35,
    "minGrade": 11,
    "maxGrade": 12,
    "countries": [
      "Kazakhstan",
      "RU",
      "BY",
      "AM",
      "KG",
      "TJ"
    ],
    "cost": "free",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Age 18–35",
      "Citizenship of CSTO member state (Kazakhstan included)",
      "Student or young professional",
      "Nomination through youth organizations or ministries"
    ],
    "tags": [
      "leadership",
      "international_relations",
      "diplomacy"
    ],
    "fields": [
      "Leadership",
      "International_relations",
      "Diplomacy"
    ],
    "url": "https://www.odkb-csto.org/youth/",
    "sourceUrl": "https://www.odkb-csto.org/youth/"
  },
  {
    "id": "nazarbayev-university-research-expo-2027",
    "title": "Nazarbayev University — School Student Research Expo",
    "org": "Nazarbayev University",
    "category": "Competitions",
    "description": "Nazarbayev University annually holds a research project expo for Kazakhstani school students. Participants present STEM projects and receive feedback from university scientists. Top projects are selected for international competitions.",
    "deadline": "2027-02-15",
    "minAge": 13,
    "maxAge": 18,
    "minGrade": 7,
    "maxGrade": 11,
    "countries": [
      "Kazakhstan"
    ],
    "cost": "free",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "7th–11th grade",
      "Kazakhstani citizenship or permanent residency",
      "Original research project",
      "Registration through school or NU outreach"
    ],
    "tags": [
      "research",
      "science",
      "innovation",
      "stem"
    ],
    "fields": [
      "Research",
      "Science",
      "Innovation",
      "Stem"
    ],
    "url": "https://nu.edu.kz/research/student-research",
    "sourceUrl": "https://nu.edu.kz/outreach"
  },
  {
    "id": "kimep-university-essay-competition-kz-2027",
    "title": "KIMEP University — Essay Competition for Kazakhstani School Students",
    "org": "KIMEP University",
    "category": "Competitions",
    "description": "KIMEP University (Almaty) runs an annual essay competition for 10th–11th grade students on economics, business, international relations, and law. Winners receive tuition discounts and trial lecture invitations. Open to all KZ schools.",
    "deadline": "2027-01-15",
    "minAge": 15,
    "maxAge": 18,
    "minGrade": 10,
    "maxGrade": 11,
    "countries": [
      "Kazakhstan"
    ],
    "cost": "free",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "10th–11th grade",
      "Living in Kazakhstan",
      "Essay in English (500–1,000 words)",
      "Registration via school or official website"
    ],
    "tags": [
      "writing",
      "economics",
      "business",
      "social_sciences"
    ],
    "fields": [
      "Writing",
      "Economics",
      "Business",
      "Social_sciences"
    ],
    "url": "https://www.kimep.kz/admissions/essay-competition",
    "sourceUrl": "https://www.kimep.kz/admissions"
  },
  {
    "id": "soros-foundation-kz-youth-grant-2027",
    "title": "Soros Foundation Kazakhstan — Youth Grants and Programs",
    "org": "Soros Foundation Kazakhstan (Open Society)",
    "category": "Scholarships",
    "description": "Soros Foundation Kazakhstan funds civic education, media literacy, arts, and youth activism programs. Youth grants are available for Kazakhstani students and high schoolers implementing social projects in their communities.",
    "deadline": "2027-12-31",
    "minAge": 15,
    "maxAge": 25,
    "minGrade": 9,
    "maxGrade": 11,
    "countries": [
      "Kazakhstan"
    ],
    "cost": "stipend",
    "format": "hybrid",
    "verified": true,
    "requirements": [
      "Age 15–25",
      "Kazakhstani citizenship or permanent residency",
      "Social project idea",
      "Competitive grant application"
    ],
    "tags": [
      "civic_education",
      "social_impact",
      "arts",
      "media"
    ],
    "fields": [
      "Civic_education",
      "Social_impact",
      "Arts",
      "Media"
    ],
    "url": "https://www.soros.kz/en/programs/youth/",
    "sourceUrl": "https://www.soros.kz/en"
  },
  {
    "id": "baluan-sholak-sport-culture-award-kz-2027",
    "title": "State Youth Award \"Daryn\" — Culture and Arts Category",
    "org": "Ministry of Education / Gift Centre Daryn, Kazakhstan",
    "category": "Competitions",
    "description": "The State Youth Award \"Daryn\" is Kazakhstan's state award for gifted school students in science, culture, sports, and arts. Awarded annually to winners of republican olympiads, competitions, and creative contests.",
    "deadline": "2027-04-01",
    "minAge": 13,
    "maxAge": 18,
    "minGrade": 7,
    "maxGrade": 11,
    "countries": [
      "Kazakhstan"
    ],
    "cost": "free",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "7th–11th grade",
      "Kazakhstani citizenship",
      "Prize at republican olympiad, competition, or sports contest",
      "Nomination through Daryn Centre or Ministry"
    ],
    "tags": [
      "arts",
      "culture",
      "creative",
      "music"
    ],
    "fields": [
      "Arts",
      "Culture",
      "Creative",
      "Music"
    ],
    "url": "https://daryn.kz/award",
    "sourceUrl": "https://daryn.kz"
  },
  {
    "id": "international-genetically-engineered-machine-igem-2027",
    "title": "iGEM — International Genetically Engineered Machine Competition",
    "org": "iGEM Foundation",
    "category": "Competitions",
    "description": "iGEM is the world's largest synthetic biology competition. Teams of school students and university students develop projects using BioBricks and present at the Grand Jamboree in the USA. Open to teams from all countries including Kazakhstan.",
    "deadline": "2027-06-01",
    "minAge": 15,
    "maxAge": 25,
    "minGrade": 9,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "paid",
    "format": "hybrid",
    "verified": true,
    "requirements": [
      "Team of 3–15 (school or university students)",
      "No age restriction (school track available)",
      "English B2",
      "Team registration fee (scholarships available)",
      "Original biological project"
    ],
    "tags": [
      "synthetic_biology",
      "biotechnology",
      "research",
      "teamwork"
    ],
    "fields": [
      "Synthetic_biology",
      "Biotechnology",
      "Research",
      "Teamwork"
    ],
    "url": "https://igem.org",
    "sourceUrl": "https://igem.org/Competition"
  },
  {
    "id": "science-olympiad-invitational-online-2027",
    "title": "Science Olympiad Invitational — Online Science Tournament",
    "org": "Science Olympiad (community-run invitationals)",
    "category": "Competitions",
    "description": "Science Olympiad Invitationals are online tournaments across 23 science events (biology, chemistry, physics, engineering, etc.) organized by university teams. International teams can participate for free in most online invitationals. Open to Kazakhstan.",
    "deadline": "2027-12-31",
    "minAge": 13,
    "maxAge": 18,
    "minGrade": 7,
    "maxGrade": 11,
    "countries": "worldwide",
    "cost": "free",
    "format": "online",
    "verified": true,
    "requirements": [
      "Team up to 15 members",
      "Age 13–18",
      "Free online registration",
      "Basic English (tasks in English)"
    ],
    "tags": [
      "science",
      "biology",
      "chemistry",
      "physics",
      "engineering"
    ],
    "fields": [
      "Science",
      "Biology",
      "Chemistry",
      "Physics",
      "Engineering"
    ],
    "url": "https://www.scienceolympiad.com/invitationals",
    "sourceUrl": "https://scioly.org/wiki/index.php/Invitational"
  },
  {
    "id": "health-without-borders-research-fellowship-2027",
    "title": "Health Without Borders — Global Health Research Fellowship",
    "org": "Health Without Borders Foundation",
    "category": "Scholarships",
    "description": "Health Without Borders offers online fellowships for high schoolers interested in global health. Participants work on health research projects under mentors from medical schools. Open to students from all countries.",
    "deadline": "2027-12-31",
    "minAge": 15,
    "maxAge": 18,
    "minGrade": 9,
    "maxGrade": 11,
    "countries": "worldwide",
    "cost": "free",
    "format": "online",
    "verified": true,
    "requirements": [
      "Age 15–18",
      "Interest in medicine and global health",
      "English B2",
      "Motivation letter and application"
    ],
    "tags": [
      "global_health",
      "medicine",
      "research",
      "public_health"
    ],
    "fields": [
      "Global_health",
      "Medicine",
      "Research",
      "Public_health"
    ],
    "url": "https://www.healthwithoutborders.org/fellowship",
    "sourceUrl": "https://www.healthwithoutborders.org"
  },
  {
    "id": "ai4good-lab-global-2027",
    "title": "AI for Good Lab — Summer AI Lab (ITU / UN)",
    "org": "International Telecommunication Union (ITU) / UN",
    "category": "Research",
    "description": "AI for Good Lab is a UN/ITU initiative for young professionals working on AI applications for global challenges. Includes online courses, hackathons, research tracks, and access to mentors from leading organizations. Open to all countries including Kazakhstan.",
    "deadline": "2027-12-31",
    "minAge": 16,
    "maxAge": 30,
    "minGrade": 10,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "free",
    "format": "online",
    "verified": true,
    "requirements": [
      "Age 18+ (some tracks from 16)",
      "Basic programming or machine learning knowledge",
      "English B1",
      "Registration on ai4good.org"
    ],
    "tags": [
      "artificial_intelligence",
      "machine_learning",
      "social_impact",
      "technology"
    ],
    "fields": [
      "Artificial_intelligence",
      "Machine_learning",
      "Social_impact",
      "Technology"
    ],
    "url": "https://ai4good.org",
    "sourceUrl": "https://ai4good.org/lab"
  },
  {
    "id": "miteecs-primes-circle-2027",
    "title": "MIT PRIMES Circle — Math and CS for High Schoolers",
    "org": "Massachusetts Institute of Technology (MIT)",
    "category": "Research",
    "description": "MIT PRIMES Circle is a volunteer program where MIT students teach math and CS to high schoolers from under-resourced backgrounds. Run online, accessible to students worldwide including Kazakhstan.",
    "deadline": "2026-12-15",
    "minAge": 14,
    "maxAge": 18,
    "minGrade": 8,
    "maxGrade": 11,
    "countries": "worldwide",
    "cost": "free",
    "format": "online",
    "verified": true,
    "requirements": [
      "Age 14–18",
      "Above-average math level",
      "English B2",
      "Application with description of interests"
    ],
    "tags": [
      "mathematics",
      "computer_science",
      "research",
      "mentorship"
    ],
    "fields": [
      "Mathematics",
      "Computer_science",
      "Research",
      "Mentorship"
    ],
    "url": "https://math.mit.edu/research/highschool/primes/circle/",
    "sourceUrl": "https://math.mit.edu/research/highschool/primes/circle/"
  },
  {
    "id": "cyber-patriot-program-online-2027",
    "title": "CyberPatriot — National Cybersecurity Competition",
    "org": "Air Force Association (AFA)",
    "category": "Competitions",
    "description": "CyberPatriot is the world's largest cybersecurity competition for school students. Teams identify and fix vulnerabilities in operating systems in real time. International teams can participate in online rounds. Kazakhstani teams are eligible.",
    "deadline": "2026-10-01",
    "minAge": 13,
    "maxAge": 18,
    "minGrade": 7,
    "maxGrade": 11,
    "countries": "worldwide",
    "cost": "paid",
    "format": "online",
    "verified": true,
    "requirements": [
      "Team of 2–6",
      "Age 13–18",
      "Online registration (fee applies)",
      "Basic networking and OS (Windows/Linux) knowledge",
      "Basic English"
    ],
    "tags": [
      "cybersecurity",
      "computer_science",
      "networking"
    ],
    "fields": [
      "Cybersecurity",
      "Computer_science",
      "Networking"
    ],
    "url": "https://www.uscyberpatriot.org",
    "sourceUrl": "https://www.uscyberpatriot.org/competition/international"
  },
  {
    "id": "international-economics-olympiad-ieo-individual-2027",
    "title": "International Economics Olympiad (IEO)",
    "org": "IEO Foundation (Russia/Global)",
    "category": "Competitions",
    "description": "IEO is the annual international economics olympiad for school students. Features a theory round, financial literacy test, and business case round. Kazakhstan actively participates; teams selected through Ministry of Education.",
    "deadline": "2027-04-01",
    "minAge": 13,
    "maxAge": 19,
    "minGrade": 7,
    "maxGrade": 11,
    "countries": "worldwide",
    "cost": "free",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "7th–11th grade",
      "Under 19 years old",
      "Kazakhstani citizenship",
      "Selection via republican economics olympiad",
      "English B2"
    ],
    "tags": [
      "economics",
      "financial_literacy",
      "business"
    ],
    "fields": [
      "Economics",
      "Financial_literacy",
      "Business"
    ],
    "url": "https://ieo.one",
    "sourceUrl": "https://ieo.one/en/about"
  },
  {
    "id": "hult-prize-high-school-2027",
    "title": "Hult Prize — Social Entrepreneurship Competition",
    "org": "Hult Prize Foundation",
    "category": "Competitions",
    "description": "Hult Prize is one of the world's largest social entrepreneurship competitions. Teams of students and high schoolers develop social business solutions around an annual challenge announced by a former UN Secretary-General. Open to all countries.",
    "deadline": "2027-01-15",
    "minAge": 16,
    "maxAge": 25,
    "minGrade": 10,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "free",
    "format": "hybrid",
    "verified": true,
    "requirements": [
      "Team of 4",
      "Student or high schooler",
      "Participation via campus round or online",
      "Motivation letter and pitch",
      "English B2"
    ],
    "tags": [
      "social_entrepreneurship",
      "business",
      "innovation",
      "global_issues"
    ],
    "fields": [
      "Social_entrepreneurship",
      "Business",
      "Innovation",
      "Global_issues"
    ],
    "url": "https://hultprize.org",
    "sourceUrl": "https://hultprize.org/compete/"
  },
  {
    "id": "young-investor-olympiad-2027",
    "title": "Young Investor Olympiad — Financial Markets",
    "org": "CFA Institute / Young Finance Club (KZ)",
    "category": "Competitions",
    "description": "The Young Investor Olympiad is held in Kazakhstan for school students and university students on financial markets, investments, and economics. Participants solve problems on stock analysis, bonds, and portfolio management.",
    "deadline": "2027-10-15",
    "minAge": 14,
    "maxAge": 21,
    "minGrade": 9,
    "maxGrade": 11,
    "countries": [
      "Kazakhstan"
    ],
    "cost": "free",
    "format": "hybrid",
    "verified": true,
    "requirements": [
      "Age 14–21",
      "9th–11th grade or university student",
      "Living in Kazakhstan",
      "Online or partner organisation registration"
    ],
    "tags": [
      "finance",
      "investing",
      "economics",
      "financial_literacy"
    ],
    "fields": [
      "Finance",
      "Investing",
      "Economics",
      "Financial_literacy"
    ],
    "url": "https://www.cfa-kazakhstan.kz/olympiad",
    "sourceUrl": "https://www.cfa-kazakhstan.kz"
  },
  {
    "id": "nazarbayev-university-summer-intensive-2027",
    "title": "Nazarbayev University — Summer Intensive for High School Students",
    "org": "Nazarbayev University",
    "category": "Summer Programs",
    "description": "Nazarbayev University runs annual summer intensive programs for high schoolers in STEM fields. Participants attend NU lectures and labs, working with professors and PhD students. Open to all Kazakhstani school students.",
    "deadline": "2027-04-01",
    "minAge": 15,
    "maxAge": 18,
    "minGrade": 9,
    "maxGrade": 11,
    "countries": [
      "Kazakhstan"
    ],
    "cost": "free",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "9th–11th grade",
      "Kazakhstani citizenship or permanent residency",
      "Good grades in relevant subjects",
      "English knowledge (some instruction in English)",
      "Application form and teacher recommendation"
    ],
    "tags": [
      "stem",
      "science",
      "mathematics",
      "research"
    ],
    "fields": [
      "Stem",
      "Science",
      "Mathematics",
      "Research"
    ],
    "url": "https://nu.edu.kz/outreach/summer-programs",
    "sourceUrl": "https://nu.edu.kz/outreach"
  },
  {
    "id": "kazakhstanrobotics-national-olympiad-2027",
    "title": "Kazakhstan National Robotics Olympiad",
    "org": "Ministry of Education / RoboCup KZ",
    "category": "Competitions",
    "description": "The Kazakhstan National Robotics Olympiad is an annual competition for school students in robot programming and construction. Winners represent Kazakhstan at international RoboCup, WRO, and other competitions.",
    "deadline": "2027-02-01",
    "minAge": 13,
    "maxAge": 18,
    "minGrade": 7,
    "maxGrade": 11,
    "countries": [
      "Kazakhstan"
    ],
    "cost": "free",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "7th–11th grade",
      "Kazakhstani citizenship or residency",
      "Registration through school or robotics centre",
      "Team of 2–3 (depending on category)"
    ],
    "tags": [
      "robotics",
      "engineering",
      "programming",
      "stem"
    ],
    "fields": [
      "Robotics",
      "Engineering",
      "Programming",
      "Stem"
    ],
    "url": "https://robo.mektep.edu.kz",
    "sourceUrl": "https://robo.mektep.edu.kz"
  },
  {
    "id": "kbtu-open-day-research-kz-2027",
    "title": "KBTU — Student Research and Innovation Conference",
    "org": "Kazakh-British Technical University (KBTU)",
    "category": "Competitions",
    "description": "The Kazakh-British Technical University (KBTU) holds an annual student research and innovation conference. High school students can participate in the school track. Participants present research and technical projects in English.",
    "deadline": "2027-03-01",
    "minAge": 15,
    "maxAge": 18,
    "minGrade": 9,
    "maxGrade": 11,
    "countries": [
      "Kazakhstan"
    ],
    "cost": "free",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "9th–11th grade",
      "Living in Kazakhstan",
      "Original research or technical project",
      "English B1 (presentation in English)",
      "Registration via KBTU website"
    ],
    "tags": [
      "research",
      "engineering",
      "innovation",
      "stem"
    ],
    "fields": [
      "Research",
      "Engineering",
      "Innovation",
      "Stem"
    ],
    "url": "https://www.kbtu.kz/en/research/conference",
    "sourceUrl": "https://www.kbtu.kz/en"
  },
  {
    "id": "atyrau-engineering-olympiad-kz-2027",
    "title": "Atyrau Regional Engineering Olympiad (Kazakhstan)",
    "org": "Atyrau Regional Department of Education / ATGU",
    "category": "Competitions",
    "description": "Atyrau Regional Engineering Olympiad is an annual competition for school students from Kazakhstan's oil and gas region in engineering disciplines: physics, math, chemistry, and technology. Winners may receive ATGU scholarships.",
    "deadline": "2027-11-01",
    "minAge": 13,
    "maxAge": 18,
    "minGrade": 7,
    "maxGrade": 11,
    "countries": [
      "Kazakhstan"
    ],
    "cost": "free",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "7th–11th grade",
      "Residing in Atyrau region",
      "Registration through school"
    ],
    "tags": [
      "engineering",
      "physics",
      "mathematics",
      "stem"
    ],
    "fields": [
      "Engineering",
      "Physics",
      "Mathematics",
      "Stem"
    ],
    "url": "https://atyrau.edu.kz/olympiad",
    "sourceUrl": "https://atyrau.edu.kz"
  },
  {
    "id": "oxford-royale-summer-school-2027",
    "title": "Oxford Royale — Summer Academy at Oxford",
    "org": "Oxford Royale Academy",
    "category": "Summer Programs",
    "description": "Oxford Royale Academy is one of the leading summer academies for school students held on Oxford University grounds. Programs cover STEM, humanities, business, and medicine. Scholarships available for students from developing countries including Kazakhstan.",
    "deadline": "2027-12-31",
    "minAge": 13,
    "maxAge": 24,
    "minGrade": 7,
    "maxGrade": 11,
    "countries": "worldwide",
    "cost": "paid",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Age 13–24",
      "English B1+",
      "Motivation letter (for scholarship)",
      "Fee £2,500–5,500 (scholarships cover fully or partially)"
    ],
    "tags": [
      "academic_preparation",
      "english_language",
      "leadership",
      "sciences"
    ],
    "fields": [
      "Academic_preparation",
      "English_language",
      "Leadership",
      "Sciences"
    ],
    "url": "https://www.oxford-royale.com",
    "sourceUrl": "https://www.oxford-royale.com/scholarships/"
  },
  {
    "id": "cambridge-summer-institute-2027",
    "title": "Cambridge Summer Institute — Summer Program at Cambridge",
    "org": "Cambridge Summer Institute / University of Cambridge",
    "category": "Summer Programs",
    "description": "Cambridge Summer Institute offers summer programs for school students at the University of Cambridge in various academic disciplines. Scholarships available for talented students from developing countries including Kazakhstan.",
    "deadline": "2027-12-31",
    "minAge": 15,
    "maxAge": 24,
    "minGrade": 9,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "paid",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Age 15–24",
      "English B2",
      "Academic recommendation",
      "Motivation letter (for scholarship)"
    ],
    "tags": [
      "academic_preparation",
      "sciences",
      "humanities",
      "leadership"
    ],
    "fields": [
      "Academic_preparation",
      "Sciences",
      "Humanities",
      "Leadership"
    ],
    "url": "https://www.cambridgesummerinstitute.com",
    "sourceUrl": "https://www.cambridgesummerinstitute.com/scholarships"
  },
  {
    "id": "isf-international-student-film-festival-2027",
    "title": "International Student Film Festival (ISFF)",
    "org": "International Student Film Festival Committee",
    "category": "Competitions",
    "description": "The International Student Film Festival accepts short films from students and high schoolers worldwide. Categories include fiction, documentary, animation, and experimental. Submissions from Kazakhstan accepted.",
    "deadline": "2027-12-31",
    "minAge": 14,
    "maxAge": 25,
    "minGrade": 8,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "free",
    "format": "online",
    "verified": true,
    "requirements": [
      "Age up to 25 or student/school student status",
      "Original short film (up to 30 minutes)",
      "Online registration",
      "Small organisation fee (exceptions possible)"
    ],
    "tags": [
      "film",
      "arts",
      "media",
      "creative"
    ],
    "fields": [
      "Film",
      "Arts",
      "Media",
      "Creative"
    ],
    "url": "https://www.isff.com",
    "sourceUrl": "https://www.isff.com/submit"
  },
  {
    "id": "central-asian-youth-forum-2027",
    "title": "Central Asian Youth Forum",
    "org": "SCO Youth Council / Host Government",
    "category": "Leadership Programs",
    "description": "The Central Asian Youth Forum brings together youth from Kazakhstan, Uzbekistan, Kyrgyzstan, Tajikistan, and Turkmenistan for dialogue on regional challenges: ecology, economy, security, and culture. Held annually in one of the region's countries.",
    "deadline": "2027-12-31",
    "minAge": 18,
    "maxAge": 35,
    "minGrade": 11,
    "maxGrade": 12,
    "countries": [
      "Kazakhstan",
      "UZ",
      "KG",
      "TJ",
      "TM"
    ],
    "cost": "free",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Age 18–35",
      "Central Asian country citizenship (KZ included)",
      "Nomination through youth organisations or ministries",
      "Russian or English language proficiency"
    ],
    "tags": [
      "leadership",
      "regional_cooperation",
      "diplomacy"
    ],
    "fields": [
      "Leadership",
      "Regional_cooperation",
      "Diplomacy"
    ],
    "url": "https://sco-youth.org",
    "sourceUrl": "https://sco-youth.org/forum"
  },
  {
    "id": "global-model-un-conference-2027",
    "title": "Global Model United Nations (GMUN) — UN Conference for School Students",
    "org": "United Nations / NMUN / GMUN",
    "category": "Competitions",
    "description": "Global Model United Nations (GMUN) conferences are the largest international MUN events, with thousands of delegates from 100+ countries. Held in New York, Geneva, Vienna, The Hague. Kazakhstani delegations regularly participate.",
    "deadline": "2027-12-31",
    "minAge": 14,
    "maxAge": 25,
    "minGrade": 8,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "paid",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Age 14–25",
      "English B2+",
      "Registration through university/school or as independent delegate",
      "Knowledge of committee topic",
      "Registration fee (scholarships available for those in need)"
    ],
    "tags": [
      "diplomacy",
      "public_speaking",
      "global_issues",
      "debate"
    ],
    "fields": [
      "Diplomacy",
      "Public_speaking",
      "Global_issues",
      "Debate"
    ],
    "url": "https://www.globalmun.com",
    "sourceUrl": "https://www.nmun.org"
  },
  {
    "id": "google-women-techmakers-scholars-2027",
    "title": "Google Women Techmakers Scholars Program",
    "org": "Google",
    "category": "Scholarships",
    "description": "Google Women Techmakers Scholars supports women studying computer science globally including Europe and the EMEA region (which includes Kazakhstan). The scholarship is $10,000 and includes Women Techmakers network membership.",
    "deadline": "2027-04-01",
    "minAge": 18,
    "maxAge": 30,
    "minGrade": 12,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "stipend",
    "format": "online",
    "verified": true,
    "requirements": [
      "Woman or non-binary person in CS",
      "Bachelor's or Master's student",
      "English B2",
      "Academic achievements",
      "Motivation essay"
    ],
    "tags": [
      "computer_science",
      "women_in_tech",
      "scholarship"
    ],
    "fields": [
      "Computer_science",
      "Women_in_tech",
      "Scholarship"
    ],
    "url": "https://buildyourfuture.withgoogle.com/scholarships/google-scholarship-recipients",
    "sourceUrl": "https://buildyourfuture.withgoogle.com/scholarships"
  },
  {
    "id": "women-in-data-science-wids-datathon-2027",
    "title": "WiDS Datathon — Women in Data Science",
    "org": "Stanford University / WiDS",
    "category": "Competitions",
    "description": "WiDS Datathon is an annual online data science competition organized by Stanford University, open to all but focused on inspiring women in Data Science. Real-world challenges, mentorship, and prizes. Open to participants worldwide.",
    "deadline": "2027-01-15",
    "minAge": 13,
    "maxAge": 99,
    "minGrade": 7,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "free",
    "format": "online",
    "verified": true,
    "requirements": [
      "Age 13+",
      "Basic Python or R knowledge",
      "Kaggle registration",
      "Participation is free"
    ],
    "tags": [
      "data_science",
      "machine_learning",
      "women_in_tech"
    ],
    "fields": [
      "Data_science",
      "Machine_learning",
      "Women_in_tech"
    ],
    "url": "https://www.widsconference.org/datathon.html",
    "sourceUrl": "https://www.widsconference.org/datathon.html"
  },
  {
    "id": "stem-for-girls-kz-2027",
    "title": "STEM for Girls Kazakhstan — UNICEF/MoE Program",
    "org": "UNICEF Kazakhstan / Ministry of Education Kazakhstan",
    "category": "Scholarships",
    "description": "The \"STEM for Girls\" program is implemented by UNICEF in partnership with the Ministry of Education Kazakhstan. Girls aged 13–17 from regions gain access to STEM education, coding clubs, and mentorship from women scientists.",
    "deadline": "2027-12-31",
    "minAge": 13,
    "maxAge": 17,
    "minGrade": 7,
    "maxGrade": 11,
    "countries": [
      "Kazakhstan"
    ],
    "cost": "free",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Girl aged 13–17",
      "Living in Kazakhstan, regional areas preferred",
      "Registration through school or local UNICEF NGO partner"
    ],
    "tags": [
      "stem",
      "women_in_tech",
      "science",
      "girls_education"
    ],
    "fields": [
      "Stem",
      "Women_in_tech",
      "Science",
      "Girls_education"
    ],
    "url": "https://www.unicef.org/kazakhstan/stem-girls",
    "sourceUrl": "https://www.unicef.org/kazakhstan/education"
  },
  {
    "id": "coursera-financial-aid-verified-cert-2027",
    "title": "Coursera — Financial Aid: Free Verified Certificates",
    "org": "Coursera",
    "category": "Scholarships",
    "description": "Coursera provides financial aid to students from developing countries for verified certificates in any course — including Google, IBM, Meta, Deeplearning.AI, Stanford, Yale courses. Kazakhstani school students can apply for free certificates.",
    "deadline": "2027-12-31",
    "minAge": 13,
    "maxAge": 99,
    "minGrade": 7,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "free",
    "format": "online",
    "verified": true,
    "requirements": [
      "Age 13+ (parental consent for under 18)",
      "Internet access",
      "Financial aid application (15 min, approval ~2 weeks)",
      "Explanation of financial need (document proof not required)"
    ],
    "tags": [
      "online_learning",
      "certificates",
      "professional_development"
    ],
    "fields": [
      "Online_learning",
      "Certificates",
      "Professional_development"
    ],
    "url": "https://learner.coursera.help/hc/en-us/articles/209819033",
    "sourceUrl": "https://www.coursera.org/financial-aid"
  },
  {
    "id": "edx-financial-assistance-certificates-2027",
    "title": "edX — Financial Assistance: MIT, Harvard, Berkeley Courses",
    "org": "edX (2U)",
    "category": "Scholarships",
    "description": "edX provides financial assistance for verified certificates from leading universities: MIT, Harvard, Berkeley, Microsoft, IBM. Kazakhstani school students can apply for free access to hundreds of professional courses.",
    "deadline": "2027-12-31",
    "minAge": 13,
    "maxAge": 99,
    "minGrade": 7,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "free",
    "format": "online",
    "verified": true,
    "requirements": [
      "Age 13+",
      "Internet access",
      "Financial aid application on the course page",
      "Explanation of financial situation (no documents required)"
    ],
    "tags": [
      "online_learning",
      "certificates",
      "stem",
      "humanities"
    ],
    "fields": [
      "Online_learning",
      "Certificates",
      "Stem",
      "Humanities"
    ],
    "url": "https://www.edx.org/financial-assistance",
    "sourceUrl": "https://www.edx.org/financial-assistance"
  },
  {
    "id": "khan-academy-free-sat-prep-2027",
    "title": "Khan Academy — Free SAT Prep and Academic Courses",
    "org": "Khan Academy / College Board",
    "category": "Scholarships",
    "description": "Khan Academy in partnership with College Board offers free personalized SAT preparation and a wide catalog of academic courses in math, sciences, programming, and humanities. Available in Russian. Open to all school students worldwide.",
    "deadline": "2027-12-31",
    "minAge": 13,
    "maxAge": 99,
    "minGrade": 7,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "free",
    "format": "online",
    "verified": true,
    "requirements": [
      "No requirements — completely free",
      "Internet access",
      "Registration (Google/email account)"
    ],
    "tags": [
      "sat_prep",
      "math",
      "science",
      "online_learning"
    ],
    "fields": [
      "Sat_prep",
      "Math",
      "Science",
      "Online_learning"
    ],
    "url": "https://www.khanacademy.org",
    "sourceUrl": "https://www.khanacademy.org/sat"
  },
  {
    "id": "mit-opencourseware-free-2027",
    "title": "MIT OpenCourseWare — Free MIT Course Materials",
    "org": "Massachusetts Institute of Technology (MIT)",
    "category": "Scholarships",
    "description": "MIT OpenCourseWare is a free open publication of MIT course materials: lectures, problem sets, exams, solutions. Covers 2,500+ courses. No registration or certificate — knowledge only. Ideal for olympiad and university preparation. Available to all school students worldwide.",
    "deadline": "2027-12-31",
    "minAge": 13,
    "maxAge": 99,
    "minGrade": 7,
    "maxGrade": 12,
    "countries": "worldwide",
    "cost": "free",
    "format": "online",
    "verified": true,
    "requirements": [
      "No requirements — fully open access",
      "Internet access"
    ],
    "tags": [
      "online_learning",
      "stem",
      "mathematics",
      "engineering"
    ],
    "fields": [
      "Online_learning",
      "Stem",
      "Mathematics",
      "Engineering"
    ],
    "url": "https://ocw.mit.edu",
    "sourceUrl": "https://ocw.mit.edu"
  },
  {
    "id": "destination-education-kz-2027",
    "title": "Destination Education Kazakhstan — Scholarship Information Platform",
    "org": "Destination Education (KZ NGO)",
    "category": "Scholarships",
    "description": "Destination Education Kazakhstan is a Kazakhstani NGO that helps school students and university students find scholarships to study abroad. Runs free seminars, mentorship, and consultations. Not a scholarship program itself, but gives access to up-to-date databases.",
    "deadline": "2027-12-31",
    "minAge": 14,
    "maxAge": 25,
    "minGrade": 8,
    "maxGrade": 12,
    "countries": [
      "Kazakhstan"
    ],
    "cost": "free",
    "format": "hybrid",
    "verified": true,
    "requirements": [
      "Age 14+",
      "Living in Kazakhstan",
      "Interest in studying abroad",
      "Registration on website or at event"
    ],
    "tags": [
      "scholarship",
      "international_education",
      "guidance"
    ],
    "fields": [
      "Scholarship",
      "International_education",
      "Guidance"
    ],
    "url": "https://www.destinationeducation.kz",
    "sourceUrl": "https://www.destinationeducation.kz"
  },
  {
    "id": "aga-khan-foundation-scholarship-2027",
    "title": "Aga Khan Foundation International Scholarship Programme",
    "org": "Aga Khan Foundation",
    "category": "Scholarships",
    "description": "The Aga Khan Foundation provides scholarships for students from developing countries to pursue Master's programs at leading universities worldwide. Kazakhstan is on the list of eligible countries. Covers tuition, accommodation, and living expenses (partially as an interest-free loan).",
    "deadline": "2027-03-31",
    "minAge": 18,
    "maxAge": 30,
    "minGrade": 12,
    "maxGrade": 12,
    "countries": [
      "Kazakhstan",
      "TJ",
      "KG",
      "UZ",
      "AF",
      "BD",
      "IN",
      "PK",
      "NG",
      "UG",
      "TZ",
      "KE",
      "MZ"
    ],
    "cost": "stipend",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Kazakhstani citizenship (or other partner country)",
      "Admission to a Master's program",
      "Age under 30",
      "English B2/IELTS 6.5+",
      "Academic achievements and motivation essay",
      "Demonstrated financial need"
    ],
    "tags": [
      "postgraduate_study",
      "international_education",
      "fully_funded"
    ],
    "fields": [
      "Postgraduate_study",
      "International_education",
      "Fully_funded"
    ],
    "url": "https://www.akdn.org/agency/aga-khan-foundation/international-scholarship-programme",
    "sourceUrl": "https://www.akdn.org/our-agencies/aga-khan-foundation"
  },
  {
    "id": "central-asia-scholarship-daad-2027",
    "title": "DAAD — Scholarships for Central Asia (Germany)",
    "org": "DAAD (Deutscher Akademischer Austauschdienst)",
    "category": "Scholarships",
    "description": "DAAD — German Academic Exchange Service — offers several scholarship programs for students and young researchers from Kazakhstan and other Central Asian countries for study and research in Germany. All costs covered.",
    "deadline": "2027-11-01",
    "minAge": 18,
    "maxAge": 32,
    "minGrade": 12,
    "maxGrade": 12,
    "countries": [
      "Kazakhstan"
    ],
    "cost": "stipend",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Kazakhstani citizenship",
      "University student or graduate",
      "German B2 or English B2 (depends on program)",
      "Academic achievements",
      "Application via DAAD Kazakhstan (Almaty)"
    ],
    "tags": [
      "postgraduate_study",
      "research",
      "international_education"
    ],
    "fields": [
      "Postgraduate_study",
      "Research",
      "International_education"
    ],
    "url": "https://www.daad.kz/en/scholarships/",
    "sourceUrl": "https://www.daad.kz/en"
  },
  {
    "id": "joint-japan-world-bank-scholarship-2027",
    "title": "JJ/WBGSP — Joint Japan/World Bank Graduate Scholarship Program",
    "org": "World Bank / Government of Japan",
    "category": "Scholarships",
    "description": "The JJ/WBGSP supports citizens of World Bank borrowing countries including Kazakhstan to pursue Master's programs in development economics, public administration, and related disciplines.",
    "deadline": "2027-04-25",
    "minAge": 20,
    "maxAge": 45,
    "minGrade": 12,
    "maxGrade": 12,
    "countries": [
      "Kazakhstan",
      "UZ",
      "KG",
      "TJ",
      "TM",
      "AF",
      "NG",
      "GH",
      "KE",
      "TZ",
      "UG"
    ],
    "cost": "stipend",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Citizenship of a WB borrowing country (Kazakhstan included)",
      "Bachelor's degree",
      "Age up to 45",
      "At least 2 years of work experience",
      "Admission to a WB partner program",
      "English IELTS 6.5+"
    ],
    "tags": [
      "postgraduate_study",
      "development_economics",
      "policy",
      "international_education"
    ],
    "fields": [
      "Postgraduate_study",
      "Development_economics",
      "Policy",
      "International_education"
    ],
    "url": "https://www.worldbank.org/en/programs/scholarships",
    "sourceUrl": "https://www.worldbank.org/en/programs/scholarships/jjwbgsp"
  },
  {
    "id": "international-olympiad-linguistics-iol-2027",
    "title": "International Linguistics Olympiad (IOL)",
    "org": "IOL Steering Committee",
    "category": "Competitions",
    "description": "IOL is the international linguistics olympiad for school students, where participants solve problems analyzing unknown languages without prior study. Kazakhstan participates through a team selected at the national linguistics olympiad.",
    "deadline": "2027-03-01",
    "minAge": 13,
    "maxAge": 20,
    "minGrade": 7,
    "maxGrade": 11,
    "countries": "worldwide",
    "cost": "free",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "7th–11th grade",
      "Under 20 years old",
      "Kazakhstani citizenship",
      "Selection via national linguistics olympiad",
      "English or Russian knowledge (problems in both languages)"
    ],
    "tags": [
      "linguistics",
      "logic",
      "problem_solving",
      "languages"
    ],
    "fields": [
      "Linguistics",
      "Logic",
      "Problem_solving",
      "Languages"
    ],
    "url": "https://ioling.org",
    "sourceUrl": "https://ioling.org/participation/"
  },
  {
    "id": "mathematical-kangaroo-kz-2027",
    "title": "Kangaroo — International Mathematical Competition",
    "org": "Association Kangourou sans Frontières",
    "category": "Competitions",
    "description": "Kangaroo is the world's largest mass mathematics competition for grades 1–11, with over 6 million participants from 90+ countries. Kazakhstan actively participates; the competition is organized nationwide.",
    "deadline": "2027-03-01",
    "minAge": 13,
    "maxAge": 18,
    "minGrade": 7,
    "maxGrade": 11,
    "countries": "worldwide",
    "cost": "paid",
    "format": "in-person",
    "verified": true,
    "requirements": [
      "Grades 1–11",
      "Living in Kazakhstan (registration through school)",
      "No level requirements (5 difficulty levels)",
      "Small organisation fee through school"
    ],
    "tags": [
      "mathematics",
      "logic",
      "problem_solving"
    ],
    "fields": [
      "Mathematics",
      "Logic",
      "Problem_solving"
    ],
    "url": "https://www.aksf.org",
    "sourceUrl": "https://www.aksf.org/countries.html"
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
    OPPORTUNITIES.flatMap((o) => (!o.countries || o.countries === "worldwide" ? [] : o.countries)),
  ),
).sort();

export function openOpportunities(
  sourceList: Opportunity[] = OPPORTUNITIES,
  now: Date = new Date(),
): Opportunity[] {
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
