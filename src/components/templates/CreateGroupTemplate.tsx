import { StyleSheet, View, ScrollView } from "react-native";

import CreateGroupForm from "../organisms/CreateGroupForm";

export default function CreateGroupTemplate() {
  return (
    <View style={styles.root}>
      <ScrollView contentContainerStyle={styles.inner}>
        <View style={styles.main}>
          <CreateGroupForm />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  inner: {
    flex: 1,
  },
  main: {
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
});
