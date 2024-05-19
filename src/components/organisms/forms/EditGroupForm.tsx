import { useFormik } from "formik";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

import TextField from "../../molecules/TextField";

import { useEditGroup } from "~/api/groups";
import { EditGroupSchema } from "~/helpers/validation";
import { Group } from "~/types/groups";

interface FormValues {
  name: string;
  sport: string;
}

interface EditGroupFormProps {
  group: Group;
}

export default function EditGroupForm(props: EditGroupFormProps) {
  const { group } = props;

  const { mutateAsync: editGroup, isLoading: isEditGroupLoading } =
    useEditGroup();

  const formik = useFormik({
    initialValues: {
      name: group.name,
      sport: group.sport || "",
    },
    validationSchema: EditGroupSchema,
    onSubmit: handleSubmit,
  });

  return (
    <View style={styles.root}>
      <TextField
        label="Назва групи (обовʼязково)"
        value={formik.values.name}
        onChangeText={formik.handleChange("name")}
        error={!!formik.errors.name}
        helperText={formik.errors.name}
      />
      <TextField
        label="Вид спорту"
        value={formik.values.sport}
        onChangeText={formik.handleChange("sport")}
        error={!!formik.errors.sport}
        helperText={formik.errors.sport}
      />
      <View style={styles.button}>
        <Button
          mode="contained"
          onPress={() => formik.handleSubmit()}
          loading={isEditGroupLoading}
          disabled={isEditGroupLoading}
        >
          Зберегти
        </Button>
      </View>
    </View>
  );

  function handleSubmit(values: FormValues) {
    editGroup({ id: group.id, data: values });
  }
}
const styles = StyleSheet.create({
  root: {
    gap: 16,
  },
  button: {
    alignItems: "flex-end",
  },
});
