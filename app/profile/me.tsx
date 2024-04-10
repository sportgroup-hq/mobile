import { useGetMe } from "../../src/api/users";
import UserProfileTemplate from "../../src/components/templates/UserProfileTemplate";

export default function UserProfileScreen() {
  const { data: userData, isLoading: isGetUserLoading } = useGetMe();

  return (
    <UserProfileTemplate
      userData={userData}
      isGetUserLoading={isGetUserLoading}
    />
  );
}
