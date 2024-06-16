import { useLocalSearchParams } from "expo-router";
import { StyleSheet, View } from "react-native";
import { Text, Checkbox } from "react-native-paper";

import useRecordPermissions from "~/hooks/useRecordPermissions";
import { CheckboxRecordValue, PersonRecord } from "~/types/records";

interface PersonRecordCheckboxProps {
  record: PersonRecord;
}

export default function PersonCheckboxRecord(props: PersonRecordCheckboxProps) {
  const { record } = props;
  const value = record.value as CheckboxRecordValue;

  const { groupId } = useLocalSearchParams<{
    groupId: string;
  }>();
  const { canEdit } = useRecordPermissions(record.permissions, groupId!);

  return (
    <View style={styles.root}>
      <Text variant="labelLarge">{record.name}</Text>
      <Checkbox.Android
        status={value ? "checked" : "unchecked"}
        onPress={() => {}}
        disabled={!canEdit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
