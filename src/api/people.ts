import { useQuery } from "react-query";

import mockedApiClient from "./mockedApiClient";

import { PEOPLE_URL, PEOPLE_KEY } from "~/constants/people";
import { generatePath } from "~/helpers/misc";
import { User } from "~/types/users";

async function getPeople(id: string): Promise<User[]> {
  const res = await mockedApiClient.get(generatePath(PEOPLE_URL, { id }));
  return res.data;
}

export function useGetPeople(id: string) {
  return useQuery({
    queryKey: [PEOPLE_KEY, id],
    queryFn: () => getPeople(id),
  });
}
