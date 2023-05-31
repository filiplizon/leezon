import React from "react";
import { Formik, Form, FormikHelpers } from "formik";
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

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});

const ContactForm: React.FC = () => {
  const handleSubmit = (
    values: ContactFormValues,
    actions: FormikHelpers<ContactFormValues>
  ) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      validateOnChange={false}
      validateOnBlur={false}
    >
      <Form>
        <InputField name="name" label="Name" placeholder="Jan Nowak" />
        <InputField name="email" label="Email" placeholder="JNowak@gmail.com" />
        <InputField name="subject" label="Subject" placeholder="Job offer" />
        <InputField
          name="message"
          label="Message"
          placeholder="Hi there!"
          isMessage
        />
        <Button width="100%" type="submit">
          Submit
        </Button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
