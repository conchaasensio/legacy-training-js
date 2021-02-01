
.PHONY: default run docker-build docker-run
default: docker-run

generate-webpage:
	npm run generate-webpage
	@echo "Webpage generated at html/users.html"

docker-run:
	docker run --rm -v ${PWD}:/opt/project -v ${PWD}/../.m2:/root/.m2 -w /opt/project codium-legacytraining make run