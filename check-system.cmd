@echo off

@REM CALL :validateDocker
CALL :validateKata web-page-generator-kata web-page-generator "make generate-webpage"
CALL :validateKata tennis-refactoring-kata tennis-refactoring "make test"
CALL :validateKata user-registration-refactoring-kata user-registration "make test"
CALL :validateKata gilded-rose-characterization-testing gilded-rose-characterization "make test"
CALL :validateKata weather-kata weather-kata "make test"
CALL :validateKata trip-service-kata trip-service "make test"
CALL :validateKata trivia-golden-master trivia-golden-master "make test"
CALL :validateKata print-date print-date "make test"

goto :eof

:validateKata
    echo Validating %1...
    pushd %1
    docker run --rm -v %CD%:/code codiumteam/legacy-training-js:%2 %~3
    popd
goto :eof

:validateDocker
    echo Validating docker running...
    docker ps >NUL: 2>NUL:
    IF ERRORLEVEL 1 (
      echo Error
      echo Are you sure that you have docker running?
      goto :eof
    ) else (
      echo "Ok"
    )

    echo Downloading docker image...
    docker pull codiumteam/legacy-training-js:web-page-generator >NUL: 2>NUL:
    IF ERRORLEVEL 1 (
      echo Error
      echo There is a problem downloading the docker image
      goto :eof
    ) else (
      echo Ok
    )

    echo Validating docker mount permissions...
    docker run --rm -v "%CD%":/code codiumteam/legacy-training-js:web-page-generator ls >NUL: 2>NUL:
    IF ERRORLEVEL 1 (
      echo Error
      echo Are you sure that you have permissions to mount your volumes?
      goto :eof
    ) else (
      echo Ok
    )
goto :eof

