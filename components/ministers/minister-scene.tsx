"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { MINISTERS } from "@/lib/constants";

export function MinisterScene({
  active,
  onSelect
}: {
  active: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="relative h-[650px] overflow-hidden md:h-[800px]">
      {MINISTERS.map((minister, index) => {
        const isActive = active === index;

        return (
          <motion.button
            key={minister.name}
            type="button"
            onClick={() => onSelect(index)}
            animate={{
              x:
                index === 0
                  ? isActive
                    ? "0%"
                    : "-18%"
                  : isActive
                    ? "0%"
                    : "18%",
              scale: isActive ? 1 : 0.78,
              opacity: isActive ? 1 : 0.35,
              filter: isActive
                ? "blur(0px)"
                : "blur(3px)"
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1]
            }}
            className={`absolute left-1/2 top-1/2 h-[80%] w-[70%] -translate-x-1/2 -translate-y-1/2 overflow-hidden md:w-[42%] ${
              index === 0
                ? "origin-right"
                : "origin-left"
            }`}
          >
            <Image
              src={minister.image}
              alt={minister.name}
              fill
              sizes="(max-width: 768px) 80vw, 45vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 text-left text-white">
              <p className="font-display text-4xl md:text-6xl">
                {minister.name}
              </p>

              <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.18em] text-white/60">
                {minister.role}
              </p>
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}