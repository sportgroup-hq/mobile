import { View } from "react-native";

import { PersonEvent } from "~/types/events";

interface PersonEventTemplateProps {
  userEventData: PersonEvent | undefined;
  isGetUserEventLoading: boolean;
}

export default function PersonEventTemplate(props: PersonEventTemplateProps) {
  console.log(props);

  return <View />;
}
