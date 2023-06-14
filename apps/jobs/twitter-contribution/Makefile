PROJECT_NAME=govrn
REGISTRY_NAME=$(shell grep REGISTRY_NAME .env | cut -d "=" -f2)
IMAGE_PATH = /guild/govrn
TAG = latest

local:
	PYTHONPATH=. python ./bot

test:
	pytest ./tests -vv

coverage:
	coverage run -m pytest ./tests
	coverage html

lint:
	flake8 . --count

format:
	black .

format_check:
	black . --check

azure_login:
	az acr login --name $(REGISTRY_NAME)

build:
	docker build -t $(PROJECT_NAME):$(TAG)  . 

run:
	docker run -v $(shell pwd):/app $(PROJECT_NAME):$(TAG) $(cmd)

docker_format:
	$(MAKE) run cmd="make format"

docker_lint:
	$(MAKE) run cmd="make lint"

# Go into the container
inspect:
	docker run -it /bin/bash

generate_oauth:
	$(MAKE) run CLIENT_ID=$(CLIENT_ID) \
		        GUILD_ID=$(GUILD_ID) \
				cmd="poetry run python ./scripts/generate_oauth.py"
publish:
	$(MAKE) build PROJECT_NAME=$(REGISTRY_NAME)$(IMAGE_PATH) TAG=$(TAG)
	docker push $(REGISTRY_NAME)$(IMAGE_PATH):$(TAG)
