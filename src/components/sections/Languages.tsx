import { AppSection } from "@/components/ui/AppSection";
import { languages } from "@/content/languages";

export function Languages() {
  return (
    <AppSection id="languages">
      <ul className="space-y-1">
        {languages.map((language) => (
          <li key={language.name}>
            {language.name}{" "}
            <span className="text-muted">({language.level})</span>
          </li>
        ))}
      </ul>
    </AppSection>
  );
}
