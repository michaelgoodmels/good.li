import type { Metadata } from "next";
import { Bebas_Neue, Caveat, Geist, Geist_Mono, Righteous } from "next/font/google";
import "./globals.css";
import HibiscusDecor from "./components/HibiscusDecor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Surfer-style display font for all headings and UI
const righteous = Righteous({
  variable: "--font-righteous",
  subsets: ["latin"],
  weight: "400",
});

// Bold condensed surf-magazine font for the main title
const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

// Handwriting font for polaroid captions
const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Familie Good",
  description: "Die Webseite der Familie Good",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${righteous.variable} ${bebasNeue.variable} ${caveat.variable} antialiased`}
      >
        {children}
        <HibiscusDecor />
      </body>
    </html>
  );
}
