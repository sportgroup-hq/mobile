import { useRouter } from "expo-router";
import { View, StyleSheet, ScrollView } from "react-native";
import { FAB } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

import useBottomSheetModal from "../../hooks/useBottomSheetModal";
import { Group } from "../../types/groups";
import BottomSheetModalSelect from "../molecules/BottomSheetModalSelect";
import GroupItem from "../molecules/GroupItem";

interface GroupsTemplateProps {
  groupsData: Group[];
  isGetGroupsLoading: boolean;
}

const ACTION_OPTIONS = [
  { label: "Приєднатися до групи", value: "/groups/join" },
  { label: "Створити групу", value: "/groups/create" },
];

export default function GroupsTemplate(props: GroupsTemplateProps) {
  const { groupsData, isGetGroupsLoading } = props;

  const router = useRouter();

  const {
    ref: bottomSheetModalSelectRef,
    present: bottomSheetModalSelectPresent,
  } = useBottomSheetModal();

  return (
    <>
      <SafeAreaView style={styles.root}>
        <View style={styles.inner}>
          <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.main}>
              {groupsData.map((group) => (
                <GroupItem key={group.id} group={group} />
              ))}
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
    flex: 1,
    gap: 8,
    padding: 8,
  },
  fab: {
    position: "absolute",
    right: 16,
    bottom: 0,
  },
});
