import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemaTypes";
import { jaJPLocale } from "@sanity/locale-ja-jp";
import { esESLocale } from "@sanity/locale-es-es";
// import {defineDocuments, presentationTool} from 'sanity/presentation'

export default defineConfig({
  name: "default",
  title: "akizuki",
  basePath: "/admin",

  // This is fine since we're more concerned about flexibility than security in this case
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "60vbi69u",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",

  plugins: [
    structureTool(),
    visionTool(),
    esESLocale(),
    jaJPLocale(),
    // presentationTool({
    //   resolve: {
    //     mainDocuments: defineDocuments([
    //       {
    //         route: '/:slug',
    //         filter: `_type == "page" && slug.current == $slug`,
    //       },
    //     ]),
    //   },
    //   previewUrl: {
    //     origin: 'http://localhost:3000',
    //     previewMode: {
    //       enable: '/api/draft-mode/enable',
    //       disable: '/api/draft-mode/disable',
    //     },
    //   },
    // }),
  ],

  schema: {
    types: schemaTypes,
  },
});
