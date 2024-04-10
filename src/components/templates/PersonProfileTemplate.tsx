import { ScrollView, View, StyleSheet } from "react-native";
import { ActivityIndicator, Avatar, Text } from "react-native-paper";

import { getFullName } from "../../helpers/users";
import { User } from "../../types/users";

interface PersonProfileTemplateProps {
  userData: User | undefined;
  isGetUserLoading: boolean;
}

export default function PersonProfileTemplate(
  // eslint-disable-next-line prettier/prettier
  props: PersonProfileTemplateProps
) {
  const { userData, isGetUserLoading } = props;

  return (
    <View style={styles.root}>
      <ScrollView contentContainerStyle={styles.inner}>
        <View style={styles.main}>
          {isGetUserLoading || !userData ? (
            <ActivityIndicator />
          ) : (
            <>
              <View style={styles.header}>
                <Avatar.Image source={{ uri: userData.avatarUrl }} />
                <View style={styles.title}>
                  <Text variant="titleLarge">
                    {getFullName(userData.firstName, userData.lastName)}
                  </Text>
                  <Text variant="bodyMedium">{userData.email}</Text>
                </View>
              </View>
              <View style={styles.body}>
                {userData.phone && (
                  <View style={styles.section}>
                    <Text variant="labelLarge">Телефон</Text>
                    <Text variant="bodyLarge">{userData.phone}</Text>
                  </View>
                )}
                {userData.dateOfBirth && (
                  <View style={styles.section}>
                    <Text variant="labelLarge">Дата народження</Text>
                    <Text variant="bodyLarge">{userData.dateOfBirth}</Text>
                  </View>
                )}
                {userData.address && (
                  <View style={styles.section}>
                    <Text variant="labelLarge">Адреса</Text>
                    <Text variant="bodyLarge">{userData.address}</Text>
                  </View>
                )}
              </View>
            </>
          )}
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
    gap: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  title: {
    gap: 4,
  },
  body: {
    gap: 24,
  },
  section: {
    gap: 4,
  },
});
