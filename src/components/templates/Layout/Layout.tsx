import * as React from "react";
import { Box } from "@chakra-ui/react";
import Header from "../../organisms/Header/Header";
import Links from "../../molecules/SocialLinks/SocialLinks";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Box as="main">{children}</Box>
      <Links />
    </>
  );
};

export default Layout;
