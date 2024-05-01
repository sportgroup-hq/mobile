import { useLocalSearchParams, useRouter } from "expo-router";
import { View, ScrollView, StyleSheet } from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";

import PersonList from "../organisms/PersonList";

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
  const { groupId } = useLocalSearchParams<{
    groupId: string;
  }>();

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
            <PersonList people={coaches} onPersonPress={handlePersonPress} />
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
            <PersonList people={athletes} onPersonPress={handlePersonPress} />
          )}
        </View>
      </View>
    );

    function handlePersonPress(person: User) {
      router.navigate(
        generatePath(ROUTES.PERSON.PROFILE, {
          groupId: groupId!,
          personId: person.id,
          // eslint-disable-next-line prettier/prettier
        })
      );
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
