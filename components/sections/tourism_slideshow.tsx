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

const coverDuration = 0.2;
const textDuration = 0.2;

const coverVariants: Variants = {
  hidden: {
    top: 0,
    right: "100%",
    bottom: 0,
    left: 0,
    transition: {
      duration: coverDuration,
      delay: textDuration, // Delay the cover animation to match the text animation
    },
  },
  visible: {
    right: "50%",
    transition: {
      duration: coverDuration,
    },
  },
};

const coverBottomVariants: Variants = {
  hidden: {
    top: 0,
    right: 0,
    bottom: 0,
    left: "100%",
    transition: {
      duration: coverDuration,
      delay: textDuration, // Delay the cover animation to match the text animation
    },
  },
  visible: {
    left: "50%",
    transition: {
      duration: coverDuration,
    },
  },
};

const contentVariants: Variants = {
  hide: {
    opacity: 0,
    transition: {
      duration: textDuration,
    },
  },
  show: {
    opacity: 1,
    transition: {
      duration: textDuration,
      delay: coverDuration + 0.1, // Delay the text animation to match the cover animation
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
        className={`absolute bg-${categoryColors[category]} z-[1] h-full flex flex-col gap-4 items-start justify-center`}
        variants={coverVariants}
        initial="hidden"
        animate={isHovered ? "visible" : "hidden"}
        viewport={{ once: true }}
      />
      <motion.div
        className={`absolute bg-${categoryColors[category]} z-[1] h-full flex flex-col gap-4 items-start justify-center`}
        variants={coverBottomVariants}
        initial="hidden"
        animate={isHovered ? "visible" : "hidden"}
        viewport={{ once: true }}
      />
      <motion.div
        className={`absolute z-[2] left-0 flex flex-col items-center justify-center h-full w-full`}
        variants={contentVariants}
        initial="hide"
        animate={isHovered ? "show" : "hide"}
      >
        <Text variant="h3" className="text-pill text-6xl">
          {categoryJA[category]}
        </Text>
        <Text variant="p" className="text-pill opacity-70 text-center">
          に関しての体験を見る
        </Text>
      </motion.div>
      <Image className="object-cover" src={src} alt={alt} fill={true} />
    </MotionLink>
  );
};

export function TourismSlideshow({ ...props }: React.ComponentProps<"div">) {
  return (
    <Container {...props}>
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
            すべての体験を見る
          </Link>
        </div>
      </div>
      <div className="flex gap-32 mt-16">
        {slides.map((slide, index) => {
          return (
            <Slide
              key={index}
              {...slide}
              // className={`lg:col-start-${start} lg:col-span-3`}
              className="grow-1"
            />
          );
        })}
      </div>
    </Container>
  );
}
