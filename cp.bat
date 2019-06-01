@echo off
:start
  echo LuigiBot Control Panel
  title LuigiBot Control Panel
  goto main
:main
  echo "run" to start
  echo "exit" to quit
  set /p a=">"
  if %a% == "run" goto run
  if %a% == "exit" exit
:run
  echo Starting LuigiBot...
  echo [ START OF LOG ]
  node bot.js
  echo [ END OF LOG ]
  pause
  goto main
  
