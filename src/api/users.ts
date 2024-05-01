import { useQuery } from "react-query";

import mockedApiClient from "./mockedApiClient";

import { USER_KEY, USER_URL } from "~/constants/users";
import { User } from "~/types/users";

async function getUser() {
  const res = await mockedApiClient.get(USER_URL);
  return res.data;
}

export function useGetUser() {
  return useQuery<User>({
    queryKey: [USER_KEY],
    queryFn: getUser,
  });
}
