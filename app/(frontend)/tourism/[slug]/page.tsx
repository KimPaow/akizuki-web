import { sanityFetch } from "@/sanity/live";
import { tourismPageQuery } from "@/sanity/lib/queries";
import TourismPage from "@/components/pages/tourism-page";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { data } = await sanityFetch({
    query: tourismPageQuery,
    params: { slug },
  });

  return <TourismPage page={data} />;
}
