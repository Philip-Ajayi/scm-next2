"use client";

import { useEffect, useState } from "react";
import { SectionLabel } from "@/components/section-label";

const scenes = [
  {
    label: "The Word",
    title: "THE WORD",
    body: "The day sessions are dedicated to powerful teachings centered on Who You Are in Christ and the Finished Work of Jesus.",
    secondary:
      "You will gain a deeper understanding of your identity in Christ, the privileges and rights that come with redemption, and how to live out these truths daily."
  },
  {
    label: "Demonstrations",
    title: "DEMONSTRATIONS OF THE SPIRIT",
    body: "The evenings are filled with dynamic demonstrations of the Holy Spirit.",
    secondary:
      "This is where teaching meets experience as we witness the gifts of the Spirit—utterance, revelation, and power—being activated."
  }
];

export function Story() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const handler = () => {
      const element = document.getElementById("story");
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const progress = Math.min(
        Math.max(-rect.top / Math.max(rect.height - innerHeight, 1), 0),
        1
      );

      setActive(progress > 0.48 ? 1 : 0);
    };

    window.addEventListener("scroll", handler, { passive: true });
    handler();

    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scene = scenes[active];

  return (
    <section
      id="story"
      className="relative min-h-[170svh] overflow-hidden bg-white"
    >
      <div className="sticky top-0 min-h-[100svh]">
        <div className="absolute inset-0">
          <div
            className={`absolute left-[10%] top-[15%] h-[30rem] w-[30rem] rounded-full blur-3xl transition-all duration-[1500ms] ${
              active === 0 ? "bg-violet-400/10" : "bg-fuchsia-400/15"
            }`}
          />

          <div
            className={`absolute bottom-[10%] right-[5%] h-[25rem] w-[25rem] rounded-full blur-3xl transition-all duration-[1500ms] ${
              active === 0 ? "bg-cyan-300/10" : "bg-amber-300/15"
            }`}
          />
        </div>

        <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-[1500px] items-center gap-16 px-5 py-24 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:px-14">
          <div>
            <SectionLabel>03 · The story</SectionLabel>

            <h2 className="mt-7 max-w-3xl font-display text-[clamp(3.4rem,7vw,7.8rem)] leading-[0.82] tracking-[-0.055em]">
              Encounter
              <br />
              the Word
              <br />
              <i>and the Spirit.</i>
            </h2>
          </div>

          <div className="relative min-h-[32rem]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className={`relative h-[20rem] w-[16rem] border border-black/10 bg-white/30 shadow-[0_30px_100px_rgba(16,16,20,.08)] backdrop-blur-xl transition-all duration-[1200ms] sm:h-[28rem] sm:w-[22rem] ${
                  active === 0
                    ? "rotate-[-7deg]"
                    : "rotate-[7deg] scale-105"
                }`}
              >
                <div className="absolute inset-5 border border-black/10" />

                <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-violet-300/30 via-white to-fuchsia-300/20 blur-xl" />
              </div>

              <div
                className={`absolute h-[18rem] w-[13rem] border border-black/10 bg-white/20 shadow-[0_30px_100px_rgba(16,16,20,.06)] backdrop-blur-xl transition-all duration-[1200ms] sm:h-[25rem] sm:w-[18rem] ${
                  active === 0
                    ? "translate-x-16 rotate-[9deg]"
                    : "-translate-x-16 rotate-[-9deg]"
                }`}
              />
            </div>

            <div className="relative z-10 flex h-full min-h-[32rem] flex-col justify-end">
              <div className="mb-auto pt-12 font-mono text-[9px] uppercase tracking-[0.18em] text-black/35">
                0{active + 1} / 02 · {scene.label}
              </div>

              <div className="max-w-xl">
                <h3 className="font-display text-[clamp(3rem,6vw,6.5rem)] leading-[0.8] tracking-[-0.05em] transition-all duration-700">
                  {scene.title}
                </h3>

                <p className="mt-7 max-w-lg text-base leading-7 text-black/65">
                  {scene.body}
                </p>

                <p className="mt-4 max-w-lg text-sm leading-6 text-black/45">
                  {scene.secondary}
                </p>
              </div>

              <div className="mt-8 flex gap-2">
                {scenes.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Show story scene ${index + 1}`}
                    onClick={() => setActive(index)}
                    className={`h-1 rounded-full transition-all duration-700 ${
                      active === index ? "w-16 bg-black" : "w-6 bg-black/15"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
