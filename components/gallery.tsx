"use client";

import Image from "next/image";

const images = [
  "/gallery/1.jpeg",
  "/gallery/2.jpeg",
  "/gallery/3.jpeg",
  "/gallery/4.jpeg",
  "/gallery/5.jpeg",
  "/gallery/6.jpeg",
  "/gallery/7.jpeg",
  "/gallery/8.jpeg"
];

export function Gallery() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#101014] py-28 text-white sm:py-36"
    >
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-14">
        <div className="flex items-end justify-between gap-8">
          <div>
            <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/35">
              06 · Remember
            </div>

            <h2 className="mt-6 font-display text-[clamp(4rem,9vw,10rem)] leading-[0.75] tracking-[-0.06em]">
              Event
              <br />
              <i>gallery.</i>
            </h2>
          </div>

          <div className="hidden max-w-xs text-right text-sm leading-6 text-white/40 md:block">
            A visual memory of worship, community, teaching, encounter and
            celebration.
          </div>
        </div>
      </div>

      <div className="mt-20 overflow-x-auto px-5 pb-8 sm:px-8 lg:px-14 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex w-max items-center gap-5 pr-10">
          {images.map((src, index) => {
            const aspectClasses = [
              "aspect-[4/5]",
              "aspect-[16/10]",
              "aspect-[3/4]",
              "aspect-[16/11]",
              "aspect-[4/5]",
              "aspect-[16/10]",
              "aspect-[3/4]",
              "aspect-[16/11]"
            ];

            return (
              <div
                key={src}
                className={`group relative w-[72vw] max-w-[620px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 sm:w-[52vw] lg:w-[38vw] ${aspectClasses[index]}`}
              >
                <Image
                  src={src}
                  alt={`Supernatural Community Church event gallery image ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 72vw, 38vw"
                  loading={index < 2 ? "eager" : "lazy"}
                  className="object-cover transition-transform duration-[1400ms] group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 font-mono text-[9px] tracking-[0.18em] text-white/60">
                  0{index + 1}
                </div>

                <div className="absolute inset-4 rounded-[1rem] border border-white/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
