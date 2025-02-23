import * as React from "react";
import Image from "next/image";
import Text from "@/components/ui/text";
import { Link } from "@/components/ui/link";

export function History({ ...props }: React.ComponentProps<"div">) {
  return (
    <div className="px-8 sm:px-20 flex gap-8 max-w-[1600px] mx-auto" {...props}>
      <div className="flex-4">
        <Image
          src="/images/sakura_shops.jpg"
          alt="Akizuki in spring"
          width={3456}
          height={5184}
          className="object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col gap-8"></div>
      <div className="flex-5 flex flex-col gap-8">
        <div className="max-w-[60ch] mr-auto">
          <Text variant="h2" id="access">
            秋月について
          </Text>
          <Text variant="p" color="foreground" className="leading-8">
            秋月を発見 - 福岡の隠れた名所。
          </Text>
          <Text variant="p" color="foreground" className="leading-8">
            福岡の山間に佇む秋月は、「九州の小京都」として知られる歴史ある町です。
          </Text>
          <Text variant="p" color="foreground" className="leading-8">
            武士時代の風情が残る町並み、美しい自然、豊かな文化遺産が魅力で、都会の喧騒から離れた静かなひとときを楽しめます。観光でも移住でも、秋月はあなたを温かく迎えてくれます。
          </Text>
          <Link
            href="/history"
            variant="arrow"
            underline
            className="mr-auto mt-6"
          >
            歴史を知る
          </Link>
        </div>
        <Image
          src="/images/drums.jpg"
          alt="Drums in Akizuki"
          width={986}
          height={657}
          className="object-cover mt-auto"
        />
      </div>
    </div>
  );
}
