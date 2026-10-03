"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SmoothScroll } from "@/components/motion/smooth-scroll";
import { CustomCursor } from "@/components/motion/custom-cursor";
import { Preloader } from "@/components/preloader";

export function SiteShell({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Preloader />

      <SmoothScroll />

      <CustomCursor />

      <Navbar />

      {children}

      <Footer />

      <div className="noise-overlay" aria-hidden="true" />
    </>
  );
}