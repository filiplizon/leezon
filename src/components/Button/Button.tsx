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
  const [isDesktop] = useMediaQuery("(min-width: 821px)");
  const { colorMode } = useColorMode();
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
      animation={
        inView ? `${opacityAnimation} .5s ease-in-out forwards` : "none"
      }
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
