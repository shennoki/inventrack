case = tests/
cmd = cmd

# Container
build:
	docker compose -f .devcontainer/docker-compose.yml build --no-cache --force-rm
up:
	docker compose -f .devcontainer/docker-compose.yml up -d
down:
	docker compose -f .devcontainer/docker-compose.yml down --remove-orphans
init:
	@make build
	@make up
destroy:
	docker compose -f .devcontainer/docker-compose.yml down --rmi all --volumes --remove-orphans
	docker image prune -f

# Development
start:
	@make up
	docker compose -f .devcontainer/docker-compose.yml exec app npm run dev -- -p 8000
console:
	docker compose -f .devcontainer/docker-compose.yml exec app bash
test:
	docker compose -f .devcontainer/docker-compose.yml exec app vendor/bin/phpunit -c tests/ --colors=always ${case}

# Prisma
prisma-pull:
	docker compose -f .devcontainer/docker-compose.yml exec app npx prisma db pull
prisma-generate:
	docker compose -f .devcontainer/docker-compose.yml exec app npx prisma generate

# shadcn/ui
shadcn:
	docker compose -f .devcontainer/docker-compose.yml exec app npx shadcn-ui@latest ${cmd}
