import { client } from "@/sanity/client";
import { viewerToken } from "@/sanity/env";
import { defineEnableDraftMode } from "next-sanity/draft-mode";

export const { GET } = defineEnableDraftMode({
  client: client.withConfig({
    token: viewerToken,
  }),
});
