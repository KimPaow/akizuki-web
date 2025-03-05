import type { CollectionConfig } from "payload";

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: { en: "Title", ja: "タイトル" },
      required: true,
    },
    {
      name: "preamble",
      type: "text",
      label: { en: "Preamble", ja: "前置き" },
    },
    {
      name: "content",
      type: "richText",
      label: { en: "Content", ja: "内容" },
    },
  ],
};
