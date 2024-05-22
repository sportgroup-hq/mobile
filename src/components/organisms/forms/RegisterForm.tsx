import { useRouter, Link } from "expo-router";
import { useFormik } from "formik";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

import TextField from "../../molecules/TextField";

import Logo from "~/assets/images/Logo";
import { ROUTES } from "~/constants/routes";
import { RegisterSchema } from "~/helpers/validation";
import { useRegister } from "~/api/user";

interface FormValues {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export default function RegisterForm() {
  const router = useRouter();

  const { mutateAsync: register, isLoading: isLoginLoading } = useRegister();

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: handleSubmit,
  });

  return (
    <View style={styles.root}>
      <View style={styles.logo}>
        <Logo width={96} height={96} />
      </View>
      <View style={styles.body}>
        <TextField
          label="Імʼя"
          value={formik.values.first_name}
          onChangeText={formik.handleChange("first_name")}
          error={formik.touched.first_name && !!formik.errors.first_name}
          helperText={formik.touched.first_name && formik.errors.first_name}
        />
        <TextField
          label="Прізвище"
          value={formik.values.last_name}
          onChangeText={formik.handleChange("last_name")}
          error={formik.touched.last_name && !!formik.errors.last_name}
          helperText={formik.touched.last_name && formik.errors.last_name}
        />
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
        Зареєструватися
      </Button>
      <View style={styles.footer}>
        <Text variant="bodyMedium">Вже маєте акаунт? </Text>
        <Link href={ROUTES.AUTH.LOGIN} asChild>
          <Text variant="bodyMedium">Увійти</Text>
        </Link>
      </View>
    </View>
  );

  async function handleSubmit(values: FormValues) {
    await register(values);
    router.navigate(ROUTES.HOME.ROOT);
  }
}
const styles = StyleSheet.create({
  root: {
    gap: 16,
  },
  logo: {
    alignSelf: "center",
  },
  body: {
    gap: 16,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
