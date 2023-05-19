import * as React from "react";
import Layout from "../components/Layout/Layout";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme/theme";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";

const IndexPage = () => {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Home />
        <About />
        <Experience />
      </Layout>
    </ChakraProvider>
  );
};

export const Head = () => <title>Leezon Portfolio</title>;

export default IndexPage;
