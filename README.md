# almearag-portfolio

Personal portfolio of Mohamed Almearag, Senior Frontend Engineer.

**Live:** [almearag-portfolio.vercel.app](https://almearag-portfolio.vercel.app)

![Mohamed Almearag, Senior Frontend Engineer](https://almearag-portfolio.vercel.app/opengraph-image)

## Stack

Next.js 16 (App Router), React 19, TypeScript 5, Tailwind CSS 4, deployed on Vercel.

## Engineering decisions

- **Fully static.** The page is prerendered at build time and served as plain HTML.
- **Server Components by default.** Only two components ship JavaScript to the browser: the theme toggle and the section navigation.
- **Content separated from presentation.** All CV text lives as typed data in `src/content/`. Components only render it.
- **No unnecessary dependencies.** The runtime dependencies are `next`, `react`, and `react-dom`. Icons are inline SVG, and there is no UI or state library.

## Performance

Lighthouse on production, October 2026:

|         | Performance | Accessibility | Best Practices | SEO |
| ------- | :---------: | :-----------: | :------------: | :-: |
| Mobile  |     98      |      100      |      100       | 100 |
| Desktop |     100     |      100      |      100       | 100 |

## Accessibility

Semantic HTML, full keyboard navigation with a skip link and visible focus states, and WCAG AA contrast in both dark and light themes.

## Development

```bash
pnpm install
pnpm dev
```

The dev server runs on [localhost:3007](http://localhost:3007).

| Script              | Purpose                          |
| ------------------- | -------------------------------- |
| `pnpm lint`         | ESLint, including Tailwind rules |
| `pnpm typecheck`    | Generate route types and run tsc |
| `pnpm format`       | Format with Prettier             |
| `pnpm format:check` | Check formatting                 |
| `pnpm build`        | Production build                 |

Commits follow [Conventional Commits](https://www.conventionalcommits.org) and are checked by Lefthook and commitlint. CI runs lint, format check, typecheck, and build on every push and pull request.
