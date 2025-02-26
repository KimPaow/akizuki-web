"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Pill from "@/components/ui/pill";
import Text from "@/components/ui/text";
import { experiences } from "@/data/experiences";
import { useState, useEffect } from "react";
import React from "react";

const sortedExperiences = experiences.sort((a, b) =>
  a.key.localeCompare(b.key)
);

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
        <Text variant="h1">Experience</Text>
        <Text variant="lead" color="muted">
          Akizuki offers a wide range of experiences, no matter the season.
        </Text>
      </div>
      <div className="flex flex-col sm:flex-col gap-4 mx-4 sm:mx-0">
        <Text variant="large" className="sm:mr-auto">
          Filter:
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
                {category}
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

const categoryColors: Record<
  Category,
  "spring" | "summer" | "autumn" | "winter" | "water" | "sun" | "history"
> = {
  Food: "spring",
  Shopping: "sun",
  Nature: "summer",
  Culture: "autumn",
};

const ALL_CATEGORIES = ["Food", "Shopping", "Nature", "Culture"] as const;
type CategoryTuple = typeof ALL_CATEGORIES;
export type Category = CategoryTuple[number];

interface ListItemProps extends React.ComponentProps<"div"> {
  title: string;
  content: string;
  tags: Category[];
}

function ListItem({
  title,
  content = "This experience doesn't have any detailed information yet.",
  tags = [],
}: ListItemProps) {
  return (
    <AccordionItem value={title} className="px-4 sm:px-0">
      <AccordionTrigger className="cursor-pointer">
        <div className="flex flex-col items-start justify-items-start pr-4">
          <Text
            variant="h3"
            className="text-base sm:text-lg md:text-2xl text-left"
          >
            {title}
          </Text>
        </div>
        {tags.map((t) => (
          <Pill key={t} variant={categoryColors[t]}>
            {t}
          </Pill>
        ))}
      </AccordionTrigger>
      <AccordionContent>
        <Text variant="p" color="muted">
          {content}
        </Text>
      </AccordionContent>
    </AccordionItem>
  );
}
