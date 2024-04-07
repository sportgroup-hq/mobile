import { useRouter } from "expo-router";
import { TouchableRipple, Avatar } from "react-native-paper";

import { useGetMe } from "../../api/users";
import { ROUTES } from "../../constants/routes";

export default function MyAvatar() {
  const router = useRouter();

  const { data: meData, isLoading: isGetMeLoading } = useGetMe();

  return (
    <TouchableRipple onPress={handlePress}>
      {isGetMeLoading || !meData ? (
        <Avatar.Icon icon="account" size={32} />
      ) : (
        <Avatar.Image source={{ uri: meData.avatarUrl }} size={32} />
      )}
    </TouchableRipple>
  );

  function handlePress() {
    router.navigate(ROUTES.PROFILE.ME);
  }
}
