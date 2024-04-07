import { View, StyleSheet } from "react-native";
import {
  TextInputProps,
  HelperTextProps,
  HelperText,
} from "react-native-paper";
import { DatePickerInput } from "react-native-paper-dates";

interface TextFieldProps {
  label: TextInputProps["label"];
  value: TextInputProps["value"];
  onChangeDate: (value: string) => void;
  error: TextInputProps["error"];
  helperText: HelperTextProps["children"];
}

export default function DateField(props: TextFieldProps) {
  const { label, value, onChangeDate, error, helperText } = props;

  const dateValue = value ? new Date(value) : undefined;
  const helperTextType = error ? "error" : "info";

  return (
    <View>
      <View style={styles.input}>
        <DatePickerInput
          locale="en"
          label={label}
          value={dateValue}
          onChangeText={handleChangeText}
          onChange={handleChange}
          inputMode="start"
          hasError={error}
        />
      </View>
      {!!helperText && (
        <HelperText type={helperTextType}>{helperText}</HelperText>
      )}
    </View>
  );

  function handleChangeText(value: string | undefined) {
    if (value) {
      return;
    }

    onChangeDate("");
  }

  function handleChange(value: Date | undefined) {
    onChangeDate(value ? value.toISOString() : "");
  }
}

const styles = StyleSheet.create({
  input: {
    height: 56,
  },
});
