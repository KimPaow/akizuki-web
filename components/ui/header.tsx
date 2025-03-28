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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 200.4 56.7"
          fill="currentColor"
          className="text-history"
          width={150}
          // height={56}
        >
          <path d="M45.6,30.9c.4,3.7-.2,7.8.2,11.4.4,3.2,2.7,3.8,3.1.2.3-2.9,0-7.2-.3-10.2-.1-1.7-.3-5.4-1.1-6.8-.2-.4-.7-.9-1.1-1.2-3.1-2.1-12.2-.8-16.4-1.2-2.8-.2-2.4-3.6-2.3-5.2.1-1.7,1-4.2.7-5.8s-1.7-1.6-2.5,0c-1.1,2.2-1.6,8.5-.8,10.7.5,1.3,2.1,2.5,3.9,2.7,3.6.4,8.2-.2,12,0,1,0,2.8.4,3.4,1,.7.6.9,3.5,1,4.4h0ZM18.6,12.2c-1.2,2.6-.8,7.3-.8,10.1,0,3.1-.8,7.9,4.7,8.4,4.4.4,9.6-.4,14,.3,2.3.4,2.7,2.1,2,3.5-1.1,2.4-6.1,4.2-9,5.2-2.4.8-9.2,2.1-10.7,3-1.2.8-.7,1.7.8,1.8,1.4,0,7.8-1.7,9.5-2.2,4.5-1.3,12.6-4.4,12.8-8.6.1-3.1-1.8-4.8-5.8-5.1-4.1-.4-8.9.2-12.7-.2-1.3-.1-2.1-.8-2.3-1.7-.7-3.3-.5-7.2-.3-10.5,0-1,1.3-5-.9-5.1-.8,0-1.2.7-1.5,1.2h0ZM55.4,43c.7-5,.6-16.7-1.3-21.4-2.2-5.2-12.5-3-17.9-3.5-1.8-.3-1.2-2.4.6-2.8,2.3-.6,9.3-.3,12.1-.3,1.2,0,4.8.7,5.5-.4.6-1-.6-1.3-1.6-1.5-3.1-.7-14.6-.8-17.5,0-1.8.5-2.9,1.6-3.2,3-1.2,6,6.6,4,11.6,4,1,0,2.8.1,3.8.2,4.1.4,4.2,1.9,4.7,4.6.9,5.4.5,10.9.3,16.3,0,.8,0,4.7,2.3,3.3.4-.3.7-1.2.8-1.7h0Z" />
          <path d="M54.7,44.7c.4-.3.7-1.2.8-1.7.7-5,.6-16.7-1.3-21.4-2.2-5.2-12.5-3-17.9-3.5-1.8-.3-1.2-2.4.6-2.8,2.3-.6,9.3-.3,12.1-.3,1.2,0,4.8.7,5.5-.4.6-1-.6-1.3-1.6-1.5-3.1-.7-14.6-.8-17.5,0-1.8.5-2.9,1.6-3.2,3-1.2,6,6.6,4,11.6,4,1,0,2.8.1,3.8.2,4.1.4,4.2,1.9,4.7,4.6.9,5.4.5,10.9.3,16.3,0,.8,0,4.7,2.3,3.3h0Z" />
          <path d="M20.1,11c-.8,0-1.2.7-1.5,1.2-1.2,2.6-.8,7.3-.8,10.1,0,3.1-.8,7.9,4.7,8.4,4.4.4,9.6-.4,14,.3,2.3.4,2.7,2.1,2,3.5-1.1,2.4-6.1,4.2-9,5.2-2.4.8-9.2,2.1-10.7,3-1.2.8-.7,1.7.8,1.8,1.4,0,7.8-1.7,9.5-2.2,4.5-1.3,12.6-4.4,12.8-8.6.1-3.1-1.8-4.8-5.8-5.1-4.1-.4-8.9.2-12.7-.2-1.3-.1-2.1-.8-2.3-1.7-.7-3.3-.5-7.2-.3-10.5,0-1,1.3-5-.9-5.1h0Z" />
          <path d="M44.6,26.5c.7.6.9,3.5,1,4.4.4,3.7-.2,7.8.2,11.4.4,3.2,2.7,3.8,3.1.2.3-2.9,0-7.2-.3-10.2-.1-1.7-.3-5.4-1.1-6.8-.2-.4-.7-.9-1.1-1.2-3.1-2.1-12.2-.8-16.4-1.2-2.8-.2-2.4-3.6-2.3-5.2.1-1.7,1-4.2.7-5.8s-1.7-1.6-2.5,0c-1.1,2.2-1.6,8.5-.8,10.7.5,1.3,2.1,2.5,3.9,2.7,3.6.4,8.2-.2,12,0,1,0,2.8.4,3.4,1h0Z" />
          <path d="M73.5,20.4h2.1l6.4,15h-2.4l-.9-2.1h-8.4l-.9,2.1h-2.4s6.4-15,6.4-15ZM77.9,31.1l-3.3-7.9-3.3,7.9h6.6Z" />
          <path d="M87.8,20.4h2.4v10l9.7-9.9h3l-4.4,4.6,4.5,10.4h-2.7l-3.7-8.6-6.5,6.7v1.9h-2.4s0-15,0-15Z" />
          <path d="M108.8,20.4h2.4v15h-2.4s0-15,0-15Z" />
          <path d="M118,33l12-10.5h-12v-2.1h15.1v2.3l-11.9,10.5h11.8v2.1h-15v-2.3h0Z" />
          <path d="M139.4,29v-8.6h2.4v8.8c0,2.3,1.8,4.1,4.2,4.1s4.1-1.8,4.1-4.1v-8.8h2.4v8.6c0,3.9-3,6.5-6.7,6.5s-6.4-2.6-6.4-6.5h0Z" />
          <path d="M159.2,20.4h2.4v10l9.7-9.9h3l-4.4,4.6,4.5,10.4h-2.7l-3.7-8.6-6.4,6.7v1.9h-2.4v-15h0Z" />
          <path d="M180.3,20.4h2.4v15h-2.4v-15Z" />
        </svg>
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
