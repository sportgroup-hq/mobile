import { DrawerToggleButton } from "@react-navigation/drawer";
import { Stack } from "expo-router";
import { View, StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";

import UserAvatar from "~/components/molecules/UserAvatar";

export default function StackLayout() {
  const theme = useTheme();

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerLeft: () => (
            <View style={styles.headerLeft}>
              <DrawerToggleButton tintColor={theme.colors.onSurfaceVariant} />
            </View>
          ),
          headerTitle: "",
          headerRight: UserAvatar,
        }}
      />
      <Stack.Screen
        name="groups/[id]/(tabs)"
        options={{
          headerShown: false,
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
