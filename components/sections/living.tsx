import * as React from "react";
import Image from "next/image";
import Text from "@/components/ui/text";
import { Link } from "@/components/ui/link";

export function Living({ ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className="min-h-screen flex flex-col justify-center max-w-[1600px] mx-auto my-16"
      {...props}
    >
      <div className="min-h-200 px-8 sm:px-20 flex flex-col">
        <div className="grid grid-cols-10 grid-rows-2 md:grid-rows-1 gap-8">
          <div className="col-start-1 col-end-10 md:col-end-6 flex flex-col gap-8 mb-16">
            <Text variant="h3" color="muted">
              暮らし
            </Text>
            <Text variant="h2" className="text-8xl">
              伝統と新風が交わる街
            </Text>
          </div>
          <div className="aspect-3/2 md:aspect-[initial] row-start-2 md:row-start-1 col-start-1 col-end-11 md:col-start-8 md:col-end-11 relative">
            <Image
              className="object-cover"
              src="/images/landing/hhh_model_02_2x.webp"
              alt="The black gate of Akizuki"
              // width={472}
              // height={377}
              fill
            />
          </div>
        </div>
        <div className="grid grid-cols-10 grid-rows-1 gap-8">
          <div className="hidden md:block col-start-1 col-end-11 md:col-end-7 relative">
            <Image
              className="object-cover"
              src="/images/landing/stone_elevation_2x.webp"
              alt="Streets of Akizuki"
              // width={954}
              // height={377}
              fill
            />
          </div>
          <div className="row-start-2 md:row-start-1 col-start-1 md:col-start-8 col-end-11 flex flex-col gap-8 mt-16 items-start">
            <Text variant="p">
              秋月は文化、創造性、そしてコミュニティが息づく活気ある街です。おしゃれなカフェや職人の店が点在し、歴史の趣と現代のリラックスしたライフスタイルが見事に融合しています。アーティスト、リモートワーカー、若い家族にも最適な環境が整っています。都会の喧騒を離れ、自然と伝統、そして洗練された田舎暮らしを楽しんでみませんか？
            </Text>
            <Link href="/living" variant="arrow" underline>
              暮らし
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
