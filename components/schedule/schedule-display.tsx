import Image from "next/image";
import { Clock, Download } from "lucide-react";
import { SCHEDULE } from "@/data/schedule";
import { SectionLabel } from "@/components/section-label";

export function ScheduleDisplay() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f5] px-5 py-32 sm:px-8 lg:px-14 lg:py-40">
      <div className="mx-auto max-w-[1500px]">
        {/* Header */}
        <div className="max-w-2xl">
          <SectionLabel>Schedule</SectionLabel>
          <h1 className="mt-6 font-display text-[clamp(3.8rem,9vw,9rem)] leading-[0.8] tracking-[-0.055em]">
            Date &
            <br />
            <i>time.</i>
          </h1>
        </div>

        {/* 2-Column: Schedule Times + Flier */}
        <div className="mt-16 grid items-start gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          {/* Times List */}
          <div className="space-y-6">
            {SCHEDULE.map((item, index) => (
              <div
                key={item.fullDate}
                className="rounded-3xl border border-black/10 bg-white p-7 sm:p-9 shadow-[0_10px_40px_rgba(16,16,20,0.02)]"
              >
                <div className="flex flex-col justify-between gap-2 border-b border-black/10 pb-5 sm:flex-row sm:items-baseline">
                  <h2 className="font-display text-3xl sm:text-4xl text-[#101014]">
                    {item.day}
                  </h2>
                  <div className="font-mono text-xs uppercase tracking-[0.16em] text-black/45">
                    {item.date}
                  </div>
                </div>

                {/* Session Times */}
                <div className="mt-6 flex flex-wrap gap-3">
                  {item.times.map((session, idx) => (
                    <div
                      key={idx}
                      className="inline-flex items-center gap-2.5 rounded-2xl border border-black/10 bg-[#f7f7f5] px-5 py-3.5"
                    >
                      <Clock size={16} className="text-black/40" />
                      <span className="font-mono text-xl font-bold tracking-tight text-[#101014] sm:text-2xl">
                        {session.time}
                      </span>
                      <span className="font-mono text-xs uppercase tracking-wider text-black/45">
                        {session.timezone}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Flier Container */}
          <div className="lg:sticky lg:top-28">
            <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] border border-black/10 bg-[#101014] shadow-[0_24px_70px_rgba(16,16,20,0.12)]">
              <Image
                src="/schedule/flier.jpeg"
                alt="Supernatural Camp Meeting 2026 Flier"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/70">
                  Official Flier
                </span>

                <a
                  href="/schedule/flier.jpeg"
                  download="SCM-2026-Schedule-Flier"
                  className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 font-mono text-[9px] uppercase tracking-[0.16em] backdrop-blur-xl transition-colors hover:bg-white hover:text-black"
                >
                  <Download size={12} />
                  <span>Download</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}