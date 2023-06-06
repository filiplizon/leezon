import * as React from "react";
import { Link } from "gatsby";
import { Box, useColorMode } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const Logo = () => {
  const { colorMode } = useColorMode();
  const { t } = useTranslation();
  return (
    <Box
      color={`mode.${colorMode}.text`}
      fontWeight={600}
      fontSize="30"
      fontFamily="secondary"
    >
      <Link to="/">{t("logo")}</Link>
    </Box>
  );
};

export default Logo;
