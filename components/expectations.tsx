"use client";

import { useEffect, useState } from "react";
import { SectionLabel } from "@/components/section-label";

const experiences = [
  {
    number: "01",
    title: "Word",
    description: "The word taught with clarity and precision.",
    glow: "rgba(139,92,246,.25)"
  },
  {
    number: "02",
    title: "Gifts",
    description: "Miracles of diversities of gifts.",
    glow: "rgba(34,211,238,.25)"
  },
  {
    number: "03",
    title: "Encounters",
    description: "Tangible encounters with God's spirit.",
    glow: "rgba(236,72,153,.25)"
  },
  {
    number: "04",
    title: "Joy",
    description: "Times of rejoicing.",
    glow: "rgba(245,158,11,.25)"
  },
  {
    number: "05",
    title: "Understanding",
    description:
      "A greater understanding of God's purpose and plan for your life.",
    glow: "rgba(16,185,129,.25)"
  },
  {
    number: "06",
    title: "Growth",
    description:
      "Spiritual growth and fresh fire for the work of the ministry.",
    glow: "rgba(139,92,246,.25)"
  }
];

export function Expectations() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("experience");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const progress = Math.min(
        Math.max(-rect.top / Math.max(rect.height - window.innerHeight, 1), 0),
        0.999
      );

      setActive(Math.min(experiences.length - 1, Math.floor(progress * 6)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const item = experiences[active];

  return (
    <section
      id="experience"
      className="relative min-h-[150svh] bg-[#f7f7f5]"
    >
      <div className="sticky top-0 flex min-h-[100svh] items-center overflow-hidden px-5 py-20 sm:px-8 lg:px-14">
        <div className="mx-auto grid w-full max-w-[1500px] gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div>
            <SectionLabel>02 · What to expect</SectionLabel>

            <h2 className="mt-6 max-w-xl font-display text-[clamp(3.5rem,7vw,7.5rem)] leading-[0.82] tracking-[-0.05em]">
              What to
              <br />
              <i>expect.</i>
            </h2>

            <p className="mt-8 max-w-md text-sm leading-7 text-black/55 sm:text-base">
              Come ready for a gathering where teaching becomes experience,
              expectation becomes encounter, and the Word produces
              transformation.
            </p>
          </div>

          <div className="relative min-h-[28rem]">
            <div
              className="absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-all duration-1000"
              style={{ background: item.glow }}
            />

            <div className="perspective absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="orb animate-orb scale-75 opacity-75 sm:scale-100" />
            </div>

            <div className="relative z-10 flex min-h-[28rem] flex-col justify-center">
              <div className="space-y-1">
                {experiences.map((experience, index) => (
                  <button
                    key={experience.title}
                    type="button"
                    onClick={() => setActive(index)}
                    className={`group block text-left transition-all duration-700 ${
                      active === index
                        ? "translate-x-2"
                        : "translate-x-0 opacity-30 hover:opacity-60"
                    }`}
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-[9px] tracking-[0.15em]">
                        {experience.number}
                      </span>

                      <span
                        className={`font-display leading-none tracking-[-0.04em] ${
                          active === index
                            ? "text-[clamp(3rem,7vw,7rem)]"
                            : "text-3xl sm:text-5xl"
                        }`}
                      >
                        {experience.title}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-8 max-w-sm border-l border-black/15 pl-5 text-sm leading-6 text-black/55">
                {item.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
