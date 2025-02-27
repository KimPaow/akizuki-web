"use client";

import Text from "@/components/ui/text";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { experiences as exps } from "@/data/experiences";
import Pill from "@/components/ui/pill";
import { useState, useEffect } from "react";

const sortedExperiences = exps.sort((a, b) => a.key.localeCompare(b.key));

export default function Page() {
  const [filters, setFilters] = useState<Category[]>(
    ALL_CATEGORIES.map((c) => c)
  );
  const [experiences, setExperiences] = useState(sortedExperiences);

  useEffect(() => {
    if (filters.length === 0) {
      setExperiences(sortedExperiences);
      return;
    }
    setExperiences(
      sortedExperiences.filter((exp) =>
        filters.some((f) => exp.tags.includes(f))
      )
    );
  }, [filters]);

  return (
    <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-16 my-32">
      <div className="flex flex-col gap-8 mx-4 sm:mx-0">
        <Text variant="h1">観光</Text>
        <Text variant="lead" color="muted">
          秋月は四季を通じて多彩な体験を提供します。
        </Text>
      </div>
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
                outline={!filters.includes(category)}
                onClick={() => {
                  // if all categories are already selected, choose only the clicked category
                  if (filters.length === ALL_CATEGORIES.length) {
                    setFilters([category]);
                    return;
                  }
                  // if the category is already in the filters, remove it
                  if (filters.includes(category)) {
                    setFilters((prev) => prev.filter((c) => c !== category));
                    return;
                  }
                  // if the category is not in the filters, add it
                  else {
                    setFilters((prev) => [...prev, category]);
                  }
                }}
                className="cursor-pointer"
              >
                {categoryJA[category]}
              </Pill>
            );
          })}
        </div>
      </div>
      <Accordion type="single" collapsible className="border-t border-history">
        {experiences.map((exp) => (
          <ListItem
            key={exp.title}
            title={exp.title}
            content={exp.content}
            tags={exp.tags}
          />
        ))}
      </Accordion>
    </div>
  );
}

const ALL_CATEGORIES = [
  "Food",
  "Shopping",
  "Nature",
  "Culture",
  "Accommodation",
  "Experience",
] as const;
type CategoryTuple = typeof ALL_CATEGORIES;
export type Category = CategoryTuple[number];

interface ListItemProps extends React.ComponentProps<"div"> {
  title: string;
  content: string;
  tags: Category[];
}

const categoryColors: Record<
  Category,
  "spring" | "summer" | "autumn" | "winter" | "water" | "sun" | "history"
> = {
  Food: "spring",
  Shopping: "sun",
  Nature: "summer",
  Culture: "history",
  Accommodation: "water",
  Experience: "autumn",
};

const categoryJA: Record<Category, string> = {
  Food: "食事",
  Shopping: "買い物",
  Nature: "自然",
  Culture: "文化",
  Accommodation: "民泊",
  Experience: "体験",
};

function ListItem({
  title,
  content = "This experience doesn't have any detailed information yet.",
  tags = [],
}: ListItemProps) {
  return (
    <AccordionItem value={title} className="px-4 sm:px-0">
      <AccordionTrigger className="cursor-pointer">
        <div className="flex items-center justify-items-end pr-4 w-full">
          <Text
            variant="h2"
            className="text-base sm:text-lg md:text-3xl text-left mr-auto"
          >
            {title}
          </Text>
          <div className="flex gap-4">
            {tags.map((t) => (
              <Pill key={t} variant={categoryColors[t]}>
                {categoryJA[t]}
              </Pill>
            ))}
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <Text variant="p" color="muted">
          {content}
        </Text>
      </AccordionContent>
    </AccordionItem>
  );
}
