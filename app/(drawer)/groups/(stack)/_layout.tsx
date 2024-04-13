import { DrawerToggleButton } from "@react-navigation/drawer";
import { Stack } from "expo-router";
import { View, StyleSheet } from "react-native";

import UserAvatar from "../../../../src/components/molecules/UserAvatar";

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerLeft: () => (
            <View style={styles.headerLeft}>
              <DrawerToggleButton />
            </View>
          ),
          headerTitle: "",
          headerRight: UserAvatar,
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

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: -16,
  },
});
