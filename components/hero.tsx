import Image from "next/image";
import { ChevronDown } from "lucide-react";

import { Countdown } from "@/components/countdown";
import { EventDetails } from "@/components/event-details";
import { GlassButton } from "@/components/glass-button";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#101014] text-white">
      <div className="absolute inset-0">
        <Image
          src="/main/hero.jpeg"
          alt="Supernatural Community Church"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-[1.02]"
        />
      </div>

      <div className="hero-vignette absolute inset-0" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(139,92,246,.24),transparent_28%),radial-gradient(circle_at_45%_70%,rgba(236,72,153,.12),transparent_30%)]" />

      <div className="spectral absolute -right-32 top-20 h-[40rem] w-[40rem] opacity-60" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1600px] flex-col justify-end px-5 pb-8 pt-32 sm:px-8 lg:px-14 lg:pb-12">
        <div className="grid items-end gap-12 lg:grid-cols-[1fr_460px]">
          <div className="max-w-5xl">
            <div className="mb-8 font-mono text-[9px] uppercase tracking-[0.24em] text-white/55">
              Supernatural Camp Meeting · 2026
            </div>

            <h1 className="font-display text-[clamp(4.3rem,11vw,11.5rem)] leading-[0.77] tracking-[-0.055em]">
              <span className="block">Come</span>
              <span className="ml-[8vw] block italic">expecting.</span>
            </h1>

            <div className="mt-8 grid max-w-2xl gap-2 text-[clamp(1rem,1.7vw,1.5rem)] leading-[1.15] text-white/75 sm:grid-cols-3">
              <span>The Word.</span>
              <span>The Spirit.</span>
              <span>The Encounter.</span>
            </div>
          </div>

          <div className="relative">
            {/* Lightweight ambient glow replacing GlassOrb */}
            <div className="pointer-events-none absolute -top-16 -right-16 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />

            <div className="glass-dark relative overflow-hidden rounded-[2rem] p-6 sm:p-7">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-violet-500/10" />

              <div className="relative">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/45">
                      The gathering
                    </div>

                    <div className="mt-2 max-w-xs font-display text-3xl leading-[0.9] sm:text-4xl">
                      Supernatural
                      <br />
                      Camp Meeting
                    </div>
                  </div>

                  <div className="font-mono text-right text-[9px] uppercase tracking-[0.16em] text-white/45">
                    SC
                    <br />
                    26
                  </div>
                </div>

                <div className="my-7 h-px bg-white/10" />

                <EventDetails />

                <div className="my-7 h-px bg-white/10" />

                <Countdown />

                <div className="mt-7 flex flex-wrap gap-3">
                  <GlassButton href="#register" dark>
                    Register Now
                  </GlassButton>

                  <GlassButton href="#schedule">
                    See Schedule
                  </GlassButton>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between">
          <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/40">
            Rochester · New York
          </div>

          <a
            href="#experience"
            className="group flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/55"
          >
            Scroll to enter
            <span className="grid h-9 w-9 place-items-center rounded-full border border-white/20 transition-transform duration-500 group-hover:translate-y-1">
              <ChevronDown size={14} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}