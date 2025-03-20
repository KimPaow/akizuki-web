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

const MotionLink = motion.create(Link);

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
        <Text variant="h4" color="muted">
          観光
        </Text>
        <Text variant="h2" className="!mt-0 text-3xl sm:text-6xl cjk">
          筑前
          <wbr />の<wbr />
          小京都
        </Text>
        <div className="flex flex-col gap-8 items-start">
          <Text variant="p">
            秋月のまちは全国でも数少ない「重要伝統的建造物群保存地区」に選ばれ、城下町の街並みが今も大切に保存されています。明治時代の廃藩後、近代化の波から取り残されたことで、歴史的景観や伝統工芸が色濃く残る貴重な場所となりました。福岡市街や太宰府天満宮などからのアクセスもよく、春の桜や秋の紅葉シーズンには多くの観光客が訪れます。また、秋月ならではの趣のあるお店や、歴史を感じさせる名所も訪れるたびに新たな魅力を発見させてくれます。
          </Text>
          <Link href="/tourism" variant="arrow" underline>
            秋月を体験する
          </Link>
        </div>
      </div>
      <div className="hidden md:flex gap-8 lg:gap-32 mt-16">
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
