import { useQuery } from "react-query";

import mockedApiClient from "./mockedApiClient";

import { EVENTS_KEY, EVENTS_URL, EVENT_URL } from "~/constants/events";
import { generatePath } from "~/helpers/misc";
import { GroupEvent } from "~/types/events";

async function getEvents(id: string): Promise<GroupEvent[]> {
  const res = await mockedApiClient.get(generatePath(EVENTS_URL, { id }));
  return res.data;
}

async function getEvent({
  groupId,
  eventId,
}: {
  groupId: string;
  eventId: string;
}): Promise<GroupEvent> {
  const res = await mockedApiClient.get(
    generatePath(EVENT_URL, { groupId, eventId })
  );
  return res.data;
}

export function useGetEvents(id: string) {
  return useQuery({
    queryKey: [EVENTS_KEY, id],
    queryFn: () => getEvents(id),
  });
}

export function useGetEvent({
  groupId,
  eventId,
}: {
  groupId: string;
  eventId: string;
}) {
  return useQuery({
    queryKey: [EVENTS_KEY, groupId, eventId],
    queryFn: () => getEvent({ groupId, eventId }),
  });
}
