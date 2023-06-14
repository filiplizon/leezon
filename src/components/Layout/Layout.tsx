import * as React from "react";
import { useEffect, useRef } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Header from "../Header/Header";
import Links from "../Links/Links";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isScrollBehaviorSetRef = useRef(false);

  useEffect(() => {
    if (!isScrollBehaviorSetRef.current) {
      document.documentElement.style.scrollBehavior = "smooth";
      isScrollBehaviorSetRef.current = true;
    }
  }, []);

  return (
    <Flex flexDirection="column">
      <Header />
      <Box w="100%" marginX="auto" as="main">
        {children}
      </Box>
      <Links />
    </Flex>
  );
};

export default Layout;
