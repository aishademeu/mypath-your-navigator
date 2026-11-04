import * as fs from 'fs';
import * as path from 'path';

export interface OpportunityContract {
  id: string;
  slug: string;
  title: { ru: string; kk: string; en: string };
  organization: string;
  category: string;
  directions: string[];
  description: { ru: string; kk: string; en: string };
  summary: { ru: string; kk: string; en: string };
  requirements_checklist: { ru: string[]; kk: string[]; en: string[] };
  official_url: string;
  source_url: string;
  cost_type: 'free' | 'paid' | 'fully_funded' | 'stipend';
  cost_amount: number | null;
  cost_currency: string | null;
  format: 'online' | 'offline' | 'hybrid';
  location: string | null;
  min_grade: number | null;
  max_grade: number | null;
  min_age: number | null;
  max_age: number | null;
  eligibility_countries: string[];
  excluded_countries: string[];
  citizenship_rule: 'open' | 'us_only' | 'uk_only' | 'eu_only' | 'other';
  citizenship_note: string | null;
  language_requirements: string[];
  deadline_type: 'fixed' | 'rolling' | 'annual_estimate' | 'unknown';
  deadline_date: string | null;
  cycle_year: number;
  status: 'active' | 'expired' | 'needs_review' | 'hidden';
  translation_source: 'human' | 'machine';
  verified_at: string;
  verified_by: string;
  verification_note: string;
}

export const RAW_OPPORTUNITIES: OpportunityContract[] = [
  // =========================================================================
  // 1. KAZAKHSTAN & CENTRAL ASIA FLAGSHIPS (18 OPPORTUNITIES)
  // =========================================================================
  {
    id: "nu-summer-camp-2027",
    slug: "nu-summer-camp-2027",
    title: {
      ru: "Летний лагерь Назарбаев Университета (NU Summer Camp)",
      kk: "Назарбаев Университетінің жазғы лагері (NU Summer Camp)",
      en: "Nazarbayev University Summer Camp (NU Summer Camp)"
    },
    organization: "Nazarbayev University",
    category: "summer_school",
    directions: ["stem", "robotics", "ai", "medicine", "leadership"],
    description: {
      ru: "Интенсивная летняя академическая программа для школьников 8–11 классов на кампусе Назарбаев Университета в Астане. Направления: CyberMind (робототехника и IT), Inside Science (химия и физика), Human Lab (биология и медицина), Maker Lab (инженерия) и Success Track (лидерство и дебаты). Проживание в общежитии кампуса, практические лаборатории с профессорами NU.",
      kk: "Астана қаласындағы Назарбаев Университетінің кампусында 8–11 сынып оқушыларына арналған қарқынды жазғы академиялық бағдарлама. Бағыттары: CyberMind (IT және робототехника), Inside Science (химия және физика), Human Lab (биология және медицина), Maker Lab (инженерия) және Success Track. Кампуста тұру, NU профессорларымен бірге тәжірибелік зертханалар.",
      en: "Intensive summer academic residential camp for grades 8–11 at Nazarbayev University campus in Astana. Tracks include CyberMind (Robotics & IT), Inside Science (Physics & Chemistry), Human Lab (Biology & Pre-Med), Maker Lab (Engineering), and Success Track (Leadership & Debate)."
    },
    summary: {
      ru: "Летняя академия на кампусе NU в Астане: лаборатории, робототехника, наука и дебаты для 8–11 классов.",
      kk: "Астанадағы NU кампусындағы жазғы академия: 8–11 сыныптарға арналған зертханалар, ғылым және дебаттар.",
      en: "Summer academic residential camp at NU Astana: robotics, science labs, pre-med, and debate for grades 8–11."
    },
    requirements_checklist: {
      ru: ["Учащийся 8–11 классов на момент подачи", "Знание английского языка на базовом уровне (Pre-Intermediate+)", "Заполненная анкета и мотивационное эссе"],
      kk: ["Өтініш беру кезінде 8–11 сынып оқушысы болу", "Ағылшын тілін базалық деңгейде білу (Pre-Intermediate+)", "Толтырылған сауалнама және мотивациялық эссе"],
      en: ["Enrolled in grades 8–11", "Working English proficiency (Pre-Intermediate or higher)", "Completed application form and motivation essay"]
    },
    official_url: "https://camp.nu.edu.kz",
    source_url: "https://camp.nu.edu.kz",
    cost_type: "paid",
    cost_amount: 180000,
    cost_currency: "KZT",
    format: "offline",
    location: "Astana, Kazakhstan",
    min_grade: 8,
    max_grade: 11,
    min_age: 14,
    max_age: 18,
    eligibility_countries: ["KZ", "KG", "UZ", "TJ"],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Открыто для школьников из Казахстана и стран Центральной Азии.",
    language_requirements: ["en", "ru"],
    deadline_type: "annual_estimate",
    deadline_date: "2027-05-15",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по официальному порталу camp.nu.edu.kz. Программа проводится ежегодно в июне–июле."
  },
  {
    id: "issai-research-fellowship-2027",
    slug: "issai-research-fellowship-2027",
    title: {
      ru: "Исследовательская стажировка ISSAI по искусственному интеллекту",
      kk: "ISSAI жасанды интеллект бойынша зерттеу тағылымдамасы",
      en: "ISSAI High School AI Research Fellowship"
    },
    organization: "Institute of Smart Systems and Artificial Intelligence (ISSAI)",
    category: "research",
    directions: ["ai", "computer_science", "stem"],
    description: {
      ru: "Уникальная возможность для старшеклассников (9–11 классы) принять участие в реальных научных проектах по искусственному интеллекту, компьютерному зрению и обработке естественного языка (NLP) под руководством ведущих ученых ISSAI в Назарбаев Университете.",
      kk: "Жоғары сынып (9–11) оқушыларына арналған Назарбаев Университеті жанындағы ISSAI жетекші ғалымдарының басшылығымен жасанды интеллект, компьютерлік көру және NLP саласындағы ғылыми жобаларға қатысу мүмкіндігі.",
      en: "Elite research internship program for high school students (grades 9–11) at Nazarbayev University's ISSAI institute, working on AI, computer vision, robotics, and natural language processing alongside leading PhD scientists."
    },
    summary: {
      ru: "Научная стажировка по машинному обучению и ИИ в институте ISSAI при Назарбаев Университете.",
      kk: "Назарбаев Университеті жанындағы ISSAI институтында машиналық оқыту және ЖИ бойынша зерттеу тағылымдамасы.",
      en: "High school AI and machine learning research fellowship at Nazarbayev University's ISSAI institute."
    },
    requirements_checklist: {
      ru: ["Ученик 9–11 класса", "Знание основ Python и математического анализа", "Портфолио проектов на GitHub или участие в олимпиадах по информатике"],
      kk: ["9–11 сынып оқушысы", "Python және математикалық талдау негіздерін білу", "GitHub портфолиосы немесе информатика олимпиадаларына қатысу"],
      en: ["Grades 9–11 student", "Proficiency in Python and high school mathematics", "GitHub coding portfolio or informatics olympiad background"]
    },
    official_url: "https://issai.nu.edu.kz",
    source_url: "https://issai.nu.edu.kz",
    cost_type: "free",
    cost_amount: null,
    cost_currency: null,
    format: "hybrid",
    location: "Astana, Kazakhstan",
    min_grade: 9,
    max_grade: 11,
    min_age: 15,
    max_age: 18,
    eligibility_countries: ["KZ"],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Доступно для граждан и резидентов Казахстана.",
    language_requirements: ["en"],
    deadline_type: "annual_estimate",
    deadline_date: "2027-04-30",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по официальному сайту issai.nu.edu.kz. Отбор на летний и осенний когорты."
  },
  {
    id: "izho-almaty-2027",
    slug: "izho-almaty-2027",
    title: {
      ru: "Международная Жаутыковская олимпиада (IZhO 2027)",
      kk: "Халықаралық Жәутіков олимпиадасы (IZhO 2027)",
      en: "International Zhautykov Olympiad (IZhO 2027)"
    },
    organization: "РСФМШ / Республиканская физико-математическая школа",
    category: "competition",
    directions: ["mathematics", "physics", "computer_science", "stem"],
    description: {
      ru: "Престижная международная олимпиада для школьных команд по математике, физике и информатике, ежегодно собирающая сильнейшие команды из более чем 20 стран мира в Алматы. Проводится на базе Республиканской физико-математической школы (РФМШ) при поддержке Министерства просвещения РК.",
      kk: "Алматы қаласында жыл сайын әлемнің 20-дан астам елінің ең мықты мектеп командаларын жинайтын математика, физика және информатика пәндері бойынша беделді халықаралық олимпиада. РФМШ және ҚР Оқу-ағарту министрлігінің қолдауымен өткізіледі.",
      en: "Prestigious annual international team olympiad in Mathematics, Physics, and Computer Science held in Almaty, Kazakhstan, gathering top secondary school teams from over 20 nations."
    },
    summary: {
      ru: "Международная командная олимпиада по математике, физике и информатике в Алматы для сборных школ.",
      kk: "Мектеп командаларына арналған Алматыдағы математика, физика және информатика бойынша халықаралық олимпиада.",
      en: "Prestigious international team olympiad in Math, Physics, and CS held annually in Almaty, Kazakhstan."
    },
    requirements_checklist: {
      ru: ["Учащиеся 9–11 классов в составе официальной сборной школы", "Рекомендация или квалификация от школы/региона", "Регистрация через оргкомитет РФМШ"],
      kk: ["Мектептің ресми құрамасы сапындағы 9–11 сынып оқушылары", "Мектептен немесе өңірден жолдама", "РФМШ ұйымдастыру комитеті арқылы тіркелу"],
      en: ["Secondary school students (grades 9–11) representing an official school team", "School/regional qualification", "Registration via RFMSH committee"]
    },
    official_url: "https://izho.kz",
    source_url: "https://izho.kz",
    cost_type: "paid",
    cost_amount: 50000,
    cost_currency: "KZT",
    format: "offline",
    location: "Almaty, Kazakhstan",
    min_grade: 9,
    max_grade: 11,
    min_age: 14,
    max_age: 18,
    eligibility_countries: [],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Открыто для команд из Казахстана и зарубежных стран.",
    language_requirements: ["en", "ru"],
    deadline_type: "fixed",
    deadline_date: "2026-12-10",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по официальному регламенту izho.kz. Проводится в январе 2027 года."
  },
  {
    id: "indrive-beginit-2027",
    slug: "indrive-beginit-2027",
    title: {
      ru: "Образовательный проект beginIT от inDrive",
      kk: "inDrive ұсынған beginIT білім беру жобасы",
      en: "inDrive beginIT Social Leadership Project"
    },
    organization: "inDrive / inVision U",
    category: "leadership",
    directions: ["leadership", "social_sciences", "computer_science", "entrepreneurship"],
    description: {
      ru: "Масштабный социальный образовательный проект компании inDrive для учащихся 10 классов из сельских и малых школ Казахстана. Программа развивает лидерские качества, проектное мышление и цифровые навыки. Финалисты участвуют в выездных интенсивах в Алматы и получают гранты на обучение в университетах.",
      kk: "Қазақстанның ауылдық және шағын қалаларындағы 10-сынып оқушыларына арналған inDrive компаниясының әлеуметтік білім беру жобасы. Көшбасшылықты, жобалық ойлауды және цифрлық дағдыларды дамытады. Финалистер Алматыдағы оқу лагеріне қатысып, гранттар ұтып алады.",
      en: "Social educational initiative by inDrive for 10th-grade students from rural and regional schools across Kazakhstan, developing leadership, tech literacy, and community project skills, with full university scholarship opportunities."
    },
    summary: {
      ru: "Лидерский проект для 10-классников из регионов Казахстана: бесплатный буткемп и университетские гранты.",
      kk: "Ауылдық мектеп оқушыларына арналған көшбасшылық бағдарлама: Алматыдағы тегін лагерь және жоғары оқу орны гранттары.",
      en: "Leadership and tech bootcamp for 10th graders from rural Kazakhstan, offering university scholarships."
    },
    requirements_checklist: {
      ru: ["Ученик 10 класса сельской школы или школы малого города Казахстана", "Мотивация менять свое сообщество к лучшему", "Прохождение онлайн-тестирования и видеоинтервью"],
      kk: ["Қазақстанның ауыл немесе шағын қала мектебінің 10-сынып оқушысы", "Өз өңірін дамытуға деген ынта", "Онлайн тестілеу мен бейнесұхбаттан өту"],
      en: ["10th-grade student at a rural or regional secondary school in Kazakhstan", "Demonstrated community leadership commitment", "Online test and video interview submission"]
    },
    official_url: "https://beginit.indrive.com",
    source_url: "https://beginit.indrive.com",
    cost_type: "fully_funded",
    cost_amount: null,
    cost_currency: null,
    format: "hybrid",
    location: "Almaty / Nationwide Kazakhstan",
    min_grade: 10,
    max_grade: 10,
    min_age: 15,
    max_age: 17,
    eligibility_countries: ["KZ"],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Только для учащихся из регионов и сельских районов Казахстана.",
    language_requirements: ["ru", "kk"],
    deadline_type: "annual_estimate",
    deadline_date: "2027-03-31",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по официальному сайту beginit.indrive.com. Полное финансирование проживания и обучения."
  },
  {
    id: "flex-program-kazakhstan-2027",
    slug: "flex-program-kazakhstan-2027",
    title: {
      ru: "Программа школьного обмена FLEX (Future Leaders Exchange)",
      kk: "FLEX (Болашақ көшбасшылармен алмасу) мектеп бағдарламасы",
      en: "FLEX (Future Leaders Exchange) Kazakhstan"
    },
    organization: "American Councils for International Education / U.S. Department of State",
    category: "exchange",
    directions: ["leadership", "humanities", "social_sciences"],
    description: {
      ru: "Полностью финансируемая Госдепартаментом США программа культурного обмена для школьников 8–10 классов из Казахстана. Финалисты живут в американских принимающих семьях и учатся в обычной американской старшей школе в течение одного академического года.",
      kk: "АҚШ Мемлекеттік департаменті қаржыландыратын 8–10 сынып оқушыларына арналған толық тегін алмасу бағдарламасы. Жеңімпаздар бір жыл бойы америкалық отбасыда тұрып, АҚШ мемлекеттік мектебінде тегін оқиды.",
      en: "Fully funded cultural exchange program sponsored by the U.S. Department of State for high school students in grades 8–10 from Kazakhstan. Selected finalists spend one full academic year living with an American host family and attending a U.S. high school."
    },
    summary: {
      ru: "Полностью финансируемый год учебы в американской школе для учеников 8–10 классов из Казахстана.",
      kk: "Қазақстанның 8–10 сынып оқушыларына арналған АҚШ мектебінде 1 жыл тегін оқу бағдарламасы.",
      en: "Fully funded 1-year academic exchange in a U.S. high school for grades 8–10 from Kazakhstan."
    },
    requirements_checklist: {
      ru: ["Гражданин Республики Казахстан", "Учащийся 8, 9 или 10 класса", "Дата рождения строго в рамках критериев текущего цикла", "Хорошая академическая успеваемость и владение английским языком"],
      kk: ["Қазақстан Республикасының азаматы болу", "8, 9 немесе 10 сынып оқушысы", "Жасы бағдарламаның ресми талаптарына сәйкес келу", "Жақсы оқу үлгерімі және ағылшын тілін білу"],
      en: ["Citizen of Kazakhstan", "Enrolled in grade 8, 9, or 10", "Meet cycle age eligibility requirements", "Academic merit and English proficiency"]
    },
    official_url: "https://discoverflex.org",
    source_url: "https://kazakhstan.americancouncils.org/flex-en",
    cost_type: "fully_funded",
    cost_amount: null,
    cost_currency: null,
    format: "offline",
    location: "United States",
    min_grade: 8,
    max_grade: 10,
    min_age: 15,
    max_age: 17,
    eligibility_countries: ["KZ"],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Кандидат должен иметь гражданство Республики Казахстан.",
    language_requirements: ["en"],
    deadline_type: "fixed",
    deadline_date: "2026-10-10",
    cycle_year: 2026,
    status: "expired",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Прием заявок на 2026/2027 год закрыт в октябре 2026. Новый цикл откроется в августе 2027."
  },
  {
    id: "smart-daryn-republican-olympiad-2027",
    slug: "smart-daryn-republican-olympiad-2027",
    title: {
      ru: "Республиканская олимпиада школьников по общеобразовательным предметам (Дарын)",
      kk: "Жалпы білім беретін пәндер бойынша республикалық мектеп олимпиадасы (Дарын)",
      en: "Kazakhstan Republican General Subject Olympiad (Daryn)"
    },
    organization: "РНПЦ «Дарын» Министерства просвещения РК",
    category: "competition",
    directions: ["stem", "mathematics", "physics", "computer_science", "humanities"],
    description: {
      ru: "Главная государственная олимпиада школьников Республики Казахстан, проходящая в четыре этапа: школьный, районный, областной и республиканский. Победители получают преимущественное право на государственные образовательные гранты в вузы Казахстана и входят в состав национальных сборных на международные олимпиады.",
      kk: "Төрт кезеңнен тұратын Қазақстанның басты мемлекеттік пәндік олимпиадасы: мектеп, аудандық, облыстық және республикалық. Жеңімпаздар жоғары оқу орындарына мемлекеттік білім гранттарын алу құқығына ие болады және халықаралық құрамаларға енеді.",
      en: "The primary national academic competition system in Kazakhstan across all school subjects. Winning the republican finals provides state university tuition grants and international olympiad team qualification."
    },
    summary: {
      ru: "Главная олимпиада Казахстана по всем предметам для 9–11 классов с правом на грант в вузы РК.",
      kk: "9–11 сыныптарға арналған мемлекеттік грант сыйлайтын Қазақстандағы басты пәндік олимпиада.",
      en: "Premier national high school subject olympiad in Kazakhstan offering university admission grants."
    },
    requirements_checklist: {
      ru: ["Учащийся 9–11 классов общеобразовательных школ Казахстана", "Победа на школьном и районном этапах", "Регистрация через портал smart.daryn.kz"],
      kk: ["Қазақстан мектептерінің 9–11 сынып оқушысы", "Мектеп және аудандық кезеңдерде жеңіске жету", "smart.daryn.kz порталы арқылы ресми тіркелу"],
      en: ["Grades 9–11 student in Kazakhstan", "Advancement through school and district qualifiers", "Registration via smart.daryn.kz"]
    },
    official_url: "https://smart.daryn.kz",
    source_url: "https://daryn.kz",
    cost_type: "free",
    cost_amount: null,
    cost_currency: null,
    format: "offline",
    location: "Kazakhstan (Regional & Republican Centers)",
    min_grade: 9,
    max_grade: 11,
    min_age: 14,
    max_age: 18,
    eligibility_countries: ["KZ"],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Для школьников общеобразовательных организаций Казахстана.",
    language_requirements: ["kk", "ru"],
    deadline_type: "fixed",
    deadline_date: "2026-11-20",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по официальному графику РНПЦ «Дарын». Районные этапы начинаются в ноябре."
  },
  {
    id: "daryn-scientific-projects-competition-2027",
    slug: "daryn-scientific-projects-competition-2027",
    title: {
      ru: "Республиканский конкурс научных проектов школьников (Дарын)",
      kk: "Оқушылардың республикалық ғылыми жобалар байқауы (Дарын)",
      en: "Daryn Republican Scientific Research Projects Competition"
    },
    organization: "РНПЦ «Дарын»",
    category: "research",
    directions: ["stem", "environmental_science", "humanities", "social_sciences"],
    description: {
      ru: "Официальный республиканский конкурс научно-исследовательских работ учащихся 8–11 классов по 16 научным секциям (физика, космос, экология, IT, история, лингвистика). Победители финала получают возможность представлять Казахстан на международном смотре ISEF в США и преимущества при поступлении в вузы.",
      kk: "8–11 сынып оқушылары арасындағы 16 ғылыми секция бойынша республикалық ғылыми жобалар байқауы. Финал жеңімпаздары АҚШ-та өтетін халықаралық ISEF көрмесіне қатысуға жолдама алып, ЖОО гранттарына ие болады.",
      en: "Kazakhstan's official pre-college scientific research competition for grades 8–11 across 16 fields. Top winners represent Kazakhstan at Regeneron ISEF in the United States and earn state university scholarships."
    },
    summary: {
      ru: "Главный конкурс школьных научных исследований в Казахстане с отбором на мировой финал ISEF.",
      kk: "ISEF әлемдік финалына іріктейтін 8–11 сынып оқушыларының басты ғылыми жобалар байқауы.",
      en: "National science research competition for grades 8–11 qualifying winners for Regeneron ISEF in the US."
    },
    requirements_checklist: {
      ru: ["Ученик 8–11 класса", "Самостоятельное исследование или инженерный проект с научным руководителем", "Подача паспорта проекта и прохождение защиты на областном этапе"],
      kk: ["8–11 сынып оқушысы", "Ғылыми жетекшімен бірге дайындалған зерттеу немесе инженерлік жоба", "Жоба паспортын тапсыру және облыстық қорғаудан өту"],
      en: ["Grades 8–11 student", "Original research paper or engineering project with supervisor", "Project passport submission and defense"]
    },
    official_url: "https://daryn.kz",
    source_url: "https://daryn.kz",
    cost_type: "free",
    cost_amount: null,
    cost_currency: null,
    format: "offline",
    location: "Kazakhstan",
    min_grade: 8,
    max_grade: 11,
    min_age: 14,
    max_age: 18,
    eligibility_countries: ["KZ"],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Открыто для всех школьников Казахстана.",
    language_requirements: ["kk", "ru"],
    deadline_type: "fixed",
    deadline_date: "2026-11-25",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по положению РНПЦ «Дарын». Областной тур проходит в ноябре-декабре."
  },
  {
    id: "astana-hub-teen-preincubator-2027",
    slug: "astana-hub-teen-preincubator-2027",
    title: {
      ru: "Подростковый IT-инкубатор Astana Hub (Teen Pre-Incubator)",
      kk: "Astana Hub жасөспірімдер IT-инкубаторы (Teen Pre-Incubator)",
      en: "Astana Hub Teen Tech Pre-Incubator"
    },
    organization: "Astana Hub (Международный технопарк IT-стартапов)",
    category: "entrepreneurship",
    directions: ["entrepreneurship", "computer_science", "ai"],
    description: {
      ru: "Бесплатная образовательная программа для подростков 14–18 лет, желающих запустить собственный технологический стартап. Участники изучают валидацию идей, создание прототипа (MVP), юнит-экономику и питчинг перед венчурными инвесторами и трекерами технопарка.",
      kk: "Өздерінің технологиялық стартаптарын бастағысы келетін 14–18 жастағы жасөспірімдерге арналған тегін бағдарлама. Қатысушылар идеяны тексеруді, MVP прототипін жасауды және инвесторлар алдында қорғауды үйренеді.",
      en: "Free tech startup pre-incubation program for teenagers aged 14–18 hosted by Astana Hub. Covers idea validation, rapid prototyping (MVP), product marketing, and pitch preparation for angel investors."
    },
    summary: {
      ru: "Бесплатный подростковый стартап-акселератор в Astana Hub: создание своего MVP и питч инвесторам.",
      kk: "Astana Hub ұйымдастырған тегін стартап-бағдарлама: MVP жасау және инвесторларға қорғау.",
      en: "Free teen startup pre-incubator at Astana Hub: build an MVP and pitch to real tech investors."
    },
    requirements_checklist: {
      ru: ["Возраст от 14 до 18 лет", "Наличие идеи технологического продукта или готового прототипа", "Команда от 1 до 4 человек"],
      kk: ["14 пен 18 жас аралығы", "Технологиялық өнім идеясы немесе дайын прототиптің болуы", "1-ден 4 адамға дейінгі команда"],
      en: ["Ages 14–18", "Tech startup idea or prototype", "Team of 1 to 4 youth founders"]
    },
    official_url: "https://astanahub.com",
    source_url: "https://astanahub.com",
    cost_type: "free",
    cost_amount: null,
    cost_currency: null,
    format: "hybrid",
    location: "Astana, Kazakhstan & Online",
    min_grade: 8,
    max_grade: 12,
    min_age: 14,
    max_age: 18,
    eligibility_countries: ["KZ", "KG", "UZ"],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Открыто для школьников и студентов колледжей Казахстана и Центральной Азии.",
    language_requirements: ["ru", "en"],
    deadline_type: "rolling",
    deadline_date: "2027-02-28",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по официальным программам Astana Hub Academy."
  },
  {
    id: "alem-school-coding-bootcamp-2027",
    slug: "alem-school-coding-bootcamp-2027",
    title: {
      ru: "Интенсив по программированию alem school для молодежи",
      kk: "Жастарға арналған alem school бағдарламалау қарқынды курсы",
      en: "alem School Youth Peer-to-Peer Coding Intensive"
    },
    organization: "alem School (Astana)",
    category: "summer_school",
    directions: ["computer_science", "ai", "stem"],
    description: {
      ru: "Бесплатная образовательная программа на базе методики peer-to-peer (обучение равный равному без учителей и оценок) в Астане. Участники с 16 лет решают практические алгоритмические задачи, создают веб-сервисы и погружаются в практическую разработку ПО.",
      kk: "Астана қаласындағы мұғалімдерсіз және бағалаусыз өтетін заманауи peer-to-peer бағдарламалау мектебі. 16 жастан асқан жастар практикалық алгоритмдерді шешіп, веб-сервистер жасайды.",
      en: "Free peer-to-peer coding intensive for youth aged 16+ at alem school in Astana. Based on the 01Edu model, students learn full-stack development, software engineering, and algorithms through project collaboration."
    },
    summary: {
      ru: "Бесплатная школа программирования по методике 01Edu в Астане для молодежи от 16 лет.",
      kk: "16 жастан асқан жастарға арналған Астанадағы тегін peer-to-peer бағдарламалау мектебі.",
      en: "Free peer-to-peer programming intensive in Astana for students aged 16+ using the 01Edu model."
    },
    requirements_checklist: {
      ru: ["Возраст 16 лет и старше", "Прохождение онлайн-игр на логику и память на платформе", "Готовность посещать очный интенсив («Бассейн») в Астане"],
      kk: ["16 жас және одан үлкен", "Платформадағы логика мен есте сақтау ойындарын сәтті тапсыру", "Астанадағы офлайн қарқынды курсқа қатысуға дайын болу"],
      en: ["Age 16 or older", "Pass online logic and memory entrance games", "Commitment to on-site intensive in Astana"]
    },
    official_url: "https://alem.school",
    source_url: "https://alem.school",
    cost_type: "free",
    cost_amount: null,
    cost_currency: null,
    format: "offline",
    location: "Astana, Kazakhstan",
    min_grade: 10,
    max_grade: 12,
    min_age: 16,
    max_age: 18,
    eligibility_countries: ["KZ"],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Открыто для проживающих в Казахстане.",
    language_requirements: ["ru", "en"],
    deadline_type: "rolling",
    deadline_date: null,
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по официальному сайту alem.school. Бесплатное обучение."
  },
  {
    id: "kaznu-junior-science-lab-2027",
    slug: "kaznu-junior-science-lab-2027",
    title: {
      ru: "Юношеская научная лаборатория КазНУ им. аль-Фараби",
      kk: "Әл-Фараби атындағы ҚазҰУ жас ғалымдар зертханасы",
      en: "Al-Farabi KazNU Junior Science Research Lab"
    },
    organization: "Казахский национальный университет имени аль-Фараби",
    category: "research",
    directions: ["stem", "environmental_science", "medicine"],
    description: {
      ru: "Практическая научная стажировка для школьников 9–11 классов в университетских научно-исследовательских лабораториях КазНУ в Алматы по биоинженерии, органической химии, экологии и нанотехнологиям.",
      kk: "Алматы қаласындағы ҚазҰУ ғылыми-зерттеу зертханаларында 9–11 сынып оқушыларына арналған биоинженерия, химия және экология бағыттарындағы практикалық ғылыми тәжірибе.",
      en: "Hands-on university lab research internship for secondary students in grades 9–11 at Al-Farabi KazNU laboratories in Almaty, focusing on biotechnology, green chemistry, and nanotechnology."
    },
    summary: {
      ru: "Научная практика в лабораториях КазНУ в Алматы по биотехнологиям, химии и экологии для 9–11 классов.",
      kk: "Алматыдағы ҚазҰУ зертханаларында 9–11 сыныптар үшін биология, химия және нанотехнологиядан ғылыми тәжірибе.",
      en: "University laboratory science research internship at KazNU in Almaty for grades 9–11."
    },
    requirements_checklist: {
      ru: ["Учащийся 9–11 классов", "Интерес к химии, биологии или экологии", "Мотивационное письмо и рекомендация учителя естественно-научных дисциплин"],
      kk: ["9–11 сынып оқушысы", "Химия, биология немесе экология пәндеріне қызығушылық", "Мотивациялық хат және пән мұғалімінің ұсынысы"],
      en: ["Grades 9–11 student", "Interest in biological, chemical, or environmental sciences", "Teacher recommendation letter"]
    },
    official_url: "https://kaznu.kz",
    source_url: "https://kaznu.kz",
    cost_type: "free",
    cost_amount: null,
    cost_currency: null,
    format: "offline",
    location: "Almaty, Kazakhstan",
    min_grade: 9,
    max_grade: 11,
    min_age: 14,
    max_age: 18,
    eligibility_countries: ["KZ"],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Открыто для школьников Алматы и близлежащих регионов.",
    language_requirements: ["kk", "ru"],
    deadline_type: "annual_estimate",
    deadline_date: "2027-04-15",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по данным департамента науки КазНУ."
  },
  {
    id: "nis-science-projects-fair-2027",
    slug: "nis-science-projects-fair-2027",
    title: {
      ru: "Сетевой конкурс научных проектов NIS (Назарбаев Интеллектуальные Школы)",
      kk: "НЗМ (Назарбаев Зияткерлік мектептері) желілік ғылыми жобалар байқауы",
      en: "Nazarbayev Intellectual Schools (NIS) Annual Science Fair"
    },
    organization: "АОО «Назарбаев Интеллектуальные школы»",
    category: "research",
    directions: ["stem", "robotics", "ai", "environmental_science"],
    description: {
      ru: "Масштабный ежегодный научно-практический смотр исследовательских и инженерных разработок учащихся Интеллектуальных школ и приглашенных общеобразовательных школ по математическому моделированию, физике, технике и гуманитарным наукам.",
      kk: "Назарбаев Зияткерлік мектептері мен серіктес мектептер оқушыларының математика, физика, инженерия және қоғамдық ғылымдар бойынша жыл сайынғы ғылыми зерттеулер байқауы.",
      en: "Flagship annual pre-college science and engineering fair organized by Nazarbayev Intellectual Schools (NIS) for innovative student research in math modeling, applied physics, and robotics."
    },
    summary: {
      ru: "Сетевой научный конкурс исследовательских и инженерных проектов NIS с участием внешних школ.",
      kk: "НЗМ желілік ғылыми зерттеулер мен инженерлік жобалар байқауы.",
      en: "Annual science and engineering research fair hosted by Nazarbayev Intellectual Schools."
    },
    requirements_checklist: {
      ru: ["Ученик 8–12 классов системы NIS или школ-партнеров", "Готовая исследовательская работа с результатами экспериментов", "Презентация и постерный доклад"],
      kk: ["НЗМ немесе серіктес мектептердің 8–12 сынып оқушысы", "Тәжірибелік нәтижелері бар ғылыми жұмыс", "Презентация және постерлік баяндама"],
      en: ["Grades 8–12 student at NIS or affiliate partner school", "Completed scientific study with experimental data", "Poster presentation"]
    },
    official_url: "https://nis.edu.kz",
    source_url: "https://nis.edu.kz",
    cost_type: "free",
    cost_amount: null,
    cost_currency: null,
    format: "offline",
    location: "Astana / Regional NIS Hubs",
    min_grade: 8,
    max_grade: 12,
    min_age: 14,
    max_age: 18,
    eligibility_countries: ["KZ"],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Для учащихся NIS и аккредитованных школ-партнеров.",
    language_requirements: ["kk", "ru", "en"],
    deadline_type: "annual_estimate",
    deadline_date: "2027-01-20",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по официальному регламенту NIS. Проводится зимой."
  },
  {
    id: "camun-model-united-nations-2027",
    slug: "camun-model-united-nations-2027",
    title: {
      ru: "Центрально-Азиатская Модель ООН для школьников (CAMUN)",
      kk: "Оқушыларға арналған Орталық Азия БҰҰ Моделі (CAMUN)",
      en: "Central Asian Model United Nations for High Schools (CAMUN)"
    },
    organization: "CAMUN Secretariat / UN Information Centre",
    category: "competition",
    directions: ["leadership", "social_sciences", "humanities"],
    description: {
      ru: "Международная дипломатическая ролевая игра для старшеклассников, моделирующая работу комитетов Организации Объединенных Наций (Совет Безопасности, ЮНЕСКО, ЭКОСОС). Участники выступают в роли делегатов стран и разрабатывают резолюции глобальных кризисов.",
      kk: "Жоғары сынып оқушыларына арналған БҰҰ комитеттерінің жұмысын көрсететін халықаралық дипломатиялық ойын. Қатысушылар түрлі мемлекеттердің делегаттары ретінде жаһандық мәселелердің қарарларын дайындайды.",
      en: "International diplomatic simulation conference for secondary school students modeling UN committees (Security Council, UNESCO, WHO, ECOSOC). Delegates draft and debate resolutions on global crises."
    },
    summary: {
      ru: "Дипломатическая конференция Модели ООН в Алматы: дебаты, международные отношения и резолюции.",
      kk: "Алматыдағы БҰҰ Моделі дипломатиялық конференциясы: дебаттар, халықаралық қатынастар және қарарлар.",
      en: "Diplomatic Model UN conference in Almaty: debate international policies and draft resolutions."
    },
    requirements_checklist: {
      ru: ["Ученик 8–11 классов", "Свободное владение английским языком", "Позиционный документ (Position Paper) по назначенной стране"],
      kk: ["8–11 сынып оқушысы", "Ағылшын тілін еркін меңгеру", "Берілген ел бойынша позициялық құжат (Position Paper) дайындау"],
      en: ["Grades 8–11 student", "Fluent English", "Country position paper submission"]
    },
    official_url: "https://camun.kz",
    source_url: "https://camun.kz",
    cost_type: "paid",
    cost_amount: 15000,
    cost_currency: "KZT",
    format: "offline",
    location: "Almaty, Kazakhstan",
    min_grade: 8,
    max_grade: 11,
    min_age: 14,
    max_age: 18,
    eligibility_countries: ["KZ", "KG", "UZ", "TJ"],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Открыто для школьников Центральной Азии.",
    language_requirements: ["en"],
    deadline_type: "fixed",
    deadline_date: "2027-02-15",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по официальному регламенту оргкомитета CAMUN."
  },
  {
    id: "technovation-girls-kazakhstan-2027",
    slug: "technovation-girls-kazakhstan-2027",
    title: {
      ru: "Technovation Girls Казахстан (технологическое предпринимательство для девушек)",
      kk: "Technovation Girls Қазақстан (қыздарға арналған технологиялық кәсіпкерлік)",
      en: "Technovation Girls Kazakhstan Chapter"
    },
    organization: "Technovation Global & Kazakhstan Regional Ambassadors",
    category: "competition",
    directions: ["computer_science", "entrepreneurship", "ai", "social_sciences"],
    description: {
      ru: "Казахстанское отделение крупнейшей в мире международной программы технологического предпринимательства для девушек в возрасте от 8 до 18 лет. Команды девушек при поддержке менторов разрабатывают мобильное приложение или ИИ-прототип для решения актуальной социальной или экологической проблемы своего сообщества.",
      kk: "8 бен 18 жас аралығындағы қыздарға арналған әлемдегі ең ірі халықаралық технологиялық бағдарламаның Қазақстандағы бөлімі. Қатысушылар менторлармен бірге өз өңірінің мәселелерін шешетін мобильді қосымша немесе ЖИ жобасын жасайды.",
      en: "Kazakhstan chapter of the world's largest tech entrepreneurship program for girls ages 8–18. Teams work with volunteer industry mentors to build a mobile app or AI prototype addressing UN Sustainable Development Goals."
    },
    summary: {
      ru: "Международная IT-программа для школьниц: создание полезного приложения или ИИ с ментором.",
      kk: "Қыздарға арналған халықаралық IT-бағдарлама: ментормен бірге пайдалы қосымша немесе ЖИ жасау.",
      en: "Global tech & business challenge for girls 8–18: build mobile apps and AI solutions with mentors."
    },
    requirements_checklist: {
      ru: ["Девушки в возрасте от 13 до 18 лет (категории Junior и Senior)", "Команда от 1 до 5 участниц", "Разработка прототипа приложения, бизнес-плана и питч-видео"],
      kk: ["13 пен 18 жас аралығындағы қыздар (Junior және Senior санаттары)", "1-ден 5 қатысушыға дейінгі команда", "Қосымша прототипі, бизнес-жоспар және бейнепрезентация дайындау"],
      en: ["Female students ages 13–18", "Team of 1 to 5 girls", "Mobile app/AI prototype, business pitch, and code repository"]
    },
    official_url: "https://technovationchallenge.org",
    source_url: "https://technovationchallenge.org",
    cost_type: "free",
    cost_amount: null,
    cost_currency: null,
    format: "online",
    location: "Kazakhstan & Global",
    min_grade: 7,
    max_grade: 12,
    min_age: 13,
    max_age: 18,
    eligibility_countries: ["KZ"],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Открыто для девушек-школьниц из Казахстана.",
    language_requirements: ["en", "ru"],
    deadline_type: "fixed",
    deadline_date: "2027-03-20",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по официальному календарю Technovation 2027. Регистрация команд открыта."
  },
  {
    id: "wro-kazakhstan-robotics-2027",
    slug: "wro-kazakhstan-robotics-2027",
    title: {
      ru: "Национальная олимпиада по робототехнике WRO Казахстан",
      kk: "WRO Қазақстан ұлттық робототехника олимпиадасы",
      en: "World Robot Olympiad (WRO) Kazakhstan National Finals"
    },
    organization: "WRO Kazakhstan / АОО «НИШ»",
    category: "competition",
    directions: ["robotics", "stem", "computer_science"],
    description: {
      ru: "Официальный отборочный этап Всемирной олимпиады роботов (WRO) в Казахстане. Соревнования проходят в категориях RoboMission (автономные роботы на полигоне), Future Innovators (научно-инженерные инновационные проекты) и RoboSports.",
      kk: "Дүниежүзілік роботтар олимпиадасының (WRO) Қазақстандағы ресми іріктеу кезеңі. Жарыстар RoboMission, Future Innovators және RoboSports санаттары бойынша өткізіледі.",
      en: "Official Kazakhstan qualifier for the World Robot Olympiad (WRO). High school teams compete in RoboMission (autonomous field robotics), Future Innovators (scientific engineering projects), and RoboSports."
    },
    summary: {
      ru: "Главный чемпионат Казахстана по робототехнике с отбором на мировой финал World Robot Olympiad.",
      kk: "WRO әлемдік финалына жолдама беретін робототехникадан Қазақстанның басты чемпионаты.",
      en: "Official Kazakhstan national robotics championship qualifying teams for World Robot Olympiad."
    },
    requirements_checklist: {
      ru: ["Школьники в возрасте от 13 до 18 лет в составе команды (2–3 человека)", "Наличие тренера-наставника", "Собранный и запрограммированный робот согласно регламенту сезона"],
      kk: ["13 пен 18 жас аралығындағы оқушылардан құралған команда (2–3 адам)", "Жетекші бапкердің болуы", "Маусым ережелеріне сәйкес жасалған және бағдарламаланған робот"],
      en: ["Students ages 13–18 in teams of 2–3", "Adult team coach", "Assembled and programmed robot compliant with season rules"]
    },
    official_url: "https://wro.kz",
    source_url: "https://wro.kz",
    cost_type: "paid",
    cost_amount: 25000,
    cost_currency: "KZT",
    format: "offline",
    location: "Astana / Almaty, Kazakhstan",
    min_grade: 7,
    max_grade: 11,
    min_age: 13,
    max_age: 18,
    eligibility_countries: ["KZ"],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Для команд школьников из Казахстана.",
    language_requirements: ["ru", "kk", "en"],
    deadline_type: "annual_estimate",
    deadline_date: "2027-05-01",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по регламенту WRO Kazakhstan."
  },
  {
    id: "euler-math-olympiad-kz-2027",
    slug: "euler-math-olympiad-kz-2027",
    title: {
      ru: "Математическая олимпиада имени Леонарда Эйлера для 7–8 классов",
      kk: "7–8 сыныптарға арналған Леонард Эйлер атындағы математикалық олимпиада",
      en: "Leonard Euler Mathematics Olympiad for Grades 7–8"
    },
    organization: "РНПЦ «Дарын»",
    category: "competition",
    directions: ["mathematics", "stem"],
    description: {
      ru: "Престижная математическая олимпиада для учащихся 7–8 классов, эквивалентная по сложности и формату заключительному этапу всероссийской и республиканской олимпиад для старших классов. Служит главным трамплином в олимпийский резерв национальной сборной Казахстана.",
      kk: "7–8 сынып оқушыларына арналған жоғары деңгейлі математикалық олимпиада. Қазақстанның олимпиадалық ұлттық құрамасының резервіне өтудің негізгі бастамасы болып табылады.",
      en: "Premier mathematics competition designed specifically for advanced 7th and 8th graders, mirroring the rigor of national senior olympiads and serving as the feeder to Kazakhstan's international IMO pipeline."
    },
    summary: {
      ru: "Сложнейшая олимпиада по математике для 7–8 классов, путь в сборную Казахстана на мировую IMO.",
      kk: "7–8 сыныптарға арналған беделді математикалық олимпиада, ұлттық құрамаға жолдама.",
      en: "Prestigious mathematics competition for grades 7–8 feeding into Kazakhstan's national olympiad team."
    },
    requirements_checklist: {
      ru: ["Учащийся 7 или 8 класса", "Успешное участие в дистанционном или региональном этапе", "Регистрация на платформе Дарын"],
      kk: ["7 немесе 8 сынып оқушысы", "Қашықтық немесе аймақтық кезеңнен сәтті өту", "Дарын платформасында тіркелу"],
      en: ["Enrolled in grade 7 or 8", "Passing score in preliminary regional round", "Registration via Daryn"]
    },
    official_url: "https://daryn.kz",
    source_url: "https://smart.daryn.kz",
    cost_type: "free",
    cost_amount: null,
    cost_currency: null,
    format: "offline",
    location: "Kazakhstan",
    min_grade: 7,
    max_grade: 8,
    min_age: 13,
    max_age: 15,
    eligibility_countries: ["KZ"],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Открыто для школьников Казахстана.",
    language_requirements: ["ru", "kk"],
    deadline_type: "fixed",
    deadline_date: "2026-11-30",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по регламенту олимпиады Эйлера."
  },
  {
    id: "silkway-math-olympiad-2027",
    slug: "silkway-math-olympiad-2027",
    title: {
      ru: "Международная олимпиада «Шелковый путь» по математике (Silk Road Math)",
      kk: "«Жібек жолы» халықаралық математикалық олимпиадасы",
      en: "Silk Road International Mathematical Olympiad"
    },
    organization: "Оргкомитет олимпиады «Шелковый путь» / Дарын",
    category: "competition",
    directions: ["mathematics", "stem"],
    description: {
      ru: "Заочная международная математическая олимпиада высшего уровня сложности для школьников стран Шелкового пути и Центральной Азии. Проводится одновременно в национальных центрах стран-участниц по единым заданиям.",
      kk: "Жібек жолы елдері мен Орталық Азия оқушыларына арналған жоғары деңгейдегі халықаралық сырттай математикалық олимпиада. Қатысушы елдердің ұлттық орталықтарында бір уақытта өткізіледі.",
      en: "High-level international written mathematics competition conducted simultaneously across participating Silk Road and Central Asian nations, testing advanced geometry, number theory, and combinatorics."
    },
    summary: {
      ru: "Международная олимпиада по высшей школьной математике для сборных стран Шелкового пути.",
      kk: "Жібек жолы елдерінің мектеп құрамаларына арналған халықаралық математика олимпиадасы.",
      en: "Elite international mathematics competition for national math talents across Silk Road countries."
    },
    requirements_checklist: {
      ru: ["Учащийся 9–11 класса", "Членство в олимпийском резерве по математике или диплом республиканской олимпиады", "Очное написание тура в аккредитованном центре"],
      kk: ["9–11 сынып оқушысы", "Математикадан олимпиадалық резерв мүшесі немесе республикалық жүлдегер", "Аккредиттелген орталықта жазбаша турдан өту"],
      en: ["Grades 9–11 student", "National math olympiad winner or national team reserve member", "In-person proctored exam"]
    },
    official_url: "https://daryn.kz",
    source_url: "https://daryn.kz",
    cost_type: "free",
    cost_amount: null,
    cost_currency: null,
    format: "offline",
    location: "Almaty / Astana, Kazakhstan",
    min_grade: 9,
    max_grade: 11,
    min_age: 14,
    max_age: 18,
    eligibility_countries: ["KZ", "UZ", "KG", "TJ", "AZ"],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Для школьников стран-участниц олимпиады.",
    language_requirements: ["ru", "en"],
    deadline_type: "annual_estimate",
    deadline_date: "2027-03-10",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по регламенту олимпиад РНПЦ «Дарын»."
  },
  {
    id: "red-crescent-kazakhstan-volunteers-2027",
    slug: "red-crescent-kazakhstan-volunteers-2027",
    title: {
      ru: "Молодежное волонтерское движение Красного Полумесяца Казахстана",
      kk: "Қазақстан Қызыл Жарты Ай жастар еріктілер қозғалысы",
      en: "Red Crescent Kazakhstan Youth Volunteer Corps"
    },
    organization: "Общество Красного Полумесяца Республики Казахстан",
    category: "volunteering",
    directions: ["social_sciences", "leadership", "medicine"],
    description: {
      ru: "Официальное волонтерское движение для подростков и молодежи от 14 лет. Участники проходят сертифицированные тренинги по оказанию первой доврачебной помощи, участвуют в благотворительных акциях, организации донорства и поддержке уязвимых групп населения по всему Казахстану.",
      kk: "14 жастан асқан жасөспірімдер мен жастарға арналған ресми еріктілер қозғалысы. Қатысушылар алғашқы көмек көрсету бойынша сертификатталған тренингтерден өтіп, қайырымдылық шараларына қатысады.",
      en: "Official youth humanitarian volunteer corps for teenagers aged 14+ across Kazakhstan. Volunteers receive certified first-aid training and lead community health, emergency response, and social care initiatives."
    },
    summary: {
      ru: "Сертифицированное волонтерство для школьников от 14 лет: обучение первой помощи и социальные проекты.",
      kk: "14 жастан асқан оқушыларға арналған ресми еріктілік: алғашқы көмекке үйрену және қайырымдылық жобалары.",
      en: "Certified humanitarian volunteering for teens 14+: first aid training and community social projects."
    },
    requirements_checklist: {
      ru: ["Возраст от 14 лет", "Согласие родителей для несовершеннолетних", "Готовность уделять от 2 часов в неделю общественной деятельности"],
      kk: ["14 жастан бастап", "Кәмелетке толмағандар үшін ата-анасының келісімі", "Аптасына кемінде 2 сағат уақыт бөлуге дайын болу"],
      en: ["Age 14 or older", "Parental consent for minors", "Commitment of at least 2 hours per week"]
    },
    official_url: "https://redcrescent.kz",
    source_url: "https://redcrescent.kz",
    cost_type: "free",
    cost_amount: null,
    cost_currency: null,
    format: "offline",
    location: "All regions of Kazakhstan",
    min_grade: 8,
    max_grade: 12,
    min_age: 14,
    max_age: 18,
    eligibility_countries: ["KZ"],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Открыто во всех филиалах Красного Полумесяца в Казахстане.",
    language_requirements: ["ru", "kk"],
    deadline_type: "rolling",
    deadline_date: null,
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по официальному порталу redcrescent.kz. Набор круглогодичный."
  },
  {
    id: "zhas-project-youth-grants-2027",
    slug: "zhas-project-youth-grants-2027",
    title: {
      ru: "Проект развития молодежного корпуса Zhas Project (микрогранты)",
      kk: "Zhas Project жастар корпусын дамыту жобасы (шағын гранттар)",
      en: "Zhas Project Youth Community Microgrants"
    },
    organization: "Министерство культуры и информации РК / Центр поддержки гражданских инициатив",
    category: "entrepreneurship",
    directions: ["leadership", "social_sciences", "entrepreneurship"],
    description: {
      ru: "Государственная программа малых безвозмездных грантов (до 1 000 000 тенге) для молодежи от 18 лет (и старших школьников в составе команд) на реализацию социальных и общественных инициатив в регионах Казахстана.",
      kk: "Қазақстан өңірлерінде әлеуметтік және қоғамдық бастамаларды жүзеге асыру үшін жастарға арналған мемлекеттік қайтарымсыз шағын гранттар (1 000 000 теңгеге дейін) бағдарламасы.",
      en: "State social microgrant program in Kazakhstan providing non-repayable grants (up to 1,000,000 KZT) for youth-led local community improvement and social enterprise projects."
    },
    summary: {
      ru: "Безвозмездные микрогранты до 1 000 000 тенге на социальные проекты в регионах Казахстана.",
      kk: "Қазақстан өңірлеріндегі әлеуметтік жобаларға 1 000 000 теңгеге дейінгі қайтарымсыз гранттар.",
      en: "Youth community microgrants up to 1,000,000 KZT for grassroots social initiatives in Kazakhstan."
    },
    requirements_checklist: {
      ru: ["Молодежь в возрасте 18 лет (или старшеклассники под кураторством совершеннолетнего лидера)", "Проживание в целевом регионе конкурса", "Готовый план социального проекта, направленный на решение локальной проблемы"],
      kk: ["18 жастағы жастар (немесе ересек жетекшісі бар оқушылар командасы)", "Байқау өтетін мақсатты өңірде тұру", "Жергілікті мәселені шешуге бағытталған әлеуметтік жоба жоспары"],
      en: ["Ages 18 or high school seniors with an adult lead", "Residency in participating region", "Actionable community improvement plan"]
    },
    official_url: "https://zhasproject.kz",
    source_url: "https://zhasproject.kz",
    cost_type: "stipend",
    cost_amount: 1000000,
    cost_currency: "KZT",
    format: "offline",
    location: "Kazakhstan",
    min_grade: 11,
    max_grade: 12,
    min_age: 17,
    max_age: 18,
    eligibility_countries: ["KZ"],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Для граждан Республики Казахстан.",
    language_requirements: ["kk", "ru"],
    deadline_type: "annual_estimate",
    deadline_date: "2027-05-30",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по официальному регламенту zhasproject.kz."
  }
];
