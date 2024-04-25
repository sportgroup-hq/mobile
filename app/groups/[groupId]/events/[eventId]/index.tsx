import { useLocalSearchParams } from "expo-router";
import React from "react";

import AthleteEventTemplate from "~/components/templates/AthleteEventTemplate";
import CoachEventTemplate from "~/components/templates/CoachEventTemplate";
import useIsOwner from "~/hooks/useIsOwner";

export default function GroupEventScreen() {
  const { groupId } = useLocalSearchParams<{ groupId: string }>();

  const isOwner = useIsOwner(groupId!);

  if (isOwner) {
    return <CoachEventTemplate />;
  }

  return <AthleteEventTemplate />;
}
