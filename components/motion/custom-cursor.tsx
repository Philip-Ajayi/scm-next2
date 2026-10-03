"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const media = window.matchMedia(
      "(pointer: fine) and (prefers-reduced-motion: no-preference)"
    );

    setEnabled(media.matches);

    const onChange = () => setEnabled(media.matches);

    media.addEventListener("change", onChange);

    if (!media.matches) {
      return () => media.removeEventListener("change", onChange);
    }

    const move = (event: MouseEvent) => {
      setPosition({
        x: event.clientX,
        y: event.clientY
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
      media.removeEventListener("change", onChange);
    };
  }, []);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-4 w-4 rounded-full border border-black mix-blend-difference md:block"
      animate={{
        x: position.x - 8,
        y: position.y - 8
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 35,
        mass: 0.2
      }}
    />
  );
}