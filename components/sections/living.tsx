import Image from "next/image";
import Text from "@/components/ui/text";
import { Link } from "@/components/ui/link";
import { Container } from "@/components/ui/container";
import AnimatedImageCover from "@/components/ui/animated-image-cover";

export function Living({ ...props }: React.ComponentProps<"div">) {
  return (
    <Container
      className="grid grid-cols-10 auto-rows-auto gap-x-8 gap-y-4 sm:gap-y-0"
      {...props}
    >
      <div className="row-start-2 sm:row-start-1 col-start-1 col-end-11 md:col-end-6 flex flex-col gap-4 sm:gap-8 mb-4 sm:mb-16">
        <Text variant="h3" color="muted">
          秋月の暮らし
        </Text>
        <Text variant="h2" className="mt-0 sm:mt-2 text-4xl sm:text-8xl cjk">
          伝統と
          <wbr />
          新風が
          <wbr />
          交わる
          <wbr />街
        </Text>
      </div>
      <div className="aspect-3/2 md:aspect-[initial] row-start-1 col-start-1 col-end-11 md:col-start-7 md:col-end-11 relative">
        <AnimatedImageCover direction="btt" />
        <Image
          className="object-cover"
          src="/images/landing/meganebashi_fall_2x.webp"
          alt="The black gate of Akizuki"
          // width={472}
          // height={377}
          fill
        />
      </div>
      <div className="aspect-10/4 md:aspect-4/2 hidden md:flex row-start-2 col-start-1 col-end-11 md:col-end-6 relative">
        <AnimatedImageCover direction="ttb" />
        <Image
          className="object-cover"
          src="/images/landing/drone_school_2x.webp"
          alt="Streets of Akizuki"
          // width={954}
          // height={377}
          fill
        />
      </div>
      <div className="row-start-3 md:row-start-2 col-start-1 md:col-start-7 col-end-10 flex flex-col gap-8 mt-4 sm:mt-16 items-start">
        <Text variant="p" className="mt-auto">
          秋月は文化、創造性、そしてコミュニティが息づく活気ある街です。おしゃれなカフェや職人の店が点在し、歴史の趣と現代のリラックスしたライフスタイルが見事に融合しています。アーティスト、リモートワーカー、若い家族にも最適な環境が整っています。都会の喧騒を離れ、自然と伝統、そして洗練された田舎暮らしを楽しんでみませんか？
        </Text>
        <Link href="/living" variant="arrow" underline>
          暮らし
        </Link>
      </div>
    </Container>
  );
}
