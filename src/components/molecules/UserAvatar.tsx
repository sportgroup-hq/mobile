import { useRouter } from "expo-router";
import { TouchableRipple, Avatar } from "react-native-paper";

import { useGetUser } from "~/api/users";
import { ROUTES } from "~/constants/routes";

export default function UserAvatar() {
  const router = useRouter();

  const { data: userData, isLoading: isGetUserLoading } = useGetUser();

  return (
    <TouchableRipple onPress={handlePress}>
      {isGetUserLoading || !userData ? (
        <Avatar.Icon icon="account" size={32} />
      ) : (
        <Avatar.Image source={{ uri: userData.avatarUrl }} size={32} />
      )}
    </TouchableRipple>
  );

  function handlePress() {
    router.navigate(ROUTES.USER.PROFILE);
  }
}
