import { StyleSheet, View } from "react-native";

import { Group } from "../../types/groups";
import GroupItem from "../molecules/GroupItem";

interface GroupListProps {
  groups: Group[];
}

export default function GroupList(props: GroupListProps) {
  const { groups } = props;

  return (
    <View style={styles.root}>
      {groups.map((group) => (
        <GroupItem key={group.id} group={group} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    gap: 8,
  },
});
