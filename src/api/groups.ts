import Toast from "react-native-toast-message";
import { useQueryClient, useQuery, useMutation } from "react-query";

import mockedApiClient from "./mockedApiClient";
import { useGetUser } from "./user";

import {
  GROUPS_KEY,
  GROUPS_URL,
  GROUP_JOIN_URL,
  GROUP_URL,
} from "~/constants/groups";
import { generatePath } from "~/helpers/misc";
import { Group } from "~/types/groups";

async function getGroups(): Promise<Group[]> {
  const res = await mockedApiClient.get(GROUPS_URL);
  return res.data;
}

async function getGroup(id: string): Promise<Group> {
  const res = await mockedApiClient.get(generatePath(GROUP_URL, { id }));
  return res.data;
}

async function createGroup(data: Pick<Group, "name" | "sport">) {
  const res = await mockedApiClient.post(GROUPS_URL, data);
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

async function joinGroup(data: Required<Pick<Group, "code">>) {
  const res = await mockedApiClient.post(generatePath(GROUP_JOIN_URL, data));
  return res.data;
}

async function deleteGroup(id: string) {
  const res = await mockedApiClient.delete(generatePath(GROUP_URL, { id }));
  return res.data;
}

export function useGetGroups() {
  const { data: userData, isLoading: isGetUserLoading } = useGetUser();

  return useQuery({
    queryKey: [GROUPS_KEY],
    queryFn: getGroups,
    select: (data) => {
      if (isGetUserLoading || !userData) {
        return {
          createdGroups: [],
          joinedGroups: [],
        };
      }

      const createdGroups = data.filter(
        (group) => userData.id === group.owner.id
      );
      const joinedGroups = data.filter(
        (group) => userData.id !== group.owner.id
      );

      return {
        createdGroups,
        joinedGroups,
      };
    },
  });
}

export function useGetGroup(id: string) {
  return useQuery({
    queryKey: [GROUPS_KEY, id],
    queryFn: () => getGroup(id),
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
