import type { Contribution } from "./types";

export const contributions: Contribution[] = [
  {
    repo: "open-webui/open-webui",
    stars: "155k stars",
    summary:
      "restored placeholder names in 24 strings across 10 locales that showed raw placeholders instead of values.",
    pr: {
      label: "github.com/open-webui/open-webui/pull/32501",
      href: "https://github.com/open-webui/open-webui/pull/32501",
    },
  },
  {
    repo: "lissy93/dashy",
    stars: "26k stars",
    summary: [
      "fixed 3 Hindi messages failing at runtime that the project's CI missed, and completed its Arabic translation (63% to 100%). Credited in the project's ",
      {
        label: "README",
        href: "https://github.com/lissy93/dashy#supported-languages",
      },
      ".",
    ],
    pr: {
      label: "github.com/lissy93/dashy/pull/2394",
      href: "https://github.com/lissy93/dashy/pull/2394",
    },
  },
  {
    repo: "knadh/listmonk",
    stars: "23k stars",
    summary:
      "restored placeholders in 5 Arabic messages that dropped them, so confirmations like a deleted campaign showed without its name.",
    pr: {
      label: "github.com/knadh/listmonk/pull/3281",
      href: "https://github.com/knadh/listmonk/pull/3281",
    },
  },
];
