import { useGetUser } from "~/api/users";
import UserProfileTemplate from "~/components/templates/UserProfileTemplate";

export default function UserProfileScreen() {
  const { data: userData, isLoading: isGetUserLoading } = useGetUser();

  return (
    <UserProfileTemplate
      userData={userData}
      isGetUserLoading={isGetUserLoading}
    />
  );
}
