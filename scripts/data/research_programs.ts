import { OpportunityContract } from './types';

export const RESEARCH_PROGRAMS: OpportunityContract[] = [
  {
    id: "pioneer-academics-research-2027",
    slug: "pioneer-academics-research-2027",
    title: {
      ru: "Академическая исследовательская программа Pioneer Academics",
      kk: "Pioneer Academics халықаралық академиялық зерттеу бағдарламасы",
      en: "Pioneer Academics Accredited Research Program"
    },
    organization: "Pioneer Academics & Oberlin College",
    category: "research",
    directions: ["stem", "humanities", "social_sciences", "medicine"],
    description: {
      ru: "Единственная в мире аккредитованная онлайн-программа научных исследований для старшеклассников (9–12 классы) с получением университетских кредитов колледжа Oberlin. Ученики проводят глубокое исследование один на один с профессорами ведущих американских университетов и пишут научную статью бакалаврского уровня.",
      kk: "Oberlin колледжінің ресми университет кредиттерін беретін жоғары сынып оқушыларына арналған аккредиттелген онлайн зерттеу бағдарламасы. Оқушылар АҚШ университеттерінің профессорларымен жеке ғылыми жұмыс жазып, мақала дайындайды.",
      en: "The only fully accredited online research program for high school students granting US college credits. Selected students conduct rigorous undergraduate-level research under individual mentorship from leading US university faculty across 30 disciplines."
    },
    summary: {
      ru: "Аккредитованная программа научных исследований 1 на 1 с профессорами США с получением кредитов Oberlin College.",
      kk: "АҚШ профессорларымен жеке ғылыми зерттеу жүргізу және ресми университет кредиттерін алу бағдарламасы.",
      en: "Accredited online research mentorship with US university faculty granting Oberlin College credits."
    },
    requirements_checklist: {
      ru: ["Ученик 9–12 классов", "Высокая академическая успеваемость и отличный английский язык", "Прохождение стандартизированного теста Pioneer и развернутого видео-собеседования"],
      kk: ["9–12 сынып оқушысы", "Жоғары академиялық үлгерім және ағылшын тілін еркін білу", "Pioneer арнайы тесті мен бейнесұхбаттан сәтті өту"],
      en: ["Grades 9–12 student", "Academic excellence and fluent English", "Proctored writing session and video interview"]
    },
    official_url: "https://pioneeracademics.com",
    source_url: "https://pioneeracademics.com",
    cost_type: "paid",
    cost_amount: 6450,
    cost_currency: "USD",
    format: "online",
    location: "Global / Online",
    min_grade: 9,
    max_grade: 12,
    min_age: 14,
    max_age: 18,
    eligibility_countries: [],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Открыто для школьников со всего мира. Предоставляется финансовая помощь (need-based scholarships).",
    language_requirements: ["en"],
    deadline_type: "fixed",
    deadline_date: "2026-12-18",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по pioneeracademics.com. Доступна полная финансовая помощь."
  },
  {
    id: "polygence-research-mentorship-2027",
    slug: "polygence-research-mentorship-2027",
    title: {
      ru: "Индивидуальная научная менторская программа Polygence",
      kk: "Polygence жеке ғылыми зерттеу тәлімгерлік бағдарламасы",
      en: "Polygence 1-on-1 Research Mentorship Program"
    },
    organization: "Polygence",
    category: "research",
    directions: ["stem", "humanities", "social_sciences", "computer_science"],
    description: {
      ru: "10-недельная индивидуальная исследовательская программа для школьников 13–18 лет под руководством исследователей и докторантов (PhD) из Гарварда, MIT, Стэнфорда и других ведущих вузов. Результат: готовая научная статья, рецензируемая публикация или патент.",
      kk: "Гарвард, MIT, Стэнфорд докторанттарының (PhD) жетекшілігімен 13–18 жастағы оқушыларға арналған 10 апталық зерттеу бағдарламасы. Нәтиже: ғылыми мақала жариялау немесе патент.",
      en: "Ten-week personalized research mentorship program pairing motivated high school students with PhD researchers from top universities (Harvard, MIT, Stanford, etc.) to produce publication-grade papers or inventive prototypes."
    },
    summary: {
      ru: "10-недельное исследование один на один с ментором PhD из Гарварда или Стэнфорда с публикацией статьи.",
      kk: "Гарвард немесе Стэнфорд PhD ғалымдарымен жеке зерттеу және ғылыми журналға мақала шығару.",
      en: "1-on-1 personalized research mentorship with top PhD academics culminating in a publication."
    },
    requirements_checklist: {
      ru: ["Возраст от 13 до 18 лет", "Четкая исследовательская тема или вопрос", "Заполнение заявки и собеседование с академическим координатором"],
      kk: ["13 пен 18 жас аралығы", "Нақты ғылыми тақырып немесе қызығушылық саласы", "Өтініш беру және академиялық үйлестірушімен сұхбат"],
      en: ["Ages 13–18", "Defined research interest or inquiry", "Application submission and academic interview"]
    },
    official_url: "https://www.polygence.org",
    source_url: "https://www.polygence.org",
    cost_type: "paid",
    cost_amount: 2795,
    cost_currency: "USD",
    format: "online",
    location: "Global / Online",
    min_grade: 8,
    max_grade: 12,
    min_age: 13,
    max_age: 18,
    eligibility_countries: [],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Открыто по всему миру. Доступны стипендии Polygence Financial Aid.",
    language_requirements: ["en"],
    deadline_type: "rolling",
    deadline_date: "2027-01-31",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по polygence.org. Набор на зимне-весеннюю когорту."
  },
  {
    id: "veritas-ai-fellowship-2027",
    slug: "veritas-ai-fellowship-2027",
    title: {
      ru: "Исследовательская программа по машинному обучению Veritas AI",
      kk: "Veritas AI машиналық оқыту және ЖИ зерттеу бағдарламасы",
      en: "Veritas AI Fellowship & Research Program"
    },
    organization: "Veritas AI",
    category: "research",
    directions: ["ai", "computer_science", "stem"],
    description: {
      ru: "Академическая программа по искусственному интеллекту и науке о данных для школьников 9–12 классов, созданная учеными Гарварда. Включает практику программирования на Python, построение моделей глубокого обучения и подготовку научной статьи в области ИИ.",
      kk: "Гарвард ғалымдары құрған 9–12 сынып оқушыларына арналған жасанды интеллект және мәліметтер ғылымы бағдарламасы. Python, терең оқыту модельдері және ЖИ бойынша ғылыми жұмыс дайындауды қамтиды.",
      en: "Rigorous high school artificial intelligence and machine learning research program founded and run by Harvard graduates. Students learn Python, neural networks, and computer vision, and execute a custom AI research paper under 1-on-1 PhD guidance."
    },
    summary: {
      ru: "Программа по созданию реальных моделей машинного обучения и написанию научной статьи по ИИ для 9–12 классов.",
      kk: "9–12 сыныптар үшін машиналық оқыту модельдерін жасау және ЖИ бойынша ғылыми мақала жазу бағдарламасы.",
      en: "AI and machine learning research fellowship for high schoolers guided 1-on-1 by Harvard/MIT researchers."
    },
    requirements_checklist: {
      ru: ["Ученик 8–12 классов", "Базовые навыки программирования (Python) или математическая подготовка", "Мотивационное эссе и анкета"],
      kk: ["8–12 сынып оқушысы", "Бағдарламалаудың (Python) немесе математиканың бастапқы негіздерін білу", "Мотивациялық эссе және сауалнама"],
      en: ["Grades 8–12 student", "Basic coding (Python) or quantitative aptitude", "Application essay and transcript"]
    },
    official_url: "https://www.veritasai.com",
    source_url: "https://www.veritasai.com",
    cost_type: "paid",
    cost_amount: 2200,
    cost_currency: "USD",
    format: "online",
    location: "Global / Online",
    min_grade: 8,
    max_grade: 12,
    min_age: 13,
    max_age: 18,
    eligibility_countries: [],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Доступно онлайн школьникам всех стран. Есть стипендии до 100%.",
    language_requirements: ["en"],
    deadline_type: "fixed",
    deadline_date: "2026-11-29",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по veritasai.com. Зимняя когорта 2026/2027."
  },
  {
    id: "lumiere-research-scholar-2027",
    slug: "lumiere-research-scholar-2027",
    title: {
      ru: "Программа научных исследований Lumiere Research Scholar",
      kk: "Lumiere Research Scholar ғылыми зерттеу бағдарламасы",
      en: "Lumiere Research Scholar Program"
    },
    organization: "Lumiere Education",
    category: "research",
    directions: ["stem", "humanities", "social_sciences", "medicine"],
    description: {
      ru: "12-недельная интенсивная научная программа для старшеклассников, в рамках которой каждый школьник работает индивидуально с исследователем из топ-вузов над написанием полноценной научной статьи для публикации в международных журналах.",
      kk: "Жоғары сынып оқушыларына арналған 12 апталық ғылыми бағдарлама. Әрбір оқушы халықаралық рецензияланатын журналға мақала дайындау үшін жетекші университеттердің ғалымымен жеке жұмыс істейді.",
      en: "Prestigious 12-week research program pairing motivated high school students with PhD researchers from elite universities to write an independent scientific research paper with targeted academic journal submission."
    },
    summary: {
      ru: "12 недель индивидуальной научной работы с PhD ментором с целью публикации в научном журнале.",
      kk: "Ғылыми журналға мақала шығару мақсатында PhD ғалымымен 12 апталық жеке зерттеу жұмысы.",
      en: "12-week independent research program with PhD mentors aimed at publication in peer-reviewed journals."
    },
    requirements_checklist: {
      ru: ["Учащийся 9–12 классов", "Академическая целеустремленность и академический английский", "Эссе с исследовательскими интересами и онлайн-интервью"],
      kk: ["9–12 сынып оқушысы", "Ғылыми мақсаткерлік және академиялық ағылшын тілі", "Зерттеу бағыты бойынша эссе және онлайн сұхбат"],
      en: ["Grades 9–12 student", "Academic rigor and fluency in written English", "Research proposal essay and admissions interview"]
    },
    official_url: "https://www.lumiere-education.com",
    source_url: "https://www.lumiere-education.com",
    cost_type: "paid",
    cost_amount: 2800,
    cost_currency: "USD",
    format: "online",
    location: "Global / Online",
    min_grade: 9,
    max_grade: 12,
    min_age: 14,
    max_age: 18,
    eligibility_countries: [],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Открыто по всему миру. Действует фонд финансовой помощи Lumiere Foundation.",
    language_requirements: ["en"],
    deadline_type: "fixed",
    deadline_date: "2026-11-22",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по lumiere-education.com."
  },
  {
    id: "mit-beaver-works-summer-2027",
    slug: "mit-beaver-works-summer-2027",
    title: {
      ru: "Летний инженерный институт MIT Beaver Works (BWSI)",
      kk: "MIT Beaver Works жазғы инженерлік институты (BWSI)",
      en: "MIT Beaver Works Summer Institute (BWSI)"
    },
    organization: "MIT Lincoln Laboratory & MIT School of Engineering",
    category: "research",
    directions: ["stem", "robotics", "ai", "computer_science"],
    description: {
      ru: "Трансформирующая 4-недельная инженерная программа для одаренных школьников (11 класс), организованная лабораторией MIT Lincoln Laboratory. Темы включают: автономные гоночные машинки (RACECAR), кибербезопасность, квантовые вычисления, ИИ для медицины. Участие в онлайн-курсах полностью бесплатное.",
      kk: "MIT Lincoln зертханасының дарынды 11-сынып оқушыларына арналған 4 апталық инженерлік бағдарламасы. Автономды RACECAR көліктері, киберқауіпсіздік, кванттық есептеулер және ЖИ бағыттарын тегін оқытады.",
      en: "Transformative 4-week STEM program for rising high school seniors hosted by MIT Lincoln Laboratory. Offers rigorous hands-on tracks including Autonomous RACECARs, Cyber Security, Quantum Software, and AI for Assistive Tech. Free prerequisite online courses."
    },
    summary: {
      ru: "Бесплатная инженерная программа MIT: автономные роботы, квантовые алгоритмы и машинное обучение.",
      kk: "MIT ұсынған тегін инженерлік бағдарлама: автономды роботтар, кванттық есептеулер және ЖИ.",
      en: "Free MIT engineering program teaching autonomous robotics, quantum computing, and applied AI."
    },
    requirements_checklist: {
      ru: ["Ученик 10–11 класса на момент подачи", "Прохождение бесплатных подготовительных онлайн-курсов MIT BWSI (Python, математика)", "Рекомендация преподавателя STEM"],
      kk: ["Өтініш беру кезінде 10–11 сынып оқушысы", "MIT BWSI тегін дайындық онлайн курстарын аяқтау (Python, математика)", "STEM пәні мұғалімінің ұсынысы"],
      en: ["Rising high school senior (grades 10–11)", "Completion of free BWSI prerequisite online modules", "STEM teacher recommendation"]
    },
    official_url: "https://beaverworks.ll.mit.edu",
    source_url: "https://beaverworks.ll.mit.edu/CMS/bw/bwsi",
    cost_type: "free",
    cost_amount: null,
    cost_currency: null,
    format: "online",
    location: "Online / Cambridge, MA, USA",
    min_grade: 10,
    max_grade: 11,
    min_age: 15,
    max_age: 18,
    eligibility_countries: [],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Виртуальные курсы и программа открыты для международных участников.",
    language_requirements: ["en"],
    deadline_type: "fixed",
    deadline_date: "2027-03-31",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по beaverworks.ll.mit.edu. Обучение бесплатное."
  },
  {
    id: "mit-rsi-research-science-institute-2027",
    slug: "mit-rsi-research-science-institute-2027",
    title: {
      ru: "Исследовательский научный институт RSI при MIT (Research Science Institute)",
      kk: "MIT жанындағы RSI ғылыми-зерттеу институты (Research Science Institute)",
      en: "Research Science Institute (RSI) at MIT"
    },
    organization: "Center for Excellence in Education (CEE) & MIT",
    category: "research",
    directions: ["stem", "physics", "mathematics", "medicine", "ai"],
    description: {
      ru: "Самая престижная в мире бесплатная 6-недельная летняя исследовательская программа для старшеклассников, проходящая на кампусе Массачусетского технологического института (MIT). Около 100 лучших школьников мира проводят оригинальные научные исследования под руководством ведущих ученых MIT и Гарварда.",
      kk: "MIT кампусында өтетін жоғары сынып оқушыларына арналған әлемдегі ең беделді тегін 6 апталық жазғы ғылыми зерттеу бағдарламасы. Әлемнің 100 үздік оқушысы MIT және Гарвард ғалымдарымен дербес ғылыми жұмыс жасайды.",
      en: "The world's most prestigious cost-free summer research program for high school rising seniors, hosted at the Massachusetts Institute of Technology (MIT). Selected scholars conduct individual research with premier scientists and present oral and written reports."
    },
    summary: {
      ru: "Самая селективная и престижная бесплатная 6-недельная научная программа в мире на кампусе MIT.",
      kk: "MIT кампусында өтетін әлемдегі ең беделді әрі таңдаулы тегін 6 апталық ғылыми зерттеу бағдарламасы.",
      en: "The world's most elite free high school research institute hosted at MIT for rising seniors."
    },
    requirements_checklist: {
      ru: ["Учащийся предпоследнего года школы (11 класс / rising senior)", "Выдающиеся академические показатели в математике и точных науках (олимпиады, публикации)", "Эссе, стандартизированные тесты (SAT/ACT/PSAT или олимпиадные дипломы), 3 рекомендации"],
      kk: ["Мектептің соңғы алдындағы сынып оқушысы (11 сынып)", "Математика мен жаратылыстану пәндерінен ерекше нәтижелер (олимпиадалар, ғылыми жұмыстар)", "Эссе, тест ұпайлары және 3 ұсыныс хат"],
      en: ["Rising high school senior (grades 10–11)", "Exceptional math and science record", "Standardized test scores (SAT/ACT/PSAT/Olympiads), essays, and 3 recommendations"]
    },
    official_url: "https://www.cee.org/programs/research-science-institute",
    source_url: "https://www.cee.org/programs/research-science-institute",
    cost_type: "fully_funded",
    cost_amount: null,
    cost_currency: null,
    format: "offline",
    location: "Cambridge, MA, USA (MIT Campus)",
    min_grade: 11,
    max_grade: 11,
    min_age: 16,
    max_age: 18,
    eligibility_countries: [],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Открыто для американских и международных школьников (международные квоты распределяются через партнерские комитеты).",
    language_requirements: ["en"],
    deadline_type: "fixed",
    deadline_date: "2027-01-15",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по cee.org. 100% бесплатно для всех зачисленных участников."
  },
  {
    id: "concord-review-history-journal-2027",
    slug: "concord-review-history-journal-2027",
    title: {
      ru: "Академический журнал исторических исследований The Concord Review",
      kk: "The Concord Review тарихи зерттеулер академиялық журналы",
      en: "The Concord Review Academic History Journal"
    },
    organization: "The Concord Review, Inc.",
    category: "research",
    directions: ["humanities", "social_sciences"],
    description: {
      ru: "Единственный в мире ежеквартальный рецензируемый академический журнал, публикующий глубокие научно-исследовательские работы школьников по всемирной и национальной истории. Публикация в журнале является одной из высших академических наград для гуманитариев в мире.",
      kk: "Мектеп оқушыларының тарих бойынша терең ғылыми-зерттеу мақалаларын жариялайтын әлемдегі жалғыз академиялық журнал. Журналға мақала шығару — гуманитарлық бағыттағы оқушылар үшін ең жоғары әлемдік мәртебе.",
      en: "The only quarterly peer-reviewed journal in the world dedicated to publishing exemplary academic history research papers by secondary school students. Widely recognized as one of the highest pre-college academic distinctions in the humanities."
    },
    summary: {
      ru: "Единственный мировой рецензируемый научный журнал по истории для школьников (объем эссе 4000–8000 слов).",
      kk: "Оқушылардың тарих бойынша көлемді (4000–8000 сөз) ғылыми мақалаларын шығаратын жалғыз журнал.",
      en: "The premier quarterly journal publishing exemplary secondary student history research papers."
    },
    requirements_checklist: {
      ru: ["Учащийся средней/старшей школы до поступления в вуз", "Оригинальное научное исследование по истории объемом от 4000 до 8000 слов со сносками в формате Turabian/Chicago", "Заявка и публикационный взнос"],
      kk: ["ЖОО-ға түспеген орта/жоғары мектеп оқушысы", "Turabian/Chicago форматындағы 4000-8000 сөзден тұратын тарихи ғылыми зерттеу", "Өтініш беру"],
      en: ["Pre-college secondary student", "Original academic history paper (4,000 to 8,000 words) with Turabian/Chicago citations", "Submission submission fee"]
    },
    official_url: "https://www.tcr.org",
    source_url: "https://www.tcr.org",
    cost_type: "paid",
    cost_amount: 70,
    cost_currency: "USD",
    format: "online",
    location: "Global / Online",
    min_grade: 8,
    max_grade: 12,
    min_age: 13,
    max_age: 18,
    eligibility_countries: [],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Открыто для школьников любых стран мира.",
    language_requirements: ["en"],
    deadline_type: "rolling",
    deadline_date: "2027-02-01",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по tcr.org. Четыре выпуска в год: 1 февраля, 1 мая, 1 августа, 1 ноября."
  },
  {
    id: "ijhsr-high-school-research-journal-2027",
    slug: "ijhsr-high-school-research-journal-2027",
    title: {
      ru: "Международный журнал научных исследований школьников (IJHSR)",
      kk: "Оқушылардың халықаралық ғылыми зерттеу журналы (IJHSR)",
      en: "International Journal of High School Research (IJHSR)"
    },
    organization: "Terra Science and Education",
    category: "research",
    directions: ["stem", "medicine", "social_sciences", "environmental_science"],
    description: {
      ru: "Рецензируемый научный журнал открытого доступа, в котором школьники могут публиковать результаты своих оригинальных исследований по биологии, химии, физике, инженерии и социальным наукам. Все статьи проходят двойное слепое рецензирование учеными.",
      kk: "Оқушыларға арналған ашық қолжетімді халықаралық рецензияланатын ғылыми журнал. Биология, химия, физика, инженерия және қоғамдық ғылымдар бойынша мақалалар ғалымдардың тексеруінен өтеді.",
      en: "Peer-reviewed open-access scientific journal dedicated to publishing original pre-college research across STEM and social sciences. Papers undergo double-blind peer review by PhD researchers and academic reviewers."
    },
    summary: {
      ru: "Рецензируемый научный журнал для публикации исследовательских проектов школьников по STEM и наукам.",
      kk: "STEM және ғылыми бағыттар бойынша мектеп оқушыларының мақалаларын жариялайтын рецензияланатын журнал.",
      en: "Peer-reviewed academic research journal publishing original scientific discoveries by high school students."
    },
    requirements_checklist: {
      ru: ["Автор — учащийся средней или старшей школы", "Оригинальная рукопись научной статьи на английском языке с аннотацией и списком литературы", "Наличие научного наставника/учителя"],
      kk: ["Автор — орта немесе жоғары мектеп оқушысы", "Ағылшын тіліндегі аннотациясы мен әдебиеттер тізімі бар ғылыми мақала", "Ғылыми жетекшінің болуы"],
      en: ["Enrolled pre-college student", "Original scientific manuscript in English with abstract and data", "Faculty supervisor confirmation"]
    },
    official_url: "https://curieuxacademicjournal.com",
    source_url: "https://www.terraed.org/ijhsr/",
    cost_type: "paid",
    cost_amount: 150,
    cost_currency: "USD",
    format: "online",
    location: "Global / Online",
    min_grade: 8,
    max_grade: 12,
    min_age: 13,
    max_age: 18,
    eligibility_countries: [],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Открыто для школьников со всего мира.",
    language_requirements: ["en"],
    deadline_type: "rolling",
    deadline_date: null,
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по terraed.org/ijhsr. Прием статей круглогодичный."
  },
  {
    id: "horizon-academic-research-program-2027",
    slug: "horizon-academic-research-program-2027",
    title: {
      ru: "Академическая исследовательская лаборатория Horizon Academic",
      kk: "Horizon Academic халықаралық зерттеу зертханасы",
      en: "Horizon Academic Research Program"
    },
    organization: "Horizon Academic",
    category: "research",
    directions: ["stem", "humanities", "social_sciences", "ai"],
    description: {
      ru: "Семестровая онлайн-исследовательская программа, в рамках которой старшеклассники разрабатывают авторскую научную статью под индивидуальным руководством профессоров ведущих мировых университетов по экономике, ИИ, нейробиологии или международным отношениям.",
      kk: "Жоғары сынып оқушыларына арналған семестрлік зерттеу бағдарламасы. Оқушылар экономика, ЖИ, нейробиология және халықаралық қатынастар бойынша әлемдік профессорлармен жеке мақала жазады.",
      en: "Trimester-based online research program where students produce university-level research papers under the direct 1-on-1 supervision of distinguished professors in fields like Machine Learning, Economics, and Neuroscience."
    },
    summary: {
      ru: "Индивидуальная научная работа с профессорами мировых вузов по экономике, ИИ и нейробиологии.",
      kk: "Экономика, ЖИ және нейробиология салаларында әлемдік профессорлармен жеке ғылыми жұмыс.",
      en: "1-on-1 university-level research program under professors in AI, economics, and neuroscience."
    },
    requirements_checklist: {
      ru: ["Ученик 9–12 класса", "Транскрипт с оценками и мотивационное эссе", "Интервью с приемной комиссией"],
      kk: ["9–12 сынып оқушысы", "Бағалар транскрипті мен мотивациялық эссе", "Қабылдау комиссиясымен сұхбат"],
      en: ["Grades 9–12 student", "Academic transcript and motivation essay", "Admissions interview"]
    },
    official_url: "https://horizoninspires.com",
    source_url: "https://horizoninspires.com",
    cost_type: "paid",
    cost_amount: 3500,
    cost_currency: "USD",
    format: "online",
    location: "Global / Online",
    min_grade: 9,
    max_grade: 12,
    min_age: 14,
    max_age: 18,
    eligibility_countries: [],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Открыто по всему миру. Доступны частичные стипендии.",
    language_requirements: ["en"],
    deadline_type: "fixed",
    deadline_date: "2027-02-10",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по horizoninspires.com."
  },
  {
    id: "ccir-cambridge-oxford-research-2027",
    slug: "ccir-cambridge-oxford-research-2027",
    title: {
      ru: "Кембриджский центр международных исследований (CCIR Academy)",
      kk: "Кембридж халықаралық зерттеулер орталығы (CCIR Academy)",
      en: "Cambridge Centre for International Research (CCIR)"
    },
    organization: "Cambridge Centre for International Research",
    category: "research",
    directions: ["stem", "humanities", "social_sciences", "medicine"],
    description: {
      ru: "Высокоселективная научная программа, соединяющая школьников 9–12 классов с профессорами Оксфорда, Кембриджа и Лиги Плюща. Программа Cambridge Future Scholar предлагает индивидуальные или малые исследовательские группы с подготовкой статьи к рецензированию.",
      kk: "9–12 сынып оқушыларын Оксфорд, Кембридж және Плющ лигасының профессорларымен байланыстыратын ғылыми бағдарлама. Шағын топтарда немесе жеке ғылыми мақала жазуды үйретеді.",
      en: "Selective research academy pairing students with faculty from Cambridge, Oxford, and Ivy League universities. Students undertake original research in 1-on-1 or small-cohort formats (Cambridge Future Scholar) aiming for publication."
    },
    summary: {
      ru: "Научные исследования под руководством профессоров Кембриджа и Оксфорда для старшеклассников.",
      kk: "Жоғары сыныптар үшін Кембридж және Оксфорд профессорларының жетекшілігімен ғылыми зерттеулер.",
      en: "Advanced research programs led 1-on-1 by Cambridge and Oxford professors for ambitious teens."
    },
    requirements_checklist: {
      ru: ["Ученик 9–12 классов", "Высокий академический балл (GPA 3.7+ или эквивалент)", "Мотивационное эссе и подтверждение уровня английского"],
      kk: ["9–12 сынып оқушысы", "Жоғары оқу үлгерімі (GPA 3.7+ немесе баламасы)", "Мотивациялық эссе және ағылшын тілін растау"],
      en: ["Grades 9–12 student", "Academic GPA 3.7+ or equivalent", "Research statement and English proficiency"]
    },
    official_url: "https://www.cambridge-research.org",
    source_url: "https://www.cambridge-research.org",
    cost_type: "paid",
    cost_amount: 3200,
    cost_currency: "GBP",
    format: "online",
    location: "Global / Online",
    min_grade: 9,
    max_grade: 12,
    min_age: 14,
    max_age: 18,
    eligibility_countries: [],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Открыто для школьников любых стран.",
    language_requirements: ["en"],
    deadline_type: "fixed",
    deadline_date: "2027-02-15",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по cambridge-research.org."
  }
];
