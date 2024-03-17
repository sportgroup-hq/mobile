import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { forwardRef } from "react";
import { StyleSheet, View } from "react-native";
import { TouchableRipple, Text } from "react-native-paper";

interface Option {
  label: string;
  value: string;
}

interface BottomSheetModalSelectProps {
  options: Option[];
  onChange: (value: string) => void;
}

const BottomSheetModalSelect = forwardRef(function BottomSheetModalSelect(
  props: BottomSheetModalSelectProps,
  // eslint-disable-next-line prettier/prettier
  ref: React.Ref<BottomSheetModal>
) {
  const { options, onChange } = props;

  const snapPoints = [`${options.length * 10}%`];

  return (
    <BottomSheetModal
      ref={ref}
      index={0}
      snapPoints={snapPoints}
      handleIndicatorStyle={styles.handleIndicator}
      handleStyle={styles.handle}
      backdropComponent={renderBackdrop}
    >
      <BottomSheetView>
        {options.map((option) => (
          <TouchableRipple
            key={option.value}
            onPress={() => handleOptionPress(option.value)}
          >
            <View style={styles.option}>
              <Text variant="bodyLarge">{option.label}</Text>
            </View>
          </TouchableRipple>
        ))}
      </BottomSheetView>
    </BottomSheetModal>
  );

  function renderBackdrop(props: BottomSheetBackdropProps) {
    return (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    );
  }

  function handleOptionPress(value: string) {
    onChange(value);
  }
});

const styles = StyleSheet.create({
  handle: {
    padding: 4,
  },
  handleIndicator: {
    display: "none",
  },
  option: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
});

export default BottomSheetModalSelect;
