import { useLocalSearchParams } from "expo-router";

import { useGetGroup } from "~/api/groups";
import { useGetPeople } from "~/api/people";
import { GroupPeopleTemplate } from "~/components/templates/GroupPeopleTemplate";

export default function GroupPeopleScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data: peopleData, isLoading: isGetPeopleLoading } = useGetPeople(id!);
  const { data: groupData, isLoading: isGetGroupLoading } = useGetGroup(id!);

  if (isGetPeopleLoading || !peopleData || isGetGroupLoading || !groupData) {
    return <GroupPeopleTemplate coaches={[]} athletes={[]} isLoading />;
  }

  const coaches = peopleData.filter(
    // eslint-disable-next-line prettier/prettier
    (person) => person.id === groupData.owner.id
  );
  const athletes = peopleData.filter(
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
