.PHONY: all test clean

dockerhub ?= jalgraves
image_name ?= drdavisicecream
version ?= $(shell jq -r .version package.json)

sass:
		sass ${PWD}/src/sass/style.sass ${PWD}/dist/public/css/style.css

stop:
		docker rm -f $(image_name) || true

prod_build: sass
		docker build \
			-t $(image_name):$(version) \
			--build-arg node_env=production .

dev_build: sass
		docker build \
			-t $(image_name):$(version) \
			--build-arg node_env=development .

start:
		docker run \
			-d \
			--name $(image_name) \
			--restart always \
			-p "3037:3037" \
			-v "${PWD}/dist/public/css:/app/dist/public/css" \
			-v "${PWD}/dist/public/images:/app/dist/public/images" \
			-e API_USER=${API_USER} \
			-e API_PW=${API_PW} \
			$(image_name):$(version)

publish: dev_build
		docker tag $(image_name):$(version) $(dockerhub)/$(image_name):$(version)
		docker push $(dockerhub)/$(image_name):$(version)

latest:
		docker tag $(image_name):$(version) $(dockerhub)/$(image_name):latest
		docker push $(dockerhub)/$(image_name):latest
