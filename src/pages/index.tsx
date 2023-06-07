import * as React from "react";
import Layout from "../components/Layout/Layout";
import { CSSReset, ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "../theme/theme";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18";

const IndexPage = () => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <I18nextProvider i18n={i18n}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Layout>
          <Home />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </Layout>
      </I18nextProvider>
    </ChakraProvider>
  );
};

export const Head = () => <title>Leezon Portfolio</title>;

export default IndexPage;
