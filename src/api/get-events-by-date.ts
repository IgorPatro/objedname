import { useQuery } from "@tanstack/react-query";
import { generateEvents, sleep } from "./utils";
import { EventSchema } from "./type";
import { z } from "zod";

const EventsSchema = z.array(EventSchema);

export const getEventsByDateQueryKey = (date: string) => ["events", date];

// Note: The data here is mocked. This is to just simulate a network request.
export const getEventsByDate = async (_date: string) => {
  await sleep(1000);
  try {
    const events = generateEvents();
    return EventsSchema.parse(events);
  } catch (err) {
    throw new Error("Failed to fetch events");
  }
};

export const useGetEventsByDate = (date: string) => {
  return useQuery({
    queryFn: () => getEventsByDate(date),
    queryKey: getEventsByDateQueryKey(date),
  });
};
