import { defineField, defineType } from "sanity";
import richText from "./rich-text";

export const experience = defineType({
  name: "experience",
  title: "観光",
  type: "document",
  groups: [
    { name: "information", title: "情報" },
    { name: "editorial", title: "編集" },
  ],
  fields: [
    defineField({
      title: "リストに表示",
      description:
        "この項目が真実であれば、観光ページの体験リストに表示されます",
      name: "wip",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      title: "タイトル",
      description: "ページのタイトル",
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
      group: "editorial",
    }),
    defineField({
      title: "スラッグ",
      description: "URLの一部として使用される一意の識別子",
      name: "slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      group: "editorial",
    }),
    defineField({
      title: "前置き",
      description: "ページの内容を説明する短い文章",
      name: "introduction",
      type: "text",
      group: "editorial",
    }),
    richText,
    defineField({
      title: "目次",
      description: "ページに目次を表示するかどうか",
      name: "toc",
      type: "boolean",
      initialValue: true,
      group: "editorial",
    }),
    defineField({
      title: "カテゴリー",
      name: "categories",
      type: "array",
      of: [{ type: "string" }],
      group: "editorial",
      options: {
        layout: "list",
        list: [
          { title: "文化", value: "Culture" },
          { title: "自然", value: "Nature" },
          { title: "食事", value: "Food" },
          { title: "買い物", value: "Shopping" },
          { title: "宿泊", value: "Accommodation" },
          { title: "体験", value: "Experience" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "写真",
      name: "image",
      type: "image",
      group: "editorial",
    }),
    defineField({
      title: "ウェブサイト",
      name: "website",
      type: "url",
      group: "information",
    }),
    defineField({
      title: "メールアドレス",
      name: "email",
      type: "email",
      group: "information",
    }),
    defineField({
      title: "電話番号",
      name: "phone",
      type: "string",
      group: "information",
    }),
    defineField({
      title: "営業時間",
      name: "hours",
      type: "text",
      group: "information",
    }),
    defineField({
      title: "価格帯",
      name: "pricerange",
      type: "string",
      group: "information",
    }),
    defineField({
      title: "住所",
      name: "address",
      type: "string",
      group: "information",
    }),
    defineField({
      title: "場所",
      name: "location",
      type: "geopoint",
      group: "information",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "slug.current",
      media: "image",
    },
  },
});
