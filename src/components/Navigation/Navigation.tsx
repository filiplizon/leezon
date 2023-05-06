import * as React from "react";
import { Link, useMediaQuery, Flex } from "@chakra-ui/react";
import { ReactNode, useState } from "react";

const Navigation = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  const Links = [
    "home",
    "about",
    "experience",
    "skills",
    "projects",
    "contact",
  ];
  const [isActive, setActive] = useState("home");
  const [isDesktop] = useMediaQuery("(min-width: 900px)");

  const handleLinkClick = (link: string) => {
    setActive(link);
  };

  type NavLinkProps = {
    children: ReactNode;
    href: string;
  };

  const NavLink = ({ children, href }: NavLinkProps) => (
    <Link
      href={href}
      position="relative"
      px={isDesktop ? 4 : 8}
      py={isDesktop ? 1 : 2}
      mr={2}
      borderRadius={30}
      fontFamily="secondary"
      fontSize={isDesktop ? 14 : 22}
      letterSpacing={2}
      color={isActive === href.slice(1) ? "white" : "gray"}
      border="1px solid transparent"
      borderColor={isActive === href.slice(1) ? "white" : "transparent"}
      _hover={{
        textDecoration: "none",
        color: "white",
        borderColor: "white",
      }}
      onClick={() => handleLinkClick(href.slice(1))}
    >
      {children}
    </Link>
  );

  return (
    <>
      <Flex
        py={isDesktop ? 0 : 180}
        as={"nav"}
        top={0}
        left={0}
        position={isDesktop ? "relative" : "absolute"}
        height={isDesktop ? "unset" : "100vh"}
        width={isDesktop ? "unset" : "100%"}
        alignItems="center"
        justifyContent="space-between"
        flexDirection={isDesktop ? "row" : "column"}
        background={isDesktop ? "transparent" : "black"}
        zIndex={isDesktop ? 1 : -1}
        textTransform="uppercase"
        transform={
          isMenuOpen || isDesktop ? "translateX(0)" : "translateX(100%)"
        }
        transition="transform .5s ease-in-out"
      >
        {Links.map(link => (
          <NavLink href={`#${link}`} key={link}>
            {link}
          </NavLink>
        ))}
      </Flex>
    </>
  );
};

export default Navigation;
