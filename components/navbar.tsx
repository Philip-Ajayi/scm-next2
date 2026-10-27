"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  ["Experience", "#experience"],
  ["Schedule", "#schedule"],
  ["Ministers", "#ministers"],
  ["Gallery", "#gallery"],
  ["Resources", "#resources"]
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-1/2 top-5 z-50 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 transition-all duration-700 ${
          scrolled ? "top-3" : "top-5"
        }`}
      >
        <div
          className={`flex items-center justify-between rounded-full border px-3 py-2 transition-all duration-700 ${
            scrolled
              ? "border-black/10 bg-white/80 shadow-[0_18px_60px_rgba(16,16,20,.10)] backdrop-blur-2xl"
              : "border-white/25 bg-white/10 backdrop-blur-xl"
          }`}
        >
          <Link
            href="/"
            className="flex items-center gap-3 pl-2"
            aria-label="Supernatural Community Church home"
          >
            <img
              src="/main/Logoo.png"
              alt="Supernatural Community Church"
              className={`w-auto transition-all duration-500 ${
                scrolled ? "h-8" : "h-9"
              }`}
            />
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className={`text-[11px] font-semibold uppercase tracking-[0.16em] transition-opacity hover:opacity-50 ${
                  scrolled ? "text-[#101014]" : "text-white"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="#register"
              className={`group hidden items-center gap-2 rounded-full px-5 py-3 text-[10px] font-bold uppercase tracking-[0.18em] transition-all duration-500 sm:flex ${
                scrolled
                  ? "bg-[#101014] text-white hover:bg-[#29292e]"
                  : "bg-white text-[#101014] hover:bg-white/90"
              }`}
            >
              <span className={scrolled ? "text-white" : "text-[#101014]"}>
                Register
              </span>
              <ArrowUpRight
                size={13}
                className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? "Close menu" : "Open menu"}
              className={`grid h-11 w-11 place-items-center rounded-full lg:hidden ${
                scrolled
                  ? "bg-black/[0.05] text-[#101014]"
                  : "bg-white/10 text-white"
              }`}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-700 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col justify-between px-7 pb-8 pt-28">
          <nav className="flex flex-col">
            {links.map(([label, href], index) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="border-b border-black/10 py-5 font-display text-5xl tracking-tight"
                style={{
                  transitionDelay: `${index * 50}ms`
                }}
              >
                {label}
              </Link>
            ))}

            <Link
              href="#register"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex w-fit rounded-full bg-[#101014] px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white"
            >
              Register Now
            </Link>
          </nav>

          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-black/40">
            19 NOVEMBER 2026 · ROCHESTER, NY
          </div>
        </div>
      </div>
    </>
  );
}