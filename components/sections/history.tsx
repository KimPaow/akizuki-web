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
            className="mt-0 sm:mt-10 text-3xl sm:text-6xl cjk"
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
            福岡県朝倉市の北部に位置する秋月は、「筑前の小京都」とも呼ばれる歴史ある城下町です。約800年の歴史を持ち、鎌倉時代の秋月氏、江戸時代の黒田氏によって形成されました。標高859.5mの古処山の麓に広がるこの町は、三方を山に囲まれた盆地で、自然と調和した美しい町並みが特徴です。福岡市から車で約1時間とアクセスも良く、都会の喧騒を離れて歴史と自然を満喫できる秋月は、観光地や移住先としても注目されています。
          </Text>
          <Link
            href="/history"
            variant="arrow"
            underline
            className="mr-auto mt-6"
          >
            秋月を知る
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
