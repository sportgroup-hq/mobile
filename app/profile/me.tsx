import { useGetMe } from "~/api/users";
import UserProfileTemplate from "~/components/templates/UserProfileTemplate";

export default function UserProfileScreen() {
  const { data: userData, isLoading: isGetUserLoading } = useGetMe();

  return (
    <UserProfileTemplate
      userData={userData}
      isGetUserLoading={isGetUserLoading}
    />
  );
}
