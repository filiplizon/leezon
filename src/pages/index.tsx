import * as React from "react";
import Layout from "../components/Layout/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { ChakraProvider } from "@chakra-ui/react";

import { Text } from "@chakra-ui/react";
import theme from "../theme/theme";

const IndexPage = () => {
  return (
    <ChakraProvider theme={theme}>
      <Layout pageTitle="Home Page">
        <Text fontFamily="heading">
          I'm making this by following the Gatsby Tutorial.
        </Text>
      </Layout>
    </ChakraProvider>
  );
};

export const Head = () => <title>Leezon Portfolio</title>;

export default IndexPage;
