import * as React from "react";
import { Button as ChakraButton, Link as ChakraLink } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";

interface ButtonProps {
  children: React.ReactNode;
  width: string;
  onClick?: () => void;
  isLink?: boolean;
  href?: string;
  py?: number;
}

const Button = ({
  children,
  width,
  onClick,
  isLink,
  href,
  py = 5,
}: ButtonProps) => {
  const [isDesktop] = useMediaQuery("(min-width: 700px)");

  const ButtonComponent = isLink ? ChakraLink : ChakraButton;

  return (
    <ButtonComponent
      href={href}
      textAlign="center"
      borderRadius={30}
      py={py}
      w={width}
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
      onClick={onClick}
    >
      {children}
    </ButtonComponent>
  );
};

export default Button;
