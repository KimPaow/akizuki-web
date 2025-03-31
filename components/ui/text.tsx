import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import reactNodeToString from "react-node-to-string";

const typographyVariants = cva([""], {
  variants: {
    variant: {
      display: [
        "font-mincho scroll-m-20 tracking-widest text-4xl md:text-9xl lg:text-[8rem] xl:text-[12rem]",
      ],
      h1: [
        "[&:not(:first-child)]:mt-10",
        "font-mincho",
        "scroll-m-20",
        "text-4xl",
        "tracking-tight",
        "lg:text-5xl",
      ],
      h2: [
        "[&:not(:first-child)]:mt-9",
        "font-mincho",
        "scroll-m-20",
        "text-3xl",
        "tracking-tight",
        "first:mt-0",
      ],
      h3: [
        "[&:not(:first-child)]:mt-8",
        "font-mincho",
        "scroll-m-20",
        "text-2xl",
        "tracking-tight",
        "first:mt-0",
      ],
      h4: [
        "[&:not(:first-child)]:mt-8",
        "font-mincho",
        "scroll-m-20",
        "text-xl",
        "tracking-tight",
        "first:mt-0",
      ],
      h5: [
        "[&:not(:first-child)]:mt-8",
        "font-mincho",
        "scroll-m-20",
        "text-lg",
        "tracking-tight",
        "first:mt-0",
      ],
      h6: [
        "[&:not(:first-child)]:mt-8",
        "font-mincho",
        "scroll-m-20",
        "text-base",
        "tracking-tight",
        "first:mt-0",
      ],
      p: ["leading-7 [&:not(:first-child)]:mt-6"],
      large: ["leading-7 text-lg"],
      small: ["text-sm leading-none"],
      lead: ["text-lg text-muted-foreground leading-8"],
    },
    color: {
      foreground: ["text-foreground"],
      muted: ["text-muted-foreground"],
    },
  },
  defaultVariants: {
    variant: "p",
    color: "foreground",
  },
});

export type TypographyVariants = VariantProps<typeof typographyVariants>;
export interface TypographyProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, "color">,
    TypographyVariants {}

export const Text: React.FC<TypographyProps> = ({
  variant = "p",
  color = "foreground",
  className,
  children,
  ...rest
}) => {
  const cn = twMerge(typographyVariants({ variant, color, className }));

  if (variant === "display" || variant === "h1") {
    return (
      <h1 className={cn} id={reactNodeToString(children)} {...rest}>
        {children}
      </h1>
    );
  }

  if (variant === "h2") {
    return (
      <h2 className={cn} id={reactNodeToString(children)} {...rest}>
        {children}
      </h2>
    );
  }

  if (variant === "h3") {
    return (
      <h3 className={cn} id={reactNodeToString(children)} {...rest}>
        {children}
      </h3>
    );
  }

  if (variant === "h4") {
    return (
      <h4 className={cn} id={reactNodeToString(children)} {...rest}>
        {children}
      </h4>
    );
  }

  if (variant === "h5") {
    return (
      <h5 className={cn} id={reactNodeToString(children)} {...rest}>
        {children}
      </h5>
    );
  }

  if (variant === "h6") {
    return (
      <h6 className={cn} id={reactNodeToString(children)} {...rest}>
        {children}
      </h6>
    );
  }

  return (
    <p className={cn} {...rest}>
      {children}
    </p>
  );
};

export default Text;
