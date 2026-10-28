import type { Contribution } from "./types";

export const contributions: Contribution[] = [
  {
    repo: "open-webui/open-webui",
    stars: "155k stars",
    summary:
      "fixed broken placeholders in 30 strings across 13 locales that showed raw placeholders or broken text instead of values, in two PRs merged by the project's creator.",
    prs: [
      {
        label: "32501",
        href: "https://github.com/open-webui/open-webui/pull/32501",
      },
      {
        label: "33015",
        href: "https://github.com/open-webui/open-webui/pull/33015",
      },
    ],
  },
  {
    repo: "lissy93/dashy",
    stars: "26k stars",
    summary:
      "fixed 3 Hindi messages failing at runtime that the project's CI missed, and completed its Arabic translation (63% to 100%).",
    prs: [
      {
        label: "Merged PR",
        href: "https://github.com/lissy93/dashy/pull/2394",
      },
    ],
    credit: [
      "Credited in the project's ",
      {
        label: "README",
        href: "https://github.com/lissy93/dashy#supported-languages",
      },
    ],
    report: {
      text: "Also reported a bug in its Nextcloud widgets that the project's creator fixed in the code across 19 locales.",
      links: [
        {
          label: "Issue",
          href: "https://github.com/lissy93/dashy/issues/2410",
        },
        { label: "Fix", href: "https://github.com/lissy93/dashy/pull/2413" },
      ],
    },
  },
  {
    repo: "knadh/listmonk",
    stars: "23k stars",
    summary:
      "restored placeholders in 5 Arabic messages that dropped them, so confirmations like a deleted campaign showed without its name.",
    prs: [
      {
        label: "Merged PR",
        href: "https://github.com/knadh/listmonk/pull/3281",
      },
    ],
  },
];
