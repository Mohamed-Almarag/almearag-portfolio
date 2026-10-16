import { AppSection } from "@/components/ui/AppSection";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { contributions } from "@/content/contributions";

const linkClass =
  "text-foreground hover:text-accent underline decoration-border underline-offset-4 transition-colors";

export function Contributions() {
  return (
    <AppSection id="contributions">
      <ul className="list-disc space-y-2 pl-5 leading-relaxed text-muted marker:text-accent">
        {contributions.map(({ repo, stars, summary, pr }) => (
          <li key={repo}>
            <span className="font-medium text-foreground">{repo}</span>
            {` (${stars}): `}
            {typeof summary === "string"
              ? summary
              : summary.map((part) =>
                  typeof part === "string" ? (
                    part
                  ) : (
                    <ExternalLink
                      key={part.href}
                      href={part.href}
                      className={linkClass}
                    >
                      {part.label}
                    </ExternalLink>
                  ),
                )}
            {" PR: "}
            <ExternalLink href={pr.href} className={linkClass}>
              {pr.label}
            </ExternalLink>
          </li>
        ))}
      </ul>
    </AppSection>
  );
}
