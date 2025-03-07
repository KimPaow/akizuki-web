import { defineLive } from "next-sanity";
import { client } from "@/sanity/client";
import { apiVersion, viewerToken } from "./env";

export const { sanityFetch, SanityLive } = defineLive({
  browserToken: viewerToken,
  serverToken: viewerToken,
  client: client.withConfig({
    ignoreBrowserTokenWarning: true,
    apiVersion,
  }),
});
