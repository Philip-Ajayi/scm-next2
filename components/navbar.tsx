"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Events", href: "#event" },
  { label: "Ministries", href: "#ministries" },
  { label: "Sermons", href: "#sermons" },
  { label: "Resources", href: "#resources" },
  { label: "Give", href: "#give" },
  { label: "Contact", href: "#contact" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 px-4 py-5 md:px-8">
        <div className="flex items-center justify-between">
          <Link
            href="#home"
            aria-label="Supernatural Community Church home"
            className="relative z-[60] block"
          >
            <Image
              src="/main/Logoo.png"
              alt="Supernatural Community Church"
              width={92}
              height={42}
              priority
              className="h-auto w-[74px] object-contain brightness-0 invert"
            />
          </Link>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="site-navigation"
            className="relative z-[60] flex h-12 items-center gap-3 border border-white/30 bg-black/10 px-4 text-white backdrop-blur-md transition hover:bg-white hover:text-black"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
              {open ? "Close" : "Menu"}
            </span>

            {open ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="site-navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 overflow-hidden bg-[#090909] text-white"
          >
            <div className="absolute inset-0">
              <div className="absolute left-[15%] top-[10%] h-[35vw] w-[35vw] rounded-full bg-violet-600/20 blur-[130px]" />
              <div className="absolute bottom-0 right-[10%] h-[30vw] w-[30vw] rounded-full bg-blue-600/20 blur-[130px]" />
            </div>

            <div className="relative flex h-full items-center px-6 py-24 md:px-16">
              <nav className="w-full max-w-5xl">
                <ul className="space-y-1">
                  {navigation.map((item, index) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: index * 0.045,
                        duration: 0.7
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="group flex items-baseline justify-between border-b border-white/10 py-3 md:py-4"
                      >
                        <span className="font-display text-[clamp(3rem,7vw,7rem)] leading-[0.8] tracking-[-0.04em] transition-transform duration-500 group-hover:translate-x-4">
                          {item.label}
                        </span>

                        <span className="font-mono text-[10px] text-white/30">
                          0{index + 1}
                        </span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}