"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface GlassButtonProps {
  children: React.ReactNode;
  href?: string;
  dark?: boolean;
  className?: string;
}

export function GlassButton({
  children,
  href = "#",
  dark = false,
  className
}: GlassButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex items-center gap-4 overflow-hidden rounded-full border px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] transition-all duration-500",
        dark
          ? "border-white/15 bg-[#101014] text-white hover:bg-[#29292e]"
          : "border-black/10 bg-white/65 text-[#101014] backdrop-blur-xl hover:bg-white",
        className
      )}
    >
      <span className="relative z-10">{children}</span>

      <span
        className={cn(
          "relative z-10 grid h-7 w-7 place-items-center rounded-full border transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-0.5",
          dark
            ? "border-white/20 bg-white/10 text-white"
            : "border-black/10 bg-black/[0.04] text-[#101014]"
        )}
      >
        <ArrowUpRight size={13} />
      </span>

      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
    </Link>
  );
}