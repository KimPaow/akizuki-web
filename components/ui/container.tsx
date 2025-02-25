import { cn } from "@/lib/utils";
import * as React from "react";

export function Container({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("w-full max-w-[1600px] px-4 md:px-8 mx-8 my-8", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export default Container;
