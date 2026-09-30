import { AppContainer } from "@/components/ui/AppContainer";
import { profile } from "@/content/profile";

export function AppFooter() {
  return (
    <footer className="border-t border-border">
      <AppContainer className="py-8 text-sm text-muted">
        &copy; {new Date().getFullYear()} {profile.name}
      </AppContainer>
    </footer>
  );
}
