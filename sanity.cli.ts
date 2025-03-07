import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  project: {
    basePath: "/admin",
  },
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "60vbi69u",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  },
  studioHost: "akizuki",
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: false,
});
