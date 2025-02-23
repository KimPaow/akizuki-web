import Text from "@/components/ui/text";
import { History } from "@/components/sections/history";
import { Experience } from "@/components/sections/experience";
import { Living } from "@/components/sections/living";
import { Contact } from "@/components/sections/contact";
import { Access } from "@/components/sections/access";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="min-h-full">
        <div className="min-h-screen flex flex-col justify-center items-center relative">
          <div className="mx-auto flex flex-col gap-8 sm:gap-16 items-center justify-center">
            <div className="px-8 sm:px-20 mr-auto">
              <Text variant="display">AKIZUKI</Text>
            </div>
          </div>
          <Image
            src="/images/drawing.jpg"
            alt="old castle drawing"
            width={1648}
            height={1540}
            className="h-full object-cover absolute -z-20 mix-blend-screen opacity-10 dark:invert"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-radial from-transparent-50 to-60% to-background -z-10"></div>
        </div>
        <History />
        <Experience />
        <Living />
        <Contact />
        <Access />
      </div>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </main>
  );
}
