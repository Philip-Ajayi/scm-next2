import { Suspense } from "react";
import type { Metadata } from "next";
import { GiveHero } from "@/components/give/give-hero";
import { GiveForm } from "@/components/give/give-form";
import { MailGiftCard } from "@/components/give/mail-gift-card";
import { GivingScriptures } from "@/components/give/giving-scriptures";

export const metadata: Metadata = {
  title: "Give | Supernatural Community Church",
  description:
    "Partner with Supernatural Community Church and the Supernatural Camp Meeting 2026. Give online securely via Stripe.",
  openGraph: {
    title: "Give | Supernatural Community Church",
    description:
      "Support our General Offering or Supernatural Camp Meeting 2026. Safe, secure giving via Stripe."
  }
};

export default function GivePage() {
  return (
    <>
      <GiveHero />

      <section className="relative bg-[#f7f7f5] px-5 py-24 sm:px-8 lg:px-14 lg:py-32">
        <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Main Online Donation Form wrapped in Suspense for search params */}
          <Suspense fallback={<div className="h-96 rounded-3xl bg-white/50 animate-pulse" />}>
            <GiveForm />
          </Suspense>

          {/* Mail a Gift and Physical Address Card */}
          <aside>
            <MailGiftCard />
          </aside>
        </div>
      </section>

      <GivingScriptures />
    </>
  );
}