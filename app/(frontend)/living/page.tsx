import { ContactForm } from "@/components/forms/contact";
import { Divider } from "@/components/ui/divider";
import Link from "@/components/ui/link";
import Text from "@/components/ui/text";
import buildConfig from "@/payload.config";
import { getPayload } from "payload";
import { CustomizedRichText } from "@/components/ui/rich-text";
import { cn, extractTableOfContents, TableOfContentsItem } from "@/lib/utils";

export default async function Page() {
  const payload = await getPayload({ config: buildConfig });
  const page = await payload.findByID({
    collection: "pages",
    depth: 2,
    id: 3,
  });

  const headings = extractTableOfContents(page.content);

  return (
    <div className="min-h-screen w-full max-w-[1280px] mx-auto flex flex-col gap-16 my-32 items-center">
      <div className="flex flex-col gap-8 max-w-[60ch] mx-4 sm:mx-0">
        <Text variant="h1">{page.title}</Text>
        <Text variant="lead" color="muted">
          {page.preamble}
        </Text>
        <Divider decorative />
        <TableOfContents headings={headings} className="!my-0" />
        <Divider decorative />
        {page.content && <CustomizedRichText data={page.content} />}
        <Text id="contact" variant="h2">
          Contact
        </Text>
        <div className="mt-10 max-w-[60ch]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

const TableOfContents = ({
  headings,
  className,
  level = 2,
}: {
  headings: TableOfContentsItem[];
  className: string;
  level?: number;
}) => {
  return (
    <ul className={cn("flex flex-col gap-1", className)}>
      {headings.map((heading) => {
        if (heading.level > level) return null;
        return (
          <li
            key={heading.level + heading.id}
            className={`px-${(heading.level - 1) * 4}`}
            data-level={heading.level}
          >
            <Link underline href={`#${heading.id}`}>
              {heading.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
