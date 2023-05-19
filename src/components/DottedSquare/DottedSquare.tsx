import * as React from "react";
import { Box } from "@chakra-ui/react";
interface DottedSquareProps {
  position?: "absolute" | "relative";
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  width?: string;
  height?: string;
}

const DottedSquare = ({
  position = "absolute",
  top,
  left,
  right,
  bottom,
  width,
  height,
}: DottedSquareProps) => {
  return (
    <Box
      w={width}
      h={height}
      position={position}
      top={top}
      left={left}
      right={right}
      bottom={bottom}
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
