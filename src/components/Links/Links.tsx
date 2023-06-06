import * as React from "react";
import { Box, Flex, useColorMode, useMediaQuery } from "@chakra-ui/react";
import { Link } from "gatsby";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Links = () => {
  const [isDesktop] = useMediaQuery("(min-width: 900px)");
  const { colorMode } = useColorMode();

  return (
    <Flex
      zIndex="1000"
      position="fixed"
      bottom={6}
      left="50%"
      transform="translateX(-50%)"
      justifyContent="space-around"
      borderRadius={30}
      bgColor={`mode.${colorMode}.background`}
      color={`mode.${colorMode}.text`}
      px={5}
      py={1}
      shadow="md"
      border="1px solid"
      borderColor={`mode.${colorMode}.gray`}
    >
      <Link to="https://github.com/filiplizon" target="_blank">
        <Box
          mr={3}
          fontSize={isDesktop ? 30 : 35}
          transition="transform 0.2s"
          _hover={{
            transform: "translateY(-10%)",
          }}
        >
          <AiFillGithub />
        </Box>
      </Link>
      <Link to="https://www.linkedin.com/in/filip-lizon/" target="_blank">
        <Box
          fontSize={isDesktop ? 30 : 35}
          transition="transform 0.2s"
          _hover={{
            transform: "translateY(-10%)",
          }}
        >
          <AiFillLinkedin />
        </Box>
      </Link>
    </Flex>
  );
};

export default Links;
