import { SectionLabel } from "@/components/section-label";
import { Sparkles, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export function RegisterHero() {
  return (
    <section className="relative overflow-hidden bg-[#101014] pb-20 pt-36 text-white sm:pt-44 lg:pb-28 lg:pt-48">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-5%] top-1/3 h-[26rem] w-[26rem] rounded-full bg-magenta-500/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-14">
        <div className="max-w-4xl">
          <SectionLabel light>01 · Consecrate Your Seat</SectionLabel>

          <h1 className="mt-8 font-display text-[clamp(3.8rem,9vw,9.5rem)] leading-[0.8] tracking-[-0.055em]">
            Come
            <br />
            <i>expecting.</i>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
            Attendance is <strong>100% FREE</strong>, but registration is{" "}
            <strong>COMPULSORY</strong> for entry and hall allocation. Secure
            your seat for four days of the Word and demonstrations of the Holy Spirit.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-white/60">
            <div className="flex items-center gap-2">
              <Calendar size={15} className="text-violet-400" />
              <span>Nov 19th – 22nd, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={15} className="text-violet-400" />
              <span>Rochester Airport Marriott, NY</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-emerald-400" />
              <span>Instant Confirmation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}