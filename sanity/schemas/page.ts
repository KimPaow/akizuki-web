import { defineField, defineType } from "sanity";
import richText from "./rich-text";

export const page = defineType({
  name: "page",
  title: "ページ",
  type: "document",
  fields: [
    defineField({
      title: "工事中",
      description: "このページの訪問者に「建設中」メッセージを表示するかどうか",
      name: "wip",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      title: "コンタクトフォーム",
      description: "このページにコンタクトフォームを表示するかどうか",
      name: "contact_form",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      title: "タイトル",
      description: "ページのタイトル",
      name: "name",
      type: "string",
    }),
    defineField({
      title: "スラッグ",
      description: "URLの一部として使用される一意の識別子",
      name: "slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "前置き",
      description: "ページの内容を説明する短い文章",
      name: "preamble",
      type: "text",
    }),
    richText,
    defineField({
      title: "目次",
      description: "ページに目次を表示するかどうか",
      name: "toc",
      type: "boolean",
      initialValue: true,
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
