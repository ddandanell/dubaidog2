# CLAUDE.md — Automatic Agent Entry Point

> Claude Code reads this file automatically at the start of every session.
> It imports all project rule files so the agent is fully briefed before any work begins.
> Do not delete or rename this file.

---

## Auto-Import — Read All Files Below Before Any Task

@AGENTS.md
@PROJECT_RULES.md
@EXECUTION_RULES.md
@PREFLIGHT.md
@SESSION_LOG.md
@SKILLS_REFERENCE.md

---

## Session Start Protocol

When this file loads, the agent must:

1. Read the **last `⏸ Paused` session** in `SESSION_LOG.md` — that is where work left off
2. Check `PROJECT_RULES.md` for project-specific overrides
3. Run the `PREFLIGHT.md` checklist mentally before touching any file
4. Classify today's task using `EXECUTION_RULES.md`
5. Apply the correct skill from `SKILLS_REFERENCE.md` before writing code

---

## Quick Reference — When to Use Which File

| File | When |
|---|---|
| `AGENTS.md` | Core stack, design rules, BFL.ai image gen, GitHub workflow |
| `PROJECT_RULES.md` | Fill in once per project — GitHub URL, Vercel, DB, brand colours |
| `EXECUTION_RULES.md` | Task classification, safety rules, skill usage rules |
| `PREFLIGHT.md` | Before starting work each session |
| `SESSION_LOG.md` | Read at start, write at end — every session |
| `SKILLS_REFERENCE.md` | Find the right skill for the task |
| `DEPLOYMENT_CHECKLIST.md` | Before any push to staging or production |
| `HOW_TO_USE.md` | Setup guide — read once at project start |
| `install-skills.sh` | Run once per project to install all 87 skills |

---

## Reminders

- **Smallest safe change.** Never make broad changes when narrow ones solve the task.
- **Stay in the project folder.** Never operate outside the project directory.
- **No push to main without `DEPLOYMENT_CHECKLIST.md`.** No exceptions.
- **BFL.ai image generation always uses `flux-schnell`** (cheapest model) unless explicitly told otherwise.
- **Always update `SESSION_LOG.md` at the end of every session.** Commit it.
