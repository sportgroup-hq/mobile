import { View, StyleSheet, ScrollView } from "react-native";
import { ActivityIndicator, Avatar, Text } from "react-native-paper";

import { getFullName } from "../../helpers/users";
import { User } from "../../types/users";
import EditUserForm from "../organisms/EditUserForm";

interface UserProfileTemplateProps {
  meData: User | undefined;
  isGetMeLoading: boolean;
}

export default function UserProfileTemplate(props: UserProfileTemplateProps) {
  const { meData, isGetMeLoading } = props;

  return (
    <View style={styles.root}>
      <ScrollView contentContainerStyle={styles.inner}>
        <View style={styles.main}>
          {isGetMeLoading || !meData ? (
            <ActivityIndicator />
          ) : (
            <>
              <View style={styles.header}>
                <Avatar.Image source={{ uri: meData.avatarUrl }} />
                <View style={styles.title}>
                  <Text variant="titleLarge">
                    {getFullName(meData?.firstName, meData?.lastName)}
                  </Text>
                  <Text variant="bodyMedium">{meData.email}</Text>
                </View>
              </View>
              <EditUserForm user={meData} />
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
