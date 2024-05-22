import { useLocalSearchParams, useRouter } from "expo-router";
import { View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ActivityIndicator } from "react-native-paper";

import PersonList from "./PersonList";

import { useGetEvent } from "~/api/events";
import { ROUTES } from "~/constants/routes";
import { generatePath } from "~/helpers/misc";
import { User } from "~/types/user";

export default function EventParticipantsTab() {
  const router = useRouter();
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
            <PersonList
              people={eventData.participants}
              onPersonPress={handlePersonPress}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );

  function handlePersonPress(person: User) {
    router.navigate(
      generatePath(ROUTES.PERSON.EVENT, {
        groupId: groupId!,
        personId: person.id,
        eventId: eventId!,
      })
    );
  }
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
