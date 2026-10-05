import type { Metadata } from "next";
import { Manrope, DM_Mono, Instrument_Serif } from "next/font/google";

import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: "400",
  display: "swap"
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap"
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Supernatural Community Church | Supernatural Camp Meeting 2026",
  description:
    "Come expecting the Word, the Spirit, and an encounter that leaves you transformed.",
  keywords: [
    "Supernatural Community Church",
    "Supernatural Camp Meeting",
    "Rochester church",
    "Christian church",
    "Holy Spirit",
    "Word of God"
  ],
  openGraph: {
    title: "Supernatural Camp Meeting 2026",
    description:
      "The Word. The Spirit. The Encounter.",
    images: ["/main/hero.jpeg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${manrope.variable} ${dmMono.variable}`}
    >
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
