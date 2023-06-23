import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Flex, Button, useColorMode, useMediaQuery } from "@chakra-ui/react";
import { CiLight, CiDark } from "react-icons/ci";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import IconButton from "../../atoms/IconButton/IconButton";
import { changeLanguage } from "../../../utils/helpers/helpers";
interface MenuProps {
  isMenuOpen: boolean;
  setMenuOpen: (isOpen: boolean) => void;
  isHome?: boolean;
}

const Menu = ({ isMenuOpen, setMenuOpen, isHome }: MenuProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { i18n, t } = useTranslation();
  const [isDesktop] = useMediaQuery("(min-width: 1000px)");

  const handleChangeLanguage = useCallback(() => {
    changeLanguage(i18n);
  }, [i18n]);

  return (
    <Flex
      alignItems="center"
      justifyContent={isDesktop ? "space-between" : "flex-end"}
      color={`mode.${colorMode}.text`}
    >
      <Button
        p={0}
        bg="transparent"
        fontSize={22}
        onClick={handleChangeLanguage}
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
        isDesktop={isDesktop}
        ariaLabel="change theme"
        icon={colorMode === "dark" ? <CiLight /> : <CiDark />}
        onClick={toggleColorMode}
      />
      <IconButton
        display={isDesktop || !isHome ? "none" : "flex"}
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
