import * as React from "react";
import { Flex, Image, Text, useColorMode } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import portraitImage from "../../images/portrait.jpg";
import DottedSquare from "../DottedSquare/DottedSquare";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";

const About = () => {
  const [isDesktop] = useMediaQuery("(min-width: 700px)");
  const { colorMode } = useColorMode();

  return (
    <Flex
      id="about"
      color={`mode.${colorMode}.text`}
      minH={isDesktop ? "100vh" : "100vh"}
      flexDirection={isDesktop ? "row" : "column"}
      alignItems="center"
      justifyContent="center"
      bgColor={`mode.${colorMode}.background`}
      overflowX="hidden"
      position="relative"
      px={5}
      pt="12vh"
      pb={isDesktop ? 0 : 24}
    >
      <Flex
        maxWidth="1100px"
        direction={isDesktop ? "row" : "column"}
        alignItems="center"
        justifyContent="space-between"
      >
        <Image
          src={portraitImage}
          alt="portrait"
          borderRadius="8%"
          width={isDesktop ? "320px" : "200px"}
          zIndex={2}
          shadow="lg"
        />
        <Flex
          direction="column"
          color={`mode.${colorMode}.text`}
          ml={isDesktop ? 20 : 0}
          mt={10}
        >
          <Heading color={`mode.${colorMode}.text`} level="h3">
            About me
          </Heading>
          <Text
            fontSize="sm"
            my={5}
            width={isDesktop ? "500px" : "unset"}
            fontFamily="secondary"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            reprehenderit cupiditate necessitatibus repellat distinctio, totam,
            sapiente cumque nulla nesciunt voluptatibus temporibus quas quae
            earum fuga similique dolor. Placeat possimus hic accusamus nobis cum
            a enim dolorem repellendus maxime nemo corrupti vel ab facilis
            error, est vitae ad! Nam illo dolor laborum magnam, eius, eligendi
            doloremque ut
          </Text>
          <Flex justifyContent={isDesktop ? "unset" : "center"}>
            <Button width={isDesktop ? "40%" : "100%"}>Download resume</Button>
          </Flex>
        </Flex>
      </Flex>
      <DottedSquare
        position={isDesktop ? "relative" : "absolute"}
        top={isDesktop ? "-160px" : "-25px"}
        left="0"
        width="200px"
        height="200px"
      />
    </Flex>
  );
};

export default About;
