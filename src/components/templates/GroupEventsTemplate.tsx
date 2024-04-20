import { View } from "react-native";

import { Event } from "~/types/events";

interface GroupEventsTemplateProps {
  eventsData: Event[] | undefined;
  isGetEventsLoading: boolean;
}

export default function GroupEventsTemplate(props: GroupEventsTemplateProps) {
  const {
    eventsData: groupEventsData,
    isGetEventsLoading: isGetGroupEventsLoading,
  } = props;

  return <View />;
}
