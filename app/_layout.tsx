import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PaperProvider } from "react-native-paper";
import { en, registerTranslation } from "react-native-paper-dates";
import Toast from "react-native-toast-message";
import { QueryClient, QueryClientProvider } from "react-query";

import UserAvatar from "../src/components/molecules/UserAvatar";

registerTranslation("en", en);

const queryClient = new QueryClient();

function RootStack() {
  return (
    <Stack>
      <Stack.Screen
        name="groups/index"
        options={{
          headerTitle: "",
          headerRight: UserAvatar,
        }}
      />
      <Stack.Screen
        name="groups/create"
        options={{
          headerTitle: "Створити групу",
        }}
      />
      <Stack.Screen
        name="groups/join"
        options={{
          headerTitle: "Приєднатися до групи",
        }}
      />
      <Stack.Screen
        name="groups/edit/[id]"
        options={{
          headerTitle: "Редагувати групу",
        }}
      />

      <Stack.Screen
        name="groups/[id]"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="profile/[id]"
        options={{
          headerTitle: "",
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="profile/me"
        options={{
          headerTitle: "Редагувати профіль",
        }}
      />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <GestureHandlerRootView style={styles.gestureHandlerRootView}>
          <BottomSheetModalProvider>
            <RootStack />
            <Toast />
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </PaperProvider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  gestureHandlerRootView: {
    flex: 1,
  },
});
