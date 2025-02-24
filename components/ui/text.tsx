import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const typographyVariants = cva([], {
  variants: {
    variant: {
      display: ["font-mincho scroll-m-20 text-4xl md:text-[16rem]"],
      h1: [
        "font-mincho",
        "scroll-m-20",
        "text-4xl",
        "tracking-tight",
        "lg:text-5xl",
      ],
      h2: [
        "mt-10",
        "font-mincho",
        "scroll-m-20",
        "text-3xl",
        "tracking-tight",
        "first:mt-0",
      ],
      h3: [
        "mt-8",
        "font-mincho",
        "scroll-m-20",
        "text-2xl",
        "tracking-tight",
        "first:mt-0",
      ],
      h4: [
        "mt-6",
        "font-mincho",
        "scroll-m-20",
        "text-xl",
        "tracking-tight",
        "first:mt-0",
      ],
      p: ["leading-7 [&:not(:first-child)]:mt-6"],
      large: ["text-lg"],
      small: ["text-sm leading-none"],
      lead: ["text-xl text-muted-foreground"],
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

export interface TypographyProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, "color">,
    VariantProps<typeof typographyVariants> {}

export const Text: React.FC<TypographyProps> = ({
  variant = "p",
  color = "foreground",
  className,
  ...rest
}) => {
  const cn = twMerge(typographyVariants({ variant, color, className }));

  if (variant === "display" || variant === "h1") {
    return <h1 className={cn} {...rest} />;
  }

  if (variant === "h2") {
    return <h2 className={cn} {...rest} />;
  }

  if (variant === "h3") {
    return <h3 className={cn} {...rest} />;
  }

  if (variant === "h4") {
    return <h4 className={cn} {...rest} />;
  }

  return <p className={cn} {...rest} />;
};

export default Text;
