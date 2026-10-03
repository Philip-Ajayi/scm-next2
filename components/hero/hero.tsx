"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

import { HeroScene } from "./hero-scene";
import { Countdown } from "./countdown";
import { Magnetic } from "@/components/motion/magnetic";
import { EVENT } from "@/lib/constants";

export function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden bg-[#0a0a0a] text-white"
    >
      {/* Integrated Background Environment */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Parallax Background Image */}
        <motion.img
          src="/main/hero.jpeg"
          alt=""
          className="h-[110%] w-[110%] max-w-none object-cover opacity-50"
          animate={{
            x: mousePos.x * -0.8,
            y: mousePos.y * -0.8,
            scale: 1.05
          }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
        />

        {/* Ambient Glowing Aura Behind 3D Glass Object */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[45vw] w-[45vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/30 blur-[140px] mix-blend-screen" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[30vw] w-[30vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[100px] mix-blend-screen" />

        {/* Gradient Overlays for Cinematic Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(10,10,10,0.85)_80%)]" />
      </div>

      {/* 3D R3F Canvas */}
      <HeroScene />

      {/* Hero Content Overlay */}
      <div className="relative z-10 flex min-h-[100svh] flex-col justify-between px-5 pb-8 pt-32 md:px-10 md:pb-10">
        <div className="flex justify-between">
          <div className="eyebrow text-white/50">Rochester / New York</div>

          <div className="hidden text-right md:block">
            <div className="eyebrow text-white/40">Primary Experience</div>
            <div className="mt-2 font-mono text-[10px]">CAMP MEETING / 2026</div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[1600px]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <p className="eyebrow mb-5 text-white/60">
              Supernatural Community Church presents
            </p>

            <h1 className="display-hero max-w-[1200px]">
              SUPERNATURAL
              <br />
              <span className="ml-[8vw] italic">CAMP</span>
              <br />
              MEETING
            </h1>
          </motion.div>

          <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-[1fr_360px]">
            <div className="flex flex-wrap items-end gap-x-8 gap-y-4">
              <div>
                <p className="eyebrow text-white/40">Date</p>
                <p className="mt-2 font-mono text-xs">{EVENT.dateLabel}</p>
              </div>

              <div>
                <p className="eyebrow text-white/40">Time</p>
                <p className="mt-2 font-mono text-xs">{EVENT.timeLabel}</p>
              </div>

              <div>
                <p className="eyebrow text-white/40">Location</p>
                <p className="mt-2 font-mono text-xs">
                  {EVENT.address}
                  <br />
                  {EVENT.city}
                </p>
              </div>
            </div>

            <Countdown />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Magnetic>
              <Link
                href="#register"
                className="magnetic-button group inline-flex h-14 items-center gap-4 border border-white bg-white px-7 text-xs font-medium uppercase tracking-[0.12em] text-black transition-colors duration-300"
              >
                <span className="text-black transition-colors duration-300 group-hover:text-white">
                  Register Now
                </span>
                <ArrowUpRight className="h-4 w-4 text-black transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white" />
              </Link>
            </Magnetic>

            <Link
              href="#event"
              className="group inline-flex h-14 items-center gap-3 border border-white/30 px-7 text-xs uppercase tracking-[0.12em] transition hover:border-white"
            >
              See Schedule
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}