import { StyleSheet, View } from "react-native";
import { TouchableRipple, Text, Icon, IconButton } from "react-native-paper";

import { Record } from "~/types/records";
import { RECORD_TYPE_MAP } from "~/constants/records";
import { getPermissionLabel } from "~/helpers/records";

interface RecordItemProps {
  record: Record;
  onPress?: (record: Record) => void;
  onDelete?: (record: Record) => void;
}

export default function RecordItem(props: RecordItemProps) {
  const { record, onPress, onDelete } = props;

  return (
    <>
      {onPress ? (
        <TouchableRipple onPress={() => onPress(record)}>
          {renderContent()}
        </TouchableRipple>
      ) : (
        renderContent()
      )}
    </>
  );

  function renderContent() {
    return (
      <View style={styles.root}>
        <View style={styles.inner}>
          <Text variant="titleMedium">{record.name}</Text>
          <View style={styles.details}>
            <Text variant="bodyMedium">{RECORD_TYPE_MAP[record.type]}</Text>
            <Text variant="bodyMedium">·</Text>
            <View style={styles.detail}>
              <Icon source="eye-outline" size={20} />
              <Text variant="bodyMedium">
                {getPermissionLabel(record.permissions.view)}
              </Text>
            </View>
            <Text variant="bodyMedium">·</Text>
            <View style={styles.detail}>
              <Icon source="pencil-outline" size={20} />
              <Text variant="bodyMedium">
                {getPermissionLabel(record.permissions.edit)}
              </Text>
            </View>
          </View>
        </View>
        {onDelete && (
          <IconButton icon="delete" onPress={() => onDelete(record)} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inner: {
    gap: 8,
  },
  details: {
    flexDirection: "row",
    gap: 4,
  },
  detail: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
});
