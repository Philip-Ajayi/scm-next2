import type { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { CampOrigin } from "@/components/about/camp-origin";
import { PatternPurpose } from "@/components/about/pattern-purpose";
import { Distinctives } from "@/components/about/distinctives";
import { Mission } from "@/components/about/mission";
import { AboutCTA } from "@/components/about/about-cta";

export const metadata: Metadata = {
  title: "About | Supernatural Camp Meeting 2026",
  description:
    "Learn about Supernatural Camp Meeting, patterned after historic tent meetings: day teaching sessions on who you are in Christ, and night demonstrations of the Holy Spirit.",
  openGraph: {
    title: "About Supernatural Camp Meeting 2026",
    description:
      "What is a Camp Meeting? Discover the pattern, purpose, and mission behind this four-day gathering in Rochester, NY.",
    images: ["/about/1.jpeg"]
  }
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CampOrigin />
      <PatternPurpose />
      <Distinctives />
      <Mission />
      <AboutCTA />
    </>
  );
}