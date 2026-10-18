@echo off
title Vamsi Portfolio
echo Starting server...
for /f "tokens=5" %%a in ('netstat -aon ^| find ":3000" ^| find "LISTENING"') do (taskkill /PID %%a /F >nul 2>&1)
timeout /t 1 /nobreak >nul
start "" "http://localhost:3000"
echo Website: http://localhost:3000
echo Keep this window open.
echo.
python -m http.server 3000