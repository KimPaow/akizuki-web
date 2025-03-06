import Link from "@/components/ui/link";
import Image from "next/image";
import {
  PortableText as SanityPortableText,
  PortableTextReactComponents,
  PortableTextProps,
} from "next-sanity";
import { SanityImageAsset } from "@/sanity/types";
import { Text } from "@/components/ui/text";

const components: Partial<PortableTextReactComponents> = {
  block: {
    normal: ({ children }) => <Text variant="p">{children}</Text>,
    h1: ({ children }) => <Text variant="h1">{children}</Text>,
    h2: ({ children }) => <Text variant="h2">{children}</Text>,
    h3: ({ children }) => <Text variant="h3">{children}</Text>,
    h4: ({ children }) => <Text variant="h4">{children}</Text>,
    h5: ({ children }) => <Text variant="h5">{children}</Text>,
    h6: ({ children }) => <Text variant="h6">{children}</Text>,
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => <ul>{children}</ul>,
    number: ({ children }) => <ol>{children}</ol>,

    // Ex. 2: rendering custom lists
    checkmarks: ({ children }) => (
      <ol className="m-auto text-lg">{children}</ol>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value || !value.asset) return null;

      const { url, metadata }: SanityImageAsset = value.asset;

      if (
        !url ||
        !metadata ||
        !metadata.dimensions ||
        !metadata.dimensions.width ||
        !metadata.dimensions.height
      ) {
        return null;
      }

      return (
        <Image
          src={url}
          alt=""
          width={metadata.dimensions.width}
          height={metadata.dimensions.height}
          className="my-4"
        />
      );
    },
    file: ({ value }) => {
      if (!value || !value.asset || !value.title) return null;

      return (
        <div className="my-2 [&:not(:first-child)]:mt-4 ">
          <a
            href={value.asset.url}
            download={value.asset.originalFilename}
            className="bg-transparent border-primary border-2 rounded-sm p-2 cursor-pointer inline-block"
          >
            {value.title}
          </a>
        </div>
      );
    },
  },
  marks: {
    link: ({ value, children }) => {
      const { blank, href } = value;
      return (
        <Link
          className="text-primary"
          href={href}
          underline
          {...(blank ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {children}
        </Link>
      );
    },
  },
};

export interface Props {
  value: unknown;
}

export function PortableText({ value, ...props }: PortableTextProps) {
  return (
    <SanityPortableText value={value} components={components} {...props} />
  );
}
