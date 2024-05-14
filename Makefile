-include helm/drdavisicecream/Makefile
.PHONY: all test clean
export MAKE_PATH ?= $(shell pwd)
export SELF ?= $(MAKE)


MAKE_FILES = ${MAKE_PATH}/helm/drdavisicecream/Makefile ${MAKE_PATH}/Makefile

name ?= drdavisicecream
dockerhub ?= jalgraves
image_name ?= drdavisicecream
port ?= 3034
version ?= $(shell jq -r .version package.json | tr -d '"')
hash = $(shell git rev-parse --short HEAD)
git_hash = $(shell git rev-parse --short HEAD)

ifeq ($(env),dev)
	image_tag = $(version)-$(hash)
	node_env = development
	context = ${DEV_CONTEXT}
	namespace = ${DEV_NAMESPACE}
	platform = linux/arm64
else ifeq ($(env), prod)
	image_tag = $(version)
	node_env = production
	context = ${PROD_CONTEXT}
	namespace = ${PROD_NAMESPACE}
	platform = linux/amd64
endif

lint:
	npx eslint .

sass:
	sass ${PWD}/src/sass/style.sass ${PWD}/dist/public/css/style.css

## Build image
build: sass
	@echo "\033[1;32m. . . Building $(image_name):$(image_tag)  . . .\033[1;37m\n"
	@echo "\033[1;32mNode Env: $(node_env)\033[1;37m\n"
	docker build \
		--platform linux/amd64 \
		-t $(image_name):$(image_tag) \
		--build-arg node_env=$(node_env) \
		--build-arg git_hash=$(git_hash) \
		--build-arg version=$(version) .

## Start docker container
docker/run:
	docker run --rm --name $(image_name) -p $(port):$(port) $(image_name):$(image_tag)

## Stop docker container
docker/stop:
	docker rm -f $(image_name)

## Build and tag image and push to dockerhub
publish: build
	@echo "\033[1;32m. . . Publishing $(image_name):$(image_tag) . . .\033[1;37m\n"
	docker tag $(image_name):$(image_tag) $(dockerhub)/$(image_name):$(image_tag)
	docker push $(dockerhub)/$(image_name):$(image_tag)

## Tag image with latest and push to dockerhub
publish/latest:
	docker tag $(image_name):$(image_tag) $(dockerhub)/$(image_name):latest
	docker push $(dockerhub)/$(image_name):latest

## Empty docker build cache
docker/prune:
	docker builder prune -a --force

## gifsicle
gifsicle:
	gifsicle -i dist/public/images/drdavisicecream_second_logo.gif -O3 --colors 256 -o drdavisicecream_second_logo-opt.gif

## Show available commands
help:
	@printf "Available targets:\n\n"
	@$(SELF) -s help/generate | grep -E "\w($(HELP_FILTER))"
	@printf "\n\n"

help/generate:
	@awk '/^[a-zA-Z\_0-9%:\\\/-]+:/ { \
		helpMessage = match(lastLine, /^## (.*)/); \
		if (helpMessage) { \
			helpCommand = $$1; \
			helpMessage = substr(lastLine, RSTART + 3, RLENGTH); \
			gsub("\\\\", "", helpCommand); \
			gsub(":+$$", "", helpCommand); \
			printf "  \x1b[32;01m%-35s\x1b[0m %s\n", helpCommand, helpMessage; \
		} \
	} \
	{ lastLine = $$0 }' $(MAKE_FILES) | sort -u
