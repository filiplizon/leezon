import React from "react";
import { Helmet } from "react-helmet";
export { wrapPageElement } from "./gatsby-browser";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <Helmet key="fonts">
      <link
        rel="preload"
        href="/fonts/Karla.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
        key="karlaFont"
      />
      <link
        rel="preload"
        href="/fonts/Prompt.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
        key="promptFont"
      />
    </Helmet>,
  ]);
};
