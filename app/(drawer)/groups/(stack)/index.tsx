import { useGetGroups } from "../../../../src/api/groups";
import GroupsTemplate from "../../../../src/components/templates/GroupsTemplate";

export default function GroupsScreen() {
  const { data: groupsData, isLoading: isGetGroupsLoading } = useGetGroups();

  return (
    <GroupsTemplate
      groupsData={groupsData}
      isGetGroupsLoading={isGetGroupsLoading}
    />
  );
}
