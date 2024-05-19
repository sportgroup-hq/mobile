import { useRouter } from "expo-router";
import { useFormik } from "formik";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

import TextField from "../../molecules/TextField";

import { ROUTES } from "~/constants/routes";
import { LoginSchema } from "~/helpers/validation";
import { useLogin } from "~/api/user";

interface FormValues {
  email: string;
  password: string;
}

export default function LoginForm() {
  const router = useRouter();

  const { mutateAsync: login, isLoading: isLoginLoading } = useLogin();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: handleSubmit,
  });

  return (
    <View style={styles.root}>
      <TextField
        label="Пошта"
        value={formik.values.email}
        onChangeText={formik.handleChange("email")}
        error={formik.touched.email && !!formik.errors.email}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        label="Пароль"
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
        error={formik.touched.password && !!formik.errors.password}
        helperText={formik.touched.password && formik.errors.password}
        secureTextEntry
      />
      <Button
        mode="contained"
        onPress={() => formik.handleSubmit()}
        loading={isLoginLoading}
        disabled={isLoginLoading}
      >
        Увійти
      </Button>
    </View>
  );

  async function handleSubmit(values: FormValues) {
    await login(values);
    router.navigate(ROUTES.HOME.ROOT);
  }
}
const styles = StyleSheet.create({
  root: {
    gap: 16,
  },
});
