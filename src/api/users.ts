import { useQuery } from "react-query";

import mockedApiClient from "./mockedApiClient";
import { ME_KEY, ME_URL } from "../constants/users";
import { User } from "../types/users";

async function getMe() {
  const res = await mockedApiClient.get(ME_URL);
  return res.data;
}

export function useGetMe() {
  return useQuery<User>({
    queryKey: [ME_KEY],
    queryFn: getMe,
  });
}
