import { OpportunityContract } from './types';

export const US_ONLY_AND_PLACEHOLDERS: OpportunityContract[] = [
  // =========================================================================
  // US-ONLY SCHOLARSHIPS (Strictly flagged with citizenship_rule: 'us_only')
  // =========================================================================
  {
    id: "coca-cola-scholars-2027",
    slug: "coca-cola-scholars-2027",
    title: {
      ru: "Стипендиальная программа Coca-Cola Scholars 2026/2027 (США)",
      kk: "Coca-Cola Scholars 2026/2027 стипендиялық бағдарламасы (АҚШ)",
      en: "Coca-Cola Scholars Program 2026/2027"
    },
    organization: "The Coca-Cola Scholars Foundation",
    category: "scholarship",
    directions: ["leadership", "business", "social_sciences"],
    description: {
      ru: "Престижная стипендия в размере $20 000 для выпускников старших школ США, демонстрирующих исключительное лидерство, служение обществу и академические успехи. Требуется гражданство или постоянное резидентство США.",
      kk: "АҚШ орта мектеп бітірушілеріне арналған $20 000 көлеміндегі беделді көшбасшылық стипендиясы. АҚШ азаматтығы немесе тұрақты тұру рұқсаты (Green Card) талап етіледі.",
      en: "$20,000 achievement-based scholarship for graduating high school seniors in the United States demonstrating exemplary leadership, service, and academic commitment. Strictly restricted to US citizens and permanent residents."
    },
    summary: {
      ru: "Стипендия $20 000 для выпускников школ США за лидерство и общественную пользу (только граждане и резиденты США).",
      kk: "АҚШ мектеп бітірушілеріне арналған $20 000 стипендиясы (тек АҚШ азаматтары мен резиденттері үшін).",
      en: "$20,000 achievement-based scholarship for graduating high school seniors with US citizenship or permanent residency."
    },
    requirements_checklist: {
      ru: ["Выпускник американской старшей школы (12 класс)", "Минимальный GPA 3.0", "Гражданство США или статус постоянного резидента (Green Card)"],
      kk: ["АҚШ жоғары мектебінің бітіруші сынып оқушысы", "Кемінде 3.0 GPA үлгерімі", "АҚШ азаматы немесе тұрақты тұрғыны (Green Card) болу"],
      en: ["Current high school senior in the US", "Minimum 3.0 unweighted GPA", "US Citizen, US National, or Permanent Resident"]
    },
    official_url: "https://www.coca-colascholarsfoundation.org/apply/",
    source_url: "https://www.coca-colascholarsfoundation.org/apply/",
    cost_type: "stipend",
    cost_amount: 20000,
    cost_currency: "USD",
    format: "online",
    location: "United States",
    min_grade: 12,
    max_grade: 12,
    min_age: 16,
    max_age: 19,
    eligibility_countries: ["US"],
    excluded_countries: [],
    citizenship_rule: "us_only",
    citizenship_note: "Строго для граждан США или обладателей Permanent Resident Green Card. Школьники без гражданства/грин-карты США не имеют права подавать заявку.",
    language_requirements: ["en"],
    deadline_type: "fixed",
    deadline_date: "2026-10-31",
    cycle_year: 2026,
    status: "expired",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по coca-colascholarsfoundation.org. Прием заявок цикла 2026 завершился 31 октября 2026."
  },
  {
    id: "gates-scholarship-2027",
    slug: "gates-scholarship-2027",
    title: {
      ru: "Стипендия Гейтса (The Gates Scholarship)",
      kk: "Гейтс стипендиясы (The Gates Scholarship)",
      en: "The Gates Scholarship"
    },
    organization: "The Bill & Melinda Gates Foundation",
    category: "scholarship",
    directions: ["leadership", "stem", "humanities", "social_sciences"],
    description: {
      ru: "Полная стипендия на все 4 года бакалавриата в любом аккредитованном колледже США, покрывающая полную стоимость обучения, проживания, питания и учебников за вычетом семейного вклада. Доступна только для выпускников американских школ из малообеспеченных семей с гражданством или грин-картой США.",
      kk: "АҚШ-тың кез келген аккредиттелген колледжінде 4 жылдық бакалавриаттың барлық шығындарын толық өтейтін стипендия. Тек аз қамтылған отбасылардан шыққан АҚШ азаматтары мен грин-карта иелері үшін қолжетімді.",
      en: "Last-dollar full-cost scholarship for outstanding minority high school seniors in the US from low-income households. Covers the full cost of attendance (tuition, fees, room, board, books) not already covered by financial aid. Strictly US citizens and permanent residents."
    },
    summary: {
      ru: "Полная 4-летняя оплата обучения в вузе США для выпускников школ США с гражданством или грин-картой.",
      kk: "АҚШ азаматтығы немесе грин-картасы бар оқушылар үшін университеттегі 4 жылдық толық тегін білім гранты.",
      en: "Prestigious full scholarship covering the complete cost of college attendance for eligible US seniors."
    },
    requirements_checklist: {
      ru: ["Учащийся 12 класса школы в США", "Гражданство США, статус Permanent Resident или статус US National", "Право на федеральную стипендию Pell Grant и GPA не ниже 3.3"],
      kk: ["АҚШ мектебінің 12-сынып оқушысы", "АҚШ азаматы немесе Green Card иегері", "Pell Grant алу құқығы және 3.3-тен кем емес GPA"],
      en: ["High school senior in the US", "US citizen, national, or permanent resident", "Pell-eligible with minimum cumulative GPA of 3.3"]
    },
    official_url: "https://www.thegatesscholarship.org",
    source_url: "https://www.thegatesscholarship.org",
    cost_type: "fully_funded",
    cost_amount: null,
    cost_currency: null,
    format: "online",
    location: "United States",
    min_grade: 12,
    max_grade: 12,
    min_age: 16,
    max_age: 19,
    eligibility_countries: ["US"],
    excluded_countries: [],
    citizenship_rule: "us_only",
    citizenship_note: "Строго для граждан и постоянных резидентов США. Иностранные студенты не имеют права участия.",
    language_requirements: ["en"],
    deadline_type: "fixed",
    deadline_date: "2026-09-15",
    cycle_year: 2026,
    status: "expired",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по thegatesscholarship.org. Дедлайн цикла 2026 закрыт."
  },
  {
    id: "questbridge-national-college-match-2027",
    slug: "questbridge-national-college-match-2027",
    title: {
      ru: "Программа QuestBridge National College Match",
      kk: "QuestBridge National College Match бағдарламасы",
      en: "QuestBridge National College Match"
    },
    organization: "QuestBridge",
    category: "scholarship",
    directions: ["leadership", "humanities", "stem", "social_sciences"],
    description: {
      ru: "Программа полного 4-летнего университетского финансирования в 50+ ведущих вузах США (Стэнфорд, Йель, MIT, Принстон) для академически одаренных выпускников американских школ из семей с низким доходом. Покрывает обучение, проживание и питание без студенческих кредитов.",
      kk: "АҚШ-тың 50-ден астам үздік университеттерінде (Стэнфорд, Йель, MIT) аз қамтылған отбасы балаларына арналған 4 жылдық толық білім гранты бағдарламасы.",
      en: "College and scholarship application process connecting high-achieving high school seniors from low-income backgrounds with full four-year Match Scholarships to 50+ top US colleges (Stanford, MIT, Yale, etc.) with zero loans."
    },
    summary: {
      ru: "Полные 4-летние стипендии в Стэнфорд, MIT и Йель для одаренных школьников из малообеспеченных семей в США.",
      kk: "АҚШ-тың Стэнфорд, MIT секілді үздік оқу орындарында 4 жылдық толық тегін білім гранты.",
      en: "Full four-year scholarships to 50+ premier US colleges for high-achieving low-income seniors."
    },
    requirements_checklist: {
      ru: ["Выпускник американской школы (12 класс)", "Гражданин или постоянный резидент США (или студент с DACA, обучающийся в США)", "Доход семьи обычно менее $65 000 в год на семью из четырех человек"],
      kk: ["АҚШ мектебінің бітірушісі (12-сынып)", "АҚШ азаматы немесе тұрақты резиденті", "Отбасының жылдық табысы 65 000 доллардан төмен"],
      en: ["Graduating high school senior in the US", "US citizen, permanent resident, or undocumented student attending high school in the US", "Typically household income under $65,000 for a family of four"]
    },
    official_url: "https://www.questbridge.org",
    source_url: "https://www.questbridge.org/high-school-students/national-college-match",
    cost_type: "fully_funded",
    cost_amount: null,
    cost_currency: null,
    format: "online",
    location: "United States",
    min_grade: 12,
    max_grade: 12,
    min_age: 16,
    max_age: 19,
    eligibility_countries: ["US"],
    excluded_countries: [],
    citizenship_rule: "us_only",
    citizenship_note: "Кандидаты должны обучаться в старшей школе США. Иностранные студенты, проживающие за пределами США, не допускаются.",
    language_requirements: ["en"],
    deadline_type: "fixed",
    deadline_date: "2026-09-26",
    cycle_year: 2026,
    status: "expired",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по questbridge.org. Прием Match 2026 завершился в сентябре."
  },
  {
    id: "bank-of-america-student-leaders-2027",
    slug: "bank-of-america-student-leaders-2027",
    title: {
      ru: "Программа Bank of America Student Leaders 2027",
      kk: "Bank of America Student Leaders 2027 бағдарламасы",
      en: "Bank of America Student Leaders Program"
    },
    organization: "Bank of America Charitable Foundation",
    category: "internship",
    directions: ["leadership", "business", "social_sciences"],
    description: {
      ru: "Оплачиваемая 8-недельная летняя стажировка в некоммерческой организации для старшеклассников (11–12 классы) в США, сопровождающаяся недельной полностью оплачиваемой лидерской конференцией Student Leaders Summit в Вашингтоне.",
      kk: "АҚШ-тағы 11–12 сынып оқушыларына арналған үкіметтік емес ұйымдарда 8 апталық ақылы жазғы тағылымдама және Вашингтондағы көшбасшылық саммит.",
      en: "Paid 8-week summer internship for high school juniors and seniors at a local nonprofit organization, plus an all-expenses-paid week-long Student Leaders Summit in Washington, D.C. Restricted to US-based students."
    },
    summary: {
      ru: "Оплачиваемая 8-недельная стажировка в НКО и полностью оплачиваемый саммит в Вашингтоне для школьников США.",
      kk: "АҚШ оқушыларына арналған 8 апталық ақылы тағылымдама және Вашингтондағы көшбасшылық саммит.",
      en: "Paid 8-week summer nonprofit internship and all-expenses-paid Washington DC leadership summit."
    },
    requirements_checklist: {
      ru: ["Учащийся 11 или 12 класса в США", "Законное разрешение на работу в США (гражданство или грин-карта)", "Активное участие в жизни сообщества и лидерские заслуги"],
      kk: ["АҚШ-тағы 11 немесе 12 сынып оқушысы", "АҚШ-та заңды жұмыс істеуге рұқсаты (азаматтық немесе Green Card)", "Қоғамдық белсенділік және көшбасшылық"],
      en: ["Current high school junior or senior in eligible US market", "Legally authorized to work in the US without sponsorship", "Demonstrated community leadership"]
    },
    official_url: "https://about.bankofamerica.com/en/making-an-impact/student-leaders",
    source_url: "https://about.bankofamerica.com/en/making-an-impact/student-leaders",
    cost_type: "stipend",
    cost_amount: 3500,
    cost_currency: "USD",
    format: "offline",
    location: "United States (Local Markets & Washington, DC)",
    min_grade: 11,
    max_grade: 12,
    min_age: 16,
    max_age: 19,
    eligibility_countries: ["US"],
    excluded_countries: [],
    citizenship_rule: "us_only",
    citizenship_note: "Кандидаты должны иметь право работать в США и проживать в одном из целевых округов Bank of America.",
    language_requirements: ["en"],
    deadline_type: "fixed",
    deadline_date: "2027-01-15",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по about.bankofamerica.com. Прием заявок открыт до 15 января 2027 года."
  },
  {
    id: "davidson-fellows-scholarship-2027",
    slug: "davidson-fellows-scholarship-2027",
    title: {
      ru: "Стипендия Davidson Fellows Scholarship ($50 000, $25 000, $10 000)",
      kk: "Davidson Fellows Scholarship стипендиясы ($50 000, $25 000, $10 000)",
      en: "Davidson Fellows Scholarship Program"
    },
    organization: "Davidson Institute",
    category: "scholarship",
    directions: ["stem", "humanities", "mathematics", "arts"],
    description: {
      ru: "Одна из самых престижных стипендий для одаренных молодых людей до 18 лет в США за выдающиеся проекты в науке, технологиях, инженерии, математике, литературе, музыке или философии. Призы составляют $50 000, $25 000 и $10 000. Внимание: участие строго ограничено гражданами США и постоянными жителями с грин-картой.",
      kk: "АҚШ-тағы 18 жасқа дейінгі дарынды жастарға арналған $50 000, $25 000 және $10 000 көлеміндегі стипендия. Назар аударыңыз: қатысу қатаң түрде АҚШ азаматтары мен грин-карта иелері үшін ғана рұқсат етілген.",
      en: "One of the most prestigious pre-college scholarships in the United States, awarding $50,000, $25,000, and $10,000 to extraordinary young people 18 and under for graduate-level work in STEM, Literature, Music, and Philosophy. Strictly requires US citizenship or US permanent residency."
    },
    summary: {
      ru: "Стипендии до $50 000 за выдающиеся научные и творческие проекты (строго для граждан и постоянных жителей США).",
      kk: "Үздік ғылыми жобалар үшін $50 000 дейінгі стипендия (тек АҚШ азаматтары мен грин-карта иелері үшін).",
      en: "Prestigious scholarships up to $50,000 for extraordinary projects by US citizens or permanent residents."
    },
    requirements_checklist: {
      ru: ["Возраст 18 лет или младше на момент подачи", "Гражданин США или обладатель постоянного вида на жительство (US Permanent Resident Card)", "Завершенный исследовательский проект уровня магистратуры/докторантуры"],
      kk: ["Өтініш беру кезінде 18 жас немесе одан кіші", "АҚШ азаматы немесе тұрақты тұрғыны (Green Card)", "Магистратура немесе докторантура деңгейіндегі дайын ғылыми жоба"],
      en: ["18 or younger as of deadline", "US Citizen or US Permanent Resident", "Completed significant piece of graduate-level work in eligibility category"]
    },
    official_url: "https://www.davidsongifted.org/fellows-scholarship/",
    source_url: "https://www.davidsongifted.org/gifted-programs/fellows-scholarship/",
    cost_type: "stipend",
    cost_amount: 50000,
    cost_currency: "USD",
    format: "online",
    location: "United States (Washington, DC Reception)",
    min_grade: 7,
    max_grade: 12,
    min_age: 13,
    max_age: 18,
    eligibility_countries: ["US"],
    excluded_countries: [],
    citizenship_rule: "us_only",
    citizenship_note: "Строго для граждан США или постоянных жителей (Permanent Residents). Предыдущая маркировка 'worldwide' была ошибочной; официальный регламент требует гражданство США или грин-карту.",
    language_requirements: ["en"],
    deadline_type: "fixed",
    deadline_date: "2027-02-11",
    cycle_year: 2027,
    status: "active",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Верифицировано по davidsongifted.org. Требование гражданства США или грин-карты подтверждено официальным регламентом."
  },

  // =========================================================================
  // PLACEHOLDER TEST ENTRIES (Hidden from public discover view per R-A2-01)
  // =========================================================================
  {
    id: "mypath-climate-hackathon-2026",
    slug: "mypath-climate-hackathon-2026",
    title: {
      ru: "Климатический молодежный хакатон MyPath 2026 (Тестовое событие)",
      kk: "MyPath 2026 климаттық жастар хакатоны (Сынақ шарасы)",
      en: "MyPath Climate Action Teen Hackathon 2026 (Test Event)"
    },
    organization: "MyPath Climate Lab",
    category: "hackathon",
    directions: ["environmental_science", "computer_science"],
    description: {
      ru: "Внутреннее демонстрационное событие платформы MyPath для тестирования витрины возможностей и заявок.",
      kk: "Мүмкіндіктер мен өтінімдер жүйесін тексеруге арналған MyPath платформасының ішкі сынақ шарасы.",
      en: "Internal mock test opportunity for platform demonstration and system verification."
    },
    summary: {
      ru: "Тестовое событие платформы MyPath (скрыто из публичного поиска).",
      kk: "MyPath платформасының сынақ оқиғасы (жалпы іздеуден жасырылған).",
      en: "Internal test event for platform verification, hidden from public discover feed."
    },
    requirements_checklist: {
      ru: ["Тестовая запись"],
      kk: ["Сынақ жазбасы"],
      en: ["Test entry"]
    },
    official_url: "https://mypath-your-navigator.lovable.app",
    source_url: "https://mypath-your-navigator.lovable.app",
    cost_type: "free",
    cost_amount: null,
    cost_currency: null,
    format: "online",
    location: "Online",
    min_grade: 8,
    max_grade: 11,
    min_age: 14,
    max_age: 18,
    eligibility_countries: [],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: null,
    language_requirements: ["en", "ru"],
    deadline_type: "fixed",
    deadline_date: "2026-06-15",
    cycle_year: 2026,
    status: "hidden",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Скрытый плейсхолдер согласно R-A2-01. Не отображается пользователям."
  },
  {
    id: "founder-track-12-weeks",
    slug: "founder-track-12-weeks",
    title: {
      ru: "Подростковый акселератор стартапов: 12-недельный трек (Тестовый)",
      kk: "Жасөспірімдер стартап-акселераторы: 12 апталық трек (Сынақ)",
      en: "Founder Track: 12-Week Teen Startup Incubator (Test)"
    },
    organization: "MyPath Ventures",
    category: "entrepreneurship",
    directions: ["entrepreneurship", "business"],
    description: {
      ru: "Внутренняя демонстрационная программа акселератора MyPath Ventures для тестирования.",
      kk: "Жүйені тексеруге арналған MyPath Ventures ішкі сынақ бағдарламасы.",
      en: "Internal demonstration accelerator track for pipeline testing."
    },
    summary: {
      ru: "Тестовая программа акселератора (скрыта из публичного каталога).",
      kk: "Сынақ акселератор бағдарламасы (жалпы каталогтан жасырылған).",
      en: "Internal demonstration accelerator program hidden from public search."
    },
    requirements_checklist: {
      ru: ["Тестовая запись"],
      kk: ["Сынақ жазбасы"],
      en: ["Test entry"]
    },
    official_url: "https://mypath-your-navigator.lovable.app",
    source_url: "https://mypath-your-navigator.lovable.app",
    cost_type: "free",
    cost_amount: null,
    cost_currency: null,
    format: "online",
    location: "Online",
    min_grade: 9,
    max_grade: 12,
    min_age: 14,
    max_age: 18,
    eligibility_countries: [],
    excluded_countries: [],
    citizenship_rule: "open",
    citizenship_note: null,
    language_requirements: ["en", "ru"],
    deadline_type: "fixed",
    deadline_date: "2026-08-01",
    cycle_year: 2026,
    status: "hidden",
    translation_source: "human",
    verified_at: "2026-11-01T10:00:00Z",
    verified_by: "MyPath Verification Team",
    verification_note: "Скрытый плейсхолдер согласно R-A2-01. Не отображается пользователям."
  }
];
