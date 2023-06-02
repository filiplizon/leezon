import * as React from "react";
import Layout from "../components/Layout/Layout";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "../theme/theme";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";

const IndexPage = () => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Layout>
        <Home />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </Layout>
    </ChakraProvider>
  );
};

export const Head = () => <title>Leezon Portfolio</title>;

export default IndexPage;
