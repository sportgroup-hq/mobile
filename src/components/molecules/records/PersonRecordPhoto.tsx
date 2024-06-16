import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import { StyleSheet, View } from "react-native";
import {
  Button,
  IconButton,
  Surface,
  Text,
  useTheme,
} from "react-native-paper";

import useRecordPermissions from "~/hooks/useRecordPermissions";
import useBottomSheetModal from "~/hooks/useBottomSheetModal";
import { PhotoRecordValue, PersonRecord } from "~/types/records";
import BottomSheetModalSelect from "../BottomSheetModalSelect";
import { useState } from "react";

const ACTION_OPTIONS = [
  { label: "Зробити нофе фото", value: "take" },
  { label: "Вибрати з галереї", value: "pick" },
];

interface PersonRecordImagePhoto {
  record: PersonRecord;
}

export default function PersonRecordPhoto(props: PersonRecordImagePhoto) {
  const { record } = props;
  const value = record.value as PhotoRecordValue;

  const [uri, setUri] = useState<string>(value);
  const [asset, setAsset] = useState<ImagePicker.ImagePickerAsset | null>(null);

  const theme = useTheme();
  const { groupId } = useLocalSearchParams<{
    groupId: string;
  }>();
  const {
    ref: BSMSelectRef,
    handlePresent: handleBSMSelectPresent,
    handleDismiss: handleBSMSelectDismiss,
  } = useBottomSheetModal();

  const { canEdit } = useRecordPermissions(record.permissions, groupId!);

  return (
    <View style={styles.root}>
      <Text variant="labelLarge">{record.name}</Text>
      <Surface style={styles.content}>{renderContent()}</Surface>
      <View style={styles.action}>
        <Button icon="content-save" onPress={() => {}}>
          Зберегти
        </Button>
      </View>
      <BottomSheetModalSelect
        ref={BSMSelectRef}
        options={ACTION_OPTIONS}
        onChange={handleActionChange}
      />
    </View>
  );

  function renderContent() {
    if (!uri) {
      return (
        <Button
          icon="image"
          onPress={handleBSMSelectPresent}
          disabled={!canEdit}
        >
          Додати фото
        </Button>
      );
    }

    return (
      <>
        <Image
          source={{
            uri,
          }}
          contentFit="contain"
          style={styles.image}
        />
        <IconButton
          icon="delete"
          onPress={handleDeletePhoto}
          disabled={!canEdit}
          iconColor={theme.colors.onErrorContainer}
          containerColor={theme.colors.errorContainer}
          style={styles.delete}
        />
      </>
    );
  }

  function handleActionChange(value: string) {
    handleBSMSelectDismiss();

    if (value === "take") {
      handleTakePhoto();
      return;
    }

    if (value === "pick") {
      handlePickPhoto();
      return;
    }
  }

  async function handleTakePhoto() {
    const result = await ImagePicker.launchCameraAsync({});

    if (result.canceled) {
      return;
    }

    setUri(result.assets[0].uri);
    setAsset(result.assets[0]);
  }

  async function handlePickPhoto() {
    const result = await ImagePicker.launchImageLibraryAsync({});

    if (result.canceled) {
      return;
    }

    setUri(result.assets[0].uri);
    setAsset(result.assets[0]);
  }

  function handleDeletePhoto() {
    setUri("");
    setAsset(null);
  }
}

const styles = StyleSheet.create({
  root: {
    gap: 4,
  },
  content: {
    alignItems: "center",
    padding: 16,
  },
  image: {
    width: "100%",
    height: 220,
  },
  delete: {
    position: "absolute",
    bottom: 8,
    right: 8,
  },
  action: {
    alignSelf: "flex-end",
  },
});
