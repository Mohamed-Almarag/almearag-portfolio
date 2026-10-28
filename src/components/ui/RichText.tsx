import { ExternalLink } from "@/components/ui/ExternalLink";
import type { Highlight, Link } from "@/content/types";

export const textLinkClass =
  "text-accent hover:text-foreground underline decoration-accent/40 underline-offset-4 transition-colors";

function TextLink({ link }: { link: Link }) {
  return (
    <ExternalLink href={link.href} className={textLinkClass}>
      {link.label}
    </ExternalLink>
  );
}

export function RichText({ value }: { value: Highlight }) {
  if (typeof value === "string") return value;
  return value.map((part) => {
    if (typeof part === "string") return part;
    return <TextLink key={part.href} link={part} />;
  });
}
