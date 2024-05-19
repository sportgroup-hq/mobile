import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PaperProvider } from "react-native-paper";
import { en, registerTranslation } from "react-native-paper-dates";
import Toast from "react-native-toast-message";
import { QueryClient, QueryClientProvider } from "react-query";

import "~/utils/dayjs";

registerTranslation("en", en);

const queryClient = new QueryClient();

function RootStack() {
  return (
    <Stack>
      <Stack.Screen
        name="(protected)"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="login"
        options={{
          headerTitle: "Увійти",
        }}
      />
      <Stack.Screen
        name="register"
        options={{
          headerTitle: "Зареєструватися",
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
