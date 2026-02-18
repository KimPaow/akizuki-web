import { Divider } from "@/components/ui/divider";
import Text from "@/components/ui/text";
import { nestHeadings, TableOfContents } from "@/components/ui/sanity-toc";
import { PortableText } from "@/components/ui/portable-text";
import { TourismPageQueryResult } from "@/sanity/types";

export default async function TourismPage({
  page,
}: {
  page: TourismPageQueryResult;
}) {
  return (
    <div className="min-h-screen w-full max-w-[1280px] mx-auto flex flex-col gap-16 my-32 items-center">
      <div className="flex flex-col gap-8 max-w-[60ch] mx-4 sm:mx-0">
        {page?.name && <Text variant="h1">{page.name}</Text>}
        {page?.introduction && (
          <Text variant="lead" color="muted">
            {page.introduction}
          </Text>
        )}
        {page?.headings && page.toc && (
          <>
            <Divider decorative />
            <TableOfContents elements={nestHeadings(page.headings)} />
            <Divider decorative />
          </>
        )}
        {page?.content && page?.content.length > 0 && (
          <div className="prose max-w-none">
            <PortableText value={page?.content} />
          </div>
        )}
      </div>
    </div>
  );
}
