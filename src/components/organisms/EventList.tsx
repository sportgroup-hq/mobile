import { FlatList, StyleSheet, View } from "react-native";

import EventItem from "../molecules/EventItem";

import { Event } from "~/types/events";

interface EventListProps {
  events: Event[];
}

export default function EventList(props: EventListProps) {
  const { events } = props;

  return (
    <FlatList
      data={events}
      ListHeaderComponent={<View style={styles.header} />}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <EventItem event={item} />
        </View>
      )}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListFooterComponent={<View style={styles.footer} />}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 16,
  },
  item: {
    paddingHorizontal: 8,
  },
  separator: {
    paddingVertical: 8,
  },
  footer: {
    paddingBottom: 16,
  },
});
