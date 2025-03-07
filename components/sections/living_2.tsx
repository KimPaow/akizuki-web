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
        <Text variant="h2" className="mt-0 sm:mt-10 text-4xl sm:text-8xl cjk">
          伝統と
          <wbr />
          新風が
          <wbr />
          交わる
          <wbr />街
        </Text>
      </div>
      <div className="col-start-1 md:col-start-8 col-end-11 flex flex-col justify-between gap-4 sm:gap-8 md:gap-36">
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
            秋月は文化、創造性、そしてコミュニティが息づく活気ある街です。おしゃれなカフェや職人の店が点在し、歴史の趣と現代のリラックスしたライフスタイルが見事に融合しています。アーティスト、リモートワーカー、若い家族にも最適な環境が整っています。都会の喧騒を離れ、自然と伝統、そして洗練された田舎暮らしを楽しんでみませんか？
          </Text>
          <Link href="/living" variant="arrow" underline>
            秋月の暮らしについて
          </Link>
        </div>
      </div>
    </Container>
  );
}
