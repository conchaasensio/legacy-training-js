.PHONY: default test test-watch coverage docker-test docker-test-watch docker-coverage
default: docker-test

run-game:
	npm run game

test:
	npm test

test-watch:
	npm run test:watch

coverage:
	npm run coverage
	@printf "To visualize the lines open the report at coverage/lcov-report/index.html\n"


docker-build:
	docker build -t codiumteam/legacy-training-js:trivia-golden-master -f ../Dockerfile .

docker-test:
	docker run -it --rm -v ${PWD}:/code codiumteam/legacy-training-js:trivia-golden-master make test

docker-test-watch:
	docker run -it --rm -v ${PWD}:/code codiumteam/legacy-training-js:trivia-golden-master make test-watch

docker-coverage:
	@docker run -it --rm -v ${PWD}:/code codiumteam/legacy-training-js:trivia-golden-master make coverage

docker-run-game:
	@docker run -it --rm -v ${PWD}:/code codiumteam/legacy-training-js:trivia-golden-master make run-game
