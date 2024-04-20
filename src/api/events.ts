import { useQuery } from "react-query";

import mockedApiClient from "./mockedApiClient";

import { EVENTS_KEY, EVENTS_URL } from "~/constants/events";
import { generatePath } from "~/helpers/misc";
import { Event } from "~/types/events";

async function getEvents(id: string): Promise<Event[]> {
  const res = await mockedApiClient.get(generatePath(EVENTS_URL, { id }));
  return res.data;
}

export function useGetEvents(id: string) {
  return useQuery({
    queryKey: [EVENTS_KEY, id],
    queryFn: () => getEvents(id),
  });
}
