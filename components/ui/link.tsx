"use client";

import { default as NextLink } from "next/link";
import type { LinkProps } from "next/link";
import { cva, VariantProps } from "class-variance-authority";
import { useState } from "react";

const link = cva(["font-medium cursor-pointer inline-block"], {
  variants: {
    hover: {
      true: [""],
    },
    variant: {
      default: [""],
      arrow: ["pr-8 relative"],
      nav: [
        "text-history py-4 px-8 font-mincho text-4xl md:text-6xl hover:!text-background",
      ],
      logo: ["py-2 px-2 font-mincho text-history text-lg text-background"],
    },
    underline: {
      true: ["relative"],
    },
    color: {
      default: ["text-current"],
      primary: ["text-primary"],
      secondary: ["text-secondary"],
    },
  },
  compoundVariants: [
    {
      underline: true,
      hover: true,
      class: "**:data-line:w-full",
    },
  ],
});

export interface Props
  extends LinkProps,
    VariantProps<typeof link>,
    Omit<React.ComponentProps<"a">, "href" | "color"> {
  className?: string;
  children?: React.ReactNode;
}

export const Link: React.FC<Props> = ({
  variant = "default",
  className,
  underline,
  color = "default",
  children,
  ...rest
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <NextLink
      className={link({
        hover: isHovered,
        variant,
        underline,
        color,
        className,
      })}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...rest}
    >
      {children}
      {variant === "arrow" && (
        <span className="text-history text-2xl absolute top-[50%] translate-y-[-60%] right-0">
          →
        </span>
      )}
      {underline && (
        <span
          data-line
          className="absolute bottom-0 translate-y-1 left-0 w-0 h-0.5 bg-current transition-[width]"
        />
      )}
    </NextLink>
  );
};

export default Link;
