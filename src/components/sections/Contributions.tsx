import { Fragment } from "react";
import { AppSection } from "@/components/ui/AppSection";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { RichText, textLinkClass } from "@/components/ui/RichText";
import { contributions } from "@/content/contributions";

export function Contributions() {
  return (
    <AppSection id="contributions">
      <ul className="list-disc space-y-2 pl-5 leading-relaxed text-muted marker:text-accent">
        {contributions.map(({ repo, stars, summary, prs }) => (
          <li key={repo}>
            <ExternalLink
              href={`https://github.com/${repo}`}
              className={`${textLinkClass} font-medium`}
            >
              {repo}
            </ExternalLink>
            {` (${stars}): `}
            <RichText value={summary} />
            {prs.length > 1 ? " PRs: " : " PR: "}
            {prs.map((pr, i) => (
              <Fragment key={pr.href}>
                {i > 0 && ", "}
                <ExternalLink href={pr.href} className={textLinkClass}>
                  {pr.label}
                </ExternalLink>
              </Fragment>
            ))}
          </li>
        ))}
      </ul>
    </AppSection>
  );
}
