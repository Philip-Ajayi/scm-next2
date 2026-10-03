import { Hero } from "@/components/hero/hero";
import { EditorialStatement } from "@/components/experience/editorial-statement";
import { WhatToExpect } from "@/components/experience/what-to-expect";
import { WordSection } from "@/components/word/word-section";
import { SpiritSection } from "@/components/spirit/spirit-section";
import { MinistersSection } from "@/components/ministers/ministers-section";
import { GallerySection } from "@/components/gallery/gallery-section";
import { EventInformation } from "@/components/event/event-information";
import { RegisterSection } from "@/components/registration/register-section";
import { ResourcesSection } from "@/components/resources/resources-section";
import { FinalStatement } from "@/components/experience/final-statement";

export default function HomePage() {
  return (
    <main className="page-shell">
      <Hero />

      <EditorialStatement />

      <WhatToExpect />

      <WordSection />

      <SpiritSection />

      <MinistersSection />

      <GallerySection />

      <EventInformation />

      <RegisterSection />

      <ResourcesSection />

      <FinalStatement />
    </main>
  );
}