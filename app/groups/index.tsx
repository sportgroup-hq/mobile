import GroupsTemplate from "../../src/components/templates/GroupsTemplate";

export default function GroupsScreen() {
  return (
    <GroupsTemplate
      groupsData={[
        {
          id: "07389a5f-1d5c-4665-8844-510015840062",
          name: "Гнучкі перлини",
          sport: "Художня гімнастика",
          code: "q2e5g8h",
          owner: {
            id: "53c5eca6-d6af-454c-a494-495abefbf9ef",
            firstName: "Анастасія",
            lastName: "Ковальчук",
            email: "anastasiia.kovalchuk@example.com",
            avatarUrl:
              "https://temp-number.sfo3.digitaloceanspaces.com/tname/images/female/35/97.jpg",
          },
          createdAt: "2023-09-12T10:10:56.442Z",
          editedAt: "2023-09-12T10:10:56.442Z",
        },
      ]}
      isGetGroupsLoading={false}
    />
  );
}
