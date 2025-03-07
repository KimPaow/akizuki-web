import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemaTypes";
import { jaJPLocale } from "@sanity/locale-ja-jp";
import { esESLocale } from "@sanity/locale-es-es";

const config = {
  name: "default",
  title: "akizuki",
  basePath: "/admin",

  // This is fine since we're more concerned about flexibility than security in this case
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "60vbi69u",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",

  plugins: [structureTool(), visionTool(), esESLocale(), jaJPLocale()],

  schema: {
    types: schemaTypes,
  },
};

export default defineConfig(config);
