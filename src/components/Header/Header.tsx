import * as React from "react";
import {
  Flex,
  IconButton,
  Box,
  useMediaQuery,
  useColorMode,
} from "@chakra-ui/react";
import Logo from "../Logo/Logo";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import Navigation from "../Navigation/Navigation";
import Menu from "../Menu/Menu";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDesktop] = useMediaQuery("(min-width: 900px)");
  const { colorMode } = useColorMode();
  return (
    <Box
      bgColor={`mode.${colorMode}.background`}
      borderBottom="1px solid"
      borderBottomColor={`mode.${colorMode}.gray`}
      position="fixed"
      top="0"
      width="100%"
      zIndex={1000}
      px={5}
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        maxWidth="1400px"
        mx="auto"
        h="10vh"
      >
        <Logo />
        <Navigation isMenuOpen={isMenuOpen} />
        <Flex
          alignItems="center"
          justifyContent={isDesktop ? "space-between" : "flex-end"}
          flexDirection={isDesktop ? "row-reverse" : "row"}
        >
          <Menu />
          <IconButton
            display={isDesktop ? "none" : "block"}
            ml={2}
            aria-label="expand menu"
            icon={<HiOutlineMenuAlt3 />}
            fontSize="30"
            onClick={() => {
              setMenuOpen(!isMenuOpen);
            }}
            bg="transparent"
            transform={isMenuOpen ? "rotateZ(0deg)" : "rotateZ(180deg)"}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
