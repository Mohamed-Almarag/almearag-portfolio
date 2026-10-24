import { AppSection } from "@/components/ui/AppSection";
import { RichText } from "@/components/ui/RichText";
import { profile } from "@/content/profile";

export function Summary() {
  return (
    <AppSection id="summary">
      <p className="leading-relaxed text-muted">
        <RichText value={profile.summary} />
      </p>
    </AppSection>
  );
}
