import * as React from "react";
import Image from "next/image";
import Text from "@/components/ui/text";
import { Link } from "@/components/ui/link";

export function Experience({ ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className="min-h-screen flex flex-col justify-center max-w-[1600px] mx-auto my-16"
      {...props}
    >
      <div className="min-h-200 px-8 sm:px-20 flex flex-col md:flex-row gap-8">
        <div className="flex-3 relative">
          <Image
            className="object-cover"
            src="/images/landing/sacchi_01_2x.webp"
            alt="Shrine in Akizuki"
            // width={468}
            // height={777}
            fill={true}
          />
        </div>
        <div className="flex-3 flex flex-col justify-end gap-8">
          <Text variant="h3" color="muted">
            体験
          </Text>
          <Text variant="h2" className="text-8xl">
            歴史を感じる旅
          </Text>
        </div>
        <div className="flex-2 flex flex-col justify-between gap-8">
          <Image
            className=""
            src="/images/landing/washi_1_web_2x.webp"
            alt="The black gate of Akizuki"
            width={310}
            height={282}
          />
          <div className="flex flex-col gap-8 items-start">
            <Text variant="p">
              春の桜、秋の紅葉が美しい秋月。歴史ある城下町を散策し、象徴的な秋月城跡を訪れ、趣のあるカフェで地元の味を楽しめます。町の武士の歴史を物語る「黒門」は必見です。四季折々の魅力が溢れる秋月へ、ぜひお越しください！
            </Text>
            <Link href="/experience" variant="arrow" underline>
              体験を見る
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
