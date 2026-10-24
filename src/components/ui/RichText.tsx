import { ExternalLink } from "@/components/ui/ExternalLink";
import type { Highlight, Link } from "@/content/types";

export const textLinkClass =
  "text-foreground hover:text-accent underline decoration-border underline-offset-4 transition-colors";

export const boldClass = "font-semibold text-foreground";

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
    if ("bold" in part) {
      const { bold } = part;
      return typeof bold === "string" ? (
        <strong key={bold} className={boldClass}>
          {bold}
        </strong>
      ) : (
        <strong key={bold.href} className={boldClass}>
          <TextLink link={bold} />
        </strong>
      );
    }
    return <TextLink key={part.href} link={part} />;
  });
}
