import dayjs from "dayjs";

import { BaseEvent } from "~/types/events";

export function getDateRange(event: BaseEvent) {
  const now = dayjs();
  const start = dayjs(event.startDate);
  const end = dayjs(event.endDate);

  const isToday = start.isToday() && end.isToday();
  const isTomorrow = start.isTomorrow() && end.isTomorrow();
  const isYesterday = start.isYesterday() && end.isYesterday();
  const isCurrentYearAndSameDay =
    start.isSame(now, "year") && start.isSame(end, "day");
  const isCurrentYear = start.isSame(now, "year");
  const isSameDay = start.isSame(end, "day");

  if (isToday) {
    return "Сьогодні";
  }

  if (isTomorrow) {
    return "Завтра";
  }

  if (isYesterday) {
    return "Вчора";
  }

  if (isCurrentYearAndSameDay) {
    return start.format("D MMM.");
  }

  if (isCurrentYear) {
    return `${start.format("D MMM.")} - ${end.format("D MMM.")}`;
  }

  if (isSameDay) {
    return start.format("D MMM. YYYY р.");
  }

  return `${start.format("D MMM. YYYY р.")} - ${end.format("D MMM. YYYY р.")}`;
}

export function getDateRangeWithTime(event: BaseEvent) {
  const now = dayjs();
  const start = dayjs(event.startDate);
  const end = dayjs(event.endDate);

  const isToday = start.isToday() && end.isToday();
  const isTomorrow = start.isTomorrow() && end.isTomorrow();
  const isYesterday = start.isYesterday() && end.isYesterday();
  const isCurrentYearAndSameDay =
    start.isSame(now, "year") && start.isSame(end, "day");
  const isCurrentYear = start.isSame(now, "year");
  const isSameDay = start.isSame(end, "day");

  if (isToday) {
    return `Сьогодні ${start.format("H:mm")} - ${end.format("H:mm")}`;
  }

  if (isTomorrow) {
    return `Завтра ${start.format("H:mm")} - ${end.format("H:mm")}`;
  }

  if (isYesterday) {
    return `Вчора ${start.format("H:mm")} - ${end.format("H:mm")}`;
  }

  if (isCurrentYearAndSameDay) {
    return `${start.format("D MMM., HH:mm")} - ${end.format("HH:mm")}`;
  }

  if (isCurrentYear) {
    return `${start.format("D MMM. H:mm")} - ${end.format("D MMM. H:mm")}`;
  }

  if (isSameDay) {
    return `${start.format("D MMM. YYYY р. H:mm")} - ${end.format("H:mm")}`;
  }

  return `${start.format("D MMM. YYYY р. H:mm")} - ${end.format("D MMM. YYYY р. H:mm")}`;
}
