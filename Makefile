PROJ_NAME := $$(./scripts/project.js)

build:
	npm run build

dev:
	npm run dev

api:
	npm run api

show:
	now ls --all ${PROJ_NAME}

deploy:
	now deploy --public -e AIRTABLE_API_KEY=@airtable_api_key

prune:
	now rm -s ${PROJ_NAME}
