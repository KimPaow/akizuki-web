import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Text from "@/components/ui/text";
import Pill from "@/components/ui/pill";
import {
  ALL_CATEGORIES,
  Category,
  categoryColors,
  categoryJA,
} from "@/lib/domain/category";
import { Experience } from "@/sanity/types";

interface ListItemProps extends React.ComponentProps<"div"> {
  experience: Experience;
}

function isCategory(category: string): category is Category {
  return ALL_CATEGORIES.includes(category as Category);
}

export function ListItem({ experience }: ListItemProps) {
  return (
    <AccordionItem value={experience._id} className="">
      <AccordionTrigger className="cursor-pointer">
        <div className="flex items-center justify-items-end pr-4 w-full">
          <div className="flex flex-col mr-auto items-start">
            <Text
              variant="h2"
              className="text-base sm:text-lg md:text-3xl text-left"
            >
              {experience.name}
            </Text>
          </div>
          <div className="flex gap-4">
            {experience.categories?.every((c) => isCategory(c)) &&
              experience.categories?.map((category) => (
                <Pill key={category} variant={categoryColors[category]}>
                  {categoryJA[category]}
                </Pill>
              ))}
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <div className="flex flex-col gap-4">
          <Text variant="p" color="muted">
            {experience.introduction}
          </Text>
          <div className="flex flex-col gap-2">
            {experience.website && (
              <div className="flex flex-col">
                <Text variant="p" color="foreground">
                  ウェブサイト:
                </Text>
                <Text variant="p" color="muted" className="!mt-0">
                  {experience.website}
                </Text>
              </div>
            )}
            {experience.hours && (
              <div className="flex flex-col">
                <Text variant="p" color="foreground">
                  営業時間:
                </Text>
                <Text variant="p" color="muted" className="!mt-0">
                  {experience.hours}
                </Text>
              </div>
            )}
            {experience.address && (
              <div className="flex flex-col">
                <Text variant="p" color="foreground">
                  住所:
                </Text>
                <Text variant="p" color="muted" className="!mt-0">
                  {experience.address}
                </Text>
              </div>
            )}
            {experience.pricerange && (
              <div className="flex flex-col">
                <Text variant="p" color="foreground">
                  値幅:
                </Text>
                <Text variant="p" color="muted" className="!mt-0">
                  {experience.pricerange}
                </Text>
              </div>
            )}
            {experience.phone && (
              <div className="flex flex-col">
                <Text variant="p" color="foreground">
                  携帯電話:
                </Text>
                <Text variant="p" color="muted" className="!mt-0">
                  {experience.phone}
                </Text>
              </div>
            )}
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
