import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Text from "@/components/ui/text";
import Pill from "@/components/ui/pill";
import { categoryColors, categoryJA } from "@/lib/domain/category";
import { Experience } from "@/payload-types";

interface ListItemProps extends React.ComponentProps<"div"> {
  experience: Experience;
}

export function ListItem({ experience }: ListItemProps) {
  return (
    <AccordionItem value={experience.id.toString()} className="">
      <AccordionTrigger className="cursor-pointer">
        <div className="flex items-center justify-items-end pr-4 w-full">
          <div className="flex flex-col mr-auto items-start">
            <Text
              variant="h2"
              className="text-base sm:text-lg md:text-3xl text-left"
            >
              {experience.title}
            </Text>
          </div>
          <div className="flex gap-4">
            {experience.categories.map((category) => (
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
            {experience.location?.address && (
              <div className="flex flex-col">
                <Text variant="p" color="foreground">
                  住所:
                </Text>
                <Text variant="p" color="muted" className="!mt-0">
                  {experience.location?.address}
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
            {experience.contact?.phone && (
              <div className="flex flex-col">
                <Text variant="p" color="foreground">
                  携帯電話:
                </Text>
                <Text variant="p" color="muted" className="!mt-0">
                  {experience.contact?.phone}
                </Text>
              </div>
            )}
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
