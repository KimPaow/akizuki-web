import Image from "next/image";
import Text from "@/components/ui/text";
import { Link } from "@/components/ui/link";
import { Container } from "@/components/ui/container";
import AnimatedImageCover from "@/components/ui/animated-image-cover";

export function Living({ ...props }: React.ComponentProps<"div">) {
  return (
    <Container
      className="grid grid-cols-10 auto-rows-auto gap-y-4 sm:gap-8"
      {...props}
    >
      <div className="aspect-square md:aspect-[initial] col-start-1 col-end-11 md:col-end-5 relative">
        <AnimatedImageCover direction="rtl" />
        <Image
          className="object-cover"
          src="/images/landing/meganebashi_fall_cyclists_2x.webp"
          alt="Renovated historical building in Akizuki"
          // width={468}
          // height={777}
          fill={true}
        />
      </div>
      <div className="col-start-1 md:col-start-5 col-end-11 md:col-end-8 flex flex-col justify-between gap-4 sm:gap-8">
        <Text variant="h4" color="muted">
          秋月の暮らし
        </Text>
        <Text variant="h2" className="mt-0 sm:mt-10 text-3xl sm:text-6xl cjk">
          せせらぎ
          <wbr />が<wbr />
          響く
          <wbr />
          まち
        </Text>
      </div>
      <div className="col-start-1 md:col-start-8 col-end-11 flex flex-col justify-between gap-4 sm:gap-8 md:gap-16">
        <div className="relative aspect-square hidden sm:inline-block">
          <AnimatedImageCover direction="btt" />
          <Image
            className=""
            src="/images/landing/drone_school_2x.webp"
            alt="Elementary school in Akizuki"
            // width={310}
            // height={282}
            fill
          />
        </div>
        <div className="flex flex-col gap-8 items-start">
          <Text variant="p">
            秋月は、歴史ある町並みと豊かな自然が調和する美しいまちです。せせらぎの音が心地よく響く中、子どもたちは川で遊び、夏には蛍が舞う幻想的な風景が広がります。武家屋敷や町屋が残る伝統的な景観が大切に守られる一方で、歴史に根ざした催しに加え、新しい文化・クリエイティブな流れも生まれています。地域住民の手による文化活動や環境保全の取り組みも活発で、自然と共生しながら新しい価値を生み出す暮らしが息づいています。また、秋月は福岡空港から車で45分の距離にあり、九州各地へのアクセスも良好で、教育環境や社会福祉などの生活基盤も充実しています。四季折々の美しさと歴史、そして未来へつながる創造の息吹を感じながら、秋月で新たな生活をはじめてみませんか？
          </Text>
          <Link href="/living" variant="arrow" underline>
            秋月でくらす
          </Link>
        </div>
      </div>
    </Container>
  );
}
