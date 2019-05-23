set src=D:\dev\html\tip-calculator
set dest=D:\dev\html\pwa-learn-static\tipcalc

rem Files
xcopy %src%\*.png %dest%\ /y
xcopy %src%\*.html %dest%\ /y
xcopy %src%\*.webmanifest %dest%\ /y

rem Folders
xcopy %src%\css\*.css %dest%\css\ /y
xcopy %src%\img\*.png %dest%\img\ /y
xcopy %src%\js\*.js %dest%\js\ /y

REM Update the local Repo
git add -A :/
git commit -m "updated %date%"
git push

REM Update the target repo
cd %dest%
git add -A :/
git commit -m "updated %date%"
git push
cd %src%

start "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" https://github.com/johnwargo/pwa-learn-static