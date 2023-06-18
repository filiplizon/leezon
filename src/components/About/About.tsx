import React, { useEffect, useRef } from "react";
import { Box, Flex, Text, useColorMode, useMediaQuery } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import DottedSquare from "../DottedSquare/DottedSquare";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import { useInView } from "react-intersection-observer";
import { slideFromBottom } from "../../utils/animations";
import { StaticImage } from "gatsby-plugin-image";
import { lastSingleLetterToNewLine } from "../../utils/helpers";

const About = () => {
  const [isDesktop] = useMediaQuery("(min-width: 800px)");
  const { colorMode } = useColorMode();
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
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
      id={t("about.id") as string}
      color={`mode.${colorMode}.text`}
      minH="100vh"
      flexDirection={isDesktop ? "row" : "column"}
      alignItems="center"
      justifyContent="center"
      bgColor={`mode.${colorMode}.background`}
      overflowX="hidden"
      position="relative"
      px={5}
      pt={isDesktop ? "10vh" : "12vh"}
      pb={10}
    >
      <Flex
        maxWidth="1100px"
        direction={isDesktop ? "row" : "column"}
        alignItems="center"
        justifyContent="space-between"
      >
        <Box
          width={isDesktop ? "270px" : "200px"}
          height="auto"
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
          color={`mode.${colorMode}.text`}
          ml={isDesktop ? 10 : 0}
          mt={10}
        >
          <Heading color={`mode.${colorMode}.text`} level="h3">
            {t("about.heading")}
          </Heading>
          <Box ref={ref}>
            <Text
              ref={textRef}
              fontSize="sm"
              my={5}
              width={isDesktop ? "480px" : "unset"}
              fontFamily="secondary"
              transform="translateY(-50%)"
              animation={
                inView ? `${slideFromBottom} .5s ease-in-out forwards` : "none"
              }
              dangerouslySetInnerHTML={{ __html: t("about.text") as string }}
            />
          </Box>
          <Flex justifyContent={isDesktop ? "unset" : "center"}>
            <Button
              name={t("about.button")}
              isLink
              py={2}
              href={t("about.cv") as string}
              download
              width={isDesktop ? "40%" : "100%"}
            >
              {t("about.button")}
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <DottedSquare
        position={isDesktop ? "relative" : "absolute"}
        top={isDesktop ? "-180px" : "-25px"}
        left="0"
        width="200px"
        height="200px"
      />
    </Flex>
  );
};

export default About;
