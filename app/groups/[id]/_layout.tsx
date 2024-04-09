import { Stack } from "expo-router";

export default function GroupLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="info"
        options={{
          headerTitle: "Інформація",
          headerBackTitleVisible: false,
        }}
      />
    </Stack>
  );
}
