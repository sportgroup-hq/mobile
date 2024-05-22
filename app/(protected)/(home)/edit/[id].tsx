import { useLocalSearchParams } from "expo-router";

import { useGetGroup } from "~/api/groups";
import EditGroupTemplate from "~/components/templates/EditGroupTemplate";

export default function EditGroupScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data: groupData, isLoading: isGetGroupLoading } = useGetGroup(id!);

  return (
    <EditGroupTemplate
      groupData={groupData}
      isGetGroupLoading={isGetGroupLoading}
    />
  );
}
