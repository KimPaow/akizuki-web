import { Config, defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schema } from "./sanity/schemas";
import { jaJPLocale } from "@sanity/locale-ja-jp";
import { esESLocale } from "@sanity/locale-es-es";
import { apiVersion, dataset, projectId } from "./sanity/env";

const config = {
  name: "default",
  title: "akizuki",
  basePath: "/admin",

  // This is fine since we're more concerned about flexibility than security in this case
  projectId,
  dataset,
  plugins: [
    structureTool(),
    visionTool({ defaultApiVersion: apiVersion }),
    esESLocale(),
    jaJPLocale(),
  ],
  schema,
} satisfies Config;

export default defineConfig(config);
