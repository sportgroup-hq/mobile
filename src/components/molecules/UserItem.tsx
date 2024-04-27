import { StyleSheet, View } from "react-native";
import { TouchableRipple, Text, Avatar } from "react-native-paper";

import { getFullName } from "~/helpers/users";
import { User } from "~/types/users";

interface UserItemProps {
  user: User;
  onPress: (user: User) => void;
}

export default function UserItem(props: UserItemProps) {
  const { user, onPress } = props;

  return (
    <TouchableRipple onPress={() => onPress(user)}>
      <View style={styles.root}>
        <Avatar.Image source={{ uri: user.avatarUrl }} size={48} />
        <Text variant="bodyLarge">{getFullName(user)}</Text>
      </View>
    </TouchableRipple>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
});
