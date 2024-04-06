import { View } from "react-native";
import {
  TextInputProps,
  HelperTextProps,
  TextInput,
  HelperText,
} from "react-native-paper";

interface TextFieldProps {
  label: TextInputProps["label"];
  value: TextInputProps["value"];
  onChangeText: TextInputProps["onChangeText"];
  error: TextInputProps["error"];
  helperText: HelperTextProps["children"];
}

export default function TextField(props: TextFieldProps) {
  const { label, value, onChangeText, error, helperText } = props;

  const helperTextType = error ? "error" : "info";

  return (
    <View>
      <TextInput
        label={label}
        value={value}
        onChangeText={onChangeText}
        error={error}
      />
      <HelperText type={helperTextType} visible={!!helperText}>
        {helperText}
      </HelperText>
    </View>
  );
}
