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
  title: "秋月",
  description: "歴史を感じる旅",
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
        className={`${figtree.variable} ${zenOldMincho.variable} font-[family-name:var(--font-figtree)] antialiased h-full w-full`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
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
      </body>
    </html>
  );
}
