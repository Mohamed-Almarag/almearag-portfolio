import type { Product } from "./types";

export const product: Product = {
  name: "Smart Admin Panel",
  stack: ["Vue 3", "Vite", "TypeScript"],
  links: {
    demo: "https://smart-admin-panel-demo.vercel.app",
    docs: "https://smart-admin-panel-docs.vercel.app",
  },
  highlights: [
    "A commercial schema-driven admin template built with Vue 3, Vite, strict TypeScript, Pinia, Tailwind, and shadcn-vue, covering 40+ CRUD modules with data tables, filtering, import/export, bulk actions, and ECharts dashboards.",
    "Built a CLI that scaffolds modules and forms from a real API contract instead of mock data, generating types, Zod schemas, accessible forms, and translations.",
    "Implemented 9-language i18n with full RTL, CASL-based RBAC, token-driven theming, and hosted documentation.",
  ],
};
