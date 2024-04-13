import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { useRouter } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { StyleSheet, View } from "react-native";
import { Divider, Drawer as PaperDrawer } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useGetGroups } from "../../src/api/groups";
import { ROUTES } from "../../src/constants/routes";
import { generatePath } from "../../src/helpers/misc";

function DrawerContent(props: DrawerContentComponentProps) {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const { data: groupsData } = useGetGroups();

  const createdGroups = groupsData?.createdGroups || [];
  const joinedGroups = groupsData?.joinedGroups || [];

  const hasCreatedGroups = !!createdGroups.length;
  const hasJoinedGroups = !!joinedGroups.length;

  return (
    <>
      <DrawerContentScrollView {...props}>
        <View style={styles.header}>
          <PaperDrawer.Item
            icon="home"
            label="Групи"
            onPress={handleHomePress}
          />
        </View>
        <Divider />
        {hasCreatedGroups && (
          <>
            <PaperDrawer.Section title="Керуєте" showDivider={false}>
              {createdGroups.map((group) => (
                <PaperDrawer.Item
                  key={group.id}
                  icon="account-multiple-outline"
                  label={group.name}
                  onPress={() => handleGroupPress(group.id)}
                />
              ))}
            </PaperDrawer.Section>
          </>
        )}
        {hasJoinedGroups && (
          <PaperDrawer.Section title="Приєдналися" showDivider={false}>
            {joinedGroups.map((group) => (
              <PaperDrawer.Item
                key={group.id}
                icon="account-multiple-outline"
                label={group.name}
                onPress={() => handleGroupPress(group.id)}
              />
            ))}
          </PaperDrawer.Section>
        )}
      </DrawerContentScrollView>

      <View style={{ paddingBottom: insets.bottom }}>
        <PaperDrawer.Item icon="logout" label="Вийти" onPress={() => {}} />
      </View>
    </>
  );

  function handleHomePress() {
    router.navigate(ROUTES.GROUPS.ROOT);
  }

  function handleGroupPress(id: string) {
    router.navigate(generatePath(ROUTES.GROUP.EVENTS, { id }));
  }
}

export default function DrawerLayout() {
  return (
    <Drawer
      drawerContent={DrawerContent}
      screenOptions={{ headerShown: false }}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    paddingBottom: 8,
  },
});
