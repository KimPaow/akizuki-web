import { defineLive } from "next-sanity";
import { client } from "@/sanity/client";

export const { sanityFetch, SanityLive } = defineLive({
  serverToken: process.env.SANITY_SERVER_TOKEN,
  client: client.withConfig({
    ignoreBrowserTokenWarning: true,
    apiVersion: "vX",
  }),
});
