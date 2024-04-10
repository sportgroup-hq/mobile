import { StyleSheet, View } from "react-native";

import { User } from "../../types/users";
import PersonItem from "../molecules/PersonItem";

interface PersonListProps {
  users: User[];
}

export default function PersonList(props: PersonListProps) {
  const { users } = props;

  return (
    <View style={styles.root}>
      {users.map((user) => (
        <PersonItem key={user.id} user={user} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    gap: 24,
  },
});
