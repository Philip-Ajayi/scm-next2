"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";
import { motion } from "motion/react";

export function ResourcesSection() {
  return (
    <section
      id="resources"
      className="bg-white px-5 py-32 md:px-10 md:py-48"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-8 text-black/40">
              Beyond the gathering
            </p>

            <h2 className="display-section">
              EXPLORE
              <br />
              <span className="ml-[8vw] italic">
                MORE
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-black/50">
            Discover powerful resources to support
            your journey of healing, growth, and
            empowerment.
          </p>
        </div>

        <div className="mt-24 grid gap-px bg-black/10 md:grid-cols-2">
          <Link
            href="#"
            className="group relative min-h-[500px] overflow-hidden bg-[#080b13] p-8 text-white md:p-12"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.3),transparent_50%)]" />

            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="eyebrow text-white/40">
                  Audio / Live
                </span>

                <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.15em]">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
                  Live
                </span>
              </div>

              <div>
                <div className="mb-10 flex h-24 items-end gap-1">
                  {Array.from({ length: 28 }).map(
                    (_, index) => (
                      <motion.span
                        key={index}
                        animate={{
                          height: [
                            `${20 + Math.random() * 60}%`,
                            `${30 + Math.random() * 60}%`,
                            `${15 + Math.random() * 70}%`
                          ]
                        }}
                        transition={{
                          duration:
                            0.8 + Math.random(),
                          repeat: Infinity,
                          repeatType: "mirror"
                        }}
                        className="w-1 bg-white/60"
                      />
                    )
                  )}
                </div>

                <h3 className="font-display text-6xl leading-[0.8] md:text-8xl">
                  SUPERNATURAL
                  <br />
                  RADIO
                </h3>

                <div className="mt-10 flex items-center gap-3 text-xs uppercase tracking-[0.15em]">
                  Listen Now
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </div>
          </Link>

          <Link
            href="#sermons"
            id="sermons"
            className="group relative min-h-[500px] overflow-hidden bg-black"
          >
            <Image
              src="/gallery/3.jpeg"
              alt="Watch sermons"
              fill
              className="object-cover opacity-70 transition duration-1000 group-hover:scale-105 group-hover:opacity-90"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            <div className="relative flex h-full flex-col justify-between p-8 text-white md:p-12">
              <div className="flex justify-end">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/40 transition duration-500 group-hover:scale-110 group-hover:bg-white group-hover:text-black">
                  <Play className="ml-1 h-5 w-5 fill-current" />
                </div>
              </div>

              <div>
                <p className="eyebrow mb-5 text-white/50">
                  Watch / Sermons
                </p>

                <h3 className="font-display text-6xl leading-[0.8] md:text-8xl">
                  WATCH
                  <br />
                  SERMONS
                </h3>

                <div className="mt-10 flex items-center gap-3 text-xs uppercase tracking-[0.15em]">
                  Watch Sermons
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}