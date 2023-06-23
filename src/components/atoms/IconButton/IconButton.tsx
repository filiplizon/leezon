import * as React from "react";
import { IconButton as ChakraIconButton } from "@chakra-ui/react";

interface IconButtonProps {
  ariaLabel: string;
  display?: string;
  icon: any;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isDesktop?: boolean;
}

const IconButton = ({
  ariaLabel,
  display,
  icon,
  onClick,
  isDesktop,
}: IconButtonProps) => {
  return (
    <ChakraIconButton
      display={display}
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
        transform: isDesktop ? "translateY(-10%)" : "none",
      }}
      bg="transparent"
    />
  );
};

export default IconButton;
