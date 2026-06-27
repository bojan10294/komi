# Spec and build

## Agent Instructions

Ask the user questions when anything is unclear or needs their input. This includes:

- Ambiguous or incomplete requirements
- Technical decisions that affect architecture or user experience
- Trade-offs that require business context

Do not make assumptions on important decisions — get clarification first.

---

## Workflow Steps

### [x] Step: Technical Specification

Assess the task's difficulty, as underestimating it leads to poor outcomes.

- easy: Straightforward implementation, trivial bug fix or feature
- medium: Moderate complexity, some edge cases or caveats to consider
- hard: Complex logic, many caveats, architectural considerations, or high-risk changes

Create a technical specification for the task that is appropriate for the complexity level:

- Review the existing codebase architecture and identify reusable components.
- Define the implementation approach based on established patterns in the project.
- Identify all source code files that will be created or modified.
- Define any necessary data model, API, or interface changes.
- Describe verification steps using the project's test and lint commands.

Save the output to `c:\Users\petko\Documents\Projects\PRIVATE\vencanje\.zencoder\chats\7dbfb5e0-6940-4dec-9c60-10fc19b1b51a/spec.md` with:

- Technical context (language, dependencies)
- Implementation approach
- Source code structure changes
- Data model / API / interface changes
- Verification approach

If the task is complex enough, create a detailed implementation plan based on `c:\Users\petko\Documents\Projects\PRIVATE\vencanje\.zencoder\chats\7dbfb5e0-6940-4dec-9c60-10fc19b1b51a/spec.md`:

- Break down the work into concrete tasks (incrementable, testable milestones)
- Each task should reference relevant contracts and include verification steps
- Replace the Implementation step below with the planned tasks

Rule of thumb for step size: each step should represent a coherent unit of work (e.g., implement a component, add an API endpoint, write tests for a module). Avoid steps that are too granular (single function).

Save to `c:\Users\petko\Documents\Projects\PRIVATE\vencanje\.zencoder\chats\7dbfb5e0-6940-4dec-9c60-10fc19b1b51a/plan.md`. If the feature is trivial and doesn't warrant this breakdown, keep the Implementation step below as is.

**Stop here.** Present the specification (and plan, if created) to the user and wait for their confirmation before proceeding.

---

### [x] Step: Scaffold the project

Initialize the Vite + React + TypeScript project from scratch.

- Run `npm create vite@latest . -- --template react-ts` in the project root
- Install dependencies with `npm install`
- Remove boilerplate files (`src/App.css`, `src/assets/react.svg`, `public/vite.svg`, placeholder content in `App.tsx`)
- Create `src/content.ts` with the real wedding content (Mirko & Ksenija, 22. jul 2026., 16:00h, Dan i noć) and placeholder values for the Google Form URL and Google Maps embed URL
- Add `netlify.toml` for Netlify deployment
- Verify: `npm run build` succeeds on the clean scaffold

### [x] Step: Global styles and design tokens

Establish the visual foundation before building components.

- Create `src/index.css` with CSS reset, Google Font import for Cormorant Garamond (display) and Lato (body), and CSS custom properties for the elegant/classic palette (ivory, gold, warm brown)
- Verify the tokens reflect the agreed design direction

### [x] Step: Implement Hero component

Build the top section of the page.

- Create `src/components/Hero/Hero.tsx` and `Hero.module.css`
- Displays "Mirko & Ksenija", wedding date, time, and a hero background image (couple's photo placeholder)
- Reads all content from `src/content.ts`
- Verify: renders correctly in browser at 375 px and 1280 px widths

### [x] Step: Implement Details component

Build the venue/logistics section (in Serbian).

- Create `src/components/Details/Details.tsx` and `Details.module.css`
- Displays venue name ("Dan i noć"), address, date, and time in Serbian
- Reads content from `src/content.ts`
- Verify: renders correctly at mobile and desktop widths

### [x] Step: Implement Countdown component

Build the live countdown timer section.

- Create `src/components/Countdown/Countdown.tsx` and `Countdown.module.css`
- Counts down to 2026-07-22T16:00:00 using `setInterval`
- Displays days, hours, minutes, seconds in Serbian labels (дана, сати, минута, секунди)
- Cleans up interval on unmount
- Verify: counter decrements correctly; shows "Venčanje je počelo!" when date is past

### [x] Step: Implement RSVP component

Embed the Google Form placeholder.

- Create `src/components/Rsvp/Rsvp.tsx` and `Rsvp.module.css`
- Renders a visible placeholder message in Serbian ("Forma dolazi uskoro") when `RSVP_FORM_URL` is empty
- When `RSVP_FORM_URL` is set, renders the Google Form `<iframe>` with appropriate dimensions
- Verify: placeholder renders cleanly; comment in code clearly marks where the URL goes

### [x] Step: Implement Map component and assemble App

Embed the Google Map and wire all components together.

- Create `src/components/Map/Map.tsx` and `Map.module.css`
- Renders a Google Maps `<iframe>` with `src` from `MAP_EMBED_URL` in `src/content.ts`
- Update `src/App.tsx` to render all sections in order: Hero → Details → Countdown → Rsvp → Map
- Add smooth scroll behavior and section spacing in `App.module.css`
- Verify: `npm run lint` passes, `npm run build` succeeds, full page review at mobile and desktop sizes

### [x] Step: Update content and integrate images

Update the app with corrected wedding details from the user and integrate the 3 photos added to `public/`.

New content (from user screenshot):
- Date: 24.07.2026 (update from 22.07.2026)
- Guest arrival: 17h
- Wedding ceremony: 18h (update from 16h; also update weddingDateISO to 2026-07-24T18:00:00)
- Venue: Sala Dan i noć (add "Sala" prefix)
- Dress code: osmeh
- Invitation text (in Serbian): "Sa velikom radošću pozivamo vas da budete deo našeg venčanja i ulepšate nam najvažniji dan svojim prisustvom"
- RSVP deadline: do 15.07.2026
- Fun taglines: "Dress code: osmeh. Misija: dobra zabava. Zadatak: proslaviti ljubav sa nama! 🥂"

Images in `public/`:
- `mirko-ksenija.jpeg` — use as Hero background
- `mirko-ksenija-2.jpeg` — second couple photo
- `more.jpeg` — third image

Decide the best way to display all 3 images on the page (e.g., hero background + a small photo strip/gallery section between Details and Countdown, or as decorative accents). Use good judgment based on the elegant/classic design style.

Update `src/content.ts` with all new fields. Update components that display the content (Hero, Details, and add new content blocks where appropriate). Verify: `npm run build` succeeds.

### [ ] Step: Add Google Form embed

Set the Google Form URL in `src/content.ts` so the RSVP iframe activates.

- Set `RSVP_FORM_URL` in `src/content.ts` to: `https://docs.google.com/forms/d/e/1FAIpQLSfDyMz9H0NKtey3M_w6NPXh34TQn_RvWoG-SKMhLRX7uC11sg/viewform?embedded=true`
- The iframe height should match the form (~1144px as specified in the embed code)
- Do NOT change any layout or component logic — only update the URL and iframe height if needed
- Verify: `npm run build` succeeds

### [ ] Step: Mobile responsiveness polish

Review and fix mobile layout across all sections (375 px viewport).

- Check Hero, Details, Countdown, RSVP, Map components at 375 px
- Fix font sizes, padding, spacing, image handling, and iframe sizing for mobile
- Verify the page looks polished at both 375 px and 1280 px
- Run `npm run lint` and `npm run build` to confirm no regressions

### [x] Step: Write implementation report

After all components are assembled and verified:

- Write a report to `c:\Users\petko\Documents\Projects\PRIVATE\vencanje\.zencoder\chats\7dbfb5e0-6940-4dec-9c60-10fc19b1b51a/report.md` describing:
  - What was implemented
  - How the solution was tested
  - The biggest issues or challenges encountered
  - Instructions for the user on how to add the couple's photo, Google Form URL, and Google Maps embed URL
