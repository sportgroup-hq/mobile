import { useLocalSearchParams } from "expo-router";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { AirbnbRating } from "react-native-ratings";

import useRecordPermissions from "~/hooks/useRecordPermissions";
import { PersonRecord, RatingRecordValue } from "~/types/records";

interface PersonRecordRatingProps {
  record: PersonRecord;
}

export default function PersonRecordRating(props: PersonRecordRatingProps) {
  const { record } = props;
  const value = record.value as RatingRecordValue;

  const { groupId } = useLocalSearchParams<{
    groupId: string;
  }>();
  const { canEdit } = useRecordPermissions(record.permissions, groupId!);

  return (
    <View style={styles.root}>
      <Text variant="labelLarge">{record.name}</Text>
      <AirbnbRating
        defaultRating={value}
        size={24}
        showRating={false}
        isDisabled={!canEdit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    gap: 4,
  },
});
