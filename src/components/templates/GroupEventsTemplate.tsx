import { useRouter } from "expo-router";
import { View, StyleSheet, ScrollView } from "react-native";
import { ActivityIndicator, Text, Button, FAB } from "react-native-paper";

import BottomSheetModalSelect from "../molecules/BottomSheetModalSelect";
import EventList from "../organisms/EventList";

import { ROUTES } from "~/constants/routes";
import useBottomSheetModal from "~/hooks/useBottomSheetModal";
import { Event } from "~/types/events";

const ACTION_OPTIONS = [
  { label: "Створити подію", value: ROUTES.GROUP.CREATE_EVENT },
];
interface GroupEventsTemplateProps {
  eventsData: Event[] | undefined;
  isGetEventsLoading: boolean;
}

export default function GroupEventsTemplate(props: GroupEventsTemplateProps) {
  const { eventsData, isGetEventsLoading } = props;

  const router = useRouter();

  const {
    ref: BSMSelectRef,
    handlePresent: handleBSMSelectPresent,
    handleDismiss: handleBSMSelectDismiss,
  } = useBottomSheetModal();

  return (
    <View style={styles.root}>
      {renderContent()}
      <FAB icon="plus" style={styles.fab} onPress={handleBSMSelectPresent} />
      <BottomSheetModalSelect
        ref={BSMSelectRef}
        options={ACTION_OPTIONS}
        onChange={handleActionChange}
      />
    </View>
  );

  function renderContent() {
    const hasEvents = !!eventsData?.length;

    if (isGetEventsLoading) {
      return (
        <ScrollView contentContainerStyle={styles.inner}>
          <View style={styles.main}>
            <ActivityIndicator />
          </View>
        </ScrollView>
      );
    }

    if (!hasEvents) {
      return (
        <ScrollView contentContainerStyle={styles.inner}>
          <View style={styles.main}>
            <View style={styles.empty}>
              <Text variant="bodySmall">Ви ще не створили жодної події</Text>
              <Button onPress={() => {}}>Створити подію</Button>
            </View>
          </View>
        </ScrollView>
      );
    }

    return (
      <View style={styles.list}>
        <EventList events={eventsData} />
      </View>
    );
  }

  function handleActionChange(value: string) {
    handleBSMSelectDismiss();
    router.navigate(value);
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
  },
  empty: {
    alignItems: "center",
    gap: 4,
  },
  list: {
    flex: 1,
  },
  fab: {
    position: "absolute",
    right: 16,
    bottom: 48,
  },
});
