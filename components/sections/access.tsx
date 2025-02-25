import * as React from "react";
import Text from "@/components/ui/text";
import Link from "../ui/link";
import { Container } from "@/components/ui/container";

export function Access({ ...props }: React.ComponentProps<"div">) {
  return (
    <Container
      className="grid grid-cols-10 auto-rows-auto gap-x-8 gap-y-16 mt-8 mb-32 sm:mt-16 sm:mb-128"
      {...props}
    >
      <Text
        variant="h2"
        className="col-start-1 col-end-11 md:col-end-5 row-start-1 mt-0 sm:mt-10 text-4xl sm:text-8xl text-center sm:text-left lg:mb-16"
        id="access-akizuki"
      >
        アクセス
      </Text>
      <div className="col-start-1 col-end-11 md:col-end-4 md:row-start-2 flex flex-col gap-8">
        <Text variant="h3">福岡空港から</Text>
        <div>
          <Text variant="p">
            急行バス「福岡空港線」で「朝倉IC」の手前の「急行甘木(甘木甘木)」で下車し、秋月中心部までタクシーでお越しください。
          </Text>
          <Text variant="p">
            <b>バス:</b> ¥1,400 <br />
            <b>タクシー:</b> ¥3,000~¥4,000
          </Text>
        </div>
      </div>
      <div className="col-start-1 md:col-start-5 col-end-11 md:col-end-8 md:row-start-2 flex flex-col gap-8">
        <Text variant="h3">博多バスターミナルから</Text>
        <div>
          <Text variant="p">
            高速バス「日田営業所行き」に乗車し、「朝倉IC」の1つ手前の「高速天城」で下車し、タクシーで秋月中心部へ。
          </Text>
          <Text variant="p">
            <b>バス:</b> ¥1,000 <br />
            <b>タクシー:</b> ¥3,000-¥4,000
          </Text>
        </div>
      </div>
      <div className="col-start-1 md:col-start-9 col-end-11 md:col-end-11 md:row-start-2 flex flex-col gap-8">
        <Text variant="h3">時刻表</Text>
        <div className="flex flex-col gap-4 items-start">
          <Link href="/" variant="arrow" underline>
            西鉄電車・バス 時刻表
          </Link>
          <Link href="/" variant="arrow" underline>
            西鉄電車・バス 時刻表
          </Link>
          <Link href="/" variant="arrow" underline>
            西鉄電車・バス 時刻表
          </Link>
          <Link href="/" variant="arrow" underline>
            西鉄電車・バス 時刻表
          </Link>
          <Link href="/" variant="arrow" underline>
            西鉄電車・バス 時刻表
          </Link>
        </div>
      </div>
    </Container>
  );
}
