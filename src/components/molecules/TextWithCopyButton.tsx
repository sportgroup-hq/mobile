import * as Clipboard from "expo-clipboard";
import { StyleSheet, View } from "react-native";
import { TextProps, Text, IconButton } from "react-native-paper";
import Toast from "react-native-toast-message";

interface TextWithCopyButtonProps extends TextProps<never> {
  copyableText: string;
  successToastText: string;
}

export default function TextWithCopyButton(props: TextWithCopyButtonProps) {
  const { copyableText, successToastText } = props;

  return (
    <View style={styles.root}>
      <Text {...props} />
      <IconButton icon="content-copy" onPress={handleCopy} />
    </View>
  );

  async function handleCopy() {
    await Clipboard.setStringAsync(copyableText);

    Toast.show({
      type: "success",
      text1: successToastText,
    });
  }
}

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
  },
});
