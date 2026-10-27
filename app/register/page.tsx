import type { Metadata } from "next";
import { RegisterHero } from "@/components/register/register-hero";
import { RegisterForm } from "@/components/register/register-form";
import { RegisterFlierCard } from "@/components/register/register-flier-card";

export const metadata: Metadata = {
  title: "Register | Supernatural Camp Meeting 2026",
  description:
    "Register for Supernatural Camp Meeting 2026 in Rochester, NY. Free admission, compulsory registration.",
  openGraph: {
    title: "Register | Supernatural Camp Meeting 2026",
    description:
      "Join believers under the tent from Nov 19 – 22, 2026 at Rochester Airport Marriott, NY.",
    images: ["/register/flier.jpeg"]
  }
};

export default function RegisterPage() {
  return (
    <>
      <RegisterHero />

      <section className="relative bg-[#f7f7f5] px-5 py-24 sm:px-8 lg:px-14 lg:py-32">
        <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Main Registration Form */}
          <div>
            <RegisterForm />
          </div>

          {/* Flier and Logistics Card */}
          <div>
            <RegisterFlierCard />
          </div>
        </div>
      </section>
    </>
  );
}