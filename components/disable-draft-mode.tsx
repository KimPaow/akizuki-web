// src/components/DisableDraftMode.tsx

"use client";

import { useDraftModeEnvironment } from "next-sanity/hooks";

export function DisableDraftMode() {
  const environment = useDraftModeEnvironment();

  // Only show the disable draft mode button when outside of Presentation Tool
  if (environment !== "live" && environment !== "unknown") {
    return null;
  }

  return (
    // eslint-disable-next-line @next/next/no-html-link-for-pages
    <a
      href="/api/draft-mode/disable"
      className="fixed bottom-4 right-4 bg-black px-4 py-2 color-foreground rounded-md hover:bg-gray-900 cursor-pointer"
    >
      Exit edit mode
    </a>
  );
}
