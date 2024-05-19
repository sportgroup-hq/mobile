import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { usePathname, useRouter } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { StyleSheet, View } from "react-native";
import { Drawer as PaperDrawer } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ROUTES } from "~/constants/routes";

function DrawerContent(props: DrawerContentComponentProps) {
  const router = useRouter();
  const pathname = usePathname();
  const insets = useSafeAreaInsets();

  return (
    <>
      <DrawerContentScrollView {...props}>
        <View style={styles.header}>
          <PaperDrawer.Item
            icon="home"
            label="Групи"
            onPress={handleHomePress}
            active={pathname === ROUTES.HOME.ROOT}
          />
        </View>
      </DrawerContentScrollView>

      <View style={{ paddingBottom: insets.bottom }}>
        <PaperDrawer.Item icon="logout" label="Вийти" onPress={() => {}} />
      </View>
    </>
  );

  function handleHomePress() {
    router.navigate(ROUTES.HOME.ROOT);
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
