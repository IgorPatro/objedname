import { z } from "zod";

export const EventSchema = z.object({
  Time: z.string(),
  Capacity: z.number(),
  OriginalCapacity: z.number(),
});

export type Event = z.infer<typeof EventSchema>;
