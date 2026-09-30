import { RoleEntry } from "@/components/sections/RoleEntry";
import { AppSection } from "@/components/ui/AppSection";
import { experience } from "@/content/experience";

export function Experience() {
  return (
    <AppSection id="experience">
      <div className="space-y-12">
        {experience.map((role) => (
          <RoleEntry key={`${role.company}-${role.period}`} role={role} />
        ))}
      </div>
    </AppSection>
  );
}
