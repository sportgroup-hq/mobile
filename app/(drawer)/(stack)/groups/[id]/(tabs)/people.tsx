import { useLocalSearchParams } from "expo-router";

import { useGetGroupPeople, useGetGroup } from "~/api/group";
import { GroupPeopleTemplate } from "~/components/templates/GroupPeopleTemplate";

export default function GroupPeopleScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data: groupPeopleData, isLoading: isGetGroupPeopleLoading } =
    useGetGroupPeople(id!);
  const { data: groupData, isLoading: isGetGroupLoading } = useGetGroup(id!);

  if (
    isGetGroupPeopleLoading ||
    !groupPeopleData ||
    isGetGroupLoading ||
    !groupData
  ) {
    return <GroupPeopleTemplate coaches={[]} athletes={[]} isLoading />;
  }

  const coaches = groupPeopleData.filter(
    // eslint-disable-next-line prettier/prettier
    (person) => person.id === groupData.owner.id
  );
  const athletes = groupPeopleData.filter(
    // eslint-disable-next-line prettier/prettier
    (person) => person.id !== groupData.owner.id
  );

  return (
    <GroupPeopleTemplate
      coaches={coaches}
      athletes={athletes}
      isLoading={false}
    />
  );
}
