import * as Yup from "yup";

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
