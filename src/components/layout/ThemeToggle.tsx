"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";

export function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  function toggle() {
    document.documentElement.classList.toggle("light", !isLight);
    setIsLight(!isLight);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
      className="grid size-9 place-items-center rounded-md text-muted transition-colors hover:text-foreground"
    >
      <Icon name={isLight ? "moon" : "sun"} />
    </button>
  );
}
