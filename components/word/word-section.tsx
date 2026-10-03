"use client";

import { WordScene } from "./word-scene";
import { Reveal } from "@/components/motion/reveal";

export function WordSection() {
  return (
    <section className="relative overflow-hidden bg-[#080b13] px-5 py-32 text-white md:px-10 md:py-48">
      <div className="absolute inset-0 opacity-30">
        <WordScene />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="grid items-end gap-20 lg:grid-cols-[1fr_0.7fr]">
          <div>
            <p className="eyebrow mb-10 text-white/40">
              01 / The Word
            </p>

            <Reveal>
              <h2 className="display-section">
                THE
                <br />
                <span className="ml-[12vw] italic">
                  WORD
                </span>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="max-w-xl">
              <p className="text-lg leading-8 text-white/65 md:text-xl md:leading-9">
                The day sessions are dedicated to
                powerful teachings centered on Who
                You Are in Christ and the Finished Work
                of Jesus.
              </p>

              <p className="mt-8 text-lg leading-8 text-white/65 md:text-xl md:leading-9">
                You will gain a deeper understanding of
                your identity in Christ, the privileges
                and rights that come with redemption,
                and how to live out these truths daily.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-32 flex items-center gap-6">
          <div className="h-px flex-1 bg-white/15" />

          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">
            Scroll to encounter
          </span>
        </div>
      </div>
    </section>
  );
}