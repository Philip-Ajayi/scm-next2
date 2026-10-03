"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, MoveRight } from "lucide-react";
import { GALLERY_IMAGES } from "@/lib/constants";

export function GallerySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      setScrollProgress(scrollLeft / maxScroll);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;
    const scrollAmount = containerRef.current.clientWidth * 0.75;
    containerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="overflow-hidden bg-white py-24 md:py-48">
      <div className="px-5 md:px-10">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-black/40">The archive</p>

              <h2 className="mt-8 font-display text-[clamp(4rem,10vw,11rem)] leading-[0.76] tracking-[-0.055em]">
                MOMENTS
                <br />
                BECOME
                <br />
                <span className="ml-[10vw] italic">MEMORY.</span>
              </h2>
            </div>

            {/* Swipe/Scroll cues and desktop control buttons */}
            <div className="flex flex-col items-start gap-4 md:items-end">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-black/60">
                <span>Swipe / Scroll</span>
                <MoveRight className="h-4 w-4 animate-pulse" />
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => scroll("left")}
                  aria-label="Scroll left"
                  className="flex h-11 w-11 items-center justify-center border border-black/20 text-black transition hover:border-black hover:bg-black hover:text-white"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scroll("right")}
                  aria-label="Scroll right"
                  className="flex h-11 w-11 items-center justify-center border border-black/20 text-black transition hover:border-black hover:bg-black hover:text-white"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Visual progress bar */}
          <div className="mt-10 h-0.5 w-full bg-black/10">
            <div
              className="h-full bg-black transition-all duration-150 ease-out"
              style={{
                width: `${Math.max(15, scrollProgress * 100)}%`
              }}
            />
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Gallery Container */}
      <div
        ref={containerRef}
        className="mt-16 overflow-x-auto px-5 pb-10 [scrollbar-width:none] md:px-10"
      >
        <div className="flex w-max gap-5">
          {GALLERY_IMAGES.map((image, index) => (
            <motion.figure
              key={image}
              whileHover={{
                y: -15,
                rotate: index % 2 === 0 ? -1 : 1
              }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
              }}
              className={`relative h-[55vh] w-[78vw] shrink-0 overflow-hidden sm:w-[50vw] md:h-[70vh] md:w-[36vw] ${
                index % 3 === 0
                  ? "md:mt-20"
                  : index % 3 === 1
                    ? "md:mt-0"
                    : "md:mt-32"
              }`}
            >
              <Image
                src={image}
                alt={`Supernatural Community Church moment ${index + 1}`}
                fill
                sizes="(max-width: 768px) 78vw, 36vw"
                className="object-cover transition-transform duration-[1.2s] hover:scale-105"
              />

              <figcaption className="absolute bottom-4 left-4 font-mono text-[9px] uppercase tracking-[0.18em] text-white/70">
                Moment / 0{index + 1}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}