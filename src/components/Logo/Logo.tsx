import * as React from "react";
import { Box } from "@chakra-ui/react";
import { Link } from "gatsby";

const Logo = () => {
  return (
    <Box color="white" fontWeight={600} fontSize="30" fontFamily="secondary">
      <Link to="/">Leezon</Link>
    </Box>
  );
};

export default Logo;
