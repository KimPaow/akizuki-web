import type { Metadata } from "next";
import Text from "@/components/ui/text";
import { ListItem } from "./list";
import { Accordion } from "@/components/ui/accordion";
import Filter from "./filter";
import { ALL_CATEGORIES, Category } from "@/lib/domain/category";
import { sanityFetch } from "@/sanity/live";
import { experiencePageQuery } from "@/sanity/lib/queries";
import { Experience } from "@/sanity/types";
import { getDefaultOpenGraphImage, withEnglishSeoSuffix } from "@/lib/seo";

const title = "観光案内 / Things to Do";
const description =
  "秋月の観光スポット、体験、食事、買い物情報をカテゴリ別に紹介しています。Find top attractions, food, shopping, and local experiences in Akizuki, Fukuoka.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/tourism",
  },
  openGraph: {
    title: `${title} | Akizuki, Fukuoka`,
    description: withEnglishSeoSuffix(description),
    url: "/tourism",
    images: [getDefaultOpenGraphImage()],
  },
  twitter: {
    title: `${title} | Akizuki, Fukuoka`,
    description: withEnglishSeoSuffix(description),
    images: [getDefaultOpenGraphImage().url],
  },
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const categoryQueryParam = (await searchParams).categories;
  let filters: Category[] = [];

  // Should be a comma-separated string of categories
  if (typeof categoryQueryParam === "string") {
    const separated = categoryQueryParam.split(",").filter((n) => n);

    // If all strings are valid categories, use them
    if (separated?.every((c) => ALL_CATEGORIES.includes(c as Category))) {
      filters = separated as Category[];
    }
    // Otherwise, use all categories
    else {
      filters = ALL_CATEGORIES.map((c) => c);
    }
  }
  // If there's something fishy with the queryparam, use all categories as a default
  else {
    filters = ALL_CATEGORIES.map((c) => c);
  }

  const { data: page } = await sanityFetch({
    query: experiencePageQuery,
    params: { filters: filters },
  });
  const experiences = page as Experience[];

  return (
    <div className="w-full max-w-[1280px] px-4 md:px-8 mx-auto flex flex-col gap-16 my-32">
      <div className="flex flex-col gap-8 mx-4 sm:mx-0">
        <Text variant="h1">観光案内</Text>
        <Text variant="lead" color="muted" className="max-w-[80ch]">
          秋月は福岡市街や太宰府天満宮からのアクセスも良好で、年間約60万人が訪
          れます。春と秋には、桜や紅葉が城下町を彩り、風情ある街並みを楽しめま
          す。歴史的な町家や庭園が点在し、地元の特産品や伝統文化にも触れること
          ができる魅力的な観光地です。
        </Text>
      </div>
      <Filter />
      <Accordion type="single" collapsible className="border-t border-history">
        {experiences.map((exp) => {
          if (exp.wip) return null;
          return <ListItem key={exp._id} experience={exp} />;
        })}
      </Accordion>
    </div>
  );
}
