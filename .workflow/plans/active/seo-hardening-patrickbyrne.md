---
plan: seo-hardening-patrickbyrne
status: active
priority: high
current_time: 1
confirmed_complete: false
project_id: project.default
total_slots: 2
time_slots:
  1: { status: pending, date: null }
  2: { status: pending, date: null }
prs: []
pr_strategy: manual
---

# SEO Hardening Plan: patrickbyrne.com

## Design Context

> **Every task in this plan should reference these files for design direction.**

| Resource | Path | Purpose |
|----------|------|---------|
| Design Tokens | `app/tokens.css` | CSS custom properties — source of truth for palette |
| Tailwind Config | `app/app.css` | `@theme` block mapping tokens to Tailwind classes |
| Route Registry | `.workflow/design/routes.yaml` | All routes and their expected page titles |
| Existing Routes | `app/routes/_index.tsx`, `app/routes/about.tsx`, `app/routes/timeline.tsx`, `app/routes/contact.tsx` | Current route files with partial SEO meta |

**Context:**
An SEO scan revealed missing canonical URLs, Twitter/X card tags, `og:url`, `og:image` (on 3 of 4 pages), `og:site_name`, and favicon across all routes. The OG image on the homepage uses a relative path instead of an absolute URL. This plan addresses every finding.

---

## TIME SLOT 1: SEO Helper & Global Fixes

**Objective:** Create a shared SEO meta helper and fix global-level issues in `root.tsx` (favicon, `og:site_name`, font preload).

| # | Task | Agent | Outputs | Directories |
|---|------|-------|---------|-------------|
| 1 | Create `app/lib/seo.ts` with: (a) `SITE_URL` constant set to `https://patrickbyrne.com`, (b) `SITE_NAME` constant set to `"Official Patrick M. Byrne Website"`, (c) `DEFAULT_OG_IMAGE` set to `${SITE_URL}/images/hero.webp`, (d) a `buildMeta()` helper function that accepts `{ title, description, path, image? }` and returns a full meta array including: `title`, `name:description`, `link:canonical` (SITE_URL + path), `og:title`, `og:description`, `og:url` (SITE_URL + path), `og:image` (absolute), `og:type`, `og:site_name`, `twitter:card` (summary_large_image), `twitter:title`, `twitter:description`, `twitter:image`. This eliminates copy-paste across routes. | `agent.eng.frontend` | `app/lib/seo.ts` | `app/lib/` |
| 2 | Update `app/root.tsx`: (a) Add `<link rel="icon" href="/favicon.ico" sizes="any" />` in `<head>`, (b) Add `crossOrigin=""` to the font preload `<link>` tag, (c) Verify favicon exists at `public/favicon.ico` — if missing, create a minimal placeholder or note it. Do NOT change layout structure or design tokens. | `agent.eng.frontend` | `app/root.tsx` | `app/` |
| 3 | Confirm `public/favicon.ico` exists. If not, download or generate a minimal favicon (gold "P" on black background or similar brand-appropriate icon) and place it at `public/favicon.ico`. | `agent.eng.frontend` | `public/favicon.ico` | `public/` |

**Exit Criteria:**
- [ ] `app/lib/seo.ts` exists with `buildMeta()` helper returning complete meta arrays
- [ ] `buildMeta()` produces canonical URL, OG tags (title, description, url, image, type, site_name), and Twitter card tags
- [ ] `app/root.tsx` has favicon link and corrected font preload
- [ ] `public/favicon.ico` exists
- [ ] `pnpm build` passes

---

## TIME SLOT 2: Per-Route Meta Migration & Verification

**Objective:** Migrate all 4 route files to use `buildMeta()` from the shared helper, ensuring every page has complete SEO meta. Verify with a build.

| # | Task | Agent | Outputs | Directories |
|---|------|-------|---------|-------------|
| 1 | Update `app/routes/_index.tsx` meta export to use `buildMeta()` with: `title: "Official Patrick M. Byrne Website"`, `description: "Patrick M. Byrne — founder & former CEO of Overstock.com..."` (existing copy), `path: "/"`, `image: "${SITE_URL}/images/hero.webp"`. Remove the manually constructed meta array — replace entirely with the helper call. | `agent.eng.frontend` | `app/routes/_index.tsx` | `app/routes/` |
| 2 | Update `app/routes/about.tsx` meta export to use `buildMeta()` with: `title: "Bio – Official Patrick M. Byrne Website"`, existing description, `path: "/about"`. The helper will supply the default OG image since this page had none. Remove the old manual meta array. | `agent.eng.frontend` | `app/routes/about.tsx` | `app/routes/` |
| 3 | Update `app/routes/timeline.tsx` meta export to use `buildMeta()` with: `title: "Timeline — Patrick M. Byrne"`, existing description, `path: "/timeline"`. Remove the old manual meta array and the standalone `robots` entry (keep `robots` if desired by adding it to `buildMeta` or as an extra entry). | `agent.eng.frontend` | `app/routes/timeline.tsx` | `app/routes/` |
| 4 | Update `app/routes/contact.tsx` meta export to use `buildMeta()` with: `title: "Contact – Official Patrick M. Byrne Website"`, existing description, `path: "/contact"`. Remove the old manual meta array. | `agent.eng.frontend` | `app/routes/contact.tsx` | `app/routes/` |
| 5 | Run `pnpm build` to verify all routes compile. Spot-check the built HTML output (if SSR/prerender) or review the meta arrays in source to confirm canonical, OG, and Twitter tags are present on every page. | `agent.eng.frontend` | Build passes, verification notes | `app/` |

**Exit Criteria:**
- [ ] All 4 routes use `buildMeta()` — no manual meta arrays remain
- [ ] Every route has: title, meta description, canonical URL, og:title, og:description, og:url, og:image (absolute), og:type, og:site_name, twitter:card, twitter:title, twitter:description, twitter:image
- [ ] Home page `og:image` uses absolute URL (not `/images/hero.webp`)
- [ ] `pnpm build` passes with no errors
- [ ] No hardcoded hex colors introduced

---

## Execution Summary

| TIME SLOT | Tasks | Focus | Key Directories |
|-----------|-------|-------|-----------------|
| 1 — SEO Helper & Global Fixes | 3 | Shared helper + root.tsx + favicon | `app/lib/`, `app/`, `public/` |
| 2 — Per-Route Meta Migration | 5 | Route meta migration + verification | `app/routes/` |
