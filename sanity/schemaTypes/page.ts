import {defineField, defineType} from 'sanity'

export const page = defineType({
  name: 'page',
  title: 'ページ',
  type: 'document',
  fields: [
    defineField({
      title: '工事中',
      description: 'このページの訪問者に「建設中」メッセージを表示するかどうか',
      name: 'wip',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      title: 'タイトル',
      description: 'ページのタイトル',
      name: 'name',
      type: 'string',
    }),
    defineField({
      title: 'スラッグ',
      description: 'URLの一部として使用される一意の識別子',
      name: 'slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: '前置き',
      description: 'ページの内容を説明する短い文章',
      name: 'preamble',
      type: 'text',
    }),
    defineField({
      title: 'コンテンツ',
      description: 'ページの本文',
      name: 'content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          name: 'image',
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
        {
          name: 'file',
          type: 'file',
          fields: [
            {
              name: 'title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    }),
  ],
})
