import type { Product } from "./types";

export const products: Product[] = [
  {
    name: "Locale Guard",
    stack: ["TypeScript", "GitHub Actions"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Mohamed-Almarag/locale-guard",
      },
      {
        label: "Marketplace",
        href: "https://github.com/marketplace/actions/locale-guard",
      },
    ],
    highlights: [
      "Open-source GitHub Action that checks translation files on every pull request for vue-i18n, Nuxt, next-intl, react-intl, and i18next, reporting missing keys, broken placeholders, plural-form gaps, and untranslated text in one sticky comment with inline annotations; runs in CI on production projects.",
      "Parses vue-i18n and ICU messages into an AST with their official parsers instead of regex, and fails only on the issues a pull request introduces, or reports all existing ones on every pull request or on a schedule; runs safely on forks and is covered by 223 tests.",
      [
        "Used it on open-source projects: a ",
        {
          label: "merged PR",
          href: "https://github.com/lissy93/dashy/pull/2394",
        },
        " to lissy93/dashy (26k stars) fixed 3 Hindi messages failing at runtime that the project's CI missed, and completed its Arabic translation (63% to 100%); credited in the project's ",
        {
          label: "README",
          href: "https://github.com/lissy93/dashy#supported-languages",
        },
        ".",
      ],
    ],
  },
  {
    name: "Smart Admin Panel",
    stack: ["Vue 3", "Vite", "TypeScript"],
    links: [
      { label: "Demo", href: "https://smart-admin-panel-demo.vercel.app" },
      { label: "Docs", href: "https://smart-admin-panel-docs.vercel.app" },
    ],
    highlights: [
      "A commercial schema-driven admin template built with Vue 3, Vite, strict TypeScript, Pinia, Tailwind, and shadcn-vue, covering 40+ CRUD modules with data tables, filtering, import/export, bulk actions, and ECharts dashboards.",
      "Built a CLI that scaffolds modules and forms from a real API contract instead of mock data, generating types, Zod schemas, accessible forms, and translations.",
      "Implemented 9-language i18n with full RTL, CASL-based RBAC, token-driven theming, and hosted documentation.",
    ],
  },
];
