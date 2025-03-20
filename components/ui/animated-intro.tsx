"use client";

import { motion } from "motion/react";
import { AnimatedText } from "./animated-text";
import Text from "@/components/ui/text";
import Link from "../ui/link";

export const AnimatedIntro = () => {
  return (
    <motion.div
      animate="visible"
      className="px-8 sm:px-20 mr-auto flex flex-col items-center justify-items-center"
    >
      <Text variant="display">
        <AnimatedText text="AKIZUKI" />
      </Text>
      <Text
        variant="lead"
        color="muted"
        className="mt-4 lg:mt-10 text-center text-lg md:text-xl lg:text-3xl"
      >
        <AnimatedText text="筑前の小京都　|" duration={1} stagger={0.05} />
        {"　"}
        <Link
          underline
          href="https://maps.app.goo.gl/BEsHf75AnMdM8Tpp6"
          target="_blank"
        >
          <AnimatedText text="33°27 N, 130°41 E" duration={1} stagger={0.1} />
        </Link>
      </Text>
    </motion.div>
  );
};
