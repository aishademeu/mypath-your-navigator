import { OpportunityContract } from './types';

export const SUMMER_SCHOOLS: OpportunityContract[] = [
  {
    id: "yale-young-global-scholars-2027",
    slug: "yale-young-global-scholars-2027",
    title: {
      ru: "Летняя программа Йельского университета (Yale Young Global Scholars - YYGS)",
      kk: "Йель университетінің жазғы бағдарламасы (Yale Young Global Scholars - YYGS)",
      en: "Yale Young Global Scholars (YYGS) 2027"
    },
    organization: "Yale University",
    category: "summer_school",
    directions: ["humanities", "social_sciences", "stem", "leadership"],
    description: {
      ru: "Одна из самых глобальных и междисциплинарных летних программ в мире для старшеклассников (10–11 классы). Проходит на кампусе Йельского университета в Нью-Хейвене. Сессии включают: Инновации в науке и технологиях (IST), Литература, философия и культура (LPC), Политика, право и экономика (PLE), Решение глобальных вызовов (SGC). Доступна полная финансовая помощь.",
      kk: "Йель университетінің кампусында өтетін 10–11 сынып оқушыларына арналған әлемдік деңгейдегі пәнаралық жазғы бағдарлама. Бағыттары: Ғылым мен технологиялар (IST), Әдебиет пен мәдениет (LPC), Саясат, құқық және экономика (PLE). Мұқтаждарға толық қаржылай көмек бар.",
      en: "One of the most globally diverse two-week pre-college programs in the world hosted on Yale's historic campus. High school sophomores and juniors attend seminars, lectures by Yale faculty, and collaborate on a Capstone project across STEM, Humanities, Social Sciences, and Global Challenges."
    },
    summary: {
      ru: "2 недели на кампусе Йеля: семинары с профессорами, дебаты и Capstone-проект для 10–11 классов.",
      kk: "Йель кампусындағы 2 апталық академия: профессорлармен дәрістер, дебаттар және Capstone жобасы.",
      en: "Two-week interdisciplinary academic summer immersion on Yale University campus with full financial aid."
    },
    requirements_checklist: {
      ru: ["Ученик 10 или 11 класса (16–18 лет)", "Высокая успеваемость и знание английского языка", "Анкета, школьный табель, эссе и 2 рекомендательных письма"],
      kk: ["10 немесе 11 сынып оқушысы (16–18 жас)", "Жоғары үлгерім және ағылшын тілін білу", "Сауалнама, бағалар табелі, эссе және 2 ұсыныс хат"],
      en: ["Current high school sophomore or junior (ages 16–18)", "Strong academic standing and English fluency", "Application form, school transcript, essays, and 2 recommendations"]
    },
    official_url: "https://globalscholars.yale.edu/sessions",
    source_url: "https://globalscholars.yale.edu",
    cost_type: "paid",
    cost_amount: 6500,
    cost_currency: "USD",
    format: "offline",
    location: "New Haven, CT, USA (Yale Campus)",
    min_grade: 10,
    max_grade: 11,
    min_age: 16,
    max_age: 18,
    eligibility_countries: [],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Открыто для школьников из всех стран мира. Доступна полная финансовая помощь (Need-Based Aid).",
    language_requirements: ["en"],
    deadline_type: "fixed",
    deadline_date: "2027-01-10",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по globalscholars.yale.edu. Ранний дедлайн — ноябрь, основной — январь."
  },
  {
    id: "stanford-sumac-math-camp-2027",
    slug: "stanford-sumac-math-camp-2027",
    title: {
      ru: "Математический лагерь Стэнфордского университета (Stanford SUMaC)",
      kk: "Стэнфорд университетінің математикалық лагері (Stanford SUMaC)",
      en: "Stanford University Mathematics Camp (SUMaC)"
    },
    organization: "Stanford University",
    category: "summer_school",
    directions: ["mathematics", "stem"],
    description: {
      ru: "Легендарный 3-недельный математический лагерь Стэнфордского университета для школьников 10–11 классов, увлеченных чистой математикой. Участники изучают абстрактную алгебру, теорию чисел и топологию. Доступен в очном формате на кампусе Стэнфорда и онлайн.",
      kk: "Стэнфорд университетінің таза математикаға қызығатын 10–11 сынып оқушыларына арналған 3 апталық лагері. Абстрактілі алгебра, сандар теориясы және топологияны терең оқытады. Стэнфорд кампусында және онлайн өтеді.",
      en: "Legendary 3-week pure mathematics summer camp for rising 11th and 12th graders hosted by Stanford University. Students explore advanced mathematical themes including Abstract Algebra, Number Theory, and Algebraic Topology through guided research problems."
    },
    summary: {
      ru: "Элитный лагерь Стэнфорда по чистой математике: абстрактная алгебра и топология для 10–11 классов.",
      kk: "Стэнфорд университетінің жоғары математика, абстрактілі алгебра және топология бойынша лагері.",
      en: "Intensive 3-week pure mathematics camp hosted by Stanford University on campus and online."
    },
    requirements_checklist: {
      ru: ["Ученик 10–11 класса", "Выполнение вступительного экзамена SUMaC Admissions Exam (сложные доказательные задачи)", "Транскрипт с оценками и рекомендация учителя математики"],
      kk: ["10–11 сынып оқушысы", "SUMaC арнайы емтихан есептерін (дәлелдеу есептері) толық шығару", "Бағалар транскрипті және математика мұғалімінің ұсыныс хаты"],
      en: ["Grades 10–11 student", "Completion of the rigorous SUMaC Admissions Exam", "Math teacher recommendation and transcript"]
    },
    official_url: "https://sumac.spcs.stanford.edu",
    source_url: "https://sumac.spcs.stanford.edu",
    cost_type: "paid",
    cost_amount: 3550,
    cost_currency: "USD",
    format: "hybrid",
    location: "Stanford, CA, USA & Online",
    min_grade: 10,
    max_grade: 11,
    min_age: 15,
    max_age: 18,
    eligibility_countries: [],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Открыто по всему миру. Предоставляется финансовая помощь нуждающимся кандидатам.",
    language_requirements: ["en"],
    deadline_type: "fixed",
    deadline_date: "2027-02-01",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по sumac.spcs.stanford.edu."
  },
  {
    id: "harvard-pre-college-program-2027",
    slug: "harvard-pre-college-program-2027",
    title: {
      ru: "Довузовская программа Гарвардского университета (Harvard Pre-College)",
      kk: "Гарвард университетінің мектеп бітірушілерге арналған жазғы бағдарламасы (Harvard Pre-College)",
      en: "Harvard Pre-College Summer Residential Program"
    },
    organization: "Harvard University (Division of Continuing Education)",
    category: "summer_school",
    directions: ["humanities", "social_sciences", "stem", "medicine"],
    description: {
      ru: "Двухнедельная очная программа погружения в университетскую жизнь Гарварда для школьников 10–11 классов. Участники живут в исторических общежитиях Гарвардского двора, слушают курсы профессоров Гарварда без давления оценок и готовятся к поступлению в топовые вузы.",
      kk: "10–11 сынып оқушыларына арналған Гарвард университетіндегі 2 апталық жазғы академиялық бағдарлама. Оқушылар Гарвардтың тарихи кампусында тұрып, профессорлардың дәрістерін тыңдайды.",
      en: "Two-week intensive residential college experience on Harvard campus for rising high school juniors and seniors. Students live in historic Harvard Yard dorms, take non-credit college courses with Harvard faculty, and engage in co-curricular college readiness activities."
    },
    summary: {
      ru: "2 недели жизни и учебы в Гарварде: курсы от профессоров, проживание на кампусе Harvard Yard.",
      kk: "Гарвард кампусындағы 2 апталық жазғы оқу: профессорлардың сабақтары және студенттік өмір тәжірибесі.",
      en: "Two-week residential academic experience living on Harvard University campus in Cambridge, MA."
    },
    requirements_checklist: {
      ru: ["Ученик 10–11 класса (возраст от 16 до 18 лет)", "Высокие оценки в школе и знание английского языка", "Рекомендация преподавателя и эссе"],
      kk: ["10–11 сынып оқушысы (16–18 жас)", "Жоғары оқу үлгерімі және ағылшын тілін еркін меңгеру", "Мұғалімнің ұсынысы және эссе"],
      en: ["Rising high school junior or senior (ages 16–18)", "Strong academic performance and English fluency", "Teacher recommendation and admissions essay"]
    },
    official_url: "https://summer.harvard.edu/high-school-programs/pre-college-program/",
    source_url: "https://summer.harvard.edu/high-school-programs/pre-college-program/",
    cost_type: "paid",
    cost_amount: 5550,
    cost_currency: "USD",
    format: "offline",
    location: "Cambridge, MA, USA (Harvard Yard)",
    min_grade: 10,
    max_grade: 11,
    min_age: 16,
    max_age: 18,
    eligibility_countries: [],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Открыто для американских и международных старшеклассников.",
    language_requirements: ["en"],
    deadline_type: "fixed",
    deadline_date: "2027-02-14",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по официальному сайту Harvard Summer School."
  },
  {
    id: "wharton-global-youth-summer-2027",
    slug: "wharton-global-youth-summer-2027",
    title: {
      ru: "Летняя программа по бизнесу и финансам школы Wharton (Wharton Global Youth)",
      kk: "Wharton бизнес мектебінің қаржы және көшбасшылық жазғы бағдарламасы",
      en: "Wharton Global Youth Summer High School Programs"
    },
    organization: "The Wharton School, University of Pennsylvania",
    category: "summer_school",
    directions: ["business", "leadership", "social_sciences"],
    description: {
      ru: "Престижные летние курсы Уортонской школы бизнеса Пенсильванского университета (UPenn) для старшеклассников 9–11 классов. Программы включают: Leadership in the Business World (LBW), Management & Technology Summer Institute (M&TSI), Moneyball Academy (спортивная аналитика), Data Science Academy.",
      kk: "Пенсильвания университетінің Wharton бизнес мектебінде өтетін 9–11 сынып оқушыларына арналған жазғы бағдарламалар. Бағыттары: Бизнес көшбасшылық (LBW), Басқару және технологиялар (M&TSI), Қаржы және деректер аналитикасы.",
      en: "Elite summer on-campus business and finance academies at the Wharton School, University of Pennsylvania. Features flagship tracks including Leadership in the Business World (LBW), M&TSI (Engineering + Business), and the Wharton Data Science Academy."
    },
    summary: {
      ru: "Летние программы по бизнесу, финансам и data science в легендарной школе Wharton при UPenn.",
      kk: "Wharton бизнес мектебіндегі қаржы, көшбасшылық және деректер ғылымы бойынша жазғы курстар.",
      en: "Pre-college finance, leadership, and analytics programs at the Wharton School of Business."
    },
    requirements_checklist: {
      ru: ["Ученик 9–11 класса", "Транскрипт с высокими оценками (GPA 3.5+)", "Краткие эссе об интересе к бизнесу и рекомендация преподавателя"],
      kk: ["9–11 сынып оқушысы", "Жоғары бағалар табелі (GPA 3.5+)", "Бизнеске қызығушылық туралы эссе және ұсыныс хат"],
      en: ["Grades 9–11 student", "Strong high school transcript (GPA 3.5+)", "Short essays on business/leadership and teacher recommendation"]
    },
    official_url: "https://globalyouth.wharton.upenn.edu",
    source_url: "https://globalyouth.wharton.upenn.edu",
    cost_type: "paid",
    cost_amount: 8099,
    cost_currency: "USD",
    format: "offline",
    location: "Philadelphia, PA, USA (UPenn Campus)",
    min_grade: 9,
    max_grade: 11,
    min_age: 15,
    max_age: 18,
    eligibility_countries: [],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Открыто по всему миру. Доступны стипендии Wharton Global Youth Need-Based Financial Aid.",
    language_requirements: ["en"],
    deadline_type: "fixed",
    deadline_date: "2027-01-25",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по globalyouth.wharton.upenn.edu."
  },
  {
    id: "launchx-entrepreneurship-summer-2027",
    slug: "launchx-entrepreneurship-summer-2027",
    title: {
      ru: "Стартап-акселератор для старшеклассников LaunchX",
      kk: "Жоғары сынып оқушыларына арналған LaunchX стартап-акселераторы",
      en: "LaunchX Summer High School Entrepreneurship Program"
    },
    organization: "LaunchX",
    category: "entrepreneurship",
    directions: ["entrepreneurship", "business", "computer_science", "leadership"],
    description: {
      ru: "Ведущая мировая летняя программа по практическому созданию стартапов для школьников 9–12 классов. Вместо учебных симуляций команды школьников создают реальный технологический продукт, привлекают первых клиентов и совершают реальные продажи.",
      kk: "9–12 сынып оқушыларына арналған тәжірибелік стартап бағдарламасы. Қатысушылар оқу жобасын емес, нақты жұмыс істейтін өнім жасап, нарықта алғашқы сатылымдарын жасайды.",
      en: "Premier summer entrepreneurship program for high school students globally. Rather than learning business theory, students co-found real companies in teams, build prototypes, acquire real users, and generate actual revenue."
    },
    summary: {
      ru: "Создай настоящий стартап за лето: командная разработка продукта, привлечение клиентов и реальные продажи.",
      kk: "Жаз бойы нақты стартап құру: командалық өнім жасау, нарыққа шығу және нақты сатылымдар жасау.",
      en: "Intensive summer entrepreneurship accelerator where teens launch real companies and generate revenue."
    },
    requirements_checklist: {
      ru: ["Учащийся 9–12 классов", "Предпринимательский склад ума или технические/дизайнерские навыки", "Видео-заявка, резюме и мотивационное эссе"],
      kk: ["9–12 сынып оқушысы", "Кәсіпкерлікке бейімділік немесе IT/дизайн дағдылары", "Бейнеөтініш, түйіндеме және эссе"],
      en: ["Grades 9–12 student", "Entrepreneurial drive or coding/design abilities", "Video application, resume, and portfolio"]
    },
    official_url: "https://launchx.com",
    source_url: "https://launchx.com",
    cost_type: "paid",
    cost_amount: 5980,
    cost_currency: "USD",
    format: "hybrid",
    location: "Online / Ann Arbor, MI, USA",
    min_grade: 9,
    max_grade: 12,
    min_age: 14,
    max_age: 18,
    eligibility_countries: [],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Открыто для школьников любых стран мира. Доступны финансовые стипендии.",
    language_requirements: ["en"],
    deadline_type: "fixed",
    deadline_date: "2027-01-07",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по launchx.com. Ранний дедлайн в ноябре, регулярный — в январе."
  },
  {
    id: "promys-boston-math-camp-2027",
    slug: "promys-boston-math-camp-2027",
    title: {
      ru: "Математическая программа для юных ученых PROMYS (Бостонский университет)",
      kk: "Бостон университетіндегі PROMYS жас математиктер бағдарламасы",
      en: "PROMYS (Program in Mathematics for Young Scientists)"
    },
    organization: "Boston University & PROMYS Foundation",
    category: "summer_school",
    directions: ["mathematics", "stem"],
    description: {
      ru: "Глубокая 6-недельная программа погружения в чистую математику для школьников 14–19 лет на кампусе Бостонского университета. Программа фокусируется на теории чисел: школьники ежедневно выводят фундаментальные математические теоремы самостоятельно через решение задач.",
      kk: "Бостон университетінің кампусында 14–19 жастағы оқушыларға арналған 6 апталық математикалық бағдарлама. Оқушылар сандар теориясын терең оқып, күрделі математикалық теоремаларды өз беттерінше дәлелдейді.",
      en: "Challenging 6-week residential summer program in pure mathematics for students ages 14–19 at Boston University. Focusing on Number Theory, students discover mathematical truths independently by solving problem sets."
    },
    summary: {
      ru: "6 недель чистой математики и теории чисел в Бостонском университете для школьников 14–19 лет.",
      kk: "Бостон университетіндегі сандар теориясы мен таза математика бойынша 6 апталық қарқынды бағдарлама.",
      en: "Prestigious 6-week pure mathematics program at Boston University exploring deep number theory."
    },
    requirements_checklist: {
      ru: ["Возраст не менее 14 лет на момент начала программы", "Решение вступительного математического задания (PROMYS Application Problem Set)", "Рекомендация преподавателя математики и транскрипт"],
      kk: ["Бағдарлама басталғанда кемінде 14 жаста болу", "PROMYS күрделі математикалық есептер топтамасын өздігінен шығару", "Математика мұғалімінің ұсыныс хаты"],
      en: ["At least 14 years old by program start", "Independent solutions to the challenging PROMYS application problem set", "Math teacher recommendation and transcript"]
    },
    official_url: "https://promys.org",
    source_url: "https://promys.org",
    cost_type: "paid",
    cost_amount: 6000,
    cost_currency: "USD",
    format: "offline",
    location: "Boston, MA, USA (Boston University)",
    min_grade: 9,
    max_grade: 12,
    min_age: 14,
    max_age: 19,
    eligibility_countries: [],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Открыто по всему миру. Полные стипендии для семей с доходом менее $80 000 в год.",
    language_requirements: ["en"],
    deadline_type: "fixed",
    deadline_date: "2027-03-05",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по promys.org. Щедрая финансовая помощь."
  },
  {
    id: "canada-usa-mathcamp-2027",
    slug: "canada-usa-mathcamp-2027",
    title: {
      ru: "Летний математический лагерь Canada/USA Mathcamp",
      kk: "Canada/USA Mathcamp халықаралық жазғы математикалық лагері",
      en: "Canada/USA Mathcamp 2027"
    },
    organization: "Mathematics Foundation of America",
    category: "summer_school",
    directions: ["mathematics", "stem"],
    description: {
      ru: "5-недельный летний интенсив для 120 математически одаренных старшеклассников со всего мира (13–18 лет). Участники самостоятельно выбирают курсы по высшей математике университетского уровня (теория узлов, теория Рамсея, квантовая механика) и работают с ведущими профессорами.",
      kk: "Әлемнің 120 дарынды оқушысына арналған 5 апталық математикалық жазғы лагерь. Қатысушылар университет деңгейіндегі курстарды өздері таңдап, жетекші математиктермен жұмыс істейді.",
      en: "Intensive 5-week summer program for 120 mathematically gifted students ages 13–18 from around the world. Designed with a flexible curriculum where students choose advanced undergraduate and graduate-level courses in pure mathematics."
    },
    summary: {
      ru: "5 недель продвинутой математики для 120 одаренных школьников со всего мира со свободным выбором курсов.",
      kk: "Әлемнің 120 дарынды оқушысына арналған 5 апталық жоғары математикалық лагерь.",
      en: "Vibrant 5-week pure mathematics summer camp for 120 gifted teens with full need-based aid."
    },
    requirements_checklist: {
      ru: ["Возраст от 13 до 18 лет", "Решение задач вступительного задания Mathcamp Qualifying Quiz", "2 рекомендательных письма и эссе"],
      kk: ["13 пен 18 жас аралығы", "Mathcamp Qualifying Quiz күрделі олимпиадалық есептерін шешу", "2 ұсыныс хат және эссе"],
      en: ["Ages 13–18", "Original solutions to the Mathcamp Qualifying Quiz", "Two recommendation letters and essays"]
    },
    official_url: "https://www.mathcamp.info",
    source_url: "https://www.mathcamp.info",
    cost_type: "paid",
    cost_amount: 5500,
    cost_currency: "USD",
    format: "offline",
    location: "Host University Campus in North America (Rotates)",
    min_grade: 8,
    max_grade: 12,
    min_age: 13,
    max_age: 18,
    eligibility_countries: [],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Открыто для школьников любых стран мира. Финансовая помощь покрывает до 100% стоимости.",
    language_requirements: ["en"],
    deadline_type: "fixed",
    deadline_date: "2027-03-10",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по mathcamp.info."
  },
  {
    id: "ross-mathematics-program-2027",
    slug: "ross-mathematics-program-2027",
    title: {
      ru: "Математическая программа Росса (Ross Mathematics Program)",
      kk: "Росс математикалық жазғы бағдарламасы (Ross Mathematics Program)",
      en: "Ross Mathematics Program (USA & Asia)"
    },
    organization: "Ross Mathematics Program",
    category: "summer_school",
    directions: ["mathematics", "stem"],
    description: {
      ru: "Легендарный 6-недельный математический лагерь, основанный в 1957 году. Девиз программы — «Думай глубоко о простых вещах». Школьники 15–18 лет с нуля строят аксиоматическую систему теории чисел, развивая доказательное абстрактное мышление.",
      kk: "1957 жылы негізі қаланған 6 апталық математикалық лагерь. 15–18 жастағы оқушылар сандар теориясының аксиомаларын өздігінен дәлелдеп, логикалық ойлауды дамытады.",
      en: "Legendary 6-week intensive summer mathematics program founded in 1957. Centered on the motto 'Think deeply of simple things', students explore Number Theory rigorously from first principles."
    },
    summary: {
      ru: "6-недельное погружение в чистую математику и теорию чисел по девизу «Думай глубоко о простых вещах».",
      kk: "15–18 жастағы оқушыларға арналған 6 апталық таза математика мен сандар теориясы лагері.",
      en: "Rigorous 6-week pure mathematics program in number theory developing proof-based thinking."
    },
    requirements_checklist: {
      ru: ["Возраст 15–18 лет", "Решение вступительного математического теста задач Росса", "Школьные оценки и рекомендация учителя"],
      kk: ["15 пен 18 жас аралығы", "Росс арнайы математикалық есептер жинағын шығару", "Мектеп бағалары мен мұғалім ұсынысы"],
      en: ["Ages 15–18", "Solutions to the Ross application mathematics problem set", "Transcripts and teacher recommendations"]
    },
    official_url: "https://rossprogram.org",
    source_url: "https://rossprogram.org",
    cost_type: "paid",
    cost_amount: 7000,
    cost_currency: "USD",
    format: "offline",
    location: "Otterbein University, Westerville, OH, USA",
    min_grade: 9,
    max_grade: 12,
    min_age: 15,
    max_age: 18,
    eligibility_countries: [],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Открыто по всему миру. Доступны полные стипендии.",
    language_requirements: ["en"],
    deadline_type: "fixed",
    deadline_date: "2027-03-31",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по rossprogram.org."
  }
];
