import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import { TouchableRipple, Text, Avatar } from "react-native-paper";

import { ROUTES } from "~/constants/routes";
import { generatePath } from "~/helpers/misc";
import { getFullName } from "~/helpers/users";
import { User } from "~/types/users";

interface PersonItemProps {
  user: User;
}

export default function PersonItem(props: PersonItemProps) {
  const { user } = props;

  const router = useRouter();

  return (
    <TouchableRipple onPress={handlePersonPress}>
      <View style={styles.root}>
        <Avatar.Image source={{ uri: user.avatarUrl }} size={48} />
        <Text variant="bodyLarge">{getFullName(user)}</Text>
      </View>
    </TouchableRipple>
  );

  function handlePersonPress() {
    router.navigate(generatePath(ROUTES.PROFILE.VIEW, { id: user.id }));
  }
}

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
});
