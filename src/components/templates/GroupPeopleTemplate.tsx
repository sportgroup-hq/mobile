import { useRouter } from "expo-router";
import { View, ScrollView, StyleSheet } from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";

import UserList from "../organisms/UserList";

import { ROUTES } from "~/constants/routes";
import { generatePath } from "~/helpers/misc";
import { User } from "~/types/users";

interface GroupPeopleTemplateProps {
  coaches: User[];
  athletes: User[];
  isLoading: boolean;
}

export function GroupPeopleTemplate(props: GroupPeopleTemplateProps) {
  const { coaches, athletes, isLoading } = props;

  const router = useRouter();

  return (
    <View style={styles.root}>
      <ScrollView contentContainerStyle={styles.inner}>
        {renderContent()}
      </ScrollView>
    </View>
  );

  function renderContent() {
    const hasCoaches = !!coaches.length;
    const hasAthletes = !!athletes.length;

    return (
      <View style={styles.main}>
        <View style={styles.section}>
          <Text variant="headlineSmall">Тренер</Text>
          {isLoading ? (
            <ActivityIndicator />
          ) : !hasCoaches ? (
            <View style={styles.empty}>
              <Text variant="bodySmall">У цій групі ще немає тренерів</Text>
            </View>
          ) : (
            <UserList users={coaches} onUserPress={handleUserPress} />
          )}
        </View>
        <View style={styles.section}>
          <Text variant="headlineSmall">Спортсмени</Text>
          {isLoading ? (
            <ActivityIndicator />
          ) : !hasAthletes ? (
            <View style={styles.empty}>
              <Text variant="bodySmall">У цій групі ще немає спортсменів</Text>
            </View>
          ) : (
            <UserList users={athletes} onUserPress={handleUserPress} />
          )}
        </View>
      </View>
    );

    function handleUserPress(user: User) {
      router.navigate(generatePath(ROUTES.PROFILE.VIEW, { id: user.id }));
    }
  }
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
    gap: 32,
  },
  empty: {
    alignItems: "center",
  },
  section: {
    gap: 12,
  },
});
