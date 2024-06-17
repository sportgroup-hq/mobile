import { StyleSheet, View } from "react-native";
import { Text, Button } from "react-native-paper";
import { useLocalSearchParams } from "expo-router";
import { useFormik } from "formik";

import { FormValues } from "./CreateEventForm";
import BottomSheetModalRecords from "../BottomSheetModalRecords";

import useBottomSheetModal from "~/hooks/useBottomSheetModal";
import { useGetRecords } from "~/api/records";
import RecordList from "../RecordList";
import { Record } from "~/types/records";

interface CreateEventStepTwoFormProps {
  formik: ReturnType<typeof useFormik<FormValues>>;
  onCreate: () => void;
  onBack: () => void;
}

export default function CreateEventStepTwoForm(
  props: CreateEventStepTwoFormProps
) {
  const { formik, onCreate, onBack } = props;

  const { groupId } = useLocalSearchParams<{ groupId: string }>();

  const { data: recordsData, isLoading: isGetRecordsLoading } = useGetRecords(
    groupId!
  );

  const {
    ref: BSMSelectRef,
    handlePresent: handleBSMSelectPresent,
    handleDismiss: handleBSMSelectDismiss,
  } = useBottomSheetModal();

  const records = recordsData || [];
  const filteredRecords = records.filter(
    (record) => !formik.values.records.some((r) => r.id === record.id)
  );

  return (
    <>
      <View style={styles.root}>
        <View style={styles.body}>
          <Text variant="titleMedium">Записи (не обовʼязково)</Text>
          <Text variant="bodyMedium">
            Ви можете додати записи, які сприятимуть поліпшенню комунікації та
            відстеженню прогресу.
          </Text>
          {!!formik.values.records.length && (
            <RecordList
              records={formik.values.records}
              onRecordDelete={handleRecordDelete}
            />
          )}
          <View style={styles.add}>
            <Button icon="note-edit-outline" onPress={handleBSMSelectPresent}>
              Додати запис
            </Button>
          </View>
        </View>
        <View style={styles.footer}>
          <Button onPress={onBack}>Назад</Button>
          <Button mode="contained" onPress={onCreate}>
            Створити
          </Button>
        </View>
      </View>
      <BottomSheetModalRecords
        ref={BSMSelectRef}
        records={filteredRecords}
        isRecordsLoading={isGetRecordsLoading}
        onRecordPress={handleRecordPress}
      />
    </>
  );

  function handleRecordPress(record: Record) {
    handleBSMSelectDismiss();

    formik.setFieldValue("records", [...formik.values.records, record]);
  }

  function handleRecordDelete(record: Record) {
    const filteredRecords = formik.values.records.filter(
      (r) => r.id !== record.id
    );

    formik.setFieldValue("records", filteredRecords);
  }
}
const styles = StyleSheet.create({
  root: {
    gap: 32,
  },
  body: {
    gap: 16,
  },
  add: {
    alignSelf: "flex-start",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 8,
  },
});
