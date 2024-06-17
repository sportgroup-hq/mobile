import { useFormik } from "formik";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

import TextField from "~/components/molecules/TextField";
import DateField from "~/components/molecules/DateField";
import TimeField from "~/components/molecules/TimeField";

import { FormValues } from "./CreateEventForm";

interface CreateEventStepOneFormProps {
  formik: ReturnType<typeof useFormik<FormValues>>;
  onNext: () => void;
}

export default function CreateEventStepOneForm(
  props: CreateEventStepOneFormProps
) {
  const { formik, onNext } = props;

  return (
    <View style={styles.root}>
      <TextField
        label="Назва"
        value={formik.values.title}
        onChangeText={formik.handleChange("title")}
        error={formik.touched.title && !!formik.errors.title}
        helperText={formik.touched.title && formik.errors.title}
      />
      <DateField
        label="Дата початку"
        value={formik.values.startAtDate}
        onChangeDate={formik.handleChange("startAtDate")}
        error={formik.touched.startAtDate && !!formik.errors.startAtDate}
        helperText={formik.touched.startAtDate && formik.errors.startAtDate}
      />
      <TimeField
        label="Час початку"
        value={formik.values.startAtTime}
        onChangeTime={formik.handleChange("startAtTime")}
        error={formik.touched.startAtTime && !!formik.errors.startAtTime}
        helperText={formik.touched.startAtTime && formik.errors.startAtTime}
      />
      <DateField
        label="Дата кінця"
        value={formik.values.endAtDate}
        onChangeDate={formik.handleChange("endAtDate")}
        error={formik.touched.endAtDate && !!formik.errors.endAtDate}
        helperText={formik.touched.endAtDate && formik.errors.endAtDate}
      />
      <TimeField
        label="Час кінця"
        value={formik.values.endAtTime}
        onChangeTime={formik.handleChange("endAtTime")}
        error={formik.touched.endAtTime && !!formik.errors.endAtTime}
        helperText={formik.touched.endAtTime && formik.errors.endAtTime}
      />
      <TextField
        label="Місце проведення (не обов'язково)"
        value={formik.values.location}
        onChangeText={formik.handleChange("location")}
        error={formik.touched.location && !!formik.errors.location}
        helperText={formik.touched.location && formik.errors.location}
      />
      <TextField
        label="Опис (не обов'язково)"
        value={formik.values.description}
        onChangeText={formik.handleChange("description")}
        error={formik.touched.description && !!formik.errors.description}
        helperText={formik.touched.description && formik.errors.description}
        multiline
      />

      <View style={styles.button}>
        <Button mode="contained" onPress={onNext}>
          Далі
        </Button>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    gap: 16,
  },
  button: {
    alignItems: "flex-end",
  },
});
