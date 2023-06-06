import * as React from "react";
import { useState } from "react";
import { Flex, Box, useColorMode } from "@chakra-ui/react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Menu from "../Menu/Menu";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { colorMode } = useColorMode();
  return (
    <Box
      bgColor={`mode.${colorMode}.background`}
      borderBottom="1px solid"
      borderBottomColor={`mode.${colorMode}.gray`}
      position="fixed"
      top="0"
      width="100%"
      zIndex={10}
      px={5}
    >
      <Flex
        justifyContent="space-between"
        h="10vh"
        alignItems="center"
        maxWidth="1400px"
        mx="auto"
      >
        <Logo />
        <Navigation isMenuOpen={isMenuOpen} />
        <Menu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
      </Flex>
    </Box>
  );
};

export default Header;
