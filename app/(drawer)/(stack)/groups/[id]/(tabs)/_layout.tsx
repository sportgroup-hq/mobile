import { DrawerToggleButton } from "@react-navigation/drawer";
import { Tabs, useLocalSearchParams, useRouter } from "expo-router";
import { Icon, IconButton } from "react-native-paper";

import { useGetGroup } from "../../../../../../src/api/group";
import { ROUTES } from "../../../../../../src/constants/routes";
import { generatePath } from "../../../../../../src/helpers/misc";

export default function TabsLayout() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data: groupData } = useGetGroup(id!);

  return (
    <Tabs
      screenOptions={{
        headerTitle: groupData?.name || "",
        headerLeft: DrawerToggleButton,
      }}
    >
      <Tabs.Screen
        name="events"
        options={{
          title: "Події",
          tabBarIcon: ({ color }) => (
            <Icon source="calendar" color={color} size={28} />
          ),
        }}
      />
      <Tabs.Screen
        name="analysis"
        options={{
          title: "Аналіз",
          tabBarIcon: ({ color }) => (
            <Icon source="chart-arc" color={color} size={28} />
          ),
        }}
      />
      <Tabs.Screen
        name="people"
        options={{
          title: "Люди",
          tabBarIcon: ({ color }) => (
            <Icon source="account-multiple-outline" color={color} size={28} />
          ),
          headerRight: () => (
            <IconButton
              icon="information-outline"
              onPress={() =>
                router.navigate(generatePath(ROUTES.GROUP.INFO, { id: id! }))
              }
            />
          ),
          href: generatePath(ROUTES.GROUP.PEOPLE, { id: id! }),
        }}
      />
    </Tabs>
  );
}
