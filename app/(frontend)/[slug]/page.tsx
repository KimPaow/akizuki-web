import { sanityFetch } from "@/sanity/live";
import { contentPageQuery } from "@/sanity/lib/queries";
import ContentPage from "@/components/pages/content-page";
import { UnderConstruction } from "@/components/ui/under-construction";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { data } = await sanityFetch({
    query: contentPageQuery,
    params: { slug },
  });

  if (data?.wip) {
    return <UnderConstruction />;
  }

  return <ContentPage page={data} />;
}
