import { ReactNode, useState } from "react";
import { View } from "react-native";
import { TextInput, HelperText } from "react-native-paper";

interface TextFieldProps {
  label?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  error?: boolean;
  disabled?: boolean;
  multiline?: boolean;
  keyboardType?: "default" | "numeric";
  secureTextEntry?: boolean;
  helperText?: ReactNode;
}

export default function TextField(props: TextFieldProps) {
  const {
    label,
    value,
    onChangeText,
    error = false,
    disabled = false,
    multiline = false,
    keyboardType = "default",
    secureTextEntry = false,
    helperText,
  } = props;
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(secureTextEntry);

  const helperTextType = error ? "error" : "info";

  return (
    <View>
      <TextInput
        label={label}
        value={value}
        onChangeText={onChangeText}
        error={error}
        disabled={disabled}
        multiline={multiline}
        keyboardType={keyboardType}
        secureTextEntry={isSecureTextEntry}
        right={
          secureTextEntry && (
            <TextInput.Icon icon="eye" onPress={toggleSecureTextEntry} />
          )
        }
      />
      {!!helperText && (
        <HelperText type={helperTextType}>{helperText}</HelperText>
      )}
    </View>
  );

  function toggleSecureTextEntry() {
    setIsSecureTextEntry((prev) => !prev);
  }
}
