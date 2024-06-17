import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EpicCarlito",
  description: "My personal website!",
  openGraph: {
    url: "https://epiccarlito.vercel.app/",
    title: "EpicCarlito",
    description: "My personal website!",
    images: [
      {
        url: "https://i.imgur.com/B26NEIr.png?size=512",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#7289da",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
