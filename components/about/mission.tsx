import Image from "next/image";
import { MISSION_STATEMENT, MISSION_PILLARS } from "@/data/about";
import { SectionLabel } from "@/components/section-label";

export function Mission() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f5] px-5 py-24 sm:px-8 lg:px-14 lg:py-36">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left: Text & Statement */}
          <div>
            <SectionLabel>{MISSION_STATEMENT.subtitle}</SectionLabel>

            <h2 className="mt-6 font-display text-[clamp(3.5rem,7vw,7.5rem)] leading-[0.8] tracking-[-0.05em]">
              Our
              <br />
              <i>mission.</i>
            </h2>

            <blockquote className="mt-8 font-display text-2xl italic leading-snug text-black/85 sm:text-3xl">
              &ldquo;{MISSION_STATEMENT.statement}&rdquo;
            </blockquote>

            <p className="mt-6 text-sm leading-7 text-black/60 sm:text-base">
              {MISSION_STATEMENT.explanation}
            </p>

            <div className="mt-10 space-y-4">
              {MISSION_PILLARS.map((pillar) => (
                <div
                  key={pillar.number}
                  className="rounded-2xl border border-black/10 bg-white p-5 transition-all duration-300 hover:border-black/20"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs font-bold text-violet-600">
                      {pillar.number}
                    </span>
                    <h4 className="font-display text-xl">{pillar.title}</h4>
                  </div>
                  <p className="mt-2 text-xs leading-5 text-black/55 sm:text-sm">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Second Image visual */}
          <div className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] border border-black/10 bg-black/5 shadow-[0_24px_70px_rgba(0,0,0,0.06)]">
              <Image
                src="/about/2.jpeg"
                alt="Believers engaged in earnest prayer and worship"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 font-mono text-[10px] uppercase tracking-[0.2em] text-white/80">
                Light up every dark place in the Earth
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}