import { useLocalSearchParams } from "expo-router";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

import useRecordPermissions from "~/hooks/useRecordPermissions";
import { NumberRecordValue, PersonRecord } from "~/types/records";

import TextField from "../TextField";

interface PersonRecordNumberProps {
  record: PersonRecord;
}

export default function PersonRecordNumber(props: PersonRecordNumberProps) {
  const { record } = props;
  const value = record.value as NumberRecordValue;

  const { groupId } = useLocalSearchParams<{
    groupId: string;
  }>();
  const { canEdit } = useRecordPermissions(record.permissions, groupId!);

  return (
    <View style={styles.root}>
      <Text variant="labelLarge">{record.name}</Text>
      <TextField value={value} disabled={!canEdit} keyboardType="numeric" />
      <View style={styles.action}>
        <Button icon="content-save" onPress={() => {}}>
          Зберегти
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    gap: 4,
  },
  action: {
    alignSelf: "flex-end",
  },
});
