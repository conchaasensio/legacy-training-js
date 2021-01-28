# Codium Working with legacy code training

## How to install it
1. Download the code using Git or with the [downloading the zip](https://github.com/CodiumTeam/legacy-training-js/archive/master.zip) link
2. Run the script to verify that you have everything we need for the training:
    - On Linux / Mac: [check-system.sh](./check-system.sh)
    - On Windows: [check-system.cmd](./check-system.cmd)
3. Go into the folder of the kata you want to practice. Eg: cd fizz-buzz
4. Execute the tests. Pick one option:  
    - Option 1: With docker and make

         `make`
    - Option 2: With docker without make

        `docker run -it --rm -v ${PWD}:/kata codiumteam/tdd-training-js make test-watch`
    - Option 3: Without docker:
        - Install the dependencies: `npm install`
        - Execute the tests: `npm run test:watch`
5. Solve the kata.

## Katas
## Web page generator kata
TBD

## Tennis refactoring kata
Kata to practice the identification of bad smells, automated refactorings and enjoying the benefits of having a test harness.

## User registration refactoring kata
Kata to practice how to identify the different responsibilities in the code and decouple them (both from the framework and from the database and libraries).

## Gilded Rose characterization testing
Kata to practice characterization testing and experience the value of mutation testing.