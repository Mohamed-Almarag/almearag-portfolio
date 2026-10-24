import type { Highlight } from "@/content/types";

// The highlight as plain text, for metadata and React keys
export function highlightText(highlight: Highlight): string {
  if (typeof highlight === "string") return highlight;
  return highlight
    .map((part) => {
      if (typeof part === "string") return part;
      if ("bold" in part)
        return typeof part.bold === "string" ? part.bold : part.bold.label;
      return part.label;
    })
    .join("");
}
