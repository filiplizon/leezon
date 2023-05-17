import * as React from "react";
import { Box } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";

const DottedSquare = () => {
  const [isDesktop] = useMediaQuery("(min-width: 700px)");

  return (
    <Box
      w="200px"
      h="200px"
      position={isDesktop ? "relative" : "absolute"}
      top={isDesktop ? "-160px" : "-20px"}
      left="0"
      bg="transparent"
      zIndex={1}
      _before={{
        content: '""',
        position: "absolute",
        height: "100%",
        width: "100%",
        background: "radial-gradient(lightgray 15%, transparent 15%)",
        backgroundSize: "20px 20px",
        opacity: "0.3",
      }}
    />
  );
};

export default DottedSquare;
