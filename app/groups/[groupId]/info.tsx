import { useLocalSearchParams } from "expo-router";

import { useGetGroup } from "~/api/groups";
import GroupInfoTemplate from "~/components/templates/GroupInfoTemplate";

export default function GroupInfoScreen() {
  const { groupId } = useLocalSearchParams<{ groupId: string }>();
  const { data: groupData, isLoading: isGetGroupLoading } = useGetGroup(
    groupId!
  );

  return (
    <GroupInfoTemplate
      groupData={groupData}
      isGetGroupLoading={isGetGroupLoading}
    />
  );
}
