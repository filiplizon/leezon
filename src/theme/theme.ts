import { extendTheme } from "@chakra-ui/react";
const theme = {
  colors: {
    dark: "#1F1F1F",
    lightdark: "#262626",
    gray: "#868786",
    lightgray: "#898989",
    white: "#FFFFFF",
  },
  fonts: {
    primary: `'Prompt', sans-serif`,
    secondary: `'Karla', sans-serif`,
  },
};

export default extendTheme(theme); // or extendBaseTheme
