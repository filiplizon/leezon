import React, { useEffect, useRef } from "react";
import {
  Box,
  Flex,
  Link,
  Text,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Heading from "../Heading/Heading";
import DottedSquare from "../DottedSquare/DottedSquare";
import ContactForm from "../Form/Form";
import { lastSingleLetterToNewLine } from "../../utils/helpers";

const Contact: React.FC = () => {
  const [isDesktop] = useMediaQuery("(min-width: 821px)");
  const { colorMode } = useColorMode();
  const { t } = useTranslation();
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const element = textRef.current;
      lastSingleLetterToNewLine(element);
    }
  }, [t]);

  return (
    <Flex
      as="section"
      id={t("contact.id") as string}
      bg={
        isDesktop
          ? `mode.${colorMode}.secondary`
          : `mode.${colorMode}.background`
      }
      color={`mode.${colorMode}.text`}
      minH="90vh"
      pb={"11vh"}
      pt={isDesktop ? "10vh" : "12vh"}
      px={5}
      justifyContent="center"
      alignItems="center"
      position="relative"
      _before={{
        content: '""',
        position: "absolute",
        right: 0,
        top: 0,
        height: "100%",
        width: isDesktop ? "50%" : 0,
        background: `mode.${colorMode}.background`,
      }}
    >
      <Flex flexDirection={isDesktop ? "row" : "column"} maxW="1100px">
        <Flex
          flexDirection="column"
          width={isDesktop ? "50%" : "100%"}
          position="relative"
          pr={10}
          fontFamily="secondary"
        >
          <Heading level="h3" mb={5}>
            {t("contact.heading")}
          </Heading>
          <Text
            ref={textRef}
            dangerouslySetInnerHTML={{
              __html: t("contact.description") as string,
            }}
          />

          <Text mt={5}>
            {t("contact.phone")}
            <Link href="tel:+48600113271" fontWeight={600}>
              {t("contact.number")}
            </Link>
          </Text>
          <Text mb={isDesktop ? 0 : 5}>
            {t("contact.email")}
            <Link href="mailto:filip.lizon1@gmail.com" fontWeight={600}>
              {t("contact.myEmail")}
            </Link>
          </Text>
          {!isDesktop && <Text>{t("contact.fillForm")}</Text>}
          {isDesktop && (
            <DottedSquare
              width="200px"
              height="200px"
              position="relative"
              bottom="-50px"
              right="5px"
            />
          )}
        </Flex>
        <Box
          mt={isDesktop ? 0 : 5}
          ml={isDesktop ? 10 : 0}
          fontFamily="secondary"
          width={isDesktop ? "40%" : "100%"}
        >
          <ContactForm />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Contact;
