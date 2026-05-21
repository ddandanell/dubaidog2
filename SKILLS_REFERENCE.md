# SKILLS_REFERENCE.md — Complete Agent Skill Base

> Source: https://www.skills.sh/topic — 87 unique skills across 8 categories.
> Descriptions are pulled directly from each skill's official page.
> The agent reads this file and applies the correct skill automatically based on task type.
> Skills marked ★ are highest priority — install these first.

---

## How to Install Skills

Skills are installed once per project using the `npx skills add` command.
Run each command from your project root. Skills are stored in `.claude/skills/`.

```bash
# Install all skills at once — copy-paste the full block for the categories you need
```

---

## HOW THE AGENT USES THIS FILE

Before any task, the agent scans the task description against the "Use When" column.
If a skill matches, the agent loads it before writing code.
The agent never guesses at best practices when a skill covers the topic.

---

---

## CATEGORY 1 — React

*Use these for any React component, hook, state, or performance work.*

---

### ★ vercel-react-best-practices
**What it does:** 69 prioritized React performance rules from Vercel Engineering covering waterfalls, bundle size, re-renders, and advanced patterns. Covers data fetching, component optimization, and Next.js-specific patterns.

**Use when:**
- Writing new React components or Next.js pages
- Implementing data fetching (client or server-side)
- Reviewing code for performance issues
- Optimizing bundle size or load times
- Refactoring existing React/Next.js code

**Install:**
```bash
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-best-practices
```
**Page:** https://www.skills.sh/vercel-labs/agent-skills/vercel-react-best-practices

---

### ★ vercel-composition-patterns
**What it does:** React composition patterns for scaling components and avoiding boolean prop proliferation. Covers compound components, context providers, state lifting, and React 19 APIs (`use()` hook, removing `forwardRef`).

**Use when:**
- Refactoring components with too many boolean props
- Building reusable component libraries
- Designing flexible component APIs
- Working with compound components or context providers

**Install:**
```bash
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-composition-patterns
```
**Page:** https://www.skills.sh/vercel-labs/agent-skills/vercel-composition-patterns

---

### ★ shadcn
**What it does:** Complete shadcn/ui component management — adding, searching, customising, debugging, and composing UI. Manages full component lifecycle with registry support (@shadcn, @magicui, @tailark). Enforces critical rules for forms, composition, styling, and icons.

**Use when:**
- Adding a shadcn component to the project
- Customising shadcn component styles or variants
- Composing complex UI from shadcn primitives
- Debugging shadcn component behaviour
- Upgrading or merging upstream shadcn changes

**Install:**
```bash
npx skills add https://github.com/shadcn/ui --skill shadcn
```
**Page:** https://www.skills.sh/shadcn/ui/shadcn

---

### ★ webapp-testing
**What it does:** Native Python Playwright scripts for testing local web apps with server lifecycle management. Supports screenshot-then-inspect workflow, dynamic app timing, and console log capture. From Anthropic.

**Use when:**
- Verifying frontend functionality after changes
- Debugging UI behaviour that's hard to reproduce manually
- Capturing screenshots for regression testing
- Testing forms, navigation, and interactive elements

**Install:**
```bash
npx skills add https://github.com/anthropics/skills --skill webapp-testing
```
**Page:** https://www.skills.sh/anthropics/skills/webapp-testing

---

### typescript-advanced-types
**What it does:** Advanced TypeScript type system patterns — generics with constraints, conditional types, mapped types, template literals, and utility types. Includes type-safe event emitters, API clients, builder patterns, and discriminated unions.

**Use when:**
- Building type-safe libraries or frameworks
- Creating reusable generic components
- Implementing complex type inference logic
- Migrating JavaScript to TypeScript
- Implementing type-safe state management or form validation

**Install:**
```bash
npx skills add https://github.com/wshobson/agents --skill typescript-advanced-types
```
**Page:** https://www.skills.sh/wshobson/agents/typescript-advanced-types

---

### tailwind-design-system
**What it does:** CSS-first design system framework for Tailwind v4 — design tokens, CVA-based variants, compound components, responsive utilities, and v3-to-v4 migration guide. Uses `@theme` blocks, OKLCH color spaces, and native `@keyframes`.

**Use when:**
- Setting up a Tailwind v4 design token system
- Building component variants with CVA
- Migrating from Tailwind v3 to v4
- Standardising UI patterns across a codebase
- Implementing dark mode with native CSS

**Install:**
```bash
npx skills add https://github.com/wshobson/agents --skill tailwind-design-system
```
**Page:** https://www.skills.sh/wshobson/agents/tailwind-design-system

---

---

## CATEGORY 2 — Next.js

*Use these for App Router, caching, deployment, and Next.js-specific architecture.*

---

### ★ next-best-practices
**What it does:** File conventions, RSC boundaries, data fetching patterns, async APIs, and metadata. The canonical Next.js App Router reference from Vercel.

**Use when:**
- Setting up Next.js App Router file structure
- Deciding Server vs. Client Component boundaries
- Implementing `generateMetadata()` for SEO
- Working with async `params` and `searchParams`

**Install:**
```bash
npx skills add https://github.com/vercel-labs/next-skills --skill next-best-practices
```
**Page:** https://www.skills.sh/vercel-labs/next-skills/next-best-practices

---

### deploy-to-vercel
**What it does:** Deploy applications and websites to Vercel. Handles deployment workflows, environment variables, preview vs. production deploys, and team settings.

**Use when:**
- User says "deploy my app", "push this live", "create a preview deployment"
- Setting up Vercel project for the first time
- Configuring Vercel environment variables via CLI

**Install:**
```bash
npx skills add https://github.com/vercel-labs/agent-skills --skill deploy-to-vercel
```
**Page:** https://www.skills.sh/vercel-labs/agent-skills/deploy-to-vercel

---

### next-cache-components
**What it does:** Partial Pre-Rendering (PPR), `use cache` directive, `cacheLife`, `cacheTag`, and `revalidateTag`. The definitive guide to Next.js 15 caching model.

**Use when:**
- Implementing PPR for hybrid static/dynamic pages
- Using `use cache` to cache server component data
- Setting up tag-based cache invalidation
- Optimising Time To First Byte (TTFB)

**Install:**
```bash
npx skills add https://github.com/vercel-labs/next-skills --skill next-cache-components
```
**Page:** https://www.skills.sh/vercel-labs/next-skills/next-cache-components

---

### turborepo
**What it does:** Turborepo task pipelines, caching, remote cache, and CI configuration for monorepos.

**Use when:**
- Setting up a monorepo with multiple apps/packages
- Configuring task pipelines and dependency graphs
- Setting up remote caching for CI speed
- Sharing packages between Next.js apps

**Install:**
```bash
npx skills add https://github.com/vercel/turborepo --skill turborepo
```
**Page:** https://www.skills.sh/vercel/turborepo/turborepo

---

### ai-sdk
**What it does:** Vercel AI SDK patterns — `generateText`, `streamText`, tool calling, and `useChat`. Official skill from Vercel.

**Use when:**
- Building AI-powered features with the Vercel AI SDK
- Implementing streaming chat interfaces
- Setting up tool calling / function calling with LLMs
- Integrating AI responses into Next.js server actions

**Install:**
```bash
npx skills add https://github.com/vercel/ai --skill ai-sdk
```
**Page:** https://www.skills.sh/vercel/ai/ai-sdk

---

---

## CATEGORY 3 — Design & UI

*Use these for visual quality, accessibility, design systems, and interface polish.*

---

### ★ frontend-design
**What it does:** Comprehensive frontend design patterns and visual polish guidance. Creates distinctive, production-grade interfaces that avoid generic AI aesthetics. From Anthropic.

**Use when:**
- Building web components, pages, or layouts from scratch
- Styling/beautifying any web UI
- Building dashboards, landing pages, React components, HTML/CSS layouts
- Any task where visual quality matters

**Install:**
```bash
npx skills add https://github.com/anthropics/skills --skill frontend-design
```
**Page:** https://www.skills.sh/anthropics/skills/frontend-design

---

### web-design-guidelines
**What it does:** Reviews UI code against Vercel's Web Interface Guidelines — accessibility, usability, visual consistency, and UX best practices.

**Use when:**
- User says "review my UI", "check accessibility", "audit my design"
- Checking a component or page against industry UX standards
- Accessibility audit before deploy

**Install:**
```bash
npx skills add https://github.com/vercel-labs/agent-skills --skill web-design-guidelines
```
**Page:** https://www.skills.sh/vercel-labs/agent-skills/web-design-guidelines

---

### ui-ux-pro-max
**What it does:** Advanced UI/UX patterns for complex interfaces and interaction design.

**Use when:**
- Designing complex interactive UI (data tables, drag-and-drop, multi-step flows)
- Implementing sophisticated interaction patterns
- Building interfaces that need to feel premium and polished

**Install:**
```bash
npx skills add https://github.com/nextlevelbuilder/ui-ux-pro-max-skill --skill ui-ux-pro-max
```
**Page:** https://www.skills.sh/nextlevelbuilder/ui-ux-pro-max-skill/ui-ux-pro-max

---

### sleek-design-mobile-apps
**What it does:** Mobile-first design principles for iOS and Android app interfaces. Covers native UI conventions, touch targets, gestures, and platform-specific patterns.

**Use when:**
- Designing UI for React Native or mobile-first web apps
- Ensuring touch targets and spacing meet mobile standards
- Applying iOS or Android design conventions

**Install:**
```bash
npx skills add https://github.com/sleekdotdesign/agent-skills --skill sleek-design-mobile-apps
```
**Page:** https://www.skills.sh/sleekdotdesign/agent-skills/sleek-design-mobile-apps

---

### canvas-design
**What it does:** Design generation and iteration in canvas-based environments.

**Use when:**
- Generating or iterating designs in a canvas context
- Creating visual mockups or wireframes programmatically

**Install:**
```bash
npx skills add https://github.com/anthropics/skills --skill canvas-design
```
**Page:** https://www.skills.sh/anthropics/skills/canvas-design

---

### polish
**What it does:** Final-pass visual refinement — tighten spacing, sharpen type, clean edges. From pbakaus/impeccable.

**Use when:**
- Design is functionally complete but needs visual tightening
- Spacing feels inconsistent or typography looks rough
- Pre-launch visual QA pass

**Install:**
```bash
npx skills add https://github.com/pbakaus/impeccable --skill polish
```
**Page:** https://www.skills.sh/pbakaus/impeccable/polish

---

### critique
**What it does:** Structured design critique — identifies what's working, what's not, and why.

**Use when:**
- Reviewing a design or UI component before finalising
- Getting structured feedback on visual decisions
- Peer review of design work

**Install:**
```bash
npx skills add https://github.com/pbakaus/impeccable --skill critique
```
**Page:** https://www.skills.sh/pbakaus/impeccable/critique

---

### bolder
**What it does:** Makes design decisions more confident and decisive — removes timidity and hedging from visual choices.

**Use when:**
- A design feels safe but forgettable
- Brand needs more visual conviction and confidence
- Typography or colour choices feel weak

**Install:**
```bash
npx skills add https://github.com/pbakaus/impeccable --skill bolder
```
**Page:** https://www.skills.sh/pbakaus/impeccable/bolder

---

### delight
**What it does:** Adds moments of delight to interfaces — micro-interactions, animation, personality.

**Use when:**
- Adding subtle animations or transitions to UI
- Making an interaction feel rewarding or joyful
- Going beyond functional to memorable

**Install:**
```bash
npx skills add https://github.com/pbakaus/impeccable --skill delight
```
**Page:** https://www.skills.sh/pbakaus/impeccable/delight

---

### distill
**What it does:** Simplifies and clarifies — strips complexity, increases focus, reduces noise.

**Use when:**
- A UI has too much going on
- Information hierarchy is unclear
- Reducing cognitive load for the user

**Install:**
```bash
npx skills add https://github.com/pbakaus/impeccable --skill distill
```
**Page:** https://www.skills.sh/pbakaus/impeccable/distill

---

### quieter
**What it does:** Makes a design calmer — reduces visual tension, softens contrast, creates breathing room.

**Use when:**
- UI feels loud, aggressive, or visually busy
- Tone needs to be more premium, calm, or editorial
- Refining a high-end or luxury design aesthetic

**Install:**
```bash
npx skills add https://github.com/pbakaus/impeccable --skill quieter
```
**Page:** https://www.skills.sh/pbakaus/impeccable/quieter

---

### extract-design-system
**What it does:** Extracts a design system from existing code — identifies tokens, patterns, and component primitives.

**Use when:**
- Taking over a codebase without a documented design system
- Formalising ad-hoc styles into reusable tokens
- Auditing what design decisions already exist

**Install:**
```bash
npx skills add https://github.com/arvindrk/extract-design-system --skill extract-design-system
```
**Page:** https://www.skills.sh/arvindrk/extract-design-system/extract-design-system

---

### design-taste-frontend
**What it does:** Frontend implementation guided by design taste — opinionated guidance on what makes interfaces feel crafted.

**Use when:**
- Building a frontend that needs to feel intentional and high-end
- Making subtle visual decisions (type scale, whitespace, colour balance)

**Install:**
```bash
npx skills add https://github.com/leonxlnx/taste-skill --skill design-taste-frontend
```
**Page:** https://www.skills.sh/leonxlnx/taste-skill/design-taste-frontend

---

### high-end-visual-design
**What it does:** Premium visual design principles — editorial aesthetics, luxury feel, high-craft details.

**Use when:**
- Project requires a luxury, editorial, or premium visual identity
- Design needs to stand apart from generic SaaS aesthetics
- Targeting high-end clients or audiences

**Install:**
```bash
npx skills add https://github.com/leonxlnx/taste-skill --skill high-end-visual-design
```
**Page:** https://www.skills.sh/leonxlnx/taste-skill/high-end-visual-design

---

### emil-design-eng
**What it does:** Design engineering patterns from Emil Kowalski — combines design sensibility with engineering precision. Known for animation, component quality, and UI details.

**Use when:**
- Bridging design and engineering decisions
- Implementing high-quality animations and transitions
- Building components that match Figma designs pixel-precisely

**Install:**
```bash
npx skills add https://github.com/emilkowalski/skill --skill emil-design-eng
```
**Page:** https://www.skills.sh/emilkowalski/skill/emil-design-eng

---

---

## CATEGORY 4 — Mobile

*Use these for React Native, Expo, and mobile-first app development.*

---

### ★ vercel-react-native-skills
**What it does:** React Native and Expo best practices for building performant mobile apps. From Vercel Labs.

**Use when:**
- Building a React Native app
- Optimising React Native performance
- Navigating Expo SDK and React Native differences

**Install:**
```bash
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-native-skills
```
**Page:** https://www.skills.sh/vercel-labs/agent-skills/vercel-react-native-skills

---

### building-native-ui
**What it does:** Building native UI components in Expo — platform-specific patterns, native modules, and Expo UI primitives.

**Use when:**
- Building custom native UI for Expo apps
- Working with Expo SDK UI components
- Implementing platform-specific (iOS/Android) UI behaviour

**Install:**
```bash
npx skills add https://github.com/expo/skills --skill building-native-ui
```
**Page:** https://www.skills.sh/expo/skills/building-native-ui

---

### native-data-fetching
**What it does:** Data fetching patterns in React Native and Expo — REST, GraphQL, caching, and offline support.

**Use when:**
- Implementing data fetching in a React Native app
- Setting up offline-first patterns
- Managing loading states in native apps

**Install:**
```bash
npx skills add https://github.com/expo/skills --skill native-data-fetching
```
**Page:** https://www.skills.sh/expo/skills/native-data-fetching

---

### expo-tailwind-setup
**What it does:** Setting up Tailwind (via NativeWind) in an Expo project correctly.

**Use when:**
- Starting an Expo project that should use Tailwind-style classes
- Setting up NativeWind in an existing Expo project
- Configuring Tailwind tokens for native apps

**Install:**
```bash
npx skills add https://github.com/expo/skills --skill expo-tailwind-setup
```
**Page:** https://www.skills.sh/expo/skills/expo-tailwind-setup

---

### upgrading-expo
**What it does:** Step-by-step guide for upgrading the Expo SDK version safely.

**Use when:**
- Upgrading from one Expo SDK version to another
- Handling breaking changes in Expo SDK updates
- Migrating from Expo managed to bare workflow

**Install:**
```bash
npx skills add https://github.com/expo/skills --skill upgrading-expo
```
**Page:** https://www.skills.sh/expo/skills/upgrading-expo

---

---

## CATEGORY 5 — Agent Workflows

*Use these for how the agent plans, executes, debugs, and reviews its own work.*

---

### ★ brainstorming
**What it does:** Explores user intent, requirements, and design before implementation. MUST be used before any creative work — creating features, building components, or modifying behaviour.

**Use when:**
- Before any new feature or component work
- When requirements are not fully clear
- Exploring design options before committing to code

**Install:**
```bash
npx skills add https://github.com/obra/superpowers --skill brainstorming
```
**Page:** https://www.skills.sh/obra/superpowers/brainstorming

---

### ★ systematic-debugging
**What it does:** Structured debugging methodology that mandates root cause investigation before any fixes. Four-phase process: evidence gathering, pattern analysis, hypothesis testing, implementation. Blocks symptom-based patching.

**Use when:**
- Any bug, test failure, or unexpected behaviour
- Before proposing a fix to any error
- When the same bug has been "fixed" more than once

**Install:**
```bash
npx skills add https://github.com/obra/superpowers --skill systematic-debugging
```
**Page:** https://www.skills.sh/obra/superpowers/systematic-debugging

---

### ★ writing-plans
**What it does:** Creates structured implementation plans for multi-step tasks before touching code. Use when you have a spec or requirements.

**Use when:**
- Before implementing any Workable or Complex task (see EXECUTION_RULES.md)
- When a task spans multiple files or systems
- When the path from A to B is not immediately obvious

**Install:**
```bash
npx skills add https://github.com/obra/superpowers --skill writing-plans
```
**Page:** https://www.skills.sh/obra/superpowers/writing-plans

---

### ★ executing-plans
**What it does:** Executes a written implementation plan in a separate session with review checkpoints.

**Use when:**
- You have a written plan and are ready to execute it
- Implementing a Complex task that was planned in a previous session
- Keeping execution on track with review checkpoints

**Install:**
```bash
npx skills add https://github.com/obra/superpowers --skill executing-plans
```
**Page:** https://www.skills.sh/obra/superpowers/executing-plans

---

### ★ test-driven-development
**What it does:** TDD loop — write the failing test first, implement the minimal change, verify, then refactor. Use when implementing any feature or bugfix, before writing implementation code.

**Use when:**
- Implementing any new feature
- Fixing a bug that needs a regression test
- Any task where correctness must be verified

**Install:**
```bash
npx skills add https://github.com/obra/superpowers --skill test-driven-development
```
**Page:** https://www.skills.sh/obra/superpowers/test-driven-development

---

### requesting-code-review
**What it does:** Structured code review request — verifies work meets requirements before merging. Use when completing tasks, implementing major features, or before merging.

**Use when:**
- Completing a feature branch before raising a PR
- Wanting a structured review of just-completed work
- Ensuring implementation matches the original requirements

**Install:**
```bash
npx skills add https://github.com/obra/superpowers --skill requesting-code-review
```
**Page:** https://www.skills.sh/obra/superpowers/requesting-code-review

---

### ★ verification-before-completion
**What it does:** Forces a verification pass before any task is marked done. Prevents "done" tasks that aren't actually tested.

**Use when:**
- Before marking any task as complete
- After implementing a fix to confirm it works
- Pre-deploy verification

**Install:**
```bash
npx skills add https://github.com/obra/superpowers --skill verification-before-completion
```
**Page:** https://www.skills.sh/obra/superpowers/verification-before-completion

---

### subagent-driven-development
**What it does:** Orchestrates specialised subagents for different parts of a task — parallel or sequential agent coordination.

**Use when:**
- Task is large enough to split across multiple specialised agents
- Independent parts of a feature can run in parallel
- Coordinating frontend + backend work simultaneously

**Install:**
```bash
npx skills add https://github.com/obra/superpowers --skill subagent-driven-development
```
**Page:** https://www.skills.sh/obra/superpowers/subagent-driven-development

---

### dispatching-parallel-agents
**What it does:** Pattern for launching multiple agents simultaneously on independent tasks and collecting their results.

**Use when:**
- Multiple independent tasks can run in parallel
- Wanting to speed up large feature development
- Running parallel research or code generation tasks

**Install:**
```bash
npx skills add https://github.com/obra/superpowers --skill dispatching-parallel-agents
```
**Page:** https://www.skills.sh/obra/superpowers/dispatching-parallel-agents

---

### using-git-worktrees
**What it does:** Git worktrees for working on multiple branches simultaneously without stashing or switching contexts.

**Use when:**
- Working on multiple features in parallel on the same repo
- Needing to test or review another branch without losing current work
- Running parallel agent tasks on separate branches

**Install:**
```bash
npx skills add https://github.com/obra/superpowers --skill using-git-worktrees
```
**Page:** https://www.skills.sh/obra/superpowers/using-git-worktrees

---

### finishing-a-development-branch
**What it does:** Structured checklist for finishing a development branch — tests, cleanup, PR description, and merge preparation.

**Use when:**
- Wrapping up a feature branch before raising a PR
- Final cleanup pass before requesting review
- Ensuring branch is truly ready to merge

**Install:**
```bash
npx skills add https://github.com/obra/superpowers --skill finishing-a-development-branch
```
**Page:** https://www.skills.sh/obra/superpowers/finishing-a-development-branch

---

### find-skills
**What it does:** Discovers and installs skills from skills.sh directly inside an agent session.

**Use when:**
- Searching for a skill that might solve a current problem
- Discovering new skills in a category
- Installing a skill mid-session without leaving the terminal

**Install:**
```bash
npx skills add https://github.com/vercel-labs/skills --skill find-skills
```
**Page:** https://www.skills.sh/vercel-labs/skills/find-skills

---

### agent-browser
**What it does:** Full browser automation — navigate, click, fill forms, extract data, and screenshot. Programmatic browser control from within an agent session.

**Use when:**
- Scraping data from a website
- Automating a web form or workflow
- Testing a live deployment end-to-end
- Taking screenshots of a deployed site

**Install:**
```bash
npx skills add https://github.com/vercel-labs/agent-browser --skill agent-browser
```
**Page:** https://www.skills.sh/vercel-labs/agent-browser/agent-browser

---

### skill-creator
**What it does:** Creates, tests, and publishes new skills from within an agent. Builds, evaluates, and optimises skill prompts.

**Use when:**
- Creating a custom skill for this project's specific needs
- Improving an existing skill's trigger accuracy
- Running evals to measure skill performance

**Install:**
```bash
npx skills add https://github.com/anthropics/skills --skill skill-creator
```
**Page:** https://www.skills.sh/anthropics/skills/skill-creator

---

### browser-use
**What it does:** Browser automation with visual understanding — interacts with pages based on what it sees, not just DOM selectors.

**Use when:**
- Automating interactions on visually complex or JavaScript-heavy pages
- When DOM-based selectors are unreliable or dynamic
- Visual-first web testing or scraping

**Install:**
```bash
npx skills add https://github.com/browser-use/browser-use --skill browser-use
```
**Page:** https://www.skills.sh/browser-use/browser-use/browser-use

---

### ralph-tui-prd
**What it does:** Generates Product Requirements Documents (PRDs) in terminal UI format.

**Use when:**
- Creating a PRD for a new feature or product
- Structuring requirements before a development sprint
- Turning user stories into a formal requirements document

**Install:**
```bash
npx skills add https://github.com/subsy/ralph-tui --skill ralph-tui-prd
```
**Page:** https://www.skills.sh/subsy/ralph-tui/ralph-tui-prd

---

### ralph-tui-create-beads
**What it does:** Creates "beads" — small, discrete units of work for structured task breakdown.

**Use when:**
- Breaking a large feature into the smallest possible work units
- Preparing tasks for parallel agent execution

**Install:**
```bash
npx skills add https://github.com/subsy/ralph-tui --skill ralph-tui-create-beads
```
**Page:** https://www.skills.sh/subsy/ralph-tui/ralph-tui-create-beads

---

### ralph-tui-create-json
**What it does:** Generates structured JSON task definitions for agent consumption.

**Use when:**
- Outputting tasks in a machine-readable format
- Building structured workflows for multi-agent systems

**Install:**
```bash
npx skills add https://github.com/subsy/ralph-tui --skill ralph-tui-create-json
```
**Page:** https://www.skills.sh/subsy/ralph-tui/ralph-tui-create-json

---

### ralph-wiggum
**What it does:** Quirky agent workflow tool for unconventional task approaches.

**Install:**
```bash
npx skills add https://github.com/fstandhartinger/ralph-wiggum --skill ralph-wiggum
```
**Page:** https://www.skills.sh/fstandhartinger/ralph-wiggum/ralph-wiggum

---

### ralph-loop
**What it does:** Loop-based workflow execution for full-stack recipes and iterative agent tasks.

**Use when:**
- Running iterative build-test-fix loops
- Automating repetitive full-stack development cycles

**Install:**
```bash
npx skills add https://github.com/andrelandgraf/fullstackrecipes --skill ralph-loop
```
**Page:** https://www.skills.sh/andrelandgraf/fullstackrecipes/ralph-loop

---

---

## CATEGORY 6 — Databases

*Use these when setting up, querying, or migrating any database.*

---

### ★ supabase
**What it does:** Supabase project setup — auth, storage, real-time, and Row Level Security. Official skill from Supabase.

**Use when:**
- Starting a new Supabase project
- Setting up Supabase Auth, Storage, or Real-time
- Configuring Row Level Security policies

**Install:**
```bash
npx skills add https://github.com/supabase/agent-skills --skill supabase
```
**Page:** https://www.skills.sh/supabase/agent-skills/supabase

---

### supabase-postgres-best-practices
**What it does:** PostgreSQL best practices via Supabase — indexing, query optimisation, RLS policies, and schema design.

**Use when:**
- Optimising Supabase database queries
- Designing efficient schema with proper indexes
- Writing secure Row Level Security policies
- Debugging slow Supabase queries

**Install:**
```bash
npx skills add https://github.com/supabase/agent-skills --skill supabase-postgres-best-practices
```
**Page:** https://www.skills.sh/supabase/agent-skills/supabase-postgres-best-practices

---

### drizzle-orm
**What it does:** Drizzle ORM — schema definitions, migrations, queries, and relations. Type-safe, SQL-first ORM.

**Use when:**
- Writing Drizzle schema definitions
- Running Drizzle migrations
- Writing complex type-safe queries with Drizzle
- Setting up Drizzle with Postgres or SQLite

**Install:**
```bash
npx skills add https://github.com/bobmatnyc/claude-mpm-skills --skill drizzle-orm
```
**Page:** https://www.skills.sh/bobmatnyc/claude-mpm-skills/drizzle-orm

---

### neon-postgres
**What it does:** Neon serverless Postgres — setup, branching, connection pooling, and serverless-first patterns.

**Use when:**
- Setting up Neon as the database for a Next.js/Vercel project
- Using Neon database branching for feature development
- Configuring connection pooling for serverless environments

**Install:**
```bash
npx skills add https://github.com/neondatabase/agent-skills --skill neon-postgres
```
**Page:** https://www.skills.sh/neondatabase/agent-skills/neon-postgres

---

### planetscale-postgres
**What it does:** PlanetScale Postgres — setup, schema management, and branching workflow.

**Use when:**
- Using PlanetScale as a Postgres-compatible database
- Setting up PlanetScale's branching for safe schema changes

**Install:**
```bash
npx skills add https://github.com/planetscale/database-skills --skill planetscale-postgres
```
**Page:** https://www.skills.sh/planetscale/database-skills/planetscale-postgres

---

### planetscale-mysql
**What it does:** PlanetScale MySQL — Vitess-based MySQL setup, schema migrations, and connection management.

**Use when:**
- Using PlanetScale with MySQL-compatible workloads
- Migrating a MySQL schema to PlanetScale

**Install:**
```bash
npx skills add https://github.com/planetscale/database-skills --skill planetscale-mysql
```
**Page:** https://www.skills.sh/planetscale/database-skills/planetscale-mysql

---

### firebase-basics
**What it does:** Firebase project setup — Firestore, Realtime Database, Cloud Functions, and Storage basics.

**Use when:**
- Starting a new Firebase project
- Setting up Firebase SDK in a web or mobile app
- Implementing basic Firestore CRUD operations

**Install:**
```bash
npx skills add https://github.com/firebase/agent-skills --skill firebase-basics
```
**Page:** https://www.skills.sh/firebase/agent-skills/firebase-basics

---

### firebase-auth-basics
**What it does:** Firebase Authentication — email/password, Google OAuth, anonymous auth, and custom claims.

**Use when:**
- Implementing Firebase Auth in a web or mobile app
- Setting up OAuth providers with Firebase
- Managing user roles with custom claims

**Install:**
```bash
npx skills add https://github.com/firebase/agent-skills --skill firebase-auth-basics
```
**Page:** https://www.skills.sh/firebase/agent-skills/firebase-auth-basics

---

### firebase-firestore-enterprise-native-mode
**What it does:** Enterprise-grade Firestore in Native Mode — data modelling, security rules, indexes, and performance at scale.

**Use when:**
- Designing Firestore data models for high-traffic apps
- Writing Firestore security rules
- Optimising Firestore query performance
- Scaling Firestore beyond basic usage

**Install:**
```bash
npx skills add https://github.com/firebase/agent-skills --skill firebase-firestore-enterprise-native-mode
```
**Page:** https://www.skills.sh/firebase/agent-skills/firebase-firestore-enterprise-native-mode

---

### convex-quickstart
**What it does:** Convex database quickstart — schema, queries, mutations, and real-time subscriptions.

**Use when:**
- Starting a new project with Convex as the backend
- Setting up Convex queries and mutations
- Implementing real-time data with Convex subscriptions

**Install:**
```bash
npx skills add https://github.com/get-convex/agent-skills --skill convex-quickstart
```
**Page:** https://www.skills.sh/get-convex/agent-skills/convex-quickstart

---

### convex-setup-auth
**What it does:** Auth integration with Convex — Clerk, Auth0, and custom JWT providers.

**Use when:**
- Setting up authentication with a Convex backend
- Integrating Clerk or Auth0 with Convex
- Implementing user identity in Convex functions

**Install:**
```bash
npx skills add https://github.com/get-convex/agent-skills --skill convex-setup-auth
```
**Page:** https://www.skills.sh/get-convex/agent-skills/convex-setup-auth

---

### turso-db
**What it does:** Turso (libSQL) — embedded SQLite at the edge, setup, schema, and queries.

**Use when:**
- Using Turso as an edge-compatible SQLite database
- Setting up libSQL for a serverless or edge deployment
- Migrating from SQLite to Turso for production

**Install:**
```bash
npx skills add https://github.com/tursodatabase/agent-skills --skill turso-db
```
**Page:** https://www.skills.sh/tursodatabase/agent-skills/turso-db

---

### duckdb-query
**What it does:** DuckDB analytical queries — local data analysis, Parquet, CSV, and OLAP workloads.

**Use when:**
- Running analytical queries over local data files
- Processing Parquet or CSV data at scale
- Building data pipelines that don't need a server

**Install:**
```bash
npx skills add https://github.com/duckdb/duckdb-skills --skill duckdb-query
```
**Page:** https://www.skills.sh/duckdb/duckdb-skills/duckdb-query

---

---

## CATEGORY 7 — Testing

*Use these for writing, running, and structuring tests.*

---

### ★ playwright-best-practices
**What it does:** Playwright patterns — selectors, fixtures, parallelism, and CI integration. The definitive Playwright reference.

**Use when:**
- Writing Playwright E2E tests
- Setting up Playwright fixtures and page objects
- Configuring Playwright for CI/CD
- Optimising test parallelism

**Install:**
```bash
npx skills add https://github.com/currents-dev/playwright-best-practices-skill --skill playwright-best-practices
```
**Page:** https://www.skills.sh/currents-dev/playwright-best-practices-skill/playwright-best-practices

---

### playwright-cli
**What it does:** Controls a live browser via the Playwright CLI — record interactions, inspect selectors, and replay tests.

**Use when:**
- Recording a new Playwright test from browser interactions
- Inspecting DOM selectors for test targeting
- Replaying and debugging recorded test sessions

**Install:**
```bash
npx skills add https://github.com/microsoft/playwright-cli --skill playwright-cli
```
**Page:** https://www.skills.sh/microsoft/playwright-cli/playwright-cli

---

*(Also see: `webapp-testing`, `test-driven-development`, and `verification-before-completion` in their respective categories above.)*

---

---

## CATEGORY 8 — Marketing

*Use these for content, SEO, CRO, email, paid ads, and growth.*

---

### ★ seo-audit
**What it does:** Comprehensive SEO auditing across crawlability, indexation, technical foundations, on-page optimisation, content quality, and authority signals. Site-type-specific guidance (SaaS, e-commerce, content, local).

**Use when:**
- User says "SEO audit", "technical SEO", "why am I not ranking"
- Pre-launch SEO review
- Identifying quick wins vs. strategic SEO investments

**Install:**
```bash
npx skills add https://github.com/coreyhaines31/marketingskills --skill seo-audit
```
**Page:** https://www.skills.sh/coreyhaines31/marketingskills/seo-audit

---

### ★ copywriting
**What it does:** Writing, rewriting, and improving marketing copy — homepage, landing pages, pricing, features, about pages. Headlines, CTAs, value propositions, taglines.

**Use when:**
- Writing or improving any page copy
- Headline or CTA copy
- Value proposition or positioning copy

**Install:**
```bash
npx skills add https://github.com/coreyhaines31/marketingskills --skill copywriting
```
**Page:** https://www.skills.sh/coreyhaines31/marketingskills/copywriting

---

### content-strategy
**What it does:** Planning what content to create — topic clusters, content pillars, editorial calendar, content roadmap.

**Use when:**
- User says "what should I write about", "blog strategy", "content plan"
- Building a long-term content marketing strategy
- Deciding content priorities for a new product

**Install:**
```bash
npx skills add https://github.com/coreyhaines31/marketingskills --skill content-strategy
```
**Page:** https://www.skills.sh/coreyhaines31/marketingskills/content-strategy

---

### social-content
**What it does:** Social media content creation across LinkedIn, Twitter/X, Instagram, TikTok — posts, threads, carousels, video scripts, hooks, and repurposing.

**Use when:**
- Writing LinkedIn posts, Twitter threads, or TikTok scripts
- Repurposing blog content for social
- Building a social content calendar

**Install:**
```bash
npx skills add https://github.com/coreyhaines31/marketingskills --skill social-content
```
**Page:** https://www.skills.sh/coreyhaines31/marketingskills/social-content

---

### marketing-psychology
**What it does:** Applies psychological principles to marketing — cognitive bias, persuasion, anchoring, social proof, scarcity, loss aversion, framing, and nudge techniques.

**Use when:**
- Improving conversion by applying behavioural science
- Designing pricing or offer framing
- Understanding why a message isn't converting

**Install:**
```bash
npx skills add https://github.com/coreyhaines31/marketingskills --skill marketing-psychology
```
**Page:** https://www.skills.sh/coreyhaines31/marketingskills/marketing-psychology

---

### programmatic-seo
**What it does:** Creating SEO-driven pages at scale — template pages, directory pages, location pages, comparison pages, integration pages.

**Use when:**
- User says "programmatic SEO", "pages at scale", "[keyword] + [city] pages"
- Building a directory or comparison site
- Generating many similar pages targeting different keywords

**Install:**
```bash
npx skills add https://github.com/coreyhaines31/marketingskills --skill programmatic-seo
```
**Page:** https://www.skills.sh/coreyhaines31/marketingskills/programmatic-seo

---

### pricing-strategy
**What it does:** Pricing page structure, plan naming, anchoring, and conversion optimisation.

**Use when:**
- Designing or redesigning a pricing page
- Naming plans and setting price anchors
- Optimising pricing for conversion

**Install:**
```bash
npx skills add https://github.com/coreyhaines31/marketingskills --skill pricing-strategy
```
**Page:** https://www.skills.sh/coreyhaines31/marketingskills/pricing-strategy

---

### page-cro
**What it does:** Conversion rate analysis and optimisation for landing and product pages.

**Use when:**
- Analysing why a page isn't converting
- Running a CRO audit on a landing page
- Improving above-the-fold conversion elements

**Install:**
```bash
npx skills add https://github.com/coreyhaines31/marketingskills --skill page-cro
```
**Page:** https://www.skills.sh/coreyhaines31/marketingskills/page-cro

---

### launch-strategy
**What it does:** Go-to-market planning, channel sequencing, and launch execution for product launches.

**Use when:**
- Planning a new product launch
- Sequencing marketing channels for maximum impact
- Building a pre-launch and launch-day plan

**Install:**
```bash
npx skills add https://github.com/coreyhaines31/marketingskills --skill launch-strategy
```
**Page:** https://www.skills.sh/coreyhaines31/marketingskills/launch-strategy

---

### schema-markup
**What it does:** Structured data implementation — JSON-LD for rich results and AI search visibility. FAQPage, Article, Product, BreadcrumbList, LocalBusiness.

**Use when:**
- Adding JSON-LD structured data to pages
- Targeting rich results in Google Search
- Improving visibility in AI search (ChatGPT, Perplexity)

**Install:**
```bash
npx skills add https://github.com/coreyhaines31/marketingskills --skill schema-markup
```
**Page:** https://www.skills.sh/coreyhaines31/marketingskills/schema-markup

---

### email-sequence
**What it does:** Multi-touch email sequences — onboarding, nurture, re-engagement, win-back. Coherent arc, personalisation, timing, and A/B suggestions.

**Use when:**
- Building onboarding, nurture, or re-engagement email flows
- Writing a complete drip campaign with copy
- Mapping a sequence with branching logic and exit conditions

**Install:**
```bash
npx skills add https://github.com/coreyhaines31/marketingskills --skill email-sequence
```
**Page:** https://www.skills.sh/coreyhaines31/marketingskills/email-sequence

---

### paid-ads
**What it does:** Paid advertising strategy and creative — Google Ads, Meta Ads, targeting, bid strategy, and measurement.

**Use when:**
- Setting up or optimising a paid ad campaign
- Writing ad copy for Google or Meta
- Troubleshooting underperforming ad campaigns

**Install:**
```bash
npx skills add https://github.com/coreyhaines31/marketingskills --skill paid-ads
```
**Page:** https://www.skills.sh/coreyhaines31/marketingskills/paid-ads

---

### competitor-alternatives
**What it does:** "[Product] alternatives" SEO strategy — capturing competitor search traffic.

**Use when:**
- Targeting "X alternative" or "X vs. Y" search queries
- Building a competitor comparison landing page
- Capturing bottom-of-funnel competitor traffic

**Install:**
```bash
npx skills add https://github.com/coreyhaines31/marketingskills --skill competitor-alternatives
```
**Page:** https://www.skills.sh/coreyhaines31/marketingskills/competitor-alternatives

---

### analytics-tracking
**What it does:** Analytics implementation — event tracking, conversion tracking, funnel setup, and attribution.

**Use when:**
- Setting up PostHog, GA4, or Plausible event tracking
- Implementing conversion tracking for a marketing funnel
- Auditing whether analytics events are firing correctly

**Install:**
```bash
npx skills add https://github.com/coreyhaines31/marketingskills --skill analytics-tracking
```
**Page:** https://www.skills.sh/coreyhaines31/marketingskills/analytics-tracking

---

### paywall-upgrade-cro
**What it does:** Optimising paywall and upgrade flow conversion — friction reduction, messaging, and timing.

**Use when:**
- Improving free-to-paid conversion at the paywall
- Redesigning an upgrade flow or modal
- Testing upgrade messaging and CTAs

**Install:**
```bash
npx skills add https://github.com/coreyhaines31/marketingskills --skill paywall-upgrade-cro
```
**Page:** https://www.skills.sh/coreyhaines31/marketingskills/paywall-upgrade-cro

---

### popup-cro
**What it does:** Popup and modal optimisation for conversion — timing, triggers, copy, and design.

**Use when:**
- Designing an email capture popup
- Optimising exit-intent or scroll-triggered modals
- Improving popup conversion rates

**Install:**
```bash
npx skills add https://github.com/coreyhaines31/marketingskills --skill popup-cro
```
**Page:** https://www.skills.sh/coreyhaines31/marketingskills/popup-cro

---

### ai-seo
**What it does:** SEO optimised for AI search engines (ChatGPT, Perplexity, Claude) — entity authority, citation optimisation, and answer-engine visibility.

**Use when:**
- Optimising content to appear in AI-generated answers
- Building entity authority for AI search citation
- Understanding how AI search indexes content differently from Google

**Install:**
```bash
npx skills add https://github.com/coreyhaines31/marketingskills --skill ai-seo
```
**Page:** https://www.skills.sh/coreyhaines31/marketingskills/ai-seo

---

### cold-email
**What it does:** Cold outreach email strategy — targeting, personalisation, subject lines, sequences, and deliverability.

**Use when:**
- Writing cold email outreach sequences
- Improving cold email reply rates
- Setting up cold email infrastructure (domains, warming)

**Install:**
```bash
npx skills add https://github.com/coreyhaines31/marketingskills --skill cold-email
```
**Page:** https://www.skills.sh/coreyhaines31/marketingskills/cold-email

---

### ad-creative
**What it does:** Ad creative strategy and production — static, video, and carousel formats for paid social.

**Use when:**
- Creating ad creative briefs or scripts
- Writing ad copy for Meta or TikTok video ads
- Testing creative concepts for paid social

**Install:**
```bash
npx skills add https://github.com/coreyhaines31/marketingskills --skill ad-creative
```
**Page:** https://www.skills.sh/coreyhaines31/marketingskills/ad-creative

---

### churn-prevention
**What it does:** Reducing customer churn — early warning signals, intervention tactics, and retention messaging.

**Use when:**
- Identifying at-risk customers before they cancel
- Designing a churn intervention email sequence
- Analysing why customers are churning

**Install:**
```bash
npx skills add https://github.com/coreyhaines31/marketingskills --skill churn-prevention
```
**Page:** https://www.skills.sh/coreyhaines31/marketingskills/churn-prevention

---

### lead-magnets
**What it does:** Lead magnet strategy and creation — content upgrades, tools, templates, and free resources that capture emails.

**Use when:**
- Creating a lead magnet to grow an email list
- Matching lead magnets to audience intent
- Building a lead magnet funnel

**Install:**
```bash
npx skills add https://github.com/coreyhaines31/marketingskills --skill lead-magnets
```
**Page:** https://www.skills.sh/coreyhaines31/marketingskills/lead-magnets

---

---

## QUICK INSTALL — ALL SKILLS BY CATEGORY

Copy the block for the categories you need. Run from project root.

```bash
# ── REACT ────────────────────────────────────────────────────────────────
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-best-practices
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-composition-patterns
npx skills add https://github.com/shadcn/ui --skill shadcn
npx skills add https://github.com/anthropics/skills --skill webapp-testing
npx skills add https://github.com/wshobson/agents --skill typescript-advanced-types
npx skills add https://github.com/wshobson/agents --skill tailwind-design-system

# ── NEXT.JS ───────────────────────────────────────────────────────────────
npx skills add https://github.com/vercel-labs/next-skills --skill next-best-practices
npx skills add https://github.com/vercel-labs/agent-skills --skill deploy-to-vercel
npx skills add https://github.com/vercel-labs/next-skills --skill next-cache-components
npx skills add https://github.com/vercel/turborepo --skill turborepo
npx skills add https://github.com/vercel/ai --skill ai-sdk

# ── DESIGN & UI ───────────────────────────────────────────────────────────
npx skills add https://github.com/anthropics/skills --skill frontend-design
npx skills add https://github.com/vercel-labs/agent-skills --skill web-design-guidelines
npx skills add https://github.com/nextlevelbuilder/ui-ux-pro-max-skill --skill ui-ux-pro-max
npx skills add https://github.com/sleekdotdesign/agent-skills --skill sleek-design-mobile-apps
npx skills add https://github.com/anthropics/skills --skill canvas-design
npx skills add https://github.com/pbakaus/impeccable --skill polish
npx skills add https://github.com/pbakaus/impeccable --skill critique
npx skills add https://github.com/pbakaus/impeccable --skill bolder
npx skills add https://github.com/pbakaus/impeccable --skill delight
npx skills add https://github.com/pbakaus/impeccable --skill distill
npx skills add https://github.com/pbakaus/impeccable --skill quieter
npx skills add https://github.com/arvindrk/extract-design-system --skill extract-design-system
npx skills add https://github.com/leonxlnx/taste-skill --skill design-taste-frontend
npx skills add https://github.com/leonxlnx/taste-skill --skill high-end-visual-design
npx skills add https://github.com/emilkowalski/skill --skill emil-design-eng

# ── MOBILE ────────────────────────────────────────────────────────────────
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-native-skills
npx skills add https://github.com/expo/skills --skill building-native-ui
npx skills add https://github.com/expo/skills --skill native-data-fetching
npx skills add https://github.com/expo/skills --skill expo-tailwind-setup
npx skills add https://github.com/expo/skills --skill upgrading-expo

# ── AGENT WORKFLOWS ───────────────────────────────────────────────────────
npx skills add https://github.com/obra/superpowers --skill brainstorming
npx skills add https://github.com/obra/superpowers --skill systematic-debugging
npx skills add https://github.com/obra/superpowers --skill writing-plans
npx skills add https://github.com/obra/superpowers --skill executing-plans
npx skills add https://github.com/obra/superpowers --skill test-driven-development
npx skills add https://github.com/obra/superpowers --skill requesting-code-review
npx skills add https://github.com/obra/superpowers --skill verification-before-completion
npx skills add https://github.com/obra/superpowers --skill subagent-driven-development
npx skills add https://github.com/obra/superpowers --skill dispatching-parallel-agents
npx skills add https://github.com/obra/superpowers --skill using-git-worktrees
npx skills add https://github.com/obra/superpowers --skill finishing-a-development-branch
npx skills add https://github.com/vercel-labs/skills --skill find-skills
npx skills add https://github.com/vercel-labs/agent-browser --skill agent-browser
npx skills add https://github.com/anthropics/skills --skill skill-creator
npx skills add https://github.com/browser-use/browser-use --skill browser-use
npx skills add https://github.com/subsy/ralph-tui --skill ralph-tui-prd
npx skills add https://github.com/subsy/ralph-tui --skill ralph-tui-create-beads
npx skills add https://github.com/subsy/ralph-tui --skill ralph-tui-create-json
npx skills add https://github.com/fstandhartinger/ralph-wiggum --skill ralph-wiggum
npx skills add https://github.com/andrelandgraf/fullstackrecipes --skill ralph-loop

# ── DATABASES ─────────────────────────────────────────────────────────────
npx skills add https://github.com/supabase/agent-skills --skill supabase
npx skills add https://github.com/supabase/agent-skills --skill supabase-postgres-best-practices
npx skills add https://github.com/bobmatnyc/claude-mpm-skills --skill drizzle-orm
npx skills add https://github.com/neondatabase/agent-skills --skill neon-postgres
npx skills add https://github.com/planetscale/database-skills --skill planetscale-postgres
npx skills add https://github.com/planetscale/database-skills --skill planetscale-mysql
npx skills add https://github.com/firebase/agent-skills --skill firebase-basics
npx skills add https://github.com/firebase/agent-skills --skill firebase-auth-basics
npx skills add https://github.com/firebase/agent-skills --skill firebase-firestore-enterprise-native-mode
npx skills add https://github.com/get-convex/agent-skills --skill convex-quickstart
npx skills add https://github.com/get-convex/agent-skills --skill convex-setup-auth
npx skills add https://github.com/tursodatabase/agent-skills --skill turso-db
npx skills add https://github.com/duckdb/duckdb-skills --skill duckdb-query

# ── TESTING ───────────────────────────────────────────────────────────────
npx skills add https://github.com/currents-dev/playwright-best-practices-skill --skill playwright-best-practices
npx skills add https://github.com/microsoft/playwright-cli --skill playwright-cli

# ── MARKETING ─────────────────────────────────────────────────────────────
npx skills add https://github.com/coreyhaines31/marketingskills --skill seo-audit
npx skills add https://github.com/coreyhaines31/marketingskills --skill copywriting
npx skills add https://github.com/coreyhaines31/marketingskills --skill content-strategy
npx skills add https://github.com/coreyhaines31/marketingskills --skill social-content
npx skills add https://github.com/coreyhaines31/marketingskills --skill marketing-psychology
npx skills add https://github.com/coreyhaines31/marketingskills --skill programmatic-seo
npx skills add https://github.com/coreyhaines31/marketingskills --skill pricing-strategy
npx skills add https://github.com/coreyhaines31/marketingskills --skill page-cro
npx skills add https://github.com/coreyhaines31/marketingskills --skill launch-strategy
npx skills add https://github.com/coreyhaines31/marketingskills --skill schema-markup
npx skills add https://github.com/coreyhaines31/marketingskills --skill email-sequence
npx skills add https://github.com/coreyhaines31/marketingskills --skill paid-ads
npx skills add https://github.com/coreyhaines31/marketingskills --skill competitor-alternatives
npx skills add https://github.com/coreyhaines31/marketingskills --skill analytics-tracking
npx skills add https://github.com/coreyhaines31/marketingskills --skill paywall-upgrade-cro
npx skills add https://github.com/coreyhaines31/marketingskills --skill popup-cro
npx skills add https://github.com/coreyhaines31/marketingskills --skill ai-seo
npx skills add https://github.com/coreyhaines31/marketingskills --skill cold-email
npx skills add https://github.com/coreyhaines31/marketingskills --skill ad-creative
npx skills add https://github.com/coreyhaines31/marketingskills --skill churn-prevention
npx skills add https://github.com/coreyhaines31/marketingskills --skill lead-magnets
```

---

> Source: https://www.skills.sh/topic | 87 unique skills | Last verified: May 2026
> Star (★) = highest priority, install these first for web app projects
