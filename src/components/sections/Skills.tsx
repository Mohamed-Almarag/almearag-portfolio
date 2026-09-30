import { AppSection } from "@/components/ui/AppSection";
import { skills } from "@/content/skills";

export function Skills() {
  return (
    <AppSection id="skills">
      <dl className="space-y-6">
        {skills.map((group) => (
          <div
            key={group.label}
            className="grid gap-3 sm:grid-cols-[13rem_1fr] sm:gap-6"
          >
            <dt className="text-sm font-medium sm:pt-1">{group.label}</dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border px-2.5 py-1 text-sm text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </AppSection>
  );
}
