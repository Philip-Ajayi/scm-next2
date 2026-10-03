"use client";

import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { EVENT } from "@/lib/constants";
import { Reveal } from "@/components/motion/reveal";

export function EventInformation() {
  return (
    <section
      id="event"
      className="relative overflow-hidden bg-[var(--off-white)] px-5 py-32 md:px-10 md:py-48"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-20 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <div>
              <p className="eyebrow mb-8 text-black/40">
                Event information
              </p>

              <h2 className="display-section">
                SUPERNATURAL
                <br />
                <span className="ml-[8vw] italic">
                  CAMP
                </span>
                <br />
                MEETING
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="lg:pt-32">
              <div className="border-t border-black/15 py-6">
                <p className="eyebrow text-black/40">
                  Date
                </p>

                <p className="mt-3 font-display text-4xl md:text-5xl">
                  {EVENT.dateLabel}
                </p>
              </div>

              <div className="border-t border-black/15 py-6">
                <p className="eyebrow text-black/40">
                  Time
                </p>

                <p className="mt-3 font-display text-4xl md:text-5xl">
                  {EVENT.timeLabel}
                </p>
              </div>

              <div className="border-y border-black/15 py-6">
                <p className="eyebrow text-black/40">
                  Location
                </p>

                <p className="mt-3 font-display text-4xl md:text-5xl">
                  {EVENT.address}
                  <br />
                  {EVENT.city}
                </p>
              </div>

              <Link
                href="https://www.google.com/maps/search/?api=1&query=1890%20W%20Ridge%20Rd%2C%20Rochester%2C%20NY%2014615"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-3 border-b border-black pb-2 text-xs uppercase tracking-[0.12em]"
              >
                <MapPin className="h-4 w-4" />
                Open Map
                <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}