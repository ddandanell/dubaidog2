# DEPLOYMENT_CHECKLIST.md — Pre-Deploy Verification

> Run this checklist before every push to `staging` or `main`.
> Do not deploy with unchecked items unless you have explicitly accepted the risk.

---

## 1. Code Quality

- [ ] `npm run lint` — zero ESLint errors
- [ ] `npx tsc --noEmit` — zero TypeScript errors
- [ ] `npm run test` — all tests pass (if test suite exists)
- [ ] No `console.log`, `debugger`, or TODO comments in changed files
- [ ] No hardcoded secrets, API keys, or passwords in any file
- [ ] `.env.local` is NOT staged (`git status` check)

---

## 2. Git State

- [ ] All intended files are staged and committed
- [ ] Commit messages follow Conventional Commits format
- [ ] No untracked files that should be committed
- [ ] Branch is up to date with its upstream: `git fetch && git status`
- [ ] This is NOT a direct push to `main` (unless it is a tagged release or hotfix)

---

## 3. Build Verification

```bash
npm run build
```

- [ ] Build completes with zero errors
- [ ] Build completes with zero critical warnings
- [ ] Bundle size has not grown unexpectedly (check `.next/analyze` if configured)

---

## 4. Environment Variables

- [ ] All required env vars are set in Vercel project settings (not just `.env.local`)
- [ ] Any new env vars added in this release are documented in `PROJECT_RULES.md §7`
- [ ] Any new env vars have a placeholder added to `.env.example`
- [ ] No env var names changed without updating all references

---

## 5. SEO Checklist

- [ ] Every changed/new public page has `generateMetadata()` with `title` and `description`
- [ ] OG image exists and is correct size (1200×630px)
- [ ] Canonical URLs are correct
- [ ] No public page accidentally has `noindex` unless intentional
- [ ] If any URL changed → 301 redirect is in place
- [ ] Sitemap updated if new pages added (`/sitemap.xml`)
- [ ] Structured data (JSON-LD) validated at https://search.google.com/test/rich-results

---

## 6. Performance

- [ ] New images use `next/image` with correct `width`, `height`, `alt`
- [ ] No new synchronous third-party scripts added to `<head>`
- [ ] No new heavy imports without `dynamic()` lazy loading
- [ ] LCP image has `priority` prop set

---

## 7. Functionality (Manual Smoke Test)

Test these flows on the preview URL before promoting to production:

- [ ] Homepage loads without errors
- [ ] Navigation works on mobile (375px) and desktop
- [ ] Auth flow works (sign up, log in, log out) if changed
- [ ] Forms submit and validate correctly if changed
- [ ] Payment flow works in test mode if changed
- [ ] Image generation works if BFL.ai code was touched
- [ ] Any feature explicitly mentioned in this PR/deploy

---

## 8. Database

- [ ] If schema changed: migration has been run on staging first
- [ ] If schema changed: migration is reversible (down migration exists)
- [ ] No raw SQL scripts targeting production are pending
- [ ] Seed data / test data not included in production migration

---

## 9. Monitoring & Alerts

- [ ] Sentry DSN is configured in Vercel env vars
- [ ] Error boundaries are in place for new complex components
- [ ] PostHog / Plausible is still receiving events (check dashboard after deploy)

---

## 10. Post-Deploy Verification (Do This After Every Production Deploy)

```bash
# Wait 2-3 minutes for deployment to propagate, then:
```

- [ ] Visit production URL — page loads correctly
- [ ] Check Vercel deployment logs — no runtime errors
- [ ] Check Sentry — no new error spike
- [ ] Check analytics — events firing correctly
- [ ] Verify OG image renders: https://opengraph.xyz/?url=YOUR_URL
- [ ] Verify SEO meta: https://metatags.io/?url=YOUR_URL
- [ ] Log the deploy in `SESSION_LOG.md`

---

## Deploy Command Reference

```bash
# Preview deploy (safe — does not affect production)
vercel

# Production deploy (run checklist first)
vercel --prod

# Revert last production deploy (emergency)
vercel rollback
```

---

> If any critical item is unchecked and cannot be resolved now,
> create a `fix/` branch, log the issue in `SESSION_LOG.md`, and do not deploy.
