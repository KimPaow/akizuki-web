import { ContactForm } from "@/components/forms/contact";
import { Divider } from "@/components/ui/divider";
import Text from "@/components/ui/text";
import { sanityFetch } from "@/sanity/live";
import { livingPageQuery } from "@/sanity/lib/queries";
import { nestHeadings, TableOfContents } from "@/components/ui/sanity-toc";
import { PortableText } from "@/components/ui/portable-text";

export default async function Page() {
  const { data: page } = await sanityFetch({ query: livingPageQuery });

  return (
    <div className="min-h-screen w-full max-w-[1280px] mx-auto flex flex-col gap-16 my-32 items-center">
      <div className="flex flex-col gap-8 max-w-[60ch] mx-4 sm:mx-0">
        <Text variant="h1">{page.name}</Text>
        <Text variant="lead" color="muted">
          {page.preamble}
        </Text>
        <Divider decorative />
        <TableOfContents elements={nestHeadings(page.headings)} />
        <Divider decorative />
        {page.content && page.content.length > 0 && (
          <div className="prose max-w-none">
            <PortableText value={page.content} />
          </div>
        )}
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
