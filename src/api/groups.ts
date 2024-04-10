import Toast from "react-native-toast-message";
import { useQueryClient, useQuery, useMutation } from "react-query";

import mockedApiClient from "./mockedApiClient";
import { GROUPS_KEY, GROUPS_URL, GROUP_JOIN_URL } from "../constants/groups";
import { generatePath } from "../helpers/misc";
import { Group } from "../types/groups";

async function getGroups(): Promise<Group[]> {
  const res = await mockedApiClient.get(GROUPS_URL);
  return res.data;
}

async function createGroup(data: Pick<Group, "name" | "sport">) {
  const res = await mockedApiClient.post(GROUPS_URL, data);
  return res.data;
}

async function joinGroup(data: Required<Pick<Group, "code">>) {
  const res = await mockedApiClient.post(generatePath(GROUP_JOIN_URL, data));
  return res.data;
}

export function useGetGroups() {
  return useQuery({
    queryKey: [GROUPS_KEY],
    queryFn: getGroups,
  });
}

export function useCreateGroup() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createGroup,
    onSuccess: () => {
      Toast.show({
        type: "success",
        text1: "Ви успішно створили групу!",
      });
      queryClient.invalidateQueries({ queryKey: [GROUPS_KEY] });
    },
    onError: () => {
      Toast.show({
        type: "error",
        text1: "Щось пішло не так!",
      });
    },
  });
}

export function useJoinGroup() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: joinGroup,
    onSuccess: () => {
      Toast.show({
        type: "success",
        text1: "Ви успішно приєднались до групи!",
      });
      queryClient.invalidateQueries({ queryKey: [GROUPS_KEY] });
    },
    onError: () => {
      Toast.show({
        type: "error",
        text1: "Щось пішло не так!",
      });
    },
  });
}
