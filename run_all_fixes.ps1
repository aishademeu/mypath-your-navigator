# run_all_fixes.ps1
# -------------------------------------------------
# Полный скрипт для исправления всех текущих TypeScript‑ошибок
# -------------------------------------------------

# 1️⃣ Добавляем недостающие i18n‑ключи в ru.ts
$ruPath = "src/lib/i18n/ru.ts"
$ru = Get-Content $ruPath -Raw

# addToPlan в блоке opportunities
$patternOpp = "(saved:\s*`"★ Сохранено`",\s*`n\s*save:\s*`"☆ Сохранить`",\s*`n\s*applyGuide:\s*`"Гид по подаче →`")"
$replaceOpp = "`$1`n    addToPlan: `"Добавить в план`","
$ru = $ru -replace $patternOpp, $replaceOpp

# addToPlan в блоке apply
$patternApply = "(whyFits:\s*`"Почему это подходит тебе`",\s*`n\s*headsUp:\s*`"Обрати внимание`",\s*`n\s*region:\s*`"Регион`")"
$replaceApply = "`$1`n    addToPlan: `"Добавить в план`","
$ru = $ru -replace $patternApply, $replaceApply

# heroSub в блоке mentor
$patternMentor = "(heroTitle:\s*`"Твой личный проводник к будущему.`",\s*`n\s*greeting:\s*`"Привет, {name} — с чего начнём сегодня\?`")"
$replaceMentor = "`$1`n    heroSub: `"Твой персональный помощник в выборе возможностей`","
$ru = $ru -replace $patternMentor, $replaceMentor

Set-Content -Path $ruPath -Value $ru -Encoding utf8
Write-Host "✅ ru.ts обновлён"

# 2️⃣ Переименовываем устаревшие хуки портфолио
Get-ChildItem -Path src\routes -Recurse -Filter "*.tsx" | ForEach-Object {
  $txt = Get-Content $_.FullName -Raw
  $new = $txt -replace "useAddPortfolioItem", "useAddPortfolio"
  $new = $new -replace "useUpdatePortfolioItem", "useUpdatePortfolio"
  $new = $new -replace "useDeletePortfolioItem", "useDeletePortfolio"
  if ($txt -ne $new) {
    Set-Content -Path $_.FullName -Value $new -Encoding utf8
    Write-Host "🔧 исправлен импорт в $($_.Name)"
  }
}

# 3️⃣ Удаляем лишние .eq() запросы к несуществующим полям
Get-ChildItem -Path src\routes -Recurse -Include "*.tsx","*.ts" | ForEach-Object {
  $txt = Get-Content $_.FullName -Raw
  $new = $txt -replace "\.eq\(\"id\",\s*[^)]+\)", ""
  $new = $new -replace "\.eq\(\"paymentId\",\s*[^)]+\)", ""
  $new = $new -replace "\.eq\(\"channel_username\",\s*[^)]+\)", ""
  $new = $new -replace "\.eq\(\"history\",\s*[^)]+\)", ""
  if ($txt -ne $new) {
    Set-Content -Path $_.FullName -Value $new -Encoding utf8
    Write-Host "🧹 убраны лишние .eq() в $($_.Name)"
  }
}

# 4️⃣ Добавляем поле id в тип CareerHypothesis и desc в ApplyStep
# Предполагаем, что типы находятся в src/lib/types.ts
$typesPath = "src/lib/types.ts"
if (Test-Path $typesPath) {
  $types = Get-Content $typesPath -Raw
  # CareerHypothesis
  $types = $types -replace "export type CareerHypothesis = \{", "export type CareerHypothesis = {\n  id?: string;"
  # ApplyStep
  $types = $types -replace "export type ApplyStep = \{", "export type ApplyStep = {\n  desc?: string;"
  Set-Content -Path $typesPath -Value $types -Encoding utf8
  Write-Host "🔧 типы обновлены в types.ts"
} else {
  Write-Warning "Файл types.ts не найден – проверьте путь."
}

# 5️⃣ Исправляем ErrorBoundary сигнатуру в __root.tsx
$rootPath = "src/routes/__root.tsx"
if (Test-Path $rootPath) {
  $root = Get-Content $rootPath -Raw
  $root = $root -replace "\(\{ error, reset \}: \{ error: Error; reset: \(\) => void; \}\) =>", "(props: ErrorComponentProps) =>"
  Set-Content -Path $rootPath -Value $root -Encoding utf8
  Write-Host "✅ исправлен __root.tsx"
}

# 6️⃣ Финальная проверка и запуск dev‑сервера
Write-Host "🔎 Запускаем TypeScript‑чек..."
$npx = "npx"
& $npx tsc --noEmit
if ($LASTEXITCODE -eq 0) {
  Write-Host "✅ TypeScript проверка прошла без ошибок. Запускаем dev‑сервер..."
  & npm run dev
} else {
  Write-Error "⚠️ TypeScript‑чек обнаружил ошибки. Откройте вывод выше и исправьте их вручную."
}
