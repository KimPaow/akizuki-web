import * as React from "react";
import Text from "@/components/ui/text";

export function ContactForm({ ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className="min-h-screen flex flex-col justify-center max-w-[1600px] mx-auto"
      {...props}
    >
      <div className="min-h-200 px-8 sm:px-20 flex">
        <div className="flex-1 flex flex-col justify-start gap-8 mb-16">
          <Text variant="h3" color="muted">
            コンタクト
          </Text>
          <Text variant="h2" className="text-8xl">
            旅を始めましょう
          </Text>
        </div>
        <div className="flex-1 flex gap-8 justify-between">
          <Text variant="p">
            秋月は文化、創造性、そしてコミュニティが息づく活気ある街です。おしゃれなカフェや職人の店が点在し、歴史の趣と現代のリラックスしたライフスタイルが見事に融合しています。アーティスト、リモートワーカー、若い家族にも最適な環境が整っています。都会の喧騒を離れ、自然と伝統、そして洗練された田舎暮らしを楽しんでみませんか？
          </Text>
        </div>
      </div>
    </div>
  );
}
