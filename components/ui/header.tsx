"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
// import { ModeToggle } from "@/components/ui/mode-toggle";
import Link from "@/components/ui/link";
import { links } from "@/data/links";
import { usePathname } from "next/navigation";

function Header({
  asChild = false,
  ...props
}: React.ComponentProps<"header"> & {
  asChild?: boolean;
}) {
  const pathname = usePathname();
  const Comp = asChild ? Slot : "header";

  return (
    <Comp
      data-slot="header"
      className="flex justify-end items-center gap-8 py-4 px-6 fixed top-0 left-0 right-0 z-10"
      {...props}
    >
      <Link href="/" variant="nav" className="mr-auto flex items-center gap-2">
        <span className="text-4xl">●</span>
      </Link>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          variant="nav"
          underline
          className={pathname !== link.href ? "opacity-50" : ""}
        >
          {link.text}
        </Link>
      ))}
      {/* <ModeToggle /> */}
    </Comp>
  );
}

export { Header };
