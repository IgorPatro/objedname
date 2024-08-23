import { Event } from "./type";
import clamp from "lodash/clamp";

// Note: This function is used to generate random events.
export const generateEvents = (): Event[] => {
  const data = [];

  for (let hour = 7; hour < 18; hour++) {
    const timeStr = `${hour.toString().padStart(2, "0")}:00`;
    const capacity = Math.floor(Math.random() * 5) + 1;
    const leftCapacity = clamp(Math.floor(Math.random() * 5) + 1, 1, capacity);

    const entry = {
      Time: timeStr,
      Capacity: leftCapacity,
      OriginalCapacity: capacity,
      id: Math.random().toString(36).substr(2, 9),
    };

    data.push(entry);
  }

  return data;
};

// Note: This function is used to simulate a network request.
export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
