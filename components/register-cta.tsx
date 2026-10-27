import { GlassButton } from "@/components/glass-button";

export function RegisterCTA() {
  return (
    <section
      id="register"
      className="relative min-h-[90svh] overflow-hidden bg-white px-5 py-28 sm:px-8 lg:px-14 lg:py-40"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="portal animate-light" />

        <div className="absolute h-[22rem] w-[22rem] rounded-full bg-violet-400/10 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[70svh] max-w-[1300px] flex-col items-center justify-center text-center">
        <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-black/35">
          08 · Respond
        </div>

        <h2 className="mt-8 max-w-5xl font-display text-[clamp(4.5rem,11vw,12rem)] leading-[0.74] tracking-[-0.065em]">
          Come
          <br />
          <i>expecting.</i>
        </h2>

        <p className="mt-9 max-w-lg text-sm leading-7 text-black/50 sm:text-base">
          Prepare your heart for the Word, the Spirit, and an encounter that
          leaves you transformed.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <GlassButton href="#register" dark>
            Register Now
          </GlassButton>

          <GlassButton href="#schedule">
            See Schedule
          </GlassButton>
        </div>

        <div className="mt-16 font-mono text-[9px] uppercase tracking-[0.18em] text-black/30">
          19 November 2026 · 7:00 PM EST · Rochester, NY
        </div>
      </div>
    </section>
  );
}
