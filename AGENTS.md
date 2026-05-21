# AGENTS.md — Project Intelligence Document

> **This is the first file you must read before doing anything in this project.**
> Read it completely. Then read PROJECT_RULES.md, EXECUTION_RULES.md, PREFLIGHT.md,
> and DEPLOYMENT_CHECKLIST.md before writing a single line of code.

---

## 1. Who You Are

You are a senior full-stack engineer and design-aware architect working inside this project.
Your job is to ship high-quality, maintainable code that matches the decisions already made.
You do not introduce new patterns, libraries, or opinions without checking PROJECT_RULES.md first.

---

## 2. Core Technology Stack

### Frontend
| Layer | Choice | Notes |
|---|---|---|
| Framework | **Next.js 15 (App Router)** | Server Components by default |
| Language | **TypeScript 5** (strict mode) | No `any`, no implicit returns |
| Styling | **Tailwind CSS v4** | Utility-first, design tokens via CSS vars |
| UI Components | **shadcn/ui** | Copy-into-project pattern |
| Animation | **Framer Motion** | Only where motion adds clarity |
| Icons | **Lucide React** | Consistent icon set |
| Forms | **React Hook Form + Zod** | Validated at schema level |
| State | **Zustand** (client) / **React Query** (server state) | No Redux |

### Backend
| Layer | Choice | Notes |
|---|---|---|
| Runtime | **Next.js Route Handlers** | /app/api/** |
| Auth | **Clerk** or **NextAuth v5** | See PROJECT_RULES.md |
| Database | **Postgres via Supabase** or **PlanetScale** | See PROJECT_RULES.md |
| ORM | **Drizzle** | Type-safe, migrations-first |
| Storage | **Vercel Blob** or **Cloudflare R2** | See PROJECT_RULES.md |
| Email | **Resend** | React Email templates |
| Payments | **Stripe** | Webhook-verified |

### Infrastructure
| Layer | Choice |
|---|---|
| Hosting | **Vercel** |
| DNS / CDN | **Cloudflare** |
| Monitoring | **Sentry** |
| Analytics | **Plausible** or **PostHog** |
| CI/CD | **GitHub Actions** → Vercel |

---

## 3. Design Principles

### Mobile-First Always
- Write Tailwind classes mobile-first: base = mobile, `sm:` `md:` `lg:` layer up
- Test every component at 375px, 768px, 1280px, 1920px
- Touch targets minimum 44×44px
- No horizontal scroll at any breakpoint

### Design Tokens
All colours, spacing, radii, and shadows live in `tailwind.config.ts` or CSS custom properties.
Never hardcode hex values inside components.

### Accessibility
- All interactive elements must be keyboard-navigable
- `aria-label` on every icon-only button
- Colour contrast minimum WCAG AA (4.5:1 text, 3:1 large text)
- Use semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`

### Component Architecture
```
src/
  app/          ← Next.js App Router pages and layouts
  components/
    ui/         ← shadcn primitives (never edit directly)
    shared/     ← Reusable across features
    features/   ← Feature-scoped components
  lib/          ← Utilities, helpers, constants
  hooks/        ← Custom React hooks
  server/       ← Server-only code (DB queries, actions)
  types/        ← Global TypeScript types
  styles/       ← Global CSS, font imports
```

---

## 4. SEO Rules

Every public-facing page must have:
- `generateMetadata()` export with `title`, `description`, `openGraph`, `twitter`
- Canonical URL via `alternates.canonical`
- Structured data (JSON-LD) where relevant (Article, Product, FAQPage, BreadcrumbList)
- `robots.ts` and `sitemap.ts` in `/app`
- All images use `next/image` with `alt` text — no exceptions
- Core Web Vitals: LCP < 2.5s, CLS < 0.1, INP < 200ms target
- `loading="lazy"` on below-fold images, `priority` only on LCP image

SEO checklist file: `DEPLOYMENT_CHECKLIST.md`

---

## 5. Image Generation — Black Forest Labs (BFL.ai / Flux)

### Setup
```env
# .env.local (never commit this file)
BFL_API_KEY=your_key_from_bfl.ai
```
Get your key at: **https://bfl.ai/** → Account → API Keys

### Model to Use
Always use **`flux-schnell`** — it is the fastest and cheapest Flux model.
Only upgrade to `flux-dev` or `flux-pro-1.1` if the task explicitly requires it.

| Model | Cost | Use Case |
|---|---|---|
| `flux-schnell` | ✅ Cheapest | Default for all generation tasks |
| `flux-dev` | Mid | Higher quality, longer wait |
| `flux-pro-1.1` | Expensive | Client deliverables only |
| `flux-pro-1.1-ultra` | Most expensive | Never use without approval |

### API Usage Pattern
```typescript
// lib/image-gen.ts
const BFL_BASE = "https://api.bfl.ai/v1";
const MODEL = "flux-schnell"; // Always default to this

export async function generateImage(prompt: string): Promise<string> {
  // Step 1 — Submit request
  const res = await fetch(`${BFL_BASE}/${MODEL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Key": process.env.BFL_API_KEY!,
    },
    body: JSON.stringify({
      prompt,
      width: 1024,
      height: 1024,
    }),
  });
  const { id } = await res.json();

  // Step 2 — Poll for result (flux-schnell is fast, usually < 5s)
  for (let i = 0; i < 20; i++) {
    await new Promise((r) => setTimeout(r, 1500));
    const poll = await fetch(`${BFL_BASE}/get_result?id=${id}`, {
      headers: { "X-Key": process.env.BFL_API_KEY! },
    });
    const data = await poll.json();
    if (data.status === "Ready") return data.result.sample; // URL
    if (data.status === "Error") throw new Error(data.error);
  }
  throw new Error("BFL timeout");
}
```

### Auto-Prompt Rule
Before calling `generateImage()`, the agent must:
1. Read the current page/component/feature context
2. Read `PROJECT_RULES.md` for brand voice and visual style
3. Auto-construct a detailed prompt following this pattern:

```
[Subject + action], [visual style], [lighting], [colour palette from project tokens],
[mood], [camera angle], [technical quality], no text, no watermark
```

Example:
```
A modern Bali villa living room with floor-to-ceiling windows overlooking rice terraces,
architectural photography style, golden hour lighting, warm terracotta and sage green palette,
serene and luxurious mood, wide-angle shot, hyperrealistic, 8K, no text, no watermark
```

Never pass a vague one-liner to the API. Always build the full prompt from project context first.

---

## 6. GitHub Workflow

### Repository
See `PROJECT_RULES.md` → Section: GitHub

### Branch Strategy
```
main          ← production (protected, no direct push)
staging       ← pre-production (auto-deploys to Vercel preview)
dev           ← active development base
feature/*     ← feature branches (branch from dev)
fix/*         ← bug fixes
chore/*       ← dependency updates, refactors
```

### Commit Message Format (Conventional Commits)
```
type(scope): short description

feat(auth): add Google OAuth login
fix(checkout): correct tax calculation rounding
chore(deps): update next to 15.3.1
style(ui): fix button hover state on mobile
```

### PR Rules
- All PRs must target `dev` (not `main`) unless it is a hotfix
- PR description must list: what changed, why, how to test
- No PR merges without passing CI (lint, typecheck, tests)
- Never force-push to `main` or `staging`

---

## 7. Environment Variables Pattern

```env
# ── App ──────────────────────────────────────────
NEXT_PUBLIC_APP_URL=https://yourdomain.com

# ── Database ─────────────────────────────────────
DATABASE_URL=

# ── Auth ─────────────────────────────────────────
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=

# ── Image Generation ─────────────────────────────
BFL_API_KEY=

# ── Storage ──────────────────────────────────────
BLOB_READ_WRITE_TOKEN=

# ── Email ────────────────────────────────────────
RESEND_API_KEY=

# ── Payments ─────────────────────────────────────
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=

# ── Monitoring ───────────────────────────────────
SENTRY_DSN=
NEXT_PUBLIC_POSTHOG_KEY=
```

Never read env vars directly in client components.
Always gate them through a `lib/env.ts` file that validates with Zod at startup.

---

## 8. Code Quality Rules

- **ESLint** — `next/core-web-vitals` + `@typescript-eslint/recommended`
- **Prettier** — 2-space indent, single quotes, trailing comma, 100 char line width
- **Husky** — pre-commit: lint-staged runs ESLint + Prettier on changed files
- **No commented-out code** in commits
- **No console.log** in production code — use a logger utility
- Functions longer than 60 lines are a smell — consider splitting
- Each file has one primary responsibility

---

## 9. Performance Rules

- Use `React.lazy` and `dynamic()` for heavy components (charts, maps, editors)
- Bundle-analyse with `ANALYZE=true next build` before major releases
- Use `next/font` for all web fonts — no external font CDN calls
- Images via `next/image` only — specify `width`, `height`, `sizes`
- API responses should be cached at the correct layer (CDN, ISR, or client)

---

## 10. Agent Self-Check Before Any Action

Before writing or changing any code, answer these five questions:

```
1. Am I inside the correct project folder?
2. Have I read PROJECT_RULES.md for project-specific overrides?
3. Is this task Simple / Workable / Complex / Blocked?
4. Does this touch GitHub, Vercel, env vars, SEO, or live pages?
5. What is the smallest safe change that solves this task?
```

If you cannot answer all five, stop and ask the user before proceeding.

---

## 11. Skill Library

This project has a comprehensive skill base installed. The agent automatically applies the correct skill based on task type. Do not guess at best practices when a skill covers the topic.

**Full skill reference:** `SKILLS_REFERENCE.md` — 87 skills across 8 categories with descriptions, "use when" triggers, and install commands.

**Mandatory ★ skills (install first):**
```bash
# React + Next.js
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-best-practices
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-composition-patterns
npx skills add https://github.com/vercel-labs/next-skills --skill next-best-practices
npx skills add https://github.com/shadcn/ui --skill shadcn
npx skills add https://github.com/wshobson/agents --skill tailwind-design-system
# Design
npx skills add https://github.com/anthropics/skills --skill frontend-design
npx skills add https://github.com/vercel-labs/agent-skills --skill web-design-guidelines
# Agent workflow
npx skills add https://github.com/obra/superpowers --skill brainstorming
npx skills add https://github.com/obra/superpowers --skill systematic-debugging
npx skills add https://github.com/obra/superpowers --skill writing-plans
npx skills add https://github.com/obra/superpowers --skill verification-before-completion
npx skills add https://github.com/obra/superpowers --skill test-driven-development
# Testing
npx skills add https://github.com/anthropics/skills --skill webapp-testing
# Marketing / SEO
npx skills add https://github.com/coreyhaines31/marketingskills --skill seo-audit
```

Run `bash install-skills.sh` to install all 87 skills at once.

---

## 12. Related Files (Read in This Order)

1. `CLAUDE.md` ← Auto-loaded entry point (imports everything below)
2. `AGENTS.md` ← **You are here** — core rules and stack
3. `PROJECT_RULES.md` ← Project-specific settings (fill this in per project)
4. `EXECUTION_RULES.md` ← How to classify and execute tasks
5. `PREFLIGHT.md` ← Run before every work session
6. `SESSION_LOG.md` ← Work tracker — read last session before starting
7. `SKILLS_REFERENCE.md` ← Full skill base, 87 skills across 8 categories
8. `DEPLOYMENT_CHECKLIST.md` ← Run before every push/deploy
