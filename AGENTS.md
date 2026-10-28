# AGENTS.md

Single-page React portfolio site: Vite 5 + React 18, plain JS/JSX (no TypeScript). Not a monorepo. No tests, no CI, no formatter.

## Commands

- `npm run dev` — dev server with HMR
- `npm run build` — production build to `dist/`
- `npm run lint` — ESLint flat config; the only verification step (no typecheck/test commands exist)
- `npm run preview` — serve the production build

**Lint baseline is not clean.** `npm run lint` fails on pre-existing errors (unused `React` imports, missing prop-types, unescaped entities). Only fix lint errors in files you touch; don't do a repo-wide cleanup unless asked.

## Architecture

- Entry: `src/main.jsx` → `src/App.jsx`. App shows a ~1s loading splash (`Loading.jsx`, via `setTimeout` on mount), then renders the router.
- **Routing:** `HashRouter` (chosen so deep links work on static hosts without rewrite config). Routes: `/` (the single-page site: Navbar, Home, About, Portfolio, Resume, Contact — component `Main` in `App.jsx`) and `/project/:id` (details page: `src/components/projectDetails/ProjectDetails.jsx`). In-page scrolling still uses `react-scroll` on the main page; `Navbar` detects non-home routes and navigates to `/` with `location.state.scrollTo` (handled by `Main`'s effect).
- **Project data lives in `src/constans/projects.jsx`** (single source of truth). `All.jsx`/`Design.jsx`/`Development.jsx` just filter it (`featured` for the All tab, `categories` for the others) and render `Card`s. Add/edit projects there — not in the tab components. To add a project: add an entry (unique `id` slug used in the details URL) and it flows to the tabs and details page automatically.
- Section components live in `src/components/<section>/`. Shared components at `src/components/`: `Title.jsx` (section heading), `Card.jsx` (project card), `Loading.jsx`. `CustomCursor.jsx` exists but is commented out in `App.jsx`.
- **`src/constans/` is intentionally misspelled** (not `constants`). `navData` there defines nav items; imports use `../../constans`. Don't rename it without updating every import.
- Adding a nav item: add to `navData` in `src/constans/index.jsx` **and** render a section with a matching `id` (e.g. `id="home"`) — the scroll links target those ids.

## Styling gotchas

- Tailwind 3 (`tailwind.config.js`) with custom tokens: `bodyColor`, `lightText`, `boxBg`, `designColor` (pink accent `#ff014f`), `shadowOne`, `bannerImg`. `darkMode: "class"` is set but the app is always dark; the root uses hardcoded `bg-[#0B1120]` (not the `bodyColor` token).
- Reuse the `@layer components` utility classes in `src/index.css` (`.bannerIcon`, `.contactInput`, `.textArea`, `.skillsIcon`, `.skillsIcons`, `.resumeli`) instead of restyling inputs/icons.
- Images (including `resume.pdf`) live in `src/assets/images/`; some filenames contain spaces — quote paths in shell commands. New images must be imported or referenced via the Tailwind config; they aren't served statically from `public/` except what's already there.
- Animations use `framer-motion` (`motion`, `AnimatePresence`); keep new section animations consistent with existing ones in `Home.jsx`/`About.jsx`.
