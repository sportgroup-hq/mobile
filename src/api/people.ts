import { useQuery } from "react-query";

import mockedApiClient from "./mockedApiClient";

import {
  PEOPLE_URL,
  PEOPLE_KEY,
  PERSON_URL,
  PERSON_EVENT_URL,
  PERSON_EVENTS_KEY,
} from "~/constants/people";
import { generatePath } from "~/helpers/misc";
import { PersonEvent } from "~/types/events";
import { User } from "~/types/users";

async function getPeople(groupId: string): Promise<User[]> {
  const res = await mockedApiClient.get(
    // eslint-disable-next-line prettier/prettier
    generatePath(PEOPLE_URL, { id: groupId })
  );
  return res.data;
}

async function getPerson(personId: string): Promise<User> {
  const res = await mockedApiClient.get(
    // eslint-disable-next-line prettier/prettier
    generatePath(PERSON_URL, { id: personId })
  );
  return res.data;
}

async function getPersonEvent({
  groupId,
  personId,
  eventId,
}: {
  groupId: string;
  personId: string;
  eventId: string;
}): Promise<PersonEvent> {
  const res = await mockedApiClient.get(
    // eslint-disable-next-line prettier/prettier
    generatePath(PERSON_EVENT_URL, { groupId, personId, eventId })
  );
  return res.data;
}

export function useGetPeople(groupId: string) {
  return useQuery({
    queryKey: [PEOPLE_KEY, groupId],
    queryFn: () => getPeople(groupId),
  });
}

export function useGetPerson(personId: string) {
  return useQuery({
    queryKey: [PEOPLE_KEY, personId],
    queryFn: () => getPerson(personId),
  });
}

export function useGetPersonEvent({
  groupId,
  personId,
  eventId,
}: {
  groupId: string;
  personId: string;
  eventId: string;
}) {
  return useQuery({
    queryKey: [PERSON_EVENTS_KEY, groupId, personId, eventId],
    queryFn: () => getPersonEvent({ groupId, personId, eventId }),
  });
}
