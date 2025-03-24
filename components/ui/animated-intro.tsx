"use client";

import { motion } from "motion/react";
import Text from "@/components/ui/text";
import Link from "../ui/link";

export const AnimatedIntro = () => {
  return (
    <motion.div
      animate="visible"
      className="px-8 sm:px-20 mr-auto flex flex-col items-center justify-items-center"
    >
      <Text className="text-center text-9xl text-light">●</Text>
      <Text className="mt-4 lg:mt-10 text-center text-lg md:text-xl lg:text-xl text-light">
        筑前の小京都　|　
        <Link
          underline
          href="https://maps.app.goo.gl/BEsHf75AnMdM8Tpp6"
          target="_blank"
        >
          33°27 N, 130°41 E
        </Link>
      </Text>
    </motion.div>
  );
};
