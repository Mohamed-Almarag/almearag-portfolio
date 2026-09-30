@AGENTS.md

# almearag-portfolio

Personal portfolio of Mohamed Almearag. A single, statically rendered page.

## Stack

- Next.js 16 (App Router), React 19, TypeScript (strict)
- Tailwind CSS 4, shadcn/ui
- pnpm
- Vercel

## Commands

```bash
pnpm dev
pnpm build
pnpm lint
```

## Structure

```
src/
  app/                  layout, page, robots, sitemap, opengraph-image
  components/
    sections/           one per CV section, in the CV's order
    layout/             header, footer, theme-toggle
    ui/                 shadcn/ui primitives and small shared pieces
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
- The phone number is never shown.
- American spelling. No em dashes.

## Code

- Comments only when the reason is not obvious from the code. One or two lines at most.
- No JSDoc on self-explanatory code, no divider comments, no commented-out code, no TODOs left behind.
- No placeholder text and no emojis in code or UI.
- Files in kebab-case, components in PascalCase, named exports except where Next.js requires a default export.
- Keep components small. No abstraction until it is used at least twice.
- Semantic HTML, visible focus states, full keyboard support, WCAG AA contrast.

## Git

- Never commit, push, or open a pull request unless explicitly asked.
- No AI attribution anywhere: no `Co-Authored-By` trailers, no "Generated with" lines, in commits or pull requests.
- Conventional Commits, short and natural, e.g. `chore: init app and dependencies`.
- `main` is production, `dev` is development. Work on `dev`, merge into `main` through a pull request.

## Local notes

The roadmap lives in `.claude/roadmap.md` (not tracked). Read it at the start of every session and keep its checkboxes current.
