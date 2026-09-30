import { AppSection } from "@/components/ui/AppSection";
import { education } from "@/content/education";

export function Education() {
  return (
    <AppSection id="education">
      <h3 className="font-semibold">{education.degree}</h3>
      <p className="mt-1 text-sm text-muted">
        {education.school} | {education.year}
      </p>
      <p className="mt-1 text-sm text-muted">Grade: {education.grade}</p>
    </AppSection>
  );
}
