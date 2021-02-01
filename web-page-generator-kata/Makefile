
.PHONY: default run docker-build docker-run
default: docker-run

generate-webpage:
	npm run generate-webpage
	@echo "Webpage generated at html/users.html"

docker-generate-webpage:
	@docker run -it --rm -v ${PWD}:/kata codiumteam/legacy-training-js make generate-webpage