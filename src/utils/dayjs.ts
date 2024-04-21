import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import isTomorrow from "dayjs/plugin/isTomorrow";
import isYesterday from "dayjs/plugin/isYesterday";
import utc from "dayjs/plugin/utc";
import "dayjs/locale/uk";

dayjs.extend(isToday);
dayjs.extend(isTomorrow);
dayjs.extend(isYesterday);
dayjs.extend(utc);

dayjs.locale("uk");
