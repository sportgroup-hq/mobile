import { ScrollView, View, StyleSheet } from "react-native";
import { ActivityIndicator, Avatar, Text } from "react-native-paper";

import { getFullName } from "~/helpers/users";
import { User } from "~/types/users";

interface GroupPersonProfileTemplateProps {
  personData: User | undefined;
  isGetPersonLoading: boolean;
}

export default function GroupPersonProfileTemplate(
  props: GroupPersonProfileTemplateProps
) {
  const { personData, isGetPersonLoading } = props;

  return (
    <View style={styles.root}>
      <ScrollView contentContainerStyle={styles.inner}>
        <View style={styles.main}>
          {isGetPersonLoading || !personData ? (
            <ActivityIndicator />
          ) : (
            <>
              <View style={styles.header}>
                <Avatar.Image source={{ uri: personData.avatarUrl }} />
                <View style={styles.title}>
                  <Text variant="titleLarge">{getFullName(personData)}</Text>
                  <Text variant="bodyMedium">{personData.email}</Text>
                </View>
              </View>
              <View style={styles.body}>
                {personData.phone && (
                  <View style={styles.section}>
                    <Text variant="labelLarge">Телефон</Text>
                    <Text variant="bodyLarge">{personData.phone}</Text>
                  </View>
                )}
                {personData.dateOfBirth && (
                  <View style={styles.section}>
                    <Text variant="labelLarge">Дата народження</Text>
                    <Text variant="bodyLarge">{personData.dateOfBirth}</Text>
                  </View>
                )}
                {personData.address && (
                  <View style={styles.section}>
                    <Text variant="labelLarge">Адреса</Text>
                    <Text variant="bodyLarge">{personData.address}</Text>
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
