import { useRouter } from "expo-router";
import { View, StyleSheet, ScrollView } from "react-native";
import { FAB, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

import useBottomSheetModal from "../../hooks/useBottomSheetModal";
import { Group } from "../../types/groups";
import BottomSheetModalSelect from "../molecules/BottomSheetModalSelect";
import GroupList from "../organisms/GroupList";

interface GroupsTemplateProps {
  createdGroups: Group[];
  joinedGroups: Group[];
  isLoading: boolean;
}

const ACTION_OPTIONS = [
  { label: "Приєднатися до групи", value: "/groups/join" },
  { label: "Створити групу", value: "/groups/create" },
];

export default function GroupsTemplate(props: GroupsTemplateProps) {
  const { isLoading, createdGroups, joinedGroups } = props;

  const router = useRouter();

  const {
    ref: bottomSheetModalSelectRef,
    present: bottomSheetModalSelectPresent,
  } = useBottomSheetModal();

  if (isLoading) {
    return null;
  }

  return (
    <>
      <SafeAreaView style={styles.root}>
        <View style={styles.inner}>
          <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.main}>
              <View style={styles.section}>
                <Text variant="headlineSmall">Групи, якими ви керуєте</Text>
                <GroupList groups={createdGroups} />
              </View>
              <View style={styles.section}>
                <Text variant="headlineSmall">
                  Групи, до яких ви приєдналися
                </Text>
                <GroupList groups={joinedGroups} />
              </View>
            </View>
          </ScrollView>
          <FAB
            icon="plus"
            style={styles.fab}
            onPress={bottomSheetModalSelectPresent}
          />
        </View>
      </SafeAreaView>
      <BottomSheetModalSelect
        ref={bottomSheetModalSelectRef}
        options={ACTION_OPTIONS}
        onChange={handleActionChange}
      />
    </>
  );

  function handleActionChange(value: string) {
    router.navigate(value);
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  inner: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  main: {
    padding: 8,
    gap: 64,
  },
  section: {
    gap: 12,
  },
  fab: {
    position: "absolute",
    right: 16,
    bottom: 0,
  },
});
