import Image from "next/image";
import { CAMP_MEETING_HISTORY } from "@/data/about";
import { SectionLabel } from "@/components/section-label";

export function CampOrigin() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f5] px-5 py-24 sm:px-8 lg:px-14 lg:py-36">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left: Editorial visual */}
          <div className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] border border-black/10 bg-black/5 shadow-[0_24px_70px_rgba(0,0,0,0.06)]">
              <Image
                src="/about/1.jpeg"
                alt="Believers gathered in worship and prayer at Supernatural Camp Meeting"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl text-white">
                <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/70">
                  Historic Heritage
                </div>
                <p className="mt-2 font-display text-2xl italic leading-snug">
                  &ldquo;A tent pitched in the wilderness of the world, where God visits man.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Right: History content */}
          <div>
            <SectionLabel>{CAMP_MEETING_HISTORY.subtitle}</SectionLabel>

            <h2 className="mt-6 font-display text-[clamp(3.5rem,7vw,7rem)] leading-[0.82] tracking-[-0.05em]">
              The tent of
              <br />
              <i>meeting.</i>
            </h2>

            <p className="mt-8 text-base leading-8 text-black/70 sm:text-lg">
              {CAMP_MEETING_HISTORY.description}
            </p>

            <div className="mt-6 border-l-2 border-black/15 pl-6 text-sm leading-7 text-black/60 sm:text-base">
              {CAMP_MEETING_HISTORY.body}
            </div>

            <div className="mt-8 rounded-2xl border border-violet-500/20 bg-violet-500/5 p-6">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-violet-700">
                {CAMP_MEETING_HISTORY.highlight}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}