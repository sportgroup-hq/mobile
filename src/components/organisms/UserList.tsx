import { StyleSheet, View } from "react-native";

import UserItem from "../molecules/UserItem";

import { User } from "~/types/users";

interface UserListProps {
  users: User[];
  onUserPress: (user: User) => void;
}

export default function UserList(props: UserListProps) {
  const { users, onUserPress } = props;

  return (
    <View style={styles.root}>
      {users.map((user) => (
        <UserItem key={user.id} user={user} onPress={onUserPress} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    gap: 24,
  },
});
