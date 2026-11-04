import { OpportunityContract } from './types';

export const LEGACY_CONVERTED: OpportunityContract[] = [
  {
    id: "open-doors-olympiad-2027",
    slug: "open-doors-olympiad-2027",
    title: {
      ru: "Международная университетская олимпиада Open Doors",
      kk: "Open Doors халықаралық университеттер олимпиадасы",
      en: "Open Doors International Olympiad & Full Scholarship"
    },
    organization: "Ассоциация «Глобальные университеты»",
    category: "scholarship",
    directions: ["stem", "computer_science", "business", "research"],
    description: {
      ru: "Международная онлайн-олимпиада для выпускников школ и студентов, дающая право на 100% бесплатное высшее образование, ежемесячную государственную стипендию и проживание в общежитии ведущих исследовательских университетов.",
      kk: "Мектеп бітірушілері мен студенттерге жетекші зерттеу университеттерінде 100% тегін жоғары білім, ай сайынғы мемлекеттік шәкіртақы және жатақхана беретін халықаралық онлайн олимпиада.",
      en: "International online academic competition offering 100% full-tuition scholarships, monthly living stipends, and priority dorm accommodation at leading research universities."
    },
    summary: {
      ru: "Международная олимпиада со 100% грантом на высшее образование и ежемесячной стипендией.",
      kk: "Жоғары білімге 100% мемлекеттік грант пен шәкіртақы беретін халықаралық олимпиада.",
      en: "International olympiad awarding 100% full tuition scholarships and monthly stipends."
    },
    requirements_checklist: {
      ru: ["Выпускник школы (11–12 класс) или студент", "Заполнение онлайн-портфолио академических достижений", "Прохождение онлайн-тестирования по выбранному предмету"],
      kk: ["Мектеп бітірушісі (11–12 сынып) немесе студент", "Академиялық жетістіктер портфолиосын толтыру", "Таңдалған пән бойынша онлайн тестілеуден өту"],
      en: ["Graduating senior or pre-university student", "Portfolio of academic achievements", "Online proctored subject examinations"]
    },
    official_url: "https://od.globaluni.ru/en/",
    source_url: "https://od.globaluni.ru/en/",
    cost_type: "fully_funded",
    cost_amount: null,
    cost_currency: null,
    format: "online",
    location: "Global / Online",
    min_grade: 11,
    max_grade: 12,
    min_age: 16,
    max_age: 24,
    eligibility_countries: [],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Открыто для иностранных граждан, включая Казахстан.",
    language_requirements: ["en", "ru"],
    deadline_type: "fixed",
    deadline_date: "2026-12-10",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по od.globaluni.ru."
  },
  {
    id: "chevening-youth-leaders-2027",
    slug: "chevening-youth-leaders-2027",
    title: {
      ru: "Молодежная программа развития лидерства Chevening",
      kk: "Chevening жас көшбасшыларды дамыту бағдарламасы",
      en: "Chevening Youth Leadership & Ambassador Program"
    },
    organization: "UK Foreign, Commonwealth & Development Office",
    category: "fellowship",
    directions: ["leadership", "social_sciences", "humanities"],
    description: {
      ru: "Международная сеть и программа развития лидерских компетенций для молодых активистов и будущих дипломатов от британского внешнеполитического ведомства (FCDO). Включает менторские сессии с выпускниками программы Chevening и дипломатами.",
      kk: "Британдық FCDO ведомствосының болашақ дипломаттар мен жас белсенділерге арналған көшбасшылық бағдарламасы. Chevening түлектерімен тәлімгерлік сессияларды қамтиды.",
      en: "Leadership development and networking program sponsored by the UK FCDO for young changemakers and aspiring diplomats, connecting future leaders with Chevening alumni and embassy mentors."
    },
    summary: {
      ru: "Международная сеть и развитие лидерства от правительства Великобритании для будущих дипломатов.",
      kk: "Болашақ дипломаттар мен белсенділерге арналған Ұлыбритания үкіметінің көшбасшылық бағдарламасы.",
      en: "Prestigious leadership and diplomacy network sponsored by the UK government for young changemakers."
    },
    requirements_checklist: {
      ru: ["Возраст 15–19 лет", "Опыт общественной деятельности или волонтерства", "Эссе о лидерском видении и владение английским языком"],
      kk: ["15 пен 19 жас аралығы", "Қоғамдық немесе еріктілік қызмет тәжірибесі", "Көшбасшылық туралы эссе және ағылшын тілін білу"],
      en: ["Ages 15–19", "Community leadership or volunteering track record", "Essay on leadership vision in English"]
    },
    official_url: "https://www.chevening.org/",
    source_url: "https://www.chevening.org/",
    cost_type: "free",
    cost_amount: null,
    cost_currency: null,
    format: "online",
    location: "Global / Online",
    min_grade: 9,
    max_grade: 12,
    min_age: 15,
    max_age: 19,
    eligibility_countries: [],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Открыто по всему миру.",
    language_requirements: ["en"],
    deadline_type: "fixed",
    deadline_date: "2026-11-05",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по chevening.org."
  },
  {
    id: "mit-primes-usa-2027",
    slug: "mit-primes-usa-2027",
    title: {
      ru: "Исследовательская программа MIT PRIMES по математике и CS",
      kk: "MIT PRIMES математика және CS зерттеу бағдарламасы",
      en: "MIT PRIMES High School Research Program in Math & CS"
    },
    organization: "Massachusetts Institute of Technology (MIT)",
    category: "research",
    directions: ["mathematics", "computer_science", "stem"],
    description: {
      ru: "Годичная научная программа Массачусетского технологического института (MIT) для одаренных школьников. Участники работают над нерешенными научными проблемами чистой и прикладной математики и компьютерных наук под наставничеством профессоров и постдоков MIT.",
      kk: "Дарынды оқушыларға арналған Массачусетс технологиялық институтының (MIT) бір жылдық зерттеу бағдарламасы. Қатысушылар MIT ғалымдарының жетекшілігімен ашық ғылыми математикалық мәселелерді зерттейді.",
      en: "Year-long math and computer science research program for high school students. Students work on unsolved research problems under direct mentorship from MIT faculty and PhD researchers, producing publishable papers."
    },
    summary: {
      ru: "Годичная научная программа по высшей математике и CS под руководством профессоров MIT.",
      kk: "MIT профессорларының жетекшілігімен жоғары математика және CS бойынша 1 жылдық зерттеу.",
      en: "Year-long research program in mathematics and computer science mentored by MIT faculty."
    },
    requirements_checklist: {
      ru: ["Ученик 10–11 классов", "Решение сложнейшего вступительного математического задания PRIMES Problem Set", "Рекомендация преподавателя математики и мотивационное письмо"],
      kk: ["10–11 сынып оқушысы", "PRIMES күрделі математикалық есептер топтамасын өздігінен шығару", "Математика мұғалімінің ұсыныс хаты"],
      en: ["Grades 10–11 student", "Independent solutions to the rigorous PRIMES Problem Set", "Math teacher recommendation and statement of interest"]
    },
    official_url: "https://math.mit.edu/research/highschool/primes/",
    source_url: "https://math.mit.edu/research/highschool/primes/usa/",
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
    citizenship_note: "PRIMES-USA открыт для школьников, проживающих в США, международные школьники могут участвовать в партнерских секциях.",
    language_requirements: ["en"],
    deadline_type: "fixed",
    deadline_date: "2026-11-30",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по math.mit.edu/primes. Бесплатное обучение."
  },
  {
    id: "stanford-simr-biomedical-2027",
    slug: "stanford-simr-biomedical-2027",
    title: {
      ru: "Биомедицинская научная стажировка Стэнфорда (Stanford SIMR)",
      kk: "Стэнфорд университетінің биомедициналық ғылыми тәжірибесі (Stanford SIMR)",
      en: "Stanford SIMR Biomedical Research Program"
    },
    organization: "Stanford University School of Medicine",
    category: "research",
    directions: ["medicine", "stem"],
    description: {
      ru: "8-недельная очная практическая стажировка для старшеклассников в исследовательских лабораториях медицинской школы Стэнфордского университета. Участники работают над темами иммунологии, стволовых клеток, нейробиологии и онкологии и получают стипендию от $500.",
      kk: "Стэнфорд университетінің медицина мектебіндегі 11–12 сынып оқушыларына арналған 8 апталық зертханалық тәжірибе. Иммунология, бағаналы жасушалар және онкология бағыттарын оқытады. $500-ден басталатын шәкіртақы беріледі.",
      en: "Eight-week hands-on biomedical research internship at Stanford University School of Medicine labs. High school juniors and seniors conduct independent projects in immunology, cancer biology, or neurobiology, receiving a minimum $500 stipend."
    },
    summary: {
      ru: "8 недель исследований в лабораториях Стэнфордского университета со стипендией от $500.",
      kk: "Стэнфорд университетінің медициналық зертханаларында 8 апталық тәжірибе және $500 шәкіртақы.",
      en: "Eight-week hands-on biomedical research internship at Stanford Medical School with a stipend."
    },
    requirements_checklist: {
      ru: ["Возраст не менее 16 лет, ученик 11–12 класса", "Пройденный курс биологии или химии с отличием", "Эссе и рекомендации учителей естественных наук"],
      kk: ["Кемінде 16 жаста болу, 11–12 сынып оқушысы", "Биология немесе химия пәнін үздік оқу", "Эссе және жаратылыстану мұғалімдерінің ұсынысы"],
      en: ["Ages 16+ in grades 11–12", "Completed coursework in high school biology or chemistry", "Letters of recommendation and application essays"]
    },
    official_url: "https://simr.stanford.edu",
    source_url: "https://simr.stanford.edu",
    cost_type: "stipend",
    cost_amount: 500,
    cost_currency: "USD",
    format: "offline",
    location: "Stanford, CA, USA",
    min_grade: 11,
    max_grade: 12,
    min_age: 16,
    max_age: 18,
    eligibility_countries: ["US"],
    excluded_countries: [],
    citizenship_rule: "us_only",
    citizenship_note: "Участники должны быть гражданами или постоянными жителями США (грин-карта) и проживать в США.",
    language_requirements: ["en"],
    deadline_type: "fixed",
    deadline_date: "2027-02-24",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по simr.stanford.edu."
  },
  {
    id: "nus-iris-internship-2027",
    slug: "nus-iris-internship-2027",
    title: {
      ru: "Научно-исследовательская стажировка NUS IRIS в Сингапуре",
      kk: "Сингапурдағы NUS IRIS ғылыми-зерттеу тағылымдамасы",
      en: "NUS IRIS International Research Internship (Singapore)"
    },
    organization: "National University of Singapore (NUS)",
    category: "internship",
    directions: ["stem", "computer_science", "medicine", "research"],
    description: {
      ru: "Полностью финансируемая научная стажировка в Национальном университете Сингапура (NUS — топ-10 университетов мира). Предоставляются авиаперелет в Сингапур, проживание в резиденции кампуса и ежемесячная стипендия.",
      kk: "Сингапур Ұлттық университетіндегі (NUS — әлемнің үздік 10 университеті) толық қаржыландырылатын ғылыми тағылымдама. Ұшу билеттері, кампуста тұру және ай сайынғы шәкіртақы қамтамасыз етіледі.",
      en: "Fully funded research internship at the National University of Singapore (NUS, top 10 globally). Finalists receive round-trip international airfare, campus accommodation, and a monthly research stipend."
    },
    summary: {
      ru: "Полностью оплачиваемая исследовательская стажировка в Сингапуре в NUS с перелетом и стипендией.",
      kk: "Сингапурдағы NUS университетінде ұшу билеті мен шәкіртақысы бар толық тегін тағылымдама.",
      en: "Fully funded research internship at the National University of Singapore with airfare and stipend."
    },
    requirements_checklist: {
      ru: ["Возраст от 16 лет", "Высокая академическая успеваемость в STEM-дисциплинах", "Резюме (CV), транскрипт и мотивационное письмо на английском языке"],
      kk: ["16 жастан асқан болу", "STEM пәндері бойынша жоғары оқу үлгерімі", "Түйіндеме (CV), бағалар табелі және ағылшын тіліндегі мотивациялық хат"],
      en: ["Ages 16 and older", "Demonstrated STEM research excellence", "Curriculum Vitae, transcript, and research statement"]
    },
    official_url: "https://nus.edu.sg",
    source_url: "https://opportunitiescorners.com/nus-iris-internship-2027/",
    cost_type: "fully_funded",
    cost_amount: null,
    cost_currency: null,
    format: "offline",
    location: "Singapore",
    min_grade: 11,
    max_grade: 12,
    min_age: 16,
    max_age: 21,
    eligibility_countries: [],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Открыто для школьников и студентов любых стран мира.",
    language_requirements: ["en"],
    deadline_type: "fixed",
    deadline_date: "2026-11-30",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по официальному порталу NUS."
  },
  {
    id: "un-youth-delegate-program-2027",
    slug: "un-youth-delegate-program-2027",
    title: {
      ru: "Программа молодежных делегатов ООН (UN Youth Delegate)",
      kk: "БҰҰ жастар делегаттары бағдарламасы (UN Youth Delegate)",
      en: "United Nations Youth Delegate Programme"
    },
    organization: "United Nations (UN DESA)",
    category: "internship",
    directions: ["leadership", "social_sciences", "humanities"],
    description: {
      ru: "Официальная программа участия молодежи в работе Генеральной Ассамблеи ООН в Нью-Йорке и международных дипломатических органах. Молодежные делегаты входят в состав официальных правительственных делегаций своих стран и представляют интересы школьников и студентов на международной арене.",
      kk: "Нью-Йорктегі БҰҰ Бас Ассамблеясы мен дипломатиялық органдардың жұмысына жастарды қатыстыратын ресми бағдарлама. Жастар өз елдерінің ресми мемлекеттік делегациясы сапында жастардың мүдделерін қорғайды.",
      en: "Official United Nations initiative allowing youth representatives to participate in the UN General Assembly in New York and other intergovernmental meetings as part of their country's official diplomatic delegation."
    },
    summary: {
      ru: "Представляй молодежь своей страны на Генеральной Ассамблее ООН в Нью-Йорке и Женеве.",
      kk: "Нью-Йорк пен Женевадағы БҰҰ Бас Ассамблеясында өз еліңнің жастары атынан сөз сөйле.",
      en: "Official program representing youth interests at the UN General Assembly in New York."
    },
    requirements_checklist: {
      ru: ["Возраст от 16 лет", "Опыт в молодежной политике, дипломатии или защите прав человека", "Свободный английский язык и прохождение национального конкурса МИД"],
      kk: ["16 жастан жоғары", "Жастар саясаты немесе дипломатиядағы тәжірибе", "Ағылшын тілін еркін меңгеру және Сыртқы істер министрлігінің байқауынан өту"],
      en: ["Ages 16+", "Documented youth advocacy and diplomatic skills", "Fluent English and selection via national Ministry of Foreign Affairs"]
    },
    official_url: "https://www.un.org/development/desa/youth/what-we-do/un-youth-delegate-programme.html",
    source_url: "https://www.un.org/development/desa/youth/what-we-do/un-youth-delegate-programme.html",
    cost_type: "fully_funded",
    cost_amount: null,
    cost_currency: null,
    format: "hybrid",
    location: "New York City, USA & Geneva, Switzerland",
    min_grade: 11,
    max_grade: 12,
    min_age: 16,
    max_age: 25,
    eligibility_countries: [],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Отбор координируется министерствами иностранных дел или национальными молодежными советами стран-членов ООН.",
    language_requirements: ["en"],
    deadline_type: "annual_estimate",
    deadline_date: "2027-06-30",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по официальному порталу ООН un.org."
  },
  {
    id: "nazarbayev-foundation-prep-2027",
    slug: "nazarbayev-foundation-prep-2027",
    title: {
      ru: "Подготовительные программы и Дни открытых дверей Назарбаев Университета (NUFYP Prep)",
      kk: "Назарбаев Университетінің NUFYP дайындық бағдарламалары және Ашық есік күндері",
      en: "Nazarbayev University NUFYP Prep & Admissions Guidance"
    },
    organization: "Nazarbayev University",
    category: "summer_school",
    directions: ["stem", "business", "humanities"],
    description: {
      ru: "Официальные подготовительные тренинги, мастер-классы и консультации приемной комиссии Назарбаев Университета в Астане для будущих абитуриентов бесплатной подготовительной программы NUFYP (Foundation).",
      kk: "Астана қаласындағы Назарбаев Университетінің тегін NUFYP (Foundation) бағдарламасына түсуге дайындайтын ресми шеберлік сабақтары мен кеңес беру шаралары.",
      en: "Official informational sessions, admissions workshops, and test preparation seminars hosted by Nazarbayev University in Astana for high school students preparing for the state-funded NUFYP foundation year."
    },
    summary: {
      ru: "Официальная подготовка и дни открытых дверей Назарбаев Университета для абитуриентов программы Foundation.",
      kk: "Назарбаев Университетінің тегін Foundation бағдарламасына дайындық және ақпараттық күндері.",
      en: "Official preparation sessions and open days for Nazarbayev University's NUFYP foundation year."
    },
    requirements_checklist: {
      ru: ["Ученик 10–12 класса общеобразовательной школы", "Подготовка к сдаче IELTS/TOEFL и экзаменам NUET/SAT", "Регистрация на портале admissions.nu.edu.kz"],
      kk: ["Орта мектептің 10–12 сынып оқушысы", "IELTS/TOEFL және NUET/SAT емтихандарына дайындық", "admissions.nu.edu.kz порталында тіркелу"],
      en: ["High school student (grades 10–12)", "Preparation for IELTS/TOEFL and NUET/SAT tests", "Registration via NU admissions portal"]
    },
    official_url: "https://nu.edu.kz/admissions",
    source_url: "https://nu.edu.kz/admissions",
    cost_type: "free",
    cost_amount: null,
    cost_currency: null,
    format: "hybrid",
    location: "Astana, Kazakhstan & Online",
    min_grade: 10,
    max_grade: 12,
    min_age: 15,
    max_age: 18,
    eligibility_countries: ["KZ"],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Для абитуриентов из Казахстана и зарубежных стран.",
    language_requirements: ["en", "ru", "kk"],
    deadline_type: "fixed",
    deadline_date: "2026-12-30",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по admissions.nu.edu.kz."
  },
  {
    id: "code-org-global-mentor-2027",
    slug: "code-org-global-mentor-2027",
    title: {
      ru: "Глобальное волонтерское наставничество Code.org",
      kk: "Code.org жаһандық еріктілік тәлімгерлік қозғалысы",
      en: "Code.org Global Peer Mentor Initiative"
    },
    organization: "Code.org",
    category: "volunteering",
    directions: ["computer_science", "stem", "social_sciences"],
    description: {
      ru: "Всемирная образовательная волонтерская программа. Старшеклассники, владеющие базовыми навыками кодинга (Scratch, Python, JavaScript), помогают младшим школьникам осваивать программирование в рамках глобальной инициативы «Час кода» (Hour of Code).",
      kk: "Мектеп жасындағы бағдарламашылардың дүниежүзілік еріктілік бағдарламасы. Жоғары сынып оқушылары кіші сыныптарға Scratch және Python тілдерін үйретеді.",
      en: "Global educational volunteer program where high school coders teach fundamentals of computer science (Scratch, Python, JavaScript) to younger peers, earning certified service hours."
    },
    summary: {
      ru: "Волонтерство для школьников-программистов: обучение младших детей кодингу с подтвержденными часами.",
      kk: "Бағдарламалауды білетін оқушыларға арналған еріктілік: кіші сыныптарға код жазуды тегін үйрету.",
      en: "Volunteer initiative where high school coders mentor younger peers in introductory computer science."
    },
    requirements_checklist: {
      ru: ["Возраст от 14 лет", "Базовое понимание алгоритмов и программирования (Scratch, Python или JS)", "Желание обучать и готовность уделять от 1 часа в неделю"],
      kk: ["14 жастан жоғары", "Алгоритмдер мен бағдарламалаудың бастапқы негіздерін білу", "Аптасына 1 сағат уақыт бөлуге дайын болу"],
      en: ["Ages 14+", "Foundational knowledge of Scratch, Python, or JS", "Commitment of at least 1 hour weekly"]
    },
    official_url: "https://code.org",
    source_url: "https://code.org",
    cost_type: "free",
    cost_amount: null,
    cost_currency: null,
    format: "online",
    location: "Global / Online",
    min_grade: 8,
    max_grade: 12,
    min_age: 14,
    max_age: 18,
    eligibility_countries: [],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Открыто по всему миру.",
    language_requirements: ["en", "ru"],
    deadline_type: "rolling",
    deadline_date: null,
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по code.org."
  }
];
