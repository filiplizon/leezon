import * as React from "react";
import { useTranslation } from "react-i18next";
import { Flex, Box, useColorMode, useMediaQuery } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import { TypeAnimation } from "react-type-animation";
import Heading from "../../atoms/Heading/Heading";
import Circle from "../../atoms/Circle/Circle";

const Home = () => {
  const { colorMode } = useColorMode();
  const { t } = useTranslation();
  const [isDesktop] = useMediaQuery("(min-width: 700px)");
  const [isSmallerThan1100] = useMediaQuery("(max-width: 1100px)");
  const [isMobileHorizontal] = useMediaQuery(
    "screen and (max-width: 950px) and (orientation: landscape)"
  );
  const circleSizes = isDesktop ? [500, 700, 900, 1100] : [250, 350, 450, 550];

  return (
    <Flex
      as="section"
      id="home"
      minH="100vh"
      pt={isDesktop ? 5 : isMobileHorizontal ? 0 : 10}
      px={2}
      direction="column"
      alignItems="center"
      justifyContent="center"
      bgColor={`mode.${colorMode}.background`}
      fontFamily="secondary"
      textTransform="uppercase"
      overflow={isDesktop ? (isSmallerThan1100 ? "hidden" : "unset") : "hidden"}
    >
      <Box
        h={isMobileHorizontal ? 100 : 150}
        w={isMobileHorizontal ? 100 : 150}
        mb={5}
        mt={10}
        position="relative"
      >
        {circleSizes.map((size, index) => (
          <Circle key={index} size={size} index={index} />
        ))}
        <StaticImage
          src="../../../images/avatar.webp"
          alt="avatar"
          style={{ borderRadius: "50%" }}
        />
      </Box>
      <TypeAnimation
        wrapper="h1"
        sequence={[
          t("home.position.frontend") as string,
          2000,
          t("home.position.react") as string,
          2000,
          t("home.position.javascript") as string,
          2000,
        ]}
        speed={50}
        style={{
          display: "inline-block",
          color: `mode.${colorMode}.text`,
          fontSize: 20,
          letterSpacing: 4,
          fontWeight: 400,
        }}
        repeat={Infinity}
      />
      <Heading level="h2" letterSpacing={3} fontSize={isDesktop ? 55 : 50}>
        {t("home.name")}
      </Heading>
    </Flex>
  );
};

export default Home;
