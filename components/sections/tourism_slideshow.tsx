"use client";

import Image from "next/image";
import Text from "@/components/ui/text";
import { Link } from "@/components/ui/link";
import { Container } from "@/components/ui/container";
import { motion, Variants } from "motion/react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Category, categoryColors, categoryJA } from "@/lib/domain/category";

const slides: {
  src: string;
  alt: string;
  category: Category;
  link: string;
}[] = [
  {
    src: "/images/landing/kanvas.webp",
    alt: "Renovated historical building in Akizuki",
    category: "Food",
    link: "/tourism?categories=Food",
  },
  {
    src: "/images/landing/gun.webp",
    alt: "Renovated historical building in Akizuki",
    category: "Culture",
    link: "/tourism?categories=Culture",
  },
  {
    src: "/images/landing/stairs.webp",
    alt: "Renovated historical building in Akizuki",
    category: "Nature",
    link: "/tourism?categories=Nature",
  },
];

const MotionLink = motion(Link);

const showCoverDuration = 0.5;
const hideTextDuration = 0.2;

const coverVariants: Variants = {
  hidden: {
    top: "100%",
    right: 0,
    left: 0,
    transition: {
      duration: showCoverDuration,
      delay: hideTextDuration,
    },
  },
  visible: { top: 0 },
};

const contentVariants: Variants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: hideTextDuration,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      delay: showCoverDuration - 0.1,
    },
  },
};

interface SlideProps {
  src: string;
  alt: string;
  category: Category;
  link: string;
}

const Slide = ({
  src,
  alt,
  category,
  link,
  className,
}: SlideProps & React.ComponentProps<"div">) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <MotionLink
      href={link}
      className={cn(
        "aspect-2/3 rounded-full overflow-hidden relative cursor-pointer",
        className
      )}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className={`absolute bg-${categoryColors[category]} z-[1] h-full rounded-full flex flex-col gap-4 items-start justify-center`}
        variants={coverVariants}
        initial="hidden"
        animate={isHovered ? "visible" : "hidden"}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <motion.div
          className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[2] flex flex-col items-center justify-center h-full`}
          variants={contentVariants}
          initial="hidden"
          animate={isHovered ? "visible" : "hidden"}
        >
          <Text variant="h3" className="text-pill text-6xl opacity-80">
            {categoryJA[category]}
          </Text>
          {/* <Text variant="p" className="text-pill opacity-70 text-center">
            {description}
          </Text> */}
        </motion.div>
      </motion.div>
      <Image className="object-cover" src={src} alt={alt} fill={true} />
    </MotionLink>
  );
};

export function TourismSlideshow({ ...props }: React.ComponentProps<"div">) {
  return (
    <Container className="flex flex-col gap-8 lg:gap-24" {...props}>
      <div className="flex flex-col justify-between gap-4 sm:gap-8 max-w-[70ch]">
        <Text variant="h3" color="muted">
          観光
        </Text>
        <Text variant="h2" className="mt-0 text-4xl sm:text-8xl cjk">
          歴史を
          <wbr />
          感じる
          <wbr />旅
        </Text>
        <div className="flex flex-col gap-8 items-start">
          <Text variant="p">
            春の桜、秋の紅葉が美しい秋月。歴史ある城下町を散策し、象徴的な秋月城跡を訪れ、趣のあるカフェで地元の味を楽しめます。町の武士の歴史を物語る「黒門」は必見です。四季折々の魅力が溢れる秋月へ、ぜひお越しください！
          </Text>
          <Link href="/tourism" variant="arrow" underline>
            体験を見る
          </Link>
        </div>
      </div>
      <div className="grid auto-rows-auto lg:grid-cols-9 gap-32">
        {slides.map((slide, index) => {
          const gap = 3;
          const start = 1 + index * gap;
          return (
            <Slide
              key={index}
              {...slide}
              className={`lg:col-start-${start} lg:col-span-3`}
            />
          );
        })}
      </div>
    </Container>
  );
}
