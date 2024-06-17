import { useState } from "react";
import { View, Keyboard } from "react-native";
import {
  TextInputProps,
  HelperTextProps,
  TextInput,
  HelperText,
  TouchableRipple,
} from "react-native-paper";
import { TimePickerModal } from "react-native-paper-dates";

interface TimeFieldProps {
  label: TextInputProps["label"];
  value: TextInputProps["value"];
  onChangeTime: (value: string) => void;
  error: TextInputProps["error"];
  helperText: HelperTextProps["children"];
}

export default function TimeField(props: TimeFieldProps) {
  const { label, value, onChangeTime, error, helperText } = props;

  const [isOpen, setIsOpen] = useState(false);

  const hours = value ? +value.split(":")[0] : undefined;
  const minutes = value ? +value.split(":")[1] : undefined;

  const helperTextType = error ? "error" : "info";

  return (
    <>
      <View>
        <TouchableRipple onPress={handlePress}>
          <TextInput
            label={label}
            value={value}
            error={error}
            editable={false}
            pointerEvents="none"
            right={
              <TextInput.Icon icon="clock-outline" onPress={handlePress} />
            }
          />
        </TouchableRipple>
        {!!helperText && (
          <HelperText type={helperTextType}>{helperText}</HelperText>
        )}
      </View>
      <TimePickerModal
        visible={isOpen}
        onConfirm={handleConfirm}
        onDismiss={handleDismiss}
        hours={hours}
        minutes={minutes}
      />
    </>
  );

  function handlePress() {
    Keyboard.dismiss();

    setIsOpen(true);
  }

  function handleConfirm(value: { hours: number; minutes: number }) {
    setIsOpen(false);

    const formattedHours = value.hours.toString().padStart(2, "0");
    const formattedMinutes = value.minutes.toString().padStart(2, "0");

    onChangeTime(`${formattedHours}:${formattedMinutes}`);
  }

  function handleDismiss() {
    setIsOpen(false);
  }
}
