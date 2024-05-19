import { useGetGroups } from "~/api/groups";
import GroupsTemplate from "~/components/templates/GroupsTemplate";

export default function GroupsScreen() {
  const { data: groupsData, isLoading: isGetGroupsLoading } = useGetGroups();

  return (
    <GroupsTemplate
      groupsData={groupsData}
      isGetGroupsLoading={isGetGroupsLoading}
    />
  );
}
