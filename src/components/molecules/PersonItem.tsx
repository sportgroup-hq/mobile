import { StyleSheet, View } from "react-native";
import { TouchableRipple, Text, Avatar } from "react-native-paper";

import { getFullName } from "~/helpers/user";
import { User } from "~/types/user";

interface PersonItemProps {
  person: User;
  onPress: (person: User) => void;
}

export default function PersonItem(props: PersonItemProps) {
  const { person, onPress } = props;

  return (
    <TouchableRipple onPress={() => onPress(person)}>
      <View style={styles.root}>
        <Avatar.Image source={{ uri: person.avatarUrl }} size={48} />
        <Text variant="bodyLarge">{getFullName(person)}</Text>
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
