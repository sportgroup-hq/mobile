import { ScrollView, View, StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native-paper";

import PersonEventInfo from "../organisms/PersonEventInfo";
import PersonEventRecords from "../organisms/PersonEventRecords";

import { PersonEvent } from "~/types/events";

interface PersonEventTemplateProps {
  personEventData: PersonEvent | undefined;
  isGetPersonEventLoading: boolean;
}

export default function PersonEventTemplate(props: PersonEventTemplateProps) {
  const { personEventData, isGetPersonEventLoading } = props;

  return (
    <View style={styles.root}>
      <ScrollView contentContainerStyle={styles.inner}>
        <View style={styles.main}>
          {isGetPersonEventLoading || !personEventData ? (
            <ActivityIndicator />
          ) : (
            <View style={styles.body}>
              <PersonEventInfo event={personEventData} />

              <PersonEventRecords records={personEventData.records} />
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
  body: {
    gap: 16,
  },
});
