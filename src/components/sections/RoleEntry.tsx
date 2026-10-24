import type { Role } from "@/content/types";

export function RoleEntry({ role }: { role: Role }) {
  return (
    <article>
      <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-6">
        <h3 className="font-semibold">{role.title}</h3>
        <p className="text-sm text-muted sm:text-right">
          <span className="font-medium text-foreground">{role.company}</span> |{" "}
          {role.location} | {role.period}
        </p>
      </div>
      {role.products && (
        <p className="mt-3 text-sm">
          <span className="text-muted">Key products: </span>
          {role.products.join(" | ")}
        </p>
      )}
      <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-muted marker:text-accent">
        {role.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </article>
  );
}
