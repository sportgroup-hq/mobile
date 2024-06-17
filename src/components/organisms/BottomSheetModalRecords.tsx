import { forwardRef } from "react";
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { StyleSheet, View } from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";

import RecordList from "./RecordList";

import { Record } from "~/types/records";

interface BottomSheetModalRecordsProps {
  records: Record[];
  isRecordsLoading: boolean;
  onRecordPress: (record: Record) => void;
}

const BottomSheetModalRecords = forwardRef(function BottomSheetModalSelect(
  props: BottomSheetModalRecordsProps,
  ref: React.Ref<BottomSheetModal>
) {
  const { records, isRecordsLoading, onRecordPress } = props;

  const snapPoints = ["80%"];

  return (
    <BottomSheetModal
      ref={ref}
      index={0}
      snapPoints={snapPoints}
      handleIndicatorStyle={styles.handleIndicator}
      handleStyle={styles.handle}
      backdropComponent={renderBackdrop}
    >
      <BottomSheetScrollView>
        <View style={styles.inner}>{renderContent()}</View>
      </BottomSheetScrollView>
    </BottomSheetModal>
  );

  function renderContent() {
    if (isRecordsLoading) {
      return <ActivityIndicator />;
    }

    if (!records.length) {
      return (
        <View style={styles.empty}>
          <Text variant="bodySmall">Немає доступних записів</Text>
        </View>
      );
    }

    return <RecordList records={records} onRecordPress={onRecordPress} />;
  }

  function renderBackdrop(props: BottomSheetBackdropProps) {
    return (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    );
  }
});

const styles = StyleSheet.create({
  handle: {
    padding: 4,
  },
  handleIndicator: {
    display: "none",
  },
  inner: {
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  empty: {
    alignItems: "center",
  },
});

export default BottomSheetModalRecords;
