import { View, StyleSheet, ScrollView } from "react-native";
import { ActivityIndicator, Avatar, Text } from "react-native-paper";

import EditUserForm from "../organisms/EditUserForm";

import { getFullName } from "~/helpers/users";
import { User } from "~/types/users";

interface UserProfileTemplateProps {
  userData: User | undefined;
  isGetUserLoading: boolean;
}

export default function UserProfileTemplate(props: UserProfileTemplateProps) {
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
                  <Text variant="titleLarge">{getFullName(userData)}</Text>
                  <Text variant="bodyMedium">{userData.email}</Text>
                </View>
              </View>
              <EditUserForm user={userData} />
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
});
