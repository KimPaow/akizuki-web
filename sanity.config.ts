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
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore This is complaining that "Types of property 'schema' are incompatible."
    visionTool({ defaultApiVersion: apiVersion }),
    esESLocale(),
    jaJPLocale(),
  ],
  schema,
} satisfies Config;

export default defineConfig(config);
