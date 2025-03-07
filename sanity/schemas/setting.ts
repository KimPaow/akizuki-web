import { defineField, defineType } from "sanity";

export const settings = defineType({
  name: "settings",
  title: "設定",
  type: "document",
  fields: [
    defineField({
      title: "Main Menu",
      name: "menu",
      type: "array",
      of: [
        {
          type: "reference",
          title: "内部リンク",
          name: "internalLink",
          to: [{ type: "page" }],
        },
        {
          title: "外部リンク",
          name: "externalLink",
          type: "object",
          fields: [
            { type: "string", title: "タイトル", name: "title" },
            { type: "string", title: "URL", name: "url" },
            {
              title: "Open in new tab",
              name: "blank",
              description: "Read https://css-tricks.com/use-target_blank/",
              type: "boolean",
            },
          ],
        },
      ],
    }),
    defineField({
      title: "ソーシャルリンク",
      name: "socials",
      type: "array",
      of: [
        {
          title: "外部リンク",
          name: "externalLink",
          type: "object",
          fields: [
            { type: "string", title: "タイトル", name: "title" },
            { type: "string", title: "URL", name: "url" },
          ],
        },
      ],
    }),
  ],
});
