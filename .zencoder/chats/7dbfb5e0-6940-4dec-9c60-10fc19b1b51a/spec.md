# Technical Specification: Wedding Invitation Page

## Complexity Assessment

**Medium** — Single-page React app with static content, a countdown timer, an embedded Google Form iframe placeholder, and an embedded Google Map. Main considerations are responsive design, visual polish, and correct embedding of the map.

---

## Confirmed Requirements

| Item | Value |
|------|-------|
| Couple | Mirko & Ksenija |
| Wedding date | 22. jul 2026. |
| Ceremony time | 16:00h |
| Venue name | Dan i noć |
| Venue address | TBD (to be added later) |
| Language | Serbian |
| Design style | Elegant / classic (ivory, gold, serif fonts) |
| Google Form | Placeholder — user will embed the real form later |
| Google Map | Embedded for venue location |
| Hosting | Netlify |

---

## Technical Context

| Item | Decision |
|------|----------|
| Language | TypeScript |
| Framework | React 18 |
| Build tool | Vite 5 |
| Styling | CSS Modules + CSS custom properties (no extra runtime dependency) |
| Package manager | npm |
| Node target | ≥ 18 |
| Lint | ESLint (Vite React preset) |
| Type check | `tsc --noEmit` |

**Rationale**: Vite + React is the current standard for lightweight SPAs. CSS Modules keeps styling scoped without adding a CSS-in-JS runtime. No UI component library is introduced to keep the bundle small and allow full design control.

---

## Page Layout (top to bottom)

1. **Hero section** — couple's names ("Mirko & Ksenija"), wedding date, and a hero background image placeholder (couple's photo)
2. **Details section** — venue name, address, time; written in Serbian
3. **Countdown Timer section** — live countdown to 22 July 2026 16:00
4. **RSVP section** — Google Form iframe placeholder (with a comment showing where to paste the embed URL)
5. **Map section** — embedded Google Maps iframe for the venue

---

## Source Code Structure

```
vencanje/
├── index.html
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── package.json
├── netlify.toml              # Netlify deployment config (_redirects for SPA)
├── public/
│   └── couple.jpg            # placeholder — user replaces with actual photo
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── App.module.css
    ├── index.css             # CSS reset + global custom properties (colors, fonts)
    ├── content.ts            # Single source of truth for all wedding content
    └── components/
        ├── Hero/
        │   ├── Hero.tsx
        │   └── Hero.module.css
        ├── Details/
        │   ├── Details.tsx
        │   └── Details.module.css
        ├── Countdown/
        │   ├── Countdown.tsx
        │   └── Countdown.module.css
        ├── Rsvp/
        │   ├── Rsvp.tsx       # renders the Google Form <iframe> placeholder
        │   └── Rsvp.module.css
        └── Map/
            ├── Map.tsx        # renders a Google Maps <iframe>
            └── Map.module.css
```

---

## Data Model / Content Config

All wedding content is declared as typed constants in `src/content.ts`:

```ts
// src/content.ts
export const WEDDING = {
  groomName: 'Mirko',
  brideName: 'Ksenija',
  date: '22. jul 2026.',
  time: '16:00h',
  venueName: 'Dan i noć',
  venueAddress: 'TBD',
  weddingDateISO: '2026-07-22T16:00:00',
} as const;

// Paste your Google Form embed URL here when ready
export const RSVP_FORM_URL = '';

// Paste your Google Maps embed URL here (Maps → Share → Embed a map → copy src)
export const MAP_EMBED_URL = 'https://www.google.com/maps/embed?...';
```

---

## Design Tokens (CSS custom properties)

```css
:root {
  --color-bg:       #fffdf7;   /* warm ivory */
  --color-primary:  #c9a84c;   /* antique gold */
  --color-text:     #3a3028;   /* deep warm brown */
  --color-muted:    #8a7060;   /* muted brown */
  --color-border:   #e8dcc8;   /* light parchment */

  --font-display:   'Cormorant Garamond', Georgia, serif;
  --font-body:      'Lato', system-ui, sans-serif;
}
```

Fonts sourced from Google Fonts (loaded in `index.html` via `<link>`).

---

## Verification Approach

1. `npm run lint` — ESLint passes with zero errors
2. `npm run build` — Vite production build succeeds (no TypeScript errors, no missing assets)
3. Manual browser check:
   - Page loads and all sections render correctly
   - Countdown timer counts down correctly
   - Map iframe loads
   - Page is fully responsive on mobile (375 px) and desktop (1280 px)
