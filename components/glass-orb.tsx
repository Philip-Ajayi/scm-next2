"use client";

import { useEffect, useRef } from "react";

export function GlassOrb() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) return;

    const handlePointer = (event: PointerEvent) => {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;

      element.style.transform = `
        translate3d(${x * 18}px, ${y * 18}px, 0)
        rotateX(${y * -10}deg)
        rotateY(${x * 12}deg)
      `;
    };

    window.addEventListener("pointermove", handlePointer);

    return () => window.removeEventListener("pointermove", handlePointer);
  }, []);

  return (
    <div
      ref={ref}
      className="perspective relative transition-transform duration-1000 ease-out"
    >
      <div className="orb animate-orb preserve-3d">
        <div className="absolute left-[18%] top-[14%] h-16 w-16 rounded-full bg-white/60 blur-2xl" />
        <div className="absolute inset-[-12%] rounded-full border border-white/20 animate-orbit" />
        <div className="absolute inset-[-25%] rounded-full border border-white/10 [transform:rotateX(65deg)]" />
      </div>
    </div>
  );
}
