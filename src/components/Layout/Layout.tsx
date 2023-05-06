import * as React from "react";
import Header from "../Header/Header";
import { Box, Flex } from "@chakra-ui/react";
import Links from "../Links/Links";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Flex backgroundColor="black" minHeight="100vh" flexDirection="column">
      <Header />
      <Box w="100%" marginX="auto">
        <main>{children}</main>
      </Box>
      <Links />
    </Flex>
  );
};

export default Layout;
