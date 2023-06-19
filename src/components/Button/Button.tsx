import * as React from "react";
import {
  Button as ChakraButton,
  Link as ChakraLink,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import { opacityAnimation } from "../../utils/animations";

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
  name: string;
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
  name,
}: ButtonProps) => {
  const { colorMode } = useColorMode();
  const [isDesktop] = useMediaQuery("(min-width: 821px)");
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const ButtonComponent = isLink ? ChakraLink : ChakraButton;

  return (
    <ButtonComponent
      name={name}
      type={type}
      href={href}
      ref={ref}
      download={download}
      w={width}
      py={py}
      mt={mt}
      bg="transparent"
      textAlign="center"
      color={`mode.${colorMode}.text`}
      fontFamily="secondary"
      fontSize={isDesktop ? 14 : 18}
      letterSpacing={1}
      textTransform="uppercase"
      borderRadius={30}
      border="1px solid"
      borderColor={`mode.${colorMode}.gray`}
      shadow="base"
      onClick={onClick}
      animation={
        inView ? `${opacityAnimation} .5s ease-in-out forwards` : "none"
      }
      _hover={{
        borderColor: `mode.${colorMode}.text`,
      }}
    >
      {children}
    </ButtonComponent>
  );
};

export default Button;
