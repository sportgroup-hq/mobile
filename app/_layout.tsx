import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { Slot } from "expo-router";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PaperProvider } from "react-native-paper";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <GestureHandlerRootView style={styles.gestureHandlerRootView}>
          <BottomSheetModalProvider>
            <Slot />
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
