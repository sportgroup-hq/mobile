import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { TouchableRipple, Surface, Text, IconButton } from "react-native-paper";

import BottomSheetModalSelect from "./BottomSheetModalSelect";
import ConfirmDialog from "./ConfirmDialog";
import { useDeleteGroup, useLeaveGroup } from "../../api/groups";
import { useGetMe } from "../../api/users";
import { getFullName } from "../../helpers/users";
import useBottomSheetModal from "../../hooks/useBottomSheetModal";
import { Group } from "../../types/groups";

const OWNER_ACTION_OPTIONS = [
  { label: "Редагувати групу", value: "/groups/edit/:id" },
  { label: "Видалити групу", value: "delete" },
];

const MEMBER_ACTION_OPTIONS = [{ label: "Покинути групу", value: "leave" }];

interface GroupCardProps {
  group: Group;
}

export default function GroupItem(props: GroupCardProps) {
  const { group } = props;

  const router = useRouter();

  const { mutate: deleteGroupMutate, isLoading: isDeleteGroupLoading } =
    useDeleteGroup();
  const { mutate: leaveGroupMutate, isLoading: isLeaveGroupLoading } =
    useLeaveGroup();

  const [isOpenDeleteGroupСD, setIsOpenDeleteGroupCD] = useState(false);
  const [isOpenLeaveGroupСD, setIsOpenLeaveGroupCD] = useState(false);

  const { data: meData } = useGetMe();

  const {
    ref: BSMSelectRef,
    present: handleBSMSelectPresent,
    dismiss: handleBSMSelectDismiss,
  } = useBottomSheetModal();

  const isOwner = meData?.id === group.owner.id;

  return (
    <>
      <TouchableRipple onPress={() => {}}>
        <Surface style={styles.root}>
          <View style={styles.title}>
            <Text variant="titleLarge">{group.name}</Text>
            {group.sport && <Text>{group.sport}</Text>}
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
        isOpen={isOpenDeleteGroupСD}
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
        isOpen={isOpenLeaveGroupСD}
        onClose={handleLeaveGroupCDClose}
        onConfirm={handleLeaveGroup}
      />
    </>
  );

  function handleDeleteGroupCDOpen() {
    setIsOpenDeleteGroupCD(true);
  }

  function handleDeleteGroupCDClose() {
    setIsOpenDeleteGroupCD(false);
  }

  async function handleDeleteGroup() {
    await deleteGroupMutate(group.id);
    handleDeleteGroupCDClose();
  }

  function handleLeaveGroupCDOpen() {
    setIsOpenLeaveGroupCD(true);
  }

  function handleLeaveGroupCDClose() {
    setIsOpenLeaveGroupCD(false);
  }

  async function handleLeaveGroup() {
    await leaveGroupMutate(group.id);
    handleLeaveGroupCDClose();
  }

  function handleActionChange(value: string) {
    if (value === "delete") {
      handleBSMSelectDismiss();
      handleDeleteGroupCDOpen();
      return;
    }

    if (value === "leave") {
      handleBSMSelectDismiss();
      handleLeaveGroupCDOpen();
      return;
    }

    router.navigate(value);
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
