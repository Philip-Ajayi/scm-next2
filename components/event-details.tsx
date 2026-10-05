import { MapPin, CalendarDays, Clock3 } from "lucide-react";

export function EventDetails() {
  return (
    <div className="grid gap-5 text-white/75 sm:grid-cols-3">
      <div className="flex items-start gap-3">
        <CalendarDays size={15} className="mt-0.5 shrink-0 text-white/60" />
        <div>
          <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/40">
            Date
          </div>
          <div className="mt-1 text-sm">19 November 2026</div>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <Clock3 size={15} className="mt-0.5 shrink-0 text-white/60" />
        <div>
          <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/40">
            Time
          </div>
          <div className="mt-1 text-sm">7:00 PM EST</div>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <MapPin size={15} className="mt-0.5 shrink-0 text-white/60" />
        <div>
          <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/40">
            Location
          </div>
          <div className="mt-1 text-sm">
            1890 W Ridge RD
            <br />
            Rochester, NY 14615
          </div>
        </div>
      </div>
    </div>
  );
}
