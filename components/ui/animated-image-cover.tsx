"use client";

import { motion } from "motion/react";

/**
 * Make the parent container relative and add this component as a child to create an animated image cover.
 */
export const AnimatedImageCover = ({
  direction = "ltr",
}: React.ComponentProps<"div"> & {
  direction?: "ltr" | "rtl" | "ttb" | "btt";
}) => {
  const variants = {
    hidden: {
      left: 0,
      top: 0,
      bottom: 0,
      right: 0,
    },
    ltr: { left: "100%" },
    rtl: { right: "100%" },
    btt: { bottom: "100%" },
    ttb: { top: "100%" },
  };

  return (
    <motion.div
      className="absolute bg-background z-[1]"
      variants={variants}
      initial="hidden"
      whileInView={direction}
      // viewport={{ once: true, margin: "10%" }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: "all" }}
    />
  );
};

export default AnimatedImageCover;
