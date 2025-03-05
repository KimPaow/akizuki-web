import { Page } from "@/payload-types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface TableOfContentsItem {
  id: string;
  title: string;
  level: number;
}

export function extractTableOfContents(
  content: Content
): TableOfContentsItem[] {
  const toc: TableOfContentsItem[] = [];

  // Traverse through the content nodes
  const traverse = (node: Record<string, unknown>) => {
    if (!node) return;
    if (node.type === "heading" && typeof node.tag === "string") {
      if (
        Array.isArray(node.children) &&
        node.children.length > 0 &&
        node.children.some((c) => typeof c === "object" && "text" in c)
      ) {
      }
      const headingText: string =
        (node.children as { text: string }[])[0].text ?? "";
      if (
        headingText &&
        ["h1", "h2", "h3", "h4", "h5", "h6"].includes(node?.tag)
      ) {
        toc.push({
          id: formatSlug(headingText),
          title: headingText,
          level: Number(node.tag.charAt(1)), // h1 -> 1, h2 -> 2, etc.
        });
      }
    }

    // Recursively traverse children
    if (node.children) {
      if (Array.isArray(node.children)) {
        node.children.forEach(traverse);
      }
    }
  };

  // Start traversal from root
  if (content?.root) {
    traverse(content?.root);
  }

  return toc;
}

type Content = Page["content"];

export function formatSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}
