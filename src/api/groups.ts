import { useQuery } from "react-query";

import mockedApiClient from "./mockedApiClient";
import { GROUPS_KEY, GROUPS_URL } from "../constants/groups";
import { Group } from "../types/groups";

async function getGroups() {
  const res = await mockedApiClient.get(GROUPS_URL);
  return res.data;
}

export function useGetGroups() {
  return useQuery<Group[]>({
    queryKey: [GROUPS_KEY],
    queryFn: getGroups,
  });
}
