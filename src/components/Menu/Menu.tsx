import * as React from "react";
import { IconButton, Flex, Button } from "@chakra-ui/react";
import { CiLight } from "react-icons/ci";

const Menu = () => {
  return (
    <Flex>
      <Button
        _hover={{
          transform: "translateY(-10%)",
        }}
        p={0}
        cursor="pointer"
        fontSize={20}
      >
        PL
      </Button>
      <IconButton
        aria-label="change theme"
        icon={<CiLight />}
        fontSize="32"
        cursor="pointer"
        _hover={{
          transform: "translateY(-10%)",
        }}
      />
    </Flex>
  );
};

export default Menu;
