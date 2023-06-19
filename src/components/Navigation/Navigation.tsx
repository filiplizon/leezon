import React, { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useMediaQuery, Flex, useColorMode } from "@chakra-ui/react";
import NavLink from "../NavLink/NavLink";
import { links } from "../../utils/data/navigation";
import { useNavigationLinksEffect } from "../../utils/helpers/hooks";
import { updateActiveNavigationLink } from "../../utils/helpers/helpers";

interface NavigationProps {
  isMenuOpen: boolean;
  setMenuOpen: (isOpen: boolean) => void;
}

const Navigation = ({ isMenuOpen, setMenuOpen }: NavigationProps) => {
  const { colorMode } = useColorMode();
  const { t } = useTranslation();
  const [isDesktop] = useMediaQuery("(min-width: 1000px)");
  const [isMobileHorizontal] = useMediaQuery(
    "screen and (max-width: 950px) and (orientation: landscape)"
  );
  const [activeLink, setActiveLink] = useState("home");
  const [scrollEventEnabled, setScrollEventEnabled] = useState(true);

  const handleLinkClick = useCallback(
    (link: string) => {
      setActiveLink(link);
      setMenuOpen(!isMenuOpen);
      setScrollEventEnabled(false);
      setTimeout(() => {
        setScrollEventEnabled(true);
      }, 1000);
    },
    [isMenuOpen, setMenuOpen]
  );

  const updateActiveLink = useCallback(() => {
    updateActiveNavigationLink(scrollEventEnabled, setActiveLink);
  }, [scrollEventEnabled]);

  useNavigationLinksEffect(updateActiveLink);

  return (
    <>
      <Flex
        as="nav"
        width={isDesktop ? "unset" : "100%"}
        height={isDesktop ? "unset" : "90vh"}
        pb={isDesktop ? 0 : isMobileHorizontal ? 100 : 180}
        pt={isDesktop ? 0 : isMobileHorizontal ? 5 : 100}
        position={isDesktop ? "relative" : "absolute"}
        top={isDesktop ? 0 : "10vh"}
        left={0}
        direction={isDesktop ? "row" : "column"}
        alignItems="center"
        justifyContent="space-between"
        background={isDesktop ? "transparent" : `mode.${colorMode}.background`}
        fontSize={isDesktop ? 14 : isMobileHorizontal ? 10 : 20}
        textTransform="uppercase"
        transform={
          isMenuOpen || isDesktop ? "translateX(0)" : "translateX(100%)"
        }
        transition="transform .5s ease-in-out"
      >
        {links.map((link: string) => (
          <NavLink
            key={link}
            href={`#${t(`navigation.${link}.link`)}`}
            isActive={activeLink === t(`navigation.${link}.link`)}
            onClick={() => handleLinkClick(t(`navigation.${link}.link`))}
          >
            {t(`navigation.${link}.label`)}
          </NavLink>
        ))}
      </Flex>
    </>
  );
};

export default Navigation;
