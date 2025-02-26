import { History } from "@/components/sections/history";
import { Experience } from "@/components/sections/experience";
import { Living } from "@/components/sections/living";
import { Contact } from "@/components/sections/contact";
import { Access } from "@/components/sections/access";
import { Landing } from "@/components/sections/landing";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="min-h-full flex flex-col gap-8 md:gap-64 items-center">
        <Landing />
        <History />
        <Experience />
        <Living />
        <Contact />
        <Access />
      </div>
    </main>
  );
}
