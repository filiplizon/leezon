import React, { useState } from "react";
import { useMediaQuery, Flex, useColorMode } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import NavLink from "../NavLink/NavLink";
import { getLinks } from "../../utils/data/navigation";

const Navigation = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  const { t } = useTranslation();
  const links = getLinks(t);
  const [activeLink, setActiveLink] = useState("home".slice(1));
  const [isDesktop] = useMediaQuery("(min-width: 900px)");
  const { colorMode } = useColorMode();

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <>
      <Flex
        pb={isDesktop ? 0 : 150}
        pt={isDesktop ? 0 : 110}
        as="nav"
        top={isDesktop ? 0 : "10.1vh"}
        left={0}
        position={isDesktop ? "relative" : "absolute"}
        height={isDesktop ? "unset" : "90vh"}
        width={isDesktop ? "unset" : "100%"}
        alignItems="center"
        justifyContent="space-between"
        flexDirection={isDesktop ? "row" : "column"}
        background={isDesktop ? "transparent" : `mode.${colorMode}.background`}
        textTransform="uppercase"
        transform={
          isMenuOpen || isDesktop ? "translateX(0)" : "translateX(100%)"
        }
        transition="transform .5s ease-in-out"
      >
        {links.map(({ name, link }) => (
          <NavLink
            key={link}
            href={`#${link}`}
            isActive={activeLink === link.slice(1)}
            onClick={() => handleLinkClick(link.slice(1))}
          >
            {name}
          </NavLink>
        ))}
      </Flex>
    </>
  );
};

export default Navigation;
