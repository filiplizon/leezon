import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Box, Flex, Text, useColorMode, useMediaQuery } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import { useInView } from "react-intersection-observer";
import DottedElement from "../DottedElement/DottedElement";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import { useLastSingleLetterToNewLine } from "../../utils/helpers/hooks";
import { slideFromBottom } from "../../utils/animations";

const About = () => {
  const { colorMode } = useColorMode();
  const { t } = useTranslation();
  const [isDesktop] = useMediaQuery("(min-width: 800px)");

  const [animationRef, inView] = useInView({
    triggerOnce: true,
  });

  const textRef = useRef<HTMLParagraphElement>(null);
  useLastSingleLetterToNewLine(textRef);

  return (
    <Flex
      as="section"
      id={t("about.id") as string}
      minH="100vh"
      px={5}
      pt={isDesktop ? "10vh" : "12vh"}
      pb={10}
      position="relative"
      direction={isDesktop ? "row" : "column"}
      alignItems="center"
      justifyContent="center"
      color={`mode.${colorMode}.text`}
      bgColor={`mode.${colorMode}.background`}
      overflowX="hidden"
    >
      <Flex
        maxWidth="1100px"
        direction={isDesktop ? "row" : "column"}
        alignItems="center"
        justifyContent="space-between"
      >
        <Box
          width={isDesktop ? "270px" : "200px"}
          zIndex={2}
          shadow="lg"
          borderRadius="8%"
        >
          <StaticImage
            src="../../images/portrait.webp"
            alt="portrait"
            placeholder="blurred"
            style={{ borderRadius: "8%" }}
          />
        </Box>
        <Flex
          direction="column"
          ml={isDesktop ? 10 : 0}
          mt={10}
          color={`mode.${colorMode}.text`}
        >
          <Heading level="h3">{t("about.heading")}</Heading>
          <Box ref={animationRef}>
            <Text
              ref={textRef}
              width={isDesktop ? "480px" : "unset"}
              my={5}
              fontSize="sm"
              fontFamily="secondary"
              transform="translateY(50%)"
              animation={
                inView ? `${slideFromBottom} .5s ease-in-out forwards` : "none"
              }
              dangerouslySetInnerHTML={{ __html: t("about.text") as string }}
            />
          </Box>
          <Flex justifyContent={isDesktop ? "unset" : "center"}>
            <Button
              name={t("about.button")}
              href={t("about.cv") as string}
              isLink
              download
              width={isDesktop ? "40%" : "100%"}
              py={2}
            >
              {t("about.button")}
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <DottedElement
        width="200px"
        height="200px"
        position={isDesktop ? "relative" : "absolute"}
        top={isDesktop ? "-180px" : "-25px"}
        left="0"
      />
    </Flex>
  );
};

export default About;
