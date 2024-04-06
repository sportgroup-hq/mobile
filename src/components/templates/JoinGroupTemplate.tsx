import { StyleSheet, View, ScrollView } from "react-native";

import JoinGroupForm from "../organisms/JoinGroupForm";

export default function JoinGroupTemplate() {
  return (
    <View style={styles.root}>
      <ScrollView contentContainerStyle={styles.inner}>
        <View style={styles.main}>
          <JoinGroupForm />
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
