import React from "react";
import { useInView } from "react-intersection-observer";
import { Input, Textarea, useColorMode } from "@chakra-ui/react";
import { opacityAnimation } from "../../../utils/animations";

interface InputFieldProps {
  name: string;
  placeholder: string;
  isMessage?: boolean;
  field: any;
}

const FormInput: React.FC<InputFieldProps> = ({
  name,
  placeholder,
  isMessage,
  field,
}) => {
  const { colorMode } = useColorMode();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const InputComponent = isMessage ? Textarea : Input;

  return (
    <InputComponent
      ref={ref}
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
      opacity={0}
      animation={
        inView ? `${opacityAnimation} .5s ease-in-out .2s forwards` : "none"
      }
    />
  );
};

export default FormInput;
