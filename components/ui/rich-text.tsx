"use client";
import type {
  DefaultNodeTypes,
  SerializedUploadNode,
} from "@payloadcms/richtext-lexical";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

import {
  type JSXConvertersFunction,
  RichText,
} from "@payloadcms/richtext-lexical/react";
import Image from "next/image";
import React from "react";
import Text from "@/components/ui/text";
import type { TypographyVariants } from "@/components/ui/text";
import Link from "@/components/ui/link";
import { Divider } from "@/components/ui/divider";
import { formatSlug } from "@/lib/utils";
import { Media } from "@/payload-types";

type NodeTypes = DefaultNodeTypes;

// Custom upload converter component that uses next/image
const CustomUploadComponent: React.FC<{
  node: SerializedUploadNode;
}> = ({ node }) => {
  if (node.relationTo === "media") {
    const uploadDoc = node.value;
    if (typeof uploadDoc === "string" || typeof uploadDoc === "number") {
      return null;
    }
    const media = uploadDoc as unknown as Media;

    // Handle PDFs
    if (media.mimeType === "application/pdf") {
      const { alt, url, filename } = media;

      if (!alt || !filename || !url) {
        return null;
      }

      return (
        <div className="my-2 [&:not(:first-child)]:mt-4 ">
          <a
            href={url}
            download={filename}
            className="bg-transparent border-primary border-2 rounded-sm p-2 cursor-pointer inline-block"
          >
            {alt}
          </a>
        </div>
      );
    }

    // Handle images
    if (media.mimeType?.startsWith("image/")) {
      const { alt, height, url, width } = media;

      if (!height || !width || !url) {
        return null;
      }
      console.log("image url", url);
      return (
        <Image
          src={process.env.WEBSITE_URL + url}
          alt={alt ?? ""}
          className="my-4"
          height={height ?? 500}
          width={width ?? 1000}
        />
      );
    }
  }

  return null;
};

type Headings = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
const headingTags: Record<Headings, TypographyVariants["variant"]> = {
  h1: "h2",
  h2: "h3",
  h3: "h4",
  h4: "h5",
  h5: "h6",
  h6: "h6",
};

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({
  defaultConverters,
}) => ({
  ...defaultConverters,
  // Override the default upload converter
  upload: ({ node }) => {
    return <CustomUploadComponent node={node} />;
  },
  paragraph: ({ node, nodesToJSX }) => {
    const children = nodesToJSX({
      nodes: node.children,
    });
    return <Text variant="p">{children}</Text>;
  },
  heading: ({ node, nodesToJSX }) => {
    const children = nodesToJSX({
      nodes: node.children,
    });

    // Generate id from heading text
    const text = children?.toString() || "";
    const id = formatSlug(text);

    return (
      <Text id={id} variant={headingTags[node.tag]}>
        {children}
      </Text>
    );
  },
  link: ({ node, nodesToJSX }) => {
    const children = nodesToJSX({
      nodes: node.children,
    });
    if (!node.fields.url) {
      return null;
    }
    return (
      <Link href={node.fields.url} underline color="primary">
        {children}
      </Link>
    );
  },
  horizontalrule: () => {
    return <Divider decorative className="my-4" />;
  },
  quote: ({ node, nodesToJSX }) => {
    const children = nodesToJSX({
      nodes: node.children,
    });
    return (
      <blockquote className="mt-6 border-l-2 border-primary pl-6 italic text-muted-foreground">
        {children}
      </blockquote>
    );
  },
});

export const CustomizedRichText: React.FC<{
  data: SerializedEditorState;
}> = ({ data }) => {
  return <RichText converters={jsxConverters} data={data} />;
};
