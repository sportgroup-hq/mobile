import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import { TouchableRipple, Surface, Text, IconButton } from "react-native-paper";

import BottomSheetModalSelect from "./BottomSheetModalSelect";
import ConfirmDialog from "./ConfirmDialog";

import { useDeleteGroup, useLeaveGroup } from "~/api/groups";
import { ROUTES } from "~/constants/routes";
import { generatePath } from "~/helpers/misc";
import { getFullName } from "~/helpers/users";
import useBottomSheetModal from "~/hooks/useBottomSheetModal";
import useDialog from "~/hooks/useDialog";
import useIsOwner from "~/hooks/useIsOwner";
import { Group } from "~/types/groups";

const OWNER_ACTION_OPTIONS = [
  { label: "Редагувати групу", value: "edit" },
  { label: "Видалити групу", value: "delete" },
];

const MEMBER_ACTION_OPTIONS = [{ label: "Покинути групу", value: "leave" }];

interface GroupCardProps {
  group: Group;
}

export default function GroupItem(props: GroupCardProps) {
  const { group } = props;

  const router = useRouter();

  const { mutateAsync: deleteGroup, isLoading: isDeleteGroupLoading } =
    useDeleteGroup();
  const { mutateAsync: leaveGroup, isLoading: isLeaveGroupLoading } =
    useLeaveGroup();

  const isOwner = useIsOwner(group.id);

  const {
    isOpen: isDeleteGroupCDOpen,
    handleOpen: handleDeleteGroupCDOpen,
    handleClose: handleDeleteGroupCDClose,
  } = useDialog();
  const {
    isOpen: isLeaveGroupСDOpen,
    handleOpen: handleLeaveGroupCDOpen,
    handleClose: handleLeaveGroupCDClose,
  } = useDialog();
  const {
    ref: BSMSelectRef,
    handlePresent: handleBSMSelectPresent,
    handleDismiss: handleBSMSelectDismiss,
  } = useBottomSheetModal();

  return (
    <>
      <TouchableRipple onPress={handleGroupPress}>
        <Surface style={styles.root}>
          <View style={styles.title}>
            <Text variant="titleLarge">{group.name}</Text>
            {group.sport && <Text variant="bodyMedium">{group.sport}</Text>}
          </View>
          <View>
            {!isOwner && (
              <Text variant="bodySmall">
                {getFullName(group.owner.firstName, group.owner.lastName)}
              </Text>
            )}
          </View>
          <IconButton
            style={styles.action}
            icon="dots-horizontal"
            onPress={handleBSMSelectPresent}
          />
        </Surface>
      </TouchableRipple>
      <BottomSheetModalSelect
        ref={BSMSelectRef}
        options={isOwner ? OWNER_ACTION_OPTIONS : MEMBER_ACTION_OPTIONS}
        onChange={handleActionChange}
      />
      <ConfirmDialog
        title="Видалити"
        description="Ви впевнені, що хочете видалити цю групу? Ця дія незворотня і призведе до видалення всієї інформації та учасників, пов'язаних з нею."
        confirmButtonLabel="Видалити групу"
        isOpen={isDeleteGroupCDOpen}
        isConfirmButtonLoading={isDeleteGroupLoading}
        isConfirmButtonDisabled={isDeleteGroupLoading}
        onClose={handleDeleteGroupCDClose}
        onConfirm={handleDeleteGroup}
      />
      <ConfirmDialog
        title="Покинути"
        description="Ви впевнені, що хочете покинути цю групу? Після виходу ви втратите доступ до обміну інформацією та інших можливостей, пов'язаних з цією групою."
        confirmButtonLabel="Покинути групу"
        isConfirmButtonLoading={isLeaveGroupLoading}
        isConfirmButtonDisabled={isLeaveGroupLoading}
        isOpen={isLeaveGroupСDOpen}
        onClose={handleLeaveGroupCDClose}
        onConfirm={handleLeaveGroup}
      />
    </>
  );

  function handleGroupPress() {
    router.navigate(generatePath(ROUTES.GROUP.EVENTS, { id: group.id }));
  }

  async function handleDeleteGroup() {
    await deleteGroup(group.id);
    handleDeleteGroupCDClose();
  }

  async function handleLeaveGroup() {
    await leaveGroup(group.id);
    handleLeaveGroupCDClose();
  }

  function handleActionChange(value: string) {
    handleBSMSelectDismiss();

    if (value === "edit") {
      router.navigate(generatePath(ROUTES.HOME.EDIT, { id: group.id }));
      return;
    }

    if (value === "delete") {
      handleDeleteGroupCDOpen();
      return;
    }

    if (value === "leave") {
      handleLeaveGroupCDOpen();
    }
  }
}

const styles = StyleSheet.create({
  root: {
    justifyContent: "space-between",
    padding: 16,
    height: 120,
    borderRadius: 4,
  },
  title: {
    gap: 4,
  },
  action: {
    position: "absolute",
    top: 0,
    right: 0,
  },
});
