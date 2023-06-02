import * as React from "react";
import { IconButton, Flex, Button, useColorMode } from "@chakra-ui/react";
import { CiLight, CiDark } from "react-icons/ci";
import { useTranslation } from "react-i18next";

const Menu = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { i18n, t } = useTranslation();

  const changeLanguage = () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === "en" ? "pl" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <Flex color={`mode.${colorMode}.text`}>
      <Button
        _hover={{
          transform: "translateY(-10%)",
        }}
        p={0}
        cursor="pointer"
        bg="transparent"
        fontSize={20}
        onClick={changeLanguage}
      >
        {t("changeLanguageButton")}
      </Button>
      <IconButton
        aria-label="change theme"
        icon={colorMode === "dark" ? <CiLight /> : <CiDark />}
        fontSize="32"
        cursor="pointer"
        bg="transparent"
        _hover={{
          transform: "translateY(-10%)",
        }}
        onClick={toggleColorMode}
      />
    </Flex>
  );
};

export default Menu;
