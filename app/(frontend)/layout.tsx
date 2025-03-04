import type { Metadata } from "next";
import { Figtree, Shippori_Mincho } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { Toaster } from "@/components/ui/sonner";
import { Suspense } from "react";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const mincho = Shippori_Mincho({
  variable: "--font-mincho",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "秋月",
  description: "歴史を感じる旅",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      suppressHydrationWarning
      className="h-full w-full scroll-smooth"
    >
      <body
        className={`${figtree.variable} ${mincho.variable} font-[family-name:var(--font-figtree)] antialiased h-full w-full`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={null}>
            <Header />
            {children}
            <Footer />
            <Toaster />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
