import { StyleSheet, View, ScrollView } from "react-native";
import { ActivityIndicator } from "react-native-paper";

import EditGroupForm from "../organisms/forms/EditGroupForm";

import { Group } from "~/types/groups";

interface EditGroupTemplateProps {
  groupData: Group | undefined;
  isGetGroupLoading: boolean;
}

export default function EditGroupTemplate(props: EditGroupTemplateProps) {
  const { groupData, isGetGroupLoading } = props;

  return (
    <View style={styles.root}>
      <ScrollView contentContainerStyle={styles.inner}>
        <View style={styles.main}>
          {isGetGroupLoading || !groupData ? (
            <ActivityIndicator />
          ) : (
            <EditGroupForm group={groupData} />
          )}
        </View>
      </ScrollView>
    </View>
  );
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
  },
});
