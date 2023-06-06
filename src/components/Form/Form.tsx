import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Formik, Form, FormikHelpers, useFormikContext } from "formik";
import * as Yup from "yup";
import Button from "../Button/Button";
import InputField from "../InputField/InputField";

interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const ContactForm: React.FC = () => {
  const { t, i18n } = useTranslation();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(
      t("contact.validation.fieldRequired") as string
    ),
    email: Yup.string()
      .email(t("contact.validation.invalidEmail") as string)
      .required(t("contact.validation.fieldRequired") as string),
    subject: Yup.string().required(
      t("contact.validation.fieldRequired") as string
    ),
    message: Yup.string().required(
      t("contact.validation.fieldRequired") as string
    ),
  });

  const handleSubmit = (
    values: ContactFormValues,
    actions: FormikHelpers<ContactFormValues>
  ) => {
    console.log(values);
    actions.resetForm();
  };

  const MyForm = () => {
    const { validateForm } = useFormikContext<ContactFormValues>();

    useEffect(() => {
      validateForm();
    }, [i18n.language]);

    return (
      <Form>
        <InputField
          name="name"
          label={t("contact.labels.name")}
          placeholder={t("contact.placeholders.name")}
        />
        <InputField
          name="email"
          label={t("contact.labels.email")}
          placeholder={t("contact.placeholders.email")}
        />
        <InputField
          name="subject"
          label={t("contact.labels.subject")}
          placeholder={t("contact.placeholders.subject")}
        />
        <InputField
          name="message"
          label={t("contact.labels.message")}
          placeholder={t("contact.placeholders.message")}
          isMessage
        />
        <Button mt={2} width="100%" type="submit">
          {t("contact.button")}
        </Button>
      </Form>
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      validateOnChange={true}
      validateOnBlur={false}
    >
      <MyForm />
    </Formik>
  );
};

export default ContactForm;
