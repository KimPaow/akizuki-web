"use client";

import {
  ALL_CATEGORIES,
  categoryColors,
  categoryJA,
  Category,
} from "@/lib/domain/category";
import Pill from "@/components/ui/pill";
import Text from "@/components/ui/text";
import { useSearchParams, redirect } from "next/navigation";

export default function Filter() {
  const searchParams = useSearchParams();

  // get categories from the URL query params or default to all categories
  const categories =
    searchParams.get("categories")?.split(",") ?? ALL_CATEGORIES;

  const updateSearchParamsAndNavigate = (newFilter: Category) => {
    const newParams = new URLSearchParams(searchParams.toString());
    let updatedFilters: string[] = [...categories];

    if (categories?.includes(newFilter)) {
      // Remove the category from the filter if it already exists
      updatedFilters = updatedFilters.filter((f) => f !== newFilter);
    } else {
      // Add the category to the filter if it doesn't exist
      updatedFilters.push(newFilter);
    }

    // Update the URL query params
    newParams.set("categories", updatedFilters.join(","));

    // Navigate to the new URL (reload page)
    redirect(`?${newParams.toString()}`);
  };

  return (
    <div className="flex flex-col sm:flex-col gap-4 mx-4 sm:mx-0">
      <Text variant="small" className="sm:mr-auto">
        フィルター：
      </Text>
      <div className="flex flex-wrap justify-items-start gap-4">
        {ALL_CATEGORIES.map((category) => {
          return (
            <Pill
              key={category}
              variant={categoryColors[category]}
              outline={!categories.includes(category)}
              className="cursor-pointer"
              onClick={() => updateSearchParamsAndNavigate(category)}
            >
              {categoryJA[category]}
            </Pill>
          );
        })}
      </div>
    </div>
  );
}
