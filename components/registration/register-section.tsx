"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Magnetic } from "@/components/motion/magnetic";

export function RegisterSection() {
  return (
    <section
      id="register"
      className="relative overflow-hidden bg-[#090909] px-5 py-36 text-white md:px-10 md:py-64"
    >
      <div className="absolute left-1/2 top-1/2 h-[55vw] w-[55vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-700/10 blur-[150px]" />

      <div className="relative mx-auto max-w-[1500px] text-center">
        <p className="eyebrow mb-12 text-white/35">
          The response
        </p>

        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="font-display text-[clamp(5rem,14vw,15rem)] leading-[0.72] tracking-[-0.06em]"
        >
          YOUR
          <br />
          ENCOUNTER
          <br />
          <span className="italic">STARTS HERE.</span>
        </motion.h2>

        <div className="mt-16">
          <Magnetic strength={0.15} className="inline-block">
            <Link
              href="#"
              className="group inline-flex h-20 items-center gap-8 border border-white bg-white px-10 text-xs font-medium uppercase tracking-[0.15em] text-black transition-colors duration-300 hover:bg-black hover:text-white"
            >
              <span className="text-black transition-colors duration-300 group-hover:text-white">
                Register Now
              </span>
              <ArrowUpRight className="h-5 w-5 text-black transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white" />
            </Link>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}