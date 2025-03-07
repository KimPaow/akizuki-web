"use client";

import { NextStudio } from "next-sanity/studio";
import sanityConfig from "@/sanity.config";

export default function AdminPage() {
  return (
    <html>
      <body>
        <NextStudio config={sanityConfig} />
      </body>
    </html>
  );
}
