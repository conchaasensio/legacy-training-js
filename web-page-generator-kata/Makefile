.PHONY: default generate-webpage docker-generate-webpage
default: docker-generate-webpage

generate-webpage:
	npm run generate-webpage
	@echo "Webpage generated at html/users.html"

docker-build:
	docker build -t codiumteam/legacy-training-js:web-page-generator -f ../Dockerfile .

docker-generate-webpage:
	@docker run -it --rm -v ${PWD}:/code codiumteam/legacy-training-js:web-page-generator make generate-webpage
