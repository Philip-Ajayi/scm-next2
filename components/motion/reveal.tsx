"use client";

import { motion, type MotionProps } from "motion/react";

type RevealProps = MotionProps & {
  children: React.ReactNode;
  delay?: number;
  y?: number;
};

export function Reveal({
  children,
  delay = 0,
  y = 40,
  ...props
}: RevealProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        amount: 0.15
      }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}