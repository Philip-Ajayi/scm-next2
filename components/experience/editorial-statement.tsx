"use client";

import { motion } from "motion/react";

export function EditorialStatement() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[var(--off-white)] px-5 py-36 md:px-10 md:py-64"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-16 flex items-center gap-5">
          <div className="h-px flex-1 bg-black/15" />

          <span className="eyebrow text-black/40">
            The invitation
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="font-display text-[clamp(4rem,10vw,11rem)] leading-[0.76] tracking-[-0.055em]"
        >
          COME
          <br />
          <span className="ml-[14vw] italic">
            EXPECTING.
          </span>
          <br />
          LEAVE
          <br />
          <span className="ml-[8vw]">
            TRANSFORMED.
          </span>
        </motion.h2>
      </div>
    </section>
  );
}