import { useGetEventsByDate } from "../../api/get-events-by-date";
import { CalendarToolbar } from "./calendar-toolbar";

export const Calendar = () => {
  const { data } = useGetEventsByDate("2021-10-10");

  return (
    <div>
      <CalendarToolbar />
    </div>
  );
};
