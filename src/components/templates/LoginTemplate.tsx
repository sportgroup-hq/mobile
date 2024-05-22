import { View, StyleSheet, ScrollView } from "react-native";

import LoginForm from "../organisms/forms/LoginForm";

export default function LoginTemplate() {
  return (
    <View style={styles.root}>
      <ScrollView contentContainerStyle={styles.inner}>
        <View style={styles.main}>
          <LoginForm />
        </View>
      </ScrollView>
    </View>
  );
}

export const styles = StyleSheet.create({
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
