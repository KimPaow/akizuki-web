import { defineField, defineType } from "sanity";
import richText from "./rich-text";

export const page = defineType({
  name: "page",
  title: "ページ",
  type: "document",
  options: {
    canvasApp: {
      purpose:
        "General content page for public website copy, including long-form editorial text.",
    },
  },
  fields: [
    defineField({
      title: "工事中",
      description: "このページの訪問者に「建設中」メッセージを表示するかどうか",
      name: "wip",
      type: "boolean",
      initialValue: false,
      options: {
        canvasApp: {
          exclude: true,
        },
      },
    }),
    defineField({
      title: "コンタクトフォーム",
      description: "このページにコンタクトフォームを表示するかどうか",
      name: "contact_form",
      type: "boolean",
      initialValue: false,
      options: {
        canvasApp: {
          exclude: true,
        },
      },
    }),
    defineField({
      title: "タイトル",
      description: "ページのタイトル",
      name: "name",
      type: "string",
      options: {
        canvasApp: {
          purpose: "Main page title shown in content lists and page headers.",
        },
      },
    }),
    defineField({
      title: "スラッグ",
      description: "URLの一部として使用される一意の識別子",
      name: "slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        canvasApp: {
          purpose:
            "URL slug for routing. Keep short, stable, and human-readable.",
        },
      },
    }),
    defineField({
      title: "前置き",
      description: "ページの内容を説明する短い文章",
      name: "preamble",
      type: "text",
      options: {
        canvasApp: {
          purpose:
            "Short introductory summary that appears before the main content.",
        },
      },
    }),
    richText,
    defineField({
      title: "目次",
      description: "ページに目次を表示するかどうか",
      name: "toc",
      type: "boolean",
      initialValue: true,
      options: {
        canvasApp: {
          exclude: true,
        },
      },
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "slug.current",
      media: "image",
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle,
        media: undefined,
      };
    },
  },
});
