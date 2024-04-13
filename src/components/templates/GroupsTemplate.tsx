import { useRouter } from "expo-router";
import { View, StyleSheet, ScrollView } from "react-native";
import { ActivityIndicator, Button, FAB, Text } from "react-native-paper";

import { ROUTES } from "../../constants/routes";
import useBottomSheetModal from "../../hooks/useBottomSheetModal";
import { SelectedGroups } from "../../types/groups";
import BottomSheetModalSelect from "../molecules/BottomSheetModalSelect";
import GroupList from "../organisms/GroupList";

interface GroupsTemplateProps {
  groupsData: SelectedGroups | undefined;
  isGetGroupsLoading: boolean;
}

const ACTION_OPTIONS = [
  { label: "Приєднатися до групи", value: ROUTES.GROUPS.JOIN },
  { label: "Створити групу", value: ROUTES.GROUPS.CREATE },
];

export default function GroupsTemplate(props: GroupsTemplateProps) {
  const { groupsData, isGetGroupsLoading } = props;

  const router = useRouter();

  const {
    ref: BSMSelectRef,
    handlePresent: handleBSMSelectPresent,
    handleDismiss: handleBSMSelectDismiss,
  } = useBottomSheetModal();

  return (
    <>
      <View style={styles.root}>
        <ScrollView contentContainerStyle={styles.inner}>
          {renderContent()}
        </ScrollView>
        <FAB icon="plus" style={styles.fab} onPress={handleBSMSelectPresent} />
      </View>
      <BottomSheetModalSelect
        ref={BSMSelectRef}
        options={ACTION_OPTIONS}
        onChange={handleActionChange}
      />
    </>
  );

  function renderContent() {
    const createdGroups = groupsData?.createdGroups || [];
    const joinedGroups = groupsData?.joinedGroups || [];

    const hasCreatedGroups = !!createdGroups.length;
    const hasJoinedGroups = !!joinedGroups.length;

    return (
      <View style={styles.main}>
        <View style={styles.section}>
          <Text variant="headlineSmall">Групи, якими ви керуєте</Text>
          {isGetGroupsLoading ? (
            <ActivityIndicator />
          ) : !hasCreatedGroups ? (
            <View style={styles.empty}>
              <Text variant="bodySmall">Ви ще не створили жодної групи</Text>
              <Button onPress={handleCreateGroupPress}>Створити групу</Button>
            </View>
          ) : (
            <GroupList groups={createdGroups} />
          )}
        </View>
        <View style={styles.section}>
          <Text variant="headlineSmall">Групи, до яких ви приєдналися</Text>
          {isGetGroupsLoading ? (
            <ActivityIndicator />
          ) : !hasJoinedGroups ? (
            <View style={styles.empty}>
              <Text variant="bodySmall">
                Ви ще не приєдналися до жодної групи
              </Text>
              <Button onPress={() => {}}>Приєднатися до групи</Button>
            </View>
          ) : (
            <GroupList groups={joinedGroups} />
          )}
        </View>
      </View>
    );
  }

  function handleActionChange(value: string) {
    handleBSMSelectDismiss();
    router.navigate(value);
  }

  function handleCreateGroupPress() {
    router.navigate(ROUTES.GROUPS.CREATE);
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  inner: {
    flex: 1,
  },
  main: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    gap: 64,
  },
  empty: {
    alignItems: "center",
    gap: 4,
  },
  section: {
    gap: 12,
  },
  fab: {
    position: "absolute",
    right: 16,
    bottom: 48,
  },
});
