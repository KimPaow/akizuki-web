"use client";

import { motion, Variants } from "motion/react";

export function AnimatedText({
  text,
  duration = 2.5,
  stagger = 0.15,
}: {
  text: string;
  duration?: number;
  stagger?: number;
  delay?: number;
}) {
  const variants: Variants = {
    hidden: {},
    visible: {
      transition: {
        // delay,
        duration: duration,
        staggerChildren: stagger,
        // when: "beforeChildren",
      },
    },
  };

  const fadeIn: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      filter: "blur(10px)",
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: duration,
        // delay,
      },
    },
  };

  const arr = text.split("");
  return (
    <motion.span
      className="relative"
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      {arr.map((char, index) => (
        <motion.span variants={fadeIn} key={char + index}>
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}
