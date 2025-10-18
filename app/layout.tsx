import type { Metadata, Viewport } from "next";
import { Comfortaa, Sen, Poppins } from "next/font/google";
import './style.linaria.global';

const comfortaa = Comfortaa({
  subsets: ["latin"]
})

const sen = Sen({
  subsets: ["latin"]
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400"
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
      <body>{children}</body>
    </html>
  );
}
