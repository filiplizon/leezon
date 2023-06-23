import * as React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "@reach/router";
import { Box, Flex, useColorMode, useMediaQuery } from "@chakra-ui/react";
import Logo from "../../atoms/Logo/Logo";
import Navigation from "../../molecules/Navigation/Navigation";
import Menu from "../../molecules/Menu/Menu";
import { slideToRight } from "../../../utils/animations";

const Header = () => {
  const { colorMode } = useColorMode();
  const [isDesktop] = useMediaQuery("(min-width: 1000px)");
  const [isMobileHorizontal] = useMediaQuery(
    "screen and (max-width: 950px) and (orientation: landscape)"
  );
  const [isMenuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { pathname, hash } = location;
  const isHome = pathname === "/" || hash !== "";

  useEffect(() => {
    if (isMenuOpen && !isDesktop) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <Flex
      as="header"
      width="100%"
      h={isMobileHorizontal ? "15vh" : "10vh"}
      px={5}
      position="fixed"
      top="0"
      justifyContent="center"
      bgColor={`mode.${colorMode}.background`}
      borderBottom="1px solid"
      borderBottomColor={`mode.${colorMode}.gray`}
      zIndex={10}
    >
      <Box
        w="100%"
        height="105%"
        position="absolute"
        bgColor={`mode.${colorMode}.background`}
        zIndex={1000}
        animation={`${slideToRight} .8s ease-in-out .7s forwards`}
      />
      <Flex
        width="100%"
        maxWidth="1400px"
        justifyContent="space-between"
        alignItems="center"
      >
        <Logo />
        {isHome && (
          <Navigation isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
        )}
        <Menu
          isMenuOpen={isMenuOpen}
          setMenuOpen={setMenuOpen}
          isHome={isHome}
        />
      </Flex>
    </Flex>
  );
};

export default Header;
