"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { EXPECTATIONS } from "@/lib/constants";

const atmosphereMap = {
  blue: "bg-blue-600",
  violet: "bg-violet-600",
  "deep-violet": "bg-violet-950",
  amber: "bg-amber-500",
  cobalt: "bg-blue-700",
  emerald: "bg-emerald-500"
};

export function WhatToExpect() {
  const [active, setActive] = useState(0);

  const item = EXPECTATIONS[active];

  return (
    <section className="relative min-h-screen overflow-hidden bg-white px-5 py-24 md:px-10 md:py-32">
      <motion.div
        animate={{
          scale: 1.1,
          opacity: 0.14
        }}
        className={`pointer-events-none absolute left-1/2 top-1/2 h-[70vw] w-[70vw] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] ${atmosphereMap[item.atmosphere as keyof typeof atmosphereMap]}`}
      />

      <div className="relative mx-auto max-w-[1600px]">
        <div className="mb-20 flex items-center justify-between">
          <p className="eyebrow text-black/40">
            What to expect
          </p>

          <p className="font-mono text-[10px] text-black/30">
            01 — 06
          </p>
        </div>

        <div className="grid gap-16 lg:grid-cols-[0.4fr_1fr]">
          <div className="hidden lg:block">
            <div className="sticky top-32">
              <p className="font-mono text-xs text-black/30">
                EXPERIENCE / {item.number}
              </p>

              <div className="mt-10 h-px w-full bg-black/10" />

              <p className="mt-6 max-w-xs text-sm leading-7 text-black/50">
                {item.description}
              </p>
            </div>
          </div>

          <div>
            {EXPECTATIONS.map((expectation, index) => (
              <button
                key={expectation.title}
                type="button"
                onClick={() => setActive(index)}
                className="group block w-full border-t border-black/10 py-7 text-left md:py-10"
              >
                <div className="flex items-start gap-5">
                  <span
                    className={`font-mono text-[10px] transition ${
                      active === index
                        ? "text-black"
                        : "text-black/25"
                    }`}
                  >
                    {expectation.number}
                  </span>

                  <motion.span
                    animate={{
                      x: active === index ? 12 : 0
                    }}
                    className={`font-display text-[clamp(4rem,9vw,9rem)] leading-[0.78] tracking-[-0.045em] transition-opacity ${
                      active === index
                        ? "opacity-100"
                        : "opacity-20 group-hover:opacity-60"
                    }`}
                  >
                    {expectation.title}
                  </motion.span>
                </div>

                {active === index && (
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-5 pl-9 text-sm leading-7 text-black/50 lg:hidden"
                  >
                    {expectation.description}
                  </motion.p>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}