import * as React from "react";
import { Flex, IconButton, useColorMode } from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Links = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      zIndex="1000"
      position="fixed"
      bottom={6}
      left="50%"
      transform="translateX(-50%)"
      borderRadius={30}
      bgColor={`mode.${colorMode}.background`}
      color={`mode.${colorMode}.text`}
      px={5}
      shadow="md"
      border="1px solid"
      borderColor={`mode.${colorMode}.gray`}
    >
      <IconButton
        aria-label="github profile"
        icon={<AiFillGithub />}
        mr={1}
        bg="transparent"
        fontSize="30"
        _hover={{
          transform: "translateY(-10%)",
        }}
      />
      <IconButton
        aria-label="linkedin profile"
        icon={<AiFillLinkedin />}
        mr={1}
        bg="transparent"
        fontSize="30"
        _hover={{
          transform: "translateY(-10%)",
        }}
      />
    </Flex>
  );
};

export default Links;
