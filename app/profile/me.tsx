import { useGetMe } from "../../src/api/users";
import UserProfileTemplate from "../../src/components/templates/UserProfileTemplate";

export default function UserProfileScreen() {
  const { data: meData, isLoading: isGetMeLoading } = useGetMe();

  return (
    <UserProfileTemplate meData={meData} isGetMeLoading={isGetMeLoading} />
  );
}
