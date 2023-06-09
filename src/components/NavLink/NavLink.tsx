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
      position="relative"
      px={isDesktop ? 4 : 8}
      py={isDesktop ? 1 : 2}
      mr={2}
      mb={isDesktop ? 0 : 2}
      borderRadius={30}
      fontFamily="secondary"
      letterSpacing={2}
      color={`mode.${colorMode}.text`}
      border="1px solid transparent"
      borderColor={isActive ? `mode.${colorMode}.text` : "transparent"}
      _hover={{
        textDecoration: "none",
        color: `mode.${colorMode}.text`,
        borderColor: `mode.${colorMode}.text`,
      }}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default NavLink;
