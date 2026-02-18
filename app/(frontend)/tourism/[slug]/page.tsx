import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/live";
import { tourismPageQuery } from "@/sanity/lib/queries";
import TourismPage from "@/components/pages/tourism-page";
import {
  DEFAULT_SEO_DESCRIPTION,
  getDefaultOpenGraphImage,
  withEnglishSeoSuffix,
} from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

async function getTourismPage(slug: string) {
  const { data } = await sanityFetch({
    query: tourismPageQuery,
    params: { slug },
  });

  return data;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = await getTourismPage(slug);

  if (!page) {
    return {
      title: "ページが見つかりません / Page not found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = page.name ?? slug;
  const description = withEnglishSeoSuffix(
    page.introduction ?? DEFAULT_SEO_DESCRIPTION
  );

  return {
    title,
    description,
    alternates: {
      canonical: `/tourism/${slug}`,
    },
    openGraph: {
      type: "article",
      title: `${title} | Akizuki, Fukuoka`,
      description,
      url: `/tourism/${slug}`,
      images: [getDefaultOpenGraphImage()],
    },
    twitter: {
      title: `${title} | Akizuki, Fukuoka`,
      description,
      images: [getDefaultOpenGraphImage().url],
    },
    robots: page.wip
      ? {
          index: false,
          follow: false,
        }
      : undefined,
  };
}

export default async function Page({
  params,
}: PageProps) {
  const { slug } = await params;
  const data = await getTourismPage(slug);

  if (!data) {
    notFound();
  }

  return <TourismPage page={data} />;
}
