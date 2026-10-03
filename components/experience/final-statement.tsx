"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function FinalStatement() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[var(--off-white)] px-5 py-32 md:px-10 md:py-48">
      <div className="absolute left-1/2 top-1/2 h-[40vw] w-[40vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white blur-[100px]" />

      <div className="relative mx-auto flex min-h-[70vh] max-w-[1600px] flex-col justify-center">
        <p className="eyebrow mb-12 text-black/35">
          Until we gather
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="font-display text-[clamp(5rem,14vw,15rem)] leading-[0.72] tracking-[-0.06em]"
        >
          COME
          <br />
          <span className="ml-[12vw] italic">
            EXPECTING.
          </span>
          <br />
          LEAVE
          <br />
          <span className="ml-[8vw]">
            TRANSFORMED.
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.5,
            delay: 0.25
          }}
          className="absolute bottom-[5%] right-[10%] hidden md:block"
        >
          <Image
            src="/main/Logooo.png"
            alt=""
            width={180}
            height={80}
            className="opacity-10"
          />
        </motion.div>
      </div>
    </section>
  );
}