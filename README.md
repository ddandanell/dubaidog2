# Pet Transport Dubai

> Professional pet relocation services for dogs and cats moving to and from Dubai.

**Live Site:** [pet-transport-dubai.ae](https://pet-transport-dubai.ae)  
**GitHub:** [ddandanell/Pet-Transport-Dubai](https://github.com/ddandanell/Pet-Transport-Dubai)  
**Status:** 🚧 In Development

---

## Overview

Pet Transport Dubai is a premium logistics and relocation company specializing in professional pet transport services. We help pet owners move dogs and cats to or from Dubai by handling documents, flights, crates, airport clearance, and door-to-door coordination.

**This is not a cute pet website.** The design and experience reflect a serious, trustworthy logistics company that handles complex international pet relocation with professional care.

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 18 + Vite 6 |
| **Styling** | Tailwind CSS v4 + shadcn/ui |
| **Language** | TypeScript 5.9 (strict mode) |
| **Database** | PostgreSQL + Drizzle ORM |
| **API** | Express 5 REST API |
| **Forms** | React Hook Form + Zod |
| **State** | TanStack Query (server) + Zustand (client) |
| **Monorepo** | pnpm workspaces |
| **Hosting** | Vercel |
| **Analytics** | Plausible |
| **Email** | Resend |
| **Build** | esbuild + Vite |

---

## Project Structure

```
pet-transport-dubai/
├── artifacts/
│   ├── api-server/          ← Express REST API
│   ├── mockup-sandbox/      ← Component development sandbox
│   └── pawclearance/        ← Main React app (frontend)
├── lib/
│   ├── api-client-react/    ← React Query hooks generated from OpenAPI
│   ├── api-spec/            ← OpenAPI specification
│   ├── api-zod/             ← Zod schemas generated from OpenAPI
│   └── db/                  ← Drizzle schema and migrations
├── scripts/                 ← Build and automation scripts
├── AGENTS.md                ← Agent rules and tech stack reference
├── PROJECT_RULES.md         ← Project-specific configuration (filled in)
├── EXECUTION_RULES.md       ← Task classification and safety rules
├── SESSION_LOG.md           ← Development session log
└── package.json             ← Workspace root configuration
```

---

## Quick Start

### Prerequisites

- Node.js 24+
- pnpm 9+
- PostgreSQL database

### Installation

```bash
# Clone the repository
git clone git@github.com:ddandanell/Pet-Transport-Dubai.git
cd Pet-Transport-Dubai

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your actual values

# Push database schema (development)
pnpm --filter @workspace/db run push

# Start the API server
pnpm --filter @workspace/api-server run dev

# Start the frontend (in another terminal)
pnpm --filter @workspace/pawclearance run dev
```

Frontend: http://localhost:5173  
API: http://localhost:5000

---

## Available Commands

```bash
# Development
pnpm --filter @workspace/pawclearance run dev    # Frontend dev server
pnpm --filter @workspace/api-server run dev      # API server

# Build & Type Check
pnpm run typecheck                               # Typecheck all workspaces
pnpm run build                                   # Build all packages

# Code Generation
pnpm --filter @workspace/api-spec run codegen    # Regenerate API client from OpenAPI

# Database
pnpm --filter @workspace/db run push             # Push schema to dev DB
pnpm --filter @workspace/db run generate         # Generate migration
pnpm --filter @workspace/db run migrate          # Run migrations
```

---

## Key Features (Planned)

### User-Facing
- **Service Routing**: Import to Dubai / Export from Dubai / Emergency cases
- **Price Calculator**: Route-based cost estimation (origin, destination, breed, weight, documents, urgency)
- **Document Checker**: Verify pet import/export requirements
- **Relocation Guides**: Route-specific guides (Dubai ↔ UK, Europe, USA)
- **Case Intake System**: Quote requests and emergency help forms

### Technical
- Type-safe API client generated from OpenAPI spec
- Form validation with Zod schemas
- Responsive design (mobile-first)
- SEO-optimized pages with structured data
- Professional design system (no cute pet aesthetics)

---

## Brand Guidelines

### Visual Identity
- **Aesthetic**: Professional logistics company, not a pet toy store
- **Colors**: Deep Ocean Blue (#003d5c), Safety Orange (#ff6b35), Clean White
- **Mood**: Trustworthy, clear, fast, serious
- **Avoid**: Cute imagery, playful fonts, cartoon illustrations

### Target Audience
Pet owners who are:
- Stressed and confused about relocation requirements
- Worried about making mistakes with documents or airlines
- Looking for clear pricing and timeline information
- Need professional help coordinating the full move

---

## Documentation

| File | Purpose |
|---|---|
| [AGENTS.md](./AGENTS.md) | Core tech stack, design rules, GitHub workflow |
| [PROJECT_RULES.md](./PROJECT_RULES.md) | Project-specific config (GitHub, Vercel, brand, SEO) |
| [EXECUTION_RULES.md](./EXECUTION_RULES.md) | Task classification and safety protocols |
| [PREFLIGHT.md](./PREFLIGHT.md) | Pre-work session checklist |
| [SESSION_LOG.md](./SESSION_LOG.md) | Development work log |
| [DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md) | Pre-deploy verification |
| [HOW_TO_USE.md](./HOW_TO_USE.md) | Setup guide and daily workflow |
| [SKILLS_REFERENCE.md](./SKILLS_REFERENCE.md) | 87 agent skills reference |

---

## Environment Variables

See `.env.example` for required variables. Key variables:

```env
DATABASE_URL=          # PostgreSQL connection string
BFL_API_KEY=           # Black Forest Labs (image generation)
RESEND_API_KEY=        # Email service
BLOB_READ_WRITE_TOKEN= # Vercel Blob storage
```

---

## Development Workflow

1. **Start Session**: Read [SESSION_LOG.md](./SESSION_LOG.md) → last "Next Steps"
2. **Run Preflight**: Check [PREFLIGHT.md](./PREFLIGHT.md) before coding
3. **Work**: Implement features, commit atomically
4. **End Session**: Update SESSION_LOG.md with progress and next steps
5. **Deploy**: Run [DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md) before production

---

## Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make changes and commit: `git commit -m "feat: add feature"`
3. Run type check and build: `pnpm run typecheck && pnpm run build`
4. Push and open a PR: `git push origin feature/your-feature`

---

## License

MIT

---

## Contact

**Project Owner:** Pet Transport Dubai  
**Repository:** https://github.com/ddandanell/Pet-Transport-Dubai  
**Website:** https://pet-transport-dubai.ae
