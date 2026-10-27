import Link from "next/link";
import { ArrowUpRight, Calendar, MapPin, Sparkles } from "lucide-react";
import { SectionLabel } from "@/components/section-label";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#101014] pb-24 pt-36 text-white sm:pt-44 lg:pb-32 lg:pt-48">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-10%] top-1/4 h-[28rem] w-[28rem] rounded-full bg-magenta-500/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-14">
        <div className="max-w-4xl">
          <SectionLabel light>01 · About the meeting</SectionLabel>

          <h1 className="mt-8 font-display text-[clamp(3.8rem,9vw,9.5rem)] leading-[0.8] tracking-[-0.055em]">
            Heaven in
            <br />
            <i>earthly places.</i>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
            Patterned after historic tent meetings and apostolic demonstrations:
            all-day gatherings dedicated strictly to the Word, the Spirit, and an
            encounter that leaves you transformed.
          </p>
        </div>

        {/* Floating Logistics Badge */}
        <div className="mt-14 grid gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl sm:grid-cols-3 sm:p-7">
          <div className="flex items-center gap-4">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 bg-white/5 text-violet-400">
              <Calendar size={18} />
            </div>
            <div>
              <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/40">
                Dates
              </div>
              <div className="mt-0.5 text-sm font-semibold">
                Nov 19th – 22nd, 2026
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 border-t border-white/10 pt-4 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 bg-white/5 text-violet-400">
              <MapPin size={18} />
            </div>
            <div>
              <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/40">
                The &ldquo;Tent&rdquo;
              </div>
              <div className="mt-0.5 text-sm font-semibold">
                Rochester Airport Marriott, NY
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 border-t border-white/10 pt-4 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 bg-white/5 text-emerald-400">
              <Sparkles size={18} />
            </div>
            <div>
              <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/40">
                Admission
              </div>
              <div className="mt-0.5 text-sm font-semibold text-emerald-300">
                Free · Compulsory Registration
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}