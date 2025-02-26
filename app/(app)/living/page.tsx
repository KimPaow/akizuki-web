import { ContactForm } from "@/components/forms/contact";
import { Divider } from "@/components/ui/divider";
import Link from "@/components/ui/link";
import Text from "@/components/ui/text";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div className="min-h-screen w-full max-w-[1280px] mx-auto flex flex-col gap-16 my-32 items-center">
      <div className="flex flex-col gap-8 max-w-[60ch] mx-4 sm:mx-0">
        <Text variant="h1">Living</Text>
        <Text variant="lead" color="muted">
          Are you interested in joining the community?
        </Text>
        <Divider decorative />
        <ol className="list-disc list-inside flex flex-col gap-1">
          <li>
            <Link underline href="#amenities" variant="arrow">
              Amenities
            </Link>
          </li>
          <li>
            <Link underline href="#incentives" variant="arrow">
              Incentives
            </Link>
          </li>
          <li>
            <Link underline href="#contact" variant="arrow">
              Contact
            </Link>
          </li>
        </ol>
        <Divider decorative />
        <div>
          <Text>
            The town&apos;s population is just over 500 and, like many rural
            areas of the country, is experiencing a wave of aging. Despite this,
            the samurai spirit remains strong and the story continues. Like
            Akizuki&apos;s cherry blossoms each year, new life is blooming in
            Akizuki - from tourist visitors to new local businesses.
          </Text>
          <Text>
            Any visit to the town reveals a hundred new stories, with a hundred
            more hidden behind each of them. Please enjoy your time here. By
            discovering and retelling them, you allow those stories to live.
          </Text>
          <Text>
            Akizuki is the setting of not one but two world famous films. Mount
            Kosho is the symbol of the region and was the Akizuki Clan&apos;s
            main castle base in the 13th century, 700 meters above the present
            village.
          </Text>
          <Text>
            This first inspired Akira Kurosawa&apos;s Kakushitoride No Sanakunin
            (The Hidden Fortress for English-speaking audiences). This then
            became the inspiration for George Lucas&apos; blockbuster &quot;Star
            Wars: A New Hope.&quot;
          </Text>
          <Text id="amenities" variant="h2">
            Amenities
          </Text>
          <Text>
            Something about the amenities and good things about life in Akizuki.
          </Text>
          <Image
            src="/images/drone_school_2.JPG"
            width={4000}
            height={2250}
            alt="school"
            className="mt-4 rounded-sm"
          />
          <Text id="incentives" variant="h2">
            Incentives
          </Text>
          <Text>Something about the incentives for moving to Akizuki.</Text>
          <Text variant="h3">Trial Residence Program</Text>
          <Text>
            This program allows people to temporarily become Asakura residents
            and experience relocation through experiencing the local culture and
            interacting with the local community. Use of the facility is limited
            to those who can participate in local projects and events related to
            relocating to Asakura City during their stay.
          </Text>
          <Link
            href="https://www.city.asakura.lg.jp/www/contents/1630992806061/index.html"
            underline
            variant="arrow"
            className="mt-4 inline-block"
          >
            Learn more about the program
          </Link>
          <Text id="relocation-support" variant="h3">
            Relocation Support
          </Text>
          <Text>
            Asakura City will provide a relocation and settlement support grant
            to those who are considering relocating and settling in Asakura City
            from outside the city. The &quot;Asakura Relocation and Settlement
            Support Grant&quot; is for those who have lived in other cities,
            towns, and villages for at least one year prior to moving to Asakura
            City, and who have moved here with the intention of living in
            Asakura City for at least five years.
          </Text>
          <Link
            href="https://www.city.asakura.lg.jp/www/contents/1589440417989/index.html"
            underline
            variant="arrow"
            className="mt-4 inline-block"
          >
            Learn more about the program
          </Link>
          <Text id="contact" variant="h2">
            Contact
          </Text>
          <div className="mt-10 max-w-[60ch]">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
