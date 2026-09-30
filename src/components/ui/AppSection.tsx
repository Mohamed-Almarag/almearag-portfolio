import type { ReactNode } from "react";
import { sections } from "@/content/sections";

type AppSectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

export function AppSection({ id, children, className = "" }: AppSectionProps) {
  const title = sections.find((section) => section.id === id)?.title ?? id;

  return (
    <section id={id} aria-labelledby={`${id}-title`} className={className}>
      <h2
        id={`${id}-title`}
        className="mb-6 text-sm font-semibold tracking-[0.14em] text-accent uppercase"
      >
        {title}
      </h2>
      {children}
    </section>
  );
}
