import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Formik, Form, FormikHelpers, useFormikContext } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import Button from "../Button/Button";
import InputField from "../InputField/InputField";
import Modal from "../Modal/Modal";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    header: "",
    body: "",
  });

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

  const handleSubmit = async (
    values: ContactFormValues,
    actions: FormikHelpers<ContactFormValues>
  ) => {
    const { name, email, subject, message } = values;
    try {
      await emailjs.send(
        process.env.GATSBY_EMAILJS_SERVICE_ID!,
        process.env.GATSBY_EMAILJS_TEMPLATE_ID!,
        { name, email, subject, message },
        process.env.GATSBY_EMAILJS_USER_ID!
      );
      actions.resetForm();
      setModalContent({
        header: t("contact.success.header"),
        body: t("contact.success.body"),
      });
      setIsModalOpen(true);
    } catch (error) {
      setModalContent({
        header: t("contact.error.header"),
        body: t("contact.error.body"),
      });
    }
  };

  const MyForm = () => {
    const { validateForm } = useFormikContext<ContactFormValues>();

    useEffect(() => {
      validateForm();
    }, [i18n.language]);

    return (
      <>
        <Modal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          header={modalContent.header}
          body={modalContent.body}
        />
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
      </>
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
