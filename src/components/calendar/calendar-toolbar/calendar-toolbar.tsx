import { useMemo } from "react";
import { motion } from "framer-motion";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import {
  dateToString,
  generateDaysAheadFromNow,
  isSameDay,
  stringToDate,
} from "../../../utils/date";
import { twMerge } from "tailwind-merge";

interface CalendarToolbarProps {
  onDateChange: (date: string) => void;
  date: string;
}

export const CalendarToolbar = ({
  date,
  onDateChange,
}: CalendarToolbarProps) => {
  const items = useMemo(() => generateDaysAheadFromNow(7), []);
  const dayPosition = useMemo(
    () => items.findIndex((item) => isSameDay(item.date, date)),
    [items, date]
  );
  const [minDate, maxDate] = useMemo(() => {
    const min = items[0].date;
    const max = items[items.length - 1].date;
    return [min, max];
  }, [items]);

  const onNextDay = () => {
    const nextDay = stringToDate(date);
    nextDay.setDate(nextDay.getDate() + 1);
    onDateChange(dateToString(nextDay));
  };

  const onPreviousDay = () => {
    const previousDay = stringToDate(date);
    previousDay.setDate(previousDay.getDate() - 1);
    onDateChange(dateToString(previousDay));
  };

  return (
    <div className="flex gap-2">
      <button
        className="w-14 h-12 bg-gray-700 disabled:bg-gray-900 flex justify-center items-center rounded-xl text-gray-500"
        onClick={onPreviousDay}
        disabled={date === minDate}
      >
        <FaAngleLeft className="w-6 h-6" />
      </button>
      <div className="w-[264px] shrink-0 overflow-x-scroll snap-mandatory scrollbar-hide">
        <motion.div
          animate={{
            x: -dayPosition * (128 + 8),
          }}
          className="flex flex-nowrap gap-2 w-full shrink-0"
        >
          {items.map((item) => (
            <button
              className={twMerge(
                "h-12 w-32 px-3 shrink-0 rounded-xl snap-center scrollbar-hide",
                isSameDay(item.date, date) ? "bg-yellow-600" : "bg-gray-700"
              )}
              onClick={() => onDateChange(item.date)}
            >
              {item.formattedDate}
            </button>
          ))}
        </motion.div>
      </div>
      <button
        className="w-14 h-12 bg-gray-700 flex justify-center items-center rounded-xl text-gray-500 disabled:bg-gray-900"
        onClick={onNextDay}
        disabled={date === maxDate}
      >
        <FaAngleRight className="w-6 h-6" />
      </button>
    </div>
  );
};
