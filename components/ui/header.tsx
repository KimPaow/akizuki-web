"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
// import { ModeToggle } from "@/components/ui/mode-toggle";
import Link from "@/components/ui/link";
import { usePathname } from "next/navigation";
import { Button } from "./button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, Variants } from "motion/react";
import { LayoutQueryResult } from "@/sanity/types";

const MotionLink = motion.create(Link);
const MotionButton = motion.create(Button);

const menu: Variants = {
  visible: {
    width: "50vw",
    display: "block",
    transition: {
      when: "beforeChildren",
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
  hidden: {
    width: "0",
    display: "none",
    transition: {
      duration: 0.5,
      delay: 1,
      staggerChildren: 0.1,
    },
  },
};

const menuItem: Variants = {
  visible: {
    opacity: "100%",
    transition: {
      duration: 0.5,
    },
  },
  hidden: {
    opacity: "0",
    transition: {
      duration: 0.5,
    },
  },
};

function Header({
  asChild = false,
  data,
  ...props
}: React.ComponentProps<"header"> & {
  asChild?: boolean;
  data?: NonNullable<LayoutQueryResult>["menu"];
}) {
  const Comp = asChild ? Slot : "header";
  const pathname = usePathname();
  const [isOpen, setOpen] = useState(false);
  // const [hoveredLinkIndex, setHoveredLinkIndex] = useState<number | undefined>(
  //   undefined
  // );

  return (
    <Comp
      data-slot="header"
      className="flex justify-end items-center gap-8 py-4 px-4 sm:px-6 fixed top-0 w-screen z-10"
      {...props}
    >
      <MotionLink
        href="/"
        variant="logo"
        className="z-50 mr-auto flex items-center gap-2"
        transition={{ duration: 0.2, delay: 0.2 }}
        onClick={() => setOpen(false)}
      >
        <span className="text-4xl">●</span>
      </MotionLink>
      <MotionButton
        variant="ghost"
        className="z-50 text-lg text-history"
        onClick={() => setOpen(!isOpen)}
        transition={{ duration: 0.2, delay: 0.2 }}
      >
        {isOpen ? "Close" : "Menu"}
      </MotionButton>
      {/* <ModeToggle /> */}
      <div className=" fixed w-[100vw] h-screen left-0 right-0 top-0 pointer-events-none">
        <motion.div
          variants={menu}
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          className={cn(
            "z-50 fixed left-0 w-0 top-0 bottom-0 bg-foreground flex flex-col gap-8 items-center justify-center h-full pointer-events-auto"
          )}
        >
          <div className="absolute left-[50%] md:left-[100%] top-[50%] translate-y-[-50%] translate-x-[-25%] md:translate-x-[-50%] flex flex-col gap-8 w-[200%] max-w-[200%] md:max-w-[100%]">
            {data?.map((link) => {
              if (link._type === "externalLink") {
                return (
                  <MotionLink
                    key={link._key}
                    href={link.url}
                    variants={menuItem}
                    variant="nav"
                    className={cn(pathname === link.url && "!text-background")}
                    onClick={() => setOpen(false)}
                  >
                    {link.title}
                  </MotionLink>
                );
              } else {
                const internalLink = link as unknown as {
                  slug: { current: string };
                  name: string;
                  _id: string;
                };
                return (
                  <MotionLink
                    key={internalLink._id}
                    href={`/${internalLink.slug?.current}`}
                    variants={menuItem}
                    variant="nav"
                    className={cn(
                      pathname === `/${internalLink.slug?.current}` &&
                        "!text-background"
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {internalLink.name}
                  </MotionLink>
                );
              }
            })}
          </div>
        </motion.div>
        <motion.div
          variants={menu}
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          className={cn(
            "z-40 fixed right-0 w-0 top-0 bottom-0 bg-foreground flex justify-center items-center"
          )}
        />
        {/* <Image
            src={`/images/menu/${
              hoveredLinkIndex ? hoveredLinkIndex + 1 : "default"
            }.webp`}
            alt="Akizuki in spring"
            width={631}
            height={962}
            className="z-50 object-cover my-auto hidden md:inline-block pr-32"
          /> */}
      </div>
    </Comp>
  );
}

export { Header };
