import { useLocalSearchParams } from "expo-router";

import { useGetGroup } from "../../../src/api/groups";
import GroupInfoTemplate from "../../../src/components/templates/GroupInfoTemplate";

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
