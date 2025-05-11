import type { Metadata, Viewport } from "next";
import { Comfortaa } from "next/font/google";
import './style.linaria.global';

const comfortaa = Comfortaa({
  subsets: ["latin"],
  display: "swap"
})

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
      <body className={comfortaa.className}>{children}</body>
    </html>
  );
}
