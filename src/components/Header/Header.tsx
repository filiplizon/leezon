import * as React from "react";
import { Flex, IconButton, Box, useMediaQuery } from "@chakra-ui/react";
import Logo from "../Logo/Logo";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import Navigation from "../Navigation/Navigation";
import Menu from "../Menu/Menu";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDesktop] = useMediaQuery("(min-width: 900px)");
  return (
    <Box
      color="white"
      bgColor="transparent"
      p={5}
      h="10vh"
      position="fixed"
      top="0"
      width="100%"
      zIndex={1000}
    >
      <Flex justifyContent="space-between" maxWidth="1400px" mx="auto">
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
            transform={isMenuOpen ? "rotateZ(0deg)" : "rotateZ(180deg)"}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
