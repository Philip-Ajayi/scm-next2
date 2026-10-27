import Image from "next/image";
import { Download, Sparkles, MapPin, Calendar, CheckCircle2 } from "lucide-react";

export function RegisterFlierCard() {
  return (
    <aside className="space-y-6">
      {/* Flier Container */}
      <div className="group relative mx-auto aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] border border-black/10 bg-[#101014] shadow-[0_24px_70px_rgba(16,16,20,0.12)]">
        <Image
          src="/register/flier.jpeg"
          alt="Supernatural Camp Meeting 2026 Registration Flier"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
          <div>
            <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/70">
              Official Flier
            </div>
            <div className="font-display text-xl">SCM 2026</div>
          </div>

          <a
            href="/register/flier.jpeg"
            download="SCM-2026-Flier"
            className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 font-mono text-[9px] uppercase tracking-[0.16em] backdrop-blur-xl transition-colors hover:bg-white hover:text-black"
          >
            <Download size={12} />
            <span>Save Flier</span>
          </a>
        </div>
      </div>

      {/* Conviction card */}
      <div className="rounded-[2.5rem] border border-black/10 bg-white p-8">
        <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-violet-700">
          Gathering Distinctive
        </div>

        <h4 className="mt-2 font-display text-2xl">
          The Word & Spirit in Power
        </h4>

        <div className="mt-4 space-y-3 text-xs leading-6 text-black/60">
          <div className="flex items-start gap-2">
            <CheckCircle2 size={14} className="mt-1 shrink-0 text-violet-600" />
            <span>Day sessions dedicated to who you are in Christ and the finished work.</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 size={14} className="mt-1 shrink-0 text-violet-600" />
            <span>Evening sessions filled with dynamic Holy Ghost demonstrations.</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 size={14} className="mt-1 shrink-0 text-violet-600" />
            <span>Strictly no entertainment or carnal side attractions permitted.</span>
          </div>
        </div>
      </div>
    </aside>
  );
}