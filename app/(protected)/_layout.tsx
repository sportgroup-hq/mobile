import { Redirect, Stack } from "expo-router";
import { ROUTES } from "~/constants/routes";

export default function ProtectedLayout() {
  if (true) {
    return <Redirect href={ROUTES.LOGIN} />;
  }

  return (
    <Stack
      screenOptions={{
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="(drawer)"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="(home)/create"
        options={{
          headerTitle: "Створити групу",
        }}
      />
      <Stack.Screen
        name="(home)/join"
        options={{
          headerTitle: "Приєднатися до групи",
        }}
      />
      <Stack.Screen
        name="(home)/edit/[id]"
        options={{
          headerTitle: "Редагувати групу",
        }}
      />

      <Stack.Screen
        name="groups/[groupId]/info"
        options={{
          headerTitle: "Інформація",
        }}
      />
      <Stack.Screen
        name="groups/[groupId]/events/[eventId]/index"
        options={{
          headerTitle: "",
        }}
      />

      <Stack.Screen
        name="groups/[groupId]/people/[personId]/index"
        options={{
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="groups/[groupId]/people/[personId]/events/[eventId]/index"
        options={{
          headerTitle: "",
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
