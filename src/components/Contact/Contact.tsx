import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  Flex,
  Link,
  Text,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import Heading from "../Heading/Heading";
import DottedElement from "../DottedElement/DottedElement";
import ContactForm from "../Form/Form";
import { useLastSingleLetterToNewLine } from "../../utils/helpers/hooks";

const Contact: React.FC = () => {
  const { colorMode } = useColorMode();
  const { t } = useTranslation();
  const [isDesktop] = useMediaQuery("(min-width: 821px)");

  const textRef = useRef<HTMLParagraphElement>(null);
  useLastSingleLetterToNewLine(textRef);

  return (
    <Flex
      as="section"
      id={t("contact.id") as string}
      minH="90vh"
      pt={isDesktop ? "10vh" : "12vh"}
      pb={"11vh"}
      px={5}
      position="relative"
      justifyContent="center"
      alignItems="center"
      bg={
        isDesktop
          ? `mode.${colorMode}.secondary`
          : `mode.${colorMode}.background`
      }
      color={`mode.${colorMode}.text`}
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
      <Flex direction={isDesktop ? "row" : "column"} maxW="1100px">
        <Flex
          width={isDesktop ? "50%" : "100%"}
          position="relative"
          pr={10}
          direction="column"
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
            <DottedElement
              width="200px"
              height="200px"
              position="relative"
              bottom="-50px"
              right="5px"
            />
          )}
        </Flex>
        <Box
          width={isDesktop ? "40%" : "100%"}
          mt={isDesktop ? 0 : 5}
          ml={isDesktop ? 10 : 0}
          fontFamily="secondary"
        >
          <ContactForm />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Contact;
