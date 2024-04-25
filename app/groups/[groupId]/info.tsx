import { useLocalSearchParams } from "expo-router";

import { useGetGroup } from "~/api/groups";
import GroupInfoTemplate from "~/components/templates/GroupInfoTemplate";

export default function GroupInfoScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data: groupData, isLoading: isGetGroupLoading } = useGetGroup(id!);

  return (
    <GroupInfoTemplate
      groupData={groupData}
      isGetGroupLoading={isGetGroupLoading}
    />
  );
}
