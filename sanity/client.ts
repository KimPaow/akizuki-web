import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, studioUrl, viewerToken } from "./env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token: viewerToken,
  perspective: "published",
  stega: {
    studioUrl,
  },
});
