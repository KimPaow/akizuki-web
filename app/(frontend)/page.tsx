import { History } from "@/components/sections/history";
import { Living } from "@/components/sections/living_2";
import { Contact } from "@/components/sections/contact";
import { Landing } from "@/components/sections/landing";
import { TourismSlideshow } from "@/components/sections/tourism_slideshow";

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <div className="min-h-full flex flex-col gap-8 md:gap-32 items-center pb-8 md:pb-24">
          <Landing />
          <History />
          <TourismSlideshow />
          <Living />
          <Contact />
        </div>
      </main>
    </>
  );
}
