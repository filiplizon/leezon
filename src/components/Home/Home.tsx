import * as React from "react";
import { Flex, Box, Image, useColorMode } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import Heading from "../Heading/Heading";

const Home = () => {
  const [isDesktop] = useMediaQuery("(min-width: 700px)");
  const sizes = isDesktop ? [500, 700, 900, 1100] : [250, 350, 450, 550];
  const { colorMode } = useColorMode();
  const circleStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    border: "1px solid",
    borderColor: `mode.${colorMode}.gray`,
    borderRadius: "50%",
    zIndex: "1",
  };
  return (
    <Flex
      id="home"
      height="100vh"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textTransform="uppercase"
      bgColor={`mode.${colorMode}.background`}
      overflow={isDesktop ? "unset" : "hidden"}
      mt={10}
    >
      <Box h={150} w={150} mb={5} mt={10} position="relative">
        {sizes.map((size, index) => (
          <Box
            key={index}
            sx={{
              ...circleStyle,
              width: `${size}px`,
              height: `${size}px`,
              opacity: `${0.3 + index * 0.1}`,
            }}
          ></Box>
        ))}
        <Image
          src="https://avatars.githubusercontent.com/u/71847286?s=400&u=2a252326a2369812cf5d04f4d025557981528117&v=4"
          alt="portrait"
          objectFit="cover"
          borderRadius="50%"
          zIndex={2}
          position="relative"
        />
      </Box>
      <Heading
        level="h2"
        fontFamily="secondary"
        color={`mode.${colorMode}.gray`}
        fontSize={20}
        letterSpacing={isDesktop ? 6 : 4}
        fontWeight={400}
      >
        Frontend Developer
      </Heading>
      <Heading
        level="h1"
        letterSpacing={3}
        fontSize={isDesktop ? 55 : 50}
        color={`mode.${colorMode}.text`}
      >
        Filip Lizoń
      </Heading>
    </Flex>
  );
};

export default Home;
