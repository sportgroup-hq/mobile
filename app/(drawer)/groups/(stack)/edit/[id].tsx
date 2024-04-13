import { useLocalSearchParams } from "expo-router";

import { useGetGroup } from "../../../../../src/api/group";
import EditGroupTemplate from "../../../../../src/components/templates/EditGroupTemplate";

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
