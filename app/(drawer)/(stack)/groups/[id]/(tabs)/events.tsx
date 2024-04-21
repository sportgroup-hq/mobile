import { useLocalSearchParams } from "expo-router";

import { useGetEvents } from "~/api/events";
import GroupEventsTemplate from "~/components/templates/GroupEventsTemplate";

export default function GroupEventsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data: eventsData, isLoading: isGetEventsLoading } = useGetEvents(id!);

  return (
    <GroupEventsTemplate
      eventsData={eventsData}
      isGetEventsLoading={isGetEventsLoading}
    />
  );
}
