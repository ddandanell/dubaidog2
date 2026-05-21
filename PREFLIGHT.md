# PREFLIGHT.md — Run Before Every Work Session

> This checklist runs at the start of every session and every new task.
> Do not skip steps. If any step fails, resolve it before writing code.

---

## Step 1 — Orient

- [ ] Confirm you are inside the correct project folder
- [ ] Confirm the project name matches `PROJECT_RULES.md`
- [ ] Confirm today's branch: `git branch --show-current`
- [ ] If branch is `main` or `staging` — STOP. Switch to `dev` or a feature branch.

```bash
git branch --show-current
git status
git log --oneline -5
```

---

## Step 2 — Read Before You Write

- [ ] Re-read `AGENTS.md` (at least the section relevant to today's task)
- [ ] Check `PROJECT_RULES.md` for project-specific overrides
- [ ] Check `EXECUTION_RULES.md` for the correct task classification

---

## Step 3 — Environment

- [ ] `.env.local` exists and has all required keys (check against `PROJECT_RULES.md` §7)
- [ ] `BFL_API_KEY` is set if image generation is involved
- [ ] No `.env.local` is committed or staged (`git status` should not show it)

```bash
# Quick env check — lists keys without values
grep -v '^#' .env.local | grep '=$'   # prints any empty required keys
```

---

## Step 4 — Dependencies

- [ ] `node_modules` exists. If not: `npm install`
- [ ] No unresolved peer dependency warnings from last install
- [ ] `npx tsc --noEmit` — zero TypeScript errors before starting

```bash
npm run lint      # ESLint clean
npx tsc --noEmit  # TypeScript clean
```

---

## Step 5 — Classify Today's Task

Use `EXECUTION_RULES.md` to classify each task before touching code:

| Class | Definition |
|---|---|
| **Simple** | Single-file change, no side effects, no deploy risk |
| **Workable** | Multi-file, clear path, no external dependency changes |
| **Complex** | Cross-system, schema change, auth, payments, SEO |
| **Blocked** | Missing info, missing access, unclear requirement |

If **Blocked** → ask the user before proceeding.

---

## Step 6 — Risk Assessment

Before any change, ask:

1. Does this touch the **database schema**? → migration required, not just code
2. Does this touch **auth logic**? → test all user flows before committing
3. Does this touch **Stripe / payments**? → test in Stripe test mode first
4. Does this touch **SEO metadata**? → verify with `DEPLOYMENT_CHECKLIST.md`
5. Does this change a **public URL or route**? → check for broken links and redirects
6. Does this touch **environment variables**? → update `.env.example` and inform team

---

## Step 7 — Git Hygiene

```bash
git fetch origin
git status          # nothing unexpected staged
git diff --stat     # understand what's already changed
```

- [ ] No leftover debug code (`console.log`, `TODO`, hardcoded test values)
- [ ] Working from a clean or intentional state

---

## Preflight Complete ✓

You may now begin. Smallest safe change first. Commit atomically.
