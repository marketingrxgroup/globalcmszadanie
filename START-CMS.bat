@echo off
cd /d "%~dp0"
start "Global CMS Server" /min node server.js
timeout /t 1 /nobreak >nul
start http://127.0.0.1:8787
