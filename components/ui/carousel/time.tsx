"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

const MotionImage = motion.create(Image);

export interface Slide {
  src: string;
  alt: string;
  id: string;
}

export const Slideshow = ({ slides }: { slides: Slide[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const size = useMemo(() => slides.length, [slides.length]);
  const timer = useRef<NodeJS.Timeout | number>(-1);

  // Set the active image based on timer
  useEffect(() => {
    timer.current = setInterval(() => {
      setActiveIndex((cur) => (cur + 1) % size);
    }, 5000);

    return () => clearInterval(timer.current as number);
  }, [size]);

  return (
    <div className="absolute w-full h-full">
      {slides.map((slide, i) => {
        return (
          <MotionImage
            variants={{
              hidden: { opacity: 0, transition: { duration: 3 } },
              visible: { opacity: 1, transition: { duration: 3 } },
            }}
            initial="hidden"
            animate={activeIndex === i ? "visible" : "hidden"}
            key={slide.id}
            src={slide.src}
            alt={slide.alt}
            className="-z-20 object-cover"
            fill
            priority
          />
        );
      })}
    </div>
  );
};
