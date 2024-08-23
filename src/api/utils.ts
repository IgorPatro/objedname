import { Event } from "./type";

export const generateEvents = (): Event[] => {
  const data = [];

  for (let hour = 0; hour < 24; hour++) {
    const timeStr = `${hour.toString().padStart(2, "0")}:00`;
    const capacity = Math.floor(Math.random() * 5) + 1;

    const entry = {
      Time: timeStr,
      Capacity: capacity,
      OriginalCapacity: capacity,
    };

    data.push(entry);
  }

  return data;
};

// Note: This function is used to simulate a network request.
export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
