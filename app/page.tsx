import Text from "@/components/ui/text";
import { Experience } from "@/components/sections/experience";
import { Living } from "@/components/sections/living";
import { Contact } from "@/components/sections/contact";
import { Access } from "@/components/sections/access";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="min-h-full">
        <div className="min-h-screen flex flex-col justify-between relative">
          <div className="text-xl mr-8 sm:mr-40 py-8 sm:py-20 max-w-4/10 flex flex-col gap-2 ml-auto my-auto">
            <Text
              variant="large"
              color="muted"
              className="bg-black mr-auto p-1"
            >
              秋月を発見 - 福岡の隠れた名所。
            </Text>
            <Text
              variant="large"
              color="muted"
              className="bg-black mr-auto p-1"
            >
              福岡の山間に佇む秋月は、「九州の小京都」として知られる歴史ある町です。
            </Text>
            <Text
              variant="large"
              color="muted"
              className="bg-black mr-auto p-1"
            >
              武士時代の風情が残る町並み、美しい自然、豊かな文化遺産が魅力で、都会の喧騒から離れた静かなひとときを楽しめます。観光でも移住でも、秋月はあなたを温かく迎えてくれます。
            </Text>
          </div>
          <Text variant="display" className="px-8 sm:px-20">
            AKIZUKI
          </Text>
          <Image
            src="/images/drawing.jpg"
            alt="old castle drawing"
            width={1648}
            height={1540}
            className="h-full object-cover absolute -z-20 mix-blend-screen opacity-10 dark:invert"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-radial from-transparent-50 to-60% to-background -z-10"></div>
        </div>
        <Experience />
        <Living />
        <Contact />
        <Access />
      </div>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </main>
  );
}
