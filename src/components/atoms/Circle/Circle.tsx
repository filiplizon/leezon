import React from "react";
import { Box, useColorMode } from "@chakra-ui/react";
import { scaleAnimation } from "../../../utils/animations";

interface CircleProps {
  size: number;
  index: number;
}

const Circle = ({ size, index }: CircleProps) => {
  const { colorMode } = useColorMode();

  const circleStyle = {
    width: `${size}px`,
    height: `${size}px`,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) scale(0)",
    border: "1px solid",
    borderColor: `mode.${colorMode}.gray`,
    borderRadius: "50%",
    zIndex: 1,
    opacity: `${0.5 + index * 0.1}`,
    animation: `${scaleAnimation} 1s ease-in-out ${index * 0.4}s forwards`,
  };

  return <Box sx={circleStyle}></Box>;
};

export default Circle;
