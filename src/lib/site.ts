import type { IconName } from "@/components/ui/Icon";
import { profile } from "@/content/profile";
import { sections } from "@/content/sections";

export const navigation = sections
  .filter((section) => section.inNav)
  .map((section) => ({ label: section.title, href: `#${section.id}` }));

export const contactLinks: { label: string; href: string; icon: IconName }[] = [
  { label: "LinkedIn", href: profile.linkedin.href, icon: "linkedin" },
  { label: "GitHub", href: profile.github.href, icon: "github" },
  { label: "Email", href: `mailto:${profile.email}`, icon: "mail" },
  { label: "WhatsApp", href: profile.whatsapp, icon: "whatsapp" },
];
