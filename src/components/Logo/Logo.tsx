import * as React from "react";
import { Box, useColorMode } from "@chakra-ui/react";
import { Link } from "gatsby";

const Logo = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      color={`mode.${colorMode}.text`}
      fontWeight={600}
      fontSize="30"
      fontFamily="secondary"
    >
      <Link to="/">Leezon</Link>
    </Box>
  );
};

export default Logo;
