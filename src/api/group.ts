import Toast from "react-native-toast-message";
import { useMutation, useQuery, useQueryClient } from "react-query";

import mockedApiClient from "./mockedApiClient";
import {
  GROUP_PEOPLE_KEY,
  GROUP_PEOPLE_URL,
  GROUP_URL,
} from "../constants/group";
import { GROUPS_KEY } from "../constants/groups";
import { generatePath } from "../helpers/misc";
import { Group } from "../types/groups";
import { User } from "../types/users";

async function getGroup(id: string): Promise<Group> {
  const res = await mockedApiClient.get(generatePath(GROUP_URL, { id }));
  return res.data;
}

async function editGroup({
  id,
  data,
}: {
  id: string;
  data: Required<Pick<Group, "name" | "sport">>;
}) {
  const res = await mockedApiClient.put(generatePath(GROUP_URL, { id }), data);
  return res.data;
}

async function deleteGroup(id: string) {
  const res = await mockedApiClient.delete(generatePath(GROUP_URL, { id }));
  return res.data;
}

async function getGroupPeople(id: string): Promise<User[]> {
  const res = await mockedApiClient.get(generatePath(GROUP_PEOPLE_URL, { id }));
  return res.data;
}

export function useGetGroup(id: string) {
  return useQuery({
    queryKey: [GROUPS_KEY, id],
    queryFn: () => getGroup(id),
  });
}

export function useEditGroup() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: editGroup,
    onSuccess: (_, { id }) => {
      Toast.show({
        type: "success",
        text1: "Ви успішно відредагували групу!",
      });
      queryClient.invalidateQueries({ queryKey: [GROUPS_KEY] });
      queryClient.invalidateQueries({ queryKey: [GROUPS_KEY, id] });
    },
    onError: () => {
      Toast.show({
        type: "error",
        text1: "Щось пішло не так!",
      });
    },
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

export function useGetGroupPeople(id: string) {
  return useQuery({
    queryKey: [GROUP_PEOPLE_KEY, id],
    queryFn: () => getGroupPeople(id),
  });
}
