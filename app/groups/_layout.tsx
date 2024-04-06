import { Stack } from "expo-router";

export default function GroupsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="create"
        options={{
          headerTitle: "Створити групу",
        }}
      />
      <Stack.Screen
        name="join"
        options={{
          headerTitle: "Приєднатися до групи",
        }}
      />
      <Stack.Screen
        name="edit/[id]"
        options={{
          headerTitle: "Редагувати групу",
        }}
      />
    </Stack>
  );
}
