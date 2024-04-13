import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PaperProvider } from "react-native-paper";
import { en, registerTranslation } from "react-native-paper-dates";
import Toast from "react-native-toast-message";
import { QueryClient, QueryClientProvider } from "react-query";

registerTranslation("en", en);

const queryClient = new QueryClient();

function RootStack() {
  return (
    <Stack>
      <Stack.Screen
        name="(drawer)"
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
          headerBackTitleVisible: false,
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
