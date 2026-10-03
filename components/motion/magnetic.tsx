"use client";

import { useRef } from "react";

export function Magnetic({
  children,
  strength = 0.2,
  className = ""
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const x =
      (event.clientX - rect.left - rect.width / 2) * strength;

    const y =
      (event.clientY - rect.top - rect.height / 2) * strength;

    ref.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  };

  const reset = () => {
    if (!ref.current) return;

    ref.current.style.transform =
      "translate3d(0, 0, 0)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`transition-transform duration-500 ${className}`}
    >
      {children}
    </div>
  );
}