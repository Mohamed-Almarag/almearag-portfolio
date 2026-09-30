"use client";

import { useEffect, useState } from "react";
import { navigation } from "@/lib/site";

export function AppNav() {
  const [activeId, setActiveId] = useState<string | null>(
    navigation[0].href.slice(1),
  );

  useEffect(() => {
    const sections = navigation
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((section) => section !== null);
    let frame = 0;

    function update() {
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      const line = window.innerHeight * 0.4;
      const current = atBottom
        ? sections.at(-1)
        : sections.findLast(
            (section) => section.getBoundingClientRect().top <= line,
          );
      setActiveId(current?.id ?? sections[0]?.id ?? null);
    }

    function onScroll() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav aria-label="Sections" className="hidden lg:block">
      <ul className="flex gap-5 text-sm">
        {navigation.map((item) => {
          const isActive = activeId === item.href.slice(1);
          return (
            <li key={item.href}>
              <a
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                className={`transition-colors ${isActive ? "text-accent" : "text-muted hover:text-foreground"}`}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
