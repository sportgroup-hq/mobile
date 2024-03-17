import Toast from "react-native-toast-message";
import { useQueryClient, useQuery, useMutation } from "react-query";

import mockedApiClient from "./mockedApiClient";
import { GROUPS_KEY, GROUPS_URL, GROUP_URL } from "../constants/groups";
import { generatePath } from "../helpers/misc";
import { Group } from "../types/groups";

async function getGroups() {
  const res = await mockedApiClient.get(GROUPS_URL);
  return res.data;
}

async function deleteGroup(id: string) {
  console.log(generatePath(GROUP_URL, { id }));
  const res = await mockedApiClient.delete(generatePath(GROUP_URL, { id }));
  return res.data;
}

export function useGetGroups() {
  return useQuery<Group[]>({
    queryKey: [GROUPS_KEY],
    queryFn: getGroups,
  });
}

export function useDeleteGroup() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteGroup,
    onSuccess: () => {
      Toast.show({
        type: "success",
        text1: "Ви успішно видалили групу!",
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

export function useLeaveGroup() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteGroup,
    onSuccess: () => {
      Toast.show({
        type: "success",
        text1: "Ви успішно покинули групу!",
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
