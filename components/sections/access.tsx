import Text from "@/components/ui/text";
import Link from "../ui/link";
import { Container } from "@/components/ui/container";

export function Access({ ...props }: React.ComponentProps<"div">) {
  return (
    <Container
      className="flex flex-col gap-8 px-4 py-16 sm:p-8 md:p-16 max-w-none"
      {...props}
    >
      <div className="flex flex-col lg:flex-row gap-16 justify-between w-full max-w-[1600px] mx-auto">
        <div className="flex-2 flex flex-col gap-8 max-w-[35ch]">
          <Text variant="h5">福岡空港から</Text>
          <div>
            <Text variant="p">
              急行バス「福岡空港線」で「朝倉IC」の手前の「急行甘木(甘木甘木)」で下車し、秋月中心部までタクシーでお越しください。
            </Text>
            <Text variant="p">
              <b>バス:</b>　¥1,400 <br />
              <b>タクシー:</b>　¥3,000~¥4,000
            </Text>
          </div>
        </div>
        <div className="flex-2 flex flex-col gap-8 max-w-[35ch]">
          <Text variant="h5">博多バスターミナルから</Text>
          <div>
            <Text variant="p">
              高速バス「日田営業所行き」に乗車し、「朝倉IC」の1つ手前の「高速天城」で下車し、タクシーで秋月中心部へ。
            </Text>
            <Text variant="p">
              <b>バス:</b>　¥1,000 <br />
              <b>タクシー:</b>　¥3,000-¥4,000
            </Text>
          </div>
        </div>
        <div className="flex-2 flex flex-col gap-8 max-w-[35ch]">
          <Text variant="h5">時刻表</Text>
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
      </div>
    </Container>
  );
}
