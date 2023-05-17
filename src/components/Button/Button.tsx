import * as React from "react";
import { Button as ChakraButton } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";

interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  const [isDesktop] = useMediaQuery("(min-width: 700px)");

  return (
    <ChakraButton
      borderRadius={30}
      py={5}
      w={isDesktop ? "40%" : "65%"}
      fontFamily="secondary"
      fontSize={isDesktop ? 14 : 18}
      letterSpacing={1}
      color="white"
      border="1px solid gray"
      textTransform="uppercase"
      fontWeight={400}
      shadow="base"
      _hover={{
        borderColor: "white",
      }}
    >
      {children}
    </ChakraButton>
  );
};

export default Button;
