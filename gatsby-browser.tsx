import * as React from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18";
import theme from "./src/styles/theme";
import "./src/styles/global.css";
import Layout from "./src/components/templates/Layout/Layout";

export const wrapPageElement = ({ element }) => (
  <ChakraProvider resetCSS theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <I18nextProvider i18n={i18n}>
      <Layout>{element}</Layout>
    </I18nextProvider>
  </ChakraProvider>
);
