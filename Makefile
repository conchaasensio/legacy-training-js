.PHONY: generate-docker-image push-docker-image

generate-docker-image:
	docker build . -t codiumteam/legacy-training-js	

push-docker-image:
	docker push codiumteam/legacy-training-js:latest