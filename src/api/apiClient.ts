import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { StorageValue } from "zustand/middleware";

import { BASE_URL } from "~/constants/api";
import { SESSION_STORE_NAME } from "~/constants/stores";
import { SessionState } from "~/stores/sessionStore";

const apiClient = axios.create({
  baseURL: BASE_URL,
});

apiClient.interceptors.request.use(
  async (config) => {
    const persistedSessionStore =
      await AsyncStorage.getItem(SESSION_STORE_NAME);
    const sessionStore: StorageValue<SessionState> = persistedSessionStore
      ? JSON.parse(persistedSessionStore)
      : {};
    const { token } = sessionStore.state;

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
