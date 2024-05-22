import Toast from "react-native-toast-message";
import { useMutation, useQuery, useQueryClient } from "react-query";

import apiClient from "./apiClient";
import mockedApiClient from "./mockedApiClient";

import useSessionStore from "~/stores/sessionStore";
import { LOGIN_URL, REGISTER_URL, USER_KEY, USER_URL } from "~/constants/user";
import {
  AuthResponse,
  LoginRequest,
  RegisterRequest,
  User,
} from "~/types/user";

async function register(data: RegisterRequest): Promise<AuthResponse> {
  const res = await apiClient.post(REGISTER_URL, data);
  return res.data;
}

async function login(data: LoginRequest): Promise<AuthResponse> {
  const res = await apiClient.post(LOGIN_URL, data);
  return res.data;
}

async function getUser() {
  const res = await mockedApiClient.get(USER_URL);
  return res.data;
}

export function useRegister() {
  const queryClient = useQueryClient();
  const setToken = useSessionStore((state) => state.setToken);

  return useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      setToken(data.access_token);
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
  const setToken = useSessionStore((state) => state.setToken);

  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setToken(data.access_token);
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
