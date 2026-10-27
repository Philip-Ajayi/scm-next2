export interface SessionTime {
  time: string;
  timezone: string;
}

export interface DaySchedule {
  day: string;
  date: string;
  fullDate: string;
  times: SessionTime[];
}