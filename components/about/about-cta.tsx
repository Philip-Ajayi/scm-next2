import { GlassButton } from "@/components/glass-button";

export function AboutCTA() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-24 sm:px-8 lg:px-14 lg:py-36">
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="font-mono text-[9px] uppercase tracking-[0.24em] text-black/35">
          06 · Your appointment
        </div>

        <h2 className="mt-6 font-display text-[clamp(3.5rem,8.5vw,8.5rem)] leading-[0.78] tracking-[-0.06em]">
          Come with a
          <br />
          <i>hungry heart.</i>
        </h2>

        <p className="mx-auto mt-8 max-w-xl text-base leading-7 text-black/60">
          Bring a friend, bring someone you love. It is your divine appointment with
          God’s purpose. Attendance is completely free, but registration is compulsory
          to secure your place.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <GlassButton href="/#register" dark>
            Register Now · Free
          </GlassButton>

          <GlassButton href="/#ministers">
            Meet The Ministers
          </GlassButton>
        </div>

        <div className="mt-14 font-mono text-[9px] uppercase tracking-[0.2em] text-black/35">
          19 – 22 November 2026 · Rochester Airport Marriott · Rochester, NY
        </div>
      </div>
    </section>
  );
}