import type { MetadataRoute } from "next";
import { getBaseUrl } from "@/lib/seo";
import { sanityFetch } from "@/sanity/live";
import { experienceSlugsQuery, pageSlugsQuery } from "@/sanity/lib/queries";

type SlugRecord = {
  slug?: string;
  _updatedAt?: string;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [pagesResult, experiencesResult] = await Promise.all([
    sanityFetch({ query: pageSlugsQuery }),
    sanityFetch({ query: experienceSlugsQuery }),
  ]);

  const pages = (pagesResult.data ?? []) as SlugRecord[];
  const experiences = (experiencesResult.data ?? []) as SlugRecord[];
  const baseUrl = getBaseUrl();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: new URL("/", baseUrl).toString(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: new URL("/tourism", baseUrl).toString(),
      changeFrequency: "daily",
      priority: 0.8,
    },
  ];

  const contentRoutes: MetadataRoute.Sitemap = pages
    .filter((page) => Boolean(page.slug))
    .map((page) => ({
      url: new URL(`/${page.slug}`, baseUrl).toString(),
      lastModified: page._updatedAt ? new Date(page._updatedAt) : undefined,
      changeFrequency: "weekly",
      priority: 0.7,
    }));

  const tourismRoutes: MetadataRoute.Sitemap = experiences
    .filter((experience) => Boolean(experience.slug))
    .map((experience) => ({
      url: new URL(`/tourism/${experience.slug}`, baseUrl).toString(),
      lastModified: experience._updatedAt
        ? new Date(experience._updatedAt)
        : undefined,
      changeFrequency: "weekly",
      priority: 0.7,
    }));

  return [...staticRoutes, ...contentRoutes, ...tourismRoutes];
}
