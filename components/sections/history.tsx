import Image from "next/image";
import Text from "@/components/ui/text";
import { Link } from "@/components/ui/link";
import { Container } from "@/components/ui/container";
import { AnimatedImageCover } from "@/components/ui/animated-image-cover";
import { Map } from "../ui/svgs/map";

export function History({ ...props }: React.ComponentProps<"div">) {
  return (
    <Container
      className="grid grid-cols-10 flex-col auto-rows-auto md:flex-row gap-8"
      {...props}
    >
      <div className="hidden md:flex col-start-1 col-end-11 md:col-end-6 relative overflow-hidden aspect-square my-auto">
        <Map />
      </div>
      <div className="col-start-1 md:col-start-6 col-end-11 flex flex-col-reverse sm:flex-col gap-8">
        <div className="relative mb-auto width-full aspect-16/9">
          <AnimatedImageCover direction="ttb" />
          <Image
            src="/images/landing/town.webp"
            alt="Drums in Akizuki"
            fill
            // width={633}
            // height={460}
            className="object-cover"
          />
        </div>
        <div className="max-w-[60ch] mr-auto">
          <Text variant="h2" id="access" className="mt-0 sm:mt-10 text-2xl cjk">
            秋月に
            <wbr />
            ついて
          </Text>
          <Text variant="p" color="foreground" className="leading-8">
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
      </div>
    </Container>
  );
}
