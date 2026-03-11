# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run lint     # ESLint (Next.js core-web-vitals + TypeScript rules)
```

No test suite is configured.

## Architecture

Next.js 16 App Router project. All routes are in `app/`, all shared UI in `components/`, utilities in `lib/`.

### Routing
- `app/page.tsx` — Home page. **Do not modify the `<header>` hero section** (user explicitly requested this).
- `app/work/calbright/` — Multi-page case study using `CalbrightCaseStudyLayout` which creates a fixed compound header (WorkNav + CalbrightCaseStudyTabs + optional SectionNav).
- `app/ai-explorations/` — AI project showcase; hero uses `backgroundVariant="ai-explorations"` on `PageHero`.

### Navigation & Layout
- **`WorkNav`** — Fixed sticky nav for all inner pages. Takes an `embed` prop to make it `relative` (used inside `CalbrightCaseStudyLayout` to participate in the stacked fixed header).
- **`SectionNav`** — Fixed right-side dot navigation (desktop only). Configs are in `lib/section-nav-config.ts`; add a new page's sections there to enable it.
- **`PageHero`** — Reusable inner-page hero. Inner pages use this; home hero is bespoke.
- Max content width is set via `CONTENT_CONTAINER_CLASS` in `lib/layout.ts` (`max-w-[1600px]` with responsive horizontal padding) — import this constant rather than hardcoding.

### Styling
- Tailwind CSS v4 (no `tailwind.config.js`; theme is defined via `@theme inline` in `app/globals.css`).
- Custom semantic color tokens: `bg-bg`, `text-text`, `text-muted`, `bg-card`, `border-line`.
- `font-accent` class → Quantico font (use for labels, tags, metrics, section eyebrows).
- `font-sans` → Inter; `font-mono` → Geist Mono.

### Animation
- **`ScrollReveal`** — wrap any element for IntersectionObserver fade+slide. Props: `delay`, `direction`.
- **`ScrollRevealStagger`** — staggered reveal for lists of children.
- Framer Motion is available for more complex animations.

### Nav config
All nav link data lives in `lib/nav-config.ts` (`NAV_LINKS`, `WORK_SUB_LINKS`). Update there when adding/renaming routes.

### Key constraints
- No testing framework — verify changes by running `npm run build` to catch TypeScript/ESLint errors.
- Deployed to Vercel. Analytics via `@vercel/analytics` and Google Analytics (injected in `app/layout.tsx`).
