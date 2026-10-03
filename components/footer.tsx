"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const footerLinks = [
  ["About", "#about"],
  ["Schedule", "#event"],
  ["Register", "#register"],
  ["Give", "#give"],
  ["Contact", "#contact"]
];

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#090909] px-5 pb-8 pt-24 text-white md:px-10 md:pt-36"
    >
      <div className="absolute left-1/2 top-0 h-[30vw] w-[30vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[1600px]">
        <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="eyebrow mb-8 text-white/40">
              Supernatural Community Church
            </p>

            <h2 className="font-display text-[clamp(4rem,10vw,10rem)] leading-[0.75] tracking-[-0.055em]">
              COME
              <br />
              EXPECTING.
            </h2>
          </div>

          <div className="grid gap-12 sm:grid-cols-2">
            <div>
              <p className="eyebrow mb-5 text-white/40">Visit</p>

              <address className="not-italic text-sm leading-7 text-white/70">
                1400 Lehigh Station Road
                <br />
                Rochester, NY 14467
                <br />
                <br />
                <a
                  href="tel:+15852105038"
                  className="transition hover:text-white"
                >
                  585 210 5038
                </a>
                <br />
                <a
                  href="mailto:info@supernaturalcc.org"
                  className="transition hover:text-white"
                >
                  info@supernaturalcc.org
                </a>
              </address>
            </div>

            <div>
              <p className="eyebrow mb-5 text-white/40">Explore</p>

              <nav className="flex flex-col items-start gap-3">
                {footerLinks.map(([label, href]) => (
                  <Link
                    key={label}
                    href={href}
                    className="group flex items-center gap-2 text-sm text-white/70 transition hover:text-white"
                  >
                    {label}

                    <ArrowUpRight className="h-3 w-3 -translate-x-1 translate-y-1 opacity-0 transition group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-24 border-t border-white/10 pt-8 md:mt-40">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <Image
                src="/main/Logoo.png"
                alt="Supernatural Community Church"
                width={180}
                height={80}
                className="w-[130px] brightness-0 invert"
              />
            </motion.div>

            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/30">
              © 2026 Supernatural Community Church. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}