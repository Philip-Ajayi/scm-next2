"use client";

import { useEffect, useMemo, useState } from "react";
import { EVENT_DATE } from "@/lib/constants";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function calculateTime(): TimeLeft {
  const difference = Math.max(0, EVENT_DATE.getTime() - Date.now());
  return {
    days: Math.floor(difference / 86_400_000),
    hours: Math.floor((difference / 3_600_000) % 24),
    minutes: Math.floor((difference / 60_000) % 60),
    seconds: Math.floor((difference / 1_000) % 60),
  };
}

function equal(a: TimeLeft, b: TimeLeft) {
  return (
    a.days === b.days &&
    a.hours === b.hours &&
    a.minutes === b.minutes &&
    a.seconds === b.seconds
  );
}

export function Countdown() {
  const [time, setTime] = useState<TimeLeft | null>(null);

  useEffect(() => {
    let alive = true;

    const tick = () => {
      if (!alive) return;
      const next = calculateTime();
      setTime((prev) => (prev && equal(prev, next) ? prev : next));
    };

    tick();
    const id = window.setInterval(tick, 1000);

    return () => {
      alive = false;
      window.clearInterval(id);
    };
  }, []);

  const values = useMemo<
    ReadonlyArray<readonly [string, number]>
  >(() => {
    if (!time) {
      return [
        ["Days", 0],
        ["Hours", 0],
        ["Minutes", 0],
        ["Seconds", 0],
      ];
    }
    return [
      ["Days", time.days],
      ["Hours", time.hours],
      ["Minutes", time.minutes],
      ["Seconds", time.seconds],
    ];
  }, [time]);

  const ariaLabel = time
    ? `${time.days} days, ${time.hours} hours, ${time.minutes} minutes, ${time.seconds} seconds until Supernatural Camp Meeting`
    : "Time until Supernatural Camp Meeting";

  return (
    <div
      aria-label={ariaLabel}
      className="grid grid-cols-4 gap-3 border-t border-white/20 pt-4"
    >
      {values.map(([label, value]) => (
        <div key={label}>
          <div className="font-mono text-2xl tabular-nums tracking-tighter md:text-4xl">
            {String(value).padStart(2, "0")}
          </div>
          <div className="mt-1 font-mono text-[8px] uppercase tracking-[0.16em] text-white/40">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}