import type { Link } from "./types";

type Profile = {
  name: string;
  title: string;
  stack: string[];
  location: string;
  email: string;
  linkedin: Link;
  github: Link;
  whatsapp: string;
  cv: string;
  summary: string;
};

export const profile: Profile = {
  name: "Mohamed Almearag",
  title: "Senior Frontend Engineer",
  stack: ["Vue.js", "Nuxt.js", "React", "Next.js"],
  location: "Cairo, Egypt",
  email: "mohamedalmarag97@gmail.com",
  linkedin: {
    label: "linkedin.com/in/mohamed-almearag-aa7443153",
    href: "https://www.linkedin.com/in/mohamed-almearag-aa7443153",
  },
  github: {
    label: "github.com/Mohamed-Almarag",
    href: "https://github.com/Mohamed-Almarag",
  },
  whatsapp: "https://wa.me/201064911906",
  cv: "/Mohamed-Almearag-Senior-Frontend-Engineer.pdf",
  summary:
    "Senior Frontend Engineer with 5+ years of experience building scalable, SSR-driven web applications, specializing in Vue.js and Nuxt.js and shipping production React and Next.js applications. Delivered bidding and tender systems, freelancing marketplaces, e-learning, and healthcare platforms, including multilingual RTL interfaces, real-time features, live-streaming, and payment gateway integrations. Strong focus on performance, Core Web Vitals, accessibility, security, clean code, and scalable architecture, using AI-assisted development workflows (Claude, Cursor, Codex) to accelerate refactors and migrations, automate code reviews, and ship complex modules faster without sacrificing code quality. Author of Locale Guard, an open-source GitHub Action and npm CLI that catches translation bugs before they reach users. Its findings led to fixes merged into Open WebUI, dashy, and listmonk.",
};
