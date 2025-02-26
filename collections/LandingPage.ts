import { GlobalConfig } from "payload";

export const LandingPage: GlobalConfig = {
  slug: "landing-page",
  fields: [
    {
      name: "history",
      type: "group",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "body",
          type: "richText",
          required: true,
          admin: {},
        },
        {
          name: "link",
          type: "relationship",
          relationTo: "pages",
        },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
        },
      ],
    },
    {
      name: "title",
      type: "text",
      required: true,
    },
  ],
};
