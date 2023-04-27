import * as React from "react";
import Header from "../Header/Header";
import { Box, Flex } from "@chakra-ui/react";

interface LayoutProps {
  pageTitle: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
  return (
    <Flex backgroundColor="dark" minHeight="100vh" flexDirection="column">
      <Header />
      <Box w="100%" maxWidth="1400px">
        <main>
          <h1>{pageTitle}</h1>
          {children}
        </main>
      </Box>
    </Flex>
  );
};

export default Layout;
