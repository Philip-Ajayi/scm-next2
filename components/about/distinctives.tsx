import { DISTINCTIVES } from "@/data/about";
import { SectionLabel } from "@/components/section-label";

export function Distinctives() {
  return (
    <section className="relative overflow-hidden bg-[#101014] px-5 py-28 text-white sm:px-8 lg:px-14 lg:py-36">
      <div className="pointer-events-none absolute -left-20 top-1/2 h-[32rem] w-[32rem] -translate-y-1/2 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel light>04 · Non-negotiables</SectionLabel>

            <h2 className="mt-6 font-display text-[clamp(3.5rem,8vw,8rem)] leading-[0.8] tracking-[-0.055em]">
              Uncompromising
              <br />
              <i>convictions.</i>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-white/50 sm:text-base">
            No entertainment allowed. No side attractions permitted. A pure
            atmosphere consecrated exclusively for the Word in revelation and
            the Holy Ghost in demonstration.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {DISTINCTIVES.map((item, idx) => (
            <div
              key={item.title}
              className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-white/[0.06]"
            >
              <div>
                <div className="text-3xl">{item.icon}</div>

                <div className="mt-6 font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">
                  0{idx + 1}
                </div>

                <h3 className="mt-2 font-display text-2xl tracking-tight text-white">
                  {item.title}
                </h3>

                <p className="mt-1 text-xs italic text-violet-300">
                  {item.tagline}
                </p>

                <p className="mt-4 text-xs leading-6 text-white/60">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 h-0.5 w-6 bg-white/20 transition-all duration-500 group-hover:w-full group-hover:bg-violet-400" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}