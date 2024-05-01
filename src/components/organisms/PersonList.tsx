import { StyleSheet, View } from "react-native";

import PersonItem from "../molecules/PersonItem";

import { User } from "~/types/users";

interface PersonListProps {
  people: User[];
  onPersonPress: (user: User) => void;
}

export default function PersonList(props: PersonListProps) {
  const { people, onPersonPress } = props;

  return (
    <View style={styles.root}>
      {people.map((person) => (
        <PersonItem key={person.id} person={person} onPress={onPersonPress} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    gap: 24,
  },
});
