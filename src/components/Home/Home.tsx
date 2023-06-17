import * as React from "react";
import {
  Flex,
  Box,
  Image,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import Heading from "../Heading/Heading";
import { useTranslation } from "react-i18next";
import { TypeAnimation } from "react-type-animation";
import { scaleAnimation } from "../../utils/animations";
import avatar from "../../images/avatar.webp";
import { StaticImage } from "gatsby-plugin-image";

const Home = () => {
  const [isDesktop] = useMediaQuery("(min-width: 700px)");
  const [isSmallerThan1100] = useMediaQuery("(max-width: 1100px)");
  const [isMobileHorizontal] = useMediaQuery(
    "screen and (max-width: 950px) and (orientation: landscape)"
  );
  const sizes = isDesktop ? [500, 700, 900, 1100] : [250, 350, 450, 550];
  const { colorMode } = useColorMode();
  const { t } = useTranslation();

  const circleStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) scale(0)",
    border: "1px solid",
    borderColor: `mode.${colorMode}.gray`,
    borderRadius: "50%",
    zIndex: 1,
  };

  return (
    <Flex
      as="section"
      id="home"
      minH="100vh"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textTransform="uppercase"
      bgColor={`mode.${colorMode}.background`}
      overflow={isDesktop ? (isSmallerThan1100 ? "hidden" : "unset") : "hidden"}
      pt={isDesktop ? 5 : isMobileHorizontal ? 0 : 10}
      px={2}
      fontFamily="secondary"
    >
      <Box
        mb={5}
        mt={10}
        position="relative"
        h={isMobileHorizontal ? 100 : 150}
        w={isMobileHorizontal ? 100 : 150}
      >
        {sizes.map((size, index) => (
          <Box
            key={index}
            sx={{
              ...circleStyle,
              width: `${size}px`,
              height: `${size}px`,
              opacity: `${0.5 + index * 0.1}`,
              animation: `${scaleAnimation} 1s ease-in-out ${
                index * 0.4
              }s forwards`,
            }}
          ></Box>
        ))}
        <StaticImage
          src="../../images/avatar.webp"
          alt="avatar"
          style={{ borderRadius: "50%" }}
        />
      </Box>
      <TypeAnimation
        sequence={[
          t("home.position.frontend") as string,
          2000,
          t("home.position.react") as string,
          2000,
          t("home.position.javascript") as string,
          2000,
        ]}
        wrapper="h2"
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
      <Heading
        level="h1"
        letterSpacing={3}
        fontSize={isDesktop ? 55 : 50}
        color={`mode.${colorMode}.text`}
      >
        {t("home.name")}
      </Heading>
    </Flex>
  );
};

export default Home;
