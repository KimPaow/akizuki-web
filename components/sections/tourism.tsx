import Image from "next/image";
import Text from "@/components/ui/text";
import { Link } from "@/components/ui/link";
import { Container } from "@/components/ui/container";
import AnimatedImageCover from "@/components/ui/animated-image-cover";

export function Tourism({ ...props }: React.ComponentProps<"div">) {
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
        <Text variant="h4" color="muted">
          観光
        </Text>
        <Text variant="h2" className="mt-0 sm:mt-10 text-3xl sm:text-6xl cjk">
          筑前
          <wbr />の<wbr />
          小京都
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
            秋月のまちは全国でも数少ない「重要伝統的建造物群保存地区」に選ばれ、城下町の街並みが今も大切に保存されています。明治時代の廃藩後、近代化の波から取り残されたことで、歴史的景観や伝統工芸が色濃く残る貴重な場所となりました。福岡市街や太宰府天満宮などからのアクセスもよく、春の桜や秋の紅葉シーズンには多くの観光客が訪れます。また、秋月ならではの趣のあるお店や、歴史を感じさせる名所も訪れるたびに新たな魅力を発見させてくれます。
          </Text>
          <Link href="/experience" variant="arrow" underline>
            秋月を体験する
          </Link>
        </div>
      </div>
    </Container>
  );
}
