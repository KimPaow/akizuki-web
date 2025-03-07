import { defineConfig, PluginOptions, SingleWorkspace } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schema } from "./sanity/schemas";
import { jaJPLocale } from "@sanity/locale-ja-jp";
import { esESLocale } from "@sanity/locale-es-es";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { presentationTool } from "sanity/presentation";
import {
  singletonActions,
  singletonTypes,
  structure,
} from "./sanity/structure";

const plugins: PluginOptions[] = [
  structureTool(structure),
  // Vision is a tool that lets you query your content with GROQ in the studio
  // https://www.sanity.io/docs/the-vision-plugin
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore This is complaining that "Types of property 'schema' are incompatible."
  visionTool({ defaultApiVersion: apiVersion }),
  esESLocale(),
  jaJPLocale(),
  presentationTool({
    previewUrl: {
      previewMode: {
        enable: "/api/draft-mode/enable",
      },
    },
  }),
];

const config = {
  name: "default",
  title: "akizuki",
  basePath: "/admin",
  projectId,
  dataset,
  plugins,
  schema,
  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
} satisfies SingleWorkspace;

export default defineConfig(config);
