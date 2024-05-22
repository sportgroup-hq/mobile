import { useRouter, Link } from "expo-router";
import { useFormik } from "formik";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

import TextField from "../../molecules/TextField";

import Logo from "~/assets/images/Logo";
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
      <View style={styles.logo}>
        <Logo width={96} height={96} />
      </View>
      <View style={styles.body}>
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
      </View>
      <Button
        mode="contained"
        onPress={() => formik.handleSubmit()}
        loading={isLoginLoading}
        disabled={isLoginLoading}
      >
        Увійти
      </Button>
      <View style={styles.footer}>
        <Link href={ROUTES.AUTH.REGISTER} asChild>
          <Text variant="bodyMedium">Створити новий акаунт</Text>
        </Link>
      </View>
    </View>
  );

  async function handleSubmit(values: FormValues) {
    await login(values);
    router.replace(ROUTES.HOME.ROOT);
  }
}
const styles = StyleSheet.create({
  root: {
    gap: 24,
  },
  logo: {
    alignSelf: "center",
  },
  body: {
    gap: 16,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
