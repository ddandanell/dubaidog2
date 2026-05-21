# EXECUTION_RULES.md — Master Execution Rules

> Every command from the user triggers this ruleset before any action is taken.
> No exceptions. No shortcuts.

---

## The 5 Pre-Action Questions

For every user command, the agent must answer all five before writing a single line:

```
1. Am I staying inside the project folder?
2. Do I have the correct skill or project rule for this task?
3. Is this task Simple, Workable, Complex, or Blocked?
4. Could this affect GitHub, Vercel, environment variables, SEO, tracking, or live pages?
5. What is the smallest safe change?
```

If any answer is uncertain → **classify as Blocked and ask the user**.

---

## Task Classification System

### SIMPLE
- Single file change
- No side effects outside the file
- No deploy risk
- No schema changes
- Examples: fixing a typo, adjusting a colour, adding a prop to a component

**Action:** Do it. Commit with a clear message. Done.

---

### WORKABLE
- Multiple files, all within one feature area
- Clear path from start to finish
- No external system dependency changes
- Examples: adding a new page, refactoring a component, adding a new API route

**Action:** Plan it in `SESSION_LOG.md` first. Execute step by step. Test locally. Commit atomically.

---

### COMPLEX
- Touches auth, payments, database schema, SEO, or deployment
- Requires coordination across systems
- Risk of breaking live functionality
- Examples: adding a new auth provider, changing DB schema, modifying sitemap

**Action:**
1. Document the plan in `SESSION_LOG.md`
2. Create a feature branch: `git checkout -b feature/task-name`
3. Execute with tests at each step
4. Run `DEPLOYMENT_CHECKLIST.md` before merging
5. Never merge directly to `main`

---

### BLOCKED
- Missing information, credentials, or access
- Requirement is ambiguous
- The task would require a decision the agent should not make alone
- Examples: "update the payment logic" without knowing which change, no DB access

**Action:** Stop. Ask the user exactly what is needed. Log the blocker in `SESSION_LOG.md`.

---

## Execution Safety Rules

### Scope Control
- The agent must not make broad changes when a narrow change solves the task
- The agent must not leave the project folder
- The agent must not modify more than the files directly relevant to the task
- If refactoring is tempting but not required → **log it in SESSION_LOG.md as a future task**, do not do it now

### GitHub Safety
- **Never push directly to `main`**
- **Never force-push** to any shared branch
- Always `git pull --rebase` before pushing to a shared branch
- Commit message must follow Conventional Commits format (see AGENTS.md §6)
- Every commit should be reversible with a single `git revert`

### Vercel Safety
- **Never run `vercel --prod` without completing `DEPLOYMENT_CHECKLIST.md`**
- Preview deployments are safe — production deployments are not
- If unsure which environment a change affects → treat it as production

### Environment Variable Safety
- Never hardcode a secret in any file
- Never commit `.env.local`, `.env.production`, or any file containing real keys
- When adding a new env var: add a placeholder to `.env.example` immediately
- Always update `PROJECT_RULES.md §7` when adding a new variable

### SEO Safety
- Never change a public URL without adding a 301 redirect
- Never change `robots.ts` to `disallow` without explicit user approval
- Never remove `generateMetadata()` from a public page
- Test OG images after any metadata change

### Database Safety
- Never run raw SQL against production without a backup confirmation
- Schema changes require a migration file — never alter tables manually
- Test migrations on staging before production

---

## Skill Usage Rules

This project has agent skills installed. The agent must use them automatically.

### Installed Skills
```bash
# Run these once per project setup:
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-best-practices
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-composition-patterns
npx skills add https://github.com/shadcn/ui --skill shadcn
npx skills add https://github.com/anthropics/skills --skill webapp-testing
npx skills add https://github.com/wshobson/agents --skill typescript-advanced-types
npx skills add https://github.com/wshobson/agents --skill tailwind-design-system
```

### When to Apply Each Skill
| Skill | Apply When |
|---|---|
| `vercel-react-best-practices` | Any React component or Next.js page work |
| `vercel-composition-patterns` | Server vs. client component decisions, data fetching patterns |
| `shadcn` | Adding, customising, or composing UI components |
| `webapp-testing` | Writing tests, debugging, QA verification steps |
| `typescript-advanced-types` | Complex type definitions, generics, utility types |
| `tailwind-design-system` | Styling, design tokens, responsive layout, component variants |

**The agent must not guess at best practices when a skill covers the topic.**
Load the skill, apply its guidance, then execute.

---

## Output Format for Task Responses

When completing any Workable or Complex task, the agent's response must include:

```
## Task: [task name]
Status: [SIMPLE / WORKABLE / COMPLEX]

### What I changed
- file/path.ts — [one line description]
- file/path.ts — [one line description]

### Why
[One sentence explaining the decision]

### How to verify
[One or two commands or steps the user can run to confirm it works]

### What I did NOT change (and why)
[Optional — list anything the user might expect that was intentionally left alone]

### Next step (if any)
[Optional — only if there is an obvious follow-up]
```

---

## When the Agent Disagrees With a Request

State the concern clearly and immediately. Do not silently comply.
Format:

```
⚠️  Concern: [what the issue is]
Risk: [what could go wrong]
Safer alternative: [what you recommend instead]

Proceeding as requested / Waiting for your confirmation.
```

---

## Related Files

- `PREFLIGHT.md` — Run before starting work
- `SESSION_LOG.md` — Log every task and decision
- `DEPLOYMENT_CHECKLIST.md` — Run before any push to production
