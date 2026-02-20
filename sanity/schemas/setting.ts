import { defineField, defineType } from "sanity";

export const settings = defineType({
  name: "settings",
  title: "設定",
  type: "document",
  options: {
    canvasApp: {
      exclude: true,
    },
  },
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
      title: "スライドショーの画像",
      type: "array",
      name: "slideshow_images",
      of: [{ type: "image" }],
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
    defineField({
      title: "メールアドレス",
      name: "email",
      type: "email",
    }),
    defineField({
      title: "電話番号",
      name: "phone",
      type: "string",
    }),
  ],
});
