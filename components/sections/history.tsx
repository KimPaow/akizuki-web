"use client";

import * as React from "react";
import Image from "next/image";
import Text from "@/components/ui/text";
import { Link } from "@/components/ui/link";
import { Container } from "@/components/ui/container";
import { AnimatedImageCover } from "@/components/ui/animated-image-cover";

export function History({ ...props }: React.ComponentProps<"div">) {
  return (
    <Container
      className="grid grid-cols-10 flex-col md:flex-row gap-8"
      {...props}
    >
      <div className="flex col-start-1 col-end-11 md:col-end-6 xl:col-end-6 relative overflow-hidden">
        <AnimatedImageCover />
        <Image
          src="/images/landing/black_gate_fall_2x.webp"
          alt="Akizuki in spring"
          // width={631}
          // height={962}
          fill
          className="hidden md:block object-cover"
        />
      </div>
      <div className="col-start-1 md:col-start-7 col-end-11 flex flex-col-reverse sm:flex-col gap-8">
        <div className="max-w-[60ch] mr-auto">
          <Text
            variant="h2"
            id="access"
            className="mt-0 sm:mt-10 text-4xl sm:text-8xl cjk"
          >
            秋月に
            <wbr />
            ついて
          </Text>
          <Text
            variant="p"
            color="foreground"
            className="leading-8 !mt-8 sm:!mt-16"
          >
            秋月を発見 - 福岡の隠れた名所。
          </Text>
          <Text variant="p" color="foreground" className="leading-8">
            福岡の山間に佇む秋月は、「九州の小京都」として知られる歴史ある町です。
          </Text>
          <Text variant="p" color="foreground" className="leading-8">
            武士時代の風情が残る町並み、美しい自然、豊かな文化遺産が魅力で、都会の喧騒から離れた静かなひとときを楽しめます。観光でも移住でも、秋月はあなたを温かく迎えてくれます。
          </Text>
          <Link
            href="/history"
            variant="arrow"
            underline
            className="mr-auto mt-6"
          >
            歴史を知る
          </Link>
        </div>
        <div className="relative mt-auto">
          <AnimatedImageCover direction="ttb" />
          <Image
            src="/images/landing/drone_summer_2x.webp"
            alt="Drums in Akizuki"
            width={633}
            height={460}
            className="object-cover"
          />
        </div>
      </div>
    </Container>
  );
}
