import * as Yup from "yup";

export const RegisterSchema = Yup.object().shape({
  first_name: Yup.string().required("Це поле є обов'язковим."),
  last_name: Yup.string().required("Це поле є обов'язковим."),
  email: Yup.string()
    .email("Введіть правильний email.")
    .required("Це поле є обов'язковим."),
  password: Yup.string().required("Це поле є обов'язковим."),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Введіть правильний email.")
    .required("Це поле є обов'язковим."),
  password: Yup.string().required("Це поле є обов'язковим."),
});

export const CreateGroupSchema = Yup.object().shape({
  name: Yup.string().required("Це поле є обов'язковим."),
  sport: Yup.string().notRequired(),
});

export const EditGroupSchema = Yup.object().shape({
  name: Yup.string().required("Це поле є обов'язковим."),
  sport: Yup.string().notRequired(),
});

export const JoinGroupSchema = Yup.object().shape({
  code: Yup.string().required("Це поле є обов'язковим."),
});

export const EditUserSchema = Yup.object().shape({
  phone: Yup.string().notRequired(),
  dateOfBirth: Yup.string().notRequired(),
  sex: Yup.string().notRequired(),
  address: Yup.string().notRequired(),
});

export const CreateEventSchema = Yup.object().shape({
  title: Yup.string().required("Це поле є обов'язковим."),
  assignType: Yup.string(),
  assignedUserIDs: Yup.array(),
  startAtDate: Yup.string().required("Це поле є обов'язковим."),
  startAtTime: Yup.string().required("Це поле є обов'язковим."),
  endAtDate: Yup.string().required("Це поле є обов'язковим."),
  endAtTime: Yup.string().required("Це поле є обов'язковим."),
  location: Yup.string().notRequired(),
  description: Yup.string().notRequired(),
});
