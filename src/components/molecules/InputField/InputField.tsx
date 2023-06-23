import React from "react";
import { Field } from "formik";
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import FormInput from "../../atoms/Input/Input";

interface InputFieldProps {
  name: string;
  label: string;
  placeholder: string;
  isMessage?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  placeholder,
  isMessage,
}) => {
  return (
    <Field name={name}>
      {({ field, form }: any) => (
        <FormControl isInvalid={form.errors[name] && form.touched[name]} mb={5}>
          <FormLabel htmlFor={name}>{label}</FormLabel>
          <FormInput
            name={name}
            placeholder={placeholder}
            isMessage={isMessage}
            field={field}
          />
          <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

export default InputField;
