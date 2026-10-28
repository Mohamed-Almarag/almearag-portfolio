import { Fragment } from "react";
import { AppSection } from "@/components/ui/AppSection";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { RichText, textLinkClass } from "@/components/ui/RichText";
import { contributions } from "@/content/contributions";
import type { Link } from "@/content/types";

function LinkList({ links }: { links: Link[] }) {
  return links.map((link, i) => (
    <Fragment key={link.href}>
      {i > 0 && " · "}
      <ExternalLink href={link.href} className={textLinkClass}>
        {link.label}
      </ExternalLink>
    </Fragment>
  ));
}

export function Contributions() {
  return (
    <AppSection id="contributions">
      <ul className="list-disc space-y-2 pl-5 leading-relaxed text-muted marker:text-accent">
        {contributions.map(({ repo, stars, summary, prs, credit, report }) => (
          <li key={repo}>
            <ExternalLink
              href={`https://github.com/${repo}`}
              className={`${textLinkClass} font-medium`}
            >
              {repo}
            </ExternalLink>
            {` (${stars}): `}
            <RichText value={summary} /> {prs.length > 1 && "Merged PRs: "}
            <LinkList links={prs} />
            {credit && (
              <>
                {". "}
                <RichText value={credit} />
              </>
            )}
            {report && (
              <>
                {`. ${report.text} `}
                <LinkList links={report.links} />
              </>
            )}
          </li>
        ))}
      </ul>
    </AppSection>
  );
}
