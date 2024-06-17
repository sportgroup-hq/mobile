import { View, StyleSheet } from "react-native";

import PersonRecordWrapper from "../molecules/records/PersonRecordWrapper";

import { PersonRecord } from "~/types/records";

interface PersonEventRecordsProps {
  records: PersonRecord[];
}

export default function PersonEventRecords(props: PersonEventRecordsProps) {
  const { records } = props;

  return (
    <View style={styles.root}>
      {records.map((record) => (
        <PersonRecordWrapper key={record.id} record={record} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    gap: 16,
  },
});
