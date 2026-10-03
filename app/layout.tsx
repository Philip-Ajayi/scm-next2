import type { Metadata } from "next";
import { Instrument_Serif, Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { SiteShell } from "@/components/site-shell";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap"
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap"
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Supernatural Community Church — Camp Meeting 2026",
  description:
    "Supernatural Camp Meeting 2026. Come expecting. Leave transformed.",
  keywords: [
    "Supernatural Community Church",
    "Supernatural Camp Meeting",
    "Rochester church",
    "Christian conference",
    "Camp Meeting 2026"
  ],
  icons: {
    icon: "/main/Logooo.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${instrumentSerif.variable} ${geist.variable} ${geistMono.variable}`}
      >
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}