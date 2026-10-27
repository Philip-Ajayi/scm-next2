import { PATTERN_AND_PURPOSE } from "@/data/about";
import { SectionLabel } from "@/components/section-label";
import { Sun, Moon, Check } from "lucide-react";

export function PatternPurpose() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-24 sm:px-8 lg:px-14 lg:py-36">
      <div className="mx-auto max-w-[1500px]">
        <div className="max-w-3xl">
          <SectionLabel>{PATTERN_AND_PURPOSE.subtitle}</SectionLabel>

          <h2 className="mt-6 font-display text-[clamp(3.5rem,7.5vw,7.5rem)] leading-[0.8] tracking-[-0.05em]">
            Pattern &
            <br />
            <i>purpose.</i>
          </h2>

          <p className="mt-7 text-base leading-8 text-black/65 sm:text-lg">
            {PATTERN_AND_PURPOSE.inspiration}
          </p>
        </div>

        {/* 2-Column Split: Day vs Evening */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {PATTERN_AND_PURPOSE.sessions.map((session, index) => {
            const isDay = index === 0;

            return (
              <div
                key={session.period}
                className={`relative overflow-hidden rounded-[2.2rem] border p-8 transition-all duration-700 sm:p-11 ${
                  isDay
                    ? "border-amber-500/20 bg-gradient-to-br from-amber-50/40 via-white to-white"
                    : "border-violet-500/20 bg-gradient-to-br from-violet-50/40 via-white to-white"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-black/70">
                    {isDay ? (
                      <Sun size={12} className="text-amber-500" />
                    ) : (
                      <Moon size={12} className="text-violet-500" />
                    )}
                    {session.badge}
                  </span>

                  <span className="font-mono text-xs text-black/30">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-8 font-display text-4xl leading-tight sm:text-5xl">
                  {session.title}
                </h3>

                <p className="mt-3 font-mono text-xs uppercase tracking-[0.15em] text-black/45">
                  {session.focus}
                </p>

                <div className="my-7 h-px bg-black/10" />

                <ul className="space-y-4">
                  {session.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm leading-6 text-black/70">
                      <span
                        className={`mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full text-white ${
                          isDay ? "bg-amber-500" : "bg-violet-600"
                        }`}
                      >
                        <Check size={10} strokeWidth={3} />
                      </span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}