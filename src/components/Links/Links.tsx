import * as React from "react";
import { Flex, IconButton } from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Links = () => {
  const lineStyle = {
    content: `""`,
    position: "absolute",
    width: "100px",
    height: "2px",
    top: "50%",
    transform: "translateY(-50%)",
    bg: "white",
    zIndex: "0",
  };

  return (
    <Flex
      zIndex="1000"
      position="fixed"
      bottom={6}
      left="50%"
      transform="translateX(-50%)"
      // _before={{ ...lineStyle, left: "-80%" }}
      // _after={{ ...lineStyle, right: "-80%" }}
      borderRadius={30}
      bg="dark"
      color="white"
      px={5}
      shadow="md"
    >
      <IconButton
        aria-label="github profile"
        icon={<AiFillGithub />}
        mr={1}
        fontSize="30"
        _hover={{
          transform: "translateY(-10%)",
        }}
      />
      <IconButton
        aria-label="linkedin profile"
        icon={<AiFillLinkedin />}
        mr={1}
        fontSize="30"
        _hover={{
          transform: "translateY(-10%)",
        }}
      />
    </Flex>
  );
};

export default Links;
