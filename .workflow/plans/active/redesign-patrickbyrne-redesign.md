---
plan: redesign-patrickbyrne-com
status: active
priority: high
current_time: 5
confirmed_complete: true
project_id: project.default
total_slots: 5
time_slots:
  1: { status: completed, date: 2026-03-25 }
  2: { status: completed, date: 2026-03-25 }
  3: { status: completed, date: 2026-03-25 }
  4: { status: completed, date: 2026-03-25 }
  5: { status: completed, date: 2026-03-25 }
prs: []
pr_strategy: manual
---

# Redesign Plan: patrickbyrne.com

## Design Context

> **Every task in this plan should reference these files for design direction.**

| Resource | Path | Purpose |
|----------|------|---------|
| Design Brief | `.workflow/redesign/design-brief.md` | Screenshots, color palette, typography, layout patterns from inspiration sites |
| Design Tokens | `app/tokens.css` | CSS custom properties: `--color-primary`, `--font-heading`, spacing scale |
| Tailwind Config | `tailwind.config.ts` | Theme extension with extracted colors and fonts |
| Content Inventory | `.workflow/redesign/content-inventory.md` | All text content from source site, organized by page and section |
| Route Map | `.workflow/redesign/route-map.md` | Old URLs → new route files → content block assignments |

**Design Rules:**
- **DO NOT run `npx create-react-router` or any project generator** — the scaffold already exists with pre-configured tokens
- **DO NOT modify `app/tokens.css` values** — they define the exact palette, fonts, and spacing for this project
- Use Tailwind theme classes (`bg-background`, `text-foreground`, `bg-primary`, `text-accent`, `bg-surface`, `font-heading`, `font-body`) — these map to the design tokens
- Never hardcode hex color values — always use the theme classes or `var(--color-*)` custom properties
- The tokens may define a dark palette (dark backgrounds, light text) — respect it everywhere including header and footer
- Content comes from the content inventory — migrate copy verbatim, do not rewrite
- Reference inspiration site screenshots in the design brief for visual direction

**Style Direction (from user-selected tags: premium, modern, bold, editorial, spacious):**
- **Premium/Editorial**: Refined, expensive feel. Generous whitespace around all elements. Subtle hover transitions (opacity, transform scale 1.02, color shifts) on interactive elements. Thin borders, muted dividers. Typography should breathe — large headings with tight tracking, generous line-height on body. Cards should feel like printed material: clean edges, subtle shadows. No cheap gradients or heavy drop shadows.
- **Bolder**: High contrast between text and background. Heavier font weights on headings (700-800). Larger accent elements. CTAs should be unmissable — full-width on mobile, prominent color. Section dividers should be clear and intentional.
- **Spacious**: Generous padding on all sections (py-20 lg:py-32 minimum). Wide margins between content blocks. Hero sections should be tall and centered. Let content float in space — never feel cramped. Use max-w-3xl or max-w-4xl for reading content, not max-w-7xl.
- **Modern**: Clean geometric layouts. Subtle animations on scroll (fade-in, slide-up). Rounded corners (rounded-xl or rounded-2xl). Glass-morphism effects where appropriate (backdrop-blur, semi-transparent surfaces). Smooth transitions on all interactive states.

**Background Images (from source site CSS — not in `<img>` tags):**
- `https://patrickbyrne.com/wp-content/uploads/2024/04/pb-bb2.webp` (DIV.slider-area)
Download these to `public/images/` and use as CSS `background-image` in the appropriate sections.

**User Direction (verbatim — follow these instructions precisely):**

Super premium dark redesign. Keep ALL existing content — same copy, same structure, same pages.

HERO IMAGE: Use https://patrickbyrne.com/wp-content/uploads/2024/04/pb-bb2.webp as full-bleed hero background with dark gradient overlay. Download to public/images/hero.webp.

LOGO: Download https://patrickbyrne.com/wp-content/uploads/2024/04/pb-logo-final.png to public/images/logo.png.

BOOKS: Keep the book section with Danger Close and The Deep Rig covers. Download cover images and Amazon badges.

Pure black (#000) bg everywhere. Gold (#c8a86e) accent for CTAs only. Playfair Display headings, Inter body. Think Rolex/Tom Ford level polish.

Scroll animations: fade-in-up on each section via Intersection Observer, 0.6s ease-out, staggered delays on grids. Premium transitions everywhere.

Typography: Hero text-6xl lg:text-8xl. Section headings text-3xl lg:text-5xl. Body 18px min. Uppercase tracking on labels. Everything breathes.


---

## TIME SLOT 1: Project Foundation

**Objective:** Scaffold the React Router v7 + Cloudflare project with global layout, navigation, footer, design tokens, and Tailwind configuration.

| # | Task | Agent | Outputs | Directories |
|---|------|-------|---------|-------------|
| 1 | **CRITICAL: A scaffold already exists in this project. Do NOT run `npx create-react-router` or any project generator — it will overwrite the design tokens and scaffold files.** Instead: (a) Read `app/tokens.css` — it contains the design tokens (colors, fonts, spacing) for this project. These are the source of truth. (b) Read `app/app.css` — verify it imports tokens.css. (c) Run `pnpm install` to install existing dependencies. (d) Add Google Fonts `<link>` tags to `app/root.tsx` head for the font families in tokens.css (`--font-heading` and `--font-body`). (e) Verify `pnpm dev` starts without errors. The design tokens define a specific palette — do NOT change the token values. | `agent.eng.fullstack` | `app/root.tsx` (updated with font links), verified `pnpm dev` runs | `patrickbyrne-redesign/` |
| 2 | Update the global layout shell in `app/root.tsx`. The file already exists from the scaffold. Ensure it: (a) has `<html lang="en">`, (b) imports `./tokens.css` and `./app.css`, (c) has Google Fonts `<link>` tags matching the `--font-heading` and `--font-body` values from tokens.css, (d) wraps content in `<Header />`, `<Outlet />`, `<Footer />`, (e) applies `className="bg-background text-foreground font-body"` to `<body>`. The `bg-background` class must resolve to the token value (which may be dark). Check that the Tailwind config extends theme with the token colors. | `agent.eng.frontend` | `app/root.tsx` | `app/` |
| 3 | Build the `<Header />` navigation component in `app/components/Header.tsx`. Build navigation from the route structure discovered during crawl. The header must use the project's design tokens: background `bg-background` or `bg-surface`, text `text-foreground`, accent links `text-accent`. Use `font-heading` for the brand name. Include mobile hamburger menu. The header should feel premium — no default white backgrounds. Read `app/tokens.css` first to understand the color palette. | `agent.eng.frontend` | `app/components/Header.tsx` | `app/components/` |
| 4 | Build the `<Footer />` component in `app/components/Footer.tsx`. Extract footer content from the source site's content inventory (footer nav links, copyright text, social links). Use design tokens for background (`bg-primary` or `bg-surface`), text (`text-foreground`, `text-muted`), and spacing. The footer must match the overall dark/light scheme defined in tokens.css. | `agent.eng.frontend` | `app/components/Footer.tsx` | `app/components/` |
| 5 | Create shared UI components: (a) `app/components/ui/Button.tsx` — primary (`bg-accent text-background`), secondary (`bg-surface text-foreground border-border`), outline variants. (b) `app/components/ui/Container.tsx` — max-width wrapper with responsive padding. (c) `app/components/ui/Section.tsx` — vertical section with configurable `bg-background` / `bg-surface` background and generous padding. All components MUST use Tailwind classes that reference the design token theme — no hardcoded colors. | `agent.eng.frontend` | `app/components/ui/Button.tsx`, `app/components/ui/Container.tsx`, `app/components/ui/Section.tsx` | `app/components/ui/` |

**Exit Criteria:**
- [x] Project scaffolded with React Router v7 + Cloudflare
- [x] Design tokens applied (tokens.css + tailwind.config.ts)
- [x] Global layout renders with Header and Footer
- [x] Navigation matches source site structure
- [x] `pnpm dev` runs without errors

---

## TIME SLOT 2: Content Curation & Elevation

**Objective:** Research and curate compelling web content about patrickbyrne.com to elevate the site from a basic presence to an authority-level personal brand. Less is more — quality over quantity.

| # | Task | Agent | Outputs | Directories |
|---|------|-------|---------|-------------|
| 1 | Research the person/brand behind patrickbyrne.com. Search the web for recent press mentions, interviews, podcast appearances, speaking engagements, awards, and notable quotes. Collect 5-10 compelling proof points that position them as an authority. Save findings to `.workflow/redesign/content-curation.md`. Less is more — only include genuinely impressive items, not filler. | `agent.eng.fullstack` | `.workflow/redesign/content-curation.md` | `.workflow/redesign/` |
| 2 | From the curated content, select the 3-5 strongest proof points and write concise, punchy copy for the homepage. Create: (a) a refined hero headline and subtext that communicates authority in one breath, (b) a "Featured In" or "As Seen In" section with publication logos/names, (c) 2-3 pull quotes from interviews or press. Write to `.workflow/redesign/curated-copy.md`. Keep it tight — every word should earn its place. | `agent.eng.fullstack` | `.workflow/redesign/curated-copy.md` | `.workflow/redesign/` |
| 3 | Integrate the curated copy into the scaffold. Update `app/routes/_index.tsx` hero section with the refined headline and subtext. Add the "Featured In" section below the hero. Add the pull quotes as a testimonials/press section. Use design tokens for all styling. The result should make a visitor think "this person is important" within 2 seconds of landing. | `agent.eng.frontend` | `app/routes/_index.tsx` | `app/routes/` |

**Exit Criteria:**
- [x] Web research completed with 5-10 proof points
- [x] Curated copy written for homepage hero and press section
- [x] Homepage scaffold updated with curated content

---

## TIME SLOT 3: Homepage

**Objective:** Build the homepage page with content migrated from the source site, components following design brief patterns, and SEO meta.

| # | Task | Agent | Outputs | Directories |
|---|------|-------|---------|-------------|
| 1 | Create route file `app/routes/_index.tsx` for "Official Patrick M. Byrne Website". Set up the React Router v7 route module with `meta`, `loader` (if needed), and default export component. Page title: "Official Patrick M. Byrne Website". Meta description: "". This is the homepage — use the hero section layout pattern from the design brief. Include hero with headline + CTA, then content sections below. Reference design tokens for all colors, fonts, and spacing. | `agent.eng.frontend` | `app/routes/_index.tsx` | `app/routes/` |
| 2 | Build page-specific components for "Official Patrick M. Byrne Website" in `app/components/home/`. Components needed: `HeroSection.tsx`, `Text-sectionSection.tsx`, `Text-sectionSection.tsx`, `Feature-cardsSection.tsx`, `FooterSection.tsx`. Each component receives its content as props and renders using the layout patterns from the design brief. Use design tokens for all styling. The hero section should be full-width with the primary CTA prominent. Feature cards should use the card grid pattern from inspiration sites. | `agent.eng.frontend` | `app/components/home/*.tsx` | `app/components/home/` |
| 3 | Migrate content for "Official Patrick M. Byrne Website" from the source site content inventory. Migrate these content blocks from the source page at `/`: - **hero**: Who is Patrick? Patrick M. Byrne, founder & former CEO of Overstock.com, is committed to the triumph of freedom over tyranny. Towards that end he embraces constitutional republicanism, election integrity, clean capital markets, and school choice. CTA: More about Patrick - **text-section**: Curious about Patrick’s latest adventures? Curious about Patrick’s latest adventures? Dive into his world through his books, available now on Amazon. It’s a wonderful way to connect with his stories and see what he’s been up to! Discover the layers and insights that make his writing truly unique, of... - **feature-cards**: Home --- About --- Contact Ensure all headings maintain their hierarchy (h1 → h2 → h3). Preserve any structured data (FAQ schema, product info). Add appropriate alt text to images. Do NOT change the copy — migrate it exactly as-is from the content inventory. | `agent.eng.frontend` | `app/routes/_index.tsx` | `app/routes/`, `app/components/` |
| 4 | Add SEO meta to "Official Patrick M. Byrne Website" route. In the `meta` export: title ("Official Patrick M. Byrne Website"), description (""), og:title, og:description, og:image (if hero image exists), canonical URL. Generate appropriate OG tags based on the page content. | `agent.eng.frontend` | `app/routes/_index.tsx` | `app/routes/` |

**Exit Criteria:**
- [x] `app/routes/_index.tsx` renders with correct content
- [x] SEO meta tags set for all pages in this slot
- [x] Design tokens used consistently (no hardcoded colors)

---

## TIME SLOT 4: About, Contact

**Objective:** Build the 2 about, contact with content migrated from the source site, components following design brief patterns, and SEO meta.

| # | Task | Agent | Outputs | Directories |
|---|------|-------|---------|-------------|
| 1 | Create route file `app/routes/about.tsx` for "Bio – Official Patrick M. Byrne Website". Set up the React Router v7 route module with `meta`, `loader` (if needed), and default export component. Page title: "Bio – Official Patrick M. Byrne Website". Meta description: "". Follow the standard page layout: Container > Section blocks. Reference design tokens for all colors, fonts, and spacing. | `agent.eng.frontend` | `app/routes/about.tsx` | `app/routes/` |
| 2 | Build page-specific components for "Bio – Official Patrick M. Byrne Website" in `app/components/about/`. Components needed: `HeroSection.tsx`, `Feature-cardsSection.tsx`, `FooterSection.tsx`. Each component receives its content as props and renders using the layout patterns from the design brief. Use design tokens for all styling.  | `agent.eng.frontend` | `app/components/about/*.tsx` | `app/components/about/` |
| 3 | Migrate content for "Bio – Official Patrick M. Byrne Website" from the source site content inventory. Migrate these content blocks from the source page at `/about`: - **hero**: About Patrick M. Byrne stands out as a prominent figure in the corporate business world, renowned for his entrepreneurial spirit and innovative leadership. As the founder and former CEO of Overstock.com, Byrne’s career has been marked by groundbreaking achievements and forward-thinking strategies. P... - **feature-cards**: Home --- About --- Contact Ensure all headings maintain their hierarchy (h1 → h2 → h3). Preserve any structured data (FAQ schema, product info). Add appropriate alt text to images. Do NOT change the copy — migrate it exactly as-is from the content inventory. | `agent.eng.frontend` | `app/routes/about.tsx` | `app/routes/`, `app/components/` |
| 4 | Add SEO meta to "Bio – Official Patrick M. Byrne Website" route. In the `meta` export: title ("Bio – Official Patrick M. Byrne Website"), description (""), og:title, og:description, og:image (if hero image exists), canonical URL. Generate appropriate OG tags based on the page content. | `agent.eng.frontend` | `app/routes/about.tsx` | `app/routes/` |
| 5 | Create route file `app/routes/contact.tsx` for "Contact – Official Patrick M. Byrne Website". Set up the React Router v7 route module with `meta`, `loader` (if needed), and default export component. Page title: "Contact – Official Patrick M. Byrne Website". Meta description: "". Follow the standard page layout: Container > Section blocks. Reference design tokens for all colors, fonts, and spacing. | `agent.eng.frontend` | `app/routes/contact.tsx` | `app/routes/` |
| 6 | Build page-specific components for "Contact – Official Patrick M. Byrne Website" in `app/components/contact/`. Components needed: `HeroSection.tsx`, `Text-sectionSection.tsx`, `Feature-cardsSection.tsx`, `FooterSection.tsx`. Each component receives its content as props and renders using the layout patterns from the design brief. Use design tokens for all styling.  | `agent.eng.frontend` | `app/components/contact/*.tsx` | `app/components/contact/` |
| 7 | Migrate content for "Contact – Official Patrick M. Byrne Website" from the source site content inventory. Migrate these content blocks from the source page at `/contact`: - **hero**: Socials Stay connected with Patrick M. Byrne! Follow him on social media for the latest updates and insights. Stay connected with Patrick M. Byrne! Follow him on social media for the latest updates and insights. - **text-section**: Press & Other Inquiries For interview requests and other press inquiries, please complete the form below. Submit Now - **feature-cards**: Home --- About --- Contact Ensure all headings maintain their hierarchy (h1 → h2 → h3). Preserve any structured data (FAQ schema, product info). Add appropriate alt text to images. Do NOT change the copy — migrate it exactly as-is from the content inventory. | `agent.eng.frontend` | `app/routes/contact.tsx` | `app/routes/`, `app/components/` |
| 8 | Add SEO meta to "Contact – Official Patrick M. Byrne Website" route. In the `meta` export: title ("Contact – Official Patrick M. Byrne Website"), description (""), og:title, og:description, og:image (if hero image exists), canonical URL. Generate appropriate OG tags based on the page content. | `agent.eng.frontend` | `app/routes/contact.tsx` | `app/routes/` |

**Exit Criteria:**
- [x] `app/routes/about.tsx` renders with correct content
- [x] `app/routes/contact.tsx` renders with correct content
- [x] SEO meta tags set for all pages in this slot
- [x] Design tokens used consistently (no hardcoded colors)

---

## TIME SLOT 5: Polish & Deploy

**Objective:** Add SEO artifacts (sitemap.xml, robots.txt, canonical URLs), optimize performance, configure Cloudflare deployment, and run final review.

| # | Task | Agent | Outputs | Directories |
|---|------|-------|---------|-------------|
| 1 | Generate `public/sitemap.xml` with all routes: /, /about, /contact. Use the target domain "patrickbyrne.com" as the base URL. Set lastmod to today's date. Set changefreq to "monthly" for most pages, "weekly" for homepage. Set priority: homepage 1.0, main pages 0.8, subpages 0.6. | `agent.eng.backend` | `public/sitemap.xml` | `public/` |
| 2 | Generate `public/robots.txt` allowing all crawlers. Reference the sitemap at `https://patrickbyrne.com/sitemap.xml`. Disallow common non-content paths: `/api/`, `/_data/`, `/build/`. Add canonical `<link rel="canonical">` to each route's meta export pointing to the full URL on the target domain. | `agent.eng.backend` | `public/robots.txt`, route meta updates | `public/`, `app/routes/` |
| 3 | Performance optimization: (a) Ensure all images use `loading="lazy"` except above-the-fold hero images, (b) Add `<link rel="preload">` for Google Fonts in `app/root.tsx`, (c) Verify Tailwind CSS purge is configured to strip unused styles, (d) Add `<link rel="preconnect">` for external origins (Google Fonts, CDN). Run `pnpm build` and verify the output bundle size is reasonable. | `agent.eng.frontend` | `app/root.tsx`, component updates | `app/` |
| 4 | Configure Cloudflare deployment: (a) Verify `wrangler.toml` has correct settings (name: "patrickbyrne-redesign", compatibility_date, routes), (b) Add `_headers` file in `public/` with caching rules (1y for static assets, no-cache for HTML), (c) Add `_redirects` file for any old URL → new URL mappings based on the route map, (d) Test with `pnpm run dev` to verify all routes render correctly. | `agent.eng.backend` | `wrangler.toml`, `public/_headers`, `public/_redirects` | `public/`, root |
| 5 | Final review: (a) Verify all pages render with correct content from the source site, (b) Check responsive design at 390px, 768px, 1440px viewports, (c) Verify navigation works on all pages, (d) Check that design tokens are consistently applied (no hardcoded colors/fonts), (e) Verify all images have alt text, (f) Run accessibility check on heading hierarchy. | `agent.eng.frontend` | Validation report | `app/` |

**Exit Criteria:**
- [x] sitemap.xml and robots.txt generated
- [x] Canonical URLs set on all routes
- [x] All images have lazy loading (except hero)
- [x] Cloudflare deployment config complete
- [x] All routes render correctly with migrated content

---

## Execution Summary

| TIME SLOT | Tasks | Focus | Key Directories |
|-----------|-------|-------|-----------------|
| 1 — Project Foundation | 5 | Scaffold + Layout | `app/` |
| 2 — Content Curation & Elevation | 3 | Page Build | `app/` |
| 3 — Homepage | 4 | Page Build | `app/` |
| 4 — About, Contact | 8 | Page Build | `app/` |
| 5 — Polish & Deploy | 5 | SEO + Deploy | `app/` |