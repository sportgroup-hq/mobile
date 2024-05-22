import { useLocalSearchParams } from "expo-router";

import { useGetPerson } from "~/api/people";
import GroupPersonProfileTemplate from "~/components/templates/GroupPersonProfileTemplate";

export default function GroupPersonProfileScreen() {
  const { personId } = useLocalSearchParams<{ personId: string }>();
  const { data: personData, isLoading: isGetPersonLoading } = useGetPerson(
    personId!
  );

  return (
    <GroupPersonProfileTemplate
      personData={personData}
      isGetPersonLoading={isGetPersonLoading}
    />
  );
}
