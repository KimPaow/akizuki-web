import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "60vbi69u",
  dataset: "production",
  apiVersion: "2025-03-05",
  useCdn: true,
  perspective: "published",
});
