import { View, Keyboard } from "react-native";
import {
  TextInputProps,
  HelperTextProps,
  TextInput,
  HelperText,
  TouchableRipple,
} from "react-native-paper";

import BottomSheetModalSelect from "./BottomSheetModalSelect";
import useBottomSheetModal from "../../hooks/useBottomSheetModal";

import { Option } from "~/types/misc";

interface TextFieldProps {
  label: TextInputProps["label"];
  value: TextInputProps["value"];
  onChangeValue: (value: string) => void;
  options: Option[];
  error: TextInputProps["error"];
  helperText: HelperTextProps["children"];
}

export default function SelectField(props: TextFieldProps) {
  const { label, value, onChangeValue, options, error, helperText } = props;

  const {
    ref: BSMSelectRef,
    handlePresent: handleBSMSelectPresent,
    handleDismiss: handleBSMSelectDismiss,
  } = useBottomSheetModal();

  const optionLabel =
    options.find((option) => option.value === value)?.label || "";
  const helperTextType = error ? "error" : "info";

  return (
    <>
      <View>
        <TouchableRipple onPress={handlePress}>
          <TextInput
            label={label}
            value={optionLabel}
            error={error}
            editable={false}
            pointerEvents="none"
            right={
              <TextInput.Icon
                icon="menu-down"
                onPress={handleBSMSelectPresent}
              />
            }
          />
        </TouchableRipple>
        {!!helperText && (
          <HelperText type={helperTextType}>{helperText}</HelperText>
        )}
      </View>
      <BottomSheetModalSelect
        ref={BSMSelectRef}
        options={options}
        onChange={handleChange}
      />
    </>
  );

  function handlePress() {
    Keyboard.dismiss();

    handleBSMSelectPresent();
  }

  function handleChange(value: string) {
    handleBSMSelectDismiss();

    onChangeValue(value);
  }
}
