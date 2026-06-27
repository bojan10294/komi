# Implementation Report: Wedding Invitation Page

This report outlines the implementation details, testing process, challenges faced, and instructions for customizing the wedding invitation page for Mirko and Ksenija.

## What Was Implemented

An elegant, fully responsive, and performance-optimized single-page React application has been built using Vite, TypeScript, and CSS Modules. The following modules and components were implemented:

- **Global Foundations**:
  - `.\src\index.css`: Global styles setting up CSS resets, Google Font imports for **Cormorant Garamond** (serif display font) and **Lato** (body font), and cohesive CSS custom properties implementing an elegant ivory, gold, and warm brown palette.
  - `.\src\content.ts`: A centralized source of truth for all editable wedding details, containing information about the groom, bride, ceremony date/time, venue name, and placeholders for assets/embeds.
  - `.\src\App.tsx`: Assembles and renders the main sections in the correct reading order with smooth scroll support.

- **Interactive and Visual Components**:
  - `.\src\components\Hero\Hero.tsx` & `.\src\components\Hero\Hero.module.css`: A full-height hero section displaying the names "Mirko & Ksenija", date, time, venue, and a customizable background image with a readable dark overlay.
  - `.\src\components\Details\Details.tsx` & `.\src\components\Details\Details.module.css`: Elegant informational section styled as a clean detail card written in Serbian, showing the ceremony location, date, and time.
  - `.\src\components\Countdown\Countdown.tsx` & `.\src\components\Countdown\Countdown.module.css`: A dynamic countdown timer tracking the exact time remaining until the ceremony. Uses Serbian localized labels (`дана`, `сати`, `минута`, `секунди`), handles timer cleanup to prevent memory leaks on unmount, and gracefully handles expiration.
  - `.\src\components\Rsvp\Rsvp.tsx` & `.\src\components\Rsvp\Rsvp.module.css`: Renders a custom Serbian placeholder ("Forma dolazi uskoro") when no Google Form URL is provided, and dynamically embeds a responsive iframe once the Google Form URL is set.
  - `.\src\components\Map\Map.tsx` & `.\src\components\Map\Map.module.css`: Integrates a Google Maps iframe embed displaying the venue location, with a Serbian fallback when the embed URL is omitted.

---

## How the Solution Was Tested

The codebase was validated using automated quality tools and manual verification:

1. **Linting Verification**: Run `npm run lint` using ESLint to ensure clean React code patterns and proper hook rules inside `.\src\components\Countdown\Countdown.tsx` and other modules.
2. **Type Checking & Production Build**: Run `npm run build` using the TypeScript compiler `tsc -b` and the Vite production compiler. This successfully completes without type-checking errors, creating a highly optimized, minified chunk set in the `.\dist` directory.
3. **Manual Responsive Testing**: Verified fluid and responsive layouts at widths starting from mobile (375 px) up to large desktop monitors (1280 px+). Used responsive CSS wrappers for the embedded iframe maps and forms to prevent overflowing containers on small viewports.

---

## Biggest Issues or Challenges Encountered

- **Responsive Iframe Ratios**: Embedding standard iframes for Google Forms and Google Maps often breaks mobile layout dimensions. To solve this, custom responsive containers were created in `.\src\components\Rsvp\Rsvp.module.css` and `.\src\components\Map\Map.module.css` utilizing modern aspect-ratio CSS rules to maintain correct bounds on all screens.
- **Localized Singular/Plural Labels**: Localizing the countdown labels in Serbian without full external localization libraries required simple, robust arrays mapping numbers directly to the custom Serbian labels (`дана`, `сати`, `минута`, `секунди`).
- **Interval State Synchronization**: Implementing the live countdown timer requires robust React interval hook cleanups to avoid double-ticks or memory leaks. This was carefully handled in `.\src\components\Countdown\Countdown.tsx` with a standard `useEffect` cleanup hook returning `clearInterval`.

---

## User Instructions for Customization

To fully personalize your wedding invitation page, please follow these steps:

### 1. Add the Couple's Photo
To add your background image:
- Save your portrait image file.
- Place it in the public assets directory as `.\public\couple.jpg` (overwriting the placeholder).
- The hero section inside `.\src\components\Hero\Hero.module.css` will automatically detect and load `/couple.jpg` with a pre-configured dark overlay to keep text fully legible.

### 2. Add Google Form RSVP Embed URL
To embed your Google Form:
1. Open your RSVP Google Form, click **Send** in the top right, select the **Embed HTML** tab (`<>`), and copy the link from the `src="..."` attribute of the provided iframe.
2. Open `.\src\content.ts` in your editor.
3. Paste the copied URL into the `RSVP_FORM_URL` constant. For example:
   ```ts
   export const RSVP_FORM_URL = 'https://docs.google.com/forms/d/e/.../viewform?embedded=true';
   ```

### 3. Add Google Maps Venue Embed URL
To embed the interactive venue map:
1. Find your venue on Google Maps ("Dan i noć").
2. Click **Share**, select the **Embed a map** tab, and copy the link from the `src="..."` attribute of the iframe.
3. Open `.\src\content.ts` in your editor.
4. Paste the copied URL into the `MAP_EMBED_URL` constant:
   ```ts
   export const MAP_EMBED_URL = 'https://www.google.com/maps/embed?pb=...';
   ```
