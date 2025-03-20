import Text from "@/components/ui/text";
import { ListItem } from "./list";
import { Accordion } from "@/components/ui/accordion";
import Filter from "./filter";
import { ALL_CATEGORIES, Category } from "@/lib/domain/category";
import { sanityFetch } from "@/sanity/live";
import { experiencePageQuery } from "@/sanity/lib/queries";
import { Experience } from "@/sanity/types";

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
        <Text variant="h1">観光</Text>
        <Text variant="lead" color="muted">
          秋月は四季を通じて多彩な体験を提供します。
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
