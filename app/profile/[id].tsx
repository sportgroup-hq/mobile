import { useLocalSearchParams } from "expo-router";

import { useGetProfile } from "~/api/users";
import PersonProfileTemplate from "~/components/templates/PersonProfileTemplate";

export default function PersonProfileScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data: userData, isLoading: isGetUserLoading } = useGetProfile(id!);

  return (
    <PersonProfileTemplate
      userData={userData}
      isGetUserLoading={isGetUserLoading}
    />
  );
}
