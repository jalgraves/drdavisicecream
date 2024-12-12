.PHONY: all test clean

name ?= drdavisicecream
image ?= drdavisicecream

ifeq ($(env),dev)
	context = ${DEV_CONTEXT}
	namespace = ${DEV_NAMESPACE}
else ifeq ($(env),prod)
	context = ${PROD_CONTEXT}
	namespace = ${PROD_NAMESPACE}
	region_code = ${PROD_REGION_CODE}
endif

context:
	kubectl config use-context $(context)

## Install Helm chart
helm/install:
	helm upgrade --install $(name) helm/drdavisicecream/ \
		--kubeconfig="${HOME}"/.kube/$(kubeconfig) \
		--namespace $(namespace) \
		--set image.tag=$(image_tag) \
		--set aws.regionCode=$(region_code) \
		--set global.env=$(env) \
		--debug

## Uninstall app from K8s cluster
helm/uninstall:
	helm uninstall $(name) \
		--namespace $(namespace) \
		--debug

## Redeploy app on K8s cluster
helm/redeploy: helm/uninstall helm/install

## Run helm template on chart
helm/template:
	helm template helm/$(name)/ \
		--name-template=$(name) \
		--namespace $(namespace) \
		--set global.env=$(env) \
		--debug

## Start port forwarding
helm/port_forward:
	kubectl port-forward --namespace $(namespace) svc/$(name) $(port):$(port)

## Create chart schema
helm/schema_create:
	cd helm/drdavisicecream && helm schema-gen values.yaml > values.schema.json
