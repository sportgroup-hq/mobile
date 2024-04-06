import { useRouter } from "expo-router";
import { useFormik } from "formik";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

import { useCreateGroup } from "../../api/groups";
import { ROUTES } from "../../constants/routes";
import { CreateGroupSchema } from "../../helpers/validation";
import TextField from "../atoms/TextField";

interface FormValues {
  name: string;
  sport: string;
}

export default function CreateGroupForm() {
  const router = useRouter();

  const { mutateAsync: createGroup, isLoading: isCreatingGroupLoading } =
    useCreateGroup();

  const formik = useFormik({
    initialValues: {
      name: "",
      sport: "",
    },
    validationSchema: CreateGroupSchema,
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
          loading={isCreatingGroupLoading}
          disabled={isCreatingGroupLoading}
        >
          Створити
        </Button>
      </View>
    </View>
  );

  async function handleSubmit(values: FormValues) {
    await createGroup(values);
    router.navigate(ROUTES.GROUPS.ROOT);
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
