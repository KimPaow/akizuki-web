import * as React from "react";
import Image from "next/image";
import Text from "@/components/ui/text";
import { Link } from "@/components/ui/link";

export function Living({ ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className="min-h-screen flex flex-col justify-center max-w-[1600px] mx-auto"
      {...props}
    >
      <div className="min-h-200 px-8 sm:px-20 flex flex-col">
        <div className="flex gap-8 justify-between">
          <div className="flex-6 flex flex-col justify-start gap-8 mb-16">
            <Text variant="h3" color="muted">
              暮らし
            </Text>
            <Text variant="h2" className="text-8xl">
              伝統と新風が交わる街
            </Text>
          </div>
          <div className="flex-1" />
          <Image
            className="flex-3 object-cover"
            src="/images/kurashi-drone.webp"
            alt="The black gate of Akizuki"
            width={472}
            height={377}
          />
        </div>
        <div className="flex gap-8 justify-between">
          <Image
            className="flex-6 object-cover"
            src="/images/street.webp"
            alt="Streets of Akizuki"
            width={954}
            height={377}
          />
          <div className="flex-1" />
          <div className="flex-3 flex flex-col gap-8 mt-16 items-start">
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
