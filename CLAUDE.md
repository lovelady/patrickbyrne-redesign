# Patrick Byrne — Premium Redesign

React Router v7 + Cloudflare Pages project. Dark premium redesign of patrickbyrne.com.

## Stack
- React Router v7 (client-side rendering)
- Tailwind CSS v4 with `@theme` block in `app/app.css`
- Cloudflare Pages deployment
- Design tokens in `app/tokens.css`

## Design System
- **Background**: Pure black `#000000`
- **Accent**: Gold `#c8a86e` — CTAs and highlights only
- **Headings**: Playfair Display serif
- **Body**: Inter sans-serif
- All colors use Tailwind theme classes (`bg-background`, `text-foreground`, `bg-accent`, etc.)
- DO NOT hardcode hex values — always use theme classes

## Key Files
- `app/tokens.css` — CSS custom properties (source of truth for palette)
- `app/app.css` — Tailwind `@theme` block mapping tokens to Tailwind classes
- `.workflow/redesign/content-inventory.md` — All text content from the source site
- `.workflow/redesign/analysis.json` — Full crawl data including background images
- `.workflow/plans/active/redesign-patrickbyrne-redesign.md` — Execution plan (5 slots, 25 tasks)

## Assets
- Hero image: `https://patrickbyrne.com/wp-content/uploads/2024/04/pb-bb2.webp` — download to `public/images/hero.webp`
- Logo: `https://patrickbyrne.com/wp-content/uploads/2024/04/pb-logo-final.png` — download to `public/images/logo.png`

## MCP Tools — USE THESE PROACTIVELY

You have MCP tools available. Use them — don't reinvent what they already do.

- **`rag_query`** — Use this FIRST when searching for code, patterns, or understanding how something works. Faster and more accurate than grep for semantic questions. Example: `rag_query("how does the header component work")`
- **`scanners_seo_scan`** — Run this after building pages to check SEO (titles, meta, OG tags, canonical URLs). Use `mode: "static"` for file scanning, `mode: "render"` with a URL for live checks.
- **`scanners_security_scan`** — Run after building to check for XSS, injection, exposed secrets.
- **`scanners_design_scan`** — Check design token consistency, hardcoded colors, font mismatches.
- **`scanners_compliance_scan`** — Accessibility, WCAG, ARIA checks.
- **`scanners_lighthouse_scan`** — Performance, best practices, SEO via Lighthouse.
- **`workflow_plan_status`** — Check current plan progress, what slot you're on, what's next.
- **`workflow_plan_checkpoint`** — Mark a time slot complete when all exit criteria pass.
- **`workflow_design_tokens`** — Get the design system tokens (colors, fonts, spacing) without reading files.
- **`workflow_drift_check`** — Check if code has drifted from the plan or design system.
- **`chrome-devtools-mcp`** — Take screenshots, inspect the running site, run Lighthouse audits.

**Before completing any slot**, run the relevant scanners to validate your work. Don't just build — verify.

## Plan Execution Protocol

Plans live in `.workflow/plans/active/`. Follow this protocol:

1. **Read the plan** — find current TIME SLOT from frontmatter (`current_time`)
2. **Execute tasks** in the current TIME SLOT
3. **Build/test** — `pnpm build` or `pnpm dev` to verify nothing is broken
4. **Scanner gate** — run ALL relevant scanners and **fix what they find** before committing:
   - `scanners_design_scan` — on any touched `.jsx/.tsx` files
   - `scanners_seo_scan` — on any customer-facing routes
   - `scanners_compliance_scan` — on any user-facing changes
   - `scanners_security_scan` — always
   - File size — any file over 300 lines should be decomposed now, not later
5. **Documentation** — update any affected docs in the same commit
6. **Commit** — one commit per TIME SLOT (scanner fixes + docs included, not deferred)
7. **Checkpoint** — update plan frontmatter: `time_slots.N.status: completed`, advance `current_time: N+1`

**Do NOT checkpoint until scanners pass.** Fix issues first. Zero debt per slot.

### Plan Format Reference

Plans use this frontmatter:

```yaml
---
plan: plan-name-slug
status: active              # active | completed | paused | blocked
priority: high
current_time: 1             # which TIME SLOT is active
confirmed_complete: false    # true when ALL slots done
total_slots: 3
time_slots:
  1: { status: pending, date: null }   # pending | in_progress | completed
  2: { status: pending, date: null }
  3: { status: pending, date: null }
prs: []
pr_strategy: manual
---
```

Each TIME SLOT has:
- **Objective** — what the slot achieves
- **Task table** — numbered tasks with agent, outputs, directories
- **Exit criteria** — checkboxes that must all pass before the slot is complete

When you finish a TIME SLOT:
1. Verify all exit criteria pass
2. Update frontmatter: `time_slots.N.status: completed`, `time_slots.N.date: YYYY-MM-DD`
3. Set `current_time: N+1`
4. When all slots done: `confirmed_complete: true`, `status: completed`

## Rules
- DO NOT run `npx create-react-router` — scaffold already exists
- DO NOT modify `app/tokens.css` values
- Content comes from the content inventory — migrate copy verbatim
- Every section needs fade-in-up scroll animations (Intersection Observer, 0.6s ease-out)
- Commit after each TIME SLOT — uncommitted work is lost on crash
