@echo off
echo Stopping MyPath Telegram Parser...
taskkill /F /FI "WINDOWTITLE eq *parser.py*" /T >nul 2>&1
echo Done!
pause
