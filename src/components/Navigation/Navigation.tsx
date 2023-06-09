import React, { useState, useEffect, useCallback } from "react";
import { useMediaQuery, Flex, useColorMode } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import NavLink from "../NavLink/NavLink";
import { getLinks } from "../../utils/data/navigation";

const Navigation = ({
  isMenuOpen,
  setMenuOpen,
}: {
  isMenuOpen: boolean;
  setMenuOpen: (isOpen: boolean) => void;
}) => {
  const { t, i18n } = useTranslation();
  const links = getLinks(t);
  const [activeLink, setActiveLink] = useState("home");
  const [isDesktop] = useMediaQuery("(min-width: 1000px)");
  const [isMobileHorizontal] = useMediaQuery(
    "screen and (max-width: 950px) and (orientation: landscape)"
  );
  const { colorMode } = useColorMode();
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
    if (!scrollEventEnabled) {
      return;
    }

    const sectionElements = Array.from(
      document.querySelectorAll("section[id]")
    ) as HTMLElement[];

    for (let i = sectionElements.length - 1; i >= 0; i--) {
      const section = sectionElements[i];
      const rect = section.getBoundingClientRect();

      if (rect.top <= 100 && rect.bottom >= 100) {
        setActiveLink(section.id);
        break;
      }
    }
  }, [scrollEventEnabled]);

  useEffect(() => {
    window.addEventListener("scroll", updateActiveLink);
    i18n.on("languageChanged", updateActiveLink);

    return () => {
      window.removeEventListener("scroll", updateActiveLink);
      i18n.off("languageChanged", updateActiveLink);
    };
  }, [i18n, updateActiveLink]);

  useEffect(() => {
    updateActiveLink();
  }, [updateActiveLink, i18n.language]);

  return (
    <>
      <Flex
        pb={isDesktop ? 0 : isMobileHorizontal ? 75 : 160}
        pt={isDesktop ? 0 : isMobileHorizontal ? 10 : 100}
        as="nav"
        top={isDesktop ? 0 : "10vh"}
        left={0}
        position={isDesktop ? "relative" : "absolute"}
        height={isDesktop ? "unset" : "90vh"}
        width={isDesktop ? "unset" : "100%"}
        alignItems="center"
        justifyContent="space-between"
        flexDirection={isDesktop ? "row" : "column"}
        background={isDesktop ? "transparent" : `mode.${colorMode}.background`}
        fontSize={isDesktop ? 14 : isMobileHorizontal ? 10 : 20}
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
            isActive={activeLink === link}
            onClick={() => handleLinkClick(link)}
          >
            {name}
          </NavLink>
        ))}
      </Flex>
    </>
  );
};

export default Navigation;
