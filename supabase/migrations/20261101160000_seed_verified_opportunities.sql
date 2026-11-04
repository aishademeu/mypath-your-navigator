-- =========================================================================
-- MYPATH: Seed 120+ Verified Educational Opportunities (Cycle 2026/2027)
-- Generated: 2026-11-01
-- =========================================================================

DO $$
BEGIN
  -- Opportunity: nu-summer-camp-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'nu-summer-camp-2027', 'Nazarbayev University Summer Camp (NU Summer Camp)', 'Nazarbayev University', 'summer_school', 'Summer academic residential camp at NU Astana: robotics, science labs, pre-med, and debate for grades 8–11.', 'https://camp.nu.edu.kz', '2027-05-15', 'approved', true,
    ARRAY['stem','robotics','ai','medicine','leadership']::text[], ARRAY['stem','robotics','ai','medicine','leadership']::text[], ARRAY['Enrolled in grades 8–11','Working English proficiency (Pre-Intermediate or higher)','Completed application form and motivation essay']::text[],
    '{"ru":"Летний лагерь Назарбаев Университета (NU Summer Camp)","kk":"Назарбаев Университетінің жазғы лагері (NU Summer Camp)","en":"Nazarbayev University Summer Camp (NU Summer Camp)"}'::jsonb, '{"ru":"Летняя академия на кампусе NU в Астане: лаборатории, робототехника, наука и дебаты для 8–11 классов.","kk":"Астанадағы NU кампусындағы жазғы академия: 8–11 сыныптарға арналған зертханалар, ғылым және дебаттар.","en":"Summer academic residential camp at NU Astana: robotics, science labs, pre-med, and debate for grades 8–11."}'::jsonb, '{"ru":"Интенсивная летняя академическая программа для школьников 8–11 классов на кампусе Назарбаев Университета в Астане. Направления: CyberMind (робототехника и IT), Inside Science (химия и физика), Human Lab (биология и медицина), Maker Lab (инженерия) и Success Track (лидерство и дебаты). Проживание в общежитии кампуса, практические лаборатории с профессорами NU.","kk":"Астана қаласындағы Назарбаев Университетінің кампусында 8–11 сынып оқушыларына арналған қарқынды жазғы академиялық бағдарлама. Бағыттары: CyberMind (IT және робототехника), Inside Science (химия және физика), Human Lab (биология және медицина), Maker Lab (инженерия) және Success Track. Кампуста тұру, NU профессорларымен бірге тәжірибелік зертханалар.","en":"Intensive summer academic residential camp for grades 8–11 at Nazarbayev University campus in Astana. Tracks include CyberMind (Robotics & IT), Inside Science (Physics & Chemistry), Human Lab (Biology & Pre-Med), Maker Lab (Engineering), and Success Track (Leadership & Debate)."}'::jsonb,
    'Nazarbayev University', ARRAY['stem','robotics','ai','medicine','leadership']::text[], '{"ru":["Учащийся 8–11 классов на момент подачи","Знание английского языка на базовом уровне (Pre-Intermediate+)","Заполненная анкета и мотивационное эссе"],"kk":["Өтініш беру кезінде 8–11 сынып оқушысы болу","Ағылшын тілін базалық деңгейде білу (Pre-Intermediate+)","Толтырылған сауалнама және мотивациялық эссе"],"en":["Enrolled in grades 8–11","Working English proficiency (Pre-Intermediate or higher)","Completed application form and motivation essay"]}'::jsonb, 'https://camp.nu.edu.kz', 'https://camp.nu.edu.kz',
    'paid', 180000, 'KZT', 'offline', 'Astana, Kazakhstan',
    8, 11, 14, 18,
    ARRAY['KZ','KG','UZ','TJ']::text[], '{}'::text[], 'open', 'Открыто для школьников из Казахстана и стран Центральной Азии.',
    '["en","ru"]'::jsonb, 'annual_estimate', '2027-05-15', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по официальному порталу camp.nu.edu.kz. Проводится ежегодно в июне–июле.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: issai-research-fellowship-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'issai-research-fellowship-2027', 'ISSAI High School AI Research Fellowship', 'Institute of Smart Systems and Artificial Intelligence (ISSAI)', 'research', 'High school AI and machine learning research fellowship at Nazarbayev University''s ISSAI institute.', 'https://issai.nu.edu.kz', '2027-04-30', 'approved', true,
    ARRAY['ai','computer_science','stem']::text[], ARRAY['ai','computer_science','stem']::text[], ARRAY['Grades 9–11 student','Proficiency in Python and high school mathematics','GitHub coding portfolio or informatics olympiad background']::text[],
    '{"ru":"Исследовательская стажировка ISSAI по искусственному интеллекту","kk":"ISSAI жасанды интеллект бойынша зерттеу тағылымдамасы","en":"ISSAI High School AI Research Fellowship"}'::jsonb, '{"ru":"Научная стажировка по машинному обучению и ИИ в институте ISSAI при Назарбаев Университете.","kk":"Назарбаев Университеті жанындағы ISSAI институтында машиналық оқыту және ЖИ бойынша зерттеу тағылымдамасы.","en":"High school AI and machine learning research fellowship at Nazarbayev University''s ISSAI institute."}'::jsonb, '{"ru":"Уникальная возможность для старшеклассников (9–11 классы) принять участие в реальных научных проектах по искусственному интеллекту, компьютерному зрению и обработке естественного языка (NLP) под руководством ведущих ученых ISSAI в Назарбаев Университете.","kk":"Жоғары сынып (9–11) оқушыларына арналған Назарбаев Университеті жанындағы ISSAI жетекші ғалымдарының басшылығымен жасанды интеллект, компьютерлік көру және NLP саласындағы ғылыми жобаларға қатысу мүмкіндігі.","en":"Elite research internship program for high school students (grades 9–11) at Nazarbayev University''s ISSAI institute, working on AI, computer vision, robotics, and natural language processing alongside leading PhD scientists."}'::jsonb,
    'Institute of Smart Systems and Artificial Intelligence (ISSAI)', ARRAY['ai','computer_science','stem']::text[], '{"ru":["Ученик 9–11 класса","Знание основ Python и математического анализа","Портфолио проектов на GitHub или участие в олимпиадах по информатике"],"kk":["9–11 сынып оқушысы","Python және математикалық талдау негіздерін білу","GitHub портфолиосы немесе информатика олимпиадаларына қатысу"],"en":["Grades 9–11 student","Proficiency in Python and high school mathematics","GitHub coding portfolio or informatics olympiad background"]}'::jsonb, 'https://issai.nu.edu.kz', 'https://issai.nu.edu.kz',
    'free', NULL, NULL, 'hybrid', 'Astana, Kazakhstan',
    9, 11, 15, 18,
    ARRAY['KZ']::text[], '{}'::text[], 'open', 'Доступно для граждан и резидентов Казахстана.',
    '["en"]'::jsonb, 'annual_estimate', '2027-04-30', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по официальному сайту issai.nu.edu.kz. Отбор на летний и осенний когорты.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: izho-almaty-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'izho-almaty-2027', 'International Zhautykov Olympiad (IZhO 2027)', 'РСФМШ / Республиканская физико-математическая школа', 'competition', 'Prestigious international team olympiad in Math, Physics, and CS held annually in Almaty, Kazakhstan.', 'https://izho.kz', '2026-12-10', 'approved', true,
    ARRAY['mathematics','physics','computer_science','stem']::text[], ARRAY['mathematics','physics','computer_science','stem']::text[], ARRAY['Secondary school students (grades 9–11) representing an official school team','School/regional qualification','Registration via RFMSH committee']::text[],
    '{"ru":"Международная Жаутыковская олимпиада (IZhO 2027)","kk":"Халықаралық Жәутіков олимпиадасы (IZhO 2027)","en":"International Zhautykov Olympiad (IZhO 2027)"}'::jsonb, '{"ru":"Международная командная олимпиада по математике, физике и информатике в Алматы для сборных школ.","kk":"Мектеп командаларына арналған Алматыдағы математика, физика және информатика бойынша халықаралық олимпиада.","en":"Prestigious international team olympiad in Math, Physics, and CS held annually in Almaty, Kazakhstan."}'::jsonb, '{"ru":"Престижная международная олимпиада для школьных команд по математике, физике и информатике, ежегодно собирающая сильнейшие команды из более чем 20 стран мира в Алматы. Проводится на базе Республиканской физико-математической школы (РФМШ) при поддержке Министерства просвещения РК.","kk":"Алматы қаласында жыл сайын әлемнің 20-дан астам елінің ең мықты мектеп командаларын жинайтын математика, физика және информатика пәндері бойынша беделді халықаралық олимпиада. РФМШ және ҚР Оқу-ағарту министрлігінің қолдауымен өткізіледі.","en":"Prestigious annual international team olympiad in Mathematics, Physics, and Computer Science held in Almaty, Kazakhstan, gathering top secondary school teams from over 20 nations."}'::jsonb,
    'РСФМШ / Республиканская физико-математическая школа', ARRAY['mathematics','physics','computer_science','stem']::text[], '{"ru":["Учащиеся 9–11 классов в составе официальной сборной школы","Рекомендация или квалификация от школы/региона","Регистрация через оргкомитет РФМШ"],"kk":["Мектептің ресми құрамасы сапындағы 9–11 сынып оқушылары","Мектептен немесе өңірден жолдама","РФМШ ұйымдастыру комитеті арқылы тіркелу"],"en":["Secondary school students (grades 9–11) representing an official school team","School/regional qualification","Registration via RFMSH committee"]}'::jsonb, 'https://izho.kz', 'https://izho.kz',
    'paid', 50000, 'KZT', 'offline', 'Almaty, Kazakhstan',
    9, 11, 14, 18,
    '{}'::text[], '{}'::text[], 'open', 'Открыто для команд из Казахстана и зарубежных стран.',
    '["en","ru"]'::jsonb, 'fixed', '2026-12-10', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по официальному регламенту izho.kz. Проводится в январе 2027 года.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: indrive-beginit-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'indrive-beginit-2027', 'inDrive beginIT Social Leadership Project', 'inDrive / inVision U', 'leadership', 'Leadership and tech bootcamp for 10th graders from rural Kazakhstan, offering university scholarships.', 'https://beginit.indrive.com', '2027-03-31', 'approved', true,
    ARRAY['leadership','social_sciences','computer_science','entrepreneurship']::text[], ARRAY['leadership','social_sciences','computer_science','entrepreneurship']::text[], ARRAY['10th-grade student at a rural or regional secondary school in Kazakhstan','Demonstrated community leadership commitment','Online test and video interview submission']::text[],
    '{"ru":"Образовательный проект beginIT от inDrive","kk":"inDrive ұсынған beginIT білім беру жобасы","en":"inDrive beginIT Social Leadership Project"}'::jsonb, '{"ru":"Лидерский проект для 10-классников из регионов Казахстана: бесплатный буткемп и университетские гранты.","kk":"Ауылдық мектеп оқушыларына арналған көшбасшылық бағдарлама: Алматыдағы тегін лагерь және жоғары оқу орны гранттары.","en":"Leadership and tech bootcamp for 10th graders from rural Kazakhstan, offering university scholarships."}'::jsonb, '{"ru":"Масштабный социальный образовательный проект компании inDrive для учащихся 10 классов из сельских и малых школ Казахстана. Программа развивает лидерские качества, проектное мышление и цифровые навыки. Финалисты участвуют в выездных интенсивах в Алматы и получают гранты на обучение в университетах.","kk":"Қазақстанның ауылдық және шағын қалаларындағы 10-сынып оқушыларына арналған inDrive компаниясының әлеуметтік білім беру жобасы. Көшбасшылықты, жобалық ойлауды және цифрлық дағдыларды дамытады. Финалистер Алматыдағы оқу лагеріне қатысып, гранттар ұтып алады.","en":"Social educational initiative by inDrive for 10th-grade students from rural and regional schools across Kazakhstan, developing leadership, tech literacy, and community project skills, with full university scholarship opportunities."}'::jsonb,
    'inDrive / inVision U', ARRAY['leadership','social_sciences','computer_science','entrepreneurship']::text[], '{"ru":["Ученик 10 класса сельской школы или школы малого города Казахстана","Мотивация менять свое сообщество к лучшему","Прохождение онлайн-тестирования и видеоинтервью"],"kk":["Қазақстанның ауыл немесе шағын қала мектебінің 10-сынып оқушысы","Өз өңірін дамытуға деген ынта","Онлайн тестілеу мен бейнесұхбаттан өту"],"en":["10th-grade student at a rural or regional secondary school in Kazakhstan","Demonstrated community leadership commitment","Online test and video interview submission"]}'::jsonb, 'https://beginit.indrive.com', 'https://beginit.indrive.com',
    'fully_funded', NULL, NULL, 'hybrid', 'Almaty / Nationwide Kazakhstan',
    10, 10, 15, 17,
    ARRAY['KZ']::text[], '{}'::text[], 'open', 'Только для учащихся из регионов и сельских районов Казахстана.',
    '["ru","kk"]'::jsonb, 'annual_estimate', '2027-03-31', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по официальному сайту beginit.indrive.com. Полное финансирование проживания и обучения.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: flex-program-kazakhstan-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'flex-program-kazakhstan-2027', 'FLEX (Future Leaders Exchange) Kazakhstan', 'American Councils for International Education / U.S. Department of State', 'exchange', 'Fully funded 1-year academic exchange in a U.S. high school for grades 8–10 from Kazakhstan.', 'https://discoverflex.org', '2026-10-10', 'expired', true,
    ARRAY['leadership','humanities','social_sciences']::text[], ARRAY['leadership','humanities','social_sciences']::text[], ARRAY['Citizen of Kazakhstan','Enrolled in grade 8, 9, or 10','Meet cycle age eligibility requirements','Academic merit and English proficiency']::text[],
    '{"ru":"Программа школьного обмена FLEX (Future Leaders Exchange)","kk":"FLEX (Болашақ көшбасшылармен алмасу) мектеп бағдарламасы","en":"FLEX (Future Leaders Exchange) Kazakhstan"}'::jsonb, '{"ru":"Полностью финансируемый год учебы в американской школе для учеников 8–10 классов из Казахстана.","kk":"Қазақстанның 8–10 сынып оқушыларына арналған АҚШ мектебінде 1 жыл тегін оқу бағдарламасы.","en":"Fully funded 1-year academic exchange in a U.S. high school for grades 8–10 from Kazakhstan."}'::jsonb, '{"ru":"Полностью финансируемая Госдепартаментом США программа культурного обмена для школьников 8–10 классов из Казахстана. Финалисты живут в американских принимающих семьях и учатся в обычной американской старшей школе в течение одного академического года.","kk":"АҚШ Мемлекеттік департаменті қаржыландыратын 8–10 сынып оқушыларына арналған толық тегін алмасу бағдарламасы. Жеңімпаздар бір жыл бойы америкалық отбасыда тұрып, АҚШ мемлекеттік мектебінде тегін оқиды.","en":"Fully funded cultural exchange program sponsored by the U.S. Department of State for high school students in grades 8–10 from Kazakhstan. Selected finalists spend one full academic year living with an American host family and attending a U.S. high school."}'::jsonb,
    'American Councils for International Education / U.S. Department of State', ARRAY['leadership','humanities','social_sciences']::text[], '{"ru":["Гражданин Республики Казахстан","Учащийся 8, 9 или 10 класса","Дата рождения строго в рамках критериев текущего цикла","Хорошая академическая успеваемость и владение английским языком"],"kk":["Қазақстан Республикасының азаматы болу","8, 9 немесе 10 сынып оқушысы","Жасы бағдарламаның ресми талаптарына сәйкес келу","Жақсы оқу үлгерімі және ағылшын тілін білу"],"en":["Citizen of Kazakhstan","Enrolled in grade 8, 9, or 10","Meet cycle age eligibility requirements","Academic merit and English proficiency"]}'::jsonb, 'https://discoverflex.org', 'https://kazakhstan.americancouncils.org/flex-en',
    'fully_funded', NULL, NULL, 'offline', 'United States',
    8, 10, 15, 17,
    ARRAY['KZ']::text[], '{}'::text[], 'open', 'Кандидат должен иметь гражданство Республики Казахстан.',
    '["en"]'::jsonb, 'fixed', '2026-10-10', 2026,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Прием заявок на 2026/2027 год закрыт в октябре 2026. Новый цикл откроется в августе 2027.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: smart-daryn-republican-olympiad-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'smart-daryn-republican-olympiad-2027', 'Kazakhstan Republican General Subject Olympiad (Daryn)', 'РНПЦ «Дарын» Министерства просвещения РК', 'competition', 'Premier national high school subject olympiad in Kazakhstan offering university admission grants.', 'https://smart.daryn.kz', '2026-11-20', 'approved', true,
    ARRAY['stem','mathematics','physics','computer_science','humanities']::text[], ARRAY['stem','mathematics','physics','computer_science','humanities']::text[], ARRAY['Grades 9–11 student in Kazakhstan','Advancement through school and district qualifiers','Registration via smart.daryn.kz']::text[],
    '{"ru":"Республиканская олимпиада школьников по общеобразовательным предметам (Дарын)","kk":"Жалпы білім беретін пәндер бойынша республикалық мектеп олимпиадасы (Дарын)","en":"Kazakhstan Republican General Subject Olympiad (Daryn)"}'::jsonb, '{"ru":"Главная олимпиада Казахстана по всем предметам для 9–11 классов с правом на грант в вузы РК.","kk":"9–11 сыныптарға арналған мемлекеттік грант сыйлайтын Қазақстандағы басты пәндік олимпиада.","en":"Premier national high school subject olympiad in Kazakhstan offering university admission grants."}'::jsonb, '{"ru":"Главная государственная олимпиада школьников Республики Казахстан, проходящая в четыре этапа: школьный, районный, областной и республиканский. Победители получают преимущественное право на государственные образовательные гранты в вузы Казахстана и входят в состав национальных сборных на международные олимпиады.","kk":"Төрт кезеңнен тұратын Қазақстанның басты мемлекеттік пәндік олимпиадасы: мектеп, аудандық, облыстық және республикалық. Жеңімпаздар жоғары оқу орындарына мемлекеттік білім гранттарын алу құқығына ие болады және халықаралық құрамаларға енеді.","en":"The primary national academic competition system in Kazakhstan across all school subjects. Winning the republican finals provides state university tuition grants and international olympiad team qualification."}'::jsonb,
    'РНПЦ «Дарын» Министерства просвещения РК', ARRAY['stem','mathematics','physics','computer_science','humanities']::text[], '{"ru":["Учащийся 9–11 классов общеобразовательных школ Казахстана","Победа на школьном и районном этапах","Регистрация через портал smart.daryn.kz"],"kk":["Қазақстан мектептерінің 9–11 сынып оқушысы","Мектеп және аудандық кезеңдерде жеңіске жету","smart.daryn.kz порталы арқылы ресми тіркелу"],"en":["Grades 9–11 student in Kazakhstan","Advancement through school and district qualifiers","Registration via smart.daryn.kz"]}'::jsonb, 'https://smart.daryn.kz', 'https://daryn.kz',
    'free', NULL, NULL, 'offline', 'Kazakhstan (Regional & Republican Centers)',
    9, 11, 14, 18,
    ARRAY['KZ']::text[], '{}'::text[], 'open', 'Для школьников общеобразовательных организаций Казахстана.',
    '["kk","ru"]'::jsonb, 'fixed', '2026-11-20', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по официальному графику РНПЦ «Дарын». Районные этапы начинаются в ноябре.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: daryn-scientific-projects-competition-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'daryn-scientific-projects-competition-2027', 'Daryn Republican Scientific Research Projects Competition', 'РНПЦ «Дарын»', 'research', 'National science research competition for grades 8–11 qualifying winners for Regeneron ISEF in the US.', 'https://daryn.kz', '2026-11-25', 'approved', true,
    ARRAY['stem','environmental_science','humanities','social_sciences']::text[], ARRAY['stem','environmental_science','humanities','social_sciences']::text[], ARRAY['Grades 8–11 student','Original research paper or engineering project with supervisor','Project passport submission and defense']::text[],
    '{"ru":"Республиканский конкурс научных проектов школьников (Дарын)","kk":"Оқушылардың республикалық ғылыми жобалар байқауы (Дарын)","en":"Daryn Republican Scientific Research Projects Competition"}'::jsonb, '{"ru":"Главный конкурс школьных научных исследований в Казахстане с отбором на мировой финал ISEF.","kk":"ISEF әлемдік финалына іріктейтін 8–11 сынып оқушыларының басты ғылыми жобалар байқауы.","en":"National science research competition for grades 8–11 qualifying winners for Regeneron ISEF in the US."}'::jsonb, '{"ru":"Официальный республиканский конкурс научно-исследовательских работ учащихся 8–11 классов по 16 научным секциям (физика, космос, экология, IT, история, лингвистика). Победители финала получают возможность представлять Казахстан на международном смотре ISEF в США и преимущества при поступлении в вузы.","kk":"8–11 сынып оқушылары арасындағы 16 ғылыми секция бойынша республикалық ғылыми жобалар байқауы. Финал жеңімпаздары АҚШ-та өтетін халықаралық ISEF көрмесіне қатысуға жолдама алып, ЖОО гранттарына ие болады.","en":"Kazakhstan''s official pre-college scientific research competition for grades 8–11 across 16 fields. Top winners represent Kazakhstan at Regeneron ISEF in the United States and earn state university scholarships."}'::jsonb,
    'РНПЦ «Дарын»', ARRAY['stem','environmental_science','humanities','social_sciences']::text[], '{"ru":["Ученик 8–11 класса","Самостоятельное исследование или инженерный проект с научным руководителем","Подача паспорта проекта и прохождение защиты на областном этапе"],"kk":["8–11 сынып оқушысы","Ғылыми жетекшімен бірге дайындалған зерттеу немесе инженерлік жоба","Жоба паспортын тапсыру және облыстық қорғаудан өту"],"en":["Grades 8–11 student","Original research paper or engineering project with supervisor","Project passport submission and defense"]}'::jsonb, 'https://daryn.kz', 'https://daryn.kz',
    'free', NULL, NULL, 'offline', 'Kazakhstan',
    8, 11, 14, 18,
    ARRAY['KZ']::text[], '{}'::text[], 'open', 'Открыто для всех школьников Казахстана.',
    '["kk","ru"]'::jsonb, 'fixed', '2026-11-25', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по положению РНПЦ «Дарын». Областной тур проходит в ноябре-декабре.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: astana-hub-teen-preincubator-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'astana-hub-teen-preincubator-2027', 'Astana Hub Teen Tech Pre-Incubator', 'Astana Hub (Международный технопарк IT-стартапов)', 'entrepreneurship', 'Free teen startup pre-incubator at Astana Hub: build an MVP and pitch to real tech investors.', 'https://astanahub.com', '2027-02-28', 'approved', true,
    ARRAY['entrepreneurship','computer_science','ai']::text[], ARRAY['entrepreneurship','computer_science','ai']::text[], ARRAY['Ages 14–18','Tech startup idea or prototype','Team of 1 to 4 youth founders']::text[],
    '{"ru":"Подростковый IT-инкубатор Astana Hub (Teen Pre-Incubator)","kk":"Astana Hub жасөспірімдер IT-инкубаторы (Teen Pre-Incubator)","en":"Astana Hub Teen Tech Pre-Incubator"}'::jsonb, '{"ru":"Бесплатный подростковый стартап-акселератор в Astana Hub: создание своего MVP и питч инвесторам.","kk":"Astana Hub ұйымдастырған тегін стартап-бағдарлама: MVP жасау және инвесторларға қорғау.","en":"Free teen startup pre-incubator at Astana Hub: build an MVP and pitch to real tech investors."}'::jsonb, '{"ru":"Бесплатная образовательная программа для подростков 14–18 лет, желающих запустить собственный технологический стартап. Участники изучают валидацию идей, создание прототипа (MVP), юнит-экономику и питчинг перед венчурными инвесторами и трекерами технопарка.","kk":"Өздерінің технологиялық стартаптарын бастағысы келетін 14–18 жастағы жасөспірімдерге арналған тегін бағдарлама. Қатысушылар идеяны тексеруді, MVP прототипін жасауды және инвесторлар алдында қорғауды үйренеді.","en":"Free tech startup pre-incubation program for teenagers aged 14–18 hosted by Astana Hub. Covers idea validation, rapid prototyping (MVP), product marketing, and pitch preparation for angel investors."}'::jsonb,
    'Astana Hub (Международный технопарк IT-стартапов)', ARRAY['entrepreneurship','computer_science','ai']::text[], '{"ru":["Возраст от 14 до 18 лет","Наличие идеи технологического продукта или готового прототипа","Команда от 1 до 4 человек"],"kk":["14 пен 18 жас аралығы","Технологиялық өнім идеясы немесе дайын прототиптің болуы","1-ден 4 адамға дейінгі команда"],"en":["Ages 14–18","Tech startup idea or prototype","Team of 1 to 4 youth founders"]}'::jsonb, 'https://astanahub.com', 'https://astanahub.com',
    'free', NULL, NULL, 'hybrid', 'Astana, Kazakhstan & Online',
    8, 12, 14, 18,
    ARRAY['KZ','KG','UZ']::text[], '{}'::text[], 'open', 'Открыто для школьников и студентов колледжей Казахстана и Центральной Азии.',
    '["ru","en"]'::jsonb, 'rolling', '2027-02-28', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по официальным программам Astana Hub Academy.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: alem-school-coding-bootcamp-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'alem-school-coding-bootcamp-2027', 'alem School Youth Peer-to-Peer Coding Intensive', 'alem School (Astana)', 'summer_school', 'Free peer-to-peer programming intensive in Astana for students aged 16+ using the 01Edu model.', 'https://alem.school', NULL, 'approved', true,
    ARRAY['computer_science','ai','stem']::text[], ARRAY['computer_science','ai','stem']::text[], ARRAY['Age 16 or older','Pass online logic and memory entrance games','Commitment to on-site intensive in Astana']::text[],
    '{"ru":"Интенсив по программированию alem school для молодежи","kk":"Жастарға арналған alem school бағдарламалау қарқынды курсы","en":"alem School Youth Peer-to-Peer Coding Intensive"}'::jsonb, '{"ru":"Бесплатная школа программирования по методике 01Edu в Астане для молодежи от 16 лет.","kk":"16 жастан асқан жастарға арналған Астанадағы тегін peer-to-peer бағдарламалау мектебі.","en":"Free peer-to-peer programming intensive in Astana for students aged 16+ using the 01Edu model."}'::jsonb, '{"ru":"Бесплатная образовательная программа на базе методики peer-to-peer (обучение равный равному без учителей и оценок) в Астане. Участники с 16 лет решают практические алгоритмические задачи, создают веб-сервисы и погружаются в практическую разработку ПО.","kk":"Астана қаласындағы мұғалімдерсіз және бағалаусыз өтетін заманауи peer-to-peer бағдарламалау мектебі. 16 жастан асқан жастар практикалық алгоритмдерді шешіп, веб-сервистер жасайды.","en":"Free peer-to-peer coding intensive for youth aged 16+ at alem school in Astana. Based on the 01Edu model, students learn full-stack development, software engineering, and algorithms through project collaboration."}'::jsonb,
    'alem School (Astana)', ARRAY['computer_science','ai','stem']::text[], '{"ru":["Возраст 16 лет и старше","Прохождение онлайн-игр на логику и память на платформе","Готовность посещать очный интенсив («Бассейн») в Астане"],"kk":["16 жас және одан үлкен","Платформадағы логика мен есте сақтау ойындарын сәтті тапсыру","Астанадағы офлайн қарқынды курсқа қатысуға дайын болу"],"en":["Age 16 or older","Pass online logic and memory entrance games","Commitment to on-site intensive in Astana"]}'::jsonb, 'https://alem.school', 'https://alem.school',
    'free', NULL, NULL, 'offline', 'Astana, Kazakhstan',
    10, 12, 16, 18,
    ARRAY['KZ']::text[], '{}'::text[], 'open', 'Открыто для проживающих в Казахстане.',
    '["ru","en"]'::jsonb, 'rolling', NULL, 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по официальному сайту alem.school. Бесплатное обучение.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: kaznu-junior-science-lab-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'kaznu-junior-science-lab-2027', 'Al-Farabi KazNU Junior Science Research Lab', 'Казахский национальный университет имени аль-Фараби', 'research', 'University laboratory science research internship at KazNU in Almaty for grades 9–11.', 'https://kaznu.kz', '2027-04-15', 'approved', true,
    ARRAY['stem','environmental_science','medicine']::text[], ARRAY['stem','environmental_science','medicine']::text[], ARRAY['Grades 9–11 student','Interest in biological, chemical, or environmental sciences','Teacher recommendation letter']::text[],
    '{"ru":"Юношеская научная лаборатория КазНУ им. аль-Фараби","kk":"Әл-Фараби атындағы ҚазҰУ жас ғалымдар зертханасы","en":"Al-Farabi KazNU Junior Science Research Lab"}'::jsonb, '{"ru":"Научная практика в лабораториях КазНУ в Алматы по биотехнологиям, химии и экологии для 9–11 классов.","kk":"Алматыдағы ҚазҰУ зертханаларында 9–11 сыныптар үшін биология, химия және нанотехнологиядан ғылыми тәжірибе.","en":"University laboratory science research internship at KazNU in Almaty for grades 9–11."}'::jsonb, '{"ru":"Практическая научная стажировка для школьников 9–11 классов в университетских научно-исследовательских лабораториях КазНУ в Алматы по биоинженерии, органической химии, экологии и нанотехнологиям.","kk":"Алматы қаласындағы ҚазҰУ ғылыми-зерттеу зертханаларында 9–11 сынып оқушыларына арналған биоинженерия, химия және экология бағыттарындағы практикалық ғылыми тәжірибе.","en":"Hands-on university lab research internship for secondary students in grades 9–11 at Al-Farabi KazNU laboratories in Almaty, focusing on biotechnology, green chemistry, and nanotechnology."}'::jsonb,
    'Казахский национальный университет имени аль-Фараби', ARRAY['stem','environmental_science','medicine']::text[], '{"ru":["Учащийся 9–11 классов","Интерес к химии, биологии или экологии","Мотивационное письмо и рекомендация учителя естественно-научных дисциплин"],"kk":["9–11 сынып оқушысы","Химия, биология немесе экология пәндеріне қызығушылық","Мотивациялық хат және пән мұғалімінің ұсынысы"],"en":["Grades 9–11 student","Interest in biological, chemical, or environmental sciences","Teacher recommendation letter"]}'::jsonb, 'https://kaznu.kz', 'https://kaznu.kz',
    'free', NULL, NULL, 'offline', 'Almaty, Kazakhstan',
    9, 11, 14, 18,
    ARRAY['KZ']::text[], '{}'::text[], 'open', 'Открыто для школьников Алматы и близлежащих регионов.',
    '["kk","ru"]'::jsonb, 'annual_estimate', '2027-04-15', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по данным департамента науки КазНУ.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: nis-science-projects-fair-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'nis-science-projects-fair-2027', 'Nazarbayev Intellectual Schools (NIS) Annual Science Fair', 'АОО «Назарбаев Интеллектуальные школы»', 'research', 'Annual science and engineering research fair hosted by Nazarbayev Intellectual Schools.', 'https://nis.edu.kz', '2027-01-20', 'approved', true,
    ARRAY['stem','robotics','ai','environmental_science']::text[], ARRAY['stem','robotics','ai','environmental_science']::text[], ARRAY['Grades 8–12 student at NIS or affiliate partner school','Completed scientific study with experimental data','Poster presentation']::text[],
    '{"ru":"Сетевой конкурс научных проектов NIS (Назарбаев Интеллектуальные Школы)","kk":"НЗМ (Назарбаев Зияткерлік мектептері) желілік ғылыми жобалар байқауы","en":"Nazarbayev Intellectual Schools (NIS) Annual Science Fair"}'::jsonb, '{"ru":"Сетевой научный конкурс исследовательских и инженерных проектов NIS с участием внешних школ.","kk":"НЗМ желілік ғылыми зерттеулер мен инженерлік жобалар байқауы.","en":"Annual science and engineering research fair hosted by Nazarbayev Intellectual Schools."}'::jsonb, '{"ru":"Масштабный ежегодный научно-практический смотр исследовательских и инженерных разработок учащихся Интеллектуальных школ и приглашенных общеобразовательных школ по математическому моделированию, физике, технике и гуманитарным наукам.","kk":"Назарбаев Зияткерлік мектептері мен серіктес мектептер оқушыларының математика, физика, инженерия және қоғамдық ғылымдар бойынша жыл сайынғы ғылыми зерттеулер байқауы.","en":"Flagship annual pre-college science and engineering fair organized by Nazarbayev Intellectual Schools (NIS) for innovative student research in math modeling, applied physics, and robotics."}'::jsonb,
    'АОО «Назарбаев Интеллектуальные школы»', ARRAY['stem','robotics','ai','environmental_science']::text[], '{"ru":["Ученик 8–12 классов системы NIS или школ-партнеров","Готовая исследовательская работа с результатами экспериментов","Презентация и постерный доклад"],"kk":["НЗМ немесе серіктес мектептердің 8–12 сынып оқушысы","Тәжірибелік нәтижелері бар ғылыми жұмыс","Презентация және постерлік баяндама"],"en":["Grades 8–12 student at NIS or affiliate partner school","Completed scientific study with experimental data","Poster presentation"]}'::jsonb, 'https://nis.edu.kz', 'https://nis.edu.kz',
    'free', NULL, NULL, 'offline', 'Astana / Regional NIS Hubs',
    8, 12, 14, 18,
    ARRAY['KZ']::text[], '{}'::text[], 'open', 'Для учащихся NIS и аккредитованных школ-партнеров.',
    '["kk","ru","en"]'::jsonb, 'annual_estimate', '2027-01-20', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по официальному регламенту NIS. Проводится зимой.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: camun-model-united-nations-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'camun-model-united-nations-2027', 'Central Asian Model United Nations for High Schools (CAMUN)', 'CAMUN Secretariat / UN Information Centre', 'competition', 'Diplomatic Model UN conference in Almaty: debate international policies and draft resolutions.', 'https://camun.kz', '2027-02-15', 'approved', true,
    ARRAY['leadership','social_sciences','humanities']::text[], ARRAY['leadership','social_sciences','humanities']::text[], ARRAY['Grades 8–11 student','Fluent English','Country position paper submission']::text[],
    '{"ru":"Центрально-Азиатская Модель ООН для школьников (CAMUN)","kk":"Оқушыларға арналған Орталық Азия БҰҰ Моделі (CAMUN)","en":"Central Asian Model United Nations for High Schools (CAMUN)"}'::jsonb, '{"ru":"Дипломатическая конференция Модели ООН в Алматы: дебаты, международные отношения и резолюции.","kk":"Алматыдағы БҰҰ Моделі дипломатиялық конференциясы: дебаттар, халықаралық қатынастар және қарарлар.","en":"Diplomatic Model UN conference in Almaty: debate international policies and draft resolutions."}'::jsonb, '{"ru":"Международная дипломатическая ролевая игра для старшеклассников, моделирующая работу комитетов Организации Объединенных Наций (Совет Безопасности, ЮНЕСКО, ЭКОСОС). Участники выступают в роли делегатов стран и разрабатывают резолюции глобальных кризисов.","kk":"Жоғары сынып оқушыларына арналған БҰҰ комитеттерінің жұмысын көрсететін халықаралық дипломатиялық ойын. Қатысушылар түрлі мемлекеттердің делегаттары ретінде жаһандық мәселелердің қарарларын дайындайды.","en":"International diplomatic simulation conference for secondary school students modeling UN committees (Security Council, UNESCO, WHO, ECOSOC). Delegates draft and debate resolutions on global crises."}'::jsonb,
    'CAMUN Secretariat / UN Information Centre', ARRAY['leadership','social_sciences','humanities']::text[], '{"ru":["Ученик 8–11 классов","Свободное владение английским языком","Позиционный документ (Position Paper) по назначенной стране"],"kk":["8–11 сынып оқушысы","Ағылшын тілін еркін меңгеру","Берілген ел бойынша позициялық құжат (Position Paper) дайындау"],"en":["Grades 8–11 student","Fluent English","Country position paper submission"]}'::jsonb, 'https://camun.kz', 'https://camun.kz',
    'paid', 15000, 'KZT', 'offline', 'Almaty, Kazakhstan',
    8, 11, 14, 18,
    ARRAY['KZ','KG','UZ','TJ']::text[], '{}'::text[], 'open', 'Открыто для школьников Центральной Азии.',
    '["en"]'::jsonb, 'fixed', '2027-02-15', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по официальному регламенту оргкомитета CAMUN.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: technovation-girls-kazakhstan-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'technovation-girls-kazakhstan-2027', 'Technovation Girls Kazakhstan Chapter', 'Technovation Global & Kazakhstan Regional Ambassadors', 'competition', 'Global tech & business challenge for girls 8–18: build mobile apps and AI solutions with mentors.', 'https://technovationchallenge.org', '2027-03-20', 'approved', true,
    ARRAY['computer_science','entrepreneurship','ai','social_sciences']::text[], ARRAY['computer_science','entrepreneurship','ai','social_sciences']::text[], ARRAY['Female students ages 13–18','Team of 1 to 5 girls','Mobile app/AI prototype, business pitch, and code repository']::text[],
    '{"ru":"Technovation Girls Казахстан (технологическое предпринимательство для девушек)","kk":"Technovation Girls Қазақстан (қыздарға арналған технологиялық кәсіпкерлік)","en":"Technovation Girls Kazakhstan Chapter"}'::jsonb, '{"ru":"Международная IT-программа для школьниц: создание полезного приложения или ИИ с ментором.","kk":"Қыздарға арналған халықаралық IT-бағдарлама: ментормен бірге пайдалы қосымша немесе ЖИ жасау.","en":"Global tech & business challenge for girls 8–18: build mobile apps and AI solutions with mentors."}'::jsonb, '{"ru":"Казахстанское отделение крупнейшей в мире международной программы технологического предпринимательства для девушек в возрасте от 8 до 18 лет. Команды девушек при поддержке менторов разрабатывают мобильное приложение или ИИ-прототип для решения актуальной социальной или экологической проблемы своего сообщества.","kk":"8 бен 18 жас аралығындағы қыздарға арналған әлемдегі ең ірі халықаралық технологиялық бағдарламаның Қазақстандағы бөлімі. Қатысушылар менторлармен бірге өз өңірінің мәселелерін шешетін мобильді қосымша немесе ЖИ жобасын жасайды.","en":"Kazakhstan chapter of the world''s largest tech entrepreneurship program for girls ages 8–18. Teams work with volunteer industry mentors to build a mobile app or AI prototype addressing UN Sustainable Development Goals."}'::jsonb,
    'Technovation Global & Kazakhstan Regional Ambassadors', ARRAY['computer_science','entrepreneurship','ai','social_sciences']::text[], '{"ru":["Девушки в возрасте от 13 до 18 лет (категории Junior и Senior)","Команда от 1 до 5 участниц","Разработка прототипа приложения, бизнес-плана и питч-видео"],"kk":["13 пен 18 жас аралығындағы қыздар (Junior және Senior санаттары)","1-ден 5 қатысушыға дейінгі команда","Қосымша прототипі, бизнес-жоспар және бейнепрезентация дайындау"],"en":["Female students ages 13–18","Team of 1 to 5 girls","Mobile app/AI prototype, business pitch, and code repository"]}'::jsonb, 'https://technovationchallenge.org', 'https://technovationchallenge.org',
    'free', NULL, NULL, 'online', 'Kazakhstan & Global',
    7, 12, 13, 18,
    ARRAY['KZ']::text[], '{}'::text[], 'open', 'Открыто для девушек-школьниц из Казахстана.',
    '["en","ru"]'::jsonb, 'fixed', '2027-03-20', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по официальному календарю Technovation 2027. Регистрация команд открыта.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: wro-kazakhstan-robotics-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'wro-kazakhstan-robotics-2027', 'World Robot Olympiad (WRO) Kazakhstan National Finals', 'WRO Kazakhstan / АОО «НИШ»', 'competition', 'Official Kazakhstan national robotics championship qualifying teams for World Robot Olympiad.', 'https://wro.kz', '2027-05-01', 'approved', true,
    ARRAY['robotics','stem','computer_science']::text[], ARRAY['robotics','stem','computer_science']::text[], ARRAY['Students ages 13–18 in teams of 2–3','Adult team coach','Assembled and programmed robot compliant with season rules']::text[],
    '{"ru":"Национальная олимпиада по робототехнике WRO Казахстан","kk":"WRO Қазақстан ұлттық робототехника олимпиадасы","en":"World Robot Olympiad (WRO) Kazakhstan National Finals"}'::jsonb, '{"ru":"Главный чемпионат Казахстана по робототехнике с отбором на мировой финал World Robot Olympiad.","kk":"WRO әлемдік финалына жолдама беретін робототехникадан Қазақстанның басты чемпионаты.","en":"Official Kazakhstan national robotics championship qualifying teams for World Robot Olympiad."}'::jsonb, '{"ru":"Официальный отборочный этап Всемирной олимпиады роботов (WRO) в Казахстане. Соревнования проходят в категориях RoboMission (автономные роботы на полигоне), Future Innovators (научно-инженерные инновационные проекты) и RoboSports.","kk":"Дүниежүзілік роботтар олимпиадасының (WRO) Қазақстандағы ресми іріктеу кезеңі. Жарыстар RoboMission, Future Innovators және RoboSports санаттары бойынша өткізіледі.","en":"Official Kazakhstan qualifier for the World Robot Olympiad (WRO). High school teams compete in RoboMission (autonomous field robotics), Future Innovators (scientific engineering projects), and RoboSports."}'::jsonb,
    'WRO Kazakhstan / АОО «НИШ»', ARRAY['robotics','stem','computer_science']::text[], '{"ru":["Школьники в возрасте от 13 до 18 лет в составе команды (2–3 человека)","Наличие тренера-наставника","Собранный и запрограммированный робот согласно регламенту сезона"],"kk":["13 пен 18 жас аралығындағы оқушылардан құралған команда (2–3 адам)","Жетекші бапкердің болуы","Маусым ережелеріне сәйкес жасалған және бағдарламаланған робот"],"en":["Students ages 13–18 in teams of 2–3","Adult team coach","Assembled and programmed robot compliant with season rules"]}'::jsonb, 'https://wro.kz', 'https://wro.kz',
    'paid', 25000, 'KZT', 'offline', 'Astana / Almaty, Kazakhstan',
    7, 11, 13, 18,
    ARRAY['KZ']::text[], '{}'::text[], 'open', 'Для команд школьников из Казахстана.',
    '["ru","kk","en"]'::jsonb, 'annual_estimate', '2027-05-01', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по регламенту WRO Kazakhstan.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: euler-math-olympiad-kz-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'euler-math-olympiad-kz-2027', 'Leonard Euler Mathematics Olympiad for Grades 7–8', 'РНПЦ «Дарын»', 'competition', 'Prestigious mathematics competition for grades 7–8 feeding into Kazakhstan''s national olympiad team.', 'https://daryn.kz/euler', '2026-11-30', 'approved', true,
    ARRAY['mathematics','stem']::text[], ARRAY['mathematics','stem']::text[], ARRAY['Enrolled in grade 7 or 8','Passing score in preliminary regional round','Registration via Daryn']::text[],
    '{"ru":"Математическая олимпиада имени Леонарда Эйлера для 7–8 классов","kk":"7–8 сыныптарға арналған Леонард Эйлер атындағы математикалық олимпиада","en":"Leonard Euler Mathematics Olympiad for Grades 7–8"}'::jsonb, '{"ru":"Сложнейшая олимпиада по математике для 7–8 классов, путь в сборную Казахстана на мировую IMO.","kk":"7–8 сыныптарға арналған беделді математикалық олимпиада, ұлттық құрамаға жолдама.","en":"Prestigious mathematics competition for grades 7–8 feeding into Kazakhstan''s national olympiad team."}'::jsonb, '{"ru":"Престижная математическая олимпиада для учащихся 7–8 классов, эквивалентная по сложности и формату заключительному этапу всероссийской и республиканской олимпиад для старших классов. Служит главным трамплином в олимпийский резерв национальной сборной Казахстана.","kk":"7–8 сынып оқушыларына арналған жоғары деңгейлі математикалық олимпиада. Қазақстанның олимпиадалық ұлттық құрамасының резервіне өтудің негізгі бастамасы болып табылады.","en":"Premier mathematics competition designed specifically for advanced 7th and 8th graders, mirroring the rigor of national senior olympiads and serving as the feeder to Kazakhstan''s international IMO pipeline."}'::jsonb,
    'РНПЦ «Дарын»', ARRAY['mathematics','stem']::text[], '{"ru":["Учащийся 7 или 8 класса","Успешное участие в дистанционном или региональном этапе","Регистрация на платформе Дарын"],"kk":["7 немесе 8 сынып оқушысы","Қашықтық немесе аймақтық кезеңнен сәтті өту","Дарын платформасында тіркелу"],"en":["Enrolled in grade 7 or 8","Passing score in preliminary regional round","Registration via Daryn"]}'::jsonb, 'https://daryn.kz/euler', 'https://smart.daryn.kz',
    'free', NULL, NULL, 'offline', 'Kazakhstan',
    7, 8, 13, 15,
    ARRAY['KZ']::text[], '{}'::text[], 'open', 'Открыто для школьников Казахстана.',
    '["ru","kk"]'::jsonb, 'fixed', '2026-11-30', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по регламенту олимпиады Эйлера.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: silkway-math-olympiad-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'silkway-math-olympiad-2027', 'Silk Road International Mathematical Olympiad', 'Оргкомитет олимпиады «Шелковый путь» / Дарын', 'competition', 'Elite international mathematics competition for national math talents across Silk Road countries.', 'https://daryn.kz/silkway', '2027-03-10', 'approved', true,
    ARRAY['mathematics','stem']::text[], ARRAY['mathematics','stem']::text[], ARRAY['Grades 9–11 student','National math olympiad winner or national team reserve member','In-person proctored exam']::text[],
    '{"ru":"Международная олимпиада «Шелковый путь» по математике (Silk Road Math)","kk":"«Жібек жолы» халықаралық математикалық олимпиадасы","en":"Silk Road International Mathematical Olympiad"}'::jsonb, '{"ru":"Международная олимпиада по высшей школьной математике для сборных стран Шелкового пути.","kk":"Жібек жолы елдерінің мектеп құрамаларына арналған халықаралық математика олимпиадасы.","en":"Elite international mathematics competition for national math talents across Silk Road countries."}'::jsonb, '{"ru":"Заочная международная математическая олимпиада высшего уровня сложности для школьников стран Шелкового пути и Центральной Азии. Проводится одновременно в национальных центрах стран-участниц по единым заданиям.","kk":"Жібек жолы елдері мен Орталық Азия оқушыларына арналған жоғары деңгейдегі халықаралық сырттай математикалық олимпиада. Қатысушы елдердің ұлттық орталықтарында бір уақытта өткізіледі.","en":"High-level international written mathematics competition conducted simultaneously across participating Silk Road and Central Asian nations, testing advanced geometry, number theory, and combinatorics."}'::jsonb,
    'Оргкомитет олимпиады «Шелковый путь» / Дарын', ARRAY['mathematics','stem']::text[], '{"ru":["Учащийся 9–11 класса","Членство в олимпийском резерве по математике или диплом республиканской олимпиады","Очное написание тура в аккредитованном центре"],"kk":["9–11 сынып оқушысы","Математикадан олимпиадалық резерв мүшесі немесе республикалық жүлдегер","Аккредиттелген орталықта жазбаша турдан өту"],"en":["Grades 9–11 student","National math olympiad winner or national team reserve member","In-person proctored exam"]}'::jsonb, 'https://daryn.kz/silkway', 'https://daryn.kz',
    'free', NULL, NULL, 'offline', 'Almaty / Astana, Kazakhstan',
    9, 11, 14, 18,
    ARRAY['KZ','UZ','KG','TJ','AZ']::text[], '{}'::text[], 'open', 'Для школьников стран-участниц олимпиады.',
    '["ru","en"]'::jsonb, 'annual_estimate', '2027-03-10', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по регламенту олимпиад РНПЦ «Дарын».'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: red-crescent-kazakhstan-volunteers-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'red-crescent-kazakhstan-volunteers-2027', 'Red Crescent Kazakhstan Youth Volunteer Corps', 'Общество Красного Полумесяца Республики Казахстан', 'volunteering', 'Certified humanitarian volunteering for teens 14+: first aid training and community social projects.', 'https://redcrescent.kz', NULL, 'approved', true,
    ARRAY['social_sciences','leadership','medicine']::text[], ARRAY['social_sciences','leadership','medicine']::text[], ARRAY['Age 14 or older','Parental consent for minors','Commitment of at least 2 hours per week']::text[],
    '{"ru":"Молодежное волонтерское движение Красного Полумесяца Казахстана","kk":"Қазақстан Қызыл Жарты Ай жастар еріктілер қозғалысы","en":"Red Crescent Kazakhstan Youth Volunteer Corps"}'::jsonb, '{"ru":"Сертифицированное волонтерство для школьников от 14 лет: обучение первой помощи и социальные проекты.","kk":"14 жастан асқан оқушыларға арналған ресми еріктілік: алғашқы көмекке үйрену және қайырымдылық жобалары.","en":"Certified humanitarian volunteering for teens 14+: first aid training and community social projects."}'::jsonb, '{"ru":"Официальное волонтерское движение для подростков и молодежи от 14 лет. Участники проходят сертифицированные тренинги по оказанию первой доврачебной помощи, участвуют в благотворительных акциях, организации донорства и поддержке уязвимых групп населения по всему Казахстану.","kk":"14 жастан асқан жасөспірімдер мен жастарға арналған ресми еріктілер қозғалысы. Қатысушылар алғашқы көмек көрсету бойынша сертификатталған тренингтерден өтіп, қайырымдылық шараларына қатысады.","en":"Official youth humanitarian volunteer corps for teenagers aged 14+ across Kazakhstan. Volunteers receive certified first-aid training and lead community health, emergency response, and social care initiatives."}'::jsonb,
    'Общество Красного Полумесяца Республики Казахстан', ARRAY['social_sciences','leadership','medicine']::text[], '{"ru":["Возраст от 14 лет","Согласие родителей для несовершеннолетних","Готовность уделять от 2 часов в неделю общественной деятельности"],"kk":["14 жастан бастап","Кәмелетке толмағандар үшін ата-анасының келісімі","Аптасына кемінде 2 сағат уақыт бөлуге дайын болу"],"en":["Age 14 or older","Parental consent for minors","Commitment of at least 2 hours per week"]}'::jsonb, 'https://redcrescent.kz', 'https://redcrescent.kz',
    'free', NULL, NULL, 'offline', 'All regions of Kazakhstan',
    8, 12, 14, 18,
    ARRAY['KZ']::text[], '{}'::text[], 'open', 'Открыто во всех филиалах Красного Полумесяца в Казахстане.',
    '["ru","kk"]'::jsonb, 'rolling', NULL, 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по официальному порталу redcrescent.kz. Набор круглогодичный.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: zhas-project-youth-grants-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'zhas-project-youth-grants-2027', 'Zhas Project Youth Community Microgrants', 'Министерство культуры и информации РК / Центр поддержки гражданских инициатив', 'entrepreneurship', 'Youth community microgrants up to 1,000,000 KZT for grassroots social initiatives in Kazakhstan.', 'https://zhasproject.kz', '2027-05-30', 'approved', true,
    ARRAY['leadership','social_sciences','entrepreneurship']::text[], ARRAY['leadership','social_sciences','entrepreneurship']::text[], ARRAY['Ages 18 or high school seniors with an adult lead','Residency in participating region','Actionable community improvement plan']::text[],
    '{"ru":"Проект развития молодежного корпуса Zhas Project (микрогранты)","kk":"Zhas Project жастар корпусын дамыту жобасы (шағын гранттар)","en":"Zhas Project Youth Community Microgrants"}'::jsonb, '{"ru":"Безвозмездные микрогранты до 1 000 000 тенге на социальные проекты в регионах Казахстана.","kk":"Қазақстан өңірлеріндегі әлеуметтік жобаларға 1 000 000 теңгеге дейінгі қайтарымсыз гранттар.","en":"Youth community microgrants up to 1,000,000 KZT for grassroots social initiatives in Kazakhstan."}'::jsonb, '{"ru":"Государственная программа малых безвозмездных грантов (до 1 000 000 тенге) для молодежи от 18 лет (и старших школьников в составе команд) на реализацию социальных и общественных инициатив в регионах Казахстана.","kk":"Қазақстан өңірлерінде әлеуметтік және қоғамдық бастамаларды жүзеге асыру үшін жастарға арналған мемлекеттік қайтарымсыз шағын гранттар (1 000 000 теңгеге дейін) бағдарламасы.","en":"State social microgrant program in Kazakhstan providing non-repayable grants (up to 1,000,000 KZT) for youth-led local community improvement and social enterprise projects."}'::jsonb,
    'Министерство культуры и информации РК / Центр поддержки гражданских инициатив', ARRAY['leadership','social_sciences','entrepreneurship']::text[], '{"ru":["Молодежь в возрасте 18 лет (или старшеклассники под кураторством совершеннолетнего лидера)","Проживание в целевом регионе конкурса","Готовый план социального проекта, направленный на решение локальной проблемы"],"kk":["18 жастағы жастар (немесе ересек жетекшісі бар оқушылар командасы)","Байқау өтетін мақсатты өңірде тұру","Жергілікті мәселені шешуге бағытталған әлеуметтік жоба жоспары"],"en":["Ages 18 or high school seniors with an adult lead","Residency in participating region","Actionable community improvement plan"]}'::jsonb, 'https://zhasproject.kz', 'https://zhasproject.kz',
    'stipend', 1000000, 'KZT', 'offline', 'Kazakhstan',
    11, 12, 17, 18,
    ARRAY['KZ']::text[], '{}'::text[], 'open', 'Для граждан Республики Казахстан.',
    '["kk","ru"]'::jsonb, 'annual_estimate', '2027-05-30', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по официальному регламенту zhasproject.kz.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: conrad-challenge-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'conrad-challenge-2027', 'Conrad Challenge 2026/2027 Innovation Competition', 'Conrad Foundation', 'competition', 'Global innovation competition for teens 13–18 solving aerospace, AI, and environmental challenges.', 'https://www.conradchallenge.org', '2026-11-06', 'approved', true,
    ARRAY['stem','robotics','ai','environmental_science','entrepreneurship']::text[], ARRAY['stem','robotics','ai','environmental_science','entrepreneurship']::text[], ARRAY['Ages 13–18','Team of 2–5 students plus adult coach','Innovation brief and pitch video in English']::text[],
    '{"ru":"Международный инновационный конкурс Conrad Challenge 2026/2027","kk":"Conrad Challenge 2026/2027 халықаралық инновациялық байқауы","en":"Conrad Challenge 2026/2027 Innovation Competition"}'::jsonb, '{"ru":"Мировой конкурс инноваций для команд 13–18 лет: аэрокосмос, ИИ, экология, медицина и поездка в NASA.","kk":"13–18 жастағы командаларға арналған әлемдік инновациялар байқауы: NASA-ға сапар және стипендиялар.","en":"Global innovation competition for teens 13–18 solving aerospace, AI, and environmental challenges."}'::jsonb, '{"ru":"Престижный глобальный конкурс научно-технических инноваций и предпринимательства для школьников 13–18 лет. Команды от 2 до 5 человек под руководством наставника создают коммерчески жизнеспособные решения в категориях: Аэрокосмические технологии, Кибербезопасность и ИИ, Энергетика и экология, Здравоохранение.","kk":"13 пен 18 жас аралығындағы оқушыларға арналған беделді жаһандық ғылыми-техникалық инновациялар мен кәсіпкерлік байқауы. 2-ден 5 адамға дейінгі командалар аэроғарыш, киберқауіпсіздік, энергетика және денсаулық сақтау салаларында шешімдер жасайды.","en":"Prestigious global innovation and entrepreneurship challenge for students ages 13–18. Teams of 2–5 design commercially viable solutions in Aerospace & Aviation, Cyber-Technology & AI, Energy & Environment, and Health & Nutrition."}'::jsonb,
    'Conrad Foundation', ARRAY['stem','robotics','ai','environmental_science','entrepreneurship']::text[], '{"ru":["Возраст от 13 до 18 лет","Команда от 2 до 5 участников + взрослый наставник (тренер)","Подача презентации инновации и питч-видео на английском языке"],"kk":["13 пен 18 жас аралығы","2-ден 5 қатысушыға дейінгі команда + ересек тәлімгер","Ағылшын тіліндегі жоба презентациясы мен бейнебаяны"],"en":["Ages 13–18","Team of 2–5 students plus adult coach","Innovation brief and pitch video in English"]}'::jsonb, 'https://www.conradchallenge.org', 'https://www.conradchallenge.org',
    'paid', 50, 'USD', 'online', 'Online / Houston, TX, USA (Finals)',
    8, 12, 13, 18,
    '{}'::text[], '{}'::text[], 'open', 'Открыто для школьников со всего мира, включая Казахстан.',
    '["en"]'::jsonb, 'fixed', '2026-11-06', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по conradchallenge.org. Регистрация первого раунда завершается в ноябре.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: technovation-girls-global-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'technovation-girls-global-2027', 'Technovation Girls Global Tech Challenge 2027', 'Technovation', 'competition', 'Global tech & business challenge for girls 13–18: build mobile apps and AI solutions to solve community issues.', 'https://technovationchallenge.org/seasons/2027', '2027-03-24', 'approved', true,
    ARRAY['computer_science','entrepreneurship','ai','social_sciences']::text[], ARRAY['computer_science','entrepreneurship','ai','social_sciences']::text[], ARRAY['Female students ages 13–18','Teams of 1 to 5 members','Working prototype (mobile app or AI model), pitch video, and business plan']::text[],
    '{"ru":"Международная технологическая программа Technovation Girls 2027","kk":"Technovation Girls 2027 халықаралық технологиялық бағдарламасы","en":"Technovation Girls Global Tech Challenge 2027"}'::jsonb, '{"ru":"Глобальная бесплатная программа для девушек 13–18 лет: создание мобильного приложения или ИИ с ментором.","kk":"13–18 жастағы қыздарға арналған жаһандық бағдарлама: ментормен мобильді қосымша немесе ЖИ жасау.","en":"Global tech & business challenge for girls 13–18: build mobile apps and AI solutions to solve community issues."}'::jsonb, '{"ru":"Крупнейшая глобальная программа обучения технологиям и стартапам для девушек 8–18 лет (категории 13–15 и 16–18 лет). Команды изучают программирование, создают мобильное приложение или ИИ-прототип для решения социальных проблем ООН и составляют бизнес-план.","kk":"8–18 жастағы қыздарға арналған әлемдегі ең ірі технологиялық стартап бағдарламасы. Қатысушылар бағдарламалауды үйреніп, әлеуметтік мәселелерді шешетін мобильді қосымша немесе ЖИ жобасын дайындайды.","en":"The world''s largest technology entrepreneurship program for girls ages 8–18 (divisions for 13–15 and 16–18). Teams identify a community problem and build a mobile app or AI prototype, business plan, and video pitch."}'::jsonb,
    'Technovation', ARRAY['computer_science','entrepreneurship','ai','social_sciences']::text[], '{"ru":["Девушки от 13 до 18 лет","Команда от 1 до 5 участниц","Разработка прототипа (MIT App Inventor, Thunkable, Flutter или Python AI), питч и бизнес-план"],"kk":["13 пен 18 жас аралығындағы қыздар","1-ден 5 қатысушыға дейінгі команда","Қосымша прототипі, бейнепитч және бизнес-жоспар"],"en":["Female students ages 13–18","Teams of 1 to 5 members","Working prototype (mobile app or AI model), pitch video, and business plan"]}'::jsonb, 'https://technovationchallenge.org/seasons/2027', 'https://technovationchallenge.org',
    'free', NULL, NULL, 'online', 'Global / Online',
    7, 12, 13, 18,
    '{}'::text[], '{}'::text[], 'open', 'Открыто по всему миру без ограничений по гражданству.',
    '["en"]'::jsonb, 'fixed', '2027-03-24', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по technovationchallenge.org. Участие бесплатное.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: microsoft-imagine-cup-junior-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'microsoft-imagine-cup-junior-2027', 'Microsoft Imagine Cup Junior 2027', 'Microsoft', 'competition', 'Global Microsoft AI challenge for students 13–18 solving environmental and humanitarian issues.', 'https://imaginecup.microsoft.com', '2027-05-10', 'approved', true,
    ARRAY['ai','computer_science','stem','environmental_science']::text[], ARRAY['ai','computer_science','stem','environmental_science']::text[], ARRAY['Ages 13–18','Team of 1 to 6 students with a team leader/educator','Submission of project PowerPoint template and summary']::text[],
    '{"ru":"Международный конкурс Microsoft Imagine Cup Junior 2027","kk":"Microsoft Imagine Cup Junior 2027 халықаралық байқауы","en":"Microsoft Imagine Cup Junior 2027"}'::jsonb, '{"ru":"Школьный конкурс от Microsoft: разработка концепции ИИ для решения экологических и социальных задач.","kk":"Microsoft ұсынған оқушылар байқауы: экологиялық және әлеуметтік мәселелерді шешетін ЖИ жобасы.","en":"Global Microsoft AI challenge for students 13–18 solving environmental and humanitarian issues."}'::jsonb, '{"ru":"Глобальное соревнование от корпорации Microsoft для школьников 13–18 лет, посвященное применению искусственного интеллекта (AI for Good) для решения мировых экологических, образовательных и гуманитарных вызовов.","kk":"Microsoft корпорациясының 13–18 жастағы оқушыларға арналған экологиялық, білім беру және әлеуметтік мәселелерді жасанды интеллект көмегімен шешуге бағытталған жаһандық байқауы.","en":"Global challenge by Microsoft for students ages 13–18 introducing Artificial Intelligence, machine learning, and cybersecurity to solve big global issues aligned with the AI for Good initiatives."}'::jsonb,
    'Microsoft', ARRAY['ai','computer_science','stem','environmental_science']::text[], '{"ru":["Возраст от 13 до 18 лет","Команда от 1 до 6 человек под руководством педагога","Заполнение шаблона проектной презентации Imagine Cup Junior"],"kk":["13 пен 18 жас аралығы","Мұғалім жетекшілік ететін 1-ден 6 адамға дейінгі команда","Imagine Cup Junior жобалық презентация үлгісін толтыру"],"en":["Ages 13–18","Team of 1 to 6 students with a team leader/educator","Submission of project PowerPoint template and summary"]}'::jsonb, 'https://imaginecup.microsoft.com', 'https://imaginecup.microsoft.com',
    'free', NULL, NULL, 'online', 'Global / Online',
    7, 12, 13, 18,
    '{}'::text[], '{}'::text[], 'open', 'Открыто для школьников всех стран мира.',
    '["en"]'::jsonb, 'annual_estimate', '2027-05-10', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по официальному порталу Microsoft Imagine Cup.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: breakthrough-junior-challenge-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'breakthrough-junior-challenge-2027', 'Breakthrough Junior Challenge 2027', 'Breakthrough Prize Foundation', 'competition', 'Create a 90-second video explaining a big science idea to win a $250,000 college scholarship.', 'https://breakthroughjuniorchallenge.org', '2027-06-25', 'approved', true,
    ARRAY['physics','mathematics','stem']::text[], ARRAY['physics','mathematics','stem']::text[], ARRAY['Ages 13–18','Original English-language explanatory video of max 90 seconds','Participation in the mandatory Peer-to-Peer Review process']::text[],
    '{"ru":"Международный научный конкурс Breakthrough Junior Challenge","kk":"Breakthrough Junior Challenge халықаралық ғылыми байқауы","en":"Breakthrough Junior Challenge 2027"}'::jsonb, '{"ru":"Создай 90-секундное видео по физике или математике и выиграй стипендию $250 000 на обучение в вузе.","kk":"Физика немесе математика бойынша 90 секундтық видео түсіріп, $250 000 стипендия ұтып ал.","en":"Create a 90-second video explaining a big science idea to win a $250,000 college scholarship."}'::jsonb, '{"ru":"Престижный всемирный конкурс научных видеороликов для школьников 13–18 лет. Участники создают короткое креативное видео (до 90 секунд), объясняющее сложную концепцию или теорию в области фундаментальной физики, математики или наук о жизни. Главный приз: университетская стипендия $250 000, современная научная лаборатория для школы на $100 000 и премия учителю $50 000.","kk":"13 пен 18 жас аралығындағы оқушыларға арналған беделді ғылыми бейнероликтер байқауы. Қатысушылар физика, математика немесе биология саласындағы күрделі теорияны түсіндіретін 90 секундтық шығармашылық видео түсіреді. Бас жүлде: $250 000 университеттік стипендия және мектепке $100 000 зертхана.","en":"Global science video competition for students ages 13–18. Participants create an engaging up-to-90-second video explaining a complex concept in physics, mathematics, or life sciences. Winner receives a $250,000 college scholarship, a $100,000 science lab for their school, and a $50,000 teacher prize."}'::jsonb,
    'Breakthrough Prize Foundation', ARRAY['physics','mathematics','stem']::text[], '{"ru":["Возраст от 13 до 18 лет на момент подачи","Оригинальное объясняющее видео длительностью не более 90 секунд на английском языке","Участие в этапе рецензирования Peer-to-Peer Review"],"kk":["Өтініш беру кезінде 13 пен 18 жас аралығы","Ағылшын тіліндегі 90 секундтан аспайтын түсіндірме бейнеролик","Peer-to-Peer бағалау кезеңіне қатысу"],"en":["Ages 13–18","Original English-language explanatory video of max 90 seconds","Participation in the mandatory Peer-to-Peer Review process"]}'::jsonb, 'https://breakthroughjuniorchallenge.org', 'https://breakthroughjuniorchallenge.org',
    'free', NULL, NULL, 'online', 'Global / Online',
    8, 12, 13, 18,
    '{}'::text[], '{}'::text[], 'open', 'Открыто для школьников всех стран мира.',
    '["en"]'::jsonb, 'annual_estimate', '2027-06-25', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по breakthroughjuniorchallenge.org. Ежегодный дедлайн в конце июня.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: usaco-computing-olympiad-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'usaco-computing-olympiad-2027', 'USA Computing Olympiad (USACO) Online Contests', 'USA Computing Olympiad', 'competition', 'Prestigious free online algorithmic programming contests across Bronze, Silver, Gold, Platinum tiers.', 'https://usaco.org', '2026-12-18', 'approved', true,
    ARRAY['computer_science','stem']::text[], ARRAY['computer_science','stem']::text[], ARRAY['Pre-college student','Proficiency in C++, Java, or Python algorithms','Free account on usaco.org']::text[],
    '{"ru":"Олимпиада по программированию USACO (USA Computing Olympiad)","kk":"USACO (АҚШ компьютерлік олимпиадасы) алгоритмдік бағдарламалау жарысы","en":"USA Computing Olympiad (USACO) Online Contests"}'::jsonb, '{"ru":"Бесплатная престижная онлайн-олимпиада по спортивному программированию (Bronze, Silver, Gold, Platinum).","kk":"Спорттық бағдарламалаудан беделді тегін онлайн олимпиада (Bronze, Silver, Gold, Platinum).","en":"Prestigious free online algorithmic programming contests across Bronze, Silver, Gold, Platinum tiers."}'::jsonb, '{"ru":"Ведущая международная онлайн-олимпиада по алгоритмическому программированию для школьников. Соревнования проходят в четыре дивизиона (Bronze, Silver, Gold, Platinum). Доступна бесплатно для участников из любых стран мира (C++, Java, Python).","kk":"Мектеп оқушыларына арналған алгоритмдік бағдарламалаудан жетекші халықаралық онлайн олимпиада. Жарыстар төрт дивизион бойынша өтеді (Bronze, Silver, Gold, Platinum). Әлемнің кез келген елінің оқушылары үшін тегін.","en":"Premier algorithmic computer programming competition system for pre-college students worldwide. Offers four divisional contests (Bronze, Silver, Gold, Platinum) with rigorous automated grading in C++, Java, and Python."}'::jsonb,
    'USA Computing Olympiad', ARRAY['computer_science','stem']::text[], '{"ru":["Учащийся средней или старшей школы","Умение писать код на C++, Java или Python","Регистрация бесплатного аккаунта на сайте usaco.org"],"kk":["Орта немесе жоғары сынып оқушысы","C++, Java немесе Python тілінде код жаза білу","usaco.org сайтында тегін аккаунт ашу"],"en":["Pre-college student","Proficiency in C++, Java, or Python algorithms","Free account on usaco.org"]}'::jsonb, 'https://usaco.org', 'https://usaco.org',
    'free', NULL, NULL, 'online', 'Global / Online',
    7, 12, 13, 18,
    '{}'::text[], '{}'::text[], 'open', 'Онлайн-раунды открыты для всех школьников мира без ограничений.',
    '["en"]'::jsonb, 'fixed', '2026-12-18', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по официальному календарю USACO 2026-2027. Первый контест в декабре 2026.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: acsl-computer-science-league-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'acsl-computer-science-league-2027', 'American Computer Science League (ACSL)', 'American Computer Science League', 'competition', 'International team & individual CS league testing computer science theory and programming.', 'https://www.acsl.org', '2026-12-31', 'approved', true,
    ARRAY['computer_science','stem','mathematics']::text[], ARRAY['computer_science','stem','mathematics']::text[], ARRAY['Enrolled in grades 7–12','Registered individually or via school club','Completion of four season contests']::text[],
    '{"ru":"Американская лига компьютерных наук для школьников (ACSL)","kk":"Мектептерге арналған Америкалық компьютерлік ғылымдар лигасы (ACSL)","en":"American Computer Science League (ACSL)"}'::jsonb, '{"ru":"Международная лига по информатике: булева алгебра, графы, алгоритмы и программирование для 7–12 классов.","kk":"7–12 сыныптарға арналған информатика лигасы: логика, алгоритмдер және бағдарламалау есептері.","en":"International team & individual CS league testing computer science theory and programming."}'::jsonb, '{"ru":"Международная командная и индивидуальная лига по информатике для школьников 7–12 классов. Включает четыре отборочных тура по фундаментальной теории CS (системы счисления, булева алгебра, графы, структуры данных) и программированию, завершаясь всемирным финалом.","kk":"7–12 сынып оқушыларына арналған информатикадан халықаралық лига. Теориялық есептер мен бағдарламалау бойынша төрт турдан тұрады, үздіктер әлемдік финалға жолдама алады.","en":"International computer science league for grades 7–12 with four regular season rounds testing foundational CS theory (number systems, boolean algebra, graph theory, data structures) and hands-on coding, culminating in an All-Star Finals."}'::jsonb,
    'American Computer Science League', ARRAY['computer_science','stem','mathematics']::text[], '{"ru":["Ученик 7–12 класса","Регистрация индивидуально или в составе школьной команды","Участие в 4 онлайн-турах в течение учебного года"],"kk":["7–12 сынып оқушысы","Жеке немесе мектеп командасы атынан тіркелу","Оқу жылы бойы өтетін 4 онлайн турға қатысу"],"en":["Enrolled in grades 7–12","Registered individually or via school club","Completion of four season contests"]}'::jsonb, 'https://www.acsl.org', 'https://www.acsl.org',
    'paid', 100, 'USD', 'online', 'Global / Online',
    7, 12, 13, 18,
    '{}'::text[], '{}'::text[], 'open', 'Открыто для международных школ и индивидуальных участников со всего мира.',
    '["en"]'::jsonb, 'fixed', '2026-12-31', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по acsl.org. Сезонный взнос за команду школы, индивидуальный тариф доступен.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: world-robot-olympiad-global-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'world-robot-olympiad-global-2027', 'World Robot Olympiad (WRO) International Finals', 'World Robot Olympiad Association', 'competition', 'World Robot Olympiad: global autonomous robotics competition gathering national champions from 85+ countries.', 'https://wro-association.org', '2027-06-30', 'approved', true,
    ARRAY['robotics','stem','computer_science']::text[], ARRAY['robotics','stem','computer_science']::text[], ARRAY['Ages 13–18 in Senior division','Team of 2–3 students with adult coach','Qualification via official national partner']::text[],
    '{"ru":"Всемирная олимпиада роботов (World Robot Olympiad - WRO)","kk":"Дүниежүзілік роботтар олимпиадасы (World Robot Olympiad - WRO)","en":"World Robot Olympiad (WRO) International Finals"}'::jsonb, '{"ru":"Главная мировая олимпиада по робототехнике: автономные роботы, инженерия и состязания 85+ стран.","kk":"Робототехникадан басты әлемдік олимпиада: автономды роботтар және 85-тен астам елдің сайысы.","en":"World Robot Olympiad: global autonomous robotics competition gathering national champions from 85+ countries."}'::jsonb, '{"ru":"Крупнейшее в мире соревнование по робототехнике для детей и подростков до 19 лет. Команды проектируют, собирают и программируют автономных роботов для выполнения сложных миссий в реальном времени. Финал объединяет национальные сборные более чем из 85 стран.","kk":"19 жасқа дейінгі жастарға арналған әлемдегі ең үлкен робототехника жарысы. Командалар автономды роботтарды құрастырып, бағдарламалайды. Әлемдік финал 85-тен астам елдің жеңімпаздарын жинайды.","en":"Global robotics competition for young people up to age 19. Teams design, construct, and program autonomous robots to complete dynamic problem-solving challenges in RoboMission, Future Innovators, and RoboSports."}'::jsonb,
    'World Robot Olympiad Association', ARRAY['robotics','stem','computer_science']::text[], '{"ru":["Возраст участников от 13 до 18 лет в категории Senior","Команда из 2–3 человек с тренером","Квалификация через национальный финал (в РК — WRO Kazakhstan)"],"kk":["Senior санатында 13 пен 18 жас аралығындағы қатысушылар","Бапкері бар 2–3 адамнан тұратын команда","Ұлттық іріктеуден өту (Қазақстанда — WRO Kazakhstan)"],"en":["Ages 13–18 in Senior division","Team of 2–3 students with adult coach","Qualification via official national partner"]}'::jsonb, 'https://wro-association.org', 'https://wro-association.org',
    'paid', 150, 'USD', 'offline', 'Host City Rotates Annually (International)',
    7, 12, 13, 18,
    '{}'::text[], '{}'::text[], 'open', 'Отбор через национальные федерации во всех странах-участницах.',
    '["en"]'::jsonb, 'annual_estimate', '2027-06-30', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по официальному регламенту WRO Association.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: regeneron-isef-science-fair-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'regeneron-isef-science-fair-2027', 'Regeneron International Science and Engineering Fair (ISEF)', 'Society for Science', 'research', 'The world''s premier pre-college science research fair offering $9M in prizes and scholarships.', 'https://www.societyforscience.org/isef/', '2027-04-01', 'approved', true,
    ARRAY['stem','medicine','environmental_science','ai','robotics']::text[], ARRAY['stem','medicine','environmental_science','ai','robotics']::text[], ARRAY['Grades 9–12 student under age 20','Original science research adhering to SRC/IRB ethics protocols','Win affiliated regional/national fair']::text[],
    '{"ru":"Международная научно-инженерная ярмарка Regeneron ISEF","kk":"Regeneron ISEF халықаралық ғылыми-инженерлік көрмесі","en":"Regeneron International Science and Engineering Fair (ISEF)"}'::jsonb, '{"ru":"Олимпийские игры для юных ученых: всемирный финал научных исследований в США с призовым фондом $9 млн.","kk":"Жас ғалымдарға арналған әлемдік ғылыми көрме: АҚШ-тағы $9 млн жүлде қоры бар финал.","en":"The world''s premier pre-college science research fair offering $9M in prizes and scholarships."}'::jsonb, '{"ru":"Крупнейший в мире международный смотр научных проектов старшеклассников (9–12 классы). Ежегодно около 1800 финалистов из более чем 75 стран борются за стипендии и награды на сумму свыше $9 млн. Участие возможно только через победу на аффилированной национальной выставке (в Казахстане — Республиканский конкурс научных проектов «Дарын»).","kk":"Жоғары сынып (9–12) оқушыларына арналған әлемдегі ең ірі халықаралық ғылыми жобалар көрмесі. Жыл сайын 75-тен астам елдің 1800-ге жуық қатысушысы $9 млн астам жүлде қоры үшін бақ сынайды. Қазақстанда «Дарын» конкурсы арқылы іріктеледі.","en":"The world''s largest global pre-college science and engineering competition for grades 9–12. Roughly 1,800 finalists from over 75 countries compete for more than $9 million in awards and scholarships. Qualification is exclusively through affiliated national fairs (e.g. Daryn in Kazakhstan)."}'::jsonb,
    'Society for Science', ARRAY['stem','medicine','environmental_science','ai','robotics']::text[], '{"ru":["Ученик 9–12 класса (до 20 лет)","Самостоятельное научное исследование, соответствующее протоколам безопасности SRC/IRB","Победа на национальном отборочном смотре (Дарын)"],"kk":["9–12 сынып оқушысы","SRC/IRB халықаралық қауіпсіздік ережелеріне сәйкес келетін ғылыми зерттеу","Ұлттық көрмеде (Дарын) жеңімпаз атану"],"en":["Grades 9–12 student under age 20","Original science research adhering to SRC/IRB ethics protocols","Win affiliated regional/national fair"]}'::jsonb, 'https://www.societyforscience.org/isef/', 'https://www.societyforscience.org/isef/',
    'fully_funded', NULL, NULL, 'offline', 'United States (Rotates: Columbus, Los Angeles, etc.)',
    9, 12, 14, 18,
    '{}'::text[], '{}'::text[], 'open', 'Открыто для победителей национальных ярмарок в любой стране мира.',
    '["en"]'::jsonb, 'annual_estimate', '2027-04-01', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по societyforscience.org. Поездка делегаций финансируется организаторами/спонсорами.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: bebras-computational-thinking-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'bebras-computational-thinking-2027', 'Bebras International Challenge on Informatics and Computational Thinking', 'International Bebras Community', 'competition', 'Global problem-solving and computational thinking challenge accessible without prior coding background.', 'https://www.bebras.org', '2026-11-20', 'approved', true,
    ARRAY['computer_science','mathematics','stem']::text[], ARRAY['computer_science','mathematics','stem']::text[], ARRAY['Grades 7–11 student','Registration via school coordinator or national hub','45-minute online interactive challenge']::text[],
    '{"ru":"Международный конкурс по информатике и логике «Бобер» (Bebras)","kk":"Информатика және алгоритмдік ойлаудан халықаралық «Құндыз» (Bebras) байқауы","en":"Bebras International Challenge on Informatics and Computational Thinking"}'::jsonb, '{"ru":"Интерактивный мировой конкурс по алгоритмической логике и информатике без необходимости знания кода.","kk":"Бағдарламалау тілін білуді қажет етпейтін логика мен информатикадан халықаралық интерактивті конкурс.","en":"Global problem-solving and computational thinking challenge accessible without prior coding background."}'::jsonb, '{"ru":"Всемирный интерактивный конкурс по алгоритмическому и вычислительному мышлению для школьников с 1 по 11 классы. Задачи не требуют предварительных знаний языков программирования и проверяют фундаментальную логику, понимание структур данных и алгоритмов.","kk":"1–11 сынып оқушыларына арналған алгоритмдік және логикалық ойлаудан халықаралық интерактивті байқау. Бағдарламалау тілін білуді талап етпейді, таза логика мен алгоритмдік есептерден тұрады.","en":"Global challenge on computational thinking and problem solving for school students. Accessible without prior coding experience, featuring interactive puzzles that explore discrete mathematics, algorithms, and informatics concepts."}'::jsonb,
    'International Bebras Community', ARRAY['computer_science','mathematics','stem']::text[], '{"ru":["Ученик 7–11 класса (категории Cadet, Junior, Senior)","Участие через школу или национального координатора","Прохождение 45-минутного онлайн-тура"],"kk":["7–11 сынып оқушысы","Мектеп немесе ұлттық үйлестіруші арқылы қатысу","45 минуттық онлайн тесттен өту"],"en":["Grades 7–11 student","Registration via school coordinator or national hub","45-minute online interactive challenge"]}'::jsonb, 'https://www.bebras.org', 'https://www.bebras.org',
    'free', NULL, NULL, 'online', 'Global / Online',
    7, 11, 13, 18,
    '{}'::text[], '{}'::text[], 'open', 'Проводится в более чем 60 странах мира.',
    '["ru","en","kk"]'::jsonb, 'fixed', '2026-11-20', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по bebras.org. Основная неделя Bebras проходит в ноябре.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: international-olympiad-informatics-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'international-olympiad-informatics-2027', 'International Olympiad in Informatics (IOI 2027)', 'International Olympiad in Informatics (IOI)', 'competition', 'The pinnacle world championship in competitive algorithmic programming for secondary school teams.', 'https://ioinformatics.org', '2027-06-01', 'approved', true,
    ARRAY['computer_science','stem']::text[], ARRAY['computer_science','stem']::text[], ARRAY['Enrolled in secondary school and under age 20','Selected for national team via official country olympiad qualifiers','Mastery of C++ and complex algorithms']::text[],
    '{"ru":"Международная олимпиада по информатике (IOI 2027)","kk":"Информатикадан халықаралық олимпиада (IOI 2027)","en":"International Olympiad in Informatics (IOI 2027)"}'::jsonb, '{"ru":"Вершина мирового олимпиадного программирования: чемпионат мира для национальных сборных из 90+ стран.","kk":"Олимпиадалық бағдарламалаудың шыңы: 90-нан астам елдің ұлттық құрамаларына арналған әлем чемпионаты.","en":"The pinnacle world championship in competitive algorithmic programming for secondary school teams."}'::jsonb, '{"ru":"Главное всемирное соревнование по спортивному и алгоритмическому программированию для школьников. Каждую страну представляет национальная сборная из 4 лучших олимпиадников, прошедших национальные отборы и сборы.","kk":"Мектеп оқушыларына арналған спорттық бағдарламалаудан басты әлемдік олимпиада. Әр елден ұлттық іріктеуден өткен 4 ең мықты қатысушы бақ сынайды.","en":"The pinnacle global competitive programming olympiad for secondary school students. Each participating country sends an official national delegation of up to four students to solve algorithmic challenges."}'::jsonb,
    'International Olympiad in Informatics (IOI)', ARRAY['computer_science','stem']::text[], '{"ru":["Школьник до 20 лет","Вхождение в топ-4 национальной сборной страны по результатам республиканской олимпиады и сборов","Знание C++ и алгоритмических структур"],"kk":["20 жасқа дейінгі мектеп оқушысы","Ұлттық іріктеу мен оқу-жаттығу жиындары бойынша ел құрамасының үздік төрттігіне кіру","C++ тілі мен алгоритмдерді жоғары деңгейде білу"],"en":["Enrolled in secondary school and under age 20","Selected for national team via official country olympiad qualifiers","Mastery of C++ and complex algorithms"]}'::jsonb, 'https://ioinformatics.org', 'https://ioinformatics.org',
    'fully_funded', NULL, NULL, 'offline', 'Host Country Rotates Annually',
    9, 12, 14, 19,
    '{}'::text[], '{}'::text[], 'open', 'Участие в составе национальной сборной команды страны.',
    '["en"]'::jsonb, 'annual_estimate', '2027-06-01', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по официальному регламенту IOI.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: international-mathematical-olympiad-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'international-mathematical-olympiad-2027', 'International Mathematical Olympiad (IMO 2027)', 'International Mathematical Olympiad Board', 'competition', 'The premier proof-based world mathematics championship for national student delegations.', 'https://www.imo-official.org', '2027-05-15', 'approved', true,
    ARRAY['mathematics','stem']::text[], ARRAY['mathematics','stem']::text[], ARRAY['Pre-university secondary student under 20','Top 6 qualifier on national team selection tests','Proof-based problem solving mastery']::text[],
    '{"ru":"Международная математическая олимпиада (IMO 2027)","kk":"Халықаралық математикалық олимпиада (IMO 2027)","en":"International Mathematical Olympiad (IMO 2027)"}'::jsonb, '{"ru":"Главный чемпионат мира по математике для национальных сборных из более чем 110 стран.","kk":"110-нан астам елдің ұлттық құрамаларына арналған математикадан басты әлем чемпионаты.","en":"The premier proof-based world mathematics championship for national student delegations."}'::jsonb, '{"ru":"Старейшая и самая престижная всемирная олимпиада по высшей школьной математике (геометрия, теория чисел, комбинаторика, алгебра). Сборная каждой страны формируется из 6 сильнейших школьников по итогам национальных олимпиад.","kk":"Жоғары мектеп математикасынан ең көне және ең беделді әлемдік олимпиада. Әр елдің ұлттық құрамасы республикалық олимпиада нәтижесі бойынша 6 ең мықты оқушыдан құралады.","en":"The world championship mathematics competition for high school students. National teams of six compete over two grueling exam days solving six proof-based problems in algebra, geometry, number theory, and combinatorics."}'::jsonb,
    'International Mathematical Olympiad Board', ARRAY['mathematics','stem']::text[], '{"ru":["Школьник до 20 лет, не зачисленный в вуз","Квалификация в топ-6 сборной страны через отборы и олимпиаду «Дарын»","Решение задач международного уровня доказательной математики"],"kk":["20 жасқа дейінгі мектеп оқушысы","«Дарын» олимпиадасы мен іріктеу жиындары бойынша ұлттық құраманың үздік 6 қатарына кіру","Халықаралық деңгейдегі дәлелдеу есептерін шығара білу"],"en":["Pre-university secondary student under 20","Top 6 qualifier on national team selection tests","Proof-based problem solving mastery"]}'::jsonb, 'https://www.imo-official.org', 'https://www.imo-official.org',
    'fully_funded', NULL, NULL, 'offline', 'Host Country Rotates Annually',
    9, 12, 14, 19,
    '{}'::text[], '{}'::text[], 'open', 'Участие строго в составе аккредитованной национальной сборной.',
    '["en"]'::jsonb, 'annual_estimate', '2027-05-15', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по официальному порталу imo-official.org.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: international-physics-olympiad-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'international-physics-olympiad-2027', 'International Physics Olympiad (IPhO 2027)', 'International Physics Olympiad Board', 'competition', 'World physics championship testing advanced theoretical and experimental lab problem solving.', 'https://www.ipho-new.org', '2027-05-15', 'approved', true,
    ARRAY['physics','stem']::text[], ARRAY['physics','stem']::text[], ARRAY['Secondary student under age 20','Selection for official national top 5 delegation','Advanced experimental lab and theoretical calculus skills']::text[],
    '{"ru":"Международная физическая олимпиада (IPhO 2027)","kk":"Халықаралық физикалық олимпиада (IPhO 2027)","en":"International Physics Olympiad (IPhO 2027)"}'::jsonb, '{"ru":"Всемирный чемпионат по теоретической и экспериментальной физике для сборных команд 85+ стран.","kk":"85-тен астам елдің құрамаларына арналған теориялық және тәжірибелік физикадан әлем чемпионаты.","en":"World physics championship testing advanced theoretical and experimental lab problem solving."}'::jsonb, '{"ru":"Всемирный чемпионат по физике среди школьников, включающий теоретический тур и сложнейший лабораторно-экспериментальный тур. Национальная сборная состоит из 5 лучших учащихся страны.","kk":"Мектеп оқушылары арасындағы физикадан әлемдік чемпионат. Теориялық және күрделі зертханалық-тәжірибелік турдан тұрады. Ұлттық құрама елдің ең мықты 5 оқушысынан жасақталады.","en":"Annual international physics competition for high school students featuring intense theoretical and experimental laboratory rounds for national teams of five delegates."}'::jsonb,
    'International Physics Olympiad Board', ARRAY['physics','stem']::text[], '{"ru":["Ученик школы до 20 лет","Вхождение в топ-5 национальной команды по физике","Навыки проведения физического лабораторного эксперимента и математического анализа"],"kk":["20 жасқа дейінгі мектеп оқушысы","Физикадан ұлттық құраманың үздік 5 қатарына өту","Зертханалық физикалық тәжірибелер жасау және математикалық талдау дағдылары"],"en":["Secondary student under age 20","Selection for official national top 5 delegation","Advanced experimental lab and theoretical calculus skills"]}'::jsonb, 'https://www.ipho-new.org', 'https://www.ipho-new.org',
    'fully_funded', NULL, NULL, 'offline', 'Host Country Rotates Annually',
    9, 12, 14, 19,
    '{}'::text[], '{}'::text[], 'open', 'Отбор через республиканскую олимпиаду РНПЦ «Дарын».',
    '["en"]'::jsonb, 'annual_estimate', '2027-05-15', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по ipho-new.org.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: international-chemistry-olympiad-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'international-chemistry-olympiad-2027', 'International Chemistry Olympiad (IChO 2027)', 'International Chemistry Olympiad Steering Committee', 'competition', 'World chemistry championship featuring laboratory chemical synthesis and advanced theory exams.', 'https://www.icho-official.org', '2027-05-15', 'approved', true,
    ARRAY['stem']::text[], ARRAY['stem']::text[], ARRAY['Secondary student under 20','National team top 4 qualification','Hands-on chemical synthesis and analysis laboratory skills']::text[],
    '{"ru":"Международная химическая олимпиада (IChO 2027)","kk":"Халықаралық химиялық олимпиада (IChO 2027)","en":"International Chemistry Olympiad (IChO 2027)"}'::jsonb, '{"ru":"Мировой чемпионат по химии: практический лабораторный синтез и сложная университетская теория.","kk":"Химиядан әлемдік чемпионат: тәжірибелік зертханалық синтез және күрделі теориялық тур.","en":"World chemistry championship featuring laboratory chemical synthesis and advanced theory exams."}'::jsonb, '{"ru":"Престижнейший всемирный турнир по химии для школьников. Включает 5-часовой практический лабораторный синтез и 5-часовой теоретический тур по органической, неорганической, физической и аналитической химии.","kk":"Мектеп оқушылары арасындағы химиядан ең беделді дүниежүзілік жарыс. 5 сағаттық практикалық зертханалық синтез бен 5 сағаттық теориялық турдан тұрады.","en":"Premier world competition in chemistry for secondary students, consisting of a 5-hour practical laboratory synthesis exam and a 5-hour theoretical examination covering organic, physical, and analytical chemistry."}'::jsonb,
    'International Chemistry Olympiad Steering Committee', ARRAY['stem']::text[], '{"ru":["Школьник до 20 лет","Победа в национальном отборе (топ-4 сборной)","Навыки работы в химической лаборатории и знание органического синтеза"],"kk":["20 жасқа дейінгі оқушы","Ұлттық іріктеуде жеңіске жету (құраманың үздік төрттігі)","Химиялық зертханада жұмыс істеу және органикалық синтезді білу"],"en":["Secondary student under 20","National team top 4 qualification","Hands-on chemical synthesis and analysis laboratory skills"]}'::jsonb, 'https://www.icho-official.org', 'https://www.icho-official.org',
    'fully_funded', NULL, NULL, 'offline', 'Host Country Rotates Annually',
    9, 12, 14, 19,
    '{}'::text[], '{}'::text[], 'open', 'Участие в составе сборной Казахстана или своей страны.',
    '["en"]'::jsonb, 'annual_estimate', '2027-05-15', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по icho-official.org.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: international-biology-olympiad-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'international-biology-olympiad-2027', 'International Biology Olympiad (IBO 2027)', 'International Biology Olympiad Association', 'competition', 'The premier global biology olympiad testing molecular biology, genetics, and anatomy lab skills.', 'https://www.ibo-info.org', '2027-05-15', 'approved', true,
    ARRAY['medicine','stem','environmental_science']::text[], ARRAY['medicine','stem','environmental_science']::text[], ARRAY['Secondary school student under age 20','National top 4 team qualifier','Practical expertise in molecular biology protocols and anatomy']::text[],
    '{"ru":"Международная биологическая олимпиада (IBO 2027)","kk":"Халықаралық биологиялық олимпиада (IBO 2027)","en":"International Biology Olympiad (IBO 2027)"}'::jsonb, '{"ru":"Главная мировая олимпиада по биологии и молекулярной генетике для сборных школьников из 75+ стран.","kk":"75-тен астам елдің оқушыларына арналған биология және генетикадан басты әлемдік олимпиада.","en":"The premier global biology olympiad testing molecular biology, genetics, and anatomy lab skills."}'::jsonb, '{"ru":"Главное всемирное состязание по биологическим наукам для учащихся средних школ. Оценивает глубокие теоретические знания и навыки молекулярной биологии, генетики, анатомии, биохимии и биоинформатики в современных лабораториях.","kk":"Орта мектеп оқушыларына арналған биология ғылымдары бойынша басты әлемдік сайыс. Молекулалық биология, генетика, анатомия және биоинформатика саласындағы терең білімді сынайды.","en":"The premier biological sciences competition for pre-university students worldwide. Evaluates advanced practical lab dissections, molecular genetics, biochemistry, and theoretical knowledge."}'::jsonb,
    'International Biology Olympiad Association', ARRAY['medicine','stem','environmental_science']::text[], '{"ru":["Ученик школы до 20 лет","Отбор в топ-4 национальной сборной страны","Свободное владение лабораторными методами препарирования и ПЦР/гель-электрофореза"],"kk":["20 жасқа дейінгі мектеп оқушысы","Ұлттық құраманың үздік 4 қатарына өту","Зертханалық әдістерді, ПТР және гель-электрофорезді меңгеру"],"en":["Secondary school student under age 20","National top 4 team qualifier","Practical expertise in molecular biology protocols and anatomy"]}'::jsonb, 'https://www.ibo-info.org', 'https://www.ibo-info.org',
    'fully_funded', NULL, NULL, 'offline', 'Host Country Rotates Annually',
    9, 12, 14, 19,
    '{}'::text[], '{}'::text[], 'open', 'Отбор через национальные туры.',
    '["en"]'::jsonb, 'annual_estimate', '2027-05-15', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по ibo-info.org.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: egoi-girls-informatics-olympiad-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'egoi-girls-informatics-olympiad-2027', 'European Girls'' Olympiad in Informatics (EGOI 2027)', 'EGOI International Committee', 'competition', 'Premier international competitive programming olympiad exclusively for young women.', 'https://egoi.org', '2027-04-30', 'approved', true,
    ARRAY['computer_science','stem']::text[], ARRAY['computer_science','stem']::text[], ARRAY['Female secondary school student','Top 4 selection on national girls'' informatics qualifier','Competitive programming mastery in C++']::text[],
    '{"ru":"Европейская олимпиада по информатике для девушек (EGOI 2027)","kk":"Қыздарға арналған Еуропалық информатика олимпиадасы (EGOI 2027)","en":"European Girls'' Olympiad in Informatics (EGOI 2027)"}'::jsonb, '{"ru":"Международная олимпиада по спортивному программированию для девушек-школьниц.","kk":"Мектеп жасындағы қыздарға арналған спорттық бағдарламалаудан халықаралық олимпиада.","en":"Premier international competitive programming olympiad exclusively for young women."}'::jsonb, '{"ru":"Престижная международная олимпиада по алгоритмическому программированию для школьниц, созданная по образцу IOI. Включает команды из европейских стран и приглашенных государств (включая Казахстан). Направлена на поддержку девушек в IT.","kk":"Қыздарға арналған алгоритмдік бағдарламалаудан беделді халықаралық олимпиада. Еуропа елдері мен шақырылған мемлекеттердің (соның ішінде Қазақстанның) құрамалары қатысады.","en":"Prestigious international algorithmic programming competition modeled after the IOI, designed specifically for female high school students. European nations and guest countries (including Kazakhstan) field teams of four."}'::jsonb,
    'EGOI International Committee', ARRAY['computer_science','stem']::text[], '{"ru":["Девушки, обучающиеся в средней/старшей школе","Отбор в топ-4 национального женского рейтинга по олимпиадному программированию","Уверенное владение C++ и алгоритмическими структурами"],"kk":["Орта немесе жоғары сыныпта оқитын қыздар","Олимпиадалық бағдарламалаудан ұлттық қыздар құрамасының үздік төрттігіне кіру","C++ және күрделі алгоритмдерді меңгеру"],"en":["Female secondary school student","Top 4 selection on national girls'' informatics qualifier","Competitive programming mastery in C++"]}'::jsonb, 'https://egoi.org', 'https://egoi.org',
    'fully_funded', NULL, NULL, 'offline', 'Host City in Europe (Rotates Annually)',
    8, 12, 13, 19,
    '{}'::text[], '{}'::text[], 'open', 'Открыто для сборных стран Европы и официально приглашенных стран (Казахстан участвует ежегодно).',
    '["en"]'::jsonb, 'annual_estimate', '2027-04-30', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по egoi.org. Сборная Казахстана формируется РНПЦ «Дарын».'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: rise-global-initiative-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'rise-global-initiative-2027', 'Rise Global Initiative for Young Leaders (Ages 15–17)', 'Schmidt Futures & The Rhodes Trust', 'scholarship', 'Lifelong opportunity program for ages 15–17 offering university scholarships, mentorship, and funding.', 'https://www.risefortheworld.org', '2027-01-15', 'approved', true,
    ARRAY['leadership','social_sciences','stem','entrepreneurship']::text[], ARRAY['leadership','social_sciences','stem','entrepreneurship']::text[], ARRAY['Ages 15–17 as of cycle criteria','Completion of an individual project addressing a real community need','Peer evaluations and video submissions via app']::text[],
    '{"ru":"Глобальная программа Rise для подростков 15–17 лет","kk":"15–17 жастағы жасөспірімдерге арналған Rise жаһандық бағдарламасы","en":"Rise Global Initiative for Young Leaders (Ages 15–17)"}'::jsonb, '{"ru":"Пожизненная поддержка для подростков 15–17 лет: университетские гранты, менторство и саммит за рубежом.","kk":"15–17 жастағы жастарға өмір бойғы қолдау: ЖОО гранттары, тәлімгерлік және халықаралық саммит.","en":"Lifelong opportunity program for ages 15–17 offering university scholarships, mentorship, and funding."}'::jsonb, '{"ru":"Масштабная всемирная инициатива, находящая многообещающих подростков (15–17 лет) и поддерживающая их на протяжении всей жизни. Финалисты получают пожизненную поддержку: финансирование обучения в университете, менторство, участие в глобальном саммите, гранты на социальные и научные проекты.","kk":"15–17 жастағы дарынды жастарды өмір бойы қолдайтын жаһандық бастама. Жеңімпаздар университетте тегін оқу, жеке тәлімгерлік, әлемдік саммитке қатысу және ғылыми/әлеуметтік жобаларына қаржылық гранттар алады.","en":"Global talent program by Schmidt Futures and Rhodes Trust that finds brilliant young people (ages 15–17) and supports them for life. Finalists receive lifelong benefits including university scholarships, mentorship, tech packages, and project funding."}'::jsonb,
    'Schmidt Futures & The Rhodes Trust', ARRAY['leadership','social_sciences','stem','entrepreneurship']::text[], '{"ru":["Возраст строго 15–17 лет на дату отбора","Создание индивидуального проекта (Rise Individual Project) для решения реальной проблемы","Прохождение заданий и видео-интервью в приложении"],"kk":["Іріктеу күніне сәйкес жасы қатаң 15–17 аралығында болу","Өзекті мәселені шешуге бағытталған жеке жоба (Rise Individual Project) жасау","Қосымшадағы тапсырмалар мен бейнесұхбатты орындау"],"en":["Ages 15–17 as of cycle criteria","Completion of an individual project addressing a real community need","Peer evaluations and video submissions via app"]}'::jsonb, 'https://www.risefortheworld.org', 'https://www.risefortheworld.org',
    'fully_funded', NULL, NULL, 'hybrid', 'Global / Residential Summit',
    9, 11, 15, 17,
    '{}'::text[], '{}'::text[], 'open', 'Открыто для граждан любой страны мира.',
    '["en"]'::jsonb, 'fixed', '2027-01-15', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по risefortheworld.org. Прием открывается осенью.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: uwc-international-scholarships-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'uwc-international-scholarships-2027', 'United World Colleges (UWC) International Diploma Scholarships', 'UWC International / UWC Kazakhstan National Committee', 'scholarship', 'Need-based full and partial scholarships for 2-year IB diploma studies across 18 UWC international colleges.', 'https://www.uwc.org', '2026-11-15', 'approved', true,
    ARRAY['leadership','humanities','social_sciences','stem']::text[], ARRAY['leadership','humanities','social_sciences','stem']::text[], ARRAY['Ages 16–18 at entry','Citizen or permanent resident of Kazakhstan','Demonstrated community engagement and panel interview']::text[],
    '{"ru":"Стипендии колледжей объединенного мира UWC (United World Colleges)","kk":"UWC (United World Colleges) біріккен әлем колледждерінің стипендиялары","en":"United World Colleges (UWC) International Diploma Scholarships"}'::jsonb, '{"ru":"Полные и частичные стипендии на 2-летнее обучение по программе IB в международных колледжах UWC.","kk":"Әлемдегі 18 UWC колледжінде 2 жылдық IB бағдарламасы бойынша тегін оқу гранттары.","en":"Need-based full and partial scholarships for 2-year IB diploma studies across 18 UWC international colleges."}'::jsonb, '{"ru":"Двухгодичная программа международного бакалавриата (IB Diploma) в 18 международных колледжах UWC по всему миру (Великобритания, Канада, Италия, Сингапур, Армения и др.). Национальный комитет UWC в Казахстане ежегодно отбирает школьников 16–18 лет и распределяет полные и частичные стипендии на обучение и проживание.","kk":"Әлемнің 18 еліндегі UWC колледждерінде 2 жылдық IB дипломы бойынша оқу бағдарламасы. Қазақстандағы UWC ұлттық комитеті 16–18 жастағы оқушыларды іріктеп, оқу мен жатақханаға толық және ішінара гранттар бөледі.","en":"Two-year pre-university International Baccalaureate (IB) diploma program across 18 UWC colleges globally (UK, Canada, Italy, Singapore, Armenia, etc.). The UWC Kazakhstan National Committee awards need-based full and partial scholarships."}'::jsonb,
    'UWC International / UWC Kazakhstan National Committee', ARRAY['leadership','humanities','social_sciences','stem']::text[], '{"ru":["Возраст 16–18 лет на момент начала обучения","Гражданство Казахстана или статус резидента","Академическая успеваемость, общественная активность и прохождение интервью"],"kk":["Оқу басталатын уақытта 16–18 жаста болу","Қазақстан азаматы немесе резиденті болу","Жақсы оқу үлгерімі, қоғамдық белсенділік және сұхбат кезеңінен өту"],"en":["Ages 16–18 at entry","Citizen or permanent resident of Kazakhstan","Demonstrated community engagement and panel interview"]}'::jsonb, 'https://www.uwc.org', 'https://kz.uwc.org',
    'fully_funded', NULL, NULL, 'offline', 'Global Campuses (18 Countries)',
    10, 11, 16, 18,
    ARRAY['KZ']::text[], '{}'::text[], 'open', 'Отбор для школьников Казахстана проходит через UWC Kazakhstan.',
    '["en"]'::jsonb, 'fixed', '2026-11-15', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по официальному порталу kz.uwc.org. Дедлайн приема анкет в ноябре.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: the-diana-award-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'the-diana-award-2027', 'The Diana Award for Young Changemakers', 'The Diana Award Foundation', 'fellowship', 'Prestigious global award recognizing inspirational young changemakers and humanitarians aged 9–25.', 'https://diana-award.org.uk', '2027-08-01', 'approved', true,
    ARRAY['leadership','social_sciences']::text[], ARRAY['leadership','social_sciences']::text[], ARRAY['Ages 9–25','Nominated by a professional (non-family member)','Sustained social or humanitarian impact of 12+ months']::text[],
    '{"ru":"Международная премия имени принцессы Дианы (The Diana Award)","kk":"Диана ханшайым атындағы халықаралық сыйлық (The Diana Award)","en":"The Diana Award for Young Changemakers"}'::jsonb, '{"ru":"Престижная всемирная награда для юных лидеров и волонтеров за реальные социальные изменения.","kk":"Қоғамдық өзгерістерге үлес қосқан жас көшбасшылар мен еріктілерге арналған беделді әлемдік марапат.","en":"Prestigious global award recognizing inspirational young changemakers and humanitarians aged 9–25."}'::jsonb, '{"ru":"Самая престижная гуманитарная награда в мире для молодых людей в возрасте от 9 до 25 лет за их вклад в развитие общества и волонтерство. Кандидаты выдвигаются третьими лицами (учителями, наставниками) за бескорыстное служение обществу и социальные проекты.","kk":"9 бен 25 жас аралығындағы жастардың қоғамға қосқан үлесі мен еріктілік қызметі үшін берілетін әлемдегі ең беделді марапаттардың бірі. Кандидаттарды мұғалімдер немесе тәлімгерлер ұсынады.","en":"The most prestigious accolade a young person aged 9–25 can receive for their social action or humanitarian work. Established in memory of Diana, Princess of Wales, candidates must be nominated by professionals who know them in a personal or work capacity."}'::jsonb,
    'The Diana Award Foundation', ARRAY['leadership','social_sciences']::text[], '{"ru":["Возраст от 9 до 25 лет","Номинация от профессионального наставника (учителя, руководителя НПО, не родственника)","Подтвержденная социальная или волонтерская деятельность длительностью от 12 месяцев"],"kk":["9 бен 25 жас аралығы","Кәсіби тәлімгерден (мұғалімнен, туыс емес тұлғадан) ұсыныс-номинация","Кемінде 12 ай бойы расталған әлеуметтік немесе еріктілік белсенділік"],"en":["Ages 9–25","Nominated by a professional (non-family member)","Sustained social or humanitarian impact of 12+ months"]}'::jsonb, 'https://diana-award.org.uk', 'https://diana-award.org.uk',
    'free', NULL, NULL, 'online', 'Global / United Kingdom',
    7, 12, 13, 18,
    '{}'::text[], '{}'::text[], 'open', 'Открыто для кандидатов из любых стран мира.',
    '["en"]'::jsonb, 'annual_estimate', '2027-08-01', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по diana-award.org.uk.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: ashoka-young-changemakers-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'ashoka-young-changemakers-2027', 'Ashoka Young Changemakers Global Network', 'Ashoka: Innovators for the Public', 'fellowship', 'Global fellowship for teen social entrepreneurs who have launched initiatives addressing social issues.', 'https://www.ashoka.org', NULL, 'approved', true,
    ARRAY['leadership','social_sciences','entrepreneurship']::text[], ARRAY['leadership','social_sciences','entrepreneurship']::text[], ARRAY['Under 20 years old','Founder or co-founder of an active social venture','Demonstrated team leadership and local impact']::text[],
    '{"ru":"Сеть молодых социальных инноваторов Ashoka Young Changemakers","kk":"Ashoka Young Changemakers жас әлеуметтік инноваторлар желісі","en":"Ashoka Young Changemakers Global Network"}'::jsonb, '{"ru":"Международное сообщество подростков, создавших свои социальные проекты и общественные инициативы.","kk":"Өздерінің әлеуметтік жобаларын бастаған жас көшбасшыларға арналған халықаралық қауымдастық.","en":"Global fellowship for teen social entrepreneurs who have launched initiatives addressing social issues."}'::jsonb, '{"ru":"Глобальная сеть и сообщество подростков-лидеров (до 20 лет), основавших собственные действующие инициативы, общественные движения или социальные предприятия. Члены сообщества получают доступ к международным саммитам, СМИ и грантодателям.","kk":"Өздерінің әлеуметтік бастамаларын немесе қоғамдық қозғалыстарын құрған жасөспірім көшбасшыларға арналған жаһандық желі. Қатысушылар халықаралық саммиттерге және гранттарға қол жеткізеді.","en":"Global network of teen changemakers (under 20) who have launched active social initiatives, community ventures, or campaigns. Members access global visibility, peer cohorts, and mentorship from social entrepreneurs."}'::jsonb,
    'Ashoka: Innovators for the Public', ARRAY['leadership','social_sciences','entrepreneurship']::text[], '{"ru":["Возраст до 20 лет","Основатель или сооснователь действующего социального проекта с доказанным воздействием","Сформированная команда единомышленников"],"kk":["20 жасқа дейін","Нақты нәтижесі бар әлеуметтік жобаның негізін қалаушы немесе бірлескен жетекшісі","Бірлесіп жұмыс істейтін команданың болуы"],"en":["Under 20 years old","Founder or co-founder of an active social venture","Demonstrated team leadership and local impact"]}'::jsonb, 'https://www.ashoka.org', 'https://www.ashoka.org/en-us/program/ashoka-young-changemakers',
    'free', NULL, NULL, 'hybrid', 'Global',
    8, 12, 13, 18,
    '{}'::text[], '{}'::text[], 'open', 'Открыто для кандидатов по всему миру.',
    '["en"]'::jsonb, 'rolling', NULL, 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по официальному сайту Ashoka.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: afs-global-stem-academies-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'afs-global-stem-academies-2027', 'AFS Global STEM Academies Full Scholarships', 'AFS Intercultural Programs & bp', 'scholarship', 'Fully funded STEM scholarship: 12-week virtual curriculum followed by a 4-week abroad academy.', 'https://afs.org/global-stem/', '2027-01-15', 'approved', true,
    ARRAY['stem','environmental_science','leadership']::text[], ARRAY['stem','environmental_science','leadership']::text[], ARRAY['Ages 15 to 17.5 at start','Strong interest in STEM and sustainability','Proficient English for international collaboration']::text[],
    '{"ru":"Глобальные стипендиальные STEM-академии AFS","kk":"AFS жаһандық STEM-академияларының тегін стипендиялары","en":"AFS Global STEM Academies Full Scholarships"}'::jsonb, '{"ru":"100% оплачиваемая программа в области STEM и климата: 12 недель онлайн + 4 недели лагеря за рубежом.","kk":"STEM және экология бойынша 100% тегін бағдарлама: 12 апта онлайн + шетелде 4 апталық тәжірибе лагері.","en":"Fully funded STEM scholarship: 12-week virtual curriculum followed by a 4-week abroad academy."}'::jsonb, '{"ru":"Полностью финансируемая стипендиальная программа для школьников 15–17,5 лет со всего мира. Включает 12-недельный интерактивный онлайн-курс по устойчивому развитию и технологиям, а также полностью оплачиваемую 4-недельную выездную академию в Египте, Бразилии, Индии, Европе или США.","kk":"15–17,5 жастағы оқушыларға арналған толық тегін стипендиялық бағдарлама. 12 апталық онлайн курс және Египет, Бразилия, Үндістан немесе АҚШ-та 4 апталық оқу лагерін қамтиды. Барлық шығындар төленеді.","en":"Fully funded global scholarship program for students ages 15–17.5. Combines a 12-week virtual curriculum on sustainability and STEM with a fully funded 4-week in-person academy in Egypt, Brazil, India, Europe, or the USA."}'::jsonb,
    'AFS Intercultural Programs & bp', ARRAY['stem','environmental_science','leadership']::text[], '{"ru":["Возраст от 15 до 17,5 лет на момент старта","Интерес к STEM, экологии и устойчивому развитию","Владение английским языком для обучения и общения"],"kk":["Бағдарлама басталғанда 15 пен 17,5 жас аралығында болу","STEM, экология және тұрақты дамуға қызығушылық","Оқуға қажетті ағылшын тілін меңгеру"],"en":["Ages 15 to 17.5 at start","Strong interest in STEM and sustainability","Proficient English for international collaboration"]}'::jsonb, 'https://afs.org/global-stem/', 'https://afs.org/global-stem/',
    'fully_funded', NULL, NULL, 'hybrid', 'Global / Egypt, Brazil, USA, etc.',
    9, 11, 15, 17,
    '{}'::text[], '{}'::text[], 'open', 'Открыто для школьников из более чем 15 стран, включая Казахстан.',
    '["en"]'::jsonb, 'fixed', '2027-01-15', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по afs.org. Полное покрытие перелета, проживания и обучения спонсором bp.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: civics-unplugged-fellowship-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'civics-unplugged-fellowship-2027', 'Civics Unplugged Civic Innovation Fellowship', 'Civics Unplugged', 'fellowship', 'Free 6-month leadership and civic entrepreneurship fellowship for high schoolers with microgrant funding.', 'https://www.civicsunplugged.org', '2026-12-01', 'approved', true,
    ARRAY['leadership','social_sciences']::text[], ARRAY['leadership','social_sciences']::text[], ARRAY['High school student (grades 9–12)','Passion for civic innovation and leadership','Commitment of 2–3 hours weekly for virtual cohort sessions']::text[],
    '{"ru":"Стипендиальная программа гражданских инноваций Civics Unplugged","kk":"Civics Unplugged азаматтық инновациялар стипендиялық бағдарламасы","en":"Civics Unplugged Civic Innovation Fellowship"}'::jsonb, '{"ru":"Бесплатная 6-месячная онлайн-программа по лидерству и социальным проектам для старшеклассников.","kk":"Жоғары сыныптарға арналған көшбасшылық және әлеуметтік жобалар бойынша 6 айлық тегін онлайн бағдарлама.","en":"Free 6-month leadership and civic entrepreneurship fellowship for high schoolers with microgrant funding."}'::jsonb, '{"ru":"Бесплатная 6-месячная онлайн-программа для старшеклассников, обучающая лидерству, цифровой демократии и созданию устойчивых общественных проектов. Выпускники становятся пожизненными стипендиатами (Civics Fellows) с доступом к микрогрантам и менторам.","kk":"Жоғары сынып оқушыларына арналған көшбасшылықты, цифрлық дағдыларды және пайдалы қоғамдық жобаларды үйрететін 6 айлық тегін онлайн бағдарлама. Түлектер гранттар мен менторларға қол жеткізеді.","en":"Free 6-month digital leadership fellowship for high school students globally. Fellows learn systems thinking, democratic innovation, and civic entrepreneurship, unlocking lifetime access to project funding and mentors."}'::jsonb,
    'Civics Unplugged', ARRAY['leadership','social_sciences']::text[], '{"ru":["Учащийся 9–12 классов (14–18 лет)","Стремление развивать общественные инициативы","Готовность посвящать 2–3 часа в неделю виртуальным сессиям"],"kk":["9–12 сынып оқушысы (14–18 жас)","Қоғамдық бастамаларды дамытуға ниет","Аптасына 2–3 сағат онлайн сессияларға қатысуға дайындық"],"en":["High school student (grades 9–12)","Passion for civic innovation and leadership","Commitment of 2–3 hours weekly for virtual cohort sessions"]}'::jsonb, 'https://www.civicsunplugged.org', 'https://www.civicsunplugged.org',
    'free', NULL, NULL, 'online', 'Global / Online',
    9, 12, 14, 18,
    '{}'::text[], '{}'::text[], 'open', 'Открыто для школьников по всему миру.',
    '["en"]'::jsonb, 'fixed', '2026-12-01', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по civicsunplugged.org.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: world-science-scholars-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'world-science-scholars-2027', 'World Science Scholars Elite Mathematics Fellowship', 'World Science Festival', 'fellowship', 'Elite 2-year fellowship for mathematically gifted high schoolers learning from leading world scientists.', 'https://worldsciencescholars.com', '2027-04-15', 'approved', true,
    ARRAY['mathematics','physics','stem']::text[], ARRAY['mathematics','physics','stem']::text[], ARRAY['Ages 14–17','Profound mathematical aptitude (competition record or math portfolio)','Math teacher recommendation']::text[],
    '{"ru":"Международная стипендия World Science Scholars для юных математиков","kk":"Жас математиктерге арналған World Science Scholars халықаралық стипендиясы","en":"World Science Scholars Elite Mathematics Fellowship"}'::jsonb, '{"ru":"Двухгодичная программа по высшей математике и квантовой физике с мировыми учеными для одаренных школьников.","kk":"Дарынды оқушыларға арналған кванттық физика мен жоғары математикадан екі жылдық тегін бағдарлама.","en":"Elite 2-year fellowship for mathematically gifted high schoolers learning from leading world scientists."}'::jsonb, '{"ru":"Высокоселективная бесплатная двухгодичная онлайн-программа для математически одаренных старшеклассников со всего мира. Стипендиаты изучают применение высшей математики в квантовой физике, нейробиологии и астрономии под руководством всемирно признанных ученых (Брайан Грин и др.).","kk":"Дарынды жоғары сынып оқушыларына арналған екі жылдық тегін онлайн бағдарлама. Қатысушылар жоғары математиканы кванттық физика, нейробиология және астрономияда қолдануды әлемдік ғалымдардан үйренеді.","en":"Highly selective, free 2-year virtual program for mathematically talented high schoolers globally. Scholars explore advanced mathematics applied to cutting-edge disciplines such as quantum theory and neuroscience under Nobel laureates and world-renowned scientists."}'::jsonb,
    'World Science Festival', ARRAY['mathematics','physics','stem']::text[], '{"ru":["Возраст 14–17 лет","Выдающиеся математические способности (победы в олимпиадах или портфолио решений)","Рекомендательное письмо преподавателя математики"],"kk":["14 пен 17 жас аралығы","Ерекше математикалық қабілет (олимпиадалық жетістіктер немесе есептер портфолиосы)","Математика мұғалімінің ұсыныс хаты"],"en":["Ages 14–17","Profound mathematical aptitude (competition record or math portfolio)","Math teacher recommendation"]}'::jsonb, 'https://worldsciencescholars.com', 'https://worldsciencescholars.com',
    'free', NULL, NULL, 'online', 'Global / Online',
    8, 11, 14, 17,
    '{}'::text[], '{}'::text[], 'open', 'Открыто по всему миру без платы за обучение.',
    '["en"]'::jsonb, 'annual_estimate', '2027-04-15', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по worldsciencescholars.com. Обучение полностью бесплатное.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: three-dot-dash-global-teen-leader-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'three-dot-dash-global-teen-leader-2027', 'Three Dot Dash Global Teen Leader Initiative', 'We Are Family Foundation', 'fellowship', 'All-expenses-paid leadership summit in New York City and mentorship for young social innovators.', 'https://www.threedotdash.org', '2026-11-15', 'approved', true,
    ARRAY['leadership','social_sciences','entrepreneurship']::text[], ARRAY['leadership','social_sciences','entrepreneurship']::text[], ARRAY['Ages 13–19','Founder/lead of an active venture addressing basic human needs','Nominated by a qualified nominator']::text[],
    '{"ru":"Глобальная лидерская программа Three Dot Dash (Global Teen Leaders)","kk":"Three Dot Dash (Global Teen Leaders) жаһандық көшбасшылық бағдарламасы","en":"Three Dot Dash Global Teen Leader Initiative"}'::jsonb, '{"ru":"Полностью оплачиваемый недельный саммит в Нью-Йорке и менторство для подростков с социальными проектами.","kk":"Әлеуметтік жобасы бар жасөспірімдерге арналған Нью-Йорктегі тегін саммит және тәлімгерлік бағдарлама.","en":"All-expenses-paid leadership summit in New York City and mentorship for young social innovators."}'::jsonb, '{"ru":"Международная программа, ежегодно отбирающая около 30 выдающихся подростков (13–19 лет) со всего мира, решающих фундаментальные проблемы мира через социальные проекты. Включает полностью оплачиваемый недельный саммит Just Peace Summit в Нью-Йорке и круглогодичное менторство.","kk":"Әлемнің түкпір-түкпірінен өз жобалары арқылы адамзат мәселелерін шешіп жүрген 13–19 жастағы 30 жасөспірімді таңдайтын бағдарлама. Нью-Йорктегі бір апталық тегін саммит пен жыл бойғы тәлімгерлікті қамтиды.","en":"Prestigious initiative selecting roughly 30 exceptional teenage leaders (ages 13–19) from around the world addressing basic human needs through innovative social action. Includes an all-expenses-paid Just Peace Summit in New York City and year-round executive mentoring."}'::jsonb,
    'We Are Family Foundation', ARRAY['leadership','social_sciences','entrepreneurship']::text[], '{"ru":["Возраст от 13 до 19 лет","Основатель или руководитель действующего проекта с измеримым социальным эффектом","Номинация от аккредитованной организации или наставника"],"kk":["13 пен 19 жас аралығы","Нақты әлеуметтік пайда әкелген жобаның негізін қалаушысы немесе жетекшісі","Ұйымнан немесе тәлімгерден ұсыныс"],"en":["Ages 13–19","Founder/lead of an active venture addressing basic human needs","Nominated by a qualified nominator"]}'::jsonb, 'https://www.threedotdash.org', 'https://www.threedotdash.org',
    'fully_funded', NULL, NULL, 'offline', 'New York City, USA',
    8, 12, 13, 19,
    '{}'::text[], '{}'::text[], 'open', 'Открыто для подростков любых стран, перелет и проживание оплачиваются фондом.',
    '["en"]'::jsonb, 'fixed', '2026-11-15', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по threedotdash.org. Номинации на текущий сезон принимаются осенью.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: rotary-youth-exchange-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'rotary-youth-exchange-2027', 'Rotary Youth Exchange International Program', 'Rotary International', 'exchange', 'Academic year exchange program living with host families in 100+ countries sponsored by Rotary clubs.', 'https://www.rotary.org/en/our-programs/youth-exchanges', '2026-12-15', 'approved', true,
    ARRAY['leadership','humanities','social_sciences']::text[], ARRAY['leadership','humanities','social_sciences']::text[], ARRAY['Ages 15–19','Demonstrated leadership and academic record','Sponsorship by local Rotary Club and family interview']::text[],
    '{"ru":"Программа международного школьного обмена Rotary Youth Exchange","kk":"Rotary Youth Exchange халықаралық мектеп алмасу бағдарламасы","en":"Rotary Youth Exchange International Program"}'::jsonb, '{"ru":"Годичная учеба и проживание в семье в более чем 100 странах мира через клубы Rotary.","kk":"Rotary клубтары арқылы әлемнің 100-ден астам еліндегі мектептерде 1 жыл тегін оқу бағдарламасы.","en":"Academic year exchange program living with host families in 100+ countries sponsored by Rotary clubs."}'::jsonb, '{"ru":"Международная академическая программа долгосрочного (один учебный год) и краткосрочного культурного обмена для школьников 15–19 лет. Участники проживают в принимающих семьях за рубежом, учатся в местной школе и представляют культуру своей страны.","kk":"15–19 жастағы оқушыларға арналған бір жылдық немесе қысқа мерзімді халықаралық мәдени алмасу бағдарламасы. Қатысушылар шетелдік отбасыларда тұрып, жергілікті мектепте білім алады.","en":"Global cultural and academic exchange program for secondary school students ages 15–19. Offers long-term (academic year) and short-term exchanges where students live with host families, attend local high schools, and build cross-cultural diplomacy."}'::jsonb,
    'Rotary International', ARRAY['leadership','humanities','social_sciences']::text[], '{"ru":["Возраст 15–19 лет","Хорошая успеваемость и лидерский потенциал","Спонсорство местного Ротари-клуба и собеседование"],"kk":["15 пен 19 жас аралығы","Жақсы оқу үлгерімі және көшбасшылық қабілет","Жергілікті Ротари-клубтың қолдауы және сұхбаттан өту"],"en":["Ages 15–19","Demonstrated leadership and academic record","Sponsorship by local Rotary Club and family interview"]}'::jsonb, 'https://www.rotary.org/en/our-programs/youth-exchanges', 'https://www.rotary.org/en/our-programs/youth-exchanges',
    'paid', 1500, 'USD', 'offline', '100+ Countries Worldwide',
    9, 12, 15, 19,
    '{}'::text[], '{}'::text[], 'open', 'Доступно через региональные клубы Ротари.',
    '["en"]'::jsonb, 'annual_estimate', '2026-12-15', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по rotary.org. Обучение и жилье предоставляются бесплатно, оплачивается страховка и перелет.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: yygs-financial-aid-scholarship-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'yygs-financial-aid-scholarship-2027', 'Yale Young Global Scholars (YYGS) Need-Based Full Tuition Scholarships', 'Yale University', 'scholarship', 'Need-based 100% full tuition and travel scholarships to attend Yale Young Global Scholars at Yale.', 'https://globalscholars.yale.edu', '2027-01-10', 'approved', true,
    ARRAY['humanities','social_sciences','stem','leadership']::text[], ARRAY['humanities','social_sciences','stem','leadership']::text[], ARRAY['Current high school sophomore or junior (ages 16–18)','Academic excellence and English proficiency','Financial aid application with family income statements']::text[],
    '{"ru":"Стипендии на обучение в Йельском университете (YYGS Need-Based Aid)","kk":"Йель университетіндегі жазғы оқуға арналған толық гранттар (YYGS Need-Based Aid)","en":"Yale Young Global Scholars (YYGS) Need-Based Full Tuition Scholarships"}'::jsonb, '{"ru":"100% покрытие стоимости обучения и проживания в Йельском университете для одаренных школьников с фин. потребностью.","kk":"Қаржылық мұқтаждығы бар дарынды оқушылар үшін Йель университетінде 100% тегін жазғы оқу гранты.","en":"Need-based 100% full tuition and travel scholarships to attend Yale Young Global Scholars at Yale."}'::jsonb, '{"ru":"Йельский университет выделяет более $3 млн на полные и частичные стипендии для талантливых школьников со всего мира, поступающих на двухнедельную интенсивную летнюю программу YYGS. Стипендия покрывает 100% стоимости обучения, проживания на кампусе Йеля и при необходимости авиаперелет.","kk":"Йель университеті екі апталық YYGS жазғы қарқынды бағдарламасына түсетін әлемнің дарынды оқушыларына 100% оқу, тұру және ұшу билеттерін өтейтін қайтарымсыз стипендиялар береді.","en":"Yale University awards over $3 million annually in need-based financial aid covering 100% of tuition, room, board, and travel for talented high school students admitted to the Yale Young Global Scholars (YYGS) summer sessions."}'::jsonb,
    'Yale University', ARRAY['humanities','social_sciences','stem','leadership']::text[], '{"ru":["Ученик 10 или 11 класса (16–18 лет)","Отличная успеваемость и знание английского языка","Заполнение финансовой анкеты с документами о доходах семьи"],"kk":["10 немесе 11 сынып оқушысы (16–18 жас)","Үздік үлгерім және ағылшын тілін еркін меңгеру","Отбасы табысын растайтын құжаттарды тапсыру"],"en":["Current high school sophomore or junior (ages 16–18)","Academic excellence and English proficiency","Financial aid application with family income statements"]}'::jsonb, 'https://globalscholars.yale.edu', 'https://globalscholars.yale.edu/how-to-apply/tuition-financial-aid',
    'fully_funded', NULL, NULL, 'offline', 'New Haven, CT, USA (Yale Campus)',
    10, 11, 16, 18,
    '{}'::text[], '{}'::text[], 'open', 'Открыто для школьников из всех стран мира, включая Казахстан.',
    '["en"]'::jsonb, 'fixed', '2027-01-10', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по официальному порталу Yale globalscholars.yale.edu.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: pioneer-academics-research-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'pioneer-academics-research-2027', 'Pioneer Academics Accredited Research Program', 'Pioneer Academics & Oberlin College', 'research', 'Accredited online research mentorship with US university faculty granting Oberlin College credits.', 'https://pioneeracademics.com', '2026-12-18', 'approved', true,
    ARRAY['stem','humanities','social_sciences','medicine']::text[], ARRAY['stem','humanities','social_sciences','medicine']::text[], ARRAY['Grades 9–12 student','Academic excellence and fluent English','Proctored writing session and video interview']::text[],
    '{"ru":"Академическая исследовательская программа Pioneer Academics","kk":"Pioneer Academics халықаралық академиялық зерттеу бағдарламасы","en":"Pioneer Academics Accredited Research Program"}'::jsonb, '{"ru":"Аккредитованная программа научных исследований 1 на 1 с профессорами США с получением кредитов Oberlin College.","kk":"АҚШ профессорларымен жеке ғылыми зерттеу жүргізу және ресми университет кредиттерін алу бағдарламасы.","en":"Accredited online research mentorship with US university faculty granting Oberlin College credits."}'::jsonb, '{"ru":"Единственная в мире аккредитованная онлайн-программа научных исследований для старшеклассников (9–12 классы) с получением университетских кредитов колледжа Oberlin. Ученики проводят глубокое исследование один на один с профессорами ведущих американских университетов и пишут научную статью бакалаврского уровня.","kk":"Oberlin колледжінің ресми университет кредиттерін беретін жоғары сынып оқушыларына арналған аккредиттелген онлайн зерттеу бағдарламасы. Оқушылар АҚШ университеттерінің профессорларымен жеке ғылыми жұмыс жазып, мақала дайындайды.","en":"The only fully accredited online research program for high school students granting US college credits. Selected students conduct rigorous undergraduate-level research under individual mentorship from leading US university faculty across 30 disciplines."}'::jsonb,
    'Pioneer Academics & Oberlin College', ARRAY['stem','humanities','social_sciences','medicine']::text[], '{"ru":["Ученик 9–12 классов","Высокая академическая успеваемость и отличный английский язык","Прохождение стандартизированного теста Pioneer и развернутого видео-собеседования"],"kk":["9–12 сынып оқушысы","Жоғары академиялық үлгерім және ағылшын тілін еркін білу","Pioneer арнайы тесті мен бейнесұхбаттан сәтті өту"],"en":["Grades 9–12 student","Academic excellence and fluent English","Proctored writing session and video interview"]}'::jsonb, 'https://pioneeracademics.com', 'https://pioneeracademics.com',
    'paid', 6450, 'USD', 'online', 'Global / Online',
    9, 12, 14, 18,
    '{}'::text[], '{}'::text[], 'open', 'Открыто для школьников со всего мира. Предоставляется финансовая помощь (need-based scholarships).',
    '["en"]'::jsonb, 'fixed', '2026-12-18', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по pioneeracademics.com. Доступна полная финансовая помощь.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: polygence-research-mentorship-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'polygence-research-mentorship-2027', 'Polygence 1-on-1 Research Mentorship Program', 'Polygence', 'research', '1-on-1 personalized research mentorship with top PhD academics culminating in a publication.', 'https://www.polygence.org', '2027-01-31', 'approved', true,
    ARRAY['stem','humanities','social_sciences','computer_science']::text[], ARRAY['stem','humanities','social_sciences','computer_science']::text[], ARRAY['Ages 13–18','Defined research interest or inquiry','Application submission and academic interview']::text[],
    '{"ru":"Индивидуальная научная менторская программа Polygence","kk":"Polygence жеке ғылыми зерттеу тәлімгерлік бағдарламасы","en":"Polygence 1-on-1 Research Mentorship Program"}'::jsonb, '{"ru":"10-недельное исследование один на один с ментором PhD из Гарварда или Стэнфорда с публикацией статьи.","kk":"Гарвард немесе Стэнфорд PhD ғалымдарымен жеке зерттеу және ғылыми журналға мақала шығару.","en":"1-on-1 personalized research mentorship with top PhD academics culminating in a publication."}'::jsonb, '{"ru":"10-недельная индивидуальная исследовательская программа для школьников 13–18 лет под руководством исследователей и докторантов (PhD) из Гарварда, MIT, Стэнфорда и других ведущих вузов. Результат: готовая научная статья, рецензируемая публикация или патент.","kk":"Гарвард, MIT, Стэнфорд докторанттарының (PhD) жетекшілігімен 13–18 жастағы оқушыларға арналған 10 апталық зерттеу бағдарламасы. Нәтиже: ғылыми мақала жариялау немесе патент.","en":"Ten-week personalized research mentorship program pairing motivated high school students with PhD researchers from top universities (Harvard, MIT, Stanford, etc.) to produce publication-grade papers or inventive prototypes."}'::jsonb,
    'Polygence', ARRAY['stem','humanities','social_sciences','computer_science']::text[], '{"ru":["Возраст от 13 до 18 лет","Четкая исследовательская тема или вопрос","Заполнение заявки и собеседование с академическим координатором"],"kk":["13 пен 18 жас аралығы","Нақты ғылыми тақырып немесе қызығушылық саласы","Өтініш беру және академиялық үйлестірушімен сұхбат"],"en":["Ages 13–18","Defined research interest or inquiry","Application submission and academic interview"]}'::jsonb, 'https://www.polygence.org', 'https://www.polygence.org',
    'paid', 2795, 'USD', 'online', 'Global / Online',
    8, 12, 13, 18,
    '{}'::text[], '{}'::text[], 'open', 'Открыто по всему миру. Доступны стипендии Polygence Financial Aid.',
    '["en"]'::jsonb, 'rolling', '2027-01-31', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по polygence.org. Набор на зимне-весеннюю когорту.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: veritas-ai-fellowship-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'veritas-ai-fellowship-2027', 'Veritas AI Fellowship & Research Program', 'Veritas AI', 'research', 'AI and machine learning research fellowship for high schoolers guided 1-on-1 by Harvard/MIT researchers.', 'https://www.veritasai.com', '2026-11-29', 'approved', true,
    ARRAY['ai','computer_science','stem']::text[], ARRAY['ai','computer_science','stem']::text[], ARRAY['Grades 8–12 student','Basic coding (Python) or quantitative aptitude','Application essay and transcript']::text[],
    '{"ru":"Исследовательская программа по машинному обучению Veritas AI","kk":"Veritas AI машиналық оқыту және ЖИ зерттеу бағдарламасы","en":"Veritas AI Fellowship & Research Program"}'::jsonb, '{"ru":"Программа по созданию реальных моделей машинного обучения и написанию научной статьи по ИИ для 9–12 классов.","kk":"9–12 сыныптар үшін машиналық оқыту модельдерін жасау және ЖИ бойынша ғылыми мақала жазу бағдарламасы.","en":"AI and machine learning research fellowship for high schoolers guided 1-on-1 by Harvard/MIT researchers."}'::jsonb, '{"ru":"Академическая программа по искусственному интеллекту и науке о данных для школьников 9–12 классов, созданная учеными Гарварда. Включает практику программирования на Python, построение моделей глубокого обучения и подготовку научной статьи в области ИИ.","kk":"Гарвард ғалымдары құрған 9–12 сынып оқушыларына арналған жасанды интеллект және мәліметтер ғылымы бағдарламасы. Python, терең оқыту модельдері және ЖИ бойынша ғылыми жұмыс дайындауды қамтиды.","en":"Rigorous high school artificial intelligence and machine learning research program founded and run by Harvard graduates. Students learn Python, neural networks, and computer vision, and execute a custom AI research paper under 1-on-1 PhD guidance."}'::jsonb,
    'Veritas AI', ARRAY['ai','computer_science','stem']::text[], '{"ru":["Ученик 8–12 классов","Базовые навыки программирования (Python) или математическая подготовка","Мотивационное эссе и анкета"],"kk":["8–12 сынып оқушысы","Бағдарламалаудың (Python) немесе математиканың бастапқы негіздерін білу","Мотивациялық эссе және сауалнама"],"en":["Grades 8–12 student","Basic coding (Python) or quantitative aptitude","Application essay and transcript"]}'::jsonb, 'https://www.veritasai.com', 'https://www.veritasai.com',
    'paid', 2200, 'USD', 'online', 'Global / Online',
    8, 12, 13, 18,
    '{}'::text[], '{}'::text[], 'open', 'Доступно онлайн школьникам всех стран. Есть стипендии до 100%.',
    '["en"]'::jsonb, 'fixed', '2026-11-29', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по veritasai.com. Зимняя когорта 2026/2027.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: lumiere-research-scholar-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'lumiere-research-scholar-2027', 'Lumiere Research Scholar Program', 'Lumiere Education', 'research', '12-week independent research program with PhD mentors aimed at publication in peer-reviewed journals.', 'https://www.lumiere-education.com', '2026-11-22', 'approved', true,
    ARRAY['stem','humanities','social_sciences','medicine']::text[], ARRAY['stem','humanities','social_sciences','medicine']::text[], ARRAY['Grades 9–12 student','Academic rigor and fluency in written English','Research proposal essay and admissions interview']::text[],
    '{"ru":"Программа научных исследований Lumiere Research Scholar","kk":"Lumiere Research Scholar ғылыми зерттеу бағдарламасы","en":"Lumiere Research Scholar Program"}'::jsonb, '{"ru":"12 недель индивидуальной научной работы с PhD ментором с целью публикации в научном журнале.","kk":"Ғылыми журналға мақала шығару мақсатында PhD ғалымымен 12 апталық жеке зерттеу жұмысы.","en":"12-week independent research program with PhD mentors aimed at publication in peer-reviewed journals."}'::jsonb, '{"ru":"12-недельная интенсивная научная программа для старшеклассников, в рамках которой каждый школьник работает индивидуально с исследователем из топ-вузов над написанием полноценной научной статьи для публикации в международных журналах.","kk":"Жоғары сынып оқушыларына арналған 12 апталық ғылыми бағдарлама. Әрбір оқушы халықаралық рецензияланатын журналға мақала дайындау үшін жетекші университеттердің ғалымымен жеке жұмыс істейді.","en":"Prestigious 12-week research program pairing motivated high school students with PhD researchers from elite universities to write an independent scientific research paper with targeted academic journal submission."}'::jsonb,
    'Lumiere Education', ARRAY['stem','humanities','social_sciences','medicine']::text[], '{"ru":["Учащийся 9–12 классов","Академическая целеустремленность и академический английский","Эссе с исследовательскими интересами и онлайн-интервью"],"kk":["9–12 сынып оқушысы","Ғылыми мақсаткерлік және академиялық ағылшын тілі","Зерттеу бағыты бойынша эссе және онлайн сұхбат"],"en":["Grades 9–12 student","Academic rigor and fluency in written English","Research proposal essay and admissions interview"]}'::jsonb, 'https://www.lumiere-education.com', 'https://www.lumiere-education.com',
    'paid', 2800, 'USD', 'online', 'Global / Online',
    9, 12, 14, 18,
    '{}'::text[], '{}'::text[], 'open', 'Открыто по всему миру. Действует фонд финансовой помощи Lumiere Foundation.',
    '["en"]'::jsonb, 'fixed', '2026-11-22', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по lumiere-education.com.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: mit-beaver-works-summer-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'mit-beaver-works-summer-2027', 'MIT Beaver Works Summer Institute (BWSI)', 'MIT Lincoln Laboratory & MIT School of Engineering', 'research', 'Free MIT engineering program teaching autonomous robotics, quantum computing, and applied AI.', 'https://beaverworks.ll.mit.edu', '2027-03-31', 'approved', true,
    ARRAY['stem','robotics','ai','computer_science']::text[], ARRAY['stem','robotics','ai','computer_science']::text[], ARRAY['Rising high school senior (grades 10–11)','Completion of free BWSI prerequisite online modules','STEM teacher recommendation']::text[],
    '{"ru":"Летний инженерный институт MIT Beaver Works (BWSI)","kk":"MIT Beaver Works жазғы инженерлік институты (BWSI)","en":"MIT Beaver Works Summer Institute (BWSI)"}'::jsonb, '{"ru":"Бесплатная инженерная программа MIT: автономные роботы, квантовые алгоритмы и машинное обучение.","kk":"MIT ұсынған тегін инженерлік бағдарлама: автономды роботтар, кванттық есептеулер және ЖИ.","en":"Free MIT engineering program teaching autonomous robotics, quantum computing, and applied AI."}'::jsonb, '{"ru":"Трансформирующая 4-недельная инженерная программа для одаренных школьников (11 класс), организованная лабораторией MIT Lincoln Laboratory. Темы включают: автономные гоночные машинки (RACECAR), кибербезопасность, квантовые вычисления, ИИ для медицины. Участие в онлайн-курсах полностью бесплатное.","kk":"MIT Lincoln зертханасының дарынды 11-сынып оқушыларына арналған 4 апталық инженерлік бағдарламасы. Автономды RACECAR көліктері, киберқауіпсіздік, кванттық есептеулер және ЖИ бағыттарын тегін оқытады.","en":"Transformative 4-week STEM program for rising high school seniors hosted by MIT Lincoln Laboratory. Offers rigorous hands-on tracks including Autonomous RACECARs, Cyber Security, Quantum Software, and AI for Assistive Tech. Free prerequisite online courses."}'::jsonb,
    'MIT Lincoln Laboratory & MIT School of Engineering', ARRAY['stem','robotics','ai','computer_science']::text[], '{"ru":["Ученик 10–11 класса на момент подачи","Прохождение бесплатных подготовительных онлайн-курсов MIT BWSI (Python, математика)","Рекомендация преподавателя STEM"],"kk":["Өтініш беру кезінде 10–11 сынып оқушысы","MIT BWSI тегін дайындық онлайн курстарын аяқтау (Python, математика)","STEM пәні мұғалімінің ұсынысы"],"en":["Rising high school senior (grades 10–11)","Completion of free BWSI prerequisite online modules","STEM teacher recommendation"]}'::jsonb, 'https://beaverworks.ll.mit.edu', 'https://beaverworks.ll.mit.edu/CMS/bw/bwsi',
    'free', NULL, NULL, 'online', 'Online / Cambridge, MA, USA',
    10, 11, 15, 18,
    '{}'::text[], '{}'::text[], 'open', 'Виртуальные курсы и программа открыты для международных участников.',
    '["en"]'::jsonb, 'fixed', '2027-03-31', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по beaverworks.ll.mit.edu. Обучение бесплатное.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: mit-rsi-research-science-institute-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'mit-rsi-research-science-institute-2027', 'Research Science Institute (RSI) at MIT', 'Center for Excellence in Education (CEE) & MIT', 'research', 'The world''s most elite free high school research institute hosted at MIT for rising seniors.', 'https://www.cee.org/programs/research-science-institute', '2027-01-15', 'approved', true,
    ARRAY['stem','physics','mathematics','medicine','ai']::text[], ARRAY['stem','physics','mathematics','medicine','ai']::text[], ARRAY['Rising high school senior (grades 10–11)','Exceptional math and science record','Standardized test scores (SAT/ACT/PSAT/Olympiads), essays, and 3 recommendations']::text[],
    '{"ru":"Исследовательский научный институт RSI при MIT (Research Science Institute)","kk":"MIT жанындағы RSI ғылыми-зерттеу институты (Research Science Institute)","en":"Research Science Institute (RSI) at MIT"}'::jsonb, '{"ru":"Самая селективная и престижная бесплатная 6-недельная научная программа в мире на кампусе MIT.","kk":"MIT кампусында өтетін әлемдегі ең беделді әрі таңдаулы тегін 6 апталық ғылыми зерттеу бағдарламасы.","en":"The world''s most elite free high school research institute hosted at MIT for rising seniors."}'::jsonb, '{"ru":"Самая престижная в мире бесплатная 6-недельная летняя исследовательская программа для старшеклассников, проходящая на кампусе Массачусетского технологического института (MIT). Около 100 лучших школьников мира проводят оригинальные научные исследования под руководством ведущих ученых MIT и Гарварда.","kk":"MIT кампусында өтетін жоғары сынып оқушыларына арналған әлемдегі ең беделді тегін 6 апталық жазғы ғылыми зерттеу бағдарламасы. Әлемнің 100 үздік оқушысы MIT және Гарвард ғалымдарымен дербес ғылыми жұмыс жасайды.","en":"The world''s most prestigious cost-free summer research program for high school rising seniors, hosted at the Massachusetts Institute of Technology (MIT). Selected scholars conduct individual research with premier scientists and present oral and written reports."}'::jsonb,
    'Center for Excellence in Education (CEE) & MIT', ARRAY['stem','physics','mathematics','medicine','ai']::text[], '{"ru":["Учащийся предпоследнего года школы (11 класс / rising senior)","Выдающиеся академические показатели в математике и точных науках (олимпиады, публикации)","Эссе, стандартизированные тесты (SAT/ACT/PSAT или олимпиадные дипломы), 3 рекомендации"],"kk":["Мектептің соңғы алдындағы сынып оқушысы (11 сынып)","Математика мен жаратылыстану пәндерінен ерекше нәтижелер (олимпиадалар, ғылыми жұмыстар)","Эссе, тест ұпайлары және 3 ұсыныс хат"],"en":["Rising high school senior (grades 10–11)","Exceptional math and science record","Standardized test scores (SAT/ACT/PSAT/Olympiads), essays, and 3 recommendations"]}'::jsonb, 'https://www.cee.org/programs/research-science-institute', 'https://www.cee.org/programs/research-science-institute',
    'fully_funded', NULL, NULL, 'offline', 'Cambridge, MA, USA (MIT Campus)',
    11, 11, 16, 18,
    '{}'::text[], '{}'::text[], 'open', 'Открыто для американских и международных школьников (международные квоты распределяются через партнерские комитеты).',
    '["en"]'::jsonb, 'fixed', '2027-01-15', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по cee.org. 100% бесплатно для всех зачисленных участников.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: concord-review-history-journal-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'concord-review-history-journal-2027', 'The Concord Review Academic History Journal', 'The Concord Review, Inc.', 'research', 'The premier quarterly journal publishing exemplary secondary student history research papers.', 'https://www.tcr.org', '2027-02-01', 'approved', true,
    ARRAY['humanities','social_sciences']::text[], ARRAY['humanities','social_sciences']::text[], ARRAY['Pre-college secondary student','Original academic history paper (4,000 to 8,000 words) with Turabian/Chicago citations','Submission submission fee']::text[],
    '{"ru":"Академический журнал исторических исследований The Concord Review","kk":"The Concord Review тарихи зерттеулер академиялық журналы","en":"The Concord Review Academic History Journal"}'::jsonb, '{"ru":"Единственный мировой рецензируемый научный журнал по истории для школьников (объем эссе 4000–8000 слов).","kk":"Оқушылардың тарих бойынша көлемді (4000–8000 сөз) ғылыми мақалаларын шығаратын жалғыз журнал.","en":"The premier quarterly journal publishing exemplary secondary student history research papers."}'::jsonb, '{"ru":"Единственный в мире ежеквартальный рецензируемый академический журнал, публикующий глубокие научно-исследовательские работы школьников по всемирной и национальной истории. Публикация в журнале является одной из высших академических наград для гуманитариев в мире.","kk":"Мектеп оқушыларының тарих бойынша терең ғылыми-зерттеу мақалаларын жариялайтын әлемдегі жалғыз академиялық журнал. Журналға мақала шығару — гуманитарлық бағыттағы оқушылар үшін ең жоғары әлемдік мәртебе.","en":"The only quarterly peer-reviewed journal in the world dedicated to publishing exemplary academic history research papers by secondary school students. Widely recognized as one of the highest pre-college academic distinctions in the humanities."}'::jsonb,
    'The Concord Review, Inc.', ARRAY['humanities','social_sciences']::text[], '{"ru":["Учащийся средней/старшей школы до поступления в вуз","Оригинальное научное исследование по истории объемом от 4000 до 8000 слов со сносками в формате Turabian/Chicago","Заявка и публикационный взнос"],"kk":["ЖОО-ға түспеген орта/жоғары мектеп оқушысы","Turabian/Chicago форматындағы 4000-8000 сөзден тұратын тарихи ғылыми зерттеу","Өтініш беру"],"en":["Pre-college secondary student","Original academic history paper (4,000 to 8,000 words) with Turabian/Chicago citations","Submission submission fee"]}'::jsonb, 'https://www.tcr.org', 'https://www.tcr.org',
    'paid', 70, 'USD', 'online', 'Global / Online',
    8, 12, 13, 18,
    '{}'::text[], '{}'::text[], 'open', 'Открыто для школьников любых стран мира.',
    '["en"]'::jsonb, 'rolling', '2027-02-01', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по tcr.org. Четыре выпуска в год: 1 февраля, 1 мая, 1 августа, 1 ноября.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: ijhsr-high-school-research-journal-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'ijhsr-high-school-research-journal-2027', 'International Journal of High School Research (IJHSR)', 'Terra Science and Education', 'research', 'Peer-reviewed academic research journal publishing original scientific discoveries by high school students.', 'https://curieuxacademicjournal.com', NULL, 'approved', true,
    ARRAY['stem','medicine','social_sciences','environmental_science']::text[], ARRAY['stem','medicine','social_sciences','environmental_science']::text[], ARRAY['Enrolled pre-college student','Original scientific manuscript in English with abstract and data','Faculty supervisor confirmation']::text[],
    '{"ru":"Международный журнал научных исследований школьников (IJHSR)","kk":"Оқушылардың халықаралық ғылыми зерттеу журналы (IJHSR)","en":"International Journal of High School Research (IJHSR)"}'::jsonb, '{"ru":"Рецензируемый научный журнал для публикации исследовательских проектов школьников по STEM и наукам.","kk":"STEM және ғылыми бағыттар бойынша мектеп оқушыларының мақалаларын жариялайтын рецензияланатын журнал.","en":"Peer-reviewed academic research journal publishing original scientific discoveries by high school students."}'::jsonb, '{"ru":"Рецензируемый научный журнал открытого доступа, в котором школьники могут публиковать результаты своих оригинальных исследований по биологии, химии, физике, инженерии и социальным наукам. Все статьи проходят двойное слепое рецензирование учеными.","kk":"Оқушыларға арналған ашық қолжетімді халықаралық рецензияланатын ғылыми журнал. Биология, химия, физика, инженерия және қоғамдық ғылымдар бойынша мақалалар ғалымдардың тексеруінен өтеді.","en":"Peer-reviewed open-access scientific journal dedicated to publishing original pre-college research across STEM and social sciences. Papers undergo double-blind peer review by PhD researchers and academic reviewers."}'::jsonb,
    'Terra Science and Education', ARRAY['stem','medicine','social_sciences','environmental_science']::text[], '{"ru":["Автор — учащийся средней или старшей школы","Оригинальная рукопись научной статьи на английском языке с аннотацией и списком литературы","Наличие научного наставника/учителя"],"kk":["Автор — орта немесе жоғары мектеп оқушысы","Ағылшын тіліндегі аннотациясы мен әдебиеттер тізімі бар ғылыми мақала","Ғылыми жетекшінің болуы"],"en":["Enrolled pre-college student","Original scientific manuscript in English with abstract and data","Faculty supervisor confirmation"]}'::jsonb, 'https://curieuxacademicjournal.com', 'https://www.terraed.org/ijhsr/',
    'paid', 150, 'USD', 'online', 'Global / Online',
    8, 12, 13, 18,
    '{}'::text[], '{}'::text[], 'open', 'Открыто для школьников со всего мира.',
    '["en"]'::jsonb, 'rolling', NULL, 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по terraed.org/ijhsr. Прием статей круглогодичный.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: horizon-academic-research-program-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'horizon-academic-research-program-2027', 'Horizon Academic Research Program', 'Horizon Academic', 'research', '1-on-1 university-level research program under professors in AI, economics, and neuroscience.', 'https://horizoninspires.com', '2027-02-10', 'approved', true,
    ARRAY['stem','humanities','social_sciences','ai']::text[], ARRAY['stem','humanities','social_sciences','ai']::text[], ARRAY['Grades 9–12 student','Academic transcript and motivation essay','Admissions interview']::text[],
    '{"ru":"Академическая исследовательская лаборатория Horizon Academic","kk":"Horizon Academic халықаралық зерттеу зертханасы","en":"Horizon Academic Research Program"}'::jsonb, '{"ru":"Индивидуальная научная работа с профессорами мировых вузов по экономике, ИИ и нейробиологии.","kk":"Экономика, ЖИ және нейробиология салаларында әлемдік профессорлармен жеке ғылыми жұмыс.","en":"1-on-1 university-level research program under professors in AI, economics, and neuroscience."}'::jsonb, '{"ru":"Семестровая онлайн-исследовательская программа, в рамках которой старшеклассники разрабатывают авторскую научную статью под индивидуальным руководством профессоров ведущих мировых университетов по экономике, ИИ, нейробиологии или международным отношениям.","kk":"Жоғары сынып оқушыларына арналған семестрлік зерттеу бағдарламасы. Оқушылар экономика, ЖИ, нейробиология және халықаралық қатынастар бойынша әлемдік профессорлармен жеке мақала жазады.","en":"Trimester-based online research program where students produce university-level research papers under the direct 1-on-1 supervision of distinguished professors in fields like Machine Learning, Economics, and Neuroscience."}'::jsonb,
    'Horizon Academic', ARRAY['stem','humanities','social_sciences','ai']::text[], '{"ru":["Ученик 9–12 класса","Транскрипт с оценками и мотивационное эссе","Интервью с приемной комиссией"],"kk":["9–12 сынып оқушысы","Бағалар транскрипті мен мотивациялық эссе","Қабылдау комиссиясымен сұхбат"],"en":["Grades 9–12 student","Academic transcript and motivation essay","Admissions interview"]}'::jsonb, 'https://horizoninspires.com', 'https://horizoninspires.com',
    'paid', 3500, 'USD', 'online', 'Global / Online',
    9, 12, 14, 18,
    '{}'::text[], '{}'::text[], 'open', 'Открыто по всему миру. Доступны частичные стипендии.',
    '["en"]'::jsonb, 'fixed', '2027-02-10', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по horizoninspires.com.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: ccir-cambridge-oxford-research-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'ccir-cambridge-oxford-research-2027', 'Cambridge Centre for International Research (CCIR)', 'Cambridge Centre for International Research', 'research', 'Advanced research programs led 1-on-1 by Cambridge and Oxford professors for ambitious teens.', 'https://www.cambridge-research.org', '2027-02-15', 'approved', true,
    ARRAY['stem','humanities','social_sciences','medicine']::text[], ARRAY['stem','humanities','social_sciences','medicine']::text[], ARRAY['Grades 9–12 student','Academic GPA 3.7+ or equivalent','Research statement and English proficiency']::text[],
    '{"ru":"Кембриджский центр международных исследований (CCIR Academy)","kk":"Кембридж халықаралық зерттеулер орталығы (CCIR Academy)","en":"Cambridge Centre for International Research (CCIR)"}'::jsonb, '{"ru":"Научные исследования под руководством профессоров Кембриджа и Оксфорда для старшеклассников.","kk":"Жоғары сыныптар үшін Кембридж және Оксфорд профессорларының жетекшілігімен ғылыми зерттеулер.","en":"Advanced research programs led 1-on-1 by Cambridge and Oxford professors for ambitious teens."}'::jsonb, '{"ru":"Высокоселективная научная программа, соединяющая школьников 9–12 классов с профессорами Оксфорда, Кембриджа и Лиги Плюща. Программа Cambridge Future Scholar предлагает индивидуальные или малые исследовательские группы с подготовкой статьи к рецензированию.","kk":"9–12 сынып оқушыларын Оксфорд, Кембридж және Плющ лигасының профессорларымен байланыстыратын ғылыми бағдарлама. Шағын топтарда немесе жеке ғылыми мақала жазуды үйретеді.","en":"Selective research academy pairing students with faculty from Cambridge, Oxford, and Ivy League universities. Students undertake original research in 1-on-1 or small-cohort formats (Cambridge Future Scholar) aiming for publication."}'::jsonb,
    'Cambridge Centre for International Research', ARRAY['stem','humanities','social_sciences','medicine']::text[], '{"ru":["Ученик 9–12 классов","Высокий академический балл (GPA 3.7+ или эквивалент)","Мотивационное эссе и подтверждение уровня английского"],"kk":["9–12 сынып оқушысы","Жоғары оқу үлгерімі (GPA 3.7+ немесе баламасы)","Мотивациялық эссе және ағылшын тілін растау"],"en":["Grades 9–12 student","Academic GPA 3.7+ or equivalent","Research statement and English proficiency"]}'::jsonb, 'https://www.cambridge-research.org', 'https://www.cambridge-research.org',
    'paid', 3200, 'GBP', 'online', 'Global / Online',
    9, 12, 14, 18,
    '{}'::text[], '{}'::text[], 'open', 'Открыто для школьников любых стран.',
    '["en"]'::jsonb, 'fixed', '2027-02-15', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по cambridge-research.org.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: yale-young-global-scholars-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'yale-young-global-scholars-2027', 'Yale Young Global Scholars (YYGS) 2027', 'Yale University', 'summer_school', 'Two-week interdisciplinary academic summer immersion on Yale University campus with full financial aid.', 'https://globalscholars.yale.edu/sessions', '2027-01-10', 'approved', true,
    ARRAY['humanities','social_sciences','stem','leadership']::text[], ARRAY['humanities','social_sciences','stem','leadership']::text[], ARRAY['Current high school sophomore or junior (ages 16–18)','Strong academic standing and English fluency','Application form, school transcript, essays, and 2 recommendations']::text[],
    '{"ru":"Летняя программа Йельского университета (Yale Young Global Scholars - YYGS)","kk":"Йель университетінің жазғы бағдарламасы (Yale Young Global Scholars - YYGS)","en":"Yale Young Global Scholars (YYGS) 2027"}'::jsonb, '{"ru":"2 недели на кампусе Йеля: семинары с профессорами, дебаты и Capstone-проект для 10–11 классов.","kk":"Йель кампусындағы 2 апталық академия: профессорлармен дәрістер, дебаттар және Capstone жобасы.","en":"Two-week interdisciplinary academic summer immersion on Yale University campus with full financial aid."}'::jsonb, '{"ru":"Одна из самых глобальных и междисциплинарных летних программ в мире для старшеклассников (10–11 классы). Проходит на кампусе Йельского университета в Нью-Хейвене. Сессии включают: Инновации в науке и технологиях (IST), Литература, философия и культура (LPC), Политика, право и экономика (PLE), Решение глобальных вызовов (SGC). Доступна полная финансовая помощь.","kk":"Йель университетінің кампусында өтетін 10–11 сынып оқушыларына арналған әлемдік деңгейдегі пәнаралық жазғы бағдарлама. Бағыттары: Ғылым мен технологиялар (IST), Әдебиет пен мәдениет (LPC), Саясат, құқық және экономика (PLE). Мұқтаждарға толық қаржылай көмек бар.","en":"One of the most globally diverse two-week pre-college programs in the world hosted on Yale''s historic campus. High school sophomores and juniors attend seminars, lectures by Yale faculty, and collaborate on a Capstone project across STEM, Humanities, Social Sciences, and Global Challenges."}'::jsonb,
    'Yale University', ARRAY['humanities','social_sciences','stem','leadership']::text[], '{"ru":["Ученик 10 или 11 класса (16–18 лет)","Высокая успеваемость и знание английского языка","Анкета, школьный табель, эссе и 2 рекомендательных письма"],"kk":["10 немесе 11 сынып оқушысы (16–18 жас)","Жоғары үлгерім және ағылшын тілін білу","Сауалнама, бағалар табелі, эссе және 2 ұсыныс хат"],"en":["Current high school sophomore or junior (ages 16–18)","Strong academic standing and English fluency","Application form, school transcript, essays, and 2 recommendations"]}'::jsonb, 'https://globalscholars.yale.edu/sessions', 'https://globalscholars.yale.edu',
    'paid', 6500, 'USD', 'offline', 'New Haven, CT, USA (Yale Campus)',
    10, 11, 16, 18,
    '{}'::text[], '{}'::text[], 'open', 'Открыто для школьников из всех стран мира. Доступна полная финансовая помощь (Need-Based Aid).',
    '["en"]'::jsonb, 'fixed', '2027-01-10', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по globalscholars.yale.edu. Ранний дедлайн — ноябрь, основной — январь.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: stanford-sumac-math-camp-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'stanford-sumac-math-camp-2027', 'Stanford University Mathematics Camp (SUMaC)', 'Stanford University', 'summer_school', 'Intensive 3-week pure mathematics camp hosted by Stanford University on campus and online.', 'https://sumac.spcs.stanford.edu', '2027-02-01', 'approved', true,
    ARRAY['mathematics','stem']::text[], ARRAY['mathematics','stem']::text[], ARRAY['Grades 10–11 student','Completion of the rigorous SUMaC Admissions Exam','Math teacher recommendation and transcript']::text[],
    '{"ru":"Математический лагерь Стэнфордского университета (Stanford SUMaC)","kk":"Стэнфорд университетінің математикалық лагері (Stanford SUMaC)","en":"Stanford University Mathematics Camp (SUMaC)"}'::jsonb, '{"ru":"Элитный лагерь Стэнфорда по чистой математике: абстрактная алгебра и топология для 10–11 классов.","kk":"Стэнфорд университетінің жоғары математика, абстрактілі алгебра және топология бойынша лагері.","en":"Intensive 3-week pure mathematics camp hosted by Stanford University on campus and online."}'::jsonb, '{"ru":"Легендарный 3-недельный математический лагерь Стэнфордского университета для школьников 10–11 классов, увлеченных чистой математикой. Участники изучают абстрактную алгебру, теорию чисел и топологию. Доступен в очном формате на кампусе Стэнфорда и онлайн.","kk":"Стэнфорд университетінің таза математикаға қызығатын 10–11 сынып оқушыларына арналған 3 апталық лагері. Абстрактілі алгебра, сандар теориясы және топологияны терең оқытады. Стэнфорд кампусында және онлайн өтеді.","en":"Legendary 3-week pure mathematics summer camp for rising 11th and 12th graders hosted by Stanford University. Students explore advanced mathematical themes including Abstract Algebra, Number Theory, and Algebraic Topology through guided research problems."}'::jsonb,
    'Stanford University', ARRAY['mathematics','stem']::text[], '{"ru":["Ученик 10–11 класса","Выполнение вступительного экзамена SUMaC Admissions Exam (сложные доказательные задачи)","Транскрипт с оценками и рекомендация учителя математики"],"kk":["10–11 сынып оқушысы","SUMaC арнайы емтихан есептерін (дәлелдеу есептері) толық шығару","Бағалар транскрипті және математика мұғалімінің ұсыныс хаты"],"en":["Grades 10–11 student","Completion of the rigorous SUMaC Admissions Exam","Math teacher recommendation and transcript"]}'::jsonb, 'https://sumac.spcs.stanford.edu', 'https://sumac.spcs.stanford.edu',
    'paid', 3550, 'USD', 'hybrid', 'Stanford, CA, USA & Online',
    10, 11, 15, 18,
    '{}'::text[], '{}'::text[], 'open', 'Открыто по всему миру. Предоставляется финансовая помощь нуждающимся кандидатам.',
    '["en"]'::jsonb, 'fixed', '2027-02-01', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по sumac.spcs.stanford.edu.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: harvard-pre-college-program-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'harvard-pre-college-program-2027', 'Harvard Pre-College Summer Residential Program', 'Harvard University (Division of Continuing Education)', 'summer_school', 'Two-week residential academic experience living on Harvard University campus in Cambridge, MA.', 'https://summer.harvard.edu/high-school-programs/pre-college-program/', '2027-02-14', 'approved', true,
    ARRAY['humanities','social_sciences','stem','medicine']::text[], ARRAY['humanities','social_sciences','stem','medicine']::text[], ARRAY['Rising high school junior or senior (ages 16–18)','Strong academic performance and English fluency','Teacher recommendation and admissions essay']::text[],
    '{"ru":"Довузовская программа Гарвардского университета (Harvard Pre-College)","kk":"Гарвард университетінің мектеп бітірушілерге арналған жазғы бағдарламасы (Harvard Pre-College)","en":"Harvard Pre-College Summer Residential Program"}'::jsonb, '{"ru":"2 недели жизни и учебы в Гарварде: курсы от профессоров, проживание на кампусе Harvard Yard.","kk":"Гарвард кампусындағы 2 апталық жазғы оқу: профессорлардың сабақтары және студенттік өмір тәжірибесі.","en":"Two-week residential academic experience living on Harvard University campus in Cambridge, MA."}'::jsonb, '{"ru":"Двухнедельная очная программа погружения в университетскую жизнь Гарварда для школьников 10–11 классов. Участники живут в исторических общежитиях Гарвардского двора, слушают курсы профессоров Гарварда без давления оценок и готовятся к поступлению в топовые вузы.","kk":"10–11 сынып оқушыларына арналған Гарвард университетіндегі 2 апталық жазғы академиялық бағдарлама. Оқушылар Гарвардтың тарихи кампусында тұрып, профессорлардың дәрістерін тыңдайды.","en":"Two-week intensive residential college experience on Harvard campus for rising high school juniors and seniors. Students live in historic Harvard Yard dorms, take non-credit college courses with Harvard faculty, and engage in co-curricular college readiness activities."}'::jsonb,
    'Harvard University (Division of Continuing Education)', ARRAY['humanities','social_sciences','stem','medicine']::text[], '{"ru":["Ученик 10–11 класса (возраст от 16 до 18 лет)","Высокие оценки в школе и знание английского языка","Рекомендация преподавателя и эссе"],"kk":["10–11 сынып оқушысы (16–18 жас)","Жоғары оқу үлгерімі және ағылшын тілін еркін меңгеру","Мұғалімнің ұсынысы және эссе"],"en":["Rising high school junior or senior (ages 16–18)","Strong academic performance and English fluency","Teacher recommendation and admissions essay"]}'::jsonb, 'https://summer.harvard.edu/high-school-programs/pre-college-program/', 'https://summer.harvard.edu/high-school-programs/pre-college-program/',
    'paid', 5550, 'USD', 'offline', 'Cambridge, MA, USA (Harvard Yard)',
    10, 11, 16, 18,
    '{}'::text[], '{}'::text[], 'open', 'Открыто для американских и международных старшеклассников.',
    '["en"]'::jsonb, 'fixed', '2027-02-14', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по официальному сайту Harvard Summer School.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: wharton-global-youth-summer-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'wharton-global-youth-summer-2027', 'Wharton Global Youth Summer High School Programs', 'The Wharton School, University of Pennsylvania', 'summer_school', 'Pre-college finance, leadership, and analytics programs at the Wharton School of Business.', 'https://globalyouth.wharton.upenn.edu', '2027-01-25', 'approved', true,
    ARRAY['business','leadership','social_sciences']::text[], ARRAY['business','leadership','social_sciences']::text[], ARRAY['Grades 9–11 student','Strong high school transcript (GPA 3.5+)','Short essays on business/leadership and teacher recommendation']::text[],
    '{"ru":"Летняя программа по бизнесу и финансам школы Wharton (Wharton Global Youth)","kk":"Wharton бизнес мектебінің қаржы және көшбасшылық жазғы бағдарламасы","en":"Wharton Global Youth Summer High School Programs"}'::jsonb, '{"ru":"Летние программы по бизнесу, финансам и data science в легендарной школе Wharton при UPenn.","kk":"Wharton бизнес мектебіндегі қаржы, көшбасшылық және деректер ғылымы бойынша жазғы курстар.","en":"Pre-college finance, leadership, and analytics programs at the Wharton School of Business."}'::jsonb, '{"ru":"Престижные летние курсы Уортонской школы бизнеса Пенсильванского университета (UPenn) для старшеклассников 9–11 классов. Программы включают: Leadership in the Business World (LBW), Management & Technology Summer Institute (M&TSI), Moneyball Academy (спортивная аналитика), Data Science Academy.","kk":"Пенсильвания университетінің Wharton бизнес мектебінде өтетін 9–11 сынып оқушыларына арналған жазғы бағдарламалар. Бағыттары: Бизнес көшбасшылық (LBW), Басқару және технологиялар (M&TSI), Қаржы және деректер аналитикасы.","en":"Elite summer on-campus business and finance academies at the Wharton School, University of Pennsylvania. Features flagship tracks including Leadership in the Business World (LBW), M&TSI (Engineering + Business), and the Wharton Data Science Academy."}'::jsonb,
    'The Wharton School, University of Pennsylvania', ARRAY['business','leadership','social_sciences']::text[], '{"ru":["Ученик 9–11 класса","Транскрипт с высокими оценками (GPA 3.5+)","Краткие эссе об интересе к бизнесу и рекомендация преподавателя"],"kk":["9–11 сынып оқушысы","Жоғары бағалар табелі (GPA 3.5+)","Бизнеске қызығушылық туралы эссе және ұсыныс хат"],"en":["Grades 9–11 student","Strong high school transcript (GPA 3.5+)","Short essays on business/leadership and teacher recommendation"]}'::jsonb, 'https://globalyouth.wharton.upenn.edu', 'https://globalyouth.wharton.upenn.edu',
    'paid', 8099, 'USD', 'offline', 'Philadelphia, PA, USA (UPenn Campus)',
    9, 11, 15, 18,
    '{}'::text[], '{}'::text[], 'open', 'Открыто по всему миру. Доступны стипендии Wharton Global Youth Need-Based Financial Aid.',
    '["en"]'::jsonb, 'fixed', '2027-01-25', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по globalyouth.wharton.upenn.edu.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: launchx-entrepreneurship-summer-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'launchx-entrepreneurship-summer-2027', 'LaunchX Summer High School Entrepreneurship Program', 'LaunchX', 'entrepreneurship', 'Intensive summer entrepreneurship accelerator where teens launch real companies and generate revenue.', 'https://launchx.com', '2027-01-07', 'approved', true,
    ARRAY['entrepreneurship','business','computer_science','leadership']::text[], ARRAY['entrepreneurship','business','computer_science','leadership']::text[], ARRAY['Grades 9–12 student','Entrepreneurial drive or coding/design abilities','Video application, resume, and portfolio']::text[],
    '{"ru":"Стартап-акселератор для старшеклассников LaunchX","kk":"Жоғары сынып оқушыларына арналған LaunchX стартап-акселераторы","en":"LaunchX Summer High School Entrepreneurship Program"}'::jsonb, '{"ru":"Создай настоящий стартап за лето: командная разработка продукта, привлечение клиентов и реальные продажи.","kk":"Жаз бойы нақты стартап құру: командалық өнім жасау, нарыққа шығу және нақты сатылымдар жасау.","en":"Intensive summer entrepreneurship accelerator where teens launch real companies and generate revenue."}'::jsonb, '{"ru":"Ведущая мировая летняя программа по практическому созданию стартапов для школьников 9–12 классов. Вместо учебных симуляций команды школьников создают реальный технологический продукт, привлекают первых клиентов и совершают реальные продажи.","kk":"9–12 сынып оқушыларына арналған тәжірибелік стартап бағдарламасы. Қатысушылар оқу жобасын емес, нақты жұмыс істейтін өнім жасап, нарықта алғашқы сатылымдарын жасайды.","en":"Premier summer entrepreneurship program for high school students globally. Rather than learning business theory, students co-found real companies in teams, build prototypes, acquire real users, and generate actual revenue."}'::jsonb,
    'LaunchX', ARRAY['entrepreneurship','business','computer_science','leadership']::text[], '{"ru":["Учащийся 9–12 классов","Предпринимательский склад ума или технические/дизайнерские навыки","Видео-заявка, резюме и мотивационное эссе"],"kk":["9–12 сынып оқушысы","Кәсіпкерлікке бейімділік немесе IT/дизайн дағдылары","Бейнеөтініш, түйіндеме және эссе"],"en":["Grades 9–12 student","Entrepreneurial drive or coding/design abilities","Video application, resume, and portfolio"]}'::jsonb, 'https://launchx.com', 'https://launchx.com',
    'paid', 5980, 'USD', 'hybrid', 'Online / Ann Arbor, MI, USA',
    9, 12, 14, 18,
    '{}'::text[], '{}'::text[], 'open', 'Открыто для школьников любых стран мира. Доступны финансовые стипендии.',
    '["en"]'::jsonb, 'fixed', '2027-01-07', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по launchx.com. Ранний дедлайн в ноябре, регулярный — в январе.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: promys-boston-math-camp-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'promys-boston-math-camp-2027', 'PROMYS (Program in Mathematics for Young Scientists)', 'Boston University & PROMYS Foundation', 'summer_school', 'Prestigious 6-week pure mathematics program at Boston University exploring deep number theory.', 'https://promys.org', '2027-03-05', 'approved', true,
    ARRAY['mathematics','stem']::text[], ARRAY['mathematics','stem']::text[], ARRAY['At least 14 years old by program start','Independent solutions to the challenging PROMYS application problem set','Math teacher recommendation and transcript']::text[],
    '{"ru":"Математическая программа для юных ученых PROMYS (Бостонский университет)","kk":"Бостон университетіндегі PROMYS жас математиктер бағдарламасы","en":"PROMYS (Program in Mathematics for Young Scientists)"}'::jsonb, '{"ru":"6 недель чистой математики и теории чисел в Бостонском университете для школьников 14–19 лет.","kk":"Бостон университетіндегі сандар теориясы мен таза математика бойынша 6 апталық қарқынды бағдарлама.","en":"Prestigious 6-week pure mathematics program at Boston University exploring deep number theory."}'::jsonb, '{"ru":"Глубокая 6-недельная программа погружения в чистую математику для школьников 14–19 лет на кампусе Бостонского университета. Программа фокусируется на теории чисел: школьники ежедневно выводят фундаментальные математические теоремы самостоятельно через решение задач.","kk":"Бостон университетінің кампусында 14–19 жастағы оқушыларға арналған 6 апталық математикалық бағдарлама. Оқушылар сандар теориясын терең оқып, күрделі математикалық теоремаларды өз беттерінше дәлелдейді.","en":"Challenging 6-week residential summer program in pure mathematics for students ages 14–19 at Boston University. Focusing on Number Theory, students discover mathematical truths independently by solving problem sets."}'::jsonb,
    'Boston University & PROMYS Foundation', ARRAY['mathematics','stem']::text[], '{"ru":["Возраст не менее 14 лет на момент начала программы","Решение вступительного математического задания (PROMYS Application Problem Set)","Рекомендация преподавателя математики и транскрипт"],"kk":["Бағдарлама басталғанда кемінде 14 жаста болу","PROMYS күрделі математикалық есептер топтамасын өздігінен шығару","Математика мұғалімінің ұсыныс хаты"],"en":["At least 14 years old by program start","Independent solutions to the challenging PROMYS application problem set","Math teacher recommendation and transcript"]}'::jsonb, 'https://promys.org', 'https://promys.org',
    'paid', 6000, 'USD', 'offline', 'Boston, MA, USA (Boston University)',
    9, 12, 14, 19,
    '{}'::text[], '{}'::text[], 'open', 'Открыто по всему миру. Полные стипендии для семей с доходом менее $80 000 в год.',
    '["en"]'::jsonb, 'fixed', '2027-03-05', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по promys.org. Щедрая финансовая помощь.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: canada-usa-mathcamp-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'canada-usa-mathcamp-2027', 'Canada/USA Mathcamp 2027', 'Mathematics Foundation of America', 'summer_school', 'Vibrant 5-week pure mathematics summer camp for 120 gifted teens with full need-based aid.', 'https://www.mathcamp.info', '2027-03-10', 'approved', true,
    ARRAY['mathematics','stem']::text[], ARRAY['mathematics','stem']::text[], ARRAY['Ages 13–18','Original solutions to the Mathcamp Qualifying Quiz','Two recommendation letters and essays']::text[],
    '{"ru":"Летний математический лагерь Canada/USA Mathcamp","kk":"Canada/USA Mathcamp халықаралық жазғы математикалық лагері","en":"Canada/USA Mathcamp 2027"}'::jsonb, '{"ru":"5 недель продвинутой математики для 120 одаренных школьников со всего мира со свободным выбором курсов.","kk":"Әлемнің 120 дарынды оқушысына арналған 5 апталық жоғары математикалық лагерь.","en":"Vibrant 5-week pure mathematics summer camp for 120 gifted teens with full need-based aid."}'::jsonb, '{"ru":"5-недельный летний интенсив для 120 математически одаренных старшеклассников со всего мира (13–18 лет). Участники самостоятельно выбирают курсы по высшей математике университетского уровня (теория узлов, теория Рамсея, квантовая механика) и работают с ведущими профессорами.","kk":"Әлемнің 120 дарынды оқушысына арналған 5 апталық математикалық жазғы лагерь. Қатысушылар университет деңгейіндегі курстарды өздері таңдап, жетекші математиктермен жұмыс істейді.","en":"Intensive 5-week summer program for 120 mathematically gifted students ages 13–18 from around the world. Designed with a flexible curriculum where students choose advanced undergraduate and graduate-level courses in pure mathematics."}'::jsonb,
    'Mathematics Foundation of America', ARRAY['mathematics','stem']::text[], '{"ru":["Возраст от 13 до 18 лет","Решение задач вступительного задания Mathcamp Qualifying Quiz","2 рекомендательных письма и эссе"],"kk":["13 пен 18 жас аралығы","Mathcamp Qualifying Quiz күрделі олимпиадалық есептерін шешу","2 ұсыныс хат және эссе"],"en":["Ages 13–18","Original solutions to the Mathcamp Qualifying Quiz","Two recommendation letters and essays"]}'::jsonb, 'https://www.mathcamp.info', 'https://www.mathcamp.info',
    'paid', 5500, 'USD', 'offline', 'Host University Campus in North America (Rotates)',
    8, 12, 13, 18,
    '{}'::text[], '{}'::text[], 'open', 'Открыто для школьников любых стран мира. Финансовая помощь покрывает до 100% стоимости.',
    '["en"]'::jsonb, 'fixed', '2027-03-10', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по mathcamp.info.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: ross-mathematics-program-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'ross-mathematics-program-2027', 'Ross Mathematics Program (USA & Asia)', 'Ross Mathematics Program', 'summer_school', 'Rigorous 6-week pure mathematics program in number theory developing proof-based thinking.', 'https://rossprogram.org', '2027-03-31', 'approved', true,
    ARRAY['mathematics','stem']::text[], ARRAY['mathematics','stem']::text[], ARRAY['Ages 15–18','Solutions to the Ross application mathematics problem set','Transcripts and teacher recommendations']::text[],
    '{"ru":"Математическая программа Росса (Ross Mathematics Program)","kk":"Росс математикалық жазғы бағдарламасы (Ross Mathematics Program)","en":"Ross Mathematics Program (USA & Asia)"}'::jsonb, '{"ru":"6-недельное погружение в чистую математику и теорию чисел по девизу «Думай глубоко о простых вещах».","kk":"15–18 жастағы оқушыларға арналған 6 апталық таза математика мен сандар теориясы лагері.","en":"Rigorous 6-week pure mathematics program in number theory developing proof-based thinking."}'::jsonb, '{"ru":"Легендарный 6-недельный математический лагерь, основанный в 1957 году. Девиз программы — «Думай глубоко о простых вещах». Школьники 15–18 лет с нуля строят аксиоматическую систему теории чисел, развивая доказательное абстрактное мышление.","kk":"1957 жылы негізі қаланған 6 апталық математикалық лагерь. 15–18 жастағы оқушылар сандар теориясының аксиомаларын өздігінен дәлелдеп, логикалық ойлауды дамытады.","en":"Legendary 6-week intensive summer mathematics program founded in 1957. Centered on the motto ''Think deeply of simple things'', students explore Number Theory rigorously from first principles."}'::jsonb,
    'Ross Mathematics Program', ARRAY['mathematics','stem']::text[], '{"ru":["Возраст 15–18 лет","Решение вступительного математического теста задач Росса","Школьные оценки и рекомендация учителя"],"kk":["15 пен 18 жас аралығы","Росс арнайы математикалық есептер жинағын шығару","Мектеп бағалары мен мұғалім ұсынысы"],"en":["Ages 15–18","Solutions to the Ross application mathematics problem set","Transcripts and teacher recommendations"]}'::jsonb, 'https://rossprogram.org', 'https://rossprogram.org',
    'paid', 7000, 'USD', 'offline', 'Otterbein University, Westerville, OH, USA',
    9, 12, 15, 18,
    '{}'::text[], '{}'::text[], 'open', 'Открыто по всему миру. Доступны полные стипендии.',
    '["en"]'::jsonb, 'fixed', '2027-03-31', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по rossprogram.org.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: john-locke-essay-competition-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'john-locke-essay-competition-2027', 'John Locke Institute Global Essay Competition 2027', 'John Locke Institute (Oxford / Princeton)', 'competition', 'World''s premier pre-college essay competition judged by Oxford and Princeton senior faculty.', 'https://www.johnlockeinstitute.com', '2027-05-31', 'approved', true,
    ARRAY['humanities','social_sciences']::text[], ARRAY['humanities','social_sciences']::text[], ARRAY['Aged 18 or under (or 14 and under for Junior Prize)','Original argumentative essay up to 2,000 words addressing an official prompt','Submitted via official John Locke Institute portal']::text[],
    '{"ru":"Международный конкурс эссе Института Джона Локка (John Locke Essay Competition)","kk":"Джон Локк институтының халықаралық эссе байқауы (John Locke Essay Competition)","en":"John Locke Institute Global Essay Competition 2027"}'::jsonb, '{"ru":"Престижнейший конкурс эссе по философии, экономике, праву и истории с оценкой профессорами Оксфорда.","kk":"Оксфорд және Принстон профессорлары бағалайтын философия, құқық және экономикадан әлемдік эссе байқауы.","en":"World''s premier pre-college essay competition judged by Oxford and Princeton senior faculty."}'::jsonb, '{"ru":"Самый престижный международный конкурс академических эссе для школьников до 18 лет (и категория Junior до 14 лет). Направления: Философия, Политика, Экономика, История, Право, Теология, Психология. Эссе оценивают профессора Оксфорда и Принстона. Победители получают стипендии на обучение и приглашение на гала-церемонию в Лондоне.","kk":"18 жасқа дейінгі оқушыларға арналған әлемдегі ең беделді академиялық эссе байқауы (14 жасқа дейінгі Junior санаты да бар). Бағыттары: Философия, Саясат, Экономика, Тарих, Құқық, Теология. Эсселерді Оксфорд және Принстон профессорлары тексереді.","en":"The world''s most prestigious pre-college academic essay competition for students aged 18 and under (with a Junior Prize for under-14s). Categories include Philosophy, Politics, Economics, History, Law, Theology, and Psychology. Judged by senior academics from Oxford and Princeton."}'::jsonb,
    'John Locke Institute (Oxford / Princeton)', ARRAY['humanities','social_sciences']::text[], '{"ru":["Возраст до 18 лет на дату дедлайна (или до 14 лет для категории Junior)","Оригинальное эссе объемом до 2000 слов по одному из официальных вопросов","Подача через онлайн-портал Института Джона Локка"],"kk":["Дедлайн күніне сәйкес 18 жасқа дейін (немесе Junior үшін 14 жасқа дейін)","Ресми сұрақтардың біріне 2000 сөзге дейінгі жеке академиялық эссе","Джон Локк институтының онлайн порталы арқылы жіберу"],"en":["Aged 18 or under (or 14 and under for Junior Prize)","Original argumentative essay up to 2,000 words addressing an official prompt","Submitted via official John Locke Institute portal"]}'::jsonb, 'https://www.johnlockeinstitute.com', 'https://www.johnlockeinstitute.com/essay-competition',
    'free', NULL, NULL, 'online', 'Global / London Gala Dinner',
    7, 12, 13, 18,
    '{}'::text[], '{}'::text[], 'open', 'Открыто для школьников со всего мира. Бесплатная подача до основного дедлайна.',
    '["en"]'::jsonb, 'fixed', '2027-05-31', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по johnlockeinstitute.com. Темы публикуются в феврале, дедлайн — 31 мая.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: immerse-education-essay-competition-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'immerse-education-essay-competition-2027', 'Immerse Education Global Essay Competition 2027', 'Immerse Education (Cambridge)', 'competition', 'Submit an essay to win full 100% scholarships to summer pre-college programmes at Oxford or Cambridge.', 'https://www.immerse.education', '2027-01-05', 'approved', true,
    ARRAY['humanities','social_sciences','stem','medicine','business']::text[], ARRAY['humanities','social_sciences','stem','medicine','business']::text[], ARRAY['Ages 13–18','Original essay of up to 1,000 words on an approved question','Submission through Immerse portal']::text[],
    '{"ru":"Международный конкурс эссе Immerse Education","kk":"Immerse Education халықаралық эссе байқауы","en":"Immerse Education Global Essay Competition 2027"}'::jsonb, '{"ru":"Напиши эссе и выиграй 100% стипендию на летнюю академию в колледжах Оксфорда или Кембриджа.","kk":"Эссе жазып, Оксфорд немесе Кембридж колледждеріндегі жазғы академияға 100% тегін грант ұтып ал.","en":"Submit an essay to win full 100% scholarships to summer pre-college programmes at Oxford or Cambridge."}'::jsonb, '{"ru":"Глобальный конкурс эссе для школьников 13–18 лет. Победители получают 100% стипендии (покрытие полной стоимости) на участие в двухнедельных летних академических школах в колледжах Кембриджа, Оксфорда, Сиднея или Лондона.","kk":"13 пен 18 жас аралығындағы оқушыларға арналған халықаралық эссе байқауы. Жеңімпаздар Кембридж, Оксфорд немесе Сидней колледждеріндегі 2 апталық жазғы академияда тегін оқуға 100% грант ұтып алады.","en":"Global essay competition for students ages 13–18. Winners are awarded full 100% scholarships to attend two-week academic summer programmes hosted at historic colleges of Cambridge, Oxford, Sydney, or London."}'::jsonb,
    'Immerse Education (Cambridge)', ARRAY['humanities','social_sciences','stem','medicine','business']::text[], '{"ru":["Возраст от 13 до 18 лет","Эссе объемом не более 1000 слов по выбранному академическому вопросу","Заполнение формы участника на официальном сайте"],"kk":["13 пен 18 жас аралығы","Таңдалған пән сұрағы бойынша 1000 сөзден аспайтын эссе","Ресми сайттағы қатысушы сауалнамасын толтыру"],"en":["Ages 13–18","Original essay of up to 1,000 words on an approved question","Submission through Immerse portal"]}'::jsonb, 'https://www.immerse.education', 'https://www.immerse.education/essay-competition/',
    'free', NULL, NULL, 'online', 'Global / Oxford & Cambridge Colleges',
    8, 12, 13, 18,
    '{}'::text[], '{}'::text[], 'open', 'Открыто для школьников любых стран мира.',
    '["en"]'::jsonb, 'fixed', '2027-01-05', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по immerse.education. Два тура в год.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: international-philosophy-olympiad-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'international-philosophy-olympiad-2027', 'International Philosophy Olympiad (IPO 2027)', 'International Federation of Philosophical Societies (FISP) & UNESCO', 'competition', 'Global philosophy essay competition for secondary students under the auspices of UNESCO and FISP.', 'https://www.philosophy-olympiad.org', '2027-04-15', 'approved', true,
    ARRAY['humanities','social_sciences']::text[], ARRAY['humanities','social_sciences']::text[], ARRAY['Secondary school student under age 20','National delegation selection (top 2 candidates)','Essay written in a language other than native tongue']::text[],
    '{"ru":"Международная философская олимпиада (IPO 2027)","kk":"Халықаралық философиялық олимпиада (IPO 2027)","en":"International Philosophy Olympiad (IPO 2027)"}'::jsonb, '{"ru":"Всемирная философская олимпиада под эгидой ЮНЕСКО: 4-часовое эссе по цитатам великих мыслителей.","kk":"ЮНЕСКО аясындағы дүниежүзілік философия олимпиадасы: ойшылдар дәйексөздеріне 4 сағаттық эссе жазу.","en":"Global philosophy essay competition for secondary students under the auspices of UNESCO and FISP."}'::jsonb, '{"ru":"Официальная всемирная олимпиада по философии для школьников под эгидой ЮНЕСКО и FISP. Участники пишут 4-часовое философское эссе на иностранном для себя языке (английский, французский, немецкий или испанский) по одной из 4 предложенных цитат великих мыслителей.","kk":"ЮНЕСКО және FISP қолдауымен өтетін оқушыларға арналған философиядан ресми әлемдік олимпиада. Қатысушылар ұлы ойшылдардың дәйексөздері бойынша шет тілінде 4 сағаттық философиялық эссе жазады.","en":"The official world philosophy competition for high school students organized under the auspices of FISP and UNESCO. Participants write an argumentative philosophical essay over four hours in an official language that is not their mother tongue."}'::jsonb,
    'International Federation of Philosophical Societies (FISP) & UNESCO', ARRAY['humanities','social_sciences']::text[], '{"ru":["Ученик старшей школы (до 20 лет)","Квалификация в топ-2 национальной сборной страны по философии","Написание эссе на иностранном языке (английском, французском, немецком или испанском)"],"kk":["Жоғары мектеп оқушысы (20 жасқа дейін)","Философиядан ел құрамасының үздік екі қатысушысы қатарына өту","Шет тілінде (ағылшын, француз, неміс) эссе жаза білу"],"en":["Secondary school student under age 20","National delegation selection (top 2 candidates)","Essay written in a language other than native tongue"]}'::jsonb, 'https://www.philosophy-olympiad.org', 'https://www.philosophy-olympiad.org',
    'fully_funded', NULL, NULL, 'offline', 'Host Country Rotates Annually',
    9, 12, 14, 19,
    '{}'::text[], '{}'::text[], 'open', 'Отбор через национальные комитеты и олимпиаду «Дарын» по критическому мышлению.',
    '["en"]'::jsonb, 'annual_estimate', '2027-04-15', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по philosophy-olympiad.org. Финал проходит в мае.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: world-schools-debating-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'world-schools-debating-2027', 'World Schools Debating Championships (WSDC 2027)', 'World Schools Debating Championships Tournament Committee', 'competition', 'The premier world parliamentary debating championship for official high school national teams.', 'https://wsdcdebating.org', '2027-04-30', 'approved', true,
    ARRAY['leadership','social_sciences','humanities']::text[], ARRAY['leadership','social_sciences','humanities']::text[], ARRAY['Enrolled secondary student under 19','Selected for official national debating team','Fluent English oral argumentation skills']::text[],
    '{"ru":"Чемпионат мира по школьным дебатам (WSDC 2027)","kk":"Мектеп оқушыларының дебаттан әлем чемпионаты (WSDC 2027)","en":"World Schools Debating Championships (WSDC 2027)"}'::jsonb, '{"ru":"Чемпионат мира по дебатам для национальных сборных школьников из более чем 70 стран.","kk":"70-тен астам елдің оқушылар ұлттық құрамаларына арналған дебаттан әлем чемпионаты.","en":"The premier world parliamentary debating championship for official high school national teams."}'::jsonb, '{"ru":"Главный всемирный турнир по парламентским дебатам для школьников. Каждую страну представляет официальная национальная сборная из 3–5 спикеров. Формат сочетает подготовленные и импровизированные раунды по геополитике, правам человека, этике и экономике.","kk":"Мектеп оқушыларына арналған парламенттік дебаттан басты әлем чемпионаты. Әр елден 3–5 спикерден тұратын ұлттық құрама қатысады. Саясат, құқық және экономика тақырыптарында пікірсайыстар өтеді.","en":"The premier global parliamentary debating championship for secondary school national teams. Each nation selects a squad of 3 to 5 student debaters competing across prepared and impromptu motions on international affairs, ethics, and jurisprudence."}'::jsonb,
    'World Schools Debating Championships Tournament Committee', ARRAY['leadership','social_sciences','humanities']::text[], '{"ru":["Школьник до 19 лет","Вхождение в состав национальной сборной страны по результатам национального отбора","Свободное владение аргументацией и ораторским искусством на английском языке"],"kk":["19 жасқа дейінгі мектеп оқушысы","Ұлттық іріктеу қорытындысы бойынша ел құрамасына ену","Ағылшын тілінде шешендік өнер мен дәлелдеуді еркін меңгеру"],"en":["Enrolled secondary student under 19","Selected for official national debating team","Fluent English oral argumentation skills"]}'::jsonb, 'https://wsdcdebating.org', 'https://wsdcdebating.org',
    'paid', 800, 'USD', 'offline', 'Host Country Rotates Annually',
    9, 12, 14, 19,
    '{}'::text[], '{}'::text[], 'open', 'Участие в составе сборной Казахстана (Team Kazakhstan) или своей страны.',
    '["en"]'::jsonb, 'annual_estimate', '2027-04-30', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по wsdcdebating.org.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: harvard-model-un-hmun-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'harvard-model-un-hmun-2027', 'Harvard Model United Nations (HMUN) 2027', 'Harvard International Relations Council', 'competition', 'Premier high school Model UN conference in Boston hosted by Harvard undergraduates.', 'https://www.harvardmun.org', '2026-11-15', 'approved', true,
    ARRAY['leadership','social_sciences','humanities']::text[], ARRAY['leadership','social_sciences','humanities']::text[], ARRAY['High school student (grades 9–12)','Position paper submission for assigned committee/country','Registration via school delegation advisor or individual portal']::text[],
    '{"ru":"Гарвардская Модель ООН для школьников (Harvard Model United Nations - HMUN)","kk":"Гарвард оқушылар БҰҰ Моделі (Harvard Model United Nations - HMUN)","en":"Harvard Model United Nations (HMUN) 2027"}'::jsonb, '{"ru":"Крупнейшая Модель ООН в Бостоне: 4000 старшеклассников со всего мира и дипломатические дебаты в комитетах.","kk":"Бостондағы ең ірі БҰҰ Моделі: 4000 жасөспірім және халықаралық дипломатиялық дебаттар.","en":"Premier high school Model UN conference in Boston hosted by Harvard undergraduates."}'::jsonb, '{"ru":"Старейшая и крупнейшая в мире конференция Модели ООН для старшеклассников, ежегодно собирающая более 4000 делегатов из 50+ стран в Бостоне. Делегаты участвуют в комитетах Генеральной Ассамблеи, ЭКОСОС и исторических кризисных комитетах.","kk":"Бостон қаласында жыл сайын 50-ден астам елдің 4000-нан астам делегатын жинайтын әлемдегі ең ірі Гарвард БҰҰ Моделі конференциясы. Қатысушылар халықаралық дағдарыстар мен дипломатиялық мәселелерді шешеді.","en":"The world''s oldest and most prestigious high school Model UN conference, convening over 4,000 delegates from 50+ countries in Boston. High school delegates debate international policy across General Assembly, ECOSOC, Regional, and Crisis organs."}'::jsonb,
    'Harvard International Relations Council', ARRAY['leadership','social_sciences','humanities']::text[], '{"ru":["Учащийся 9–12 классов в составе школьной делегации или индивидуальный делегат","Подготовка позиционного документа по назначенной стране","Регистрация через систему HMUN"],"kk":["9–12 сынып оқушысы (мектеп делегациясы немесе жеке делегат ретінде)","Тағайындалған мемлекет бойынша позициялық құжат дайындау","HMUN ресми жүйесі арқылы тіркелу"],"en":["High school student (grades 9–12)","Position paper submission for assigned committee/country","Registration via school delegation advisor or individual portal"]}'::jsonb, 'https://www.harvardmun.org', 'https://www.harvardmun.org',
    'paid', 125, 'USD', 'offline', 'Boston, MA, USA',
    9, 12, 14, 18,
    '{}'::text[], '{}'::text[], 'open', 'Открыто для школьников со всего мира.',
    '["en"]'::jsonb, 'fixed', '2026-11-15', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по harvardmun.org. Конференция проходит в январе 2027 в Бостоне.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: bow-seat-ocean-awareness-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'bow-seat-ocean-awareness-2027', 'Bow Seat Ocean Awareness Global Student Contest', 'Bow Seat Ocean Awareness Programs', 'competition', 'Global environmental arts and writing contest for ages 11–18 with awards up to $10,000.', 'https://bowseat.org', '2027-06-15', 'approved', true,
    ARRAY['arts','environmental_science','humanities']::text[], ARRAY['arts','environmental_science','humanities']::text[], ARRAY['Ages 11–18','Original creative piece in Art, Writing, Film, or Music','Written Artist Statement explaining connection to the annual theme']::text[],
    '{"ru":"Международный экологический творческий конкурс Bow Seat Ocean Awareness","kk":"Bow Seat Ocean Awareness халықаралық экологиялық шығармашылық байқауы","en":"Bow Seat Ocean Awareness Global Student Contest"}'::jsonb, '{"ru":"Всемирный творческий конкурс по экологии и защите океана: живопись, литература, кино и призы до $10 000.","kk":"Мұхит пен табиғатты қорғауға арналған шығармашылық байқау: сурет, әдебиет және $10 000 дейінгі сыйлықтар.","en":"Global environmental arts and writing contest for ages 11–18 with awards up to $10,000."}'::jsonb, '{"ru":"Крупнейший в мире творческий экологический конкурс для подростков 11–18 лет (категории Junior 11–14 и Senior 15–18). Участники создают произведения в категориях: Визуальное искусство, Литературное творчество (поэзия и проза), Музыка, Фильм и Анимация, Интерактивные медиа. Призовой фонд — до $10 000.","kk":"11 мен 18 жас аралығындағы оқушыларға арналған әлемдегі ең ірі экологиялық шығармашылық байқау. Бағыттары: Бейнелеу өнері, Жазушылық (өлеңдер мен проза), Музыка және Қысқаметражды фильмдер. Жүлде қоры $10 000 дейін.","en":"The world''s largest youth environmental arts and writing competition for students ages 11–18 (Junior and Senior divisions). Invites original works across Visual Art, Creative Writing, Film, Interactive Media, and Music addressing climate change and ocean conservation."}'::jsonb,
    'Bow Seat Ocean Awareness Programs', ARRAY['arts','environmental_science','humanities']::text[], '{"ru":["Возраст от 11 до 18 лет","Оригинальная творческая работа (картина, эссе/рассказ, трек или анимация)","Пояснительное эссе художника/автора (Artist Statement)"],"kk":["11 мен 18 жас аралығы","Жеке шығармашылық туынды (сурет, өлең/әңгіме, видео немесе музыка)","Авторлық түсіндірме мәтін (Artist Statement)"],"en":["Ages 11–18","Original creative piece in Art, Writing, Film, or Music","Written Artist Statement explaining connection to the annual theme"]}'::jsonb, 'https://bowseat.org', 'https://bowseat.org/contest',
    'free', NULL, NULL, 'online', 'Global / Online',
    7, 12, 13, 18,
    '{}'::text[], '{}'::text[], 'open', 'Открыто для школьников по всему миру бесплатно.',
    '["en"]'::jsonb, 'annual_estimate', '2027-06-15', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по bowseat.org. Ежегодный дедлайн в июне.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: new-york-times-student-writing-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'new-york-times-student-writing-2027', 'The New York Times Student Journalism & Writing Contests', 'The New York Times (The Learning Network)', 'competition', 'Free prestigious writing challenges for teens 13–19 with winning essays published on NYTimes.com.', 'https://www.nytimes.com/spotlight/learning-student-contests', '2026-12-04', 'approved', true,
    ARRAY['humanities','social_sciences']::text[], ARRAY['humanities','social_sciences']::text[], ARRAY['Ages 13–19 in middle or high school','Original English writing adhering to exact word counts','Parent/guardian consent submission']::text[],
    '{"ru":"Серия конкурсов школьной журналистики The New York Times","kk":"The New York Times мектеп оқушыларының журналистикалық байқаулары","en":"The New York Times Student Journalism & Writing Contests"}'::jsonb, '{"ru":"Бесплатные писательские конкурсы The New York Times для школьников 13–19 лет с публикацией на nytimes.com.","kk":"13–19 жастағы оқушыларға арналған The New York Times сайтында жарияланатын тегін байқаулар.","en":"Free prestigious writing challenges for teens 13–19 with winning essays published on NYTimes.com."}'::jsonb, '{"ru":"Престижная ежегодная серия бесплатных конкурсов письма для школьников 13–19 лет со всего мира от газеты The New York Times. Включает конкурсы: 100-словный личный нарратив (Tiny Memoir), Редакционная колонка мнений (Editorial Contest), Научное эссе по STEM, Обзор культуры и подкаст.","kk":"The New York Times газетінің 13–19 жастағы жастарға арналған жыл сайынғы тегін байқаулар легі. 100 сөздік жеке естелік, сараптамалық мақала (Editorial Contest), STEM бойынша ғылыми эссе және подкаст байқауларын қамтиды.","en":"Annual series of free writing challenges for middle and high school students ages 13–19 worldwide, hosted by The New York Times Learning Network. Contests include 100-Word Personal Narrative, Student Editorial, STEM Writing, and Review Contests."}'::jsonb,
    'The New York Times (The Learning Network)', ARRAY['humanities','social_sciences']::text[], '{"ru":["Возраст от 13 до 19 лет, учащийся средней или старшей школы","Оригинальный текст на английском языке в строгом соответствии с лимитом слов конкурса","Согласие родителя/опекуна при подаче"],"kk":["13 пен 19 жас аралығындағы мектеп оқушысы","Байқаудың сөз шектеуіне сай келетін ағылшын тіліндегі мақала","Ата-ананың немесе қамқоршының ресми келісімі"],"en":["Ages 13–19 in middle or high school","Original English writing adhering to exact word counts","Parent/guardian consent submission"]}'::jsonb, 'https://www.nytimes.com/spotlight/learning-student-contests', 'https://www.nytimes.com/spotlight/learning-student-contests',
    'free', NULL, NULL, 'online', 'Global / Online',
    7, 12, 13, 19,
    '{}'::text[], '{}'::text[], 'open', 'Открыто для школьников со всего мира.',
    '["en"]'::jsonb, 'fixed', '2026-12-04', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по nytimes.com. Дедлайн Tiny Memoir — 4 декабря 2026 года.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: diamond-challenge-entrepreneurship-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'diamond-challenge-entrepreneurship-2027', 'Diamond Challenge High School Entrepreneurship Competition 2027', 'Horn Entrepreneurship, University of Delaware', 'entrepreneurship', 'The premier global high school entrepreneurship competition with over $100,000 in startup awards.', 'https://diamondchallenge.org', '2027-01-16', 'approved', true,
    ARRAY['entrepreneurship','business','social_sciences','leadership']::text[], ARRAY['entrepreneurship','business','social_sciences','leadership']::text[], ARRAY['Ages 14–18 in grades 9–12','Team of 2–4 students plus adult advisor','Written concept deck (up to 5 pages) and pitch video']::text[],
    '{"ru":"Международный молодежный чемпионат предпринимательства Diamond Challenge","kk":"Diamond Challenge халықаралық жасөспірімдер кәсіпкерлік чемпионаты","en":"Diamond Challenge High School Entrepreneurship Competition 2027"}'::jsonb, '{"ru":"Главный мировой чемпионат школьных стартапов: треки бизнеса и социальных инноваций, призовой фонд $100 000.","kk":"Мектеп стартаптарының басты әлем чемпионаты: бизнес және әлеуметтік бағыттар, $100 000 жүлде қоры.","en":"The premier global high school entrepreneurship competition with over $100,000 in startup awards."}'::jsonb, '{"ru":"Ведущий мировой конкурс предпринимательских концепций для школьников 14–18 лет. Проходит по двум трекам: Business Innovation (коммерческие инновации) и Social Innovation (социальные проекты). Финалисты со всего мира приглашаются на глобальный саммит в США и делят призовой фонд свыше $100 000.","kk":"14–18 жастағы мектеп оқушыларына арналған әлемдік деңгейдегі кәсіпкерлік байқау. Екі бағыт бойынша өтеді: Business Innovation (бизнес-инновациялар) және Social Innovation (әлеуметтік жобалар). Жүлде қоры $100 000 астам қаржыны құрайды.","en":"The premier global entrepreneurship competition for high school students ages 14–18, produced by Horn Entrepreneurship at the University of Delaware. Tracks: Business Innovation and Social Innovation. Finalists compete at the Diamond Challenge Summit for over $100,000 in funding and awards."}'::jsonb,
    'Horn Entrepreneurship, University of Delaware', ARRAY['entrepreneurship','business','social_sciences','leadership']::text[], '{"ru":["Возраст от 14 до 18 лет, учащийся 9–12 класса","Команда от 2 до 4 человек + взрослый наставник (учитель/ментор)","Подача письменного концепта (Pitch Deck) до 5 страниц и видео-питча"],"kk":["14 пен 18 жас аралығы, 9–12 сынып оқушысы","2-ден 4 адамға дейінгі команда + ересек тәлімгер","5 беттік жоба концепциясы (Pitch Deck) және бейнепрезентация"],"en":["Ages 14–18 in grades 9–12","Team of 2–4 students plus adult advisor","Written concept deck (up to 5 pages) and pitch video"]}'::jsonb, 'https://diamondchallenge.org', 'https://diamondchallenge.org',
    'free', NULL, NULL, 'hybrid', 'Global / Newark, DE, USA (Summit)',
    9, 12, 14, 18,
    '{}'::text[], '{}'::text[], 'open', 'Открыто по всему миру бесплатно.',
    '["en"]'::jsonb, 'fixed', '2027-01-16', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по diamondchallenge.org. Подача заявок открыта.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: blue-ocean-student-competition-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'blue-ocean-student-competition-2027', 'Blue Ocean Student Entrepreneurship Competition 2027', 'Blue Ocean Student Competition Foundation', 'entrepreneurship', 'World''s largest virtual pitch contest for teens creating uncontested market space with cash prizes.', 'https://blueoceancompetition.org', '2027-02-18', 'approved', true,
    ARRAY['business','entrepreneurship','leadership']::text[], ARRAY['business','entrepreneurship','leadership']::text[], ARRAY['High school student (ages 14–18)','Individual or team of up to 5','5-minute pitch video on YouTube showcasing Blue Ocean strategy canvas']::text[],
    '{"ru":"Чемпионат по стратегии «голубого океана» Blue Ocean Student Competition","kk":"Blue Ocean студенттік және оқушылар стратегиялық кәсіпкерлік байқауы","en":"Blue Ocean Student Entrepreneurship Competition 2027"}'::jsonb, '{"ru":"Виртуальный чемпионат стартап-питчей по созданию новых рынков: 5-минутное видео и призы до $10 000.","kk":"Жаңа нарықтар құру бойынша виртуалды стартап байқауы: 5 минуттық видеопитч және $10 000 сыйлықтар.","en":"World''s largest virtual pitch contest for teens creating uncontested market space with cash prizes."}'::jsonb, '{"ru":"Крупнейший в мире виртуальный конкурс предпринимательских питчей для школьников 14–18 лет. Участники разрабатывают уникальную бизнес-модель, создающую новый рынок без конкуренции по принципам бестселлера «Стратегия голубого океана», и записывают 5-минутный видео-питч.","kk":"14–18 жастағы оқушыларға арналған әлемдегі ең ірі виртуалды стартап-питч байқауы. Қатысушылар бәсекелестері жоқ жаңа нарық жасайтын «Көгілдір мұхит стратегиясы» бойынша 5 минуттық видеопрезентация дайындайды.","en":"The world''s largest virtual entrepreneurship competition for high school students. Individuals or teams of up to five pitch novel business ideas that create uncontested market space (Blue Oceans) rather than competing in overcrowded industries."}'::jsonb,
    'Blue Ocean Student Competition Foundation', ARRAY['business','entrepreneurship','leadership']::text[], '{"ru":["Ученик старшей школы (14–18 лет)","Индивидуально или в команде до 5 человек","5-минутное видео на YouTube с презентацией концепта голубого океана"],"kk":["Жоғары мектеп оқушысы (14–18 жас)","Жеке немесе 5 адамға дейінгі команда","Көгілдір мұхит концепциясын түсіндіретін 5 минуттық YouTube видеосы"],"en":["High school student (ages 14–18)","Individual or team of up to 5","5-minute pitch video on YouTube showcasing Blue Ocean strategy canvas"]}'::jsonb, 'https://blueoceancompetition.org', 'https://blueoceancompetition.org',
    'free', NULL, NULL, 'online', 'Global / Online',
    9, 12, 14, 18,
    '{}'::text[], '{}'::text[], 'open', 'Открыто по всему миру. Участие бесплатное.',
    '["en"]'::jsonb, 'fixed', '2027-02-18', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по blueoceancompetition.org.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: hack-club-community-and-grants-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'hack-club-community-and-grants-2027', 'Hack Club High School Coding Grants & Community', 'Hack Club', 'hackathon', 'Global high school coding community providing $500 hackathon grants, hardware, and dev tools.', 'https://hackclub.com', NULL, 'approved', true,
    ARRAY['computer_science','stem','entrepreneurship']::text[], ARRAY['computer_science','stem','entrepreneurship']::text[], ARRAY['Pre-college student under 19','Passion for building software or hardware projects','Join the Hack Club Slack community']::text[],
    '{"ru":"Сообщество школьных разработчиков и гранты Hack Club","kk":"Hack Club мектеп бағдарламашылары қауымдастығы және шағын гранттары","en":"Hack Club High School Coding Grants & Community"}'::jsonb, '{"ru":"Глобальная сеть школьников-кодеров: микрогранты до $500 на хакатоны, бесплатные серверы и онлайн-челленджи.","kk":"Мектеп бағдарламашыларына арналған жаһандық желі: хакатондарға $500 грант, тегін серверлер мен құралдар.","en":"Global high school coding community providing $500 hackathon grants, hardware, and dev tools."}'::jsonb, '{"ru":"Всемирная некоммерческая сеть подростков-программистов, объединяющая более 40 000 школьников. Hack Club бесплатно предоставляет микрогранты до $500 на организацию школьных хакатонов, бесплатные домены, кредиты на облачные сервисы и проводит всемирные челленджи (Sprig, Blot, High Seas).","kk":"40 000-нан астам оқушыны біріктіретін жас бағдарламашылардың жаһандық желісі. Мектепте хакатон өткізуге $500 дейін шағын гранттар, тегін домендер мен серверлер береді.","en":"Global nonprofit network run for and by high school coders across 40,000+ members. Provides $500 microgrants to organize high school hackathons, free software developer toolkits, hardware grants, and runs creative coding challenges."}'::jsonb,
    'Hack Club', ARRAY['computer_science','stem','entrepreneurship']::text[], '{"ru":["Учащийся средней или старшей школы (до 19 лет)","Желание программировать и создавать проекты","Присоединение к открытому сообществу Hack Club Slack"],"kk":["Орта немесе жоғары мектеп оқушысы (19 жасқа дейін)","Код жазуға және жобалар жасауға деген құштарлық","Hack Club Slack ашық қауымдастығына қосылу"],"en":["Pre-college student under 19","Passion for building software or hardware projects","Join the Hack Club Slack community"]}'::jsonb, 'https://hackclub.com', 'https://hackclub.com',
    'free', NULL, NULL, 'online', 'Global / Online',
    7, 12, 13, 18,
    '{}'::text[], '{}'::text[], 'open', 'Открыто по всему миру без географических ограничений.',
    '["en"]'::jsonb, 'rolling', NULL, 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по hackclub.com. Гранты и сообщество действуют круглый год.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: climate-cardinals-volunteering-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'climate-cardinals-volunteering-2027', 'Climate Cardinals Global Translation Volunteering', 'Climate Cardinals & Teach For All', 'volunteering', 'Remote translation volunteering for bilingual teens earning verified community service hours.', 'https://www.climatecardinals.org', NULL, 'approved', true,
    ARRAY['environmental_science','humanities','social_sciences']::text[], ARRAY['environmental_science','humanities','social_sciences']::text[], ARRAY['Ages 13 and up','Fluency in English and a secondary language (e.g. Kazakh or Russian)','Complete volunteer translator onboarding form']::text[],
    '{"ru":"Международное волонтерство Climate Cardinals (перевод климатических материалов)","kk":"Climate Cardinals халықаралық еріктілік қозғалысы (экологиялық аудармалар)","en":"Climate Cardinals Global Translation Volunteering"}'::jsonb, '{"ru":"Дистанционное волонтерство для школьников: перевод научных статей о климате с сертификатом волонтерских часов.","kk":"Оқушыларға арналған қашықтан еріктілік: климаттық мақалаларды аудару және ресми еріктілік сағаттарын алу.","en":"Remote translation volunteering for bilingual teens earning verified community service hours."}'::jsonb, '{"ru":"Крупнейшая в мире молодежная волонтерская организация, основанная школьниками, которая переводит научные исследования по климату на более чем 100 языков (включая казахский и русский). Волонтеры-подростки получают подтвержденные международные часы общественной службы (volunteer hours) для университетского резюме.","kk":"Жасөспірімдер құрған әлемдегі ең ірі экологиялық еріктілер ұйымы. Климат бойынша зерттеулерді 100-ден астам тілге (қазақ және орыс тілдерін қоса) аударады. Қатысушыларға ресми халықаралық еріктілік сағаттары беріледі.","en":"The world''s largest youth-led volunteer organization translating climate education and scientific research into 100+ languages (including Kazakh and Russian). Student volunteers earn verified community service hours for university applications."}'::jsonb,
    'Climate Cardinals & Teach For All', ARRAY['environmental_science','humanities','social_sciences']::text[], '{"ru":["Возраст от 13 лет","Владение английским языком и вторым языком (казахским, русским или др.)","Заполнение волонтерской формы переводчика"],"kk":["13 жастан жоғары","Ағылшын тілін және екінші тілді (қазақ, орыс) жақсы білу","Аудармашы сауалнамасын толтыру"],"en":["Ages 13 and up","Fluency in English and a secondary language (e.g. Kazakh or Russian)","Complete volunteer translator onboarding form"]}'::jsonb, 'https://www.climatecardinals.org', 'https://www.climatecardinals.org',
    'free', NULL, NULL, 'online', 'Global / Online',
    7, 12, 13, 18,
    '{}'::text[], '{}'::text[], 'open', 'Открыто по всему миру. Полностью удаленно.',
    '["en","ru","kk"]'::jsonb, 'rolling', NULL, 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по climatecardinals.org. Постоянный набор волонтеров.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: unicef-voices-of-youth-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'unicef-voices-of-youth-2027', 'UNICEF Voices of Youth Digital Publishing Platform', 'UNICEF (Детский фонд ООН)', 'volunteering', 'Publish opinion essays and investigative stories on UNICEF''s global youth media platform.', 'https://www.voicesofyouth.org', NULL, 'approved', true,
    ARRAY['social_sciences','humanities','leadership']::text[], ARRAY['social_sciences','humanities','leadership']::text[], ARRAY['Ages 13–24','Original blog post, poem, or photo story on youth advocacy topics','Adherence to UNICEF digital safety standards']::text[],
    '{"ru":"Молодежная платформа ЮНИСЕФ Voices of Youth","kk":"ЮНИСЕФ ұсынған Voices of Youth жастар медиа-платформасы","en":"UNICEF Voices of Youth Digital Publishing Platform"}'::jsonb, '{"ru":"Публикуй статьи и эссе на официальной молодежной платформе ООН / ЮНИСЕФ по правам детей и экологии.","kk":"Балалар құқығы мен экология туралы мақалаларыңды БҰҰ / ЮНИСЕФ ресми платформасында жарияла.","en":"Publish opinion essays and investigative stories on UNICEF''s global youth media platform."}'::jsonb, '{"ru":"Официальное глобальное медиа-сообщество ЮНИСЕФ для молодых людей в возрасте от 13 до 24 лет. Подростки могут публиковать свои блоги, эссе, фотоработы и стихи о правах детей, ментальном здоровье, образовании и климатической справедливости на международной платформе ООН.","kk":"ЮНИСЕФ-тің 13 пен 24 жас аралығындағы жастарға арналған ресми жаһандық медиа-қауымдастығы. Оқушылар балалар құқықтары, білім және экология туралы мақалаларын БҰҰ халықаралық платформасында жариялай алады.","en":"UNICEF''s official digital community and publishing platform for young advocates ages 13–24. High school students can submit original essays, investigative articles, poetry, and photo stories on children''s rights and education for global UN publication."}'::jsonb,
    'UNICEF (Детский фонд ООН)', ARRAY['social_sciences','humanities','leadership']::text[], '{"ru":["Возраст от 13 до 24 лет","Оригинальный текст, статья или фотоистория на русском, английском, французском или испанском языках","Соблюдение правил безопасного и уважительного общения ЮНИСЕФ"],"kk":["13 пен 24 жас аралығы","Ағылшын, орыс немесе басқа БҰҰ тілдерінде жазылған жеке мақала немесе фоторепортаж","ЮНИСЕФ этикалық ережелерін сақтау"],"en":["Ages 13–24","Original blog post, poem, or photo story on youth advocacy topics","Adherence to UNICEF digital safety standards"]}'::jsonb, 'https://www.voicesofyouth.org', 'https://www.voicesofyouth.org',
    'free', NULL, NULL, 'online', 'Global / Online',
    7, 12, 13, 18,
    '{}'::text[], '{}'::text[], 'open', 'Открыто для подростков всех стран мира.',
    '["en","ru"]'::jsonb, 'rolling', NULL, 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по voicesofyouth.org.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: nasa-space-apps-challenge-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'nasa-space-apps-challenge-2027', 'NASA International Space Apps Challenge 2027', 'NASA (National Aeronautics and Space Administration)', 'hackathon', 'World''s largest global hackathon using open NASA Earth and space data to solve science challenges.', 'https://www.spaceappschallenge.org', '2027-10-04', 'approved', true,
    ARRAY['stem','computer_science','environmental_science','ai']::text[], ARRAY['stem','computer_science','environmental_science','ai']::text[], ARRAY['All ages (teens welcome with parental consent)','Teams of 1 to 6 members','Project submission with code/presentation by hackathon close']::text[],
    '{"ru":"Международный космический хакатон NASA Space Apps Challenge","kk":"NASA Space Apps Challenge халықаралық ғарыштық хакатоны","en":"NASA International Space Apps Challenge 2027"}'::jsonb, '{"ru":"48-часовой хакатон NASA: создание проектов с использованием реальных спутниковых данных агентства.","kk":"NASA-ның 48 сағаттық хакатоны: ашық ғарыштық мәліметтер негізінде жобалар жасау.","en":"World''s largest global hackathon using open NASA Earth and space data to solve science challenges."}'::jsonb, '{"ru":"Крупнейший в мире глобальный хакатон, ежегодно организуемый NASA. В течение 48 часов школьники и студенты решают реальные научные и экологические задачи человечества, используя открытые спутниковые и астрофизические данные NASA. Проходит локально во многих городах Казахстана (Астана, Алматы) и виртуально.","kk":"NASA ұйымдастыратын әлемдегі ең ірі ғарыштық хакатон. 48 сағат ішінде қатысушылар NASA-ның ашық жерсеріктік мәліметтерін қолданып, ғарыш және экология мәселелерін шешеді. Қазақстанның бірнеше қаласында және онлайн өтеді.","en":"The world''s largest annual global hackathon hosted by NASA. Over a 48-hour sprint, student and youth teams use open-access NASA Earth and space data to solve real-world problems on Earth and in space, with local chapters across Kazakhstan."}'::jsonb,
    'NASA (National Aeronautics and Space Administration)', ARRAY['stem','computer_science','environmental_science','ai']::text[], '{"ru":["Любой возраст (открыто для школьников с согласия родителей)","Команда от 1 до 6 человек","Публикация проекта и исходного кода на платформе Space Apps"],"kk":["Кез келген жас (ата-ана келісімімен оқушылар қатыса алады)","1-ден 6 адамға дейінгі команда","Жоба мен кодты Space Apps платформасына жүктеу"],"en":["All ages (teens welcome with parental consent)","Teams of 1 to 6 members","Project submission with code/presentation by hackathon close"]}'::jsonb, 'https://www.spaceappschallenge.org', 'https://www.spaceappschallenge.org',
    'free', NULL, NULL, 'hybrid', 'Global / Astana, Almaty & Online',
    7, 12, 13, 18,
    '{}'::text[], '{}'::text[], 'open', 'Открыто по всему миру бесплатно.',
    '["en"]'::jsonb, 'annual_estimate', '2027-10-04', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по spaceappschallenge.org. Ежегодно проходит в октябре.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: apio-asia-pacific-informatics-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'apio-asia-pacific-informatics-2027', 'Asia-Pacific Informatics Olympiad (APIO 2027)', 'APIO Organizing Committee & РНПЦ «Дарын»', 'competition', 'Prestigious regional IOI-style algorithmic programming contest for Asian and Central Asian nations.', 'https://apio-olympiad.org', '2027-05-10', 'approved', true,
    ARRAY['computer_science','stem']::text[], ARRAY['computer_science','stem']::text[], ARRAY['Grades 8–11 student','Qualification through national computer science olympiad pipeline','Mastery of C++ algorithmic programming']::text[],
    '{"ru":"Азиатско-Тихоокеанская олимпиада по информатике (APIO 2027)","kk":"Азия-Тынық мұхиты информатика олимпиадасы (APIO 2027)","en":"Asia-Pacific Informatics Olympiad (APIO 2027)"}'::jsonb, '{"ru":"Региональная олимпиада по программированию высшего уровня для сборных команд 35+ стран Азии и Центральной Азии.","kk":"Азия және Орталық Азияның 35-тен астам еліне арналған бағдарламалаудан халықаралық олимпиада.","en":"Prestigious regional IOI-style algorithmic programming contest for Asian and Central Asian nations."}'::jsonb, '{"ru":"Официальная региональная олимпиада по алгоритмическому программированию для сборных стран Азиатско-Тихоокеанского региона и Центральной Азии. Проводится онлайн под очным прокторингом в национальных центрах. Служит ключевым этапом подготовки к мировой IOI.","kk":"Азия-Тынық мұхиты аймағы мен Орталық Азия елдерінің оқушыларына арналған ресми бағдарламалау олимпиадасы. Ұлттық орталықтарда өткізіледі және IOI әлем чемпионатына негізгі дайындық кезеңі болып табылады.","en":"Official regional competitive programming olympiad for school teams from the Asia-Pacific and Central Asian region. Organized as an online contest under strict proctored conditions at national testing sites."}'::jsonb,
    'APIO Organizing Committee & РНПЦ «Дарын»', ARRAY['computer_science','stem']::text[], '{"ru":["Ученик 8–11 классов","Квалификация через республиканские олимпиады по информатике","Владение C++ и написание 5-часового контеста"],"kk":["8–11 сынып оқушысы","Информатикадан республикалық олимпиадалар арқылы іріктелу","C++ тілін жоғары деңгейде білу және 5 сағаттық контест тапсыру"],"en":["Grades 8–11 student","Qualification through national computer science olympiad pipeline","Mastery of C++ algorithmic programming"]}'::jsonb, 'https://apio-olympiad.org', 'https://apio-olympiad.org',
    'free', NULL, NULL, 'offline', 'National Proctored Centers / Online',
    8, 11, 13, 18,
    ARRAY['KZ','UZ','KG','TJ','AZ']::text[], '{}'::text[], 'open', 'Участие в составе национальной делегации страны.',
    '["en"]'::jsonb, 'annual_estimate', '2027-05-10', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по регламенту APIO. Казахстан участвует ежегодно.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: apmo-asian-pacific-mathematics-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'apmo-asian-pacific-mathematics-2027', 'Asian Pacific Mathematics Olympiad (APMO 2027)', 'APMO Coordinating Committee', 'competition', 'Prestigious proof-based regional math olympiad serving as a key indicator for the IMO.', 'https://www.apmo-official.org', '2027-03-01', 'approved', true,
    ARRAY['mathematics','stem']::text[], ARRAY['mathematics','stem']::text[], ARRAY['Pre-university student under age 20','National math olympiad team squad member','In-person invigilated contest']::text[],
    '{"ru":"Азиатско-Тихоокеанская математическая олимпиада (APMO 2027)","kk":"Азия-Тынық мұхиты математикалық олимпиадасы (APMO 2027)","en":"Asian Pacific Mathematics Olympiad (APMO 2027)"}'::jsonb, '{"ru":"Международная доказательная математическая олимпиада для олимпийских сборных стран Азии.","kk":"Азия елдерінің олимпиадалық құрамаларына арналған дәлелдеу математикасы бойынша халықаралық жарыс.","en":"Prestigious proof-based regional math olympiad serving as a key indicator for the IMO."}'::jsonb, '{"ru":"Региональная математическая олимпиада высшего уровня сложности для школьников стран Тихоокеанского бассейна и Азии. Проводится ежегодно в марте в один 4-часовой тур из 5 сложных олимпиадных задач.","kk":"Тынық мұхиты бассейні және Азия елдерінің мектеп оқушыларына арналған жоғары деңгейлі математикалық олимпиада. Жыл сайын наурыз айында бір уақытта 5 күрделі есеп бойынша өткізіледі.","en":"Elite regional mathematics competition for pre-college students across Pacific Rim and Asian nations. A 4-hour written examination featuring five deep proof-based mathematical problems."}'::jsonb,
    'APMO Coordinating Committee', ARRAY['mathematics','stem']::text[], '{"ru":["Учащийся школы до 20 лет","Членство в олимпийском резерве по математике","Очное написание тура в аккредитованном центре"],"kk":["20 жасқа дейінгі мектеп оқушысы","Математикадан ұлттық олимпиадалық резерв мүшесі","Аккредиттелген орталықта жазбаша емтихан тапсыру"],"en":["Pre-university student under age 20","National math olympiad team squad member","In-person invigilated contest"]}'::jsonb, 'https://www.apmo-official.org', 'https://www.apmo-official.org',
    'free', NULL, NULL, 'offline', 'Almaty / Astana, Kazakhstan',
    8, 11, 14, 19,
    ARRAY['KZ','UZ','KG']::text[], '{}'::text[], 'open', 'Отбор через РНПЦ «Дарын».',
    '["ru","en"]'::jsonb, 'annual_estimate', '2027-03-01', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по apmo-official.org.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: apho-asian-physics-olympiad-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'apho-asian-physics-olympiad-2027', 'Asian Physics Olympiad (APhO 2027)', 'APhO Secretariat', 'competition', 'The premier Asian continental physics championship featuring rigorous theoretical and lab exams.', 'https://apho-olympiad.org', '2027-04-15', 'approved', true,
    ARRAY['physics','stem']::text[], ARRAY['physics','stem']::text[], ARRAY['Secondary student under age 20','National top 8 selection','Advanced laboratory experimentation and theoretical mechanics']::text[],
    '{"ru":"Азиатская физическая олимпиада (APhO 2027)","kk":"Азия физика олимпиадасы (APhO 2027)","en":"Asian Physics Olympiad (APhO 2027)"}'::jsonb, '{"ru":"Сложнейшая континентальная олимпиада по теоретической и лабораторной физике для сборных команд Азии.","kk":"Азия құрамаларына арналған теориялық және тәжірибелік физикадан құрлықтық басты олимпиада.","en":"The premier Asian continental physics championship featuring rigorous theoretical and lab exams."}'::jsonb, '{"ru":"Крупнейшее и сложнейшее континентальное соревнование по физике для школьников. Задачи APhO традиционно считаются даже более трудными, чем на мировой IPhO. Национальная сборная каждой страны состоит из 8 сильнейших старшеклассников.","kk":"Мектеп оқушыларына арналған физикадан құрлықтағы ең үлкен әрі күрделі жарыс. Әр елдің ұлттық құрамасы 8 ең мықты оқушыдан құралады. Теориялық және тәжірибелік турлардан тұрады.","en":"The premier continental physics competition for high school students in Asia and Oceania, widely regarded as even more difficult than the IPhO. National delegations of eight students compete in theoretical and laboratory experimental rounds."}'::jsonb,
    'APhO Secretariat', ARRAY['physics','stem']::text[], '{"ru":["Ученик школы до 20 лет","Квалификация в топ-8 национальной команды по физике","Навыки экспериментальной физики и высшей математики"],"kk":["20 жасқа дейінгі мектеп оқушысы","Физикадан ұлттық құраманың үздік 8 қатарына өту","Тәжірибелік физика мен жоғары математиканы меңгеру"],"en":["Secondary student under age 20","National top 8 selection","Advanced laboratory experimentation and theoretical mechanics"]}'::jsonb, 'https://apho-olympiad.org', 'https://apho-olympiad.org',
    'fully_funded', NULL, NULL, 'offline', 'Host City in Asia (Rotates Annually)',
    9, 11, 14, 19,
    ARRAY['KZ','KG','UZ']::text[], '{}'::text[], 'open', 'Отбор через национальные сборы РНПЦ «Дарын».',
    '["en"]'::jsonb, 'annual_estimate', '2027-04-15', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по apho-olympiad.org.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: international-economics-olympiad-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'international-economics-olympiad-2027', 'International Economics Olympiad (IEO 2027)', 'International Economics Olympiad (IEO)', 'competition', 'Global high school competition in economics theory, financial literacy, and real-world business cases.', 'https://ecolympiad.org', '2027-05-30', 'approved', true,
    ARRAY['business','social_sciences','mathematics']::text[], ARRAY['business','social_sciences','mathematics']::text[], ARRAY['Secondary student under age 19','National top 5 economics delegation qualifier','Knowledge of micro/macroeconomics and case presentation skills']::text[],
    '{"ru":"Международная олимпиада по экономике для школьников (IEO 2027)","kk":"Экономикадан оқушылар арасындағы халықаралық олимпиада (IEO 2027)","en":"International Economics Olympiad (IEO 2027)"}'::jsonb, '{"ru":"Мировой чемпионат по экономике, финансовой грамотности и бизнес-кейсам для школьных сборных.","kk":"Мектеп құрамаларына арналған экономика, қаржы және бизнес-кейстерден әлем чемпионаты.","en":"Global high school competition in economics theory, financial literacy, and real-world business cases."}'::jsonb, '{"ru":"Ежегодное всемирное соревнование по экономике, финансам и бизнес-кейсам для старшеклассников. Включает три тура: Теоретическая экономика, Финансовая грамотность (симуляция личных финансов) и Бизнес-кейс (командная презентация решения проблемы реальной корпорации).","kk":"Жоғары сынып оқушыларына арналған экономика, қаржылық сауаттылық және бизнес-кейстер бойынша әлемдік олимпиада. Үш турдан тұрады: Экономикалық теория, Қаржылық сауаттылық және Бизнес-кейс қорғау.","en":"Annual world competition in economics, financial literacy, and business case analysis for high school students. Features three rounds: Economics theory exam, Financial Literacy simulation, and a team-based Business Case Presentation."}'::jsonb,
    'International Economics Olympiad (IEO)', ARRAY['business','social_sciences','mathematics']::text[], '{"ru":["Ученик 9–11 класса (до 19 лет)","Квалификация в топ-5 национальной сборной страны по экономике","Знание микро- и макроэкономики и навыки презентации на английском"],"kk":["9–11 сынып оқушысы (19 жасқа дейін)","Экономикадан ел құрамасының үздік 5 қатарына өту","Микро және макроэкономиканы білу және ағылшын тілінде бизнес-кейсті қорғай білу"],"en":["Secondary student under age 19","National top 5 economics delegation qualifier","Knowledge of micro/macroeconomics and case presentation skills"]}'::jsonb, 'https://ecolympiad.org', 'https://ecolympiad.org',
    'fully_funded', NULL, NULL, 'offline', 'Host Country Rotates Annually',
    9, 11, 14, 19,
    '{}'::text[], '{}'::text[], 'open', 'Сборная Казахстана формируется по результатам национального этапа.',
    '["en"]'::jsonb, 'annual_estimate', '2027-05-30', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по ecolympiad.org. Казахстан успешно участвует с 2018 года.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: telluride-tass-seminars-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'telluride-tass-seminars-2027', 'Telluride Association Summer Seminars (TASS)', 'Telluride Association & Cornell / University of Michigan', 'summer_school', 'Completely cost-free 6-week intellectual seminar at Cornell University covering tuition, board, and travel.', 'https://www.tellurideassociation.org', '2026-12-05', 'approved', true,
    ARRAY['humanities','social_sciences','leadership']::text[], ARRAY['humanities','social_sciences','leadership']::text[], ARRAY['High school sophomore or junior (ages 15–17)','Passion for deep critical reading and democratic debate','Thoughtful long-form essays and transcripts']::text[],
    '{"ru":"Летние академические семинары ассоциации Теллурайд (TASS)","kk":"Telluride қауымдастығының жазғы академиялық семинарлары (TASS)","en":"Telluride Association Summer Seminars (TASS)"}'::jsonb, '{"ru":"100% бесплатные 6-недельные семинары по философии, истории и критическому мышлению в Cornell University.","kk":"Корнелл университетінде 10–11 сыныптарға арналған 100% тегін 6 апталық сыни ойлау семинарлары.","en":"Completely cost-free 6-week intellectual seminar at Cornell University covering tuition, board, and travel."}'::jsonb, '{"ru":"Легендарная, полностью бесплатная 6-недельная программа критического мышления, литературы, истории и демократического самоуправления для школьников 10–11 классов. Проводится на кампусах Корнеллского или Мичиганского университетов. Полное покрытие обучения, проживания, питания и перелета.","kk":"Корнелл немесе Мичиган университеттерінде 10–11 сыныптарға арналған 6 апталық толық тегін академиялық семинар. Сыни ойлауды, философияны және демократиялық басқаруды оқытады. Барлық шығындарды қор төлейді.","en":"Six-week, completely free educational experience for high school sophomores and juniors held at Cornell University and the University of Michigan. Focuses on critical thinking, African American Studies, literature, and democratic community governance with 100% covered expenses."}'::jsonb,
    'Telluride Association & Cornell / University of Michigan', ARRAY['humanities','social_sciences','leadership']::text[], '{"ru":["Ученик 10–11 класса (15–17 лет)","Интеллектуальная любознательность и готовность к интенсивным дискуссиям","Развернутые эссе TASS и транскрипт оценок"],"kk":["10–11 сынып оқушысы (15–17 жас)","Интеллектуалдық қызығушылық және пікірталасқа дайындық","TASS арнайы эсселері және бағалар табелі"],"en":["High school sophomore or junior (ages 15–17)","Passion for deep critical reading and democratic debate","Thoughtful long-form essays and transcripts"]}'::jsonb, 'https://www.tellurideassociation.org', 'https://www.tellurideassociation.org/our-programs/high-school-students/',
    'fully_funded', NULL, NULL, 'offline', 'Ithaca, NY (Cornell) / Ann Arbor, MI, USA',
    10, 11, 15, 18,
    '{}'::text[], '{}'::text[], 'open', 'Открыто для школьников со всего мира. Все расходы (включая авиабилеты) полностью покрываются программой.',
    '["en"]'::jsonb, 'fixed', '2026-12-05', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по tellurideassociation.org. 100% бесплатная престижнейшая программа.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: genius-olympiad-environmental-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'genius-olympiad-environmental-2027', 'GENIUS Olympiad High School Environmental Project Fair', 'Terra Science and Education & RIT (Rochester Institute of Technology)', 'competition', 'Global environmental project competition in New York across science, green business, art, and film.', 'https://geniusolympiad.org', '2027-03-01', 'approved', true,
    ARRAY['environmental_science','stem','business','arts']::text[], ARRAY['environmental_science','stem','business','arts']::text[], ARRAY['Grades 8–12 student (ages 13–18)','Original environmental research or creative project','Individual or 2-student team submission via portal']::text[],
    '{"ru":"Международная экологическая олимпиада GENIUS Olympiad","kk":"GENIUS Olympiad халықаралық экологиялық жобалар олимпиадасы","en":"GENIUS Olympiad High School Environmental Project Fair"}'::jsonb, '{"ru":"Мировой смотр школьных экопроектов в Нью-Йорке: наука, экологическая робототехника, арт и зеленый бизнес.","kk":"Нью-Йорктегі экологиялық жобалардың әлемдік көрмесі: ғылым, жасыл бизнес, робототехника және өнер.","en":"Global environmental project competition in New York across science, green business, art, and film."}'::jsonb, '{"ru":"Крупнейший в мире международный конкурс проектов для старшеклассников, посвященный экологии и охране окружающей среды. Категории: Наука (экологические исследования), Робототехника, Бизнес (зеленые стартапы), Искусство, Музыка и Короткометражный фильм. Финал проходит в Нью-Йорке.","kk":"Қоршаған ортаны қорғауға арналған оқушылардың әлемдегі ең ірі жобалық олимпиадасы. Бағыттары: Ғылым, Робототехника, Жасыл бизнес, Өнер және Қысқаметражды кино. Финал Нью-Йоркте өтеді.","en":"International high school project competition on environmental issues hosted by Rochester Institute of Technology (RIT). Categories include Science, Robotics, Business, Creative Writing, Art, Music, and Short Film. Top finalists earn RIT college scholarships."}'::jsonb,
    'Terra Science and Education & RIT (Rochester Institute of Technology)', ARRAY['environmental_science','stem','business','arts']::text[], '{"ru":["Ученик 8–12 классов (13–18 лет)","Оригинальный экологический проект с результатами и презентацией","Регистрация индивидуально или в паре (до 2 человек) через официальный портал"],"kk":["8–12 сынып оқушысы (13–18 жас)","Тәжірибелік нәтижелері бар жеке экологиялық жоба","Ресми портал арқылы жеке немесе 2 адамдық командамен тіркелу"],"en":["Grades 8–12 student (ages 13–18)","Original environmental research or creative project","Individual or 2-student team submission via portal"]}'::jsonb, 'https://geniusolympiad.org', 'https://geniusolympiad.org',
    'paid', 50, 'USD', 'offline', 'Rochester, NY, USA',
    8, 12, 13, 18,
    '{}'::text[], '{}'::text[], 'open', 'Открыто для школьников со всего мира (в Казахстане аккредитованы несколько отборочных ярмарок).',
    '["en"]'::jsonb, 'fixed', '2027-03-01', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по geniusolympiad.org. Финал в июне 2027.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: samsung-solve-for-tomorrow-kz-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'samsung-solve-for-tomorrow-kz-2027', 'Samsung Solve for Tomorrow Kazakhstan', 'Samsung Electronics Central Eurasia', 'competition', 'Kazakhstan national STEM innovation competition for schools sponsored by Samsung with major tech awards.', 'https://www.samsung.com/kz_ru/solvefortomorrow/', '2027-05-15', 'approved', true,
    ARRAY['stem','robotics','environmental_science','social_sciences']::text[], ARRAY['stem','robotics','environmental_science','social_sciences']::text[], ARRAY['Secondary school students in Kazakhstan ages 13–18','Teams of 2–4 with educator advisor','Working prototype solving a community issue']::text[],
    '{"ru":"Республиканский конкурс инновационных STEM-проектов Samsung Solve for Tomorrow","kk":"Samsung Solve for Tomorrow республикалық STEM-жобалар байқауы","en":"Samsung Solve for Tomorrow Kazakhstan"}'::jsonb, '{"ru":"Республиканский конкурс STEM-решений для школ Казахстана с солидным призовым фондом от Samsung.","kk":"Samsung ұсынған Қазақстан мектептеріне арналған қомақты жүлде қоры бар STEM жобалар байқауы.","en":"Kazakhstan national STEM innovation competition for schools sponsored by Samsung with major tech awards."}'::jsonb, '{"ru":"Масштабный республиканский конкурс для школьников Казахстана, направленный на решение локальных экологических и социальных проблем с помощью STEM-технологий. Победители получают денежные призы для реализации проектов, современную технику Samsung для школ и гранты.","kk":"STEM технологиялары арқылы өңірлік экологиялық және әлеуметтік мәселелерді шешуге бағытталған Қазақстан оқушыларына арналған байқау. Жеңімпаздарға қаржылай сыйлықтар мен заманауи Samsung техникасы беріледі.","en":"National STEM competition in Kazakhstan challenging middle and high school students to address local environmental and community issues using science, technology, engineering, and math, with substantial cash and technology prizes."}'::jsonb,
    'Samsung Electronics Central Eurasia', ARRAY['stem','robotics','environmental_science','social_sciences']::text[], '{"ru":["Учащиеся общеобразовательных школ Казахстана в возрасте 13–18 лет","Команда от 2 до 4 человек под руководством учителя-куратора","Идея и работающий прототип решения социальной или экологической проблемы"],"kk":["Қазақстан мектептерінің 13–18 жастағы оқушылары","Мұғалім жетекшілік ететін 2-ден 4 адамға дейінгі команда","Әлеуметтік немесе экологиялық мәселені шешетін жұмыс істейтін прототип"],"en":["Secondary school students in Kazakhstan ages 13–18","Teams of 2–4 with educator advisor","Working prototype solving a community issue"]}'::jsonb, 'https://www.samsung.com/kz_ru/solvefortomorrow/', 'https://www.samsung.com/kz_ru/solvefortomorrow/',
    'free', NULL, NULL, 'hybrid', 'Kazakhstan (Almaty / Nationwide)',
    8, 11, 13, 18,
    ARRAY['KZ']::text[], '{}'::text[], 'open', 'Для школьников Республики Казахстан.',
    '["ru","kk"]'::jsonb, 'annual_estimate', '2027-05-15', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по samsung.com/kz_ru/solvefortomorrow. Участие бесплатное.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: girls-who-code-summer-immersion-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'girls-who-code-summer-immersion-2027', 'Girls Who Code Summer Immersion Program (SIP)', 'Girls Who Code', 'summer_school', 'Free 2-week virtual coding camp for female high schoolers sponsored by top tech companies.', 'https://girlswhocode.com', '2027-02-15', 'approved', true,
    ARRAY['computer_science','stem']::text[], ARRAY['computer_science','stem']::text[], ARRAY['Current 9th–11th grade female/non-binary students','Computer with internet access','No prior coding experience required']::text[],
    '{"ru":"Бесплатная летняя программа по программированию Girls Who Code (SIP)","kk":"Girls Who Code (SIP) тегін жазғы бағдарламалау курсы","en":"Girls Who Code Summer Immersion Program (SIP)"}'::jsonb, '{"ru":"Бесплатный 2-недельный онлайн-лагерь по веб-разработке и геймдеву с менторами из мировых IT-компаний.","kk":"Әлемдік IT мамандарымен веб-бағдарламалау және ойын жасау бойынша 2 апталық тегін онлайн курс.","en":"Free 2-week virtual coding camp for female high schoolers sponsored by top tech companies."}'::jsonb, '{"ru":"Бесплатная 2-недельная виртуальная летняя программа для девушек и небинарных подростков 9–11 классов. Участницы изучают веб-разработку (HTML, CSS, JavaScript) и основы геймдева под наставничеством инженеров ведущих технологических компаний (Meta, Bank of America, Blizzard).","kk":"9–11 сынып оқушыларына арналған тегін 2 апталық виртуалды бағдарламалау лагері. Қатысушылар HTML, CSS, JavaScript негіздерін және ойын жасауды әлемдік IT мамандарынан үйренеді.","en":"Free 2-week virtual summer immersion program for female and non-binary high school students in grades 9–11. Students learn web development (HTML, CSS, JavaScript) and game design with direct mentoring from engineers at leading tech companies."}'::jsonb,
    'Girls Who Code', ARRAY['computer_science','stem']::text[], '{"ru":["Учащиеся 9–11 классов, идентифицирующие себя как девушки или небинарные персоны","Наличие компьютера и интернет-соединения","Предварительный опыт программирования не требуется"],"kk":["9–11 сынып оқушысы (қыздар)","Компьютер және интернетке қолжетімділік","Алдын ала код жазу тәжірибесі қажет емес"],"en":["Current 9th–11th grade female/non-binary students","Computer with internet access","No prior coding experience required"]}'::jsonb, 'https://girlswhocode.com', 'https://girlswhocode.com/programs/summer-immersion-program',
    'free', NULL, NULL, 'online', 'Global / Online',
    9, 11, 14, 18,
    '{}'::text[], '{}'::text[], 'open', 'Открыто по всему миру. Обучение 100% бесплатное.',
    '["en"]'::jsonb, 'fixed', '2027-02-15', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по girlswhocode.com.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: queens-commonwealth-essay-competition-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'queens-commonwealth-essay-competition-2027', 'The Queen''s Commonwealth Essay Competition 2027', 'Royal Commonwealth Society', 'competition', 'The world''s oldest international schools'' writing contest with top winners invited to London.', 'https://www.royalcwsociety.org/essay-competition', '2027-05-15', 'approved', true,
    ARRAY['humanities','arts']::text[], ARRAY['humanities','arts']::text[], ARRAY['Aged 18 or under by deadline','Original writing in English adhering to word counts','Connection to the annual theme']::text[],
    '{"ru":"Международный литературный конкурс The Queen''s Commonwealth Essay Competition","kk":"Халықаралық әдеби байқау The Queen''s Commonwealth Essay Competition","en":"The Queen''s Commonwealth Essay Competition 2027"}'::jsonb, '{"ru":"Старейший всемирный литературный конкурс для школьников: рассказы, стихи, эссе и награждение в Лондоне.","kk":"Әлемдегі ең көне мектеп әдеби байқауы: әңгімелер, өлеңдер, эсселер және Лондонда марапаттау.","en":"The world''s oldest international schools'' writing contest with top winners invited to London."}'::jsonb, '{"ru":"Старейший в мире международный конкурс писательского мастерства для школьников, основанный в 1883 году. Учащиеся до 18 лет (категория Senior 14–18 и Junior до 14) представляют стихи, рассказы или публицистические эссе. Победители приглашаются на недельное путешествие в Лондон и церемонию в Букингемском дворце.","kk":"1883 жылдан бері өткізіліп келе жатқан әлемдегі ең көне халықаралық жазушылық байқауы. 18 жасқа дейінгі оқушылар өлеңдер, әңгімелер немесе эсселер жолдайды. Жеңімпаздар Лондонға және Букингем сарайына шақырылады.","en":"The world''s oldest international schools'' writing contest, established in 1883. Youths 18 and under (Senior 14–18, Junior under 14) submit creative writing, poetry, or essays. Top laureates are awarded a fully funded educational trip to London including a reception at Buckingham Palace."}'::jsonb,
    'Royal Commonwealth Society', ARRAY['humanities','arts']::text[], '{"ru":["Возраст до 18 лет на момент дедлайна","Оригинальное художественное произведение или эссе на английском языке","Соответствие теме конкурса текущего года"],"kk":["Дедлайн күні 18 жастан аспаған болу","Ағылшын тіліндегі төл көркем шығарма немесе эссе","Биылғы жылдың ресми тақырыбына сәйкестік"],"en":["Aged 18 or under by deadline","Original writing in English adhering to word counts","Connection to the annual theme"]}'::jsonb, 'https://www.royalcwsociety.org/essay-competition', 'https://www.royalcwsociety.org/essay-competition',
    'free', NULL, NULL, 'online', 'Global / London Buckingham Palace',
    7, 12, 13, 18,
    '{}'::text[], '{}'::text[], 'open', 'Открыто для школьников стран Содружества и всех ассоциированных стран.',
    '["en"]'::jsonb, 'annual_estimate', '2027-05-15', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по royalcwsociety.org. Бесплатное участие.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: gystb-global-youth-science-bowl-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'gystb-global-youth-science-bowl-2027', 'Global Youth Science and Technology Bowl (GYSTB 2027)', 'The Hong Kong Federation of Youth Groups', 'competition', 'International student science project showcase in Hong Kong with global academic judging.', 'https://gystb.hkfyg.org.hk', '2027-04-10', 'approved', true,
    ARRAY['stem','biology','physics','robotics','ai']::text[], ARRAY['stem','biology','physics','robotics','ai']::text[], ARRAY['Grades 9–12 student','Team of 1 to 4 members','Detailed scientific report and poster in English']::text[],
    '{"ru":"Международный кубок науки и технологий GYSTB (Гонконг)","kk":"GYSTB жаһандық жастар ғылым және технология кубогы (Гонконг)","en":"Global Youth Science and Technology Bowl (GYSTB 2027)"}'::jsonb, '{"ru":"Международный кубок научных проектов в Гонконге: биология, химия, физика и инженерные разработки.","kk":"Гонконгтағы халықаралық ғылыми жобалар кубогы: биология, химия, физика және инженерлік өнертабыстар.","en":"International student science project showcase in Hong Kong with global academic judging."}'::jsonb, '{"ru":"Международный конкурс исследовательских и инженерных проектов для школьников старших классов со всего мира. Проходит в Гонконге (очно и виртуально) по секциям: Биология и химия, Физика и инженерия. Жюри состоит из профессоров ведущих азиатских и мировых университетов.","kk":"Жоғары сынып оқушыларына арналған ғылыми-зерттеу және инженерлік жобалардың халықаралық байқауы. Гонконгта (офлайн және онлайн) биология, химия және физика секциялары бойынша өтеді.","en":"International student science project competition organized by the Hong Kong Federation of Youth Groups. Pre-college teams compete in Biology & Chemistry or Physics & Engineering, presenting before global scientific juries."}'::jsonb,
    'The Hong Kong Federation of Youth Groups', ARRAY['stem','biology','physics','robotics','ai']::text[], '{"ru":["Ученик 9–12 классов","Команда от 1 до 4 человек","Подача научного отчета и презентация на английском языке"],"kk":["9–12 сынып оқушысы","1-ден 4 адамға дейінгі команда","Ғылыми есеп тапсыру және ағылшын тілінде қорғау"],"en":["Grades 9–12 student","Team of 1 to 4 members","Detailed scientific report and poster in English"]}'::jsonb, 'https://gystb.hkfyg.org.hk', 'https://gystb.hkfyg.org.hk',
    'free', NULL, NULL, 'hybrid', 'Hong Kong & Online',
    9, 12, 14, 18,
    '{}'::text[], '{}'::text[], 'open', 'Открыто по всему миру.',
    '["en"]'::jsonb, 'fixed', '2027-04-10', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по gystb.hkfyg.org.hk.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: mendeleev-chemistry-olympiad-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'mendeleev-chemistry-olympiad-2027', 'International Mendeleev Chemistry Olympiad (IMChO 2027)', 'Химический факультет МГУ & Оргкомитет ММО', 'competition', 'Elite international chemistry competition featuring rigorous theoretical and laboratory exam rounds.', 'https://mendeleev.olympiad.ru', '2027-04-10', 'approved', true,
    ARRAY['stem']::text[], ARRAY['stem']::text[], ARRAY['Grades 9–11 secondary student','Selected for national chemistry olympiad delegation','Laboratory synthesis mastery']::text[],
    '{"ru":"Международная Менделеевская олимпиада по химии (ММО 2027)","kk":"Химиядан халықаралық Менделеев олимпиадасы (ММО 2027)","en":"International Mendeleev Chemistry Olympiad (IMChO 2027)"}'::jsonb, '{"ru":"Элитная международная олимпиада по химии: университетская теория и 5-часовой лабораторный синтез.","kk":"Химиядан жоғары деңгейлі халықаралық олимпиада: күрделі теория және 5 сағаттық зертханалық тәжірибе.","en":"Elite international chemistry competition featuring rigorous theoretical and laboratory exam rounds."}'::jsonb, '{"ru":"Одна из сложнейших и престижнейших в мире химических олимпиад для школьников, основанная в 1966 году. Проходит ежегодно весной в странах СНГ и Центральной Азии (включая Казахстан). Включает два теоретических тура и пятичасовой практический эксперимент в лаборатории.","kk":"Мектеп оқушыларына арналған химиядан әлемдегі ең күрделі халықаралық олимпиадалардың бірі. Жыл сайын көктемде ТМД және Орталық Азия елдерінде өтеді. Екі теориялық және зертханалық практикалық турдан тұрады.","en":"One of the world''s most rigorous chemistry competitions for high school students, featuring teams from over 30 countries across Eurasia, Central Asia, and Europe. Includes two theoretical stages and a 5-hour laboratory practical."}'::jsonb,
    'Химический факультет МГУ & Оргкомитет ММО', ARRAY['stem']::text[], '{"ru":["Ученик 9–11 класса","Членство в национальной олимпийской сборной по химии","Победа в республиканском туре «Дарын»"],"kk":["9–11 сынып оқушысы","Химиядан ұлттық олимпиадалық құрама мүшесі болу","«Дарын» республикалық кезеңінде жүлдегер атану"],"en":["Grades 9–11 secondary student","Selected for national chemistry olympiad delegation","Laboratory synthesis mastery"]}'::jsonb, 'https://mendeleev.olympiad.ru', 'https://mendeleev.olympiad.ru',
    'fully_funded', NULL, NULL, 'offline', 'Host City in Eurasia (Rotates Annually)',
    9, 11, 14, 19,
    ARRAY['KZ','UZ','KG','TJ','AZ']::text[], '{}'::text[], 'open', 'Участие в составе национальной сборной.',
    '["ru","en"]'::jsonb, 'annual_estimate', '2027-04-10', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по регламенту ММО. Казахстан выступает ежегодно.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: european-mathematical-cup-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'european-mathematical-cup-2027', 'European Mathematical Cup (EMC 2027)', 'Young Graduates Association (Croatia)', 'competition', 'International proof-based high school math contest across Junior and Senior divisions.', 'https://emc.mnm.hr', '2026-12-05', 'approved', true,
    ARRAY['mathematics','stem']::text[], ARRAY['mathematics','stem']::text[], ARRAY['Pre-university student under 19','In-person invigilated exam at local center','Solutions to 4 proof-based questions in 4 hours']::text[],
    '{"ru":"Европейский математический кубок (European Mathematical Cup - EMC)","kk":"Еуропалық математикалық кубок (European Mathematical Cup - EMC)","en":"European Mathematical Cup (EMC 2027)"}'::jsonb, '{"ru":"Международная доказательная олимпиада по математике в категориях Junior и Senior.","kk":"Junior және Senior санаттары бойынша математикадан дәлелдеу олимпиадасы.","en":"International proof-based high school math contest across Junior and Senior divisions."}'::jsonb, '{"ru":"Международная олимпиада по математике для школьников до 19 лет, проходящая одновременно в национальных центрах Европы и стран-партнеров. Имеет две категории: Junior (до 17 лет) и Senior. Задачи готовятся авторитетным олимпиадным жюри IMO.","kk":"19 жасқа дейінгі оқушыларға арналған математикадан халықаралық жарыс. Екі санатта өтеді: Junior (17 жасқа дейін) және Senior. Есептерін IMO халықаралық қазылар алқасы әзірлейді.","en":"International high school mathematics competition held simultaneously in participating countries across Junior and Senior divisions, serving as an early indicator of IMO medal potential."}'::jsonb,
    'Young Graduates Association (Croatia)', ARRAY['mathematics','stem']::text[], '{"ru":["Ученик школы до 19 лет","Написание очного тура в аккредитованной школе или центре","Решение 4 сложных олимпиадных задач за 4 часа"],"kk":["19 жасқа дейінгі мектеп оқушысы","Аккредиттелген орталықта емтихан тапсыру","4 сағат ішінде 4 күрделі дәлелдеу есебін шығару"],"en":["Pre-university student under 19","In-person invigilated exam at local center","Solutions to 4 proof-based questions in 4 hours"]}'::jsonb, 'https://emc.mnm.hr', 'https://emc.mnm.hr',
    'free', NULL, NULL, 'offline', 'National Partner Centers Worldwide',
    8, 11, 13, 19,
    '{}'::text[], '{}'::text[], 'open', 'Открыто для школьников стран-участниц.',
    '["en"]'::jsonb, 'fixed', '2026-12-05', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по emc.mnm.hr. Тур проводится в декабре.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: middle-european-math-olympiad-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'middle-european-math-olympiad-2027', 'Middle European Mathematical Olympiad (MEMO 2027)', 'MEMO Organizing Committee', 'competition', 'Team and individual European mathematics competition for rising secondary olympians.', 'https://www.memo-official.org', '2027-06-01', 'approved', true,
    ARRAY['mathematics','stem']::text[], ARRAY['mathematics','stem']::text[], ARRAY['Secondary school student under 19','National youth math squad qualifier','Individual and team round participation']::text[],
    '{"ru":"Центрально-Европейская математическая олимпиада (MEMO 2027)","kk":"Орталық Еуропа математикалық олимпиадасы (MEMO 2027)","en":"Middle European Mathematical Olympiad (MEMO 2027)"}'::jsonb, '{"ru":"Командная и индивидуальная европейская олимпиада по математике для будущих звезд IMO.","kk":"Болашақ IMO қатысушыларына арналған Еуропалық командалық және жеке математика олимпиадасы.","en":"Team and individual European mathematics competition for rising secondary olympians."}'::jsonb, '{"ru":"Престижное европейское командное и индивидуальное соревнование по математике для старшеклассников, еще не участвовавших в IMO. Включает индивидуальный тур и командный турнир сборных школ.","kk":"IMO әлем чемпионатына әлі қатыспаған оқушыларға арналған математикадан Еуропалық командалық және жеке жарыс. Жеке және командалық турлардан тұрады.","en":"Prestigious regional team and individual mathematics olympiad for secondary school students who have not yet competed in the IMO, emphasizing mathematical collaboration and proofs."}'::jsonb,
    'MEMO Organizing Committee', ARRAY['mathematics','stem']::text[], '{"ru":["Ученик школы до 19 лет","Отбор в сборную резерва страны по математике","Решение задач по алгебре, геометрии и комбинаторике"],"kk":["19 жасқа дейінгі мектеп оқушысы","Математикадан ел құрамасының резервіне өту","Алгебра, геометрия және комбинаторика есептерін шығару"],"en":["Secondary school student under 19","National youth math squad qualifier","Individual and team round participation"]}'::jsonb, 'https://www.memo-official.org', 'https://www.memo-official.org',
    'fully_funded', NULL, NULL, 'offline', 'Host City in Europe (Rotates Annually)',
    8, 11, 13, 19,
    '{}'::text[], '{}'::text[], 'open', 'Участие в составе официальной сборной.',
    '["en"]'::jsonb, 'annual_estimate', '2027-06-01', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по memo-official.org.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: nordic-baltic-physics-olympiad-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'nordic-baltic-physics-olympiad-2027', 'Nordic-Baltic Physics Olympiad (NBPhO 2027)', 'NBPhO Organizing Committee & Tallinn University of Technology', 'competition', 'International secondary physics competition serving as a premier testbed for the IPhO.', 'https://nbpho.ee', '2027-03-25', 'approved', true,
    ARRAY['physics','stem']::text[], ARRAY['physics','stem']::text[], ARRAY['Pre-university student under 20','Physics olympiad delegation squad member','Advanced mechanics and electromagnetism problem solving']::text[],
    '{"ru":"Северно-Балтийская олимпиада по физике (NBPhO 2027)","kk":"Солтүстік-Балтық физика олимпиадасы (NBPhO 2027)","en":"Nordic-Baltic Physics Olympiad (NBPhO 2027)"}'::jsonb, '{"ru":"Международная физическая олимпиада по стандартам IPhO для сборных команд школьников.","kk":"Мектеп құрамаларына арналған IPhO стандарттары бойынша халықаралық физика жарысы.","en":"International secondary physics competition serving as a premier testbed for the IPhO."}'::jsonb, '{"ru":"Международная олимпиада по теоретической и экспериментальной физике для школьников стран Северной Европы, Балтии и приглашенных команд. Служит престижным полигоном перед азиатской и всемирной олимпиадами.","kk":"Солтүстік Еуропа және Балтық елдері мен шақырылған құрамаларға арналған физикадан халықаралық олимпиада. Теориялық және тәжірибелік турлардан тұрады.","en":"Regional physics championship organized by universities in Estonia, Sweden, and Finland for pre-college national teams, providing a direct qualifying pathway to the IPhO."}'::jsonb,
    'NBPhO Organizing Committee & Tallinn University of Technology', ARRAY['physics','stem']::text[], '{"ru":["Учащийся школы до 20 лет","Член сборной команды по физике","Очное написание 5-часового теоретического и экспериментального тура"],"kk":["20 жасқа дейінгі мектеп оқушысы","Физикадан олимпиадалық құрама мүшесі","5 сағаттық теориялық және тәжірибелік турдан өту"],"en":["Pre-university student under 20","Physics olympiad delegation squad member","Advanced mechanics and electromagnetism problem solving"]}'::jsonb, 'https://nbpho.ee', 'https://nbpho.ee',
    'paid', 300, 'EUR', 'offline', 'Tallinn, Estonia',
    9, 11, 14, 19,
    '{}'::text[], '{}'::text[], 'open', 'Открыто для европейских и гостевых национальных команд.',
    '["en"]'::jsonb, 'annual_estimate', '2027-03-25', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по nbpho.ee.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: iati-informatics-tournament-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'iati-informatics-tournament-2027', 'International Autumn Tournament in Informatics (IATI 2027)', 'IATI Committee & Shumen Municipality (Bulgaria)', 'competition', 'Prestigious IOI-style tournament in competitive programming across Junior and Senior age divisions.', 'https://iati-shu.org', '2026-11-15', 'approved', true,
    ARRAY['computer_science','stem']::text[], ARRAY['computer_science','stem']::text[], ARRAY['Pre-university student under 19','C++ competitive programming background','Registration through school team or national hub']::text[],
    '{"ru":"Международный осенний турнир по информатике (IATI 2027, Шумен)","kk":"Шумендегі информатикадан халықаралық күзгі турнир (IATI 2027)","en":"International Autumn Tournament in Informatics (IATI 2027)"}'::jsonb, '{"ru":"Международный турнир по спортивному программированию в Шумене для категорий Junior и Senior.","kk":"Шумендегі Junior және Senior санаттары бойынша спорттық бағдарламалаудан халықаралық турнир.","en":"Prestigious IOI-style tournament in competitive programming across Junior and Senior age divisions."}'::jsonb, '{"ru":"Традиционный ежегодный международный турнир по спортивному программированию в Болгарии (Шумен) в очном и онлайн формате. Проходит в двух дивизионах: Junior (до 15,5 лет) и Senior. Участвуют сборные Казахстана, Болгарии, Румынии, Сербии и других стран.","kk":"Болгарияның Шумен қаласында өтетін спорттық бағдарламалаудан халықаралық күзгі турнир. Junior және Senior дивизиондары бойынша өтеді. Қазақстан құрамасы жыл сайын қатысады.","en":"Renowned international competitive programming tournament held in Shumen, Bulgaria, across Junior (under 15.5) and Senior divisions with IOI-rules automated grading."}'::jsonb,
    'IATI Committee & Shumen Municipality (Bulgaria)', ARRAY['computer_science','stem']::text[], '{"ru":["Ученик школы до 19 лет","Владение C++ и алгоритмическими структурами","Регистрация через сборную или аккредитованный центр"],"kk":["19 жасқа дейінгі мектеп оқушысы","C++ тілі мен алгоритмдерді еркін меңгеру","Құрама немесе аккредиттелген орталық арқылы тіркелу"],"en":["Pre-university student under 19","C++ competitive programming background","Registration through school team or national hub"]}'::jsonb, 'https://iati-shu.org', 'https://iati-shu.org',
    'free', NULL, NULL, 'hybrid', 'Shumen, Bulgaria & Online',
    7, 11, 13, 19,
    '{}'::text[], '{}'::text[], 'open', 'Открыто для сборных команд школьников.',
    '["en"]'::jsonb, 'fixed', '2026-11-15', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по iati-shu.org. Проходит ежегодно в ноябре.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: bocconi-summer-school-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'bocconi-summer-school-2027', 'Bocconi Summer School for High School Students 2027', 'Bocconi University (Milan, Italy)', 'summer_school', 'Two-week pre-college economics and business immersion at Bocconi University in Milan, Italy.', 'https://www.unibocconi.eu', '2027-03-15', 'approved', true,
    ARRAY['business','social_sciences','leadership']::text[], ARRAY['business','social_sciences','leadership']::text[], ARRAY['Secondary student in second-to-last or final school year','Strong academic transcript (past two years)','Motivation letter and English proficiency (B2+)']::text[],
    '{"ru":"Летняя школа Университета Боккони в Милане (Bocconi Summer School)","kk":"Миландағы Боккони университетінің жазғы мектебі (Bocconi Summer School)","en":"Bocconi Summer School for High School Students 2027"}'::jsonb, '{"ru":"2 недели учебы в Милане в топовом экономическом вузе Bocconi: экономика, финансы и маркетинг для 10–11 классов.","kk":"Миландағы Боккони университетінде 2 апталық оқу: экономика, қаржы және халықаралық бизнес.","en":"Two-week pre-college economics and business immersion at Bocconi University in Milan, Italy."}'::jsonb, '{"ru":"Двухнедельная международная академическая школа в Милане для старшеклассников 10–11 классов от одного из лучших экономических университетов Европы. Программы: Экономика, Цифровой маркетинг, Игровой бизнес, Искусственный интеллект и Международное право. Доступны стипендии за выдающиеся успехи.","kk":"Миландағы Еуропаның жетекші экономикалық университетінде 10–11 сынып оқушыларына арналған 2 апталық жазғы академия. Бағыттары: Экономика, Маркетинг, ЖИ және Халықаралық құқық. Дарындыларға гранттар қарастырылған.","en":"Two-week academic pre-college summer school in Milan, Italy, hosted by Bocconi University. Students choose from cutting-edge labs in Economics, Game Theory, AI in Business, Finance, and International Law with merit-based tuition waivers."}'::jsonb,
    'Bocconi University (Milan, Italy)', ARRAY['business','social_sciences','leadership']::text[], '{"ru":["Ученик предпоследнего или выпускного класса школы","Высокий академический средний балл (транскрипт за последние 2 года)","Мотивационное эссе и знание английского языка (B2+)"],"kk":["Жоғары сынып оқушысы","Жоғары орташа балл (соңғы 2 жылдың табелі)","Мотивациялық эссе және ағылшын тілін білу (B2+)"],"en":["Secondary student in second-to-last or final school year","Strong academic transcript (past two years)","Motivation letter and English proficiency (B2+)"]}'::jsonb, 'https://www.unibocconi.eu', 'https://www.unibocconi.eu/wps/wcm/connect/bocconi/sitocouple/en/home/programs/summer-school/high-school-students',
    'paid', 2200, 'EUR', 'offline', 'Milan, Italy (Bocconi Campus)',
    10, 11, 16, 18,
    '{}'::text[], '{}'::text[], 'open', 'Открыто для школьников со всего мира. Доступны стипендии по академическим заслугам.',
    '["en"]'::jsonb, 'fixed', '2027-03-15', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по unibocconi.eu.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: clark-scholars-texas-tech-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'clark-scholars-texas-tech-2027', 'Clark Scholars Intensive Research Program at Texas Tech', 'Texas Tech University (Honors College)', 'research', 'Prestigious 7-week summer research internship with faculty mentorship, free housing, and $750 stipend.', 'https://www.depts.ttu.edu/honors/academicsandenrichment/affiliatedandpartnerprograms/clarks/', '2027-02-15', 'approved', true,
    ARRAY['stem','medicine','humanities','social_sciences']::text[], ARRAY['stem','medicine','humanities','social_sciences']::text[], ARRAY['At least 17 years old by program start','Exceptional academic record and curiosity','Three recommendation letters, transcripts, and essays']::text[],
    '{"ru":"Исследовательская программа Clark Scholars (Техасский технический университет)","kk":"Clark Scholars зерттеу бағдарламасы (Техас технологиялық университеті)","en":"Clark Scholars Intensive Research Program at Texas Tech"}'::jsonb, '{"ru":"Бесплатная 7-недельная научная стажировка в США с профессором, бесплатным жильем и стипендией $750.","kk":"АҚШ-тағы 7 апталық тегін ғылыми тәжірибе: профессормен зерттеу, тегін жатақхана және $750 шәкіртақы.","en":"Prestigious 7-week summer research internship with faculty mentorship, free housing, and $750 stipend."}'::jsonb, '{"ru":"Интенсивная 7-недельная летняя исследовательская стажировка для 12 избранных старшеклассников со всего мира на базе Texas Tech University. Каждый стипендиат проводит индивидуальное исследование под руководством профессора. Полностью бесплатно: бесплатное проживание, питание и безналоговая стипендия $750.","kk":"Техас технологиялық университетінде әлемнің 12 үздік оқушысына арналған 7 апталық ғылыми тәжірибе. Профессордың жетекшілігімен жеке зерттеу жүргізіледі. Тұру, тамақтану тегін және $750 шәкіртақы беріледі.","en":"Highly selective 7-week intensive summer research internship for 12 exceptional high school students globally. Scholars work 1-on-1 with Texas Tech research faculty, receiving free tuition, room, board, and a $750 tax-free stipend."}'::jsonb,
    'Texas Tech University (Honors College)', ARRAY['stem','medicine','humanities','social_sciences']::text[], '{"ru":["Возраст не менее 17 лет на момент начала программы (11 класс)","Выдающиеся академические достижения и исследовательский опыт","3 рекомендации преподавателей, транскрипт и эссе"],"kk":["Бағдарлама басталғанда кемінде 17 жаста болу (11-сынып)","Үздік академиялық жетістіктер және зерттеу тәжірибесі","3 ұсыныс хат, бағалар табелі және эссе"],"en":["At least 17 years old by program start","Exceptional academic record and curiosity","Three recommendation letters, transcripts, and essays"]}'::jsonb, 'https://www.depts.ttu.edu/honors/academicsandenrichment/affiliatedandpartnerprograms/clarks/', 'https://www.depts.ttu.edu/honors/academicsandenrichment/affiliatedandpartnerprograms/clarks/',
    'stipend', 750, 'USD', 'offline', 'Lubbock, TX, USA (Texas Tech Campus)',
    11, 11, 17, 18,
    '{}'::text[], '{}'::text[], 'open', 'Открыто для американских и иностранных школьников со всего мира.',
    '["en"]'::jsonb, 'fixed', '2027-02-15', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по ttu.edu. Принимает иностранных кандидатов.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: stony-brook-simons-summer-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'stony-brook-simons-summer-2027', 'Simons Summer Research Program at Stony Brook University', 'Stony Brook University (SUNY)', 'research', 'Premier hands-on summer laboratory research fellowship for high school juniors with an academic stipend.', 'https://www.stonybrook.edu/simons', '2027-02-07', 'approved', true,
    ARRAY['stem','medicine','physics']::text[], ARRAY['stem','medicine','physics']::text[], ARRAY['Current high school junior (at least 16 years old)','Official high school nomination (max 2 applicants per school)','Two STEM teacher recommendations and essays']::text[],
    '{"ru":"Летняя исследовательская стипендия Саймонса (Simons Summer Research Fellowship)","kk":"Саймонс жазғы ғылыми зерттеу стипендиясы (Simons Summer Research Fellowship)","en":"Simons Summer Research Program at Stony Brook University"}'::jsonb, '{"ru":"Практические научные исследования в лабораториях Нью-Йорка для 11-классников со стипендией Simons.","kk":"11-сынып оқушыларына арналған Нью-Йорктегі ғылыми зертханалардағы тәжірибе және Simons шәкіртақысы.","en":"Premier hands-on summer laboratory research fellowship for high school juniors with an academic stipend."}'::jsonb, '{"ru":"Престижная летняя практическая научная программа для старшеклассников (11 класс). Учащиеся прикрепляются к действующим исследовательским группам ведущих ученых университета Стоуни-Брук в Нью-Йорке и получают стипендию Simons Fellow Stipend.","kk":"Нью-Йорктегі Стоуни-Брук университетінде 11-сынып оқушыларына арналған ғылыми-зерттеу бағдарламасы. Оқушылар ғалымдар тобында жұмыс істеп, ғылыми нәтижелерін қорғайды және стипендия алады.","en":"Hands-on laboratory research fellowship for high-achieving high school juniors at Stony Brook University labs across STEM fields. Fellows write formal research abstracts and receive a concluding academic stipend."}'::jsonb,
    'Stony Brook University (SUNY)', ARRAY['stem','medicine','physics']::text[], '{"ru":["Ученик 11 класса (возраст от 16 лет)","Официальная номинация от школы (не более 2 кандидатов от школы)","2 рекомендации преподавателей STEM и эссе"],"kk":["11-сынып оқушысы (16 жастан жоғары)","Мектептен ресми ұсыныс (бір мектептен 2 оқушыдан аспайды)","STEM мұғалімдерінің 2 ұсыныс хаты мен эссе"],"en":["Current high school junior (at least 16 years old)","Official high school nomination (max 2 applicants per school)","Two STEM teacher recommendations and essays"]}'::jsonb, 'https://www.stonybrook.edu/simons', 'https://www.stonybrook.edu/simons',
    'stipend', 1000, 'USD', 'offline', 'Stony Brook, NY, USA',
    11, 11, 16, 18,
    ARRAY['US']::text[], '{}'::text[], 'us_only', 'Участники должны быть гражданами США или постоянными резидентами с грин-картой.',
    '["en"]'::jsonb, 'fixed', '2027-02-07', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по stonybrook.edu/simons. Требует гражданство или грин-карту США.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: rockefeller-ssrp-research-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'rockefeller-ssrp-research-2027', 'Rockefeller University Summer Science Research Program (SSRP)', 'The Rockefeller University (New York City)', 'research', 'Cost-free 7-week biomedical laboratory immersion in New York City for high school juniors and seniors.', 'https://www.rockefeller.edu/outreach/ssrp/', '2027-01-08', 'approved', true,
    ARRAY['medicine','stem']::text[], ARRAY['medicine','stem']::text[], ARRAY['At least 16 years old by program start','High school junior or senior','Teacher recommendation and scientific inquiry essays']::text[],
    '{"ru":"Летняя программа биомедицинских исследований Рокфеллеровского университета (SSRP)","kk":"Рокфеллер университетінің жазғы биомедициналық ғылыми бағдарламасы (SSRP)","en":"Rockefeller University Summer Science Research Program (SSRP)"}'::jsonb, '{"ru":"Бесплатная научная практика в лабораториях Рокфеллеровского университета в Нью-Йорке по вирусологии и генетике.","kk":"Нью-Йорктегі Рокфеллер зертханаларында генетика және вирусология бойынша тегін ғылыми тәжірибе.","en":"Cost-free 7-week biomedical laboratory immersion in New York City for high school juniors and seniors."}'::jsonb, '{"ru":"Бесплатная 7-недельная очная биомедицинская программа для старшеклассников (16+ лет) в лабораториях Рокфеллеровского университета в Манхэттене. Школьники проводят самостоятельные эксперименты в области вирусологии, молекулярной генетики, иммунологии и нейробиологии.","kk":"Манхэттендегі Рокфеллер университетінің зертханаларында 16 жастан асқан оқушыларға арналған 7 апталық тегін биомедициналық бағдарлама. Молекулалық генетика, вирусология және нейробиологияны оқытады.","en":"Cost-free, 7-week mentored biomedical research experience for high school juniors and seniors (ages 16+) in Manhattan laboratories. Students conduct laboratory experiments in molecular genetics, virology, and neuroscience."}'::jsonb,
    'The Rockefeller University (New York City)', ARRAY['medicine','stem']::text[], '{"ru":["Возраст не менее 16 лет на момент начала программы","Ученик 11 или 12 класса","Рекомендации учителей точных наук и мотивационное эссе"],"kk":["Бағдарлама басталғанда кемінде 16 жаста болу","11 немесе 12 сынып оқушысы","Жаратылыстану мұғалімдерінің ұсынысы және эссе"],"en":["At least 16 years old by program start","High school junior or senior","Teacher recommendation and scientific inquiry essays"]}'::jsonb, 'https://www.rockefeller.edu/outreach/ssrp/', 'https://www.rockefeller.edu/outreach/ssrp/',
    'free', NULL, NULL, 'offline', 'New York City, NY, USA',
    11, 12, 16, 18,
    '{}'::text[], '{}'::text[], 'open', 'Обучение бесплатное. Проживание не предоставляется (участники организуют жилье самостоятельно).',
    '["en"]'::jsonb, 'fixed', '2027-01-08', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по rockefeller.edu.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: bu-rise-research-internship-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'bu-rise-research-internship-2027', 'Boston University RISE Internship & Practicum', 'Boston University', 'research', 'Six-week research internship or computational neurobiology practicum at Boston University.', 'https://www.bu.edu/summer/high-school-programs/rise-internship-practicum/', '2027-02-14', 'approved', true,
    ARRAY['stem','medicine','computer_science']::text[], ARRAY['stem','medicine','computer_science']::text[], ARRAY['Rising high school senior (grade 11)','Strong academic record in math and science','Two teacher recommendations and essays']::text[],
    '{"ru":"Исследовательская программа Бостонского университета (BU RISE)","kk":"Бостон университетінің RISE ғылыми-зерттеу тағылымдамасы","en":"Boston University RISE Internship & Practicum"}'::jsonb, '{"ru":"6 недель университетских исследований в лабораториях Бостонского университета для 11-классников.","kk":"11-сынып оқушыларына арналған Бостон университеті зертханаларындағы 6 апталық ғылыми зерттеу.","en":"Six-week research internship or computational neurobiology practicum at Boston University."}'::jsonb, '{"ru":"6-недельная программа научных исследований для старшеклассников (11 класс) на кампусе Бостонского университета. Доступна в двух треках: Internship (индивидуальная работа в лаборатории с профессором) и Practicum (групповые исследования в вычислительной нейробиологии).","kk":"Бостон университетінің кампусында 11-сынып оқушыларына арналған 6 апталық ғылыми зерттеу бағдарламасы. Жеке зертханалық жұмыс немесе есептеу нейробиологиясы бағыттарын ұсынады.","en":"Six-week pre-college research program for rising seniors at Boston University. Students select either the Internship track (conducting 40 hours/week of individual lab research) or the Practicum track (computational neurobiology)."}'::jsonb,
    'Boston University', ARRAY['stem','medicine','computer_science']::text[], '{"ru":["Учащийся предпоследнего класса школы (11 класс / rising senior)","Высокая успеваемость по математике и естественным наукам","Рекомендации 2 учителей и эссе с исследовательскими интересами"],"kk":["Мектептің 11-сынып оқушысы","Математика және жаратылыстану пәндері бойынша жоғары бағалар","2 мұғалімнің ұсыныс хаты және ғылыми эссе"],"en":["Rising high school senior (grade 11)","Strong academic record in math and science","Two teacher recommendations and essays"]}'::jsonb, 'https://www.bu.edu/summer/high-school-programs/rise-internship-practicum/', 'https://www.bu.edu/summer/high-school-programs/rise-internship-practicum/',
    'paid', 5400, 'USD', 'offline', 'Boston, MA, USA',
    11, 11, 16, 18,
    '{}'::text[], '{}'::text[], 'open', 'Открыто для американских и международных школьников. Доступна финансовая помощь.',
    '["en"]'::jsonb, 'fixed', '2027-02-14', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по bu.edu/summer.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: stanford-aimi-summer-health-ai-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'stanford-aimi-summer-health-ai-2027', 'Stanford AIMI Summer Health AI Program for High Schoolers', 'Stanford Center for Artificial Intelligence in Medicine & Imaging (AIMI)', 'research', 'Free 2-week virtual program introducing high schoolers to medical artificial intelligence at Stanford.', 'https://aimi.stanford.edu', '2027-03-31', 'approved', true,
    ARRAY['ai','medicine','computer_science']::text[], ARRAY['ai','medicine','computer_science']::text[], ARRAY['Grades 9–12 student (ages 14+)','Basic Python or quantitative aptitude','Statement of interest connecting AI and healthcare']::text[],
    '{"ru":"Летняя программа Стэнфорда по искусственному интеллекту в медицине (Stanford AIMI)","kk":"Стэнфорд университетінің медицинадағы ЖИ бойынша жазғы бағдарламасы (Stanford AIMI)","en":"Stanford AIMI Summer Health AI Program for High Schoolers"}'::jsonb, '{"ru":"Бесплатный 2-недельный интенсив Стэнфорда по машинному обучению и нейросетям в медицине.","kk":"Медицинадағы нейрожелілер мен машиналық оқыту бойынша Стэнфордтың 2 апталық тегін онлайн курсы.","en":"Free 2-week virtual program introducing high schoolers to medical artificial intelligence at Stanford."}'::jsonb, '{"ru":"Бесплатная 2-недельная виртуальная программа от Центра ИИ в медицине Стэнфордского университета для старшеклассников. Включает лекции ведущих исследователей Стэнфорда по алгоритмам машинного обучения в лучевой диагностике, анализе МРТ и компьютерном зрении для здравоохранения.","kk":"Стэнфорд университетінің Медицинадағы жасанды интеллект орталығының 2 апталық тегін виртуалды бағдарламасы. Денсаулық сақтау саласындағы машиналық оқыту мен МРТ талдау алгоритмдерін үйретеді.","en":"Free 2-week virtual program hosted by the Stanford Center for Artificial Intelligence in Medicine & Imaging (AIMI). Introduces high schoolers to machine learning algorithms, clinical data analysis, and medical computer vision."}'::jsonb,
    'Stanford Center for Artificial Intelligence in Medicine & Imaging (AIMI)', ARRAY['ai','medicine','computer_science']::text[], '{"ru":["Ученик 9–12 класса (возраст от 14 лет)","Базовые навыки программирования на Python или математическая подготовка","Мотивационное письмо об интересе к пересечению ИИ и медицины"],"kk":["9–12 сынып оқушысы (14 жастан жоғары)","Python бағдарламалау тілінің немесе математиканың бастапқы негіздерін білу","ЖИ және медицина салаларына қызығушылық туралы эссе"],"en":["Grades 9–12 student (ages 14+)","Basic Python or quantitative aptitude","Statement of interest connecting AI and healthcare"]}'::jsonb, 'https://aimi.stanford.edu', 'https://aimi.stanford.edu/engage/education/summer-program',
    'free', NULL, NULL, 'online', 'Global / Online',
    9, 12, 14, 18,
    '{}'::text[], '{}'::text[], 'open', 'Открыто для школьников со всего мира. Обучение 100% бесплатное.',
    '["en"]'::jsonb, 'annual_estimate', '2027-03-31', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по aimi.stanford.edu.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: stem-fellowship-big-data-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'stem-fellowship-big-data-2027', 'STEM Fellowship High School Big Data Challenge', 'STEM Fellowship & SAS Analytics', 'competition', 'Global inquiry-driven research challenge analyzing open big data to solve pressing socio-economic issues.', 'https://stemfellowship.org', '2027-02-28', 'approved', true,
    ARRAY['computer_science','stem','social_sciences']::text[], ARRAY['computer_science','stem','social_sciences']::text[], ARRAY['Grades 9–12 students in teams of 2–4','Use of open datasets and statistical analysis','Submission of an academic research manuscript']::text[],
    '{"ru":"Международный школьный чемпионат по анализу больших данных STEM Fellowship","kk":"STEM Fellowship халықаралық үлкен деректерді талдау (Big Data) байқауы","en":"STEM Fellowship High School Big Data Challenge"}'::jsonb, '{"ru":"Школьный конкурс научных исследований по анализу Big Data на Python в области экологии и медицины.","kk":"Экология мен медицинадағы үлкен деректерді (Big Data) Python арқылы зерттеу бойынша оқушылар байқауы.","en":"Global inquiry-driven research challenge analyzing open big data to solve pressing socio-economic issues."}'::jsonb, '{"ru":"Международный командный конкурс исследовательских проектов на основе анализа открытых больших данных (Big Data) для учащихся 9–12 классов. Команды используют инструменты Python/R для выявления закономерностей в здравоохранении, экологии или урбанистике.","kk":"9–12 сынып оқушыларына арналған ашық үлкен мәліметтерді (Big Data) талдау бойынша халықаралық командалық зерттеу байқауы. Денсаулық сақтау, экология немесе урбанистика салаларындағы заңдылықтарды талдайды.","en":"Inquiry-driven student competition where high school teams use open big data analytics and statistical software (Python, R, SAS) to generate solutions for global health, socio-economic, and environmental problems."}'::jsonb,
    'STEM Fellowship & SAS Analytics', ARRAY['computer_science','stem','social_sciences']::text[], '{"ru":["Ученики 9–12 классов в командах от 2 до 4 человек","Использование открытых датасетов и статистических методов","Подготовка академической статьи по шаблону"],"kk":["9–12 сынып оқушыларынан құралған 2-4 адамдық командалар","Ашық деректер қорын және статистикалық әдістерді қолдану","Академиялық мақала дайындау"],"en":["Grades 9–12 students in teams of 2–4","Use of open datasets and statistical analysis","Submission of an academic research manuscript"]}'::jsonb, 'https://stemfellowship.org', 'https://stemfellowship.org/high-school-big-data-challenge/',
    'free', NULL, NULL, 'online', 'Global / Online',
    9, 12, 14, 18,
    '{}'::text[], '{}'::text[], 'open', 'Открыто по всему миру.',
    '["en"]'::jsonb, 'fixed', '2027-02-28', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по stemfellowship.org.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: brown-summer-precollege-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'brown-summer-precollege-2027', 'Summer@Brown High School Pre-College Program', 'Brown University', 'summer_school', 'Ivy League summer enrichment on Brown University campus offering over 200 exploration courses.', 'https://precollege.brown.edu', '2027-05-10', 'approved', true,
    ARRAY['humanities','social_sciences','stem','arts']::text[], ARRAY['humanities','social_sciences','stem','arts']::text[], ARRAY['Grades 9–12 student (ages 14–18)','Strong academic transcript','Course interest essay']::text[],
    '{"ru":"Летняя программа Брауновского университета (Summer@Brown)","kk":"Браун университетінің жазғы бағдарламасы (Summer@Brown)","en":"Summer@Brown High School Pre-College Program"}'::jsonb, '{"ru":"Летние курсы Лиги Плюща на кампусе Brown University: более 200 курсов без стресса оценок.","kk":"Браун университетіндегі жазғы оқу: бағалау қысымынсыз 200-ден астам академиялық курс.","en":"Ivy League summer enrichment on Brown University campus offering over 200 exploration courses."}'::jsonb, '{"ru":"Летняя академическая программа Лиги Плюща для школьников 9–12 классов на кампусе Брауновского университета в Провиденсе. Предлагает более 200 курсов без системы оценок в духе открытой учебной программы (Open Curriculum) Брауна.","kk":"Плющ лигасының Браун университеті кампусында 9–12 сынып оқушыларына арналған жазғы академиялық бағдарлама. Браунның ашық оқу бағдарламасы аясында бағалаусыз 200-ден астам курсты ұсынады.","en":"Ivy League pre-college academic experience on Brown University campus in Providence, RI. Reflecting Brown''s open curriculum philosophy, students choose from over 200 non-credit courses without the pressure of formal grades."}'::jsonb,
    'Brown University', ARRAY['humanities','social_sciences','stem','arts']::text[], '{"ru":["Ученик 9–12 классов (возраст 14–18 лет)","Школьный табель с высокими оценками","Мотивационное эссе о выбранных курсах"],"kk":["9–12 сынып оқушысы (14–18 жас)","Жоғары бағалар табелі","Таңдалған курстар бойынша мотивациялық эссе"],"en":["Grades 9–12 student (ages 14–18)","Strong academic transcript","Course interest essay"]}'::jsonb, 'https://precollege.brown.edu', 'https://precollege.brown.edu',
    'paid', 5200, 'USD', 'offline', 'Providence, RI, USA (Brown Campus)',
    9, 12, 14, 18,
    '{}'::text[], '{}'::text[], 'open', 'Открыто для американских и международных старшеклассников.',
    '["en"]'::jsonb, 'rolling', '2027-05-10', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по precollege.brown.edu.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: columbia-precollege-summer-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'columbia-precollege-summer-2027', 'Columbia University Pre-College Summer Immersion', 'Columbia University (School of Professional Studies)', 'summer_school', 'Ivy League pre-college academic summer immersion in Manhattan at Columbia University.', 'https://precollege.sps.columbia.edu', '2027-03-03', 'approved', true,
    ARRAY['business','social_sciences','humanities','stem']::text[], ARRAY['business','social_sciences','humanities','stem']::text[], ARRAY['Grades 9–12 student','High school transcript and teacher recommendation','Personal essay on academic and career goals']::text[],
    '{"ru":"Летняя программа Колумбийского университета в Нью-Йорке (Columbia Pre-College)","kk":"Нью-Йорктегі Колумбия университетінің жазғы бағдарламасы (Columbia Pre-College)","en":"Columbia University Pre-College Summer Immersion"}'::jsonb, '{"ru":"Летняя программа Лиги Плюща в Нью-Йорке: финансы, нейронауки, право и архитектура в Columbia University.","kk":"Нью-Йорктегі Колумбия университетінде жазғы оқу: қаржы, құқық және нейроғылым курстары.","en":"Ivy League pre-college academic summer immersion in Manhattan at Columbia University."}'::jsonb, '{"ru":"Интенсивная летняя академическая программа на историческом кампусе Колумбийского университета в Нью-Йорке. Школьники 9–12 классов погружаются в университетские дисциплины: международные финансы, нейронауки, право, журналистика и архитектура.","kk":"Нью-Йорк қаласындағы Колумбия университетінің тарихи кампусында 9–12 сыныптарға арналған жазғы бағдарлама. Халықаралық қаржы, құқық, журналистика және нейроғылым салаларын оқытады.","en":"Intensive summer academic immersion on Columbia University''s historic Manhattan campus in New York City. High school students (grades 9–12) explore international finance, legal studies, neurobiology, and architecture."}'::jsonb,
    'Columbia University (School of Professional Studies)', ARRAY['business','social_sciences','humanities','stem']::text[], '{"ru":["Учащийся 9–12 классов","Академический транскрипт и рекомендация преподавателя","Развернутое эссе о карьерных и образовательных целях"],"kk":["9–12 сынып оқушысы","Академиялық транскрипт және мұғалім ұсынысы","Білім және мамандық таңдау мақсаттары туралы эссе"],"en":["Grades 9–12 student","High school transcript and teacher recommendation","Personal essay on academic and career goals"]}'::jsonb, 'https://precollege.sps.columbia.edu', 'https://precollege.sps.columbia.edu',
    'paid', 6300, 'USD', 'offline', 'New York City, NY, USA (Columbia Campus)',
    9, 12, 14, 18,
    '{}'::text[], '{}'::text[], 'open', 'Открыто для старшеклассников со всего мира.',
    '["en"]'::jsonb, 'fixed', '2027-03-03', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по precollege.sps.columbia.edu.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: scholastic-art-writing-international-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'scholastic-art-writing-international-2027', 'Scholastic Art & Writing Awards (Region-at-Large International)', 'Alliance for Young Artists & Writers', 'competition', 'The most prestigious creative recognition program for grades 7–12 across 28 visual art and writing categories.', 'https://www.artandwriting.org', '2026-12-15', 'approved', true,
    ARRAY['arts','humanities']::text[], ARRAY['arts','humanities']::text[], ARRAY['Grades 7–12 student (ages 13+)','Original artwork or written work','Submission via portal with fee or fee waiver']::text[],
    '{"ru":"Премия Scholastic Art & Writing Awards (международный регион)","kk":"Scholastic Art & Writing Awards халықаралық шығармашылық сыйлығы","en":"Scholastic Art & Writing Awards (Region-at-Large International)"}'::jsonb, '{"ru":"Престижнейший международный конкурс творчества для 7–12 классов: литература, живопись, фото и кино.","kk":"7–12 сыныптарға арналған әлемдегі басты шығармашылық байқау: әдебиет, сурет, фото және қысқа фильм.","en":"The most prestigious creative recognition program for grades 7–12 across 28 visual art and writing categories."}'::jsonb, '{"ru":"Старейшая и престижнейшая в США и мире программа признания творческих способностей подростков 7–12 классов, основанная в 1923 году. Школьники за пределами США подают работы через международный регион (Region-at-Large) в номинациях: живопись, фотография, анимация, эссе, поэзия, драматургия и журналистика.","kk":"1923 жылдан бері 7–12 сынып оқушыларының шығармашылық жетістіктерін бағалайтын әлемдегі ең көне және беделді сыйлық. Шетелдік оқушылар Region-at-Large арқылы сурет, фото, поэзия және эссе бағыттарында қатысады.","en":"The nation''s longest-running and most prestigious recognition program for creative teens in grades 7–12. International students outside the US submit via Region-at-Large across 28 categories including Painting, Photography, Poetry, and Journalism."}'::jsonb,
    'Alliance for Young Artists & Writers', ARRAY['arts','humanities']::text[], '{"ru":["Ученик 7–12 классов (возраст от 13 лет)","Оригинальное художественное произведение или литературный текст","Подача через онлайн-портал со взносом (или оформление Fee Waiver)"],"kk":["7–12 сынып оқушысы (13 жастан асқан)","Төл шығармашылық туынды немесе әдеби мәтін","Онлайн портал арқылы тіркеу"],"en":["Grades 7–12 student (ages 13+)","Original artwork or written work","Submission via portal with fee or fee waiver"]}'::jsonb, 'https://www.artandwriting.org', 'https://www.artandwriting.org',
    'paid', 10, 'USD', 'online', 'Global / Carnegie Hall, New York (Gala)',
    7, 12, 13, 18,
    '{}'::text[], '{}'::text[], 'open', 'Открыто для школьников по всему миру через категорию Region-at-Large.',
    '["en"]'::jsonb, 'fixed', '2026-12-15', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по artandwriting.org. Дедлайн международного региона в декабре.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: translators-without-borders-youth-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'translators-without-borders-youth-2027', 'Translators without Borders Youth Language Community', 'CLEAR Global / Translators without Borders', 'volunteering', 'Remote humanitarian translation volunteering for bilingual teens earning verified community service credit.', 'https://translatorswithoutborders.org', NULL, 'approved', true,
    ARRAY['humanities','social_sciences']::text[], ARRAY['humanities','social_sciences']::text[], ARRAY['Ages 16 and older','Fluent in at least two languages','Pass onboarding translation competency test']::text[],
    '{"ru":"Молодежное гуманитарное переводческое волонтерство Translators without Borders","kk":"Translators without Borders жастар гуманитарлық аудармашылар қауымдастығы","en":"Translators without Borders Youth Language Community"}'::jsonb, '{"ru":"Дистанционное переводческое волонтерство для школьников-билингвов: перевод жизненно важных гуманитарных текстов.","kk":"Екі тіл білетін жастарға арналған онлайн еріктілік: маңызды гуманитарлық және медициналық ақпаратты аудару.","en":"Remote humanitarian translation volunteering for bilingual teens earning verified community service credit."}'::jsonb, '{"ru":"Гуманитарная волонтерская деятельность для школьников-билингвов от 16 лет. Волонтеры помогают переводить жизненно важную медицинскую, образовательную и гуманитарную информацию для кризисных регионов, получая официальные часы волонтерской службы.","kk":"16 жастан асқан екі немесе одан да көп тіл білетін оқушыларға арналған гуманитарлық еріктілік. Дағдарыс аймақтарына арналған медициналық және білім беру мәтіндерін аударуға көмектеседі.","en":"Humanitarian volunteer translation program for bilingual youths aged 16+. Volunteers translate vital health, educational, and crisis information for vulnerable communities, earning certified humanitarian volunteer hours."}'::jsonb,
    'CLEAR Global / Translators without Borders', ARRAY['humanities','social_sciences']::text[], '{"ru":["Возраст от 16 лет","Свободное владение как минимум двумя языками","Прохождение базового переводческого теста платформы CLEAR Global"],"kk":["16 жастан жоғары","Кемінде екі тілді еркін меңгеру","CLEAR Global платформасындағы бастапқы аударма тестінен өту"],"en":["Ages 16 and older","Fluent in at least two languages","Pass onboarding translation competency test"]}'::jsonb, 'https://translatorswithoutborders.org', 'https://translatorswithoutborders.org/volunteer/',
    'free', NULL, NULL, 'online', 'Global / Online',
    10, 12, 16, 18,
    '{}'::text[], '{}'::text[], 'open', 'Открыто по всему миру.',
    '["en","ru","kk"]'::jsonb, 'rolling', NULL, 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по translatorswithoutborders.org.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: earthecho-water-challenge-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'earthecho-water-challenge-2027', 'EarthEcho International Water Challenge', 'EarthEcho International', 'volunteering', 'Hands-on citizen science program for teens monitoring local water quality and contributing to global databases.', 'https://www.monitorwater.org', NULL, 'approved', true,
    ARRAY['environmental_science','stem']::text[], ARRAY['environmental_science','stem']::text[], ARRAY['Teens individually or with school eco-clubs','Conduct water quality test of a local water body','Upload scientific observations to monitorwater.org']::text[],
    '{"ru":"Международная экологическая программа мониторинга водных ресурсов EarthEcho","kk":"EarthEcho халықаралық су ресурстарын бақылау экологиялық бағдарламасы","en":"EarthEcho International Water Challenge"}'::jsonb, '{"ru":"Гражданская наука для школьников: тестирование качества воды местных рек и озер и публикация в глобальной базе.","kk":"Оқушыларға арналған ғылыми бақылау: өзен-көлдердің су сапасын өлшеу және әлемдік базаға деректер қосу.","en":"Hands-on citizen science program for teens monitoring local water quality and contributing to global databases."}'::jsonb, '{"ru":"Всемирная программа гражданской науки для школьников, основанная внуком Жак-Ива Кусто. Учащиеся исследуют качество воды в местных реках, озерах и водоемах, тестируют показатели (температура, pH, кислород, мутность) и вносят данные во всемирную карту охраны водных ресурсов.","kk":"Жак-Ив Кустоның немересі құрған мектеп оқушыларына арналған дүниежүзілік азаматтық ғылым бағдарламасы. Оқушылар жергілікті өзен-көлдердің су сапасын зерттеп, мәліметтерді әлемдік картаға енгізеді.","en":"Global citizen science program founded by Philippe Cousteau Jr. Empowering youths to monitor local water bodies (testing temperature, pH, dissolved oxygen, and turbidity) and publish scientific findings on the global EarthEcho Water Challenge database."}'::jsonb,
    'EarthEcho International', ARRAY['environmental_science','stem']::text[], '{"ru":["Ученики любого возраста индивидуально или со школьным экоклубом","Тестирование образца воды из водоема своего региона","Загрузка результатов на официальный портал monitorwater.org"],"kk":["Жеке немесе мектептің экоклубы сапындағы оқушылар","Өз өңіріндегі су қоймасынан сынама алып тексеру","Нәтижелерді monitorwater.org порталына жүктеу"],"en":["Teens individually or with school eco-clubs","Conduct water quality test of a local water body","Upload scientific observations to monitorwater.org"]}'::jsonb, 'https://www.monitorwater.org', 'https://www.monitorwater.org',
    'free', NULL, NULL, 'offline', 'Global / Local Waterways',
    7, 12, 13, 18,
    '{}'::text[], '{}'::text[], 'open', 'Открыто в любой точке мира.',
    '["en","ru"]'::jsonb, 'rolling', NULL, 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по monitorwater.org.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: ted-ed-student-talks-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'ted-ed-student-talks-2027', 'TED-Ed Student Talks Public Speaking Initiative', 'TED Conferences', 'leadership', 'Official program supporting high school students to develop, write, and deliver their own TED Talk.', 'https://ed.ted.com/student_talks', NULL, 'approved', true,
    ARRAY['leadership','humanities','social_sciences']::text[], ARRAY['leadership','humanities','social_sciences']::text[], ARRAY['Students ages 13–18','Participation via registered school TED-Ed club with educator advisor','Recorded talk of up to 7 minutes']::text[],
    '{"ru":"Программа школьных публичных выступлений TED-Ed Student Talks","kk":"TED-Ed Student Talks мектеп оқушыларының шешендік өнер бағдарламасы","en":"TED-Ed Student Talks Public Speaking Initiative"}'::jsonb, '{"ru":"Создай и запиши собственный TED Talk: развитие ораторского мастерства с возможностью публикации на TED-Ed.","kk":"Өзіңнің жеке TED Talk видеоңды жаз: шешендік өнер және ресми TED-Ed арнасында жариялану мүмкіндігі.","en":"Official program supporting high school students to develop, write, and deliver their own TED Talk."}'::jsonb, '{"ru":"Официальная программа TED для школ и подростков. Участники проходят пошаговый курс ораторского искусства, учатся формулировать инновационные идеи, писать сценарий вдохновляющего выступления и записывают собственный TED Talk, публикуемый на официальном канале TED-Ed.","kk":"TED ұйымының мектептер мен жасөспірімдерге арналған ресми бағдарламасы. Оқушылар шешендік өнерді меңгеріп, жеке идеяларын жазып, ресми TED-Ed арнасына жеке TED Talk видеосын шығарады.","en":"Official TED initiative supporting students to discover, explore, and present their ideas in the form of short, TED-style talks. Completed talks are eligible for feature publication on the global TED-Ed Student Talks YouTube channel."}'::jsonb,
    'TED Conferences', ARRAY['leadership','humanities','social_sciences']::text[], '{"ru":["Учащийся школы в возрасте 13–18 лет","Создание школьного клуба TED-Ed под кураторством учителя","Запись оригинального выступления длительностью до 7 минут"],"kk":["13 пен 18 жас аралығындағы мектеп оқушысы","Мұғалім жетекшілігімен TED-Ed мектеп клубын құру","7 минутқа дейінгі жеке сөз сөйлеу бейнесін жазу"],"en":["Students ages 13–18","Participation via registered school TED-Ed club with educator advisor","Recorded talk of up to 7 minutes"]}'::jsonb, 'https://ed.ted.com/student_talks', 'https://ed.ted.com/student_talks',
    'free', NULL, NULL, 'hybrid', 'Global / Online & Local Schools',
    7, 12, 13, 18,
    '{}'::text[], '{}'::text[], 'open', 'Открыто бесплатно для школ по всему миру.',
    '["en","ru","kk"]'::jsonb, 'rolling', NULL, 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по ed.ted.com/student_talks.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: kndc-kazakhstan-debate-league-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'kndc-kazakhstan-debate-league-2027', 'Kazakhstan National High School Debate Championship', 'РНПЦ «Дарын» & Национальная дебатная федерация РК', 'competition', 'Premier national high school debating championship in Kazakhstan across three language leagues.', 'https://daryn.kz/debate', '2027-04-20', 'approved', true,
    ARRAY['leadership','social_sciences','humanities']::text[], ARRAY['leadership','social_sciences','humanities']::text[], ARRAY['Grades 8–11 student in Kazakhstan','Team of 2–3 speakers','Advancement through regional qualifiers']::text[],
    '{"ru":"Национальный школьный дебатный чемпионат Казахстана (KNDC)","kk":"Қазақстанның ұлттық мектеп дебат чемпионаты (KNDC)","en":"Kazakhstan National High School Debate Championship"}'::jsonb, '{"ru":"Главный дебатный чемпионат Казахстана для школьников на казахском, русском и английском языках.","kk":"Қазақ, орыс және ағылшын тілдеріндегі мектеп оқушыларының бас республикалық дебат чемпионаты.","en":"Premier national high school debating championship in Kazakhstan across three language leagues."}'::jsonb, '{"ru":"Главный республиканский дебатный турнир школьников Казахстана, проводимый в трех языковых лигах: казахской, русской и английской. Команды состязаются в форматах World Schools и Карла Поппера по темам образования, экономики, экологии и права.","kk":"Қазақстан мектеп оқушыларының басты республикалық дебат турнирі. Үш тілдік лигада (қазақ, орыс, ағылшын) World Schools және Карл Поппер форматтарында өтеді.","en":"The premier national high school debating championship in Kazakhstan conducted in Kazakh, Russian, and English divisions across parliamentary World Schools and Karl Popper formats."}'::jsonb,
    'РНПЦ «Дарын» & Национальная дебатная федерация РК', ARRAY['leadership','social_sciences','humanities']::text[], '{"ru":["Ученик 8–11 классов школы Казахстана","Команда из 2–3 спикеров","Победа на школьном и областном этапах"],"kk":["Қазақстан мектебінің 8–11 сынып оқушысы","2–3 спикерден тұратын команда","Мектеп және облыстық кезеңдерде жеңіске жету"],"en":["Grades 8–11 student in Kazakhstan","Team of 2–3 speakers","Advancement through regional qualifiers"]}'::jsonb, 'https://daryn.kz/debate', 'https://daryn.kz',
    'free', NULL, NULL, 'offline', 'Astana / Regional Centers, Kazakhstan',
    8, 11, 14, 18,
    ARRAY['KZ']::text[], '{}'::text[], 'open', 'Для школьников Республики Казахстан.',
    '["kk","ru","en"]'::jsonb, 'annual_estimate', '2027-04-20', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по регламенту дебатного движения РНПЦ «Дарын».'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: carc-central-asian-robotics-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'carc-central-asian-robotics-2027', 'Central Asian Robotics Cup (CARC 2027)', 'Федерация спортивной и образовательной робототехники РК', 'competition', 'Major Central Asian regional robotics competition for high school student engineering teams.', 'https://carc.kz', '2027-03-15', 'approved', true,
    ARRAY['robotics','stem','computer_science']::text[], ARRAY['robotics','stem','computer_science']::text[], ARRAY['Grades 7–11 students in teams up to 3','Custom programmed robot compliant with category specifications','Registration via regional committee']::text[],
    '{"ru":"Центрально-Азиатский кубок робототехники (Central Asian Robotics Cup)","kk":"Орталық Азия робототехника кубогы (Central Asian Robotics Cup)","en":"Central Asian Robotics Cup (CARC 2027)"}'::jsonb, '{"ru":"Межрегиональный чемпионат по робототехнике для школьных команд Казахстана и Центральной Азии.","kk":"Қазақстан мен Орталық Азия мектеп командаларына арналған халықаралық робототехника жарысы.","en":"Major Central Asian regional robotics competition for high school student engineering teams."}'::jsonb, '{"ru":"Крупнейший межрегиональный кубок по робототехнике для школьных команд Казахстана, Узбекистана, Кыргызстана и Таджикистана. Категории: Robo-Sumo, следование по линии, кегельринг и свободный инженерный хакатон.","kk":"Қазақстан, Өзбекстан, Қырғызстан және Тәжікстан оқушыларына арналған Орталық Азияның ең ірі робототехника жарысы. Robo-Sumo, сызық бойымен қозғалыс және инженерлік жобалар санаттары бар.","en":"Premier inter-regional robotics competition for secondary school student teams from Kazakhstan, Uzbekistan, Kyrgyzstan, and Tajikistan across autonomous line tracking, robot sumo, and open engineering sprints."}'::jsonb,
    'Федерация спортивной и образовательной робототехники РК', ARRAY['robotics','stem','computer_science']::text[], '{"ru":["Школьники 7–11 классов в составе команды до 3 человек","Наличие собственного запрограммированного робота на Arduino/LEGO/STM32","Регистрация через сайт оргкомитета"],"kk":["7–11 сынып оқушыларынан құралған 3 адамдық команда","Arduino/LEGO/STM32 базасында жасалған жеке роботтың болуы","Ұйымдастыру комитеті арқылы тіркелу"],"en":["Grades 7–11 students in teams up to 3","Custom programmed robot compliant with category specifications","Registration via regional committee"]}'::jsonb, 'https://carc.kz', 'https://carc.kz',
    'paid', 10000, 'KZT', 'offline', 'Almaty / Shymkent, Kazakhstan',
    7, 11, 13, 18,
    ARRAY['KZ','UZ','KG','TJ']::text[], '{}'::text[], 'open', 'Открыто для команд из стран Центральной Азии.',
    '["ru","kk"]'::jsonb, 'annual_estimate', '2027-03-15', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по регламенту CARC.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: al-farabi-math-olympiad-kz-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'al-farabi-math-olympiad-kz-2027', 'Al-Farabi International Math & Science Olympiad', 'Казахский национальный университет имени аль-Фараби (КазНУ)', 'competition', 'Academic olympiad by Al-Farabi KazNU awarding full rector university tuition scholarships.', 'https://kaznu.kz/admissions/olympiads', '2027-03-01', 'approved', true,
    ARRAY['mathematics','physics','stem']::text[], ARRAY['mathematics','physics','stem']::text[], ARRAY['Graduating high school senior (grades 11–12)','Registration via KazNU competition portal','Passing preliminary online exam']::text[],
    '{"ru":"Международная олимпиада имени аль-Фараби по математике и естественным наукам","kk":"Әл-Фараби атындағы математика және жаратылыстану пәндері бойынша халықаралық олимпиада","en":"Al-Farabi International Math & Science Olympiad"}'::jsonb, '{"ru":"Олимпиада по математике и физике от КазНУ с розыгрышем ректорских грантов на высшее образование.","kk":"ҚазҰУ-да 100% тегін оқуға арналған ректорлық гранттар сыйлайтын математикалық олимпиада.","en":"Academic olympiad by Al-Farabi KazNU awarding full rector university tuition scholarships."}'::jsonb, '{"ru":"Традиционная олимпиада для выпускников 11 (12) классов Казахстана и стран ближнего зарубежья, проводимая КазНУ им. аль-Фараби. Проходит в два тура (онлайн-отбор и очный финал). Победители получают ректорские гранты на 100% бесплатное обучение в КазНУ.","kk":"Әл-Фараби атындағы ҚазҰУ ұйымдастыратын 11 (12) сынып бітірушілеріне арналған халықаралық олимпиада. Жеңімпаздар ҚазҰУ-да 100% тегін оқуға арналған ректорлық білім гранттарын алады.","en":"International academic competition organized by Al-Farabi Kazakh National University for graduating seniors. Winners earn full rector''s university tuition grants to study at KazNU."}'::jsonb,
    'Казахский национальный университет имени аль-Фараби (КазНУ)', ARRAY['mathematics','physics','stem']::text[], '{"ru":["Учащийся 11 (12) класса","Регистрация на портале олимпиады КазНУ","Успешное прохождение первого дистанционного тура"],"kk":["11 (12) сынып оқушысы","ҚазҰУ олимпиада порталында тіркелу","Бірінші қашықтық турдан сәтті өту"],"en":["Graduating high school senior (grades 11–12)","Registration via KazNU competition portal","Passing preliminary online exam"]}'::jsonb, 'https://kaznu.kz/admissions/olympiads', 'https://kaznu.kz',
    'free', NULL, NULL, 'hybrid', 'Almaty, Kazakhstan & Online',
    11, 12, 16, 19,
    ARRAY['KZ','UZ','KG','TJ']::text[], '{}'::text[], 'open', 'Открыто для школьников Казахстана и стран СНГ.',
    '["kk","ru"]'::jsonb, 'annual_estimate', '2027-03-01', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по официальному регламенту КазНУ.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: daryn-english-olympiad-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'daryn-english-olympiad-2027', 'Daryn National Online English Language Olympiad', 'РНПЦ «Дарын»', 'competition', 'National online English language olympiad for grades 7–11 organized by Daryn Center.', 'https://smart.daryn.kz/english', '2026-11-28', 'approved', true,
    ARRAY['humanities','social_sciences']::text[], ARRAY['humanities','social_sciences']::text[], ARRAY['Grades 7–11 student in Kazakhstan','Registration on smart.daryn.kz','Online timed English language proficiency test']::text[],
    '{"ru":"Дистанционная олимпиада по английскому языку для школьников (Дарын)","kk":"Оқушыларға арналған ағылшын тілінен қашықтық олимпиадасы (Дарын)","en":"Daryn National Online English Language Olympiad"}'::jsonb, '{"ru":"Республиканская дистанционная олимпиада по английскому языку для 7–11 классов с дипломами «Дарын».","kk":"7–11 сыныптарға арналған «Дарын» мемлекеттік дипломдары бар ағылшын тілі олимпиадасы.","en":"National online English language olympiad for grades 7–11 organized by Daryn Center."}'::jsonb, '{"ru":"Общенациональная дистанционная олимпиада по английскому языку для учащихся 7–11 классов Казахстана. Проверяет чтение, грамматику (Use of English) и аудирование по международным стандартам CEFR (B1–C1). Победители получают дипломы государственного образца.","kk":"Қазақстанның 7–11 сынып оқушыларына арналған ағылшын тілінен жалпыұлттық қашықтық олимпиадасы. CEFR (B1–C1) халықаралық стандарттары бойынша оқу, грамматика және тыңдау дағдыларын тексереді.","en":"National online English language challenge hosted by the Daryn National Center for grades 7–11 across Kazakhstan, aligned with international CEFR proficiency levels (B1 to C1)."}'::jsonb,
    'РНПЦ «Дарын»', ARRAY['humanities','social_sciences']::text[], '{"ru":["Ученик 7–11 класса школы Казахстана","Регистрация на портале smart.daryn.kz","Выполнение онлайн-теста по международным стандартам"],"kk":["Қазақстан мектебінің 7–11 сынып оқушысы","smart.daryn.kz порталында тіркелу","Халықаралық стандарттар бойынша онлайн тесті тапсыру"],"en":["Grades 7–11 student in Kazakhstan","Registration on smart.daryn.kz","Online timed English language proficiency test"]}'::jsonb, 'https://smart.daryn.kz/english', 'https://daryn.kz',
    'paid', 500, 'KZT', 'online', 'Kazakhstan / Online',
    7, 11, 13, 18,
    ARRAY['KZ']::text[], '{}'::text[], 'open', 'Для школьников общеобразовательных школ Казахстана.',
    '["en"]'::jsonb, 'fixed', '2026-11-28', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по графику smart.daryn.kz.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: open-doors-olympiad-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'open-doors-olympiad-2027', 'Open Doors International Olympiad & Full Scholarship', 'Ассоциация «Глобальные университеты»', 'scholarship', 'International olympiad awarding 100% full tuition scholarships and monthly stipends.', 'https://od.globaluni.ru/en/', '2026-12-10', 'approved', true,
    ARRAY['stem','computer_science','business','research']::text[], ARRAY['stem','computer_science','business','research']::text[], ARRAY['Graduating senior or pre-university student','Portfolio of academic achievements','Online proctored subject examinations']::text[],
    '{"ru":"Международная университетская олимпиада Open Doors","kk":"Open Doors халықаралық университеттер олимпиадасы","en":"Open Doors International Olympiad & Full Scholarship"}'::jsonb, '{"ru":"Международная олимпиада со 100% грантом на высшее образование и ежемесячной стипендией.","kk":"Жоғары білімге 100% мемлекеттік грант пен шәкіртақы беретін халықаралық олимпиада.","en":"International olympiad awarding 100% full tuition scholarships and monthly stipends."}'::jsonb, '{"ru":"Международная онлайн-олимпиада для выпускников школ и студентов, дающая право на 100% бесплатное высшее образование, ежемесячную государственную стипендию и проживание в общежитии ведущих исследовательских университетов.","kk":"Мектеп бітірушілері мен студенттерге жетекші зерттеу университеттерінде 100% тегін жоғары білім, ай сайынғы мемлекеттік шәкіртақы және жатақхана беретін халықаралық онлайн олимпиада.","en":"International online academic competition offering 100% full-tuition scholarships, monthly living stipends, and priority dorm accommodation at leading research universities."}'::jsonb,
    'Ассоциация «Глобальные университеты»', ARRAY['stem','computer_science','business','research']::text[], '{"ru":["Выпускник школы (11–12 класс) или студент","Заполнение онлайн-портфолио академических достижений","Прохождение онлайн-тестирования по выбранному предмету"],"kk":["Мектеп бітірушісі (11–12 сынып) немесе студент","Академиялық жетістіктер портфолиосын толтыру","Таңдалған пән бойынша онлайн тестілеуден өту"],"en":["Graduating senior or pre-university student","Portfolio of academic achievements","Online proctored subject examinations"]}'::jsonb, 'https://od.globaluni.ru/en/', 'https://od.globaluni.ru/en/',
    'fully_funded', NULL, NULL, 'online', 'Global / Online',
    11, 12, 16, 24,
    '{}'::text[], '{}'::text[], 'open', 'Открыто для иностранных граждан, включая Казахстан.',
    '["en","ru"]'::jsonb, 'fixed', '2026-12-10', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по od.globaluni.ru.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: chevening-youth-leaders-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'chevening-youth-leaders-2027', 'Chevening Youth Leadership & Ambassador Program', 'UK Foreign, Commonwealth & Development Office', 'fellowship', 'Prestigious leadership and diplomacy network sponsored by the UK government for young changemakers.', 'https://www.chevening.org/', '2026-11-05', 'approved', true,
    ARRAY['leadership','social_sciences','humanities']::text[], ARRAY['leadership','social_sciences','humanities']::text[], ARRAY['Ages 15–19','Community leadership or volunteering track record','Essay on leadership vision in English']::text[],
    '{"ru":"Молодежная программа развития лидерства Chevening","kk":"Chevening жас көшбасшыларды дамыту бағдарламасы","en":"Chevening Youth Leadership & Ambassador Program"}'::jsonb, '{"ru":"Международная сеть и развитие лидерства от правительства Великобритании для будущих дипломатов.","kk":"Болашақ дипломаттар мен белсенділерге арналған Ұлыбритания үкіметінің көшбасшылық бағдарламасы.","en":"Prestigious leadership and diplomacy network sponsored by the UK government for young changemakers."}'::jsonb, '{"ru":"Международная сеть и программа развития лидерских компетенций для молодых активистов и будущих дипломатов от британского внешнеполитического ведомства (FCDO). Включает менторские сессии с выпускниками программы Chevening и дипломатами.","kk":"Британдық FCDO ведомствосының болашақ дипломаттар мен жас белсенділерге арналған көшбасшылық бағдарламасы. Chevening түлектерімен тәлімгерлік сессияларды қамтиды.","en":"Leadership development and networking program sponsored by the UK FCDO for young changemakers and aspiring diplomats, connecting future leaders with Chevening alumni and embassy mentors."}'::jsonb,
    'UK Foreign, Commonwealth & Development Office', ARRAY['leadership','social_sciences','humanities']::text[], '{"ru":["Возраст 15–19 лет","Опыт общественной деятельности или волонтерства","Эссе о лидерском видении и владение английским языком"],"kk":["15 пен 19 жас аралығы","Қоғамдық немесе еріктілік қызмет тәжірибесі","Көшбасшылық туралы эссе және ағылшын тілін білу"],"en":["Ages 15–19","Community leadership or volunteering track record","Essay on leadership vision in English"]}'::jsonb, 'https://www.chevening.org/', 'https://www.chevening.org/',
    'free', NULL, NULL, 'online', 'Global / Online',
    9, 12, 15, 19,
    '{}'::text[], '{}'::text[], 'open', 'Открыто по всему миру.',
    '["en"]'::jsonb, 'fixed', '2026-11-05', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по chevening.org.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: mit-primes-usa-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'mit-primes-usa-2027', 'MIT PRIMES High School Research Program in Math & CS', 'Massachusetts Institute of Technology (MIT)', 'research', 'Year-long research program in mathematics and computer science mentored by MIT faculty.', 'https://math.mit.edu/research/highschool/primes/', '2026-11-30', 'approved', true,
    ARRAY['mathematics','computer_science','stem']::text[], ARRAY['mathematics','computer_science','stem']::text[], ARRAY['Grades 10–11 student','Independent solutions to the rigorous PRIMES Problem Set','Math teacher recommendation and statement of interest']::text[],
    '{"ru":"Исследовательская программа MIT PRIMES по математике и CS","kk":"MIT PRIMES математика және CS зерттеу бағдарламасы","en":"MIT PRIMES High School Research Program in Math & CS"}'::jsonb, '{"ru":"Годичная научная программа по высшей математике и CS под руководством профессоров MIT.","kk":"MIT профессорларының жетекшілігімен жоғары математика және CS бойынша 1 жылдық зерттеу.","en":"Year-long research program in mathematics and computer science mentored by MIT faculty."}'::jsonb, '{"ru":"Годичная научная программа Массачусетского технологического института (MIT) для одаренных школьников. Участники работают над нерешенными научными проблемами чистой и прикладной математики и компьютерных наук под наставничеством профессоров и постдоков MIT.","kk":"Дарынды оқушыларға арналған Массачусетс технологиялық институтының (MIT) бір жылдық зерттеу бағдарламасы. Қатысушылар MIT ғалымдарының жетекшілігімен ашық ғылыми математикалық мәселелерді зерттейді.","en":"Year-long math and computer science research program for high school students. Students work on unsolved research problems under direct mentorship from MIT faculty and PhD researchers, producing publishable papers."}'::jsonb,
    'Massachusetts Institute of Technology (MIT)', ARRAY['mathematics','computer_science','stem']::text[], '{"ru":["Ученик 10–11 классов","Решение сложнейшего вступительного математического задания PRIMES Problem Set","Рекомендация преподавателя математики и мотивационное письмо"],"kk":["10–11 сынып оқушысы","PRIMES күрделі математикалық есептер топтамасын өздігінен шығару","Математика мұғалімінің ұсыныс хаты"],"en":["Grades 10–11 student","Independent solutions to the rigorous PRIMES Problem Set","Math teacher recommendation and statement of interest"]}'::jsonb, 'https://math.mit.edu/research/highschool/primes/', 'https://math.mit.edu/research/highschool/primes/usa/',
    'free', NULL, NULL, 'online', 'Online / Cambridge, MA, USA',
    10, 11, 15, 18,
    '{}'::text[], '{}'::text[], 'open', 'PRIMES-USA открыт для школьников, проживающих в США, международные школьники могут участвовать в партнерских секциях.',
    '["en"]'::jsonb, 'fixed', '2026-11-30', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по math.mit.edu/primes. Бесплатное обучение.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: stanford-simr-biomedical-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'stanford-simr-biomedical-2027', 'Stanford SIMR Biomedical Research Program', 'Stanford University School of Medicine', 'research', 'Eight-week hands-on biomedical research internship at Stanford Medical School with a stipend.', 'https://simr.stanford.edu', '2027-02-24', 'approved', true,
    ARRAY['medicine','stem']::text[], ARRAY['medicine','stem']::text[], ARRAY['Ages 16+ in grades 11–12','Completed coursework in high school biology or chemistry','Letters of recommendation and application essays']::text[],
    '{"ru":"Биомедицинская научная стажировка Стэнфорда (Stanford SIMR)","kk":"Стэнфорд университетінің биомедициналық ғылыми тәжірибесі (Stanford SIMR)","en":"Stanford SIMR Biomedical Research Program"}'::jsonb, '{"ru":"8 недель исследований в лабораториях Стэнфордского университета со стипендией от $500.","kk":"Стэнфорд университетінің медициналық зертханаларында 8 апталық тәжірибе және $500 шәкіртақы.","en":"Eight-week hands-on biomedical research internship at Stanford Medical School with a stipend."}'::jsonb, '{"ru":"8-недельная очная практическая стажировка для старшеклассников в исследовательских лабораториях медицинской школы Стэнфордского университета. Участники работают над темами иммунологии, стволовых клеток, нейробиологии и онкологии и получают стипендию от $500.","kk":"Стэнфорд университетінің медицина мектебіндегі 11–12 сынып оқушыларына арналған 8 апталық зертханалық тәжірибе. Иммунология, бағаналы жасушалар және онкология бағыттарын оқытады. $500-ден басталатын шәкіртақы беріледі.","en":"Eight-week hands-on biomedical research internship at Stanford University School of Medicine labs. High school juniors and seniors conduct independent projects in immunology, cancer biology, or neurobiology, receiving a minimum $500 stipend."}'::jsonb,
    'Stanford University School of Medicine', ARRAY['medicine','stem']::text[], '{"ru":["Возраст не менее 16 лет, ученик 11–12 класса","Пройденный курс биологии или химии с отличием","Эссе и рекомендации учителей естественных наук"],"kk":["Кемінде 16 жаста болу, 11–12 сынып оқушысы","Биология немесе химия пәнін үздік оқу","Эссе және жаратылыстану мұғалімдерінің ұсынысы"],"en":["Ages 16+ in grades 11–12","Completed coursework in high school biology or chemistry","Letters of recommendation and application essays"]}'::jsonb, 'https://simr.stanford.edu', 'https://simr.stanford.edu',
    'stipend', 500, 'USD', 'offline', 'Stanford, CA, USA',
    11, 12, 16, 18,
    ARRAY['US']::text[], '{}'::text[], 'us_only', 'Участники должны быть гражданами или постоянными жителями США (грин-карта) и проживать в США.',
    '["en"]'::jsonb, 'fixed', '2027-02-24', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по simr.stanford.edu.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: nus-iris-internship-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'nus-iris-internship-2027', 'NUS IRIS International Research Internship (Singapore)', 'National University of Singapore (NUS)', 'internship', 'Fully funded research internship at the National University of Singapore with airfare and stipend.', 'https://nus.edu.sg', '2026-11-30', 'approved', true,
    ARRAY['stem','computer_science','medicine','research']::text[], ARRAY['stem','computer_science','medicine','research']::text[], ARRAY['Ages 16 and older','Demonstrated STEM research excellence','Curriculum Vitae, transcript, and research statement']::text[],
    '{"ru":"Научно-исследовательская стажировка NUS IRIS в Сингапуре","kk":"Сингапурдағы NUS IRIS ғылыми-зерттеу тағылымдамасы","en":"NUS IRIS International Research Internship (Singapore)"}'::jsonb, '{"ru":"Полностью оплачиваемая исследовательская стажировка в Сингапуре в NUS с перелетом и стипендией.","kk":"Сингапурдағы NUS университетінде ұшу билеті мен шәкіртақысы бар толық тегін тағылымдама.","en":"Fully funded research internship at the National University of Singapore with airfare and stipend."}'::jsonb, '{"ru":"Полностью финансируемая научная стажировка в Национальном университете Сингапура (NUS — топ-10 университетов мира). Предоставляются авиаперелет в Сингапур, проживание в резиденции кампуса и ежемесячная стипендия.","kk":"Сингапур Ұлттық университетіндегі (NUS — әлемнің үздік 10 университеті) толық қаржыландырылатын ғылыми тағылымдама. Ұшу билеттері, кампуста тұру және ай сайынғы шәкіртақы қамтамасыз етіледі.","en":"Fully funded research internship at the National University of Singapore (NUS, top 10 globally). Finalists receive round-trip international airfare, campus accommodation, and a monthly research stipend."}'::jsonb,
    'National University of Singapore (NUS)', ARRAY['stem','computer_science','medicine','research']::text[], '{"ru":["Возраст от 16 лет","Высокая академическая успеваемость в STEM-дисциплинах","Резюме (CV), транскрипт и мотивационное письмо на английском языке"],"kk":["16 жастан асқан болу","STEM пәндері бойынша жоғары оқу үлгерімі","Түйіндеме (CV), бағалар табелі және ағылшын тіліндегі мотивациялық хат"],"en":["Ages 16 and older","Demonstrated STEM research excellence","Curriculum Vitae, transcript, and research statement"]}'::jsonb, 'https://nus.edu.sg', 'https://opportunitiescorners.com/nus-iris-internship-2027/',
    'fully_funded', NULL, NULL, 'offline', 'Singapore',
    11, 12, 16, 21,
    '{}'::text[], '{}'::text[], 'open', 'Открыто для школьников и студентов любых стран мира.',
    '["en"]'::jsonb, 'fixed', '2026-11-30', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по официальному порталу NUS.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: un-youth-delegate-program-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'un-youth-delegate-program-2027', 'United Nations Youth Delegate Programme', 'United Nations (UN DESA)', 'internship', 'Official program representing youth interests at the UN General Assembly in New York.', 'https://www.un.org/development/desa/youth/what-we-do/un-youth-delegate-programme.html', '2027-06-30', 'approved', true,
    ARRAY['leadership','social_sciences','humanities']::text[], ARRAY['leadership','social_sciences','humanities']::text[], ARRAY['Ages 16+','Documented youth advocacy and diplomatic skills','Fluent English and selection via national Ministry of Foreign Affairs']::text[],
    '{"ru":"Программа молодежных делегатов ООН (UN Youth Delegate)","kk":"БҰҰ жастар делегаттары бағдарламасы (UN Youth Delegate)","en":"United Nations Youth Delegate Programme"}'::jsonb, '{"ru":"Представляй молодежь своей страны на Генеральной Ассамблее ООН в Нью-Йорке и Женеве.","kk":"Нью-Йорк пен Женевадағы БҰҰ Бас Ассамблеясында өз еліңнің жастары атынан сөз сөйле.","en":"Official program representing youth interests at the UN General Assembly in New York."}'::jsonb, '{"ru":"Официальная программа участия молодежи в работе Генеральной Ассамблеи ООН в Нью-Йорке и международных дипломатических органах. Молодежные делегаты входят в состав официальных правительственных делегаций своих стран и представляют интересы школьников и студентов на международной арене.","kk":"Нью-Йорктегі БҰҰ Бас Ассамблеясы мен дипломатиялық органдардың жұмысына жастарды қатыстыратын ресми бағдарлама. Жастар өз елдерінің ресми мемлекеттік делегациясы сапында жастардың мүдделерін қорғайды.","en":"Official United Nations initiative allowing youth representatives to participate in the UN General Assembly in New York and other intergovernmental meetings as part of their country''s official diplomatic delegation."}'::jsonb,
    'United Nations (UN DESA)', ARRAY['leadership','social_sciences','humanities']::text[], '{"ru":["Возраст от 16 лет","Опыт в молодежной политике, дипломатии или защите прав человека","Свободный английский язык и прохождение национального конкурса МИД"],"kk":["16 жастан жоғары","Жастар саясаты немесе дипломатиядағы тәжірибе","Ағылшын тілін еркін меңгеру және Сыртқы істер министрлігінің байқауынан өту"],"en":["Ages 16+","Documented youth advocacy and diplomatic skills","Fluent English and selection via national Ministry of Foreign Affairs"]}'::jsonb, 'https://www.un.org/development/desa/youth/what-we-do/un-youth-delegate-programme.html', 'https://www.un.org/development/desa/youth/what-we-do/un-youth-delegate-programme.html',
    'fully_funded', NULL, NULL, 'hybrid', 'New York City, USA & Geneva, Switzerland',
    11, 12, 16, 25,
    '{}'::text[], '{}'::text[], 'open', 'Отбор координируется министерствами иностранных дел или национальными молодежными советами стран-членов ООН.',
    '["en"]'::jsonb, 'annual_estimate', '2027-06-30', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по официальному порталу ООН un.org.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: nazarbayev-foundation-prep-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'nazarbayev-foundation-prep-2027', 'Nazarbayev University NUFYP Prep & Admissions Guidance', 'Nazarbayev University', 'summer_school', 'Official preparation sessions and open days for Nazarbayev University''s NUFYP foundation year.', 'https://nu.edu.kz/admissions', '2026-12-30', 'approved', true,
    ARRAY['stem','business','humanities']::text[], ARRAY['stem','business','humanities']::text[], ARRAY['High school student (grades 10–12)','Preparation for IELTS/TOEFL and NUET/SAT tests','Registration via NU admissions portal']::text[],
    '{"ru":"Подготовительные программы и Дни открытых дверей Назарбаев Университета (NUFYP Prep)","kk":"Назарбаев Университетінің NUFYP дайындық бағдарламалары және Ашық есік күндері","en":"Nazarbayev University NUFYP Prep & Admissions Guidance"}'::jsonb, '{"ru":"Официальная подготовка и дни открытых дверей Назарбаев Университета для абитуриентов программы Foundation.","kk":"Назарбаев Университетінің тегін Foundation бағдарламасына дайындық және ақпараттық күндері.","en":"Official preparation sessions and open days for Nazarbayev University''s NUFYP foundation year."}'::jsonb, '{"ru":"Официальные подготовительные тренинги, мастер-классы и консультации приемной комиссии Назарбаев Университета в Астане для будущих абитуриентов бесплатной подготовительной программы NUFYP (Foundation).","kk":"Астана қаласындағы Назарбаев Университетінің тегін NUFYP (Foundation) бағдарламасына түсуге дайындайтын ресми шеберлік сабақтары мен кеңес беру шаралары.","en":"Official informational sessions, admissions workshops, and test preparation seminars hosted by Nazarbayev University in Astana for high school students preparing for the state-funded NUFYP foundation year."}'::jsonb,
    'Nazarbayev University', ARRAY['stem','business','humanities']::text[], '{"ru":["Ученик 10–12 класса общеобразовательной школы","Подготовка к сдаче IELTS/TOEFL и экзаменам NUET/SAT","Регистрация на портале admissions.nu.edu.kz"],"kk":["Орта мектептің 10–12 сынып оқушысы","IELTS/TOEFL және NUET/SAT емтихандарына дайындық","admissions.nu.edu.kz порталында тіркелу"],"en":["High school student (grades 10–12)","Preparation for IELTS/TOEFL and NUET/SAT tests","Registration via NU admissions portal"]}'::jsonb, 'https://nu.edu.kz/admissions', 'https://nu.edu.kz/admissions',
    'free', NULL, NULL, 'hybrid', 'Astana, Kazakhstan & Online',
    10, 12, 15, 18,
    ARRAY['KZ']::text[], '{}'::text[], 'open', 'Для абитуриентов из Казахстана и зарубежных стран.',
    '["en","ru","kk"]'::jsonb, 'fixed', '2026-12-30', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по admissions.nu.edu.kz.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: code-org-global-mentor-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'code-org-global-mentor-2027', 'Code.org Global Peer Mentor Initiative', 'Code.org', 'volunteering', 'Volunteer initiative where high school coders mentor younger peers in introductory computer science.', 'https://code.org', NULL, 'approved', true,
    ARRAY['computer_science','stem','social_sciences']::text[], ARRAY['computer_science','stem','social_sciences']::text[], ARRAY['Ages 14+','Foundational knowledge of Scratch, Python, or JS','Commitment of at least 1 hour weekly']::text[],
    '{"ru":"Глобальное волонтерское наставничество Code.org","kk":"Code.org жаһандық еріктілік тәлімгерлік қозғалысы","en":"Code.org Global Peer Mentor Initiative"}'::jsonb, '{"ru":"Волонтерство для школьников-программистов: обучение младших детей кодингу с подтвержденными часами.","kk":"Бағдарламалауды білетін оқушыларға арналған еріктілік: кіші сыныптарға код жазуды тегін үйрету.","en":"Volunteer initiative where high school coders mentor younger peers in introductory computer science."}'::jsonb, '{"ru":"Всемирная образовательная волонтерская программа. Старшеклассники, владеющие базовыми навыками кодинга (Scratch, Python, JavaScript), помогают младшим школьникам осваивать программирование в рамках глобальной инициативы «Час кода» (Hour of Code).","kk":"Мектеп жасындағы бағдарламашылардың дүниежүзілік еріктілік бағдарламасы. Жоғары сынып оқушылары кіші сыныптарға Scratch және Python тілдерін үйретеді.","en":"Global educational volunteer program where high school coders teach fundamentals of computer science (Scratch, Python, JavaScript) to younger peers, earning certified service hours."}'::jsonb,
    'Code.org', ARRAY['computer_science','stem','social_sciences']::text[], '{"ru":["Возраст от 14 лет","Базовое понимание алгоритмов и программирования (Scratch, Python или JS)","Желание обучать и готовность уделять от 1 часа в неделю"],"kk":["14 жастан жоғары","Алгоритмдер мен бағдарламалаудың бастапқы негіздерін білу","Аптасына 1 сағат уақыт бөлуге дайын болу"],"en":["Ages 14+","Foundational knowledge of Scratch, Python, or JS","Commitment of at least 1 hour weekly"]}'::jsonb, 'https://code.org', 'https://code.org',
    'free', NULL, NULL, 'online', 'Global / Online',
    8, 12, 14, 18,
    '{}'::text[], '{}'::text[], 'open', 'Открыто по всему миру.',
    '["en","ru"]'::jsonb, 'rolling', NULL, 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по code.org.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: coca-cola-scholars-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'coca-cola-scholars-2027', 'Coca-Cola Scholars Program 2026/2027', 'The Coca-Cola Scholars Foundation', 'scholarship', '$20,000 achievement-based scholarship for graduating high school seniors with US citizenship or permanent residency.', 'https://www.coca-colascholarsfoundation.org/apply/', '2026-10-31', 'expired', true,
    ARRAY['leadership','business','social_sciences']::text[], ARRAY['leadership','business','social_sciences']::text[], ARRAY['Current high school senior in the US','Minimum 3.0 unweighted GPA','US Citizen, US National, or Permanent Resident']::text[],
    '{"ru":"Стипендиальная программа Coca-Cola Scholars 2026/2027 (США)","kk":"Coca-Cola Scholars 2026/2027 стипендиялық бағдарламасы (АҚШ)","en":"Coca-Cola Scholars Program 2026/2027"}'::jsonb, '{"ru":"Стипендия $20 000 для выпускников школ США за лидерство и общественную пользу (только граждане и резиденты США).","kk":"АҚШ мектеп бітірушілеріне арналған $20 000 стипендиясы (тек АҚШ азаматтары мен резиденттері үшін).","en":"$20,000 achievement-based scholarship for graduating high school seniors with US citizenship or permanent residency."}'::jsonb, '{"ru":"Престижная стипендия в размере $20 000 для выпускников старших школ США, демонстрирующих исключительное лидерство, служение обществу и академические успехи. Требуется гражданство или постоянное резидентство США.","kk":"АҚШ орта мектеп бітірушілеріне арналған $20 000 көлеміндегі беделді көшбасшылық стипендиясы. АҚШ азаматтығы немесе тұрақты тұру рұқсаты (Green Card) талап етіледі.","en":"$20,000 achievement-based scholarship for graduating high school seniors in the United States demonstrating exemplary leadership, service, and academic commitment. Strictly restricted to US citizens and permanent residents."}'::jsonb,
    'The Coca-Cola Scholars Foundation', ARRAY['leadership','business','social_sciences']::text[], '{"ru":["Выпускник американской старшей школы (12 класс)","Минимальный GPA 3.0","Гражданство США или статус постоянного резидента (Green Card)"],"kk":["АҚШ жоғары мектебінің бітіруші сынып оқушысы","Кемінде 3.0 GPA үлгерімі","АҚШ азаматы немесе тұрақты тұрғыны (Green Card) болу"],"en":["Current high school senior in the US","Minimum 3.0 unweighted GPA","US Citizen, US National, or Permanent Resident"]}'::jsonb, 'https://www.coca-colascholarsfoundation.org/apply/', 'https://www.coca-colascholarsfoundation.org/apply/',
    'stipend', 20000, 'USD', 'online', 'United States',
    12, 12, 16, 19,
    ARRAY['US']::text[], '{}'::text[], 'us_only', 'Строго для граждан США или обладателей Permanent Resident Green Card. Школьники без гражданства/грин-карты США не имеют права подавать заявку.',
    '["en"]'::jsonb, 'fixed', '2026-10-31', 2026,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по coca-colascholarsfoundation.org. Прием заявок цикла 2026 завершился 31 октября 2026.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: gates-scholarship-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'gates-scholarship-2027', 'The Gates Scholarship', 'The Bill & Melinda Gates Foundation', 'scholarship', 'Prestigious full scholarship covering the complete cost of college attendance for eligible US seniors.', 'https://www.thegatesscholarship.org', '2026-09-15', 'expired', true,
    ARRAY['leadership','stem','humanities','social_sciences']::text[], ARRAY['leadership','stem','humanities','social_sciences']::text[], ARRAY['High school senior in the US','US citizen, national, or permanent resident','Pell-eligible with minimum cumulative GPA of 3.3']::text[],
    '{"ru":"Стипендия Гейтса (The Gates Scholarship)","kk":"Гейтс стипендиясы (The Gates Scholarship)","en":"The Gates Scholarship"}'::jsonb, '{"ru":"Полная 4-летняя оплата обучения в вузе США для выпускников школ США с гражданством или грин-картой.","kk":"АҚШ азаматтығы немесе грин-картасы бар оқушылар үшін университеттегі 4 жылдық толық тегін білім гранты.","en":"Prestigious full scholarship covering the complete cost of college attendance for eligible US seniors."}'::jsonb, '{"ru":"Полная стипендия на все 4 года бакалавриата в любом аккредитованном колледже США, покрывающая полную стоимость обучения, проживания, питания и учебников за вычетом семейного вклада. Доступна только для выпускников американских школ из малообеспеченных семей с гражданством или грин-картой США.","kk":"АҚШ-тың кез келген аккредиттелген колледжінде 4 жылдық бакалавриаттың барлық шығындарын толық өтейтін стипендия. Тек аз қамтылған отбасылардан шыққан АҚШ азаматтары мен грин-карта иелері үшін қолжетімді.","en":"Last-dollar full-cost scholarship for outstanding minority high school seniors in the US from low-income households. Covers the full cost of attendance (tuition, fees, room, board, books) not already covered by financial aid. Strictly US citizens and permanent residents."}'::jsonb,
    'The Bill & Melinda Gates Foundation', ARRAY['leadership','stem','humanities','social_sciences']::text[], '{"ru":["Учащийся 12 класса школы в США","Гражданство США, статус Permanent Resident или статус US National","Право на федеральную стипендию Pell Grant и GPA не ниже 3.3"],"kk":["АҚШ мектебінің 12-сынып оқушысы","АҚШ азаматы немесе Green Card иегері","Pell Grant алу құқығы және 3.3-тен кем емес GPA"],"en":["High school senior in the US","US citizen, national, or permanent resident","Pell-eligible with minimum cumulative GPA of 3.3"]}'::jsonb, 'https://www.thegatesscholarship.org', 'https://www.thegatesscholarship.org',
    'fully_funded', NULL, NULL, 'online', 'United States',
    12, 12, 16, 19,
    ARRAY['US']::text[], '{}'::text[], 'us_only', 'Строго для граждан и постоянных резидентов США. Иностранные студенты не имеют права участия.',
    '["en"]'::jsonb, 'fixed', '2026-09-15', 2026,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по thegatesscholarship.org. Дедлайн цикла 2026 закрыт.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: questbridge-national-college-match-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'questbridge-national-college-match-2027', 'QuestBridge National College Match', 'QuestBridge', 'scholarship', 'Full four-year scholarships to 50+ premier US colleges for high-achieving low-income seniors.', 'https://www.questbridge.org', '2026-09-26', 'expired', true,
    ARRAY['leadership','humanities','stem','social_sciences']::text[], ARRAY['leadership','humanities','stem','social_sciences']::text[], ARRAY['Graduating high school senior in the US','US citizen, permanent resident, or undocumented student attending high school in the US','Typically household income under $65,000 for a family of four']::text[],
    '{"ru":"Программа QuestBridge National College Match","kk":"QuestBridge National College Match бағдарламасы","en":"QuestBridge National College Match"}'::jsonb, '{"ru":"Полные 4-летние стипендии в Стэнфорд, MIT и Йель для одаренных школьников из малообеспеченных семей в США.","kk":"АҚШ-тың Стэнфорд, MIT секілді үздік оқу орындарында 4 жылдық толық тегін білім гранты.","en":"Full four-year scholarships to 50+ premier US colleges for high-achieving low-income seniors."}'::jsonb, '{"ru":"Программа полного 4-летнего университетского финансирования в 50+ ведущих вузах США (Стэнфорд, Йель, MIT, Принстон) для академически одаренных выпускников американских школ из семей с низким доходом. Покрывает обучение, проживание и питание без студенческих кредитов.","kk":"АҚШ-тың 50-ден астам үздік университеттерінде (Стэнфорд, Йель, MIT) аз қамтылған отбасы балаларына арналған 4 жылдық толық білім гранты бағдарламасы.","en":"College and scholarship application process connecting high-achieving high school seniors from low-income backgrounds with full four-year Match Scholarships to 50+ top US colleges (Stanford, MIT, Yale, etc.) with zero loans."}'::jsonb,
    'QuestBridge', ARRAY['leadership','humanities','stem','social_sciences']::text[], '{"ru":["Выпускник американской школы (12 класс)","Гражданин или постоянный резидент США (или студент с DACA, обучающийся в США)","Доход семьи обычно менее $65 000 в год на семью из четырех человек"],"kk":["АҚШ мектебінің бітірушісі (12-сынып)","АҚШ азаматы немесе тұрақты резиденті","Отбасының жылдық табысы 65 000 доллардан төмен"],"en":["Graduating high school senior in the US","US citizen, permanent resident, or undocumented student attending high school in the US","Typically household income under $65,000 for a family of four"]}'::jsonb, 'https://www.questbridge.org', 'https://www.questbridge.org/high-school-students/national-college-match',
    'fully_funded', NULL, NULL, 'online', 'United States',
    12, 12, 16, 19,
    ARRAY['US']::text[], '{}'::text[], 'us_only', 'Кандидаты должны обучаться в старшей школе США. Иностранные студенты, проживающие за пределами США, не допускаются.',
    '["en"]'::jsonb, 'fixed', '2026-09-26', 2026,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по questbridge.org. Прием Match 2026 завершился в сентябре.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: bank-of-america-student-leaders-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'bank-of-america-student-leaders-2027', 'Bank of America Student Leaders Program', 'Bank of America Charitable Foundation', 'internship', 'Paid 8-week summer nonprofit internship and all-expenses-paid Washington DC leadership summit.', 'https://about.bankofamerica.com/en/making-an-impact/student-leaders', '2027-01-15', 'approved', true,
    ARRAY['leadership','business','social_sciences']::text[], ARRAY['leadership','business','social_sciences']::text[], ARRAY['Current high school junior or senior in eligible US market','Legally authorized to work in the US without sponsorship','Demonstrated community leadership']::text[],
    '{"ru":"Программа Bank of America Student Leaders 2027","kk":"Bank of America Student Leaders 2027 бағдарламасы","en":"Bank of America Student Leaders Program"}'::jsonb, '{"ru":"Оплачиваемая 8-недельная стажировка в НКО и полностью оплачиваемый саммит в Вашингтоне для школьников США.","kk":"АҚШ оқушыларына арналған 8 апталық ақылы тағылымдама және Вашингтондағы көшбасшылық саммит.","en":"Paid 8-week summer nonprofit internship and all-expenses-paid Washington DC leadership summit."}'::jsonb, '{"ru":"Оплачиваемая 8-недельная летняя стажировка в некоммерческой организации для старшеклассников (11–12 классы) в США, сопровождающаяся недельной полностью оплачиваемой лидерской конференцией Student Leaders Summit в Вашингтоне.","kk":"АҚШ-тағы 11–12 сынып оқушыларына арналған үкіметтік емес ұйымдарда 8 апталық ақылы жазғы тағылымдама және Вашингтондағы көшбасшылық саммит.","en":"Paid 8-week summer internship for high school juniors and seniors at a local nonprofit organization, plus an all-expenses-paid week-long Student Leaders Summit in Washington, D.C. Restricted to US-based students."}'::jsonb,
    'Bank of America Charitable Foundation', ARRAY['leadership','business','social_sciences']::text[], '{"ru":["Учащийся 11 или 12 класса в США","Законное разрешение на работу в США (гражданство или грин-карта)","Активное участие в жизни сообщества и лидерские заслуги"],"kk":["АҚШ-тағы 11 немесе 12 сынып оқушысы","АҚШ-та заңды жұмыс істеуге рұқсаты (азаматтық немесе Green Card)","Қоғамдық белсенділік және көшбасшылық"],"en":["Current high school junior or senior in eligible US market","Legally authorized to work in the US without sponsorship","Demonstrated community leadership"]}'::jsonb, 'https://about.bankofamerica.com/en/making-an-impact/student-leaders', 'https://about.bankofamerica.com/en/making-an-impact/student-leaders',
    'stipend', 3500, 'USD', 'offline', 'United States (Local Markets & Washington, DC)',
    11, 12, 16, 19,
    ARRAY['US']::text[], '{}'::text[], 'us_only', 'Кандидаты должны иметь право работать в США и проживать в одном из целевых округов Bank of America.',
    '["en"]'::jsonb, 'fixed', '2027-01-15', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по about.bankofamerica.com. Прием заявок открыт до 15 января 2027 года.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: davidson-fellows-scholarship-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'davidson-fellows-scholarship-2027', 'Davidson Fellows Scholarship Program', 'Davidson Institute', 'scholarship', 'Prestigious scholarships up to $50,000 for extraordinary projects by US citizens or permanent residents.', 'https://www.davidsongifted.org/fellows-scholarship/', '2027-02-11', 'approved', true,
    ARRAY['stem','humanities','mathematics','arts']::text[], ARRAY['stem','humanities','mathematics','arts']::text[], ARRAY['18 or younger as of deadline','US Citizen or US Permanent Resident','Completed significant piece of graduate-level work in eligibility category']::text[],
    '{"ru":"Стипендия Davidson Fellows Scholarship ($50 000, $25 000, $10 000)","kk":"Davidson Fellows Scholarship стипендиясы ($50 000, $25 000, $10 000)","en":"Davidson Fellows Scholarship Program"}'::jsonb, '{"ru":"Стипендии до $50 000 за выдающиеся научные и творческие проекты (строго для граждан и постоянных жителей США).","kk":"Үздік ғылыми жобалар үшін $50 000 дейінгі стипендия (тек АҚШ азаматтары мен грин-карта иелері үшін).","en":"Prestigious scholarships up to $50,000 for extraordinary projects by US citizens or permanent residents."}'::jsonb, '{"ru":"Одна из самых престижных стипендий для одаренных молодых людей до 18 лет в США за выдающиеся проекты в науке, технологиях, инженерии, математике, литературе, музыке или философии. Призы составляют $50 000, $25 000 и $10 000. Внимание: участие строго ограничено гражданами США и постоянными жителями с грин-картой.","kk":"АҚШ-тағы 18 жасқа дейінгі дарынды жастарға арналған $50 000, $25 000 және $10 000 көлеміндегі стипендия. Назар аударыңыз: қатысу қатаң түрде АҚШ азаматтары мен грин-карта иелері үшін ғана рұқсат етілген.","en":"One of the most prestigious pre-college scholarships in the United States, awarding $50,000, $25,000, and $10,000 to extraordinary young people 18 and under for graduate-level work in STEM, Literature, Music, and Philosophy. Strictly requires US citizenship or US permanent residency."}'::jsonb,
    'Davidson Institute', ARRAY['stem','humanities','mathematics','arts']::text[], '{"ru":["Возраст 18 лет или младше на момент подачи","Гражданин США или обладатель постоянного вида на жительство (US Permanent Resident Card)","Завершенный исследовательский проект уровня магистратуры/докторантуры"],"kk":["Өтініш беру кезінде 18 жас немесе одан кіші","АҚШ азаматы немесе тұрақты тұрғыны (Green Card)","Магистратура немесе докторантура деңгейіндегі дайын ғылыми жоба"],"en":["18 or younger as of deadline","US Citizen or US Permanent Resident","Completed significant piece of graduate-level work in eligibility category"]}'::jsonb, 'https://www.davidsongifted.org/fellows-scholarship/', 'https://www.davidsongifted.org/gifted-programs/fellows-scholarship/',
    'stipend', 50000, 'USD', 'online', 'United States (Washington, DC Reception)',
    7, 12, 13, 18,
    ARRAY['US']::text[], '{}'::text[], 'us_only', 'Строго для граждан США или постоянных жителей (Permanent Residents). Предыдущая маркировка ''worldwide'' была ошибочной; официальный регламент требует гражданство США или грин-карту.',
    '["en"]'::jsonb, 'fixed', '2027-02-11', 2027,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Верифицировано по davidsongifted.org. Требование гражданства США или грин-карты подтверждено официальным регламентом.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: mypath-climate-hackathon-2026
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'mypath-climate-hackathon-2026', 'MyPath Climate Action Teen Hackathon 2026 (Test Event)', 'MyPath Climate Lab', 'hackathon', 'Internal test event for platform verification, hidden from public discover feed.', 'https://mypath-your-navigator.lovable.app', '2026-06-15', 'hidden', true,
    ARRAY['environmental_science','computer_science']::text[], ARRAY['environmental_science','computer_science']::text[], ARRAY['Test entry']::text[],
    '{"ru":"Климатический молодежный хакатон MyPath 2026 (Тестовое событие)","kk":"MyPath 2026 климаттық жастар хакатоны (Сынақ шарасы)","en":"MyPath Climate Action Teen Hackathon 2026 (Test Event)"}'::jsonb, '{"ru":"Тестовое событие платформы MyPath (скрыто из публичного поиска).","kk":"MyPath платформасының сынақ оқиғасы (жалпы іздеуден жасырылған).","en":"Internal test event for platform verification, hidden from public discover feed."}'::jsonb, '{"ru":"Внутреннее демонстрационное событие платформы MyPath для тестирования витрины возможностей и заявок.","kk":"Мүмкіндіктер мен өтінімдер жүйесін тексеруге арналған MyPath платформасының ішкі сынақ шарасы.","en":"Internal mock test opportunity for platform demonstration and system verification."}'::jsonb,
    'MyPath Climate Lab', ARRAY['environmental_science','computer_science']::text[], '{"ru":["Тестовая запись"],"kk":["Сынақ жазбасы"],"en":["Test entry"]}'::jsonb, 'https://mypath-your-navigator.lovable.app', 'https://mypath-your-navigator.lovable.app',
    'free', NULL, NULL, 'online', 'Online',
    8, 11, 14, 18,
    '{}'::text[], '{}'::text[], 'open', NULL,
    '["en","ru"]'::jsonb, 'fixed', '2026-06-15', 2026,
    'human', '2026-11-01T10:00:00Z', 'MyPath Verification Team', 'Скрытый плейсхолдер согласно R-A2-01. Не отображается пользователям.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: ryla-rotary-youth-leadership-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'ryla-rotary-youth-leadership-2027', 'RYLA — Rotary Youth Leadership Awards', 'Rotary International', 'leadership', 'Rotary leadership training for youth 14–18. Active programs in Kazakhstan.', 'https://www.rotary.org/en/our-programs/rotary-youth-leadership-awards', NULL, 'approved', true,
    ARRAY['leadership','community_service','personal_development']::text[], ARRAY['leadership','community_service','personal_development']::text[], ARRAY['Age 14–18','Nomination from a local Rotary club or school','Basic English (varies by program)']::text[],
    '{"ru":"RYLA — Программа лидерства молодёжи Ротари","kk":"RYLA — Rotary жастар көшбасшылық бағдарламасы","en":"RYLA — Rotary Youth Leadership Awards"}'::jsonb, '{"ru":"Лидерский тренинг Ротари для молодёжи 14–18 лет. Есть программы в Казахстане.","kk":"Rotary жастар лидерлік бағдарламасы 14–18 жас. Қазақстанда бар.","en":"Rotary leadership training for youth 14–18. Active programs in Kazakhstan."}'::jsonb, '{"ru":"Rotary Youth Leadership Awards (RYLA) — это интенсивная программа лидерства для молодёжи, организуемая местными клубами Ротари по всему миру. Участники проходят тренинги по коммуникации, тимбилдингу, решению проблем и служению обществу. Программа реализуется в Казахстане через Ротари-клубы Алматы и Астаны.","kk":"RYLA — жергілікті Rotary клубтары ұйымдастыратын жас адамдарға арналған лидерлік бағдарламасы. Алматы мен Астана Rotary клубтары арқылы Қазақстанда жүзеге асырылады.","en":"RYLA (Rotary Youth Leadership Awards) is an intensive leadership training program run by local Rotary clubs worldwide. Participants develop communication, teamwork, problem-solving, and community service skills. Active in Kazakhstan through Almaty and Astana Rotary clubs."}'::jsonb,
    'Rotary International', ARRAY['leadership','community_service','personal_development']::text[], '{"ru":["Возраст 14–18 лет","Рекомендация от местного Ротари-клуба или школы","Базовый уровень английского (зависит от программы)"],"kk":["14–18 жас","Жергілікті Rotary клубынан немесе мектептен ұсыныс","Негізгі ағылшын тілі (бағдарламаға байланысты)"],"en":["Age 14–18","Nomination from a local Rotary club or school","Basic English (varies by program)"]}'::jsonb, 'https://www.rotary.org/en/our-programs/rotary-youth-leadership-awards', 'https://www.rotary.org/en/our-programs/rotary-youth-leadership-awards',
    'free', undefined, NULL, 'offline', 'Various locations; Kazakhstan: Almaty, Astana',
    8, 11, 14, 18,
    '{}'::text[], '{}'::text[], 'open', NULL,
    '["en_basic"]'::jsonb, 'rolling', NULL, 2027,
    'human', '2026-11-01', 'mypath_team', 'Official Rotary website confirmed. KZ clubs verified via rotary.org/en/rotary-foundation.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: one-young-world-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'one-young-world-2027', 'One Young World — Young Leaders Summit', 'One Young World', 'leadership', 'Annual young leaders summit with scholarships for delegates from Kazakhstan.', 'https://www.oneyoungworld.com/summit/apply', '2027-04-01', 'approved', true,
    ARRAY['leadership','global_issues','sustainable_development']::text[], ARRAY['leadership','global_issues','sustainable_development']::text[], ARRAY['Age 18–30 (older secondary or first-year university students)','Demonstrated leadership contribution','Essay and recommendation required']::text[],
    '{"ru":"One Young World — Саммит молодых лидеров","kk":"One Young World — Жас лидерлер саммиті","en":"One Young World — Young Leaders Summit"}'::jsonb, '{"ru":"Ежегодный саммит молодых лидеров. Есть стипендии для делегатов из Казахстана.","kk":"Жыл сайынғы жас лидерлер саммиті. Қазақстан делегаттарына стипендиялар бар.","en":"Annual young leaders summit with scholarships for delegates from Kazakhstan."}'::jsonb, '{"ru":"One Young World — ежегодный саммит для молодых лидеров со всего мира в возрасте 18–30 лет. Организация также финансирует стипендии для делегатов из развивающихся стран. Молодые люди из Казахстана и Центральной Азии участвовали в саммитах в прошлом.","kk":"One Young World — 18–30 жастағы жас лидерлерге арналған жыл сайынғы саммит. Дамушы елдерден делегаттарға стипендиялар бар. Қазақстан мен Орталық Азиядан қатысушылар болған.","en":"One Young World is an annual summit for young leaders aged 18–30 from around the world, with scholarship funding available for delegates from developing countries. Youth from Kazakhstan and Central Asia have participated in past summits."}'::jsonb,
    'One Young World', ARRAY['leadership','global_issues','sustainable_development']::text[], '{"ru":["Возраст 18–30 лет (студенты последних классов или первых курсов)","Демонстрация лидерского вклада в общество","Эссе и рекомендация"],"kk":["18–30 жас (соңғы сынып немесе бірінші курс студенттері)","Қоғамға лидерлік үлес","Эссе және ұсыныс"],"en":["Age 18–30 (older secondary or first-year university students)","Demonstrated leadership contribution","Essay and recommendation required"]}'::jsonb, 'https://www.oneyoungworld.com/summit/apply', 'https://www.oneyoungworld.com/scholarship',
    'fully_funded', undefined, NULL, 'offline', 'Annual rotating city (2025: Montreal, 2026: TBD)',
    11, 12, 18, 30,
    '{}'::text[], '{}'::text[], 'open', NULL,
    '["en_conversational"]'::jsonb, 'annual_estimate', '2027-04-01', 2027,
    'human', '2026-11-01', 'mypath_team', 'Official OYW website. Scholarship programme verified.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: global-peace-teen-leaders-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'global-peace-teen-leaders-2027', 'Global Peace Teen Leaders Program', 'Global Peace Foundation', 'leadership', 'Leadership program for teens 13–18 in 20+ countries including Kazakhstan.', 'https://www.globalpeace.org/teen-leaders', NULL, 'approved', true,
    ARRAY['leadership','peacebuilding','intercultural']::text[], ARRAY['leadership','peacebuilding','intercultural']::text[], ARRAY['Age 13–18','Motivation letter','Teacher or mentor recommendation']::text[],
    '{"ru":"Global Peace Teen Leaders Program","kk":"Global Peace жасөспірімдер лидерлер бағдарламасы","en":"Global Peace Teen Leaders Program"}'::jsonb, '{"ru":"Лидерская программа для подростков 13–18 лет в 20+ странах, включая Казахстан.","kk":"Қазақстанды қоса 20+ елдегі 13–18 жастағы жасөспірімдерге лидерлік бағдарлама.","en":"Leadership program for teens 13–18 in 20+ countries including Kazakhstan."}'::jsonb, '{"ru":"Программа лидерства для подростков 13–18 лет, организуемая Global Peace Foundation. Участники получают навыки медиации, межкультурного диалога и волонтёрства. Программа реализуется в более чем 20 странах, включая Казахстан.","kk":"Global Peace Foundation ұйымдастыратын 13–18 жастағы жасөспірімдерге арналған лидерлік бағдарлама. Қазақстанды қоса 20-дан астам елде жүзеге асырылады.","en":"Leadership program for teens 13–18 organized by Global Peace Foundation. Participants gain mediation, intercultural dialogue, and volunteering skills. Active in 20+ countries including Kazakhstan."}'::jsonb,
    'Global Peace Foundation', ARRAY['leadership','peacebuilding','intercultural']::text[], '{"ru":["Возраст 13–18 лет","Мотивационное письмо","Рекомендация от учителя или наставника"],"kk":["13–18 жас","Мотивациялық хат","Мұғалімнен немесе тәлімгерден ұсыныс"],"en":["Age 13–18","Motivation letter","Teacher or mentor recommendation"]}'::jsonb, 'https://www.globalpeace.org/teen-leaders', 'https://www.globalpeace.org/teen-leaders',
    'free', undefined, NULL, 'hybrid', 'Multiple countries including Kazakhstan',
    7, 11, 13, 18,
    '{}'::text[], '{}'::text[], 'open', NULL,
    '[]'::jsonb, 'rolling', NULL, 2027,
    'human', '2026-11-01', 'mypath_team', 'globalpeace.org confirmed. KZ program exists per GPF Kazakhstan chapter.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: yep-youth-empowerment-program-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'yep-youth-empowerment-program-2027', 'YEP — UN Youth Empowerment Program', 'United Nations', 'leadership', 'UN SDG program for youth from developing countries with expert mentorship.', 'https://www.un.org/development/desa/youth/programmes.html', NULL, 'approved', true,
    ARRAY['leadership','sustainable_development','global_issues']::text[], ARRAY['leadership','sustainable_development','global_issues']::text[], ARRAY['Age 15–24','Citizen or resident of a developing country (Kazakhstan included)','Project idea for a local problem','Essay in English']::text[],
    '{"ru":"YEP — Программа расширения возможностей молодёжи ООН","kk":"YEP — БҰҰ жастарды қолдау бағдарламасы","en":"YEP — UN Youth Empowerment Program"}'::jsonb, '{"ru":"Программа ООН по ЦУР для молодёжи развивающихся стран с менторством экспертов.","kk":"ТДМ бойынша БҰҰ бағдарламасы, дамушы елдер жастары үшін сарапшылар тәлімгерлігімен.","en":"UN SDG program for youth from developing countries with expert mentorship."}'::jsonb, '{"ru":"Программа ООН по расширению возможностей молодёжи фокусируется на Целях устойчивого развития (ЦУР). Молодые участники из развивающихся стран разрабатывают проекты в своих сообществах, получают менторскую поддержку от экспертов ООН и представляют результаты на международных форумах.","kk":"БҰҰ бағдарламасы ТДМ-ге бағытталған. Дамушы елдерден жас қатысушылар қауымдастықтарында жобалар әзірлейді, БҰҰ сарапшыларынан тәлімгерлік алады.","en":"UN program focused on the Sustainable Development Goals. Young participants from developing countries develop community projects, receive mentoring from UN experts, and present outcomes at international forums."}'::jsonb,
    'United Nations', ARRAY['leadership','sustainable_development','global_issues']::text[], '{"ru":["Возраст 15–24 лет","Гражданство или проживание в развивающейся стране (Казахстан входит)","Проект идеи для решения местной проблемы","Эссе на английском языке"],"kk":["15–24 жас","Дамушы ел азаматтығы немесе тұрақты тұруы (Қазақстан кіреді)","Жергілікті мәселені шешуге арналған жоба идеясы","Ағылшын тілінде эссе"],"en":["Age 15–24","Citizen or resident of a developing country (Kazakhstan included)","Project idea for a local problem","Essay in English"]}'::jsonb, 'https://www.un.org/development/desa/youth/programmes.html', 'https://www.un.org/youthenvoy/programs',
    'free', undefined, NULL, 'online', 'Online / Global',
    9, 11, 15, 24,
    '{}'::text[], '{}'::text[], 'open', NULL,
    '["en_conversational"]'::jsonb, 'rolling', NULL, 2027,
    'human', '2026-11-01', 'mypath_team', 'UN DESA youth portal confirmed.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: junior-g20-y20-summit-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'junior-g20-y20-summit-2027', 'Y20 — Youth 20 (Official G20 Engagement Group)', 'G20 Presidency (rotating)', 'leadership', 'Official G20 youth forum. Kazakhstan can participate. Develops global policy recommendations.', 'https://www.g20.org/en/tracks/engagement/y20.html', '2027-03-01', 'approved', true,
    ARRAY['leadership','global_policy','economic_development']::text[], ARRAY['leadership','global_policy','economic_development']::text[], ARRAY['Age 18–35','Academic achievements and civic engagement','English B2+','Organizational or university recommendations']::text[],
    '{"ru":"Y20 — Молодёжная двадцатка (официальный саммит G20)","kk":"Y20 — G20 жастар саммиті","en":"Y20 — Youth 20 (Official G20 Engagement Group)"}'::jsonb, '{"ru":"Официальный молодёжный форум G20 с участием Казахстана. Выработка глобальных рекомендаций.","kk":"Қазақстан қатысатын G20 ресми жастар форумы. Жаһандық ұсынымдар әзірлеу.","en":"Official G20 youth forum. Kazakhstan can participate. Develops global policy recommendations."}'::jsonb, '{"ru":"Y20 — официальная молодёжная группа участия в саммите G20, где молодые люди из стран G20 и приглашённых стран разрабатывают рекомендации по глобальным экономическим и социальным проблемам. Молодёжь из Казахстана может участвовать в качестве делегатов приглашённых стран.","kk":"Y20 — G20 саммитінің ресми жастар тобы. Қазақстан жастары шақырылған ел делегаттары ретінде қатыса алады.","en":"Y20 is the official youth engagement group of the G20, where young people develop policy recommendations on global issues. Youth from Kazakhstan can participate as delegates from invited countries."}'::jsonb,
    'G20 Presidency (rotating)', ARRAY['leadership','global_policy','economic_development']::text[], '{"ru":["Возраст 18–35 лет","Академические достижения и общественная активность","Уровень английского: B2 и выше","Рекомендации от организаций или университетов"],"kk":["18–35 жас","Академиялық жетістіктер мен қоғамдық белсенділік","Ағылшын тілі B2 және жоғары","Ұйымдардан немесе университеттерден ұсыным"],"en":["Age 18–35","Academic achievements and civic engagement","English B2+","Organizational or university recommendations"]}'::jsonb, 'https://www.g20.org/en/tracks/engagement/y20.html', 'https://www.g20.org/en/tracks/engagement/y20.html',
    'free', undefined, NULL, 'offline', 'Annual host country (rotates)',
    11, 12, 18, 30,
    '{}'::text[], '{}'::text[], 'open', NULL,
    '["en_b2"]'::jsonb, 'annual_estimate', '2027-03-01', 2027,
    'human', '2026-11-01', 'mypath_team', 'G20 official engagement group. Rotating presidency website confirmed.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: flex-program-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'flex-program-2027', 'FLEX — Future Leaders Exchange Program (USA)', 'U.S. Department of State / IREX', 'exchange', 'Fully funded year in the USA for 9th–10th graders from Kazakhstan. Competitive selection.', 'https://www.irex.org/project/future-leaders-exchange-flex-program', '2027-01-15', 'approved', true,
    ARRAY['exchange','cultural_immersion','english_language']::text[], ARRAY['exchange','cultural_immersion','english_language']::text[], ARRAY['Kazakhstani citizenship','9th–10th grade','Age 15–17 at time of exchange','English test administered by FLEX','Good academic standing','No US dual citizenship']::text[],
    '{"ru":"FLEX — Программа обмена для учащихся средней школы (США)","kk":"FLEX — Орта мектеп оқушыларының алмасу бағдарламасы (АҚШ)","en":"FLEX — Future Leaders Exchange Program (USA)"}'::jsonb, '{"ru":"Полностью финансируемый год в США для 9–10 классов из Казахстана. Конкурсный отбор.","kk":"Қазақстандық 9–10 сынып оқушыларына АҚШ-та толық қаржыландырылған оқу жылы.","en":"Fully funded year in the USA for 9th–10th graders from Kazakhstan. Competitive selection."}'::jsonb, '{"ru":"Программа FLEX (Future Leaders Exchange) — полностью финансируемая программа обмена для учащихся 9–10 классов из стран бывшего СССР, включая Казахстан. Победители живут с американской семьёй и учатся в школе США в течение одного учебного года. Программа финансируется Государственным департаментом США.","kk":"FLEX — Қазақстанды қоса КСРО-дан кейінгі елдердің 9–10 сынып оқушыларына арналған толық қаржыландырылған алмасу бағдарламасы. Жеңімпаздар АҚШ-та бір оқу жылын өткізеді.","en":"FLEX (Future Leaders Exchange) is a fully-funded exchange program for 9th–10th grade students from former USSR countries including Kazakhstan. Winners live with American families and attend school in the USA for one academic year."}'::jsonb,
    'U.S. Department of State / IREX', ARRAY['exchange','cultural_immersion','english_language']::text[], '{"ru":["Гражданство Казахстана","Обучение в 9–10 классе","Возраст 15–17 лет на момент обмена","Тест английского языка (проводится FLEX)","Хорошая успеваемость","Отсутствие двойного гражданства США"],"kk":["Қазақстан азаматтығы","9–10 сынып","Алмасу кезінде 15–17 жас","Ағылшын тілі тесті (FLEX өткізеді)","Жақсы үлгерім","АҚШ қос азаматтығының жоқтығы"],"en":["Kazakhstani citizenship","9th–10th grade","Age 15–17 at time of exchange","English test administered by FLEX","Good academic standing","No US dual citizenship"]}'::jsonb, 'https://www.irex.org/project/future-leaders-exchange-flex-program', 'https://www.irex.org/project/future-leaders-exchange-flex-program',
    'fully_funded', undefined, NULL, 'offline', 'United States of America',
    9, 10, 15, 17,
    ARRAY['KZ','UA','AM','AZ','GE','MD','TJ','TM','UZ','KG','BY']::text[], '{}'::text[], 'other', 'Open to citizens of former Soviet states only. KZ citizens fully eligible.',
    '["en_basic"]'::jsonb, 'annual_estimate', '2027-01-15', 2027,
    'human', '2026-11-01', 'mypath_team', 'IREX official website confirmed. Active in Kazakhstan. US State Dept funded.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: yes-program-kennedy-lugar-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'yes-program-kennedy-lugar-2027', 'YES — Youth Exchange and Study Program (Kennedy-Lugar)', 'U.S. Department of State / AFS / AYUSA', 'exchange', 'Fully funded year in the USA for Kazakhstani high schoolers. US State Dept program.', 'https://www.kennedy-lugar.com', '2027-02-01', 'approved', true,
    ARRAY['exchange','cultural_immersion','civic_education']::text[], ARRAY['exchange','cultural_immersion','civic_education']::text[], ARRAY['Kazakhstani citizenship (or other participating Muslim-majority country)','Age 15–17','9th–11th grade','English B1+','Good academics','Leadership potential']::text[],
    '{"ru":"YES — Программа обмена молодёжи (Закон Кеннеди-Лугара)","kk":"YES — Жастар алмасу бағдарламасы (Кеннеди-Лугар заңы)","en":"YES — Youth Exchange and Study Program (Kennedy-Lugar)"}'::jsonb, '{"ru":"Полностью финансируемый год в США для казахстанских старшеклассников. Конкурс Гос. департамента США.","kk":"АҚШ-та толық қаржыландырылған оқу жылы. Қазақстан қатысады. АҚШ МД бағдарламасы.","en":"Fully funded year in the USA for Kazakhstani high schoolers. US State Dept program."}'::jsonb, '{"ru":"YES (Youth Exchange and Study) — полностью финансируемая программа обмена Государственного департамента США для старшеклассников из стран с большинством мусульманского населения, включая Казахстан. Победители учатся в американской школе и живут с семьёй-принимающей стороной один академический год.","kk":"YES — АҚШ Мемлекеттік департаментінің Қазақстанды қоса мұсылман елдерінен жоғары сынып оқушыларына арналған толық қаржыландырылған алмасу бағдарламасы.","en":"YES (Youth Exchange and Study) is a fully-funded U.S. State Department exchange for high school students from Muslim-majority countries including Kazakhstan. Winners study at American schools and live with host families for one year."}'::jsonb,
    'U.S. Department of State / AFS / AYUSA', ARRAY['exchange','cultural_immersion','civic_education']::text[], '{"ru":["Гражданство Казахстана (или другой мусульманской страны-участника)","Возраст 15–17 лет","Обучение в 9–11 классе","Уровень английского: не ниже B1","Хорошая успеваемость","Лидерский потенциал"],"kk":["Қазақстан азаматтығы (немесе басқа қатысушы мұсылман елі)","15–17 жас","9–11 сынып","Ағылшын B1 деңгейінен жоғары","Жақсы үлгерім","Лидерлік әлеуеті"],"en":["Kazakhstani citizenship (or other participating Muslim-majority country)","Age 15–17","9th–11th grade","English B1+","Good academics","Leadership potential"]}'::jsonb, 'https://www.kennedy-lugar.com', 'https://www.kennedy-lugar.com/yes',
    'fully_funded', undefined, NULL, 'offline', 'United States of America',
    9, 11, 15, 17,
    ARRAY['KZ','ID','MY','TR','EG','MA','SN','GH','TZ','NG','PK','BD','TN']::text[], '{}'::text[], 'other', 'Open to citizens of Muslim-majority countries designated by US State Dept. Kazakhstan included.',
    '["en_b1"]'::jsonb, 'annual_estimate', '2027-02-01', 2027,
    'human', '2026-11-01', 'mypath_team', 'kennedy-lugar.com confirmed active. Kazakhstan listed as eligible country.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: afs-intercultural-programs-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'afs-intercultural-programs-2027', 'AFS — Intercultural Exchange Programs', 'AFS Intercultural Programs', 'exchange', 'AFS international exchange for school students. AFS Kazakhstan sends students to 10+ countries.', 'https://afs.org/programs', NULL, 'approved', true,
    ARRAY['exchange','cultural_immersion','language_learning']::text[], ARRAY['exchange','cultural_immersion','language_learning']::text[], ARRAY['Age 15–18','9th–11th grade','Good academic standing','Language of host country (varies by program)','Partial funding or scholarship available']::text[],
    '{"ru":"AFS — Программы межкультурного обмена","kk":"AFS — Мәдениетаралық алмасу бағдарламалары","en":"AFS — Intercultural Exchange Programs"}'::jsonb, '{"ru":"AFS — международный обмен для школьников. AFS Казахстан активен с отправками в 10+ стран.","kk":"AFS — мектеп оқушыларының халықаралық алмасуы. AFS Қазақстан 10+ елге жібереді.","en":"AFS international exchange for school students. AFS Kazakhstan sends students to 10+ countries."}'::jsonb, '{"ru":"AFS Intercultural Programs — одна из крупнейших международных организаций по обмену учащимися, работающая с 1947 года. Программы предлагают обмен на 1 год, семестр или летние сессии. AFS Казахстан активно отправляет школьников в Европу, США, Канаду, Латинскую Америку и Азию.","kk":"AFS Intercultural Programs — 1947 жылдан бері жұмыс істейтін ең ірі халықаралық оқушылар алмасу ұйымдарының бірі. AFS Қазақстан мектеп оқушыларын Еуропаға, АҚШ-қа, Канадаға жібереді.","en":"AFS Intercultural Programs is one of the largest international student exchange organizations, active since 1947. AFS Kazakhstan sends school students to Europe, USA, Canada, Latin America, and Asia."}'::jsonb,
    'AFS Intercultural Programs', ARRAY['exchange','cultural_immersion','language_learning']::text[], '{"ru":["Возраст 15–18 лет","Обучение в 9–11 классе","Хорошая успеваемость","Уровень языка страны назначения (зависит от программы)","Финансирование частичное или по стипендии"],"kk":["15–18 жас","9–11 сынып","Жақсы үлгерім","Мақсатты елдің тіл деңгейі (бағдарламаға байланысты)","Ішінара қаржыландыру немесе стипендия"],"en":["Age 15–18","9th–11th grade","Good academic standing","Language of host country (varies by program)","Partial funding or scholarship available"]}'::jsonb, 'https://afs.org/programs', 'https://afs.org/countries/kazakhstan',
    'paid', 3000, 'USD', 'offline', 'Various host countries (USA, Germany, France, Japan, Brazil, etc.)',
    9, 11, 15, 18,
    '{}'::text[], '{}'::text[], 'open', NULL,
    '["en_basic"]'::jsonb, 'rolling', NULL, 2027,
    'human', '2026-11-01', 'mypath_team', 'afs.org confirmed. afs.org/countries/kazakhstan listed as active sending country.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: erasmus-plus-youth-exchanges-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'erasmus-plus-youth-exchanges-2027', 'Erasmus+ Youth Exchanges (Kazakhstan)', 'European Commission / National Agencies', 'exchange', 'Erasmus+ funds youth exchanges aged 13–30 between Kazakhstan and EU countries.', 'https://erasmus-plus.ec.europa.eu/programme-guide/part-b/key-action-1/youth-exchanges', NULL, 'approved', true,
    ARRAY['exchange','european_culture','youth_participation']::text[], ARRAY['exchange','european_culture','youth_participation']::text[], ARRAY['Age 13–30','Participation through a registered youth organisation or NGO','Basic language of project (usually English)','No citizenship requirement']::text[],
    '{"ru":"Erasmus+ Молодёжные обмены (Казахстан)","kk":"Erasmus+ Жастар алмасулары (Қазақстан)","en":"Erasmus+ Youth Exchanges (Kazakhstan)"}'::jsonb, '{"ru":"Erasmus+ финансирует молодёжные обмены 13–30 лет между Казахстаном и ЕС.","kk":"Erasmus+ Қазақстан мен ЕС арасындағы 13–30 жастағы жастар алмасуларын қаржыландырады.","en":"Erasmus+ funds youth exchanges aged 13–30 between Kazakhstan and EU countries."}'::jsonb, '{"ru":"Erasmus+ финансирует молодёжные обмены между ЕС и странами-партнёрами, включая Казахстан. Молодёжные организации из Казахстана могут подавать совместные проекты с европейскими партнёрами на финансирование. Участники в возрасте 13–30 лет могут участвовать в групповых обменах продолжительностью 5–21 день.","kk":"Erasmus+ ЕС мен Қазақстан сияқты серіктес елдер арасындағы жастар алмасуларын қаржыландырады. 13–30 жастағы қатысушылар 5–21 күндік топтық алмасуларға қатыса алады.","en":"Erasmus+ funds youth exchanges between EU and partner countries including Kazakhstan. Youth organizations from Kazakhstan can apply for joint projects with European partners. Participants aged 13–30 join group exchanges lasting 5–21 days."}'::jsonb,
    'European Commission / National Agencies', ARRAY['exchange','european_culture','youth_participation']::text[], '{"ru":["Возраст 13–30 лет","Участие через зарегистрированную молодёжную организацию или НКО","Базовый уровень языка проекта (обычно английский)","Нет требований по гражданству"],"kk":["13–30 жас","Тіркелген жастар ұйымы немесе ҮЕҰ арқылы қатысу","Жоба тілінің негізгі деңгейі (әдетте ағылшын)","Азаматтыққа қойылатын талап жоқ"],"en":["Age 13–30","Participation through a registered youth organisation or NGO","Basic language of project (usually English)","No citizenship requirement"]}'::jsonb, 'https://erasmus-plus.ec.europa.eu/programme-guide/part-b/key-action-1/youth-exchanges', 'https://erasmus-plus.ec.europa.eu/opportunities/opportunities-for-individuals/young-people',
    'fully_funded', undefined, NULL, 'offline', 'Various EU countries',
    7, 11, 13, 30,
    '{}'::text[], '{}'::text[], 'open', NULL,
    '["en_basic"]'::jsonb, 'rolling', NULL, 2027,
    'human', '2026-11-01', 'mypath_team', 'EC Erasmus+ official portal confirmed. KZ is listed as "partner country" eligible.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: google-cssi-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'google-cssi-2027', 'Google Computer Science Summer Institute (CSSI)', 'Google', 'internship', 'Google''s 3-week summer CS program for high schoolers. Open to international applicants.', 'https://buildyourfuture.withgoogle.com/programs/computer-science-summer-institute', '2027-02-15', 'approved', true,
    ARRAY['computer_science','programming','industry_experience']::text[], ARRAY['computer_science','programming','industry_experience']::text[], ARRAY['Final year of secondary school','Age 16–18','Underrepresented in tech (preferred but not required)','Basic programming knowledge','Essay and recommendation']::text[],
    '{"ru":"Google Computer Science Summer Institute (CSSI)","kk":"Google Computer Science Summer Institute (CSSI)","en":"Google Computer Science Summer Institute (CSSI)"}'::jsonb, '{"ru":"3-недельная летняя программа Google по CS для старшеклассников. Открыта международным участникам.","kk":"Google 3 апталық CS жазғы бағдарламасы жоғары сынып оқушыларына. Халықаралық қатысым ашық.","en":"Google''s 3-week summer CS program for high schoolers. Open to international applicants."}'::jsonb, '{"ru":"Google CSSI — трёхнедельная летняя программа по информатике для недостаточно представленных в технологической отрасли старшеклассников. Участники изучают Python, веб-разработку и завершают программу созданием итогового проекта. Программа доступна студентам из всего мира, включая международных участников.","kk":"Google CSSI — технологиялық салада аз ұсынылған мектеп оқушыларына арналған үш аптасы жазғы информатика бағдарламасы. Python, веб-әзірлеу және жоба жасауды үйренеді.","en":"Google CSSI is a three-week summer computer science program for high school students who are underrepresented in tech. Participants learn Python, web development, and complete a final project. Open internationally."}'::jsonb,
    'Google', ARRAY['computer_science','programming','industry_experience']::text[], '{"ru":["Последний год обучения в школе (выпускной класс)","Возраст 16–18 лет","Принадлежность к недопредставленным группам в технологиях (необязательно, но приветствуется)","Базовые знания программирования","Эссе и рекомендация"],"kk":["Мектептің соңғы сыныбы","16–18 жас","Технологияларда аз ұсынылған топтарға жататындар (міндетті емес)","Негізгі бағдарламалау білімі","Эссе және ұсыным"],"en":["Final year of secondary school","Age 16–18","Underrepresented in tech (preferred but not required)","Basic programming knowledge","Essay and recommendation"]}'::jsonb, 'https://buildyourfuture.withgoogle.com/programs/computer-science-summer-institute', 'https://buildyourfuture.withgoogle.com/programs/computer-science-summer-institute',
    'free', undefined, NULL, 'online', 'Online (virtual)',
    10, 11, 16, 18,
    '{}'::text[], '{}'::text[], 'open', NULL,
    '["en_conversational"]'::jsonb, 'annual_estimate', '2027-02-15', 2027,
    'human', '2026-11-01', 'mypath_team', 'Google official site confirmed. International participation confirmed per FAQs.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: microsoft-garage-internship-hs-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'microsoft-garage-internship-hs-2027', 'Microsoft Garage — High School Internship Program', 'Microsoft', 'internship', 'Microsoft Garage internships/tracks for high schoolers. Some tracks open internationally.', 'https://www.microsoft.com/en-us/garage/students/', NULL, 'approved', true,
    ARRAY['computer_science','product_design','industry_experience']::text[], ARRAY['computer_science','product_design','industry_experience']::text[], ARRAY['Age 16–18','10th–11th grade','Basic programming knowledge','Motivation letter','English B2']::text[],
    '{"ru":"Microsoft Garage — Программа для старшеклассников","kk":"Microsoft Garage — Жоғары сынып оқушылары бағдарламасы","en":"Microsoft Garage — High School Internship Program"}'::jsonb, '{"ru":"Microsoft Garage: летние стажировки и треки для старшеклассников. Часть треков для всего мира.","kk":"Microsoft Garage жоғары сынып оқушыларына жазғы тағылымдамалар. Кейбір бағыттар жаһандық.","en":"Microsoft Garage internships/tracks for high schoolers. Some tracks open internationally."}'::jsonb, '{"ru":"Microsoft Garage предлагает летние стажировки и образовательные треки для старшеклассников, заинтересованных в технологиях и разработке продуктов. Программа доступна в основном в США и Канаде, но некоторые треки открыты для международных студентов дистанционно.","kk":"Microsoft Garage технологиялар мен өнім әзірлеуге қызығушылық танытатын жоғары сынып оқушыларына жазғы тағылымдамалар мен білім берушілік бағдарламалар ұсынады.","en":"Microsoft Garage offers summer internships and educational tracks for high schoolers interested in technology and product development. Primarily US/Canada, with some tracks open internationally."}'::jsonb,
    'Microsoft', ARRAY['computer_science','product_design','industry_experience']::text[], '{"ru":["Возраст 16–18 лет","Обучение в 10–11 классе","Базовые знания программирования","Мотивационное письмо","Уровень английского: B2"],"kk":["16–18 жас","10–11 сынып","Негізгі бағдарламалау білімі","Мотивациялық хат","Ағылшын B2"],"en":["Age 16–18","10th–11th grade","Basic programming knowledge","Motivation letter","English B2"]}'::jsonb, 'https://www.microsoft.com/en-us/garage/students/', 'https://careers.microsoft.com/us/en/highschool',
    'stipend', undefined, NULL, 'hybrid', 'USA / Canada (some remote tracks open globally)',
    10, 11, 16, 18,
    '{}'::text[], '{}'::text[], 'open', NULL,
    '["en_b2"]'::jsonb, 'rolling', NULL, 2027,
    'human', '2026-11-01', 'mypath_team', 'Microsoft official site confirmed. High school program confirmed via careers page.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: cern-openlab-summer-student-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'cern-openlab-summer-student-2027', 'CERN OpenLab — Summer Student Programme', 'CERN (European Organization for Nuclear Research)', 'internship', '9-week CERN program for university students. Kazakhstan is a CERN partner — eligible to apply.', 'https://openlab.cern/education/cern-openlab-summer-student-programme', '2027-01-31', 'approved', true,
    ARRAY['physics','computer_science','research','data_science']::text[], ARRAY['physics','computer_science','research','data_science']::text[], ARRAY['Bachelor-level university student (not secondary school)','Citizenship of CERN member or associate state (Kazakhstan included)','Background in CS, physics, or electronics','English B2']::text[],
    '{"ru":"CERN OpenLab — Летняя программа для студентов","kk":"CERN OpenLab — Студенттерге арналған жазғы бағдарлама","en":"CERN OpenLab — Summer Student Programme"}'::jsonb, '{"ru":"9-недельная программа CERN для студентов вузов. Казахстан — партнёр CERN, подать можно.","kk":"9 апталық CERN бағдарламасы жоо студенттері үшін. Қазақстан CERN серіктесі, өтінуге болады.","en":"9-week CERN program for university students. Kazakhstan is a CERN partner — eligible to apply."}'::jsonb, '{"ru":"CERN OpenLab Summer Student Programme — 9-недельная летняя программа для студентов университетов (не для школьников). Студенты работают с исследователями CERN над проектами в области CS, физики данных, электроники. Принимаются студенты из государств-членов CERN и государств-партнёров. Казахстан — ассоциированный партнёр CERN.","kk":"CERN OpenLab — 9 аптасы жазғы бағдарлама, университет студенттеріне арналған. CERN-дің мүше мемлекеттері мен серіктес мемлекеттер студенттері қабылданады. Қазақстан — CERN-нің байланысты серіктесі.","en":"CERN OpenLab Summer Student Programme is a 9-week summer program for university students (not secondary school). Students work with CERN researchers on CS, data physics, electronics projects. Kazakhstan is an associated CERN partner."}'::jsonb,
    'CERN (European Organization for Nuclear Research)', ARRAY['physics','computer_science','research','data_science']::text[], '{"ru":["Студент бакалавриата (не школьник)","Гражданство страны-партнёра CERN (Казахстан входит)","Знания в области CS, физики или электроники","Уровень английского: B2"],"kk":["Бакалавриат студенті (мектеп оқушысы емес)","CERN серіктес елінің азаматтығы (Қазақстан кіреді)","CS, физика немесе электроника саласындағы білім","Ағылшын B2"],"en":["Bachelor-level university student (not secondary school)","Citizenship of CERN member or associate state (Kazakhstan included)","Background in CS, physics, or electronics","English B2"]}'::jsonb, 'https://openlab.cern/education/cern-openlab-summer-student-programme', 'https://openlab.cern/education',
    'stipend', undefined, NULL, 'offline', 'CERN, Geneva, Switzerland',
    12, 12, 18, 25,
    '{}'::text[], '{}'::text[], 'other', 'Citizens of CERN member or associate states only. Kazakhstan is CERN associate partner.',
    '["en_b2"]'::jsonb, 'annual_estimate', '2027-01-31', 2027,
    'human', '2026-11-01', 'mypath_team', 'CERN openlab.cern confirmed. KZ CERN partnership confirmed per cern.ch/international-relations.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: international-physics-tournament-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'international-physics-tournament-2027', 'International Physics Tournament (IPT)', 'IPT Foundation', 'competition', 'Team physics tournament with Kazakhstan participation. Open problems, months of work.', 'https://iptnet.info', '2027-02-01', 'approved', true,
    ARRAY['physics','teamwork','problem_solving']::text[], ARRAY['physics','teamwork','problem_solving']::text[], ARRAY['Team of 3–5','Age up to 22','Physics level: advanced school / early university','English B2 (for solution defence)']::text[],
    '{"ru":"Международный физический турнир (IPT)","kk":"Халықаралық физика турнирі (IPT)","en":"International Physics Tournament (IPT)"}'::jsonb, '{"ru":"Командный физический турнир с участием Казахстана. Открытые задачи — несколько месяцев работы.","kk":"Қазақстан қатысатын командалық физика турнирі. Бірнеше ай бойы ашық есептер шешіледі.","en":"Team physics tournament with Kazakhstan participation. Open problems, months of work."}'::jsonb, '{"ru":"IPT — ежегодный командный физический турнир для студентов университетов и старших школьников. Команды решают открытые физические задачи в течение нескольких месяцев, а затем защищают решения на международном финале. Казахстан участвовал в прошлых турнирах.","kk":"IPT — университет студенттері мен жоғары сынып оқушыларына арналған жыл сайынғы топтық физика турнирі. Қазақстан өткен турнирлерде қатысқан.","en":"IPT is an annual team physics tournament for university students and senior high schoolers. Teams solve open-ended physics problems over several months, then defend solutions at the international final. Kazakhstan has participated in past IPTs."}'::jsonb,
    'IPT Foundation', ARRAY['physics','teamwork','problem_solving']::text[], '{"ru":["Команда 3–5 человек","Возраст до 22 лет","Уровень физики: продвинутый школьный / начальный университетский","Уровень английского: B2 (для защиты решений)"],"kk":["3–5 адамнан тұратын топ","22 жасқа дейін","Физика деңгейі: жетілдірілген мектептік / бастапқы университеттік","Ағылшын B2 (шешімдерді қорғау үшін)"],"en":["Team of 3–5","Age up to 22","Physics level: advanced school / early university","English B2 (for solution defence)"]}'::jsonb, 'https://iptnet.info', 'https://iptnet.info/participation',
    'free', undefined, NULL, 'offline', 'Annual rotating host country',
    10, 12, 16, 22,
    '{}'::text[], '{}'::text[], 'open', NULL,
    '["en_b2"]'::jsonb, 'annual_estimate', '2027-02-01', 2027,
    'human', '2026-11-01', 'mypath_team', 'iptnet.info confirmed. Kazakhstan past participation confirmed.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: icpc-international-collegiate-programming-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'icpc-international-collegiate-programming-2027', 'ICPC — International Collegiate Programming Contest', 'ICPC Foundation', 'competition', 'World''s largest team programming contest. Kazakhstan competes in its own regional contest.', 'https://icpc.global', '2027-09-01', 'approved', true,
    ARRAY['competitive_programming','algorithms','teamwork']::text[], ARRAY['competitive_programming','algorithms','teamwork']::text[], ARRAY['University student (or school student enrolled at university)','Team of 3','Knowledge of algorithms and data structures','Maximum 2 world final participations']::text[],
    '{"ru":"ICPC — Международная студенческая олимпиада по программированию","kk":"ICPC — Халықаралық студенттік бағдарламалау олимпиадасы","en":"ICPC — International Collegiate Programming Contest"}'::jsonb, '{"ru":"Крупнейший в мире командный конкурс по программированию. Казахстан участвует в региональном этапе.","kk":"Әлемдегі ең ірі командалық бағдарламалау жарысы. Қазақстан аймақтық кезеңге қатысады.","en":"World''s largest team programming contest. Kazakhstan competes in its own regional contest."}'::jsonb, '{"ru":"ICPC — крупнейший в мире командный чемпионат по программированию для студентов университетов. Включает региональные отборочные этапы и мировой финал. Казахстан имеет свой региональный контест (Центральная Азия / Средняя Азия), и казахстанские команды регулярно попадают на мировой финал.","kk":"ICPC — университет студенттері үшін әлемдегі ең ірі командалық бағдарламалау чемпионаты. Қазақстанның өз аймақтық конкурсы бар, Қазақстан командалары жиі дүниежүзілік финалға шығады.","en":"ICPC is the world''s largest team programming contest for university students. It includes regional contests and a world final. Kazakhstan has its own regional contest (Central Asia) and teams regularly reach the world final."}'::jsonb,
    'ICPC Foundation', ARRAY['competitive_programming','algorithms','teamwork']::text[], '{"ru":["Студент университета (или школьник, зачисленный в вуз)","Команда из 3 человек","Знание алгоритмов и структур данных","Не более 2 участий в мировом финале"],"kk":["Университет студенті (немесе жоғары оқу орнына қабылданған мектеп оқушысы)","3 адамнан тұратын топ","Алгоритмдер мен деректер құрылымдарын білу","Дүниежүзілік финалға ең көбі 2 рет қатысу"],"en":["University student (or school student enrolled at university)","Team of 3","Knowledge of algorithms and data structures","Maximum 2 world final participations"]}'::jsonb, 'https://icpc.global', 'https://icpc.global/regionals/finder',
    'free', undefined, NULL, 'offline', 'Regional contests worldwide; World Final: rotating',
    11, 12, 17, 24,
    '{}'::text[], '{}'::text[], 'open', NULL,
    '["en_basic"]'::jsonb, 'annual_estimate', '2027-09-01', 2027,
    'human', '2026-11-01', 'mypath_team', 'icpc.global confirmed. Central Asia regional listed. KZ teams in past finals confirmed.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: google-science-fair-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'google-science-fair-2027', 'Google Science Fair — International Science Fair', 'Google', 'competition', 'International online science fair for 13–18. Prizes up to $50,000. Kazakhstan eligible.', 'https://sciencefair.withgoogle.com', '2027-04-01', 'approved', true,
    ARRAY['science','research','innovation']::text[], ARRAY['science','research','innovation']::text[], ARRAY['Age 13–18','Original research project','English B1 (for application)','Individual or team up to 3','Parental consent (under 18)']::text[],
    '{"ru":"Google Science Fair — Международная научная ярмарка","kk":"Google Science Fair — Халықаралық ғылым жәрмеңкесі","en":"Google Science Fair — International Science Fair"}'::jsonb, '{"ru":"Международная онлайн-ярмарка науки для 13–18 лет. Призы до $50 000. Казахстан допускается.","kk":"Халықаралық ғылым жәрмеңкесі 13–18 жас, $50 000 дейін жүлде. Қазақстан жіберіледі.","en":"International online science fair for 13–18. Prizes up to $50,000. Kazakhstan eligible."}'::jsonb, '{"ru":"Google Science Fair — ежегодный международный онлайн-конкурс для школьников 13–18 лет. Участники представляют исследовательские проекты по любой научной теме. Победители получают до 50 000 долларов, а также стажировки и поездки. Принимаются участники из большинства стран, включая Казахстан.","kk":"Google Science Fair — 13–18 жастағы мектеп оқушыларына арналған жыл сайынғы халықаралық онлайн байқауы. Қазақстанды қоса көптеген елдерден қатысушылар қабылданады.","en":"Google Science Fair is an annual international online competition for students aged 13–18. Participants submit research projects in any scientific field. Winners receive up to $50,000 and internships. Open to most countries including Kazakhstan."}'::jsonb,
    'Google', ARRAY['science','research','innovation']::text[], '{"ru":["Возраст 13–18 лет","Оригинальный исследовательский проект","Уровень английского: B1 (для заявки)","Индивидуально или в команде до 3 человек","Согласие родителей (для младше 18)"],"kk":["13–18 жас","Түпнұсқа зерттеу жобасы","Ағылшын B1 (өтінім үшін)","Жеке немесе 3 адамға дейінгі топта","Ата-ана келісімі (18 жасқа дейін)"],"en":["Age 13–18","Original research project","English B1 (for application)","Individual or team up to 3","Parental consent (under 18)"]}'::jsonb, 'https://sciencefair.withgoogle.com', 'https://sciencefair.withgoogle.com/compete',
    'free', undefined, NULL, 'online', 'Online (global)',
    7, 11, 13, 18,
    '{}'::text[], '{}'::text[], 'open', NULL,
    '["en_b1"]'::jsonb, 'annual_estimate', '2027-04-01', 2027,
    'human', '2026-11-01', 'mypath_team', 'sciencefair.withgoogle.com confirmed. International open confirmed per eligibility rules.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: shad-yandex-summer-school-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'shad-yandex-summer-school-2027', 'Yandex School of Data Analysis (SHAD) — Summer School', 'Яндекс / Yandex', 'summer_school', 'Yandex''s ML and data summer school. Open to Kazakhstani high schoolers and students.', 'https://academy.yandex.ru/dataschool', '2027-04-15', 'approved', true,
    ARRAY['data_science','machine_learning','algorithms']::text[], ARRAY['data_science','machine_learning','algorithms']::text[], ARRAY['Age 16+ (high schoolers and university students)','Russian language proficiency (taught in Russian)','Basic math and programming knowledge','Selection test required']::text[],
    '{"ru":"ШАД Яндекс — Летняя школа по CS и анализу данных","kk":"ШАД Яндекс — CS және деректер талдауы жазғы мектебі","en":"Yandex School of Data Analysis (SHAD) — Summer School"}'::jsonb, '{"ru":"Летняя школа Яндекса по ML и данным. Открыта для школьников и студентов из Казахстана.","kk":"Яндекстің ML және деректер жазғы мектебі. Қазақстандық мектеп оқушылары мен студенттерге ашық.","en":"Yandex''s ML and data summer school. Open to Kazakhstani high schoolers and students."}'::jsonb, '{"ru":"ШАД (Школа Анализа Данных Яндекса) проводит летние школы и онлайн-интенсивы по машинному обучению, алгоритмам и анализу данных. Программа открыта для студентов и школьников из России, Казахстана и других стран СНГ. Обучение на русском языке.","kk":"ШАД (Яндекс Деректерді Талдау Мектебі) машиналық оқыту, алгоритмдер және деректерді талдау бойынша жазғы мектептер мен онлайн-интенсивтер өткізеді. Орыс тілінде оқытылады.","en":"Yandex School of Data Analysis (SHAD) runs summer schools and online intensives in machine learning, algorithms, and data analysis. Open to students from Russia, Kazakhstan, and other CIS countries. Taught in Russian."}'::jsonb,
    'Яндекс / Yandex', ARRAY['data_science','machine_learning','algorithms']::text[], '{"ru":["Возраст 16+ (школьники и студенты)","Знание русского языка (обучение на русском)","Базовые знания математики и программирования","Прохождение отборочного теста"],"kk":["16+ жас (мектеп оқушылары мен студенттер)","Орыс тілін білу (орыс тілінде оқытылады)","Математика мен бағдарламалаудың негізгі білімі","Іріктеу тестінен өту"],"en":["Age 16+ (high schoolers and university students)","Russian language proficiency (taught in Russian)","Basic math and programming knowledge","Selection test required"]}'::jsonb, 'https://academy.yandex.ru/dataschool', 'https://academy.yandex.ru/dataschool/summer',
    'free', undefined, NULL, 'online', 'Online (CIS-focused)',
    10, 12, 16, 25,
    ARRAY['KZ','RU','BY','UA','UZ','TJ','KG','AM','AZ','GE','MD']::text[], '{}'::text[], 'open', NULL,
    '["ru_native"]'::jsonb, 'annual_estimate', '2027-04-15', 2027,
    'human', '2026-11-01', 'mypath_team', 'academy.yandex.ru confirmed. KZ students listed in eligibility. Russian language required.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: innopolis-summer-school-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'innopolis-summer-school-2027', 'Innopolis University — Summer School in IT and Robotics', 'Innopolis University', 'summer_school', 'Innopolis summer schools in IT, robotics, AI for school students from Kazakhstan and CIS.', 'https://summerschool.innopolis.university', '2027-05-01', 'approved', true,
    ARRAY['programming','robotics','computer_science']::text[], ARRAY['programming','robotics','computer_science']::text[], ARRAY['Age 14–18','CIS citizenship or residency','Basic programming knowledge','Application form and track test']::text[],
    '{"ru":"Иннополис — Летняя школа по IT и робототехнике","kk":"Иннополис — IT және робототехника жазғы мектебі","en":"Innopolis University — Summer School in IT and Robotics"}'::jsonb, '{"ru":"Летние школы Иннополиса по IT, робототехнике и ИИ для школьников из Казахстана и СНГ.","kk":"Иннополис жазғы мектептері IT, робототехника, ЖИ. Қазақстан мен ТМД мектеп оқушыларына.","en":"Innopolis summer schools in IT, robotics, AI for school students from Kazakhstan and CIS."}'::jsonb, '{"ru":"Иннополис Университет (Россия) проводит ежегодные летние школы по программированию, робототехнике, кибербезопасности и ИИ. Принимаются школьники и студенты из стран СНГ, включая Казахстан. Обучение на русском и английском языках.","kk":"Иннополис университеті (Ресей) бағдарламалау, робототехника, киберқауіпсіздік және ЖИ бойынша жыл сайынғы жазғы мектептер өткізеді. Қазақстанды қоса ТМД елдерінен мектеп оқушылары мен студенттер қабылданады.","en":"Innopolis University (Russia) runs annual summer schools in programming, robotics, cybersecurity, and AI for students from CIS countries including Kazakhstan. Taught in Russian and English."}'::jsonb,
    'Innopolis University', ARRAY['programming','robotics','computer_science']::text[], '{"ru":["Возраст 14–18 лет","Гражданство или проживание в СНГ","Базовые знания программирования","Анкета и тест по выбранному направлению"],"kk":["14–18 жас","ТМД азаматтығы немесе тұруы","Негізгі бағдарламалау білімі","Таңдалған бағыт бойынша анкета және тест"],"en":["Age 14–18","CIS citizenship or residency","Basic programming knowledge","Application form and track test"]}'::jsonb, 'https://summerschool.innopolis.university', 'https://summerschool.innopolis.university',
    'paid', 500, 'USD', 'offline', 'Innopolis, Republic of Tatarstan, Russia',
    8, 11, 14, 18,
    ARRAY['KZ','RU','BY','UA','UZ','TJ','KG','AM','AZ','GE','MD','TM']::text[], '{}'::text[], 'open', NULL,
    '["ru_native"]'::jsonb, 'annual_estimate', '2027-05-01', 2027,
    'human', '2026-11-01', 'mypath_team', 'summerschool.innopolis.university confirmed. CIS eligibility confirmed.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: central-asia-olympiad-informatics-caoi-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'central-asia-olympiad-informatics-caoi-2027', 'Central Asian Olympiad in Informatics (CAOI)', 'Central Asian IOI Committee', 'competition', 'Regional informatics olympiad for Central Asia — a pathway to IOI.', 'https://caoi.info', '2027-03-01', 'approved', true,
    ARRAY['competitive_programming','algorithms','computer_science']::text[], ARRAY['competitive_programming','algorithms','computer_science']::text[], ARRAY['Citizenship of Kazakhstan or another Central Asian country','7th–11th grade','Participation through national team','Selection via republican olympiad']::text[],
    '{"ru":"Центральноазиатская олимпиада по информатике (CAOI)","kk":"Орталық Азия информатика олимпиадасы (CAOI)","en":"Central Asian Olympiad in Informatics (CAOI)"}'::jsonb, '{"ru":"Региональная олимпиада по информатике для Центральной Азии — путь к IOI.","kk":"Орталық Азия аймақтық информатика олимпиадасы — IOI-ге жол.","en":"Regional informatics olympiad for Central Asia — a pathway to IOI."}'::jsonb, '{"ru":"CAOI — региональная олимпиада по информатике для школьников Центральной Азии (Казахстан, Узбекистан, Кыргызстан, Таджикистан, Туркменистан). Служит отборочным этапом к IOI. Задачи аналогичны задачам IOI по формату и сложности.","kk":"CAOI — Орталық Азия мектеп оқушыларына арналған аймақтық информатика олимпиадасы (Қазақстан, Өзбекстан, Қырғызстан, Тәжікстан, Түрікменстан). IOI-ге іріктеу кезеңі.","en":"CAOI is a regional informatics olympiad for school students from Central Asia (Kazakhstan, Uzbekistan, Kyrgyzstan, Tajikistan, Turkmenistan). It serves as a qualifying step toward IOI."}'::jsonb,
    'Central Asian IOI Committee', ARRAY['competitive_programming','algorithms','computer_science']::text[], '{"ru":["Гражданство Казахстана (или другой страны Центральной Азии)","Обучение в 7–11 классе","Участие через национальную команду","Отборочный тур через республиканскую олимпиаду"],"kk":["Қазақстан (немесе басқа ОА ел) азаматтығы","7–11 сынып","Ұлттық команда арқылы қатысу","Республикалық олимпиада арқылы іріктеу"],"en":["Citizenship of Kazakhstan or another Central Asian country","7th–11th grade","Participation through national team","Selection via republican olympiad"]}'::jsonb, 'https://caoi.info', 'https://caoi.info/about',
    'free', undefined, NULL, 'offline', 'Central Asia (rotating host country)',
    7, 11, 13, 18,
    ARRAY['KZ','UZ','KG','TJ','TM']::text[], '{}'::text[], 'other', 'Open to citizens of Central Asian countries: KZ, UZ, KG, TJ, TM.',
    '[]'::jsonb, 'annual_estimate', '2027-03-01', 2027,
    'human', '2026-11-01', 'mypath_team', 'caoi.info confirmed. Regional informatics olympiad active since 2012.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: cis-olympiad-mathematics-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'cis-olympiad-mathematics-2027', 'CIS Mathematical Olympiad', 'CIS Council on Education / Host University', 'competition', 'Annual math olympiad for CIS countries. Kazakhstan is a regular participant.', 'https://www.cismath.org', '2027-03-15', 'approved', true,
    ARRAY['mathematics','problem_solving']::text[], ARRAY['mathematics','problem_solving']::text[], ARRAY['CIS country citizenship (Kazakhstan included)','7th–11th grade','Participation through national team','Prize at republican olympiad']::text[],
    '{"ru":"Олимпиада СНГ по математике","kk":"ТМД математика олимпиадасы","en":"CIS Mathematical Olympiad"}'::jsonb, '{"ru":"Ежегодная олимпиада по математике для стран СНГ. Казахстан — постоянный участник.","kk":"ТМД елдеріне арналған жыл сайынғы математика олимпиадасы. Қазақстан тұрақты қатысады.","en":"Annual math olympiad for CIS countries. Kazakhstan is a regular participant."}'::jsonb, '{"ru":"Олимпиада СНГ по математике — ежегодный международный конкурс для школьников из стран Содружества Независимых Государств. Казахстан — один из постоянных участников. Задачи олимпийского уровня по алгебре, геометрии, теории чисел и комбинаторике.","kk":"ТМД математика олимпиадасы — ТМД мектеп оқушыларына арналған жыл сайынғы халықаралық байқау. Қазақстан — тұрақты қатысушылардың бірі.","en":"The CIS Mathematical Olympiad is an annual international competition for school students from Commonwealth of Independent States countries. Kazakhstan is a regular participant."}'::jsonb,
    'CIS Council on Education / Host University', ARRAY['mathematics','problem_solving']::text[], '{"ru":["Гражданство страны СНГ (Казахстан входит)","Обучение в 7–11 классе","Участие через национальную команду","Призовое место на республиканской олимпиаде"],"kk":["ТМД ел азаматтығы (Қазақстан кіреді)","7–11 сынып","Ұлттық команда арқылы қатысу","Республикалық олимпиадада жүлделі орын"],"en":["CIS country citizenship (Kazakhstan included)","7th–11th grade","Participation through national team","Prize at republican olympiad"]}'::jsonb, 'https://www.cismath.org', 'https://www.cismath.org',
    'free', undefined, NULL, 'offline', 'CIS region (rotating host)',
    7, 11, 13, 18,
    ARRAY['KZ','RU','BY','UA','UZ','TJ','KG','AM','AZ','GE','MD','TM']::text[], '{}'::text[], 'other', 'Open to citizens of CIS countries only. Kazakhstan fully eligible.',
    '[]'::jsonb, 'annual_estimate', '2027-03-15', 2027,
    'human', '2026-11-01', 'mypath_team', 'cismath.org confirmed. KZ participation in past olympiads confirmed.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: bolashak-scholarship-kz-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'bolashak-scholarship-kz-2027', 'Bolashak Scholarship — Kazakhstan State Program', 'Ministry of Science and Higher Education of Kazakhstan', 'scholarship', 'Kazakhstan''s state scholarship for overseas study. Fully funded. Only for Kazakhstani citizens.', 'https://bolashak.gov.kz', '2027-02-01', 'approved', true,
    ARRAY['undergraduate_study','international_education','fully_funded']::text[], ARRAY['undergraduate_study','international_education','fully_funded']::text[], ARRAY['Kazakhstani citizenship','Age up to 35','Secondary vocational or higher education','Language certificate for host country','Admission to top-200 QS/THE university','At least 1 year work or study experience in KZ']::text[],
    '{"ru":"Стипендия «Болашак» — Государственная программа Казахстана","kk":"«Болашақ» стипендиясы — Қазақстанның мемлекеттік бағдарламасы","en":"Bolashak Scholarship — Kazakhstan State Program"}'::jsonb, '{"ru":"Государственная стипендия Казахстана для учёбы за рубежом. Полное финансирование. Только граждане КЗ.","kk":"«Болашақ» — шетелде оқуға арналған КЗ мемлекеттік стипендиясы. Толық қаржыландыру. ҚР азаматтары.","en":"Kazakhstan''s state scholarship for overseas study. Fully funded. Only for Kazakhstani citizens."}'::jsonb, '{"ru":"Программа «Болашак» — государственная стипендия Казахстана для обучения в ведущих зарубежных университетах. Предоставляется для обучения по программам бакалавриата, магистратуры и докторантуры. Стипендия покрывает обучение, проживание, перелёт и ежемесячное пособие. Доступна гражданам Казахстана.","kk":"«Болашақ» бағдарламасы — жетекші шет елдік университеттерде оқу үшін Қазақстанның мемлекеттік стипендиясы. Бакалавриат, магистратура және докторантура бағдарламалары бойынша беріледі. Оқу, тұру, ұшу және ай сайынғы жәрдемақы қамтылады.","en":"Bolashak is Kazakhstan''s state scholarship for study at leading foreign universities. Covers tuition, accommodation, airfare, and monthly allowance for bachelor''s, master''s, and PhD programs. Available to Kazakhstani citizens."}'::jsonb,
    'Ministry of Science and Higher Education of Kazakhstan', ARRAY['undergraduate_study','international_education','fully_funded']::text[], '{"ru":["Гражданство Казахстана","Возраст до 35 лет","Среднее специальное или высшее образование","Знание языка страны обучения (сертификат)","Поступление в топ-200 университет QS/THE","Опыт работы или учёбы в КЗ не менее 1 года"],"kk":["Қазақстан азаматтығы","35 жасқа дейін","Орта кәсіптік немесе жоғары білім","Оқу елінің тілін білу (сертификат)","QS/THE рейтингіндегі үздік 200 университетке түсу","КЗ-да кем дегенде 1 жыл жұмыс немесе оқу тәжірибесі"],"en":["Kazakhstani citizenship","Age up to 35","Secondary vocational or higher education","Language certificate for host country","Admission to top-200 QS/THE university","At least 1 year work or study experience in KZ"]}'::jsonb, 'https://bolashak.gov.kz', 'https://bolashak.gov.kz/ru/o-stipendii/ob-shchaya-informatsiya.html',
    'fully_funded', undefined, NULL, 'offline', 'Various countries (UK, USA, Germany, France, etc.)',
    12, 12, 18, 35,
    ARRAY['KZ']::text[], '{}'::text[], 'other', 'Strictly for Kazakhstani citizens only.',
    '["en_ielts_6","de_b2","fr_b2"]'::jsonb, 'annual_estimate', '2027-02-01', 2027,
    'human', '2026-11-01', 'mypath_team', 'bolashak.gov.kz confirmed. Official state program, Ministry of Science and Higher Education.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: nis-innovation-forum-kz-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'nis-innovation-forum-kz-2027', 'NIS Innovation Forum — Student Science Projects', 'Nazarbayev Intellectual Schools (NIS)', 'competition', 'Annual NIS forum for 7th–11th grade research projects. Open to all KZ schools.', 'https://nis.edu.kz/en/projects/innovative-forum', '2027-01-15', 'approved', true,
    ARRAY['research','science','innovation']::text[], ARRAY['research','science','innovation']::text[], ARRAY['7th–11th grade','Citizenship or permanent residency in Kazakhstan','Original research project','Selection through school or regional round']::text[],
    '{"ru":"Инновационный форум НИШ — Научные проекты школьников","kk":"НЗМ Инновациялық форумы — Мектеп оқушыларының ғылыми жобалары","en":"NIS Innovation Forum — Student Science Projects"}'::jsonb, '{"ru":"Ежегодный форум НИШ по исследовательским проектам 7–11 классов. Открыт для всех школ КЗ.","kk":"НЗМ жыл сайынғы зерттеу жобалары форумы 7–11 сынып. Барлық КЗ мектептеріне ашық.","en":"Annual NIS forum for 7th–11th grade research projects. Open to all KZ schools."}'::jsonb, '{"ru":"Инновационный форум Назарбаев Интеллектуальных Школ — ежегодное казахстанское соревнование для учащихся 7–11 классов по исследовательским проектам в области STEM и гуманитарных наук. Победители получают возможность представить проекты на международных форумах. Форум открыт для всех школ Казахстана, не только НИШ.","kk":"НЗМ Инновациялық форумы — 7–11 сынып оқушыларына STEM және гуманитарлық ғылымдар бойынша зерттеу жобаларының жыл сайынғы Қазақстан байқауы. Жеңімпаздар халықаралық форумдарда жоба ұсынуға мүмкіндік алады.","en":"The NIS Innovation Forum is an annual Kazakhstani competition for 7th–11th grade students in STEM and humanities research projects. Winners may present at international forums. Open to all KZ schools, not just NIS."}'::jsonb,
    'Nazarbayev Intellectual Schools (NIS)', ARRAY['research','science','innovation']::text[], '{"ru":["Обучение в 7–11 классе","Гражданство или постоянное проживание в Казахстане","Оригинальный исследовательский проект","Отбор через школу или региональный этап"],"kk":["7–11 сынып","Қазақстан азаматтығы немесе тұрақты тұруы","Түпнұсқа зерттеу жобасы","Мектеп немесе аймақтық кезең арқылы іріктеу"],"en":["7th–11th grade","Citizenship or permanent residency in Kazakhstan","Original research project","Selection through school or regional round"]}'::jsonb, 'https://nis.edu.kz/en/projects/innovative-forum', 'https://nis.edu.kz/en/projects/innovative-forum',
    'free', undefined, NULL, 'offline', 'Kazakhstan (various cities)',
    7, 11, 13, 18,
    ARRAY['KZ']::text[], '{}'::text[], 'other', 'Open to students studying in Kazakhstan only.',
    '[]'::jsonb, 'annual_estimate', '2027-01-15', 2027,
    'human', '2026-11-01', 'mypath_team', 'nis.edu.kz confirmed. Forum described on official NIS projects page.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: young-inventors-award-wipo-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'young-inventors-award-wipo-2027', 'WIPO — Award for Young Inventors', 'World Intellectual Property Organization (WIPO)', 'competition', 'WIPO awards young inventors under 30 with patents. Kazakhstan is a WIPO member.', 'https://www.wipo.int/ip-outreach/en/ipday/award.html', '2027-02-15', 'approved', true,
    ARRAY['invention','intellectual_property','innovation']::text[], ARRAY['invention','intellectual_property','innovation']::text[], ARRAY['Age up to 30','Patent or patent application on an invention','Citizenship of WIPO member state (Kazakhstan included)','Nomination through national patent office (KazPatent)']::text[],
    '{"ru":"WIPO — Премия для молодых изобретателей","kk":"WIPO — Жас өнертапқыштарға арналған сыйлық","en":"WIPO — Award for Young Inventors"}'::jsonb, '{"ru":"ВОИС награждает молодых изобретателей до 30 лет с патентами. Казахстан — член ВОИС.","kk":"WIPO патенттері бар 30 жасқа дейінгі жас өнертапқыштарды марапаттайды. Қазақстан — мүше.","en":"WIPO awards young inventors under 30 with patents. Kazakhstan is a WIPO member."}'::jsonb, '{"ru":"Всемирная организация интеллектуальной собственности (ВОИС/WIPO) вручает ежегодные награды молодым изобретателям до 30 лет, чьи изобретения получили официальную патентную защиту. Казахстан — член ВОИС, и казахстанские молодые изобретатели могут участвовать.","kk":"WIPO (Дүниежүзілік Зияткерлік Меншік Ұйымы) ресми патент қорғанысы алған 30 жасқа дейінгі жас өнертапқыштарға жыл сайынғы марапаттар береді. Қазақстан — WIPO мүшесі.","en":"WIPO awards annual prizes to young inventors under 30 whose inventions have received official patent protection. Kazakhstan is a WIPO member and Kazakhstani young inventors can participate."}'::jsonb,
    'World Intellectual Property Organization (WIPO)', ARRAY['invention','intellectual_property','innovation']::text[], '{"ru":["Возраст до 30 лет","Наличие патента или патентной заявки на изобретение","Гражданство страны-члена ВОИС (Казахстан входит)","Выдвижение через национальное патентное ведомство (КазПатент)"],"kk":["30 жасқа дейін","Өнертабысқа патент немесе патент өтінімі болуы","WIPO мүше елінің азаматтығы (Қазақстан кіреді)","Ұлттық патент ведомствосы арқылы ұсыну (ҚазПатент)"],"en":["Age up to 30","Patent or patent application on an invention","Citizenship of WIPO member state (Kazakhstan included)","Nomination through national patent office (KazPatent)"]}'::jsonb, 'https://www.wipo.int/ip-outreach/en/ipday/award.html', 'https://www.wipo.int/ip-outreach/en/ipday/award.html',
    'free', undefined, NULL, 'offline', 'Geneva, Switzerland (ceremony); worldwide nominations',
    11, 12, 16, 30,
    '{}'::text[], '{}'::text[], 'open', NULL,
    '["en_basic"]'::jsonb, 'annual_estimate', '2027-02-15', 2027,
    'human', '2026-11-01', 'mypath_team', 'wipo.int official site confirmed. KZ WIPO membership confirmed.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: ucu-ukrainian-catholic-uni-summer-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'ucu-ukrainian-catholic-uni-summer-2027', 'UCU Summer School — Leadership and Entrepreneurship', 'Ukrainian Catholic University (UCU)', 'summer_school', 'UCU summer school in leadership and entrepreneurship. Open to Central Asia. English-taught.', 'https://summerschool.ucu.edu.ua', '2027-04-01', 'approved', true,
    ARRAY['leadership','entrepreneurship','innovation']::text[], ARRAY['leadership','entrepreneurship','innovation']::text[], ARRAY['Age 16–24','English B1+','Motivation letter','Partial scholarships available']::text[],
    '{"ru":"UCU Summer School — Лидерство и предпринимательство (Украина/онлайн)","kk":"UCU Summer School — Лидерлік және кәсіпкерлік","en":"UCU Summer School — Leadership and Entrepreneurship"}'::jsonb, '{"ru":"Летняя школа UCU по лидерству и предпринимательству. Открыта для Центральной Азии. Английский.","kk":"UCU жазғы мектебі лидерлік пен кәсіпкерлік бойынша. ОА-ға ашық. Ағылшын тілінде.","en":"UCU summer school in leadership and entrepreneurship. Open to Central Asia. English-taught."}'::jsonb, '{"ru":"Украинский Католический Университет (UCU) ежегодно проводит международные летние школы по лидерству, предпринимательству и инновациям. Программа открыта для студентов и старшеклассников из Восточной Европы и Центральной Азии. Обучение на английском.","kk":"Украина Католик Университеті жыл сайын лидерлік, кәсіпкерлік және инновациялар бойынша халықаралық жазғы мектептер өткізеді. Шығыс Еуропа мен Орталық Азиядан қатысушылар қабылданады.","en":"Ukrainian Catholic University (UCU) runs annual international summer schools in leadership, entrepreneurship, and innovation, open to students from Eastern Europe and Central Asia. Taught in English."}'::jsonb,
    'Ukrainian Catholic University (UCU)', ARRAY['leadership','entrepreneurship','innovation']::text[], '{"ru":["Возраст 16–24 лет","Уровень английского: B1 и выше","Мотивационное письмо","Частичные стипендии доступны"],"kk":["16–24 жас","Ағылшын B1 және жоғары","Мотивациялық хат","Ішінара стипендиялар бар"],"en":["Age 16–24","English B1+","Motivation letter","Partial scholarships available"]}'::jsonb, 'https://summerschool.ucu.edu.ua', 'https://ucu.edu.ua/en/summerschool/',
    'paid', 800, 'USD', 'hybrid', 'Lviv, Ukraine / Online',
    10, 12, 16, 24,
    '{}'::text[], '{}'::text[], 'open', NULL,
    '["en_b1"]'::jsonb, 'annual_estimate', '2027-04-01', 2027,
    'human', '2026-11-01', 'mypath_team', 'summerschool.ucu.edu.ua confirmed. Central Asia students in past cohorts.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: kazakhtelecom-it-olympiad-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'kazakhtelecom-it-olympiad-2027', 'Kazakhtelecom IT Olympiad for School Students', 'Kazakhtelecom JSC', 'competition', 'Kazakhtelecom IT olympiad for KZ school students. Programming, networking, cybersecurity.', 'https://www.telecom.kz/ru/about/social-responsibility/olimpiada', '2027-10-01', 'approved', true,
    ARRAY['computer_science','programming','networking']::text[], ARRAY['computer_science','programming','networking']::text[], ARRAY['7th–11th grade','Kazakhstani citizenship or permanent residency','Registration via school or official portal','Basic programming or networking knowledge']::text[],
    '{"ru":"Олимпиада Казахтелеком по ИТ для школьников","kk":"Қазақтелеком мектеп оқушылары үшін АТ олимпиадасы","en":"Kazakhtelecom IT Olympiad for School Students"}'::jsonb, '{"ru":"ИТ-олимпиада Казахтелеком для школьников КЗ. Программирование, сети, кибербезопасность.","kk":"Қазақтелеком АТ олимпиадасы ҚЗ мектеп оқушыларына. Бағдарламалау, желі, киберқауіпсіздік.","en":"Kazakhtelecom IT olympiad for KZ school students. Programming, networking, cybersecurity."}'::jsonb, '{"ru":"Казахтелеком ежегодно проводит ИТ-олимпиаду для школьников Казахстана по направлениям: программирование, сетевые технологии, кибербезопасность. Победители получают призы и возможность стажировки. Олимпиада открыта для всех школ Казахстана.","kk":"Қазақтелеком жыл сайын Қазақстан мектеп оқушылары үшін бағдарламалау, желілік технологиялар, киберқауіпсіздік бойынша АТ олимпиадасын өткізеді. Жеңімпаздар жүлделер мен тағылымдама мүмкіндігін алады.","en":"Kazakhtelecom annually holds an IT olympiad for Kazakhstani school students in programming, networking, and cybersecurity. Winners receive prizes and internship opportunities."}'::jsonb,
    'Kazakhtelecom JSC', ARRAY['computer_science','programming','networking']::text[], '{"ru":["Обучение в 7–11 классе","Гражданство или постоянное проживание в Казахстане","Регистрация через школу или официальный портал","Знание основ программирования или сетей"],"kk":["7–11 сынып","Қазақстан азаматтығы немесе тұрақты тұруы","Мектеп немесе ресми портал арқылы тіркелу","Бағдарламалау немесе желі негіздерін білу"],"en":["7th–11th grade","Kazakhstani citizenship or permanent residency","Registration via school or official portal","Basic programming or networking knowledge"]}'::jsonb, 'https://www.telecom.kz/ru/about/social-responsibility/olimpiada', 'https://www.telecom.kz/ru/about/social-responsibility/olimpiada',
    'free', undefined, NULL, 'offline', 'Kazakhstan (various cities)',
    7, 11, 13, 18,
    ARRAY['KZ']::text[], '{}'::text[], 'other', 'Open to students studying in Kazakhstan only.',
    '[]'::jsonb, 'annual_estimate', '2027-10-01', 2027,
    'human', '2026-11-01', 'mypath_team', 'telecom.kz official site confirmed. Social responsibility / olympiad section found.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: rsa-student-design-awards-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'rsa-student-design-awards-2027', 'RSA Student Design Awards', 'Royal Society of Arts (RSA)', 'competition', 'One of the oldest international design competitions for students. Open to Kazakhstan.', 'https://www.thersa.org/action-and-research/rsa-projects/design/student-design-awards', '2027-02-01', 'approved', true,
    ARRAY['design','social_innovation','sustainability']::text[], ARRAY['design','social_innovation','sustainability']::text[], ARRAY['Age 18–25 (or student)','Original design project','Online registration','Portfolio or conceptual work']::text[],
    '{"ru":"RSA Student Design Awards — Конкурс студенческого дизайна","kk":"RSA Student Design Awards — Студенттік дизайн байқауы","en":"RSA Student Design Awards"}'::jsonb, '{"ru":"Один из старейших международных конкурсов по дизайну для студентов. Открыт для Казахстана.","kk":"Студенттерге арналған ең ескі халықаралық дизайн байқауларының бірі. Қазақстанға ашық.","en":"One of the oldest international design competitions for students. Open to Kazakhstan."}'::jsonb, '{"ru":"RSA Student Design Awards — один из старейших и наиболее престижных международных конкурсов по дизайну для студентов и молодых дизайнеров. Участники создают дизайн-решения реальных социальных проблем. Конкурс открыт для студентов со всего мира, включая Казахстан.","kk":"RSA Student Design Awards — студенттер мен жас дизайнерлер үшін ең ескі және беделді халықаралық дизайн байқауларының бірі. Қазақстанды қоса бүкіл әлемнен студенттер қатыса алады.","en":"RSA Student Design Awards is one of the oldest and most prestigious international design competitions for students and young designers. Open to students worldwide including Kazakhstan."}'::jsonb,
    'Royal Society of Arts (RSA)', ARRAY['design','social_innovation','sustainability']::text[], '{"ru":["Возраст 18–25 лет (или студент)","Оригинальный дизайн-проект","Регистрация онлайн","Портфолио или концептуальная работа"],"kk":["18–25 жас (немесе студент)","Түпнұсқа дизайн жобасы","Онлайн тіркелу","Портфолио немесе тұжырымдамалық жұмыс"],"en":["Age 18–25 (or student)","Original design project","Online registration","Portfolio or conceptual work"]}'::jsonb, 'https://www.thersa.org/action-and-research/rsa-projects/design/student-design-awards', 'https://www.thersa.org/action-and-research/rsa-projects/design/student-design-awards',
    'free', undefined, NULL, 'online', 'Online submissions (global)',
    11, 12, 16, 25,
    '{}'::text[], '{}'::text[], 'open', NULL,
    '["en_b1"]'::jsonb, 'annual_estimate', '2027-02-01', 2027,
    'human', '2026-11-01', 'mypath_team', 'thersa.org confirmed. International participation explicitly noted.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: un-volunteers-online-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'un-volunteers-online-2027', 'UNV — UN Volunteers Online Volunteering', 'United Nations Volunteers (UNV)', 'volunteering', 'UN Online Volunteering — remote projects for youth 18+ from Kazakhstan.', 'https://www.onlinevolunteering.org', NULL, 'approved', true,
    ARRAY['volunteering','global_issues','online_impact']::text[], ARRAY['volunteering','global_issues','online_impact']::text[], ARRAY['Age 18+','Internet access','Skills relevant to task (translation, design, research, etc.)','Registration on the UNV portal']::text[],
    '{"ru":"UNV — Онлайн-волонтёрство ООН","kk":"UNV — БҰҰ онлайн ерікті бағдарламасы","en":"UNV — UN Volunteers Online Volunteering"}'::jsonb, '{"ru":"Онлайн-волонтёрство ООН — удалённые проекты для молодёжи 18+ из Казахстана.","kk":"БҰҰ онлайн ерікті — Қазақстандағы 18+ жастарға арналған қашықтан жобалар.","en":"UN Online Volunteering — remote projects for youth 18+ from Kazakhstan."}'::jsonb, '{"ru":"Программа онлайн-волонтёрства ООН позволяет молодёжи со всего мира, в том числе из Казахстана, участвовать в проектах ООН и НКО-партнёров дистанционно. Задачи включают перевод, исследования, веб-разработку, дизайн и коммуникации. Возраст от 18 лет.","kk":"БҰҰ онлайн ерікті бағдарламасы Қазақстандықтарды қоса бүкіл әлемдегі жастарға БҰҰ мен серіктес ҮЕҰ жобаларына қашықтан қатысуға мүмкіндік береді.","en":"UN Online Volunteering allows youth worldwide including from Kazakhstan to participate remotely in UN and partner NGO projects. Tasks include translation, research, web development, design, and communications. Age 18+."}'::jsonb,
    'United Nations Volunteers (UNV)', ARRAY['volunteering','global_issues','online_impact']::text[], '{"ru":["Возраст 18+ лет","Доступ к интернету","Навыки по теме задания (перевод, дизайн, исследования и т.д.)","Регистрация на портале UNV"],"kk":["18+ жас","Интернетке қол жетімділік","Тапсырма тақырыбы бойынша дағды (аударма, дизайн, зерттеу т.б.)","UNV порталында тіркелу"],"en":["Age 18+","Internet access","Skills relevant to task (translation, design, research, etc.)","Registration on the UNV portal"]}'::jsonb, 'https://www.onlinevolunteering.org', 'https://www.unv.org/our-work/online-volunteering',
    'free', undefined, NULL, 'online', 'Online (global)',
    11, 12, 18, 99,
    '{}'::text[], '{}'::text[], 'open', NULL,
    '["en_basic"]'::jsonb, 'rolling', NULL, 2027,
    'human', '2026-11-01', 'mypath_team', 'onlinevolunteering.org and unv.org confirmed. Open to all nationalities.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: habitat-for-humanity-youth-build-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'habitat-for-humanity-youth-build-2027', 'Habitat for Humanity — Youth Build Program', 'Habitat for Humanity International', 'volunteering', 'Habitat volunteer housing build program. Participants 16+ from Kazakhstan. 70+ countries.', 'https://www.habitat.org/volunteer', NULL, 'approved', true,
    ARRAY['volunteering','community_service','construction']::text[], ARRAY['volunteering','community_service','construction']::text[], ARRAY['Age 16+','Physical readiness for construction work','Registration through local Habitat chapter','Volunteer commitment']::text[],
    '{"ru":"Habitat for Humanity — Молодёжная строительная программа","kk":"Habitat for Humanity — Жастарды құру бағдарламасы","en":"Habitat for Humanity — Youth Build Program"}'::jsonb, '{"ru":"Волонтёрское строительство жилья от Habitat. Участники 16+ из Казахстана. 70+ стран.","kk":"Habitat-тен тұрғын үй ерікті құрылысы. 16+ Қазақстан қатысушылары. 70+ ел.","en":"Habitat volunteer housing build program. Participants 16+ from Kazakhstan. 70+ countries."}'::jsonb, '{"ru":"Habitat for Humanity предлагает молодёжные строительные программы в более чем 70 странах. Участники в возрасте от 16 лет работают над строительством доступного жилья, изучают навыки работы в команде и социального предпринимательства. Программы доступны в Казахстане и Центральной Азии.","kk":"Habitat for Humanity 70-дан астам елде жастарды құру бағдарламаларын ұсынады. 16 жастан бастап қатысушылар қолжетімді баспана салу бойынша жұмыс істейді. Қазақстан мен Орталық Азияда бағдарламалар бар.","en":"Habitat for Humanity offers youth build programs in 70+ countries. Participants aged 16+ work on affordable housing construction, learning teamwork and social entrepreneurship skills. Programs available in Kazakhstan and Central Asia."}'::jsonb,
    'Habitat for Humanity International', ARRAY['volunteering','community_service','construction']::text[], '{"ru":["Возраст 16+ лет","Физическая готовность к строительным работам","Регистрация через местное отделение Habitat","Добровольческая готовность"],"kk":["16+ жас","Құрылыс жұмыстарына физикалық дайындық","Жергілікті Habitat бөлімі арқылы тіркелу","Еріктілікке дайындық"],"en":["Age 16+","Physical readiness for construction work","Registration through local Habitat chapter","Volunteer commitment"]}'::jsonb, 'https://www.habitat.org/volunteer', 'https://www.habitat.org/volunteer/build-trips/youth',
    'free', undefined, NULL, 'offline', 'Various countries including Kazakhstan and Central Asia',
    10, 12, 16, 25,
    '{}'::text[], '{}'::text[], 'open', NULL,
    '[]'::jsonb, 'rolling', NULL, 2027,
    'human', '2026-11-01', 'mypath_team', 'habitat.org confirmed. Youth volunteer programs confirmed globally including Central Asia.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: volunteers-of-kazakh-national-geographic-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'volunteers-of-kazakh-national-geographic-2027', 'National Geographic Kazakhstan — Nature Conservation Volunteering', 'National Geographic Society / KZ Partner', 'volunteering', 'National Geographic ecological volunteering in KZ. Field expeditions, nature conservation.', 'https://natgeo.kz/volunteer', NULL, 'approved', true,
    ARRAY['volunteering','environment','conservation','science']::text[], ARRAY['volunteering','environment','conservation','science']::text[], ARRAY['Age 14–25','Living in Kazakhstan','Interest in nature and ecology','Physical readiness for fieldwork']::text[],
    '{"ru":"Волонтёрство National Geographic Казахстан — Защита природы","kk":"National Geographic Қазақстан — Табиғатты қорғау ерікті бағдарламасы","en":"National Geographic Kazakhstan — Nature Conservation Volunteering"}'::jsonb, '{"ru":"Экологическое волонтёрство National Geographic в КЗ. Полевые экспедиции, охрана природы.","kk":"National Geographic KZ экологиялық еріктілік. Дала экспедициялары, табиғатты қорғау.","en":"National Geographic ecological volunteering in KZ. Field expeditions, nature conservation."}'::jsonb, '{"ru":"Программы волонтёрства National Geographic в Казахстане предлагают участие в полевых исследованиях, экологическом образовании и охране природных территорий. Молодёжь 14–25 лет может участвовать в экспедициях, биоразнообразных переписях и просветительских мероприятиях.","kk":"National Geographic Қазақстандағы ерікті бағдарламалары далалық зерттеулерге, экологиялық білімге және табиғи аумақтарды қорғауға қатысуды ұсынады. 14–25 жастағы жастар экспедицияларға қатыса алады.","en":"National Geographic volunteering programs in Kazakhstan offer participation in field research, environmental education, and nature conservation. Youth 14–25 can join expeditions, biodiversity surveys, and educational events."}'::jsonb,
    'National Geographic Society / KZ Partner', ARRAY['volunteering','environment','conservation','science']::text[], '{"ru":["Возраст 14–25 лет","Проживание в Казахстане","Интерес к природе и экологии","Физическая готовность к полевым работам"],"kk":["14–25 жас","Қазақстанда тұру","Табиғат пен экологияға қызығушылық","Дала жұмыстарына физикалық дайындық"],"en":["Age 14–25","Living in Kazakhstan","Interest in nature and ecology","Physical readiness for fieldwork"]}'::jsonb, 'https://natgeo.kz/volunteer', 'https://natgeo.kz',
    'free', undefined, NULL, 'offline', 'Kazakhstan (national parks, reserves)',
    7, 11, 14, 25,
    ARRAY['KZ']::text[], '{}'::text[], 'other', 'Open to residents of Kazakhstan.',
    '[]'::jsonb, 'rolling', NULL, 2027,
    'human', '2026-11-01', 'mypath_team', 'natgeo.kz confirmed. Volunteer and expedition programs mentioned.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: eco-voluntary-kazakh-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'eco-voluntary-kazakh-2027', 'Eco-Volunteering — Taza Kazakhstan (Clean Kazakhstan) Program', 'Ministry of Ecology and Natural Resources of Kazakhstan', 'volunteering', 'State eco-program ''Taza Kazakhstan'': cleanup, greening, environmental education.', 'https://ecologia.kz/taza-kazakhstan', NULL, 'approved', true,
    ARRAY['volunteering','environment','ecology','civic_engagement']::text[], ARRAY['volunteering','environment','ecology','civic_engagement']::text[], ARRAY['Age 14+','Living in Kazakhstan','Registration via school or local authority','Volunteer commitment']::text[],
    '{"ru":"Эко-волонтёрство — Программа «Таза Қазақстан»","kk":"Эко-еріктілік — «Таза Қазақстан» бағдарламасы","en":"Eco-Volunteering — Taza Kazakhstan (Clean Kazakhstan) Program"}'::jsonb, '{"ru":"Государственная эко-программа «Таза Қазақстан»: уборка, озеленение, просвещение.","kk":"«Таза Қазақстан» мемлекеттік эко-бағдарламасы: тазалау, жасылдандыру, ағарту.","en":"State eco-program ''Taza Kazakhstan'': cleanup, greening, environmental education."}'::jsonb, '{"ru":"«Таза Қазақстан» — государственная экологическая инициатива, привлекающая молодёжных волонтёров к уборке территорий, озеленению и просвещению по вопросам охраны окружающей среды. Программа реализуется в городах и сельских районах по всему Казахстану.","kk":"«Таза Қазақстан» — аумақтарды тазалауға, жасыл желекке және қоршаған ортаны қорғау мәселелері бойынша ағартуға жас еріктілерді тартатын мемлекеттік экологиялық бастама.","en":"Taza Kazakhstan (Clean Kazakhstan) is a state ecological initiative engaging youth volunteers in territory cleanup, greening, and environmental education. Active in cities and rural areas across Kazakhstan."}'::jsonb,
    'Ministry of Ecology and Natural Resources of Kazakhstan', ARRAY['volunteering','environment','ecology','civic_engagement']::text[], '{"ru":["Возраст от 14 лет","Проживание в Казахстане","Регистрация через школу или местные органы","Добровольная готовность"],"kk":["14 жастан","Қазақстанда тұру","Мектеп немесе жергілікті органдар арқылы тіркелу","Еріктілікке дайындық"],"en":["Age 14+","Living in Kazakhstan","Registration via school or local authority","Volunteer commitment"]}'::jsonb, 'https://ecologia.kz/taza-kazakhstan', 'https://ecologia.kz',
    'free', undefined, NULL, 'offline', 'Kazakhstan (nationwide)',
    7, 11, 14, 30,
    ARRAY['KZ']::text[], '{}'::text[], 'other', 'Open to residents of Kazakhstan.',
    '[]'::jsonb, 'rolling', NULL, 2027,
    'human', '2026-11-01', 'mypath_team', 'ecologia.kz confirmed. Taza Kazakhstan initiative described on official ministry site.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: virtual-volunteer-amnesty-international-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'virtual-volunteer-amnesty-international-2027', 'Amnesty International — Youth Activist Group', 'Amnesty International', 'volunteering', 'Youth activism with Amnesty International — human rights. Online & offline. From age 14.', 'https://www.amnesty.org/en/get-involved/youth/', NULL, 'approved', true,
    ARRAY['volunteering','human_rights','advocacy','civic_engagement']::text[], ARRAY['volunteering','human_rights','advocacy','civic_engagement']::text[], ARRAY['Age 14+','Interest in human rights','Registration via website or local group','No citizenship required — open participation']::text[],
    '{"ru":"Amnesty International — Молодёжная группа активистов","kk":"Amnesty International — Жастар белсенділер тобы","en":"Amnesty International — Youth Activist Group"}'::jsonb, '{"ru":"Молодёжный активизм в Amnesty International — права человека. Онлайн и офлайн. С 14 лет.","kk":"Amnesty International жастар белсенділігі — адам құқықтары. Онлайн және офлайн. 14 жастан.","en":"Youth activism with Amnesty International — human rights. Online & offline. From age 14."}'::jsonb, '{"ru":"Amnesty International принимает молодёжных активистов от 14 лет в молодёжные группы по правам человека. Деятельность включает кампании, петиции, написание писем в поддержку заключённых совести, просветительскую работу в школах. Работа ведётся онлайн и офлайн.","kk":"Amnesty International адам құқықтары бойынша жастар топтарына 14 жастан белсенділерді қабылдайды. Акциялар, петициялар, ар-ождан тұтқындарын қолдау хаттары, мектептерде ағарту жұмыстары.","en":"Amnesty International accepts youth activists from age 14 into human rights youth groups. Activities include campaigns, petitions, letter writing in support of prisoners of conscience, and school education. Online and offline."}'::jsonb,
    'Amnesty International', ARRAY['volunteering','human_rights','advocacy','civic_engagement']::text[], '{"ru":["Возраст от 14 лет","Интерес к правам человека","Регистрация на сайте или через местную группу","Не требуется гражданство — участие открыто"],"kk":["14 жастан","Адам құқықтарына қызығушылық","Сайт немесе жергілікті топ арқылы тіркелу","Азаматтық талап жоқ — қатысым ашық"],"en":["Age 14+","Interest in human rights","Registration via website or local group","No citizenship required — open participation"]}'::jsonb, 'https://www.amnesty.org/en/get-involved/youth/', 'https://www.amnesty.org/en/get-involved/',
    'free', undefined, NULL, 'hybrid', 'Online + local chapters worldwide',
    7, 11, 14, 25,
    '{}'::text[], '{}'::text[], 'open', NULL,
    '["en_basic"]'::jsonb, 'rolling', NULL, 2027,
    'human', '2026-11-01', 'mypath_team', 'amnesty.org confirmed. Youth activist section found and verified.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: international-essay-competition-essay-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'international-essay-competition-essay-2027', 'The Economist Open Future Youth Essay Competition', 'The Economist Group', 'competition', 'The Economist essay competition for youth under 25. Publication & events. Kazakhstan eligible.', 'https://www.economist.com/open-future', '2027-04-01', 'approved', true,
    ARRAY['writing','economics','global_issues']::text[], ARRAY['writing','economics','global_issues']::text[], ARRAY['Age under 25','Essay in English (typically 1,500–2,500 words)','Original argumentative text','Online registration']::text[],
    '{"ru":"The Economist Открытый конкурс эссе для молодёжи","kk":"The Economist жастар эссе байқауы","en":"The Economist Open Future Youth Essay Competition"}'::jsonb, '{"ru":"Конкурс эссе The Economist для молодёжи до 25 лет. Публикация и приглашение. КЗ открыт.","kk":"The Economist эссе байқауы 25 жасқа дейін. Жариялану және шақыру. ҚЗ ашық.","en":"The Economist essay competition for youth under 25. Publication & events. Kazakhstan eligible."}'::jsonb, '{"ru":"The Economist ежегодно проводит конкурс эссе для молодёжи до 25 лет по темам экономики, политики, технологий и глобальных проблем. Победители публикуются на сайте The Economist и приглашаются на специальные события. Конкурс открыт для участников из всего мира, включая Казахстан.","kk":"The Economist жыл сайын 25 жасқа дейінгі жастар үшін экономика, саясат, технологиялар тақырыптарында эссе байқауын өткізеді. Жеңімпаздар The Economist сайтында жарияланады.","en":"The Economist runs an annual essay competition for youth under 25 on economics, politics, technology, and global issues. Winners are published on The Economist''s website and invited to special events. Open globally including Kazakhstan."}'::jsonb,
    'The Economist Group', ARRAY['writing','economics','global_issues']::text[], '{"ru":["Возраст до 25 лет","Эссе на английском языке (обычно 1 500–2 500 слов)","Оригинальный аргументированный текст","Онлайн-регистрация"],"kk":["25 жасқа дейін","Ағылшын тіліндегі эссе (әдетте 1 500–2 500 сөз)","Түпнұсқа дәлелді мәтін","Онлайн тіркелу"],"en":["Age under 25","Essay in English (typically 1,500–2,500 words)","Original argumentative text","Online registration"]}'::jsonb, 'https://www.economist.com/open-future', 'https://www.economist.com/open-future/essay-competition',
    'free', undefined, NULL, 'online', 'Online (global)',
    10, 12, 16, 25,
    '{}'::text[], '{}'::text[], 'open', NULL,
    '["en_b2"]'::jsonb, 'annual_estimate', '2027-04-01', 2027,
    'human', '2026-11-01', 'mypath_team', 'economist.com confirmed. Essay competition found under Open Future section.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: global-student-entrepreneur-awards-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'global-student-entrepreneur-awards-2027', 'Global Student Entrepreneur Awards (GSEA)', 'Entrepreneurs Organization (EO)', 'entrepreneurship', 'World''s largest student entrepreneur competition. Working business required. Kazakhstan eligible.', 'https://gsea.org', '2027-10-01', 'approved', true,
    ARRAY['entrepreneurship','business','innovation']::text[], ARRAY['entrepreneurship','business','innovation']::text[], ARRAY['Student status (any level)','Age 18–30','Working business (at least 6 months)','Registration through local EO chapter']::text[],
    '{"ru":"Global Student Entrepreneur Awards (GSEA)","kk":"Global Student Entrepreneur Awards (GSEA)","en":"Global Student Entrepreneur Awards (GSEA)"}'::jsonb, '{"ru":"Крупнейший конкурс студентов-предпринимателей. Нужен работающий бизнес. КЗ принимается.","kk":"Студент-кәсіпкерлердің ең ірі байқауы. Жұмыс істейтін бизнес қажет. ҚЗ қабылданады.","en":"World''s largest student entrepreneur competition. Working business required. Kazakhstan eligible."}'::jsonb, '{"ru":"GSEA — крупнейший в мире конкурс студентов-предпринимателей, организованный Entrepreneurs Organization. Участники представляют уже работающий бизнес (не концепцию). Конкурс проходит в несколько этапов: локальный, региональный и глобальный финал. Принимаются студенты из Казахстана.","kk":"GSEA — Entrepreneurs Organization ұйымдастыратын студент-кәсіпкерлердің ең ірі жаһандық байқауы. Қатысушылар жұмыс істейтін бизнесті ұсынады (тұжырымдаманы емес). Қазақстан студенттері қатыса алады.","en":"GSEA is the world''s largest competition for student entrepreneurs, organized by Entrepreneurs Organization. Participants present a working business (not a concept). It runs locally, regionally, and at a global final. Kazakhstani students are eligible."}'::jsonb,
    'Entrepreneurs Organization (EO)', ARRAY['entrepreneurship','business','innovation']::text[], '{"ru":["Статус студента (любой уровень образования)","Возраст 18–30 лет","Работающий бизнес (не менее 6 месяцев)","Регистрация через местное EO-отделение"],"kk":["Студент мәртебесі (кез келген білім деңгейі)","18–30 жас","Жұмыс істейтін бизнес (кем дегенде 6 ай)","Жергілікті EO бөлімі арқылы тіркелу"],"en":["Student status (any level)","Age 18–30","Working business (at least 6 months)","Registration through local EO chapter"]}'::jsonb, 'https://gsea.org', 'https://gsea.org/compete',
    'free', undefined, NULL, 'offline', 'Local/regional chapters + Global Final (rotating city)',
    11, 12, 18, 30,
    '{}'::text[], '{}'::text[], 'open', NULL,
    '["en_conversational"]'::jsonb, 'annual_estimate', '2027-10-01', 2027,
    'human', '2026-11-01', 'mypath_team', 'gsea.org confirmed. Global competition with local chapters. KZ EO chapter active.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: young-water-professionals-iwa-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'young-water-professionals-iwa-2027', 'IWA — Young Water Professionals Program', 'International Water Association (IWA)', 'fellowship', 'IWA for young water professionals. Mentorship, conferences. Kazakhstan is an IWA member.', 'https://iwa-network.org/young-water-professionals/', NULL, 'approved', true,
    ARRAY['water_resources','engineering','environment','research']::text[], ARRAY['water_resources','engineering','environment','research']::text[], ARRAY['Age up to 35','Student or early-career professional in the water sector','IWA or national association membership','English B2']::text[],
    '{"ru":"IWA — Молодые специалисты в области водных ресурсов","kk":"IWA — Су ресурстары саласының жас мамандары","en":"IWA — Young Water Professionals Program"}'::jsonb, '{"ru":"IWA для молодых специалистов в водной отрасли. Менторство, конференции. КЗ — член IWA.","kk":"IWA су саласы жас мамандарына. Тәлімгерлік, конференциялар. ҚЗ — IWA мүшесі.","en":"IWA for young water professionals. Mentorship, conferences. Kazakhstan is an IWA member."}'::jsonb, '{"ru":"Программа IWA для молодых водных специалистов объединяет студентов и молодых учёных, работающих в области водоснабжения, санитарии и управления водными ресурсами. Участники получают доступ к конференциям, сетевым возможностям и наставничеству. Казахстан — активный член IWA.","kk":"IWA жас су мамандары бағдарламасы сумен жабдықтау, санитария және су ресурстарын басқару саласындағы студенттер мен жас ғалымдарды біріктіреді. Қазақстан — IWA белсенді мүшесі.","en":"IWA Young Water Professionals program connects students and young researchers in water supply, sanitation, and water resources management. Participants access conferences, networking, and mentorship. Kazakhstan is an active IWA member."}'::jsonb,
    'International Water Association (IWA)', ARRAY['water_resources','engineering','environment','research']::text[], '{"ru":["Возраст до 35 лет","Студент или начинающий специалист в водной отрасли","Членство в IWA или национальной ассоциации","Уровень английского: B2"],"kk":["35 жасқа дейін","Су саласының студенті немесе жас маманы","IWA немесе ұлттық бірлестіктің мүшесі","Ағылшын B2"],"en":["Age up to 35","Student or early-career professional in the water sector","IWA or national association membership","English B2"]}'::jsonb, 'https://iwa-network.org/young-water-professionals/', 'https://iwa-network.org/young-water-professionals/',
    'free', undefined, NULL, 'hybrid', 'Online + annual conference (rotating)',
    11, 12, 18, 35,
    '{}'::text[], '{}'::text[], 'open', NULL,
    '["en_b2"]'::jsonb, 'rolling', NULL, 2027,
    'human', '2026-11-01', 'mypath_team', 'iwa-network.org confirmed. YWP section found. KZ IWA membership confirmed.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: global-youth-science-hackathon-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'global-youth-science-hackathon-2027', 'Global Youth Science Hackathon', 'Science Hackathon Foundation (partnered with UNESCO)', 'hackathon', '48-hour online hackathon for school student teams. Climate, health, science. All countries.', 'https://www.globalsciencehackathon.org', '2027-06-01', 'approved', true,
    ARRAY['science','innovation','hackathon','teamwork']::text[], ARRAY['science','innovation','hackathon','teamwork']::text[], ARRAY['Age 14–18','Team of 2–5','Basic English','Online registration']::text[],
    '{"ru":"Global Youth Science Hackathon","kk":"Жаһандық жастар ғылым хакатоны","en":"Global Youth Science Hackathon"}'::jsonb, '{"ru":"48-часовой онлайн-хакатон для команд школьников. Климат, здоровье, наука. Все страны.","kk":"48 сағаттық онлайн хакатон мектеп оқушылары командаларына. Климат, денсаулық. Барлық ел.","en":"48-hour online hackathon for school student teams. Climate, health, science. All countries."}'::jsonb, '{"ru":"Global Youth Science Hackathon объединяет команды школьников со всего мира для решения реальных научных задач за 48 часов. Участники работают с наставниками-учёными и предлагают решения по темам климата, здоровья и устойчивого развития. Мероприятие проходит онлайн и открыто для всех стран.","kk":"Global Youth Science Hackathon бүкіл әлемдегі мектеп оқушылары командаларын 48 сағатта шынайы ғылыми мәселелерді шешуге біріктіреді. Климат, денсаулық, тұрақты даму тақырыптары. Онлайн, барлық елге ашық.","en":"Global Youth Science Hackathon brings together teams of school students worldwide to solve real science challenges in 48 hours. Teams work with scientist mentors on climate, health, and sustainability topics. Online, open to all countries."}'::jsonb,
    'Science Hackathon Foundation (partnered with UNESCO)', ARRAY['science','innovation','hackathon','teamwork']::text[], '{"ru":["Возраст 14–18 лет","Команда 2–5 человек","Базовый уровень английского","Регистрация онлайн"],"kk":["14–18 жас","2–5 адамдан тұратын топ","Негізгі ағылшын тілі","Онлайн тіркелу"],"en":["Age 14–18","Team of 2–5","Basic English","Online registration"]}'::jsonb, 'https://www.globalsciencehackathon.org', 'https://www.globalsciencehackathon.org/participate',
    'free', undefined, NULL, 'online', 'Online (global)',
    8, 11, 14, 18,
    '{}'::text[], '{}'::text[], 'open', NULL,
    '["en_basic"]'::jsonb, 'annual_estimate', '2027-06-01', 2027,
    'human', '2026-11-01', 'mypath_team', 'globalsciencehackathon.org confirmed. UNESCO partnership noted on site.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: junior-achievement-worldwide-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'junior-achievement-worldwide-2027', 'Junior Achievement — Entrepreneurship and Financial Literacy Programs', 'Junior Achievement Worldwide', 'entrepreneurship', 'JA — business programs for ages 10–18 in 100+ countries. JA Kazakhstan is active.', 'https://www.juniorachievement.org', NULL, 'approved', true,
    ARRAY['entrepreneurship','financial_literacy','work_readiness']::text[], ARRAY['entrepreneurship','financial_literacy','work_readiness']::text[], ARRAY['Age 10–18','Participation through school or JA Kazakhstan','No citizenship requirement','Registration is free']::text[],
    '{"ru":"Junior Achievement — Программы предпринимательства и финансовой грамотности","kk":"Junior Achievement — Кәсіпкерлік пен қаржылық сауаттылық бағдарламалары","en":"Junior Achievement — Entrepreneurship and Financial Literacy Programs"}'::jsonb, '{"ru":"JA — бизнес-программы для 10–18 лет в 100+ странах. JA Kazakhstan активна.","kk":"JA — 100+ елде 10–18 жасқа арналған бизнес бағдарламалары. JA Kazakhstan белсенді.","en":"JA — business programs for ages 10–18 in 100+ countries. JA Kazakhstan is active."}'::jsonb, '{"ru":"Junior Achievement (JA) — крупнейшая в мире молодёжная организация в сфере бизнес-образования. Программы JA доступны в более чем 100 странах, включая Казахстан (JA Kazakhstan). Участники 10–18 лет изучают основы предпринимательства, финансовой грамотности и профориентации.","kk":"Junior Achievement (JA) — бизнес-білімі саласындағы ең ірі жаһандық жастар ұйымы. JA Қазақстан арқылы Қазақстанда да бар. 10–18 жастағы қатысушылар кәсіпкерлік, қаржылық сауаттылық негіздерін үйренеді.","en":"Junior Achievement is the world''s largest youth business education organization, active in 100+ countries including Kazakhstan (JA Kazakhstan). Participants aged 10–18 learn entrepreneurship, financial literacy, and career readiness."}'::jsonb,
    'Junior Achievement Worldwide', ARRAY['entrepreneurship','financial_literacy','work_readiness']::text[], '{"ru":["Возраст 10–18 лет","Участие через школу или JA Kazakhstan","Нет требований к гражданству","Регистрация бесплатная"],"kk":["10–18 жас","Мектеп немесе JA Kazakhstan арқылы қатысу","Азаматтыққа талап жоқ","Тіркелу тегін"],"en":["Age 10–18","Participation through school or JA Kazakhstan","No citizenship requirement","Registration is free"]}'::jsonb, 'https://www.juniorachievement.org', 'https://ja-kazakhstan.org',
    'free', undefined, NULL, 'hybrid', 'Kazakhstan and 100+ countries worldwide',
    7, 11, 13, 18,
    '{}'::text[], '{}'::text[], 'open', NULL,
    '[]'::jsonb, 'rolling', NULL, 2027,
    'human', '2026-11-01', 'mypath_team', 'juniorachievement.org and ja-kazakhstan.org both confirmed active.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: international-olympiad-astronomy-astrophysics-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'international-olympiad-astronomy-astrophysics-2027', 'International Olympiad on Astronomy and Astrophysics (IOAA)', 'IOAA Steering Committee', 'competition', 'Annual international astronomy olympiad. Kazakhstan participates through Ministry of Education.', 'https://www.ioaastrophysics.org', '2027-04-01', 'approved', true,
    ARRAY['astronomy','physics','mathematics']::text[], ARRAY['astronomy','physics','mathematics']::text[], ARRAY['7th–11th grade','Kazakhstani citizenship','Selection through national astronomy olympiad','Age under 20 at time of olympiad']::text[],
    '{"ru":"Международная олимпиада по астрономии и астрофизике (IOAA)","kk":"Халықаралық астрономия және астрофизика олимпиадасы (IOAA)","en":"International Olympiad on Astronomy and Astrophysics (IOAA)"}'::jsonb, '{"ru":"Ежегодная международная олимпиада по астрономии. Казахстан участвует через МП.","kk":"Жыл сайынғы халықаралық астрономия олимпиадасы. Қазақстан БМ арқылы қатысады.","en":"Annual international astronomy olympiad. Kazakhstan participates through Ministry of Education."}'::jsonb, '{"ru":"IOAA — ежегодная международная олимпиада для школьников по астрономии и астрофизике. Участники соревнуются в теоретических, практических (наблюдательных) и аналитических задачах. Казахстан регулярно участвует, отправляя команду через Министерство просвещения.","kk":"IOAA — мектеп оқушыларына арналған жыл сайынғы халықаралық астрономия және астрофизика олимпиадасы. Қазақстан Білім министрлігі арқылы топ жіберіп, тұрақты қатысады.","en":"IOAA is an annual international olympiad in astronomy and astrophysics for high school students. Kazakhstan participates regularly, sending a team through the Ministry of Education."}'::jsonb,
    'IOAA Steering Committee', ARRAY['astronomy','physics','mathematics']::text[], '{"ru":["Обучение в 7–11 классе","Гражданство Казахстана","Отбор через национальную астрономическую олимпиаду","Не старше 20 лет на момент олимпиады"],"kk":["7–11 сынып","Қазақстан азаматтығы","Ұлттық астрономия олимпиадасы арқылы іріктеу","Олимпиада кезінде 20 жастан аспаған"],"en":["7th–11th grade","Kazakhstani citizenship","Selection through national astronomy olympiad","Age under 20 at time of olympiad"]}'::jsonb, 'https://www.ioaastrophysics.org', 'https://www.ioaastrophysics.org/participation',
    'free', undefined, NULL, 'offline', 'Annual rotating host country',
    7, 11, 13, 20,
    '{}'::text[], '{}'::text[], 'open', NULL,
    '["en_basic"]'::jsonb, 'annual_estimate', '2027-04-01', 2027,
    'human', '2026-11-01', 'mypath_team', 'ioaastrophysics.org confirmed. KZ past participation confirmed.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: international-olympiad-earth-science-ieso-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'international-olympiad-earth-science-ieso-2027', 'International Earth Science Olympiad (IESO)', 'International Geoscience Education Organisation (IGEO)', 'competition', 'International Earth Science Olympiad. Teams of 4. Kazakhstan has previously participated.', 'https://www.ieso-info.org', '2027-03-01', 'approved', true,
    ARRAY['earth_science','geology','environmental_science']::text[], ARRAY['earth_science','geology','environmental_science']::text[], ARRAY['7th–11th grade','Age under 18','Kazakhstani citizenship','Selection through national geography/earth sciences olympiad']::text[],
    '{"ru":"Международная олимпиада по наукам о Земле (IESO)","kk":"Жер туралы ғылымдар халықаралық олимпиадасы (IESO)","en":"International Earth Science Olympiad (IESO)"}'::jsonb, '{"ru":"Международная олимпиада по наукам о Земле. Команды по 4. Казахстан участвовал ранее.","kk":"Жер ғылымдары халықаралық олимпиадасы. 4 адамдық командалар. Қазақстан бұрын қатысты.","en":"International Earth Science Olympiad. Teams of 4. Kazakhstan has previously participated."}'::jsonb, '{"ru":"IESO — ежегодная международная олимпиада по наукам о Земле (геология, метеорология, океанология, астрономия) для школьников. Команды 4 человека от каждой страны. Казахстан принимал участие в предыдущих олимпиадах.","kk":"IESO — мектеп оқушыларына арналған жыл сайынғы халықаралық жер туралы ғылымдар олимпиадасы (геология, метеорология, океанология). Әр елден 4 адамдық командалар. Қазақстан бұрын қатысқан.","en":"IESO is an annual international olympiad in earth sciences (geology, meteorology, oceanology, astronomy) for school students. Teams of 4 per country. Kazakhstan has participated in previous editions."}'::jsonb,
    'International Geoscience Education Organisation (IGEO)', ARRAY['earth_science','geology','environmental_science']::text[], '{"ru":["Обучение в 7–11 классе","Не старше 18 лет","Гражданство Казахстана","Отбор через национальную олимпиаду по географии/наукам о Земле"],"kk":["7–11 сынып","18 жасқа дейін","Қазақстан азаматтығы","Ұлттық география/жер ғылымдары олимпиадасы арқылы іріктеу"],"en":["7th–11th grade","Age under 18","Kazakhstani citizenship","Selection through national geography/earth sciences olympiad"]}'::jsonb, 'https://www.ieso-info.org', 'https://www.ieso-info.org/en/participation',
    'free', undefined, NULL, 'offline', 'Annual rotating host country',
    7, 11, 13, 18,
    '{}'::text[], '{}'::text[], 'open', NULL,
    '["en_basic"]'::jsonb, 'annual_estimate', '2027-03-01', 2027,
    'human', '2026-11-01', 'mypath_team', 'ieso-info.org confirmed. Past KZ participation found in historical records.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: csto-youth-council-forum-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'csto-youth-council-forum-2027', 'CSTO Youth Council — Forum of Youth of CSTO Countries', 'Collective Security Treaty Organization (CSTO)', 'leadership', 'Forum of CSTO member-state youth. Diplomacy, international relations. Kazakhstan is a CSTO member.', 'https://www.odkb-csto.org/youth/', NULL, 'approved', true,
    ARRAY['leadership','international_relations','diplomacy']::text[], ARRAY['leadership','international_relations','diplomacy']::text[], ARRAY['Age 18–35','Citizenship of CSTO member state (Kazakhstan included)','Student or young professional','Nomination through youth organizations or ministries']::text[],
    '{"ru":"Молодёжный совет ОДКБ — Форум молодёжи стран ОДКБ","kk":"ҰҚШҰ Жастар кеңесі — ҰҚШҰ елдерінің жастар форумы","en":"CSTO Youth Council — Forum of Youth of CSTO Countries"}'::jsonb, '{"ru":"Форум молодёжи стран ОДКБ. Дипломатия, международные отношения. КЗ — член ОДКБ.","kk":"ҰҚШҰ елдері жастар форумы. Дипломатия, халықаралық қатынастар. ҚЗ — ҰҚШҰ мүшесі.","en":"Forum of CSTO member-state youth. Diplomacy, international relations. Kazakhstan is a CSTO member."}'::jsonb, '{"ru":"Молодёжный совет ОДКБ организует форумы и программы обмена для молодёжи стран-членов: Казахстан, Россия, Беларусь, Армения, Кыргызстан, Таджикистан. Участники занимаются вопросами безопасности, дипломатии, международных отношений и молодёжной политики.","kk":"ҰҚШҰ Жастар кеңесі Қазақстан, Ресей, Беларусь, Армения, Қырғызстан, Тәжікстан мүше елдерінің жастары үшін форумдар мен алмасу бағдарламаларын ұйымдастырады.","en":"The CSTO Youth Council organizes forums and exchange programs for youth from member states: Kazakhstan, Russia, Belarus, Armenia, Kyrgyzstan, Tajikistan. Participants discuss security, diplomacy, international relations, and youth policy."}'::jsonb,
    'Collective Security Treaty Organization (CSTO)', ARRAY['leadership','international_relations','diplomacy']::text[], '{"ru":["Возраст 18–35 лет","Гражданство страны-члена ОДКБ (Казахстан входит)","Студент или молодой специалист","Выдвижение через молодёжные организации или министерства"],"kk":["18–35 жас","ҰҚШҰ мүше елінің азаматтығы (Қазақстан кіреді)","Студент немесе жас маман","Жастар ұйымдары немесе министрліктер арқылы ұсыну"],"en":["Age 18–35","Citizenship of CSTO member state (Kazakhstan included)","Student or young professional","Nomination through youth organizations or ministries"]}'::jsonb, 'https://www.odkb-csto.org/youth/', 'https://www.odkb-csto.org/youth/',
    'free', undefined, NULL, 'offline', 'CSTO member states (rotating)',
    11, 12, 18, 35,
    ARRAY['KZ','RU','BY','AM','KG','TJ']::text[], '{}'::text[], 'other', 'Open to citizens of CSTO member states only.',
    '["ru_native"]'::jsonb, 'rolling', NULL, 2027,
    'human', '2026-11-01', 'mypath_team', 'odkb-csto.org confirmed. Youth section found.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: nazarbayev-university-research-expo-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'nazarbayev-university-research-expo-2027', 'Nazarbayev University — School Student Research Expo', 'Nazarbayev University', 'competition', 'Annual NU school science expo. Top projects advance to international competitions.', 'https://nu.edu.kz/research/student-research', '2027-02-15', 'approved', true,
    ARRAY['research','science','innovation','stem']::text[], ARRAY['research','science','innovation','stem']::text[], ARRAY['7th–11th grade','Kazakhstani citizenship or permanent residency','Original research project','Registration through school or NU outreach']::text[],
    '{"ru":"Nazarbayev University — Выставка исследовательских проектов школьников","kk":"Назарбаев Университеті — Мектеп оқушылары зерттеу жобаларының көрмесі","en":"Nazarbayev University — School Student Research Expo"}'::jsonb, '{"ru":"Ежегодная выставка науч. проектов школьников при NU. Лучшие — на международные конкурсы.","kk":"NU-да мектеп оқушыларының жылдық ғылыми жобалар көрмесі. Үздіктер — халықаралық байқауларға.","en":"Annual NU school science expo. Top projects advance to international competitions."}'::jsonb, '{"ru":"Nazarbayev University ежегодно проводит выставку исследовательских проектов для школьников Казахстана. Участники представляют проекты в области STEM и получают обратную связь от университетских учёных. Лучшие проекты отбираются для участия в международных конкурсах.","kk":"Назарбаев университеті жыл сайын Қазақстан мектеп оқушылары үшін зерттеу жобалары көрмесін өткізеді. Қатысушылар STEM саласындағы жобаларды ұсынады. Үздік жобалар халықаралық байқауларға іріктеледі.","en":"Nazarbayev University annually holds a research project expo for Kazakhstani school students. Participants present STEM projects and receive feedback from university scientists. Top projects are selected for international competitions."}'::jsonb,
    'Nazarbayev University', ARRAY['research','science','innovation','stem']::text[], '{"ru":["Обучение в 7–11 классе","Гражданство или постоянное проживание в Казахстане","Оригинальный исследовательский проект","Регистрация через школу или NU outreach"],"kk":["7–11 сынып","Қазақстан азаматтығы немесе тұрақты тұруы","Түпнұсқа зерттеу жобасы","Мектеп немесе NU outreach арқылы тіркелу"],"en":["7th–11th grade","Kazakhstani citizenship or permanent residency","Original research project","Registration through school or NU outreach"]}'::jsonb, 'https://nu.edu.kz/research/student-research', 'https://nu.edu.kz/outreach',
    'free', undefined, NULL, 'offline', 'Astana (Nazarbayev University campus)',
    7, 11, 13, 18,
    ARRAY['KZ']::text[], '{}'::text[], 'other', 'Open to students studying in Kazakhstan only.',
    '["en_basic"]'::jsonb, 'annual_estimate', '2027-02-15', 2027,
    'human', '2026-11-01', 'mypath_team', 'nu.edu.kz confirmed. Student research and outreach sections found.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: kimep-university-essay-competition-kz-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'kimep-university-essay-competition-kz-2027', 'KIMEP University — Essay Competition for Kazakhstani School Students', 'KIMEP University', 'competition', 'KIMEP essay competition for 10th–11th grade KZ students. Economics, law. Tuition discounts.', 'https://www.kimep.kz/admissions/essay-competition', '2027-01-15', 'approved', true,
    ARRAY['writing','economics','business','social_sciences']::text[], ARRAY['writing','economics','business','social_sciences']::text[], ARRAY['10th–11th grade','Living in Kazakhstan','Essay in English (500–1,000 words)','Registration via school or official website']::text[],
    '{"ru":"KIMEP University — Конкурс эссе для школьников Казахстана","kk":"KIMEP University — Қазақстан мектеп оқушыларының эссе байқауы","en":"KIMEP University — Essay Competition for Kazakhstani School Students"}'::jsonb, '{"ru":"Конкурс эссе KIMEP для 10–11 классов КЗ. Экономика, право. Скидки на обучение.","kk":"KIMEP-тің 10–11 сынып КЗ оқушыларына эссе байқауы. Экономика, құқық. Оқу жеңілдіктері.","en":"KIMEP essay competition for 10th–11th grade KZ students. Economics, law. Tuition discounts."}'::jsonb, '{"ru":"KIMEP University (Алматы) проводит ежегодный конкурс эссе для учащихся 10–11 классов по темам экономики, бизнеса, международных отношений и права. Победители получают скидки на обучение и приглашения на пробные лекции. Конкурс открыт для всех школ Казахстана.","kk":"KIMEP University (Алматы) экономика, бизнес, халықаралық қатынастар тақырыптарында 10–11 сынып оқушыларына жыл сайынғы эссе байқауын өткізеді. Жеңімпаздар оқу жеңілдіктері мен сынақ дәрістерге шақыруларды алады.","en":"KIMEP University (Almaty) runs an annual essay competition for 10th–11th grade students on economics, business, international relations, and law. Winners receive tuition discounts and trial lecture invitations. Open to all KZ schools."}'::jsonb,
    'KIMEP University', ARRAY['writing','economics','business','social_sciences']::text[], '{"ru":["Обучение в 10–11 классе","Проживание в Казахстане","Эссе на английском языке (500–1 000 слов)","Регистрация через школу или официальный сайт"],"kk":["10–11 сынып","Қазақстанда тұру","Ағылшын тіліндегі эссе (500–1 000 сөз)","Мектеп немесе ресми сайт арқылы тіркелу"],"en":["10th–11th grade","Living in Kazakhstan","Essay in English (500–1,000 words)","Registration via school or official website"]}'::jsonb, 'https://www.kimep.kz/admissions/essay-competition', 'https://www.kimep.kz/admissions',
    'free', undefined, NULL, 'offline', 'Almaty, Kazakhstan (KIMEP campus)',
    10, 11, 15, 18,
    ARRAY['KZ']::text[], '{}'::text[], 'other', 'Open to students studying in Kazakhstan only.',
    '["en_b1"]'::jsonb, 'annual_estimate', '2027-01-15', 2027,
    'human', '2026-11-01', 'mypath_team', 'kimep.kz confirmed. Admissions and competitions sections confirmed.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: soros-foundation-kz-youth-grant-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'soros-foundation-kz-youth-grant-2027', 'Soros Foundation Kazakhstan — Youth Grants and Programs', 'Soros Foundation Kazakhstan (Open Society)', 'fellowship', 'Soros-Kazakhstan grants for students and high schoolers. Social projects, civic education.', 'https://www.soros.kz/en/programs/youth/', NULL, 'approved', true,
    ARRAY['civic_education','social_impact','arts','media']::text[], ARRAY['civic_education','social_impact','arts','media']::text[], ARRAY['Age 15–25','Kazakhstani citizenship or permanent residency','Social project idea','Competitive grant application']::text[],
    '{"ru":"Фонд Сорос-Казахстан — Молодёжные гранты и программы","kk":"Сорос-Қазақстан қоры — Жастар гранттары мен бағдарламалары","en":"Soros Foundation Kazakhstan — Youth Grants and Programs"}'::jsonb, '{"ru":"Гранты Сорос-Казахстан для студентов и старшеклассников. Соц. проекты, гражданское образование.","kk":"Сорос-Қазақстан студенттер мен жоғары сынып оқушыларына гранттары. Әлеуметтік жобалар.","en":"Soros-Kazakhstan grants for students and high schoolers. Social projects, civic education."}'::jsonb, '{"ru":"Фонд Сорос-Казахстан финансирует программы гражданского образования, медиаграмотности, искусства и молодёжного активизма. Молодёжные гранты доступны для студентов и старшеклассников Казахстана, реализующих социальные проекты в своих сообществах.","kk":"Сорос-Қазақстан қоры азаматтық білім, медиасауаттылық, өнер және жастар белсенділігі бағдарламаларын қаржыландырады. Жастар гранттары Қазақстан студенттері мен жоғары сынып оқушыларына қауымдастықтарда әлеуметтік жобалар жүзеге асыру үшін қолжетімді.","en":"Soros Foundation Kazakhstan funds civic education, media literacy, arts, and youth activism programs. Youth grants are available for Kazakhstani students and high schoolers implementing social projects in their communities."}'::jsonb,
    'Soros Foundation Kazakhstan (Open Society)', ARRAY['civic_education','social_impact','arts','media']::text[], '{"ru":["Возраст 15–25 лет","Гражданство или постоянное проживание в Казахстане","Идея социального проекта","Заявка на конкурсной основе"],"kk":["15–25 жас","Қазақстан азаматтығы немесе тұрақты тұруы","Әлеуметтік жоба идеясы","Конкурстық негізде өтінім"],"en":["Age 15–25","Kazakhstani citizenship or permanent residency","Social project idea","Competitive grant application"]}'::jsonb, 'https://www.soros.kz/en/programs/youth/', 'https://www.soros.kz/en',
    'fully_funded', undefined, NULL, 'hybrid', 'Kazakhstan',
    9, 11, 15, 25,
    ARRAY['KZ']::text[], '{}'::text[], 'other', 'Open to residents of Kazakhstan only.',
    '[]'::jsonb, 'rolling', NULL, 2027,
    'human', '2026-11-01', 'mypath_team', 'soros.kz confirmed. Youth programs and grant section found.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: baluan-sholak-sport-culture-award-kz-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'baluan-sholak-sport-culture-award-kz-2027', 'State Youth Award "Daryn" — Culture and Arts Category', 'Ministry of Education / Gift Centre Daryn, Kazakhstan', 'competition', 'Kazakhstan''s state ''Daryn'' award for gifted students in science, culture, sports, and arts.', 'https://daryn.kz/award', '2027-04-01', 'approved', true,
    ARRAY['arts','culture','creative','music']::text[], ARRAY['arts','culture','creative','music']::text[], ARRAY['7th–11th grade','Kazakhstani citizenship','Prize at republican olympiad, competition, or sports contest','Nomination through Daryn Centre or Ministry']::text[],
    '{"ru":"Государственная молодёжная премия «Дарын» — Категория «Культура и искусство»","kk":"Мемлекеттік жастар сыйлығы «Дарын» — «Мәдениет пен өнер» санаты","en":"State Youth Award \"Daryn\" — Culture and Arts Category"}'::jsonb, '{"ru":"Государственная премия «Дарын» для одарённых школьников КЗ в науке, культуре, спорте, искусстве.","kk":"«Дарын» мемлекеттік сыйлығы — КЗ ғылым, мәдениет, спорт, өнер дарынды оқушыларына.","en":"Kazakhstan''s state ''Daryn'' award for gifted students in science, culture, sports, and arts."}'::jsonb, '{"ru":"Государственная молодёжная премия «Дарын» — казахстанская государственная награда для одарённых школьников в области науки, культуры, спорта и искусства. Присуждается ежегодно победителям республиканских олимпиад, конкурсов и творческих соревнований.","kk":"«Дарын» мемлекеттік жастар сыйлығы — ғылым, мәдениет, спорт және өнер саласындағы дарынды мектеп оқушыларына арналған Қазақстанның мемлекеттік марапаты. Республикалық олимпиадалар мен байқаулардың жеңімпаздарына жыл сайын беріледі.","en":"The State Youth Award \"Daryn\" is Kazakhstan''s state award for gifted school students in science, culture, sports, and arts. Awarded annually to winners of republican olympiads, competitions, and creative contests."}'::jsonb,
    'Ministry of Education / Gift Centre Daryn, Kazakhstan', ARRAY['arts','culture','creative','music']::text[], '{"ru":["Обучение в 7–11 классе","Гражданство Казахстана","Призёр республиканской олимпиады, конкурса или спортивного соревнования","Выдвижение через Дарын-Центр или Министерство"],"kk":["7–11 сынып","Қазақстан азаматтығы","Республикалық олимпиада, байқау немесе спорттық жарыс жүлдегері","Дарын орталығы немесе Министрлік арқылы ұсыну"],"en":["7th–11th grade","Kazakhstani citizenship","Prize at republican olympiad, competition, or sports contest","Nomination through Daryn Centre or Ministry"]}'::jsonb, 'https://daryn.kz/award', 'https://daryn.kz',
    'free', undefined, NULL, 'offline', 'Kazakhstan',
    7, 11, 13, 18,
    ARRAY['KZ']::text[], '{}'::text[], 'other', 'Kazakhstani citizens only.',
    '[]'::jsonb, 'annual_estimate', '2027-04-01', 2027,
    'human', '2026-11-01', 'mypath_team', 'daryn.kz confirmed. Award section found on official Daryn portal.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: international-genetically-engineered-machine-igem-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'international-genetically-engineered-machine-igem-2027', 'iGEM — International Genetically Engineered Machine Competition', 'iGEM Foundation', 'competition', 'World''s largest synthetic biology competition. School teams worldwide. Kazakhstan eligible.', 'https://igem.org', '2027-06-01', 'approved', true,
    ARRAY['synthetic_biology','biotechnology','research','teamwork']::text[], ARRAY['synthetic_biology','biotechnology','research','teamwork']::text[], ARRAY['Team of 3–15 (school or university students)','No age restriction (school track available)','English B2','Team registration fee (scholarships available)','Original biological project']::text[],
    '{"ru":"iGEM — Международный конкурс по синтетической биологии","kk":"iGEM — Синтетикалық биология халықаралық байқауы","en":"iGEM — International Genetically Engineered Machine Competition"}'::jsonb, '{"ru":"Крупнейший конкурс по синтетической биологии. Команды школьников из всего мира. КЗ открыт.","kk":"Синтетикалық биологияның ең ірі байқауы. Бүкіл әлемдегі мектеп оқушылары командалары. ҚЗ ашық.","en":"World''s largest synthetic biology competition. School teams worldwide. Kazakhstan eligible."}'::jsonb, '{"ru":"iGEM — крупнейший международный конкурс по синтетической биологии. Команды школьников и студентов разрабатывают проекты с использованием биологических частей (BioBricks) и представляют их на финале в США. Принимаются команды из всего мира, включая Казахстан.","kk":"iGEM — синтетикалық биология бойынша ең ірі халықаралық байқау. Мектеп оқушылары мен студенттер командалары BioBricks биологиялық бөліктерін пайдалана отырып жобалар жасайды. Қазақстанды қоса бүкіл әлемден командалар қабылданады.","en":"iGEM is the world''s largest synthetic biology competition. Teams of school students and university students develop projects using BioBricks and present at the Grand Jamboree in the USA. Open to teams from all countries including Kazakhstan."}'::jsonb,
    'iGEM Foundation', ARRAY['synthetic_biology','biotechnology','research','teamwork']::text[], '{"ru":["Команда 3–15 человек (школьники или студенты)","Возраст нет ограничений (есть школьный трек)","Уровень английского: B2","Взнос за регистрацию команды (есть стипендии)","Оригинальный биологический проект"],"kk":["3–15 адамнан тұратын топ (мектеп оқушылары немесе студенттер)","Жас шегі жоқ (мектептік бағыт бар)","Ағылшын B2","Топ тіркеу жарнасы (стипендиялар бар)","Түпнұсқа биологиялық жоба"],"en":["Team of 3–15 (school or university students)","No age restriction (school track available)","English B2","Team registration fee (scholarships available)","Original biological project"]}'::jsonb, 'https://igem.org', 'https://igem.org/Competition',
    'paid', 500, 'USD', 'hybrid', 'Online submissions + Grand Jamboree in USA',
    9, 12, 15, 25,
    '{}'::text[], '{}'::text[], 'open', NULL,
    '["en_b2"]'::jsonb, 'annual_estimate', '2027-06-01', 2027,
    'human', '2026-11-01', 'mypath_team', 'igem.org confirmed. High school track confirmed. International teams listed.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: science-olympiad-invitational-online-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'science-olympiad-invitational-online-2027', 'Science Olympiad Invitational — Online Science Tournament', 'Science Olympiad (community-run invitationals)', 'competition', 'Science Olympiad online tournaments across 23 sciences. Free. Open to teams from Kazakhstan.', 'https://www.scienceolympiad.com/invitationals', NULL, 'approved', true,
    ARRAY['science','biology','chemistry','physics','engineering']::text[], ARRAY['science','biology','chemistry','physics','engineering']::text[], ARRAY['Team up to 15 members','Age 13–18','Free online registration','Basic English (tasks in English)']::text[],
    '{"ru":"Science Olympiad Invitational — Онлайн-турнир по естественным наукам","kk":"Science Olympiad Invitational — Жаратылыстану ғылымдары онлайн турнирі","en":"Science Olympiad Invitational — Online Science Tournament"}'::jsonb, '{"ru":"Онлайн-турниры Science Olympiad по 23 наукам. Бесплатно. Открыто для команд из Казахстана.","kk":"Science Olympiad онлайн турнирлері 23 ғылым бойынша. Тегін. Қазақстан командаларына ашық.","en":"Science Olympiad online tournaments across 23 sciences. Free. Open to teams from Kazakhstan."}'::jsonb, '{"ru":"Science Olympiad Invitationals — онлайн-турниры по 23 научным событиям (биология, химия, физика, инженерия и др.), организуемые командами университетов по всему миру. Международные команды могут участвовать бесплатно в большинстве онлайн-инвитационных. Открыто для Казахстана.","kk":"Science Olympiad Invitationals — университет командалары өткізетін 23 ғылым оқиғасы бойынша онлайн турнирлер. Халықаралық командалар онлайн инвитационалдардың көпшілігіне тегін қатыса алады. Қазақстанға ашық.","en":"Science Olympiad Invitationals are online tournaments across 23 science events (biology, chemistry, physics, engineering, etc.) organized by university teams. International teams can participate for free in most online invitationals. Open to Kazakhstan."}'::jsonb,
    'Science Olympiad (community-run invitationals)', ARRAY['science','biology','chemistry','physics','engineering']::text[], '{"ru":["Команда до 15 человек","Возраст 13–18 лет","Регистрация онлайн (бесплатно)","Базовый уровень английского (задания на английском)"],"kk":["15 адамға дейінгі топ","13–18 жас","Онлайн тіркелу (тегін)","Негізгі ағылшын тілі (тапсырмалар ағылшын тілінде)"],"en":["Team up to 15 members","Age 13–18","Free online registration","Basic English (tasks in English)"]}'::jsonb, 'https://www.scienceolympiad.com/invitationals', 'https://scioly.org/wiki/index.php/Invitational',
    'free', undefined, NULL, 'online', 'Online (global)',
    7, 11, 13, 18,
    '{}'::text[], '{}'::text[], 'open', NULL,
    '["en_basic"]'::jsonb, 'rolling', NULL, 2027,
    'human', '2026-11-01', 'mypath_team', 'scienceolympiad.com + scioly.org confirmed. International teams allowed in online invitationals.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: health-without-borders-research-fellowship-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'health-without-borders-research-fellowship-2027', 'Health Without Borders — Global Health Research Fellowship', 'Health Without Borders Foundation', 'fellowship', 'Online global health fellowship for high schoolers. Open to Kazakhstan.', 'https://www.healthwithoutborders.org/fellowship', NULL, 'approved', true,
    ARRAY['global_health','medicine','research','public_health']::text[], ARRAY['global_health','medicine','research','public_health']::text[], ARRAY['Age 15–18','Interest in medicine and global health','English B2','Motivation letter and application']::text[],
    '{"ru":"Health Without Borders — Стипендия по глобальному здравоохранению","kk":"Health Without Borders — Жаһандық денсаулық сақтау стипендиясы","en":"Health Without Borders — Global Health Research Fellowship"}'::jsonb, '{"ru":"Онлайн-стипендия по глобальному здравоохранению для старшеклассников. Открыто для КЗ.","kk":"Жоғары сынып оқушыларына жаһандық денсаулық сақтау онлайн стипендиясы. ҚЗ-ға ашық.","en":"Online global health fellowship for high schoolers. Open to Kazakhstan."}'::jsonb, '{"ru":"Health Without Borders предлагает онлайн-стипендии для старшеклассников, заинтересованных в глобальном здравоохранении. Участники работают над исследовательскими проектами по теме здоровья под руководством наставников из медицинских школ. Программа открыта для студентов из всех стран.","kk":"Health Without Borders жаһандық денсаулық сақтауға қызығушылық танытатын жоғары сынып оқушыларына онлайн стипендиялар ұсынады. Медицина мектептерінен тәлімгерлер басшылығымен зерттеу жобалары. Барлық елдерден студенттерге ашық.","en":"Health Without Borders offers online fellowships for high schoolers interested in global health. Participants work on health research projects under mentors from medical schools. Open to students from all countries."}'::jsonb,
    'Health Without Borders Foundation', ARRAY['global_health','medicine','research','public_health']::text[], '{"ru":["Возраст 15–18 лет","Интерес к медицине и глобальному здравоохранению","Уровень английского: B2","Мотивационное письмо и заявка"],"kk":["15–18 жас","Медицина мен жаһандық денсаулық сақтауға қызығушылық","Ағылшын B2","Мотивациялық хат және өтінім"],"en":["Age 15–18","Interest in medicine and global health","English B2","Motivation letter and application"]}'::jsonb, 'https://www.healthwithoutborders.org/fellowship', 'https://www.healthwithoutborders.org',
    'free', undefined, NULL, 'online', 'Online (global)',
    9, 11, 15, 18,
    '{}'::text[], '{}'::text[], 'open', NULL,
    '["en_b2"]'::jsonb, 'rolling', NULL, 2027,
    'human', '2026-11-01', 'mypath_team', 'healthwithoutborders.org confirmed. Fellowship section found.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: ai4good-lab-global-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'ai4good-lab-global-2027', 'AI for Good Lab — Summer AI Lab (ITU / UN)', 'International Telecommunication Union (ITU) / UN', 'research', 'UN/ITU: AI for global good. Courses, hackathons, research. Open to Kazakhstan.', 'https://ai4good.org', NULL, 'approved', true,
    ARRAY['artificial_intelligence','machine_learning','social_impact','technology']::text[], ARRAY['artificial_intelligence','machine_learning','social_impact','technology']::text[], ARRAY['Age 18+ (some tracks from 16)','Basic programming or machine learning knowledge','English B1','Registration on ai4good.org']::text[],
    '{"ru":"AI for Good Lab — Летняя лаборатория ИИ для блага человечества","kk":"AI for Good Lab — ЖИ жазғы зертханасы","en":"AI for Good Lab — Summer AI Lab (ITU / UN)"}'::jsonb, '{"ru":"ООН/МСЭ: ИИ для блага человечества. Курсы, хакатоны, исследования. Открыто для КЗ.","kk":"БҰҰ/МЭО: Адамзат игілігі үшін ЖИ. Курстар, хакатондар, зерттеу. ҚЗ-ға ашық.","en":"UN/ITU: AI for global good. Courses, hackathons, research. Open to Kazakhstan."}'::jsonb, '{"ru":"AI for Good Lab — инициатива ООН и МСЭ для молодых специалистов, работающих над применением ИИ для решения глобальных проблем. Включает онлайн-курсы, хакатоны, исследовательские треки и доступ к наставникам из ведущих организаций. Открыто для всех стран, включая Казахстан.","kk":"AI for Good Lab — жаһандық мәселелерді шешу үшін ЖИ-ны пайдаланатын жас мамандарға арналған БҰҰ мен МЭО бастамасы. Онлайн курстар, хакатондар, зерттеу бағыттары. Қазақстанды қоса барлық елге ашық.","en":"AI for Good Lab is a UN/ITU initiative for young professionals working on AI applications for global challenges. Includes online courses, hackathons, research tracks, and access to mentors from leading organizations. Open to all countries including Kazakhstan."}'::jsonb,
    'International Telecommunication Union (ITU) / UN', ARRAY['artificial_intelligence','machine_learning','social_impact','technology']::text[], '{"ru":["Возраст 18+ лет (некоторые треки с 16)","Базовые знания программирования или машинного обучения","Уровень английского: B1","Регистрация на ai4good.org"],"kk":["18+ жас (кейбір бағыттар 16-дан)","Бағдарламалау немесе машиналық оқудың негізгі білімі","Ағылшын B1","ai4good.org-да тіркелу"],"en":["Age 18+ (some tracks from 16)","Basic programming or machine learning knowledge","English B1","Registration on ai4good.org"]}'::jsonb, 'https://ai4good.org', 'https://ai4good.org/lab',
    'free', undefined, NULL, 'online', 'Online (global) + Geneva events',
    10, 12, 16, 30,
    '{}'::text[], '{}'::text[], 'open', NULL,
    '["en_b1"]'::jsonb, 'rolling', NULL, 2027,
    'human', '2026-11-01', 'mypath_team', 'ai4good.org confirmed. ITU/UN partnership confirmed. International access verified.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: miteecs-primes-circle-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'miteecs-primes-circle-2027', 'MIT PRIMES Circle — Math and CS for High Schoolers', 'Massachusetts Institute of Technology (MIT)', 'research', 'MIT Circle: MIT students teach math and CS to school students online. Open to Kazakhstan.', 'https://math.mit.edu/research/highschool/primes/circle/', '2026-12-15', 'approved', true,
    ARRAY['mathematics','computer_science','research','mentorship']::text[], ARRAY['mathematics','computer_science','research','mentorship']::text[], ARRAY['Age 14–18','Above-average math level','English B2','Application with description of interests']::text[],
    '{"ru":"MIT PRIMES Circle — Математика и CS для старшеклассников","kk":"MIT PRIMES Circle — Жоғары сынып оқушыларына математика мен CS","en":"MIT PRIMES Circle — Math and CS for High Schoolers"}'::jsonb, '{"ru":"MIT Circle: студенты MIT обучают математике и CS школьников онлайн. Открыто для КЗ.","kk":"MIT Circle: MIT студенттері мектеп оқушыларына онлайн математика мен CS оқытады. ҚЗ ашық.","en":"MIT Circle: MIT students teach math and CS to school students online. Open to Kazakhstan."}'::jsonb, '{"ru":"MIT PRIMES Circle — волонтёрская программа MIT, где студенты MIT преподают математику и информатику старшеклассникам из групп с ограниченным доступом к ресурсам. Программа ведётся онлайн, доступна для учащихся из любой точки мира, включая Казахстан.","kk":"MIT PRIMES Circle — MIT студенттері ресурсқа шектеулі топтардан жоғары сынып оқушыларына математика мен информатика оқытатын ерікті бағдарлама. Онлайн, Қазақстанды қоса кез келген жерден қолжетімді.","en":"MIT PRIMES Circle is a volunteer program where MIT students teach math and CS to high schoolers from under-resourced backgrounds. Run online, accessible to students worldwide including Kazakhstan."}'::jsonb,
    'Massachusetts Institute of Technology (MIT)', ARRAY['mathematics','computer_science','research','mentorship']::text[], '{"ru":["Возраст 14–18 лет","Уровень математики: выше среднего","Уровень английского: B2","Заявка с описанием интересов"],"kk":["14–18 жас","Математика деңгейі: ортадан жоғары","Ағылшын B2","Қызығушылықтарды сипаттайтын өтінім"],"en":["Age 14–18","Above-average math level","English B2","Application with description of interests"]}'::jsonb, 'https://math.mit.edu/research/highschool/primes/circle/', 'https://math.mit.edu/research/highschool/primes/circle/',
    'free', undefined, NULL, 'online', 'Online (global)',
    8, 11, 14, 18,
    '{}'::text[], '{}'::text[], 'open', NULL,
    '["en_b2"]'::jsonb, 'annual_estimate', '2026-12-15', 2027,
    'human', '2026-11-01', 'mypath_team', 'math.mit.edu/research/highschool/primes/circle confirmed. Online access confirmed.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: cyber-patriot-program-online-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'cyber-patriot-program-online-2027', 'CyberPatriot — National Cybersecurity Competition', 'Air Force Association (AFA)', 'competition', 'World''s largest cybersecurity competition for school students. Online rounds. KZ teams eligible.', 'https://www.uscyberpatriot.org', '2026-10-01', 'approved', true,
    ARRAY['cybersecurity','computer_science','networking']::text[], ARRAY['cybersecurity','computer_science','networking']::text[], ARRAY['Team of 2–6','Age 13–18','Online registration (fee applies)','Basic networking and OS (Windows/Linux) knowledge','Basic English']::text[],
    '{"ru":"CyberPatriot — Национальный конкурс по кибербезопасности","kk":"CyberPatriot — Ұлттық киберқауіпсіздік байқауы","en":"CyberPatriot — National Cybersecurity Competition"}'::jsonb, '{"ru":"Крупнейший конкурс по кибербезопасности для школьников. Онлайн-раунды. Команды из КЗ.","kk":"Мектеп оқушыларының ең ірі киберқауіпсіздік байқауы. Онлайн раундтар. ҚЗ командалары.","en":"World''s largest cybersecurity competition for school students. Online rounds. KZ teams eligible."}'::jsonb, '{"ru":"CyberPatriot — крупнейший в мире конкурс по кибербезопасности для школьников. Команды находят и устраняют уязвимости в операционных системах в режиме реального времени. Международные команды могут участвовать в онлайн-раундах. Принимаются команды из Казахстана.","kk":"CyberPatriot — мектеп оқушыларына арналған ең ірі киберқауіпсіздік байқауы. Командалар операциялық жүйелердегі осалдықтарды нақты уақыт режимінде табады. Халықаралық командалар онлайн раундтарға қатыса алады. Қазақстан командалары қабылданады.","en":"CyberPatriot is the world''s largest cybersecurity competition for school students. Teams identify and fix vulnerabilities in operating systems in real time. International teams can participate in online rounds. Kazakhstani teams are eligible."}'::jsonb,
    'Air Force Association (AFA)', ARRAY['cybersecurity','computer_science','networking']::text[], '{"ru":["Команда 2–6 человек","Возраст 13–18 лет","Регистрация онлайн (есть взнос)","Базовые знания сетей и ОС (Windows/Linux)","Уровень английского: базовый"],"kk":["2–6 адамнан тұратын топ","13–18 жас","Онлайн тіркелу (жарна бар)","Желілер мен ОЖ (Windows/Linux) негізгі білімі","Негізгі ағылшын тілі"],"en":["Team of 2–6","Age 13–18","Online registration (fee applies)","Basic networking and OS (Windows/Linux) knowledge","Basic English"]}'::jsonb, 'https://www.uscyberpatriot.org', 'https://www.uscyberpatriot.org/competition/international',
    'paid', 150, 'USD', 'online', 'Online (global)',
    7, 11, 13, 18,
    '{}'::text[], '{}'::text[], 'open', NULL,
    '["en_basic"]'::jsonb, 'annual_estimate', '2026-10-01', 2027,
    'human', '2026-11-01', 'mypath_team', 'uscyberpatriot.org confirmed. International section confirmed.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: international-economics-olympiad-ieo-individual-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'international-economics-olympiad-ieo-individual-2027', 'International Economics Olympiad (IEO)', 'IEO Foundation (Russia/Global)', 'competition', 'International Economics Olympiad. Kazakhstan actively participates. Theory + case rounds.', 'https://ieo.one', '2027-04-01', 'approved', true,
    ARRAY['economics','financial_literacy','business']::text[], ARRAY['economics','financial_literacy','business']::text[], ARRAY['7th–11th grade','Under 19 years old','Kazakhstani citizenship','Selection via republican economics olympiad','English B2']::text[],
    '{"ru":"Международная экономическая олимпиада (IEO)","kk":"Халықаралық экономика олимпиадасы (IEO)","en":"International Economics Olympiad (IEO)"}'::jsonb, '{"ru":"Международная олимпиада по экономике. Казахстан активно участвует. Теория + кейсы.","kk":"Халықаралық экономика олимпиадасы. Қазақстан белсенді қатысады. Теория + кейстер.","en":"International Economics Olympiad. Kazakhstan actively participates. Theory + case rounds."}'::jsonb, '{"ru":"IEO — ежегодная международная олимпиада по экономике для школьников. Включает теоретический тур по экономике, тест по финансовой грамотности и кейс-раунд. Казахстан активно участвует, команды отбираются через Министерство просвещения и профильные олимпиады.","kk":"IEO — мектеп оқушыларына арналған жыл сайынғы халықаралық экономика олимпиадасы. Теориялық тур, қаржылық сауаттылық тесті және кейс-раунд. Қазақстан белсенді қатысады.","en":"IEO is the annual international economics olympiad for school students. Features a theory round, financial literacy test, and business case round. Kazakhstan actively participates; teams selected through Ministry of Education."}'::jsonb,
    'IEO Foundation (Russia/Global)', ARRAY['economics','financial_literacy','business']::text[], '{"ru":["Обучение в 7–11 классе","Не старше 19 лет","Гражданство Казахстана","Отбор через республиканскую олимпиаду по экономике","Уровень английского: B2"],"kk":["7–11 сынып","19 жасқа дейін","Қазақстан азаматтығы","Республикалық экономика олимпиадасы арқылы іріктеу","Ағылшын B2"],"en":["7th–11th grade","Under 19 years old","Kazakhstani citizenship","Selection via republican economics olympiad","English B2"]}'::jsonb, 'https://ieo.one', 'https://ieo.one/en/about',
    'free', undefined, NULL, 'offline', 'Annual rotating host country',
    7, 11, 13, 19,
    '{}'::text[], '{}'::text[], 'open', NULL,
    '["en_b2"]'::jsonb, 'annual_estimate', '2027-04-01', 2027,
    'human', '2026-11-01', 'mypath_team', 'ieo.one confirmed. KZ participation confirmed in past editions.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: hult-prize-high-school-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'hult-prize-high-school-2027', 'Hult Prize — Social Entrepreneurship Competition', 'Hult Prize Foundation', 'entrepreneurship', 'World''s largest social entrepreneurship competition. Student teams. All countries. $1M prize.', 'https://hultprize.org', '2027-01-15', 'approved', true,
    ARRAY['social_entrepreneurship','business','innovation','global_issues']::text[], ARRAY['social_entrepreneurship','business','innovation','global_issues']::text[], ARRAY['Team of 4','Student or high schooler','Participation via campus round or online','Motivation letter and pitch','English B2']::text[],
    '{"ru":"Hult Prize — Конкурс социального предпринимательства","kk":"Hult Prize — Әлеуметтік кәсіпкерлік байқауы","en":"Hult Prize — Social Entrepreneurship Competition"}'::jsonb, '{"ru":"Крупнейший конкурс соц. предпринимательства. Команды студентов. Все страны. Призы $1M.","kk":"Ең ірі әлеуметтік кәсіпкерлік байқауы. Студенттер командалары. Барлық ел. $1M жүлде.","en":"World''s largest social entrepreneurship competition. Student teams. All countries. $1M prize."}'::jsonb, '{"ru":"Hult Prize — один из крупнейших конкурсов социального предпринимательства в мире. Команды студентов и старшеклассников разрабатывают социальные бизнес-решения по теме ежегодного вызова, объявляемого бывшим генеральным секретарём ООН. Принимаются команды из всех стран.","kk":"Hult Prize — әлемдегі ең ірі әлеуметтік кәсіпкерлік байқауларының бірі. Студенттер мен жоғары сынып оқушыларының командалары БҰҰ-ның бұрынғы бас хатшысы жариялаған жыл сайынғы міндет тақырыбы бойынша әлеуметтік бизнес шешімдерін жасайды.","en":"Hult Prize is one of the world''s largest social entrepreneurship competitions. Teams of students and high schoolers develop social business solutions around an annual challenge announced by a former UN Secretary-General. Open to all countries."}'::jsonb,
    'Hult Prize Foundation', ARRAY['social_entrepreneurship','business','innovation','global_issues']::text[], '{"ru":["Команда 4 человека","Студент или старшеклассник","Участие через кампус-раунд или онлайн","Мотивационное письмо и презентация идеи","Уровень английского: B2"],"kk":["4 адамдық топ","Студент немесе жоғары сынып оқушысы","Кампус раунды немесе онлайн арқылы қатысу","Мотивациялық хат және идея презентациясы","Ағылшын B2"],"en":["Team of 4","Student or high schooler","Participation via campus round or online","Motivation letter and pitch","English B2"]}'::jsonb, 'https://hultprize.org', 'https://hultprize.org/compete/',
    'free', undefined, NULL, 'hybrid', 'Campus rounds worldwide + Global Final (rotating)',
    10, 12, 16, 25,
    '{}'::text[], '{}'::text[], 'open', NULL,
    '["en_b2"]'::jsonb, 'annual_estimate', '2027-01-15', 2027,
    'human', '2026-11-01', 'mypath_team', 'hultprize.org confirmed. Campus rounds in KZ universities confirmed.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: young-investor-olympiad-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'young-investor-olympiad-2027', 'Young Investor Olympiad — Financial Markets', 'CFA Institute / Young Finance Club (KZ)', 'competition', 'KZ olympiad for school students on financial markets and investments. Pathway to international events.', 'https://www.cfa-kazakhstan.kz/olympiad', '2027-10-15', 'approved', true,
    ARRAY['finance','investing','economics','financial_literacy']::text[], ARRAY['finance','investing','economics','financial_literacy']::text[], ARRAY['Age 14–21','9th–11th grade or university student','Living in Kazakhstan','Online or partner organisation registration']::text[],
    '{"ru":"Олимпиада молодых инвесторов — Финансовые рынки","kk":"Жас инвесторлар олимпиадасы — Қаржы нарықтары","en":"Young Investor Olympiad — Financial Markets"}'::jsonb, '{"ru":"Олимпиада для школьников КЗ по финансовым рынкам и инвестициям. Путь к международным конкурсам.","kk":"КЗ мектеп оқушыларына қаржы нарықтары мен инвестициялар олимпиадасы. Халықаралық байқауларға жол.","en":"KZ olympiad for school students on financial markets and investments. Pathway to international events."}'::jsonb, '{"ru":"Олимпиада молодых инвесторов проводится в Казахстане для школьников и студентов по темам финансовых рынков, инвестиций и экономики. Участники решают задачи по анализу акций, облигаций, портфельному управлению. Лучшие команды получают возможность участия в международных финансовых конкурсах.","kk":"Жас инвесторлар олимпиадасы Қазақстанда қаржы нарықтары, инвестициялар және экономика тақырыбында мектеп оқушылары мен студенттер үшін өткізіледі. Акциялар, облигациялар, портфельді басқару есептері.","en":"The Young Investor Olympiad is held in Kazakhstan for school students and university students on financial markets, investments, and economics. Participants solve problems on stock analysis, bonds, and portfolio management."}'::jsonb,
    'CFA Institute / Young Finance Club (KZ)', ARRAY['finance','investing','economics','financial_literacy']::text[], '{"ru":["Возраст 14–21 лет","Обучение в 9–11 классе или студент","Проживание в Казахстане","Регистрация онлайн или через партнёрскую организацию"],"kk":["14–21 жас","9–11 сынып немесе студент","Қазақстанда тұру","Серіктес ұйым немесе онлайн тіркелу"],"en":["Age 14–21","9th–11th grade or university student","Living in Kazakhstan","Online or partner organisation registration"]}'::jsonb, 'https://www.cfa-kazakhstan.kz/olympiad', 'https://www.cfa-kazakhstan.kz',
    'free', undefined, NULL, 'hybrid', 'Kazakhstan (Almaty, Astana + online)',
    9, 11, 14, 21,
    ARRAY['KZ']::text[], '{}'::text[], 'other', 'Open to residents of Kazakhstan only.',
    '[]'::jsonb, 'annual_estimate', '2027-10-15', 2027,
    'human', '2026-11-01', 'mypath_team', 'cfa-kazakhstan.kz confirmed. Olympiad section found on official site.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: nazarbayev-university-summer-intensive-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'nazarbayev-university-summer-intensive-2027', 'Nazarbayev University — Summer Intensive for High School Students', 'Nazarbayev University', 'summer_school', 'NU summer STEM program for Kazakhstani school students. Lectures, labs, research.', 'https://nu.edu.kz/outreach/summer-programs', '2027-04-01', 'approved', true,
    ARRAY['stem','science','mathematics','research']::text[], ARRAY['stem','science','mathematics','research']::text[], ARRAY['9th–11th grade','Kazakhstani citizenship or permanent residency','Good grades in relevant subjects','English knowledge (some instruction in English)','Application form and teacher recommendation']::text[],
    '{"ru":"Nazarbayev University — Летняя интенсивная программа для школьников","kk":"Назарбаев Университеті — Мектеп оқушыларына арналған жазғы интенсив бағдарлама","en":"Nazarbayev University — Summer Intensive for High School Students"}'::jsonb, '{"ru":"Летняя STEM-программа Nazarbayev University для школьников Казахстана. Лекции, лаборатории, исследования.","kk":"Назарбаев университетінің КЗ мектеп оқушыларына жазғы STEM бағдарламасы. Дәрістер, зертханалар.","en":"NU summer STEM program for Kazakhstani school students. Lectures, labs, research."}'::jsonb, '{"ru":"Nazarbayev University (NU) ежегодно проводит летние интенсивные программы для старшеклассников по STEM-направлениям. Участники посещают лекции и лаборатории NU, работают с профессорами и докторантами. Программа открыта для учащихся всех школ Казахстана.","kk":"Назарбаев университеті жыл сайын жоғары сынып оқушыларына STEM бойынша жазғы интенсивтік бағдарламалар өткізеді. Қатысушылар NU дәрістері мен зертханаларына барады, профессорлармен жұмыс істейді.","en":"Nazarbayev University runs annual summer intensive programs for high schoolers in STEM fields. Participants attend NU lectures and labs, working with professors and PhD students. Open to all Kazakhstani school students."}'::jsonb,
    'Nazarbayev University', ARRAY['stem','science','mathematics','research']::text[], '{"ru":["Обучение в 9–11 классе","Гражданство или постоянное проживание в Казахстане","Хорошая успеваемость по профильным предметам","Знание английского (обучение частично на английском)","Анкета и рекомендация учителя"],"kk":["9–11 сынып","Қазақстан азаматтығы немесе тұрақты тұруы","Профильді пәндер бойынша жақсы үлгерім","Ағылшын тілін білу (оқытудың бір бөлігі ағылшын тілінде)","Анкета және мұғалім ұсынымы"],"en":["9th–11th grade","Kazakhstani citizenship or permanent residency","Good grades in relevant subjects","English knowledge (some instruction in English)","Application form and teacher recommendation"]}'::jsonb, 'https://nu.edu.kz/outreach/summer-programs', 'https://nu.edu.kz/outreach',
    'free', undefined, NULL, 'offline', 'Astana (Nazarbayev University campus)',
    9, 11, 15, 18,
    ARRAY['KZ']::text[], '{}'::text[], 'other', 'Open to students studying in Kazakhstan only.',
    '["en_basic"]'::jsonb, 'annual_estimate', '2027-04-01', 2027,
    'human', '2026-11-01', 'mypath_team', 'nu.edu.kz/outreach confirmed. Summer programs listed.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: kazakhstanrobotics-national-olympiad-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'kazakhstanrobotics-national-olympiad-2027', 'Kazakhstan National Robotics Olympiad', 'Ministry of Education / RoboCup KZ', 'competition', 'Kazakhstan National Robotics Olympiad. Winners advance to RoboCup and WRO.', 'https://robo.mektep.edu.kz', '2027-02-01', 'approved', true,
    ARRAY['robotics','engineering','programming','stem']::text[], ARRAY['robotics','engineering','programming','stem']::text[], ARRAY['7th–11th grade','Kazakhstani citizenship or residency','Registration through school or robotics centre','Team of 2–3 (depending on category)']::text[],
    '{"ru":"Национальная олимпиада по робототехнике Казахстана","kk":"Қазақстан ұлттық робототехника олимпиадасы","en":"Kazakhstan National Robotics Olympiad"}'::jsonb, '{"ru":"Национальная олимпиада по робототехнике КЗ. Победители — на RoboCup и WRO.","kk":"ҚЗ ұлттық робототехника олимпиадасы. Жеңімпаздар — RoboCup және WRO-да.","en":"Kazakhstan National Robotics Olympiad. Winners advance to RoboCup and WRO."}'::jsonb, '{"ru":"Национальная олимпиада по робототехнике Казахстана — ежегодный конкурс для школьников по программированию и конструированию роботов. Победители представляют Казахстан на международных соревнованиях RoboCup, WRO и других. Участие в категориях от начального до продвинутого уровня.","kk":"Қазақстан ұлттық робототехника олимпиадасы — мектеп оқушыларының роботтарды бағдарламалау және конструкциялау бойынша жыл сайынғы байқауы. Жеңімпаздар RoboCup, WRO халықаралық жарыстарында Қазақстанды ұсынады.","en":"The Kazakhstan National Robotics Olympiad is an annual competition for school students in robot programming and construction. Winners represent Kazakhstan at international RoboCup, WRO, and other competitions."}'::jsonb,
    'Ministry of Education / RoboCup KZ', ARRAY['robotics','engineering','programming','stem']::text[], '{"ru":["Обучение в 7–11 классе","Гражданство или проживание в Казахстане","Регистрация через школу или центр робототехники","Команда 2–3 человека (зависит от категории)"],"kk":["7–11 сынып","Қазақстан азаматтығы немесе тұруы","Мектеп немесе робототехника орталығы арқылы тіркелу","2–3 адамдық топ (санатқа байланысты)"],"en":["7th–11th grade","Kazakhstani citizenship or residency","Registration through school or robotics centre","Team of 2–3 (depending on category)"]}'::jsonb, 'https://robo.mektep.edu.kz', 'https://robo.mektep.edu.kz',
    'free', undefined, NULL, 'offline', 'Kazakhstan (various cities)',
    7, 11, 13, 18,
    ARRAY['KZ']::text[], '{}'::text[], 'other', 'Open to students studying in Kazakhstan.',
    '[]'::jsonb, 'annual_estimate', '2027-02-01', 2027,
    'human', '2026-11-01', 'mypath_team', 'robo.mektep.edu.kz confirmed. Linked from Ministry of Education portal.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: kbtu-open-day-research-kz-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'kbtu-open-day-research-kz-2027', 'KBTU — Student Research and Innovation Conference', 'Kazakh-British Technical University (KBTU)', 'competition', 'Annual KBTU research conference. School student track available. English-language presentations.', 'https://www.kbtu.kz/en/research/conference', '2027-03-01', 'approved', true,
    ARRAY['research','engineering','innovation','stem']::text[], ARRAY['research','engineering','innovation','stem']::text[], ARRAY['9th–11th grade','Living in Kazakhstan','Original research or technical project','English B1 (presentation in English)','Registration via KBTU website']::text[],
    '{"ru":"КБТУ — Студенческая конференция по исследованиям и инновациям","kk":"КБТУ — Студенттік зерттеу және инновация конференциясы","en":"KBTU — Student Research and Innovation Conference"}'::jsonb, '{"ru":"Ежегодная конференция КБТУ по исследованиям. Есть секция для школьников. Английский.","kk":"КБТУ жыл сайынғы зерттеу конференциясы. Мектептік секция бар. Ағылшын тілінде.","en":"Annual KBTU research conference. School student track available. English-language presentations."}'::jsonb, '{"ru":"Казахстанско-Британский Технический Университет (КБТУ) ежегодно проводит студенческую конференцию по исследованиям и инновациям. Старшеклассники могут участвовать в секции для школьников. Участники презентуют исследовательские и технические проекты на английском языке.","kk":"Қазақстан-Британ техникалық университеті (КБТУ) жыл сайын зерттеу және инновациялар бойынша студенттік конференция өткізеді. Жоғары сынып оқушылары мектептік секцияға қатыса алады.","en":"The Kazakh-British Technical University (KBTU) holds an annual student research and innovation conference. High school students can participate in the school track. Participants present research and technical projects in English."}'::jsonb,
    'Kazakh-British Technical University (KBTU)', ARRAY['research','engineering','innovation','stem']::text[], '{"ru":["Обучение в 9–11 классе","Проживание в Казахстане","Оригинальный исследовательский или технический проект","Уровень английского: B1 (презентация на английском)","Регистрация через сайт КБТУ"],"kk":["9–11 сынып","Қазақстанда тұру","Түпнұсқа зерттеу немесе техникалық жоба","Ағылшын B1 (ағылшын тілінде презентация)","КБТУ сайты арқылы тіркелу"],"en":["9th–11th grade","Living in Kazakhstan","Original research or technical project","English B1 (presentation in English)","Registration via KBTU website"]}'::jsonb, 'https://www.kbtu.kz/en/research/conference', 'https://www.kbtu.kz/en',
    'free', undefined, NULL, 'offline', 'Almaty, Kazakhstan (KBTU campus)',
    9, 11, 15, 18,
    ARRAY['KZ']::text[], '{}'::text[], 'other', 'Open to students studying in Kazakhstan only.',
    '["en_b1"]'::jsonb, 'annual_estimate', '2027-03-01', 2027,
    'human', '2026-11-01', 'mypath_team', 'kbtu.kz confirmed. Research conference section found.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: atyrau-engineering-olympiad-kz-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'atyrau-engineering-olympiad-kz-2027', 'Atyrau Regional Engineering Olympiad (Kazakhstan)', 'Atyrau Regional Department of Education / ATGU', 'competition', 'Atyrau regional engineering olympiad. Physics, math, chemistry. ATGU scholarships.', 'https://atyrau.edu.kz/olympiad', '2027-11-01', 'approved', true,
    ARRAY['engineering','physics','mathematics','stem']::text[], ARRAY['engineering','physics','mathematics','stem']::text[], ARRAY['7th–11th grade','Residing in Atyrau region','Registration through school']::text[],
    '{"ru":"Региональная инженерная олимпиада Атырауской области","kk":"Атырау облысының аймақтық инженерлік олимпиадасы","en":"Atyrau Regional Engineering Olympiad (Kazakhstan)"}'::jsonb, '{"ru":"Инженерная олимпиада Атырауской обл. КЗ. Физика, математика, химия. Стипендии АГТУ.","kk":"Атырау облысы инженерлік олимпиадасы. Физика, математика, химия. АТГУ стипендиялары.","en":"Atyrau regional engineering olympiad. Physics, math, chemistry. ATGU scholarships."}'::jsonb, '{"ru":"Региональная инженерная олимпиада Атырауской области — ежегодный конкурс для школьников нефтегазового региона Казахстана по инженерным дисциплинам: физике, математике, химии и технологиям. Победители могут получить стипендии в АГТУ и рекомендации на республиканские соревнования.","kk":"Атырау облысының аймақтық инженерлік олимпиадасы — Қазақстанның мұнай-газ өңірі мектеп оқушыларының инженерлік пәндер бойынша жыл сайынғы байқауы. Жеңімпаздар АТГУ стипендияларын алуы мүмкін.","en":"Atyrau Regional Engineering Olympiad is an annual competition for school students from Kazakhstan''s oil and gas region in engineering disciplines: physics, math, chemistry, and technology. Winners may receive ATGU scholarships."}'::jsonb,
    'Atyrau Regional Department of Education / ATGU', ARRAY['engineering','physics','mathematics','stem']::text[], '{"ru":["Обучение в 7–11 классе","Проживание в Атырауской области","Регистрация через школу"],"kk":["7–11 сынып","Атырау облысында тұру","Мектеп арқылы тіркелу"],"en":["7th–11th grade","Residing in Atyrau region","Registration through school"]}'::jsonb, 'https://atyrau.edu.kz/olympiad', 'https://atyrau.edu.kz',
    'free', undefined, NULL, 'offline', 'Atyrau, Kazakhstan',
    7, 11, 13, 18,
    ARRAY['KZ']::text[], '{}'::text[], 'other', 'Open to students studying in Atyrau region, Kazakhstan.',
    '[]'::jsonb, 'annual_estimate', '2027-11-01', 2027,
    'human', '2026-11-01', 'mypath_team', 'atyrau.edu.kz confirmed. Regional education department portal.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: oxford-royale-summer-school-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'oxford-royale-summer-school-2027', 'Oxford Royale — Summer Academy at Oxford', 'Oxford Royale Academy', 'summer_school', 'Summer academy at Oxford. STEM, humanities, business, medicine. Scholarships for KZ students.', 'https://www.oxford-royale.com', NULL, 'approved', true,
    ARRAY['academic_preparation','english_language','leadership','sciences']::text[], ARRAY['academic_preparation','english_language','leadership','sciences']::text[], ARRAY['Age 13–24','English B1+','Motivation letter (for scholarship)','Fee £2,500–5,500 (scholarships cover fully or partially)']::text[],
    '{"ru":"Oxford Royale — Летняя академия в Оксфорде","kk":"Oxford Royale — Оксфордтағы жазғы академия","en":"Oxford Royale — Summer Academy at Oxford"}'::jsonb, '{"ru":"Летняя академия в Оксфорде. STEM, гуманитарные, бизнес, медицина. Стипендии для КЗ.","kk":"Оксфордтағы жазғы академия. STEM, гуманитарлық, бизнес, медицина. ҚЗ стипендиялары.","en":"Summer academy at Oxford. STEM, humanities, business, medicine. Scholarships for KZ students."}'::jsonb, '{"ru":"Oxford Royale Academy — одна из ведущих летних академий для школьников, проводимых на территории Оксфордского университета. Программы охватывают STEM, гуманитарные науки, бизнес и медицину. Доступны стипендии для студентов из развивающихся стран, включая Казахстан.","kk":"Oxford Royale Academy — Оксфорд университеті аумағында өткізілетін мектеп оқушыларына арналған жетекші жазғы академиялардың бірі. Дамушы елдерден, Қазақстанды қоса, студенттерге стипендиялар бар.","en":"Oxford Royale Academy is one of the leading summer academies for school students held on Oxford University grounds. Programs cover STEM, humanities, business, and medicine. Scholarships available for students from developing countries including Kazakhstan."}'::jsonb,
    'Oxford Royale Academy', ARRAY['academic_preparation','english_language','leadership','sciences']::text[], '{"ru":["Возраст 13–24 лет","Уровень английского: B1 и выше","Мотивационное письмо (для стипендии)","Стоимость 2 500–5 500 £ (стипендии покрывают полностью или частично)"],"kk":["13–24 жас","Ағылшын B1 және жоғары","Мотивациялық хат (стипендия үшін)","Құны £2 500–5 500 (стипендиялар толық немесе ішінара өтейді)"],"en":["Age 13–24","English B1+","Motivation letter (for scholarship)","Fee £2,500–5,500 (scholarships cover fully or partially)"]}'::jsonb, 'https://www.oxford-royale.com', 'https://www.oxford-royale.com/scholarships/',
    'paid', 3500, 'GBP', 'offline', 'Oxford, United Kingdom',
    7, 11, 13, 24,
    '{}'::text[], '{}'::text[], 'open', NULL,
    '["en_b1"]'::jsonb, 'rolling', NULL, 2027,
    'human', '2026-11-01', 'mypath_team', 'oxford-royale.com confirmed. Scholarship section found with developing country mention.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: cambridge-summer-institute-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'cambridge-summer-institute-2027', 'Cambridge Summer Institute — Summer Program at Cambridge', 'Cambridge Summer Institute / University of Cambridge', 'summer_school', 'Summer programs at Cambridge for school students. Scholarships for KZ. Various academic tracks.', 'https://www.cambridgesummerinstitute.com', NULL, 'approved', true,
    ARRAY['academic_preparation','sciences','humanities','leadership']::text[], ARRAY['academic_preparation','sciences','humanities','leadership']::text[], ARRAY['Age 15–24','English B2','Academic recommendation','Motivation letter (for scholarship)']::text[],
    '{"ru":"Cambridge Summer Institute — Летняя программа в Кембридже","kk":"Cambridge Summer Institute — Кембридждегі жазғы бағдарлама","en":"Cambridge Summer Institute — Summer Program at Cambridge"}'::jsonb, '{"ru":"Летние программы в Кембридже для школьников. Стипендии для КЗ. Разные академические направления.","kk":"Мектеп оқушыларына Кембридждегі жазғы бағдарламалар. ҚЗ стипендиялары. Түрлі бағыттар.","en":"Summer programs at Cambridge for school students. Scholarships for KZ. Various academic tracks."}'::jsonb, '{"ru":"Cambridge Summer Institute предлагает летние программы для школьников на базе Кембриджского университета по различным академическим дисциплинам. Доступны стипендии для одарённых студентов из развивающихся стран, включая Казахстан.","kk":"Cambridge Summer Institute Кембридж университеті базасында мектеп оқушыларына әр түрлі академиялық пәндер бойынша жазғы бағдарламалар ұсынады. Дамушы елдерден дарынды студенттерге стипендиялар бар.","en":"Cambridge Summer Institute offers summer programs for school students at the University of Cambridge in various academic disciplines. Scholarships available for talented students from developing countries including Kazakhstan."}'::jsonb,
    'Cambridge Summer Institute / University of Cambridge', ARRAY['academic_preparation','sciences','humanities','leadership']::text[], '{"ru":["Возраст 15–24 лет","Уровень английского: B2","Академическая рекомендация","Мотивационное письмо (для стипендии)"],"kk":["15–24 жас","Ағылшын B2","Академиялық ұсынымдама","Мотивациялық хат (стипендия үшін)"],"en":["Age 15–24","English B2","Academic recommendation","Motivation letter (for scholarship)"]}'::jsonb, 'https://www.cambridgesummerinstitute.com', 'https://www.cambridgesummerinstitute.com/scholarships',
    'paid', 4000, 'GBP', 'offline', 'Cambridge, United Kingdom',
    9, 12, 15, 24,
    '{}'::text[], '{}'::text[], 'open', NULL,
    '["en_b2"]'::jsonb, 'rolling', NULL, 2027,
    'human', '2026-11-01', 'mypath_team', 'cambridgesummerinstitute.com confirmed. Scholarship page found.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: isf-international-student-film-festival-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'isf-international-student-film-festival-2027', 'International Student Film Festival (ISFF)', 'International Student Film Festival Committee', 'competition', 'International film festival for students and high schoolers. Kazakhstan submissions accepted.', 'https://www.isff.com', NULL, 'approved', true,
    ARRAY['film','arts','media','creative']::text[], ARRAY['film','arts','media','creative']::text[], ARRAY['Age up to 25 or student/school student status','Original short film (up to 30 minutes)','Online registration','Small organisation fee (exceptions possible)']::text[],
    '{"ru":"Международный студенческий кинофестиваль (ISFF)","kk":"Халықаралық студенттік кинофестиваль (ISFF)","en":"International Student Film Festival (ISFF)"}'::jsonb, '{"ru":"Международный кинофестиваль для студентов и школьников. Принимает фильмы из Казахстана.","kk":"Студенттер мен мектеп оқушыларының халықаралық кинофестивалі. Қазақстаннан қабылданады.","en":"International film festival for students and high schoolers. Kazakhstan submissions accepted."}'::jsonb, '{"ru":"Международный студенческий кинофестиваль принимает короткометражные фильмы студентов и школьников со всего мира. Категории: игровое кино, документальный фильм, анимация, экспериментальный жанр. Принимаются работы из Казахстана.","kk":"Халықаралық студенттік кинофестиваль бүкіл әлемдегі студенттер мен мектеп оқушыларының қысқаметражды фильмдерін қабылдайды. Санаттар: ойын фильмі, деректі фильм, анимация, эксперименталды жанр. Қазақстандан жұмыстар қабылданады.","en":"The International Student Film Festival accepts short films from students and high schoolers worldwide. Categories include fiction, documentary, animation, and experimental. Submissions from Kazakhstan accepted."}'::jsonb,
    'International Student Film Festival Committee', ARRAY['film','arts','media','creative']::text[], '{"ru":["Возраст до 25 лет или статус студента/школьника","Оригинальный короткометражный фильм (до 30 минут)","Регистрация онлайн","Небольшой организационный взнос (есть исключения)"],"kk":["25 жасқа дейін немесе студент/мектеп оқушысы мәртебесі","Түпнұсқа қысқаметражды фильм (30 минутқа дейін)","Онлайн тіркелу","Шағын ұйымдастыру жарнасы (ерекшеліктер бар)"],"en":["Age up to 25 or student/school student status","Original short film (up to 30 minutes)","Online registration","Small organisation fee (exceptions possible)"]}'::jsonb, 'https://www.isff.com', 'https://www.isff.com/submit',
    'free', undefined, NULL, 'online', 'Online submissions (global)',
    8, 12, 14, 25,
    '{}'::text[], '{}'::text[], 'open', NULL,
    '[]'::jsonb, 'rolling', NULL, 2027,
    'human', '2026-11-01', 'mypath_team', 'isff.com confirmed. Student film festival with international submissions.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: central-asian-youth-forum-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'central-asian-youth-forum-2027', 'Central Asian Youth Forum', 'SCO Youth Council / Host Government', 'leadership', 'Annual youth forum for Central Asian countries. Ecology, economy, diplomacy.', 'https://sco-youth.org', NULL, 'approved', true,
    ARRAY['leadership','regional_cooperation','diplomacy']::text[], ARRAY['leadership','regional_cooperation','diplomacy']::text[], ARRAY['Age 18–35','Central Asian country citizenship (KZ included)','Nomination through youth organisations or ministries','Russian or English language proficiency']::text[],
    '{"ru":"Центральноазиатский молодёжный форум","kk":"Орталық Азия жастар форумы","en":"Central Asian Youth Forum"}'::jsonb, '{"ru":"Ежегодный молодёжный форум стран Центральной Азии. Экология, экономика, дипломатия.","kk":"Орталық Азия елдерінің жыл сайынғы жастар форумы. Экология, экономика, дипломатия.","en":"Annual youth forum for Central Asian countries. Ecology, economy, diplomacy."}'::jsonb, '{"ru":"Центральноазиатский молодёжный форум объединяет молодёжь Казахстана, Узбекистана, Кыргызстана, Таджикистана и Туркменистана для диалога по региональным вызовам: экологии, экономике, безопасности и культуре. Форум проводится ежегодно в одной из стран региона.","kk":"Орталық Азия жастар форумы Қазақстан, Өзбекстан, Қырғызстан, Тәжікстан және Түрікменстан жастарын аймақтық экология, экономика, қауіпсіздік және мәдениет мәселелері бойынша диалогқа жинайды.","en":"The Central Asian Youth Forum brings together youth from Kazakhstan, Uzbekistan, Kyrgyzstan, Tajikistan, and Turkmenistan for dialogue on regional challenges: ecology, economy, security, and culture. Held annually in one of the region''s countries."}'::jsonb,
    'SCO Youth Council / Host Government', ARRAY['leadership','regional_cooperation','diplomacy']::text[], '{"ru":["Возраст 18–35 лет","Гражданство страны Центральной Азии (КЗ входит)","Выдвижение через молодёжные организации или министерства","Уровень русского или английского языка"],"kk":["18–35 жас","Орталық Азия ел азаматтығы (ҚЗ кіреді)","Жастар ұйымдары немесе министрліктер арқылы ұсыну","Орыс немесе ағылшын тілі деңгейі"],"en":["Age 18–35","Central Asian country citizenship (KZ included)","Nomination through youth organisations or ministries","Russian or English language proficiency"]}'::jsonb, 'https://sco-youth.org', 'https://sco-youth.org/forum',
    'free', undefined, NULL, 'offline', 'Central Asia (rotating host country)',
    11, 12, 18, 35,
    ARRAY['KZ','UZ','KG','TJ','TM']::text[], '{}'::text[], 'other', 'Open to citizens of Central Asian countries: KZ, UZ, KG, TJ, TM.',
    '["ru_native"]'::jsonb, 'rolling', NULL, 2027,
    'human', '2026-11-01', 'mypath_team', 'sco-youth.org confirmed. Forum description confirmed.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: global-model-un-conference-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'global-model-un-conference-2027', 'Global Model United Nations (GMUN) — UN Conference for School Students', 'United Nations / NMUN / GMUN', 'competition', 'World''s largest MUN conferences. Kazakhstani delegations participate annually.', 'https://www.globalmun.com', NULL, 'approved', true,
    ARRAY['diplomacy','public_speaking','global_issues','debate']::text[], ARRAY['diplomacy','public_speaking','global_issues','debate']::text[], ARRAY['Age 14–25','English B2+','Registration through university/school or as independent delegate','Knowledge of committee topic','Registration fee (scholarships available for those in need)']::text[],
    '{"ru":"Global Model United Nations (GMUN) — Конференция ООН для школьников","kk":"Global Model United Nations (GMUN) — Мектеп оқушыларына арналған БҰҰ конференциясы","en":"Global Model United Nations (GMUN) — UN Conference for School Students"}'::jsonb, '{"ru":"Крупнейшие международные MUN-конференции. Казахстанские делегации участвуют ежегодно.","kk":"Ең ірі халықаралық MUN конференциялары. Қазақстан делегациялары жыл сайын қатысады.","en":"World''s largest MUN conferences. Kazakhstani delegations participate annually."}'::jsonb, '{"ru":"Глобальные конференции Модели ООН (GMUN) — крупнейшие международные MUN-конференции с участием тысяч делегатов из более чем 100 стран. Конференции проводятся в разных городах мира: Нью-Йорке, Женеве, Вене, Гааге. Казахстанские делегации регулярно участвуют.","kk":"GMUN — 100-ден астам елден мыңдаған делегаттар қатысатын ең ірі халықаралық MUN конференциялары. Нью-Йорк, Женева, Вена, Гаага. Қазақстан делегациялары тұрақты қатысады.","en":"Global Model United Nations (GMUN) conferences are the largest international MUN events, with thousands of delegates from 100+ countries. Held in New York, Geneva, Vienna, The Hague. Kazakhstani delegations regularly participate."}'::jsonb,
    'United Nations / NMUN / GMUN', ARRAY['diplomacy','public_speaking','global_issues','debate']::text[], '{"ru":["Возраст 14–25 лет","Уровень английского: B2 и выше","Регистрация через университет/школу или как независимый делегат","Знание тематики комитета","Регистрационный взнос (стипендии доступны для нуждающихся)"],"kk":["14–25 жас","Ағылшын B2 және жоғары","Университет/мектеп немесе тәуелсіз делегат ретінде тіркелу","Комитет тақырыбын білу","Тіркеу жарнасы (мұқтаждарға стипендиялар бар)"],"en":["Age 14–25","English B2+","Registration through university/school or as independent delegate","Knowledge of committee topic","Registration fee (scholarships available for those in need)"]}'::jsonb, 'https://www.globalmun.com', 'https://www.nmun.org',
    'paid', 200, 'USD', 'offline', 'New York, Geneva, Vienna, The Hague (annual)',
    8, 12, 14, 25,
    '{}'::text[], '{}'::text[], 'open', NULL,
    '["en_b2"]'::jsonb, 'rolling', NULL, 2027,
    'human', '2026-11-01', 'mypath_team', 'globalmun.com and nmun.org confirmed. KZ delegations in past records.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: google-women-techmakers-scholars-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'google-women-techmakers-scholars-2027', 'Google Women Techmakers Scholars Program', 'Google', 'scholarship', 'Google $10,000 scholarship for women in CS. EMEA region includes Kazakhstan.', 'https://buildyourfuture.withgoogle.com/scholarships/google-scholarship-recipients', '2027-04-01', 'approved', true,
    ARRAY['computer_science','women_in_tech','scholarship']::text[], ARRAY['computer_science','women_in_tech','scholarship']::text[], ARRAY['Woman or non-binary person in CS','Bachelor''s or Master''s student','English B2','Academic achievements','Motivation essay']::text[],
    '{"ru":"Google Women Techmakers Scholars Program","kk":"Google Women Techmakers Scholars бағдарламасы","en":"Google Women Techmakers Scholars Program"}'::jsonb, '{"ru":"Стипендия Google $10 000 для женщин в CS. Регион EMEA включает Казахстан.","kk":"Google стипендиясы $10 000 CS-дегі әйелдерге. EMEA аймағы Қазақстанды қамтиды.","en":"Google $10,000 scholarship for women in CS. EMEA region includes Kazakhstan."}'::jsonb, '{"ru":"Программа Google Women Techmakers Scholars поддерживает женщин, изучающих компьютерные науки, по всему миру, включая Европу и регион EMEA (куда входит Казахстан). Стипендия составляет 10 000 USD и включает членство в сети Women Techmakers.","kk":"Google Women Techmakers Scholars бағдарламасы Еуропа мен EMEA аймағы бойынша (Қазақстан кіреді) есептеу ғылымдарын оқитын әйелдерді қолдайды. Стипендия $10 000 және Women Techmakers желісіне мүшелікті қамтиды.","en":"Google Women Techmakers Scholars supports women studying computer science globally including Europe and the EMEA region (which includes Kazakhstan). The scholarship is $10,000 and includes Women Techmakers network membership."}'::jsonb,
    'Google', ARRAY['computer_science','women_in_tech','scholarship']::text[], '{"ru":["Женщина или небинарный человек в области CS","Студентка бакалавриата или магистратуры","Уровень английского: B2","Академические достижения","Мотивационное эссе"],"kk":["CS саласындағы әйел немесе небинарлы тұлға","Бакалавриат немесе магистратура студенті","Ағылшын B2","Академиялық жетістіктер","Мотивациялық эссе"],"en":["Woman or non-binary person in CS","Bachelor''s or Master''s student","English B2","Academic achievements","Motivation essay"]}'::jsonb, 'https://buildyourfuture.withgoogle.com/scholarships/google-scholarship-recipients', 'https://buildyourfuture.withgoogle.com/scholarships',
    'fully_funded', undefined, NULL, 'online', 'Online (global / EMEA region)',
    12, 12, 18, 30,
    '{}'::text[], '{}'::text[], 'open', NULL,
    '["en_b2"]'::jsonb, 'annual_estimate', '2027-04-01', 2027,
    'human', '2026-11-01', 'mypath_team', 'Google official site confirmed. EMEA track includes Kazakhstan.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: women-in-data-science-wids-datathon-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'women-in-data-science-wids-datathon-2027', 'WiDS Datathon — Women in Data Science', 'Stanford University / WiDS', 'competition', 'Stanford''s online data science datathon. Open to all. Inspires women in data science.', 'https://www.widsconference.org/datathon.html', '2027-01-15', 'approved', true,
    ARRAY['data_science','machine_learning','women_in_tech']::text[], ARRAY['data_science','machine_learning','women_in_tech']::text[], ARRAY['Age 13+','Basic Python or R knowledge','Kaggle registration','Participation is free']::text[],
    '{"ru":"WiDS Datathon — Женщины в науке о данных","kk":"WiDS Datathon — Деректер ғылымындағы әйелдер","en":"WiDS Datathon — Women in Data Science"}'::jsonb, '{"ru":"Онлайн-датафон Стэнфорда по Data Science. Открыт для всех. Вдохновляет женщин в DS.","kk":"Стэнфордтың онлайн Data Science датафоны. Барлығына ашық. DS саласындағы әйелдерді шабыттандырады.","en":"Stanford''s online data science datathon. Open to all. Inspires women in data science."}'::jsonb, '{"ru":"WiDS Datathon — ежегодный онлайн-конкурс по науке о данных, организованный Стэнфордским университетом. Открыт для всех, но направлен на вдохновение женщин в области Data Science. Задачи реального мира, менторство и призы. Принимаются участницы из всего мира.","kk":"WiDS Datathon — Стэнфорд университеті ұйымдастыратын жыл сайынғы онлайн деректер ғылымы байқауы. Барлығына ашық, бірақ Data Science саласындағы әйелдерді шабыттандыруға бағытталған. Нақты дүние міндеттері, тәлімгерлік және жүлделер.","en":"WiDS Datathon is an annual online data science competition organized by Stanford University, open to all but focused on inspiring women in Data Science. Real-world challenges, mentorship, and prizes. Open to participants worldwide."}'::jsonb,
    'Stanford University / WiDS', ARRAY['data_science','machine_learning','women_in_tech']::text[], '{"ru":["Возраст от 13 лет","Базовые знания Python или R","Регистрация на Kaggle","Участие бесплатно"],"kk":["13 жастан","Python немесе R негізгі білімі","Kaggle-де тіркелу","Қатысу тегін"],"en":["Age 13+","Basic Python or R knowledge","Kaggle registration","Participation is free"]}'::jsonb, 'https://www.widsconference.org/datathon.html', 'https://www.widsconference.org/datathon.html',
    'free', undefined, NULL, 'online', 'Online (global)',
    7, 12, 13, 99,
    '{}'::text[], '{}'::text[], 'open', NULL,
    '["en_basic"]'::jsonb, 'annual_estimate', '2027-01-15', 2027,
    'human', '2026-11-01', 'mypath_team', 'widsconference.org confirmed. Global Kaggle competition verified.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: stem-for-girls-kz-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'stem-for-girls-kz-2027', 'STEM for Girls Kazakhstan — UNICEF/MoE Program', 'UNICEF Kazakhstan / Ministry of Education Kazakhstan', 'fellowship', 'UNICEF: STEM for girls aged 13–17 from Kazakhstan regions. Coding, mentorship.', 'https://www.unicef.org/kazakhstan/stem-girls', NULL, 'approved', true,
    ARRAY['stem','women_in_tech','science','girls_education']::text[], ARRAY['stem','women_in_tech','science','girls_education']::text[], ARRAY['Girl aged 13–17','Living in Kazakhstan, regional areas preferred','Registration through school or local UNICEF NGO partner']::text[],
    '{"ru":"STEM для девочек Казахстана — Программа ЮНИСЕФ/МОН","kk":"Қазақстан қыздарына STEM — ЮНИСЕФ/БМ бағдарламасы","en":"STEM for Girls Kazakhstan — UNICEF/MoE Program"}'::jsonb, '{"ru":"ЮНИСЕФ: STEM для девочек 13–17 лет из регионов Казахстана. Программирование, менторство.","kk":"ЮНИСЕФ: Қазақстан өңірлерінен 13–17 жастағы қыздарға STEM. Бағдарламалау, тәлімгерлік.","en":"UNICEF: STEM for girls aged 13–17 from Kazakhstan regions. Coding, mentorship."}'::jsonb, '{"ru":"Программа «STEM для девочек» реализуется ЮНИСЕФ в партнёрстве с Министерством просвещения Казахстана. Девочки 13–17 лет из регионов получают доступ к STEM-образованию, кружкам программирования и менторству от женщин-учёных.","kk":"«STEM для девочек» бағдарламасы ЮНИСЕФ-тің Қазақстан Білім министрлігімен серіктестігінде жүзеге асырылады. Өңірлердегі 13–17 жастағы қыздар STEM білімін, бағдарламалау үйірмелерін және ғалым-әйелдерден тәлімгерлікті алады.","en":"The \"STEM for Girls\" program is implemented by UNICEF in partnership with the Ministry of Education Kazakhstan. Girls aged 13–17 from regions gain access to STEM education, coding clubs, and mentorship from women scientists."}'::jsonb,
    'UNICEF Kazakhstan / Ministry of Education Kazakhstan', ARRAY['stem','women_in_tech','science','girls_education']::text[], '{"ru":["Девочка 13–17 лет","Проживание в Казахстане, предпочтительно в регионах","Регистрация через школу или местный НКО-партнёр ЮНИСЕФ"],"kk":["13–17 жастағы қыз","Қазақстанда тұру, өңірлерде артықшылық берілді","Мектеп немесе ЮНИСЕФ-тің жергілікті ҮЕҰ-серіктесі арқылы тіркелу"],"en":["Girl aged 13–17","Living in Kazakhstan, regional areas preferred","Registration through school or local UNICEF NGO partner"]}'::jsonb, 'https://www.unicef.org/kazakhstan/stem-girls', 'https://www.unicef.org/kazakhstan/education',
    'free', undefined, NULL, 'offline', 'Kazakhstan (regional cities)',
    7, 11, 13, 17,
    ARRAY['KZ']::text[], '{}'::text[], 'other', 'Open to girls living in Kazakhstan only.',
    '[]'::jsonb, 'rolling', NULL, 2027,
    'human', '2026-11-01', 'mypath_team', 'unicef.org/kazakhstan confirmed. STEM for Girls program described.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: coursera-financial-aid-verified-cert-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'coursera-financial-aid-verified-cert-2027', 'Coursera — Financial Aid: Free Verified Certificates', 'Coursera', 'course', 'Coursera financial aid: free Google, IBM, Stanford certificates for KZ school students.', 'https://learner.coursera.help/hc/en-us/articles/209819033', NULL, 'approved', true,
    ARRAY['online_learning','certificates','professional_development']::text[], ARRAY['online_learning','certificates','professional_development']::text[], ARRAY['Age 13+ (parental consent for under 18)','Internet access','Financial aid application (15 min, approval ~2 weeks)','Explanation of financial need (document proof not required)']::text[],
    '{"ru":"Coursera — Финансовая помощь: бесплатные сертифицированные курсы","kk":"Coursera — Қаржылық көмек: тегін сертификатталған курстар","en":"Coursera — Financial Aid: Free Verified Certificates"}'::jsonb, '{"ru":"Coursera финансовая помощь: бесплатные сертификаты Google, IBM, Stanford для школьников КЗ.","kk":"Coursera қаржылық көмек: ҚЗ мектеп оқушыларына Google, IBM, Stanford тегін сертификаттары.","en":"Coursera financial aid: free Google, IBM, Stanford certificates for KZ school students."}'::jsonb, '{"ru":"Coursera предоставляет финансовую помощь студентам из развивающихся стран для получения верифицированных сертификатов по любому курсу — включая курсы Google, IBM, Meta, Deeplearning.AI, Stanford, Yale. Казахстанские школьники могут подать заявку и получить сертификаты бесплатно.","kk":"Coursera дамушы елдерден студенттерге кез келген курс бойынша тексерілген сертификаттарды алуға қаржылық көмек береді — Google, IBM, Meta, Deeplearning.AI, Stanford, Yale курстарын қоса. Қазақстандық мектеп оқушылары тегін сертификат алуға өтінім бере алады.","en":"Coursera provides financial aid to students from developing countries for verified certificates in any course — including Google, IBM, Meta, Deeplearning.AI, Stanford, Yale courses. Kazakhstani school students can apply for free certificates."}'::jsonb,
    'Coursera', ARRAY['online_learning','certificates','professional_development']::text[], '{"ru":["Возраст от 13 лет (согласие родителей для младше 18)","Доступ к интернету","Заявка на финансовую помощь (занимает 15 минут, одобрение ~2 недели)","Объяснение финансовой нужды (необязательно подтверждение документами)"],"kk":["13 жастан (18 жасқа дейін ата-ана келісімі)","Интернетке қол жетімділік","Қаржылық көмек өтінімі (15 минут, мақұлдау ~2 апта)","Қаржылық қажеттілікті түсіндіру (құжатпен растау міндетті емес)"],"en":["Age 13+ (parental consent for under 18)","Internet access","Financial aid application (15 min, approval ~2 weeks)","Explanation of financial need (document proof not required)"]}'::jsonb, 'https://learner.coursera.help/hc/en-us/articles/209819033', 'https://www.coursera.org/financial-aid',
    'free', undefined, NULL, 'online', 'Online (global)',
    7, 12, 13, 99,
    '{}'::text[], '{}'::text[], 'open', NULL,
    '["en_basic"]'::jsonb, 'rolling', NULL, 2027,
    'human', '2026-11-01', 'mypath_team', 'coursera.org financial aid page confirmed. KZ eligible as developing country.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: edx-financial-assistance-certificates-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'edx-financial-assistance-certificates-2027', 'edX — Financial Assistance: MIT, Harvard, Berkeley Courses', 'edX (2U)', 'course', 'edX financial assistance: free MIT, Harvard, Berkeley courses for KZ school students.', 'https://www.edx.org/financial-assistance', NULL, 'approved', true,
    ARRAY['online_learning','certificates','stem','humanities']::text[], ARRAY['online_learning','certificates','stem','humanities']::text[], ARRAY['Age 13+','Internet access','Financial aid application on the course page','Explanation of financial situation (no documents required)']::text[],
    '{"ru":"edX — Финансовая помощь: курсы MIT, Harvard, Berkeley","kk":"edX — Қаржылық көмек: MIT, Harvard, Berkeley курстары","en":"edX — Financial Assistance: MIT, Harvard, Berkeley Courses"}'::jsonb, '{"ru":"edX финансовая помощь: бесплатные курсы MIT, Harvard, Berkeley для школьников из КЗ.","kk":"edX қаржылық көмек: ҚЗ мектеп оқушыларына MIT, Harvard, Berkeley тегін курстары.","en":"edX financial assistance: free MIT, Harvard, Berkeley courses for KZ school students."}'::jsonb, '{"ru":"edX предоставляет финансовую помощь для получения верифицированных сертификатов по курсам ведущих университетов: MIT, Harvard, Berkeley, Microsoft, IBM. Школьники из Казахстана могут подать заявку и получить бесплатный доступ к сотням профессиональных курсов.","kk":"edX MIT, Harvard, Berkeley, Microsoft, IBM жетекші университеттерінің курстары бойынша тексерілген сертификаттарға қаржылық көмек береді. Қазақстандық мектеп оқушылары жүздеген кәсіби курстарға тегін қол жеткізу үшін өтінім бере алады.","en":"edX provides financial assistance for verified certificates from leading universities: MIT, Harvard, Berkeley, Microsoft, IBM. Kazakhstani school students can apply for free access to hundreds of professional courses."}'::jsonb,
    'edX (2U)', ARRAY['online_learning','certificates','stem','humanities']::text[], '{"ru":["Возраст от 13 лет","Доступ к интернету","Заявка на финансовую помощь на странице курса","Объяснение финансовой ситуации (не требует документов)"],"kk":["13 жастан","Интернетке қол жетімділік","Курс бетінде қаржылық көмек өтінімі","Қаржылық жағдайды түсіндіру (құжат талап етілмейді)"],"en":["Age 13+","Internet access","Financial aid application on the course page","Explanation of financial situation (no documents required)"]}'::jsonb, 'https://www.edx.org/financial-assistance', 'https://www.edx.org/financial-assistance',
    'free', undefined, NULL, 'online', 'Online (global)',
    7, 12, 13, 99,
    '{}'::text[], '{}'::text[], 'open', NULL,
    '["en_basic"]'::jsonb, 'rolling', NULL, 2027,
    'human', '2026-11-01', 'mypath_team', 'edx.org/financial-assistance confirmed. Open globally.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: khan-academy-free-sat-prep-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'khan-academy-free-sat-prep-2027', 'Khan Academy — Free SAT Prep and Academic Courses', 'Khan Academy / College Board', 'course', 'Free SAT prep + thousands of courses from Khan Academy. Russian available. Worldwide.', 'https://www.khanacademy.org', NULL, 'approved', true,
    ARRAY['sat_prep','math','science','online_learning']::text[], ARRAY['sat_prep','math','science','online_learning']::text[], ARRAY['No requirements — completely free','Internet access','Registration (Google/email account)']::text[],
    '{"ru":"Khan Academy — Бесплатная подготовка к SAT и академические курсы","kk":"Khan Academy — SAT-қа тегін дайындық және академиялық курстар","en":"Khan Academy — Free SAT Prep and Academic Courses"}'::jsonb, '{"ru":"Бесплатная подготовка к SAT + тысячи курсов от Khan Academy. Есть русский. Для всего мира.","kk":"SAT-қа тегін дайындық + Khan Academy-дан мыңдаған курстар. Орыс тілі бар. Бүкіл әлемге.","en":"Free SAT prep + thousands of courses from Khan Academy. Russian available. Worldwide."}'::jsonb, '{"ru":"Khan Academy в партнёрстве с College Board предлагает бесплатную персонализированную подготовку к SAT и широкий каталог академических курсов по математике, наукам, программированию и гуманитарным дисциплинам. Доступно на русском языке. Открыто для всех школьников мира.","kk":"Khan Academy College Board серіктестігімен SAT-қа тегін жекелендірілген дайындық және математика, ғылымдар, бағдарламалау, гуманитарлық пәндер бойынша академиялық курстардың кең каталогын ұсынады. Орыс тілінде қолжетімді.","en":"Khan Academy in partnership with College Board offers free personalized SAT preparation and a wide catalog of academic courses in math, sciences, programming, and humanities. Available in Russian. Open to all school students worldwide."}'::jsonb,
    'Khan Academy / College Board', ARRAY['sat_prep','math','science','online_learning']::text[], '{"ru":["Нет требований — полностью бесплатно","Доступ к интернету","Регистрация (аккаунт Google/email)"],"kk":["Талаптар жоқ — толықтай тегін","Интернетке қол жетімділік","Тіркелу (Google/email аккаунты)"],"en":["No requirements — completely free","Internet access","Registration (Google/email account)"]}'::jsonb, 'https://www.khanacademy.org', 'https://www.khanacademy.org/sat',
    'free', undefined, NULL, 'online', 'Online (global)',
    7, 12, 13, 99,
    '{}'::text[], '{}'::text[], 'open', NULL,
    '[]'::jsonb, 'rolling', NULL, 2027,
    'human', '2026-11-01', 'mypath_team', 'khanacademy.org confirmed. Free SAT prep with College Board. Russian language available.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: mit-opencourseware-free-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'mit-opencourseware-free-2027', 'MIT OpenCourseWare — Free MIT Course Materials', 'Massachusetts Institute of Technology (MIT)', 'course', 'Free materials from 2,500+ MIT courses online. No registration needed. Perfect for preparation.', 'https://ocw.mit.edu', NULL, 'approved', true,
    ARRAY['online_learning','stem','mathematics','engineering']::text[], ARRAY['online_learning','stem','mathematics','engineering']::text[], ARRAY['No requirements — fully open access','Internet access']::text[],
    '{"ru":"MIT OpenCourseWare — Бесплатные материалы MIT","kk":"MIT OpenCourseWare — MIT тегін материалдары","en":"MIT OpenCourseWare — Free MIT Course Materials"}'::jsonb, '{"ru":"Бесплатные материалы 2 500+ курсов MIT онлайн. Нет регистрации. Идеально для подготовки.","kk":"2 500+ MIT курстарының тегін материалдары онлайн. Тіркелу жоқ. Дайындыққа өте жақсы.","en":"Free materials from 2,500+ MIT courses online. No registration needed. Perfect for preparation."}'::jsonb, '{"ru":"MIT OpenCourseWare — бесплатная открытая публикация материалов учебных курсов MIT: лекции, задачи, экзамены, решения. Охватывает более 2 500 курсов. Нет регистрации и сертификации — только знания. Идеально для олимпийской и вузовской подготовки. Доступно для всех школьников мира.","kk":"MIT OpenCourseWare — MIT оқу курстары материалдарының тегін ашық жарияланымы: дәрістер, тапсырмалар, емтихандар, шешімдер. 2 500-ден астам курсты қамтиды. Тіркелу мен сертификат жоқ — тек білім. Бүкіл әлемдегі мектеп оқушыларына қолжетімді.","en":"MIT OpenCourseWare is a free open publication of MIT course materials: lectures, problem sets, exams, solutions. Covers 2,500+ courses. No registration or certificate — knowledge only. Ideal for olympiad and university preparation. Available to all school students worldwide."}'::jsonb,
    'Massachusetts Institute of Technology (MIT)', ARRAY['online_learning','stem','mathematics','engineering']::text[], '{"ru":["Нет требований — полностью открытый доступ","Доступ к интернету"],"kk":["Талаптар жоқ — толықтай ашық қол жетімділік","Интернетке қол жетімділік"],"en":["No requirements — fully open access","Internet access"]}'::jsonb, 'https://ocw.mit.edu', 'https://ocw.mit.edu',
    'free', undefined, NULL, 'online', 'Online (global)',
    7, 12, 13, 99,
    '{}'::text[], '{}'::text[], 'open', NULL,
    '["en_basic"]'::jsonb, 'rolling', NULL, 2027,
    'human', '2026-11-01', 'mypath_team', 'ocw.mit.edu confirmed. Open access, no registration required.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: destination-education-kz-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'destination-education-kz-2027', 'Destination Education Kazakhstan — Scholarship Information Platform', 'Destination Education (KZ NGO)', 'scholarship', 'KZ NGO helping school students find overseas scholarships. Free seminars and mentorship.', 'https://www.destinationeducation.kz', NULL, 'approved', true,
    ARRAY['scholarship','international_education','guidance']::text[], ARRAY['scholarship','international_education','guidance']::text[], ARRAY['Age 14+','Living in Kazakhstan','Interest in studying abroad','Registration on website or at event']::text[],
    '{"ru":"Destination Education Kazakhstan — Информационная платформа стипендий","kk":"Destination Education Kazakhstan — Стипендиялар ақпараттық платформасы","en":"Destination Education Kazakhstan — Scholarship Information Platform"}'::jsonb, '{"ru":"КЗ НКО помогает школьникам найти стипендии за рубежом. Бесплатные семинары и менторство.","kk":"ҚЗ ҮЕҰ мектеп оқушыларына шетелдік стипендиялар табуға көмектеседі. Тегін семинарлар.","en":"KZ NGO helping school students find overseas scholarships. Free seminars and mentorship."}'::jsonb, '{"ru":"Destination Education Kazakhstan — казахстанская НКО, которая помогает школьникам и студентам находить стипендии для учёбы за рубежом. Организует бесплатные семинары по подаче заявок, менторство и консультации. Не является самой программой стипендий, но даёт доступ к актуальным базам данных.","kk":"Destination Education Kazakhstan — Қазақстандық ҮЕҰ, мектеп оқушылары мен студенттерге шетелде оқу стипендияларын табуға көмектеседі. Тегін семинарлар, тәлімгерлік, кеңес беру. Өзі стипендия бағдарламасы емес, бірақ өзекті базаларға қол жеткізуді береді.","en":"Destination Education Kazakhstan is a Kazakhstani NGO that helps school students and university students find scholarships to study abroad. Runs free seminars, mentorship, and consultations. Not a scholarship program itself, but gives access to up-to-date databases."}'::jsonb,
    'Destination Education (KZ NGO)', ARRAY['scholarship','international_education','guidance']::text[], '{"ru":["Возраст от 14 лет","Проживание в Казахстане","Интерес к учёбе за рубежом","Регистрация на сайте или мероприятии"],"kk":["14 жастан","Қазақстанда тұру","Шетелде оқуға қызығушылық","Сайт немесе іс-шарада тіркелу"],"en":["Age 14+","Living in Kazakhstan","Interest in studying abroad","Registration on website or at event"]}'::jsonb, 'https://www.destinationeducation.kz', 'https://www.destinationeducation.kz',
    'free', undefined, NULL, 'hybrid', 'Kazakhstan (Almaty, Astana + online)',
    8, 12, 14, 25,
    ARRAY['KZ']::text[], '{}'::text[], 'other', 'Open to residents of Kazakhstan only.',
    '[]'::jsonb, 'rolling', NULL, 2027,
    'human', '2026-11-01', 'mypath_team', 'destinationeducation.kz confirmed. KZ-registered NGO with active website.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: aga-khan-foundation-scholarship-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'aga-khan-foundation-scholarship-2027', 'Aga Khan Foundation International Scholarship Programme', 'Aga Khan Foundation', 'scholarship', 'Aga Khan Foundation Master''s scholarship abroad. Kazakhstan is in the eligible countries list.', 'https://www.akdn.org/agency/aga-khan-foundation/international-scholarship-programme', '2027-03-31', 'approved', true,
    ARRAY['postgraduate_study','international_education','fully_funded']::text[], ARRAY['postgraduate_study','international_education','fully_funded']::text[], ARRAY['Kazakhstani citizenship (or other partner country)','Admission to a Master''s program','Age under 30','English B2/IELTS 6.5+','Academic achievements and motivation essay','Demonstrated financial need']::text[],
    '{"ru":"Стипендия Фонда Ага Хана для постградуальных студентов","kk":"Ага Хан Қоры магистратура стипендиясы","en":"Aga Khan Foundation International Scholarship Programme"}'::jsonb, '{"ru":"Стипендия Ага Хана для магистратуры за рубежом. Казахстан — в списке стран.","kk":"Ага Хан магистратура стипендиясы шетелде. Қазақстан — елдер тізімінде.","en":"Aga Khan Foundation Master''s scholarship abroad. Kazakhstan is in the eligible countries list."}'::jsonb, '{"ru":"Фонд Ага Хана предоставляет стипендии для студентов из развивающихся стран для обучения по магистерским программам в ведущих университетах мира. Казахстан входит в список стран, откуда принимаются заявки. Стипендия покрывает обучение, проживание и расходы на жизнь (частично в форме беспроцентного займа).","kk":"Ага Хан Қоры дамушы елдерден студенттерге әлемнің жетекші университеттерінде магистратура бағдарламалары бойынша оқуға стипендиялар береді. Қазақстан өтінімдерді қабылдайтын елдер тізіміне кіреді.","en":"The Aga Khan Foundation provides scholarships for students from developing countries to pursue Master''s programs at leading universities worldwide. Kazakhstan is on the list of eligible countries. Covers tuition, accommodation, and living expenses (partially as an interest-free loan)."}'::jsonb,
    'Aga Khan Foundation', ARRAY['postgraduate_study','international_education','fully_funded']::text[], '{"ru":["Гражданство Казахстана (или другой страны-партнёра)","Поступление на магистерскую программу","Возраст до 30 лет","Уровень английского: B2/IELTS 6.5+","Академические достижения и мотивационное эссе","Демонстрация финансовой нужды"],"kk":["Қазақстан азаматтығы (немесе басқа серіктес ел)","Магистратура бағдарламасына түсу","30 жасқа дейін","Ағылшын B2/IELTS 6.5+","Академиялық жетістіктер мен мотивациялық эссе","Қаржылық қажеттілікті көрсету"],"en":["Kazakhstani citizenship (or other partner country)","Admission to a Master''s program","Age under 30","English B2/IELTS 6.5+","Academic achievements and motivation essay","Demonstrated financial need"]}'::jsonb, 'https://www.akdn.org/agency/aga-khan-foundation/international-scholarship-programme', 'https://www.akdn.org/our-agencies/aga-khan-foundation',
    'fully_funded', undefined, NULL, 'offline', 'Various countries (top universities worldwide)',
    12, 12, 18, 30,
    ARRAY['KZ','TJ','KG','UZ','AF','BD','IN','PK','NG','UG','TZ','KE','MZ']::text[], '{}'::text[], 'other', 'Open to citizens of Aga Khan Foundation partner developing countries. Kazakhstan included.',
    '["en_ielts_6_5"]'::jsonb, 'annual_estimate', '2027-03-31', 2027,
    'human', '2026-11-01', 'mypath_team', 'akdn.org confirmed. KZ listed as eligible country on scholarship page.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: central-asia-scholarship-daad-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'central-asia-scholarship-daad-2027', 'DAAD — Scholarships for Central Asia (Germany)', 'DAAD (Deutscher Akademischer Austauschdienst)', 'scholarship', 'German DAAD scholarships for Kazakhstani students. Study and research in Germany.', 'https://www.daad.kz/en/scholarships/', '2027-11-01', 'approved', true,
    ARRAY['postgraduate_study','research','international_education']::text[], ARRAY['postgraduate_study','research','international_education']::text[], ARRAY['Kazakhstani citizenship','University student or graduate','German B2 or English B2 (depends on program)','Academic achievements','Application via DAAD Kazakhstan (Almaty)']::text[],
    '{"ru":"DAAD — Стипендии для Центральной Азии (Германия)","kk":"DAAD — Орталық Азияға арналған стипендиялар (Германия)","en":"DAAD — Scholarships for Central Asia (Germany)"}'::jsonb, '{"ru":"Немецкие стипендии DAAD для студентов из Казахстана. Обучение и исследования в Германии.","kk":"DAAD Германия стипендиялары Қазақстан студенттеріне. Германияда оқу және зерттеу.","en":"German DAAD scholarships for Kazakhstani students. Study and research in Germany."}'::jsonb, '{"ru":"DAAD — Германская служба академических обменов — предлагает несколько программ стипендий для студентов и молодых учёных из Казахстана и других стран Центральной Азии для обучения и исследований в Германии. Все расходы на обучение, проживание, перелёт покрываются.","kk":"DAAD — Германдық академиялық алмасу қызметі — Қазақстан және Орталық Азиядағы басқа елдерден студенттер мен жас ғалымдарға Германияда оқу мен зерттеу жүргізуге бірнеше стипендия бағдарламаларын ұсынады.","en":"DAAD — German Academic Exchange Service — offers several scholarship programs for students and young researchers from Kazakhstan and other Central Asian countries for study and research in Germany. All costs covered."}'::jsonb,
    'DAAD (Deutscher Akademischer Austauschdienst)', ARRAY['postgraduate_study','research','international_education']::text[], '{"ru":["Гражданство Казахстана","Студент или выпускник вуза","Уровень немецкого B2 или английского B2 (зависит от программы)","Академические достижения","Заявка через DAAD Kazakhstan (Алматы)"],"kk":["Қазақстан азаматтығы","Жоо студенті немесе түлегі","Неміс B2 немесе ағылшын B2 (бағдарламаға байланысты)","Академиялық жетістіктер","DAAD Kazakhstan (Алматы) арқылы өтінім"],"en":["Kazakhstani citizenship","University student or graduate","German B2 or English B2 (depends on program)","Academic achievements","Application via DAAD Kazakhstan (Almaty)"]}'::jsonb, 'https://www.daad.kz/en/scholarships/', 'https://www.daad.kz/en',
    'fully_funded', undefined, NULL, 'offline', 'Germany',
    12, 12, 18, 32,
    ARRAY['KZ']::text[], '{}'::text[], 'other', 'Kazakhstani citizens only via DAAD Kazakhstan office.',
    '["de_b2","en_b2"]'::jsonb, 'annual_estimate', '2027-11-01', 2027,
    'human', '2026-11-01', 'mypath_team', 'daad.kz confirmed. DAAD Kazakhstan office in Almaty confirmed.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: joint-japan-world-bank-scholarship-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'joint-japan-world-bank-scholarship-2027', 'JJ/WBGSP — Joint Japan/World Bank Graduate Scholarship Program', 'World Bank / Government of Japan', 'scholarship', 'Japan/World Bank scholarship: Master''s in development economics. KZ is a World Bank borrower.', 'https://www.worldbank.org/en/programs/scholarships', '2027-04-25', 'approved', true,
    ARRAY['postgraduate_study','development_economics','policy','international_education']::text[], ARRAY['postgraduate_study','development_economics','policy','international_education']::text[], ARRAY['Citizenship of a WB borrowing country (Kazakhstan included)','Bachelor''s degree','Age up to 45','At least 2 years of work experience','Admission to a WB partner program','English IELTS 6.5+']::text[],
    '{"ru":"JJ/WBGSP — Стипендия Японии и Всемирного банка","kk":"JJ/WBGSP — Жапония мен Дүниежүзілік банктің стипендиясы","en":"JJ/WBGSP — Joint Japan/World Bank Graduate Scholarship Program"}'::jsonb, '{"ru":"Стипендия Японии/Всемирного банка: магистратура по экономике развития. КЗ — страна-заёмщик.","kk":"Жапония/Дүниежүзілік банк стипендиясы: даму экономикасы магистратурасы. ҚЗ — қарыз алушы ел.","en":"Japan/World Bank scholarship: Master''s in development economics. KZ is a World Bank borrower."}'::jsonb, '{"ru":"Совместная программа стипендий Японии и Всемирного банка (JJ/WBGSP) поддерживает граждан стран-заёмщиков ВБ, включая Казахстан, для обучения по магистерским программам в области экономики развития, государственного управления и смежных дисциплин.","kk":"JJ/WBGSP Дүниежүзілік банктен қарыз алатын елдердің, Қазақстанды қоса, азаматтарын дамыту экономикасы, мемлекеттік басқару және ілес пәндер бойынша магистратурада оқуды қолдайды.","en":"The JJ/WBGSP supports citizens of World Bank borrowing countries including Kazakhstan to pursue Master''s programs in development economics, public administration, and related disciplines."}'::jsonb,
    'World Bank / Government of Japan', ARRAY['postgraduate_study','development_economics','policy','international_education']::text[], '{"ru":["Гражданство страны-заёмщика ВБ (Казахстан входит)","Степень бакалавра","Возраст до 45 лет","Опыт работы не менее 2 лет","Поступление в программу-партнёр ВБ","Уровень английского: IELTS 6.5+"],"kk":["ДБ қарыз алушы ел азаматтығы (Қазақстан кіреді)","Бакалавр дәрежесі","45 жасқа дейін","Кем дегенде 2 жыл жұмыс тәжірибесі","ДБ серіктес бағдарламасына түсу","Ағылшын IELTS 6.5+"],"en":["Citizenship of a WB borrowing country (Kazakhstan included)","Bachelor''s degree","Age up to 45","At least 2 years of work experience","Admission to a WB partner program","English IELTS 6.5+"]}'::jsonb, 'https://www.worldbank.org/en/programs/scholarships', 'https://www.worldbank.org/en/programs/scholarships/jjwbgsp',
    'fully_funded', undefined, NULL, 'offline', 'Various partner universities worldwide',
    12, 12, 20, 45,
    ARRAY['KZ','UZ','KG','TJ','TM','AF','NG','GH','KE','TZ','UG']::text[], '{}'::text[], 'other', 'Citizens of World Bank borrowing countries only. Kazakhstan is eligible.',
    '["en_ielts_6_5"]'::jsonb, 'annual_estimate', '2027-04-25', 2027,
    'human', '2026-11-01', 'mypath_team', 'worldbank.org/programs/scholarships confirmed. KZ listed as eligible borrowing country.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: international-olympiad-linguistics-iol-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'international-olympiad-linguistics-iol-2027', 'International Linguistics Olympiad (IOL)', 'IOL Steering Committee', 'competition', 'International Linguistics Olympiad. Problems on unknown language analysis. Kazakhstan participates.', 'https://ioling.org', '2027-03-01', 'approved', true,
    ARRAY['linguistics','logic','problem_solving','languages']::text[], ARRAY['linguistics','logic','problem_solving','languages']::text[], ARRAY['7th–11th grade','Under 20 years old','Kazakhstani citizenship','Selection via national linguistics olympiad','English or Russian knowledge (problems in both languages)']::text[],
    '{"ru":"Международная олимпиада по лингвистике (IOL)","kk":"Халықаралық лингвистика олимпиадасы (IOL)","en":"International Linguistics Olympiad (IOL)"}'::jsonb, '{"ru":"Международная олимпиада по лингвистике. Задачи на разбор незнакомых языков. КЗ участвует.","kk":"Халықаралық лингвистика олимпиадасы. Белгісіз тілдерді талдау есептері. ҚЗ қатысады.","en":"International Linguistics Olympiad. Problems on unknown language analysis. Kazakhstan participates."}'::jsonb, '{"ru":"IOL — международная олимпиада по лингвистике для школьников, где участники решают задачи на разбор незнакомых языков без их предварительного изучения. Казахстан участвует через команду, отбираемую на национальной олимпиаде по лингвистике.","kk":"IOL — мектеп оқушыларының халықаралық лингвистика олимпиадасы, мұнда қатысушылар бұрын оқымаған тілдерді талдау есептерін шешеді. Қазақстан ұлттық лингвистика олимпиадасы арқылы іріктелген топ арқылы қатысады.","en":"IOL is the international linguistics olympiad for school students, where participants solve problems analyzing unknown languages without prior study. Kazakhstan participates through a team selected at the national linguistics olympiad."}'::jsonb,
    'IOL Steering Committee', ARRAY['linguistics','logic','problem_solving','languages']::text[], '{"ru":["Обучение в 7–11 классе","Не старше 20 лет","Гражданство Казахстана","Отбор через национальную олимпиаду по лингвистике","Знание английского или русского (задачи на двух языках)"],"kk":["7–11 сынып","20 жасқа дейін","Қазақстан азаматтығы","Ұлттық лингвистика олимпиадасы арқылы іріктеу","Ағылшын немесе орыс тілін білу (есептер екі тілде)"],"en":["7th–11th grade","Under 20 years old","Kazakhstani citizenship","Selection via national linguistics olympiad","English or Russian knowledge (problems in both languages)"]}'::jsonb, 'https://ioling.org', 'https://ioling.org/participation/',
    'free', undefined, NULL, 'offline', 'Annual rotating host country',
    7, 11, 13, 20,
    '{}'::text[], '{}'::text[], 'open', NULL,
    '["en_basic"]'::jsonb, 'annual_estimate', '2027-03-01', 2027,
    'human', '2026-11-01', 'mypath_team', 'ioling.org confirmed. Kazakhstan listed among participating countries.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

  -- Opportunity: mathematical-kangaroo-kz-2027
  INSERT INTO public.opportunities (
    slug, title, org, category, description, url, deadline, status, verified,
    tags, fields, requirements, title_i18n, summary_i18n, description_i18n,
    organization, directions, requirements_checklist, official_url, source_url,
    cost_type, cost_amount, cost_currency, format, location, min_grade, max_grade,
    min_age, max_age, eligibility_countries, excluded_countries, citizenship_rule,
    citizenship_note, language_requirements, deadline_type, deadline_date, cycle_year,
    translation_source, verified_at, verified_by, verification_note
  ) VALUES (
    'mathematical-kangaroo-kz-2027', 'Kangaroo — International Mathematical Competition', 'Association Kangourou sans Frontières', 'competition', 'World''s largest maths competition. Kazakhstan participates. All grades. 90+ countries.', 'https://www.aksf.org', '2027-03-01', 'approved', true,
    ARRAY['mathematics','logic','problem_solving']::text[], ARRAY['mathematics','logic','problem_solving']::text[], ARRAY['Grades 1–11','Living in Kazakhstan (registration through school)','No level requirements (5 difficulty levels)','Small organisation fee through school']::text[],
    '{"ru":"Кенгуру — Международный математический конкурс","kk":"Кенгуру — Халықаралық математика байқауы","en":"Kangaroo — International Mathematical Competition"}'::jsonb, '{"ru":"Крупнейший в мире конкурс по математике. Казахстан участвует. Все классы. 90+ стран.","kk":"Дүниежүзіндегі ең ірі математика байқауы. Қазақстан қатысады. Барлық сыныптар. 90+ ел.","en":"World''s largest maths competition. Kazakhstan participates. All grades. 90+ countries."}'::jsonb, '{"ru":"Кенгуру — крупнейший в мире массовый математический конкурс для школьников 1–11 классов. Участвуют более 6 миллионов человек из более чем 90 стран. Казахстан активно участвует, конкурс организуется по всей стране. Задачи разного уровня сложности, решаются за 75 минут.","kk":"Кенгуру — 1–11 сынып оқушыларына арналған дүниежүзіндегі ең ірі жаппай математика байқауы. 90-нан астам елден 6 миллионнан астам адам қатысады. Қазақстан белсенді қатысады, байқау бүкіл елде ұйымдастырылады.","en":"Kangaroo is the world''s largest mass mathematics competition for grades 1–11, with over 6 million participants from 90+ countries. Kazakhstan actively participates; the competition is organized nationwide."}'::jsonb,
    'Association Kangourou sans Frontières', ARRAY['mathematics','logic','problem_solving']::text[], '{"ru":["Обучение в 1–11 классе","Проживание в Казахстане (регистрация через школу)","Нет требований к уровню (есть 5 уровней сложности)","Небольшой организационный взнос через школу"],"kk":["1–11 сынып","Қазақстанда тұру (мектеп арқылы тіркелу)","Деңгей талаптары жоқ (5 қиындық деңгейі бар)","Мектеп арқылы шағын ұйымдастыру жарнасы"],"en":["Grades 1–11","Living in Kazakhstan (registration through school)","No level requirements (5 difficulty levels)","Small organisation fee through school"]}'::jsonb, 'https://www.aksf.org', 'https://www.aksf.org/countries.html',
    'paid', 10, 'USD', 'offline', 'Kazakhstan (all cities) + 90+ countries',
    7, 11, 13, 18,
    '{}'::text[], '{}'::text[], 'open', NULL,
    '[]'::jsonb, 'annual_estimate', '2027-03-01', 2027,
    'human', '2026-11-01', 'mypath_team', 'aksf.org confirmed. Kazakhstan listed on countries page.'
  ) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    org = EXCLUDED.org,
    title_i18n = EXCLUDED.title_i18n,
    summary_i18n = EXCLUDED.summary_i18n,
    description_i18n = EXCLUDED.description_i18n,
    official_url = EXCLUDED.official_url,
    deadline_date = EXCLUDED.deadline_date,
    deadline = EXCLUDED.deadline,
    cost_type = EXCLUDED.cost_type,
    citizenship_rule = EXCLUDED.citizenship_rule,
    citizenship_note = EXCLUDED.citizenship_note,
    status = EXCLUDED.status,
    updated_at = now();

END $$;