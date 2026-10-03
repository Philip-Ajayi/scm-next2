"use client";

import { useState } from "react";
import { MINISTERS } from "@/lib/constants";
import { MinisterScene } from "./minister-scene";

export function MinistersSection() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="ministries"
      className="relative overflow-hidden bg-[var(--off-white)] px-5 py-32 md:px-10 md:py-48"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-20 flex items-end justify-between">
          <div>
            <p className="eyebrow mb-8 text-black/40">
              The voices
            </p>

            <h2 className="display-section">
              CARRYING
              <br />
              <span className="ml-[10vw] italic">
                THE WORD
              </span>
            </h2>
          </div>

          <div className="hidden font-mono text-[10px] text-black/30 md:block">
            {String(active + 1).padStart(2, "0")} /{" "}
            {String(MINISTERS.length).padStart(2, "0")}
          </div>
        </div>

        <MinisterScene
          active={active}
          onSelect={setActive}
        />

        <div className="mt-8 flex gap-3">
          {MINISTERS.map((minister, index) => (
            <button
              key={minister.name}
              type="button"
              onClick={() => setActive(index)}
              className={`border px-5 py-3 font-mono text-[9px] uppercase tracking-[0.14em] transition ${
                active === index
                  ? "border-black bg-black text-white"
                  : "border-black/15 text-black/50 hover:border-black"
              }`}
            >
              {minister.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}