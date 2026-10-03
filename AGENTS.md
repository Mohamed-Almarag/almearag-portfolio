<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# almearag-portfolio

Personal portfolio of Mohamed Almearag. A single, statically rendered page.

## Stack

- Next.js 16 (App Router), React 19, TypeScript (strict)
- Tailwind CSS 4, no component library
- pnpm
- Vercel

## Commands

```bash
pnpm dev
pnpm build
pnpm lint
pnpm typecheck
pnpm format
```

Lefthook runs ESLint and Prettier on staged files and commitlint on commit messages. CI runs lint, format check, typecheck, and build.

## Structure

```
src/
  app/                  layout, page, robots, sitemap, opengraph-image
  components/
    sections/           one per CV section, in the CV's order
    layout/             AppHeader, AppNav, AppFooter, ThemeToggle
    ui/                 AppContainer, AppSection, Icon, ExternalLink
  content/              CV content as typed data
  lib/                  site config and utilities
```

## Architecture

- Server Components by default. `"use client"` only on leaf components that need interaction.
- Sections mirror the CV: hero, summary, experience, freelance, product, skills, education, languages.
- All copy lives in `src/content/`. Section components receive data and render it; no hardcoded text inside them.
- One page with anchor sections. No route handlers for the page's own data, no state library, no CMS.
- Theme is dark by default with a toggle to light. Not persisted, no system detection.

## Content

- The CV is the only source of truth. Copy it verbatim: no rewording, no additions, no omissions.
- The phone number appears only inside the WhatsApp link, never as visible text.
- American spelling. No em dashes.

## Code

- Comments only when the reason is not obvious from the code. One or two lines at most.
- No JSDoc on self-explanatory code, no divider comments, no commented-out code, no TODOs left behind.
- No placeholder text and no emojis in code or UI.
- Component files in PascalCase matching the component (`AppHeader.tsx`). Other files in kebab-case. Named exports except where Next.js requires a default export.
- Never name a component after an HTML element (`Header`, `Footer`, `Nav`); prefix it with `App` (`AppHeader`, `AppNav`, `AppFooter`, `AppContainer`, `AppSection`).
- Keep components small. No abstraction until it is used at least twice.
- Semantic HTML, visible focus states, full keyboard support, WCAG AA contrast.

## Git

- Conventional Commits, short and natural, e.g. `chore: init app and dependencies`.
- `main` is production, `dev` is development. Work on `dev`, merge into `main` through a pull request with a merge commit.
