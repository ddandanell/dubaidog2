# PROJECT_RULES.md — Project-Specific Configuration

> Fill this in at the start of every project. The agent reads this after AGENTS.md
> and treats it as the single source of truth for project-specific decisions.
> Anything left blank defaults to the standards in AGENTS.md.

---

## 1. Project Identity

```
Project Name:       Pet Transport Dubai
Short Description:  Professional pet relocation services for dogs and cats moving to/from Dubai
Domain (live):      https://pet-transport-dubai.ae
Domain (staging):   https://pet-transport-dubai-staging.vercel.app
Client / Owner:     Pet Transport Dubai
Started:            May 2026
```

---

## 2. GitHub

```
Repository URL:     https://github.com/ddandanell/Pet-Transport-Dubai
Default Branch:     main
Development Branch: dev
Protected Branches: main, staging

Clone command:
  git clone https://github.com/ddandanell/Pet-Transport-Dubai.git

SSH remote:
  git@github.com:ddandanell/Pet-Transport-Dubai.git
```

**Branch naming in this project:**
- Features:  `feature/short-name`
- Fixes:     `fix/short-name`
- Releases:  `release/v1.x.x`
- Hotfixes:  `hotfix/short-name`

---

## 3. Vercel

```
Vercel Team:        Pet Transport Dubai
Vercel Project:     pet-transport-dubai
Production URL:     https://pet-transport-dubai.ae
Preview URL:        https://pet-transport-dubai-git-*.vercel.app

Deploy command:     vercel --prod
Preview deploy:     vercel
```

Auto-deploy rules:
- Push to `main` → production deploy
- Push to `staging` or open PR → preview deploy
- Push to `dev` → no auto-deploy (manual only)

---

## 4. Tech Stack Overrides

> Leave blank to inherit defaults from AGENTS.md.
> Fill in only if this project deviates from the standard stack.

```
Framework:                [X] Vite + React  [ ] Next.js
Auth Provider:            [ ] Clerk  [ ] NextAuth v5  [X] Custom/TBD
Database:                 [X] PostgreSQL + Drizzle ORM
ORM:                      [X] Drizzle  [ ] Prisma
Storage:                  [X] Vercel Blob  [ ] Cloudflare R2
Email:                    [X] Resend  [ ] SendGrid
Payment:                  [ ] Stripe  [ ] Lemon Squeezy  [X] TBD
Analytics:                [X] Plausible  [ ] PostHog  [ ] GA4
CMS (if any):             [ ] Sanity  [ ] Contentful  [X] None
i18n (if any):            [ ] next-intl  [X] None  [ ] Other
```

---

## 5. Image Generation (BFL.ai / Flux)

```
BFL API Key env var:  BFL_API_KEY         ← Set in .env.local, never commit
Default model:        flux-schnell        ← Always start here (cheapest)
Upgrade threshold:    Only with explicit user approval

API Base URL:         https://api.bfl.ai/v1
Docs:                 https://bfl.ai/
```

**Visual Style Guide for Prompt Generation**
The agent must auto-build prompts by scanning: page context + these brand rules.

```
Brand Aesthetic:      Professional logistics, trustworthy, premium service company
Primary Colour:       #003d5c  (name: Deep Ocean Blue)
Secondary Colour:     #f4f4f4  (name: Clean White)
Accent Colour:        #ff6b35  (name: Safety Orange)
Mood / Feeling:       Serious, trustworthy, clear, fast, professional, not cute
Lighting Style:       Bright corporate lighting, clean and clear
Photography Style:    Professional corporate photography, aviation/logistics aesthetic
Things to AVOID:      Cute pet imagery, playful aesthetics, cartoon style, overly warm tones
```

**Prompt template the agent must follow:**
```
[Subject], [action/composition], [brand aesthetic] style, [lighting style],
[primary + accent colour] palette, [mood] mood, [camera angle],
photorealistic, high detail, 8K, no text, no watermark, no logo
```

---

## 6. SEO Configuration

```
Default Title Template:   %s | Pet Transport Dubai
Default Meta Description: Professional pet relocation services for dogs and cats moving to and from Dubai. Import, export, documents, flights, crate planning, and door-to-door coordination.
OG Image (default):       /public/og-default.png  (1200×630px)
Twitter Handle:           @PetTransportDXB
Site Language:            en
Robots default:           index, follow
Sitemap path:             /sitemap.xml
```

Target keywords (top 5):
```
1. pet relocation dubai
2. dog import dubai
3. cat export dubai
4. pet transport uae
5. dubai pet clearance
```

---

## 7. Environment Variables (This Project)

Copy this to `.env.local` and fill in values. Never commit `.env.local`.

```env
# ── App ──────────────────────────────────────────
NEXT_PUBLIC_APP_URL=https://pet-transport-dubai.ae

# ── Database ─────────────────────────────────────
DATABASE_URL=postgresql://user:password@host:port/database

# ── Auth ─────────────────────────────────────────
# TBD

# ── Image Generation ─────────────────────────────
BFL_API_KEY=

# ── Storage ──────────────────────────────────────
BLOB_READ_WRITE_TOKEN=

# ── Email ────────────────────────────────────────
RESEND_API_KEY=

# ── Payments ─────────────────────────────────────
# TBD

# ── Monitoring ───────────────────────────────────
SENTRY_DSN=
PLAUSIBLE_DOMAIN=pet-transport-dubai.ae

# ── Project-Specific ─────────────────────────────
# Add project-specific env vars here
```

---

## 8. Design Tokens (This Project)

```css
/* Override these in your tailwind.config.ts or globals.css */

--color-primary:     #003d5c;   /* Deep Ocean Blue */
--color-secondary:   #f4f4f4;   /* Clean White */
--color-accent:      #ff6b35;   /* Safety Orange */
--color-background:  #ffffff;   /* White */
--color-surface:     #f9f9f9;   /* Light Gray */
--color-text:        #1a1a1a;   /* Near Black */
--color-muted:       #6b7280;   /* Gray */

--font-sans:         'Inter', system-ui, -apple-system, sans-serif;
--font-display:      'Inter', system-ui, -apple-system, sans-serif;
--font-mono:         'JetBrains Mono', 'Courier New', monospace;

--radius-sm:   0.25rem;
--radius-md:   0.5rem;
--radius-lg:   0.75rem;
--radius-full: 9999px;
```

---

## 9. Feature Flags & Project-Specific Rules

```
[ ] Dark mode enabled
[ ] i18n / multi-language
[ ] Multi-tenant architecture
[ ] Subscriptions / billing
[ ] Admin dashboard
[ ] User-generated content
[ ] Real-time features (websockets)
[ ] PWA / offline support
[ ] API exposed to third parties
```

Custom rules for this project (agent must follow these):
```
1. _______________________________________________
2. _______________________________________________
3. _______________________________________________
```

---

## 10. Contacts & Access

```
Developer Lead:     _______________________________________________
Designer:           _______________________________________________
Client Contact:     _______________________________________________
Staging password:   _______________________________________________
Design file (Figma): https://figma.com/file/___________________________
```

---

> Last updated: _______________  by _______________
