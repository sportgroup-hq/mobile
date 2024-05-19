import Toast from "react-native-toast-message";
import { useMutation, useQuery, useQueryClient } from "react-query";

import apiClient from "./apiClient";
import mockedApiClient from "./mockedApiClient";

import { LOGIN_URL, REGISTER_URL, USER_KEY, USER_URL } from "~/constants/user";
import { LoginData, RegisterData, User } from "~/types/user";

async function register(data: RegisterData) {
  const res = await apiClient.post(REGISTER_URL, data);
  return res.data;
}

async function login(data: LoginData) {
  const res = await apiClient.post(LOGIN_URL, data);
  return res.data;
}

async function getUser() {
  const res = await mockedApiClient.get(USER_URL);
  return res.data;
}

export function useRegister() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: register,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [USER_KEY] });
    },
    onError: () => {
      Toast.show({
        type: "error",
        text1: "Щось пішло не так!",
      });
    },
  });
}

export function useLogin() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: login,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [USER_KEY] });
    },
    onError: () => {
      Toast.show({
        type: "error",
        text1: "Щось пішло не так!",
      });
    },
  });
}

export function useGetUser() {
  return useQuery<User>({
    queryKey: [USER_KEY],
    queryFn: getUser,
  });
}
