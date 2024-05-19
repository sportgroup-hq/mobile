import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

import { useGetUser } from "~/api/user";
import { getDateRangeWithTime } from "~/helpers/events";
import { getFullName } from "~/helpers/user";
import { PersonEvent } from "~/types/events";

interface PersonEventInfoProps {
  event: PersonEvent;
}

export default function PersonEventInfo(props: PersonEventInfoProps) {
  const { event } = props;
  const { data: userData } = useGetUser();

  const isParticipant = event.participant.id === userData?.id;

  if (isParticipant) {
    return (
      <View style={styles.root}>
        <Text variant="titleLarge">{event.name}</Text>
        <Text variant="bodyLarge"> {getDateRangeWithTime(event)}</Text>
        {event.location && <Text>{event.location}</Text>}
        {event.description && <Text>{event.description}</Text>}
      </View>
    );
  }

  return (
    <View style={styles.root}>
      <Text variant="bodyLarge"> {event.name}</Text>
      <Text variant="titleLarge">{getFullName(event.participant)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    gap: 8,
  },
});
