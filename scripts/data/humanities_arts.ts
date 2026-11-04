import { OpportunityContract } from './types';

export const HUMANITIES_ARTS: OpportunityContract[] = [
  {
    id: "john-locke-essay-competition-2027",
    slug: "john-locke-essay-competition-2027",
    title: {
      ru: "Международный конкурс эссе Института Джона Локка (John Locke Essay Competition)",
      kk: "Джон Локк институтының халықаралық эссе байқауы (John Locke Essay Competition)",
      en: "John Locke Institute Global Essay Competition 2027"
    },
    organization: "John Locke Institute (Oxford / Princeton)",
    category: "competition",
    directions: ["humanities", "social_sciences"],
    description: {
      ru: "Самый престижный международный конкурс академических эссе для школьников до 18 лет (и категория Junior до 14 лет). Направления: Философия, Политика, Экономика, История, Право, Теология, Психология. Эссе оценивают профессора Оксфорда и Принстона. Победители получают стипендии на обучение и приглашение на гала-церемонию в Лондоне.",
      kk: "18 жасқа дейінгі оқушыларға арналған әлемдегі ең беделді академиялық эссе байқауы (14 жасқа дейінгі Junior санаты да бар). Бағыттары: Философия, Саясат, Экономика, Тарих, Құқық, Теология. Эсселерді Оксфорд және Принстон профессорлары тексереді.",
      en: "The world's most prestigious pre-college academic essay competition for students aged 18 and under (with a Junior Prize for under-14s). Categories include Philosophy, Politics, Economics, History, Law, Theology, and Psychology. Judged by senior academics from Oxford and Princeton."
    },
    summary: {
      ru: "Престижнейший конкурс эссе по философии, экономике, праву и истории с оценкой профессорами Оксфорда.",
      kk: "Оксфорд және Принстон профессорлары бағалайтын философия, құқық және экономикадан әлемдік эссе байқауы.",
      en: "World's premier pre-college essay competition judged by Oxford and Princeton senior faculty."
    },
    requirements_checklist: {
      ru: ["Возраст до 18 лет на дату дедлайна (или до 14 лет для категории Junior)", "Оригинальное эссе объемом до 2000 слов по одному из официальных вопросов", "Подача через онлайн-портал Института Джона Локка"],
      kk: ["Дедлайн күніне сәйкес 18 жасқа дейін (немесе Junior үшін 14 жасқа дейін)", "Ресми сұрақтардың біріне 2000 сөзге дейінгі жеке академиялық эссе", "Джон Локк институтының онлайн порталы арқылы жіберу"],
      en: ["Aged 18 or under (or 14 and under for Junior Prize)", "Original argumentative essay up to 2,000 words addressing an official prompt", "Submitted via official John Locke Institute portal"]
    },
    official_url: "https://www.johnlockeinstitute.com",
    source_url: "https://www.johnlockeinstitute.com/essay-competition",
    cost_type: "free",
    cost_amount: null,
    cost_currency: null,
    format: "online",
    location: "Global / London Gala Dinner",
    min_grade: 7,
    max_grade: 12,
    min_age: 13,
    max_age: 18,
    eligibility_countries: [],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Открыто для школьников со всего мира. Бесплатная подача до основного дедлайна.",
    language_requirements: ["en"],
    deadline_type: "fixed",
    deadline_date: "2027-05-31",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по johnlockeinstitute.com. Темы публикуются в феврале, дедлайн — 31 мая."
  },
  {
    id: "immerse-education-essay-competition-2027",
    slug: "immerse-education-essay-competition-2027",
    title: {
      ru: "Международный конкурс эссе Immerse Education",
      kk: "Immerse Education халықаралық эссе байқауы",
      en: "Immerse Education Global Essay Competition 2027"
    },
    organization: "Immerse Education (Cambridge)",
    category: "competition",
    directions: ["humanities", "social_sciences", "stem", "medicine", "business"],
    description: {
      ru: "Глобальный конкурс эссе для школьников 13–18 лет. Победители получают 100% стипендии (покрытие полной стоимости) на участие в двухнедельных летних академических школах в колледжах Кембриджа, Оксфорда, Сиднея или Лондона.",
      kk: "13 пен 18 жас аралығындағы оқушыларға арналған халықаралық эссе байқауы. Жеңімпаздар Кембридж, Оксфорд немесе Сидней колледждеріндегі 2 апталық жазғы академияда тегін оқуға 100% грант ұтып алады.",
      en: "Global essay competition for students ages 13–18. Winners are awarded full 100% scholarships to attend two-week academic summer programmes hosted at historic colleges of Cambridge, Oxford, Sydney, or London."
    },
    summary: {
      ru: "Напиши эссе и выиграй 100% стипендию на летнюю академию в колледжах Оксфорда или Кембриджа.",
      kk: "Эссе жазып, Оксфорд немесе Кембридж колледждеріндегі жазғы академияға 100% тегін грант ұтып ал.",
      en: "Submit an essay to win full 100% scholarships to summer pre-college programmes at Oxford or Cambridge."
    },
    requirements_checklist: {
      ru: ["Возраст от 13 до 18 лет", "Эссе объемом не более 1000 слов по выбранному академическому вопросу", "Заполнение формы участника на официальном сайте"],
      kk: ["13 пен 18 жас аралығы", "Таңдалған пән сұрағы бойынша 1000 сөзден аспайтын эссе", "Ресми сайттағы қатысушы сауалнамасын толтыру"],
      en: ["Ages 13–18", "Original essay of up to 1,000 words on an approved question", "Submission through Immerse portal"]
    },
    official_url: "https://www.immerse.education",
    source_url: "https://www.immerse.education/essay-competition/",
    cost_type: "free",
    cost_amount: null,
    cost_currency: null,
    format: "online",
    location: "Global / Oxford & Cambridge Colleges",
    min_grade: 8,
    max_grade: 12,
    min_age: 13,
    max_age: 18,
    eligibility_countries: [],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Открыто для школьников любых стран мира.",
    language_requirements: ["en"],
    deadline_type: "fixed",
    deadline_date: "2027-01-05",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по immerse.education. Два тура в год."
  },
  {
    id: "international-philosophy-olympiad-2027",
    slug: "international-philosophy-olympiad-2027",
    title: {
      ru: "Международная философская олимпиада (IPO 2027)",
      kk: "Халықаралық философиялық олимпиада (IPO 2027)",
      en: "International Philosophy Olympiad (IPO 2027)"
    },
    organization: "International Federation of Philosophical Societies (FISP) & UNESCO",
    category: "competition",
    directions: ["humanities", "social_sciences"],
    description: {
      ru: "Официальная всемирная олимпиада по философии для школьников под эгидой ЮНЕСКО и FISP. Участники пишут 4-часовое философское эссе на иностранном для себя языке (английский, французский, немецкий или испанский) по одной из 4 предложенных цитат великих мыслителей.",
      kk: "ЮНЕСКО және FISP қолдауымен өтетін оқушыларға арналған философиядан ресми әлемдік олимпиада. Қатысушылар ұлы ойшылдардың дәйексөздері бойынша шет тілінде 4 сағаттық философиялық эссе жазады.",
      en: "The official world philosophy competition for high school students organized under the auspices of FISP and UNESCO. Participants write an argumentative philosophical essay over four hours in an official language that is not their mother tongue."
    },
    summary: {
      ru: "Всемирная философская олимпиада под эгидой ЮНЕСКО: 4-часовое эссе по цитатам великих мыслителей.",
      kk: "ЮНЕСКО аясындағы дүниежүзілік философия олимпиадасы: ойшылдар дәйексөздеріне 4 сағаттық эссе жазу.",
      en: "Global philosophy essay competition for secondary students under the auspices of UNESCO and FISP."
    },
    requirements_checklist: {
      ru: ["Ученик старшей школы (до 20 лет)", "Квалификация в топ-2 национальной сборной страны по философии", "Написание эссе на иностранном языке (английском, французском, немецком или испанском)"],
      kk: ["Жоғары мектеп оқушысы (20 жасқа дейін)", "Философиядан ел құрамасының үздік екі қатысушысы қатарына өту", "Шет тілінде (ағылшын, француз, неміс) эссе жаза білу"],
      en: ["Secondary school student under age 20", "National delegation selection (top 2 candidates)", "Essay written in a language other than native tongue"]
    },
    official_url: "https://www.philosophy-olympiad.org",
    source_url: "https://www.philosophy-olympiad.org",
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
    citizenship_note: "Отбор через национальные комитеты и олимпиаду «Дарын» по критическому мышлению.",
    language_requirements: ["en"],
    deadline_type: "annual_estimate",
    deadline_date: "2027-04-15",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по philosophy-olympiad.org. Финал проходит в мае."
  },
  {
    id: "world-schools-debating-2027",
    slug: "world-schools-debating-2027",
    title: {
      ru: "Чемпионат мира по школьным дебатам (WSDC 2027)",
      kk: "Мектеп оқушыларының дебаттан әлем чемпионаты (WSDC 2027)",
      en: "World Schools Debating Championships (WSDC 2027)"
    },
    organization: "World Schools Debating Championships Tournament Committee",
    category: "competition",
    directions: ["leadership", "social_sciences", "humanities"],
    description: {
      ru: "Главный всемирный турнир по парламентским дебатам для школьников. Каждую страну представляет официальная национальная сборная из 3–5 спикеров. Формат сочетает подготовленные и импровизированные раунды по геополитике, правам человека, этике и экономике.",
      kk: "Мектеп оқушыларына арналған парламенттік дебаттан басты әлем чемпионаты. Әр елден 3–5 спикерден тұратын ұлттық құрама қатысады. Саясат, құқық және экономика тақырыптарында пікірсайыстар өтеді.",
      en: "The premier global parliamentary debating championship for secondary school national teams. Each nation selects a squad of 3 to 5 student debaters competing across prepared and impromptu motions on international affairs, ethics, and jurisprudence."
    },
    summary: {
      ru: "Чемпионат мира по дебатам для национальных сборных школьников из более чем 70 стран.",
      kk: "70-тен астам елдің оқушылар ұлттық құрамаларына арналған дебаттан әлем чемпионаты.",
      en: "The premier world parliamentary debating championship for official high school national teams."
    },
    requirements_checklist: {
      ru: ["Школьник до 19 лет", "Вхождение в состав национальной сборной страны по результатам национального отбора", "Свободное владение аргументацией и ораторским искусством на английском языке"],
      kk: ["19 жасқа дейінгі мектеп оқушысы", "Ұлттық іріктеу қорытындысы бойынша ел құрамасына ену", "Ағылшын тілінде шешендік өнер мен дәлелдеуді еркін меңгеру"],
      en: ["Enrolled secondary student under 19", "Selected for official national debating team", "Fluent English oral argumentation skills"]
    },
    official_url: "https://wsdcdebating.org",
    source_url: "https://wsdcdebating.org",
    cost_type: "paid",
    cost_amount: 800,
    cost_currency: "USD",
    format: "offline",
    location: "Host Country Rotates Annually",
    min_grade: 9,
    max_grade: 12,
    min_age: 14,
    max_age: 19,
    eligibility_countries: [],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Участие в составе сборной Казахстана (Team Kazakhstan) или своей страны.",
    language_requirements: ["en"],
    deadline_type: "annual_estimate",
    deadline_date: "2027-04-30",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по wsdcdebating.org."
  },
  {
    id: "harvard-model-un-hmun-2027",
    slug: "harvard-model-un-hmun-2027",
    title: {
      ru: "Гарвардская Модель ООН для школьников (Harvard Model United Nations - HMUN)",
      kk: "Гарвард оқушылар БҰҰ Моделі (Harvard Model United Nations - HMUN)",
      en: "Harvard Model United Nations (HMUN) 2027"
    },
    organization: "Harvard International Relations Council",
    category: "competition",
    directions: ["leadership", "social_sciences", "humanities"],
    description: {
      ru: "Старейшая и крупнейшая в мире конференция Модели ООН для старшеклассников, ежегодно собирающая более 4000 делегатов из 50+ стран в Бостоне. Делегаты участвуют в комитетах Генеральной Ассамблеи, ЭКОСОС и исторических кризисных комитетах.",
      kk: "Бостон қаласында жыл сайын 50-ден астам елдің 4000-нан астам делегатын жинайтын әлемдегі ең ірі Гарвард БҰҰ Моделі конференциясы. Қатысушылар халықаралық дағдарыстар мен дипломатиялық мәселелерді шешеді.",
      en: "The world's oldest and most prestigious high school Model UN conference, convening over 4,000 delegates from 50+ countries in Boston. High school delegates debate international policy across General Assembly, ECOSOC, Regional, and Crisis organs."
    },
    summary: {
      ru: "Крупнейшая Модель ООН в Бостоне: 4000 старшеклассников со всего мира и дипломатические дебаты в комитетах.",
      kk: "Бостондағы ең ірі БҰҰ Моделі: 4000 жасөспірім және халықаралық дипломатиялық дебаттар.",
      en: "Premier high school Model UN conference in Boston hosted by Harvard undergraduates."
    },
    requirements_checklist: {
      ru: ["Учащийся 9–12 классов в составе школьной делегации или индивидуальный делегат", "Подготовка позиционного документа по назначенной стране", "Регистрация через систему HMUN"],
      kk: ["9–12 сынып оқушысы (мектеп делегациясы немесе жеке делегат ретінде)", "Тағайындалған мемлекет бойынша позициялық құжат дайындау", "HMUN ресми жүйесі арқылы тіркелу"],
      en: ["High school student (grades 9–12)", "Position paper submission for assigned committee/country", "Registration via school delegation advisor or individual portal"]
    },
    official_url: "https://www.harvardmun.org",
    source_url: "https://www.harvardmun.org",
    cost_type: "paid",
    cost_amount: 125,
    cost_currency: "USD",
    format: "offline",
    location: "Boston, MA, USA",
    min_grade: 9,
    max_grade: 12,
    min_age: 14,
    max_age: 18,
    eligibility_countries: [],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Открыто для школьников со всего мира.",
    language_requirements: ["en"],
    deadline_type: "fixed",
    deadline_date: "2026-11-15",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по harvardmun.org. Конференция проходит в январе 2027 в Бостоне."
  },
  {
    id: "bow-seat-ocean-awareness-2027",
    slug: "bow-seat-ocean-awareness-2027",
    title: {
      ru: "Международный экологический творческий конкурс Bow Seat Ocean Awareness",
      kk: "Bow Seat Ocean Awareness халықаралық экологиялық шығармашылық байқауы",
      en: "Bow Seat Ocean Awareness Global Student Contest"
    },
    organization: "Bow Seat Ocean Awareness Programs",
    category: "competition",
    directions: ["arts", "environmental_science", "humanities"],
    description: {
      ru: "Крупнейший в мире творческий экологический конкурс для подростков 11–18 лет (категории Junior 11–14 и Senior 15–18). Участники создают произведения в категориях: Визуальное искусство, Литературное творчество (поэзия и проза), Музыка, Фильм и Анимация, Интерактивные медиа. Призовой фонд — до $10 000.",
      kk: "11 мен 18 жас аралығындағы оқушыларға арналған әлемдегі ең ірі экологиялық шығармашылық байқау. Бағыттары: Бейнелеу өнері, Жазушылық (өлеңдер мен проза), Музыка және Қысқаметражды фильмдер. Жүлде қоры $10 000 дейін.",
      en: "The world's largest youth environmental arts and writing competition for students ages 11–18 (Junior and Senior divisions). Invites original works across Visual Art, Creative Writing, Film, Interactive Media, and Music addressing climate change and ocean conservation."
    },
    summary: {
      ru: "Всемирный творческий конкурс по экологии и защите океана: живопись, литература, кино и призы до $10 000.",
      kk: "Мұхит пен табиғатты қорғауға арналған шығармашылық байқау: сурет, әдебиет және $10 000 дейінгі сыйлықтар.",
      en: "Global environmental arts and writing contest for ages 11–18 with awards up to $10,000."
    },
    requirements_checklist: {
      ru: ["Возраст от 11 до 18 лет", "Оригинальная творческая работа (картина, эссе/рассказ, трек или анимация)", "Пояснительное эссе художника/автора (Artist Statement)"],
      kk: ["11 мен 18 жас аралығы", "Жеке шығармашылық туынды (сурет, өлең/әңгіме, видео немесе музыка)", "Авторлық түсіндірме мәтін (Artist Statement)"],
      en: ["Ages 11–18", "Original creative piece in Art, Writing, Film, or Music", "Written Artist Statement explaining connection to the annual theme"]
    },
    official_url: "https://bowseat.org",
    source_url: "https://bowseat.org/contest",
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
    citizenship_note: "Открыто для школьников по всему миру бесплатно.",
    language_requirements: ["en"],
    deadline_type: "annual_estimate",
    deadline_date: "2027-06-15",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по bowseat.org. Ежегодный дедлайн в июне."
  },
  {
    id: "new-york-times-student-writing-2027",
    slug: "new-york-times-student-writing-2027",
    title: {
      ru: "Серия конкурсов школьной журналистики The New York Times",
      kk: "The New York Times мектеп оқушыларының журналистикалық байқаулары",
      en: "The New York Times Student Journalism & Writing Contests"
    },
    organization: "The New York Times (The Learning Network)",
    category: "competition",
    directions: ["humanities", "social_sciences"],
    description: {
      ru: "Престижная ежегодная серия бесплатных конкурсов письма для школьников 13–19 лет со всего мира от газеты The New York Times. Включает конкурсы: 100-словный личный нарратив (Tiny Memoir), Редакционная колонка мнений (Editorial Contest), Научное эссе по STEM, Обзор культуры и подкаст.",
      kk: "The New York Times газетінің 13–19 жастағы жастарға арналған жыл сайынғы тегін байқаулар легі. 100 сөздік жеке естелік, сараптамалық мақала (Editorial Contest), STEM бойынша ғылыми эссе және подкаст байқауларын қамтиды.",
      en: "Annual series of free writing challenges for middle and high school students ages 13–19 worldwide, hosted by The New York Times Learning Network. Contests include 100-Word Personal Narrative, Student Editorial, STEM Writing, and Review Contests."
    },
    summary: {
      ru: "Бесплатные писательские конкурсы The New York Times для школьников 13–19 лет с публикацией на nytimes.com.",
      kk: "13–19 жастағы оқушыларға арналған The New York Times сайтында жарияланатын тегін байқаулар.",
      en: "Free prestigious writing challenges for teens 13–19 with winning essays published on NYTimes.com."
    },
    requirements_checklist: {
      ru: ["Возраст от 13 до 19 лет, учащийся средней или старшей школы", "Оригинальный текст на английском языке в строгом соответствии с лимитом слов конкурса", "Согласие родителя/опекуна при подаче"],
      kk: ["13 пен 19 жас аралығындағы мектеп оқушысы", "Байқаудың сөз шектеуіне сай келетін ағылшын тіліндегі мақала", "Ата-ананың немесе қамқоршының ресми келісімі"],
      en: ["Ages 13–19 in middle or high school", "Original English writing adhering to exact word counts", "Parent/guardian consent submission"]
    },
    official_url: "https://www.nytimes.com/spotlight/learning-student-contests",
    source_url: "https://www.nytimes.com/spotlight/learning-student-contests",
    cost_type: "free",
    cost_amount: null,
    cost_currency: null,
    format: "online",
    location: "Global / Online",
    min_grade: 7,
    max_grade: 12,
    min_age: 13,
    max_age: 19,
    eligibility_countries: [],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: "Открыто для школьников со всего мира.",
    language_requirements: ["en"],
    deadline_type: "fixed",
    deadline_date: "2026-12-04",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по nytimes.com. Дедлайн Tiny Memoir — 4 декабря 2026 года."
  }
];
