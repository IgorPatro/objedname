import { useMemo, useState } from "react";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { generateDaysAheadFromNow } from "../../../utils/date";

export const CalendarToolbar = () => {
  const [date, setDate] = useState(new Date());

  const items = useMemo(() => generateDaysAheadFromNow(2), []);

  console.log(generateDaysAheadFromNow(7));

  return (
    <div className="flex gap-2">
      <button className="w-12 h-12 bg-gray-900 flex justify-center items-center rounded-xl text-gray-500">
        <FaAngleLeft className="w-6 h-6" />
      </button>
      {items.map((item) => (
        <button className="bg-yellow-600 h-12 px-3 rounded-xl">
          {item.formattedDate}
        </button>
      ))}
      <button className="w-12 h-12 bg-gray-700 flex justify-center items-center rounded-xl text-gray-500">
        <FaAngleRight className="w-6 h-6" />
      </button>
    </div>
  );
};
