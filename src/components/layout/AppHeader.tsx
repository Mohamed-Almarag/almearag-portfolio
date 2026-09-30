import { AppNav } from "@/components/layout/AppNav";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { AppContainer } from "@/components/ui/AppContainer";
import { Icon } from "@/components/ui/Icon";
import { contactLinks } from "@/lib/site";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/85 backdrop-blur-sm">
      <AppContainer className="flex h-16 items-center justify-between gap-6">
        <ul className="-ml-2 flex items-center gap-1">
          {contactLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                aria-label={link.label}
                {...(link.href.startsWith("http") && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                className="grid size-9 place-items-center rounded-md text-muted transition-colors hover:text-foreground"
              >
                <Icon name={link.icon} />
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-5">
          <AppNav />
          <ThemeToggle />
        </div>
      </AppContainer>
    </header>
  );
}
