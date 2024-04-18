import { useRouter } from "expo-router";
import { useFormik } from "formik";
import { StyleSheet, View } from "react-native";
import { Text, Button } from "react-native-paper";

import TextField from "../molecules/TextField";

import { useJoinGroup } from "~/api/groups";
import { ROUTES } from "~/constants/routes";
import { JoinGroupSchema } from "~/helpers/validation";

interface FormValues {
  code: string;
}

export default function CreateGroupForm() {
  const router = useRouter();

  const { mutateAsync: joinGroup, isLoading: isJoinGroupLoading } =
    useJoinGroup();

  const formik = useFormik({
    initialValues: {
      code: "",
    },
    validationSchema: JoinGroupSchema,
    onSubmit: handleSubmit,
  });

  return (
    <View style={styles.root}>
      <View style={styles.text}>
        <Text variant="titleMedium">Код групи</Text>
        <Text variant="bodyMedium">
          Попросіть у свого тренера код групи та введіть його тут.
        </Text>
      </View>
      <TextField
        label="Код групи"
        value={formik.values.code}
        onChangeText={formik.handleChange("code")}
        error={!!formik.errors.code}
        helperText={formik.errors.code}
      />
      <View style={styles.button}>
        <Button
          mode="contained"
          onPress={() => formik.handleSubmit()}
          loading={isJoinGroupLoading}
          disabled={isJoinGroupLoading}
        >
          Приєднатися
        </Button>
      </View>
    </View>
  );

  async function handleSubmit(values: FormValues) {
    await joinGroup(values);
    router.navigate(ROUTES.HOME.ROOT);
  }
}
const styles = StyleSheet.create({
  root: {
    gap: 16,
  },
  text: {
    gap: 8,
  },
  button: {
    alignItems: "flex-end",
  },
});
