import { ScrollView, View, StyleSheet } from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";

import { Group } from "../../types/groups";

interface GroupInfoTemplateProps {
  groupData: Group | undefined;
  isGetGroupLoading: boolean;
}

export default function GroupInfoTemplate(props: GroupInfoTemplateProps) {
  const { groupData, isGetGroupLoading } = props;

  return (
    <View style={styles.root}>
      <ScrollView contentContainerStyle={styles.inner}>
        <View style={styles.main}>
          {isGetGroupLoading || !groupData ? (
            <ActivityIndicator />
          ) : (
            <View style={styles.content}>
              <View style={styles.section}>
                <Text variant="labelLarge">Назва</Text>
                <Text variant="bodyLarge">{groupData.name}</Text>
              </View>
              <View style={styles.section}>
                <Text variant="labelLarge">Вид спорту</Text>
                <Text variant="bodyLarge">{groupData.sport}</Text>
              </View>
              {groupData.code && (
                <View style={styles.section}>
                  <Text variant="labelLarge">Код</Text>
                  <Text variant="bodyLarge">{groupData.code}</Text>
                </View>
              )}
            </View>
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
  },
  content: {
    gap: 24,
  },
  section: {
    gap: 4,
  },
});
