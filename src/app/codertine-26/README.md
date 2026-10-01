# CoderTine 8.0

A five-day coding arc — **build · break · debug · ship**. CoderTine 8.0 is a hands-on coding experience where participants build with AI, reverse-engineer systems, debug the bug, trade code, and close the week with a DSA Challenge finale.

## The five events

| Day       | Event                          | Format                          | Registration |
| --------- | ------------------------------ | ------------------------------- | ------------ |
| Mon · 5  | AI Build Lab                   | 2-hour workshop / seminar       | Free         |
| Tue · 6  | Reverse Engineering Workshop   | 2-hour seminar                  | Free         |
| Wed · 7  | Debug the Bug                  | Competitive debugging event     | ₹30          |
| Thu · 8  | The Data Hunt                  | Tech + virtual stock-market     | ₹50          |
| Fri · 9  | DSA Verse                      | Online individual contest       | see below    |

Workshops are free. Competitions are paid: **1 competition ₹30 · 2 competitions ₹50 · 3 competitions ₹60**. Prize pool: **1st ₹5,000 · 2nd ₹3,000 · 3rd ₹2,000 · ₹10,000 overall**, with certificates for all three competitions.

## Overview

Single-page experience built with React + TypeScript + Vite. No backend — registration is handled later via QR code, so the site currently ships without any form.

### Pages / routes (hash-based, no router dependency)

- `#/` — Home: hero with the script **CoderTine 7.0** wordmark, stats, CTAs, the roadmap timeline of all five events, and a **Registration & Prizes** section.
- `#/reserve` — Reserve My Spot: a scroll-driven experience covering the arc (intro → experience → modules → why).
- `#/reserve?event=<id>` — Home module links deep-link into the reserve page for a specific module.
- `#/events/<slug>` — Event details page for a single event (info grid, people & team, what it covers, purpose, core question).
- `#/events/<slug>/guide` — One-page event guide (syllabus, what students gain, suggested event flow, participant note, optional team & support).

### Slug map

`ai-build-lab`, `reverse-engineering`, `debug-the-bug`, `the-data-hunt`, `dsa-verse`

The pre-rename slugs `codetrade` and `codertrine` still resolve to **The Data Hunt** and **DSA Verse** so previously shared links keep working. See `legacySlugAliases` in `src/data/eventDetails.ts`.

## Tech stack

- React 19 + TypeScript (strict-ish: `verbatimModuleSyntax`, `noUnusedLocals`, `erasableSyntaxOnly`)
- Vite · ESLint (flat config, react-hooks + react-refresh)
- Everything else is dependency-free: hash router, scroll reveals, and animated background are hand-rolled.
- **Unbounded** loads from Google Fonts for the UI; the brand wordmark is the self-hosted **Lobster** script. If offline, Unbounded falls back to Inter / system fonts.

## Getting started

```bash
npm install
npm run dev      # start dev server
```

### Scripts

| Command           | Description                                  |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Start the Vite dev server                    |
| `npm run build`   | Type-check (`tsc -b`) then production build  |
| `npm run lint`    | ESLint over the project                      |
| `npm run preview` | Preview the production build locally         |

> **Windows / PowerShell note:** if `npm run <script>` fails with a PowerShell execution-policy error, call the runner directly: `npm.cmd run <script>`.

## Project structure

```
src/
├── App.tsx                      # Hash router shell + footer
├── index.css                    # Global palette, fonts (Unbounded token), Lobster @font-face
├── ScrollBackground.tsx / .css  # Fixed ambient background (glows, grid, grain)
├── components/
│   ├── CoderTineLogo.tsx / .css # Script wordmark (self-hosted Lobster)
│   ├── ScrollReveal.tsx / .css  # IntersectionObserver reveal wrapper
│   ├── ChapterNav.tsx / .css    # Side chapter dots (Reserve page)
│   ├── EventCard.tsx            # Reusable timeline card: title, date chip, description, two buttons
│   ├── RegistrationPrizes.tsx / .css  # Fees card, competition choices, bar-style prize pool + trophy SVGs
│   └── codetrineOptions.ts      # InterestId type used by module/event data
├── data/
│   ├── modules.ts               # The five arc modules (home timeline + arc)
│   └── eventDetails.ts          # Centralized per-event + per-guide content, built from modules
├── hooks/useHashRoute.ts        # Dependency-free hash router + query parsing
├── lib/motion.ts                # prefersReducedMotion / scrollToId helpers
└── pages/
    ├── HomePage.tsx             # Hero + roadmap timeline + Registration & Prizes
    ├── ReservePage.tsx / .css   # Scroll journey (intro, experience, arc, why)
    ├── EventDetailPage.tsx / .css  # Per-event details
    └── EventGuidePage.tsx / .css   # Per-event one-page guide
public/
├── fonts/lobster-regular.woff2  # Self-hosted script font
├── favicon.svg                  # Terminal-prompt emblem
└── icons.svg
```

## How event data works

`data/modules.ts` defines the five events and their headline card content. `data/eventDetails.ts` builds the full detail + guide content on top of it, with one shared `EventGuide` shape (subtitle, syllabus, student gains, event flow, participant note, optional team & support) and the shared `EventCard` / `EventDetailPage` / `EventGuidePage` rendering every event — no per-event page implementations.

## Design system notes

- **Palette:** deep charcoal/burgundy background, warm cream ink, ember-orange accents, gold highlights (CSS variables in `index.css` under `--ct-*`).
- **Typography:** Unbounded (Google Fonts) for UI and accents; Lobster for the brand wordmark; monospace kept as fallback.
- **Motion:** all animation respects `prefers-reduced-motion`; no horizontal overflow.