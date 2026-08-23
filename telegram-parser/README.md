# MyPath Telegram Opportunity Parser 🚀

Автоматический сервис для мониторинга Telegram-каналов с образовательными возможностями, структурирования постов через Google Gemini AI и сохранения их в базу данных Supabase для сайта MyPath.

---

## 📂 Структура проекта

```
telegram-parser/
├── .env                # Настройки (API ключи Telegram, Gemini, Supabase, список каналов)
├── requirements.txt    # Зависимости (telethon, supabase, pydantic, requests, python-dotenv)
├── ai_extractor.py     # AI-модуль на базе Gemini для извлечения полей (JSON schema)
├── database.py         # Подключение к Supabase и защита от дубликатов
├── parser.py           # Основной демон, слушающий Telegram-каналы в реальном времени
├── test_channels.py    # Тестовый скрипт для парсинга последних сообщений
└── schema.sql          # SQL-скрипт для создания таблицы opportunities в Supabase
```

---

## ⚙️ Пошаговый запуск

### Шаг 1. Создание таблицы в Supabase
1. Откройте ваш проект в [Supabase Dashboard](https://supabase.com/dashboard).
2. Перейдите в **SQL Editor** → **New Query**.
3. Скопируйте и выполните содержимое файла [`schema.sql`](./schema.sql).

### Шаг 2. Установка зависимостей
В терминале перейдите в папку парсера и установите библиотеки:
```bash
cd telegram-parser
pip install -r requirements.txt
```

### Шаг 3. Первый запуск и авторизация в Telegram
При первом запуске Telegram попросит ввести ваш номер телефона и код подтверждения (для создания файла сессии `mypath_tg_session.session`):
```bash
python test_channels.py
```
*После первого ввода кода сессия сохранится, и повторно авторизовываться не потребуется.*

### Шаг 4. Запуск фонового прослушивания каналов
Для постоянной работы сервиса в режиме реального времени:
```bash
python parser.py
```
Как только в одном из каналов (`@edu_strategies`, `@deeppurplehub`, `@asselibadulla`) появится новый пост:
1. Сервис получит его.
2. AI проанализирует текст и извлечет: название, дедлайн, категорию, стоимость, требования и ссылку.
3. Запись появится в вашей базе Supabase и сразу станет доступна на сайте MyPath.
