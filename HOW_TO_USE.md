# HOW_TO_USE.md — Setup & Workflow Guide

> How to drop this template into a new project and get to work immediately.

---

## Step 1 — Copy Files Into Your Project Root

Place all these files in the root of your project (same level as `package.json`):

```
your-project/
├── AGENTS.md               ← Agent reads this first, every time
├── PROJECT_RULES.md        ← Fill in your project details here
├── EXECUTION_RULES.md      ← How the agent classifies and runs tasks
├── PREFLIGHT.md            ← Checklist before every work session
├── DEPLOYMENT_CHECKLIST.md ← Checklist before every deploy
├── SESSION_LOG.md          ← Running work log — fill in every session
├── HOW_TO_USE.md           ← This file
└── package.json
```

---

## Step 2 — Fill in PROJECT_RULES.md

Open `PROJECT_RULES.md` and fill in every `___` field:

- Project name, domain, GitHub URL, Vercel project
- Tech stack overrides (or leave blank to use defaults)
- Brand colours, mood, photography style (used for BFL.ai image prompts)
- Target SEO keywords
- Environment variable values (in `.env.local`, not in the file itself)

This takes about 10 minutes and saves hours of repeated clarification.

---

## Step 3 — Install Agent Skills

Run these commands once in the project root. They install the skills the agent uses automatically.

```bash
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-best-practices
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-composition-patterns
npx skills add https://github.com/shadcn/ui --skill shadcn
npx skills add https://github.com/anthropics/skills --skill webapp-testing
npx skills add https://github.com/wshobson/agents --skill typescript-advanced-types
npx skills add https://github.com/wshobson/agents --skill tailwind-design-system
```

**What each skill does:**

| Skill | Purpose |
|---|---|
| `vercel-react-best-practices` | React + Next.js patterns, Server vs Client component rules |
| `vercel-composition-patterns` | Data fetching, streaming, Suspense, caching strategies |
| `shadcn` | Component installation, customisation, composition |
| `webapp-testing` | Unit, integration, and E2E test patterns |
| `typescript-advanced-types` | Generics, utility types, discriminated unions, type guards |
| `tailwind-design-system` | Token system, responsive design, variant patterns |

The agent applies these automatically based on the task type — you do not need to invoke them manually.

---

## Step 4 — Set Up BFL.ai Image Generation

1. Go to **https://bfl.ai/** → sign in → Account → API Keys
2. Create a new API key
3. Add it to your `.env.local`:

```env
BFL_API_KEY=your_key_here
```

4. Add the placeholder to `.env.example` (safe to commit):

```env
BFL_API_KEY=
```

5. Copy `lib/image-gen.ts` from `AGENTS.md §5` into your project

**Default model is always `flux-schnell`** — cheapest and fastest.
The agent will auto-build detailed prompts from your project context before calling the API.
You never need to write the prompt yourself unless you want to override it.

---

## Step 5 — Configure GitHub

In `PROJECT_RULES.md §2`, fill in your GitHub repository URL.

Recommended branch protection rules (set these in GitHub → Settings → Branches):

- `main` → Require PR review, require status checks, no force push, no direct push
- `staging` → Require status checks, no force push

Recommended GitHub Actions (`.github/workflows/ci.yml`):

```yaml
name: CI
on: [push, pull_request]
jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: npm run lint
      - run: npx tsc --noEmit
      - run: npm run build
```

---

## Step 6 — First Session

Open `SESSION_LOG.md` and fill in the first session block:
- Project overview at the top
- Session date, goal, branch
- List what you want to accomplish

Then start working. At the end of the session, update the log and commit it.

---

## Daily Workflow

### Starting Work
```
1. Open SESSION_LOG.md → read last "Next Steps"
2. Run through PREFLIGHT.md
3. Create or switch to the correct branch
4. Tell the agent what you're working on
```

### During Work
- The agent logs decisions and blockers automatically in SESSION_LOG.md
- Any task classified as Complex gets a plan before execution
- The agent uses skills automatically — no need to invoke manually

### Ending Work
```
1. Agent fills in SESSION_LOG.md "What Was Done" and "Next Steps"
2. Commit all changes including SESSION_LOG.md
3. Push to your feature branch (not main)
```

### Deploying
```
1. Run DEPLOYMENT_CHECKLIST.md — every item
2. vercel (preview) → verify on preview URL
3. vercel --prod (production) → only after checklist passes
4. Log the deploy in SESSION_LOG.md → Deployment History
```

---

## Quick Reference

| File | When to read |
|---|---|
| `AGENTS.md` | Agent reads first, every session |
| `PROJECT_RULES.md` | At project start + whenever a new service is added |
| `PREFLIGHT.md` | Before starting work each session |
| `EXECUTION_RULES.md` | Before every task (agent reads automatically) |
| `SESSION_LOG.md` | Start and end of every session |
| `DEPLOYMENT_CHECKLIST.md` | Before every push to staging or production |
| `HOW_TO_USE.md` | Once at setup, or when onboarding a new developer |

---

## Adding a New Developer or Agent

Hand them this checklist:

- [ ] Read `HOW_TO_USE.md` (this file)
- [ ] Fill in access to GitHub repo and Vercel project
- [ ] Get `.env.local` values from the project lead (never from Git)
- [ ] Run `npm install` and confirm `npm run dev` starts cleanly
- [ ] Install agent skills (Step 3 above)
- [ ] Read `AGENTS.md` and `PROJECT_RULES.md` completely
- [ ] Create your first branch: `git checkout -b feature/your-first-task`
- [ ] Log yourself in `SESSION_LOG.md` first session

---

> Template version: 1.0  
> Update `PROJECT_RULES.md` last-updated date each time you change project settings.
