import type { Highlight } from "@/content/types";

// The highlight as plain text, for metadata and React keys
export function highlightText(highlight: Highlight): string {
  if (typeof highlight === "string") return highlight;
  return highlight
    .map((part) => (typeof part === "string" ? part : part.label))
    .join("");
}
