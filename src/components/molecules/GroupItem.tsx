import { StyleSheet, View } from "react-native";
import { TouchableRipple, Surface, Text, IconButton } from "react-native-paper";

import { getFullName } from "../../helpers/users";
import { IGroup } from "../../types/groups";

interface IGroupCard {
  group: IGroup;
}

export default function GroupItem(props: IGroupCard) {
  const { group } = props;

  return (
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
          onPress={() => {}}
        />
      </Surface>
    </TouchableRipple>
  );
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
