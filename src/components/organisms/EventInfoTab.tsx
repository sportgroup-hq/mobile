import { useLocalSearchParams } from "expo-router";
import { View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ActivityIndicator, Text } from "react-native-paper";

import { useGetEvent } from "~/api/events";
import { getDateRangeWithTime } from "~/helpers/events";

export default function EventInfoTab() {
  const { groupId, eventId } = useLocalSearchParams<{
    groupId: string;
    eventId: string;
  }>();
  const { data: eventData, isLoading: isEventLoading } = useGetEvent({
    groupId: groupId!,
    eventId: eventId!,
  });

  return (
    <View style={styles.root}>
      <ScrollView contentContainerStyle={styles.inner}>
        <View style={styles.main}>
          {isEventLoading || !eventData ? (
            <ActivityIndicator />
          ) : (
            <View style={styles.body}>
              <View style={styles.section}>
                <Text variant="labelLarge">Назва</Text>
                <Text variant="bodyLarge">{eventData.name}</Text>
              </View>
              <View style={styles.section}>
                <Text variant="labelLarge">Дата та час</Text>
                <Text variant="bodyLarge">
                  {getDateRangeWithTime(eventData)}
                </Text>
              </View>
              {eventData.location && (
                <View style={styles.section}>
                  <Text variant="labelLarge">Місце</Text>
                  <Text variant="bodyLarge">{eventData.location}</Text>
                </View>
              )}
              {eventData.description && (
                <View style={styles.section}>
                  <Text variant="labelLarge">Опис</Text>
                  <Text variant="bodyLarge">{eventData.description}</Text>
                </View>
              )}
            </View>
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
  body: {
    gap: 24,
  },
  section: {
    gap: 4,
  },
});
