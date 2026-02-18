import type { Metadata } from "next";
import { Zen_Old_Mincho, Figtree } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { Toaster } from "@/components/ui/sonner";
import { Suspense } from "react";
import { sanityFetch, SanityLive } from "@/sanity/live";
import { DisableDraftMode } from "@/components/disable-draft-mode";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
import { layoutQuery } from "@/sanity/lib/queries";
import {
  DEFAULT_SEO_DESCRIPTION,
  DEFAULT_SEO_TITLE,
  SITE_NAME,
  getBaseUrl,
  getDefaultOpenGraphImage,
  withEnglishSeoSuffix,
} from "@/lib/seo";
import { Analytics } from "@vercel/analytics/next";

const zenOldMincho = Zen_Old_Mincho({
  variable: "--font-mincho",
  weight: "400",
  subsets: ["latin"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: getBaseUrl(),
  title: {
    default: DEFAULT_SEO_TITLE,
    template: "%s | 秋月 Akizuki, Fukuoka",
  },
  description: withEnglishSeoSuffix(DEFAULT_SEO_DESCRIPTION),
  applicationName: "秋月 Akizuki",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "秋月",
    "朝倉市",
    "福岡観光",
    "城下町",
    "歴史",
    "旅行",
    "Akizuki",
    "Fukuoka",
    "Akizuki Fukuoka",
    "Asakura Fukuoka",
    "castle town",
    "things to do in Fukuoka",
  ],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: SITE_NAME,
    title: DEFAULT_SEO_TITLE,
    description: withEnglishSeoSuffix(DEFAULT_SEO_DESCRIPTION),
    url: "/",
    images: [getDefaultOpenGraphImage()],
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_SEO_TITLE,
    description: withEnglishSeoSuffix(DEFAULT_SEO_DESCRIPTION),
    images: [getDefaultOpenGraphImage().url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data } = await sanityFetch({
    query: layoutQuery,
  });

  return (
    <html
      lang="ja"
      suppressHydrationWarning
      className="h-full w-full scroll-smooth"
    >
      <body
        className={`${figtree.variable} ${zenOldMincho.variable} font-[family-name:var(--font-mincho)] antialiased h-full w-full`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Suspense fallback={null}>
            <Header data={data?.menu} />
            {children}
            <Footer
              socials={data?.socials}
              menu={data?.menu}
              phone={data?.phone}
              email={data?.email}
            />
            <Toaster />
          </Suspense>
          {(await draftMode()).isEnabled && (
            <>
              <VisualEditing />
              <DisableDraftMode />
            </>
          )}
        </ThemeProvider>
        <SanityLive />
        <Analytics />
      </body>
    </html>
  );
}
