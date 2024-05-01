import { useLocalSearchParams, useRouter } from "expo-router";
import { View, StyleSheet } from "react-native";
import { IconButton, Text, TouchableRipple } from "react-native-paper";

import BottomSheetModalSelect from "./BottomSheetModalSelect";
import ConfirmDialog from "./ConfirmDialog";

import { useGetUser } from "~/api/users";
import { ROUTES } from "~/constants/routes";
import { getDateRange } from "~/helpers/events";
import { generatePath } from "~/helpers/misc";
import useBottomSheetModal from "~/hooks/useBottomSheetModal";
import useDialog from "~/hooks/useDialog";
import useIsOwner from "~/hooks/useIsOwner";
import { Event } from "~/types/events";

const ACTION_OPTIONS = [
  { label: "Редагувати подію", value: "edit" },
  { label: "Видалити подію", value: "delete" },
];

interface EventItemProps {
  event: Event;
}

export default function EventItem(props: EventItemProps) {
  const { event } = props;

  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data: userData } = useGetUser();

  const isOwner = useIsOwner(id!);

  const {
    ref: BSMSelectRef,
    handlePresent: handleBSMSelectPresent,
    handleDismiss: handleBSMSelectDismiss,
  } = useBottomSheetModal();
  const {
    isOpen: isDeleteGroupCDOpen,
    handleOpen: handleDeleteEventCDOpen,
    handleClose: handleDeleteEventCDClose,
  } = useDialog();

  return (
    <>
      <TouchableRipple onPress={handleEventPress}>
        <View style={styles.root}>
          <View style={styles.left}>
            <Text variant="titleMedium">{event.name}</Text>
            <Text variant="bodyMedium">{getDateRange(event)}</Text>
          </View>
          {isOwner && (
            <IconButton
              icon="dots-horizontal"
              onPress={handleBSMSelectPresent}
            />
          )}
        </View>
      </TouchableRipple>
      <BottomSheetModalSelect
        ref={BSMSelectRef}
        options={ACTION_OPTIONS}
        onChange={handleActionChange}
      />
      <ConfirmDialog
        title="Видалити"
        description="Ви впевнені, що хочете видалити цю подію? Ця дія незворотня і призведе до видалення всієї інформації, пов'язаною з нею."
        confirmButtonLabel="Видалити групу"
        isOpen={isDeleteGroupCDOpen}
        isConfirmButtonLoading={false}
        isConfirmButtonDisabled={false}
        onClose={handleDeleteEventCDClose}
        onConfirm={handleDeleteEvent}
      />
    </>
  );

  function handleEventPress() {
    if (isOwner) {
      router.navigate(
        generatePath(ROUTES.EVENT.VIEW, {
          groupId: id!,
          eventId: event.id,
          // eslint-disable-next-line prettier/prettier
        })
      );
      return;
    }

    if (!userData) {
      return;
    }

    router.navigate(
      generatePath(ROUTES.PERSON.EVENT, {
        groupId: id!,
        personId: userData.id,
        eventId: event.id,
        // eslint-disable-next-line prettier/prettier
      })
    );
  }

  function handleDeleteEvent() {}

  function handleActionChange(value: string) {
    handleBSMSelectDismiss();

    if (value === "edit") {
      router.navigate(
        generatePath(ROUTES.EVENT.EDIT, {
          groupId: id!,
          eventId: event.id,
          // eslint-disable-next-line prettier/prettier
        })
      );
      return;
    }

    if (value === "delete") {
      handleDeleteEventCDOpen();
    }
  }
}

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  left: {
    gap: 4,
  },
});
