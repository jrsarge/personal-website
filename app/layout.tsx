import type { Metadata } from "next";
import { Merriweather_Sans } from "next/font/google";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/next";

import { CoreMenu } from "@/components/core/core-menu";

const coreFont = Merriweather_Sans({ subsets: ["latin"] });

export let metadata: Metadata = {
  title: "Jacob Sargent",
  description: "Created by Jacob Sargent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={coreFont.className}>
        <CoreMenu />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
