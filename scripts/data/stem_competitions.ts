import { OpportunityContract } from './types';

export const STEM_COMPETITIONS: OpportunityContract[] = [
  {
    id: "conrad-challenge-2027",
    slug: "conrad-challenge-2027",
    title: {
      ru: "Международный инновационный конкурс Conrad Challenge 2026/2027",
      kk: "Conrad Challenge 2026/2027 халықаралық инновациялық байқауы",
      en: "Conrad Challenge 2026/2027 Innovation Competition"
    },
    organization: "Conrad Foundation",
    category: "competition",
    directions: ["stem", "robotics", "ai", "environmental_science", "entrepreneurship"],
    description: {
      ru: "Престижный глобальный конкурс научно-технических инноваций и предпринимательства для школьников 13–18 лет. Команды от 2 до 5 человек под руководством наставника создают коммерчески жизнеспособные решения в категориях: Аэрокосмические технологии, Кибербезопасность и ИИ, Энергетика и экология, Здравоохранение.",
      kk: "13 пен 18 жас аралығындағы оқушыларға арналған беделді жаһандық ғылыми-техникалық инновациялар мен кәсіпкерлік байқауы. 2-ден 5 адамға дейінгі командалар аэроғарыш, киберқауіпсіздік, энергетика және денсаулық сақтау салаларында шешімдер жасайды.",
      en: "Prestigious global innovation and entrepreneurship challenge for students ages 13–18. Teams of 2–5 design commercially viable solutions in Aerospace & Aviation, Cyber-Technology & AI, Energy & Environment, and Health & Nutrition."
    },
    summary: {
      ru: "Мировой конкурс инноваций для команд 13–18 лет: аэрокосмос, ИИ, экология, медицина и поездка в NASA.",
      kk: "13–18 жастағы командаларға арналған әлемдік инновациялар байқауы: NASA-ға сапар және стипендиялар.",
      en: "Global innovation competition for teens 13–18 solving aerospace, AI, and environmental challenges."
    },
    requirements_checklist: {
      ru: ["Возраст от 13 до 18 лет", "Команда от 2 до 5 участников + взрослый наставник (тренер)", "Подача презентации инновации и питч-видео на английском языке"],
      kk: ["13 пен 18 жас аралығы", "2-ден 5 қатысушыға дейінгі команда + ересек тәлімгер", "Ағылшын тіліндегі жоба презентациясы мен бейнебаяны"],
      en: ["Ages 13–18", "Team of 2–5 students plus adult coach", "Innovation brief and pitch video in English"]
    },
    official_url: "https://www.conradchallenge.org",
    source_url: "https://www.conradchallenge.org",
    cost_type: "paid",
    cost_amount: 50,
    cost_currency: "USD",
    format: "online",
    location: "Online / Houston, TX, USA (Finals)",
    min_grade: 8,
    max_grade: 12,
    min_age: 13,
    max_age: 18,
    eligibility_countries: [],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Открыто для школьников со всего мира, включая Казахстан.",
    language_requirements: ["en"],
    deadline_type: "fixed",
    deadline_date: "2026-11-06",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по conradchallenge.org. Регистрация первого раунда завершается в ноябре."
  },
  {
    id: "technovation-girls-global-2027",
    slug: "technovation-girls-global-2027",
    title: {
      ru: "Международная технологическая программа Technovation Girls 2027",
      kk: "Technovation Girls 2027 халықаралық технологиялық бағдарламасы",
      en: "Technovation Girls Global Tech Challenge 2027"
    },
    organization: "Technovation",
    category: "competition",
    directions: ["computer_science", "entrepreneurship", "ai", "social_sciences"],
    description: {
      ru: "Крупнейшая глобальная программа обучения технологиям и стартапам для девушек 8–18 лет (категории 13–15 и 16–18 лет). Команды изучают программирование, создают мобильное приложение или ИИ-прототип для решения социальных проблем ООН и составляют бизнес-план.",
      kk: "8–18 жастағы қыздарға арналған әлемдегі ең ірі технологиялық стартап бағдарламасы. Қатысушылар бағдарламалауды үйреніп, әлеуметтік мәселелерді шешетін мобильді қосымша немесе ЖИ жобасын дайындайды.",
      en: "The world's largest technology entrepreneurship program for girls ages 8–18 (divisions for 13–15 and 16–18). Teams identify a community problem and build a mobile app or AI prototype, business plan, and video pitch."
    },
    summary: {
      ru: "Глобальная бесплатная программа для девушек 13–18 лет: создание мобильного приложения или ИИ с ментором.",
      kk: "13–18 жастағы қыздарға арналған жаһандық бағдарлама: ментормен мобильді қосымша немесе ЖИ жасау.",
      en: "Global tech & business challenge for girls 13–18: build mobile apps and AI solutions to solve community issues."
    },
    requirements_checklist: {
      ru: ["Девушки от 13 до 18 лет", "Команда от 1 до 5 участниц", "Разработка прототипа (MIT App Inventor, Thunkable, Flutter или Python AI), питч и бизнес-план"],
      kk: ["13 пен 18 жас аралығындағы қыздар", "1-ден 5 қатысушыға дейінгі команда", "Қосымша прототипі, бейнепитч және бизнес-жоспар"],
      en: ["Female students ages 13–18", "Teams of 1 to 5 members", "Working prototype (mobile app or AI model), pitch video, and business plan"]
    },
    official_url: "https://technovationchallenge.org/seasons/2027",
    source_url: "https://technovationchallenge.org",
    cost_type: "free",
    cost_amount: null,
    cost_currency: null,
    format: "online",
    location: "Global / Online",
    min_grade: 7,
    max_grade: 12,
    min_age: 13,
    max_age: 18,
    eligibility_countries: [],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Открыто по всему миру без ограничений по гражданству.",
    language_requirements: ["en"],
    deadline_type: "fixed",
    deadline_date: "2027-03-24",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по technovationchallenge.org. Участие бесплатное."
  },
  {
    id: "microsoft-imagine-cup-junior-2027",
    slug: "microsoft-imagine-cup-junior-2027",
    title: {
      ru: "Международный конкурс Microsoft Imagine Cup Junior 2027",
      kk: "Microsoft Imagine Cup Junior 2027 халықаралық байқауы",
      en: "Microsoft Imagine Cup Junior 2027"
    },
    organization: "Microsoft",
    category: "competition",
    directions: ["ai", "computer_science", "stem", "environmental_science"],
    description: {
      ru: "Глобальное соревнование от корпорации Microsoft для школьников 13–18 лет, посвященное применению искусственного интеллекта (AI for Good) для решения мировых экологических, образовательных и гуманитарных вызовов.",
      kk: "Microsoft корпорациясының 13–18 жастағы оқушыларға арналған экологиялық, білім беру және әлеуметтік мәселелерді жасанды интеллект көмегімен шешуге бағытталған жаһандық байқауы.",
      en: "Global challenge by Microsoft for students ages 13–18 introducing Artificial Intelligence, machine learning, and cybersecurity to solve big global issues aligned with the AI for Good initiatives."
    },
    summary: {
      ru: "Школьный конкурс от Microsoft: разработка концепции ИИ для решения экологических и социальных задач.",
      kk: "Microsoft ұсынған оқушылар байқауы: экологиялық және әлеуметтік мәселелерді шешетін ЖИ жобасы.",
      en: "Global Microsoft AI challenge for students 13–18 solving environmental and humanitarian issues."
    },
    requirements_checklist: {
      ru: ["Возраст от 13 до 18 лет", "Команда от 1 до 6 человек под руководством педагога", "Заполнение шаблона проектной презентации Imagine Cup Junior"],
      kk: ["13 пен 18 жас аралығы", "Мұғалім жетекшілік ететін 1-ден 6 адамға дейінгі команда", "Imagine Cup Junior жобалық презентация үлгісін толтыру"],
      en: ["Ages 13–18", "Team of 1 to 6 students with a team leader/educator", "Submission of project PowerPoint template and summary"]
    },
    official_url: "https://imaginecup.microsoft.com",
    source_url: "https://imaginecup.microsoft.com",
    cost_type: "free",
    cost_amount: null,
    cost_currency: null,
    format: "online",
    location: "Global / Online",
    min_grade: 7,
    max_grade: 12,
    min_age: 13,
    max_age: 18,
    eligibility_countries: [],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Открыто для школьников всех стран мира.",
    language_requirements: ["en"],
    deadline_type: "annual_estimate",
    deadline_date: "2027-05-10",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по официальному порталу Microsoft Imagine Cup."
  },
  {
    id: "breakthrough-junior-challenge-2027",
    slug: "breakthrough-junior-challenge-2027",
    title: {
      ru: "Международный научный конкурс Breakthrough Junior Challenge",
      kk: "Breakthrough Junior Challenge халықаралық ғылыми байқауы",
      en: "Breakthrough Junior Challenge 2027"
    },
    organization: "Breakthrough Prize Foundation",
    category: "competition",
    directions: ["physics", "mathematics", "stem"],
    description: {
      ru: "Престижный всемирный конкурс научных видеороликов для школьников 13–18 лет. Участники создают короткое креативное видео (до 90 секунд), объясняющее сложную концепцию или теорию в области фундаментальной физики, математики или наук о жизни. Главный приз: университетская стипендия $250 000, современная научная лаборатория для школы на $100 000 и премия учителю $50 000.",
      kk: "13 пен 18 жас аралығындағы оқушыларға арналған беделді ғылыми бейнероликтер байқауы. Қатысушылар физика, математика немесе биология саласындағы күрделі теорияны түсіндіретін 90 секундтық шығармашылық видео түсіреді. Бас жүлде: $250 000 университеттік стипендия және мектепке $100 000 зертхана.",
      en: "Global science video competition for students ages 13–18. Participants create an engaging up-to-90-second video explaining a complex concept in physics, mathematics, or life sciences. Winner receives a $250,000 college scholarship, a $100,000 science lab for their school, and a $50,000 teacher prize."
    },
    summary: {
      ru: "Создай 90-секундное видео по физике или математике и выиграй стипендию $250 000 на обучение в вузе.",
      kk: "Физика немесе математика бойынша 90 секундтық видео түсіріп, $250 000 стипендия ұтып ал.",
      en: "Create a 90-second video explaining a big science idea to win a $250,000 college scholarship."
    },
    requirements_checklist: {
      ru: ["Возраст от 13 до 18 лет на момент подачи", "Оригинальное объясняющее видео длительностью не более 90 секунд на английском языке", "Участие в этапе рецензирования Peer-to-Peer Review"],
      kk: ["Өтініш беру кезінде 13 пен 18 жас аралығы", "Ағылшын тіліндегі 90 секундтан аспайтын түсіндірме бейнеролик", "Peer-to-Peer бағалау кезеңіне қатысу"],
      en: ["Ages 13–18", "Original English-language explanatory video of max 90 seconds", "Participation in the mandatory Peer-to-Peer Review process"]
    },
    official_url: "https://breakthroughjuniorchallenge.org",
    source_url: "https://breakthroughjuniorchallenge.org",
    cost_type: "free",
    cost_amount: null,
    cost_currency: null,
    format: "online",
    location: "Global / Online",
    min_grade: 8,
    max_grade: 12,
    min_age: 13,
    max_age: 18,
    eligibility_countries: [],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Открыто для школьников всех стран мира.",
    language_requirements: ["en"],
    deadline_type: "annual_estimate",
    deadline_date: "2027-06-25",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по breakthroughjuniorchallenge.org. Ежегодный дедлайн в конце июня."
  },
  {
    id: "usaco-computing-olympiad-2027",
    slug: "usaco-computing-olympiad-2027",
    title: {
      ru: "Олимпиада по программированию USACO (USA Computing Olympiad)",
      kk: "USACO (АҚШ компьютерлік олимпиадасы) алгоритмдік бағдарламалау жарысы",
      en: "USA Computing Olympiad (USACO) Online Contests"
    },
    organization: "USA Computing Olympiad",
    category: "competition",
    directions: ["computer_science", "stem"],
    description: {
      ru: "Ведущая международная онлайн-олимпиада по алгоритмическому программированию для школьников. Соревнования проходят в четыре дивизиона (Bronze, Silver, Gold, Platinum). Доступна бесплатно для участников из любых стран мира (C++, Java, Python).",
      kk: "Мектеп оқушыларына арналған алгоритмдік бағдарламалаудан жетекші халықаралық онлайн олимпиада. Жарыстар төрт дивизион бойынша өтеді (Bronze, Silver, Gold, Platinum). Әлемнің кез келген елінің оқушылары үшін тегін.",
      en: "Premier algorithmic computer programming competition system for pre-college students worldwide. Offers four divisional contests (Bronze, Silver, Gold, Platinum) with rigorous automated grading in C++, Java, and Python."
    },
    summary: {
      ru: "Бесплатная престижная онлайн-олимпиада по спортивному программированию (Bronze, Silver, Gold, Platinum).",
      kk: "Спорттық бағдарламалаудан беделді тегін онлайн олимпиада (Bronze, Silver, Gold, Platinum).",
      en: "Prestigious free online algorithmic programming contests across Bronze, Silver, Gold, Platinum tiers."
    },
    requirements_checklist: {
      ru: ["Учащийся средней или старшей школы", "Умение писать код на C++, Java или Python", "Регистрация бесплатного аккаунта на сайте usaco.org"],
      kk: ["Орта немесе жоғары сынып оқушысы", "C++, Java немесе Python тілінде код жаза білу", "usaco.org сайтында тегін аккаунт ашу"],
      en: ["Pre-college student", "Proficiency in C++, Java, or Python algorithms", "Free account on usaco.org"]
    },
    official_url: "https://usaco.org",
    source_url: "https://usaco.org",
    cost_type: "free",
    cost_amount: null,
    cost_currency: null,
    format: "online",
    location: "Global / Online",
    min_grade: 7,
    max_grade: 12,
    min_age: 13,
    max_age: 18,
    eligibility_countries: [],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Онлайн-раунды открыты для всех школьников мира без ограничений.",
    language_requirements: ["en"],
    deadline_type: "fixed",
    deadline_date: "2026-12-18",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по официальному календарю USACO 2026-2027. Первый контест в декабре 2026."
  },
  {
    id: "acsl-computer-science-league-2027",
    slug: "acsl-computer-science-league-2027",
    title: {
      ru: "Американская лига компьютерных наук для школьников (ACSL)",
      kk: "Мектептерге арналған Америкалық компьютерлік ғылымдар лигасы (ACSL)",
      en: "American Computer Science League (ACSL)"
    },
    organization: "American Computer Science League",
    category: "competition",
    directions: ["computer_science", "stem", "mathematics"],
    description: {
      ru: "Международная командная и индивидуальная лига по информатике для школьников 7–12 классов. Включает четыре отборочных тура по фундаментальной теории CS (системы счисления, булева алгебра, графы, структуры данных) и программированию, завершаясь всемирным финалом.",
      kk: "7–12 сынып оқушыларына арналған информатикадан халықаралық лига. Теориялық есептер мен бағдарламалау бойынша төрт турдан тұрады, үздіктер әлемдік финалға жолдама алады.",
      en: "International computer science league for grades 7–12 with four regular season rounds testing foundational CS theory (number systems, boolean algebra, graph theory, data structures) and hands-on coding, culminating in an All-Star Finals."
    },
    summary: {
      ru: "Международная лига по информатике: булева алгебра, графы, алгоритмы и программирование для 7–12 классов.",
      kk: "7–12 сыныптарға арналған информатика лигасы: логика, алгоритмдер және бағдарламалау есептері.",
      en: "International team & individual CS league testing computer science theory and programming."
    },
    requirements_checklist: {
      ru: ["Ученик 7–12 класса", "Регистрация индивидуально или в составе школьной команды", "Участие в 4 онлайн-турах в течение учебного года"],
      kk: ["7–12 сынып оқушысы", "Жеке немесе мектеп командасы атынан тіркелу", "Оқу жылы бойы өтетін 4 онлайн турға қатысу"],
      en: ["Enrolled in grades 7–12", "Registered individually or via school club", "Completion of four season contests"]
    },
    official_url: "https://www.acsl.org",
    source_url: "https://www.acsl.org",
    cost_type: "paid",
    cost_amount: 100,
    cost_currency: "USD",
    format: "online",
    location: "Global / Online",
    min_grade: 7,
    max_grade: 12,
    min_age: 13,
    max_age: 18,
    eligibility_countries: [],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Открыто для международных школ и индивидуальных участников со всего мира.",
    language_requirements: ["en"],
    deadline_type: "fixed",
    deadline_date: "2026-12-31",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по acsl.org. Сезонный взнос за команду школы, индивидуальный тариф доступен."
  },
  {
    id: "world-robot-olympiad-global-2027",
    slug: "world-robot-olympiad-global-2027",
    title: {
      ru: "Всемирная олимпиада роботов (World Robot Olympiad - WRO)",
      kk: "Дүниежүзілік роботтар олимпиадасы (World Robot Olympiad - WRO)",
      en: "World Robot Olympiad (WRO) International Finals"
    },
    organization: "World Robot Olympiad Association",
    category: "competition",
    directions: ["robotics", "stem", "computer_science"],
    description: {
      ru: "Крупнейшее в мире соревнование по робототехнике для детей и подростков до 19 лет. Команды проектируют, собирают и программируют автономных роботов для выполнения сложных миссий в реальном времени. Финал объединяет национальные сборные более чем из 85 стран.",
      kk: "19 жасқа дейінгі жастарға арналған әлемдегі ең үлкен робототехника жарысы. Командалар автономды роботтарды құрастырып, бағдарламалайды. Әлемдік финал 85-тен астам елдің жеңімпаздарын жинайды.",
      en: "Global robotics competition for young people up to age 19. Teams design, construct, and program autonomous robots to complete dynamic problem-solving challenges in RoboMission, Future Innovators, and RoboSports."
    },
    summary: {
      ru: "Главная мировая олимпиада по робототехнике: автономные роботы, инженерия и состязания 85+ стран.",
      kk: "Робототехникадан басты әлемдік олимпиада: автономды роботтар және 85-тен астам елдің сайысы.",
      en: "World Robot Olympiad: global autonomous robotics competition gathering national champions from 85+ countries."
    },
    requirements_checklist: {
      ru: ["Возраст участников от 13 до 18 лет в категории Senior", "Команда из 2–3 человек с тренером", "Квалификация через национальный финал (в РК — WRO Kazakhstan)"],
      kk: ["Senior санатында 13 пен 18 жас аралығындағы қатысушылар", "Бапкері бар 2–3 адамнан тұратын команда", "Ұлттық іріктеуден өту (Қазақстанда — WRO Kazakhstan)"],
      en: ["Ages 13–18 in Senior division", "Team of 2–3 students with adult coach", "Qualification via official national partner"]
    },
    official_url: "https://wro-association.org",
    source_url: "https://wro-association.org",
    cost_type: "paid",
    cost_amount: 150,
    cost_currency: "USD",
    format: "offline",
    location: "Host City Rotates Annually (International)",
    min_grade: 7,
    max_grade: 12,
    min_age: 13,
    max_age: 18,
    eligibility_countries: [],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Отбор через национальные федерации во всех странах-участницах.",
    language_requirements: ["en"],
    deadline_type: "annual_estimate",
    deadline_date: "2027-06-30",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по официальному регламенту WRO Association."
  },
  {
    id: "regeneron-isef-science-fair-2027",
    slug: "regeneron-isef-science-fair-2027",
    title: {
      ru: "Международная научно-инженерная ярмарка Regeneron ISEF",
      kk: "Regeneron ISEF халықаралық ғылыми-инженерлік көрмесі",
      en: "Regeneron International Science and Engineering Fair (ISEF)"
    },
    organization: "Society for Science",
    category: "research",
    directions: ["stem", "medicine", "environmental_science", "ai", "robotics"],
    description: {
      ru: "Крупнейший в мире международный смотр научных проектов старшеклассников (9–12 классы). Ежегодно около 1800 финалистов из более чем 75 стран борются за стипендии и награды на сумму свыше $9 млн. Участие возможно только через победу на аффилированной национальной выставке (в Казахстане — Республиканский конкурс научных проектов «Дарын»).",
      kk: "Жоғары сынып (9–12) оқушыларына арналған әлемдегі ең ірі халықаралық ғылыми жобалар көрмесі. Жыл сайын 75-тен астам елдің 1800-ге жуық қатысушысы $9 млн астам жүлде қоры үшін бақ сынайды. Қазақстанда «Дарын» конкурсы арқылы іріктеледі.",
      en: "The world's largest global pre-college science and engineering competition for grades 9–12. Roughly 1,800 finalists from over 75 countries compete for more than $9 million in awards and scholarships. Qualification is exclusively through affiliated national fairs (e.g. Daryn in Kazakhstan)."
    },
    summary: {
      ru: "Олимпийские игры для юных ученых: всемирный финал научных исследований в США с призовым фондом $9 млн.",
      kk: "Жас ғалымдарға арналған әлемдік ғылыми көрме: АҚШ-тағы $9 млн жүлде қоры бар финал.",
      en: "The world's premier pre-college science research fair offering $9M in prizes and scholarships."
    },
    requirements_checklist: {
      ru: ["Ученик 9–12 класса (до 20 лет)", "Самостоятельное научное исследование, соответствующее протоколам безопасности SRC/IRB", "Победа на национальном отборочном смотре (Дарын)"],
      kk: ["9–12 сынып оқушысы", "SRC/IRB халықаралық қауіпсіздік ережелеріне сәйкес келетін ғылыми зерттеу", "Ұлттық көрмеде (Дарын) жеңімпаз атану"],
      en: ["Grades 9–12 student under age 20", "Original science research adhering to SRC/IRB ethics protocols", "Win affiliated regional/national fair"]
    },
    official_url: "https://www.societyforscience.org/isef/",
    source_url: "https://www.societyforscience.org/isef/",
    cost_type: "fully_funded",
    cost_amount: null,
    cost_currency: null,
    format: "offline",
    location: "United States (Rotates: Columbus, Los Angeles, etc.)",
    min_grade: 9,
    max_grade: 12,
    min_age: 14,
    max_age: 18,
    eligibility_countries: [],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Открыто для победителей национальных ярмарок в любой стране мира.",
    language_requirements: ["en"],
    deadline_type: "annual_estimate",
    deadline_date: "2027-04-01",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по societyforscience.org. Поездка делегаций финансируется организаторами/спонсорами."
  },
  {
    id: "bebras-computational-thinking-2027",
    slug: "bebras-computational-thinking-2027",
    title: {
      ru: "Международный конкурс по информатике и логике «Бобер» (Bebras)",
      kk: "Информатика және алгоритмдік ойлаудан халықаралық «Құндыз» (Bebras) байқауы",
      en: "Bebras International Challenge on Informatics and Computational Thinking"
    },
    organization: "International Bebras Community",
    category: "competition",
    directions: ["computer_science", "mathematics", "stem"],
    description: {
      ru: "Всемирный интерактивный конкурс по алгоритмическому и вычислительному мышлению для школьников с 1 по 11 классы. Задачи не требуют предварительных знаний языков программирования и проверяют фундаментальную логику, понимание структур данных и алгоритмов.",
      kk: "1–11 сынып оқушыларына арналған алгоритмдік және логикалық ойлаудан халықаралық интерактивті байқау. Бағдарламалау тілін білуді талап етпейді, таза логика мен алгоритмдік есептерден тұрады.",
      en: "Global challenge on computational thinking and problem solving for school students. Accessible without prior coding experience, featuring interactive puzzles that explore discrete mathematics, algorithms, and informatics concepts."
    },
    summary: {
      ru: "Интерактивный мировой конкурс по алгоритмической логике и информатике без необходимости знания кода.",
      kk: "Бағдарламалау тілін білуді қажет етпейтін логика мен информатикадан халықаралық интерактивті конкурс.",
      en: "Global problem-solving and computational thinking challenge accessible without prior coding background."
    },
    requirements_checklist: {
      ru: ["Ученик 7–11 класса (категории Cadet, Junior, Senior)", "Участие через школу или национального координатора", "Прохождение 45-минутного онлайн-тура"],
      kk: ["7–11 сынып оқушысы", "Мектеп немесе ұлттық үйлестіруші арқылы қатысу", "45 минуттық онлайн тесттен өту"],
      en: ["Grades 7–11 student", "Registration via school coordinator or national hub", "45-minute online interactive challenge"]
    },
    official_url: "https://www.bebras.org",
    source_url: "https://www.bebras.org",
    cost_type: "free",
    cost_amount: null,
    cost_currency: null,
    format: "online",
    location: "Global / Online",
    min_grade: 7,
    max_grade: 11,
    min_age: 13,
    max_age: 18,
    eligibility_countries: [],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Проводится в более чем 60 странах мира.",
    language_requirements: ["ru", "en", "kk"],
    deadline_type: "fixed",
    deadline_date: "2026-11-20",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по bebras.org. Основная неделя Bebras проходит в ноябре."
  },
  {
    id: "international-olympiad-informatics-2027",
    slug: "international-olympiad-informatics-2027",
    title: {
      ru: "Международная олимпиада по информатике (IOI 2027)",
      kk: "Информатикадан халықаралық олимпиада (IOI 2027)",
      en: "International Olympiad in Informatics (IOI 2027)"
    },
    organization: "International Olympiad in Informatics (IOI)",
    category: "competition",
    directions: ["computer_science", "stem"],
    description: {
      ru: "Главное всемирное соревнование по спортивному и алгоритмическому программированию для школьников. Каждую страну представляет национальная сборная из 4 лучших олимпиадников, прошедших национальные отборы и сборы.",
      kk: "Мектеп оқушыларына арналған спорттық бағдарламалаудан басты әлемдік олимпиада. Әр елден ұлттық іріктеуден өткен 4 ең мықты қатысушы бақ сынайды.",
      en: "The pinnacle global competitive programming olympiad for secondary school students. Each participating country sends an official national delegation of up to four students to solve algorithmic challenges."
    },
    summary: {
      ru: "Вершина мирового олимпиадного программирования: чемпионат мира для национальных сборных из 90+ стран.",
      kk: "Олимпиадалық бағдарламалаудың шыңы: 90-нан астам елдің ұлттық құрамаларына арналған әлем чемпионаты.",
      en: "The pinnacle world championship in competitive algorithmic programming for secondary school teams."
    },
    requirements_checklist: {
      ru: ["Школьник до 20 лет", "Вхождение в топ-4 национальной сборной страны по результатам республиканской олимпиады и сборов", "Знание C++ и алгоритмических структур"],
      kk: ["20 жасқа дейінгі мектеп оқушысы", "Ұлттық іріктеу мен оқу-жаттығу жиындары бойынша ел құрамасының үздік төрттігіне кіру", "C++ тілі мен алгоритмдерді жоғары деңгейде білу"],
      en: ["Enrolled in secondary school and under age 20", "Selected for national team via official country olympiad qualifiers", "Mastery of C++ and complex algorithms"]
    },
    official_url: "https://ioinformatics.org",
    source_url: "https://ioinformatics.org",
    cost_type: "fully_funded",
    cost_amount: null,
    cost_currency: null,
    format: "offline",
    location: "Host Country Rotates Annually",
    min_grade: 9,
    max_grade: 12,
    min_age: 14,
    max_age: 19,
    eligibility_countries: [],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Участие в составе национальной сборной команды страны.",
    language_requirements: ["en"],
    deadline_type: "annual_estimate",
    deadline_date: "2027-06-01",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по официальному регламенту IOI."
  },
  {
    id: "international-mathematical-olympiad-2027",
    slug: "international-mathematical-olympiad-2027",
    title: {
      ru: "Международная математическая олимпиада (IMO 2027)",
      kk: "Халықаралық математикалық олимпиада (IMO 2027)",
      en: "International Mathematical Olympiad (IMO 2027)"
    },
    organization: "International Mathematical Olympiad Board",
    category: "competition",
    directions: ["mathematics", "stem"],
    description: {
      ru: "Старейшая и самая престижная всемирная олимпиада по высшей школьной математике (геометрия, теория чисел, комбинаторика, алгебра). Сборная каждой страны формируется из 6 сильнейших школьников по итогам национальных олимпиад.",
      kk: "Жоғары мектеп математикасынан ең көне және ең беделді әлемдік олимпиада. Әр елдің ұлттық құрамасы республикалық олимпиада нәтижесі бойынша 6 ең мықты оқушыдан құралады.",
      en: "The world championship mathematics competition for high school students. National teams of six compete over two grueling exam days solving six proof-based problems in algebra, geometry, number theory, and combinatorics."
    },
    summary: {
      ru: "Главный чемпионат мира по математике для национальных сборных из более чем 110 стран.",
      kk: "110-нан астам елдің ұлттық құрамаларына арналған математикадан басты әлем чемпионаты.",
      en: "The premier proof-based world mathematics championship for national student delegations."
    },
    requirements_checklist: {
      ru: ["Школьник до 20 лет, не зачисленный в вуз", "Квалификация в топ-6 сборной страны через отборы и олимпиаду «Дарын»", "Решение задач международного уровня доказательной математики"],
      kk: ["20 жасқа дейінгі мектеп оқушысы", "«Дарын» олимпиадасы мен іріктеу жиындары бойынша ұлттық құраманың үздік 6 қатарына кіру", "Халықаралық деңгейдегі дәлелдеу есептерін шығара білу"],
      en: ["Pre-university secondary student under 20", "Top 6 qualifier on national team selection tests", "Proof-based problem solving mastery"]
    },
    official_url: "https://www.imo-official.org",
    source_url: "https://www.imo-official.org",
    cost_type: "fully_funded",
    cost_amount: null,
    cost_currency: null,
    format: "offline",
    location: "Host Country Rotates Annually",
    min_grade: 9,
    max_grade: 12,
    min_age: 14,
    max_age: 19,
    eligibility_countries: [],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Участие строго в составе аккредитованной национальной сборной.",
    language_requirements: ["en"],
    deadline_type: "annual_estimate",
    deadline_date: "2027-05-15",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по официальному порталу imo-official.org."
  },
  {
    id: "international-physics-olympiad-2027",
    slug: "international-physics-olympiad-2027",
    title: {
      ru: "Международная физическая олимпиада (IPhO 2027)",
      kk: "Халықаралық физикалық олимпиада (IPhO 2027)",
      en: "International Physics Olympiad (IPhO 2027)"
    },
    organization: "International Physics Olympiad Board",
    category: "competition",
    directions: ["physics", "stem"],
    description: {
      ru: "Всемирный чемпионат по физике среди школьников, включающий теоретический тур и сложнейший лабораторно-экспериментальный тур. Национальная сборная состоит из 5 лучших учащихся страны.",
      kk: "Мектеп оқушылары арасындағы физикадан әлемдік чемпионат. Теориялық және күрделі зертханалық-тәжірибелік турдан тұрады. Ұлттық құрама елдің ең мықты 5 оқушысынан жасақталады.",
      en: "Annual international physics competition for high school students featuring intense theoretical and experimental laboratory rounds for national teams of five delegates."
    },
    summary: {
      ru: "Всемирный чемпионат по теоретической и экспериментальной физике для сборных команд 85+ стран.",
      kk: "85-тен астам елдің құрамаларына арналған теориялық және тәжірибелік физикадан әлем чемпионаты.",
      en: "World physics championship testing advanced theoretical and experimental lab problem solving."
    },
    requirements_checklist: {
      ru: ["Ученик школы до 20 лет", "Вхождение в топ-5 национальной команды по физике", "Навыки проведения физического лабораторного эксперимента и математического анализа"],
      kk: ["20 жасқа дейінгі мектеп оқушысы", "Физикадан ұлттық құраманың үздік 5 қатарына өту", "Зертханалық физикалық тәжірибелер жасау және математикалық талдау дағдылары"],
      en: ["Secondary student under age 20", "Selection for official national top 5 delegation", "Advanced experimental lab and theoretical calculus skills"]
    },
    official_url: "https://www.ipho-new.org",
    source_url: "https://www.ipho-new.org",
    cost_type: "fully_funded",
    cost_amount: null,
    cost_currency: null,
    format: "offline",
    location: "Host Country Rotates Annually",
    min_grade: 9,
    max_grade: 12,
    min_age: 14,
    max_age: 19,
    eligibility_countries: [],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Отбор через республиканскую олимпиаду РНПЦ «Дарын».",
    language_requirements: ["en"],
    deadline_type: "annual_estimate",
    deadline_date: "2027-05-15",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по ipho-new.org."
  },
  {
    id: "international-chemistry-olympiad-2027",
    slug: "international-chemistry-olympiad-2027",
    title: {
      ru: "Международная химическая олимпиада (IChO 2027)",
      kk: "Халықаралық химиялық олимпиада (IChO 2027)",
      en: "International Chemistry Olympiad (IChO 2027)"
    },
    organization: "International Chemistry Olympiad Steering Committee",
    category: "competition",
    directions: ["stem"],
    description: {
      ru: "Престижнейший всемирный турнир по химии для школьников. Включает 5-часовой практический лабораторный синтез и 5-часовой теоретический тур по органической, неорганической, физической и аналитической химии.",
      kk: "Мектеп оқушылары арасындағы химиядан ең беделді дүниежүзілік жарыс. 5 сағаттық практикалық зертханалық синтез бен 5 сағаттық теориялық турдан тұрады.",
      en: "Premier world competition in chemistry for secondary students, consisting of a 5-hour practical laboratory synthesis exam and a 5-hour theoretical examination covering organic, physical, and analytical chemistry."
    },
    summary: {
      ru: "Мировой чемпионат по химии: практический лабораторный синтез и сложная университетская теория.",
      kk: "Химиядан әлемдік чемпионат: тәжірибелік зертханалық синтез және күрделі теориялық тур.",
      en: "World chemistry championship featuring laboratory chemical synthesis and advanced theory exams."
    },
    requirements_checklist: {
      ru: ["Школьник до 20 лет", "Победа в национальном отборе (топ-4 сборной)", "Навыки работы в химической лаборатории и знание органического синтеза"],
      kk: ["20 жасқа дейінгі оқушы", "Ұлттық іріктеуде жеңіске жету (құраманың үздік төрттігі)", "Химиялық зертханада жұмыс істеу және органикалық синтезді білу"],
      en: ["Secondary student under 20", "National team top 4 qualification", "Hands-on chemical synthesis and analysis laboratory skills"]
    },
    official_url: "https://www.icho-official.org",
    source_url: "https://www.icho-official.org",
    cost_type: "fully_funded",
    cost_amount: null,
    cost_currency: null,
    format: "offline",
    location: "Host Country Rotates Annually",
    min_grade: 9,
    max_grade: 12,
    min_age: 14,
    max_age: 19,
    eligibility_countries: [],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Участие в составе сборной Казахстана или своей страны.",
    language_requirements: ["en"],
    deadline_type: "annual_estimate",
    deadline_date: "2027-05-15",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по icho-official.org."
  },
  {
    id: "international-biology-olympiad-2027",
    slug: "international-biology-olympiad-2027",
    title: {
      ru: "Международная биологическая олимпиада (IBO 2027)",
      kk: "Халықаралық биологиялық олимпиада (IBO 2027)",
      en: "International Biology Olympiad (IBO 2027)"
    },
    organization: "International Biology Olympiad Association",
    category: "competition",
    directions: ["medicine", "stem", "environmental_science"],
    description: {
      ru: "Главное всемирное состязание по биологическим наукам для учащихся средних школ. Оценивает глубокие теоретические знания и навыки молекулярной биологии, генетики, анатомии, биохимии и биоинформатики в современных лабораториях.",
      kk: "Орта мектеп оқушыларына арналған биология ғылымдары бойынша басты әлемдік сайыс. Молекулалық биология, генетика, анатомия және биоинформатика саласындағы терең білімді сынайды.",
      en: "The premier biological sciences competition for pre-university students worldwide. Evaluates advanced practical lab dissections, molecular genetics, biochemistry, and theoretical knowledge."
    },
    summary: {
      ru: "Главная мировая олимпиада по биологии и молекулярной генетике для сборных школьников из 75+ стран.",
      kk: "75-тен астам елдің оқушыларына арналған биология және генетикадан басты әлемдік олимпиада.",
      en: "The premier global biology olympiad testing molecular biology, genetics, and anatomy lab skills."
    },
    requirements_checklist: {
      ru: ["Ученик школы до 20 лет", "Отбор в топ-4 национальной сборной страны", "Свободное владение лабораторными методами препарирования и ПЦР/гель-электрофореза"],
      kk: ["20 жасқа дейінгі мектеп оқушысы", "Ұлттық құраманың үздік 4 қатарына өту", "Зертханалық әдістерді, ПТР және гель-электрофорезді меңгеру"],
      en: ["Secondary school student under age 20", "National top 4 team qualifier", "Practical expertise in molecular biology protocols and anatomy"]
    },
    official_url: "https://www.ibo-info.org",
    source_url: "https://www.ibo-info.org",
    cost_type: "fully_funded",
    cost_amount: null,
    cost_currency: null,
    format: "offline",
    location: "Host Country Rotates Annually",
    min_grade: 9,
    max_grade: 12,
    min_age: 14,
    max_age: 19,
    eligibility_countries: [],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Отбор через национальные туры.",
    language_requirements: ["en"],
    deadline_type: "annual_estimate",
    deadline_date: "2027-05-15",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по ibo-info.org."
  },
  {
    id: "egoi-girls-informatics-olympiad-2027",
    slug: "egoi-girls-informatics-olympiad-2027",
    title: {
      ru: "Европейская олимпиада по информатике для девушек (EGOI 2027)",
      kk: "Қыздарға арналған Еуропалық информатика олимпиадасы (EGOI 2027)",
      en: "European Girls' Olympiad in Informatics (EGOI 2027)"
    },
    organization: "EGOI International Committee",
    category: "competition",
    directions: ["computer_science", "stem"],
    description: {
      ru: "Престижная международная олимпиада по алгоритмическому программированию для школьниц, созданная по образцу IOI. Включает команды из европейских стран и приглашенных государств (включая Казахстан). Направлена на поддержку девушек в IT.",
      kk: "Қыздарға арналған алгоритмдік бағдарламалаудан беделді халықаралық олимпиада. Еуропа елдері мен шақырылған мемлекеттердің (соның ішінде Қазақстанның) құрамалары қатысады.",
      en: "Prestigious international algorithmic programming competition modeled after the IOI, designed specifically for female high school students. European nations and guest countries (including Kazakhstan) field teams of four."
    },
    summary: {
      ru: "Международная олимпиада по спортивному программированию для девушек-школьниц.",
      kk: "Мектеп жасындағы қыздарға арналған спорттық бағдарламалаудан халықаралық олимпиада.",
      en: "Premier international competitive programming olympiad exclusively for young women."
    },
    requirements_checklist: {
      ru: ["Девушки, обучающиеся в средней/старшей школе", "Отбор в топ-4 национального женского рейтинга по олимпиадному программированию", "Уверенное владение C++ и алгоритмическими структурами"],
      kk: ["Орта немесе жоғары сыныпта оқитын қыздар", "Олимпиадалық бағдарламалаудан ұлттық қыздар құрамасының үздік төрттігіне кіру", "C++ және күрделі алгоритмдерді меңгеру"],
      en: ["Female secondary school student", "Top 4 selection on national girls' informatics qualifier", "Competitive programming mastery in C++"]
    },
    official_url: "https://egoi.org",
    source_url: "https://egoi.org",
    cost_type: "fully_funded",
    cost_amount: null,
    cost_currency: null,
    format: "offline",
    location: "Host City in Europe (Rotates Annually)",
    min_grade: 8,
    max_grade: 12,
    min_age: 13,
    max_age: 19,
    eligibility_countries: [],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Открыто для сборных стран Европы и официально приглашенных стран (Казахстан участвует ежегодно).",
    language_requirements: ["en"],
    deadline_type: "annual_estimate",
    deadline_date: "2027-04-30",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по egoi.org. Сборная Казахстана формируется РНПЦ «Дарын»."
  }
];
