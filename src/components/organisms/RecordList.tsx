import { StyleSheet, View } from "react-native";

import RecordItem from "../molecules/RecordItem";

import { Record } from "~/types/records";

interface RecordListProps {
  records: Record[];
  onRecordPress?: (record: Record) => void;
  onRecordDelete?: (record: Record) => void;
}

export default function RecordList(props: RecordListProps) {
  const { records, onRecordPress, onRecordDelete } = props;

  return (
    <View style={styles.root}>
      {records.map((record) => (
        <RecordItem
          key={record.id}
          record={record}
          onPress={onRecordPress}
          onDelete={onRecordDelete}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    gap: 24,
  },
});
