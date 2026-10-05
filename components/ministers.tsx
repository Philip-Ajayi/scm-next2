import Image from "next/image";
import { SectionLabel } from "@/components/section-label";

const ministers = [
  {
    name: "Ayo Benson",
    role: "Lead Pastor",
    image: "/Ministers/Main.jpeg",
    number: "01"
  },
  {
    name: "Chris Segun Onayinka",
    role: "Guest Minister",
    image: "/Ministers/Guest.jpeg",
    number: "02"
  }
];

export function Ministers() {
  return (
    <section id="ministers" className="bg-white px-5 py-28 sm:px-8 lg:px-14 lg:py-44">
      <div className="mx-auto max-w-[1500px]">
        <SectionLabel>05 · The voices</SectionLabel>

        <div className="mt-8 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <h2 className="max-w-4xl font-display text-[clamp(4rem,9vw,10rem)] leading-[0.76] tracking-[-0.06em]">
            The
            <br />
            <i>voices.</i>
          </h2>

          <p className="max-w-sm text-sm leading-7 text-black/50">
            Voices carrying the Word with clarity and creating room for the
            Spirit to demonstrate what has been taught.
          </p>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          {ministers.map((minister, index) => (
            <article
              key={minister.name}
              className={`group relative ${
                index === 1 ? "lg:mt-32" : ""
              }`}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#ecece8]">
                <Image
                  src={minister.image}
                  alt={minister.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.045]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                <div className="absolute inset-x-6 bottom-6 flex items-end justify-between text-white sm:inset-x-8 sm:bottom-8">
                  <div>
                    <div className="font-display text-4xl leading-none tracking-[-0.04em] sm:text-6xl">
                      {minister.name}
                    </div>

                    <div className="mt-3 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.16em] backdrop-blur-xl">
                      {minister.role}
                    </div>
                  </div>

                  <div className="font-mono text-[9px] tracking-[0.16em] text-white/50">
                    {minister.number}
                  </div>
                </div>

                <div className="absolute inset-5 rounded-[1.5rem] border border-white/15 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
