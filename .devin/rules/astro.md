# Göteborg Pickleball Klubb (GPK) – Astro Rules
Activation Mode: Always On

1. Tech stack and scope
   - This project uses **Astro 7** (fully static output), **Tailwind CSS v4** via `@tailwindcss/vite`, and **TypeScript** (strict, `astro/tsconfigs/strict`).
   - The site is a static, content-driven one-pager plus a privacy page. No SSR, no server functions, no database, no client framework.
   - Do **not** propose Next.js, TanStack Start, React, Vue or other UI frameworks for this project unless a new, documented scope requires it.
   - Ship zero client-side JavaScript unless a specific need is justified.

2. TypeScript expectations
   - Assume `strict` TypeScript; avoid `any`, `unknown`, and `as`-casts unless clearly justified.
   - Prefer inferred types, generics, and utility types over manual duplication.
   - Keep functions and components small and focused; extract helpers when logic grows.
   - `.astro` template code is validated with `pnpm check` (`astro check`), TypeScript/JSON/CSS additionally with Biome (`pnpm lint`, `pnpm format`).

3. File structure (Astro conventions)
   - Pages live in `src/pages`, shared layouts in `src/layouts`, reusable components in `src/components`, global styles in `src/styles/global.css`.
   - All site content, links, dates and feature flags live in `src/config/site.ts` – never hardcode links or visitor-facing copy in components.
   - Static assets go in `public/`; the club logo lives under `public/media/`.
   - Keep page templates cohesive: markup and closely related presentation logic belong together in the `.astro` file.

4. Content, links and placeholders
   - Use the typed values in `src/config/site.ts` for the Google Form embed/URL, WhatsApp invite, dates and copy.
   - Config values may be `null` – components must then render neutral Swedish placeholder text, never broken iframes, `href="#"` links, or internal instructions visible to visitors.
   - Do not invent club facts (times, venues, org number, agenda). Only copy present in `src/config/site.ts` or approved brief text may be shown.

5. Documentation and tools (Context7 MCP)
   - When using or proposing **Astro**, **Tailwind CSS**, or **Biome** APIs, first consult the **latest official docs** via the **Context7 MCP**.
   - If you are unsure about an option, configuration key, or API name:
     - Use Context7 to fetch the relevant documentation.
     - Prefer examples and patterns that match the versions used in this project (see `package.json`).
   - Do **not** invent APIs, configuration fields, or magic props. If something is not clearly documented, say so and propose a conservative alternative.

6. Code style and structure
   - Keep imports clean and minimal; remove unused imports and dead code when you touch a file.
   - Prefer composition over duplication; keep the single-column layout accessible and keyboard-navigable.
   - Use semantic HTML (`header`, `main`, `section` with `aria-labelledby`, `footer`), visible focus states and sufficient color contrast (≥ 4.5:1).
   - When refactoring, preserve behavior first, then improve structure incrementally.

7. Output expectations for Cascade
   - When making changes, specify:
     - Which files to create or edit.
     - A short summary of the change and its purpose.
   - Prefer small, incremental edits over large, sweeping rewrites unless explicitly requested.
   - When generating example code, keep it realistic and ready to paste into this project with minimal adjustment.
