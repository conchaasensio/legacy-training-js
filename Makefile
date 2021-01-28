.PHONY: generate-docker-image

generate-docker-image:
	docker build . -t codiumteam/legacy-training-js	