"use client";

import { default as NextLink } from "next/link";
import type { LinkProps } from "next/link";
import { cva, VariantProps } from "class-variance-authority";
import { useState } from "react";

const link = cva(["font-semibold cursor-pointer"], {
  variants: {
    hover: {
      true: [""],
    },
    variant: {
      default: [""],
      arrow: ["pr-8 relative"],
      nav: ["text-lg relative"],
    },
    underline: {
      true: [""],
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

export interface Props extends LinkProps, VariantProps<typeof link> {
  className?: string;
  children?: React.ReactNode;
}

export const Link: React.FC<Props> = ({
  variant = "default",
  className,
  underline,
  children,
  ...rest
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <NextLink
      className={link({ hover: isHovered, variant, underline, className })}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...rest}
    >
      {children}
      {variant === "arrow" && (
        <span className="text-2xl absolute top-[50%] translate-y-[-60%] right-0">
          →
        </span>
      )}
      {underline && (
        <span
          data-line
          className="absolute bottom-0 translate-y-0 left-0 w-0 h-0.5 bg-foreground transition-[width]"
        />
      )}
    </NextLink>
  );
};

export default Link;
