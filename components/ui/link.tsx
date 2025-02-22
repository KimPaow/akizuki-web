"use client";

import { default as NextLink } from "next/link";
import type { LinkProps } from "next/link";
import { cva, VariantProps } from "class-variance-authority";
import { useState } from "react";

const link = cva(["font-semibold pr-8"], {
  variants: {
    hover: {
      true: ["border-b-2 border-current"],
    },
    decorator: {
      true: ["relative"],
      false: [],
    },
  },
});

export interface Props extends LinkProps, VariantProps<typeof link> {
  className?: string;
  children?: React.ReactNode;
}

export const Link: React.FC<Props> = ({
  decorator = true,
  className,
  children,
  ...rest
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <NextLink
      data-decorator={decorator}
      className={link({ hover: isHovered, decorator, className })}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...rest}
    >
      {children}
      {decorator && (
        <span className="text-2xl absolute top-[50%] translate-y-[-60%] right-0">
          →
        </span>
      )}
    </NextLink>
  );
};

export default Link;
