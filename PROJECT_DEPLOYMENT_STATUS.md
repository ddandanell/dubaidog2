# Project Deployment Status

## What Project This Is

**Dubai Pet Relocation** — A production landing page for professional pet transport services to and from Dubai. MOCCAE-certified, document-first pet logistics.

- Live domain target: `https://pet-transport-dubai.ae`
- GitHub repository: `https://github.com/ddandanell/Pet-Transport-Dubai.git`

## What Framework It Uses

- **Frontend:** Vite 7.3 + React 19.1 + TypeScript + Tailwind CSS 4.1
- **Routing:** wouter 3.3.5
- **Package Manager:** pnpm 10.x (workspace)
- **Build Output:** `artifacts/pawclearance/dist/public`

## What Was Removed

### Old Applications
- `artifacts/api-server/` — Empty Express API scaffolding (only had `/healthz` route)
- `artifacts/mockup-sandbox/` — Old design mockup tool with duplicate components
- `lib/api-client-react/` — Unused generated API client
- `lib/api-spec/` — Unused OpenAPI spec
- `lib/api-zod/` — Unused Zod schemas
- `lib/db/` — Unused Drizzle ORM setup
- `scripts/` — Only contained a `hello.ts` script and `post-merge.sh`

### AI Artifacts
- `AGENTS.md`, `CLAUDE.md`, `DEPLOYMENT_CHECKLIST.md`, `EXECUTION_RULES.md`
- `HOW_TO_USE.md`, `PREFLIGHT.md`, `PROJECT_RULES.md`, `SESSION_LOG.md`
- `SKILLS_REFERENCE.md`, `install-skills.sh`, `skills-lock.json`
- `.github/instructions/Vercel.instructions.md`

### Git Branches
- Deleted local `replit-agent` branch (obsolete, same commits as main)

## What Was Cleaned

- `pnpm-workspace.yaml` — Reduced to only `artifacts/pawclearance`
- `package.json` (root) — Simplified scripts for single-app workflow
- `artifacts/pawclearance/package.json` — Removed dead `@workspace/api-client-react` dependency
- `artifacts/pawclearance/tsconfig.json` — Removed dead `../../lib/api-client-react` reference
- `artifacts/pawclearance/vite.config.ts` — `PORT` and `BASE_PATH` now have sensible defaults
- `vercel.json` — Fixed build/output paths, set `framework: "vite"`
- `.vercelignore` — Added `.local`, `.agents`, `attached_assets`, `artifacts/pawclearance/dist`

## What Branch Is Now Main

- **Active branch:** `main`
- **Remote:** `origin` (GitHub)
- **Backup remote:** `gitsafe-backup` (internal backup system)

## GitHub Repository Status

- Repository: `https://github.com/ddandanell/Pet-Transport-Dubai.git`
- Main branch is clean and up to date with origin
- No uncommitted changes
- Clean working tree

## Vercel Deployment Status

- **Project:** `pet-transport-dubai-api-server` (existing project, repurposed)
- **Team:** `daviddandanell-9392s-projects` (Server Bali)
- **Git Integration:** Connected to `ddandanell/Pet-Transport-Dubai` on `main`
- **Root Directory:** `/` (repo root)
- **Framework:** Vite
- **Build Command:** `pnpm -F pawclearance run build`
- **Output Directory:** `artifacts/pawclearance/dist/public`
- **Install Command:** `pnpm install --frozen-lockfile`

### Latest Deployment
- **URL:** https://pet-transport-dubai-api-server-9xcuha81j.vercel.app
- **Status:** Build successful (Ready)
- **Note:** Preview deployments return 401 due to SSO protection. Production deployments on custom domain will be public.

### Remaining Issue — Project Name
The Vercel project is still named `pet-transport-dubai-api-server` (legacy name from the removed API app). This is cosmetic only — builds and deploys work correctly. To rename:
1. Go to https://vercel.com/daviddandanell-9392s-projects/pet-transport-dubai-api-server/settings
2. Change project name to `pet-transport-dubai` or `dubai-pet-relocation`

## Required Environment Variables

Create a `.env.local` in the repo root for local development (already gitignored):

```bash
# ── App ──────────────────────────────────────────
NEXT_PUBLIC_APP_URL=https://pet-transport-dubai.ae

# ── Database ─────────────────────────────────────
DATABASE_URL=postgresql://user:password@host:port/database

# ── Auth ─────────────────────────────────────────
# TBD - Add auth provider env vars when decided

# ── Image Generation ─────────────────────────────
BFL_API_KEY=

# ── Storage ──────────────────────────────────────
BLOB_READ_WRITE_TOKEN=

# ── Email ──────────────────────────────────────
RESEND_API_KEY=

# ── Payments ─────────────────────────────────────
# TBD - Add payment provider env vars when decided

# ── Monitoring ───────────────────────────────────
SENTRY_DSN=
PLAUSIBLE_DOMAIN=pet-transport-dubai.ae
```

**Note:** The frontend app (`pawclearance`) does not currently use any of these env vars. They are documented here for future backend integration.

## Remaining Problems

1. **Vercel project name is misleading** (`pet-transport-dubai-api-server`). Does not affect functionality.
2. **SSO protection on preview deployments** returns 401. This is expected Vercel team behavior. Production domain will be public.
3. **No custom domain connected yet.** Add `pet-transport-dubai.ae` in Vercel project settings → Domains.

## Exact Next Steps

1. **Rename Vercel project** (optional but recommended):
   - Visit https://vercel.com/daviddandanell-9392s-projects/pet-transport-dubai-api-server/settings
   - Rename to `pet-transport-dubai`

2. **Add custom domain**:
   - In Vercel project settings → Domains, add `pet-transport-dubai.ae`
   - Follow Vercel's DNS instructions

3. **Set production environment variables**:
   - In Vercel project settings → Environment Variables, add any needed vars
   - Or run: `vercel env add <NAME> production`

4. **Trigger production deploy**:
   - Push any change to `main`, or run: `vercel deploy --prod`

5. **Future backend** (optional):
   - If you add an API later, create it as a separate Vercel project or use Vercel Functions/Edge API Routes
   - Do not mix API and frontend in the same project unless using Next.js

## Local Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm run dev
# Or explicitly:
PORT=5173 BASE_PATH=/ pnpm -F pawclearance run dev

# Build for production
pnpm run build
# Or:
pnpm -F pawclearance run build

# Type check
pnpm run typecheck
# Or:
pnpm -F pawclearance run typecheck
```

---

Last updated: 2026-05-23
