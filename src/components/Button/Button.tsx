import * as React from "react";
import {
  Button as ChakraButton,
  Link as ChakraLink,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
interface ButtonProps {
  children: React.ReactNode;
  width: string;
  onClick?: () => void;
  isLink?: boolean;
  href?: string;
  py?: number;
  mt?: number;
  type?: "submit";
  download?: boolean;
}

const Button = ({
  children,
  width,
  onClick,
  isLink,
  href,
  py = 5,
  mt,
  type,
  download,
}: ButtonProps) => {
  const [isDesktop] = useMediaQuery("(min-width: 700px)");
  const { colorMode } = useColorMode();

  const ButtonComponent = isLink ? ChakraLink : ChakraButton;

  return (
    <ButtonComponent
      type={type}
      href={href}
      textAlign="center"
      borderRadius={30}
      py={py}
      w={width}
      fontFamily="secondary"
      fontSize={isDesktop ? 14 : 18}
      letterSpacing={1}
      color={`mode.${colorMode}.text`}
      bg="transparent"
      border="1px solid"
      borderColor={`mode.${colorMode}.gray`}
      textTransform="uppercase"
      fontWeight={400}
      shadow="base"
      mt={mt}
      _hover={{
        borderColor: `mode.${colorMode}.text`,
      }}
      onClick={onClick}
      download={download}
    >
      {children}
    </ButtonComponent>
  );
};

export default Button;
