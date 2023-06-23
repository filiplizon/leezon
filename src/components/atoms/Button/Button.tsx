import * as React from "react";
import {
  Button as ChakraButton,
  Link as ChakraLink,
  useColorMode,
  useMediaQuery,
  Tooltip,
} from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import { opacityAnimation } from "../../../utils/animations";

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
  disabled?: boolean;
  tooltipText?: string;
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
  disabled,
  tooltipText,
}: ButtonProps) => {
  const { colorMode } = useColorMode();
  const [isDesktop] = useMediaQuery("(min-width: 821px)");
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const ButtonComponent = isLink ? ChakraLink : ChakraButton;

  return (
    <Tooltip label={tooltipText} hasArrow placement="top" py={2}>
      <ButtonComponent
        name={name}
        type={type}
        href={href}
        target={isLink ? "_blank" : "none"}
        ref={ref}
        download={download}
        disabled={disabled}
        w={width}
        py={py}
        mt={mt}
        bg="transparent"
        textAlign="center"
        color={`mode.${colorMode}.text`}
        fontFamily="secondary"
        fontSize={isDesktop ? 14 : 18}
        fontWeight={300}
        letterSpacing={1}
        textTransform="uppercase"
        borderRadius={30}
        border="1px solid"
        borderColor={`mode.${colorMode}.gray`}
        shadow="base"
        onClick={onClick}
        opacity={0.5}
        animation={
          inView && !disabled
            ? `${opacityAnimation} .5s ease-in-out forwards`
            : "none"
        }
        _hover={{
          borderColor: disabled
            ? `mode.${colorMode}.gray`
            : `mode.${colorMode}.text`,
        }}
      >
        {children}
      </ButtonComponent>
    </Tooltip>
  );
};

export default Button;
