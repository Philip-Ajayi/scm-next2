import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";

export const metadata: Metadata = {
  title: "Contact Us | Supernatural Community Church",
  description:
    "Connect with Supernatural Community Church in Rochester, NY. Send prayer requests, inquiries about Supernatural Camp Meeting 2026, or general questions.",
  openGraph: {
    title: "Contact Us | Supernatural Community Church",
    description:
      "Get in touch with our team: 585-210-5038, info@supernaturalcc.org, 1400 Lehigh Station Road, Rochester, NY."
  }
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <section className="relative bg-[#f7f7f5] px-5 py-24 sm:px-8 lg:px-14 lg:py-32">
        <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[1.25fr_0.75fr]">
          {/* Main interactive contact form */}
          <div>
            <ContactForm />
          </div>

          {/* Direct channels & campus address */}
          <div>
            <ContactInfo />
          </div>
        </div>
      </section>
    </>
  );
}