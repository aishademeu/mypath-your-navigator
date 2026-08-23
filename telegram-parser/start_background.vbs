Set WshShell = CreateObject("WScript.Shell")
' Запуск парсера Telegram в скрытом фоновом режиме без всплывающего окна консоли
WshShell.Run """C:\Users\admin\AppData\Local\Programs\Python\Python312\python.exe"" ""C:\Users\admin\Desktop\mypath-your-navigator\telegram-parser\parser.py""", 0, False
