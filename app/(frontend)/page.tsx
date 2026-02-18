import type { Metadata } from "next";
import { History } from "@/components/sections/history";
import { Living } from "@/components/sections/living_2";
import { Contact } from "@/components/sections/contact";
import { Landing } from "@/components/sections/landing";
import { TourismSlideshow } from "@/components/sections/tourism_slideshow";
import {
  DEFAULT_SEO_DESCRIPTION,
  getDefaultOpenGraphImage,
  withEnglishSeoSuffix,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "ホーム / Home",
  description: withEnglishSeoSuffix(DEFAULT_SEO_DESCRIPTION),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "秋月 Akizuki, Fukuoka",
    description: withEnglishSeoSuffix(DEFAULT_SEO_DESCRIPTION),
    url: "/",
    images: [getDefaultOpenGraphImage()],
  },
  twitter: {
    title: "秋月 Akizuki, Fukuoka",
    description: withEnglishSeoSuffix(DEFAULT_SEO_DESCRIPTION),
    images: [getDefaultOpenGraphImage().url],
  },
};

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
