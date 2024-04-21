import dayjs from "dayjs";

import { Event } from "~/types/events";

export function getDateRange(event: Event) {
  const now = dayjs();
  const start = dayjs(event.startDate);
  const end = dayjs(event.endDate);

  if (start.isToday() && end.isToday()) {
    return "Сьогодні";
  }

  if (start.isTomorrow() && end.isTomorrow()) {
    return "Завтра";
  }

  if (start.isYesterday() && end.isYesterday()) {
    return "Вчора";
  }

  if (start.isSame(now, "year")) {
    if (start.isSame(end, "day")) {
      return `${start.format("D MMM.")}`;
    }

    return `${start.format("D MMM.")} - ${end.format("D MMM.")}`;
  }

  if (start.isSame(end, "day")) {
    return start.format("D MMM. YYYY р.");
  }

  return `${start.format("D MMM. YYYY р.")} - ${end.format("D MMM. YYYY р.")}`;
}
