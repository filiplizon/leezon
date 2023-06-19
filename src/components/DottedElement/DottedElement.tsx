import * as React from "react";
import { Box } from "@chakra-ui/react";
import theme from "../../styles/theme";

interface DottedElementProps {
  width?: string;
  height?: string;
  position?: "absolute" | "relative";
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

const DottedElement = ({
  width,
  height,
  position = "absolute",
  top,
  left,
  right,
  bottom,
}: DottedElementProps) => {
  const dotColor = theme.colors.mode.dark.gray;

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
        background: `radial-gradient(${dotColor} 15%, transparent 15%)`,
        backgroundSize: "20px 20px",
        opacity: "0.3",
      }}
    />
  );
};

export default DottedElement;
