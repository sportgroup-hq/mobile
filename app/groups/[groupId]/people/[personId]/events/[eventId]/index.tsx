import { useLocalSearchParams } from "expo-router";

import { useGetPersonEvent } from "~/api/people";
import PersonEventTemplate from "~/components/templates/PersonEventTemplate";

export default function PersonEventScreen() {
  const { groupId, personId, eventId } = useLocalSearchParams<{
    groupId: string;
    personId: string;
    eventId: string;
  }>();
  const { data: userEventData, isLoading: isGetUserEventLoading } =
    useGetPersonEvent({
      groupId: groupId!,
      personId: personId!,
      eventId: eventId!,
    });

  return (
    <PersonEventTemplate
      userEventData={userEventData}
      isGetUserEventLoading={isGetUserEventLoading}
    />
  );
}
