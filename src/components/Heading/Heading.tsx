import * as React from "react";
import { Heading as ChakraHeading } from "@chakra-ui/react";

interface HeadingProps {
  children: React.ReactNode;
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  letterSpacing?: number;
  fontFamily?: string;
  color?: string;
  fontSize?: number | string;
  fontWeight?: number;
  mb?: number;
}

const Heading = ({
  children,
  level,
  letterSpacing,
  fontFamily = "primary",
  color = "white",
  fontSize,
  fontWeight,
  mb,
}: HeadingProps) => {
  return (
    <ChakraHeading
      as={level}
      fontFamily={fontFamily}
      letterSpacing={letterSpacing}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      mb={mb}
    >
      {children}
    </ChakraHeading>
  );
};

export default Heading;
