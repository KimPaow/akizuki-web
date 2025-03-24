import { cva, VariantProps } from "class-variance-authority";
import Text from "@/components/ui/text";

const pill = cva(["rounded-full px-3 py-1 ring-1"], {
  variants: {
    variant: {
      summer: ["bg-summer ring-summer"],
      winter: ["bg-winter ring-winter"],
      spring: ["bg-spring ring-spring"],
      autumn: ["bg-autumn ring-autumn"],
      water: ["bg-water ring-water"],
      sun: ["bg-sun ring-sun"],
      history: ["bg-history ring-history"],
    },
    outline: {
      true: ["!bg-background [&>p]:!text-foreground"],
    },
  },
});

export type PillVariants = VariantProps<typeof pill>;

export interface Props extends React.ComponentProps<"div">, PillVariants {
  className?: string;
  children?: React.ReactNode;
}

export const Pill: React.FC<Props> = ({
  className,
  variant,
  outline,
  children,
  ...props
}) => {
  return (
    <div className={pill({ variant, outline, className })} {...props}>
      <Text className="text-dark text-sm font-medium opacity-80">
        {children}
      </Text>
    </div>
  );
};

export default Pill;
