import { useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useFormik } from "formik";
import { StyleSheet } from "react-native";

import { useCreateGroup } from "~/api/groups";
import { CreateEventSchema } from "~/helpers/validation";

import CreateEventStepOneForm from "./CreateEventStepOneForm";
import CreateEventStepTwoForm from "./CreateEventStepTwoForm";
import { Record } from "~/types/records";

enum Step {
  One,
  Two,
}

export interface FormValues {
  title: string;
  assignType: string;
  assignedUserIDs: string[];
  startAtDate: string;
  startAtTime: string;
  endAtDate: string;
  endAtTime: string;
  location: string;
  description: string;
  records: Record[];
}

export default function CreateEventForm() {
  const router = useRouter();

  const [step, setStep] = useState(Step.One);

  const { mutateAsync: createGroup, isLoading: isCreatingGroupLoading } =
    useCreateGroup();

  const formik = useFormik<FormValues>({
    initialValues: {
      title: "",
      assignType: "all",
      assignedUserIDs: [],
      startAtDate: "",
      startAtTime: "",
      endAtDate: "",
      endAtTime: "",
      location: "",
      description: "",
      records: [],
    },
    validationSchema: CreateEventSchema,
    onSubmit: handleSubmit,
  });

  return renderContent();

  function renderContent() {
    if (step === Step.One) {
      return <CreateEventStepOneForm formik={formik} onNext={handleNext} />;
    }

    if (step === Step.Two) {
      return (
        <CreateEventStepTwoForm
          formik={formik}
          onCreate={formik.handleSubmit}
          onBack={handleBack}
        />
      );
    }
  }

  function handleNext() {
    setStep(Step.Two);
  }

  function handleBack() {
    setStep(Step.One);
  }

  async function handleSubmit(values: FormValues) {
    // await createGroup(values);
    // router.navigate(ROUTES.HOME.ROOT);
  }
}
