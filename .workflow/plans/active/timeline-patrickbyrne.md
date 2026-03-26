---
plan: timeline-patrickbyrne
status: active
priority: medium
current_time: 1
confirmed_complete: false
project_id: project.default
total_slots: 3
time_slots:
  1: { status: in_progress, date: null }
  2: { status: pending, date: null }
  3: { status: pending, date: null }
prs: []
pr_strategy: manual
---

# Timeline Plan: Patrick Byrne — Life & Career Timeline Page

## Overview

A standalone `/timeline` route showcasing Patrick Byrne's chronological life story — from Fort Wayne, Indiana to Dubai. This is a separate project from the main redesign, to be reviewed and approved before merging into the primary site. The page should feel like a premium editorial spread — dark, editorial, cinematic. The timeline is for Patrick to review first; it will be integrated into the main nav only after his approval.

## Design Context

| Resource | Path | Purpose |
|----------|------|---------|
| Research Data | `.workflow/redesign/timeline-research.md` | All events with dates, sourced from web research |
| Design Tokens | `app/tokens.css` | Colors, fonts, spacing — source of truth |
| Tailwind Config | `tailwind.config.ts` | Theme extension — use token classes only |
| Main Redesign Plan | `.workflow/plans/active/redesign-patrickbyrne-redesign.md` | Context for design language |

**Design Direction:**
- Pure black (`bg-background` = `#000`) base
- Gold (`text-accent` = `#c8a86e`) for year labels, milestone markers, and hover states
- Playfair Display (`font-heading`) for year/era headings
- Inter (`font-body`) for event descriptions
- Vertical timeline layout on desktop, stacked on mobile
- Scroll-triggered fade-in-up animations (Intersection Observer, 0.6s ease-out, staggered delays)
- Era groupings with large editorial headings that act as section dividers
- Premium, spacious feel — let each event breathe (py-8+ per event)

**Era Groups:**
1. **Education & Origins** (1962–1998)
2. **Building Overstock** (1999–2013)
3. **Tech Pioneer** (2014–2018)
4. **Deep State & Election Integrity** (2019–2022)
5. **Author & Exile** (2021–present)

---

## TIME SLOT 1: Data Layer & Route Setup

**Objective:** Create the `/timeline` route, define the typed timeline data structure, and populate it with all researched events.

| # | Task | Outputs | Directories |
|---|------|---------|-------------|
| 1 | Create `app/data/timeline.ts` — TypeScript array of timeline events. Each event: `{ year: string, date: string, era: EraKey, headline: string, body: string, tags?: string[] }`. Define `EraKey` union type for the 5 era groups. Populate with all events from `.workflow/redesign/timeline-research.md`. | `app/data/timeline.ts` | `app/data/` |
| 2 | Create route file `app/routes/timeline.tsx` — React Router v7 route module with `meta` export (title: "Timeline — Patrick M. Byrne"), default export component, and a `loader` that returns the timeline data. The route should be reachable at `/timeline`. | `app/routes/timeline.tsx` | `app/routes/` |
| 3 | Update `.workflow/redesign/route-map.md` to include the new `/timeline` route. | `.workflow/redesign/route-map.md` | `.workflow/redesign/` |

**Exit Criteria:**
- [ ] `app/data/timeline.ts` exists with all events typed and populated
- [ ] `/timeline` route renders (even if unstyled) without errors
- [ ] Route map updated

---

## TIME SLOT 2: Timeline UI Components

**Objective:** Build the premium vertical timeline UI with era groupings, scroll animations, and full design token compliance.

| # | Task | Outputs | Directories |
|---|------|---------|-------------|
| 1 | Build `app/components/timeline/TimelineLayout.tsx` — outer wrapper component. Renders a full-height dark canvas (`bg-background`), a narrow center spine line in `border-border` color, and maps events into era groups. Accepts the full timeline array as props. | `app/components/timeline/TimelineLayout.tsx` | `app/components/timeline/` |
| 2 | Build `app/components/timeline/EraHeader.tsx` — large editorial era heading. Uses `font-heading text-4xl lg:text-6xl text-foreground uppercase tracking-widest`. Gold (`text-accent`) underline or left-border. Fades in on scroll via Intersection Observer. | `app/components/timeline/EraHeader.tsx` | `app/components/timeline/` |
| 3 | Build `app/components/timeline/TimelineEvent.tsx` — individual event card. Layout: gold year label (`text-accent font-heading text-xl`) left-aligned, dot marker on the spine, headline (`font-heading text-2xl text-foreground`), body text (`font-body text-muted text-lg leading-relaxed`), optional tags as small caps labels. Fades in and slides up on scroll (Intersection Observer, `opacity-0 translate-y-6` → `opacity-100 translate-y-0`, 0.6s ease-out, staggered 100ms per event). No hardcoded colors. | `app/components/timeline/TimelineEvent.tsx` | `app/components/timeline/` |
| 4 | Build `app/components/timeline/TimelineHero.tsx` — page-top hero. Full-bleed dark section with Playfair Display heading "The Life of Patrick M. Byrne", a short subline ("From Fort Wayne to Dubai. Builder, philosopher, disruptor."), and a thin gold rule below. Matches the premium hero style from the main redesign. | `app/components/timeline/TimelineHero.tsx` | `app/components/timeline/` |
| 5 | Wire all components into `app/routes/timeline.tsx`. Render: `TimelineHero` → `TimelineLayout` (with all era groups and events). Verify scroll animations work and design tokens are consistent. | `app/routes/timeline.tsx` (updated) | `app/routes/` |

**Exit Criteria:**
- [ ] All timeline components built and wired into the route
- [ ] Scroll animations work (fade-in-up per event)
- [ ] Era groupings render with editorial headings
- [ ] No hardcoded colors — all design tokens
- [ ] Responsive at 390px, 768px, 1440px
- [ ] `pnpm build` passes

---

## TIME SLOT 3: Polish, SEO & Approval Prep

**Objective:** Final polish pass, SEO meta, accessibility, and prepare the page for Patrick's review.

| # | Task | Outputs | Directories |
|---|------|---------|-------------|
| 1 | Add full SEO meta to `app/routes/timeline.tsx`: title, description ("A chronological look at the life and career of Patrick M. Byrne — entrepreneur, philosopher, and advocate."), og:title, og:description, canonical URL. | `app/routes/timeline.tsx` | `app/routes/` |
| 2 | Accessibility pass: verify all event cards use semantic `<time>` elements for dates, heading hierarchy is correct (h1 → h2 era → h3 event), all interactive elements have focus rings, color contrast meets AA on dark background. | Component updates | `app/components/timeline/` |
| 3 | Add `/timeline` to `public/sitemap.xml` (once Slot 5 of the main redesign creates it). Add a subtle "Timeline" link to the site nav in `app/components/Header.tsx` — present but visually secondary to the main three links. | `app/components/Header.tsx` | `app/components/` |
| 4 | Final visual review: start `pnpm dev`, walk each era group, verify animations, spacing, and typography feel premium and editorial. Document any issues. Fix before marking complete. | Validation report | `app/` |

**Exit Criteria:**
- [ ] SEO meta complete
- [ ] Accessibility passes (semantic HTML, focus rings, contrast)
- [ ] Timeline linked in Header nav
- [ ] Final visual review passed
- [ ] `pnpm build` passes with no errors
- [ ] Ready for Patrick's review

---

## Execution Summary

| TIME SLOT | Tasks | Focus |
|-----------|-------|-------|
| 1 — Data & Route | 3 | Data model + route scaffold |
| 2 — UI Components | 5 | Premium timeline UI + animations |
| 3 — Polish & SEO | 4 | Accessibility, SEO, final review |

## Notes

- This plan is intentionally decoupled from the main redesign plan. Work on it in parallel or after Slot 2 of the main redesign.
- Do NOT add the timeline to the primary nav until Patrick has reviewed and approved the page.
- All event copy is sourced from `.workflow/redesign/timeline-research.md` — do not fabricate or editorialize events.
- The "Author & Exile" era overlaps with the "Deep State" era (2021 onwards) — this is intentional; events in both eras are true simultaneously.
