import * as React from "react";
import Text from "@/components/ui/text";
import Link from "../ui/link";

export function Access({ ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-stretch max-w-[1600px] mx-auto my-16"
      {...props}
    >
      <div className="min-h-200 px-8 sm:px-20 gap-8 self-stretch">
        <div className="flex flex-col gap-32 mb-16">
          <Text variant="h2" className="text-8xl" id="access">
            アクセス
          </Text>
          <div className="flex flex-col md:flex-row gap-16 justify-between">
            <div className="flex-2 flex flex-col gap-8">
              <Text variant="h3">福岡空港から</Text>
              <div>
                <Text variant="p">
                  急行バス「福岡空港線」で「朝倉IC」の手前の「急行甘木(甘木甘木)」で下車し、秋月中心部までタクシーでお越しください。
                </Text>
                <Text variant="p">
                  バス: ¥1,400 <br />
                  タクシー: ¥3,000~¥4,000
                </Text>
              </div>
            </div>
            <div className="flex-2 flex flex-col gap-8">
              <Text variant="h3">博多バスターミナルから</Text>
              <div>
                <Text variant="p">
                  高速バス「日田営業所行き」に乗車し、「朝倉IC」の1つ手前の「高速天城」で下車し、タクシーで秋月中心部へ。
                </Text>
                <Text variant="p">
                  バス: ¥1,000 <br />
                  タクシー: ¥3,000-¥4,000
                </Text>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-8">
              <Text variant="h3">時刻表</Text>
              <div className="flex flex-col gap-4 items-start">
                <Link href="/">西鉄電車・バス 時刻表</Link>
                <Link href="/">西鉄電車・バス 時刻表</Link>
                <Link href="/">西鉄電車・バス 時刻表</Link>
                <Link href="/">西鉄電車・バス 時刻表</Link>
                <Link href="/">西鉄電車・バス 時刻表</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
