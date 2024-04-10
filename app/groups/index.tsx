import { useGetGroups } from "../../src/api/groups";
import { useGetMe } from "../../src/api/users";
import GroupsTemplate from "../../src/components/templates/GroupsTemplate";

export default function GroupsScreen() {
  const { data: groupsData, isLoading: isGetGroupsLoading } = useGetGroups();
  const { data: userData, isLoading: isGetUserLoading } = useGetMe();

  if (isGetGroupsLoading || !groupsData || isGetUserLoading || !userData) {
    return <GroupsTemplate createdGroups={[]} joinedGroups={[]} isLoading />;
  }

  const createdGroups = groupsData.filter(
    // eslint-disable-next-line prettier/prettier
    (group) => userData.id === group.owner.id
  );
  const joinedGroups = groupsData.filter(
    // eslint-disable-next-line prettier/prettier
    (group) => userData.id !== group.owner.id
  );

  return (
    <GroupsTemplate
      createdGroups={createdGroups}
      joinedGroups={joinedGroups}
      isLoading={false}
    />
  );
}
