import { View, StyleSheet, ScrollView } from "react-native";

import RegisterForm from "../organisms/forms/RegisterForm";

export default function RegisterTemplate() {
  return (
    <View style={styles.root}>
      <ScrollView contentContainerStyle={styles.inner}>
        <View style={styles.main}>
          <RegisterForm />
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
