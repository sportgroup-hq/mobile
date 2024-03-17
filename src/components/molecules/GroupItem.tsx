import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import { TouchableRipple, Surface, Text, IconButton } from "react-native-paper";

import BottomSheetModalSelect from "./BottomSheetModalSelect";
import { getFullName } from "../../helpers/users";
import useBottomSheetModal from "../../hooks/useBottomSheetModal";
import { Group } from "../../types/groups";

const ACTION_OPTIONS = [
  { label: "Редагувати групу", value: "/groups/edit/:id" },
  { label: "Видалити групу", value: "delete" },
];

interface GroupCardProps {
  group: Group;
}

export default function GroupItem(props: GroupCardProps) {
  const { group } = props;

  const router = useRouter();

  const {
    ref: bottomSheetModalSelectRef,
    present: bottomSheetModalSelectPresent,
  } = useBottomSheetModal();

  return (
    <>
      <TouchableRipple onPress={() => {}}>
        <Surface style={styles.root}>
          <View style={styles.title}>
            <Text variant="titleLarge">{group.name}</Text>
            {group.sport && <Text>{group.sport}</Text>}
          </View>
          <View>
            <Text variant="bodySmall">
              {getFullName(group.owner.firstName, group.owner.lastName)}
            </Text>
          </View>
          <IconButton
            style={styles.action}
            icon="dots-horizontal"
            onPress={bottomSheetModalSelectPresent}
          />
        </Surface>
      </TouchableRipple>
      <BottomSheetModalSelect
        ref={bottomSheetModalSelectRef}
        options={ACTION_OPTIONS}
        onChange={handleActionChange}
      />
    </>
  );

  function handleActionChange(value: string) {
    if (value === "delete") {
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
