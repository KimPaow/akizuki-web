import type { Metadata } from "next";
import { Figtree, Shippori_Mincho } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/ui/header";
import { ModeToggle } from "@/components/ui/mode-toggle";
import Link from "next/link";

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
    <html lang="ja" suppressHydrationWarning className="h-full">
      <body
        className={`${figtree.variable} ${mincho.variable} antialiased h-full`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header>
            <Link href="/" className="mr-auto font-semibold hover:underline">
              Akizuki
            </Link>
            <Link href="/" className="font-semibold hover:underline">
              秋月について
            </Link>
            <Link href="/experience" className="font-semibold hover:underline">
              観光
            </Link>
            <Link href="/living" className="font-semibold hover:underline">
              暮らし
            </Link>
            <Link href="/" className="font-semibold hover:underline">
              アクセス
            </Link>
            <ModeToggle />
          </Header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
