"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const EVENT_TIME = new Date("2026-11-20T00:00:00.000Z").getTime();

function calculateTime(): TimeLeft {
  const difference = Math.max(EVENT_TIME - Date.now(), 0);

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  };
}

export function Countdown() {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    setMounted(true);
    setTime(calculateTime());
    const timer = window.setInterval(() => {
      setTime(calculateTime());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const items = [
    ["Days", time.days],
    ["Hours", time.hours],
    ["Minutes", time.minutes],
    ["Seconds", time.seconds]
  ];

  return (
    <div
      className="grid grid-cols-4 gap-2 sm:gap-5"
      aria-label="Countdown to Supernatural Camp Meeting"
    >
      {items.map(([label, value]) => (
        <div key={label} className="min-w-0">
          <div className="font-mono text-2xl tracking-[-0.08em] text-white sm:text-4xl">
            {mounted ? String(value).padStart(2, "0") : "00"}
          </div>
          <div className="mt-1 text-[8px] uppercase tracking-[0.2em] text-white/45">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const EVENT_TIME = new Date("2026-11-20T00:00:00.000Z").getTime();

function calculateTime(): TimeLeft {
  const difference = Math.max(EVENT_TIME - Date.now(), 0);

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  };
}

export function Countdown() {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    setMounted(true);
    setTime(calculateTime());
    const timer = window.setInterval(() => {
      setTime(calculateTime());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const items = [
    ["Days", time.days],
    ["Hours", time.hours],
    ["Minutes", time.minutes],
    ["Seconds", time.seconds]
  ];

  return (
    <div
      className="grid grid-cols-4 gap-2 sm:gap-5"
      aria-label="Countdown to Supernatural Camp Meeting"
    >
      {items.map(([label, value]) => (
        <div key={label} className="min-w-0">
          <div className="font-mono text-2xl tracking-[-0.08em] text-white sm:text-4xl">
            {mounted ? String(value).padStart(2, "0") : "00"}
          </div>
          <div className="mt-1 text-[8px] uppercase tracking-[0.2em] text-white/45">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}