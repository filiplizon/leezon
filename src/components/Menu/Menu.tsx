import * as React from "react";
import { Flex, Button, useColorMode, useMediaQuery } from "@chakra-ui/react";
import { CiLight, CiDark } from "react-icons/ci";
import { useTranslation } from "react-i18next";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import IconButton from "../IconButton/IconButton";

interface MenuProps {
  isMenuOpen: boolean;
  setMenuOpen: (isOpen: boolean) => void;
}

const Menu = ({ isMenuOpen, setMenuOpen }: MenuProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { i18n, t } = useTranslation();
  const [isDesktop] = useMediaQuery("(min-width: 1000px)");

  const changeLanguage = () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === "en" ? "pl" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <Flex
      color={`mode.${colorMode}.text`}
      alignItems="center"
      justifyContent={isDesktop ? "space-between" : "flex-end"}
    >
      <Button
        p={0}
        bg="transparent"
        fontSize={22}
        onClick={changeLanguage}
        _hover={{
          transform: isDesktop ? "translateY(-10%)" : "none",
        }}
        _active={{
          bg: "transparent",
        }}
      >
        {t("changeLanguageButton")}
      </Button>
      <IconButton
        ariaLabel="change theme"
        icon={colorMode === "dark" ? <CiLight /> : <CiDark />}
        onClick={toggleColorMode}
        isDesktop={isDesktop}
      />
      <IconButton
        display={isDesktop ? "none" : "flex"}
        ariaLabel="expand menu"
        icon={<HiOutlineMenuAlt3 />}
        onClick={() => {
          setMenuOpen(!isMenuOpen);
        }}
      />
    </Flex>
  );
};

export default Menu;
