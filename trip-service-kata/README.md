# Trip Service Kata

## Goals:
- How to break pain code in order to test it.
- Practice: 
  - Extract and override
  - Extract interface
  - Parametrize constructor
  - Introduce static setter 

## Description:
This kata simulates a social network of trips.

There are some couplings inside the [TripService](./src/trip_service.js) that we need to use the dependency-breaking techniques that we have learned.

We want to be able to test TripService and when we have good test coverage we will refactor to improve the code design.

We only can change TripService class.

## How to run the tests
### With Docker
Run `make docker-test`

### Without Docker
1. `make build`
2. `make test`

## Original source code from:
https://github.com/sandromancuso/trip-service-kata

Sandro Mancuso @sandromancuso