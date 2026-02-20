import type { Metadata } from "next";
import { preloadModule } from "react-dom";

const bridgeScript = "https://core.sanity-cdn.com/bridge.js";

export const metadata: Metadata = {
  title: "Admin",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  preloadModule(bridgeScript, { as: "script" });

  return (
    <html lang="ja">
      <body>
        <script src={bridgeScript} async type="module" />
        {children}
      </body>
    </html>
  );
}
