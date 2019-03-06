PROJ_NAME := $$(./scripts/project.js)

build:
	npm run build

dev:
	npm run dev

api:
	npm run api

deploy:
	now deploy --public
	now alias

prune:
	now rm -s ${PROJ_NAME}
