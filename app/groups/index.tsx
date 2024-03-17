import { useGetGroups } from "../../src/api/groups";
import { useGetMe } from "../../src/api/users";
import GroupsTemplate from "../../src/components/templates/GroupsTemplate";

export default function GroupsScreen() {
  const { data: groupsData, isLoading: isGetGroupsLoading } = useGetGroups();
  const { data: meData, isLoading: isGetMeLoading } = useGetMe();

  if (isGetGroupsLoading || !groupsData || isGetMeLoading || !meData) {
    return <GroupsTemplate createdGroups={[]} joinedGroups={[]} isLoading />;
  }

  const createdGroups = groupsData.filter(
    // eslint-disable-next-line prettier/prettier
    (group) => meData.id === group.owner.id
  );
  const joinedGroups = groupsData.filter(
    // eslint-disable-next-line prettier/prettier
    (group) => meData.id !== group.owner.id
  );

  return (
    <GroupsTemplate
      createdGroups={createdGroups}
      joinedGroups={joinedGroups}
      isLoading={false}
    />
  );
}
