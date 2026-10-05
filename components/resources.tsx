"use client";

import { Headphones, Play, Radio, ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/section-label";

export function Resources() {
  return (
    <section id="resources" className="bg-[#f7f7f5] px-5 py-28 sm:px-8 lg:px-14 lg:py-44">
      <div className="mx-auto max-w-[1500px]">
        <SectionLabel>07 · Explore more</SectionLabel>

        <div className="mt-8 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="font-display text-[clamp(4rem,8vw,9rem)] leading-[0.77] tracking-[-0.06em]">
              Explore
              <br />
              more
              <br />
              <i>resources.</i>
            </h2>

            <p className="mt-8 max-w-md text-sm leading-7 text-black/50">
              Discover powerful resources to support your journey of healing,
              growth, and empowerment.
            </p>
          </div>

          <div className="grid gap-5">
            <a
              href="#radio"
              className="group relative min-h-[22rem] overflow-hidden rounded-[2rem] border border-black/10 bg-white p-7 transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_30px_100px_rgba(16,16,20,.10)] sm:p-9"
            >
              <div className="absolute right-8 top-8 grid h-14 w-14 place-items-center rounded-full border border-black/10 transition-transform duration-700 group-hover:rotate-12">
                <Radio size={19} />
              </div>

              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-3 text-black/40">
                  <Headphones size={14} />
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em]">
                    Live audio
                  </span>
                </div>

                <h3 className="mt-5 font-display text-4xl leading-none tracking-[-0.04em] sm:text-6xl">
                  Listen to our
                  <br />
                  radio stream
                </h3>

                <div className="mt-6 h-8 overflow-hidden">
                  <div className="flex h-full items-center gap-1">
                    {Array.from({ length: 36 }).map((_, index) => (
                      <span
                        key={index}
                        className="w-[2px] rounded-full bg-black/20 transition-all duration-500 group-hover:bg-black/60"
                        style={{
                          height: `${20 + ((index * 17) % 75)}%`
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <ArrowUpRight
                className="absolute bottom-8 right-8 opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                size={20}
              />
            </a>

            <a
              href="#sermons"
              className="group relative min-h-[22rem] overflow-hidden rounded-[2rem] border border-black/10 bg-[#101014] p-7 text-white transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_30px_100px_rgba(16,16,20,.18)] sm:p-9"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(139,92,246,.22),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(236,72,153,.12),transparent_35%)]" />

              <div className="relative">
                <div className="grid h-14 w-14 place-items-center rounded-full border border-white/15 bg-white/5 transition-transform duration-700 group-hover:scale-110">
                  <Play size={18} fill="currentColor" />
                </div>

                <div className="absolute right-0 top-0 font-mono text-[9px] uppercase tracking-[0.18em] text-white/35">
                  Video library
                </div>

                <div className="absolute bottom-[-13rem] left-0">
                  <h3 className="font-display text-4xl leading-none tracking-[-0.04em] sm:text-6xl">
                    Watch
                    <br />
                    sermons
                  </h3>

                  <p className="mt-5 max-w-sm text-sm leading-6 text-white/45">
                    Continue the experience beyond the gathering through
                    teachings and messages.
                  </p>
                </div>
              </div>

              <ArrowUpRight
                className="absolute bottom-8 right-8 text-white/50 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white"
                size={20}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
