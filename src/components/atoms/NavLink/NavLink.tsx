import React from "react";
import { Link, useColorMode, useMediaQuery } from "@chakra-ui/react";

type NavLinkProps = {
  children: React.ReactNode;
  href: string;
  isActive: boolean;
  onClick: () => void;
};

const NavLink = ({ children, href, isActive, onClick }: NavLinkProps) => {
  const { colorMode } = useColorMode();
  const [isDesktop] = useMediaQuery("(min-width: 821px)");

  return (
    <Link
      href={href}
      px={isDesktop ? 4 : 8}
      py={isDesktop ? 1 : 2}
      mr={2}
      mb={isDesktop ? 0 : 2}
      fontFamily="secondary"
      letterSpacing={2}
      color={`mode.${colorMode}.text`}
      border="1px solid transparent"
      borderColor={isActive ? `mode.${colorMode}.text` : "transparent"}
      borderRadius={30}
      onClick={onClick}
      _hover={{
        borderColor: `mode.${colorMode}.text`,
      }}
    >
      {children}
    </Link>
  );
};

export default NavLink;
