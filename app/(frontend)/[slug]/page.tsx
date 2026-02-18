import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/live";
import { contentPageQuery } from "@/sanity/lib/queries";
import ContentPage from "@/components/pages/content-page";
import { UnderConstruction } from "@/components/ui/under-construction";
import {
  DEFAULT_SEO_DESCRIPTION,
  getDefaultOpenGraphImage,
  withEnglishSeoSuffix,
} from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

async function getContentPage(slug: string) {
  const { data } = await sanityFetch({
    query: contentPageQuery,
    params: { slug },
  });

  return data;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = await getContentPage(slug);

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
    page.preamble ?? DEFAULT_SEO_DESCRIPTION
  );

  return {
    title,
    description,
    alternates: {
      canonical: `/${slug}`,
    },
    openGraph: {
      type: "article",
      title: `${title} | Akizuki, Fukuoka`,
      description,
      url: `/${slug}`,
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
  const data = await getContentPage(slug);

  if (!data) {
    notFound();
  }

  if (data?.wip) {
    return <UnderConstruction />;
  }

  return <ContentPage page={data} />;
}
