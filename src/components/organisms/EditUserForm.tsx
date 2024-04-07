import { useFormik } from "formik";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

import { EditUserSchema } from "../../helpers/validation";
import { Sex, User } from "../../types/users";
import DateField from "../molecules/DateField";
import SelectField from "../molecules/SelectField";
import TextField from "../molecules/TextField";

const SEX_OPTIONS = [
  { label: "Чоловік", value: Sex.Male },
  { label: "Жінка", value: Sex.Female },
];

interface FormValues {
  phone: string;
  dateOfBirth: string;
  sex: string;
  address: string;
}

interface EditUserFormProps {
  user: User;
}

export default function EditUserForm(props: EditUserFormProps) {
  const { user } = props;

  const formik = useFormik({
    initialValues: {
      phone: user.phone || "",
      dateOfBirth: user.dateOfBirth || "",
      sex: user.sex || "",
      address: user.address || "",
    },
    validationSchema: EditUserSchema,
    onSubmit: handleSubmit,
  });

  return (
    <View style={styles.root}>
      <TextField
        label="Телефон"
        value={formik.values.phone}
        onChangeText={formik.handleChange("phone")}
        error={!!formik.errors.phone}
        helperText={formik.errors.phone}
      />
      <DateField
        label="Дата народження"
        value={formik.values.dateOfBirth}
        onChangeDate={formik.handleChange("dateOfBirth")}
        error={!!formik.errors.dateOfBirth}
        helperText={formik.errors.dateOfBirth}
      />
      <SelectField
        label="Стать"
        value={formik.values.sex}
        onChangeValue={formik.handleChange("sex")}
        options={SEX_OPTIONS}
        error={!!formik.errors.sex}
        helperText={formik.errors.sex}
      />
      <TextField
        label="Адреса"
        value={formik.values.address}
        onChangeText={formik.handleChange("address")}
        error={!!formik.errors.address}
        helperText={formik.errors.address}
      />
      <View style={styles.button}>
        <Button
          mode="contained"
          onPress={() => formik.handleSubmit()}
          // loading={isEditUserLoading}
          // disabled={isEditUserLoading}
        >
          Зберегти
        </Button>
      </View>
    </View>
  );

  function handleSubmit(values: FormValues) {}
}

const styles = StyleSheet.create({
  root: {
    gap: 16,
  },
  button: {
    alignItems: "flex-end",
  },
});
