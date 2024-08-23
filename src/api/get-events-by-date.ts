import { useQuery } from "@tanstack/react-query";
import { generateEvents, sleep } from "./utils";

export const getEventsByDateQueryKey = (date: string) => ["events", date];

// Note: The data here is mocked. This is to just simulate a network request.
export const getEventsByDate = async (_date: string) => {
  await sleep(1000);
  const events = generateEvents();
  return events;
};

export const useGetEventsByDate = (date: string) => {
  return useQuery({
    queryFn: () => getEventsByDate(date),
    queryKey: getEventsByDateQueryKey(date),
  });
};
