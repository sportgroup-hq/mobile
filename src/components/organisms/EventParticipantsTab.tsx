import { useLocalSearchParams } from "expo-router";
import { View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ActivityIndicator } from "react-native-paper";

import UserList from "./UserList";

import { useGetEvent } from "~/api/events";
import { User } from "~/types/users";

export default function EventParticipantsTab() {
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
            <UserList
              users={eventData.participants}
              onUserPress={handleUserPress}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );

  function handleUserPress(user: User) {}
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
