.PHONY: help install dev build start lint clean docker-build docker-run docker-stop docker-dev docker-clean

# Variables
APP_NAME := landing
DOCKER_IMAGE := $(APP_NAME):latest

help: ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

# Local development
install: ## Install dependencies
	npm install

dev: ## Start development server
	npm run dev

build: ## Build for production
	npm run build

start: ## Start production server
	npm run start

lint: ## Run linter
	npm run lint

lint-fix: ## Run linter with auto-fix
	npm run lint -- --fix

clean: ## Clean build artifacts
	rm -rf .next node_modules

# Docker commands
docker-build: ## Build Docker image
	docker build -t $(DOCKER_IMAGE) .

docker-run: ## Run Docker container
	docker run -p 3000:3000 --env-file .env.local $(DOCKER_IMAGE)

docker-stop: ## Stop all running containers
	docker stop $$(docker ps -q --filter ancestor=$(DOCKER_IMAGE)) 2>/dev/null || true

docker-dev: ## Run development with Docker Compose
	docker compose --profile dev up dev

docker-up: ## Run production with Docker Compose
	docker compose up -d app

docker-down: ## Stop Docker Compose services
	docker compose down

docker-logs: ## Show Docker Compose logs
	docker compose logs -f

docker-clean: ## Remove Docker image and containers
	docker compose down --rmi all --volumes --remove-orphans
	docker rmi $(DOCKER_IMAGE) 2>/dev/null || true

# Setup
setup: install ## Initial project setup
	@if [ ! -f .env.local ]; then cp .env.local.example .env.local; echo "Created .env.local from example"; fi
	@echo "Setup complete. Edit .env.local with your Supabase credentials."
