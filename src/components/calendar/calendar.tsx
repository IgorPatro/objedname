import { useState } from "react";
import { useGetEventsByDate } from "../../api/get-events-by-date";
import { getLeftCapacity } from "../../utils/calendar";
import { CalendarToolbar } from "./calendar-toolbar";
import { twMerge } from "tailwind-merge";
import { dateToString } from "../../utils/date";

export const Calendar = () => {
  const [date, setDate] = useState(dateToString(new Date()));
  const { data: events, isFetching } = useGetEventsByDate(date);
  const [selectedEventId, setSelectedEventId] = useState<string>();

  const onDateChange = (date: string) => {
    setDate(date);
  };

  const renderEvents = () => {
    if (isFetching) {
      return [...new Array(10)].map(() => (
        <div className="animate-pulse bg-gray-700 w-32 h-16 rounded-xl" />
      ));
    }

    return events?.map((event) => (
      <div
        className={twMerge(
          "relative border-white border rounded-xl w-32 h-16 cursor-pointer justify-center items-center",
          selectedEventId === event.id ? "bg-green-500" : "bg-transparent"
        )}
        onClick={() => setSelectedEventId(event.id)}
        key={event.id}
      >
        <div className={twMerge("absolute top-2 left-2")}>
          {getLeftCapacity(event.Capacity, event.OriginalCapacity)}/
          {event.OriginalCapacity}
        </div>
        <div className="flex w-full h-full justify-center items-center">
          {event.Time}
        </div>
      </div>
    ));
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <CalendarToolbar onDateChange={onDateChange} date={date} />
      <div className="flex gap-2 flex-wrap justify-center">
        {renderEvents()}
      </div>
    </div>
  );
};
