import type { Metadata } from "next";
import { ScheduleDisplay } from "@/components/schedule/schedule-display";

export const metadata: Metadata = {
  title: "Schedule | Supernatural Camp Meeting 2026",
  description: "Schedule of dates and times for Supernatural Camp Meeting 2026.",
  openGraph: {
    title: "Schedule | Supernatural Camp Meeting 2026",
    description: "Thursday, Nov 19 – Sunday, Nov 22, 2026. All times in EST.",
    images: ["/schedule/flier.jpeg"]
  }
};

export default function SchedulePage() {
  return <ScheduleDisplay />;
}