import type { Product } from "./types";

export const products: Product[] = [
  {
    name: "Locale Guard",
    stack: ["TypeScript", "GitHub Actions", "npm"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Mohamed-Almarag/locale-guard",
      },
      {
        label: "Marketplace",
        href: "https://github.com/marketplace/actions/locale-guard",
      },
      {
        label: "npm",
        href: "https://www.npmjs.com/package/locale-guard-cli",
      },
    ],
    highlights: [
      [
        "Open-source GitHub Action and npm CLI, listed in the official ",
        {
          label: "i18next",
          href: "https://www.i18next.com/overview/plugins-and-utils#utils",
        },
        " and ",
        {
          label: "vue-i18n",
          href: "https://github.com/intlify/vue-i18n/blob/master/docs/ecosystem/tools.md#locale-guard",
        },
        " documentation, that checks translation files in pull requests and git hooks for vue-i18n, Nuxt, next-intl, react-intl, i18next, and Rails. On pull requests, it reports missing keys, broken placeholders, plural-form gaps, and untranslated text in one sticky comment with inline annotations.",
      ],
      "Parses vue-i18n and ICU messages into an AST with their official parsers instead of regex, and fails only on the issues a pull request introduces, or reports all existing ones on every pull request or on a schedule. Runs safely on forks and is covered by 300+ tests.",
      "Runs in CI on production projects, and found the translation bugs fixed in the open-source contributions below, all merged by the projects' maintainers.",
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
  {
    name: "Doworkss",
    stack: [
      "Nuxt.js",
      "Vue.js",
      "Vuetify",
      "Pinia",
      "Pusher",
      "Firebase FCM",
      "Tap Payments",
    ],
    mainStack: "Nuxt.js",
    links: [{ label: "doworkss.com", href: "https://www.doworkss.com/" }],
    highlights: [
      "Freelancing and micro-services marketplace with real-time chat, push notifications, and wallet payments, server-rendered for fast loads and SEO, in 6 languages including RTL.",
    ],
  },
  {
    name: "Rivals",
    stack: [
      "Nuxt.js",
      "Vue.js",
      "Tailwind CSS",
      "Pinia",
      "WebRTC",
      "Pusher",
      "Firebase FCM",
      "Tap Payments",
    ],
    mainStack: "Nuxt.js",
    links: [
      { label: "rivals.mazaady.com", href: "https://rivals.mazaady.com/" },
    ],
    highlights: [
      "Auctions and tenders platform with WebRTC live streaming, real-time updates, and push notifications, server-rendered for fast loads and SEO, in 4 languages including RTL.",
    ],
  },
  {
    name: "Mazaady",
    stack: [
      "Next.js (App Router)",
      "React",
      "TanStack Query",
      "Zustand",
      "WebRTC",
      "Pusher",
      "Firebase FCM",
      "Tap Payments",
    ],
    mainStack: "Next.js",
    links: [{ label: "mazaady.com", href: "https://www.mazaady.com/" }],
    highlights: [
      "Online marketplace with WebRTC live-stream selling, real-time chat, push notifications, and wallet payments, server-rendered for fast loads and SEO, in 4 languages including RTL.",
    ],
  },
  {
    name: "JobSeek",
    stack: [
      "Next.js (App Router)",
      "React",
      "TanStack Query",
      "Zustand",
      "Pusher",
      "Firebase FCM",
    ],
    mainStack: "Next.js",
    links: [{ label: "jobseekk.com", href: "https://www.jobseekk.com/" }],
    highlights: [
      "Professional network to find job opportunities, with real-time chat and push notifications, server-rendered for fast loads and SEO, with multilingual RTL support.",
    ],
  },
];
