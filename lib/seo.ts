export const SITE_NAME = "秋月 Akizuki, Fukuoka";
export const DEFAULT_SEO_TITLE = "秋月 Akizuki, Fukuoka";
export const DEFAULT_SEO_DESCRIPTION =
  "秋月の歴史、暮らし、観光情報を紹介する公式サイト。Akizuki is a historic castle town in Asakura, Fukuoka, Japan.";
export const DEFAULT_OG_IMAGE_PATH = "/images/landing/Akizuki_4.jpg";
export const DEFAULT_ENGLISH_SEO_SUFFIX =
  "Discover Akizuki in Asakura, Fukuoka, Japan.";

export function getBaseUrl(): URL {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL ?? process.env.VERCEL_URL;

  if (configuredUrl) {
    const withProtocol = configuredUrl.startsWith("http")
      ? configuredUrl
      : `https://${configuredUrl}`;

    return new URL(withProtocol);
  }

  return new URL("http://localhost:3000");
}

export function toAbsoluteUrl(path: string): string {
  return new URL(path, getBaseUrl()).toString();
}

export function getDefaultOpenGraphImage() {
  return {
    url: toAbsoluteUrl(DEFAULT_OG_IMAGE_PATH),
    width: 1200,
    height: 630,
    alt: "秋月の風景 / Scenery of Akizuki, Fukuoka",
  };
}

export function withEnglishSeoSuffix(
  description: string,
  suffix: string = DEFAULT_ENGLISH_SEO_SUFFIX
): string {
  if (!description) {
    return suffix;
  }

  if (description.includes(suffix)) {
    return description;
  }

  return `${description} ${suffix}`;
}
