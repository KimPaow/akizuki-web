import { History } from "@/components/sections/history";
// import { Tourism } from "@/components/sections/tourism";
// import { Living } from "@/components/sections/living";
import { Living2 } from "@/components/sections/living_2";
import { Contact } from "@/components/sections/contact";
import { Access } from "@/components/sections/access";
import { Landing } from "@/components/sections/landing";
import { TourismSlideshow } from "@/components/sections/tourism_slideshow";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="min-h-full flex flex-col gap-8 md:gap-64 items-center">
        <Landing />
        <History />
        {/* <Tourism /> */}
        <TourismSlideshow />
        <Living2 />
        {/* <Living /> */}
        <Contact />
        <Access />
      </div>
    </main>
  );
}
