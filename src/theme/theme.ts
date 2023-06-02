import { extendTheme } from "@chakra-ui/react";

const colors = {
  mode: {
    dark: {
      background: "#1F1F1F",
      secondary: "#2F2F2F",
      gray: "#868786",
      text: "#FFFFFF",
    },
    light: {
      background: "#fafafa",
      secondary: "#EEEEEE",
      gray: "#AEAEAE",
      text: "#1F1F1F",
    },
  },
};

const fonts = {
  primary: `'Prompt', sans-serif`,
  secondary: `'Karla', sans-serif`,
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  colors,
  fonts,
  config,
});

export default theme;
