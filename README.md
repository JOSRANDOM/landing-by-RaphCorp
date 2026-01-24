# Raph-Corp Landing

Landing page built with Next.js, TypeScript, and Tailwind CSS following Clean Architecture principles.

## Tech Stack

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Docker** - Containerization

## Project Structure

```
src/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   └── globals.css             # Global styles
├── config/                     # Configuration
│   └── env.ts                  # Environment variables
├── domain/                     # Domain Layer
│   ├── entities/               # Business entities
│   ├── repositories/           # Repository interfaces
│   └── usecases/               # Use case interfaces
├── infrastructure/             # Infrastructure Layer
│   └── api/                    # API client for backend
├── application/                # Application Layer
│   ├── services/               # Application services
│   └── dtos/                   # Data transfer objects
├── presentation/               # Presentation Layer
│   ├── components/             # UI components
│   │   ├── Navbar.tsx          # Navigation bar
│   │   ├── ServiceCard.tsx     # Service card with hover effect
│   │   └── Footer.tsx          # Footer with social links
│   └── hooks/                  # Custom React hooks
└── lib/                        # Utilities
    └── utils.ts                # Helper functions
```

## Features

- Responsive navigation bar with mobile menu
- Hero section with CTA
- Services section with interactive cards (hover to expand)
- About section
- Contact form
- Footer with social links (LinkedIn, Instagram)
- Smooth scroll navigation
- Dark mode support

## Setup

```bash
# Install dependencies
make install

# Copy environment variables
cp .env.local.example .env.local
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_API_URL` | Backend API URL (default: http://localhost:3001/api) |

## Commands

### Local Development

```bash
make dev          # Start dev server with hot reload
make build        # Build for production
make start        # Start production server
make lint         # Run linter
make setup        # Initial project setup
```

### Docker

```bash
make docker-build   # Build image
make docker-up      # Run with Docker Compose
make docker-dev     # Run dev with Docker Compose (hot reload)
make docker-down    # Stop services
make docker-logs    # View logs
```

Or use Docker Compose directly:

```bash
docker compose build
docker compose up
docker compose --profile dev up dev  # Development with hot reload
```

## Pages

| Section | Description |
|---------|-------------|
| Inicio | Hero with welcome message and CTA |
| Servicios | Three service cards (Desarrollo Web, Consultoria, Integraciones) |
| Nosotros | About the team |
| Contacto | Contact form |

## Components

### Navbar
- Fixed navigation bar with blur backdrop
- Logo and navigation links
- "Contactame" CTA button
- Responsive hamburger menu for mobile

### ServiceCard
- Interactive card with hover animation
- Scales up on hover
- Reveals additional details on hover

### Footer
- Social links (LinkedIn, Instagram)
- Copyright notice

## License

MIT
