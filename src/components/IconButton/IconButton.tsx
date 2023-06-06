import * as React from "react";
import { IconButton as ChakraIconButton } from "@chakra-ui/react";

interface IconButtonProps {
  ariaLabel: string;
  transform?: string;
  display?: string;
  icon: any;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const IconButton = ({
  ariaLabel,
  transform,
  display,
  icon,
  onClick,
}: IconButtonProps) => {
  return (
    <ChakraIconButton
      display={display}
      mr={1}
      aria-label={ariaLabel}
      icon={icon}
      fontSize="30"
      p={0}
      cursor="pointer"
      onClick={onClick}
      _active={{
        bg: "transparent",
      }}
      _hover={{
        bg: "transparent",
        transform: "translateY(-10%)",
      }}
      bg="transparent"
      transform={transform}
    />
  );
};

export default IconButton;
