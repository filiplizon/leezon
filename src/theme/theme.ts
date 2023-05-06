import { extendTheme } from "@chakra-ui/react";
const theme = {
  colors: {
    dark: "#292929",
    gray: "#868786",
    lightgrey: "#898989",
    white: "#FFFFFF",
  },
  fonts: {
    primary: `'Prompt', sans-serif`,
    secondary: `'Karla', sans-serif`,
  },
};

export default extendTheme(theme); // or extendBaseTheme
