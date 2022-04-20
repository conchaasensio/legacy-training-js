.PHONY: default build test test-watch coverage docker-test docker-test-watch docker-coverage
default: docker-test

build:
	npm install

test:
	npm test

test-watch:
	npm run test:watch

server:
	npm run server

coverage:
	npm run coverage
	@printf "To visualize the lines open the report at coverage/lcov-report/index.html\n"

docker-build:
	docker build -t codiumteam/legacy-training-js:user-registration -f ../Dockerfile .

docker-test:
	docker run -it --rm -v ${PWD}:/kata codiumteam/legacy-training-js:user-registration make test

docker-test-watch:
	docker run -it --rm -v ${PWD}:/kata codiumteam/legacy-training-js:user-registration make test-watch

docker-coverage:
	@docker run -it --rm -v ${PWD}:/kata codiumteam/legacy-training-js:user-registration make coverage

docker-server:
	@docker run -it --rm -p 3000:3000 -v ${PWD}:/kata codiumteam/legacy-training-js:user-registration make server
