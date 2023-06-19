import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";
import { useTranslation } from "react-i18next";
import { Flex, Text, useColorMode } from "@chakra-ui/react";

const NotFoundPage: React.FC<PageProps> = () => {
  const { t } = useTranslation();
  const { colorMode } = useColorMode();

  return (
    <>
      <Flex
        as="section"
        minH="100vh"
        direction="column"
        alignItems="center"
        justifyContent="center"
        bgColor={`mode.${colorMode}.background`}
        color={`mode.${colorMode}.text`}
        position="relative"
      >
        <Text fontSize={50} fontWeight="bold">
          {t("404.404")}
        </Text>
        <Text fontSize="2xl" textTransform="uppercase" fontWeight="bold" my={5}>
          {t("404.message")}
        </Text>
        <Text
          textTransform="uppercase"
          transition=".2s"
          borderBottom="1px solid transparent"
          _hover={{ borderBottomColor: `mode.${colorMode}.text` }}
        >
          <Link to="/">{t("404.home")}</Link>
        </Text>
      </Flex>
    </>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
