import * as React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { HeadFC, Link, PageProps } from "gatsby";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <>
      <Flex
        as="section"
        minH="100vh"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Text fontSize={50} fontWeight="bold">
          404
        </Text>
        <Text fontSize="2xl" fontWeight="bold" my={5}>
          PAGE NOT FOUND
        </Text>
        <Text
          transition=".2s"
          borderBottom="1px solid transparent"
          _hover={{ borderBottomColor: "black" }}
        >
          <Link to="/">GO BACK HOME</Link>
        </Text>
      </Flex>
    </>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
