import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

function Header({
  asChild = false,
  ...props
}: React.ComponentProps<"header"> & {
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : "header";

  return (
    <Comp
      data-slot="header"
      className="flex justify-end items-center gap-8 py-4 px-6 fixed top-0 left-0 right-0 z-10"
      {...props}
    />
  );
}

export { Header };
