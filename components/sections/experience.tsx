import Image from "next/image";
import Text from "@/components/ui/text";
import { Link } from "@/components/ui/link";
import { Container } from "@/components/ui/container";
import AnimatedImageCover from "@/components/ui/animated-image-cover";

export function Experience({ ...props }: React.ComponentProps<"div">) {
  return (
    <Container
      className="grid grid-cols-10 auto-rows-auto gap-y-4 sm:gap-8"
      {...props}
    >
      <div className="aspect-square md:aspect-[initial] col-start-1 col-end-11 md:col-end-5 relative">
        <AnimatedImageCover direction="rtl" />
        <Image
          className="object-cover"
          src="/images/landing/sacchi_01_2x.webp"
          alt="Renovated historical building in Akizuki"
          // width={468}
          // height={777}
          fill={true}
        />
      </div>
      <div className="col-start-1 md:col-start-5 col-end-11 md:col-end-8 flex flex-col justify-between gap-4 sm:gap-8">
        <Text variant="h3" color="muted">
          体験
        </Text>
        <Text variant="h2" className="mt-0 sm:mt-10 text-4xl sm:text-8xl cjk">
          歴史を
          <wbr />
          感じる
          <wbr />旅
        </Text>
      </div>
      <div className="col-start-1 md:col-start-8 col-end-11 flex flex-col justify-between gap-4 sm:gap-8 md:gap-36">
        <div className="relative aspect-square hidden sm:inline-block">
          <AnimatedImageCover direction="btt" />
          <Image
            className=""
            src="/images/landing/washi_3_2x.webp"
            alt="The black gate of Akizuki"
            // width={310}
            // height={282}
            fill
          />
        </div>
        <div className="flex flex-col gap-8 items-start">
          <Text variant="p">
            春の桜、秋の紅葉が美しい秋月。歴史ある城下町を散策し、象徴的な秋月城跡を訪れ、趣のあるカフェで地元の味を楽しめます。町の武士の歴史を物語る「黒門」は必見です。四季折々の魅力が溢れる秋月へ、ぜひお越しください！
          </Text>
          <Link href="/experience" variant="arrow" underline>
            体験を見る
          </Link>
        </div>
      </div>
    </Container>
  );
}
