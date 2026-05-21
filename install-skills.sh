#!/bin/bash
# install-skills.sh
# Run this once per project to install all 87 skills from skills.sh
# Usage: bash install-skills.sh
# Or install by category: bash install-skills.sh react | nextjs | design | mobile | agent | db | testing | marketing

set -e

CATEGORY="${1:-all}"

install_react() {
  echo "━━━ Installing React skills ━━━"
  npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-best-practices
  npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-composition-patterns
  npx skills add https://github.com/shadcn/ui --skill shadcn
  npx skills add https://github.com/anthropics/skills --skill webapp-testing
  npx skills add https://github.com/wshobson/agents --skill typescript-advanced-types
  npx skills add https://github.com/wshobson/agents --skill tailwind-design-system
  echo "✓ React skills installed (6)"
}

install_nextjs() {
  echo "━━━ Installing Next.js skills ━━━"
  npx skills add https://github.com/vercel-labs/next-skills --skill next-best-practices
  npx skills add https://github.com/vercel-labs/agent-skills --skill deploy-to-vercel
  npx skills add https://github.com/vercel-labs/next-skills --skill next-cache-components
  npx skills add https://github.com/vercel/turborepo --skill turborepo
  npx skills add https://github.com/vercel/ai --skill ai-sdk
  echo "✓ Next.js skills installed (5)"
}

install_design() {
  echo "━━━ Installing Design & UI skills ━━━"
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
  echo "✓ Design & UI skills installed (15)"
}

install_mobile() {
  echo "━━━ Installing Mobile skills ━━━"
  npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-native-skills
  npx skills add https://github.com/expo/skills --skill building-native-ui
  npx skills add https://github.com/expo/skills --skill native-data-fetching
  npx skills add https://github.com/expo/skills --skill expo-tailwind-setup
  npx skills add https://github.com/expo/skills --skill upgrading-expo
  echo "✓ Mobile skills installed (5)"
}

install_agent() {
  echo "━━━ Installing Agent Workflow skills ━━━"
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
  echo "✓ Agent Workflow skills installed (20)"
}

install_db() {
  echo "━━━ Installing Database skills ━━━"
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
  echo "✓ Database skills installed (13)"
}

install_testing() {
  echo "━━━ Installing Testing skills ━━━"
  npx skills add https://github.com/currents-dev/playwright-best-practices-skill --skill playwright-best-practices
  npx skills add https://github.com/microsoft/playwright-cli --skill playwright-cli
  echo "✓ Testing skills installed (2) — see also: webapp-testing, test-driven-development"
}

install_marketing() {
  echo "━━━ Installing Marketing skills ━━━"
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
  echo "✓ Marketing skills installed (21)"
}

# ── Entry point ───────────────────────────────────────────────────────────

echo ""
echo "╔══════════════════════════════════════════════════════╗"
echo "║          Project Template — Skill Installer          ║"
echo "║         Source: https://www.skills.sh/topic          ║"
echo "╚══════════════════════════════════════════════════════╝"
echo ""

case "$CATEGORY" in
  react)     install_react ;;
  nextjs)    install_nextjs ;;
  design)    install_design ;;
  mobile)    install_mobile ;;
  agent)     install_agent ;;
  db)        install_db ;;
  testing)   install_testing ;;
  marketing) install_marketing ;;
  all)
    install_react
    echo ""
    install_nextjs
    echo ""
    install_design
    echo ""
    install_mobile
    echo ""
    install_agent
    echo ""
    install_db
    echo ""
    install_testing
    echo ""
    install_marketing
    echo ""
    echo "╔══════════════════════════════════════════════════════╗"
    echo "║   All 87 skills installed. See SKILLS_REFERENCE.md  ║"
    echo "╚══════════════════════════════════════════════════════╝"
    ;;
  *)
    echo "Usage: bash install-skills.sh [category]"
    echo "Categories: react | nextjs | design | mobile | agent | db | testing | marketing | all"
    echo ""
    echo "Examples:"
    echo "  bash install-skills.sh           # installs all 87 skills"
    echo "  bash install-skills.sh react     # installs React skills only"
    echo "  bash install-skills.sh marketing # installs Marketing skills only"
    exit 1
    ;;
esac
