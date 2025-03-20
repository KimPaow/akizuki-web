import { defineField } from "sanity";
import { LinkIcon, LaunchIcon } from "@sanity/icons";

export default defineField({
  title: "コンテンツ",
  description: "ページの本文",
  name: "content",
  type: "array",
  of: [
    {
      type: "block",
      marks: {
        annotations: [
          {
            name: "internalLink",
            type: "object",
            title: "Internal link",
            icon: LinkIcon,
            fields: [
              {
                name: "reference",
                type: "reference",
                title: "Reference",
                to: [{ type: "page" }, { type: "experience" }],
              },
            ],
          },
          {
            name: "externalLink",
            type: "object",
            title: "External link",
            icon: LaunchIcon,
            fields: [
              {
                name: "href",
                type: "url",
                title: "URL",
              },
              {
                title: "Open in new tab",
                name: "blank",
                description: "Read https://css-tricks.com/use-target_blank/",
                type: "boolean",
              },
            ],
          },
        ],
      },
    },
    {
      name: "image",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: "file",
      type: "file",
      fields: [
        {
          name: "title",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
      ],
    },
  ],
});
