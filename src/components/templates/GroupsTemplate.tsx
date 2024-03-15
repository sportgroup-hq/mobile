import { View, StyleSheet, ScrollView } from "react-native";
import { FAB } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

import { IGroup } from "../../types/groups";
import GroupItem from "../molecules/GroupItem";

interface IGroupsTemplate {
  groupsData: IGroup[];
  isGetGroupsLoading: boolean;
}

export default function GroupsTemplate(props: IGroupsTemplate) {
  const { groupsData, isGetGroupsLoading } = props;

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.inner}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.main}>
            {groupsData.map((group) => (
              <GroupItem key={group.id} group={group} />
            ))}
          </View>
        </ScrollView>
        <FAB icon="plus" style={styles.fab} onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
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
