import { SCRIPTURES } from "@/data/give";
import { SectionLabel } from "@/components/section-label";

export function GivingScriptures() {
  return (
    <section className="bg-white px-5 py-24 sm:px-8 lg:px-14 lg:py-32">
      <div className="mx-auto max-w-[1500px]">
        <SectionLabel>03 · Divine Promises</SectionLabel>

        <h2 className="mt-6 font-display text-[clamp(3.5rem,7vw,7rem)] leading-[0.8] tracking-[-0.05em]">
          The grace of
          <br />
          <i>giving.</i>
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SCRIPTURES.map((item) => (
            <div
              key={item.verse}
              className="flex flex-col justify-between rounded-3xl border border-black/10 bg-[#f7f7f5] p-8"
            >
              <p className="font-display text-xl italic leading-relaxed text-black/80">
                &ldquo;{item.text}&rdquo;
              </p>
              <div className="mt-6 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-violet-700">
                {item.verse}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}