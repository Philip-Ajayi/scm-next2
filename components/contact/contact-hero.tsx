import { SectionLabel } from "@/components/section-label";

export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#101014] pb-20 pt-36 text-white sm:pt-44 lg:pb-28 lg:pt-48">
      {/* Background ambient light */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-5%] top-1/3 h-[26rem] w-[26rem] rounded-full bg-magenta-500/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-14">
        <div className="max-w-4xl">
          <SectionLabel light>01 · Get In Touch</SectionLabel>

          <h1 className="mt-8 font-display text-[clamp(3.8rem,9vw,9.5rem)] leading-[0.8] tracking-[-0.055em]">
            Connect
            <br />
            <i>with us.</i>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
            Have questions about Supernatural Camp Meeting 2026, prayer requests,
            or church activities? Reach out to our leadership and administration
            team below.
          </p>
        </div>
      </div>
    </section>
  );
}