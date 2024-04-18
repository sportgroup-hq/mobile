import { View } from "react-native";
import {
  TextInputProps,
  HelperTextProps,
  TextInput,
  HelperText,
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
        <TextInput
          label={label}
          value={optionLabel}
          onPressIn={handleBSMSelectPresent}
          error={error}
          editable={false}
          right={
            <TextInput.Icon icon="menu-down" onPress={handleBSMSelectPresent} />
          }
        />
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

  function handleChange(value: string) {
    handleBSMSelectDismiss();

    onChangeValue(value);
  }
}
