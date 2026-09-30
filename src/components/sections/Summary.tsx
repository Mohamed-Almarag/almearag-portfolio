import { AppSection } from "@/components/ui/AppSection";
import { profile } from "@/content/profile";

export function Summary() {
  return (
    <AppSection id="summary">
      <p className="leading-relaxed text-muted">{profile.summary}</p>
    </AppSection>
  );
}
