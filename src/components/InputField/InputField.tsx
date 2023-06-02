import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Textarea,
  useColorMode,
} from "@chakra-ui/react";
import { Field } from "formik";

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
  const { colorMode } = useColorMode();
  const InputComponent = isMessage ? Textarea : Input;
  return (
    <Field name={name}>
      {({ field, form }) => (
        <FormControl isInvalid={form.errors[name] && form.touched[name]} mb={5}>
          <FormLabel htmlFor={name}>{label}</FormLabel>
          <InputComponent
            {...field}
            borderColor={`mode.${colorMode}.gray`}
            _focus={{
              borderColor: `mode.${colorMode}.text`,
              shadow: "none",
            }}
            _hover={{ borderColor: `mode.${colorMode}.text` }}
            _placeholder={{ color: `mode.${colorMode}.gray` }}
            sx={{
              "&:-webkit-autofill": {
                transition: "background-color 5000s ease-in-out 0s",
                WebkitTextFillColor: `mode.${colorMode}.text !important`,
              },
            }}
            id={name}
            placeholder={placeholder}
          />
          <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

export default InputField;
