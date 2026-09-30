import type { Role } from "./types";

export const experience: Role[] = [
  {
    title: "Senior Frontend Developer",
    company: "Mazaady",
    location: "Saudi Arabia (Remote)",
    period: "Apr 2024 - Present",
    products: [
      "Rivals (bidding & tenders)",
      "Doworkss (freelancing marketplace)",
    ],
    highlights: [
      "Migrated Doworkss from Nuxt 2 to Nuxt 4 with a feature-based architecture replacing the previous flat structure, removing redundant dependencies to reduce bundle size and maintenance cost.",
      "Owned the end-to-end refactor of 6+ admin panels across all company products, introducing TypeScript to codebases with almost no type coverage, restructuring shared components, and standardizing RBAC.",
      "Built multilingual RTL interfaces supporting 6 languages, including custom Urdu locale handling for vee-validate and Zod, and delivered real-time features: WebRTC live streaming for auctions, Pusher chat, and Firebase notifications.",
      "Hardened security with a server-side proxy using HTTP-only session cookies, Cloudflare Turnstile, and HTML sanitization, and integrated Tap payments with geo/IP-based currency detection.",
      "Improved Core Web Vitals and accessibility through image optimization, caching, and SSR tuning, and set up Sentry, CI/CD pipelines, and Lefthook pre-commit hooks.",
      "Built custom Claude Skills and agent configurations for module scaffolding, code review, and release workflows, automating repetitive admin work and generating unit tests with Vitest.",
    ],
  },
  {
    title: "Senior Frontend Developer",
    company: "CyberX World",
    location: "Saudi Arabia (Remote)",
    period: "Jan 2024 - Apr 2024",
    products: ["AwareX (security awareness)", "Phishing simulation platform"],
    highlights: [
      "Built security awareness and phishing simulation platforms serving both children and corporate clients, covering training workshops, courses, and assessment delivery.",
      "Developed and customized admin dashboards using Vue.js/Nuxt.js with Vuetify and PrimeVue, building reusable components adopted by the wider team and integrating REST APIs.",
      "Delivered bilingual Arabic/English interfaces with RTL support, and conducted code reviews and refactoring to improve code quality across the codebase.",
    ],
  },
  {
    title: "Mid Frontend Developer",
    company: "VERO",
    location: "Egypt (Remote)",
    period: "Mar 2022 - Jan 2024",
    products: ["Personal Learning Coach (PLC)", "Creative"],
    highlights: [
      "Developed Personal Learning Coach (PLC), an international SaaS learning assessment platform serving individual and institutional subscribers, building a multilingual interface supporting 11 languages including RTL.",
      "Led a large-scale refactor of the PLC codebase, removing dead code, restructuring shared modules, and fixing long-standing issues across the application.",
      "Integrated accessibility-driven features including text-to-speech playback and image-to-text extraction through backend APIs.",
      "Built responsive interfaces for education and scientific research platforms covering school management, student assessments, and exams, and handled frontend deployment to production servers over SSH.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Treinder",
    location: "Egypt (Hybrid)",
    period: "Oct 2021 - Mar 2022",
    products: ["Pharma In (healthcare)"],
    highlights: [
      "Built a healthcare platform from scratch using Vue.js and Nuxt.js, integrating REST APIs and contributing to project structure decisions.",
      "Created shared components and reusable helpers to reduce duplication across the codebase.",
    ],
  },
];
