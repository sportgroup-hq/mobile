import { useQuery } from "react-query";

import mockedApiClient from "./mockedApiClient";

import { ME_KEY, ME_URL, PROFILE_KEY, PROFILE_URL } from "~/constants/users";
import { generatePath } from "~/helpers/misc";
import { User } from "~/types/users";

async function getMe() {
  const res = await mockedApiClient.get(ME_URL);
  return res.data;
}

async function getProfile(id: string) {
  const res = await mockedApiClient.get(generatePath(PROFILE_URL, { id }));
  return res.data;
}

export function useGetMe() {
  return useQuery<User>({
    queryKey: [ME_KEY],
    queryFn: getMe,
  });
}

export function useGetProfile(id: string) {
  return useQuery<User>({
    queryKey: [PROFILE_KEY, id],
    queryFn: () => getProfile(id),
  });
}
