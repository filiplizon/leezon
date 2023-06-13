import * as React from "react";
import { useState, useEffect } from "react";
import { Box, Flex, useColorMode, useMediaQuery } from "@chakra-ui/react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Menu from "../Menu/Menu";
import { slideToRight } from "../../utils/animations";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { colorMode } = useColorMode();
  const [isMobileHorizontal] = useMediaQuery(
    "screen and (max-width: 950px) and (orientation: landscape)"
  );

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isMenuOpen]);

  return (
    <Flex
      as="header"
      bgColor={`mode.${colorMode}.background`}
      borderBottom="1px solid"
      borderBottomColor={`mode.${colorMode}.gray`}
      position="fixed"
      top="0"
      width="100%"
      zIndex={10}
      px={5}
      h={isMobileHorizontal ? "15vh" : "10vh"}
      justifyContent="center"
    >
      <Box
        w="100%"
        height="110%"
        position="absolute"
        bgColor={`mode.${colorMode}.background`}
        zIndex={1000}
        animation={`${slideToRight} .8s ease-in-out .7s forwards`}
      ></Box>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        maxWidth="1400px"
        width="100%"
      >
        <Logo />
        <Navigation isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
        <Menu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
      </Flex>
    </Flex>
  );
};

export default Header;
