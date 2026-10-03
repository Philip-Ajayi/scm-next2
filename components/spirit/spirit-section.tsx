"use client";

import { SpiritScene } from "./spirit-scene";
import { Reveal } from "@/components/motion/reveal";

export function SpiritSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black px-5 py-32 text-white md:px-10 md:py-48">
      <div className="absolute inset-0">
        <SpiritScene />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.25),transparent_55%)]" />

      <div className="relative z-10 mx-auto max-w-[1600px]">
        <div className="grid gap-16 lg:grid-cols-[1fr_0.7fr]">
          <Reveal>
            <div>
              <p className="eyebrow mb-10 text-white/40">
                02 / Demonstrations
              </p>

              <h2 className="display-section">
                DEMONSTRATIONS
                <br />
                <span className="ml-[8vw] italic">
                  OF THE
                </span>
                <br />
                SPIRIT
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="self-end lg:pt-[30vh]">
              <p className="text-lg leading-8 text-white/60 md:text-xl md:leading-9">
                The evenings are filled with dynamic
                demonstrations of the Holy Spirit. This
                is where teaching meets experience as
                we witness the gifts of the Spirit—
                utterance, revelation, and power—being
                activated.
              </p>

              <p className="mt-8 text-lg leading-8 text-white/60 md:text-xl md:leading-9">
                The evening sessions will fill you with
                the joy of the Holy Ghost and leave you
                transformed.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}