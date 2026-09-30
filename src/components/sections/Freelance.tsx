import { RoleEntry } from "@/components/sections/RoleEntry";
import { AppSection } from "@/components/ui/AppSection";
import { freelance } from "@/content/freelance";

export function Freelance() {
  return (
    <AppSection id="freelance">
      <div className="space-y-8">
        {freelance.map((role) => (
          <RoleEntry key={`${role.company}-${role.period}`} role={role} />
        ))}
      </div>
    </AppSection>
  );
}
