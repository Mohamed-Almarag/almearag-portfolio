import type { IconName } from "@/components/ui/Icon";
import { profile } from "@/content/profile";
import { sections } from "@/content/sections";

export const siteUrl = "https://almearag-portfolio.vercel.app";

export const siteTitle = `${profile.name} | ${profile.title}`;

export const siteDescription = profile.summary.slice(
  0,
  profile.summary.indexOf(". ") + 1,
);

const [city, country] = profile.location.split(", ");

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  url: siteUrl,
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: city,
    addressCountry: country,
  },
  sameAs: [profile.linkedin.href, profile.github.href],
  knowsAbout: profile.stack,
};

export const navigation = sections
  .filter((section) => section.inNav)
  .map((section) => ({ label: section.title, href: `#${section.id}` }));

export const contactLinks: { label: string; href: string; icon: IconName }[] = [
  { label: "LinkedIn", href: profile.linkedin.href, icon: "linkedin" },
  { label: "GitHub", href: profile.github.href, icon: "github" },
  { label: "Email", href: `mailto:${profile.email}`, icon: "mail" },
  { label: "WhatsApp", href: profile.whatsapp, icon: "whatsapp" },
];
