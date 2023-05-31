import React from "react";
import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import Heading from "../Heading/Heading";
import DottedSquare from "../DottedSquare/DottedSquare";
import ContactForm from "../Form/Form";

const Contact: React.FC = () => {
  const [isDesktop] = useMediaQuery("(min-width: 700px)");

  return (
    <Flex
      bg="dark"
      id="contact"
      color="white"
      minH="90vh"
      pb={isDesktop ? 10 : "10vh"}
      pt="12vh"
      px={5}
      justifyContent="center"
      position="relative"
      _before={{
        content: '""',
        position: "absolute",
        right: 0,
        top: 0,
        height: "100%",
        width: isDesktop ? "50%" : 0,
        background: "lightdark",
      }}
    >
      <Flex flexDirection={isDesktop ? "row" : "column"} maxW="1100px">
        <Flex
          flexDirection="column"
          width={isDesktop ? "50%" : "100%"}
          position="relative"
          pr={10}
        >
          <Heading level="h3" mb={5}>
            Get in touch.
          </Heading>
          <Text fontFamily="secondary">
            Are you looking for an valuable employee or want to create your own
            website / application and need my help? Feel free to contact me.
          </Text>
          {isDesktop && (
            <DottedSquare
              width="200px"
              height="200px"
              position="relative"
              bottom="-50px"
            />
          )}
        </Flex>
        <Box
          mt={isDesktop ? 0 : 10}
          ml={isDesktop ? 10 : 0}
          fontFamily="secondary"
          width={isDesktop ? "40%" : "100%"}
        >
          <ContactForm />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Contact;
