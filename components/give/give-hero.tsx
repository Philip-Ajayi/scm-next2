import { SectionLabel } from "@/components/section-label";
import { ShieldCheck, HeartHandshake } from "lucide-react";

export function GiveHero() {
  return (
    <section className="relative overflow-hidden bg-[#101014] pb-20 pt-36 text-white sm:pt-44 lg:pb-28 lg:pt-48">
      {/* Background radial glows */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-5%] top-1/4 h-[26rem] w-[26rem] rounded-full bg-magenta-500/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-14">
        <div className="max-w-4xl">
          <SectionLabel light>01 · Church Giving</SectionLabel>

          <h1 className="mt-8 font-display text-[clamp(3.8rem,9vw,9.5rem)] leading-[0.8] tracking-[-0.055em]">
            Honor the Lord
            <br />
            <i>with your substance.</i>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
            Your generous giving powers the preaching of the Word, the operations
            of the church, and the Supernatural Camp Meeting. Thank you for
            partnering in the work of redemption.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-white/50">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-emerald-400" />
              <span>Secure 256-Bit SSL via Stripe</span>
            </div>
            <div className="flex items-center gap-2">
              <HeartHandshake size={16} className="text-violet-400" />
              <span>Tax Deductible Contributions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}